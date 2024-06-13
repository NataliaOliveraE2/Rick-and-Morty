import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../styles/style.css';
import Footer from "./layout/Footer";

const CardDetail = () => {
  const { id } = useParams();

  const [personaje, setPersonaje] = useState(null);

  const buscarPersonaje = async () => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      console.log(data);
      setPersonaje(data);
    } catch (error) {
      console.error("Error al obtener el personaje:", error);
    }
  };

  useEffect(() => {
    buscarPersonaje();
  }, [id]);

  return (
    <div className="container">
      <i><h1 style={{ color: "white" }}>Detalles Del Personaje</h1></i>
      <div className="center-card">
        {personaje && (
          <div className="card" style={{ width: "20rem" }}>
            <img src={personaje.image} className="card-img-top" alt="primera imagen" />
            <div className="card-body">
              <h5 className="card-title">{personaje.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Genero: {personaje.gender} </li>
              <li className="list-group-item">Origen: {personaje.origin.name} </li>
              <li className="list-group-item">Ubicacion actual: {personaje.location.name} </li>
              <li className="list-group-item">Especie: {personaje.species} </li>
              <li className="list-group-item">Estado: {personaje.status} </li>
            </ul>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default CardDetail;
