import { useState } from "react";
import { useCodeReview } from "../hooks/useCodeAnalysis";
import { useNavigate } from "react-router";
import "../style/Analyzer.css"

const Analyzer = () => {
  const navigate = useNavigate();
  const { handleCodeReview } = useCodeReview();

  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleCodeReview({
        language,
        code,
      });

      navigate("/showresult")
    } catch (error) {
      console.error("Error during code analyze:", error);
    console.log(error.response?.data);
    throw error;
    }
  };

  return (
    <div className="analyzer-page">
      <h1>Code Analyzer</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="language">Language</label>
          <br />

          <select
            id="language"
            name="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Select Language</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
            <option value="c">C</option>
          </select>
        </div>

        <br />

        <div>
          <label htmlFor="code">Code</label>
          <br />

          <textarea
            id="code"
            name="code"
            rows={15}
            cols={80}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your code here..."
          />
        </div>

        <br />

        <button type="submit">
          Analyze Code
        </button>
      </form>
    </div>
  );
};

export default Analyzer;