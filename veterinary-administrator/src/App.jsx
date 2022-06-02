import { useState } from 'react'

import Header from "./components/Header";
import Form from "./components/Form";
import Listing from "./components/Listing";

function App() {

  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})
 
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form 
          patient={patient}
          patients={ patients }
          setPatient={ setPatient }
          setPatients={ setPatients }
        />
        <Listing 
          patients={ patients }
          setPatient={ setPatient }
        />
      </div>
    </div>
  );
}

export default App;
