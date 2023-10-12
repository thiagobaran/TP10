import React, { useContext } from 'react';

const FavoritosContext = React.createContext();

export const useFavorites = () => {
  return useContext(FavoritosContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = React.useState([]);

  const addToFavorites = (creation) => {
    if (!favorites.find((fav) => fav.id === creation.id)) {
      setFavorites([...favorites, creation]);
    }
  };

  const removeFromFavorites = (creation) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== creation.id);
    setFavorites(updatedFavorites);
  };

  const favoritesCount = favorites.length;

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    favoritesCount,
  };

  return (
    <FavoritosContext.Provider value={value}>
      {children}
    </FavoritosContext.Provider>
  );
};
