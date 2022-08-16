import styled from "styled-components";

export const SingleInput = styled.div`
  width: 90%;
  margin: 15px 0;
  position: relative;

  > label {
    font-size: 16px;
    position: absolute;
    left: 0;
    bottom: 10px;
    color: #fff;
    cursor: text;
    transition: .5s;
  }

  > .input::placeholder {
    opacity: 0;
  }

  > .input {
    width: 100%;
    font-size: 20px;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid #fff;
    outline: 0;
    background: none;
  }

  > .input:focus,
  .input:valid {
    border-bottom: 2px solid #ffc40c;
    color: #fff;

    &::placeholder {
      opacity: 1;
      color: #fff;
    }
  }

  > .input:focus ~ label,
  .input:valid ~ label {
    transform: translateY(-25px);
    font-size: 12px;
  }

  //* Responsividade
  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    > #name {
      width: 90%;
    }

    > #label-name {
      left: 5%;
    }
  }
`;