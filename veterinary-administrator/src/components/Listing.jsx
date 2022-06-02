import Patient from "./Patient";

function Listing({ patients, setPatient, deletePatient }) {

  return (
    <div className="md:w-1/2 lg:w-3/5">

      {
        patients && patients.length ? (
          <>
            <h2 className="font-black text-3xl text-center">
              Patient Listing
            </h2>

            <p className="text-xl mt-5 mb-7 text-center">
              Manage your {''}
              <span className="text-indigo-600 font-bold">
                Patients and Appointments
              </span>
            </p>

            <div className="md:h-screen md:overflow-y-scroll">
              { 
                patients.map(patient => (
                    <Patient
                      key={ patient.id }
                      patient={ patient }
                      setPatient={ setPatient }
                      deletePatient={ deletePatient }
                    />
                  )
                )
              }
            </div>
          </>
        ) : (
          <>
          <h2 className="font-black text-3xl text-center">
              There are no Patients :(
            </h2>

            <p className="text-xl mt-5 mb-7 text-center">
              Add a patient and {''}
              <span className="text-indigo-600 font-bold">
                it will appear here!
              </span>
            </p>
          </>
        )
      }

    </div>
  );
}

export default Listing;
