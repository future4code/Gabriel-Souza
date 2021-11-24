import React from "react";

// Imports Pages
    import DadosGerais from "./pages/Dados-Gerais"
    import Informacoes from "./pages/Informacoes";
    import InformacoesAdicionais from "./pages/Info-Adicionais";
    import FinalMemssage from "./pages/Final";
// ----------------------------------------------------------------

// StyleGlobal Import
    import StyledGlobal from "./styles/StyleGlobal"
//----------------------------------------------------------------
class App extends React.Component {

  state = {
    pages: ""
  }

  ProximasEtapas = () => {

    this.setState({pages: this.state.pages})
  };

  render() {



     return (

        <div>

          <section>

             <DadosGerais />
             {/* <Informacoes /> */}
             {/* <InformacoesAdicionais /> */}
             {/* <FinalMemssage /> */}

             <div>
               <button>Proxíma etapa</button>
             </div>
             

          </section>
          
            <StyledGlobal />
        </div>

     )
   }
 };

export default App;
