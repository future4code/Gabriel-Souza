enum GENDER {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
};

type InformationMovie = {
    name: string,
    yearOfLacquering: string | number,
    gender: string,
    additionalOption?: string
};

const userMovieInformation = (name: string, yearOfLacquering: string, gender: string, additionalOption?: string): InformationMovie => {

    switch ( gender ) {
        case "acão":
            GENDER.ACAO;
            break
        case "drama":
            GENDER.DRAMA;
            break
        case "comédia":
            GENDER.COMEDIA;
            break
        case "romance":
            GENDER.ROMANCE;
            break
        case "terror":
            GENDER.TERROR;
            break
        // default:
        // return "Error. Esse ggeneêro não existe."
    }

    return {
        name: name,
        yearOfLacquering: yearOfLacquering,
        gender: gender,
        additionalOption: additionalOption,
    };
};

//* console.log(userMovieInformation(
//*     "Chuck",
//*     "2000",
//*     "terror",
//*     "bom"
//* ));
