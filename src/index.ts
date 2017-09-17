import './lib/source-map-support';

import { Application } from './lib/application';
import { middleware as bodyParserMiddleware } from './lib/body-parser';
import { router } from './lib/router';
import { config } from './config';

const application = new Application(config);

router.get('/', async ({ response }) => {
  response.body = { success: true };
  response.status = 200;
});

application
  .setOptions({ proxy: false, silent: false })
  .addMiddleware(bodyParserMiddleware)
  .setRouting(router)
  .start();
