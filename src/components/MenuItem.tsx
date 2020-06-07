import React from 'react';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components/macro';

import Picture from './Picture';

type MenuItemProps = {
  label: string;
  imagePath: string;
  currentImagePath: string;
  to: string;
  active: boolean;
};

const MenuItem: React.FC<MenuItemProps> = (
  props,
) => {
  const match = useRouteMatch({
    path: props.to,
    exact: props.active,
  });

  const matchSrc = match
    ? props.currentImagePath
    : props.imagePath;

  return (
    <Item>
      <Link
        to={props.to}
        className={
          match ? 'link-current' : ''
        }
        css={`
          display: inline-block;
          line-height: 4;

          &.link-current {
            pointer-events: none;
          }
        `}
      >
        <Picture
          srcPC={matchSrc}
          srcSP={matchSrc}
          alt={props.label}
        />
      </Link>
    </Item>
  );
};

const Item = styled.li`
  position: relative;

  & + &:before {
    position: absolute;
    top: -9px;
    display: block;
    width: 1px;
    height: 57.5px;
    background: #333;
    transform: rotate(45deg);
    pointer-events: none;
    content: '';
  }
`;

export default MenuItem;
