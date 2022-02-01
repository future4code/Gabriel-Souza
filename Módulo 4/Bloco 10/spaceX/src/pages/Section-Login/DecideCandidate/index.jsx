/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import axios from "axios"
import { GetTripDetail, Decide } from "../../../Utils/constants";

import Approved from "./approved";

import { ButtonGoBack } from  "../../../components/Buttons/";

import Candidates from "./candidates";

//* Import Styles
import { Container, DivTrip, DivCA } from "./style"
//*-----------------------------------------------------------------

const DecideCandidate = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [tripDetail, setTripDetail] = useState({});
    const [ approved, setApproved ] = useState( [] );
    const [ candidates, setCandidates ] = useState( [] );

    useEffect(() => {
        axios.get(`${GetTripDetail}/${params.id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then(({ data }) => {

            setTripDetail(data.trip)
            setCandidates(data.trip.candidates)
            setApproved(data.trip.approved)
   
        }).catch((err) => {
            console.log(err.message)
        });
    }, [params.id]);

    const decideCandidates = ( id ) => {

        axios.put(`${Decide}/${tripDetail.id}/candidates/${id}/decide` , {
            approve: true
        },
        {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then(({ data }) => {
             document.location.reload();
        });
    };

    const reproveCandidate = ( id )  => {
        const removeCandidate = candidates.filter( ( candidate ) => 
        candidate.id !== id);
        alert("remove")
        setCandidates(removeCandidate);
      };

    return (

        <Container>

            <DivTrip>
                <h1>{tripDetail.name}</h1>
                <p>Nome: {tripDetail.name}</p>
                <p>Descrição: {tripDetail.description}</p>
                <p>Planeta: {tripDetail.planet}</p>
                <p>Duração em Dias: {tripDetail.durationInDays}</p>
                <p>Data: {tripDetail.date}</p>
            </DivTrip>

            <ButtonGoBack navigate={navigate}>
                    Voutar
            </ButtonGoBack>

            <br/>
            <br/>

            <DivCA>
                {
                    candidates.length > 0  ? (
                        <Candidates 
                        candidates={candidates} 
                        decideCandidates={decideCandidates}
                        reproveCandidate={reproveCandidate}
                        />
                    ) :
                    (
                        <p>Ainda não á candidatos para essa viagem.</p>
                    )
                }

                <Approved  approved={approved} />
            </DivCA>

        </Container>

    );
};

export default DecideCandidate;