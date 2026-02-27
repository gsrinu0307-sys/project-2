import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import ChangePassword from "./components/ChangePassword";
import Register from "./components/Eregister";
import Employees from "./components/Employee";
import EmployeeDashboard from "./components/EmployeeDashboard";
import LeaveApplication from "./components/LeaveApplication";
import ApplyLeave from "./components/AnnualLeave";
import NotFound from "./components/NotFound";
import Sick from "./components/Sickleave";
import Maternity from "./components/Maternityleave";
import Casual from "./components/Casualleave";
import UpdateProfile from "./components/UpdateProfile";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminReset from "./components/AdminReset";
import Adminchange from "./components/AdminChange";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<ForgotPassword />} />
        <Route path="/eregister" element={<Register/>} />
        <Route path="/reset/:token" element={<ResetPassword />} />
        <Route path="/change" element={<ChangePassword />} />
        <Route path="/employeedashboard" element={<EmployeeDashboard />} />
        <Route path="/leaveapplication" element={<LeaveApplication />} />
        <Route path="/sick" element={<Sick/>} />
        <Route path="/maternity" element={<Maternity/>} />
        <Route path="/annual" element={<ApplyLeave />} />
        <Route path="/casual" element={<Casual/>} />
        <Route path="/update" element={<UpdateProfile/>} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/admindashboard" element={<AdminDashboard/>} />
        <Route path="/forgotpassword" element={<AdminReset />} />
        <Route path="/adminchange" element={<Adminchange />} />
        <Route path="/employee" element={<Employees />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
