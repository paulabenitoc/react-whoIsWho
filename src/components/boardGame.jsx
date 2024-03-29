import React from 'react';

function BoardGame({ persons, disabledQuestions, handlePersonClick }) {
  return (
    <div className="b-board-game">
      {persons.map(person => (
        <img
          key={person.img}
          src={person.img}
          alt="Person"
          onClick={() => handlePersonClick(person)}
          style={{ pointerEvents: disabledQuestions.some(q => person[q]) ? 'none' : 'auto', opacity: disabledQuestions.some(q => person[q]) ? '0.2' : '1' }}
        />
      ))}
    </div>
  );
}

export default BoardGame;
