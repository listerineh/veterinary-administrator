import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Listing from "./components/Listing";
import Layout from "./layout/Layout";

import Home from "./pages/Home";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLocalStorage = () => {
      const patientsInLocalStorage =
        JSON.parse(localStorage.getItem("patients")) ?? [];
      setPatients(patientsInLocalStorage);
    };
    getLocalStorage();
  }, []);

  useEffect(() => {
    if (patients.length === 0) return;
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/registration"
            element={
              <Form
                patient={patient}
                patients={patients}
                setPatient={setPatient}
                setPatients={setPatients}
              />
            }
          />
          <Route
            path="/listing"
            element={
              <Listing
                patients={patients}
                setPatients={setPatients}
                deletePatient={deletePatient}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
