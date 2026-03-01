import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function PersonalDetails() {
  const employeeId = 1;

  const styles = {
    card: {
      background: "#ffffff",
      borderRadius: "14px",
      padding: "40px",
      minHeight: "420px",
      position: "relative"
    },
    editIcon: {
      position: "absolute",
      top: "25px",
      right: "30px",
      cursor: "pointer",
      color: "#6c757d",
      fontSize: "18px",
      textAlign: "center"
    },
    editText: { fontSize: "12px" },
    avatarWrapper: {
      width: "130px",
      height: "130px",
      borderRadius: "50%",
      background: "#ffc107",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 15px"
    },
    avatar: {
      width: "90px",
      height: "90px",
      borderRadius: "50%"
    },
    label: {
      fontSize: "13px",
      color: "#8a8a8a",
      marginBottom: "4px"
    },
    value: {
      fontSize: "16px",
      fontWeight: "600"
    }
  };

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    jobTitle: "",
    jobCategory: ""
  });

  // ✅ Correct GET
  useEffect(() => {
  axios
    .get(`${process.env.VITE_API_URL}/api/employees/${employeeId}`)
    .then((res) => {
      setFormData({
        name: res.data.data.name,
        department: res.data.data.department,
        jobTitle: res.data.data.job_title,
        jobCategory: res.data.data.job_category
      });
    })
    .catch((err) => console.error("GET ERROR:", err));
}, []);

const handleSave = async () => {
  try {
    await axios.put(
      `${process.env.REACT_APP_API_URL}/api/employees/${employeeId}`,
      formData
    );

    alert("Updated Successfully!");
    setEditMode(false);
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    alert("Update failed!");
  }
};  

  return (
    <div style={styles.card}>
      {!editMode ? (
        <div style={styles.editIcon} onClick={() => setEditMode(true)}>
          ✏️
          <div style={styles.editText}>Edit</div>
        </div>
      ) : (
        <div style={styles.editIcon}>
          <button
            className="btn btn-sm btn-success me-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => setEditMode(false)}
          >
            Cancel
          </button>
        </div>
      )}

      <div className="text-center">
        <div style={styles.avatarWrapper}>
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="employee"
            style={styles.avatar}
          />
        </div>

        <p style={styles.label}>Employee Name</p>
        {!editMode ? (
          <h5 style={styles.value}>{formData.name}</h5>
        ) : (
          <input
            className="form-control text-center mb-3"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        )}

        <p style={styles.label}>Department</p>
        {!editMode ? (
          <h6 style={styles.value}>{formData.department}</h6>
        ) : (
          <input
            className="form-control text-center mb-3"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        )}

        <div className="row mt-4">
          <div className="col-md-6">
            <p style={styles.label}>Job Title</p>
            {!editMode ? (
              <p style={styles.value}>{formData.jobTitle}</p>
            ) : (
              <input
                className="form-control"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
              />
            )}
          </div>

          <div className="col-md-6">
            <p style={styles.label}>Job Category</p>
            {!editMode ? (
              <p style={styles.value}>{formData.jobCategory}</p>
            ) : (
              <select
                className="form-select"
                name="jobCategory"
                value={formData.jobCategory}
                onChange={handleChange}
              >
                <option>Full time</option>
                <option>Part time</option>
                <option>Contract</option>
              </select>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}