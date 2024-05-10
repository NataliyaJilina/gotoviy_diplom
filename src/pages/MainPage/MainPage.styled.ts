// mainpage.styled.ts
import styled from "styled-components";

export const SCMainPage = styled.div`
  display: flex;
  background-color: rgb(230, 230, 230);

  .favoriteStar {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10px;
    font-size: 30px;
    cursor: pointer;
    color: black;
    transition: color 0.3s, background-color 0.3s;
    border-radius: 10%;
    font-family: 'Montserrat', sans-serif;
  }

  .favoriteStar.active {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 12px;
  }

  .workFrame {
    padding: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 50px;
    position: relative;
  }

  .workCard {
    background: url("./public/img/header1.jpg") center/cover no-repeat;
    border: 1px solid black;
    border-radius: 25px;
    padding-bottom: 30px;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    max-height: 350px;
    overflow: hidden;
    position: relative;
    transition: box-shadow 0.3s;
    cursor: pointer; 
    
    &:hover {
      box-shadow: 0px 0px 20px rgba(0, 128, 0, 0.7);
    }
  }

  .workCard img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid black;
  }

  .cardText {
    padding: 10px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: auto;
  }

  .cardText span {
    grid-area: b;
  }
  .cardText p {
    grid-area: d;
  }
`;
