import React, { useEffect, useState } from 'react';
import Card from './Card';

export const Cards = () => {
    
    const [personajes, setPersonajes] = useState([]);

    const listaPersonajes = async () => {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const {results} = await res.json();
        console.log(results);
        setPersonajes(results);
    }

    useEffect(() => {
        listaPersonajes();
    }, []);

  return (
    <>
        {personajes.map((personaje) => (
            <Card key={personaje.id} nombre={personaje.name} imagen={personaje.image} especie={personaje.species} estado={personaje.status} />
        ))}
    </>
  )
}
