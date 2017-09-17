
export type Environments = 'development' | 'staging' | 'production';

export interface ApplicationConfig {
  SERVER_PORT: number;
  NODE_ENV: Environments;
  TOKEN_SECRET: string;
  TOKEN_EXPIRATION: number;
}

export const config: ApplicationConfig = {
  SERVER_PORT: parseInt(`${process.env.SERVER_PORT}`) || 9000,
  NODE_ENV: (process.env.NODE_ENV as Environments) || 'development',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'secret',
  TOKEN_EXPIRATION: parseInt(`${process.env.TOKEN_EXPIRATION}`) || 120000
};
