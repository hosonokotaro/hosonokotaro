import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  Section,
  SectionTitle,
} from '../components/Section';

import picKitaku from '../images/pic_kitaku.png';
import txtKitakuTtl from '../images/txt_kitaku_ttl.png';
import picKitakuBg from '../images/pic_kitaku_bg.jpg';

const Top: React.FC = () => {
  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://platform.twitter.com/widgets.js';
    scriptTag.charset = 'utf-8';

    document.getElementById('twitter')?.appendChild(scriptTag);
  });

  return (
    <>
      <Bg>
        <figure>
          <img src={picKitaku} alt="北区" />
        </figure>
        <Title>
          <img src={txtKitakuTtl} alt="東京都北区赤羽" />
        </Title>
        <TxtCaption>
          東京都北区赤羽、北の玄関口。<br />
          戦後の労働者たちは夜勤明けに、赤羽の飲み屋街に集まり酒を飲んだという。<br />
          私は、そんな粗野な印象を残す街で、親子三世代に渡って生活をしている。
        </TxtCaption>
      </Bg>
      <Section>
        <SectionTitle>
          Speak
        </SectionTitle>
        <SectionList>
          <li>
            <IconText>GitHub</IconText><a href="https://github.com/hosonokotaro/" target="_blank" rel="noopener noreferrer">https://github.com/hosonokotaro/</a>
          </li>
          <li>
            <IconText>Qiita</IconText><a href="https://qiita.com/hosono" target="_blank" rel="noopener noreferrer">https://qiita.com/hosono</a>
          </li>
          <li>
            <IconText>note</IconText><a href="https://note.mu/hosonokotaro" target="_blank" rel="noopener noreferrer">https://note.mu/hosonokotaro</a>
          </li>
        </SectionList>
      </Section>
      <Section id="twitter">
        <SectionTitle>
          twitter
        </SectionTitle>
        <BoxTwitter>
          <a
            className="twitter-timeline"
            data-lang="ja"
            data-height="667"
            data-theme="light"
            data-tweet-limit="5"
            href="https://twitter.com/hosono_fe?ref_src=twsrc%5Etfw"
          >
            Tweets by hosono_fe
          </a>
        </BoxTwitter>
        <BoxTwitterButton>
          <a
            href="https://twitter.com/hosono_fe?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-lang="ja"
            data-show-count="false"
          >
            Follow @hosono_fe
          </a>
        </BoxTwitterButton>
      </Section>
    </>
  );
};

const Bg = styled.div`
  margin: 0 auto;
  padding: 4em;
  text-align: center;
  background: url(${picKitakuBg}) top 30% center no-repeat;
  background-size: cover;
`;

const Title = styled.h2`
  padding-top: 2em;
`;

const TxtCaption = styled.p`
  padding-top: 2em;
  line-height: 1.8;
  font-size: 1.4rem;
  color: #ddd;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionList = styled.ul`
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

const BoxTwitter = styled.div`
  margin-top: 2em;
  padding: 5px;
  background: #f1f1f1;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const BoxTwitterButton = styled.div`
  padding-top: 2em;
`;

export default Top;