import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;


  > div {
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    > button {
      height: 30px;
      width: min(25vw, 100px);
      border-radius: 1000px;
      border: none;
      transition: .5s;
  
      :hover {
        background-color: #ff0000;
        color: #FFF;
        }
      }
    }

      input {
      width: min(50vw, 220px);
      height: 25px;
    }
`;