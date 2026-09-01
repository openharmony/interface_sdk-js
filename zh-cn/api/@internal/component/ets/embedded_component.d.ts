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

/**
 * DPI跟随策略，用于设置DPI，使其能够跟随宿主或EmbeddedUIExtensionAbility。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum EmbeddedDpiFollowStrategy {
  /**
    * 表示DPI跟随宿主。
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @atomicservice
    * @since 26.0.0 dynamic
    */
  FOLLOW_HOST_DPI = 0,

  /**
   * 表示DPI跟随EmbeddedUIExtensionAbility。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FOLLOW_UI_EXTENSION_ABILITY_DPI = 1
}
import { Want } from '../../@ohos.app.ability.Want';
import { Callback, ErrorCallback } from '../../@ohos.base';
import { CommonMethod } from './common';

/**
 * 窗口模式跟随策略，用于设置窗口模式跟随宿主或EmbeddedUIExtensionAbility。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum EmbeddedWindowModeFollowStrategy {
  /**
    * 表示窗口模式跟随宿主。
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @atomicservice
    * @since 26.0.0 dynamic
    */
  FOLLOW_HOST_WINDOW_MODE = 0,

  /**
   * 表示窗口模式跟随EmbeddedUIExtensionAbility。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE = 1
}

/**
 * 用于在EmbeddedComponent创建时传递可选的构造参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface EmbeddedOptions {
  /**
   * 设置占位符，在EmbeddedComponent与EmbeddedUIExtensionAbility建立连接前显示。
   *
   * 默认值：null，表示不显示占位符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  placeholder?: ComponentContent;

  /**
   * 设置尺寸变化占位符，在EmbeddedComponent尺寸发生变化并且内部渲染未完成时显示。key为尺寸变化场景类型（如"FOLD_TO_EXPAND"表示折叠展开场景），value为对应场景的占位符组件。
   * 当前支持的键值包括：FOLD_TO_EXPAND。传入不支持的键值时，该占位符不生效。
   *
   * 默认值：null，表示不设置尺寸变化占位符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  areaChangePlaceholder?: Record<string, ComponentContent>;

  /**
    * 设置DPI，使其能够跟随宿主或EmbeddedUIExtensionAbility。
   *
   * 默认值：FOLLOW_UI_EXTENSION_ABILITY_DPI，表示跟随EmbeddedUIExtensionAbility。
   *
   * @default EmbeddedDpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  dpiFollowStrategy?: EmbeddedDpiFollowStrategy;

  /**
    * 设置窗口模式，使其能够跟随宿主或EmbeddedUIExtensionAbility。
   *
   * 默认值：FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE，表示窗口模式跟随EmbeddedUIExtensionAbility。
   *
   * @default EmbeddedWindowModeFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  windowModeFollowStrategy?: EmbeddedWindowModeFollowStrategy;
}

/**
 * 提供EmbeddedComponent的接口，用于
 * <br/>异步渲染UI。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
interface EmbeddedComponentInterface {
  /**
   * 创建跨进程嵌入式组件，用于显示同包名或满足跨应用权限条件的EmbeddedUIExtensionAbility的UI。
   *
   * @param { import('../api/@ohos.app.ability.Want').default } loader - 表示要加载的EmbeddedUIExtensionAbility。
   * @param { EmbeddedType } type - 提供方的类型。
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  (
  loader: import('../api/@ohos.app.ability.Want').default,
  type: EmbeddedType
): EmbeddedComponentAttribute;

  /**
   * 创建跨进程嵌入式组件，用于显示同包名或满足跨应用权限条件的EmbeddedUIExtensionAbility的UI。相对于API version 12的接口，新增options参数用于传递构造参数。
   *
   * @param { import('../api/@ohos.app.ability.Want').default } loader - 要加载的EmbeddedUIExtensionAbility。
   * @param { EmbeddedType } type - 提供方的类型。
   * @param { EmbeddedOptions } [options] - 嵌入式组件的可选配置项，用于设置占位符、DPI跟随策略、窗口模式跟随策略等。
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  (
  loader: import('../api/@ohos.app.ability.Want').default,
  type: EmbeddedType,
  options?: EmbeddedOptions
): EmbeddedComponentAttribute;
}

/**
 * 用于表示被拉起的EmbeddedUIExtensionAbility的返回结果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TerminationInfo {
  /**
   * 被拉起的EmbeddedUIExtensionAbility退出时返回的结果码，由terminateSelfWithResult或者terminateSelf被调用时传入的数据决定。
   * 若通过terminateSelf退出，code取默认值0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  code: number;

  /**
    * 被拉起的EmbeddedUIExtensionAbility退出时返回的数据。若通过terminateSelf退出，则该值为undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  want?: import('../api/@ohos.app.ability.Want').default;
}

/**
 * 支持[通用属性]{@link ./common}。
 *
 * 与屏幕坐标相关的事件信息，根据**EmbeddedComponent**的位置、宽高进行转换后，传递给EmbeddedUIExtensionAbility处理。
 *
 * 不支持[点击事件]{@link ./common}等通用事件。仅支持以下事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare class EmbeddedComponentAttribute extends CommonMethod<EmbeddedComponentAttribute> {
  /**
   * 当启动的EmbeddedUIExtensionAbility通过调用
   * [terminateSelfWithResult]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession#terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 或
   * [terminateSelf]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession#terminateSelf(callback: AsyncCallback<void>)}
   * 正常退出时回调。
   *
   * > **说明**
   * >
   * > 该接口不能在[attributeModifier]{@link CommonMethod#attributeModifier}内调用。
   *
   * @param { import('../api/@ohos.base').Callback<TerminationInfo> } callback - 用于返回EmbeddedUIExtensionAbility结果的回调。
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onTerminated(callback: import('../api/@ohos.base').Callback<TerminationInfo>): EmbeddedComponentAttribute;

  /**
   * 当启动的EmbeddedUIExtensionAbility运行过程中发生错误时调用。通过回调参数中的**code**、**name**和**message**可以获取并处理错误信息。关于错误码的详细信息，请参见[UIExtension错误码](docroot://reference/apis-arkui/errorcode-uiextension.md)。
   *
   * > **说明**
   * >
   * > 该接口不能在[attributeModifier]{@link CommonMethod#attributeModifier}内调用。
   *
   * @param { import('../api/@ohos.base').ErrorCallback } callback - 用于返回
   *     [BusinessError]{@link @ohos.base:BusinessError}类型错误信息的回调。基于**code**、**name**和**message**参数可以获取并处理错误信息。
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onError(callback: import('../api/@ohos.base').ErrorCallback): EmbeddedComponentAttribute;

  /**
   * EmbeddedUIExtensionAbility绘制首帧时的回调。
   *
   * @param { Callback<void> } callback - 回调函数，在EmbeddedUIExtensionAbility绘制第一帧时触发。
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onDrawReady(callback: Callback<void>): EmbeddedComponentAttribute;
}

/**
 * **EmbeddedComponent**组件用于支持在当前页面嵌入本应用内或满足跨应用权限条件的其他[EmbeddedUIExtensionAbility]{@link @ohos.app.ability.EmbeddedUIExtensionAbility:EmbeddedUIExtensionAbility}提供的UI。EmbeddedUIExtensionAbility运行在独立进程中，完成页面布局和渲染。
 *
 * 通常用于需要进程隔离的模块化开发场景。
 *
 * > **说明：**
 * >
 * > EmbeddedComponent组件宽高默认值和最小值均为10vp。
 * > 不支持如下与宽高相关的属性：“constraintSize”、“aspectRatio”、“layoutWeight”、“flexBasis”、“flexGrow”和“flexShrink”。
 *
 * ###### 约束
 *
 * **EmbeddedComponent**仅支持在拥有多进程权限的设备上使用。
 *
 * **EmbeddedComponent**只能在UIAbility中使用，且默认情况下被拉起的EmbeddedUIExtensionAbility需与UIAbility属于同一应用。
 * 从API版本26.0.0开始，在同时满足以下条件时，允许**EmbeddedComponent**跨应用拉起EmbeddedUIExtensionAbility：
 * - **EmbeddedComponent**所属应用申请了ohos.permission.SUPPORT_CROSS_APP_EMBED_FOR_OA权限（该权限仅企业普通应用可申请）；
 * - 该应用的appIdentifier在EmbeddedUIExtensionAbility支持的应用清单（即extensionAbilities标签的appIdentifierAllowList属性）中。
 *
 * ###### 子组件
 *
 * 不支持
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const EmbeddedComponent: EmbeddedComponentInterface;

/**
 * 定义EmbeddedComponent组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const EmbeddedComponentInstance: EmbeddedComponentAttribute;