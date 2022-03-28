enum Permission {
    ADMIN = "admin",
    USER = "user"
}

type Users = {
    name: string,
    email: string,
    role: string
};

const arrayUsers: Array <Users> = [
    {name: "Rogério", email: "roger@email.com", role: Permission.USER},
	{name: "Ademir", email: "ademir@email.com", role: Permission.ADMIN},
	{name: "Aline", email: "aline@email.com", role: Permission.USER},
	{name: "Jéssica", email: "jessica@email.com", role: Permission.USER},  
	{name: "Adilson", email: "adilson@email.com", role: Permission.USER},  
	{name: "Carina", email: "carina@email.com", role: Permission.ADMIN}
];

const filterAdmins = arrayUsers.filter((admin) => {
   return admin.role === Permission.ADMIN ? admin.email : false
}).map( email => email.email)
// * console.log(filterAdmins);