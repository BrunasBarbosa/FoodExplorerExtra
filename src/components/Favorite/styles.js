import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1.6rem 0;
  display: flex;
  align-items: center;

  gap: 1.3rem;
  
  div {
    white-space: nowrap;
    display: flex;
    flex-direction: column;
  }

  img {
    width: clamp(7.2rem, 1rem + 10vw, 20rem);
  }

  h2 {
    font-size: 2rem;
    line-height: 3.2rem;
    font-weight: 500;
  }
  
  button {
    font-family: var(--font-secondary);
    font-size: 1.2rem;
    line-height: 2rem;
    text-align: left;

    color: ${({ theme }) => theme.COLORS.RED_100};
  }
`;

