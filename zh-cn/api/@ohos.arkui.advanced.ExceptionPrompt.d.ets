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
 * MarginType定义marginType的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export declare enum MarginType {
  /**
   * 默认边距：
   * 
   * 边距1：引用ohos_id_card_margin_start。
   * 
   * 边距2：引用ohos_id_card_margin_end。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DEFAULT_MARGIN = 0,

  /**
   * 可适配边距：
   * 
   * 边距1：引用ohos_id_max_padding_start。
   * 
   * 边距2：引用ohos_id_max_padding_end。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FIT_MARGIN = 1,
}

/**
 * PromptOptions定义options的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export interface PromptOptions {
  /**
   * 指定当前异常提示的异常图标样式。
   * 
   * 默认不设置或设置为undefined，异常图标不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon?: ResourceStr;

  /**
   * 指定当前异常提示的异常Symbol图标样式，优先级大于icon。
   * 
   * 默认不设置或设置为undefined，Symbol图标不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * 指定当前异常提示的文字提示内容。
   * 
   * 支持默认内置四种状态文字资源如下：
   * 
   * 1.无网络状态：显示网络未连接：引用ohos_network_not_connected。
   * 
   * 2.网络差状态：显示网络连接不稳定，请点击重试：引用ohos_network_connected_unstable。
   * 
   * 3.连不上服务器状态：显示无法连接到服务器，请点击重试：引用ohos_unstable_connect_server。
   * 
   * 4.有网但是获取不到内容状态：显示无法获取位置，请点击重试：引用ohos_custom_network_tips_left。
   * 
   * 默认不设置或设置为undefined，文字提示内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  tip?: ResourceStr;

  /**
   * 指定当前异常提示的边距样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  marginType: MarginType;

  /**
   * 指定当前异常提示的右侧图标按钮的文字内容。 
   * 
   * 默认不设置或设置为undefined，文字内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  actionText?: ResourceStr;

  /**
   * 指定当前异常提示的距离顶部的位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  marginTop: Dimension

  /**
   * 指定当前异常提示的显隐状态。
   * 
   * true：显示状态。
   * 
   * false：隐藏状态。
   * 
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  isShown?: boolean
}

/**
 * 异常提示，适用于有异常需要提示异常内容的情况。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果ExceptionPrompt设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，
 * > 编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到ExceptionPrompt本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议
 * > ExceptionPrompt设置通用属性和通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
@Component
export declare struct ExceptionPrompt {

  /**
   * 指定当前异常提示的配置信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  @Prop options: PromptOptions;

  /**
   * 点击左侧提示文本的回调函数，缺省时不执行任何操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onTipClick?: () => void;

  /**
   * 点击右侧图标按钮的回调函数。缺省时不执行任何操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onActionTextClick?: () => void;

  /**
   * The build function is a member function that must return an ArkTS component type (Element) to represent the 
   * component to be rendered as a user interface.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  build(): void;
}