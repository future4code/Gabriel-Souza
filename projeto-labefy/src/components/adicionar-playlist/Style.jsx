import styled from "styled-components";

export const StyleDivGeral = styled.div`

display: flex;
flex-direction: column;
align-items: center;
color: white;

//------------------------------

h2{
    margin-top: 10px;
}

//------------------------------
.div-input{
    padding-top: 10px;
}
input{
    background-color: white;
    border: none;
    height: 25px;
    border-radius: 2px;
    transition:  0.7s;
}
input:hover{
    transition: 0.5s;
    background-color: #ffffffea;
    border: solid 1px orange;
}
//------------------------------

//------------------------------
.div-btn{
    padding-top: 8px;
}
button{
    background-color: white;
    border: none;
    border-radius: 7px;
    width: 62px;
    transition: all 0.7s;
}
button:hover{
cursor: pointer;
transition: all 0.7s;
background-color: orange;
color: white;
}
button:active{
    height: 18px;
}
//------------------------------
`;

export const DivDeApresentacao = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    //------------------------------

    p{
        margin-top: 10px;
        font-size: 12px;
        color: white
    }
    //------------------------------
    details{
        font-size: 12px;
        text-align: center;
    }
    details:hover{
        color: orange;
        cursor: pointer;
    }
    .p-details{
        font-size: 10px;
        width: 70%;
        margin: auto;
        padding-top: 5px;
    }
    //------------------------------
`;