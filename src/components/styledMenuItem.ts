import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMenuItem = styled.div`
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

export const StyledLink = styled(Link)`
  display: inline-block;
  line-height: 4;

  &.link-current {
    pointer-events: none;
  }
`;
