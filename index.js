const express = require("express");
const app = express();
const port = 3000;

// ハローワールド
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`http://localhost:${port} でサーバーが起動しました`);
});
