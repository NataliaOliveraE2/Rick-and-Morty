import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
import '../styles/style.css';

const Card = ({ id, name, image, species, status }) => {
  return (
    <div className="custom-card">
      <div className="card" style={{ width: "20rem" }}>
        <Link to={`/detalles/${id}`}>
          <img src={image} className="card-img-top" alt="primera imagen" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Especie: {species}</li>
            <li className="list-group-item">Estado: {status}</li>
          </ul>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Card;