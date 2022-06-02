function Patient() {
  return (
    <div className="mx-5 my-8 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Pet's Name: {""}
        <span className="font-normal normal-case">
            Hook
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner's Name: {""}
        <span className="font-normal normal-case">
            Sebastian Alvarez
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">
            email@example.com
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Discharge date: {""}
        <span className="font-normal normal-case">
            10-12-2022
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          ullam rerum, delectus ipsum velit aliquid ut aliquam, maiores, sit eos
          modi facere porro sequi id quibusdam incidunt eius dolore. A.
        </span>
      </p>
    </div>
  );
}

export default Patient;
