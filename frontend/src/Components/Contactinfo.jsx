import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contactinfo() {
  const [data, setData] = useState({
    name: "Samson Dawit",
    job: "IT Manager",
    phone: "099332212",
    relationship: "Relative",
    address: "Alembank, Addia ababa"
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    alert("Next of Kin Updated Successfully");
    console.log(data);
  };

  return (
    <div style={styles.page}>
      <div className="container">
        <div style={styles.card}>
          <div className="row g-4">

            {/* Next of kin name */}
            <div className="col-md-6">
              <label style={styles.label}>Next of kin name</label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            {/* Job */}
            <div className="col-md-6">
              <label style={styles.label}>Job / Occupation</label>
              <input
                type="text"
                name="job"
                value={data.job}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            {/* Phone */}
            <div className="col-md-6">
              <label style={styles.label}>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            {/* Relationship */}
            <div className="col-md-6">
              <label style={styles.label}>Relationship</label>
              <select
                name="relationship"
                value={data.relationship}
                onChange={handleChange}
                style={styles.input}
              >
                <option>Relative</option>
                <option>Father</option>
                <option>Mother</option>
                <option>Spouse</option>
                <option>Sibling</option>
                <option>Friend</option>
              </select>
            </div>

            {/* Address */}
            <div className="col-12">
              <label style={styles.label}>Residential Address</label>
              <textarea
                name="address"
                rows="3"
                value={data.address}
                onChange={handleChange}
                style={styles.textarea}
              />
            </div>

            {/* Button */}
            <div className="col-12">
              <button onClick={handleUpdate} style={styles.button}>
                Update
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= INTERNAL CSS ================= */

const styles = {
 
  card: {
    background: "#fff",
    borderRadius: "14px",
    padding: "30px",
  },
  label: {
    fontWeight: "500",
    marginBottom: "6px",
    display: "block"
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "12px",
    border: "none",
    background: "#e9f1fd",
    outline: "none"
  },
  textarea: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "12px",
    border: "none",
    background: "#e9f1fd",
    outline: "none",
    resize: "none"
  },
  button: {
    background: "#4b8b1a",
    color: "#fff",
    border: "none",
    padding: "12px 40px",
    borderRadius: "10px",
    fontWeight: "600",
    marginTop: "10px"
  }
};
