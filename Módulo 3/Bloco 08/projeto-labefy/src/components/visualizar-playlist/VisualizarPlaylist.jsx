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
            alert("Erro ao carregar playlist :(")
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
            alert("Erro ao excluir á Playlist :(")
        });
    };

    render () {

        const mostrarList = this.state.playlist.map((list) => {
            return (

                <Style key={list.id}>

                    <li key={list.id}>
                        {list.name}
                        <img    onClick={() => this.excluirPlaylist(list.id)}
                            src="imagens/delete.png" alt="lixeira" />
                         <RenderDetalhes idProps={list.id} />
                    </li>
                    
                </Style>
            );
        });

        return (

            <Style>  
                <h2><i>Suas Playlists</i></h2> 
                { this.state.playlist.length ? (mostrarList) : (<p className="menssagem-sem-playlist">Você ainda não tem playlist adicione algúma na home.</p>)}
            </Style>
        )
    }
};

export default VisualizarPlaylist;