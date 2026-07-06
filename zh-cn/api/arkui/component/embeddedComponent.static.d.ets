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

import Want from '../../@ohos.app.ability.Want'
import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { Callback, ErrorCallback ,BusinessError} from '../../@ohos.base'
import { AttributeModifier, CommonMethod, TerminationInfo } from './common'
import { EmbeddedType } from './enums'
import { Builder } from '@ohos.arkui.component';
import { ComponentContentBase } from '../ComponentContent'
import { VoidCallback } from './units';
/**
 * EmbeddedDpiFollowStrategy的不同类型的枚举。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum EmbeddedDpiFollowStrategy {
    /**
     * 跟随宿主应用的DPI配置。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    FOLLOW_HOST_DPI = 0,

    /**
     * 跟随EmbeddedUIExtensionAbility的DPI配置。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    FOLLOW_UI_EXTENSION_ABILITY_DPI = 1
}

/**
* EmbeddedWindowModeFollowStrategy的不同类型的枚举。
*
* @enum { int }
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @stagemodelonly
* @since 26.0.0 static
*/
export declare enum EmbeddedWindowModeFollowStrategy {
    /**
     * 跟随宿主应用的窗口模式配置。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    FOLLOW_HOST_WINDOW_MODE = 0,

    /**
     * 跟随EmbeddedUIExtensionAbility的窗口模式配置。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE = 1
}

/**
* 该接口用于在构造时设置EmbeddedComponentAttribute的选项。
*
* @interface EmbeddedOptions
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @stagemodelonly
* @since 26.0.0 static
*/
export declare interface EmbeddedOptions {
    /**
     * 设置占位符。
     * 如果设置了占位ComponentContentBase，在连接未建立时显示占位节点。
     *
     * @type { ?ComponentContentBase }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    placeholder?: ComponentContentBase;

    /**
     * 设置区域变化占位符。
     * 如果设置了区域变化占位符，在EmbeddedComponent尺寸变化完成之前显示占位节点。
     * @type { ?Record<string, ComponentContentBase> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    areaChangePlaceholder?: Record<string, ComponentContentBase>;

    /**
     * 设置EmbeddedComponent内容的DPI跟随策略。
     * @type { ?EmbeddedDpiFollowStrategy }
     * @default EmbeddedDpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    dpiFollowStrategy?: EmbeddedDpiFollowStrategy;

    /**
     * 设置EmbeddedComponent内容的窗口模式跟随策略。
     * @type { ?EmbeddedWindowModeFollowStrategy }
     * @default EmbeddedWindowModeFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    windowModeFollowStrategy?: EmbeddedWindowModeFollowStrategy;
}

/**
 * 定义EmbeddedComponent的属性函数。
 *
 * @extends CommonMethod
 * @typedef EmbeddedComponentAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @noninterop
 * @since 23 static
 */
export declare interface EmbeddedComponentAttribute extends CommonMethod {
  /**
   * 设置嵌入式组件的选项。
   *
   * @param { Want } loader - 表示初始化参数。
   * @param { EmbeddedType } [type] - 表示EmbeddedComponent的类型。
   * @returns { this } EmbeddedComponentAttribute实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  setEmbeddedComponentOptions(loader: Want, type?: EmbeddedType): this;

  /**
   * 设置嵌入式组件的选项。
   *
   * @param { Want } loader - 表示初始化参数。
   * @param { EmbeddedType } [type] - 表示EmbeddedComponent的类型。
   * @param { EmbeddedOptions } [options] - 表示EmbeddedComponent选项的类型。
   * @returns { this } EmbeddedComponentAttribute实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  setEmbeddedComponentOptions(loader: Want, type?: EmbeddedType, options?: EmbeddedOptions): this;

  /**
   * 当嵌入式UI的提供方终止时回调。
   *
   * @param { Callback<TerminationInfo> | undefined } callback
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onTerminated(callback: Callback<TerminationInfo> | undefined): this;
  
  /**
   * 当发生错误时回调。
   *
   * @param { ErrorCallback<BusinessError> | undefined } callback
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onError(callback: ErrorCallback<BusinessError> | undefined): this;

  /**
   * 设置attributeModifier。
   *
   * @param { AttributeModifier<EmbeddedComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  attributeModifier(modifier: AttributeModifier<EmbeddedComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;

  /**
   * EmbeddedUIExtensionAbility绘制首帧时的回调。
   *
   * @param { VoidCallback | undefined } callback
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onDrawReady(callback: VoidCallback | undefined ): this;
}

/**
 * 定义EmbeddedComponent组件。
 *
 * @param { Want } loader - 表示初始化参数。
 * @param { EmbeddedType } [type] - 表示EmbeddedComponent的类型。
 * @returns { EmbeddedComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function EmbeddedComponent(
    loader: Want, type?: EmbeddedType
): EmbeddedComponentAttribute;

/**
 * 定义EmbeddedComponent组件。
 *
 * @param { Want } loader - 表示初始化参数。
 * @param { EmbeddedType } [type] - 表示EmbeddedComponent的类型。
 * @param { EmbeddedOptions } [options] - 表示EmbeddedComponent选项的类型。
 * @returns { EmbeddedComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@ComponentBuilder
export declare function EmbeddedComponent(
    loader: Want, type?: EmbeddedType, options?: EmbeddedOptions
): EmbeddedComponentAttribute;

/**
 * 定义EmbeddedComponent组件。需要在组件属性设置开始时调用setEmbeddedComponentOptions，
 * 并在组件属性设置结束时调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<EmbeddedComponentAttribute> } style - 用于设置embeddedcomponent属性的回调。
 * @returns { EmbeddedComponentAttribute } EmbeddedComponent的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function EmbeddedComponent(
    style: CustomBuilderT<EmbeddedComponentAttribute>
): EmbeddedComponentAttribute
