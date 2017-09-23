import { Action } from '../../../decorators/action';
import { compileFile, compileTemplate } from 'pug';
import { Context } from '../../../models/context';
import { Token } from '../../../lib/token';
import { BaseAction } from '../../base';
import { Response } from 'koa';
import { resolve } from 'path';

@Action({
  method: 'GET',
  path: '/register'
})
export class RegisterControllerGetAction extends BaseAction {

  private _response: Response;
  private _config: any;
  private _render: compileTemplate;
  private _token: Token;

  constructor(context: Context) {
    super(context);
    this._response = context.response;
    this._config = context.config;
    this._render = compileFile(resolve(__dirname, './template.pug'));
    this._token = new Token(context.config);
  }


  public async execute() {
    const params = this._getRenderParams();
    this._response.body = this._render(params);
    this._response.status = 200;
  }


  private _getRenderParams() {
    return {
      token: this._token.sign(),
      clientHost: this._context.config.CLIENT_HOST
    };
  }

}
