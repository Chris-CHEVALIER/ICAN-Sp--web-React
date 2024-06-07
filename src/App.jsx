import './App.css'
import { useState } from 'react'

export default function App () {
  /*   const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('') */
  const [submittedForm, setSubmittedForm] = useState(false)
  // Crée un état contenant un objet vide qui contiendra les valeurs des champs saisies dans le formulaire
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
    // Stocke la 'value' et le 'name' associé au champ de saisi modifié
    const { value, name } = event.target
    // Met à jour l'objet dans l'état en conservant ses anciennes valeurs
    setFormData((preview) => ({
      ...preview,
      // Place la valeur du 'name' en propriété de l'objet et la 'value' en valeur => { firstName: "Chris", lastName: "Chevalier", ...}
      [name]: value 
    }))
  }

  const handleSubmit = event => {
    // Ne recharge pas la page après la soumission du formulaire
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
