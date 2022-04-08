export type Transactions = {
    value: number,
    date: string,
    description: string,
};

export type User = {
    id: number,
    name: string,
    age: string,
    cpf: string,
    balance: number,
    extract: Transactions[]
};

export const usersList: User[] = [];