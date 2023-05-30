import { Container } from './styles';
import { Card } from '../Card';

export function Section({ title, data, icon: Icon, children }) {

  return (
    <Container>
      <h3>{title}</h3>

      <div>
        {
          data.length > 0 ?
            data.map((dishe, index) => (
              <Card
                key={String(index)}
                data={dishe}
                icon={Icon}
                children={children}
              />
            ))
            :
            <Card />
        }
      </div>


    </Container>
  );
}