import React from 'react';

import { StyledSection, Title } from './styledSection';

type SectionProps = {
  id?: string;
  title: string;
  content: JSX.Element;
};

const Section: React.FC<SectionProps> = (props) => {
  return (
    <StyledSection id={props.id}>
      <Title>{props.title}</Title>
      {props.content}
    </StyledSection>
  );
};

export default Section;
