# AGENTS.md

## Repository Overview

**OpenHarmony interface_sdk-js** — JavaScript/TypeScript API 声明文件公共仓。存储 `.d.ts` / `.d.ets` 声明文件及配套的 API 工具链。

- **远端仓库**: https://gitcode.com/openharmony/interface_sdk-js (remote: `gitcode`)
- **默认分支**: `master`
- **许可证**: Apache License 2.0
- **构建组件名**: `@interface/sdk` (subsystem: `sdk`)

## Directory Structure

```
api/                          # API 声明文件（英文）
├── @ohos.×××.d.ts            # OpenHarmony 系统 API 声明
├── @system.×××.d.ts          # 已废弃（deprecated）的 API
├── @internal/component/ets/  # 声明式开发范式组件声明文件（140+ 个）
├── @internal/ets/            # 全局公共 ETS API（global, lifecycle, index）
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
| `.d.ets` | ETS（Extended TypeScript）声明文件 |
| `.static.d.ets` | 静态阶段（static phase）专用声明文件 |

## JSDoc Tags

JSDoc 标签与 API 类型的对应关系须遵守定义规则，参照下表。

JSDOC标签的书写顺序遵循“权限->类型->能力->使用场景->版本->测试与示例”的顺序（按表格中书写顺序递增从上往下书写，相同的数字的标签不会同时使用）：

| 标签              | 书写顺序 | 说明                                                                                                                            | namespace | class | interface | enum | struct | method | type | constant | property |
| --------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------- | --------- | ----- | --------- | ---- | ------ | ------ | ---- | -------- | -------- |
| description     | 0    | API存在动静态差异时，用于声明描述中的差异部分（配合 dynamiconly/staticonly 使用）<br />基础的API描述不需要使用@description标签<br />参考[【规则】在 JSDoc 块标签末尾标注动静态接口行为差异] | 可选        | 可选    | 可选        | 可选   | 可选     | 可选     | 可选   | 可选       | 可选       |
| permission      | 1    | 用于声明API的权限                                                                                                                    | NA        | NA    | NA        | NA   | NA     | 可选     | NA   | NA       | 可选       |
| subtype         | 2    | 用于定义联合类型的子类型                                                                                                                  | NA        | NA    | NA        | NA   | NA     | NA     | 可选   | NA       | NA       |
| default         | 2    | 用于定义属性API的默认值                                                                                                                 | NA        | NA    | NA        | NA   | NA     | NA     | NA   | NA       | 可选       |
| param           | 2    | 用于定义函数API的参数                                                                                                                  | NA        | NA    | NA        | NA   | NA     | 可选     | NA   | NA       | NA       |
| returns         | 3    | 用于定义函数API的返回值                                                                                                                 | NA        | NA    | NA        | NA   | NA     | 可选     | NA   | NA       | NA       |
| throws          | 4    | 用于定义API抛出的错误                                                                                                                  | NA        | NA    | NA        | NA   | NA     | 可选     | NA   | NA       | 可选       |
| syscap          | 5    | 用于定义API所需的系统能力                                                                                                                | 必选        | 必选    | 必选        | 必选   | 必选     | 必选     | 必选   | 必选       | 必选       |
| systemapi       | 6    | 用于定义API为系统API                                                                                                                 | 可选        | 可选    | 可选        | 可选   | 可选     | 可选     | 可选   | 可选       | 可选       |
| stagemodelonly  | 7    | 用于定义API只在Stage模型下生效                                                                                                           | 可选        | 可选    | 可选        | 可选   | 可选     | 可选     | 可选   | 可选       | 可选       |
| famodelonly     | 7    | 用于定义API只在FA模型下生效                                                                                                              | 可选        | 可选    | 可选        | 可选   | 可选     | 可选     | 可选   | 可选       | 可选       |
| FaAndStageModel | 7    | 用于定义API同时在FA/Stage模型下生效                                                                                                       | 可选        | 可选    | 可选        | 可选   | 可选     | 可选     | 可选   | 可选       | 可选       |
| crossplatform   | 8    | 用于跨平台API的定义                                                                                                                   | 可选        | 可选    | 可选        | 可选   | 可选     | 可选     | 可选   | 可选       | 可选       |
| form            | 9    | 用于定义可以在ArkUI的卡片中使用的API                                                                                                        | 可选        | 可选    | 可选        | 可选   | 可选     | 可选     | 可选   | 可选       | 可选       |
| atomicservice   | 10   | 用于定义AP是一个元服务API                                                                                                               | 可选        | 可选    | 可选        | 可选   | 可选     | 可选     | 可选   | 可选       | 可选       |
| uicomponent     | 11   | 用于定义ArkUI扩展组件                                                                                                                 | NA        | 可选    | 可选        | NA   | NA     | NA     | NA   | NA       | NA       |
| since           | 12   | 用于定义API发布的版本                                                                                                                  | 必选        | 必选    | 必选        | 必选   | 必选     | 必选     | 必选   | 必选       | 必选       |
| deprecated      | 13   | 用于定义API废弃的版本号                                                                                                                 | 可选        | 可选    | 可选        | 可选   | 可选     | 可选     | 可选   | 可选       | 可选       |
| reserved        | 14   | 用于定义废弃API在特定场景仍然长期保留                                                                                                          | 可选        | 可选    | 可选        | 可选   | 可选     | 可选     | 可选   | 可选       | 可选       |
| useinstead      | 15   | 用于定义废弃API改为使用的API                                                                                                             | 可选        | 可选    | 可选        | 可选   | 可选     | 可选     | 可选   | 可选       | 可选       |
| test            | 16   | 用于定义API只在测试场景中使用                                                                                                              | 可选        | 可选    | 可选        | 可选   | 可选     | 可选     | 可选   | 可选       | 可选       |
| see             | 17   | 用于给出和当前API紧密相关的另一个API                                                                                                         | 可选        | 可选    | 可选        | 可选   | 可选     | 可选     | 可选   | 可选       | 可选       |
| example         | 18   | 用于给出API的示例代码                                                                                                                  | 可选        | 可选    | 可选        | 可选   | 可选     | 可选     | 可选   | 可选       | 可选       |

早期版本存在如下标签，新接口可以不再声明（类型标注相关，ArkTS本身要求明确类型，不需要在JSDoc中额外标注）。存量接口可以择机删除这些标签。

注意，删除 @typedef 时，如果 type 存在版本间差异需要标注，确保信息不丢失。具体标注方法参考[【规则】变更联合类型定义需标注各具体类型版本信息]

| **标签** | **说明**                            | **namespace** | **class** | **interface** | **enum** | **struct** | **method** | **type** | **constant** | **property** |
| -------------- | ----------------------------------------- | ------------------- | --------------- | ------------------- | -------------- | ---------------- | ---------------- | -------------- | ------------------ | ------------------ |
| implements     | 用于说明API的实现关系                     | NA                  | 可选            | NA                  | NA             | NA               | NA               | NA             | NA                 | NA                 |
| extends        | 用于说明API的继承关系                     | NA                  | 可选            | 可选                | NA             | NA               | NA               | NA             | NA                 | NA                 |
| namespace      | 用于说明API是命名空间                     | 必选                | NA              | NA                  | NA             | NA               | NA               | NA             | NA                 | NA                 |
| enum           | 用于说明API是枚举类型                     | NA                  | NA              | NA                  | 必选           | NA               | NA               | NA             | NA                 | NA                 |
| struct         | 用于说明API是结构体                       | NA                  | NA              | NA                  | NA             | 必选             | NA               | NA             | NA                 | NA                 |
| typedef        | 用于说明API是自定义类型                   | NA                  | NA              | NA                  | NA             | NA               | NA               | 必选           | NA                 | NA                 |
| constant       | 用于说明API是一个常量                     | NA                  | NA              | NA                  | NA             | NA               | NA               | NA             | 必选               | 可选               |
| type           | 用于说明API的具体类型                     | NA                  | NA              | NA                  | NA             | NA               | NA               | NA             | 必选               | 必选               |
| readonly       | 用于定义属性API为只读属性                 | NA                  | NA              | NA                  | NA             | NA               | NA               | NA             | 必选               | 可选               |
| static         | 用于定义函数（属性）API为静态函数（属性） | NA                  | NA              | NA                  | NA             | NA               | 可选             | NA             | NA                 | 可选               |
| fires          | 用于定义API引起的事件                     | NA                  | NA              | NA                  | NA             | NA               | 可选             | NA             | NA                 | 可选               |

## Conditional Compilation

声明文件中使用条件编译标记区分 dynamic / static 阶段：

```typescript
/*** if arkts dynamic */
// 仅动态阶段包含的导入/声明
/*** endif */
/*** if arkts static */
// 仅静态阶段包含的导入/声明
/*** endif */
```

## Build System

- **构建框架**: GN + OpenHarmony 构建系统
- **核心文件**: `BUILD.gn`, `bundle.json`, `interface_config.gni`
- **构建依赖**: `ets_frontend` 组件
- **SDK 输出路径**: 分为 dynamic / static / runtimeapi 三种模式
- **Node.js**: 构建工具依赖 Node.js 环境

### 关键构建目标

| 目标 | 说明 |
|------|------|
| `ohos_ets_api` | ETS API 声明打包 |
| `ohos_ets_arkts` | ArkTS 声明打包 |
| `ohos_ets_kits` | Kit 声明打包 |
| `ets_component` | 组件声明打包 |
| `ohos_declaration_ets` | ETS 声明输出 |
| `bundle_kits` / `bundle_arkts` / `ets_internal_api` | 各分类打包 |
| `ohos_ets_static` | 静态 SDK 处理 |

### 顶层 Python 脚本

| 脚本 | 用途 |
|------|------|
| `build_api_check_plugin.py` | 构建 API 检查插件 |
| `compile_ets_ts.py` | 编译 ETS/TS 声明文件 |
| `copy_runtimeapi.py` | 处理 @unpublished 标签，生成 runtimeapi |
| `process_internal.py` | 处理 internal API |
| `process_label_noninterop.py` | 处理非 interop 标签 |
| `remove_internal.py` | 移除 internal API |
| `ohos_copy_ets.py` | 拷贝 ETS 声明 |
| `delete_arkui_label.py` | 删除 ArkUI 标签 |
| `exists_path.py` | 路径检查工具 |
| `run_compile_declgen.py` | 运行声明生成编译 |

## Build-Tools

`build-tools/` 目录下的工具链：

| 工具 | 说明 | 测试命令 |
|------|------|----------|
| `api_check_plugin/` | 校验 d.ts 中 JSDoc 规范 | `cd api_check_plugin && npm run test` |
| `dts_parser/` | 解析 d.ts 文件工具 | `npm run testAll` (mocha) |
| `jsdoc_format_plugin/` | JSDoc 格式化工具 | `ts-node src/main.ts -i input -o output` |
| `api_diff/` | 比较两个版本 SDK 差异 | `node src/index.js` |
| `api_label_detection/` | 元服务 API 标签检测 | `python src/main.py -N detection` |
| `collect_application_api/` | 解析应用用到的 API | — |
| `collect_api/` | 收集 d.ts 基础信息 | — |
| `compile-plugins/` | 编译插件（api-check / api-transform） | — |
| `interop/` | interop 处理（dynamic / static） | — |
| `process_dynamic/` | 动态 API 处理 | — |
| `package_tools/` | SDK 打包工具 | — |
| `compare_sdk_files/` | SDK 文件比较 | — |
| `openharmony_sdk_upgrade_assistant/` | SDK 升级辅助工具 | — |
| `permissions_converter/` | 权限信息提取转换 | — |
| `arkui_transformer/` | ArkUI 转换器 | — |

### 工具链依赖安装

```bash
# 在 build-tools/ 目录下
cd build-tools && npm install

