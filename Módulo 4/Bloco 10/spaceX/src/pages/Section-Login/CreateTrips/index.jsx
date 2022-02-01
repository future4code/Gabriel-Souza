import React from "react";

//* Import Custom Hook
import { useForm } from "../../../hooks/useForm";
//* -----------------------------------------------------

//* Axios
import axios from "axios";
//*------------------------------------------------------

//* EndPoint
import { CreateTrip } from "../../../Utils/constants";
//*-------------------------------------------------------------

//* Import Router Dom
import { useNavigate } from "react-router-dom";
//*-------------------------------------------------------

//* Import Buttons
import { ButtonEight, ButtonGoBack } from "../../../components/Buttons";
//*----------------------------------------------------

//* Import Styles
import { Container, ButtonsDiv, Form, DivInputs } from "./style";
//*--------------------------------------------------------

export const CreateTrips = () => {

const navigate = useNavigate();

const { form, onChange, clearInputs } =  useForm( {
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
} );

const getCreateTrips = ( event ) => {
    event.preventDefault();

    axios.post(`${CreateTrip}`, form, {
        headers: {
            auth: localStorage.getItem("token")
        }
    } )
    .then(({data}) => {
    
        alert("Viagem Criada");
        clearInputs();

    }).catch((err) => {
        alert("Preencha os Campos Corretamente");
        console.log(err);
    });
};

    return (

        <Container>

            <Form method="POST">

                <h1>Criar Viagens</h1>

                <DivInputs>
                    <input type="text"  placeholder="Nome" 
                    name="name" 
                    value={form.name}
                    onChange={onChange}
                    required
                    />

                    <select onChange={onChange} name="planet">
                        <option value="Mercúrio">Mercúrio</option>
                        <option value="Vênus">Vênus</option>
                        <option value="Terra">Terra</option>
                        <option value="Marte">Marte</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Saturno">Saturno</option>
                        <option value="Urano">Urano</option>
                        <option value="Neturno">Neturno</option>
                        <option value="Plutão">Plutão</option>
                    </select>

                    <input type="date" 
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    required
                    />
                    <input type="text" placeholder="Descrição" 
                    name="description" 
                    value={form.description}
                    onChange={onChange}
                    required
                    />

                    <input type="number" placeholder="Duraçaõ em Dias" 
                    name="durationInDays"
                    value={form.durationInDay}
                    onChange={onChange}
                    required
                    />
                </DivInputs>

            </Form>

            <ButtonsDiv>
                    <ButtonGoBack navigate={navigate}>
                        Voutar
                    </ButtonGoBack>
                    <ButtonEight getCreateTrips={getCreateTrips}>
                        Criar
                    </ButtonEight>
            </ButtonsDiv>

        </Container>

    );
};

export default CreateTrips