// server.js (hoặc index.js)
const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json")); // Đảm bảo đường dẫn đến db.json đúng
const middlewares = jsonServer.defaults();

server.use(cors()); // Sử dụng middleware CORS
server.use(jsonServer.bodyParser); // Để xử lý POST, PUT, PATCH requests
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000; // Sử dụng biến môi trường PORT của Render hoặc mặc định là 3000

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
