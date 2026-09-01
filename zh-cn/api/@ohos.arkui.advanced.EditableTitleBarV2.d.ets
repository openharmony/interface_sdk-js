/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * 点击事件的回调函数类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type OnActionCallback = () => void;

/**
 * 左侧图标类型枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum EditableLeftIconTypeV2 {
  /**
   * 返回图标类型。点击时默认执行路由返回操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  Back = 0,

  /**
   * 取消图标类型。点击时无默认操作，需自定义回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  Cancel = 1
}

/**
 * 左侧图标配置选项接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface EditableLeftIconV2Options {
  /**
   * 图标类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  iconType?: EditableLeftIconTypeV2;

  /**
   * 是否默认获取焦点。
   * 
   * true：获焦。
   * 
   * false：不获焦。
   * 
   * 默认值：false。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  defaultFocus?: boolean;

  /**
   * 点击左侧图标的回调函数。未设置时，Back类型默认执行路由返回，Cancel类型无操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onAction?: OnActionCallback;
}

/**
 * 左侧图标配置类，使用@ObservedV2装饰器，支持状态观察。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class EditableLeftIconV2 {
  /**
   * 图标类型。
   * 
   * 默认值：EditableLeftIconTypeV2.Back。
   *
   * @default EditableLeftIconTypeV2.Back
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public iconType: EditableLeftIconTypeV2;

  /**
   * 是否默认获取焦点。
   * 
   * true：获焦。
   * 
   * false：不获焦。
   * 
   * 默认值：false。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public defaultFocus: boolean;

  /**
   * 点击左侧图标的回调函数。未设置时，Back类型默认执行路由返回，Cancel类型无操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public onAction?: OnActionCallback;

  /**
   * EditableLeftIconV2的构造函数。
   *
   * @param { EditableLeftIconV2Options } [options] - 左侧图标配置选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: EditableLeftIconV2Options);
}

/**
 * 标题配置选项接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface EditableTitleV2Options {
  /**
   * 主标题内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  mainTitle?: ResourceStr;

  /**
   * 副标题内容。需要在标题下方显示补充说明信息时传入此参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  subTitle?: ResourceStr;
}

/**
 * 标题配置类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class EditableTitleV2 {
  /**
   * 主标题内容。
   * 
   * 默认值：''，表示标题内容为空。
   *
   * @default ''
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public mainTitle: ResourceStr;

  /**
   * 副标题内容。需要在标题下方显示补充说明信息时传入此参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public subTitle?: ResourceStr;

  /**
   * EditableTitleV2的构造函数。
   *
   * @param { EditableTitleV2Options } [options] - 标题配置选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: EditableTitleV2Options);
}

/**
 * 菜单项配置选项接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface EditableTitleBarMenuItemV2Options {
  /**
   * 图标资源，支持Symbol类型图标或Image类型图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  value?: ResourceStr;

  /**
   * Symbol图标样式修饰器，优先级大于value。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * 是否启用。
   * 
   * 默认值：true，表示启用。
   * 
   * isEnabled为false时，表示禁用。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isEnabled?: boolean;

  /**
   * 长按对话框的标签文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  label?: ResourceStr;

  /**
   * 点击菜单项的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action?: OnActionCallback;

  /**
   * 可访问性级别，用于控制当前项是否可被无障碍辅助服务所识别。
   * 
   * 支持的值为：
   * 
   * "auto"：当前组件会转换为"yes"。
   * 
   * "yes"：当前组件可被无障碍辅助服务所识别。
   * 
   * "no"：当前组件不可被无障碍辅助服务所识别。
   * 
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   * 
   * 默认值："auto"
   *
   * @default 'auto'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityLevel?: string;

  /**
   * 屏幕阅读器的可访问性文本。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本的内容。
   * 
   * 默认值：有label时默认值为当前项label属性内容，没有设置label时，默认值为" "。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * 可访问性描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。如果组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属
   * 性，随后播报无障碍说明属性的内容。
   * 
   * 默认值："单指双击即可执行"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 是否默认获取焦点。
   * 
   * true：获焦。
   * 
   * false：不获焦。
   * 
   * 默认值：false。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  defaultFocus?: boolean;
}

/**
 * 菜单项配置类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class EditableTitleBarMenuItemV2 {
  /**
   * 图标资源，支持Symbol或Image。
   * 
   * 默认值：''。
   *
   * @default ''
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public value: ResourceStr;

  /**
   * Symbol图标样式修饰器，优先级大于value。
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
   * 是否启用。
   * 
   * 默认值：true，表示启用。
   * 
   * isEnabled为false时，表示禁用。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public isEnabled: boolean;

  /**
   * 长按对话框的标签文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public label?: ResourceStr;

  /**
   * 点击菜单项的回调函数。
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
   * 可访问性级别，用于控制当前项是否可被无障碍辅助服务所识别。
   * 
   * 支持的值为：
   * 
   * "auto"：当前组件会转换为"yes"。
   * 
   * "yes"：当前组件可被无障碍辅助服务所识别。
   * 
   * "no"：当前组件不可被无障碍辅助服务所识别。
   * 
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   * 
   * 默认值："auto"。
   *
   * @default 'auto'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityLevel: string;

  /**
   * 屏幕阅读器的可访问性文本。当组件不包含文本属性时，屏幕朗读选中此组件时不播报，使用者无法清楚地知道当前选中了什么组件。为了解决此场景，开发人员可为不包含文字信息的组件设置无障碍文本，当屏幕朗读选中此组件时播报无障碍文本的内容。
   * 
   * 默认值：有label时默认值为当前项label属性内容，没有设置label时，默认值为" "。
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
   * 可访问性描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。如果组件同时具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属
   * 性，随后播报无障碍说明属性的内容。
   * 
   * 默认值："单指双击即可执行"。
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
   * 是否默认获取焦点。
   * 
   * true：获焦。
   * 
   * false：不获焦。
   * 
   * 默认值：false。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public defaultFocus: boolean;

  /**
   * EditableTitleBarMenuItemV2的构造函数。
   *
   * @param { EditableTitleBarMenuItemV2Options } [options] - 菜单项配置选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: EditableTitleBarMenuItemV2Options);
}

/**
 * 左侧图像项类型别名。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export type EditableTitleBarItemV2 = EditableTitleBarMenuItemV2;

/**
 * 左侧图像项配置选项类型别名。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export type EditableTitleBarItemV2Options = EditableTitleBarMenuItemV2Options;

/**
 * 保存按钮配置选项接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface EditableSaveButtonV2Options {
  /**
   * 是否显示保存按钮。
   * 
   * true：显示保存按钮。
   * 
   * false：不显示保存按钮。
   * 
   * 默认值：true。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isRequired?: boolean;

  /**
   * 是否默认获取焦点。
   * 
   * true：获焦。
   * 
   * false：不获焦。
   * 
   * 默认值：false。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  defaultFocus?: boolean;

  /**
   * 点击保存按钮的回调函数。未设置时点击按钮无响应。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onAction?: OnActionCallback;
}

/**
 * 保存按钮配置类，使用@ObservedV2装饰器，支持状态观察。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class EditableSaveButtonV2 {
  /**
   * 是否显示保存按钮。
   * 
   * true：显示保存按钮。
   * 
   * false：不显示保存按钮。
   * 
   * 默认值：true。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public isRequired: boolean;

  /**
   * 是否默认获取焦点。
   * 
   * true：获焦。
   * 
   * false：不获焦。
   * 
   * 默认值：false。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public defaultFocus: boolean;

  /**
   * 点击保存按钮的回调函数。未设置时点击按钮无响应。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public onAction?: OnActionCallback;

  /**
   * EditableSaveButtonV2的构造函数。
   *
   * @param { EditableSaveButtonV2Options } [options] - 保存按钮配置选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: EditableSaveButtonV2Options);
}

/**
 * 标题栏样式配置选项接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface EditableTitleBarStyleV2Options {
  /**
   * 标题栏背景色。
   * 
   * 默认值：'#00000000'，表示背景透明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * 标题栏背景模糊样式。
   * 
   * 默认值：BlurStyle.NONE，表示无模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * 扩展安全区域的类型。
   * 
   * 默认值：[SafeAreaType.SYSTEM]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  safeAreaTypes?: Array<SafeAreaType>;

  /**
   * 扩展安全区域的方向。
   * 
   * 默认值：[SafeAreaEdge.TOP]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  safeAreaEdges?: Array<SafeAreaEdge>;

  /**
   * 标题栏外边距，不支持设置负数。
   * 
   * 默认值：
   * 
   * {
   * 
   * start: LengthMetrics.resource($r('sys.float.margin_left')),
   * 
   * end: LengthMetrics.resource($r('sys.float.margin_right'))
   * 
   * }。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  contentMargin?: LocalizedMargin;
}

/**
 * 标题栏样式配置类，使用@ObservedV2装饰器，支持状态观察。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class EditableTitleBarStyleV2 {
  /**
   * 标题栏背景色。
   * 
   * 默认值：'#00000000'。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public backgroundColor?: ResourceColor;

  /**
   * 标题栏背景模糊样式。
   * 
   * 默认值：BlurStyle.NONE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public backgroundBlurStyle?: BlurStyle;

  /**
   * 扩展安全区域的类型。
   * 
   * 默认值：[SafeAreaType.SYSTEM]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public safeAreaTypes?: Array<SafeAreaType>;

  /**
   * 扩展安全区域的方向。
   * 
   * 默认值：[SafeAreaEdge.TOP]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public safeAreaEdges?: Array<SafeAreaEdge>;

  /**
   * 标题栏外边距，不支持设置负数。
   * 
   * 默认值：
   * 
   * {
   * 
   * start: LengthMetrics.resource($r('sys.float.margin_left')),
   * 
   * end: LengthMetrics.resource($r('sys.float.margin_right'))
   * 
   * }。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public contentMargin?: LocalizedMargin;

  /**
   * EditableTitleBarStyleV2的构造函数。
   *
   * @param { EditableTitleBarStyleV2Options } [options] - 标题栏样式配置选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(options?: EditableTitleBarStyleV2Options);
}

/**
 * 编辑型标题栏，适用于多选界面或内容编辑界面，一般采取左叉右勾的形式。
 * 
 * 该组件基于[状态管理（V2）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)实现，相较于
 * [状态管理（V1）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)，状态管理（V2）增强了对数据对象的深度观察与管理能力，不再局限于组
 * 件层级。借助状态管理（V2），开发者可以通过该组件更灵活地控制编辑型标题栏的数据和状态，实现更高效的用户界面刷新。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果EditableTitleBarV2设置[通用属性]{@link ./@internal/component/ets/common}和
 * > [通用事件]{@link ./@internal/component/ets/common}，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到
 * > EditableTitleBarV2本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议EditableTitleBarV2设置通用属性和通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
export declare struct EditableTitleBarV2 {
  /**
   * 左侧图标配置。需要在标题栏左侧显示返回或取消图标时传入此参数，不传入时取默认值，不显示左侧图标。
   * 
   * 默认值：undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  leftIcon?: EditableLeftIconV2;

  /**
   * 标题内容，支持字符串或对象形式配置。传入字符串时仅显示主标题，传入EditableTitleV2对象时可同时配置主标题和副标题。
   * 
   * 默认值：new EditableTitleV2()，表示标题内容为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  title: ResourceStr | EditableTitleV2;

  /**
   * 用于左侧头像的单个菜单项。需要在标题栏左侧显示头像时传入此参数，不传入时取默认值，不显示头像。
   * 
   * 默认值：undefined。
   * 
   * **说明：** 左侧头像不支持配置无障碍属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  imageItem?: EditableTitleBarItemV2;

  /**
   * 右侧菜单项列表。需要在标题栏右侧显示自定义操作按钮时传入此参数，不传入时取默认值，不显示右侧菜单项列表。
   * 
   * **说明：** 最多支持配置3个菜单项，如果同时配置保存按钮，则最多支持2个菜单项。
   * 
   * 默认值：undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  menuItems?: Array<EditableTitleBarMenuItemV2>;

  /**
   * 保存按钮配置。需要对标题栏右侧保存按钮的控制显示或隐藏状态、设置默认焦点、或者设置保存回调函数时传入此参数，不传入时取默认值，显示保存按钮。
   * 
   * 默认值：undefined，显示保存按钮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  saveButton?: EditableSaveButtonV2;

  /**
   * 标题栏样式和布局配置。需要自定义标题栏背景、安全区域、边距等样式时传入此参数。
   * 
   * 默认值：new EditableTitleBarStyleV2()。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  options: EditableTitleBarStyleV2;
}