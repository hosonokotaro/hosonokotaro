import styled from 'styled-components';

export const StyledHeader = styled.header`
  text-align: center;
`;

export const Footer = styled.footer`
  padding: 20px 0;
  line-height: 1;
  text-align: center;
  border-top: 1px solid #333;
  font-size: 1.2rem;
  color: #000;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
