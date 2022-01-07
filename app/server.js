const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;
const { sequelize } = require("./database/models");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes"));
app.use(
  bodyParser.json({
    extended: true,
    limit: "50mb",
  })
);
app.listen(port, () => {
  console.log("Running is running in", port);

  sequelize
    .authenticate()
    .then(() => {
      console.log("connection database success!!");
    })
    .catch((err) => {
      console.log(err);
    });
});
