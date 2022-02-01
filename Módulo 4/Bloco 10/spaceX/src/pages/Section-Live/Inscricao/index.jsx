/* eslint-disable array-callback-return */
import React, { useState } from  "react";

//* Import Use Navigate
import { useNavigate } from "react-router-dom";
//*-------------------------------------------------------------

//* Import EndPointe Axios
import { useAxiosList } from "../../../hooks/useAxiosList";
import { GetTrips, ApplyToTrip } from "../../../Utils/constants";
//*---------------------------------------------------------------

//* Import Custom Hooks
import { useForm } from "../../../hooks/useForm";

//* Import Buttons
import { ButtonGoBack, Buttonfour } from "../../../components/Buttons";
import { SelectPaises } from "../../../components/SelectPaises";
//*--------------------------------------------------------------

//* Import Style
import { ButtonsDiv, Container, Form, DivInputs } from "./style";
import axios from "axios";
//*-------------------------------------------------------------------

const Inscricao = () =>{

    const navigate = useNavigate();

    const [ viagens ] = useAxiosList( `${GetTrips}`, []);

    const [ ids, setIds ] = useState("");
    const handleIds = ({ target }) => {
        setIds(target.value);
    }

    const { form, onChange, clearInputs } = useForm({
            name: "",
            age: "",
            applicationText: "",
            profession: "",
            country: ""
    });

    const inscriptionTrip = ( event ) => {
        event.preventDefault();

        axios.post(`${ApplyToTrip}/${ids}/apply`, form)
        .then(({data}) => {

            alert("Sucesso. Sua Solitação esta em analise.");
            clearInputs();
            
        }).catch((err) => {
            alert("Algo deu errado desculpe. Verifique si os campos estão com as exigências corretas.");
            console.log(err);
        });
    };

    return (

        <Container>

             <Form method="POST"  >

                <h1>Inscreva-se para uma viagem</h1>

                <select name="name" onChange={handleIds}>

                    <option defaultValue="">Escolha uma viagem</option>
                    {
                    viagens.map((trip) => {
                        return <option key={trip.id} value={trip.id}>
                                   {trip.name}
                                 </option>
                    })}
                </select>

                <DivInputs>
                <input type="text"  placeholder="Nome" 
                name="name"
                value={form.name}
                onChange={onChange}
                />
                <input type="number" placeholder="Idade" required min="18" 
                name="age"
                value={form.age}
                onChange={onChange}
                />
                <input type="text" placeholder="Texto de Candidatura" 
                name="applicationText"
                value={form.applicationText}
                onChange={onChange}
                />
                <input type="text" placeholder="Profissão" 
                name="profession"
                value={form.profession}
                onChange={onChange}
                />
                </DivInputs>

                
                <SelectPaises 
                country={form.country}
                onChange={onChange}/>

             </Form>

             <ButtonsDiv>
                    <ButtonGoBack navigate={navigate}>
                        Voltar
                    </ButtonGoBack>
                    <Buttonfour inscriptionTrip={inscriptionTrip}>
                        Enviar
                    </Buttonfour>
               </ButtonsDiv>

        </Container>

    );
};

export default Inscricao;