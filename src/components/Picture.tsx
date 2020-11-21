import React from 'react';

type PictureProps = {
  srcPC: string;
  srcSP: string;
  alt: string;
};

const Picture: React.FC<PictureProps> = (props) => {
  return (
    <picture>
      <source srcSet={props.srcPC} media="(min-width: 768px)" />
      <source srcSet={props.srcSP + ' 2x'} />
      <img src={props.srcPC} alt={props.alt} />
    </picture>
  );
};

export default Picture;
