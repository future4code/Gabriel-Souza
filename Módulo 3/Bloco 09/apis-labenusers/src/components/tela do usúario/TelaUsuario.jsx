import React from "react";

// Imports Gerais
import axios from "axios";
//----------------------------------------------------------------
// Import Styles
import {StyleDiv} from "./StyleUsuario";
//----------------------------------------------------------------

class TelaUsuario extends React.Component {

    state = {
        inputValueNome: "",
        inputValueEmail: "",
    };

    inputControladoNome = (evente) => {
        this.setState({ inputValueNome: evente.target.value,});
    };

    inputControladoEmail = (evente) => {
        this.setState({ inputValueEmail: evente.target.value});
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
        })
        .catch(() => {
            alert("Erro ao criar Usúario!");
        });
    };

    render() {

        return (

            <StyleDiv>

                <h1>Cadastrar Usúario</h1>

                <div className="items">
                    <p>Seu nome</p>
                    <input type="text" placeholder="nome"
                    onChange={this.inputControladoNome} value={this.state.inputValueNome} />
                </div>
            
                <div className="items">
                    <p>Email</p>
                    < input type="email"  placeholder="email"
                    onChange={this.inputControladoEmail} value={this.state.inputValueEmail} />
                </div>

                <div>
                    <button onClick={this.criarUsuario}>Enviar</button>
                </div>

            </StyleDiv>
        )
    }
};

export default TelaUsuario;