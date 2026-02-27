import React, { useState } from "react";

export default function Conntact() {
  const [formData, setFormData] = useState({
    phone1: "",
    phone2: "",
    email: "johndoe@gmail.com",
    city: "",
    address: "Alembank, Addia ababa"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    alert("Profile Updated Successfully!");
    console.log(formData);
  };

  return (
    <div style={styles.page}>
      <div className="container">
        <div style={styles.card}>
          <div className="row g-4">

            {/* Phone Number 1 */}
            <div className="col-md-6">
              <label style={styles.label}>Phone Number 1</label>
              <input
                type="text"
                name="phone1"
                value={formData.phone1}
                onChange={handleChange}
                placeholder="Phone Number 1"
                style={styles.input}
              />
            </div>

            {/* Phone Number 2 */}
            <div className="col-md-6">
              <label style={styles.label}>Phone Number 2</label>
              <input
                type="text"
                name="phone2"
                value={formData.phone2}
                onChange={handleChange}
                placeholder="Phone Number 2"
                style={styles.input}
              />
            </div>

            {/* Email */}
            <div className="col-12">
              <label style={styles.label}>E-mail Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            {/* City */}
            <div className="col-md-6">
              <label style={styles.label}>City of residence</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                style={styles.input}
              />
            </div>

            {/* Address */}
            <div className="col-12">
              <label style={styles.label}>Residential Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
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
    borderRadius: "12px",
    padding: "30px"
  },
  label: {
    fontWeight: "500",
    marginBottom: "6px",
    display: "block"
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "none",
    background: "#e9f1fd",
    outline: "none"
  },
  textarea: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "none",
    background: "#e9f1fd",
    outline: "none",
    resize: "none"
  },
  button: {
    background: "#4b8b1a",
    color: "#fff",
    border: "none",
    padding: "12px 35px",
    borderRadius: "10px",
    fontWeight: "600",
    marginTop: "10px"
  }
};
