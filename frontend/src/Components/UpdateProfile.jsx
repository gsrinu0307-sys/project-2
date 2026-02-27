import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Conntact from "./Conntact";
import Contactinfo from "./Contactinfo";
import Educationinfo from "./Educationinfo";
import GuarantorDetails from "./Garuntater";
import FamilyDetails from "./Familydetails";
import Jobdetails from "./Jobdetails";
import FinancialDetails from "./Financial";
import Header from "../SmallComponents/Header";
import { useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const navigate = useNavigate();
  const styles = {
    page: {
      background: "#eef5ff",
      padding: "20px",
      minHeight: "100vh"
    },
    breadcrumb: {
      background: "#fff",
      padding: "10px 15px",
      borderRadius: "5px"
    },
    leftCard: {
      background: "#fff",
      padding: "15px",
      borderRadius: "10px"
    },
    rightCard: {
      background: "#fff",
      padding: "30px",
      borderRadius: "10px",
      minHeight: "420px"
    },
    menuBtn: {
      width: "100%",
      border: "none",
      padding: "12px",
      marginBottom: "8px",
      borderRadius: "8px",
      textAlign: "left",
      fontWeight: "500",
      cursor: "pointer",
      background: "#e9f1fb"
    }
  };

  const [active, setActive] = useState("personal");

  const renderRightSide = () => {
    switch (active) {
      case "personal":
        return <PersonalDetails />;
      case "contact":
        return <Conntact/>;
      case "kin":
        return <Contactinfo/>;
      case "education":
        return <Educationinfo/>;
      case "guarantor":
        return <GuarantorDetails/>;
      case "family":
        return <FamilyDetails/>;
      case "job":
        return <Jobdetails/>;
      case "finance":
        return <FinancialDetails/>;
      default:
        return <PersonalDetails />;
    }
  };

  const MenuItem = ({ text, value }) => (
    <button
      onClick={() => setActive(value)}
      style={{
        ...styles.menuBtn,
        background: active === value ? "#ffc107" : "#e9f1fb"
      }}
    >
      {text}
    </button>
  );

  return (
    <>
      <Header/>
    <div style={styles.page}>
      {/* Breadcrumb */}
      <div style={styles.breadcrumb}  onClick={() => navigate("/employeedashboard")}>
        Dashboard &gt; Update Profile
      </div>

      <div className="row mt-3">
        {/* LEFT SIDE */}
        <div className="col-md-3">
          <div style={styles.leftCard}>
            <MenuItem text="Personal Details" value="personal" />
            <MenuItem text="Contact Details" value="contact" />
            <MenuItem text="Next of Kin Details" value="kin" />
            <MenuItem text="Education Qualifications" value="education" />
            <MenuItem text="Guarantor Details" value="guarantor" />
            <MenuItem text="Family Details" value="family" />
            <MenuItem text="Job Details" value="job" />
            <MenuItem text="Financial Details" value="finance" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-9">
          <div style={styles.rightCard}>
            {renderRightSide()}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
