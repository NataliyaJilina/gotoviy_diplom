import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetPropertiesQuery } from '../../store/api/userApi';
import { SCMainPage } from './MainPage.styled';
import { Header } from "../../components/UI/Header/Header";
import Loader from "../../components/UI/Loader/Loader"; 

export const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true); 
  const { data, error } = useGetPropertiesQuery('5002,6020');
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

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1000);

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="MainPage">
      <Header />
      <SCMainPage>
        {isLoading ? ( 
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Loader />
          </div>
        ) : (
          <div className="MainPageFrame">
            <div className="workFrame">
              {data && data.hits.map((property, index) => (
                <div className="workCard" key={index}>
                  <Link to={`/details/${property.id}`}>
                    <img src={property.coverPhoto.url} alt={`Property ${index}`} id={`workCard-${index}`} />
                    <div className="cardText">
                      <span>Title: {property.title}</span>
                      <p>ID: {property.id}</p>
                      <span>Price: {property.price}</span>
                    </div>
                  </Link>
                  <span className={`favoriteStar ${favorites.includes(property.id) ? 'active' : ''}`} onClick={() => toggleFavorite(property.id)}>★</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </SCMainPage>
    </div>
  );
};

export default MainPage;
