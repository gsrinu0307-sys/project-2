import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Educationinfo() {
  return (
    <div className="container py-5">
      <style>{`
        .academic-card {
          max-width: 900px;
          margin: auto;
        }
        .academic-card h5 {
          font-weight: 600;
          margin-bottom: 24px;
        }
        .form-control,
        .form-select {
          background-color: #eef4fb;
          border: none;
          border-radius: 10px;
          padding: 12px 14px;
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
          padding: 10px 28px;
          border-radius: 8px;
        }
      `}</style>

      <div className="academic-card">
        <h5>Academic Records / Academic Details</h5>

        <form>
          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label text-muted">Name of Institution</label>
              <input
                type="text"
                className="form-control"
                defaultValue="Jimma university"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">Department</label>
              <input
                type="text"
                className="form-control"
                defaultValue="Computer Dept"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">Course</label>
              <select className="form-select">
                <option>Computer Science</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">Location</label>
              <input
                type="text"
                className="form-control"
                defaultValue="Jimma, Ethiopia"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">Start Date</label>
              <input
                type="date"
                className="form-control"
                defaultValue="1998-01-01"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted">End Date</label>
              <input
                type="date"
                className="form-control"
                defaultValue="2019-01-01"
              />
            </div>

            <div className="col-12">
              <label className="form-label text-muted">Description</label>
              <textarea className="form-control" rows="5">
• Gathering and evaluating product requirements, in collaboration with product managers and the developers
• Illustrating design ideas using storyboards, process flows, and sitemaps
• Designing graphic user interface pages and elements, like menus, tabs, and widgets
• Design wireframes, mockups, storyboards, and fully interactive prototype design
              </textarea>
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
