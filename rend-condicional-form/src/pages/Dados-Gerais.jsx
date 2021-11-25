import React from "react";

// Imports from
//----------------------------------------------------------------

// Styles
import styled from "styled-components";
//----------------------------------------------------------------

    const FormInicial = styled.form`
    
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

        select{
            width: 190px;
            height: 20px;
            margin:2px;
        }
    `


//----------------------------------------------------------------

class DadosGerais extends React.Component {

    render(){

        return(

            <div>
                    
                <h1>ETAPA 1 - DADOS GERAIS</h1>

                <FormInicial action="">

                    <Divs>
                        <p>1.Qual é o seu nome?</p>
                        <input type="text" />
                    </Divs>

                    <Divs>
                        <p>2.Qual é a sua idade?</p>
                        <input type="text" />
                    </Divs>

                    <Divs>
                        <p>3.Qual é o seu email?</p>
                        <input type="email" />
                    </Divs>

                    <Divs>
                        <p>4.Qual é a sua escolaridade?</p>
                        <select>
                            <option >Ensino médio completo</option>
                            <option>Ensino médio incompleto</option>
                            <option>Ensino superior completo</option>
                            <option>Ensino superior incompleto</option>
                        </select>
                    </Divs>
                        
                </FormInicial>

            </div>

        )
    }
};

export default DadosGerais