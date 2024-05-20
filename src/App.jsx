import { questions } from "./assets/questions.js";
import { useState } from "react";
import { Question } from "./Components/Question";
import "./App.css";

export default function App() {
  const [isQuestionSorted, setIsQuestionSorted] = useState(false);
  const [actualQuestion, setActualQuestion] = useState();

  function question() {
    const numeroAleatorio = Math.floor(Math.random() * 10);  
    setActualQuestion(questions[numeroAleatorio]);
    setIsQuestionSorted(true);
  }

  function verifyQuestionAnswer(event, answer) {
    event.preventDefault();

    if(event.target.alternative.value === answer) {
      alert("Acertou!")
    } else {
      alert("Errou!")
    }
  }

  return (
    <>
    <div className="header-main">
      <h1>Quiz App</h1>
      <button type="button" className="btn" onClick={question}>Sortear</button>
    </div>

      <div className="content">
        {
          isQuestionSorted ? <Question props={actualQuestion} verifyQuestionAnswer={verifyQuestionAnswer}/> : null
        }
      </div>
    </>
  );
}
