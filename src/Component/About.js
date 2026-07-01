import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-hero">

        <h1>
          Learn, Compete & Grow 🚀
        </h1>

        <p>
          QuizMaster helps students and developers improve their
          skills through interactive quizzes, leaderboards,
          and real-world challenges.
        </p>

      </div>

      <div className="features">

        <div className="feature-card">
          <span>🧠</span>
          <h3>Interactive Quizzes</h3>
          <p>
            Test your knowledge with engaging quizzes across
            multiple technologies.
          </p>
        </div>

        <div className="feature-card">
          <span>🏆</span>
          <h3>Leaderboard</h3>
          <p>
            Compete with learners and climb the rankings.
          </p>
        </div>

        <div className="feature-card">
          <span>📈</span>
          <h3>Track Progress</h3>
          <p>
            Monitor your learning journey and improve over time.
          </p>
        </div>

      </div>

      <div className="about-bottom">

        <h2>Why Choose QuizMaster?</h2>

        <p>
          We believe learning should be fun, competitive,
          and rewarding. Our platform combines education
          with gamification to keep you motivated.
        </p>

      </div>

    </section>
  );
}

export default About;