import styled from 'styled-components';

export const Header = styled.header`
  text-align: center;
`;

export const Footer = styled.footer`
  border-top: 1px solid #333;
`;

export const Copyright = styled.div`
  margin: 2em 0;
  line-height: 1;
  text-align: center;
  font-size: 1.2rem;
  color: #000;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
