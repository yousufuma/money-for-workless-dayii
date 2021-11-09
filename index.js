const Express = require("express");
const BodyParser = require("body-parser");
const path = require('path');
const app = Express();
const user = require("./router/user");
app.use(BodyParser.json());
app.use("/user", user);
app.use(Express.static(path.join(__dirname, "static")));

// Allow cross-domain
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});


//Set a global variable for storing messages
global.userChageData = [];

app.listen(9025);

