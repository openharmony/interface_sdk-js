
'use static';
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

/**
 * @file
 * @kit ArkUI
 */

import { Content } from '../../@ohos.arkui.node';

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';

import { AttributeModifier, CommonMethod } from './common';

/**
 * 定义ContentSlot属性，防止不当递归使用ContentSlot
 *
 * @interface ContentSlotAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ContentSlotAttribute {

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
  default debugLine(sourceLine: string, moduleName?: string): this;

  /**
   * 设置ContentSlot选项。
   *
   * @param { Content } content - 要显示的内容。
   * @returns { this } ContentSlotAttribute实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  setContentSlotOptions(content: Content): this;

  /**
     * 通知ContentSlot已经完成属性设置。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  applyAttributesFinish(): void;
}

/**
 * 当内容添加到占位符组件时调用。
 *
 * @param { Content } content - Content作为ContentSlot的管理器，通过Native侧提供的接口，可以注册并触发ContentSlot的上下树事件回调以及管理ContentSlot的子组件。
 * @returns { ContentSlotAttribute } * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function ContentSlot(
    content: Content
): ContentSlotAttribute;

/**
 * 定义ContentSlot组件。需要在组件属性设置开始时调用setContentSlotOptions，并在组件属性设置结束时调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<ContentSlotAttribute> } style - 用于设置ContentSlot属性的回调。
 * @returns { ContentSlotAttribute } ContentSlot属性对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function ContentSlot(
    style: CustomBuilderT<ContentSlotAttribute>
): ContentSlotAttribute;