import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../../commons/navbar/Navbar";
import Footer from "../../commons/footer/Footer";
import Home from "../../components/home/Home";
import SignUp from "../../components/completarSignUp/SignUp";
import Register from "../../components/Register/Register";
import { Equipo } from "../miEquipo/Equipo";
import EventosEquipo from "../miEquipo/historial/historial";
import { Usuario } from "../usuario/Usuario";
import MiInformación from "../miInformación/MiInformación";
import { useSelector } from "react-redux";

function App() {
  const usuario = useSelector((state) => state.usuario);

  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route
            exact
            path="/"
            element={
              usuario.nombres && !usuario.intereses ? <SignUp /> : <Home />
            }
          />
          <Route exact path="/completarRegistro" element={<SignUp />} />
          <Route
            exact
            path="/registro"
            element={!usuario.nombres ? <Register /> : <Home />}
          />

          <Route
            exact
            path={`/${usuario.idPersona}`}
            element={
              usuario.nombres && !usuario.intereses ? <SignUp /> : <Usuario />
            }
          />
          <Route
            exact
            path="/miPerfil"
            element={
              usuario.nombres && !usuario.intereses ? (
                <SignUp />
              ) : (
                <MiInformación />
              )
            }
          />
          <Route exact path="/miEquipo" element={<Equipo />} />
          <Route exact path="/miEquipo/historial" element={<EventosEquipo equipoId="1" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
