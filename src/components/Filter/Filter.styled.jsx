import styled from '@emotion/styled';

export const Input = styled.input`
  margin-top: 20px;
  width: 200px;
  padding: 7px 5px;
  font-size: 14px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border: 1px solid #fff;
  outline: none;
  background: transparent;
  :focus {
    border: 2px solid lightgreen;
  }
`;
export const SubTitleBox = styled.div`
  padding-top: 20px;
  justify-content: center;
  align-items: center;
`;
export const LoaderBox = styled.div`
  display: flex;
  height: 20px;

  justify-content: center;
  align-items: center;
`;
