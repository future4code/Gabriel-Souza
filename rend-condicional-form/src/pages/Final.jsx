import React from "react";

// Styles
    import styled from "styled-components";
//----------------------------------------------------------------
    const DivGeral = styled.div`

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;

        p{
            margin: 10px;
        }
    `
//----------------------------------------------------------------

const FinalMemssage = () => {

    return (

        <DivGeral>

            <h1>O FORMULÁRIO ACABOU</h1>
            <p>Muito obrigado por participar! Entraremos em contato!</p>

        </DivGeral>
    )
};

export default FinalMemssage;