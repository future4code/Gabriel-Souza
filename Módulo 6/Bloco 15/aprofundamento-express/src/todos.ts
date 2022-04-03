type Todos = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

export const todos: Array <Todos> = [
    {
        userId: 1,
        id: 1,
        title: "Terminado",
        completed: false
    },
    {
        userId: 2,
        id: 2,
        title: "Feito",
        completed: true
    },
    {
        userId: 3,
        id: 3,
        title: "Eu já terminei",
        completed: true
    },
    {
        userId: 4,
        id: 4,
        title: "Eu ainda estou fazendo",
        completed: false
    }
];