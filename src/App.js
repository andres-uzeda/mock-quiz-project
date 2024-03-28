import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    // start 18
    {
      text: `Un probador está trabajando en un proyecto importante para su
      compañía, la cual es grande y cotiza en la bolsa. El encuentra
      muchos defectos durante las pruebas, lo cual él cree que provocará
      que el proyecto fracase, con un efecto negativo en los precios de las
      acciones de la compañía. El comparte esta información con su primo,
      quién utiliza esta información para colocar negocios en contra de la
      compañía en el mercado de acciones. Este es un ejemplo de falta de
      ética relacionada a ¿Cuál de las siguientes del código de éticas del
      probador?`,
      options: [
        { id: 0, text: `A) El cliente y empleador.`, isCorrect: true },
        { id: 1, text: `B) El público.`, isCorrect: false },
        { id: 2, text: `C) El juicio.`, isCorrect: false },
        { id: 3, text: `D) La gestión.`, isCorrect: false },
      ],
    },
    // 19
    {
      text: `Un objetivo común de las pruebas es el suministro de información.
      Las pruebas deben proporcionar la suficiente información a los
      interesados del negocio para tomar decisiones informadas acerca de
      la versión del software o sistema que está siendo probado. ¿Cuál de
      las siguientes es una actividad fundamental del proceso de pruebas,
      durante la cual es evaluada la cantidad suficiente de las pruebas y la
      información resultante?`,
      options: [
        { id: 0, text: `A) El análisis y diseño.`, isCorrect: false },
        { id: 1, text: `B) La implementación y ejecución.`, isCorrect: false },
        { id: 2, text: `C) La evaluación del criterio de salida y la creación de informes.`, isCorrect: true },
        { id: 3, text: `D) La especificación de requisitos.`, isCorrect: false },
      ],
    },
    // 20
    {
      text: `Un jefe de pruebas presenta un informe del resumen del estado de
      las pruebas al equipo del proyecto. Basado en este informe, el
      equipo del proyecto decide extender el período de la ejecución de las
      pruebas por tres semanas para permitir que defectos adicionales
      sean encontrados y corregidos. ¿Qué ilustra esta situación?`,
      options: [
        { id: 0, text: `A) La contribución de las pruebas a la más alta calidad.`, isCorrect: true },
        { id: 1, text: `B) El proceso básico de pruebas.`, isCorrect: false },
        { id: 2, text: `C) La mentalidad opuesta de los desarrolladores y probadores.`, isCorrect: false },
        { id: 3, text: `D) La falacia de la ausencia de errores.`, isCorrect: false },
      ],
    },
    // 21
    {
      text: `Considerar lo siguiente:
      I. Prevenir los defectos. 
      
      II. Er Eliminar los defectos.
      
      III. — Ganarla confianza en el sistema.
      
      IV. — Proporcionar información.
      
      V. Encontrar los defectos.
      Cuál de las siguientes afirmaciones es verdadera?`,
      options: [
        { id: 0, text: `A) Todos son objetivos comunes de las pruebas.`, isCorrect: false },
        { id: 1, text: `B) I, II, III, y V son objetivos comunes de las pruebas.`, isCorrect: false },
        { id: 2, text: `C) I, II IV, y V son objetivos comunes de las pruebas.`, isCorrect: true },
        { id: 3, text: `D) II y V son objetivos comunes de las pruebas.`, isCorrect: false },
      ],
    },
    // 22
    {
      text: `¿Cuál de los siguientes es un principio general de las pruebas?`,
      options: [
        { id: 0, text: `A) La planificación y el control.`, isCorrect: false },
        { id: 1, text: `B) Las pruebas tempranas.`, isCorrect: true },
        { id: 2, text: `C) El análisis y diseño.`, isCorrect: false },
        { id: 3, text: `D) La implementación y ejecución.`, isCorrect: false },
      ],
    },
    //23
    {
      text: `Un probador está realizando una prueba. El observa una inusual
      cantidad de accesos a la red durante un período, cuando él sabe que
      la aplicación no debería acceder a la red. Aún cuando la prueba no
      especifica la comparación del acceso real a la red con un resultado
      esperado, el probador decide investigar. Éste es un ejemplo ¿De
      qué?`,
      options: [
        { id: 0, text: `A) Una mentalidad curiosa del probador.`, isCorrect: true },
        { id: 1, text: `B) Una comunicación efectiva del probador con el desarrollo.`, isCorrect: false },
        { id: 2, text: `C) Un probador realizando pruebas exhaustivas.`, isCorrect: false },
        { id: 3, text: `D) Un probador realizando las pruebas de mantenimiento.`, isCorrect: false },
      ],
    },
    //24
    {
      text: `¿Qué son las pruebas de regresión?`,
      options: [
        { id: 0, text: `A) Las pruebas que ejecutan los casos de prueba que fallaron la última vez que fueron ejecutados.`, isCorrect: false },
        { id: 1, text: `B) Las pruebas de un programa ya antes probado tras a una modificación.`, isCorrect: true },
        { id: 2, text: `C) Un sinónimo de pruebas de confirmación.`, isCorrect: false },
        { id: 3, text: `D) Las pruebas para determinar la fiabilidad de un producto de software.`, isCorrect: false },
      ],
    },
    //25
    {
      text: `Está ejecutando una prueba escrita que otros probadores la han
      ejecutado previamente. Adicionalmente esta prueba ha encontrado
      defectos previamente, y esos defectos han sido confirmados para ser
      corregidos. El jefe de pruebas le recomienda a usted a variar la
      forma específica en la cual usted ejecuta las pruebas, así como el
      orden de ciertas acciones, la utilización del ratón versus las teclas de
      acceso rápido y los valores de entrada específicos, basados en la
      manera en que los usuarios utilizarán el sistema. ¿Cuál de los
      siguientes es un principio de las pruebas que podría explicar la
      indicación del jefe de pruebas?`,
      options: [
        { id: 0, text: `A) Las pruebas tempranas.`, isCorrect: false },
        { id: 1, text: `B) Las pruebas aleatorias.`, isCorrect: false },
        { id: 2, text: `C) La paradoja del pesticida.`, isCorrect: true },
        { id: 3, text: `D) La falacia de la ausencia de errores.`, isCorrect: false },
      ],
    },
    //26
    {
      text: `Las pruebas pueden:`,
      options: [
        { id: 0, text: `A) Medir la calidad del software según los defectos encontrados.`, isCorrect: true },
        { id: 1, text: `B) Eliminar la posibilidad de que no hay defectos no descubiertos.`, isCorrect: false },
        { id: 2, text: `C) Encontrar nuevos defectos a través de la repetición de las mismas pruebas.`, isCorrect: false },
        { id: 3, text: `D) Encontrar, analizar y eliminar las causas de las fallas.`, isCorrect: false },
      ],
    },
    //27
    {
      text: `¿Qué es cierto de un sistema decalidad?`,
      options: [
        { id: 0, text: `A) Es seguro.`, isCorrect: false },
        { id: 1, text: `B) Satisface los requisitos especificados, las necesidades y las expectativas del cliente y los usuarios.`, isCorrect: true },
        { id: 2, text: `C) Cuesta más que otros sistemas con las mismas características.`, isCorrect: false },
        { id: 3, text: `D) Fue entregado a tiempo y dentro del presupuesto.`, isCorrect: false },
      ],
    },
    //28
    {
      text: `¿Qué es cierto de un sistema decalidad?`,
      options: [
        { id: 0, text: `A) Es seguro.`, isCorrect: false },
        { id: 1, text: `B) Satisface los requisitos especificados, las necesidades y las expectativas del cliente y los usuarios.`, isCorrect: false },
        { id: 2, text: `C) Cuesta más que otros sistemas con las mismas características.`, isCorrect: false },
        { id: 3, text: `D) Fue entregado a tiempo y dentro del presupuesto.`, isCorrect: true },
      ],
    },
    //29
    {
      text: `¿Cuál de los siguientes es un objetivo común de las pruebas?`,
      options: [
        { id: 0, text: `A) Prevenir los defectos.`, isCorrect: true },
        { id: 1, text: `B) Eliminar los defectos.`, isCorrect: false },
        { id: 2, text: `C) Comparar los resultados reales con los resultados esperados.`, isCorrect: false },
        { id: 3, text: `D) Analizar la causa de la falla.`, isCorrect: false },
      ],
    },
    //30
    {
      text: `¿Cuál de los siguientes es un principio general de las pruebas?`,
      options: [
        { id: 0, text: `A) Las pruebas exploratorias.`, isCorrect: false },
        { id: 1, text: `B) El agrupamiento de defectos.`, isCorrect: true },
        { id: 2, text: `C) La evaluación de los criterios de salida.`, isCorrect: false },
        { id: 3, text: `D) El enmascaramiento de defectos.`, isCorrect: false },
      ],
    },
    //31
    {
      text: `¿Cuál de las siguientes es una actividad básica de las pruebas?`,
      options: [
        { id: 0, text: `A) Depuración.`, isCorrect: false },
        { id: 1, text: `B) La implementación y ejecución de las pruebas.`, isCorrect: true },
        { id: 2, text: `C) La construcción diaria.`, isCorrect: false },
        { id: 3, text: `D) Las pruebas de confirmación.`, isCorrect: false },
      ],
    },
    //32
    {
      text: `Un programador está escribiendo y ejecutando las pruebas unitarias
      contra el código que ha escrito. ¿Cuál de las siguientes es una
      mentalidad de probador que el programador debería adoptar para
      realizar estas pruebas unitarias efectivamente?`,
      options: [
        { id: 0, text: `A) Las buenas habilidades de comunicación.`, isCorrect: false },
        { id: 1, text: `B) La cobertura de código.`, isCorrect: false },
        { id: 2, text: `C) El efecto sonda.`, isCorrect: false },
        { id: 3, text: `D) La atención al detalle.`, isCorrect: true },
      ],
    },
    //33
    {
      text: `Un programador está trabajando en un código muy complejo. ¿Cual
      de los siguientes es un principio general de las pruebas que puede
      afectar este trabajo?`,
      options: [
        { id: 0, text: `A) El agrupamiento de defectos.`, isCorrect: true },
        { id: 1, text: `B) La paradoja del pesticida.`, isCorrect: false },
        { id: 2, text: `C) Las pruebas tempranas.`, isCorrect: false },
        { id: 3, text: `D) Las pruebas de componente.`, isCorrect: false },
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
