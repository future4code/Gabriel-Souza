import React from "react";

//* Import Styles
import { ButtonsContainer} from "./style";
//* ----------------------------------------------

//* Parte do código que eu fui perceber depois que dava para
//* fazer tudo isso com apénas ( 2 ) função só. KKKKKKKK...

//* Usei Butão pra caramba disnecessaria mente.

//* Button Go Back
export const ButtonGoBack = ( { children, navigate } ) => {

    return (
        <ButtonsContainer>
            <button className="button_slide  slide_left"
            //* Voutar para o local anterior.
            onClick={ () => navigate( - 1) }
            >
                {children}
            </button>
        </ButtonsContainer>
    );
};
export const ButtonGoBackHome = ( { children, backHome }) => { 

    return (
        <ButtonsContainer>
            <button className="button_slide  slide_left" onClick={backHome}>
                {children}
            </button>
        </ButtonsContainer>
    );
};
//*-----------------------------------------------------------------

// * Butons Page Home
export const ButtonOne = ( { children, pageViagens } ) => {

    return (

        <ButtonsContainer>
            <button className="button_slide  slide_left" onClick={pageViagens}>
                {children}
            </button>
        </ButtonsContainer>

    );
};

export const ButtonTwo = ( { children, pageAdmin } ) => {

    return (

        <ButtonsContainer>
            <button className="button_slide  slide_left" onClick={pageAdmin}>
                {children}
            </button>
        </ButtonsContainer>

    );
};
//*-------------------------------------------------------------------------------------------------------------

//*Button Page Viagens
export const ButtonThee = ( { children, pageInscricao } ) => {

    return (
        <ButtonsContainer>
            <button className="button_slide  slide_left" onClick={pageInscricao}>
                {children}
            </button>
        </ButtonsContainer>
    );
};
//*-------------------------------------------------------------------------------------------------------------

//* Button Page Inscrição
export const Buttonfour = ( { children, inscriptionTrip } ) => {

    return (
        <ButtonsContainer>
            <button className="button_slide  slide_left" type="submit" onClick={inscriptionTrip}>
                {children}
            </button>
        </ButtonsContainer>
    );
};
///*-------------------------------------------------------------------------------------------------------------

//* Button Page Login
export const ButtonFive = ( { children, etValuesLogin } ) => {

    return (
        <ButtonsContainer>
            <button className="button_slide  slide_left" type="submit" onClick={etValuesLogin}>
                {children}
            </button>
        </ButtonsContainer>
    );
};
//* -------------------------------------------------------------------------------------------------------------


//* Buttons Page Admin
export const ButtonSix = ( { children,  pageCreateTrips } ) => {

    return (
        <ButtonsContainer>
            <button className="button_slide  slide_left" onClick={ pageCreateTrips }>
                {children}
            </button>
        </ButtonsContainer>
    );
};

export const ButtonSeven = ( { children, logout } ) => {

    return (
        <ButtonsContainer>
            <button className="button_slide  slide_left" onClick={logout}>
                {children}
            </button>
        </ButtonsContainer>
    );
};
//* --------------------------------------------------------------------------------------------------------------

//* Buttons Page Create Trips
export const ButtonEight = ( { children, getCreateTrips } ) => {

    return (
        <ButtonsContainer>
            <button className="button_slide  slide_left"
             type="submit" 
             onClick={getCreateTrips}
             >
                {children}
            </button>
        </ButtonsContainer>
    );
};
//*----------------------------------------------------------------------------------------------------------------

//* Buttons Page Decide Candidate
export const ButtonNine = ( { children, onClick } ) => {

    return (
        <ButtonsContainer>
            <button className="button_slide  slide_left"  onClick={onClick} >
                {children}
            </button>
        </ButtonsContainer>
    );
};

export const ButtonTen = ( { children , reproveCandidate} ) => {

    return (
        <ButtonsContainer>
            <button className="button_slide  slide_left"  onClick={reproveCandidate}>
                {children}
            </button>
        </ButtonsContainer>
    );
};
//*---------------------------------------------------------------------------------------------------------------