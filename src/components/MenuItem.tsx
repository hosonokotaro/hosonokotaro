import React from 'react';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components';

import Picture from './Picture'

type MenuItemProps = {
  label: string;
  imagePath: string;
  currentImagePath: string;
  to: string;
  active: boolean;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const match = useRouteMatch({
    path: props.to,
    exact: props.active,
  });

  const matchSrc = match ? props.currentImagePath : props.imagePath;

  return (
    <Item>
      <ItemLink
        to={props.to}
        className={match ? 'link-current' : ''}
      >
        <Picture
          srcPC={matchSrc}
          srcSP={matchSrc}
          alt={props.label}
        />
      </ItemLink>
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
    content: "";
  }
`;

const ItemLink = styled(Link)`
  display: inline-block;
  line-height: 4;

  &.link-current {
    pointer-events: none;
  }
`;

export default MenuItem;