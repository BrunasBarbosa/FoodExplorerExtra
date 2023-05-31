import { useNavigate } from 'react-router-dom';
import { ButtonText } from '../ButtonText';
import { Container } from './styles';

export function Favorite({ data, ...rest }) {
  const navigate = useNavigate();

  function handleDetails(id) {
    return navigate(`/details/${id}`);
  }

  return (
    <Container {...rest} onClick={() => handleDetails(data.id)}>
      <img src={data.image} alt={`Imagem de ${data.name}`} />

      <div>
        <h2>{data.name}</h2>
        <ButtonText title='Remover dos Favoritos' />
      </div>
    </Container>
  );
}