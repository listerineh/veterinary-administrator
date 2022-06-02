import Patient from "./Patient";

function Listing({ patients }) {



  return (
    <div className="md:w-1/2 lg:w-3/5">
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
              />
            )
          )
        }
      </div>

    </div>
  );
}

export default Listing;
