import { router } from '../../lib/router';
import { Context } from 'koa';

export interface ActionParameters {
  method: string;
  path: string;
}

export const Action = ({ method, path }: ActionParameters) => {
  return (Target: any) => {
    return (router as any)[`${method.toLowerCase()}`](path, ...Target.middlewares, async (context: Context) => {
      return await (new Target(context)).execute();
    });
  };
};
