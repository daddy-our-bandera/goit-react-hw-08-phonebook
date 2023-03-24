import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  width: 1500px;
  padding: 10px 10px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  justify-content: space-between;
  span {
  }
  button {
    border-radius: 5px;
    cursor: pointer;
    border: none;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    :hover {
      color: #fff;
      background: rgb(218, 70, 70);
      box-shadow: 0px 4px 8px rgb(45 35 66 / 40%),
        0px 7px 13px -3px rgb(45 35 66 / 30%),
        inset 0px -3px 0px rgb(218, 70, 70);
      transform: translateY(-2px);
    }
    :active {
      box-shadow: inset 0px 3px 7px rgb(218, 70, 70);
      transform: translateY(2px);
    }
  }
`;
