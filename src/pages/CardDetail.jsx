import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../styles/style.css';
import Footer from "../components/layout/Footer";
import { translate } from "../translations/translate";

const CardDetail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);

  const searchCharacter = async () => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      console.log(data);
      setCharacter(data);
    } catch (error) {
      console.error("Error al obtener el personaje:", error);
    }
  };

  useEffect(() => {
    searchCharacter();
  }, [id]);

  return (
    <div className="container">
      <i><h1 style={{ color: "white" }}>Detalles Del Personaje</h1></i>
      <div className="center-card">
        {character && (
          <div className="card" style={{ width: "20rem" }}>
            <img src={character.image} className="card-img-top" alt="primera imagen" />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Genero: {translate("gender", character.gender)} </li>
              <li className="list-group-item">Origen: {character.origin.name} </li>
              <li className="list-group-item">Ubicacion actual: {character.location.name} </li>
              <li className="list-group-item">Especie: {translate("species", character.species)} </li>
              <li className="list-group-item">Estado: {translate("status", character.status)} </li>
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CardDetail;