import './App.css'
import { useState } from 'react'

export default function App () {
  /*   const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('') */
  const [submittedForm, setSubmittedForm] = useState(false)
  const [formData, setFormData] = useState({})

  /* const handleChange = event => {
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value)
        break;
      case "lastName":
        setLastName(event.target.value)
        break;
      case "password":
        setPassword(event.target.value)
        break;
      default:
        break;
    }
  } */

  // Plus générique :
  const handleChange = event => {
    const { value, name } = event.target
    setFormData((preview) => ({
      ...preview,
      [name]: value
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    setSubmittedForm(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='lastName'>Prénom</label> <br />
        <input
          type='text'
          onChange={handleChange}
          placeholder='Votre prénom'
          value={formData.firstName || ''}
          required
          name='firstName'
          id='firstName'
        />{' '}
        <br />
        <label htmlFor='lastName'>Nom</label>
        <br />
        <input
          type='text'
          onChange={handleChange}
          placeholder='Votre nom'
          value={formData.lastName || ''}
          required
          name='lastName'
          id='lastName'
        />{' '}
        <br />
        <label htmlFor='password'>Mot de passe</label>
        <br />
        <input
          type='password'
          onChange={handleChange}
          placeholder='Votre mot de passe'
          value={formData.password || ''}
          required
          name='password'
          id='password'
        />{' '}
        <br />
        <input type='submit' value='Enregistrer' />
      </form>
      {submittedForm && (
        <>
          <p>
            Bienvenue {formData.firstName} {formData.lastName} !
          </p>
          <i>Votre mot de passe est : {formData.password}</i>
        </>
      )}
    </>
  )
}
