import React from 'react';
import Helmet from 'react-helmet';

import Section from '@/Section';
import { Description, Title, WorkList } from '~/pages/styledWork';
import { siteTitle } from '~/siteSetting';

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
            <Title>2020 - 2026</Title>
            <Description>動画配信会社の web サイト作成</Description>
            <Title>2019 - 2020</Title>
            <Description>金融会社のサービス LP 作成</Description>
            <Title>2018 - 2019</Title>
            <Description>ラジオ局企画の web サイト作成</Description>
            <Description>自動車メーカー LP 作成</Description>
            <Description>アニメーション制作会社ブランドページ作成</Description>
            <Title>2016 - 2018</Title>
            <Description>複数のゲームタイトルの LP 作成</Description>
            <Title>2014 -</Title>
            <Description>
              地元、赤羽の絵本屋さんの
              <a
                href="http://aoneko-shobou.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                webサイト
              </a>
              作成
            </Description>
          </WorkList>
        }
      />
    </>
  );
};

export default Work;