# 各子工具目录下也需要单独安装
cd build-tools/api_check_plugin && npm install
cd build-tools/dts_parser && npm install
```

## Testing

- **测试框架**: Mocha + Chai（Node.js 工具链）
- **测试报告**: mochawesome
- **测试配置**: `build-tools/test/mocha/.mocharc.jsonc`
- **测试用例路径**: `build-tools/test/testCase/*.js`
- **运行测试**:
  ```bash
  # build-tools 根目录
  cd build-tools && npm run testAll

  # api_check_plugin
  cd build-tools/api_check_plugin && npm run test

  # dts_parser
  cd build-tools/dts_parser && npm run testAll
  ```

## TypeScript

- **编译器**: `ohos-typescript`（OpenHarmony 定制版 TypeScript，非标准 npm 包）
- **版本**: 各工具使用不同版本（4.9.5-r10, 4.7.4, 4.2.3-r5 等）
- **注意**: `package.json` 中通过 `npm:ohos-typescript@x.x.x` 别名引入

## .gitignore 规则

忽略以下内容（不要提交）：
- `node_modules/`, `package-lock.json`
- `build-tools/api/`, `build-tools/kits/`, `build-tools/arkts/`（编译输出）
- `build-tools/test/output/`, `build-tools/mochawesome-report`
- `build-tools/dts_parser/test/output/`, `build-tools/dts_parser/diff合集`
- `.vscode/`

## Coding Conventions

### API 声明文件

1. **文件头**: 必须包含 Apache 2.0 许可证声明
2. **文件注释**: 使用 `@file` 和 `@kit` 标签
3. **API 注释**: 每个 API 必须包含 `@syscap`, `@since` 等标签
4. **版本标签**: 使用 `@since N dynamic` / `@since N static` 区分阶段
5. **向后兼容**: 破坏性变更使用新版本号，旧 API 按废弃接口处理规范标记（详见下方「废弃接口处理」）
6. **导入别名**: 从子模块导入时使用 `_PascalCase` 别名（如 `import { Foo as _Foo } from './xxx'`）

## JSDoc 写作规范

新增 API 时，JSDoc 描述须完整、准确、可执行。以下为编写要点。

### 方法/函数描述

每个方法/函数的 JSDoc 描述应覆盖以下要素：

1. **含义/功能**：信息完整准确，如需了解数据格式应给出格式说明。
   - 例：`按照BGRA_8888格式，读取PixelMap指定区域内的图像像素数据。`
2. **使用场景**：说明何时需要使用此方法。
   - 例：`当开发者需要根据应用实际场景，实现超长文本截断显示、以跑马灯方式显示等效果时，使用此方法。`
3. **使用后效果**：说明调用后的结果和影响。
   - 例：`设置完成后，系统将按指定方式显示超大文本。`
4. **相似接口差异**：如有功能相似的接口，说明差异及选取原则。同步接口需强调"同步接口阻塞主线程，容易影响UI交互，需谨慎使用"。
5. **缺省配置**：说明默认情况下的行为。
   - 例：`默认情况下，文本超长时系统会按字符截断文本。`
6. **规格限制**：不同设备品类支持差异/效果差异、国内海外地区差异。
   - 例：`该接口仅在2in1设备上生效。` / `该接口仅适用于中国境内。`
7. **生效机制**：说明什么情况下生效/不生效，边界值涉及限制时需讲明。
   - 例：`自适应字号生效时，fontSize设置不生效。`
8. **注意事项**：
   - 环境要求（如需要网络连接）
   - 前提条件/前置操作（如需先调用某方法）
   - 开发建议及 Tips

### 参数描述

每个 `@param` 应覆盖（适用时）：

1. **取值范围**：明确参数的可取值范围。例：`取值范围：[0, 10)`
2. **参数单位**：有单位的参数必须说明。例：`单位：vp`
3. **默认值**：非必填参数应提供默认值。例：`默认值：false`
4. **取值原则/建议值**：说明推荐的取值方式。
5. **规格限制**：不同设备品类差异、地区差异。
6. **生效机制**：边界值涉及限制/异常时需讲明。
7. **注意事项**：前提条件、开发建议及 Tips。
8. **相关参数间的配合/制约关系**：说明与其他参数的关联。

> 如果接口无参数，则不要生成 `@param` 标签。

### 返回值描述

`@returns` 应覆盖：

1. **返回值及含义**：说明返回值代表什么。
2. **枚举说明**：如返回值可枚举（特别是 number 和 boolean 类型），需枚举说明各值含义。
3. **格式一致性**：返回值格式须与实际实现严格一致，包括大小写。
4. **用途说明**：取得返回值后可以用来做什么。

> 如果无返回值（void），则不要生成 `@returns` 标签。

### 错误码描述

`@throws` 标签：

1. 仅按通用模板要求罗列错误码，不做错误码总结。
2. 不要自行添加 401 等通用错误码（这些有专门呈现方案）。

### 废弃接口处理

1. **不允许直接删除**，需用 `@deprecated` 标注废弃版本。
2. 有替代接口时，用 `@useinstead` 指明替代 API。
3. 无替代接口的，也需明确告知开发者无替代方案。

### 自检清单

编写完成后逐项自检：

1. **可判断、可执行**：描述应可操作，如提到"需确保有足够存储空间"时，应同时给出如何判断。
2. **顺序正确**："使用场景"、"使用后效果"置于"取值范围"等使用建议之前。
3. **避免重复**：参数和返回值相关信息统一在 `@param`/`@returns` 中说明，不要在接口描述中重复；前提条件中已描述的相关接口，不要在"相关接口配合/制约关系"处重复。
4. **枚举参数**：取值范围为枚举类型的参数，可链接到对应枚举介绍，无需在 `@param` 处逐一列出枚举值。
5. **避免非必要列举**：如"销毁对象并回收内存"不需要列举该对象由哪些接口创建。

### 完整示例

```typescript
/**
 * 读取PixelMap指定区域内的图像像素数据，结果按照BGRA_8888格式排列。
 * 当开发者需要获取图像某区域的原始像素数据进行分析或处理时，使用此方法。
 * 调用后返回指定区域内所有像素的BGRA_8888格式数据数组。
 * 取值范围：area.width 和 area.height 须大于 0。
 * 单位：pixel
 *
 * @param { PixelMap } pixelMap - 目标PixelMap对象，须为已创建的有效实例。
 * @param { Area } area - 要读取的区域，x/y/width/height 均不能超出图像边界。
 * @returns { ArrayBuffer } BGRA_8888格式的像素数据，每个像素4字节。
 * @throws { BusinessError } 62980096 - 创建PixelMap失败。
 * @syscap SystemCapability.Multimedia.Image
 * @since 12
 */
export declare function readPixels(pixelMap: PixelMap, area: Area): ArrayBuffer;
```

## Important Notes

- **不要直接修改编译输出**: `build-tools/api`, `build-tools/kits`, `build-tools/arkts` 是生成的产物
- **中文翻译同步**: `zh-cn/` 目录结构需与 `api/`, `arkts/`, `kits/` 保持一致
- **Kit 文件**: `kits/@kit.×××.d.ts` 是聚合入口，通过 import 汇集各子系统 API
- **internal API**: `api/@internal/` 下的文件不对外暴露，仅内部使用
- **条件编译**: 修改 API 文件时注意 `/*** if arkts dynamic/static */` 块，确保两阶段都正确
