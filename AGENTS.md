# AGENTS.md

## Repository Overview

**OpenHarmony interface_sdk-js** — JavaScript/TypeScript API 声明文件公共仓。存储 `.d.ts` / `.d.ets` 声明文件及配套的 API 工具链。

- **默认分支**: `master`
- **许可证**: Apache License 2.0

## Directory Structure

```
api/                          # API 声明文件（英文）
├── @ohos.×××.d.ts            # OpenHarmony 系统 API 声明
├── @system.×××.d.ts          # 已废弃（deprecated）的 API
├── @internal/component/ets/  # 声明式开发范式组件声明文件（140+ 个）
├── @internal/ets/            # ArkUI 全局组件
├── config/                   # 基于 JS 扩展的类 Web 范式（css/hml）
└── form/                     # JS 服务卡片
arkts/                        # ArkTS 语言层 API 声明
├── @arkts.lang.d.ets
├── @arkts.collections.d.ets
├── @arkts.math.Decimal.d.ets
├── @arkts.utils.d.ets
└── builtin/                 # 内建类型（dynamic / static）
kits/                         # Kit 聚合声明文件（@kit.×××.d.ts）
zh-cn/                        # API 声明文件中文翻译
build-tools/                  # API 相关工具链
docs/                         # 文档
```

## API File Types

| 后缀 | 含义 |
|------|------|
| `.d.ts` | TypeScript 声明文件 |
| `.d.ets` | ArkTS 声明文件 |
| `.static.d.ets` | ArkTS 静态类型声明文件 |

## JSDoc 规范

JSDoc 标签参考表、书写顺序、适用范围以及新增 API 时的 JSDoc 写作规范，详见 [docs/AGENTS-jsdoc-rules.md](./docs/AGENTS-jsdoc-rules.md)。

## ArkTS 静态类型 API 设计规范

设计 ArkTS 静态类型 API 声明文件（`.static.d.ets`）时，类型系统规则、文件结构模板、声明方式、设计约束、二进制兼容性规则和检查清单，详见 [docs/AGENTS-arkts-static-types.md](./docs/AGENTS-arkts-static-types.md)。

## 鸿蒙多设备 API 行为差异知识库

分析 API 的多设备支持能力和行为差异时，设备类型枚举、差异行为分类、差异原因、设备移除规则、自然语言解析规则等知识，详见 [docs/AGENTS-device-models.md](./docs/AGENTS-device-models.md)。

## API 版本号规则

API 设计各阶段涉及版本号比较时，版本号格式（纯数字、语义版本）和比较规则，详见 [docs/AGENTS-version-rules.md](./docs/AGENTS-version-rules.md)。

## Important Notes

- **中文翻译同步**: `zh-cn/` 目录结构需与 `api/`, `arkts/`, `kits/` 保持一致
- **Kit 文件**: `kits/@kit.×××.d.ts` 是聚合入口，通过 import 汇集各子系统 API
- **条件编译**: 修改 API 文件时注意 `/*** if arkts dynamic/static */` 块，确保两阶段都正确
