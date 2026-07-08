
'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit ArkUI
 */

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';

/**
* 支持[ElseIf](docroot://reference/apis-arkui/arkui-ts/ts-rendering-control-ifelse-sta.md#elseif)、
* [Else](docroot://reference/apis-arkui/arkui-ts/ts-rendering-control-ifelse-sta.md#else)和
* [debugLine](docroot://reference/apis-arkui/arkui-ts/ts-rendering-control-ifelse-sta.md#debugline24)属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface IfAttribute {

  /**
   * 定义ElseIf分支。
   *
   * @param { boolean } condition - 分支判断条件。<br>true: 执行该分支的UI描述。<br>false: 不执行该分支的UI描述。
   * @param { CustomBuilder } content_ - ElseIf分支代码
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ElseIf(
        condition: boolean,
        content_: CustomBuilder
    ): this;

  /**
   * 定义Else分支。
   *
   * @param { CustomBuilder } content_ - ElseIf分支代码
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  Else(
        content_: CustomBuilder
    ): void;

  /**
   * 设置组件源码重定向信息。
   *
   * @param { string } sourceLine - 源码行号。
   * @param { string } [moduleName] - 组件所属模块名。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  debugLine(sourceLine: string, moduleName?: string): this;

  /**
   * 设置If选项
   *
   * @param { boolean } condition - 条件分支。
   * @returns { this } IfAttribute实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  setIfOptions(condition: boolean): this;

  /**
   * 如果已完成设置其属性，则通知。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  applyAttributesFinish(): void;
}

/**
 * 定义If组件
 *
 * @param { boolean } condition - 'If'分支对应的条件
 * @param { CustomBuilder } content_ - 'If'分支需要运行的代码
 * @returns { IfAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentBuilder
export declare function If(
  condition: boolean,
  content_: CustomBuilder
): IfAttribute;

/**
 * 定义If组件。它需要在组件属性设置开始时调用setIfOptions。
 * 并且它需要在组件属性设置结束时调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<IfAttribute> } style - 回调来设置If的属性
 * @param { CustomBuilder } content_ - 分支的逻辑代码。
 * @returns { IfAttribute } If的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function If(
    style: CustomBuilderT<IfAttribute>,
    content_: CustomBuilder
): IfAttribute;