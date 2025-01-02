import React from 'react';

import { StyledSection, Title } from '~/components/styledSection';

type SectionProps = {
  id?: string;
  title: string;
  content: JSX.Element;
};

const Section: React.FC<SectionProps> = ({ id = '', title, content }) => {
  return (
    <StyledSection id={id}>
      <Title>{title}</Title>
      {content}
    </StyledSection>
  );
};

export default Section;
