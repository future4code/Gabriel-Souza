import React from "react";

class InfoMusicas extends React.Component {

    state = {
        buttonMostrar: true
    };

    setButtonMostrar = () => {
        this.setState({buttonMostrar: !this.state.buttonMostrar});
    };

    render() {

        return (

            <div>
              {
                    this.state.buttonMostrar ? 
                    <div>
                        <button onClick={this.setButtonMostrar}>Musicas</button>
                    </div>
                    :
                    <div>
                        <button onClick={this.setButtonMostrar}>Fechar musicas</button>
                        {this.props.detalhes}
                    </div>
                }
            </div>
        )
    }
};

export default InfoMusicas;