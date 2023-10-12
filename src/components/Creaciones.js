import React, { useContext } from 'react';
import { useFavorites } from '../context/FavoritosContext';
import creaciones from "../data/creaciones.json";

function Creaciones() {
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();
  const [creations, setCreations] = React.useState([]);

  React.useEffect(() => {
    setCreations([...creaciones]);
  }, []);

  return (
    <div>
      {creations.map((creation) => (
        <div key={creation.id}>
          <h2>{creation.title}</h2>
          <p>{creation.description}</p>
          <p>Fecha: {creation.date}</p>
          <a href={creation.url} target="_blank" rel="noopener noreferrer">Ver más</a>
          
          {favorites.includes(creation) ? (
            <button onClick={() => removeFromFavorites(creation)}>
              Quitar de Favoritos
            </button>
          ) : (
            <button onClick={() => addToFavorites(creation)}>
              Agregar a Favoritos
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Creaciones;
