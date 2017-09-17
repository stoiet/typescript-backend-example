
export type Environments = 'development' | 'staging' | 'production';

export interface ApplicationConfig {
  SERVER_PORT: number;
  NODE_ENV: Environments;
}

export const config: ApplicationConfig = {
  SERVER_PORT: parseInt(`${process.env.SERVER_PORT}`) || 9000,
  NODE_ENV: (process.env.NODE_ENV as Environments) || 'development'
};
