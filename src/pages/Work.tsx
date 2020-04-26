import React from 'react';

const Work: React.FC = () => {
  return (
    <>
      <h2 className="sect__ttl">
        Work
      </h2>
      <dl className="sect__list">
        <dt className="sect__list-ttl">
          2019
        </dt>
        <dd className="sect__list-detail">
          大手金融会社にてサイト改修
        </dd>
        <dt className="sect__list-ttl">
          2018
        </dt>
        <dd className="sect__list-detail">
          大手ラジオ局企画のwebサイト
        </dd>
        <dd className="sect__list-detail">
          大手自動車メーカーLP多数
        </dd>
        <dd className="sect__list-detail">
          アニメーション制作会社ブランドページ
        </dd>
        <dd className="sect__list-detail">
          フリーランスとして独立
        </dd>
        <dt className="sect__list-ttl">
          2017
        </dt>
        <dd className="sect__list-detail">
          地元、赤羽の絵本屋さんの<a href="http://aoneko-shobou.jp/" target="_blank" rel="noopener noreferrer">webサイト</a>制作
        </dd>
        <dd className="sect__list-detail">
          大手ゲームプラットフォーム運営会社勤務
        </dd>
      </dl>
    </>
  );
}

export default Work;