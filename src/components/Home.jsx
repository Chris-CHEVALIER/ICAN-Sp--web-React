import Button from './Button'

export default function Home () {
  const pageName = "Home"

  return (
    <>
      <h1>Cliquez !</h1>
      <Button title={`Bouton ${pageName}`} icon="+" color="dodgerblue" />
    </>
  )
}
