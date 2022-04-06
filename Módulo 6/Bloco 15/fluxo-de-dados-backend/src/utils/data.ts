import {v4 as uuidv4} from 'uuid';

type Products = {
    id: string,
    name: string,
    price: number
};

export const arrayProducts: Array<Products> = [
    {
        id: uuidv4(),
        name: "Manga",
        price: 3
    },
    {
        id: uuidv4(),
        name: "Maçã",
        price: 2.5
    },
    {
        id: uuidv4(),
        name: "Oliveira",
        price: 2
    },
    {
        id: uuidv4(),
        name: "Banana",
        price: 3.5
    },
    {
        id: uuidv4(),
        name: "Jaca",
        price: 5
    },
    {
        id: uuidv4(),
        name: "Uva",
        price: 1.5
    },
    {
        id: uuidv4(),
        name: "Abacate",
        price: 4
    },
    {
        id: uuidv4(),
        name: "Mamão",
        price: 3
    },
    {
        id: uuidv4(),
        name: "Abacaxi",
        price: 3
    },
    {
        id: uuidv4(),
        name: "Caju",
        price: 1.5
    },
    {
        id: uuidv4(),
        name: "Damasco",
        price: 3.5
    },
];