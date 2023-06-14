import express from "express";
import path from "path";
import http from "http";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.get("/*", () => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.set("port", port);
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`***Server running on port ${port}***`);
  console.log("\x1b[35m%s\x1b[0m", `http://localhost:${port}`);
});
