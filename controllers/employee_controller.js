const Employee = require("../models/employee");
const createPath = require("../helpers/createPath");

const handleError = (res, error) => {
  console.log(error);
  res.render(createPath("error"), {
    title: "Oops",
  });
};

const getEmployees = (req, res) => {
  Employee.find()
    .then((employees) => {
      res.render(createPath("employees_table"), {
        title: "Employees table",
        employees,
      });
    })
    .catch((error) => handleError(res, error));
};

const addEmployee = (req, res) => {
  const { surname, salary, manager_surname } = req.body;
  const employee = new Employee({ surname, salary, manager_surname });
  employee
    .save()
    .then((result) => res.redirect("/employees_table"))
    .catch((error) => handleError(res, error));
};

const addEmployeePage = (req, res) => {
  res.render(createPath("add_employee"), {
    title: "Add employee",
  });
};

const editEmployee = (req, res) => {
  const { surname, salary, manager_surname } = req.body;
  Employee.findByIdAndUpdate(req.params.id, {
    surname,
    salary,
    manager_surname,
  })
    .then((result) => {
      res.redirect("/employees_table");
    })
    .catch((error) => handleError(res, error));
};

const editEmployeePage = (req, res) => {
  Employee.findById(req.params.id)
    .then((employee) => {
      res.render(createPath("edit_employee"), {
        title: "Edit employee",
        employee,
      });
    })
    .catch((error) => handleError(res, error));
};

const deleteEmployee = (req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.sendStatus(200);
      res.redirect("/employees_table");
    })
    .catch((error) => handleError(res, error));
};

const searchEmployee = (req, res) => {
  console.log(req.params.surname);
  Employee.find({ surname: req.params.surname })
    .then((employees) => {
      console.log(employees);
      res.render(createPath("surname_search"), {
        title: "Found",
        employees,
      });
    })
    .catch((error) => handleError(res, error));
};
const searchEmployeeProcess = (req, res) => {
  console.log(req.params.surname);
  Employee.find({ surname: req.params.surname })
    .then((employees) => {
      console.log(employees);
      res.render(createPath("employees_table"), {
        title: "Found",
        employees,
      });
    })
    .catch((error) => handleError(res, error));
};

module.exports = {
  getEmployees,
  addEmployee,
  addEmployeePage,
  editEmployee,
  editEmployeePage,
  deleteEmployee,
  searchEmployee,
  searchEmployeeProcess,
};
