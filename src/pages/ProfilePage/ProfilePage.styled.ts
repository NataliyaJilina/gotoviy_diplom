import styled from 'styled-components';

export const SCProfilePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 90px;

  .profileCard {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 128, 0, 0.5);
    font-family: 'Montserrat', sans-serif;
    width: 50%;
  }

  .profileCard h1 {
    margin: 10px 0;
  }

  .profileCard > * + * { 
    border-top: 1px solid #ccc; 
    padding-top: 10px; 
  }
`;
