import { OrdersRepositoryInMemory } from '../../../repositories/OrdersRepository';

import { HeaderUser } from '../../../components/HeaderUser';
import { Return } from '../../../components/Return';
import { Order } from '../../../components/Order';
import { Container, Content } from './styles';

export function Orders() {
  const data = OrdersRepositoryInMemory;

  return (
    <Container>
      <HeaderUser />
      <Content>
        <Return />
        <h1>Pedidos</h1>
        {
          data &&
          data.map((order) => (
            <Order
              key={String(order.id)}
              data={order}
            />
          ))
        }
      </Content>
    </Container>
  );
}