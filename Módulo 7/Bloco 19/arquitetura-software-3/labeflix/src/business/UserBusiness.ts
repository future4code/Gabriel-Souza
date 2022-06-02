import { UserDatabase } from "../data/UserDatabase"
import { UserDTO } from "../model/User"
import { InvalidInformations, NotFoundUsers } from "../Erros/UserErros";
import { v4 as generateId } from 'uuid'

export class UserBusiness {

  async create({ email, name, password }: UserDTO):Promise<void> {

    if (!email || !name || !password) {
      throw new InvalidInformations();
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  getAllUsers = async (): Promise<UserDTO[]> =>{
    const userDatabase = new UserDatabase();
    const users:  Array<UserDTO> = await userDatabase.allUsers();

    if ( users.length === 0 ){
      throw new NotFoundUsers();
    };

    return users;
  };

};
