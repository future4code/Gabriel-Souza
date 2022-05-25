import Knex from "knex";
import { ConnectionDatabase } from "../connection/ConnectionDatabase"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

class Migrations extends ConnectionDatabase {
  constructor( private nameTable: string ){
    super();
  };

 private createTables = () => ConnectionDatabase.connection.raw(`
      CREATE TABLE IF NOT EXISTS ${this.nameTable} (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
        )
    `).then(() => { console.log(`Tabelas criadas: ${this.nameTable}`) }).catch(printError)

  public getCreateTables = () => this.createTables();
  public closeConnection = () => ConnectionDatabase.connection.destroy();

};

const createTablesInsert = new Migrations("User_Arq");
createTablesInsert.getCreateTables()
.then(() => { console.log("Tabela criada!") })
.catch(printError)
.finally(createTablesInsert.closeConnection);

