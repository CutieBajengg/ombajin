import React from "react";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <h1 className="home-title">Welcome!</h1>

          <p className="home-text">
            Welcome to my personal website! Here you can find information about me, my projects, and how to contact me.
          </p>
          <p className="home-subtext">
            Feel free to explore the different sections using the navigation links above.
          </p>
          <p className="home-subtext">Thank you for visiting!</p>
        </div>
      </div>

      <style>{`
        .home-container {
          min-height: 100vh;
          background-color: #121212;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .home-card {
          max-width: 700px;
          background-color: #1e1e1e;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
          color: #f0f0f0;
        }

        .home-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #66ccff;
          margin-bottom: 1rem;
          text-shadow: 0 0 8px rgba(102, 204, 255, 0.3);
        }

        .home-text {
          font-size: 1.15rem;
          color: #ccc;
          margin-bottom: 1rem;
        }

        .home-subtext {
          font-size: 1rem;
          color: #aaa;
          margin-bottom: 0.5rem;
        }

        @media (max-width: 600px) {
          .home-title {
            font-size: 2rem;
          }

          .home-text,
          .home-subtext {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
