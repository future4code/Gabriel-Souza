import React, {useState} from 'react';
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

const SecaoComentario = (props) => {


	const [ inputValue, setInputValue ] = useState( "" );

	const onChangeComentario = (event) => {
		setInputValue( event.target.value );
	};

	const veryInputValue = ( valueInput ) => {

		if ( valueInput.trim()) {
			return valueInput;
		} else {
			return alert( "Digite algo!" );
		};
	};

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={inputValue}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario( veryInputValue( inputValue ) ) }} >Enviar</button>
		</CommentContainer>
	);
};


export default SecaoComentario;