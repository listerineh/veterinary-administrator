import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faUser,
  faEnvelope,
  faCalendar,
  faFileMedical,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";

function Patient({ patient, setPatient, deletePatient }) {
  const {
    selectedDoctor,
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
    <div className="bg-white shadow-md px-8 py-8 rounded-xl">
      <div className="flex justify-between">
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
        <div>
          <button
            type="button"
            className="text-red-600 hover:text-red-800 font-bold uppercase rounded-lg cursor-pointer transition-all"
            onClick={handleDelete}
          >
            <FontAwesomeIcon icon={faCircleMinus} className="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Patient;
