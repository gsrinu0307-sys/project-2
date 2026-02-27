import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FamilyDetails() {
  return (
    <div className="container py-5">
      <style>{`
        .family-card {
          max-width: 900px;
          margin: auto;
        }
        .family-card h5 {
          font-weight: 600;
          margin-bottom: 28px;
        }
        .form-control,
        .form-select {
          background-color: #eaf2fb;
          border: none;
          border-radius: 12px;
          padding: 14px 16px;
        }
        .form-control:focus,
        .form-select:focus {
          box-shadow: none;
        }
        textarea.form-control {
          resize: none;
        }
        .btn-update {
          background-color: #4c8a1f;
          color: #fff;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 10px;
        }
      `}</style>

      <div className="family-card">
        <h5>View Family Details</h5>

        <form>
          <div className="row g-4">
            <div className="col-12">
              <label className="form-label text-muted">Full Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue="Natnael dawit"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">Relationship</label>
              <select className="form-select" defaultValue="Brother">
                <option>Father</option>
                <option>Mother</option>
                <option>Brother</option>
                <option>Sister</option>
                <option>Spouse</option>
                <option>Guardian</option>
                <option>Relative</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">Phone No</label>
              <input
                type="text"
                className="form-control"
                defaultValue="0993234567"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">Email (optional)</label>
              <input
                type="email"
                className="form-control"
                placeholder="example@email.com"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">Emergency Contact</label>
              <select className="form-select">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            <div className="col-12">
              <label className="form-label text-muted">Address</label>
              <textarea
                className="form-control"
                rows="3"
                defaultValue="Djibouti street, Addis Ababa"
              />
            </div>
          </div>

          <div className="mt-4">
            <button type="submit" className="btn btn-update">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
