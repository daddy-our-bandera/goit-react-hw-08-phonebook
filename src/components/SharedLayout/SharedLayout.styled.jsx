import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const HeaderBar = styled.div`
  position: relative;
  width: 50%;
  min-width: 300px;
  min-height: 65px;
  border: 10px solid transparent;
  border-top: 10px solid #fffa;
  border-left: 10px solid #fffa;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25) inset;
  :after {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30%;
    min-height: 65px;
    border: 10px solid transparent;
    border-bottom: 10px solid #fffa;
    border-right: 10px solid #fffa;
    transition: 0.3s linear all;
  }
`;
export const HeaderLink = styled(NavLink)`
  display: inline-flex;
  padding: 14px;
  margin-left: 2px;
  font-family: 'Quicksand', sans-serif;

  cursor: pointer;
  transition: 0.3s linear all;
  user-select: none;
  :hover {
    color: #faa;
    box-shadow: 0 50px 5px rgba(0, 0, 0, 0.15) inset;
  }
`;
