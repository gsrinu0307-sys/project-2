import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 const handleLogin = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const res = await fetch(
      `${process.env.VITE_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      }
    );

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Login failed");
      return;
    }

    alert("✅ Login Successful");

    localStorage.setItem("user", JSON.stringify(data.user));

    navigate("/employeedashboard");
  } catch (err) {
    setError("Server not reachable");
  }
};

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card p-4 shadow login-card">
      
        <h3 className="text-center mb-3">Employee Login</h3>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <div className="text-danger text-center mb-2">
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100 mb-2">
            Login
          </button>
        </form>

        <p className="text-center">
          <span
            className="text-primary pointer"
            onClick={() => navigate("/forget")}
          >
            Forgot Password?
          </span>
        </p>
      </div>

      <style>
        {`
          .login-card {
            width: 100%;
            max-width: 400px;
          }
          .pointer {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
