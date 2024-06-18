import React, { useEffect, useState } from "react";
import Card from "./Card";
import '../styles/style.css';
import { translate } from "../translations/translate";

export const Cards = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(5);

  const charactersList = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const { results } = await res.json();
      setCharacters(results.slice(0, limit));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    charactersList(limit);
  }, [limit]);

  const handleReload = () => {
    charactersList(limit);
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
          characters.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              species={translate("species", character.species)}
              status={translate("status", character.status)}
            />
          ))}
      </div>
    </>
  );
};