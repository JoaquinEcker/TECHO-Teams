import { usuario as u } from "../../utils/mockData";
import ButtonBase from "@mui/material/ButtonBase";
import { CajaDeRoles } from "../cajaDeRoles/CajaDeRoles";
import "./TarjetaUsuario.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import {  useLocation } from 'react-router-dom';
import { BotonMiInfo } from '../../components/botonMiInfo/BotonMiInfo'

<<<<<<< HEAD
export const TarjetaUsuario = ({ usuario }) => {

=======
export const TarjetaUsuario = () => {
  const usuario = useSelector((state) => state.usuario);
  const navigate = useNavigate();
  const location = useLocation();
  let soyYo = `/${usuario.idPersona}` ===  location.pathname;
  
>>>>>>> 74a89ae55aeb10c1d1db6194abf9fc02c623d909
  return (
    <div className="tarjeta-usuario">
      <div className="grid-usuario">
        <div className="avatar-usuario">
<<<<<<< HEAD
          <ButtonBase sx={{ width: 200, height: 200 }} id='ripple-avatar'>
            <img className="avatar" src={!usuario.imagen ? u.avatar : usuario.imagen} alt="Avatar de Usuario" />
=======
          <ButtonBase sx={{ width: 200, height: 200 }} id="ripple-avatar">
            <img className="avatar" src={u.avatar} alt="Avatar de Usuario" />
>>>>>>> 74a89ae55aeb10c1d1db6194abf9fc02c623d909
          </ButtonBase>
        </div>
        <h1 className="nombre-usuario">{`${usuario.nombres} ${usuario.apellidoPaterno}`}</h1>
        <div className="contenedor-roles">
          <CajaDeRoles />
        </div>
        <h4 className="antiguedad-usuario">{`${`### años`} en TECHO`}</h4>
        {soyYo && <BotonMiInfo id="boton-mi-info" />}
      </div>
    </div>
  );
};
