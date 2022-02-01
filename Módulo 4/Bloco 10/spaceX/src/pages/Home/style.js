import styled from "styled-components";

export const Container =  styled.div`

height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 3rem;
}

button {
    margin-left: 7px;
}

`;

export const ButtonDiv =  styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 19px;
`;

export const DivLeft = styled.div`

display: flex;
justify-content: flex-end;


#redes-sociais {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 5vh;
  width: 10%;

  a {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content:center;
    transition: 0.5s;

    :hover {
      background-color: #D80286;
      transition: 0.5s;
    }
  }

  img {
    height: 18px;
    width:80%;;
  }

  #img-likedin {
      height: 17px;
      width: 70%;
    }

}


`;
