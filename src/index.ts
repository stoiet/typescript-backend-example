import './lib/source-map-support';

import { Application } from './lib/application';
import { middleware as bodyParserMiddleware } from './lib/body-parser';
import { router } from './lib/router';
import { config } from './config';
import './controllers';

const application = new Application(config);

application
  .setOptions({ proxy: false, silent: false })
  .addMiddleware(bodyParserMiddleware)
  .setRouting(router)
  .start();
