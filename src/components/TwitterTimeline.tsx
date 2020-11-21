import React from 'react';
import styled from 'styled-components/macro';

type TwitterTimelineProps = {
  siteTwitterName: string;
};

const TwitterTimeline: React.FC<TwitterTimelineProps> = (props) => {
  return (
    <>
      <TimeLine>
        <a
          className="twitter-timeline"
          data-lang="ja"
          data-height="667"
          data-theme="light"
          data-tweet-limit="5"
          href={`https://twitter.com/${props.siteTwitterName}?ref_src=twsrc%5Etfw`}
        >
          Tweets by {props.siteTwitterName}
        </a>
      </TimeLine>
      <div
        css={`
          padding-top: 2em;
          line-height: 1;
        `}
      >
        <a
          href={`https://twitter.com/${props.siteTwitterName}?ref_src=twsrc%5Etfw`}
          className="twitter-follow-button"
          data-lang="ja"
          data-show-count="false"
        >
          Follow @{props.siteTwitterName}
        </a>
      </div>
    </>
  );
};

const TimeLine = styled.div`
  margin-top: 2em;
  padding: 5px;
  background: #f1f1f1;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export default TwitterTimeline;
