import React, { useState, useContext } from 'react';
import { useFavorites } from '../context/FavoritosContext';

function DetalleCreacion({ creation }) {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = favorites.includes(creation);

  const handleAddToFavorite = () => {
    addToFavorites(creation);
  };

  const handleRemoveFromFavorite = () => {
    removeFromFavorites(creation);
  };

  return (
    <div>
      <h2>{creation.title}</h2>
      <p>{creation.description}</p>
      <p>Fecha: {creation.date}</p>
      <a href={creation.url} target="_blank" rel="noopener noreferrer">Ver más</a>
      
      {isFavorite ? (
        <button onClick={handleRemoveFromFavorite}>Quitar de Favoritos</button>
      ) : (
        <button onClick={handleAddToFavorite}>Agregar a Favoritos</button>
      )}
    </div>
  );
}

export default DetalleCreacion;
