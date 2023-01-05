const express = require("express");
require("dotenv").config();
const chalk = require("chalk");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const employeeRouter = require("./routes/employee_routes");
const createPath = require("./helpers/createPath");
const path = require("path");
const Employee = require("./models/employee");
const employeeApiRoutes = require("./routes/api_employee_routes");

const errorMsg = chalk.bgKeyword("white").redBright;
const successMsg = chalk.bgKeyword("green").white;

const app = express();
app.set("view engine", "pug");

mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => console.log(successMsg("Connected to db")))
  .catch((err) => console.log(errorMsg("Failed to connect to db\n", err)));

app.use(cors());

app.listen(process.env.PORT, () =>
  console.log(successMsg("listening to port ", process.env.PORT))
);

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("script"));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  Employee.find()
    .then((employees) => {
      res.render(createPath("employees_table"), {
        title: "Employees table",
        employees,
      });
    })
    .catch((err) => {
      console.log(err);
      res.render(createPath("error"), {
        title: "Oops",
      });
    });
});

app.use(employeeRouter);
app.use(employeeApiRoutes);
