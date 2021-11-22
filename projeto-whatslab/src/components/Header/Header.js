import React from "react";

// Styles
import Styled from "styled-components";
// ------------------------------------------------

const Orange = Styled.div`

    background-color: orange;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img{
        transition: all 1s;
        cursor: pointer;
   }

   img:hover{
    -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
    background-color: DarkOrange;
    border-radius:50px;
   }

`

const Imgs = Styled.div`

    width: 30%;
    padding-top: 5px;
    margin-left: 40%;
    display: flex;
    justify-content:space-around;
`

const Div2 = Styled.div`

    border-radius: 50%;
`

const Div3 = Styled.div`

    background-color: black;
    width: 7px;
    height: 7px;
    margin-top: 2px;
    border-radius: 50%;
`

const Pontos = Styled.div`

    display: flex;
    flex-direction: column;
    height: 28px;
    
    &:hover{
        cursor: pointer;
    }
`



// -----------------------------------------------

const Header = () => {

    const ImageWhats = "http://i.imgur.com/Ce3Jp8j.png"

    return (

        <Orange>
            
                <Div2>
                    <img src={ImageWhats} width="50" height="50" alt="logo WhatsApp" />
                </Div2>
                    
                <Imgs>
                    <img  src="img/telefone-logo.png" width="35" height="35" alt="camera-logo" />
                    <img  src="img/camera-logo.png" width="35" height="35" alt="camera-logo" />
                </Imgs>

                <Pontos>
                    <Div3 />
                    <Div3 />
                    <Div3 />
                </Pontos>
            
        </Orange>
    )
}

export default Header