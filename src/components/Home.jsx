import { useState } from 'react'

export default function Home () {
  const [firstName, setFirstName] = useState('Chris')
  const [lastName, setLastName] = useState('Chevalier')
  const [age, setAge] = useState(31)
  const [visible, setVisible] = useState(false)

  const changeValues = () => {
    setFirstName(firstName === 'Chris' ? 'Gabrielle' : 'Chris')
    setLastName(lastName === 'Chevalier' ? ' Makaya' : 'Chevalier')
    setAge(age === 31 ? 27 : 31)
  }

  return (
    <>
      <h2>
        Bienvenue {firstName} {lastName}, vous avez {age} ans !
      </h2>
      {visible && <p>Mon texte caché</p>}
      <button onClick={() => setVisible(!visible)}> {/* visible === false ? true : false */}
        {visible ? 'Masquer' : 'Afficher'} mon texte caché
      </button>
      <button onClick={changeValues}>Changer les valeurs</button>
    </>
  )
}
