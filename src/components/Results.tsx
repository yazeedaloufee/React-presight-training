import React from 'react';

const Results: React.FC = () => {
  return (
    <div className="results">
      <h1>Quiz Results</h1>
      <div className="score">
        <h2>Your Score: 8/10</h2>
        <p>Great job! You answered 80% of the questions correctly.</p>
      </div>
      <div className="actions">
        <button>Try Again</button>
        <button>Back to Home</button>
      </div>
    </div>
  );
};

export default Results;