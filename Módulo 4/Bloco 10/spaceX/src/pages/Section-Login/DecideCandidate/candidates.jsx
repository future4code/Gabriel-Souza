import React from "react";

//* Import Styles
import {
     ButtonsDiv,
     DivParagraph,
     DivOverflow,
     DivLi,
     DivList
    } from "./style";
    //*----------------------------------------

    //* Import Buttons
import { ButtonNine, ButtonTen } from "../../../components/Buttons";
//*--------------------------------------------------


const Candidates = ({ candidates, decideCandidates, reproveCandidate}) => {

    const candidate = candidates.map(( candidate ) => {

        return (

            <DivList key={candidate.id}>
                <ul>
                    <DivLi>
                        <li>
                            <DivParagraph>
                                <p>Nome: {candidate.name}</p>
                                <p>Profissão: {candidate.profession}</p>
                                <p>Idade: {candidate.age}</p>
                                <p>País: {candidate.country}</p>
                                <p>Texto de Candidatura: {candidate.applicationText}</p>
                            </DivParagraph>

                            <ButtonsDiv>

                                <ButtonNine
                                onClick={() => decideCandidates(candidate.id)}
                                >
                                    Aprovar
                                </ButtonNine>

                                <ButtonTen reproveCandidate={() => reproveCandidate(candidate.id)}>Reprovar</ButtonTen>

                            </ButtonsDiv>
                        </li>
                    </DivLi>
                </ul>
            </DivList>

        );
    });

    return (
        <>
            <h2>Candidatos</h2>
            <p>Total:{candidate.length}</p>
            <DivOverflow>
                {candidate}
            </DivOverflow>
        </>
    );
};

export default Candidates;