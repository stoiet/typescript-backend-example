import { createServer as createHTTPServer } from 'http';
import { ApplicationConfig } from '../../config';
import { Server } from 'net';

import * as KoaRouter from 'koa-router';
import * as Koa from 'koa';

export class Application {

  private _config: ApplicationConfig;
  private _applicationInstance: Koa;

  constructor(config: ApplicationConfig) {
    this._config = config;
    this._applicationInstance = new Koa();
  }


  public setOptions({ proxy = false, silent = false } = {}): Application {
    this._applicationInstance.env = this._config.NODE_ENV;
    this._applicationInstance.proxy = proxy;
    this._applicationInstance.silent = silent;
    return this;
  }


  public addMiddleware(middleware: Koa.Middleware): Application {
    this._applicationInstance.use(middleware);
    return this;
  }


  public setRouting(router: KoaRouter): Application {
    this._applicationInstance
      .use(router.allowedMethods())
      .use(router.routes());

    return this;
  }


  public start(): Server | undefined {
    if (this._config.NODE_ENV === 'development') {
      this._applicationInstance.on('error', (error: Error) => console.error(error));
      return createHTTPServer(this._applicationInstance.callback() as any).listen(this._config.SERVER_PORT);
    } else {
      return undefined;
    }
  }

}
