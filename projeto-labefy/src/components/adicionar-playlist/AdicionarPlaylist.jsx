import React from "react";

// Imports Gerais
import axios from "axios";
// ----------------------------------------------------------------

// Import StyleDiv
import {StyleDiv} from "./Style";
//----------------------------------------------------------------

class AdicionarPlaylist extends React.Component {

    state = {
        inputValue: ""
    };

    pegandoInputValue = (evente) => {
        this.setState({ inputValue: evente.target.value });
    };

    adicionarPlaylist = () =>{

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        { name: this.state.inputValue },
        { headers: { Authorization: "gabriel-silva-joy"}
        })
        .then( res => {
            alert("Playlist adicionada")
            this.setState({inputValue: ""})
        })
        .catch( err  => {
            if(this.state.inputValue.length){
                alert("Essa playlist já existe!")
            } else {
                alert("Digite o nome da sua playlist!")
            }
        });
    };

    render () {

        return (

            <StyleDiv>

            <h2>Adicionar Playlist</h2>

            <div>
                <input type="text" placeholder="Nome da Playlist"
                 onChange={this.pegandoInputValue} value={this.state.inputValue} />
            </div>

            <div>
                <button onClick={this.adicionarPlaylist}>Adicionar</button>
            </div>
            
            </StyleDiv>
        )
    }
};

export default AdicionarPlaylist;