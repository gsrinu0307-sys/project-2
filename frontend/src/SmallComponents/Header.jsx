import React from 'react';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div>
        <style>{`
        body {
          background: #eef4fb;
        }
        .navbar {
          background: #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .nav-link.active {
          border-bottom: 3px solid #ffc107;
          font-weight: 600;
        }
        .profile-card {
          background: #1e3a8a;
          color: #fff;
          border-radius: 16px;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #ffc107;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: bold;
          color: #000;
        }
        .edit-btn {
          background: #ffc107;
          border: none;
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: 600;
        }
        .quick-btn {
          background: #fff;
          border-radius: 30px;
          padding: 10px 20px;
          border: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
          margin-bottom: 10px;
        }
        .card-box {
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.08);
        }
        .progress {
          height: 10px;
          border-radius: 10px;
        }
        .birthday-item {
          background: #e9f1fb;
          border-radius: 12px;
          padding: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
          .icon-circle {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
        }

        .icon-blue {
        background-color: #1e40af;
        }

        .icon-green {
        background-color: #15803d;
    }

    .icon-badge {
      position: absolute;
      top: -6px;
      right: -6px;
      background: red;
      color: white;
      font-size: 10px;
      padding: 3px 6px;
      border-radius: 50%;
      font-weight: bold;
    }

    .profile-circle img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      object-fit: cover;
      cursor: pointer;
    }
        `}</style>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg px-4">

    <span className="navbar-brand fw-bold">Dashboard</span>

    <ul className="navbar-nav mx-auto gap-4">
    <li className="nav-item">
        <a className="nav-link active" href="/dashboard">Dashboard</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="/payrolls">Payroll</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="/company">Company</a>
    </li>
    </ul>

    {/* Right Icons */}
    <div className="d-flex align-items-center gap-3">
        <div className="icon-circle icon-blue">
        🔔
        <span className="icon-badge">13</span>
        </div>

        <div className="profile-circle" onClick={() => navigate("/update")}>
        <img src="https://i.pravatar.cc/40" alt="profile" />
        </div>
    </div>
        </nav>

    </div>
  )
}

export default Header
