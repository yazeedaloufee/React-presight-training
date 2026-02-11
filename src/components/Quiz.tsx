import React from 'react';

const Quiz: React.FC = () => {
  return (
    <div className="quiz">
      <h1>Quiz</h1>
      <p>Question 1 of 10</p>
      <div className="question">
        <h2>What is the capital of France?</h2>
        <div className="options">
          <button>London</button>
          <button>Berlin</button>
          <button>Paris</button>
          <button>Madrid</button>
        </div>
      </div>
      <div className="quiz-controls">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Quiz;