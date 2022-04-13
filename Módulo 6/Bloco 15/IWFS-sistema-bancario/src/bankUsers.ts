export type Transactions = {
    id: number,
    value: number,
    date: string,
    description: string,
    status: string
};

export type User = {
    id: number,
    name: string,
    age: string,
    cpf: string,
    balance: number,
    extract: Transactions[]
};

const data = new Date();
const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0');
const ano = data.getFullYear();

const dataAtual = dia + '/' + mes + '/' + ano;

export const usersList: User[] = [
    {
        id: 1,
        name: "Gabriel Silva",
        age: "23/02/1998",
        cpf: "157-157-555.10",
        balance: 500.00,
        extract: [{id: 1, value: 400, date: dataAtual, description: "Xbox one X", status: "Pedente"}] 
    },
    {
        id: 2,
        name: "Lany Santos",
        age: "01/05/2002",
        cpf: "204-900-444.50",
        balance: 550.00,
        extract: [] 
    }
];