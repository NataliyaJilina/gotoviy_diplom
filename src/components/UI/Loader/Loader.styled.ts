import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;
`;


export const HouseIcon = styled.div`
  width: 50px; 
  height: 50px; 
  background-image: url('/img/images.png');
  background-size: cover;
  animation: ${spin} 1s linear infinite;
  border: 2px solid black;
  border-radius: 50%;
`;



