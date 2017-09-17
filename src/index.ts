import { config } from './config';
import * as Koa from 'koa';

const application = new Koa();

application.use(async ({ response }) => {
  response.body = { success: true };
  response.status = 200;
});

application.listen(config.SERVER_PORT);
