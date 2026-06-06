/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * 作为Text组件的子组件，用于显示图标小符号的组件。
 * 
 * > **说明：**
 * 
 * > - 本模块接口仅可在Stage模型下使用。
 * >
 * > - 该组件支持继承父组件Text的属性，即如果子组件未设置属性且父组件设置属性，则继承父组件设置的全部属性。
 * >
 * > - SymbolSpan拖拽不会置灰显示。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form [since 12]
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface SymbolSpanInterface {
  /**
   *
   * 定义SymbolSpan组件构造函数。
   *
   * @param { Resource } value - SymbolSpan组件的资源名，如 $r('sys.symbol.ohos_wifi')。
   * @returns { SymbolSpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  (value: Resource): SymbolSpanAttribute;
}

/**
 * 不支持[通用属性]{@link common}，支持以下属性：
 * 
 * 不支持[通用事件]{@link common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form [since 12]
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare class SymbolSpanAttribute extends CommonMethod<SymbolSpanAttribute> {

  /**
   * 设置SymbolSpan组件大小。设置string类型时，支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { number | string | Resource } value - SymbolSpan组件大小。<br/>默认值：16fp<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * @returns { SymbolSpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize(value: number | string | Resource): SymbolSpanAttribute;

  /**
   * 设置SymbolSpan组件颜色。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Array<ResourceColor> } value - SymbolSpan组件颜色。<br/> 默认值：不同渲染策略下默认值不同。
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor(value: Array<ResourceColor>): SymbolSpanAttribute;

  /**
   * 设置SymbolSpan组件粗细。number类型取值[100,900]，取值间隔为100，默认为400，取值越大，字体越粗。string类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“bolder
   * ”、“lighter”、“regular” 、“medium”分别对应FontWeight中相应的枚举值。
   * 
   * sys.symbol.ohos_lungs图标不支持设置fontWeight。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { number | FontWeight | string } value - SymbolSpan组件粗细。<br/>默认值：FontWeight.Normal
   * @returns { SymbolSpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontWeight(value: number | FontWeight | string): SymbolSpanAttribute;

  /**
   * 设置SymbolSpan组件图标小符号的粗细，支持通过FontWeightConfigs配置是否开启可变字重调节、是否开启随设备的字体粗细级别自动更新字重。
   *
   * @param { number | FontWeight | ResourceStr } value - SymbolSpan组件图标小符号的粗细。<br/>number类型取值[100, 900]，取值间隔为100，默认为40
   *     0，取值越大，字体越粗。<br/>ResourceStr类型仅支持number类型取值的字符串形式，例如“400"，以及“bold”、“bolder”、“lighter”、“regular”、“medium”分别对应
   *     FontWeight中相应的枚举值。<br/>默认值：FontWeight.Normal
   * @param { FontWeightConfigs } [fontWeightConfigs] - 字体粗细配置。<br/>默认值继承
   *     [FontWeightConfigs](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#fontweightconfigs24对象说明)。
   * @returns { SymbolSpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr, fontWeightConfigs?: FontWeightConfigs): SymbolSpanAttribute;

  /**
   * 设置SymbolSpan动效策略。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { SymbolEffectStrategy } value - SymbolSpan动效策略。<br/>默认值：SymbolEffectStrategy.NONE
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  effectStrategy(value: SymbolEffectStrategy): SymbolSpanAttribute;

  /**
   * 设置SymbolSpan渲染策略。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { SymbolRenderingStrategy } value - SymbolSpan渲染策略。<br/>默认值：SymbolRenderingStrategy.SINGLE
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  renderingStrategy(value: SymbolRenderingStrategy): SymbolSpanAttribute;

  /**
   * 设置组件的动态属性。
   *
   * @param { AttributeModifier<SymbolSpanAttribute> } modifier - 动态设置组件的属性。
   * @returns { SymbolSpanAttribute } the attribute of the SymbolSpanAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  attributeModifier(modifier: AttributeModifier<SymbolSpanAttribute>): SymbolSpanAttribute;
}

/**
 * 作为Text组件的子组件，用于显示图标小符号的组件。
 * 
 * > **说明：**
 * 
 * > - 本模块接口仅可在Stage模型下使用。
 * >
 * > - 该组件支持继承父组件Text的属性，即如果子组件未设置属性且父组件设置属性，则继承父组件设置的全部属性。
 * >
 * > - SymbolSpan拖拽不会置灰显示。
 * 
 * ###### 子组件
 * 
 * 不支持子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form [since 12]
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare const SymbolSpan: SymbolSpanInterface;

/**
 * 定义SymbolSpan组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form [since 12]
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare const SymbolSpanInstance: SymbolSpanAttribute;