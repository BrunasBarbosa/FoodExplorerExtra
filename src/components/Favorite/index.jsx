import { ButtonText } from '../ButtonText';
import { Container } from './styles';

export function Favorite({ data }) {
  return (
    <Container>
      <img src={data.image} alt={`Imagem de ${data.name}`} />

      <div>
        <h2>{data.name}</h2>
        <ButtonText title='Remover dos Favoritos'/>
      </div>
    </Container>
  );
}