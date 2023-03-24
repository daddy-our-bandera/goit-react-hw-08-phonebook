import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const SliderMenu = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 1;

  li {
    display: inline-flex;

    margin-left: 2px;
    font-family: 'Quicksand', sans-serif;

    cursor: pointer;
    transition: 0.3s linear all;
    user-select: none;
    :hover {
      color: #faa;
      box-shadow: 0 50px 5px rgba(0, 0, 0, 0.15) inset;
    }
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 14px;
  letter-spacing: 0.03em;

  color: #212121;
`;
