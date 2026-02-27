const pool = require("../config/db");

// ================= GET EMPLOYEE =================
exports.getEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM employees WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Employee not found"
      });
    }

    res.status(200).json({
      success: true,
      data: result.rows[0]
    });

  } catch (error) {
    next(error);
  }
};


// ================= UPDATE EMPLOYEE =================
exports.updateEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, department, jobTitle, jobCategory } = req.body;

    console.log("Incoming Data:", req.body); // DEBUG

    const result = await pool.query(
      `UPDATE employees
       SET name = $1,
           department = $2,
           job_title = $3,
           job_category = $4
       WHERE id = $5
       RETURNING *`,
      [name, department, jobTitle, jobCategory, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Employee not found for update"
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee updated successfully",
      data: result.rows[0]
    });

  } catch (error) {
    next(error);
  }
};