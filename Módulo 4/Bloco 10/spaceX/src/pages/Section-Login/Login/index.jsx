import React, { useState, useEffect } from  "react";

//* Import Custom Hook
import { useForm } from "../../../hooks/useForm";
//*-------------------------------------------------------------

//* Import Use Navigate
import { useNavigate } from "react-router-dom";
//*--------------------------------------------------------------

//* Import Axios
import axios from "axios";
//*---------------------------------------------------------------

//* Import URL Requisition
import { LoginUser } from "../../../Utils/constants";
//*--------------------------------------------------------------

//* Import Buttons
import { ButtonFive, ButtonGoBackHome } from "../../../components/Buttons";
//*--------------------------------------------------------------

//* Import Styles
import{ ButtonDiv, FormContainer, DivInputs, H1, CheckBoxDiv, DetailsDiv, Container } from "./style";
//*---------------------------------------------------------------

const Login = () =>{

    const navigate = useNavigate();
    const  backHome = () => {
        navigate("/");
    };

    const { form, onChange } = useForm({ email: "", password: "" });

    const [ typeInput, setTypeInput ] = useState("");
    const [ idView, setIdView ] = useState(false);

    const viewInputPass = () => {
        if ( idView === false ) {
            setTypeInput("password");
        } else {
            setTypeInput("text");
        };
        setIdView(!idView);
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/Admin");
        };
        viewInputPass();
    }, [navigate]);

    const getValuesLogin = ( event )  => {

        event.preventDefault();

        axios.post(`${LoginUser}`, {
            //*! Prevenindo erro de espaço do uúario.
            email: form.email.trim(),
            //*! --------------------------------------------
            password: form.password

        }).then(({ data }) => {

            localStorage.setItem("token", data.token); 

            if ( localStorage.getItem("token") !== null ) {
                setTimeout(() => {
                    navigate("/Admin");
                }, 500);
            };
        
        }).catch((err) => {
            alert( "Erro. verifique si o seu E-mail e senha estão corretos!");
            console.log(err.request);
        });
    };

    return (

        <>

            <DetailsDiv>
                <details>
                    <summary>Login e Senha</summary>
                        <p>Informações Padrão:</p>
                        <p>Email: astrodev@gmail.com.br</p>
                        <p>Senha: 123456</p>
                </details>
            </DetailsDiv>

            <Container>

                    <FormContainer method="POST">

                        <H1>
                        <h1>Login</h1>
                        </H1>

                        <DivInputs>
                            <input type="email" placeholder="E-mail" 
                            name="email"
                            value={form.email}
                            onChange={onChange} required
                            />
                            
                            <input type={typeInput} placeholder="Senha" 
                            name="password"
                            value={form.password}
                            onChange={onChange} required
                            id={`${idView.toString()}`}
                            pattern={"^.{3,}"}
                            title={"A senha deve ter no minímo 3 digitos"}
                            />

                        </DivInputs>

                        <CheckBoxDiv>
                            <label name="chekView">Ver senha</label>
                            <input type="checkbox" onClick={viewInputPass}
                                name="checkView"
                            />
                        </CheckBoxDiv>

                </FormContainer>

                <ButtonDiv>               
                        <ButtonGoBackHome backHome={backHome}>
                            Voltar
                        </ButtonGoBackHome>
                        <ButtonFive  etValuesLogin={getValuesLogin}>
                            Entrar
                        </ButtonFive>
                </ButtonDiv>

            </Container>

        </>

    );
};

export default Login;