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

import Want from '../../@ohos.app.ability.Want';
import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { Callback, ErrorCallback ,BusinessError} from '../../@ohos.base';
import { AttributeModifier, CommonMethod, TerminationInfo } from './common';
import { EmbeddedType } from './enums';
import { Builder } from '@ohos.arkui.component';
import { ComponentContentBase } from '../ComponentContent';
import { VoidCallback } from './units';
/**
 * EmbeddedDpiFollowStrategy的不同类型的枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum EmbeddedDpiFollowStrategy {
  /**
   * 跟随宿主应用的DPI配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  FOLLOW_HOST_DPI = 0,

  /**
   * 跟随EmbeddedUIExtensionAbility的DPI配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  FOLLOW_UI_EXTENSION_ABILITY_DPI = 1
}

/**
 * EmbeddedWindowModeFollowStrategy的不同类型的枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum EmbeddedWindowModeFollowStrategy {
  /**
   * 跟随宿主应用的窗口模式配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  FOLLOW_HOST_WINDOW_MODE = 0,

  /**
   * 跟随EmbeddedUIExtensionAbility的窗口模式配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE = 1
}

/**
 * 用于在EmbeddedComponent创建时传递可选的构造参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface EmbeddedOptions {
  /**
   * 设置占位符，在EmbeddedComponent与EmbeddedUIExtensionAbility建立连接前显示。<br/>默认值：undefined，不设置占位符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  placeholder?: ComponentContentBase;

  /**
   * 设置尺寸变化占位符，在EmbeddedComponent尺寸发生变化并且内部渲染未完成时显示。<br/>key为尺寸变化场景类型（如"FOLD_TO_EXPAND"表示折叠展开场景），value为对应场景的占位符组件。
   *     当前支持的键值包括：FOLD_TO_EXPAND。传入不支持的键值时，该占位符不生效。<br/>默认值：undefined，不设置尺寸变化占位符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  areaChangePlaceholder?: Record<string, ComponentContentBase>;

  /**
   * 设置DPI，使其能够跟随宿主或EmbeddedUIExtensionAbility。
   *
   * @default EmbeddedDpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  dpiFollowStrategy?: EmbeddedDpiFollowStrategy;

  /**
   * 设置窗口模式，使其能够跟随宿主或EmbeddedUIExtensionAbility。
   *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface EmbeddedComponentAttribute extends CommonMethod {

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
   * 被拉起的EmbeddedUIExtensionAbility通过调用terminateSelfWithResult或者terminateSelf正常退出时，触发本回调函数。
   *
   * @param { Callback<TerminationInfo> | undefined } callback - 回调函数，入参用于接收EmbeddedUIExtensionAbility的返回结果，
   *     类型为TerminationInfo。取值为undefined时，不使用回调函数。
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onTerminated(callback: Callback<TerminationInfo> | undefined ): this;

  /**
   * 被拉起的EmbeddedUIExtensionAbility在运行过程中发生异常时触发本回调。可通过回调参数中的code、name和message获取错误信息并做处理，业务错误码详细介绍请参见UIExtension错误码。
   *
   * @param { ErrorCallback<BusinessError> | undefined } callback - 回调函数，入参用于接收异常信息，类型为BusinessError，可通过参数中的code、
   *     name和message获取错误信息并做处理。<br/>ArkTS-Sta模式下，可传入undefined，表示取消回调函数。
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onError(callback: ErrorCallback<BusinessError> | undefined ): this;

  /**
   * 设置EmbeddedComponent组件的属性修改器。
   *
   * @param { AttributeModifier<EmbeddedComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier - EmbeddedComponent组件的属性修改器。取值为undefined时，不使用attributeModifier。
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  attributeModifier(modifier: AttributeModifier<EmbeddedComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;

  /**
   * 被拉起的EmbeddedUIExtensionAbility绘制第一帧时触发该回调。使用callback异步回调。
   *
   * @param { VoidCallback | undefined } callback - 回调函数，在EmbeddedUIExtensionAbility绘制第一帧时触发。取值为undefined时，不使用回调函数。
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onDrawReady(callback: VoidCallback | undefined ): this;
}

/**
 * 创建跨进程嵌入式组件，用于显示同包名或满足跨应用权限条件的EmbeddedUIExtensionAbility的UI。
 *
 * @param { Want } loader - 要加载的EmbeddedUIExtensionAbility。
 * @param { EmbeddedType } [type] - 提供方的类型，当前支持值为EmbeddedType.EMBEDDED_UI_EXTENSION，
 *     表示嵌入的是EmbeddedUIExtensionAbility提供的UI。
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
 * 创建跨进程嵌入式组件，用于显示同包名或满足跨应用权限条件的EmbeddedUIExtensionAbility的UI。相对于API version 12的接口，新增options参数用于传递构造参数。
 *
 * @param { Want } loader - 要加载的EmbeddedUIExtensionAbility。
 * @param { EmbeddedType } [type] - 提供方的类型，当前支持值为EmbeddedType.EMBEDDED_UI_EXTENSION，
 *     表示嵌入的是EmbeddedUIExtensionAbility提供的UI。
 * @param { EmbeddedOptions } [options] - 嵌入式组件的可选配置项，用于设置占位符、DPI跟随策略、窗口模式跟随策略等。详见EmbeddedOptions。
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
): EmbeddedComponentAttribute;