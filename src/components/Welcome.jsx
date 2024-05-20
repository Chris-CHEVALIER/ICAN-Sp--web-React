export default function Welcome (props) {
  return (
    <div>
      <h2>Bienvenue {props.firstName} !</h2>
      <p>Vous avez {props.age} ans.</p>
      <p>
        <i>{props.line}</i>
      </p>
      <button onClick={props.handleClick}>
        {"Qu'est-ce que j'aime manger ?"}
      </button>
    </div>
  )
}
