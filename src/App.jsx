import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Listing from "./pages/Listing";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Reports from "./pages/Reports";

import doctors_database from "./data/doctors";
import pettypes_database from "./data/pet-types";
import Error404 from "./pages/Error404";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});
  const [doctors, setDoctors] = useState([]);
  const [petTypes, setPetTypes] = useState([]);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const getLocalStorage = () => {
      const patientsInLocalStorage =
        JSON.parse(localStorage.getItem("patients")) ?? [];
      setPatients(patientsInLocalStorage);
    };
    getLocalStorage();
  }, []);

  useEffect(() => {
    setDoctors(doctors_database);
    setPetTypes(pettypes_database);
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <Layout theme={theme} handleThemeSwitch={handleThemeSwitch} />
          }
        >
          <Route index element={<Home />} />
          <Route
            path="/registration"
            element={
              <Form
                patient={patient}
                patients={patients}
                doctors={doctors}
                petTypes={petTypes}
                setPatient={setPatient}
                setPatients={setPatients}
              />
            }
          />
          <Route
            path="/listing"
            element={
              <Listing patients={patients} deletePatient={deletePatient} />
            }
          />
          <Route
            path="/reports"
            element={
              <Reports
                patients={patients}
                doctors={doctors}
                petTypes={petTypes}
              />
            }
          />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
