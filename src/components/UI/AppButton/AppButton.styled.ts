import styled from "styled-components";



export const SCAppButton = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 70px;
  border-radius: 5px;
  background-color: rgb(40, 147, 26);
  border: none;
  transition: transform 0.3s ease;
  color: white;
  font-weight: bold;
  border-radius: 10px;


  &:is(:active) {
    transform: scale(0.95);
    background-color: rgb(2, 170, 47);
  }
`;

