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
    <div className="bg-white shadow-md px-12 py-12 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Doctor's Name: {""}
        <span className="font-normal normal-case">{selectedDoctor}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Pet's Name: {""}
        <span className="font-normal normal-case">{petsName}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner's Name: {""}
        <span className="font-normal normal-case">{ownersName}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Discharge date: {""}
        <span className="font-normal normal-case">{dischargeDate}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: {""}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <div className="flex justify-between mt-10 ">
        <button
          type="button"
          className="py-2 lg:px-20 px-10 bg-yellow-600 hover:bg-yellow-700 text-white font-bold uppercase rounded-lg cursor-pointer transition-all"
          onClick={() => setPatient(patient)}
        >
          Edit
        </button>

        <button
          type="button"
          className="py-2 lg:px-20 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg cursor-pointer transition-all"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Patient;
