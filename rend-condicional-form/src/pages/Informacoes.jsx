import React from 'react'

// Styles
    import styled from "styled-components";
//----------------------------------------------------------------

    const FormInfo = styled.form`
    
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    const Divs = styled.div`

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;

        input{
        height: 25px;
        margin: 10px;
        }
    `


//----------------------------------------------------------------

class Informacoes extends React.Component {

    render() {

        return(

            <div>
                
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

                <FormInfo action="">

                    <Divs>
                        <p>5. Qual é o curso?</p>
                        <input type="text"/>
                    </Divs>

                    <Divs>
                        <p>6. Qual a unidade de ensino?</p>
                        <input type="text" />
                    </Divs>

                </FormInfo>

            </div>

        )
    }
};

export default Informacoes;