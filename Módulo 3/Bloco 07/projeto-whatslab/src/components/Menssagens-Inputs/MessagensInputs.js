import React from 'react';

// Styles
import styled from 'styled-components'
//----------------------------------------------------------------

const MessagensContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: orange;
  height: 50px;
`

const UsuarioInput = styled.input`
height: 35px;
  width: 20%;
  border-radius: 10px;
`

const TextotInput = styled.input`
  height: 35px;
  width: 55%;
  border-radius: 10px;
`

const ButtonEnviar = styled.button`
height: 35px;
width: 10%;
border-radius:10px;

&:hover{
  cursor: pointer;
  background-color:#f5f5f5;
  transition: 0.5s;
}
`
//----------------------------------------------------------------

export class MessagensInputs extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      userValue: '',
      textValue: ''
    }

  }

  onChangeUser = (event) => {
    this.setState({userValue: event.target.value})
  }

  onChangeText = (event) => {
    this.setState({textValue: event.target.value})
  }

  onSendMessage = () => {

    const message = {
      user: this.state.userValue,
      text: this.state.textValue
    }

    this.props.addMessage(message)

    this.setState({textValue: ''})

  }

  render() {

    return (

      <MessagensContainer>

        <UsuarioInput type="text" placeholder={'Usuário'} onChange={this.onChangeUser} value={this.state.userValue}/>
        <TextotInput type="text" placeholder={'Mensagem'} onChange={this.onChangeText}  value={this.state.textValue}/>
        <ButtonEnviar onClick={this.onSendMessage}>Enviar</ButtonEnviar>

      </MessagensContainer>

    );
  }
}