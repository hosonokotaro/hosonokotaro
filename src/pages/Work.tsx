import React from 'react';
import Helmet from 'react-helmet';

import Section from '../components/Section';
import { siteTitle } from '../siteSetting';
import { WorkList } from './styledWork';

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
            <dt>2020 -</dt>
            <dd>動画配信サービス運営会社勤務</dd>
            <dt>2019</dt>
            <dd>大手金融会社にてサイト改修</dd>
            <dt>2018</dt>
            <dd>大手ラジオ局企画のwebサイト</dd>
            <dd>大手自動車メーカーLP多数</dd>
            <dd>アニメーション制作会社ブランドページ</dd>
            <dd>フリーランスとして独立</dd>
            <dt>2017</dt>
            <dd>
              地元、赤羽の絵本屋さんの
              <a
                href="http://aoneko-shobou.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                webサイト
              </a>
              制作
            </dd>
            <dd>大手ゲームプラットフォーム運営会社勤務</dd>
          </WorkList>
        }
      />
    </>
  );
};

export default Work;
