import React from 'react';
import Helmet from 'react-helmet';

import Section from '../components/Section';
import Twitter from '../components/Twitter';
import picKitaku from '../images/pic_kitaku.png';
import txtKitakuTtl from '../images/txt_kitaku_ttl.png';
import { siteTitle } from '../siteSetting';
import {
  Description,
  ExternalLinkList,
  FirstView,
  FirstViewContent,
  IconText,
  LinkItem,
  LinkText,
  StyledH2,
} from './styledTop';

const Top: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TOP | {siteTitle}</title>
      </Helmet>
      <FirstView>
        <FirstViewContent>
          <figure>
            <img src={picKitaku} alt="北区" />
          </figure>
          <StyledH2>
            <img src={txtKitakuTtl} alt="東京都北区赤羽" />
          </StyledH2>
          <Description>
            東京都北区赤羽、北の玄関口。
            <br />
            戦後の労働者たちは夜勤明けに、赤羽の飲み屋街に集まり酒を飲んだという。
            <br />
            私は、そんな粗野な印象を残す街で、親子三世代に渡って生活をしている。
          </Description>
        </FirstViewContent>
      </FirstView>
      <Section
        title="Speak"
        content={
          <ExternalLinkList>
            <LinkItem>
              <IconText>個人ブログ</IconText>
              <LinkText
                href="https://techblog.hosonokotaro.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://techblog.hosonokotaro.jp/
              </LinkText>
            </LinkItem>
            <LinkItem>
              <IconText>GitHub</IconText>
              <LinkText
                href="https://github.com/hosonokotaro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/hosonokotaro/
              </LinkText>
            </LinkItem>
            <LinkItem>
              <IconText>note</IconText>
              <LinkText
                href="https://note.mu/hosonokotaro"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://note.mu/hosonokotaro
              </LinkText>
            </LinkItem>
          </ExternalLinkList>
        }
      />
      <Twitter />
    </>
  );
};

export default Top;
