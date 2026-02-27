export default function ChangePassword() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card p-4 shadow">
            <h4 className="mb-3">Change Password</h4>

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Old Password"
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="New Password"
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Confirm Password"
            />

            <button className="btn btn-warning w-100">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
