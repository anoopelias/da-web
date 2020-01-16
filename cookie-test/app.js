const express = require("express");
const app = express();
const port = 3000;
let count = 0;

app.get("/send", (req, res) => {
  printCookie(req.headers.cookie);
  res.cookie("serverCount", ++count);
  res.send("success");
});

app.use(express.static("."));
app.listen(port, () => console.log(`App listening on port ${port}!`));

function printCookie(cookie) {
  console.log("clientCount", getCookie(cookie, "clientCount"));
  console.log("serverCount", getCookie(cookie, "serverCount"));
}

function getCookie(cookie, name) {
  var value = "; " + cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
