import './source-map-support';

import { Application } from './lib/application';
import { middleware as bodyParserMiddleware } from './lib/body-parser';
import { config } from './config';

import * as KoaRouter from 'koa-router';

const application = new Application(config);

const router = new KoaRouter();

router.get('/', async ({ response }) => {
  response.body = { success: true };
  response.status = 200;
});

application
  .setupOptions({ proxy: false, silent: false })
  .setupMiddleware(bodyParserMiddleware)
  .setupRouting(router)
  .start();
