import React from "react";

//Imports Gerais
import axios from "axios";
//----------------------------------------------------------------
// Import Styles
import {ListDiv} from "./StyleList";
//----------------------------------------------------------------

class ListaDeUsuarios extends React.Component {

    state = {
        listaUsuarios: []
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
            this.mostrarListaDeUsuarios();
            this.setState({listaUsuarios: res.data});
       })
       .catch(() => {
           alert("Erro ao carrega a lista!");
       });
    };

    excluirUsuario = (id) => {

        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

        const headers = {
            headers: {
                Authorization: "gabriel-silva-joy"
            }
        };

        axios.delete(URL, headers)
        .then(() => {
          alert("Sucesso usúario excluido.");
        })
        .catch(() => {
          alert("Erro ao excluir usúario!");
        });
    };

    render () {

        const mostrarUsuarios = this.state.listaUsuarios.map((usuario) => {
            return  <p key={usuario.id}> {usuario.name} 
            <button onClick={() => this.excluirUsuario(usuario.id)}>x</button></p>  
        });

        return (

            <ListDiv>

            {mostrarUsuarios}

            </ListDiv>

        )
    }
};

export default ListaDeUsuarios;