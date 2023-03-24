import styled from '@emotion/styled';
export const UserBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px;
  p {
    color: black;
  }
`;
export const Btn = styled.button`
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  transition: box-shadow 0.15s ease, transform 0.15s ease;
  will-change: box-shadow, transform;
  background: #fcfcfd;
  box-shadow: 0px 2px 4px rgb(45 35 66 / 40%),
    0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #d6d6e7;

  padding: 4px 10px;
  border-radius: 6px;
  color: #36395a;
  transition: background 0.3s ease, transform 0.15s ease;
  :hover {
    background: red;
    box-shadow: 0px 4px 8px rgb(45 35 66 / 40%),
      0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #d6d6e7;
    transform: translateY(-2px);
  }
  :active {
    box-shadow: inset 0px 3px 7px #d6d6e7;
    transform: translateY(2px);
  }
`;
