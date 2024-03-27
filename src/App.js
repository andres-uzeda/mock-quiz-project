import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    // Start 11
    {
      text: `Considerar el siguiente escenario. Usted está probando un producto
      y ha encontrado 100 defectos. Dos tercios de esos defectos están en la
      interfaz de usuario y los módulos del control de acceso, mientras
      que los restantes 33 están esparcidos entre los otros 6 módulos.
      ¿Cuál de los siguientes es el principio que más aplica a este
      escenario?`,
      options: [
        { id: 0, text: `A) El agrupamiento de defectos.`, isCorrect: true },
        { id: 1, text: `B) La falacia de la ausencia de errores.`, isCorrect: false },
        { id: 2, text: `C) Las pruebas exhaustivas son imposibles.`, isCorrect: false },
        { id: 3, text: `D) Controlar activamente el diseño de las pruebas mientras realiza esas pruebas.`, isCorrect: false },
      ],
    },
    {
      text: `Las pruebas exhaustivas involucran:`,
      options: [
        { id: 0, text: `A) Todos los pares de los valores de entrada y las precondiciones`, isCorrect: false },
        { id: 1, text: `B) Por lo menos uno de cada valor posible de las entradas y las precondiciones.`, isCorrect: false },
        { id: 2, text: `C) Todas las combinaciones de los valores de entrada y las precondiciones.`, isCorrect: true },
        { id: 3, text: `D) Todas las combinaciones de los valores de entrada y salida.`, isCorrect: false },
      ],
    },
    {
      text: `¿Cuál de las siguientes tareas de las pruebas es una parte de la
      actividad de la planificación de las pruebas?`,
      options: [
        { id: 0, text: `A) Medir y analizar los resultados.`, isCorrect: false },
        { id: 1, text: `B) Determinar los criterios de salida`, isCorrect: true },
        { id: 2, text: `C) Revisar las bases de las pruebas.`, isCorrect: false },
        { id: 3, text: `D) Comprobar los registros de las pruebas contra los criterios de salida.`, isCorrect: false },
      ],
    },
    {
      text: `¿Por qué ejecutamos las pruebas de confirmación?`,
      options: [
        { id: 0, text: `A) Para demostrar la aptitud para el propósito.`, isCorrect: false },
        { id: 1, text: `B) Para asegurar que los defectos no han sido introducidos en las áreas no modificadas.`, isCorrect: false },
        { id: 2, text: `C) Para determinar si un componente o sistema satisface o no las necesidades de un usuario/ cliente.`, isCorrect: false },
        { id: 3, text: `D) Para verificar el éxito de las acciones correctivas`, isCorrect: true },
      ],
    },
    {
      text: `¿Por qué es importante declarar claramente los objetivos de
      pruebas?`,
      options: [
        { id: 0, text: `A) Porque la gente tiende a alinear sus planes con los objetivos establecidos por la gerencia.`, isCorrect: true },
        { id: 1, text: `B) Porque la cobertura debe ser medida contra los objetivos de las pruebas.`, isCorrect: false },
        { id: 2, text: `C) Porque el nivel de riesgo del producto es determinado por 1os objetivos de las pruebas.`, isCorrect: false },
        { id: 3, text: `D) Porque la identificación de los objetivos de las pruebas es una tarea principal en las actividades de planificación.`, isCorrect: false },
      ],
    },
    {
      text: `Para mantener la motivación, los probadores y desarrolladores :
      necesitan por igual la mentalidad correcta. Los buenos
      desarrolladores deben tener una actitud positiva acerca de su
      habilidad y la habilidad de su equipo para tratar los riesgos tanto de
      de negocios como técnicos que confrontan sus proyectos de
      programación. ¿Cuál de las siguientes describe exactamente la
      mentalidad diferente de un buen probador?`,
      options: [
        { id: 0, text: `A) Los buenos probadores identifican fallas con la intención de ser críticos acerca del producto y el autor.`, isCorrect: false },
        { id: 1, text: `B) Los buenos probadores dicen la verdad como la ven y noestán terriblemente preocupados en cómo la gente va a reaccionar a esos hechos.`, isCorrect: false },
        { id: 2, text: `C) Los buenos probadores son profesionales pesimistas que creen que el producto contiene probablemente defectos y que ellos pueden encontrarlos.`, isCorrect: true },
        { id: 3, text: `D) Los buenos probadores se enfocan más en los riesgos técnicos que en los riesgos de negocios, porque ellos quieren encontrar tantos defectos como sea posible`, isCorrect: false },
      ],
    },
    {
      text: `¿Cuál meta fomenta la independencia de las pruebas?`,
      options: [
        { id: 0, text: `A) La reducción de los costos de las pruebas antes de la liberación.`, isCorrect: false },
        { id: 1, text: `B) La maximización de las pruebas por medio de aquellos que están familiarizados con el código.`, isCorrect: false },
        { id: 2, text: `C) El mejoramiento de la comunicación y las relaciones entre los probadores y otros.`, isCorrect: false },
        { id: 3, text: `D) Proporcionar un mayor grado de objetividad y reducir la parcialidad del autor.`, isCorrect: true },
      ],
    },
    // Finish 17
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
