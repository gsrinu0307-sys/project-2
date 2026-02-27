import React from "react";
import Header from "../SmallComponents/Header";
import { useNavigate } from "react-router-dom";

export default function EmployeeDashboard() {
  const navigate = useNavigate();

  // Quick actions with routes
  const quickActions = [
    { label: "Apply for Leave", path: "/leaveapplication" },
    { label: "View Payslip", path: "/payslip" },
    { label: "Update Profile", path: "/profile" },
    { label: "Events", path: "/events" },
  ];

  return (
    <>
      <div className="dashboard-wrapper">
        <Header />

        <div className="container my-4">
          {/* Profile Card */}
          <div className="profile-card mb-4">
            <div className="d-flex align-items-center gap-3">
              <div className="avatar">R</div>
              <div>
                <h4 className="mb-1">Redwan Husein</h4>
                <p className="mb-0">UI / UX Designer & UX Writer</p>
              </div>
            </div>
            <button
              className="edit-btn"
              onClick={() => navigate("/update")}
            >
              Edit Profile
            </button>
          </div>

          {/* Quick Actions */}
          <h5 className="mb-3">Quick Actions</h5>
          <div className="row g-3 mb-4">
            {quickActions.map((item, i) => (
              <div className="col-md-2 col-6" key={i}>
                <button
                  className="quick-btn w-100"
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>

          {/* Cards Section */}
          <div className="row g-4">
          
            {/* To-dos */}
            <div className="col-md-6">
              <div className="card-box">
                <h5>To-dos</h5>
                {[
                  "Complete Onboarding Document Upload",
                  "Follow up on clients on documents",
                  "Design wireframes for LMS",
                  "Create case study for next IT project",
                ].map((todo, i) => (
                  <div key={i} className="bg-light rounded p-3 mt-2">
                    {todo}
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements */}
            <div className="col-md-6">
              <div className="card-box">
                <h5>Announcements</h5>
                {[
                  "Welcome Saron – New staff joining",
                  "Sendforth for Project Manager",
                  "Marriage Alert",
                  "Office Space Update",
                ].map((a, i) => (
                  <div className="bg-light rounded p-3 mt-2" key={i}>
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Payslip */}
            <div className="col-md-6">
              <div className="card-box">
                <h5>April Pay Slip Breakdown</h5>
                <table className="table mt-3">
                  <thead>
                    <tr>
                      <th>Earnings</th>
                      <th>Amount</th>
                      <th>Deductions</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Basic Wage</td>
                      <td>150,000</td>
                      <td>-30,000</td>
                      <td>120,000</td>
                    </tr>
                    <tr>
                      <td>Tax</td>
                      <td>15,000</td>
                      <td>-3,000</td>
                      <td>12,000</td>
                    </tr>
                    <tr className="fw-bold">
                      <td>Total</td>
                      <td>150,000</td>
                      <td>-36,000</td>
                      <td>114,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Birthdays */}
          </div>
        </div>
      </div>
    </>
  );
}
