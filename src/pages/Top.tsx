import React from 'react';
import Helmet from 'react-helmet';

import Section from '@/Section';
import Twitter from '@/Twitter';
import {
  Description,
  ExternalLinkList,
  FirstView,
  FirstViewContent,
  LinkItem,
  LinkText,
  StyledH2,
} from '~/pages/styledTop';
import { siteTitle } from '~/siteSetting';

const Top: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TOP | {siteTitle}</title>
      </Helmet>
      <FirstView>
        <FirstViewContent>
          <figure>
            <img src="images/pic_kitaku.png" alt="北区" />
          </figure>
          <StyledH2>
            <img src="images/txt_kitaku_ttl.png" alt="東京都北区赤羽" />
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
              <LinkText
                href="https://techblog.hosonokotaro.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                個人ブログ
              </LinkText>
            </LinkItem>
            <LinkItem>
              <LinkText
                href="https://github.com/hosonokotaro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </LinkText>
            </LinkItem>
            <LinkItem>
              <LinkText
                href="https://note.mu/hosonokotaro"
                target="_blank"
                rel="noopener noreferrer"
              >
                note
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
