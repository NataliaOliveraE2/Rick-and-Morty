import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters, setLimit } from "../features/character/charactersSlice";
import Card from "../components/Card";
import '../styles/style.css';
import { translate } from "../translations/translate"; 

const Cards = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const limit = useSelector((state) => state.characters.limit);

  useEffect(() => {
    dispatch(fetchCharacters(limit));
  }, [limit, dispatch]);

  const handleReload = () => {
    dispatch(fetchCharacters(limit));
  };

  const handleChangeLimit = (event) => {
    dispatch(setLimit(Number(event.target.value)));
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
        {status === 'loading' && <p>Cargando...</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        {status === 'succeeded' &&
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

export default Cards;