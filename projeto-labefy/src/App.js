import React from "react";

// Imports Gerais
import AdicionarPlaylist from "./components/adicionar-playlist/AdicionarPlaylist";
import VisualizarPlaylist from "./components/visualizar-playlist/VisualizarPlaylist";
//----------------------------------------------------------------

// Import StyleGlobal
import GlobalStyle from "./style/GlobalStyle";
//----------------------------------------------------------------

class App extends React.Component {

  state = {
    button1: false,
  };

  button1  = () => {
    this.setState({button1: !this.state.button1});
  };

  render () {

    const setButton1 = () => {

      if(this.state.button1){
        return <VisualizarPlaylist />
      };
    };

    return (

      <div className="div-geral">

          <div>
             <AdicionarPlaylist />
          </div>

          <div className="button-move">
            {
              this.state.button1 ? (<button onClick={this.button1}>Fechar playlist</button>)
              : (<button onClick={this.button1}>Vizualizar Playlist</button>)
             }
          </div>

          {setButton1()}

        <GlobalStyle />
      </div>
   
      )
    }
  };
 
export default App;
