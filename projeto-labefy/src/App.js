import React from "react";

// Imports Gerais
import AdicionarPlaylist from "./components/adicionar-musicas/AdicionarPlaylist";
import CriarPlaylist from "./components/criar-playlist/CriarPlaylist";
import VisualizarPlaylist from "./components/visualizar-playlist/VisualizarPlaylist";
//----------------------------------------------------------------

// Import StyleGlobal
import GlobalStyle from "./style/GlobalStyle";
//----------------------------------------------------------------

class App extends React.Component {

  state = {
    button1: false,
    button2: false,
  };

  button1  = () => {
    this.setState({button1: !this.state.button1 });
  };

  button2  = () => {
    this.setState({button2: !this.state.button2 });
  };

  render () {

    const setButton1 = () => {

      if(this.state.button1){
        return <CriarPlaylist />
      };
    };

    const setButton2 = () => {

      if(this.state.button2){
        return <VisualizarPlaylist />
      };
    };

    return (

      <div className="div-geral">

          <div>
             <AdicionarPlaylist />
          </div>

          <div className="button-move">
            <button onClick={this.button1}>Adicionar Musicas</button>
          </div>
          <div className="button-move">
            <button onClick={this.button2}>Vizualizar Playlist</button>
          </div>

          {setButton1()}
          {setButton2()}

        <GlobalStyle />
      </div>
   
      )
    }
  };
 
export default App;
