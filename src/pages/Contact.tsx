import React from 'react';
import Helmet from 'react-helmet';

import Section from '../components/Section';
import picHosono from '../images/pic_hosono.jpg';
import picMail from '../images/pic_mail.png';
import { siteTitle } from '../siteSetting';
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
              東京でフロントエンドエンジニアとして働いている。
              <br />
              <br />
              かつてはフリーランスとしてアニメーション制作会社、個人経営の本屋さんのサイトなど多数手がけた。
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
