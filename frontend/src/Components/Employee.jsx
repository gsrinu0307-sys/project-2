import React from "react";

function Employees() {
  const employees = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      email: "sarah.johnson@company.com",
      phone: "+1 (555) 123-4567",
      department: "Engineering",
      joined: "2022-03-15",
      initials: "SJ",
      status: "Active",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Manager",
      email: "michael.chen@company.com",
      phone: "+1 (555) 234-5678",
      department: "Marketing",
      joined: "2021-08-10",
      initials: "MC",
      status: "Active",
    },
  ];

  return (
    <div className="container-fluid page">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
        <div>
          <h3 className="fw-bold">Employee Management</h3>
          <p className="text-muted mb-0">
            {employees.length} total employees
          </p>
        </div>
        <button className="btn add-btn mt-2 mt-md-0">
          + Add Employee
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        className="form-control search mb-4"
        placeholder="Search employees by name, email, department, or position..."
      />

      {/* Employee Cards */}
      {employees.map((emp) => (
        <div className="card emp-card mb-3" key={emp.id}>
          <div className="card-body">
            <div className="row align-items-center">
              {/* Left */}
              <div className="col-lg-6 d-flex gap-3">
                <div className="avatar">{emp.initials}</div>
                <div>
                  <h5 className="mb-1">
                    {emp.name}
                    <span className="status ms-2">{emp.status}</span>
                  </h5>
                  <p className="text-muted mb-1">{emp.role}</p>
                  <p className="mb-1 small">📧 {emp.email}</p>
                  <p className="mb-0 small">
                    Department: {emp.department}
                  </p>
                </div>
              </div>

              {/* Middle */}
              <div className="col-lg-4 mt-3 mt-lg-0">
                <p className="mb-1 small">📞 {emp.phone}</p>
                <p className="mb-0 small">Joined: {emp.joined}</p>
              </div>

              {/* Actions */}
              <div className="col-lg-2 text-lg-end mt-3 mt-lg-0">
                <button className="btn btn-outline-secondary btn-sm me-2">
                  ✏️
                </button>
                <button className="btn btn-outline-danger btn-sm">
                  🗑️
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Internal CSS */}
      <style>{`
        .page {
          background: #f8f9fc;
          min-height: 100vh;
          padding: 24px;
        }

        .add-btn {
          background: #6f42c1;
          color: white;
          border-radius: 8px;
          padding: 8px 16px;
          border: none;
        }

        .search {
          border-radius: 30px;
          padding: 12px 20px;
        }

        .emp-card {
          border-radius: 16px;
          border: none;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
        }

        .avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #7c4dff;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .status {
          background: #d1fae5;
          color: #047857;
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 20px;
        }

        @media (max-width: 576px) {
          .page {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default Employees;
