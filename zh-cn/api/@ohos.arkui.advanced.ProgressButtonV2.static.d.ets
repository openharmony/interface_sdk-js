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
import { ComponentV2 } from '@ohos.arkui.component';
import { Require, Param, Once, Trace, ObservedV2 } from '@ohos.arkui.stateManagement';
import { ResourceStr } from '@ohos.arkui.component';
import { Builder } from '@ohos.arkui.component';
import { LengthMetrics, ColorMetrics } from './arkui/Graphics';
/**
 * 文本下载按钮，可显示具体的下载进度。
 *
 * 该组件基于[状态管理（V2）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)实现，相较于[状态管理（V1）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)，状态管理（V2）增强了对数据对象的深度观察与管理能力，不再局限于组件层级。借助状态管理（V2），开发者可以通过该组件更灵活地控制文本下载按钮的数据和状态，实现更高效的用户界面刷新。
 *
 * 设备行为差异：该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。
 *
 * > **说明：**
 * >
 * > - 如果ProgressButtonV2设置[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)和[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到ProgressButtonV2本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议ProgressButtonV2设置通用属性和通用事件。
 *
 * @struct { ProgressButtonV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct ProgressButtonV2 {
  /**
   * 下载按钮的当前进度值。<br/>取值范围：[0,100]。设置小于0的数值时置为0，设置大于100的数值置为100。<br/>默认值：0
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Require
  @Param
  readonly progress: double;
  /**
   * 下载按钮的文本。
   *
   * @type { ResourceStr }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Require
  @Param
  readonly content: ResourceStr;
  /**
   * 下载按钮的宽度。<br/>默认值：44vp
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  @Once
  progressButtonWidth?: LengthMetrics;
  /**
   * 下载按钮的点击回调。
   *
   * @type { ClickCallback }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  readonly onClicked: ClickCallback;
  /**
   * 下载按钮是否可以点击。<br> true：可以点击。<br> false：不可点击。
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  readonly isEnabled: boolean;
  /**
   * 下载按钮颜色选项。
   *
   * @type { ?ProgressButtonV2Color }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  colorOptions?: ProgressButtonV2Color;
  /**
   * 下载按钮的圆角（不支持百分比设置）。<br/>取值范围：[0, height/2]<br/>默认值：height/2<br/>设置非法数值时，按照默认值处理。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Param
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
 * 下载按钮颜色选项。
 *
 * 设备行为差异：该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class ProgressButtonV2Color {
  /**
   * 进度条颜色。<br/>默认值：#330A59F7<br/>装饰器类型：@Trace
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public progressColor?: ColorMetrics;
  /**
   * 按钮描边颜色。<br/>默认值：#330A59F7<br/>装饰器类型：@Trace
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public borderColor?: ColorMetrics;
  /**
   * 按钮文本颜色。<br/>默认值：系统默认值，#CE000000<br/>装饰器类型：@Trace
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public textColor?: ColorMetrics;
  /**
   * 按钮背景颜色。<br/>默认值：\$r('sys.color.ohos_id_color_foreground_contrary')<br/>装饰器类型：@Trace
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public backgroundColor?: ColorMetrics;
  /**
   * 下载按钮颜色选项构造函数。
   *
   * 设备行为差异：该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。
   *
   * @param { ProgressButtonV2ColorOptions } options - 色彩信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(options: ProgressButtonV2ColorOptions);
}
/**
 * 下载按钮的点击回调。
 *
 * 设备行为差异：该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。
 * @typedef { function } ClickCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type ClickCallback = () => void;
/**
 * 下载按钮色彩信息选项。
 *
 * 设备行为差异：该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。
 * @typedef ProgressButtonV2ColorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ProgressButtonV2ColorOptions {
  /**
   * 进度条颜色。<br/>默认值：#330A59F7
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  progressColor?: ColorMetrics;
  /**
   * 按钮描边颜色。<br/>默认值：#330A59F7
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  borderColor?: ColorMetrics;
  /**
   * 按钮文本颜色。<br/>默认值：系统默认值(#CE000000)
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  textColor?: ColorMetrics;
  /**
   * 按钮背景颜色。<br/>默认值：\$r('sys.color.ohos_id_color_foreground_contrary')
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundColor?: ColorMetrics;
}
