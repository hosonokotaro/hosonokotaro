import React, { useEffect, useState } from 'react';

import Section from '~/components/Section';
import TwitterTimeline from '~/components/TwitterTimeline';
import { siteTwitterName } from '~/siteSetting';

const Twitter: React.FC = () => {
  const [scriptTag, setScriptTag] = useState<HTMLScriptElement | undefined>();
  const [twitterWidget, setTwitterWidget] = useState<HTMLElement | null>();

  useEffect(() => {
    setScriptTag(document.createElement('script'));
  }, []);

  useEffect(() => {
    if (!scriptTag) return;

    scriptTag.src = 'https://platform.twitter.com/widgets.js';
    setTwitterWidget(document.getElementById('twitter'));
  }, [scriptTag]);

  useEffect(() => {
    if (twitterWidget && scriptTag) {
      const showTimeLine = setTimeout(() => {
        twitterWidget.appendChild(scriptTag);
      }, 1000);

      return () => clearTimeout(showTimeLine);
    }
  }, [scriptTag, twitterWidget]);

  return (
    <Section
      id="twitter"
      title="twitter"
      content={<TwitterTimeline siteTwitterName={siteTwitterName} />}
    />
  );
};

export default Twitter;
