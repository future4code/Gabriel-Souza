import React from "react";

// Imports Gerais
import axios from "axios";
// ----------------------------------------------------------------

// Import StyleDiv
import {StyleDivGeral} from "./Style";
import {DivDeApresentacao} from "./Style";
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

            <StyleDivGeral>

                <DivDeApresentacao>
                    <h1>Labefy Criador de Playlists</h1>
                    <p>
                        <i>
                            Sejá bem vindo ao meu criador de playlists simples.
                            Espero que goste.
                         </i>
                    </p>
                    <details>
                        <p className="p-details">
                            Esse projeto consiste em adicionar é ouvir musicas.
                            Após você adicionar a sua playlist ela ira aparecer quando você aperta em
                            "Visualizar Playlist" e lá você podera adicionar suas musicas
                            é excluilas tanto elas quanto suas playlists. Para conseguir adicionar
                            é escutar sua musica você ira ter que preencher os campos de digitação
                            corretamente para que não ajá nem um erro. Desdé já agradeço por estar aqui :).
                        </p>
                    </details>
                </DivDeApresentacao>

                <h2><i>Adicionar Playlist</i></h2>

                <div className="div-input">
                    <input type="text" placeholder="Nome da Playlist"
                    onChange={this.pegandoInputValue} value={this.state.inputValue} />
                </div>

                <div className="div-btn">
                    <button onClick={this.adicionarPlaylist}>Adicionar</button>
                </div>
            
            </StyleDivGeral>
        )
    }
};

export default AdicionarPlaylist;