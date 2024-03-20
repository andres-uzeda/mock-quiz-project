import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    //7
    {
      text: `Considerar los siguientes objetivos. 
      I. Encontrar los defectos.
      II. Ganar la confianza en el sistema. 
      II. Proporcionar información acerca del sistema.
      IV. Prevenir los defectos.
      V. Eliminarlos defectos.
      ¿Cuál de los siguientes enumeran los objetivos comunes de las l
      pruebas?`,
      options: [
        { id: 0, text: `A) I, II, III, IV, y V.`, isCorrect: false },
        { id: 1, text: `B) I, II, y IV.`, isCorrect: false },
        { id: 2, text: `C) I, II, III y IV.`, isCorrect: true },
        { id: 3, text: `D) I y V.`, isCorrect: false },
      ],
    },
    {
      text: `Un probador participa en una revisión de requisitos e identifica
      ambiguedades que podrían haber resultado en equivocaciones de
      programación. Este es un ejemplo de ¿Cuál de los siguientes
      propósitos de las pruebas?`,
      options: [
        { id: 0, text: `A) Encontrar defectos.`, isCorrect: false },
        { id: 1, text: `B) Proporcionar confianza.`, isCorrect: false },
        { id: 2, text: `C) Prevenir defectos.`, isCorrect: true },
        { id: 3, text: `D) Proporcionar información.`, isCorrect: false },
      ],
    },
    {
      text: `¿Cuál de los siguientes es un ejemplo de la depuración?`,
      options: [
        { id: 0, text: `A) La observación de una anomalía.`, isCorrect: false },
        { id: 1, text: `B) La repetición de la prueba de una corrección del defecto.`, isCorrect: false },
        { id: 2, text: `C) La preselección de un defecto.`, isCorrect: false },
        { id: 3, text: `D) La corrección de un defecto.`, isCorrect: true },
      ],
    },
    {
      text: `¿Cuáles actividades están involucradas en las pruebas?`,
      options: [
        { id: 0, text: `A) Las actividades al final del ciclo de vida del software.`, isCorrect: false },
        { id: 1, text: `B) Sólo las actividades que evalúan los productos del software.`, isCorrect: false },
        { id: 2, text: `C) Lasactividades que involucran la ejecución de una prueba por el componente o el sistema sometido a pruebas.`, isCorrect: false },
        { id: 3, text: `D) Las actividades a través de todo el ciclo de vida del software, incluyendo la planificación, preparación y evaluación.`, isCorrect: true },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>ISTQB Foundation Level Mock Quiz</h1>

      {/* 2. Current Score  */}
      <h2>Right Answers Count Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
