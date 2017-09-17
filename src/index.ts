import { createServer as createHTTPSServer } from 'https';
import { createServer as createHTTPServer } from 'http';
import { config } from './config';
import * as Koa from 'koa';

const application = new Koa();
application.env = config.NODE_ENV;
application.proxy = false;

application.use(async ({ response }) => {
  response.body = { success: true };
  response.status = 200;
});

if (config.NODE_ENV === 'production') {
  createHTTPSServer(application.callback() as any).listen(config.SERVER_PORT);
} else {
  createHTTPServer(application.callback() as any).listen(config.SERVER_PORT);
}
