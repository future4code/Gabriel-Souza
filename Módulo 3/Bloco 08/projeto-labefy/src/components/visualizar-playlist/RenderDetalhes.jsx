import React from "react";

// Import Gerais
import axios from "axios";
import InfoMusicas from "../button-info/InfoMusicas";
import InfoAdd from "../button-info/InfonAdd";
//----------------------------------------------------------------

// Import Style
import {StyleRenderList} from "./style";
// ----------------------------------------------------------------

class RenderDetalhes extends React.Component {

    state = {
        playlistDetalhes: [],
        valueNome: "",
        valueArtista: "",
        valueUrl: ""
    };

    componentDidMount () {
        this.detalhesDaPlaylist();
    };

    onChangeNome = (evente) => {
        this.setState({valueNome: evente.target.value});
    };

    onChangeArtista = (evente) => {
        this.setState({valueArtista : evente.target.value});
    };

    onChangeUrl = (evente) => {
        this.setState({valueUrl : evente.target.value});
    };

    detalhesDaPlaylist = async () => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idProps}/tracks`;

        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "gabriel-silva-joy"
                }
            })
            this.setState({playlistDetalhes :res.data.result.tracks})

        } catch (err) {
          return alert("Erro ao carregar as musica da playlist desculpe :(")
        }
    };

    adicinarTracks = () => {


        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idProps}/tracks`,
        {
            name: this.state.valueNome,
            artist: this.state.valueArtista,
            url: this.state.valueUrl
        },
        {
            headers: {
                Authorization: "gabriel-silva-joy"
            }
        }
        )
        .then(res => {
            alert("Musica adicionada :)")
            this.detalhesDaPlaylist();
            this.setState({
                valueNome: "",
                valueArtista: "",
                valueUrl: ""
             }); 
        })
        .catch(err => {
            alert("Preencha todos os campos.")
        });
    };

    excluirTrack = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idProps}/tracks/${id}`,
        {
            headers: { Authorization: "gabriel-silva-joy"}
        }
        )
        .then(res => {
            alert("Musica excluida!")
            this.detalhesDaPlaylist()
        })
        .catch(err => {
            alert("Erro ao excluir musica!")
        })
    };

    render () {

        const detalhes = this.state.playlistDetalhes.map((detalhe) => {
            return (
                <StyleRenderList>
                      
                      <div key={detalhe.id}>
                          <p><i>Autor: {detalhe.artist}</i></p>
                           <p><i>Musica: {detalhe.name}</i></p>
                           <audio controls>
                                <source src={detalhe.url} />
                                <source src={detalhe.url} />
                                Seu navegador não suporta esse tipo de áudio.
                            </audio>
                            <button className="btn-excluir-musica"
                             onClick={() => this.excluirTrack(detalhe.id)}>Excluir musica</button>
                            <br />
                      </div>
                      <hr />
    
              </StyleRenderList>
            );
        });

        return (

            <div>

                <InfoAdd
                nome={this.state.valueNome}
                onChangeNome={this.onChangeNome}
                artista={this.state.valueArtista}
                onChangeArtista={this.onChangeArtista}
                url={this.state.valueUrl}
                onChangeUrl={this.onChangeUrl}
                adicinarTracks={this.adicinarTracks}
                />

                {
                    this.state.playlistDetalhes.length ?
                    <InfoMusicas detalhes={detalhes}/>
                    : 
                    <p className="menssagem-sem-musica">Playlist sem musicas adicione algúma.</p>
                }
                
            </div>
        )
    }
};

export default RenderDetalhes;