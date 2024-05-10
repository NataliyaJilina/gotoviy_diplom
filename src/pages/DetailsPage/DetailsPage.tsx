import { useParams } from 'react-router-dom';
import { useGetDetailsQuery } from '../../store/api/userApi';
import Loader from "../../components/UI/Loader/Loader";
import { Container, PropertyDetails, DetailItem, DetailHeading, DetailText, PhotoContainer, Photo } from './DetailsPage.styled'; 
import { Header } from '../../components/UI/Header/Header';

export const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetDetailsQuery(id);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data found</div>;

  return (
    <>
      <Header /> 
      <Container> 
        <PropertyDetails>
          <DetailItem>
            <DetailHeading>Purpose:</DetailHeading>
            <DetailText>{data.purpose}</DetailText>
          </DetailItem>
          <DetailItem>
            <DetailHeading>Price:</DetailHeading>
            <DetailText>{data.price}</DetailText>
          </DetailItem>
          <DetailItem>
            <DetailHeading>Description:</DetailHeading>
            <DetailText>{data.description}</DetailText>
          </DetailItem>
          <DetailItem>
            <DetailHeading>Photos:</DetailHeading>
            <PhotoContainer>
              {data.photos.map((photo: { url: string | undefined; }, index: number) => (
                <Photo key={index} src={photo.url} alt={`Photo ${index}`} />
              ))}
            </PhotoContainer>
          </DetailItem>
        </PropertyDetails>
      </Container>
    </>
  );
};

export default DetailsPage;
