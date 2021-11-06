import styled from 'styled-components';

export const StyledSection = styled.section`
  max-width: 768px;
  margin: 4em auto 0 auto;
  padding: 0 4em;
`;

export const Title = styled.h2`
  line-height: 1;
  font-size: 3.2rem;
  font-style: italic;

  @media (min-width: 768px) {
    font-size: 4.8rem;
  }
`;
