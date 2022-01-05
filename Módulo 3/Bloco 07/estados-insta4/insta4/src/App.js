import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/60/50'}
          fotoPost={'https://picsum.photos/250/130'}
        />
           <Post
          nomeUsuario={'Junior'}
          fotoUsuario={'https://picsum.photos/100/49'}
          fotoPost={'https://picsum.photos/220/140'}
        />
           <Post
          nomeUsuario={'Gabriel'}
          fotoUsuario={'https://picsum.photos/210/50'}
          fotoPost={'https://picsum.photos/200/190'}
        />
      </MainContainer>
    );
  }
}

export default App;
