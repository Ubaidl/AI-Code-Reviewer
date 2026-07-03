import { useContext } from "react";
import { Codecontext } from "../codeanalyzer.context";
import "../style/result.css"

const Result = () => {
  const { analysis } = useContext(Codecontext);

  const handleCopy = () => {
    navigator.clipboard.writeText(analysis.optimizedCode);
    alert("Code copied successfully!");
  };

  if (!analysis) {
    return <h2>No analysis found.</h2>;
  }

  return (
    <div>
      <h1>Code Analysis Result</h1>

      <hr />

      <h2>Language</h2>
      <p>{analysis.language}</p>

      <h2>Overall Review</h2>
      <p>{analysis.overallReview}</p>

      <h2>Score</h2>
      <p>{analysis.score}/10</p>

      <h2>Time Complexity</h2>
      <p>{analysis.complexity?.time}</p>

      <h2>Space Complexity</h2>
      <p>{analysis.complexity?.space}</p>

      <h2>Errors</h2>
      {analysis.errors?.length > 0 ? (
        <ul>
          {analysis.errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      ) : (
        <p>No errors found.</p>
      )}

      <h2>Suggestions</h2>
      {analysis.suggestions?.length > 0 ? (
        <ul>
          {analysis.suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      ) : (
        <p>No suggestions found.</p>
      )}

      <h2>Optimized Code</h2>

      <button onClick={handleCopy}>
        Copy Optimized Code
      </button>

      <pre>
        <code>{analysis.optimizedCode}</code>
      </pre>
    </div>
  );
};

export default Result;