import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PayrollSystem from "./PayrollSystem";
import AdminEmployeeList from "./AdminEmployeeList";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("Dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const menuSections = [
    {
      title: "MAIN",
      items: ["Dashboard", "Alerts"]
    },
    {
      title: "ORGANIZATION",
      items: ["Employees", "Leave Management", "Payroll"]
    }
  ];

  const stats = [
    { title: "Alerts", count: 4 },
    { title: "Employees", count: 8 }
  ];

  const candidatesList = [
    "John Smith"
  ];

  // ================= ANIMATED COUNTER =================
  const AnimatedNumber = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 600;
      const increment = value / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [value]);

    return <h4>{count}</h4>;
  };

  return (
    <>
      <style>{`
        body {
          background-color: ${darkMode ? "#121212" : "#f4f6f9"};
          color: ${darkMode ? "white" : "black"};
          transition: 0.3s;
        }

        /* SIDEBAR */
        .sidebar {
          width: ${sidebarOpen ? "250px" : "70px"};
          height: 100vh;
          background: ${darkMode ? "#1e1e1e" : "#14213d"};
          color: white;
          position: fixed;
          transition: all 0.3s ease;
          padding: 20px 10px;
          overflow-y: auto;
        }

        .sidebar-title {
          text-align: center;
          font-weight: bold;
          margin-bottom: 20px;
          font-size: 18px;
        }

        .section-heading {
          font-size: 11px;
          letter-spacing: 1px;
          opacity: 0.6;
          margin-top: 20px;
          padding-left: 10px;
        }

        .menu-item {
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          margin: 4px 0;
          transition: 0.2s;
        }

        .menu-item:hover {
          background: rgba(255,255,255,0.1);
        }

        .menu-item.active {
          background: #ffc107;
          color: black;
          font-weight: 600;
        }

        /* CONTENT */
        .content {
          margin-left: ${sidebarOpen ? "250px" : "70px"};
          padding: 20px 30px;
          transition: 0.3s;
        }

        /* TOP SEARCH BAR */
        .top-bar {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .search-box {
          display: flex;
          align-items: center;
          background: ${darkMode ? "#2c2c2c" : "#f1f1f1"};
          padding: 6px 12px;
          border-radius: 30px;
          width: 350px;
        }

        .search-box input {
          border: none;
          background: transparent;
          outline: none;
          width: 100%;
        }

        /* HEADER */
        .header {
          background: ${darkMode ? "#1e1e1e" : "white"};
          padding: 15px 25px;
          border-radius: 10px;
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .stat-card {
          background: ${darkMode ? "#2c2c2c" : "white"};
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .icon-btn {
          cursor: pointer;
          margin-left: 15px;
          position: relative;
        }

        .dropdown-box {
          position: absolute;
          top: 35px;
          right: 0;
          background: ${darkMode ? "#2c2c2c" : "white"};
          border: 1px solid #ddd;
          border-radius: 6px;
          width: 180px;
          z-index: 10;
        }

        .dropdown-box div {
          padding: 8px 12px;
          cursor: pointer;
        }

        .dropdown-box div:hover {
          background: #f1f1f1;
        }

      `}</style>

      {/* ================= SIDEBAR ================= */}
      <div className="sidebar">
        <div className="sidebar-title">
          {sidebarOpen ? "XCELTECH" : "X"}
        </div>

        {menuSections.map((section, index) => (
          <div key={index}>
            {sidebarOpen && (
              <div className="section-heading">
                {section.title}
              </div>
            )}

            {section.items.map((item, i) => (
              <div
                key={i}
                className={`menu-item ${
                  activePage === item ? "active" : ""
                }`}
                onClick={() => setActivePage(item)}
              >
                {sidebarOpen ? item : item.charAt(0)}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="content">

        {/* HEADER */}
        <div className="header">

          {/* LEFT SIDE */}
          <div className="top-bar">

            {/* Sidebar Toggle */}
            <span
              style={{ cursor: "pointer", fontSize: "20px" }}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </span>

            {/* All Candidates Dropdown */}
            <div className="btn btn-primary rounded-pill">
              All Candidates ▼
            </div>

            {/* Search Box */}
            <div className="search-box">
              🔍
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center">

            <div
              className="icon-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "🌙" : "☀️"}
            </div>

            <div
              className="icon-btn"
              onClick={() => setShowNotification(!showNotification)}
            >
              🔔
              {showNotification && (
                <div className="dropdown-box">
                  <div>New candidate applied</div>
                  <div>Interview scheduled</div>
                </div>
              )}
            </div>

            <div
              className="icon-btn"
              onClick={() => setShowProfile(!showProfile)}
            >
              👤
              {showProfile && (
                <div className="dropdown-box">
                  <div>Profile</div>
                  <div>Settings</div>
                  <div
                    onClick={() => navigate("/adminlogin")}
                    style={{ color: "red" }}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        {activePage === "Dashboard" && (
          <div className="row">
            {stats.map((item, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="stat-card">
                  <AnimatedNumber value={item.count} />
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      {activePage === "Alerts" && (
        <div className="card p-4">
          <h4>Messages</h4>
          <p>All user messages will appear here.</p>
        </div>
      )}

      {activePage === "Jobs" && (
        <div className="card p-4">
          <h4>Jobs</h4>
          <p>Manage all job postings here.</p>
        </div>
      )}

      {activePage === "Candidates" && (
        <div className="card p-4">
          <h4>Candidates</h4>
          <p>List of all candidates.</p>
        </div>
      )}

      {activePage === "Resumes" && (
        <div className="card p-4">
          <h4>Resumes</h4>
          <p>Uploaded resumes section.</p>
        </div>
      )}

      {activePage === "Employees" && (
        <div className="card p-4">
          <AdminEmployeeList/>
        </div>
      )}

      {activePage === "Leave Management" && (
        <div className="card p-4">
          <h4>Leave Management</h4>
          <p>Track employee leaves.</p>
        </div>
      )}

      {activePage === "Payroll" && (
        <div className="card p-4">
          <PayrollSystem/>
        </div>
      )}
      </div>
    </>
  );
}