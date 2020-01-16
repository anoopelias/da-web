const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("."));

app.get("/send", (req, res) => {

  res.append("Access-Control-Allow-Origin", ["http://xyz.com:3000"]);
  res.append("Access-Control-Allow-Methods", "GET");

  console.log("Sending");
  res.send("success");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

