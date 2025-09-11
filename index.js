const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomString(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  return result;
}

app.post("/api/message", (req, res) => {
  const { message, length } = req.body;
  const digits = parseInt(length) || 6;

  const random = generateRandomString(digits);
  const output = `${message} ${random}|#ROLL`;

  res.json({ output });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} でサーバーが動作中`);
});
