const Employee = require("../models/employee");

const handleError = (res, error) => {
  console.log(error);
  res.status(500).send(error.message);
};

const getEmployees = (req, res) => {
  Employee.find()
    .then((employees) => res.status(200).json(employees))
    .catch((error) => handleError(res, error));
};

const addEmployee = (req, res) => {
  const { surname, salary, manager_surname } = req.body;
  const employee = new Employee({ surname, salary, manager_surname });
  employee
    .save()
    .then((employee) => res.status(200).json(employee))
    .catch((error) => handleError(res, error));
};

const editEmployee = (req, res) => {
  const { surname, salary, manager_surname } = req.body;
  Employee.findByIdAndUpdate(
    req.params.id,
    {
      surname,
      salary,
      manager_surname,
    },
    { new: true }
  )
    .then((employee) => res.status(200).json(employee))
    .catch((error) => handleError(res, error));
};

const deleteEmployee = (req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((error) => handleError(res, error));
};

const searchEmployee = (req, res) => {
  console.log(req.params.surname);
  Employee.find({ surname: req.params.surname })
    .then()
    .catch((error) => handleError(res, error));
};
const searchEmployeeProcess = (req, res) => {
  console.log(req.params.surname);
  Employee.find({ surname: req.params.surname })
    .then()
    .catch((error) => handleError(res, error));
};

module.exports = {
  getEmployees,
  addEmployee,
  editEmployee,
  deleteEmployee,
  searchEmployee,
  searchEmployeeProcess,
};
