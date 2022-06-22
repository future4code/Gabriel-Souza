import { IBCryptAdapter, IBcryptAdapterData } from "../bcrypt-adapter";

import * as bcrypt from "bcryptjs";

export class BCryptAdapter implements IBCryptAdapter {
  async hashEncrypt ( { password }: IBcryptAdapterData ) {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(password, salt);
    return result;
  };

  async compareHash ( { passwordUser, password }: IBcryptAdapterData ) {
    const result = await bcrypt.compare(passwordUser!, password);
    return result
  };
};