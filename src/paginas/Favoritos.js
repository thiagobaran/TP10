import React from 'react';
import CreationsDetail from '../components/Creaciones';
import { useFavorites } from '../context/FavoritosContext';

function Favoritos() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h2>Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No tienes creaciones favoritas.</p>
      ) : (
        favorites.map((creation) => (
          <CreationsDetail key={creation.id} creation={creation} />
        ))
      )}
    </div>
  );
}

export default Favoritos;
