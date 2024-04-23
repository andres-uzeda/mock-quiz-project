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
        { id: 3, text: `D) I, II, y III son verdaderas.`, isCorrect: true },
      ],
    },
    //35
    {
      text: `¿Cuál de las siguientes afirmaciones es verdadera acerca de la
      adaptación de los modelos de desarrollo de software?`,
      options: [
        { id: 0, text: `A) Ud. puede adaptar los modelos para que se acomoden a las varias características de los proyectos y productos.`, isCorrect: true },
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
        { id: 2, text: `C) Los probadores deberían participar en la revisión de documentos.`, isCorrect: true },
        { id: 3, text: `D) Los probadores no deberían saber acercade los detalles estructurales de los productos que ellos están probando.`, isCorrect: false },
      ],
    },
    //37
    {
      text: `¿Qué es la validación?`,
      options: [
        { id: 0, text: `A) La confirmación de que los requisitos especificados se han cumplido.`, isCorrect: false },
        { id: 1, text: `B) La confirmación de que los requisitos para una utilización o aplicación intencionada y específica han sido cumplidos.`, isCorrect: true },
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
        { id: 2, text: `C) I, IV, III, V, II.`, isCorrect: true },
        { id: 3, text: `D) II, I, III, IV, V.`, isCorrect: false },
      ],
    },
    //39
    {
      text: `¿Cuál de los siguientes se aborda como una sección principal en
      el estándar IEEE 12207?`,
      options: [
        { id: 0, text: `A) Los principales procesos del ciclo de vida.`, isCorrect: true },
        { id: 1, text: `B) Los criterios de suspensión/ reanudación.`, isCorrect: false },
        { id: 2, text: `C) Las revisiones técnicas.`, isCorrect: false },
        { id: 3, text: `D) Los refinamientos del Método.`, isCorrect: false },
      ],
    },
    //40
    {
      text: `Las pruebas de las interfaces entre componentes son un principal
      objetivo ¿De cuál nivel de pruebas?`,
      options: [
        { id: 0, text: `A) Prueba de componente.`, isCorrect: false },
        { id: 1, text: `B) Prueba de integración.`, isCorrect: true },
        { id: 2, text: `C) Prueba de sistema.`, isCorrect: false },
        { id: 3, text: `D) Prueba de aceptación.`, isCorrect: false },
      ],
    },
    //41
    {
      text: `¿Qué son las pruebas operacionales?`,
      options: [
        { id: 0, text: `A) El proceso de probar para determinar el rendimiento de un producto del software.`, isCorrect: false },
        { id: 1, text: `B) Las pruebas realizadas para evaluar un componente o un sistema en su entorno operacional.`, isCorrect: true },
        { id: 2, text: `C) El proceso de probar para determinar la recuperabilidad de un producto del software.`, isCorrect: false },
        { id: 3, text: `D) Las pruebas que ejecutan los casos de prueba que fallaron la última vez que fueron ejecutados.`, isCorrect: false },
      ],
    },
    //42
    {
      text: `Considere los siguientes cuatro tipos de pruebas para una
      aplicación de comercio electrónico:
      I. Las pruebas de cada posible consulta de la base de
      datos.
      Il. Las pruebas de los tiempos de respuesta del sistema
      bajo carga.
      III. Las pruebas de nuevas características a medida que son
      adicionadas al sistema.
      IV. Laverificación del manejo correcto de los pedidos
      típicos.
      ¿Cuál de las siguientes afirmaciones es verdadera?
      `,
      options: [
        { id: 0, text: `A) I, es una prueba relacionada con el cambio; Il es una prueba no funcional; III es una prueba funcional y IV es una prueba estructural.`, isCorrect: false },
        { id: 1, text: `B) l es una prueba estructural; II es una prueba no funcional; III es una prueba relacionada con el cambio y IV es una prueba funcional.`, isCorrect: true },
        { id: 2, text: `C) Las cuatro son pruebas funcionales.`, isCorrect: false },
        { id: 3, text: `D) I es una prueba no funcional; II es una prueba estructural; III es una prueba relacionada con el cambio y IV es una prueba funcional.`, isCorrect: false },
      ],
    },
    //43
    {
      text: `¿Cuál de las siguientes afirmaciones es verdadera acerca de las
      pruebas de funcionalidad y de caja negra?`,
      options: [
        { id: 0, text: `A) Nunca son ejecutadas por los programadores.`, isCorrect: false },
        { id: 1, text: `B) Nunca son útiles durante las pruebas de componente.`, isCorrect: false },
        { id: 2, text: `C) Estos diseños de pruebas son siempre controlados activamente mientras son realizados.`, isCorrect: false },
        { id: 3, text: `D) Ellas pueden ser útiles por todos los probadores durante cualquier nivel de pruebas.`, isCorrect: true },
      ],
    },
    //44
    {
      text: `Ud. está probando una nueva aplicación de software para el
      mercado masivo y quiere asegurarse de que esta gustará a sus
      usuarios meta.. Ud. ensambla una muestra representativa de los
      usuarios potenciales para un estudio y para hacer que ellos traten
      de lograr las tareas típicas basadas en los prototipos de las
      pantallas. Ud. observa cuidadosamente la habilidad de ellos para
      terminar estas tareas sin que ellos se confundan o atasquen. ¿Cuál
      tipo de prueba está Ud. realizando?`,
      options: [
        { id: 0, text: `A) Pruebas de estrés.`, isCorrect: false },
        { id: 1, text: `B) Pruebas de usabilidad.`, isCorrect: true },
        { id: 2, text: `C) Pruebas funcionales.`, isCorrect: false },
        { id: 3, text: `D) Pruebas de seguridad.`, isCorrect: false },
      ],
    },
    //45
    {
      text: `Ud. está probando un sistema bancario web que permitirá a los
      clientes acceder a sus cuentas en Internet. Ud. recibe un borrador
      de la especificación del diseño técnico que describe la
      arquitectura del sistema a al nivel de componentes de software.
      Tan pronto como Ud. recibe este documento, comienza a diseñar
      las pruebas para asegurar que cada interacción posible entre los
      componentes de hardware y software, ambos de sistema a
      sistema y de punta a punta, sea ejercida durante el proceso de los
      niveles de pruebas de integración y sistema. ¿Cuál tipo de prueba
      está Ud. diseñando?`,
      options: [
        { id: 0, text: `A) Prueba estructural.`, isCorrect: true },
        { id: 1, text: `B) Prueba de rendimiento.`, isCorrect: false },
        { id: 2, text: `C) Prueba de portabilidad.`, isCorrect: false },
        { id: 3, text: `D) Prueba funcional.`, isCorrect: false },
      ],
    },
    //46
    {
      text: `¿Cuáles son los Propósitos de las pruebas de confirmación y las
      pruebas regresión?`,
      options: [
        { id: 0, text: `A) Las pruebas de regresión verifican el éxito de las acciones correctivas; las pruebas de confirmación aseguran que no han sido introducidos o descubiertos defectos en áreas no modificadas del software, como resultado de un cambio.`, isCorrect: false },
        { id: 1, text: `B) Las pruebas de regresión y pruebas confirmación son sinónimos; ambas verifican el éxito de las acciones correctivas.`, isCorrect: false },
        { id: 2, text: `C) Las pruebas de confirmación verifican el éxito de las acciones correctivas; las pruebas de regresión aseguran que no han sido introducidos o descubiertos defectos en áreas no modificadas, como resultado de un cambio.`, isCorrect: true },
        { id: 3, text: `D) Las pruebas de regresión y pruebas confirmación son sinónimos; ambas aseguran que no han sido introducidos o descubiertos defectos en áreas no modificadas, como resultado de un cambio.`, isCorrect: false },
      ],
    },
    //47
    {
      text: `De acuerdo al estándar ISO 9126, ¿Cuál de las siguientes es una
      característica de calidad?`,
      options: [
        { id: 0, text: `A) La asignación de recursos.`, isCorrect: false },
        { id: 1, text: `B) El tiempo de respuesta.`, isCorrect: false },
        { id: 2, text: `C) La seguridad.`, isCorrect: false },
        { id: 3, text: `D) La eficiencia.`, isCorrect: true },
      ],
    },
    //48
    {
      text: `¿Qué son las pruebas de caja negra?`,
      options: [
        { id: 0, text: `A) La derivación o selección de los casos de prueba basados en un análisis de la especificación del sistema o las 4 componentes.`, isCorrect: true },
        { id: 1, text: `B) La derivación o selección de los casos de prueba basados en un análisis de la estructura interna del sistema o componente.`, isCorrect: false },
        { id: 2, text: `C) El proceso de la identificación de las diferencias entre los resultados reales producidos por el componente o sistema sometido a pruebas y los resultados esperados para una prueba.`, isCorrect: false },
        { id: 3, text: `D) Una técnica informal del diseño de pruebas, donde el probador controla activamente el diseño de las pruebas a medida que esas pruebas son realizadas.`, isCorrect: false },
      ],
    },
    //49
    {
      text: `¿Cuál tipo de prueba es típicamente más importante durante las
      pruebas de mantenimiento en comparación a las pruebas de una
      aplicación completamente nueva?`,
      options: [
        { id: 0, text: `A) Pruebas de regresión.`, isCorrect: true },
        { id: 1, text: `B) Pruebas de rendimiento.`, isCorrect: false },
        { id: 2, text: `C) Pruebas funcionales.`, isCorrect: false },
        { id: 3, text: `D) Pruebas de seguridad.`, isCorrect: false },
      ],
    },
    //50
    {
      text: `Considere las siguientes situaciones:

      I. Una función existente en el sistema de producción está
      siendo modificada para hospedar nuevos clientes.
      
      II. Un sistema cliente servidor es migrado a un nuevo
      servidor huésped, el cual utiliza un CPU diferente que
      el servidor huésped actual.
      
      III. Los datos del fin de la vida útil de un sistema están
      siendo archivados en una cinta para un posible análisis
      futuro.
      
      IV. Un pedido de cambio ha sido aprobado en la
      especificación de la línea base durante un proyecto de
      desarrollo.
      
      ¿Cuál de las siguientes afirmaciones es verdadera? `,
      options: [
        { id: 0, text: `A) Cualquiera de estas situaciones podrían dar lugar a las pruebas de mantenimiento.`, isCorrect: false },
        { id: 1, text: `B) Sólo II y IV darían lugar a las pruebas de mantenimiento.`, isCorrect: false },
        { id: 2, text: `C) Sólo I, II, y III darían lugar a las pruebas de mantenimiento.`, isCorrect: true },
        { id: 3, text: `D) Sólo I y II darían lugar a las pruebas de mantenimiento.`, isCorrect: false },
      ],
    },
    //51
    {
      text: `¿Cuál de las siguientes afirmaciones es verdadera?`,
      options: [
        { id: 0, text: `A) Durante las pruebas de mantenimiento, el análisis del impacto nos ayudó a decidir cuántas pruebas de regresión deben ser realizadas.`, isCorrect: true },
        { id: 1, text: `B) Durante las pruebas de mantenimiento, el análisis del impacto nos ayudó a decidir cuántas pruebas de confirmación deben ser realizadas.`, isCorrect: false },
        { id: 2, text: `C) Durante las pruebas de nuevo desarrollo y mantenimiento, el análisis del impacto nos ayuda a decidir cuántas pruebas de confirmación deben ser realizadas`, isCorrect: false },
        { id: 3, text: `D) El análisis del impacto no afecta a las pruebas de regresión.`, isCorrect: false },
      ],
    },
    //52
    {
      text: `¿Qué son las pruebas de mantenimiento?`,
      options: [
        { id: 0, text: `A) Las pruebas de los cambios en un sistema operacional o el impacto del cambio del entorno de un sistema operacional.`, isCorrect: true },
        { id: 1, text: `B) Las pruebas de un programa previamente probado después de la modificación para asegurar que no han sido introducidos o descubiertos defectos en áreas no modificadas del software.`, isCorrect: false },
        { id: 2, text: `C) Las pruebas que ejecutan los casos de prueba que fallaron la última vez cuando ellos fueron ejecutados, para verificar el éxito de las acciones correctivas.`, isCorrect: false },
        { id: 3, text: `D) Las pruebas basadas en el análisis de la especificación de la funcionalidad de un componente o sistema.`, isCorrect: false },
      ],
    },
    //53
    {
      text: `¿En cuál modelo del ciclo de vida es más probable que el nivel de
      pruebas de integración ocurra paralelamente durante una parte
      significativa del nivel de prueba de sistema?`,
      options: [
        { id: 0, text: `A) Iterativo.`, isCorrect: true },
        { id: 1, text: `B) Modelo V.`, isCorrect: false },
        { id: 2, text: `C) De regresión.`, isCorrect: false },
        { id: 3, text: `D) De rendimiento.`, isCorrect: false },
      ],
    },
    //54
    {
      text: `¿Cuál de los siguientes es un modelo del ciclo de vida de
      desarrollo abordado en el programa de estudios básico del
      ISQTB?`,
      options: [
        { id: 0, text: `A) lterativo.`, isCorrect: true },
        { id: 1, text: `B) Verificación.`, isCorrect: false },
        { id: 2, text: `C) Validación.`, isCorrect: false },
        { id: 3, text: `D) CMM.`, isCorrect: false },
      ],
    },
    //55
    {
      text: `Considere los siguientes productos del trabajo, los tipos de
      pruebas y los niveles de pruebas:
      
      I. El documento del diseño de la arquitectura del sis
      
      II. El documento de los casos de uso.
      
      III. Las pruebas funcionales.
      
      IV. Las pruebas estructurales.
      
      V. Las pruebas de integración.
      
      VI. Las pruebas de aceptación.

      ¿Cuál de las siguientes afirmaciones es verdadera?`,
      options: [
        { id: 0, text: `A) II es útil para IV durante V;I es útil para III durante VI.`, isCorrect: false },
        { id: 1, text: `B) I es útil para IV durante V; II es útil para III durante VI.`, isCorrect: true },
        { id: 2, text: `C) II es útil para IV durante V; pero I no es útil para III durante VI.`, isCorrect: false },
        { id: 3, text: `D) I no es útil para IV durante V; pero II es útil para III durante VI.`, isCorrect: false },
      ],
    },
    //56
    {
      text: `¿Cuál de los siguientes es un nivel de pruebas abordado enel
      programa de estudios básico del ISQTB?`,
      options: [
        { id: 0, text: `A) Prueba de componente.`, isCorrect: true },
        { id: 1, text: `B) Prueba de regresión.`, isCorrect: false },
        { id: 2, text: `C) Prueba de confirmación.`, isCorrect: false },
        { id: 3, text: `D) Prueba de rendimiento.`, isCorrect: false },
      ],
    },
    //57
    {
      text: `Ud. está probando el tiempo de respuesta de un sistema bajo
      carga durante una prueba de integración. ¿Cuál tipo de prueba
      está Ud. realizando?`,
      options: [
        { id: 0, text: `A) Funcional.`, isCorrect: false },
        { id: 1, text: `B) No- funcional.`, isCorrect: true },
        { id: 2, text: `C) Estructural.`, isCorrect: false },
        { id: 3, text: `D) Relacionada al cambio.`, isCorrect: false },
      ],
    },
    //58
    {
      text: `¿Qué es un modelo del ciclo de vida iterativo?`,
      options: [
        { id: 0, text: `A) Un ciclo de vida de desarrollo donde un proyecto es dividido en una serie de iteraciones.`, isCorrect: true },
        { id: 1, text: `B) Un ciclo de vida de desarrollo donde un proyecto es tercerizado a una serie de equipos de desarrollo.`, isCorrect: false },
        { id: 2, text: `C) Un ciclo de vida de desarrollo donde un proyecto tiene múltiples niveles de pruebas, los cuales son considerados iteraciones.`, isCorrect: false },
        { id: 3, text: `D) Un ciclo de vida de desarrollo donde el código es escrito por dos programadores sentados en una sola computadora.`, isCorrect: false },
      ],
    },
    //59
    {
      text: `¿Qué es un análisis del impacto?`,
      options: [
        { id: 0, text: `A) Las pruebas de un sistema previamente probado después de la modificación.`, isCorrect: false },
        { id: 1, text: `B) El proceso de evaluación de los riesgos identificados para estimar su impacto y probabilidad de ocurrencia.`, isCorrect: false },
        { id: 2, text: `C) La evaluación del impacto de un cambio en las capas de la documentación del desarrollo, la documentación de las pruebas y los componentes.`, isCorrect: true },
        { id: 3, text: `D) Las pruebas de los cambios en un sistema operacional o el impacto de la modificación del entorno del sistema operacional.`, isCorrect: false },
      ],
    },
    //60
    {
      text: `Si durante un proyecto, siguiendo el modelo del ciclo de vida
      iterativo, el jefe del proyecto decide publicar un sistema sin las
      últimas características del incremento debido a un gasto
      inesperado del presupuesto del proyecto, ¿Qué es lo que él ha
      hecho?`,
      options: [
        { id: 0, text: `A) Priorizó las restricciones presupuestarias más alto que la calidad.`, isCorrect: false },
        { id: 1, text: `B) Tomo una decisión que el Jefe de pruebas no debería aprobar.`, isCorrect: false },
        { id: 2, text: `C) Adaptó el ciclo de vida del desarrollo al proyecto.`, isCorrect: true },
        { id: 3, text: `D) Cambió un ciclo de vida del modelo V.`, isCorrect: false },
      ],
    },
    //61
    {
      text: `Considere lo siguiente:
      I. Análisis del impacto.
      II. Pruebas de confirmación.
      III. Pruebas de mantenimiento.
      IV. Pruebas de regresión.
      V. Diseño del sistema.
      ¿Cuál de las siguientes afirmaciones es verdadera? `,
      options: [
        { id: 0, text: `A) I es útil para II durante III.`, isCorrect: false },
        { id: 1, text: `B) I es útil para IV durante V.`, isCorrect: false },
        { id: 2, text: `C) I es útil para IV durante III.`, isCorrect: true },
        { id: 3, text: `D) II es útil para I durante III.`, isCorrect: false },
      ],
    },
    //62
    {
      text: `Un producto de software de un sistema operativo para el
      mercado masivo diseñado para que sea ejecutado en cualquier
      hardware de computador personal con un procesador de la
      familia x86. Ud. está ejecutando un conjunto de pruebas para
      buscar los defectos relacionados con la compatibilidad de varios
      computadores personales que utilizan ése procesador y para
      construir la confianza en que las marcas importantes de los
      computadores personales funcionarán. ¿Cuál tipo de prueba
      Ud. realizando?`,
      options: [
        { id: 0, text: `A) Prueba de rendimiento.`, isCorrect: false },
        { id: 1, text: `B) Prueba de procesador.`, isCorrect: false },
        { id: 2, text: `C) Prueba funcional.`, isCorrect: false },
        { id: 3, text: `D) Prueba de interoperabilidad.`, isCorrect: true },
      ],
    },
    //63
    {
      text: `¿Qué son las pruebas operacionales?`,
      options: [
        { id: 0, text: `A) Las pruebas de los cambios en un sistema operacional o el impacto de la modificación del entorno de un sistema operacional.`, isCorrect: false },
        { id: 1, text: `B) Las pruebas realizadas para evaluar un componente o sistema en su entorno operacional.`, isCorrect: true },
        { id: 2, text: `C) Las pruebas de aceptación por los usuarios o clientes en s sitio, normalmente incluyendo el hardware así como el software.`, isCorrect: false },
        { id: 3, text: `D) El proceso de pruebas para determinar la mantenibilidad de un producto de software.`, isCorrect: false },
      ],
    },
    //64
    {
      text: `¿En cuál tipo de defectos un nivel de componentes podría centrar
      la identificación?`,
      options: [
        { id: 0, text: `A) Los defectos en los módulos u objetos que son comprobables separadamente.`, isCorrect: true },
        { id: 1, text: `B) Los defectos en interfaces entre los componentes o interacciones con diferentes partes de un sistema.`, isCorrect: false },
        { id: 2, text: `C) Los defectos en todo el sistema o producto.`, isCorrect: false },
        { id: 3, text: `D) Los niveles de pruebas de componente no se enfocan en la identificación de defectos.`, isCorrect: false },
      ],
    },
    //65
    {
      text: `Ud. está ejecutando una prueba de rendimiento bajo una carga
      pesada con el objetivo de encontrar los cuellos de botella en la
      comunicación de la red que ocurre a través de las interfaces entr
      cuatro de los 16 componentes de un sistema. ¿Qué está haciendo
      Ud. posiblemente?`,
      options: [
        { id: 0, text: `A) Una prueba funcional durante el nivel de pruebas de integración.`, isCorrect: false },
        { id: 1, text: `B) Una prueba no funcional durante el nivel de pruebas de integración.`, isCorrect: true },
        { id: 2, text: `C) Una prueba funcional durante el nivel de pruebas de componente.`, isCorrect: false },
        { id: 3, text: `D) Una prueba no funcional durante el nivel de pruebas de componente.`, isCorrect: false },
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
