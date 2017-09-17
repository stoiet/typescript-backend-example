import { Action } from '../../../decorators/action';
import { BaseAction } from '../../base';
import { Context } from 'koa';

@Action({
  method: 'POST',
  path: '/register'
})
export class RegisterControllerPostAction extends BaseAction {

  constructor(context: Context) {
    super(context);
  }

  public async execute() {
    this._context.response.body = { success: true };
    this._context.response.status = 200;
  }

}
