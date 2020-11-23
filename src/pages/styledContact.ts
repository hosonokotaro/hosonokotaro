import styled from 'styled-components';

export const ContactImage = styled.figure`
  position: relative;
  width: 180px;
  margin: 0 auto;
  padding-top: 2em;

  @media (min-width: 768px) {
    width: 360px;
  }

  img {
    width: 100%;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;

    @media (min-width: 768px) {
      height: 360px;
    }
  }
`;

export const ContactSubTitle = styled.h3`
  padding-top: 0.8em;
  line-height: 1;
  font-size: 1.8rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const ContactText = styled.p`
  padding-top: 2em;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const MailIcon = styled.img`
  width: 25px;

  @media (min-width: 768px) {
    width: auto;
  }
`;
