import React, { useState } from "react";

export default function Jobdetails() {
  const [files, setFiles] = useState({});

  const handleFileChange = (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(files).forEach((key) => {
      formData.append(key, files[key]);
    });

    // Example: send to backend
    // fetch('/api/upload', { method: 'POST', body: formData })

    console.log("Files ready for upload:", files);
    alert("Documents prepared for upload (check console)");
  };

  const documents = [
    { key: 'offerLetter', label: 'Upload Offer Letter' },
    { key: 'birthCertificate', label: 'Upload Birth Certificate' },
    { key: 'guarantorForm', label: "Upload Guarantor’s Form" },
    { key: 'degreeCertificate', label: 'Upload Degree Certificate' }
  ];

  return (
    <div className="container py-5">
      <style>{`
        .upload-card {
          max-width: 900px;
          margin: auto;
        }
        .upload-card h5 {
          font-weight: 600;
          margin-bottom: 28px;
        }
        .upload-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .file-display {
          flex: 1;
          background-color: #eaf2fb;
          border-radius: 12px;
          height: 48px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          font-size: 14px;
          color: #555;
          overflow: hidden;
        }
        .btn-upload {
          background-color: #ffc107;
          font-weight: 600;
          padding: 10px 28px;
          border-radius: 10px;
          border: none;
        }
        .btn-submit {
          background-color: #243c8f;
          color: #fff;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 10px;
        }
        input[type=file] {
          display: none;
        }
      `}</style>

      <div className="upload-card">
        <h5>Job Details / Upload Documents</h5>

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          {documents.map((doc) => (
            <div key={doc.key}>
              <label className="form-label text-muted">{doc.label}</label>
              <div className="upload-row">
                <div className="file-display">
                  {files[doc.key]?.name || 'No file selected'}
                </div>
                <label className="btn btn-upload mb-0">
                  Upload
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange(e, doc.key)}
                  />
                </label>
              </div>
            </div>
          ))}

          <div className="text-center mt-5">
            <button type="submit" className="btn btn-submit">
              Upload Documents
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
