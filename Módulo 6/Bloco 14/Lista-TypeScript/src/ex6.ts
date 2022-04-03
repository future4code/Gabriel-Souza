type User = {
    client: string,
    totalBalance: number,
    debts: number[] | any
};

const arrayUsersBank: Array <User> = [
    { client: "João",  totalBalance: 1000, debts: [100, 200, 300] },
	{ client: "Paula",  totalBalance: 7500, debts: [200, 1040] },
	{ client: "Pedro",  totalBalance: 10000, debts: [5140, 6100, 100, 2000] },
	{ client: "Luciano",  totalBalance: 100, debts: [100, 200, 1700] },
	{ client: "Artur",  totalBalance: 1800, debts: [200, 300] },
	{ client: "Soter",  totalBalance: 1200, debts: [] }
];

const negativeBalanceUser = arrayUsersBank.filter((value) => {
    const valueDebsTotal=  value.debts.reduce(( initialValue: any, currencyValue: any ) => initialValue + currencyValue, 0 );
    value.debts = value.debts.reduce(( initialValue: any, currencyValue: any ) => initialValue + currencyValue, 0 ) - valueDebsTotal;
    
    value.totalBalance = value.totalBalance - valueDebsTotal;

    return value.totalBalance < 0;
});
// console.log(negativeBalanceUser);