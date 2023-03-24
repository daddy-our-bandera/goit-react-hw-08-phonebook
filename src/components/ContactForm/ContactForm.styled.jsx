import styled from '@emotion/styled';

export const FormBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  margin-top: 50px;
  width: 300px;
  padding: 40px 30px;
  background-image: linear-gradient(
    to right top,
    #d16ba5,
    #bc5ea3,
    #a553a1,
    #8b4a9f,
    #6e429c,
    #5c52ad,
    #4161bc,
    #006fc7,
    #0095e0,
    #00b8ed,
    #00dbf1,
    #5ffbf1
  );
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
  }
`;
export const Form = styled.form`
  input {
    width: 100%;
    padding: 7px 0;
    font-size: 14px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
    :focus {
      border-bottom: 1px solid #10abff;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus input:-webkit-autofill,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: #fff;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  label {
    position: absolute;
    top: -20px;
    left: 0;
    padding: 10px 0;
    font-size: 12px;
    color: #03e9f4;
    pointer-events: none;
    transition: 0.5s;
  }
`;
export const UserBox = styled.div`
  position: relative;
`;
export const Btn = styled.button`
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow, transform;
  background: #fff;
  box-shadow: 0px 2px 4px rgb(45 35 66 / 40%),
    0px 7px 13px -3px rgb(45 35 66 / 30%),
    inset 0px -3px 0px rgb(58 65 111 / 50%);
  padding: 0 32px;
  border-radius: 6px;
  color: black;
  width: 100%;
  padding: 10px 0;
  font-size: 18px;
  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
  transition: background 0.3s ease, transform 0.3s ease;
  :hover {
    color: #fff;
    background: #0070f3;
    box-shadow: 0px 4px 8px rgb(45 35 66 / 40%),
      0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #3c4fe0;
    transform: translateY(-2px);
  }
  :active {
    box-shadow: inset 0px 3px 7px #3c4fe0;
    transform: translateY(2px);
  }
`;
