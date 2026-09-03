# ArkTS 静态类型 API 设计规范

> 本文档整合自 [ArkTS 语言规范 (spec_700)](https://gitcode.com/openharmony/arkcompiler_runtime_core/tree/master/static_core/plugins/ets/doc/spec_700) 和《鸿蒙 API 设计规范》§5.1.2，供 AI 在 spec / implement 阶段设计 ArkTS 静态类型 API 声明文件时学习参考。

---

## 1. 什么是 ArkTS 静态类型

ArkTS 使用**强静态类型**原则：

- 每个变量和表达式的类型在**编译时**就完全确定
- 类型由声明决定，**不允许运行时动态改变**
- 语义正确性在编译阶段检查，而非运行时

### 动态 API 与静态 API 的识别

静态 API 通过以下两种方式存在于声明文件中：

1. **`.static.d.ets` 文件**：文件中的所有 API 都是静态 API。文件首行为 `'use static';`。
2. **`.d.ets` 文件中的 `@since` 标记**：通过 `@since` 标签后缀判断该 API 属于动态、静态还是动静态共用：

| `@since` 标记 | 含义 |
|---------------|------|
| `@since N dynamic&static` | 动静态**共用一套 API 声明**——该声明既是动态 API 也是静态 API，打包时同时进入两套 SDK |
| `@since N static` | 仅静态 API（该声明只进入静态类型 SDK） |
| `@since N dynamic` | 仅动态 API（该声明只进入动态类型 SDK） |
| `@since N` | 仅动态 API（仅针对存量接口，新增接口禁止使用此声明方式） |

> **关键理解**：`@since N dynamic&static` 不是"动态一套声明 + 静态一套声明"，而是**一套声明同时服务动态和静态两个 SDK**。只有当动静态接口定义无法直接复用时，才拆分为各自独立的声明。

### 条件编译

`.d.ets` 文件中同一 API 的动静态差异通过条件编译块表达：

```typescript
/*** if arkts dynamic */
import lang from './@arkts.lang'
/*** endif */

/*** if arkts static */
import lang from './@arkts.lang.static'
/*** endif */
```

- `.static.d.ets` 文件不需要条件编译块（本身就是静态模式）
- `.d.ets` 文件中如有动静态差异，必须用 `/*** if arkts dynamic/static */` 包裹

---

## 2. 文件类型与目录布局

| 后缀 | 位置 | 含义 |
|------|------|------|
| `.d.ts` | `api/` | TypeScript 声明文件 |
| `.d.ets` | `api/` 或 `arkts/` | ArkTS 声明文件（通过 `@since` 标记和条件编译块区分动静态 API） |
| `.static.d.ets` | `arkts/` 或 `arkts/builtin/static/` | ArkTS 静态类型声明文件 |

静态类型声明文件的两种主要位置：
- `arkts/@arkts.{module}.static.d.ets` — 模块级静态 API
- `arkts/builtin/static/{Type}.static.d.ets` — 内建类型静态 API

---

## 3. 文件结构模板

```typescript
'use static';
/*
 * Copyright (c) 2024-2026 Huawei Device Co., Ltd.
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

/**
 * @file 文件用途简述
 * @kit ArkTS
 */

/**
 * 模块/类/接口描述
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
```

### 关键规则

1. **首行必须**：`'use static';`（仅 `.static.d.ets` 文件）
2. **版权头**：Apache 2.0，年份范围覆盖创建和修改年份
3. **`@file` 块**：每个文件必须有 `@file` 和 `@kit` 标签
4. **`@since` 标记**：见 §8 详细说明

---

## 4. 动静态接口一致性规范

### 4.1 同时新增和废弃动静态接口

提供动态接口的同时，**应该同时提供对应的静态接口**。如需废弃，原则上也应当同时废弃。

以下情况可以**仅提供动态接口**：
- 仅支持 FA 模型接口（标记 `@famodelonly`）
- 专为 ArkTS 动态类型本身设计的接口（如 `@Sendable` 相关接口、动态 import、worker）
- 废弃且有替代接口（标记 `@useinstead` 标签）
- 废弃无替代，但满足以下任一条件：
  1. API9 及以前生态开放早期接口，且无应用集成
  2. 废弃接口实际是空接口，无对应实现
  3. System API，且无系统应用集成使用
  4. LiteWearable 保留接口（通过 `@reserved ["liteWearable"]` 标记）

以下情况可以**仅提供静态接口**：
- 专为 ArkTS 静态类型本身设计的接口（如基于静态类型多线程能力的 ParallelizeUI）
- 静态类型高级组件的 build 方法

### 4.2 静态接口定义和行为原则上和动态接口一致

为最小化 ArkTS 静态类型和动态类型的差异，降低开发者学习成本：
- 静态接口定义和行为**原则上和对应的动态接口一致**
- 无法保持一致的，尽可能做到**按映射规则映射**
- 无法完全按规则映射的，尽可能**减少静态接口和动态接口之间的定义和行为差异**

### 4.3 设计态使用一套 SDK

ArkTS 动态类型和静态类型 SDK 独立发布。但**在设计态**（接口设计和提交代码仓库时），整体上不做动静态类型定义拆分，而是在一套 SDK 中使用 `@since` 标签标记，SDK 打包发布时通过工具拆分。详见 §8。

### 4.4 动静态接口优先使用一致的声明

设计态静态接口声明应**优先直接复用动态接口声明**（即使用 `@since N dynamic&static`，一套声明同时服务动态和静态两个 SDK）。无法完全复用时，按以下顺序解决：

1. 在同一 `.d.ets` 文件中**新增独立静态接口声明**（标记 `@since N static`），动态接口声明保留（标记 `@since N dynamic`）。
2. 模块内大量接口定义无法直接复用时，**单独新增静态接口定义文件**（`.static.d.ets` 后缀，文件头添加 `'use static'`）。此时动态声明文件中不应包含静态接口，反之亦然。

**示例一：一套声明同时服务动态和静态（优先使用）**

```typescript
/**
 * Set the AppLink state of this asset.
 *
 * @param { int } hasAppLink - AppLink state of the asset to set.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @since 21 dynamic&static
 */
setHasAppLink(hasAppLink: int): void;
```

> `dynamic&static` 表示这一套声明在打包时同时进入动态 SDK 和静态 SDK，开发者无需为静态单独写一套声明。

**示例二：在 .d.ets 文件中新增独立静态接口声明**

```typescript
/**
 * Register the observe of the accessibility state changed.
 * ...
 * @since 22 dynamic
 */
function on(type: 'accessibilityStateChange', callback: Callback<boolean>): void;

/**
 * Register the observe of the accessibility state changed.
 * ...
 * @since 22 static
 */
function onAccessibilityStateChange(callback: Callback<boolean>): void;
```

> 动态接口和静态接口定义不同（如静态中事件方法需重命名为 `onXX` 形式），各自独立声明，标记各自的 `@since` 后缀。

**示例三：单独新增静态接口定义文件**

```
// @ohos.arkui.ArcAlphabetIndexer.d.ets
// 文件内仅含动态接口定义（@since N dynamic）

// @ohos.arkui.ArcAlphabetIndexer.static.d.ets
// 文件内仅含静态接口定义（'use static'，@since N staticonly）
```

### 4.5 JSDoc 块标签末尾标注动静态行为差异

经评审允许动静态接口行为存在少许差异的，如果使用 `@since N dynamic&static` 动静态复用接口声明，可以在 JSDoc 块标签末尾添加 `[staticonly]` / `[dynamiconly]` 进行差异化标记：

- `[staticonly]`：该行内容仅在静态类型 SDK 中保留
- `[dynamiconly]`：该行内容仅在动态类型 SDK 中保留
- 中括号和描述之间应保留一个空格
- 非动静态复用的接口声明**不允许**标注 `[staticonly]` / `[dynamiconly]`

接口描述存在动静态差异时，用 `@description` 块标签单独列出差异，并在末尾添加标记。`@description` 可出现多个。

```typescript
/**
 * I'm an example brief.
 *
 * Here is some API details...
 *
 * > **NOTE**
 * > - I'm an important thing.
 * > - I'm an another important thing.
 *
 * @description I'm a special behavior in ArkTS-Sta. [staticonly]
 * @throws { BusinessError } 12300001 - some error only in ArkTS-Dyn. [dynamiconly]
 * @throws { BusinessError } 12300001 - some error only in ArkTS-Sta. [staticonly]
 * @since 22 dynamic&static
 */
```

---

## 5. 类型系统

### 5.1 预定义类型

| 类型 | 说明 |
|------|------|
| `byte`, `short`, `int`, `long` | 整数类型 |
| `float`, `double` | 浮点类型（`number` 是 `double` 的别名） |
| `boolean` | 布尔 |
| `char` | 16 位 Unicode 字符 |
| `string` | 字符串 |
| `bigint` | 大整数 |
| `void` | 无返回值 |
| `undefined`, `null` | 未定义/空值 |
| `Object` | 所有引用类型的基类 |
| `Any` | 任意类型（**禁用**，见 §6.3） |

### 5.2 数组类型

优先使用以下类型而非 `Array<T>`：

| 类型 | 说明 | 使用场景 |
|------|------|---------|
| `FixedArray<T>` | 定长数组 | 长度不变、性能优先 |
| `ValueArray<T>` | 值类型数组 | 数值/布尔/字符的紧凑存储 |
| `Array<T>` / `T[]` | 可变长数组 | 需要动态增删 |
| `SparseArray<T>` | 稀疏数组 | 大量空槽 |

### 5.3 用户定义类型

- **class** — 单继承，`extends` 一个类、`implements` 多个接口
- **interface** — 无实例字段，声明方法和属性契约
- **enum** — 枚举类型
- **type** — 类型别名
- **@interface** — 注解声明（ArkTS 特有）

### 5.4 泛型

- 类型参数可有**约束**（`<T extends SomeType>`）
- 类型参数可指定**协变/逆变**（`<out T>`, `<in T>`）
- 类型参数可有**默认类型**（`<T = string>`）
- **注意**：编译后会擦除泛型，见 §6.6

---

## 6. 静态类型 API 设计规则

### 6.1 使用具体数值类型而不是 number

静态接口中应使用具体数值类型（`int` / `long` / `double`），而非 `number`：

```typescript
// ✅ 正确
function setTimeout(func: Function, delayMs: int | null | undefined): int;

// ❌ 错误
function setTimeout(func: Function, delayMs: number): number;
```

### 6.2 显式声明所有 null/undefined

API 中的 `null` / `undefined` 在静态类型中需要**显式声明**，包括入参、返回值、属性：

```typescript
// 入参：可选参数或显式 undefined 联合类型
readFileSync(path: string, options?: ReadOptions): string;
onStart(callback: (() => void) | undefined): this;

// 返回值
get session(): arEngine.ARSession | null;

// 属性
readonly bundleName?: string | null;
```

### 6.3 禁止使用 any 类型

ArkTS 中**禁止定义 `any` 类型**。替代方案：

| 场景 | 替代方案 |
|------|---------|
| 结构有约束、层数有限的 SDK 对象 | 使用 `Record<K, V>` |
| 结构层级和层数均不确定的透传对象 | 使用 `RecordData` |

```typescript
// ❌ 动态接口（不允许在静态中出现）
function error(domain: number, tag: string, format: string, ...args: any[]): void;

// ✅ 静态接口
function error(domain: int, tag: string, format: string, ...args: RecordData[]): void;
```

### 6.4 接口命名避开 ArkTS 关键字

ArkTS 静态类型新增了若干关键字。定义接口时应避开语言关键字。设计动态接口时如果要提供对应静态接口，也**不应使用静态类型新增的关键字**（否则在提供静态接口时需要重命名）。

### 6.5 命名和异常设计的正确性高于一致性

- 如果动态接口命名不符合命名规范，设计对应静态接口时**命名以正确性优先**
- 如果动态接口异常定义不符合规范（如错误使用 401 异常、使用非标准错误码），设计对应静态接口时**异常设计以正确性优先**

### 6.6 唯一区分重载的参数是泛型/常量的函数需重命名

编译后会擦除泛型，且不同的常量无法区分。如果函数唯一区分重载的参数是泛型/常量，需要以**多个函数名**提供 API：

```typescript
// 泛型参数——动态接口
recoverAssets(assets: Array<PhotoAsset>): void;           // @since 11 dynamic
// 静态接口：重命名
recoverAssetsWithUri(assetUris: Array<string>): void;     // @since 22 static

// 常量参数——动态接口
on(type: 'imageArrival', callback: AsyncCallback<void>): void;  // @since 9 dynamic
// 静态接口：重命名
onImageArrival(callback: AsyncCallback<void>): void;             // @since 23 static
```

### 6.7 事件方法使用 onXX/offXX/onceXX 形式

静态类型不支持字符串字面量重载，事件 API 需使用 `onXX` / `offXX` / `onceXX` 形式：

```typescript
// 动态接口
on(type: 'discoveryStart', callback: Callback<DiscoveryEventInfo>): void;

// 静态接口
onDiscoveryStart(callback: Callback<DiscoveryEventInfo>): void;

// 新增 API 直接用 dynamic&static
onDiscoveryStart(callback: Callback<DiscoveryEventInfo>): void;  // @since 22 dynamic&static
```

### 6.8 get/set 分开实现时必须定义为 accessor

如果实现中 get 和 set 是两个方法实现的，API 声明也需要写成 `get`/`set` 形式：

```typescript
// 必选属性
get fillStyle(): string | number | CanvasGradient | CanvasPattern;
set fillStyle(value: string | number | CanvasGradient | CanvasPattern);

// 可选属性（静态中 get 返回 undefined，set 接受 undefined）
get fillStyle(): string | number | CanvasGradient | CanvasPattern | undefined;
set fillStyle(value: string | number | CanvasGradient | CanvasPattern | undefined);

// 只读属性（仅 get）
get fillStyle(): string | number | CanvasGradient | CanvasPattern;
```

### 6.9 Interface 中回调方法定义为属性，系统方法定义为函数

- 由**开发者提供实现、操作系统回调**的方法 → 使用**属性**方式定义：`fn: () => void`
- 由**系统提供实现、开发者调用**的方法 → 使用**成员函数**方式定义：`fn(): void`

```typescript
interface SelectionMenuOptions {
    // 开发者提供实现，系统回调 → 属性
    onAppear?: MenuOnAppearCallback;

    // 系统提供实现，开发者调用 → 函数
    keepEditableState(): void;

    // 属性
    text: string;
}
```

### 6.10 按照预期设计定义静态接口数据类型

静态接口数据类型应**严格按照预期设计定义**，静态实现和静态定义保持一致。动态接口可能存在数据类型和实现定义不一致的情况——如果动态实现符合预期设计，静态接口应按预期设计定义，而非和动态接口形式一致。

### 6.11 显式类型标注

静态类型 API 中所有导出实体的类型必须**显式标注**，不依赖类型推断。

### 6.12 导入规范

从子模块导入时使用 `_PascalCase` 别名：`import { Foo as _Foo } from './xxx'`

---

## 7. 声明文件中的 API 声明方式

### 7.1 Namespace 声明

```typescript
'use static';
// ... 版权头 ...

/**
 * 模块描述
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
declare namespace collections {
    /**
     * 类描述
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    class BitVector {
        /**
         * @param { int } length - 参数描述
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 24 staticonly
         */
        constructor(length: int);

        /**
         * @param { int } element - 参数描述
         * @returns { boolean } 返回值描述
         * @throws { BusinessError } 10200011 - 错误描述
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 24 staticonly
         */
        push(element: int): boolean;
    }
}
```

### 7.2 顶层函数声明

```typescript
'use static';
// ... 版权头 ...

/**
 * @param { Function } func - 参数描述
 * @param { int | null | undefined } delayMs - 可空参数
 * @param { FixedArray<Any> } args - 变长参数
 * @returns { int } 返回值描述
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
function setTimeout(func: Function, delayMs: int | null | undefined, ...args: FixedArray<Any>): int;
```

### 7.3 导出类/接口声明

```typescript
'use static';
// ... 版权头 ...

/**
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface Lock {
    /**
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    lock(): void;
}

/**
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Mutex implements Lock {
    /**
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();
}
```

### 7.4 注解声明（ArkTS 特有）

```typescript
/**
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 dynamic
 */
export @interface Retention {
    /**
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamic
     */
    policy: RetentionPolicy;
}
```

---

## 8. `@since` 版本与动静态标记

### 8.1 设计态 @since 标记规则

设计态（一套 SDK 中，即代码仓库中的声明文件）使用以下 `@since` 标记：

| 标记 | 含义 |
|------|------|
| `@since N dynamic&static` | **一套声明同时服务动态和静态 SDK**，打包时该声明同时进入两套 SDK（优先使用） |
| `@since N static` | 仅静态 API，该声明只进入静态类型 SDK |
| `@since N dynamic` | 仅动态 API，该声明只进入动态类型 SDK |
| `@since N` | 仅动态 API（**仅针对存量接口，新增接口禁止使用**） |

> **关键区别**：`dynamic&static` 是一套声明复用，不是动态和静态各自一套声明。`dynamic` 和 `static` 各自标记的声明是独立的，只进入各自的 SDK。

### 8.2 发布态 @since 标记

SDK 打包发布后，工具会根据设计态标记拆分：

| 设计态标记 | 静态 SDK 中的标记 | 动态 SDK 中的标记 |
|-----------|-------------------|-------------------|
| `@since N dynamic&static` | `@since N staticonly` | `@since N dynamiconly` |
| `@since N static` | `@since N staticonly` | （不出现） |
| `@since N dynamic` | （不出现） | `@since N dynamiconly` |

### 8.3 同一 API 动静态版本号可以不同

同一 API 的动静态版本可以有不同起始版本号：

```typescript
/**
 * @since 11 dynamic
 * @since 20 static
 */
recoverAssets(assets: Array<PhotoAsset>): void;
```

---

## 9. 二进制兼容性规则

修改已有静态类型 API 时必须遵守二进制兼容性规则：

### 兼容的变更

- 重排 `extends` 或 `implements` 中的类型顺序
- 重排成员（字段、方法）顺序
- 新增、删除或重命名 `private` 成员
- 新增字段
- 新增枚举常量
- 修改方法体（不改变签名）

### 不兼容的变更

- 修改 `public`/`protected` 方法或字段的类型
- 删除 `public`/`protected` 方法或字段
- 重命名 `public`/`protected` 方法或字段
- 给已导出的类添加 `final` 修饰符
- 删除已导出的类型
- 修改已导出函数或变量的类型

### 需要谨慎的变更

- 给接口新增 `required` 属性或方法（无默认实现）→ 已有实现类不兼容
- 给已导出抽象类新增 `abstract` 方法 → 已有子类不兼容
- 在类继承链中上移方法 → 可能引起方法解析冲突

---

## 10. 设计检查清单

新增或修改静态类型 API 声明文件时，逐项检查：

### 文件结构
- [ ] `.static.d.ets` 文件首行为 `'use static';`
- [ ] 包含 Apache 2.0 版权声明头
- [ ] 文件级 `@file` 和 `@kit` 标签

### 动静态一致性
- [ ] 动态接口和静态接口同时新增/废弃（或满足仅单端的例外条件）
- [ ] 静态接口定义和行为原则上与动态接口一致
- [ ] 优先复用动态接口声明（`@since N dynamic&static`）
- [ ] 无法复用时按优先级选择：复用 → 新增静态声明 → 拆分文件
- [ ] 动静态行为差异用 `[staticonly]` / `[dynamiconly]` 标注

### 类型规范
- [ ] 所有导出实体有显式类型标注
- [ ] 使用具体数值类型（`int`/`long`/`double`）而非 `number`
- [ ] **禁止使用 `any`**——使用 `Record` 或 `RecordData` 替代
- [ ] 所有 `null`/`undefined` 显式声明
- [ ] 变长参数使用 `FixedArray<RecordData>` 而非 `...args: any[]`

### 命名与签名
- [ ] 接口命名避开 ArkTS 关键字
- [ ] 命名正确性高于与动态接口的一致性
- [ ] 唯一区分重载的参数是泛型/常量的函数已重命名
- [ ] 事件方法使用 `onXX`/`offXX`/`onceXX` 形式
- [ ] get/set 分开实现的方法已定义为 accessor

### Interface 设计
- [ ] 回调方法定义为属性（`fn: () => void`）
- [ ] 系统提供的方法定义为成员函数（`fn(): void`）

### JSDoc 与版本
- [ ] 每个 API 有完整 JSDoc（按 [AGENTS-jsdoc-rules.md](./AGENTS-jsdoc-rules.md) 规范）
- [ ] `@since` 标记正确（设计态用 `dynamic&static` / `static` / `dynamic`）
- [ ] `@syscap` 标签已填写

### 兼容性
- [ ] 修改已有 API 时检查二进制兼容性
- [ ] 异常设计正确性高于与动态接口的一致性
- [ ] 静态接口数据类型按预期设计定义
