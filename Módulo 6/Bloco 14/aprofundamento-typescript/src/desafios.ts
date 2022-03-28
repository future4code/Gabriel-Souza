//* Desafio 1

enum Years {
    YEAR1 = 4000,
    YEAR2 = 476,
    YEAR3 = 1453,
    YEAR4 = 1789,
};

enum Acronym {
    ACRONYM1 = "AC",
    ACRONYM2 = "DC"
};

const f = ( year: number, acronym: string) => {
    if ( year === Years.YEAR1 && acronym === Acronym.ACRONYM1 ) {
        return "Antis de Cristo.";
    } else if (  year === Years.YEAR2 && acronym === Acronym.ACRONYM2 ) {
        return "Depois de Cristo.";
    } else if (  year === Years.YEAR3 && acronym === Acronym.ACRONYM2 ) {
        return "Depois de Cristo.";
    } else if (  year === Years.YEAR4 && acronym === Acronym.ACRONYM2 ) {
        return "Depois de Cristo.";
    } else if ( year ){
        return "Depois de Cristo.";
    } else {
        return "ERRO."
    };
};

console.log(f(406, "DA"))