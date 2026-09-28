/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * Defines the margin type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export declare enum MarginType {
  /**
   * Default margin:
   *
   * Margin 1: referenced from **ohos_id_card_margin_start**.
   *
   * Margin 2: referenced from **ohos_id_card_margin_end**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DEFAULT_MARGIN = 0,

  /**
   * Adaptable margin:
   *
   * Margin 1: referenced from **ohos_id_max_padding_start**.
   *
   * Margin 2: referenced from **ohos_id_max_padding_end**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FIT_MARGIN = 1
}

/**
 * Defines the exception prompt options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export interface PromptOptions {
  /**
   * Icon style of the exception prompt.
   *
   * If this parameter is not set or is set to **undefined**, the icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon?: ResourceStr;

  /**
   * Symbol icon style of the exception prompt, which has higher priority than **icon**.
   *
   * If this parameter is not set or is set to **undefined**, the symbol icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Text content of the exception prompt.
   *
   * By default, the following text resources are provided:
   *
   * 1. **ohos_network_not_connected**: displayed when there is no Internet connection.
   * 2. **ohos_network_connected_unstable**: displayed when the Internet connection is unstable.
   * 3. **ohos_unstable_connect_server**: displayed when the server fails to be connected.
   * 4. **ohos_custom_network_tips_left**: displayed when an Internet connection is available but the location fails to be obtained.
   *
   * If this parameter is not set or is set to **undefined**, the text content is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  tip?: ResourceStr;

  /**
   * Margin type of the exception prompt.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  marginType: MarginType;

  /**
   * Text of the icon on the right of the exception prompt.
   *
   * If this parameter is not set or is set to **undefined**, the text is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  actionText?: ResourceStr;

  /**
   * Top margin of the exception prompt.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  marginTop: Dimension;

  /**
   * Whether the exception prompt is displayed.
   *
   * **true**: The exception prompt is displayed.
   *
   * **false**: The exception prompt is hidden.
   *
   * Default value: **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  isShown?: boolean;
}

/**
 * The exception prompt component is used to show an error message when an error arises.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **ExceptionPrompt** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **ExceptionPrompt** component itself. As a result, the configured universal attributes and
 * > universal events may fail to take effect or behave as intended. For this reason, avoid using universal attributes
 * > and events with the **ExceptionPrompt** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Component
export declare struct ExceptionPrompt {

  /**
   * Exception prompt configuration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  @Prop
  options: PromptOptions;

  /**
   * Callback invoked when the tip text on the left is clicked. No operation is performed if this parameter is not
   * specified.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onTipClick?: () => void;

  /**
   * Callback invoked when the icon on the right is clicked. No operation is performed if this parameter is not
   * specified.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onActionTextClick?: () => void;

  /**
   * The build function is a member function that must return an ArkTS component type (Element) to represent the component to be rendered as a user interface.
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * The build function is a member function that must return an ArkTS component type (Element) to represent the component to be rendered as a user interface.
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  build(): void;
}