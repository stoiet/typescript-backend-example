import { Context } from '../../models/context';
import { router } from '../../lib/router';

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
