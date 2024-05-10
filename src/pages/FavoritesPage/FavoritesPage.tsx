import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetPropertiesQuery } from '../../store/api/userApi';
import { SCFavoritesPage } from './FavoritesPage.styled';
import { Header } from "../../components/UI/Header/Header";
import Loader from "../../components/UI/Loader/Loader"; 

export const FavoritesPage = () => {
  const { data, error, isLoading } = useGetPropertiesQuery('5002,6020');

  const [favorites, setFavorites] = useState<string[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const toggleFavorite = (id: string) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const favoriteProperties = data?.hits.filter(property => favorites.includes(property.id));

  return (
    <div className="FavoritesPage">
      <Header />
      <SCFavoritesPage>
        <h2>Favorites</h2>
        {isLoading ? ( 
          <Loader />
        ) : (
          <div className="favorites-list">
            {favoriteProperties && favoriteProperties.map((property, index) => (
              <Link to={`/details/${property.id}`} key={property.id}>
                <div className="favorite-item">
                  <img src={property.coverPhoto.url} alt={`Property ${index}`} />
                  <div>{property.title}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </SCFavoritesPage>
    </div>
  );
};

export default FavoritesPage;
