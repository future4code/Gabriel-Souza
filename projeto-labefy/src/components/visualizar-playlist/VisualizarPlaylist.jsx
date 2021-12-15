import React from "react";

// Imports Gerais
import axios from "axios";
// ----------------------------------------------------------------

// Import Style
import {Style} from "./style";
// ----------------------------------------------------------------

class VisualizarPlaylist extends React.Component {

    state = {
        playlist: [],
        listDetalhes: []
    }

    componentDidMount () {
        this.pegarPlaylist()
    }

    pegarPlaylist = async () => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "gabriel-silva-joy"
                }
            })
            this.setState({playlist: res.data.result.list})

        } catch (err) {
            console.log(err.data)
        }
    };

    excluirPlaylist = (id) => {

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        { headers: { Authorization: "gabriel-silva-joy"}}
        )
        .then(res => {
            alert("Playlist excluida.")
            this.pegarPlaylist()
        })
        .catch(err => {
            alert("Erro ao excluir á Playlist!")
        });
    };

    detalhesDaPlaylist = (id) => {

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/${id}`,
        {
            headers: { Authorization: "gabriel-silva-joy"} 
        })
        .then(res => {
            console.log(res.data.result.tracks);
        })
        .catch(err => {
            
        })
    }

    render () {

        const mostrarList = this.state.playlist.map((list) => {
            return (
                <div>
                    <p key={list.id}>{list.name}
                    <button onClick={() => this.detalhesDaPlaylist(list.id)}>Detalhes</button>
                    {/* <button onClick={() => this.excluirPlaylist(list.id)}><img src="imagens/lixeira_318-55452.jpg" alt="oi" /></button> */}
                    </p>
                </div>
            );
        });

        return (

            <Style>
                <h2>Playlists</h2>
                {mostrarList}
                <hr />
            </Style>
        )
    }
};

export default VisualizarPlaylist;