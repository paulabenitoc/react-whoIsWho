import React from 'react';

function Questions({ questionsType, disabledQuestions, handleQuestionClick }) {
  return (
    <div className="b-questions">
      {questionsType.map(question => (
        <div key={question.title}>
          <h2>{question.title}</h2>
          {question.questions.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleQuestionClick(question, answer)}
              disabled={disabledQuestions.includes(question.key)}>
              {answer}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Questions;