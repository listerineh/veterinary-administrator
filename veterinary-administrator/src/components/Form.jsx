import { useState, useEffect } from "react"

import Error from "./error"


function Form({ patient, patients, setPatient, setPatients }) {

  const [petsName, setPetsName] = useState('')
  const [ownersName, setOwnersName] = useState('')
  const [email, setEmail] = useState('')
  const [dischargeDate, setDischargeDate] = useState('')
  const [symptoms, setSymptoms] = useState('')

  const [error, setError] = useState(false)

  useEffect( () => {
    if(Object.keys(patient).length > 0) {
      setPetsName(patient.petsName)
      setOwnersName(patient.ownersName)
      setEmail(patient.email)
      setDischargeDate(patient.dischargeDate)
      setSymptoms(patient.symptoms)
    }
  }, [patient])

  const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)

    return random + date
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if ( [petsName, ownersName, email, dischargeDate, symptoms].includes('') ) {
      setError(true)
      return
    }
    
    setError(false)

    const newPatient = {
      petsName, 
      ownersName, 
      email, 
      dischargeDate, 
      symptoms
    }

    if(patient.id) {
      newPatient.id = patient.id

      const updatedPatients = patients.map( statePatient => 
          statePatient.id === patient.id ? newPatient : statePatient
      )

      setPatients(updatedPatients)
      setPatient({})

    } else {
      newPatient.id = generateId()
      setPatients([...patients, newPatient])
    }

    setPetsName('')
    setOwnersName('')
    setEmail('')
    setDischargeDate('')
    setSymptoms('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Patient Information
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and {''}
        <span className="text-indigo-600 font-bold">
          Administrate them
        </span>
      </p>

      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={ handleSubmit }
      >
        { 
          error && 
          <Error 
            msg='Please fill all the fields!'
          /> 
        }
        <div className="mb-5">
          <label htmlFor="pets-name" className="block text-gray-700 uppercase font-bold">
            Pet's Name
          </label>
          <input 
            id="pets-name"
            type="text" 
            placeholder="Pet's name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ petsName }
            onChange={ (e) => setPetsName(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="owners-name" className="block text-gray-700 uppercase font-bold">
            Owner's Name
          </label>
          <input 
            id="owners-name"
            type="text" 
            placeholder="Owner's name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ ownersName }
            onChange={ (e) => setOwnersName(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input 
            id="email"
            type="email" 
            placeholder="Contact email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="discharge-date" className="block text-gray-700 uppercase font-bold">
            Discharge date
          </label>
          <input 
            id="discharge-date"
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ dischargeDate }
            onChange={ (e) => setDischargeDate(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
            Symptoms
          </label>
          <textarea 
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe the symptoms"
            value={ symptoms }
            onChange={ (e) => setSymptoms(e.target.value) }
          />
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-lg"
          value={ patient.id ? 'Edit Patient' : 'Add Patient' }
        />

      </form>

    </div>
  );
}

export default Form;
