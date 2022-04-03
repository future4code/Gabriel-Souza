type ProductsTypes = {
    name: string,
    quantity: number,
    unitaryValue: string | number
};

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',');
	return "R$ " + valorAjustado;
};

const arrayProducts: Array <ProductsTypes> = [
	{ name: "MacMugffin", quantity: 37, unitaryValue: 51.040},
	{ name: "Vassoura voadora", quantity: 56, unitaryValue: 210.0},
	{ name: "Laço da verdade", quantity: 32, unitaryValue: 571.5},
	{ name: "O precioso", quantity: 1, unitaryValue: 9181.923},
	{ name: "Caneta de 250 cores", quantity: 123, unitaryValue: 17},
	{ name: "Plumbus", quantity: 13, unitaryValue: 140.44},
	{ name: "Pokebola", quantity: 200, unitaryValue: 99.9915}
];

const orderArrayProducts = arrayProducts.sort((  a, b ) => {
    return a.quantity - b.quantity;
}).map(( value ) => {
	value.unitaryValue = ajustaPreco(Number(value.unitaryValue));
	return value;
});
// console.log(orderArrayProducts);