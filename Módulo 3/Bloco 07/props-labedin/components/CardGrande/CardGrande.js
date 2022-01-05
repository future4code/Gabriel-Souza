import React from 'react';

// =================================================================
import styled from 'styled-components';

const BigCardContainer = styled.div`
        display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const TagImg = styled.img`
         width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const H4Tag = styled.h4`
        margin-bottom: 15px;
`
const DivContainer2 = styled.div`
        display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

// =================================================================



function CardGrande(props) {
    return (
        <BigCardContainer>
            <TagImg src={ props.imagem } />
            <DivContainer2>
                <H4Tag>{ props.nome }</H4Tag>
                <p>{ props.descricao }</p>
            </DivContainer2>
        </BigCardContainer>
    )
}

export default CardGrande;