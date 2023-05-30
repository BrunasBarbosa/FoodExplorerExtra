import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Counter = styled.div`
  text-align: center;
  height: 80%;
  width: 70%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.RED_400};
  
  position: absolute;
  right: -.8rem;
  top: -.8rem;

  span {
    font-size: 1.4rem;
  }
`;