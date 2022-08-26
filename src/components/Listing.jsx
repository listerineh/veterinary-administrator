import Patient from "./Patient";

function Listing({ patients, setPatient, deletePatient }) {
  return (
    <div className="md:mx-32 mx-5">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-4xl text-center mt-10">
            Patient Listing
          </h2>

          <p className="text-xl mt-5 mb-7 text-center">
            Manage your {""}
            <span className="text-indigo-600 font-bold">Patients</span>
          </p>

          <div>
            {patients.map((patient) => (
              <Patient
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            There are no Patients :(
          </h2>

          <p className="text-xl mt-5 mb-7 text-center">
            Add a patient and {""}
            <span className="text-indigo-600 font-bold">
              it will appear here!
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default Listing;
