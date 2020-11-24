import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Section from '../components/Section';
import { siteTitle } from '../siteSetting';

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

const WorkList = styled.dl`
  padding-top: 2em;
  line-height: 1;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  dt {
    line-height: 1;
    font-size: 2.4rem;

    @media (min-width: 768px) {
      font-size: 3.2rem;
    }
  }
  dd {
    padding-top: 1em;
  }
  dd + dd {
    padding-top: 1em;
  }
  dd + dt {
    padding-top: 1em;
  }
`;

export default Work;
