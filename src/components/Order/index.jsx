import { useEffect, useState } from 'react';
import { Container } from './styles';

export function Order({ data }) {
  let [color, setColor] = useState(null);
  let [status, setStatus] = useState(data.status);

  status = data.status;

  useEffect(() => {
    if (status === 'Pendente') {
      color = '#AB222E';
    } else if (status === 'Preparando') {
      color = '#FBA94C';
    } else {
      color = '#04D361';
    }

    setColor(color);
  }, [status]);

  return (
    <Container>
      <div>
        <span>{data.id}</span>
        <div>
          <span
            className='status-color'
            style={{ backgroundColor: `${color}` }}
          ></span>
          <span>{status}</span>
        </div>
        <span>{data.created_at}</span>
      </div>
      <p>
        {data.description}
      </p>
    </Container>
  );
}