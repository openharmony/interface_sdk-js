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

/**
 * 列表左侧图标类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum IconTypeV2 {
  /**
   * 左侧图标为BADGE类型，图标大小为8*8vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BADGE = 1,
  /**
   * 左侧图标为小图标类型，图标大小为16*16vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  NORMAL_ICON = 2,
  /**
   * 左侧图标为系统图标类型，图标大小为24*24vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  SYSTEM_ICON = 3,
  /**
   * 左侧图标为头像类型，图标大小为40*40vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  HEAD_SCULPTURE = 4,
  /**
   * 左侧图标为应用图标类型，图标大小为64*64vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  APP_ICON = 5,
  /**
   * 左侧图标为预览图类型，图标大小为96*96vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  PREVIEW = 6,
  /**
   * 左侧图标为横向特殊比例（宽比高大），保持最长边为96vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  LONGITUDINAL = 7,
  /**
   * 左侧图标为竖向特殊比例（高比宽大），保持最长边为96vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  VERTICAL = 8
}
/**
 * 列表项右侧元素为图标/箭头，通过点击触发回调函数的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type OnActionCallback = () => void;
/**
 * 列表项右侧元素为Switch/CheckBox/Radio时，当状态发生改变时的回调函数对应的类型。
 *
 * @param { boolean } value - 列表项右侧元素Switch/CheckBox/Radio选中状态改变时的回调函数。
 *     <br>value为true时，表示从未选中变为选中。
 *     <br>value为false时，表示从选中变为未选中。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type OnChangeCallback = (value: boolean) => void;

/**
 * OperateIconV2构造函数的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface OperateIconV2Options {
  /**
   * 列表项右侧图标/箭头资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  value?: ResourceStr;

  /**
   * 列表项右侧Symbol图标/箭头资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * 列表项右侧图标/箭头点击事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action?: OnActionCallback;

  /**
   * 列表项右侧图标/箭头的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本
   * 的内容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。
   *
   * 默认值:""
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * 列表项右侧图标/箭头的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果
   * 组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值为"单指双击即可执行"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 列表项右侧图标/箭头的无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。
   *
   * 支持的值为:
   *
   * "auto":当前组件会转换"no"。
   *
   * "yes":当前组件可被无障碍辅助服务所识别。
   *
   * "no":当前组件不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants":当前组件及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值:"auto"
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * 列表项右侧图标元素的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class OperateIconV2 {
  /**
   * 列表项右侧图标/箭头资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public value: ResourceStr;

  /**
   * 列表项右侧Symbol图标/箭头资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public symbolStyle?: SymbolGlyphModifier;

  /**
   * 列表项右侧图标/箭头点击事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public action?: OnActionCallback;

  /**
   * 列表项右侧图标/箭头的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本
   * 的内容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。
   *
   * 默认值:""
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * 列表项右侧图标/箭头的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果
   * 组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值为"单指双击即可执行"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * 列表项右侧图标/箭头的无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。
   *
   * 支持的值为:
   *
   * "auto":当前组件会转换"no"。
   *
   * "yes":当前组件可被无障碍辅助服务所识别。
   *
   * "no":当前组件不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants":当前组件及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值:"auto"
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * OperateIconV2的构造函数。
   *
   * @param { OperateIconV2Options } [options] - 列表项右侧图标属性配置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: OperateIconV2Options);
}

/**
 * OperateCheckV2构造函数的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface OperateCheckV2Options {
  /**
   * 列表项右侧元素Switch/CheckBox/Radio选中状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isCheck?: boolean;

  /**
   * 列表项右侧元素Switch/CheckBox/Radio选中状态改变时触发回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onChange?: OnChangeCallback;

  /**
   * 列表项右侧元素Switch/CheckBox/Radio的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，
   * 当屏幕朗读选中此组件时播报无障碍文本的内容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。
   *
   * 默认值:""
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * 列表项右侧元素Switch/CheckBox/Radio的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件
   * 的属性和无障碍文本中直接获知时。如果组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认跟随基础组件Switch/CheckBox/Radio播报规则。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 列表项右侧元素Switch/CheckBox/Radio的无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。
   *
   * 支持的值为:
   *
   * "auto":当前组件会转换"no"。
   *
   * "yes":当前组件可被无障碍辅助服务所识别。
   *
   * "no":当前组件不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants":当前组件及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值:"auto"
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * 列表项右侧元素为Switch、CheckBox、Radio的类型。当列表项右侧元素需要使用Switch、CheckBox、Radio时，可通过该类型配置对应属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class OperateCheckV2 {
  /**
   * 列表项右侧元素Switch/CheckBox/Radio选中状态。
   *
   * isCheck默认值为false。
   *
   * isCheck为true时，表示为选中。
   *
   * isCheck为false时，表示为未选中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public isCheck?: boolean;

  /**
   * 列表项右侧元素Switch/CheckBox/Radio选中状态改变时触发回调。
   *
   * value为true时，表示从未选中变为选中。
   *
   * value为false时，表示从选中变为未选中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public onChange?: OnChangeCallback;

  /**
   * 列表项右侧元素Switch/CheckBox/Radio的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，
   * 当屏幕朗读选中此组件时播报无障碍文本的内容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。
   *
   * 默认值:""
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * 列表项右侧元素Switch/CheckBox/Radio的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件
   * 的属性和无障碍文本中直接获知时。如果组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认跟随基础组件Switch/CheckBox/Radio播报规则。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * 列表项右侧元素Switch/CheckBox/Radio的无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。
   *
   * 支持的值为:
   *
   * "auto":当前组件会转换"no"。
   *
   * "yes":当前组件可被无障碍辅助服务所识别。
   *
   * "no":当前组件不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants":当前组件及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值:"auto"
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * OperateCheckV2的构造函数。
   *
   * @param { OperateCheckV2Options } [options] - 列表项右侧元素为Switch、CheckBox、Radio属性配置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: OperateCheckV2Options);
}

/**
 * OperateButtonV2构造函数的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface OperateButtonV2Options {
  /**
   * 列表项右侧按钮文字。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  text?: ResourceStr;

  /**
   * 列表项右侧按钮的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本的内
   * 容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。
   *
   * 默认值:""
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * 列表项右侧按钮的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同
   * 时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值:"单指双击即可执行"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 列表项右侧按钮的无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。
   *
   * 支持的值为:
   *
   * "auto":当前组件会转换"no"。
   *
   * "yes":当前组件可被无障碍辅助服务所识别。
   *
   * "no":当前组件不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants":当前组件及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值:"auto"
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * 列表项右侧按钮元素的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class OperateButtonV2 {
  /**
   * 列表项右侧按钮文字。
   *
   * 默认值:""
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public text?: ResourceStr;

  /**
   * 列表项右侧按钮的无障碍文本属性。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本的内
   * 容，帮助屏幕朗读的使用者清楚地知道自己选中了什么组件。
   *
   * 默认值:""
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * 列表项右侧按钮的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同
   * 时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值:"单指双击即可执行"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * 列表项右侧按钮的无障碍重要性。用于控制当前项是否可被无障碍辅助服务所识别。
   *
   * 支持的值为:
   *
   * "auto":当前组件会转换"no"。
   *
   * "yes":当前组件可被无障碍辅助服务所识别。
   *
   * "no":当前组件不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants":当前组件及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值:"auto"
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * OperateButtonV2的构造函数。
   *
   * @param { OperateButtonV2Options } [options] - 列表项右侧按钮属性配置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: OperateButtonV2Options);
}

/**
 * ContentItemV2构造函数的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ContentItemV2Options {
  /**
   * 左侧元素的图标样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  iconStyle?: IconTypeV2;

  /**
   * 左侧元素的图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  icon?: ResourceStr;

  /**
   * 左侧元素的Symbol图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * 中间元素的标题内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  primaryText?: ResourceStr;

  /**
   * 中间元素的副标题内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  secondaryText?: ResourceStr;

  /**
   * 中间元素的描述内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  description?: ResourceStr;
}

/**
 * 列表左侧显示的图标、图标大小以及中间元素文字内容。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ContentItemV2 {
  /**
   * 左侧元素的图标样式。
   *
   * 默认不设置或设置为undefined，表示不显示icon图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public iconStyle?: IconTypeV2;

  /**
   * 左侧元素的图标资源。
   *
   * 默认不设置或设置为undefined，表示不显示icon图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public icon?: ResourceStr;

  /**
   * 左侧元素的Symbol图标资源，优先级大于icon，同时设置了icon和Symbol图标，只显示Symbol图标。
   *
   * 默认不设置或设置为undefined，Symbol图标不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public symbolStyle?: SymbolGlyphModifier;

  /**
   * 中间元素的标题内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public primaryText?: ResourceStr;

  /**
   * 中间元素的副标题内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public secondaryText?: ResourceStr;

  /**
   * 中间元素的描述内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public description?: ResourceStr;

  /**
   * ContentItemV2的构造函数。
   *
   * @param { ContentItemV2Options } [options] - 列表左侧属性配置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: ContentItemV2Options);
}

/**
 * OperateItemV2构造函数的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface OperateItemV2Options {
  /**
   * 左侧元素的图标资源。
   *
   * 默认不设置或设置为undefined，表示不显示icon图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  icon?: OperateIconV2;

  /**
   * 列表项右侧元素的第二个图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  subIcon?: OperateIconV2;

  /**
   * 列表项右侧元素为按钮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  button?: OperateButtonV2;

  /**
   * 列表项右侧元素为开关。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  toggle?: OperateCheckV2;

  /**
   * 列表项右侧元素为多选框。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  checkbox?: OperateCheckV2;

  /**
   * 列表项右侧元素为单选框。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  radio?: OperateCheckV2;

  /**
   * 列表项右侧元素为图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  image?: ResourceStr;

  /**
   * 列表项右侧元素为Symbol图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * 列表项右侧元素为文字。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  text?: ResourceStr;

  /**
   * 列表项右侧元素为箭头。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  arrow?: OperateIconV2;
}

/**
 * 列表项右侧显示的元素类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class OperateItemV2 {
  /**
   * 左侧元素的图标资源。
   *
   * 默认不设置或设置为undefined，表示不显示icon图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public icon?: OperateIconV2;

  /**
   * 列表项右侧元素的第二个图标，大小为24*24vp。
   *
   * 默认不设置或设置为undefined，列表项右侧第二个图标不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public subIcon?: OperateIconV2;

  /**
   * 列表项右侧元素为按钮。
   *
   * 默认不设置或设置为undefined，列表项右侧按钮不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public button?: OperateButtonV2;

  /**
   * 列表项右侧元素为开关。
   *
   * 默认不设置或设置为undefined，列表项右侧开关不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public toggle?: OperateCheckV2;

  /**
   * 列表项右侧元素为多选框，大小为24*24vp。
   *
   * 默认不设置或设置为undefined，列表项右侧多选框不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public checkbox?: OperateCheckV2;

  /**
   * 列表项右侧元素为单选框，大小为24*24vp。
   *
   * 默认不设置或设置为undefined，列表项右侧单选框不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public radio?: OperateCheckV2;

  /**
   * 列表项右侧元素为图片，大小为48*48vp。
   *
   * 默认不设置或设置为undefined，列表项右侧图片不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public image?: ResourceStr;

  /**
   * 列表项右侧元素为Symbol图标资源，大小为48*48vp。
   *
   * 默认不设置或设置为undefined，列表项右侧Symbol图标不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public symbolStyle?: SymbolGlyphModifier;

  /**
   * 列表项右侧元素为文字。
   *
   * 默认不设置或设置为undefined，列表项右侧文字不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public text?: ResourceStr;

  /**
   * 列表项右侧元素为箭头，大小为12*24vp。
   *
   * 默认不设置或设置为undefined，列表项右侧箭头不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public arrow?: OperateIconV2;

  /**
   * OperateItemV2的构造函数。
   *
   * @param { OperateItemV2Options } [options] - 列表项右侧属性配置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: OperateItemV2Options);
}

/**
 * 该组件用于展示一系列宽度相同的列表项，适用于展示连续、多行的同类数据组合（如图片与文本）。
 *
 * 该组件基于[状态管理（V2）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)实现，相较于
 * [状态管理（V1）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)，状态管理（V2）增强了对数据对象的深度观察与管理能力，不再局限于组
 * 件层级。借助状态管理（V2），开发者可以通过该组件更灵活地控制列表项的数据和状态，实现更高效的用户界面刷新。
 *
 * > **说明:**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果ComposeListItemV2设置[通用属性]{@link ./@internal/component/ets/common}和
 * > [通用事件]{@link ./@internal/component/ets/common}，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到
 * > ComposeListItemV2本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议ComposeListItemV2设置通用属性和通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
export declare struct ComposeListItemV2 {
  /**
   * 定义列表项左侧以及中间元素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  contentItemV2?: ContentItemV2;

  /**
   * 定义列表项右侧元素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  operateItemV2?: OperateItemV2;
}