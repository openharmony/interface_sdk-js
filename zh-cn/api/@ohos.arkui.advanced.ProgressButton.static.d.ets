'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 */
import { Component } from '@ohos.arkui.component';
import { PropRef } from '@ohos.arkui.stateManagement';
import { ResourceColor, ResourceStr, Length } from '@ohos.arkui.component';
import { Builder } from '@ohos.arkui.component';
import { LengthMetrics } from 'arkui.Graphics';
/**
 * 文本下载按钮，可显示具体的下载进度。
 *
 * 设备行为差异：该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。
 *
 * > **说明：**
 * >
 * > - 如果ProgressButton设置[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)和[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到ProgressButton本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议ProgressButton设置通用属性和通用事件。
 *
 * @struct { ProgressButton }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct ProgressButton {
  /**
   * 下载按钮的当前进度值。<br/>取值范围：[0,100]。设置小于0的数值时置为0，设置大于100的数值置为100。<br/>默认值：0
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  progress: double;
  /**
   * 下载按钮的文本。
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  content: ResourceStr;
  /**
   * 下载按钮的宽度。<br/>默认值：44vp
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  progressButtonWidth?: Length;
  /**
   * 下载按钮的点击回调。
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  clickCallback: () => void;
  /**
   * 下载按钮是否可以点击。<br> true：可以点击。<br> false：不可点击。
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  enable: boolean;
  /**
   * 下载按钮颜色选项。
   *
   * @type { ?ProgressButtonColorOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  colorOptions?: ProgressButtonColorOptions;
  /**
   * 下载按钮的圆角（不支持百分比设置）。<br/>取值范围：[0, height/2]<br/>默认值：height/2<br/>设置非法数值时，按照默认值处理。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  progressButtonRadius?: LengthMetrics;
  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}
/**
 * 下载按钮色彩信息选项。
 *
 * 设备行为差异：该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。
 *
 * @typedef ProgressButtonColorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ProgressButtonColorOptions {
  /**
   * 进度条颜色。<br/>默认值：#330A59F7
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  progressColor?: ResourceColor;
  /**
   * 按钮描边颜色。<br/>默认值：#330A59F7
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  borderColor?: ResourceColor;
  /**
   * 按钮文本颜色。<br/>默认值：系统默认值(#CE000000)
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  textColor?: ResourceColor;
  /**
   * 按钮背景颜色。<br/>默认值：\$r('sys.color.ohos_id_color_foreground_contrary')
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundColor?: ResourceColor;
}
