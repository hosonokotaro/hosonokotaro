import React from 'react';
import Helmet from 'react-helmet';

import { siteTitle } from '../siteSetting';
import Section from '../components/Section';
import picHosono from '../images/pic_hosono.jpg';
import picMail from '../images/pic_mail.png';

import {
  ContactImage,
  ContactSubTitle,
  ContactText,
  MailIcon,
} from './styledContact';

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
            <ContactImage>
              <img src={picHosono} alt="細野" />
            </ContactImage>
            <ContactSubTitle>HOSONO KOTARO</ContactSubTitle>
            <ContactText>
              <ruby>
                細野 広太郎
                <rt>ほその こうたろう</rt>
              </ruby>
              <br />
              1985年生まれ
              <br />
              <br />
              東京でフロントエンドエンジニアとして、ミレニアル世代のフリーランスとして活動している。
              <br />
              <br />
              大手企業などのサイトを受託案件として多数手がける。個人としては、アニメーション制作会社、個人経営の本屋さんのサイトも手がける。
              <br />
              <br />
              好きな言葉は「
              <ruby>
                色即是空
                <rt>しきそくぜくう</rt>
              </ruby>
              」
              <br />
              <br />
              <a href="mailto:hosono1985@gmail.com">
                <MailIcon src={picMail} alt="Mail" />
              </a>
            </ContactText>
          </>
        }
      />
    </>
  );
};

export default Contact;
