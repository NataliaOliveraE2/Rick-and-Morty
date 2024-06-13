import React, { useEffect, useState } from "react";
import Card from "./Card";
import '../styles/style.css';

const translate = (key, value) => {
  const translations = {
    species: {
      Human: "Humano",
      Alien: "Extraterrestre",
    },
    status: {
      Alive: "Vivo",
      Dead: "Muerto",
      unknown: "Desconocido",
    }
  };
  
  return translations[key][value] || value;
};

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
  };

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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={handleReload} className="btn btn-secondary">Recargar Lista</button>
            <label>
                Cantidad de personajes a mostrar:
                <select value={limit} onChange={handleChangeLimit}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                </select>
            </label>
        </div>
        {loading && <p>Cargando...</p>}
        {error && <p>Error: {error}</p>}
        {!loading &&
          !error &&
          personajes.map((personaje) => (
            <Card
              key={personaje.id}
              id={personaje.id}
              nombre={personaje.name}
              imagen={personaje.image}
              especie={translate("species", personaje.species)}
              estado={translate("status", personaje.status)}
            />
          ))}
      </div>
    </>
  );
};
