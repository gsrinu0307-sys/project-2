import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GuarantorDetails() {
  return (
    <div className="container py-5">
      <style>{`
        .guarantor-card {
          max-width: 900px;
          margin: auto;
        }
        .guarantor-card h5 {
          font-weight: 600;
          margin-bottom: 28px;
        }
        .form-control {
          background-color: #eaf2fb;
          border: none;
          border-radius: 12px;
          padding: 14px 16px;
        }
        .form-control:focus {
          box-shadow: none;
        }
        .btn-update {
          background-color: #4c8a1f;
          color: #fff;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 10px;
        }
      `}</style>

      <div className="guarantor-card">
        <h5>View Guarantor Details</h5>

        <form className="d-flex flex-column gap-4">
          <div>
            <label className="form-label text-muted">Guarantor’s Name</label>
            <input
              type="text"
              className="form-control"
              defaultValue="Birhanu alemu"
            />
          </div>

          <div>
            <label className="form-label text-muted">Job title / Occupation</label>
            <input
              type="text"
              className="form-control"
              defaultValue="Accountant"
            />
          </div>

          <div>
            <label className="form-label text-muted">Phone No</label>
            <input
              type="text"
              className="form-control"
              defaultValue="09345545455"
            />
          </div>

          <div className="mt-2">
            <button type="submit" className="btn btn-update">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
