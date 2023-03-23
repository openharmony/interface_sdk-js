#  Api-Diff对比工具

## 简介

该工具可用于对比两个版本SDK里的API差异，并汇总成表格，提供给应用开发者

## 目录

```
├─diff合集      #存放md文档形式的diff报告
├─版本迭代合集   #存放由子系统自行填写的API变更
├─url.json     #SDK路径和新旧版本的配置文件
└─src          #存放源码以及生成的表格
```

## 使用方法

### 目录配置

新建名为"diff合集"的文件夹，存放md文档形式的diff报告。

### 填写路径

1. 在url.json文件中将新旧SDK的本地路径分别赋给oldDir和newDir变量，路径写到windows即可，例如：D:ohos-sdk-windows_linux-full.tar_beta4*\\*ohos-sdk*\\*windows；
2. 在url.json文件中分别将新旧SDK的版本分别赋给oldVersion和newVersion变量，例如：3.2.5.6

### 安装

需要安装npm依赖环境，在package.json同级目录下执行：npm install。

### 使用工具

在package.json同级目录下执行：npm run diff。

## 相关文件夹

[api_diff](https://gitee.com/openharmony/interface_sdk-js/tree/master/build-tools/api_diff)