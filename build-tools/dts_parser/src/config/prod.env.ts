import path from 'path';

//线上环境运行环境变量
export default {
  NODE_ENV: 'production',
  EVN_CONFIG: 'prod',
  DIR_NAME: path.resolve(__dirname, '..'), //打包之后文件根目录地址
};
