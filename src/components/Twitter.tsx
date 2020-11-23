import React, { useEffect } from 'react';

import Section from '../components/Section';
import TwitterTimeline from '../components/TwitterTimeline';
import { siteTwitterName } from '../siteSetting';

const Twitter: React.FC = () => {
  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://platform.twitter.com/widgets.js';

    const showTimeLine = setTimeout(() => {
      document.getElementById('twitter')?.appendChild(scriptTag);
    }, 300);

    return () => clearTimeout(showTimeLine);
  }, []);

  return (
    <Section
      id="twitter"
      title="twitter"
      content={<TwitterTimeline siteTwitterName={siteTwitterName} />}
    />
  );
};

export default Twitter;
