//* passwordDatabase e a senha que esta salva no banco de Dados
//* quando o usuário si cadastrou.

//* password e a senha que ele esta colocando para efetuar o login.
//* Essa senha será comparada com a que esta no banco de dados 
//* e verificar si elas batem uma com a outra dando assim prosseguimento
//* para a aplicação.

export interface IBcryptAdapterData {
  password: string;
};

export interface IBcryptCompareAdapterData {
  password: string;
  passwordDatabase: string
};

export interface IBCryptAdapter {
  hashEncrypt: ( data: IBcryptAdapterData ) => Promise<string>;
  compareHash: ( data: IBcryptCompareAdapterData ) => Promise<boolean>
}; 