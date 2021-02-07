import styled from 'styled-components';

import picKitakuBg from '../images/pic_kitaku_bg.jpg';

export const FirstView = styled.section`
  margin: 0 auto;
  padding: 4em;
  text-align: center;
  background: url(${picKitakuBg}) top 30% center no-repeat;
  background-size: cover;

  p {
    padding-top: 2em;
    line-height: 1.8;
    font-size: 1.4rem;
    color: #ddd;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

export const StyledH2 = styled.h2`
  padding-top: 2em;
`;

export const ExternalLinkList = styled.ul`
  padding-top: 2em;
  line-height: 1.8;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const IconText = styled.span`
  margin-right: 5px;
  padding: 0 5px;
  background: #000;
  color: #fff;
`;
