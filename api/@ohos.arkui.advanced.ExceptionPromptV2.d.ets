/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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
 * Defines the margin type of the exception prompt.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum MarginTypeV2 {
  /**
   * Default margin:
   *
   * Left margin: references **$r('sys.float.ohos_id_card_margin_start')**.
   *
   * Right margin: references **$r('sys.float.ohos_id_card_margin_end')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DEFAULT_MARGIN = 0,

  /**
   * Adaptable margin:
   *
   * Left margin: references **$r('sys.float.ohos_id_max_padding_start')**.
   *
   * Right margin: references **$r('sys.float.ohos_id_max_padding_end')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FIT_MARGIN = 1
}

/**
 * Defines the configuration information API for constructing a **PromptOptionsV2** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface PromptOptionsV2Config {
  /**
   * Margin type of the current exception prompt.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  marginType: MarginTypeV2;

  /**
   * Top margin of the current exception prompt.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  marginTop: Dimension;

  /**
   * Exception icon style of the current exception prompt.
   *
   * Not set by default or set to **undefined**, the exception icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  icon?: ResourceStr;

  /**
   * Exception symbol icon style of the current exception prompt, which takes priority over **icon**.
   *
   * Not set by default or set to **undefined**, the symbol icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Text content of the current exception prompt.
   *
   * Supports custom resources or the following four system resource strings for status text.
   *
   * 1. No network state: Show network not connected, referencing **$r('sys.string.ohos_network_not_connected')**.
   * 2. Poor network state: Show network connection is unstable, tap to retry, referencing **$r('sys.string.ohos_network_connected_unstable')**.
   * 3. Unable to connect to server state: Show unable to connect to server, tap to retry, referencing **$r('sys.string.ohos_unstable_connect_server')**.
   * 4. Network available but unable to obtain location state: Show unable to obtain location, tap to retry, referencing **$r('sys.string.ohos_custom_network_tips_left')**.
   *
   * Not set by default or set to **undefined**, the text content is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  tip?: ResourceStr;

  /**
   * Text content of the right icon button of the current exception prompt.
   *
   * Not set by default or set to **undefined**, the text content is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  actionText?: ResourceStr;

  /**
   * Visibility state of the current exception prompt.
   *
   * **true**: shown.
   *
   * **false**: hidden.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isShown?: boolean;
}

/**
 * Defines the configuration information of the exception prompt component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class PromptOptionsV2 {
  /**
   * Exception icon style of the current exception prompt.
   *
   * Not set by default or set to **undefined**, the exception icon is not displayed.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  icon?: ResourceStr;

  /**
   * Exception symbol icon style of the current exception prompt, with higher priority than **icon**.
   *
   * Not set by default or set to **undefined**, the symbol icon is not displayed.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Text prompt content of the current exception prompt.
   *
   * Supports custom resources or the following four system resource strings for statuses.
   *
   * 1. No network status: displays network not connected, referencing **$r('sys.string.ohos_network_not_connected')**.
   * 2. Poor network status: displays network connection unstable, tap to retry, referencing **$r('sys.string.ohos_network_connected_unstable')**.
   * 3. Unable to connect to server status: displays unable to connect to server, tap to retry, **referencing $r('sys.string.ohos_unstable_connect_server')**.
   * 4. Network available but unable to obtain location status: displays unable to obtain location, tap to retry, referencing **$r('sys.string.ohos_custom_network_tips_left')**.
   *
   * Not set by default or set to **undefined**, the text prompt content is not displayed.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  tip?: ResourceStr;

  /**
   * Margin type of the current exception prompt.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  marginType: MarginTypeV2;

  /**
   * Text content of the right icon button of the current exception prompt.
   *
   * Not set by default or set to **undefined**, the text content is not displayed.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  actionText?: ResourceStr;

  /**
   * Top margin of the current exception prompt.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  marginTop: Dimension;

  /**
   * Whether to show the current exception prompt.
   *
   * **true**: shown.
   *
   * **false**: hidden.
   *
   * Default value: **false**
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  isShown?: boolean;

  /**
   * Constructor of **PromptOptionsV2**.
   *
   * @param { PromptOptionsV2Config } [config] - Configuration information of **PromptOptionsV2**. If **config** is not
   *     passed, the default values are used: **marginType** is **MarginTypeV2.DEFAULT_MARGIN** and **marginTop** is
   *     **0**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config?: PromptOptionsV2Config);
}

/**
 * Defines the callback function type for tapping the left-side tip text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type OnTipClickCallback = () => void;

/**
 * Defines the callback function type for tapping the icon button on the right.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type OnActionTextClickCallback = () => void;

/**
 * The **ExceptionPromptV2** component is used when an exception occurs and the exception content needs to be prompted.
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1),
 * state management V2 delivers enhanced capabilities for deep observation and management of data objects, and is no
 * longer limited to the component level. With state management V2, you can more flexibly control the data and state of
 * the exception prompt through this component, achieving more efficient UI refresh.
 *
 * > **NOTE**
 * >
 * > - This component can only be used in the stage model.
 * >
 * > - If [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} are set for **ExceptionPromptV2**, the compilation
 * > toolchain will generate an additional node \_\_Common\_\_ and mount the universal attributes or universal events on
 * > \_\_Common\_\_, rather than directly applying them to **ExceptionPromptV2** itself. This may cause the set
 * > universal attributes or universal events to not take effect or behave unexpectedly. Therefore, it is not
 * > recommended to set universal attributes and universal events on **ExceptionPromptV2**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
export declare struct ExceptionPromptV2 {

  /**
   * Configuration information of the current exception prompt.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  options: PromptOptionsV2;

  /**
   * Callback invoked when the left-side tip text is tapped. When not set, no operation is performed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Event
  onTipClick?: OnTipClickCallback;

  /**
   * Callback invoked when the right-side icon button is tapped. When not set, no operation is performed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Event
  onActionTextClick?: OnActionTextClickCallback;
}