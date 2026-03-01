import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminEmployeeList() {
  const [employees, setEmployees] = useState([]);

  // Fetch employees from backend
  useEffect(() => {
    fetch(`${process.env.VITE_API_URL}/api/employees`) // change if needed
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  const styles = {
    page: {
      backgroundColor: "#f4f6f9",
      minHeight: "100vh"
    },
    headerBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px"
    },
    exportBtn: {
      backgroundColor: "#2e7d32",
      color: "#fff",
      border: "none",
      padding: "8px 20px",
      borderRadius: "8px"
    },
    tableHead: {
      backgroundColor: "#d9e2ef",
      fontWeight: "600"
    },
    actionBtn: {
      backgroundColor: "#2d3e91",
      color: "#fff",
      border: "none",
      padding: "6px 14px",
      borderRadius: "6px"
    }
  };

  return (
    <div style={styles.page}>
      <div className="container bg-white p-4 rounded">

        {/* Header */}
        <div style={styles.headerBox}>
          <h4>Employee Management</h4>
          <button style={styles.exportBtn}>Export</button>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table align-middle">
            <thead style={styles.tableHead}>
              <tr>
                <th>Name(s)</th>
                <th>Dept</th>
                <th>Job Title</th>
                <th>Start Date</th>
                <th>Category</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {employees.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center">
                    No Employees Registered
                  </td>
                </tr>
              ) : (
                employees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.fullname}</td>
                    <td>{emp.department}</td>
                    <td>{emp.designation}</td>
                    <td>{emp.startdate}</td>
                    <td>{emp.category}</td>
                    <td>{emp.gender}</td>
                    <td>
                      <button style={styles.actionBtn}>
                        Actions
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}