/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * Enumeration of different types of EmbeddedDpiFollowStrategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum EmbeddedDpiFollowStrategy {
    /**
     * Followed the host DPI.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    FOLLOW_HOST_DPI = 0,

    /**
     * Followed the EmbeddedUIExtensionAbility.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    FOLLOW_UI_EXTENSION_ABILITY_DPI = 1,
}

/**
* Enumeration of different types of EmbeddedWindowModeFollowStrategy.
*
* @enum { number }
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @stagemodelonly
* @atomicservice
* @since 26.0.0 dynamic
*/
declare enum EmbeddedWindowModeFollowStrategy {
    /**
     * Followed the host Window Mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    FOLLOW_HOST_WINDOW_MODE = 0,

    /**
     * Followed the EmbeddedUIExtensionAbility.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE = 1,
}

/**
* This interface is used to set the options for EmbeddedComponentAttribute during construction
*
* @interface EmbeddedOptions
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @stagemodelonly
* @atomicservice
* @since 26.0.0 dynamic
*/
declare interface EmbeddedOptions {
    /**
     * Set placeholder.
     * If set placeholder ComponentContent, show placeholder node when connection is not established.
     *
     * @type { ?ComponentContent }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    placeholder?: ComponentContent;

    /**
     * Set Areachange placeholder.
     * If the Areachange placeholder ComponentContent is set, the placeholder node is displayed until
     * the EmbeddedComponent size change is complete.
     *
     * @type { ?Record<string, ComponentContent> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    areaChangePlaceholder?: Record<string, ComponentContent>;

    /**
     * Set EmbeddedComponent Content Dpi Follow Strategy.
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
     * Set EmbeddedComponent Content Window Mode Follow Strategy.
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
 * Provide an interface for the EmbeddedComponent, which is used
 * <br/>to render UI asynchronously
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
   * Construct the EmbeddedComponent.<br/>
   * Called when the EmbeddedComponent is used.
   *
   * @param { import('../api/@ohos.app.ability.Want').default } loader - indicates initialization parameter
   * @param { EmbeddedType } type - indicates type of the EmbeddedComponent
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
   * Construct the EmbeddedComponent.<br/>
   * Called when the EmbeddedComponent is used.
   *
   * @param { import('../api/@ohos.app.ability.Want').default } loader - indicates initialization parameter
   * @param { EmbeddedType } type - indicates type of the EmbeddedComponent
   * @param { EmbeddedOptions } options - construction configuration of EmbeddedComponent
   * @returns { EmbeddedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stageModelOnly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  (
    loader: import('../api/@ohos.app.ability.Want').default,
    type: EmbeddedType,
    options: EmbeddedOptions
  ): EmbeddedComponentAttribute;
}

/**
 * Indicates the information when the provider of the embedded UI is terminated.
 *
 * @interface TerminationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TerminationInfo {
  /**
   * Defines the termination code.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
   code: number;

  /**
   * Defines the additional termination information.
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
 * Define the attribute functions of EmbeddedComponent.
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
   * Called when the provider of the embedded UI is terminated.
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
   * Called when some error occurred.
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
   * Callback called when the EmbeddedUIExtensionAbility draw the first frame.
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
 * Defines EmbeddedComponent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const EmbeddedComponent: EmbeddedComponentInterface;

/**
 * Defines EmbeddedComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const EmbeddedComponentInstance: EmbeddedComponentAttribute;
