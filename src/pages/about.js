import React from "react";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-card">
          <h1 className="about-title">About Me</h1>
          <p className="about-text">
            Hi! I'm <span className="highlight">Jayrus Adante Ombajin</span>, currently studying{" "}
            <span className="emphasis">BSIT majoring in System Development</span>. I’m passionate
            about building clean, functional, and creative tech solutions.
          </p>
        </div>
      </div>

      <style>{`
        .about-container {
          min-height: 100vh;
          background-color: #121212;
          color: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .about-card {
          max-width: 700px;
          background-color: #1e1e1e;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
          text-align: center;
        }

        .about-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #66ccff;
          margin-bottom: 1rem;
        }

        .about-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #ccc;
        }

        .highlight {
          color: #66ccff;
          font-weight: 600;
        }

        .emphasis {
          color: #f0f0f0;
          font-weight: 500;
        }

        @media screen and (max-width: 600px) {
          .about-card {
            padding: 1.5rem;
          }

          .about-title {
            font-size: 2rem;
          }

          .about-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default About;
