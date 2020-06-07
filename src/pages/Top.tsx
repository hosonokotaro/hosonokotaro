import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components/macro';
import { siteTitle } from '../SiteSetting';
import Twitter from '../components/Twitter';
import Section from '../components/Section';

import picKitaku from '../images/pic_kitaku.png';
import txtKitakuTtl from '../images/txt_kitaku_ttl.png';
import picKitakuBg from '../images/pic_kitaku_bg.jpg';

const Top: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TOP | {siteTitle}</title>
      </Helmet>
      <FirstView>
        <figure>
          <img
            src={picKitaku}
            alt="北区"
          />
        </figure>
        <h2
          css={`
            padding-top: 2em;
          `}
        >
          <img
            src={txtKitakuTtl}
            alt="東京都北区赤羽"
          />
        </h2>
        <p>
          東京都北区赤羽、北の玄関口。
          <br />
          戦後の労働者たちは夜勤明けに、赤羽の飲み屋街に集まり酒を飲んだという。
          <br />
          私は、そんな粗野な印象を残す街で、親子三世代に渡って生活をしている。
        </p>
      </FirstView>
      <Section
        title="Speak"
        content={
          <ExternalLinkList>
            <li>
              <IconText>
                GitHub
              </IconText>
              <a
                href="https://github.com/hosonokotaro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/hosonokotaro/
              </a>
            </li>
            <li>
              <IconText>Qiita</IconText>
              <a
                href="https://qiita.com/hosono"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://qiita.com/hosono
              </a>
            </li>
            <li>
              <IconText>note</IconText>
              <a
                href="https://note.mu/hosonokotaro"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://note.mu/hosonokotaro
              </a>
            </li>
          </ExternalLinkList>
        }
      />
      <Twitter />
    </>
  );
};

const FirstView = styled.section`
  margin: 0 auto;
  padding: 4em;
  text-align: center;
  background: url(${picKitakuBg}) top
    30% center no-repeat;
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

const ExternalLinkList = styled.ul`
  padding-top: 2em;
  line-height: 1.8;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const IconText = styled.span`
  margin-right: 5px;
  padding: 0 5px;
  background: #000;
  color: #fff;
`;

export default Top;
