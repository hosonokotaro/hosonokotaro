import styled from 'styled-components';

export const FirstView = styled.section`
  margin: 0 auto;
  padding: 4em;
  background: url(/images/pic_kitaku_bg.jpg) top 30% center no-repeat;
  background-size: cover;
`;

export const FirstViewContent = styled.div`
  text-align: center;
`;

export const Description = styled.p`
  margin-top: 2em;
  line-height: 1.8;
  font-size: 1.4rem;
  color: #ddd;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const StyledH2 = styled.h2`
  margin-top: 2em;
`;

export const ExternalLinkList = styled.div`
  margin-top: 4em;
`;

export const LinkItem = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1em;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const LinkText = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  height: 40px;
  padding: 0 5px;
  font-size: 1.6rem;
  background: #000;
  color: #fff;
`;
