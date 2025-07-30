import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-card">
          <h1 className="contact-title">Contact Information</h1>

          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <p className="contact-detail">jaad.ombajin.au@phinmaed.com</p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <p className="contact-detail">+63 912 345 6789</p>
          </div>

          <p className="contact-note">
            Feel free to reach out via email or mobile if you have any questions or would like to connect!
          </p>
        </div>
      </div>

      <style>{`
        .contact-container {
          min-height: 100vh;
          background-color: #121212;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .contact-card {
          max-width: 600px;
          width: 100%;
          background-color: #1e1e1e;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
          color: #f0f0f0;
          text-align: center;
        }

        .contact-title {
          font-size: 2rem;
          font-weight: bold;
          color: #66ccff;
          margin-bottom: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .contact-icon {
          font-size: 1.3rem;
          color: #66ccff;
        }

        .contact-detail {
          font-size: 1.1rem;
          font-weight: 500;
          color: #ccc;
          word-break: break-word;
        }

        .contact-note {
          font-size: 0.95rem;
          color: #aaa;
          margin-top: 1.5rem;
        }

        @media (max-width: 600px) {
          .contact-card {
            padding: 1.5rem;
          }

          .contact-title {
            font-size: 1.6rem;
          }

          .contact-detail {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
