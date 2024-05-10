// FavoritesPage.styled.ts
import styled from 'styled-components';

export const SCFavoritesPage = styled.div`
  .FavoritesPage {
    padding: 20px;
  }

  .favorites-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
  }

  .favorite-item {
    border: 1px solid #ccc;
    padding: 15px; 
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .favorite-item:hover {
    background-color: #f0f0f0;
  }

  
  .favorite-item img {
    width: 125px;
    height: 125px;
    object-fit: cover;
    border-radius: 15px; 
  }
`;
