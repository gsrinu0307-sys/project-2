import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import ChangePassword from "./Components/ChangePassword";
import Register from "./Components/Eregister";
import Employees from "./Components/Employee";
import EmployeeDashboard from "./Components/EmployeeDashboard";
import LeaveApplication from "./Components/LeaveApplication";
import ApplyLeave from "./Components/AnnualLeave";
import NotFound from "./Components/NotFound";
import Sick from "./Components/Sickleave";
import Maternity from "./Components/Maternityleave";
import Casual from "./Components/Casualleave";
import UpdateProfile from "./Components/UpdateProfile";
import AdminLogin from "./Components/AdminLogin";
import AdminDashboard from "./Components/AdminDashboard";
import AdminReset from "./Components/AdminReset";
import Adminchange from "./Components/AdminChange";
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
