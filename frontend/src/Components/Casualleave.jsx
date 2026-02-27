import React from "react";
import Header from "../SmallComponents/Header";
import { useNavigate } from "react-router-dom";

export default function Casual() {
  const navigate = useNavigate();

  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        body {
          background-color: #eef4fb;
        }
        .leave-wrapper {
          background: #fff;
          border-radius: 8px;
          padding: 40px;
          max-width: 900px;
          margin: auto;
        }
        .breadcrumb-text {
          font-size: 14px;
          color: #555;
          margin-bottom: 20px;
        }
        .breadcrumb-text span {
          cursor: pointer;
          color: #0d6efd;
        }
        .form-control, .form-select {
          background-color: #e9f1fb;
          border: none;
          height: 44px;
        }
        textarea.form-control {
          height: 90px;
        }
        .submit-btn {
          background: #3f8f1f;
          color: white;
          border-radius: 6px;
          padding: 10px 40px;
          border: none;
        }
        .reset-btn {
          background: white;
          color: red;
          border-radius: 6px;
          padding: 10px 40px;
          border: 1px solid red;
        }
        .file-input {
          background: #e9f1fb;
          padding: 8px;
          border-radius: 6px;
        }
      `}</style>

      <Header/>
      <div className="container my-4">

        {/* Breadcrumb */}
        <div className="breadcrumb-text">
          <span onClick={() => navigate("/employeedashboard")}>Dashboard</span> &gt;{" "}
          <span onClick={() => navigate("/leaveapplication")}>Apply for Leave</span> &gt;{" "}
          Annual Leave
        </div>

        <div className="leave-wrapper">
          {/* Title */}
          <div className="text-center mb-4">
            <h5>📘 Leave Application</h5>
            <p className="text-muted">
              Fill the required fields below to apply for annual leave.
            </p>
          </div>

          {/* Form */}
          <form>
            {/* Leave Type */}
            <div className="mb-3">
              <label className="form-label">Leave Type</label>
              <input
                type="text"
                className="form-control"
                value="Casual Leave"
                disabled
              />
            </div>

            {/* Dates */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Start Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">End Date</label>
                <input type="date" className="form-control" />
              </div>
            </div>

            {/* Duration + Resumption */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Duration</label>
                <input type="number" className="form-control" value="60" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Resumption Date</label>
                <input type="date" className="form-control" />
              </div>
            </div>

            {/* Reason */}
            <div className="mb-3">
              <label className="form-label">Reason for leave</label>
              <textarea className="form-control" />
            </div>

            {/* File Upload */}
            <div className="mb-3">
              <label className="form-label">
                Attach handover document (pdf, jpg, docx or any other format)
              </label>
              <input type="file" className="form-control file-input" />
            </div>

            {/* Relief Officer */}
            <div className="mb-4">
              <label className="form-label">Choose Relief Officer</label>
              <select className="form-select">
                <option>Select your relief officer</option>
                <option>John Doe</option>
                <option>Sarah Smith</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-3">
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <button type="reset" className="reset-btn">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
