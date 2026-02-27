const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/login", adminController.adminLogin);
router.post("/forgotpassword", adminController.forgotPassword);
router.post("/resetpassword", adminController.resetPassword);

module.exports = router;
