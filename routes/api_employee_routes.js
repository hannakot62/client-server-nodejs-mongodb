const express = require("express");
const router = express.Router();
const {
  getEmployees,
  addEmployee,
  // addEmployeePage,
  // editEmployeePage,
  editEmployee,
  deleteEmployee,
  searchEmployee,
  searchEmployeeProcess,
} = require("../controllers/api_employee_controller");

router.get("/api/employees", getEmployees);
router.post("/api/employee", addEmployee);
router.put("/api/employee/:id", editEmployee);
router.delete("/api/employee/:id", deleteEmployee);
//==========================================================================================//
router.get("/surname_search", searchEmployee);
router.get("/surname_search/:surname", searchEmployeeProcess);
// router.get("/add_employee", addEmployeePage);
// router.get("/edit_employee/:id", editEmployeePage);

module.exports = router;
