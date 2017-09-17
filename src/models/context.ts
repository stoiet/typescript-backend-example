import { ApplicationConfig } from '../config';
import { Context as KoaContext } from 'koa';

export type Context = KoaContext & { config: ApplicationConfig };
