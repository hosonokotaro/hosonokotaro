import React from 'react';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components';

type MenuItemProps = {
  label: string,
  imagePath: string,
  currentImagePath: string,
  to: string,
  active: boolean,
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const match = useRouteMatch({
    path: props.to,
    exact: props.active,
  });

  return (
    <Item>
      <ItemLink
        to={props.to}
      >
        <picture>
          <source
            srcSet={match ? props.currentImagePath : props.imagePath}
            media="(min-width: 768px)"
          />
          <source
            srcSet={match ? props.currentImagePath + ' 2x' : props.imagePath + ' 2x'}
          />
          <img
            src={match ? props.currentImagePath : props.imagePath}
            alt={props.label}
          />
        </picture>
      </ItemLink>
    </Item>
  );
};

const Item = styled.li`
  position: relative;

  & + li:before {
    position: absolute;
    top: -9px;
    display: block;
    width: 1px;
    height: 57.5px;
    background: #333;
    transform: rotate(45deg);
    content: "";
  }
`;

const ItemLink = styled(Link)`
  display: inline-block;
  line-height: 4;
`;

export default MenuItem;