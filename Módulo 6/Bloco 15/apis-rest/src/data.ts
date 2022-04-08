export enum Types {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

type Users = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
};

export const users: Users[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: Types.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: Types.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: Types.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: Types.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: Types.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: Types.ADMIN,
        age: 60
    }
];