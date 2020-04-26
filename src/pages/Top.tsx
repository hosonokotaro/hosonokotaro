import React from 'react';
import styled from 'styled-components';

import picKitaku from '../images/pic_kitaku.png';
import txtKitakuTtl from '../images/txt_kitaku_ttl.png';
import picKitakuBg from '../images/pic_kitaku_bg.jpg';

const Top: React.FC = () => {
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
          <TxtLine>東京都北区赤羽、北の玄関口。</TxtLine>
          <TxtLine>戦後の労働者たちは夜勤明けに、赤羽の飲み屋街に集まり酒を飲んだという。</TxtLine>
          <TxtLine>私は、そんな粗野な印象を残す街で、親子三世代に渡って生活をしている。</TxtLine>
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
    </>
  );
};

const Bg = styled.div`
  max-width: 768px;
  margin: 40px auto 0 auto;
  padding: 40px;
  text-align: center;
  background: url(${picKitakuBg}) top 30% center no-repeat;
  background-size: cover;
`;

const Title = styled.h2`
  padding-top: 20px;
`;

const TxtCaption = styled.p`
  padding-top: 20px;
`;

const TxtLine = styled.span`
  display: block;
  line-height: 1.8;
  font-size: 1.4rem;
  color: #ddd;
`;

const Section = styled.section`
  margin: 0 auto;
  padding: 40px 40px 0 40px;
`;

const SectionTitle = styled.h2`
  line-height: 1;
  font-size: 3.2rem;
  font-style: italic;
`;

const SectionList = styled.ul`
  padding-top: 20px;
  line-height: 1.8;
  font-size: 1.4rem;
`;

const IconText = styled.span`
  margin-right: 5px;
  padding: 0 5px;
  background: #000;
  color: #fff;
`;

export default Top;