import React from 'react';
import Helmet from 'react-helmet';

import Section from '../components/Section';
import { siteTitle } from '../siteSetting';
import { Description, Title, WorkList } from './styledWork';

const Work: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>WORK | {siteTitle}</title>
      </Helmet>
      <Section
        title="Work"
        content={
          <WorkList>
            <Title>2020 -</Title>
            <Description>動画配信サービス運営会社勤務</Description>
            <Title>2019</Title>
            <Description>大手金融会社にてサイト改修</Description>
            <Title>2018</Title>
            <Description>大手ラジオ局企画のwebサイト</Description>
            <Description>大手自動車メーカーLP多数</Description>
            <Description>アニメーション制作会社ブランドページ</Description>
            <Description>フリーランスとして独立</Description>
            <Title>2017</Title>
            <Description>
              地元、赤羽の絵本屋さんの
              <a
                href="http://aoneko-shobou.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                webサイト
              </a>
              制作
            </Description>
            <Description>大手ゲームプラットフォーム運営会社勤務</Description>
          </WorkList>
        }
      />
    </>
  );
};

export default Work;
