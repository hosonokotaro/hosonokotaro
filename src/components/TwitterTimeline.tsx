import React from 'react';

import { FollowLinkWrapper, TimeLine } from './styledTwitterTimeline';

type TwitterTimelineProps = {
  siteTwitterName: string;
};

const TwitterTimeline: React.FC<TwitterTimelineProps> = ({
  siteTwitterName,
}) => {
  return (
    <>
      <TimeLine>
        <a
          className="twitter-timeline"
          data-lang="ja"
          data-height="667"
          data-theme="light"
          data-tweet-limit="5"
          href={`https://twitter.com/${siteTwitterName}?ref_src=twsrc%5Etfw`}
        >
          Tweets by {siteTwitterName}
        </a>
      </TimeLine>
      <FollowLinkWrapper>
        <a
          href={`https://twitter.com/${siteTwitterName}?ref_src=twsrc%5Etfw`}
          className="twitter-follow-button"
          data-lang="ja"
          data-show-count="false"
        >
          Follow @{siteTwitterName}
        </a>
      </FollowLinkWrapper>
    </>
  );
};

export default TwitterTimeline;
