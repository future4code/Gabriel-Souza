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
      } else {
        return  <AdicionarPlaylist />
      }
    };

    return (

      <div className="div-geral">

                {setButton1()}
                
                <div className="button-move">
                  {
                    this.state.button1 ? (<button className="btn-vizualizar-playlist"
                      onClick={this.button1}>Voutar</button>)
                    : (<button className="btn-vizualizar-playlist"
                      onClick={this.button1}>Visualizar Playlists</button>)
                  }
                </div>

                <div className="div-footer">
                  <footer>Criado por: Gabriel Silva</footer>
               </div>

          <GlobalStyle />
      </div>
   
      )
    }
  };
 
export default App;
