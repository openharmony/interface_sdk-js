# 应用API解析工具

## 简介

该工具可用于解析应用中使用的API，并汇总成表格，提供给应用开发者

## 目录

```
├─sdk          #存放API文件的目录（sdk中，ets目录下的api文件夹和build-tools文件夹）
├─application  #存放被解析的应用源码
├─deps         #存放typescript源码
└─src          #存放脚本以及生成的表格
```

## 使用方法

### 目录配置

在package.json同级目录下执行：npm run pre，会新增sdk文件夹和application文件夹；

在每日构建上下载full-sdk，下载后解压sdk压缩包，打开windows文件夹，解压ets压缩包，将ets文件夹下的api文件夹和build-tools文件夹放到sdk文件夹下；

在application文件夹下，放置被解析的应用源码；

在deps文件夹，放置[typescript源码](https://gitee.com/openharmony/third_party_typescript/tree/master/build_package)，(如果是在一整个openHarmony仓下运行，可直接进行下一步:安装)。


### 安装

需要安装npm依赖环境，在package.json同级目录下执行：npm install。

### 使用工具

在package.json同级目录下执行：npm run collect，运行完成后，会生成一个表格。

## 相关文件夹

[collect_application_api](https://gitee.com/openharmony/interface_sdk-js/tree/master/build-tools/collect_application_api)