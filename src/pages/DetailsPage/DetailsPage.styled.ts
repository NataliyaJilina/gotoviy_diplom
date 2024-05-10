import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
`;

export const PropertyDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: auto;
  background: #ffffff; 
  border-radius: 30px;
  padding: 20px;
  overflow-x: auto;
  max-width: 90%;
  box-shadow: 0px 5px 10px rgba(0, 51, 0, 0.5); 
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid rgba(128, 128, 128, 0.5); 
  padding-bottom: 10px; 
`;

export const DetailHeading = styled.h3`
  font-family: Arial, sans-serif;
  color: #006600;
  margin-right: 10px;
`;

export const DetailText = styled.p`
  font-family: Arial, sans-serif;
  color: #003300;
  margin-bottom: 5px;
`;

export const PhotoContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

export const Photo = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const SCHeader = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid green;
  background: url("C:/Users/puttj3/Desktop/diplom/public/img/header1.jpg") center/cover no-repeat;
  opacity: 1;
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%; 
  z-index: 999;
`;
