/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * The **QRCode** component is used to display a single QR code. It supports customizing the QR code color, background
 * color, and content opacity, and is suitable for scenarios where a QR code needs to be displayed for scanning to
 * obtain string information.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 7. Newly added APIs in later versions are marked with a superscript
 * > to indicate their
 * >
 * > - The pixel count of the **QRCode** component is related to its content. If the component size is too small, the
 * > content may not be displayed. In this case, adjust the component size appropriately.
 * >
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface QRCodeInterface {
  /**
   * Creates a **QRCode** component. The displayed QR code can be scanned to obtain the encoded string information.
   *
   * @param { string } value - QR code content string. It supports a maximum of 512 characters. If the limit is
   *     exceeded, only the first 512 characters are used.
   *     <br>Since API version 20, the Resource type is supported.
   *     <br>**Note:**
   *     <br>Setting it to null has the same effect as setting it to the string "null"; setting it to undefined has the
   *     same effect as setting it to the string "undefined"; passing an empty string generates an invalid QR
   *     code. [since 7 - 19]
   * @param { ResourceStr } value - QR code content string. It supports a maximum of 512 characters. If the limit is
   *     exceeded, only the first 512 characters are used.
   *     <br>Since API version 20, the Resource type is supported.
   *     <br>**Note:**
   *     <br>Setting it to null has the same effect as setting it to the string "null"; setting it to undefined has the
   *     same effect as setting it to the string "undefined"; passing an empty string generates an invalid QR
   *     code. [since 20]
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value: ResourceStr): QRCodeAttribute;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class QRCodeAttribute extends CommonMethod<QRCodeAttribute> {
  /**
   * Sets the color of the QR code.
   *
   * @param { ResourceColor } value - QR code color. Default value: '#ff000000', and it does not change with the system
   *     dark/light mode switch.
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color(value: ResourceColor): QRCodeAttribute;

  /**
   * Sets the background color of the QR code.
   *
   * @param { ResourceColor } value - Background color of the QR code.
   *     <br>Default value: Color.White
   *     <br>Since API version 11, the default value is changed to '#ffffffff', and it is not modified when the system
   *     switches between light and dark modes.
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  backgroundColor(value: ResourceColor): QRCodeAttribute;

  /**
   * Sets the opacity of the QR code content. The minimum value is 0, and the maximum value is 1.
   *
   * @param { number | Resource } value - Opacity of the QR code content color.
   *     <br>Default value: 1
   *     <br>Value range: [0, 1]. If the value is out of range, the default value is used.
   * @returns { QRCodeAttribute } the attribute of the QR code
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  contentOpacity(value: number | Resource): QRCodeAttribute;
}

/**
 * The **QRCode** component is used to display a single QR code. It supports customizing the QR code color, background
 * color, and content opacity, and is suitable for scenarios where a QR code needs to be displayed for scanning to
 * obtain string information.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 7. Newly added APIs in later versions are marked with a superscript
 * > to indicate their
 * >
 * > - The pixel count of the **QRCode** component is related to its content. If the component size is too small, the
 * > content may not be displayed. In this case, adjust the component size appropriately.
 * >
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const QRCode: QRCodeInterface;

/**
 * Defines QRCode Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const QRCodeInstance: QRCodeAttribute;