import React from 'react';

// Imports
import {Helmet} from "react-helmet";
import { MessagensInputs } from './components/Menssagens-Inputs/MessagensInputs';
import Header from "./components/Header/Header"
//-----------------------------------------------------------------------------------------

// Style App
import GlobalStyle from "./styles/Global";
import styled from 'styled-components'
//----------------------------------------------------------------------------------------

const AppContainer = styled.div`

  width: 500px;
  height: 95vh;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: url(img/fundo-whats.jpg);
`

const MessagesContainer = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`
const Paragrafo = styled.p`

  color: white;
  `

  const BoldText = styled.p`
  
    font-weight: bold;
      color: orange;
  `
//-----------------------------------------------------------------------------------------

class App extends React.Component {

  constructor() {

    super()

    this.state = {
      messages: []
    }

  }

  addMessage = (message) => {
    this.setState({ messages: [...this.state.messages, message] })
  }

  render() {

    return (

      <section>

            <AppContainer>

                  <Helmet>

                      <meta charSet="utf-8" />
                      <title>whatslab</title>
                      <link rel="canonical" href="http://mysite.com/example" />
                      <meta name="description" content="Titulo" />

                  </Helmet> 

                  <Header/>

                    <MessagesContainer>

                      {
                        this.state.messages.map((message, index) => <Paragrafo key={index}><BoldText>{message.user}</BoldText>{":"+message.text}</Paragrafo>) 
                      }

                    </MessagesContainer>

                    <MessagensInputs addMessage={this.addMessage} />

              </AppContainer>

             <GlobalStyle />
        </section>

    );
  }
}

export default App;
  