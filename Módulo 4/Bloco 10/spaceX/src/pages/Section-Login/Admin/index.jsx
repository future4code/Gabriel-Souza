/* eslint-disable array-callback-return */
import React from  "react";

//* Hooks Dom
import { useNavigate } from "react-router-dom";
//* -------------------------------------------------------------

import { useAxiosList } from "../../../hooks/useAxiosList";
import { GetTrips, DeleteTrip } from "../../../Utils/constants";

//* Import Buttons
import { ButtonSix, ButtonSeven, ButtonGoBackHome } from "../../../components/Buttons";
//* --------------------------------------------------------------

//* Import styles
import { Container, ButtonsDiv, DivList, DivOverflow, DivLi} from "./style";
import axios from "axios";
//*-------------------------------------------------------------------

const Admin = () =>{

    const navigate = useNavigate();

    const [ viagens ] = useAxiosList( `${GetTrips}`, []);

    const pageCreateTrips = () => {
        navigate("/Admin/Create-Trips");
    };
    const backHome = () => {
        navigate("/");
    };

    const logout = () => {
        setTimeout(() => {
            localStorage.removeItem("token");
            navigate("/Login");
        }, 500);
    };

    const deleteTrip = ( id ) => {
        axios.delete(`${DeleteTrip}/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(() => {
           setTimeout(() => {
               document.location.reload(true);
           }, 100);
        });
    };

    const trips = viagens.map((trip) => {
        return (
            <DivList key={trip.id}>
                 <button onClick={() => deleteTrip(trip.id)}>🗑</button>
                <ul onClick={() => navigate(`/Admin/Decide-Candidate/${trip.id}`)}>
                    <DivLi>
                        <li>
                             <p>{ trip.name }</p>
                        </li>
                    </DivLi>
                </ul>
            </DivList>
        );
    });

    return (

        <Container>

            <h1>Aréa Administrativa</h1>

            <ButtonsDiv>
                <ButtonGoBackHome backHome={backHome}>Voutar</ButtonGoBackHome>
                <ButtonSix  pageCreateTrips={ pageCreateTrips}>
                    Criar Viagen
                </ButtonSix>
                <ButtonSeven logout={logout}>Logout</ButtonSeven>
            </ButtonsDiv>

<br/>
            <h2>Viagens Criadas</h2>

            {
                viagens.length > 0 ? 
                (
                    <DivOverflow>
                        { trips }
                    </DivOverflow>
                ) :
                (
                    <p>Lista de viagens vazia</p>
                )
            }

        </Container>

    );
};

export default Admin;