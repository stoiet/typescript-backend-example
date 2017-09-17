import { Context, Middleware } from 'koa';

export class BaseAction {

  public static middlewares: Middleware[] = [];

  protected _context: Context;

  constructor(context: Context) {
    this._context = context;
  }

}
