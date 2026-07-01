import { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import "./CodeEditor.css";

function CodeEditor({
    starterCode,
    language,
    questionId,
    setOutput
}) {

    const [code, setCode] = useState(starterCode);
    const [input, setInput] = useState("");

    const runCode = async () => {
        console.log("STEP 1");

        try {
            console.log("STEP 2");

            const token = localStorage.getItem("token");
            console.log("TOKEN:", token);

            console.log("STEP 3");

            const res = await axios.post(
                "https://backend-7aq8.onrender.com/api/code/run",
                {
                    code,
                    language,
                    questionId,
                    input
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            console.log("STEP 4");
            console.log(res.data);
            if (res.data.alreadySolved) {
                alert("⚠️ You have already solved this question!");
            }

            setOutput(
                res.data.output ||
                res.data.error ||
                "No output"
            );

        } catch (err) {
            console.log("STEP ERROR");
            console.log(err);
        }
    };

    return (
        <div className="editor-layout">

            <div className="editor-section">

                <Editor
                    height="500px"
                    language={language}
                    value={code}
                    onChange={(value) => setCode(value || "")}
                    theme="vs-dark"
                />

                {/* Input Section */}
                <div className="input-section">
                    <div className="input-header">
                        Input
                    </div>

                    <textarea
                        className="input-box"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter program input here..."
                    />
                </div>

                <button
                    className="run-btn"
                    onClick={runCode}
                >
                    Run Code
                </button>

            </div>

        </div>
    );
}

export default CodeEditor;