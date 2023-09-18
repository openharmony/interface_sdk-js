import dev from './dev.env';
import prod from './prod.env';
const env = process.env.NODE_ENV || 'development';
const config: { [key: string]: any } = {
  development: dev,
  production: prod,
};
Object.assign(process.env, config[env]);

export default config[env];
