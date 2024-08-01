import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacterById } from "../features/character/charactersSlice";
import '../styles/style.css';
import Footer from "../components/layout/Footer";
import { translate } from "../translations/translate";

const CardDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characters.selectedCharacter);
  const status = useSelector((state) => state.characters.selectedCharacterStatus);

  useEffect(() => {
    dispatch(fetchCharacterById(id));
  }, [id, dispatch]);

  return (
    <div className="container">
      <i><h1 style={{ color: "white" }}>Detalles Del Personaje</h1></i>
      <div className="center-card">
        {status === 'loading' && <p>Cargando...</p>}
        {status === 'failed' && <p>Error al obtener el personaje</p>}
        {status === 'succeeded' && character && (
          <div className="card" style={{ width: "20rem" }}>
            <img src={character.image} className="card-img-top" alt="primera imagen" />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Genero: {translate("gender", character.gender)} </li>
              <li className="list-group-item">Origen: {character.origin.name} </li>
              <li className="list-group-item">Ubicación actual: {character.location.name} </li>
              <li className="list-group-item">Especie: {translate("species", character.species)} </li>
              <li className="list-group-item">Estado: {translate("status", character.status)} </li>
            </ul>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default CardDetail;