import { useState } from "react";

const Reports = ({ patients, doctors, petTypes }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const getSelectedDoctors = () => {
    const usedDoctors = [];

    for (let i = 0; i < doctors.length; i++) {
      for (let j = 0; j < patients.length; j++) {
        if (doctors[i] === patients[j].selectedDoctor) {
          usedDoctors.push(doctors[i]);
          break;
        }
      }
    }

    return usedDoctors;
  };

  const getSelectedPetTypes = () => {
    const usedPetTypes = [];

    for (let i = 0; i < petTypes.length; i++) {
      for (let j = 0; j < patients.length; j++) {
        if (petTypes[i] === patients[j].selectedPetType) {
          usedPetTypes.push(petTypes[i]);
          break;
        }
      }
    }

    return usedPetTypes;
  };

  return (
    <div className="md:mx-32 mx-5 pb-0.5">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-4xl text-center my-10 text-black dark:text-white">
            Patients Reports
          </h2>

          <div className="grid grid-flow-col ">
            <h2 className="font-light text-lg text-black dark:text-white">
              Select the filter to show the report:
            </h2>
            <select
              className="border-2 w-full p-2 placeholder-gray-400 rounded-md bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-black dark:text-white"
              onChange={(e) => setSelectedOption(e.target.value)}
              value={selectedOption}
            >
              <option selected value="">
                Select
              </option>
              <option value="doctors">Doctors</option>
              <option value="petTypes">Pet types</option>
            </select>
          </div>

          <div className="mt-5">
            {selectedOption === "doctors" ? (
              <>
                <div className="font-bold mb-2 text-black dark:text-white">
                  Patients filtered by doctors:
                </div>
                <div className="grid grid-flow-row gap-4 mb-5">
                  {getSelectedDoctors().map((doctor) => (
                    <div className="bg-white shadow-md rounded-lg py-10 px-10 dark:bg-gray-900 text-black dark:text-white">
                      <div className="text-xl text-indigo-600 dark:text-indigo-500">
                        Dr. {doctor}
                      </div>
                      <div className="font-light ml-5">
                        {patients
                          .filter(
                            (patient) => patient.selectedDoctor === doctor
                          )
                          .map((name, index) => (
                            <div>
                              {index + 1}. {name.petsName}
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : selectedOption === "petTypes" ? (
              <>
                <div className="font-bold mb-2 text-black dark:text-white">
                  Patients filtered by pet type:
                </div>
                <div className="grid grid-flow-row gap-4 mb-5">
                  {getSelectedPetTypes().map((type) => (
                    <div className="bg-white shadow-md rounded-lg py-10 px-10 dark:bg-gray-900 text-black dark:text-white">
                      <div className="text-xl text-indigo-600 dark:text-indigo-500">
                        {type}
                      </div>
                      <div className="font-light ml-5">
                        {patients
                          .filter((patient) => patient.selectedPetType === type)
                          .map((name, index) => (
                            <div>
                              {index + 1}. {name.petsName}
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </>
      ) : (
        <div className="grid content-center justify-items-center h-screen">
          <h2 className="font-black text-3xl text-center text-black dark:text-white">
            There are no Patients :(
          </h2>

          <p className="text-xl mt-5 mb-7 text-center text-black dark:text-white">
            Add a patient and {""}
            <span className="text-indigo-600 font-bold">
              the reports will appear here!
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Reports;
