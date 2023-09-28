import path from 'path';

//开发及本地运行环境变量
export default {
  NODE_ENV: 'development',
  EVN_CONFIG: 'dev',
  DIR_NAME: path.resolve(__dirname, '../..'), //项目根目录地址
};
