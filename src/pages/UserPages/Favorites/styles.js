import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.main`
  width: 100%;
  padding: 1rem 3.2rem 5.3rem;

  div:first-child {
    font-size: 1.6rem;
    gap: .4rem;
    
    svg {
      height: 1.6rem;
      width: 1.6rem;
    }
  }
  
  h1 {
    padding: 1rem 0 2.7rem;
    font-size: 3.2rem;
    font-weight: 500;
  }
`;