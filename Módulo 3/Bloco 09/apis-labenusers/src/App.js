import React from "react";

// Imports Gerais
import TelaUsuario from "./components/tela do usúario/TelaUsuario";
import ListaDeUsuarios from "./components/tela da lista de usúarios/TelaListaDeUsuarios";
//----------------------------------------------------------------

// Style Global
import GlobalStyle from "./style/Global";
//----------------------------------------------------------------

class App extends React.Component {
  
    state = {
        page: true
    };

    setPage = () => {
        this.setState({page: !this.state.page});
    };

    renderPage = () => {
        if (this.state.page) {
            return <TelaUsuario />
        } else {
            return <ListaDeUsuarios />
        };
    };

      render() {

          return (
  
              <div>

                {this.renderPage()}
                {this.state.page ? (<button className="button" onClick={this.setPage}>Usuarios</button>) :
                (<button className="button" onClick={this.setPage}>Voutar</button>)}
           
                <GlobalStyle />
              </div>
          )
      }
  };

export default App;
