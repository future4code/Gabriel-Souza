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
    }

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
            
        })
        .catch(err => {
            alert("Erro ao adicionar musica. Desculpe :(")
        })
    };

    render () {

        const detalhes = this.state.playlistDetalhes.map((detalhe) => {
            return (
                <StyleRenderList>
                      
                      <div>
                          <p>Autor: {detalhe.artist}</p>
                           <p>Musica: {detalhe.name}</p>
                           <audio controls>
                            <source src="" />
                            </audio>
                      </div>
    
              </StyleRenderList>
            )
        });

        return (

            <div>

            <InfoMusicas detalhes={detalhes}/>
            <InfoAdd
            />
            
                
            </div>
        )
    }
};

export default RenderDetalhes;