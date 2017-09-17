import { ActionFactory } from '../../decorators/action-factory';
import { BaseAction } from '../base';
import { Context } from 'koa';

@ActionFactory({ method: 'GET', path: '/' })
export class RegisterControllerGetAction extends BaseAction {

  protected _context: Context;

  constructor(context: Context) {
    super(context);
  }

  public async execute() {
    this._context.response.body = { success: true };
    this._context.response.status = 200;
    return {};
  }

}
