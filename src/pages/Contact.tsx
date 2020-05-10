import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { siteTitle } from '../SiteSetting';
import Section from '../components/Section';
import picHosono from '../images/pic_hosono.jpg';
import picMail from '../images/pic_mail.png';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CONTACT | {siteTitle}</title>
      </Helmet>
      <Section
        title="Contact"
        content={
          <>
            <Figure>
              <img src={picHosono} alt="細野" />
            </Figure>
            <TitleName>
              HOSONO KOTARO
            </TitleName>
            <TextDetail>
              <ruby>細野 広太郎<rt>ほその こうたろう</rt></ruby><br />
              1985年生まれ<br />
              <br />
              東京でフロントエンドエンジニアとして、ミレニアル世代のフリーランスとして活動している。<br />
              <br />
              大手企業などのサイトを受託案件として多数手がける。個人としては、アニメーション制作会社、個人経営の本屋さんのサイトも手がける。<br />
              <br />
              好きな言葉は「<ruby>色即是空<rt>しきそくぜくう</rt></ruby>」<br />
              <br />
              <a href="mailto:hosono1985@gmail.com">
                <IcomMail src={picMail} alt="Mail" />
              </a>
            </TextDetail>
          </>
        }
      />
    </>
  );
}

const Figure = styled.figure`
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

const TitleName = styled.h3`
  padding-top: 0.8em;
  line-height: 1;
  font-size: 1.8rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

const TextDetail = styled.p`
  padding-top: 2em;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const IcomMail = styled.img`
  width: 25px;
  
  @media (min-width: 768px) {
    width: auto;
  }
`;

export default Contact;