 import "../style/Home.scss"
import Navbar from  "../Components/Navbar.jsx"
export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="ca-root">
      <section className="ca-intro">
        <h1>CodeAnalyzer</h1>
        <p>
          Paste your code, pick a language, and CodeAnalyzer reviews it for
          you — a quality score, errors, suggestions, and ways to optimize
          it, all in one report.
        </p>
      </section>

      <section className="ca-cards">
        <div className="ca-card">
          <h3>Code score</h3>
          <p>Get an overall score for your code based on quality, structure, and best practices.</p>
        </div>
        <div className="ca-card">
          <h3>Error detection</h3>
          <p>Finds bugs, syntax issues, and logic errors in the code you submit.</p>
        </div>
        <div className="ca-card">
          <h3>Suggestions</h3>
          <p>Get specific recommendations on how to improve readability, structure, and style.</p>
        </div>
        <div className="ca-card">
          <h3>Optimization tips</h3>
          <p>Learn where your code can run faster or use resources more efficiently.</p>
        </div>
        <div className="ca-card">
          <h3>Multi-language support</h3>
          <p>Submit code in the language of your choice — analysis adapts to each language's conventions.</p>
        </div>
        <div className="ca-card">
          <h3>Overall review</h3>
          <p>Get a summary review that ties the score, errors, and suggestions together in plain language.</p>
        </div>
      </section>

      <footer className="ca-footer">
        <span>© {new Date().getFullYear()} CodeAnalyzer</span>
      </footer>
    </div>
    </>
  );
}