const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const { sequelize } = require("./database/models");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(bodyParser.json({ limit: "50mb" }));

app.use(require("./routes"));

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
