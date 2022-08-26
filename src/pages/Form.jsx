import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faPaw,
  faUser,
  faEnvelope,
  faCalendar,
  faFileMedical,
} from "@fortawesome/free-solid-svg-icons";

import Error from "../components/Error";

function Form({
  patient,
  patients,
  doctors,
  petTypes,
  setPatient,
  setPatients,
}) {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedPetType, setSelectedPetType] = useState("");
  const [petsName, setPetsName] = useState("");
  const [ownersName, setOwnersName] = useState("");
  const [email, setEmail] = useState("");
  const [dischargeDate, setDischargeDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setSelectedDoctor(patient.selectedDoctor);
      setSelectedPetType(patient.selectedPetType);
      setPetsName(patient.petsName);
      setOwnersName(patient.ownersName);
      setEmail(patient.email);
      setDischargeDate(patient.dischargeDate);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      [
        selectedDoctor,
        selectedPetType,
        petsName,
        ownersName,
        email,
        dischargeDate,
        symptoms,
      ].includes("")
    ) {
      setError(true);
      return;
    }

    setError(false);

    const newPatient = {
      selectedDoctor,
      selectedPetType,
      petsName,
      ownersName,
      email,
      dischargeDate,
      symptoms,
    };

    if (patient.id) {
      newPatient.id = patient.id;

      const updatedPatients = patients.map((statePatient) =>
        statePatient.id === patient.id ? newPatient : statePatient
      );

      setPatients(updatedPatients);
      setPatient({});
    } else {
      newPatient.id = generateId();
      setPatients([...patients, newPatient]);
    }

    setSelectedDoctor("");
    setSelectedPetType("");
    setPetsName("");
    setOwnersName("");
    setEmail("");
    setDischargeDate("");
    setSymptoms("");
  };

  return (
    <div className="md:mx-32 mx-5 pb-0.5">
      <h2 className="font-black text-4xl text-center my-10">
        Add <span className="text-indigo-600">patient</span> Information
      </h2>

      <form
        className="bg-white shadow-md rounded-lg py-12 px-12 mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error msg="Please fill all the fields!" />}

        <div className="md:grid md:grid-cols-2 md:gap-4 block">
          <div className="mb-5">
            <label
              htmlFor="doctors-name"
              className="block text-gray-700 uppercase font-light"
            >
              <div className="flex">
                <FontAwesomeIcon icon={faUserDoctor} className="mt-1 mr-4" />
                <p>Doctor's Name</p>
              </div>
            </label>
            <select
              id="doctors-name"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              onChange={(e) => setSelectedDoctor(e.target.value)}
              value={selectedDoctor}
            >
              <option value="">Select</option>
              {doctors.map((doctor, index) => (
                <option key={index} value={doctor}>
                  {doctor}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="owners-name"
              className="block text-gray-700 uppercase font-light"
            >
              <div className="flex">
                <FontAwesomeIcon icon={faUser} className="mt-1 mr-4" />
                <p>Owner's Name</p>
              </div>
            </label>
            <input
              id="owners-name"
              type="text"
              placeholder="Owner's name"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={ownersName}
              onChange={(e) => setOwnersName(e.target.value)}
            />
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-4 block">
          <div className="mb-5">
            <label
              htmlFor="pets-name"
              className="block text-gray-700 uppercase font-light"
            >
              <div className="flex">
                <FontAwesomeIcon icon={faPaw} className="mt-1 mr-4" />
                <p>Pet's Name</p>
              </div>
            </label>
            <input
              id="pets-name"
              type="text"
              placeholder="Pet's name"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={petsName}
              onChange={(e) => setPetsName(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="pets-type"
              className="block text-gray-700 uppercase font-light"
            >
              <div className="flex">
                <FontAwesomeIcon icon={faPaw} className="mt-1 mr-4" />
                <p>Pet's Type</p>
              </div>
            </label>
            <select
              id="pets-type"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              onChange={(e) => setSelectedPetType(e.target.value)}
              value={selectedPetType}
            >
              <option value="">Select</option>
              {petTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-4 block">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 uppercase font-light"
            >
              <div className="flex">
                <FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-4" />
                <p>Email</p>
              </div>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Contact email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="discharge-date"
              className="block text-gray-700 uppercase font-light"
            >
              <div className="flex">
                <FontAwesomeIcon icon={faCalendar} className="mt-1 mr-4" />
                <p>Discharge date</p>
              </div>
            </label>
            <input
              id="discharge-date"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={dischargeDate}
              onChange={(e) => setDischargeDate(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-light"
          >
            <div className="flex">
              <FontAwesomeIcon icon={faFileMedical} className="mt-1 mr-4" />
              <p>Symptoms</p>
            </div>
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe the symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-lg"
          value={patient.id ? "Edit Patient" : "Add Patient"}
        />
      </form>
    </div>
  );
}

export default Form;
