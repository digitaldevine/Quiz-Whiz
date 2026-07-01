import React from "react";
import "./QuizCard.css";
import { Link } from "react-router-dom";

const QuizCard = () => {
  return (
    <div className="quiz-container">




      <div className="quiz-card">
        <div className="quiz-icon">💻</div>
        <h2>C++ Quiz</h2>
        <p>Test your C++ programming skills</p>

        <div className="card-bottom">
          <span>Intermediate</span>

          <Link to="/quiz/cpp">
            <button>Start →</button>
          </Link>
        </div>
      </div>
      <div className="quiz-card">


        <div className="quiz-icon">🐘</div>
        <h2>PHP Quiz</h2>
        <p>Test your PHP development skills</p>

        <div className="card-bottom">
          <span>Intermediate</span>

          <Link to="/quiz/php">
            <button>Start →</button>
          </Link>
        </div>
      </div>


      <div className="quiz-card">
        <div className="quiz-icon">⚡</div>
        <h2>TypeScript Quiz</h2>
        <p>Test your ts knowledge</p>
        <div className="card-bottom">
          <span>Advanced</span>
          <Link to="/quiz/ts">
            <button>Start →</button>
          </Link>
        </div>
      </div>
      <div className="quiz-card">
        <div className="quiz-icon">☕</div>
        <h2>Java Quiz</h2>
        <p>Test your Java programming skills</p>

        <div className="card-bottom">
          <span>Intermediate</span>
          <Link to="/quiz/Java">
            <button>Start →</button>
          </Link>
        </div>
      </div>

      <div className="quiz-card">
        <div className="quiz-icon">🐍</div>
        <h2>Python Quiz</h2>
        <p>Test your Python programming knowledge</p>

        <div className="card-bottom">
          <span>Beginner to Advanced</span>
          <Link to="/quiz/python">
            <button>Start →</button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default QuizCard;