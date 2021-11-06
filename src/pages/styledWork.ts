import styled from 'styled-components';

export const WorkList = styled.dl`
  margin-top: 2em;
`;

export const Title = styled.dt`
  margin-top: 1em;
  line-height: 1;
  font-size: 2.4rem;

  @media (min-width: 768px) {
    font-size: 3.2rem;
  }
`;

export const Description = styled.dd`
  margin-top: 1em;
  line-height: 1;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;
