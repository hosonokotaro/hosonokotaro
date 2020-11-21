import React from 'react';
import styled from 'styled-components';

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

const StyledSection = styled.section`
  max-width: 768px;
  margin: 0 auto;
  padding: 40px 40px 0 40px;
`;

const Title = styled.h2`
  line-height: 1;
  font-size: 3.2rem;
  font-style: italic;

  @media (min-width: 768px) {
    font-size: 4.8rem;
  }
`;

export default Section;
