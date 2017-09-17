import { Action } from '../../../decorators/action';
import { Context } from '../../../models/context';
import { BaseAction } from '../../base';

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
