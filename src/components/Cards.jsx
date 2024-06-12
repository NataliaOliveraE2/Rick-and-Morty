import React, { useEffect, useState } from 'react';
import Card from './Card';

export const Cards = () => {
    
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(5);

    const listaPersonajes = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("https://rickandmortyapi.com/api/character");
            const { results } = await res.json();
            setPersonajes(results.slice(0, limit));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        listaPersonajes(limit);
    }, [limit]);

    const handleReload = () => {
        listaPersonajes(limit);
    };

    const handleChangeLimit = (event) => {
        setLimit(Number(event.target.value));
    };

  return (
    <>
        <div>
            <button onClick={handleReload}>Recargar Lista</button>
            <label>
                Cantidad de personajes a mostrar:
                <select value={limit} onChange={handleChangeLimit}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </label>
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && personajes.map((personaje) => (
                <Card key={personaje.id} id={personaje.id} nombre={personaje.name} imagen={personaje.image} especie={personaje.species} estado={personaje.status}/>
            ))}
        </div>
    </>
  )
}
