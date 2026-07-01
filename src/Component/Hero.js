import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">
            🚀 Learn • Practice • Master
          </span>

          <h1>
            Level Up Your Coding Skills With Interactive Quizzes
          </h1>

          <p>
            Test your knowledge in Web Development, Python, and Java.
            Challenge yourself with real coding questions and track
            your progress as you grow.
          </p>

          <div className="hero-buttons">
            <Link to="/Challange">
            <button className="primary-btn">Start Quiz</button>
            </Link>
            <Link to="/quiz">
              <button className="secondary-btn">
                Explore Topics
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="quiz-box">
            <h3>Quick Challenge</h3>

            <p>What is the output of:</p>

            <pre>
              {`print(2 + 3 * 2)`}
            </pre>

            <button>Answer Quiz</button>
          </div>
        </div>
      </section>

      <section className="tech-section">
        <div className="tech-card">
          <div className="icon">🌐</div>
          <h3>HTML</h3>
          <p>
            Learn the foundation of every website by mastering
            page structure and content.
          </p>
        </div>

        <div className="tech-card">
          <div className="icon">🐍</div>
          <h3>Python</h3>
          <p>
            Practice programming concepts, problem-solving,
            and real-world coding challenges.
          </p>
        </div>

        <div className="tech-card">
          <div className="icon">☕</div>
          <h3>Java</h3>
          <p>
            Build strong object-oriented programming skills and
            backend development knowledge.
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;