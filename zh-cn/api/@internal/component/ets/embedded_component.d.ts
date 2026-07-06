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
 * EmbeddedDpiFollowStrategy的不同类型的枚举。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum EmbeddedDpiFollowStrategy {
    /**
     * 跟随宿主DPI。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    FOLLOW_HOST_DPI = 0,

    /**
     * 跟随EmbeddedUIExtensionAbility。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    FOLLOW_UI_EXTENSION_ABILITY_DPI = 1,
}

/**
* EmbeddedWindowModeFollowStrategy的不同类型的枚举。
*
* @enum { number }
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @stagemodelonly
* @atomicservice
* @since 26.0.0 dynamic
*/
declare enum EmbeddedWindowModeFollowStrategy {
    /**
     * 跟随宿主窗口模式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    FOLLOW_HOST_WINDOW_MODE = 0,

    /**
     * 跟随EmbeddedUIExtensionAbility。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE = 1,
}

/**
* 该接口用于在构造时设置EmbeddedComponentAttribute的选项。
*
* @interface EmbeddedOptions
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @stagemodelonly
* @atomicservice
* @since 26.0.0 dynamic
*/
declare interface EmbeddedOptions {
    /**
     * 设置占位符。
     * 如果设置了占位ComponentContent，在连接未建立时显示占位节点。
     *
     * @type { ?ComponentContent }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    placeholder?: ComponentContent;

    /**
     * 设置区域变化占位符。
     * 如果设置了区域变化占位ComponentContent，在EmbeddedComponent尺寸变化完成之前显示占位节点。
     *
     * @type { ?Record<string, ComponentContent> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    areaChangePlaceholder?: Record<string, ComponentContent>;

    /**
     * 设置EmbeddedComponent内容的DPI跟随策略。
     *
     * @type { ?EmbeddedDpiFollowStrategy }
     * @default EmbeddedDpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    dpiFollowStrategy?: EmbeddedDpiFollowStrategy;

    /**
     * 设置EmbeddedComponent内容的窗口模式跟随策略。
     *
     * @type { ?EmbeddedWindowModeFollowStrategy }
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
 * @interface EmbeddedComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
interface EmbeddedComponentInterface {
  /**
   * 构造EmbeddedComponent。<br/>
   * 在使用EmbeddedComponent时调用。
   *
   * @param { import('../api/@ohos.app.ability.Want').default } loader - 表示初始化参数
   * @param { EmbeddedType } type - 表示EmbeddedComponent的类型
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stageModelOnly
   * @atomicservice
   * @since 12 dynamic
   */
  (
    loader: import('../api/@ohos.app.ability.Want').default,
    type: EmbeddedType
  ): EmbeddedComponentAttribute;

  /**
   * 构造EmbeddedComponent。<br/>
   * 在使用EmbeddedComponent时调用。
   *
   * @param { import('../api/@ohos.app.ability.Want').default } loader - 表示初始化参数
   * @param { EmbeddedType } type - 表示EmbeddedComponent的类型
   * @param { EmbeddedOptions } options - EmbeddedComponent的构造配置
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stageModelOnly
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
 * 表示嵌入式UI的提供方终止时的信息。
 *
 * @interface TerminationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TerminationInfo {
  /**
   * 定义终止码。
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
   code: number;

  /**
   * 定义额外的终止信息。
   *
   * @type { ?import('../api/@ohos.app.ability.Want').default }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
   want?: import('../api/@ohos.app.ability.Want').default;
}

/**
 * 定义EmbeddedComponent的属性函数。
 *
 * @extends CommonMethod<EmbeddedComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare class EmbeddedComponentAttribute extends CommonMethod<EmbeddedComponentAttribute> {
  /**
   * 当嵌入式UI的提供方终止时回调。
   *
   * @param { import('../api/@ohos.base').Callback<TerminationInfo> } callback
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onTerminated(callback: import('../api/@ohos.base').Callback<TerminationInfo>): EmbeddedComponentAttribute;

  /**
   * 当发生错误时回调。
   *
   * @param { import('../api/@ohos.base').ErrorCallback } callback
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
   * @param { Callback<void> } callback
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onDrawReady(callback: Callback<void>): EmbeddedComponentAttribute;
}

/**
 * 定义EmbeddedComponent组件。
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
