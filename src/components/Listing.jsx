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

          <div className="grid grid-row-auto gap-4 mb-10">
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
        <div className="grid content-center justify-items-center h-screen ">
          <h2 className="font-black text-3xl text-center">
            There are no Patients :(
          </h2>

          <p className="text-xl mt-5 mb-7 text-center">
            Add a patient and {""}
            <span className="text-indigo-600 font-bold">
              it will appear here!
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Listing;
