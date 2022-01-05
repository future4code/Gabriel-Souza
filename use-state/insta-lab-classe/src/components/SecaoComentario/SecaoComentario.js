import React, { useState } from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`;

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`;

const SecaoComentario = ( props ) => {

const [ inputValue, setInputValue ] = useState("");

	const onChangeComentario = (event) => {
		setInputValue(event.target.value);
	};

	const verifyValueInput = ( inputValueParameter ) => {
		if ( inputValueParameter.trim() ){
			return inputValueParameter;
		} else {
			return alert ( "Digite algo!" );
		};
	};
	
		return (
			
			<CommentContainer>
			<InputComment
				placeholder={'Comentário'}
				value={inputValue}
				onChange={onChangeComentario}
			/>
			<button onClick={() => {props.enviarComentario(verifyValueInput(inputValue))}}>Enviar</button>
		</CommentContainer>

		);
};

export default SecaoComentario;