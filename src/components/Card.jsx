import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Card = ({id, nombre, imagen, especie, estado}) => {

  return (
    <div>
        <div className="card" style={{width: "20rem"}}>
            <img src={imagen} class="card-img-top" alt="primera imagen"/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Especie: {especie} </li>
                <li className="list-group-item">Estado: {estado} </li>
            </ul>
        </div>
    </div>
  )
}

Card.prototype = {
 nombre: PropTypes.string,
 imagen: PropTypes.string,
 especie: PropTypes.string,
 estado: PropTypes.string
}

export default Card