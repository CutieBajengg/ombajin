import React from "react";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <div className="projects-card">
          <h1 className="projects-title">Projects</h1>
          <p className="projects-text">Here you can find a list of my projects and contributions.</p>
          <a
            href="https://github.com/CutieBajengg"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-link"
          >
            github.com/CutieBajengg
          </a>
          <p className="projects-subtext">Feel free to explore and check out the code on my GitHub!</p>
          <p className="projects-subtext">Thank you for your interest!</p>
        </div>
      </div>

      <style>{`
        .projects-container {
          min-height: 100vh;
          background-color: #121212;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .projects-card {
          max-width: 700px;
          background-color: #1e1e1e;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
          color: #f0f0f0;
        }

        .projects-title {
          font-size: 2rem;
          font-weight: bold;
          color: #66ccff;
          margin-bottom: 1rem;
          text-shadow: 0 0 8px rgba(102, 204, 255, 0.3);
        }

        .projects-text {
          font-size: 1.1rem;
          color: #ccc;
          margin-bottom: 1rem;
        }

        .projects-link {
          display: inline-block;
          font-size: 1rem;
          color: #66ccff;
          font-weight: 500;
          text-decoration: none;
          margin-bottom: 1rem;
          transition: color 0.3s ease;
        }

        .projects-link:hover {
          color: #88ddff;
        }

        .projects-subtext {
          font-size: 0.95rem;
          color: #aaa;
          margin-top: 0.4rem;
        }

        @media (max-width: 600px) {
          .projects-title {
            font-size: 1.6rem;
          }

          .projects-text,
          .projects-link,
          .projects-subtext {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Projects;
