/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * The **Hyperlink** component supports two display forms: text and image. Tapping within the component area redirects
 * to a specified web page. It is suitable for scenarios where external web links are opened within an app. This
 * component must be used with the system browser.
 *
 * > **NOTE**
 * >
 * > - This component must be used with the system browser.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface HyperlinkInterface {
  /**
   *
   * Defines the constructor of Hyperlink.
   *
   * @param { string | Resource } address - Web page address that the **Hyperlink** component navigates to.
   * @param { string | Resource } content - Text displayed for the hyperlink in the **Hyperlink** component.
   *     <br>Default value: **''**. If this parameter is not set and the component has no child components, the
   *     **address** parameter value is displayed by default.
   *     <br>**NOTE**
   *     <br>If the component has child components, the hyperlink text is not displayed.
   * @returns { HyperlinkAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (address: string | Resource, content?: string | Resource): HyperlinkAttribute;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class HyperlinkAttribute extends CommonMethod<HyperlinkAttribute> {
  /**
   * Sets the color of the hyperlink text.
   *
   * @param { Color | number | string | Resource } value - Color of the hyperlink text
   *     <br><!--RP1-->Default value: '#ff007dff', indicating blue.<!--RP1End-->
   * @returns { HyperlinkAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color(value: Color | number | string | Resource): HyperlinkAttribute;
}

/**
 * The **Hyperlink** component supports two display forms: text and image. Tapping within the component area redirects
 * to a specified web page. It is suitable for scenarios where external web links are opened within an app. This
 * component must be used with the system browser.
 *
 * > **NOTE**
 * >
 * > - This component must be used with the system browser.
 *
 * ###### Required Permissions
 *
 * When a network connection is required to redirect to the target web page, you need to apply for the
 * **ohos.permission.INTERNET** permission. For details about how to apply, see
 * [Declaring Permissions](docroot://security/AccessToken/declare-permissions.md).
 *
 * ###### Child Components
 *
 * This component can contain the [Image]{@link ./image} child component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Hyperlink: HyperlinkInterface;

/**
 * Defines Hyperlink Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const HyperlinkInterface: HyperlinkAttribute;