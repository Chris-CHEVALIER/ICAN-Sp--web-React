import Welcome from './Welcome'

export default function Restaurant () {
  const food = 'pasta'

  function eat (manger) {
    console.log(`J'adore manger du ${manger}`)
  }

  return (
    <Welcome
      firstName='Chris'
      age={31}
      handleClick={() => eat("paté")}
      /* handleClick={eat} // PAS BIEN ! */
      line={`Oui, j'adore les ${food}`}
    />
  )
}
