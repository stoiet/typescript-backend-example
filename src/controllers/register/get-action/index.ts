import { Action } from '../../../decorators/action';
import { compileFile, compileTemplate } from 'pug';
import { Context, Response } from 'koa';
import { BaseAction } from '../../base';
import { resolve } from 'path';

@Action({
  method: 'GET',
  path: '/register'
})
export class RegisterControllerGetAction extends BaseAction {

  private _response: Response;
  private _render: compileTemplate;

  constructor(context: Context) {
    super(context);
    this._response = context.response;
    this._render = compileFile(resolve(__dirname, './template.pug'));
  }

  public async execute() {
    this._response.body = this._render({ text: 'Hello World!' });
    this._response.status = 200;
    return {};
  }

}
