import React from 'react';

type PictureProps = {
  srcPC: string;
  srcSP: string;
  alt: string;
};

const Picture: React.FC<PictureProps> = ({ srcPC, srcSP, alt }) => {
  return (
    <picture>
      <source srcSet={srcPC} media="(min-width: 768px)" />
      <source srcSet={srcSP + ' 2x'} />
      <img src={srcPC} alt={alt} />
    </picture>
  );
};

export default Picture;
