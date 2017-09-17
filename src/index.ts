import './source-map-support';

import { createServer as createHTTPSServer } from 'https';
import { createServer as createHTTPServer } from 'http';
import { config } from './config';

import * as bodyParser from 'koa-bodyparser';
import * as KoaRouter from 'koa-router';
import * as Koa from 'koa';

const application = new Koa();
const router = new KoaRouter();

application.env = config.NODE_ENV;
application.proxy = false;
application.silent = false;

application.use(bodyParser({
  enableTypes: ['json'],
  encode: 'utf-8',
  jsonLimit: '100kb',
  strict: true,
  onerror: (error, context) => {
    return context.throw(400, 'Error during body parse!', { message: error.message });
  }
}));

router.get('/', async ({ response }) => {
  console.info('Request arrived!');
  response.body = { success: true };
  response.status = 200;
});


application
  .use(router.routes())
  .use(router.allowedMethods());

application.on('error', error => {
  console.error('Server error: ', error);
});

if (config.NODE_ENV === 'production') {
  createHTTPSServer(application.callback() as any).listen(config.SERVER_PORT);
} else {
  createHTTPServer(application.callback() as any).listen(config.SERVER_PORT);
}
