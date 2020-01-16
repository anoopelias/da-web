const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("."));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get("/send", (req, res) => {
  res.send("success");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

