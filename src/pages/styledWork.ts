import styled from 'styled-components';

export const WorkList = styled.dl`
  padding-top: 2em;
  line-height: 1;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  dt {
    line-height: 1;
    font-size: 2.4rem;

    @media (min-width: 768px) {
      font-size: 3.2rem;
    }
  }
  dd {
    padding-top: 1em;
  }
  dd + dd {
    padding-top: 1em;
  }
  dd + dt {
    padding-top: 1em;
  }
`;
