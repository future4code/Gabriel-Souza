import React from "react";

// Imports Gerais
import axios from "axios";
import RenderDetalhes from "./RenderDetalhes";
// ----------------------------------------------------------------

// Import Style
import {Style} from "./style";
// ----------------------------------------------------------------

class VisualizarPlaylist extends React.Component {

    state = {
        playlist: [],
    };
    
    componentDidMount () {
        this.pegarPlaylist();
    };

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

    render () {

        const mostrarList = this.state.playlist.map((list) => {
            return (
                <div key={list.id}>

                    <li key={list.id}>{list.name}
                          <RenderDetalhes idProps={list.id} />
                         <button onClick={() => this.excluirPlaylist(list.id)}><img src="imagens/lixeira_318-55452.jpg" alt="lixeira" /></button>
                    </li>
                    
                </div>
            );
        })

        return (

            <Style>
                <h2>Suas Playlists</h2>
                { this.state.playlist.length ? (mostrarList) : (<p>Carregando playlists ...</p>)}
                <hr />
            </Style>
        )
    }
};

export default VisualizarPlaylist;