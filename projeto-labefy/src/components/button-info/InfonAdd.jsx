import React from "react";

// Import Styles
import {StyledButtonAdd} from "./StyleButtons";
//------------------------------------------------------------

class InfoAdd extends React.Component {

    state = {
        buttonAdd: true
    };

    setButtonAdd = () => {
        this.setState({ buttonAdd: !this.state.buttonAdd});
    };

    render() {

        return (

            <div>
                  
                  {
                        this.state.buttonAdd ?
                        <StyledButtonAdd>
                            <div>
                              <button onClick={this.setButtonAdd}>Adicionar musicas</button>
                            </div>
                        </StyledButtonAdd>
                        :
                        <StyledButtonAdd>
                            <div>
                                <button onClick={this.setButtonAdd}>Fechar adicionar musicas</button>      
                            </div>
                            <div>
                                <p>Nome do artista ou banda</p>
                                <input type="text" 
                                placeholder="Nome do artista ou banda"
                                onChange={this.props.onChangeNome}
                                value={this.props.nome}/>
                            </div>
                            <div>
                                <p>Nome da musica</p>
                                <input type="text" 
                                placeholder="Nome da musica"
                                onChange={this.props.onChangeArtista}
                                value={this.props.artista}/>
                            </div>
                        
                            <div>
                                <p>Url da musica desejada</p>
                                <input type="url" 
                                placeholder="Url da musica"
                                onChange={this.props.onChangeUrl}
                                value={this.props.url}/>
                            </div> 
                            <div>
                                <button className="btn btn-adicionar" 
                                onClick={this.props.adicinarTracks}>Adicionar</button>
                            </div>
                        </StyledButtonAdd>
                  }
                 
            </div>
        )
    }
};

export default InfoAdd;