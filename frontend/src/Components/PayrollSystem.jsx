import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function PayrollSystem() {
  const slipRef = useRef();

  const [form, setForm] = useState({
    employeeId: "",
    email: "",
    designation: "",
    department: "",
    phone: "",
    month: "",
    basic: 0,
    hra: 0,
    conveyance: 0,
    bonus: 0
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  // ===== Earnings Calculation =====
  const totalEarnings =
    Number(form.basic) +
    Number(form.hra) +
    Number(form.conveyance) +
    Number(form.bonus);

  const annualCTC = totalEarnings * 12;

  // ===== Deductions =====
  const pf = form.basic * 0.12;
  const esi = totalEarnings <= 21000 ? totalEarnings * 0.0075 : 0;
  const ptax = 200;

  let tds = 0;
  if (annualCTC > 500000 && annualCTC <= 1000000) {
    tds = (annualCTC * 0.1) / 12;
  } else if (annualCTC > 1000000) {
    tds = (annualCTC * 0.2) / 12;
  }

  const totalDeductions = pf + esi + ptax + tds;
  const netSalary = totalEarnings - totalDeductions;

  const downloadPDF = async () => {
    const input = slipRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save(`Admin_SalarySlip.pdf`);
  };

  const styles = {
    page: {
      background: "#f4f6f9",
      minHeight: "100vh"
    },
    sectionTitle: {
      fontWeight: "600",
      marginBottom: "15px"
    },
    netBox: {
      fontSize: "20px",
      fontWeight: "bold"
    }
  };

  return (
    <div style={styles.page}>
      <div className="container">
        <div className="p-2 bg-white">

          <h3 className="mb-4 text-center">Payroll System</h3>

          {/* Employee Info */}
          <div className="row">
            {[
              ["Employee ID", "employeeId"],
              ["Email", "email"],
              ["Designation", "designation"],
              ["Department", "department"],
              ["Phone", "phone"],
              ["Month", "month"]
            ].map(([label, field]) => (
              <div className="col-md-4 mb-3" key={field}>
                <label>{label}</label>
                <input
                  className="form-control"
                  value={form[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                />
              </div>
            ))}
          </div>

          <hr />

          <div className="row">
            {/* Earnings */}
            <div className="col-md-6">
              <h5 style={styles.sectionTitle}>Earnings</h5>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Basic</td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={form.basic}
                        onChange={(e) =>
                          handleChange("basic", e.target.value)
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>HRA</td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={form.hra}
                        onChange={(e) =>
                          handleChange("hra", e.target.value)
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Conveyance</td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={form.conveyance}
                        onChange={(e) =>
                          handleChange("conveyance", e.target.value)
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Bonus</td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={form.bonus}
                        onChange={(e) =>
                          handleChange("bonus", e.target.value)
                        }
                      />
                    </td>
                  </tr>
                  <tr className="table-success">
                    <td><strong>Gross Salary</strong></td>
                    <td><strong>₹{totalEarnings}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Deductions */}
            <div className="col-md-6">
              <h5 style={styles.sectionTitle}>Deductions</h5>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Provident Fund (12%)</td>
                    <td>₹{pf.toFixed(0)}</td>
                  </tr>
                  <tr>
                    <td>ESI (0.75%)</td>
                    <td>₹{esi.toFixed(0)}</td>
                  </tr>
                  <tr>
                    <td>Professional Tax</td>
                    <td>₹{ptax}</td>
                  </tr>
                  <tr>
                    <td>TDS</td>
                    <td>₹{tds.toFixed(0)}</td>
                  </tr>
                  <tr className="table-danger">
                    <td><strong>Total Deductions</strong></td>
                    <td><strong>₹{totalDeductions.toFixed(0)}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Net Salary */}
          <div className="text-center mt-4">
            <div className="alert alert-primary" style={styles.netBox}>
              Net Salary (Take Home): ₹{netSalary.toFixed(0)}
            </div>
          </div>

          {/* Salary Slip Preview */}
          <div ref={slipRef} className="mt-4 p-4 bg-white">

            <h4 className="text-center mb-3">Official Salary Slip</h4>

            <div className="row">
              <div className="col-md-6">
                <p><strong>Name:</strong> Admin</p>
                <p><strong>Employee ID:</strong> {form.employeeId}</p>
                <p><strong>Department:</strong> {form.department}</p>
                <p><strong>Designation:</strong> {form.designation}</p>
              </div>
              <div className="col-md-6 text-end">
                <p><strong>Month:</strong> {form.month}</p>
                <p><strong>Annual CTC:</strong> ₹{annualCTC}</p>
              </div>
            </div>

            <hr />

            <p><strong>Gross Salary:</strong> ₹{totalEarnings}</p>
            <p><strong>Total Deductions:</strong> ₹{totalDeductions.toFixed(0)}</p>

            <h5 className="text-success">
              Net Salary Payable: ₹{netSalary.toFixed(0)}
            </h5>

          </div>

          {/* Buttons */}
          <div className="text-center mt-4">
            <button className="btn btn-success me-3" onClick={downloadPDF}>
              Download PDF
            </button>

            <button className="btn btn-dark" onClick={() => window.print()}>
              Print
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}