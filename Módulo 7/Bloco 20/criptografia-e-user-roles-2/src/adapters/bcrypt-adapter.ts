export  interface IBcryptAdapterData {
  password: string;
  passwordUser?: string
};

export  interface IBCryptAdapter {
  hashEncrypt: ( data: IBcryptAdapterData ) => Promise<string>;
  compareHash: ( data: IBcryptAdapterData ) => Promise<boolean>
};