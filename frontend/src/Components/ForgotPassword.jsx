import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      alert("Please enter email");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:10000/api/auth/forget",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Something went wrong");
      } else {
        alert(data.message);
        setEmail("");
      }
    } catch (err) {
      alert("Server not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow forgot-card">
        <h4 className="mb-3">Forgot Password</h4>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="btn btn-primary w-100"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </div>

      <style>{`
        .forgot-card {
          width: 100%;
          max-width: 380px;
        }
      `}</style>
    </div>
  );
}
