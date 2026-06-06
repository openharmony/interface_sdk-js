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
* 用于显示单个二维码的组件。
*
* > **说明：**
*
* > - 二维码组件的像素点数量与内容有关，组件尺寸过小可能导致内容无法展示，此时需要适当调整组件尺寸。
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
   * 创建二维码组件，通过扫描组件显示的二维码图案可以获取二维码中包含的字符串信息。
   *
   * @param { string } value - Content of the QR code. A maximum of 512 characters are supported. If this limit is
   *     exceeded, the first 512 characters are used.<br>The Resource type is supported since API version 20.<br>
   *     **NOTE**<br>If this parameter is set to **null**, it is equivalent to passing the string **"null"**. If it is
   *     set to **undefined**, it is equivalent to passing the string **"undefined"**. Passing an empty string will
   *     result in an invalid QR code. [since 7 - 19]
   * @param { ResourceStr } value - 二维码内容字符串。最大支持512个字符，若超出，则截取前512个字符。 <br>从API version 20开始，支持Resource类型。 <br/>**说明：**
   *     <br/>设置为null时与设置字符串“null”效果一致；设置为undefined时与设置字符串“undefined”效果一致；当传入空字符串时，将生成无效二维码。 [since 20]
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
* 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。
*
* 支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)。
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
   * 设置二维码颜色。
   *
   * @param { ResourceColor } value - 二维码颜色。默认值：'#ff000000'，且不跟随系统深浅色模式切换而修改。<br/>
   * @returns { QRCodeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color(value: ResourceColor): QRCodeAttribute;

  /**
   * 设置二维码背景颜色。
   *
   * @param { ResourceColor } value - 二维码背景颜色。<br/>默认值：Color.White <br/>从API version 11开始，默认值改为'#ffffffff'，且不跟随系统深浅色模式切换
   *     而修改。
   * @returns { QRCodeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  backgroundColor(value: ResourceColor): QRCodeAttribute;

  /**
   * 设置二维码内容颜色的不透明度。不透明度最小值为0，最大值为1。
   *
   * @param { number | Resource } value - 二维码内容颜色的不透明度。<br/>默认值：1<br/>取值范围：[0, 1]，超出取值范围按默认值处理。
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
* 用于显示单个二维码的组件。
*
* > **说明：**
*
* > - 二维码组件的像素点数量与内容有关，组件尺寸过小可能导致内容无法展示，此时需要适当调整组件尺寸。
* >
*
* ###### 子组件
*
* 无
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
* 定义QRCode组件实例。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const QRCodeInstance: QRCodeAttribute;