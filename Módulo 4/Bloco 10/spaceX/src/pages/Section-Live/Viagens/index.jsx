import React from  "react";

//* Import React Navigate
import { useNavigate } from "react-router-dom";
//*---------------------------------------------------------------------

//* Import Custom Hook
import { useAxiosList } from "../../../hooks/useAxiosList";
//* --------------------------------------------------------------------

//* Import EndPoint
import { GetTrips } from "../../../Utils/constants";
//*---------------------------------------------------------------------

//* Import Styles
import { ButtonGoBack, ButtonThee } from "../../../components/Buttons";
import { DivList, DivOverflow } from "../../../components/DivList/style";
//*---------------------------------------------------------------------

//* Import Styles
import { Container, ButtonDiv } from "./style";
//*----------------------------------------------------------------------

const Viagens = () =>{

    const [ viagens, isLoading, error ] = useAxiosList( `${GetTrips}`, []);
   
    const navigate = useNavigate();

    const renderList = viagens.map((list) => {
        return (
            <DivList key={list.id}>
                <ul>
                    <li>
                        <p>Nome: {list.name}.</p>
                        <p>Planeta: {list.planet}.</p>
                        <p>Descrição: {list.description}.</p>
                        <p>Data: {list.date}.</p>
                        <p>Duração: {list.durationInDays} dias.</p>
                    </li>
                </ul>
            </DivList>
        );
    });

    const pageInscricao = () => {
        navigate(`/Inscricao`);
    };

    return (

        <Container>

            <ButtonDiv>
                <ButtonGoBack navigate={navigate}>Voltar</ButtonGoBack>
                <ButtonThee pageInscricao={pageInscricao}>Inscreva-se</ButtonThee>
            </ButtonDiv>

            <h1>Lista de Viagens</h1>

            { isLoading && ( <p>Loading...</p> ) }

            { !isLoading && error && <p>Ocorreu algúm erro desculpe.</p> }

            { !isLoading && viagens && viagens.length > 0 &&
             (
                <DivOverflow>
                    {renderList}
                </DivOverflow>
             ) 
             }

            { !isLoading && viagens && viagens.length === 0 &&
             ( <p>Não tem viagens na lista ainda.</p> ) }
    
        </Container>

    );
};

export default Viagens;