import './style.css'

export function Question({ props, verifyQuestionAnswer }) {
  const alternativas = props.alternativas

  return (
    <form onSubmit={() => verifyQuestionAnswer(event, props.correta)} className="question">
      <h2>{props.pergunta}</h2>
      <div className="alternatives">
        {
          alternativas.map((alternative, index) => {
            return (
              <label key={index}>
                <input type="radio" name="alternative" value={alternative} />
                {alternative}
              </label>
            )
          })
        }
      </div>

      <button type="submit">Responder</button>
    </form>
  )
}