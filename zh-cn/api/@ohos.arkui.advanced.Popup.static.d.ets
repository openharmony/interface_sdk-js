'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * Popup是用于显示特定样式气泡。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 * 
 * 
 * > - 该组件不支持在Wearable设备上使用。
 * >
 * > - 建议结合[Popup控制]{@link common}中的自定义气泡功能。
 * 
 * ######  子组件
 * 
 * 无
 *
 * @file
 * @kit ArkUI
 */

import { ResourceStr, Builder, Resource, ResourceColor, FontWeight,
  VoidCallback, Dimension, Length, BorderRadiuses, Direction } from '@ohos.arkui.component';

/**
 * 设置文本样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PopupTextOptions {
  /**
   * 设置文本内容。     
   * 
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   * 
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text?: ResourceStr;

  /**
   * 设置文本字体大小。
   * 
   * 默认值：`$r('sys.float.ohos_id_text_size_body2')` 
   * 
   * string类型可选值：可以转化为数字的字符串（如'10'）或带长度单位的字符串（如'10px'），不支持设置百分比字符串。
   * 
   * number：取值范围(0,+∞)。
   *
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSize?: number | string | Resource;

  /**
   * 设置文本字体颜色。
   * 
   * 默认值：`$r('sys.color.ohos_id_color_text_secondary')`
   *
   * @default $r('sys.color.ohos_id_color_text_secondary')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontColor?: ResourceColor;

  /**
   * 设置文本字体粗细。
   * 
   * number类型取值[100,900]，取值间隔为100，默认为400，取值越大，字体越粗。
   * 
   * string类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“bolder”、“lighter”、“regular” 、“medium”分别对应FontWeight中相应的枚举值。
   * 
   * 默认值：FontWeight.Regular
   *
   * @default FontWeight.Regular
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontWeight?: number | FontWeight | string;
}

/**
 * PopupButtonOptions定义按钮的相关属性和事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PopupButtonOptions {
  /**
   * 设置按钮内容。        
   * 
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。 
   * 
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text?: ResourceStr;

  /**
   * 设置按钮click回调。 
   * 
   * 默认不执行任何操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  action?: VoidCallback;

  /**
   * 设置按钮文本字体大小。 
   * 
   * 默认值：`$r('sys.float.ohos_id_text_size_button2')`
   * 
   * string类型可选值：可以转化为数字的字符串（如'10'）或带长度单位的字符串（如'10px'），不支持设置百分比字符串。
   * 
   * 设置值为异常值时取默认值。
   *
   * @default $r('sys.float.ohos_id_text_size_button2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSize?: number | string | Resource;

  /**
   * 设置按钮文本字体颜色。
   * 
   * 默认值：`$r('sys.color.ohos_id_color_text_primary_activated')`
   *
   * @default $r('sys.color.ohos_id_color_text_primary_activated')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontColor?: ResourceColor;
}

/**
 * PopupIconOptions定义图标的属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PopupIconOptions {
  /**
   * 设置图标内容。
   * 
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   * 
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  image?: ResourceStr;

  /**
   * 设置图标宽度。
   * 
   * 默认值：32VP
   *
   * @default 32.0_vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width?: Dimension;

  /**
   * 设置图标高度。
   * 
   * 默认值：32VP
   *
   * @default 32.0_vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height?: Dimension;

  /**
   * 设置图标填充颜色。仅针对svg图源生效。 
   * 
   * 默认不改变图标颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fillColor?: ResourceColor;

  /**
   * 设置图标圆角。
   * 
   * 默认值：`$r('sys.float.ohos_id_corner_radius_default_s')`
   *
   * @default $r('sys.float.ohos_id_corner_radius_default_s')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  borderRadius?: Length | BorderRadiuses;
}

/**
 * PopupOptions定义Popup的具体样式参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PopupOptions {
  /**
   * 设置popup图标。
   * 
   * **说明：**
   * 
   * 当width和height设置异常值或0时不显示。
   * 
   * 默认不显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: PopupIconOptions;

  /**
   * 设置popup标题文本。 
   * 
   * 默认不显示标题文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  title?: PopupTextOptions;

  /**
   * 设置popup内容文本。
   * 
   * **说明：**
   * 
   * message不支持设置fontWeight。 
   * 
   * 默认不显示内容文本。
   * 
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   * 
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  message?: PopupTextOptions;

  /**
   * 设置popup关闭按钮。
   * 
   * true：显示关闭按钮；false：不显示关闭按钮。
   * 
   * Resource：显示对应的图标。
   * 
   * 默认值：true
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showClose?: boolean | Resource;

  /**
   * 设置popup关闭按钮回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onClose?: VoidCallback;

  /**
   * 设置popup操作按钮，按钮最多设置两个。 
   * 
   * 默认不显示按钮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  buttons?: [
    PopupButtonOptions | undefined,
    PopupButtonOptions | undefined
  ];

  /**
   * 布局方向。
   * 
   * 默认值：Direction.Auto
   *
   * @default Direction.Auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  direction?: Direction;

  /**
   * 设置popup的最大宽度，通过此接口popup可以自定义宽度显示。
   * 
   * **说明：** 
   * 
   * 1. 在使用引用资源类型时，规定其参数类型要与属性方法本身类型一致。
   * 2. maxWidth是数字类型，支持float和integer，例如`$r('app.float.maxWidth')`、`$r('app.integer.maxWidth')`。
   * 3. 当类型为Resource时，如果未设置单位，默认单位为px。
   * 
   * 默认值：400vp
   *
   * @default 400.0_vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxWidth?: Dimension;
}

/**
 *
 * @param { PopupOptions } options - 定义Popup组件的类型。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Builder
export declare function Popup(options: PopupOptions): void;