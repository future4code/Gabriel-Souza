import React from "react";

// Styles
import styled from "styled-components";
//----------------------------------------------------------------

const FormAdicionais = styled.form`

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
    padding-top: 20px;

    input{
        margin: 10px;
        height: 25px;
    }
`

//----------------------------------------------------------------

class InformacoesAdicionais extends React.Component {

    render() {

        return (

            <div>
                
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

                <FormAdicionais action="">

                    <Divs>
                        <p>5. Por que você não terminou um curso de graduação?</p>
                        <input type="text" placeholder="Opcional" />
                    </Divs>

                    <Divs>
                        <p>6. Você fez algum curso complementar?</p>
                        <input type="text" placeholder="Opcional" />
                    </Divs>

                    <Divs>
                        <select>
                            <option >Nenhum</option>
                            <option >Curso técnico</option>
                            <option >Curso de inglês</option>
                        </select>
                    </Divs>

                </FormAdicionais>

            </div>
        )
    }
};

export default InformacoesAdicionais;