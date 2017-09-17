import { Context } from '../../models/context';
import { Token } from '../../lib/token';
import { Middleware } from 'koa';

export const middleware = async (context: Context, next: Middleware) => {
  try {
    new Token(context.config).getData(context.request.headers['x-auth']);
  } catch (exception) {
    context.throw(401, 'You are not authorized to take this action!', { message: exception.message });
  }

  await next;
};
