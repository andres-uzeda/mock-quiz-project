import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    //34
    {
      text: `Ud. está trabajando como el único probador en un proyecto
      pequeño con un modelo V, que acaba de publicar un borrador de
      la especificación de los requisitos. Considere las siguientes
      posibilidades:
      
      I) Ud. debería participar en una revisión del borrador.
      
      II) Ud. debería utilizar el borrador de la especificación de
      los requisitos para empezar el análisis y diseño de las
      pruebas de aceptación.
      
      III) — El borrador de la especificación de los requisitos puede
      servir como una base de las pruebas.
      
      IV) El borrador de la especificación de los requisitos puede
      servir como una base inmodificable de las pruebas.
      ¿Cuál de las siguientes afirmaciones es verdadera?
      A. I, II, III, y IV son todas verdaderas.
      B. II, III, y IV son verdaderas.
      C. Sólo la I es verdadera.
      D. I, II, y III son verdaderas.`,
      options: [
        { id: 0, text: `A) I, II, III, y IV son todas verdaderas.`, isCorrect: false },
        { id: 1, text: `B) II, III, y IV son verdaderas.`, isCorrect: false },
        { id: 2, text: `C) Sólo la I es verdadera.`, isCorrect: false },
        { id: 3, text: `D) I, II, y III son verdaderas.`, isCorrect: false },
      ],
    },
    //35
    {
      text: `¿Cuál de las siguientes afirmaciones es verdadera acerca de la
      adaptación de los modelos de desarrollo de software?`,
      options: [
        { id: 0, text: `A) Ud. puede adaptar los modelos para que se acomoden a las varias características de los proyectos y productos.`, isCorrect: false },
        { id: 1, text: `B) No debería proceder así, porque los que originaron los modelos son expertos.`, isCorrect: false },
        { id: 2, text: `C) No debería adaptar los modelos basados en los resultado de las pruebas, para evitar comprometer la calidad.`, isCorrect: false },
        { id: 3, text: `D) No debería preocuparse por esos modelos, porque no afectan las pruebas.`, isCorrect: false },
      ],
    },
    //36
    {
      text: `¿Cuál de las siguientes es una característica de buenas pruebas en
      cualquier proyecto, en cualquier nivel de prueba,
      independientemente del modelo del ciclo de vida?`,
      options: [
        { id: 0, text: `A) El objetivo principal de las pruebas es encontrar tantos defectos como sea posible.`, isCorrect: false },
        { id: 1, text: `B) Las pruebas de regresión no son afectadas por el modelo del ciclo de vida.`, isCorrect: false },
        { id: 2, text: `C) Los probadores deberían participar en la revisión de documentos.`, isCorrect: false },
        { id: 3, text: `D) Los probadores no deberían saber acercade los detalles estructurales de los productos que ellos están probando.`, isCorrect: false },
      ],
    },
    //37
    {
      text: `¿Qué es la validación?`,
      options: [
        { id: 0, text: `A) La confirmación de que los requisitos especificados se han cumplido.`, isCorrect: false },
        { id: 1, text: `B) La confirmación de que los requisitos para una utilización o aplicación intencionada y específica han sido cumplidos.`, isCorrect: false },
        { id: 2, text: `C) El proceso de probar un sistema integrado para verificar que cumple los requisitos especificados.`, isCorrect: false },
        { id: 3, text: `D) La parte de la gestión de la calidad enfocada en proporcionar la confianza en que los requisitos serán cumplidos.`, isCorrect: false },
      ],
    },
    //38
    {
      text: `Considere los siguientes niveles de madurez del CMMI:
      I) Inicial.
      II) Optimizado.
      III) Definido.
      IV) Gestionado.
      V) Gestionado cuantitativamente.
      ¿Cuál afirmación pone estos niveles en su orden correcto?`,
      options: [
        { id: 0, text: `A) I, II, III, IV, V.`, isCorrect: false },
        { id: 1, text: `B) I, III, IV, V, II.`, isCorrect: false },
        { id: 2, text: `C) I, IV, III, V, II.`, isCorrect: false },
        { id: 3, text: `D) II, I, III, IV, V.`, isCorrect: false },
      ],
    },
    //39
    {
      text: `¿Cuál de los siguientes se aborda como una sección principal en
      el estándar IEEE 12207?`,
      options: [
        { id: 0, text: `A) Los principales procesos del ciclo de vida.`, isCorrect: false },
        { id: 1, text: `B) Los criterios de suspensión/ reanudación.`, isCorrect: false },
        { id: 2, text: `C) Las revisiones técnicas.`, isCorrect: false },
        { id: 3, text: `D) Los refinamientos del Método.`, isCorrect: false },
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
