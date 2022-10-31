# 应用API解析工具

## 简介

该工具可用于解析应用中使用的API，并汇总成表格，提供给应用开发者

## 目录

```
├─sdk          #存放API文件的目录（sdk中，ets目录下的api文件夹和build-tools文件夹）
├─application  #存放被解析的应用源码
├─deps         #存放typescript源码
└─src          #存放源码以及生成的表格
```

## 使用方法

### 目录配置

新建sdk文件夹，放置api文件；

新建application文件夹，放置被解析的应用源码；

新建deps文件夹，放置[typescript源码](https://gitee.com/openharmony/third_party_typescript/tree/master/build_package)。

### 安装

需要安装npm依赖环境：$npm install。

### 使用工具

进入src目录下：$node format。

## 相关文件夹

[collect_application_api](https://gitee.com/openharmony/interface_sdk-js/tree/master/build-tools/collect_application_api)