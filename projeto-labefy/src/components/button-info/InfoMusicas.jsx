import React from "react";

// Import Styles
import {StyledButtonInfo} from "./StyleButtons";
// ----------------------------------------------------------------

class InfoMusicas extends React.Component {

    state = {
        buttonMostrar: true
    };

    setButtonMostrar = () => {
        this.setState({buttonMostrar: !this.state.buttonMostrar});
    };

    render() {

        return (

            <StyledButtonInfo>
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
            </StyledButtonInfo>
        )
    }
};

export default InfoMusicas;