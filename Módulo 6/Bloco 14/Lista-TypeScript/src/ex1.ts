
const infoUser = (name: string,  date: string): string => {

const result = date.split("/");

return  `Olá me chamo ${name}, nasci no dia ${result[0]} do mês ${result[1]} do ano de ${result[2]}`;

};
//* console.log(infoUser("Gabriel", "23/02/1998"));
