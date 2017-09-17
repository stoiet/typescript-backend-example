import { ApplicationConfig } from '../../config';
import { sign, verify } from 'jsonwebtoken';
import { omit } from 'ramda';

const omitIAT = omit(['iat']);

export class Token {

  private _config: ApplicationConfig;

  constructor(config: ApplicationConfig) {
    this._config = config;
  }

  public sign(data: object = {}) {
    return sign(data, this._config.TOKEN_SECRET, { expiresIn: this._config.TOKEN_EXPIRATION });
  }


  public getData(token: string) {
    return omitIAT(verify(token, this._config.TOKEN_SECRET));
  }

}
