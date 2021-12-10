import React from "react";

// Imports Gerais
import axios from "axios";
import ListaDeUsuarios from "./components/tela da lista de usúarios/TelaListaDeUsuarios"
//----------------------------------------------------------------

// Style Global
import GlobalStyle from "./style/Global";
//----------------------------------------------------------------

class App extends React.Component {
  
      state = {
          listaUsuarios: [],
          inputValueNome: "",
          inputValueEmail: "",
      };

      componentDidMount() {
          this.mostrarListaDeUsuarios()
      };
  
      mostrarListaDeUsuarios = () => {
          
         const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  
         const headers = {
          headers: {
              Authorization: "gabriel-silva-joy"
          }
      };
  
         axios.get(URL, headers)
         .then((res) => {
             this.setState({listaUsuarios: res.data})
         })
         .catch((err) => {
             alert("Erro ao carrega a lista!")
             console.log(err.response.data)
         })
      };
  
      inputControladoNome = (evente) => {
          this.setState({ inputValueNome: evente.target.value,});
      };
  
      inputControladoEmail = (evente) => {
          this.setState({ inputValueEmail: evente.target.value})
      };
  
      criarUsuario = () => {
          const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
  
          const body = {
              name: this.state.inputValueNome,
              email: this.state.inputValueEmail
          };
  
          const headers = {
              headers: {
                  Authorization: "gabriel-silva-joy"
              }
          };
  
          axios
          .post(URL, body, headers)
          .then(() => {
              alert("Sucesso usúario adicionado.");
              this.mostrarListaDeUsuarios();
          })
          .catch((err) => {
              alert("Erro a o criar Usúario!");
              console.log(err.response.data);
          });
      };
  
      render() {
  
          // const list = this.state.listaUsuarios.map((usuario) => {
          //     return <p key={usuario.id}> {usuario.name}</p>;
          // });
          // const mudarPagina = () => {
          //         return  <ListaDeUsuarios
          //         listaUsuario = {this.state.listaUsuarios} />
          // }

          return (
  
              <>
  
              <div>
                  <p>Seu nome</p>
                  <input type="text" placeholder="nome"
                  onChange={this.inputControladoNome} value={this.state.inputValueNome} />
              </div>
            
            <div>
                  <p>Email</p>
                  <input type="email"  placeholder="email"
                  onChange={this.inputControladoEmail} value={this.state.inputValueEmail} />
            </div>
  
            <div>
                <button onClick={this.criarUsuario}>Enviar</button>
            </div>

            <div>
            
            </div>
  
                <GlobalStyle />
              </>
          )
      }
  };

export default App;
