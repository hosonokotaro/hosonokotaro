import React from 'react';
import {} from 'styled-components/macro';

type SectionProps = {
  id?: string;
  title: string;
  content: JSX.Element;
};

const Section: React.FC<SectionProps> = (
  props,
) => {
  return (
    <section
      id={props.id}
      css={`
        max-width: 768px;
        margin: 0 auto;
        padding: 40px 40px 0 40px;
      `}
    >
      <h2
        css={`
          line-height: 1;
          font-size: 3.2rem;
          font-style: italic;

          @media (min-width: 768px) {
            font-size: 4.8rem;
          }
        `}
      >
        {props.title}
      </h2>
      {props.content}
    </section>
  );
};

export default Section;
