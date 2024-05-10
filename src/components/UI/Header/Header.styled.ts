import styled, { keyframes } from "styled-components";


const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const SCHeader = styled.div`
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 2px solid green;
  background: url("/img/header1.jpg") center/cover no-repeat; 
  opacity: 1;

  .profileBtn {
  background-image: url("/img/images1.png"); 
  background-size: cover; 
  width: 100px; 
  height: 100px; 
  margin-left: 20px; 
  border: none; 
  cursor: pointer;
  transition: transform 0.2s ease; 
  background-blend-mode: multiply; 
  &:hover {
    animation: ${hoverAnimation} 0.5s ease infinite; 
    transform: scale(1.1); 
  }
}

  .navButton, .logoutButton {
    text-decoration: none;
    color: white;
    border-left: 2px solid lightgray;
    border-right: 2px solid lightgray;
    border-radius: 10px;
    padding: 12px; 
    background-color: rgba(20, 112, 0, 0.7); 
    transition: transform 0.2s ease; 
    display: flex;
    justify-content: center;
    align-items: center; 
    cursor: pointer;
    font-weight: bold; 
    &:hover {
      animation: ${hoverAnimation} 0.5s ease infinite; 
      color: rgb(0, 61, 0);
      font-weight: bold;
      text-decoration: underline;
    }
  }

  #navigation {
    display: flex;
    gap: 30px;
    margin-left: 25px;
    margin-right: 25px;
  }

  .logoutButton { 
    margin-right: 20px; 
    transition: transform 0.2s ease;
    &:active {
      transform: scale(0.95);
    }
  }

  p {
    position: absolute;
    bottom: -25px;
    right: 0px;
    background-color: rgba(20, 112, 0, 0.7);
    padding: 5px;
    color: white;
    border-left: 2px solid lightGray;
    border-right: 2px solid lightGray;
    border-radius: 10px;
    text-align: center;
    &:hover {
      color: black;
      font-weight: bold;
    }
  }
`;
