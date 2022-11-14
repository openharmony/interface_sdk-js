#  API声明文件公共仓

## 简介

JS/TS API 公共仓，用来提交 API d.ts 声明文件以及API相关工具。

## 目录

```
├─api
|  ├─@internal
│  |  ├─component
│  |  |  └─ets                 #基于TS扩展的声明式开发范式组件声明文件
|  |  └─ets 
|  ├─config                    #基于JS扩展的类Web范式
|  ├─form                      #JS服务卡片
|  ├─@ohos.×××.d.ts            #API声明文件
|  └─@system.×××.d.ts          #标记为停止维护的接口
├─build-tools
   ├─api_check_plugin          #检查API规范的工具
   |  ├─plugin
   |  ├─src
   |  └─test
   └─collect_application_api   #解析应用到的API的工具
      └─src
```

## 相关仓

[interface-sdk_js](https://gitee.com/openharmony/interface_sdk-js/tree/master)

