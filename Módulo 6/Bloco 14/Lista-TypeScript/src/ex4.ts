enum Sectors {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
};

type contributor = {
    name: string,
    salary: number,
    inPerson: boolean,
    sector: Sectors
};

const array: Array <contributor> =  [
	{ name: "Marcos", salary: 2500, sector: Sectors.MARKETING, inPerson: true },
	{ name: "Maria" ,salary: 1500, sector: Sectors.VENDAS, inPerson: false},
	{ name: "Salete" ,salary: 2200, sector: Sectors.FINANCEIRO, inPerson: true},
	{ name: "João" ,salary: 2800, sector: Sectors.FINANCEIRO, inPerson: false},
	{ name: "Josué" ,salary: 5500, sector: Sectors.FINANCEIRO, inPerson: true},
	{ name: "Natalia", salary: 4700, sector: Sectors.VENDAS, inPerson: true},
	{ name: "Paola" ,salary: 3500, sector: Sectors.MARKETING, inPerson: true }
];

const filterPersons = array.filter((persons) => {
    if ( persons.sector === Sectors.MARKETING && persons.inPerson === true ) {
        return persons;
    };
});
// console.log(filterPersons);