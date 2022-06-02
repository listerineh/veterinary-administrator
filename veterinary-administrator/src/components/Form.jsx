import { useState, useEffect } from "react"

function Form() {

  const [petsName, setPetsName] = useState('')
  const [ownersName, setOwnersName] = useState('')
  const [email, setEmail] = useState('')
  const [dischargeDate, setDischargeDate] = useState('')
  const [symptoms, setSymptoms] = useState('')

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Patient Information
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and {''}
        <span className="text-indigo-600 font-bold">
          Administrate Them
        </span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
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
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value="Add Patient"
        />

      </form>

    </div>
  );
}

export default Form;
