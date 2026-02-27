import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FinancialDetails() {
  return (
    <div className="container py-5">
      <style>{`
        .financial-card {
          max-width: 900px;
          margin: auto;
        }
        .financial-card h5 {
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
          padding: 14px 40px;
          border-radius: 10px;
        }
      `}</style>

      <div className="financial-card">
        <h5>Financial Details</h5>

        <form>
          <div className="row g-4">
            <div className="col-12">
              <label className="form-label text-muted">Bank Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue="CBE"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">Account No</label>
              <input
                type="text"
                className="form-control"
                defaultValue="100013455451"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">Account Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue="Natnael melaku"
              />
            </div>
          </div>

          <div className="text-center mt-5">
            <button type="submit" className="btn btn-update">
              Update Account Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
