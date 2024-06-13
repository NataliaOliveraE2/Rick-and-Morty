import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
import '../styles/style.css';

const Card = ({id, nombre, imagen, especie, estado}) => {

  return (
    <div className="custom-card">
        <div className="card" style={{width: "20rem"}}>
            <Link to={`/detalles/${id}`}>
                <img src={imagen} class="card-img-top" alt="primera imagen"/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Especie: {especie} </li>
                    <li className="list-group-item">Estado: {estado} </li>
                </ul>
            </Link>
        </div>
    </div>
  )
}

Card.proptype = {
    id: PropTypes.number,
    nombre: PropTypes.string,
    imagen: PropTypes.string,
    especie: PropTypes.string,
    estado: PropTypes.string
}

export default Card