const express = require("express");
const app = express();
const port = 3000;
let count = 0;

app.get("/send", (req, res) => {
  console.log("Cookie", req.headers.cookie);
  res.cookie("serverCount", count++);
  res.send("success");
});

app.use(express.static("."));
app.listen(port, () => console.log(`App listening on port ${port}!`));
