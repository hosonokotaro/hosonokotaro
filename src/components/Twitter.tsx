import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  Section,
  SectionTitle,
} from './styled/Section';

const Twitter: React.FC = () => {
  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://platform.twitter.com/widgets.js';
    scriptTag.charset = 'utf-8';

    const showTimeLine = setTimeout(() => {
      document.getElementById('twitter')?.appendChild(scriptTag);
    }, 300);

    return () => clearTimeout(showTimeLine);
  });

  return (
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
  );
};

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
  line-height: 1;
`;

export default Twitter;