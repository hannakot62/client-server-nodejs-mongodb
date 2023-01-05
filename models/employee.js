const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  surname: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  manager_surname: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
