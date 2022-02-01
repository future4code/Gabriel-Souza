import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-button {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 1 5px grey;
      border-radius: 50px;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(220, 220, 220, 0.5);
      border-radius: 50px;
    }
      
}

#div-footer {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3vh;
  background-color: #D80286;
  color: #FFF;
  font-size: 10px;
  text-align: center;
}
`;