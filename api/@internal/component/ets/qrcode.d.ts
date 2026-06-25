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
 * The **QRCode** component is used to display a QR code.
 *
 * > **NOTE**
 *
 * > The pixel count of the **QRCode** component is subject to the content. If the component size is not large enough,
 * > the content may fail to be displayed. In this case, you need to resize the component.
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
   * @param { string } value - Content of the QR code. A maximum of 512 characters are supported. If this limit is
   *     exceeded, the first 512 characters are used.<br>The Resource type is supported since API version 20.<br>
   *     **NOTE**<br>If this parameter is set to **null**, it is equivalent to passing the string **"null"**. If it is
   *     set to **undefined**, it is equivalent to passing the string **"undefined"**. Passing an empty string will
   *     result in an invalid QR code. [since 7 - 19]
   * @param { ResourceStr } value - Content of the QR code. A maximum of 512 characters are supported. If this limit is
   *     exceeded, the first 512 characters are used.<br>The Resource type is supported since API version 20.<br>
   *     **NOTE**<br>If this parameter is set to **null**, it is equivalent to passing the string **"null"**. If it is
   *     set to **undefined**, it is equivalent to passing the string **"undefined"**. Passing an empty string will
   *     result in an invalid QR code. [since 20]
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
 * In addition to the
 * [universal attributes](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md), the following
 * attributes are supported.
 *
 * The [universal events][universal events](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md) are
 * supported.
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
   * @param { ResourceColor } value - QR code color. The default value is **'#ff000000'** and does not change with the
   *     system color mode.<br>
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
   * @param { ResourceColor } value - Background color of the QR code.<br>Default value: **Color.White**<br>Since API
   *     version 11, the default value is **'#ffffffff'** and does not change with the system color mode.
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
   * @param { number | Resource } value - Opacity of the QR code content.<br>Default value: **1**<br>Value range:
   *     [0, 1]. If the value is out of the range, the default value is used.
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
 * The **QRCode** component is used to display a QR code.
 *
 * > **NOTE**
 *
 * > The pixel count of the **QRCode** component is subject to the content. If the component size is not large enough,
 * > the content may fail to be displayed. In this case, you need to resize the component.
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