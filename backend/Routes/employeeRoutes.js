const express = require("express");
const router = express.Router();

const {
  getEmployee,
  updateEmployee
} = require("../controllers/employeeController");

router.get("/:id", getEmployee);
router.put("/:id", updateEmployee);

module.exports = router;