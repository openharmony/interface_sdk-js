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
 * 提供分割线组件，分割不同内容块/内容元素。
 * 
 * > **说明：**
 * 
 * > 如果出现分割线粗细不一或者消失的问题，请参考
 * > [组件级像素取整常见问题](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-pixelRoundForComponent.md#常见问题)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @noninterop
 * @since 7 dynamic
 */
interface DividerInterface {
    /**
     * 创建分割线组件。
     *
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    (): DividerAttribute;
  }
  
  /**
   * 除支持[通用属性]{@link common}外，还支持以下属性：
   * 
   * 支持[通用事件]{@link common}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @noninterop
   * @since 7 dynamic
   */
  declare class DividerAttribute extends CommonMethod<DividerAttribute> {
    /**
     * 设置分割线的方向，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
     *
     * @param { boolean } value - 使用水平分割线还是垂直分割线。<br/>false：水平分割线；true：垂直分割线。<br/>默认值：false <br />非法值：按默认值处理。
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    vertical(value: boolean): DividerAttribute;
  
    /**
     * 设置分割线的颜色，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
     *
     * @param { ResourceColor } value - 分割线颜色。<br/>默认值：'#33182431' <br />非法值：按默认值处理。 <br/>支持通过
     *     [WithTheme]{@link with_theme}设置通用分割线颜色。
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    color(value: ResourceColor): DividerAttribute;
  
    /**
     * 设置分割线的宽度，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
     * 
     * > **说明：**
     * >
     * > - 分割线的宽度不支持百分比设置。
     * >
     * > - 使用水平分割线时，strokeWidth控制高度，优先级低于通用属性[height]{@link CommonMethod#height(value: Length)}；使用垂直分割线时，strokeWidth控制宽度，优
     * > 先级低于通用属性[width]{@link CommonMethod#width(value: Length)}。
     * >
     * > - 超过通用属性设置大小时，按照通用属性进行裁切。
     * >
     * > - 如果设备硬件存在1像素取整后分割线不显示问题，建议使用2像素。
     *
     * @param { number | string } value - 分割线宽度。<br/>默认值：1px  <br />非法值：按默认值处理。 <br/>单位：vp
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    strokeWidth(value: number | string): DividerAttribute;
  
    /**
     * 设置分割线的端点样式，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
     *
     * @param { LineCapStyle } value - 分割线的端点样式。<br/>默认值：LineCapStyle.Butt <br />非法值：按默认值处理。
     * @returns { DividerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    lineCap(value: LineCapStyle): DividerAttribute;
  }
  
  /**
   * 提供分割线组件，分割不同内容块/内容元素。
   * 
   * > **说明：**
   * 
   * > 如果出现分割线粗细不一或者消失的问题，请参考
   * > [组件级像素取整常见问题](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-pixelRoundForComponent.md#常见问题)。
   * 
   * ###### 子组件
   * 
   * 无
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @noninterop
   * @since 7 dynamic
   */
  declare const Divider: DividerInterface;
  
  /**
   * Defines Divider Component instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @noninterop [since 11]
   */
  declare const DividerInstance: DividerAttribute;