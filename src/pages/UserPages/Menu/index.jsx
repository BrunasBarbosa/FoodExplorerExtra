import { HeaderMenu } from '../../../components/HeaderMenu';
import { ButtonText } from '../../../components/ButtonText';
import { Footer } from '../../../components/Footer';
import { Input } from '../../../components/Input';
import { Link } from 'react-router-dom';
import { Container, Main } from './styles';
import { IoSearchOutline } from 'react-icons/io5';

export function Menu() {
  return (
    <Container>
      <HeaderMenu />

      <Main>
        <Input icon={IoSearchOutline} placeholder='Busque por pratos ou ingredientes' />

        <Link to='/favorites'>
          <ButtonText title='Meus favoritos' />
        </Link>

        <ButtonText title='Sair' />
      </Main>

      <Footer />
    </Container>
  );
}