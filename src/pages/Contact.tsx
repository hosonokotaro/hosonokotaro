import React from 'react';
import picHosono from '../images/pic_hosono.jpg';
import picMail from '../images/pic_mail.png';

const Contact: React.FC = () => {
  return (
    <>
      <h2 className="sect__ttl">
        Contact
      </h2>
      <figure className="sect__pic">
        <img src={picHosono} alt="細野" className="sect__pic-img" />
      </figure>
      <h3 className="sect__ttl-name">
        HOSONO KOTARO
      </h3>
      <p className="sect__txt-detail">
        <ruby>細野 広太郎<rt>ほその こうたろう</rt></ruby><br />
        1985年生まれ<br />
        <br />
        東京でフロントエンドエンジニアとして、ミレニアル世代のフリーランスとして活動している。<br />
        <br />
        大手企業などのサイトを受託案件として多数手がける。個人としては、アニメーション制作会社、個人経営の本屋さんのサイトも手がける。<br />
        <br />
        好きな言葉は「<ruby>色即是空<rt>しきそくぜくう</rt></ruby>」<br />
        <br />
        <a href="mail">
          <img className="sect__pic-mail" src={picMail} alt="Mail" />
        </a>
      </p>
    </>
  );
}

export default Contact;