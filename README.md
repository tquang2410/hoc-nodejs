# Hướng dẫn luồng chạy & liên kết các file trong project Node.js

## 1. Khởi động server
- File chính: `src/server.js`
- Nạp biến môi trường từ `.env`.
- Cấu hình view engine (EJS) và static files.
- Sử dụng router từ `src/routes/web.js`.
- Lắng nghe port từ `.env` hoặc mặc định 3000.

## 2. Định tuyến (Routing)
- File: `src/routes/web.js`
- Định nghĩa các route:
  - `/` → `getHomePage` (hiển thị danh sách users)
  - `/about` → `getAboutPage`
  - `/contact` → `getContactPage`
  - `/create` → `getCreatePage` (form tạo user)
  - `/create-user` (POST) → `postCreateUser` (xử lý tạo user)
- Các route này gọi tới các hàm controller tương ứng trong `src/controllers/homeController.js`.

## 3. Controller
- File: `src/controllers/homeController.js`
- Chức năng:
  - Xử lý logic cho từng route.
  - Gọi tới service để thao tác database (nếu cần).
  - Render view (EJS) và truyền dữ liệu cho view.
- Ví dụ:
  - `getHomePage`: Gọi `getAllUsers` từ service, render `home.ejs` với biến `listUsers`.
  - `postCreateUser`: Lấy dữ liệu từ form, gọi query insert vào database.

## 4. Service (CRUD)
- File: `src/services/CRUDService.js`
- Chứa các hàm thao tác trực tiếp với database (MySQL).
- Sử dụng async/await với `getConnection` từ `database.js`.
- Ví dụ: `getAllUsers` lấy danh sách users từ bảng `Users`.

## 5. Kết nối Database
- File: `src/config/database.js`
- Dùng `mysql2/promise` để tạo kết nối MySQL.
- Export hàm async `getConnection()` để lấy connection mới mỗi lần truy vấn.

## 6. Cấu hình View Engine
- File: `src/config/viewEngine.js`
- Cấu hình thư mục views, view engine (EJS), và static files (CSS, JS, images).

## 7. View (Giao diện)
- Thư mục: `src/views/`
- Các file `.ejs` là template giao diện, nhận dữ liệu từ controller để hiển thị.
- Ví dụ: `home.ejs` hiển thị danh sách users.

---

## **Luồng chạy tổng quát**
1. Người dùng truy cập một route (ví dụ `/`).
2. Express gọi hàm controller tương ứng (`getHomePage`).
3. Controller gọi service (`getAllUsers`) để lấy dữ liệu từ database.
4. Service lấy connection, truy vấn MySQL, trả về dữ liệu cho controller.
5. Controller render view (EJS) và truyền dữ liệu cho view.
6. Trình duyệt hiển thị giao diện với dữ liệu động.

---

## **Sơ đồ liên kết**

- `server.js` → `viewEngine.js`, `web.js`
- `web.js` → `homeController.js`
- `homeController.js` → `CRUDService.js`, `database.js`
- `CRUDService.js` → `database.js`
- `homeController.js` → các file `.ejs` trong `views/`

---

## **Ghi chú**
- Mỗi lần truy vấn database nên lấy connection mới bằng `await getConnection()` và đóng lại sau khi dùng xong.
- Dữ liệu truyền từ controller sang view qua biến (ví dụ: `{ listUsers: results }`).
- Các file CSS, JS, ảnh để trong `src/public/` và được cấu hình static.

---

**Nếu quên luồng chạy, chỉ cần đọc lại file này!** 