import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
  if (!password || !confirm) {
    return setError("All fields required");
  }

  if (password !== confirm) {
    return setError("Passwords do not match");
  }

  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/auth/reset/${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      alert("Password updated successfully");
      navigate("/login");
    } else {
      setError(data.message || "Reset failed");
    }
  } catch (err) {
    setError("Server error");
  }
};

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow reset-card">
        <h4 className="mb-3">Reset Password</h4>

        {error && <p className="text-danger">{error}</p>}

        <input
          type="password"
          className="form-control mb-3"
          placeholder="New Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Confirm Password"
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button className="btn btn-success w-100" onClick={handleSubmit}>
          Update Password
        </button>
      </div>
    </div>
  );
}
