import styled from "styled-components";

export const Style = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
text-align: center;

//------------------------------

h2{
    color: white;
}

//------------------------------
li{
    color: white;
    list-style-type: none;
    width: 100%;
    height: auto;
    margin-top: 10px;
    padding: 10px ;
   background-color: orange;
}
li:hover{
    cursor: pointer;
    background-color: #ffa600f2;
}
//------------------------------

//------------------------------
    img{
        margin: -2.1px 5px;
        width: 18px;
        height: 19px;
        margin-top: 1px;
        background-color:white ; 
        padding: 2px 2px ;
        border-radius: 20px;
        border: solid 1px black;
        transition: 0.7s;
    }
    img:hover{
        cursor: pointer;
        -webkit-transform: rotateZ(360deg);
        transform: rotateZ(360deg);
        background-color: red;
    }
    //------------------------------

    .menssagem-sem-musica{
        background-color: orange;
    }

    .menssagem-sem-playlist{
        color: white;
    }
    //------------------------------
`;

export const StyleRenderList = styled.div`

div{
    background-color: orange;
    display: flex;
    flex-direction: column;
    align-items: center;
}

//------------------------------
p{
    background-color: orange;
}

i{
    background-color: orange;
}

audio{
    background-color: orange;
    margin: 5px;
    transition: all 0.7s;
}

hr{
    background-color: white;
}
//------------------------------

//-----------------------------

.btn-excluir-musica{
    background-color: white;
    height: 20px;
    width: 100px;
    border-radius: 10px;
}
.btn-excluir-musica:hover{
    background-color: red;
}
//-----------------------------
`;