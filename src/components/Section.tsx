import React from 'react';
import styled from 'styled-components';

type SectionProps = {
  id?: string;
  title: string;
  content: JSX.Element;
}

const Section: React.FC<SectionProps> = (props) => {
  return (
    <SectionArea id={props.id}>
      <SectionTitle>{props.title}</SectionTitle>
      {props.content}
    </SectionArea>
  );
};

const SectionArea = styled.section`
  max-width: 768px;
  margin: 0 auto;
  padding: 40px 40px 0 40px;
`;

const SectionTitle = styled.h2`
  line-height: 1;
  font-size: 3.2rem;
  font-style: italic;

  @media (min-width: 768px) {
    font-size: 4.8rem;
  }
`;

export default Section;