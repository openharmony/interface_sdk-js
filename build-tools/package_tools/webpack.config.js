/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/deleteTool/entry.ts',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction
        ? 'js/[name].[contenthash].js'
        : 'js/[name].js',
    },

    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: 'tsconfig.json'
              }
            }
          ],
          exclude: /node_modules/
        }
      ]
    },

    plugins: [],

    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      compress: true,
      port: 3000,
      hot: true,
      open: true
    },

    devtool: isProduction ? 'source-map' : 'eval-source-map',

    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  };
};