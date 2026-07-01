import { useState } from "react";
import "./Codingcl.css";
import { useParams } from "react-router-dom";

import pythonQuestions from "./Python";
import javaQuestions from "./Java";
import phpQuestions from "./Php";
import cppQuestions from "./cpp";
import tsQuestions from "./ts";

import CodeEditor from "../Component/CodeEditor";

const subjects = {
  python: pythonQuestions,
  Java: javaQuestions,
  ts: tsQuestions,
  php: phpQuestions,
  cpp: cppQuestions
};

function CodingChallenges() {

  const { subject } = useParams();

  const activeSubject = subject || "python";

  const questionsList = subjects[activeSubject];

  const [index, setIndex] = useState(0);

  // ✅ Output State
  const [output, setOutput] = useState("");

  if (!questionsList) {
    return <h2>❌ Invalid Subject: {activeSubject}</h2>;
  }

  const question = questionsList[index];

  if (!question) {
    return <h2>No Question Found</h2>;
  }

  return (
    <div className="quiz-container">

      {/* LEFT SIDE */}
      <div className="left-section">

        <div className="question-box">
          <h2>{question.title}</h2>
          <p>{question.description}</p>
        </div>

        <CodeEditor
          key={question.id}
          starterCode={question.starterCode}
          language={question.language}
          questionId={question.id}
          setOutput={setOutput}   // ✅ Pass setOutput
        />

        {/* Navigation */}
        <div className="navigation-buttons">

          <button
            className="prev-btn"
            onClick={() => {
              setIndex(index - 1);
              setOutput(""); // Clear previous output
            }}
            disabled={index === 0}
          >
            ← Previous
          </button>

          <button
            className="next-btn"
            onClick={() => {
              setIndex(index + 1);
              setOutput(""); // Clear previous output
            }}
            disabled={index === questionsList.length - 1}
          >
            Next →
          </button>

        </div>

      </div>

      {/* RIGHT SIDE OUTPUT */}
      <div className="right-section">

        <h3>Output</h3>

        <div className="output-box">
          <pre>
            {output || "Click 'Run Code' to see the output..."}
          </pre>
        </div>

      </div>

    </div>
  );
}

export default CodingChallenges;