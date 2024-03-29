import React, { useState, useEffect } from 'react';
import persons from './components/persons';
import { questionsType } from './components/questionsType';
import './index.css';

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [clueCount, setClueCount] = useState(0);
  const [disabledQuestions, setDisabledQuestions] = useState([]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * persons.length);
    setSelectedPerson(persons[randomIndex]);
  }, []);

  const handleQuestionClick = (question, answer) => {
    setDisabledQuestions([...disabledQuestions, question.key]);

    const isMatch = selectedPerson[question.key] === answer;

    setClueCount(clueCount + 1);

    const updatedDisabledQuestions = persons.filter(person => person[question.key] !== answer).map(person => person.img);
    setDisabledQuestions([...disabledQuestions, ...updatedDisabledQuestions]);
  };

  const handlePersonClick = person => {
    if (person.img === selectedPerson.img) {
      alert(`FELICIDADES 🏆; has usado ${clueCount} pistas.`);
    } else {
      alert(`Has perdido 😪`);
    }

    setClueCount(0);
    setDisabledQuestions([]);

    const randomIndex = Math.floor(Math.random() * persons.length);
    setSelectedPerson(persons[randomIndex]);
  };

  return (
    <div className="App">
      <h2 className="clues-container">Pistas: <span data-function="clueCount">{clueCount}</span></h2>
      <div className="board-game-container">
        {persons.map(person => (
          <img
            key={person.img}
            src={person.img}
            alt="Person"
            onClick={() => handlePersonClick(person)}
            className={disabledQuestions.some(q => person[q]) ? 'disabled' : ''}
          />
        ))}
      </div>
      <div className="questions-container">
        {questionsType.map(question => (
          <div key={question.title}>
            <h2>{question.title}</h2>
            {question.questions.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(question, answer)}
                disabled={disabledQuestions.includes(question.key)}
              >
                {answer}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
