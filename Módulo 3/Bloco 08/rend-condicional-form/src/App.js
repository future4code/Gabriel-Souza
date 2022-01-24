import React from "react";

// Imports Pages
 import DadosGerais from "./pages/Dados-Gerais";
 import Informacoes from "./pages/Informacoes";
 import InformacoesAdicionais from "./pages/Info-Adicionais";
 import Final from "./pages/Final";
// ----------------------------------------------------------------

// StyleGlobal Import
    import StyledGlobal from "./styles/StyleGlobal";
//----------------------------------------------------------------
class App extends React.Component {

  state = {
    etapaContador: 1
  };

  contador = () => {
    this.setState({etapaContador: this.state.etapaContador + 1})
  };

  proximasEtapas = () => {

    switch (this.state.etapaContador){

      case 1:
        return <DadosGerais />;

      case 2:
        return <Informacoes />;

      case 3:
        return <InformacoesAdicionais />;

        default:

    }
  };

  render() {


     return (

        <div>

              <section>
                
              {this.proximasEtapas()}

            {
                this.state.etapaContador < 4 ?  ( <button onClick={this.contador}>Próxima etapa</button> )  :  ( <Final /> )
            }
  
              </section>
          
            <StyledGlobal />
        </div>

     )
   }
 };

export default App;
