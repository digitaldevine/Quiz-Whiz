import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2>CodeQuiz</h2>

          <p>
            Learn Web Development, Python and Java
            through interactive quizzes and challenges.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/quiz">Topics</a>
          <a href="/leaderboard">Leaderboard</a>
          <a href="/about">About</a>
        </div>

        <div className="footer-links">
          <h3>Topics</h3>

          <Link to="/quiz/php">Php</Link>
          <Link to="/quiz/cpp">C++</Link>
          <Link to="/quiz/python">Python</Link>
          <Link to="/quiz/ts">TypeScript</Link>
          <Link to="/quiz/Java">Java</Link>
        </div>

      </div>

      <div className="copyright">
        © 2026 CodeQuiz. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;