import * as bodyParser from 'koa-bodyparser';

export const middleware = bodyParser({
  enableTypes: ['json'],
  encode: 'utf-8',
  jsonLimit: '100kb',
  strict: true,
  onerror: (error, context) => context.throw(400, 'Error during body parse!', { message: error.message })
});
