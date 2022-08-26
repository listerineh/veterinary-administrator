import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faUser,
  faEnvelope,
  faCalendar,
  faFileMedical,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";

import Dog from "../assets/animals/dog.svg";
import Cat from "../assets/animals/cat.svg";
import Bird from "../assets/animals/bird.svg";
import Turtle from "../assets/animals/turtle.svg";
import Bunny from "../assets/animals/bunny.svg";
import Hamster from "../assets/animals/hamster.svg";
import Other from "../assets/animals/other.svg";

function Patient({ patient, deletePatient }) {
  const {
    selectedDoctor,
    selectedPetType,
    petsName,
    ownersName,
    email,
    dischargeDate,
    symptoms,
    id,
  } = patient;

  const handleDelete = () => {
    const response = confirm("Are you sure you want to delete this patient?");

    if (response) {
      deletePatient(id);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md px-8 py-8 rounded-xl grid md:grid-flow-col grid-flow-row gap-3 text-black dark:text-white">
      <div>
        <div className="ml-5">
          <h1 className="font-bold uppercase text-indigo-600 text-3xl mb-2">
            {petsName}
          </h1>

          <div className="flex">
            <FontAwesomeIcon icon={faUserDoctor} className="mt-1 mr-4" />
            <p className="font-light">{selectedDoctor}</p>
          </div>

          <div className="flex">
            <FontAwesomeIcon icon={faUser} className="mt-1 mr-4" />
            <p className="font-light">{ownersName}</p>
          </div>

          <div className="flex">
            <FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-4" />
            <p className="font-light">{email}</p>
          </div>

          <div className="flex">
            <FontAwesomeIcon icon={faCalendar} className="mt-1 mr-4" />
            <p className="font-light">{dischargeDate}</p>
          </div>

          <div className="flex">
            <FontAwesomeIcon icon={faFileMedical} className="mt-1 mr-4" />
            <p className="font-light">{symptoms}</p>
          </div>
        </div>
      </div>
      <div className="grid justify-items-center content-center">
        {selectedPetType === "Dog" ? (
          <img src={Dog} alt="Dog default img" width={150} height={150} />
        ) : selectedPetType === "Cat" ? (
          <img src={Cat} alt="Cat default img" width={150} height={150} />
        ) : selectedPetType === "Bird" ? (
          <img src={Bird} alt="Bird default img" width={150} height={150} />
        ) : selectedPetType === "Turtle" ? (
          <img src={Turtle} alt="Turtle default img" width={150} height={150} />
        ) : selectedPetType === "Bunny" ? (
          <img src={Bunny} alt="Bunny default img" width={150} height={150} />
        ) : selectedPetType === "Hamster" ? (
          <img
            src={Hamster}
            alt="Hamster default img"
            width={150}
            height={150}
          />
        ) : (
          <img src={Other} alt="Other default img" width={150} height={150} />
        )}
      </div>
      <div className="grid justify-items-end content-start">
        <button
          type="button"
          className="text-red-600 hover:text-red-800 font-bold uppercase rounded-lg cursor-pointer transition-all"
          onClick={handleDelete}
        >
          <FontAwesomeIcon icon={faCircleMinus} className="" />
        </button>
      </div>
    </div>
  );
}

export default Patient;
