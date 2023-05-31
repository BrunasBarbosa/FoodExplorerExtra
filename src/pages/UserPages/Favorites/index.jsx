import { DishesRepositoryInMemory, MainDishesRepositoryInMemory, MainDishesRepositoryInMemoryTwo } from '../../../repositories/DishesRepositoryInMemory';

import { HeaderUser } from '../../../components/HeaderUser';
import { Favorite } from '../../../components/Favorite';
import { Return } from '../../../components/Return';

import { Container, Content } from './styles';

export function Favorites() {
  const data = DishesRepositoryInMemory;

  return (
    <Container>
      <HeaderUser />

      <Content>
        <Return />
        <h1>Meus favoritos</h1>
          {
            data.length > 0 ?
              data.map((dishe, index) => (
                <Favorite
                  key={String(index)}
                  data={dishe}
                />
              ))
              :
              <Card />
          }
      </Content>
    </Container>
  );
}