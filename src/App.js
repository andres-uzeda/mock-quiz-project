import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Cual de los siguientes escenarios describen una forma en la cual un defecto del software puede causar principalmente y directamente daños a una compañia",
      options: [
        { id: 0, text: "A) Un banco que genera el 5% de sus ingresos de las comisiones de los cajeros automaticos, sufre una caida de su red debido a un defecto del software", isCorrect: true },
        { id: 1, text: "B) El software de navegacion de un automovil muestra rutas a traves de rios utilizando el mismo icono tanto para balsa como un puente", isCorrect: false },
        { id: 2, text: "C) El software de moniteroe de emisiones informa demasiado poco acerca el porcentaje de gases toxicos en una fabrica", isCorrect: false },
        { id: 3, text: "D) Un encargado de ventas escribe la letra l en vez del numeral 1 donde este deberia haber estado, por lo que una propuesta importante de negocio no fue enviada", isCorrect: false },
      ],
    },
    {
      text: `Considerar la siguiente secuencia de eventos.
      I. Un jefe decide eliminar las revisiones del cédigo enun intento de acelerar las pruebas.
      II. Una operacién esencial de datos, de la cual otro subsistema depende en una aplicacion bancaria, fue eliminada por un programador quien realiza el trabajo de : mantenimiento en un fragmento de codigo desconocido
      II. Un cajero automatico no puede actualizar la direccion de un cliente después de que la entrega de mantenimiento es instalada.
      IV. El cliente impactado por el software de mala calidad que esta siendo utilizado para administrar su dinero, se cambia de banco. Cual de las siguientes afirmaciones es verdadera?`,
      options: [
        { id: 0, text: "A) I es el defecto, II es la causa rafz, y III y IV son efectos.", isCorrect: false },
        { id: 1, text: "B) I es el efecto, Il es la causa rafz, y II y IV son defectos.", isCorrect: false },
        { id: 2, text: "C) I es la causa raiz, II y III son defectos y IV es el efecto.", isCorrect: false },
        { id: 3, text: "D) I es la causa raiz, II es el defecto, y III y IV son efectos.", isCorrect: true },
      ],
    },
    {
      text: `Cual de los siguientes es el mejor ejemplo de por que las pruebas son necesarias?`,
      options: [
        { id: 0, text: "A) Los Jefes de proyectos escriben los planes del proyecto. Los interesados del proyecto no siempre revisan los planes del proyecto.", isCorrect: false },
        { id: 1, text: "B) El software moderno puede contener mas de un millon de lineas de codigo. Segun estudios de la industria, el programador promedio de C, introduce un defecto por cada 25 lineas de codigo.", isCorrect: true },
        { id: 2, text: " C) Los usuarios tienen ideas inusuales acerca de lo que el software deberia poder hacer. Los programadores no entienden a los usuarios.", isCorrect: false },
        { id: 3, text: "D) El personal del soporte técnico confia en soluciones alternativas para asistir a los clientes con defectos conocidos Los probadores son las unicas personas que encuentran soluciones alternativas para los defectos.", isCorrect: false },
      ],
    },
    {
      text: `¿Cuál de los siguientes es un ejemplo de que las pruebas contribuyen a mejorar la calidad?`,
      options: [
        { id: 0, text: "A) Un Jefe de proyecto le pide a un líder de pruebas que estime el esfuerzo de las pruebas.", isCorrect: false },
        { id: 1, text: "B) Un probador instala un ítem de pruebas en el entorno de pruebas.", isCorrect: false },
        { id: 2, text: "C) Un probador encuentra un defecto que es resuelto antes de la liberación.", isCorrect: true },
        { id: 3, text: "D) Un líder de pruebas escribe un informe del resumen de las pruebas.", isCorrect: false },
      ],
    },
    {
      text: `¿Hay la misma relación entre el significado de las palabras “equivocación” y “error” que entre los siguientes pares de palabras?`,
      options: [
        { id: 0, text: `A) “Falla” y “bug”.`, isCorrect: false },
        { id: 1, text: `B) “Falla” y “defecto”.`, isCorrect: false },
        { id: 2, text: `C) “Error” y “defecto”.`, isCorrect: false },
        { id: 3, text: `D) “Defecto” y “bug”.`, isCorrect: true },
      ],
    },
    {
      text: `Un componente de calidad es el que:`,
      options: [
        { id: 0, text: `A) Satisface las necesidades del usuario y cliente.`, isCorrect: true },
        { id: 1, text: `B) Fue terminado a tiempo`, isCorrect: false },
        { id: 2, text: `C) Requirió menos esfuerzo que la cantidad estimada.`, isCorrect: false },
        { id: 3, text: `D) Estuvo sujeto a una revisión de código.`, isCorrect: false },
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
