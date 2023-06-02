import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1.6rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  
  font-family: var(--font-secondary);
  line-height: 2.2rem;
  color: ${({ theme }) => theme.COLORS.GRAY_400};

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: .8rem;

  * {
    font-size: 1.4rem;
  }

  .status-color {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    gap: 3rem;
  }

  div:nth-child(2) {
    display: flex;
    gap: .8rem;
    align-items: center;
  }
`;