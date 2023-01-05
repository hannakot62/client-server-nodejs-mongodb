const express = require("express");
const router = express.Router();
const {
  getEmployees,
  addEmployee,
  addEmployeePage,
  editEmployeePage,
  editEmployee,
  deleteEmployee,
  searchEmployee,
  searchEmployeeProcess,
} = require("../controllers/employee_controller");

router.get("/employees_table", getEmployees);
router.get("/surname_search", searchEmployee);
router.get("/surname_search/:surname", searchEmployeeProcess);
router.post("/add_employee", addEmployee);
router.get("/add_employee", addEmployeePage);
router.get("/edit_employee/:id", editEmployeePage);
router.put("/edit_employee/:id", editEmployee);
router.delete("/edit_employee/:id", deleteEmployee);

module.exports = router;
