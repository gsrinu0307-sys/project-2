import React from "react";
import Header from "../SmallComponents/Header";
import { useNavigate } from "react-router-dom";

export default function LeaveApplication() {
    const navigate = useNavigate();

     const leaves = [
    { days: 60, title: "Annual Leave", path: "/annual" },
    { days: 20, title: "Sick Leave", path: "/sick" },
    { days: 60, title: "Maternity Leave", path: "/maternity" },
    { days: 30, title: "Casual Leave", path: "/casual" },
  ];
  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        body {
          background-color: #eef4fb;
        }
        .page-container {
          background: #fff;
          border-radius: 8px;
          padding: 25px;
        }
        .breadcrumb-text {
          font-size: 14px;
          color: #666;
        }
        .leave-card {
          background: #243a8f;
          color: white;
          border-radius: 10px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-width: 220px;
        }
        .leave-circle {
          background: white;
          color: #243a8f;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: bold;
        }
        .apply-btn {
          background: #ffc107;
          border: none;
          border-radius: 20px;
          padding: 5px 18px;
          font-size: 13px;
          font-weight: 600;
        }
        .table thead {
          background: #e9f1fb;
        }
        .action-btn {
          background: #243a8f;
          color: white;
          border-radius: 6px;
          padding: 4px 14px;
          border: none;
          font-size: 13px;
        }
        .export-btn {
          background: #198754;
          color: white;
          border-radius: 6px;
          padding: 6px 18px;
          border: none;
          font-size: 14px;
        }
      `}</style>

       <Header/>
      <div className="container my-4">
        <div className="page-container">

          {/* Breadcrumb */}
          <div className="breadcrumb-text mb-3">
                <span
                    style={{ cursor: "pointer", color: "#0d6efd" }}
                    onClick={() => navigate("/employeedashboard")}
                >
                    Dashboard
                </span>
                {" "} &gt; {" "}
                <span>Apply for Leave</span>
            </div>


          {/* Title */}
          <h5 className="mb-4">📘 Leave Application</h5>

          {/* Leave Cards */}
           <div className="d-flex gap-3 flex-wrap mb-4">
      {leaves.map((item, index) => (
        <div
          className="leave-card cursor-pointer"
          key={index}
          onClick={() => navigate(item.path)}
        >
          <div className="leave-circle">{item.days}</div>

          <div className="ms-3 flex-grow-1">
            <div className="fw-semibold">{item.title}</div>

            {/* Stop bubbling so button works separately if needed */}
            <button
              className="apply-btn mt-2"
              onClick={(e) => {
                e.stopPropagation();
                navigate(item.path);
              }}
            >
              Apply
            </button>
          </div>
        </div>
      ))}
    </div>

          {/* Leave History Header */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6>Leave History</h6>
            <button className="export-btn">Export</button>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Name(s)</th>
                  <th>Duration(s)</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Type</th>
                  <th>Reason(s)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, i) => (
                  <tr key={i}>
                    <td>Abenezer kebede</td>
                    <td>5</td>
                    <td>22/04/2022</td>
                    <td>28/04/2022</td>
                    <td>Sick</td>
                    <td>Personal</td>
                    <td>
                      <button className="action-btn">Actions</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
}
