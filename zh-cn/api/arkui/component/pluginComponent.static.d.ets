'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

import { VoidCallback } from './units';

import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { ComponentBuilder, CustomBuilderT } from './builder';
import { AttributeModifier, CommonMethod } from './common';
import { RecordData } from '../../@ohos.base';
import { Builder } from '@ohos.arkui.component';

/**
 * 定义插件组件模板信息，用于与提供方定义的组件绑定。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export interface PluginComponentTemplate {
  /**
   * 组件模板，取值可为模板绝对路径（不建议）、相对HAP包的相对路径（多HAP场景使用“相对路径&模块名称”格式）或FA模型下的AbilityName。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  source: string | undefined;
  /**
   * 提供方应用的bundleName。使用绝对路径提供模板时不需要填写，使用应用包提供模板时需要填写。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  bundleName: string | undefined;
}

/**
 * 定义用于构造插件组件的选项。
 * AnonyMous Object Rectification
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PluginComponentOptions {
  /**
   * 组件模板，用于跟提供方定义的组件绑定。
   * AnonyMous Object Rectification
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  template: PluginComponentTemplate;
  /**
   * 传给插件组件提供方使用的数据，类型不限（支持对象、字符串等）。具体数据格式由使用方与提供方协商定义。
   * AnonyMous Object Rectification
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  data: RecordData;
}
/**
 * 发生错误时提供的数据。
 * AnonyMous Object Rectification
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PluginErrorData {
  /**
   * 错误码。
   * AnonyMous Object Rectification
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  errcode: int;
  /**
   * 错误信息。
   * AnonyMous Object Rectification
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  msg: string;
}
/**
 * 发生错误时触发事件回调。
 * AnonyMous Object Rectification
 *
 * @param { PluginErrorData } info - 发生错误时提供的数据。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type PluginErrorCallback = (info: PluginErrorData) => void;

/**
 * 定义插件组件的属性方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface PluginComponentAttribute extends CommonMethod {

  /**
   * 设置插件组件选项。
   *
   * @param { PluginComponentOptions } options - 选项
   * @returns { this } PluginComponentAttribute实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  setPluginComponentOptions(options: PluginComponentOptions): this;
  /**
   * 组件加载完成时触发回调。
   * AnonyMous Object Rectification
   *
   * @param { VoidCallback | undefined } callback - 组件加载完成时触发事件回调。
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onComplete(callback: VoidCallback | undefined): this;
  /**
   * 组件加载错误时触发回调。
   * AnonyMous Object Rectification
   *
   * @param { PluginErrorCallback | undefined } callback - 组件加载错误时触发事件回调。
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onError(callback: PluginErrorCallback | undefined): this;
  /**
   * 设置PluginComponent组件的属性修改器。
   *
   * @param { AttributeModifier<PluginComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { PluginComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  attributeModifier(modifier: AttributeModifier<PluginComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 创建插件组件，用于显示外部应用提供的UI。
 *
 * @param { PluginComponentOptions } options - 定义用于构造插件组件的选项。
 * @returns { PluginComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function PluginComponent(
    options: PluginComponentOptions
): PluginComponentAttribute;

/**
 * 定义PluginComponent组件。它要求在组件属性设置开始时调用setPluginComponentOptions，
 * 并在组件属性设置结束时调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<PluginComponentAttribute> } style - 用于设置plugincomponent属性的回调。
 * @returns { PluginComponentAttribute } PluginComponent的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function PluginComponent(
    style: CustomBuilderT<PluginComponentAttribute>
): PluginComponentAttribute;