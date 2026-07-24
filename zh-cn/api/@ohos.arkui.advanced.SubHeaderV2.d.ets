/*
  * Copyright (c) 2024 Huawei Device Co., Ltd.
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
  * limitations under the License.@
  */

/**
 * @file api/@ohos.arkui.advanced.SubHeaderV2.d.ts
 * @kit ArkUI
 */
import { TextModifier as TextModifier } from '@ohos.arkui.modifier';

/**
 * SubHeaderV2IconType
 *
 * @typedef { ResourceStr | SymbolGlyphModifier } SubHeaderV2IconType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type SubHeaderV2IconType = ResourceStr | SymbolGlyphModifier;

/**
 * 用于构建SubHeaderV2Title对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export interface SubHeaderV2TitleOptions {
  /**
   * 标题内容。
   * 
   * 当[SubHeaderV2]{@link SubHeaderV2}中同时使用primaryTitle、secondaryTitle、icon属性时，primaryTitle将不会显示。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  primaryTitle?: ResourceStr;
  /**
   * 设置标题文本属性，如设置主标题颜色、字体大小、字重等。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  primaryTitleModifier?: TextModifier;
  /**
   * 副标题内容。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  secondaryTitle?: ResourceStr;
  /**
   * 设置副标题文本属性，如设置副标题颜色、字体大小、字重等。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  secondaryTitleModifier?: TextModifier;
  /**
   * 设置标题自定义朗读内容。
   * 
   * 默认值：undefined
   * 
   * 值为undefined时，默认朗读组件显示的标题内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  titleAccessibilityText?: ResourceStr;
  /**
   * 标题id。需要为标题设置id的时候设置此参数，缺省时不设置此参数。
   * 
   * 默认值：undefined，表示不设置标题id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  id?: string;
}
/**
 * 标题设置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ObservedV2
export declare class SubHeaderV2Title {
  /**
   * The first line text of content area.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  primaryTitle?: ResourceStr;
  /**
   * Text modifier for primary title.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  primaryTitleModifier?: TextModifier;
  /**
   * The secondary line text of content area.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  secondaryTitle?: ResourceStr;
  /**
   * Text modifier for secondary title.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  secondaryTitleModifier?: TextModifier;

  /**
   * 设置标题自定义朗读内容。
   * 
   * 默认值：undefined
   * 
   * 值为undefined时，默认朗读组件显示的标题内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  @Trace
  titleAccessibilityText?: ResourceStr;

  /**
   * 标题id。需要为标题设置id的时候设置此参数，缺省时不设置此参数。
   * 
   * 默认值：undefined，表示不设置标题id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  @Trace
  id?: string;

  /**
   * 标题内容信息SubHeaderV2Title构造函数。
   *
   * @param { SubHeaderV2TitleOptions } options - 标题内容信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: SubHeaderV2TitleOptions);
}

/**
 * 下拉菜单选中某一项的回调类型。
 *
 * @param { number } selectedIndex - 选中的下拉菜单项的索引值，索引从0开始计数。
 * @param { ?string } selectedContent - 选中的下拉菜单项的文本内容，即用户选择的菜单项显示的文本。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export type SubHeaderV2SelectOnSelect = (selectedIndex: number, selectedContent?: string) => void;

/**
 * 用于构建SubHeaderV2Select对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export interface SubHeaderV2SelectOptions {
  /**
   * 下拉选项内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  options: SelectOption[];
  /**
   * 设置下拉菜单初始选项的索引。
   * 
   * 第一项的索引为0。
   * 
   * 当不设置selectedIndex属性时，
   * 
   * 默认选择值为-1，菜单项不选中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedIndex?: number;
  /**
   * 设置下拉按钮本身的文本内容。默认值：''。从API version 20开始，支持Resource类型。
   *
   * @type { ?string } [since 18 - 19]
   * @type { ?ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedContent?: ResourceStr;
  /**
   * 下拉菜单选中某一项的回调。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onSelect?: SubHeaderV2SelectOnSelect;
  /**
   * 下拉按钮是否为默认焦点。
   * 
   * true：下拉按钮是默认焦点。
   * 
   * false：下拉按钮不是默认焦点。
   * 
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  defaultFocus?: boolean;
  /**
   * 下拉按钮id。需要为下拉按钮设置id的时候设置此参数，缺省时不设置此参数。
   * 
   * 默认值：undefined，表示不设置下拉按钮id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  id?: string;
}

/**
 * 下拉选择器配置项，包含下拉选项内容、选中状态及回调事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ObservedV2
export declare class SubHeaderV2Select {
  /**
   * Sets the options of the SubHeaderV2SelectOptions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  options: SelectOption[];
  /**
   * Sets the selected index of the SubHeaderV2SelectOptions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  selectedIndex?: number;
  /**
   *
   * @type { ?string } [since 18 - 19]
   * @type { ?ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  selectedContent?: ResourceStr;
  /**
   * Sets the onSelect of the SubHeaderV2SelectOptions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  onSelect?: SubHeaderV2SelectOnSelect;
  /**
   * 下拉按钮是否为默认焦点。
   * 
   * true：下拉按钮是默认焦点。
   * 
   * false：下拉按钮不是默认焦点。
   * 
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  defaultFocus?: boolean;

  /**
   * 下拉按钮id。需要为下拉按钮设置id的时候设置此参数，缺省时不设置此参数。
   * 
   * 默认值：undefined，表示不设置下拉按钮id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  @Trace
  id?: string;

  /**
   * select内容以及事件构造函数。
   *
   * @param { SubHeaderV2SelectOptions } options - 下拉选项信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: SubHeaderV2SelectOptions);

  /**
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  /**
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  @Trace selectedContent?: ResourceStr;
}

/**
 * 操作区元素样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare enum SubHeaderV2OperationType {
  /**
   * 文本按钮（带右箭头）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  TEXT_ARROW = 0,
  /**
   * 文本按钮（不带右箭头）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  BUTTON = 1,
  /**
   * 图标按钮（最多支持配置三张图标）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ICON_GROUP = 2,
  /**
   * 加载动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  LOADING = 3
}

/**
 * 操作区设置项的回调事件类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export type SubHeaderV2OperationItemAction = () => void;

/**
 * SubHeaderV2OperationItemType
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type SubHeaderV2OperationItemType = ResourceStr | SymbolGlyphModifier;

/**
 * 用于构建SubHeaderV2OperationItem对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export interface SubHeaderV2OperationItemOptions {
  /**
   * 操作项显示的内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  content: SubHeaderV2OperationItemType;
  /**
   * 选项操作事件回调，点击操作项时触发，用于执行自定义操作。默认值：() => void。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  action?: SubHeaderV2OperationItemAction;
  /**
   * 子标题右侧操作项无障碍描述。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;
  /**
   * 子标题右侧操作项无障碍说明，用于为用户进一步说明当前组件。
   * 
   * 默认值：“单指双击即可执行”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;
  /**
   * 子标题右侧操作项无障碍重要性。
   * 
   * 支持的值为：
   * 
   * "auto"：当前子标题右侧操作项由无障碍分组服务和ArkUI进行综合判断是否可被无障碍辅助服务所识别。
   * 
   * "yes"：当前子标题右侧操作项可被无障碍辅助服务所识别。
   * 
   * "no"：当前子标题右侧操作项不可被无障碍辅助服务所识别。
   * 
   * "no-hide-descendants"：当前子标题右侧操作项及其所有子组件不可被无障碍辅助服务所识别。
   * 
   * 默认值：“yes”。
   *
   * @default "auto".The options are as follows:<br/>
   *     "auto":The value is converted to "yes" or "no" based on the component.
   *     "yes": the current component is selectable for the accessibility service.
   *     "no": The current component is not selectable for the accessibility service.
   *     "no-hide-descendants":The current component and all its child components are not selectable<br/>
   *     for the accessibility service.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;
  /**
   * 子标题右侧操作项是否为默认焦点。
   * 
   * true：子标题右侧操作项是默认焦点。
   * 
   * false：子标题右侧操作项不是默认焦点。
   * 
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  defaultFocus?: boolean;
  /**
   * 子标题右侧操作项id。需要为子标题右侧操作项设置id的时候设置此参数，缺省时不设置此参数。
   * 
   * 默认值：undefined，表示不设置子标题右侧操作项id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  id?: string;
}

/**
 * 操作区的设置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ObservedV2
export declare class SubHeaderV2OperationItem {
  /**
   * The content of text or the address of icon.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  content: SubHeaderV2OperationItemType;
  /**
   * callback function when operate the text or icon.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  action?: SubHeaderV2OperationItemAction;
  /**
   * 操作项SubHeaderV2OperationItem的构造函数。
   *
   * @param { SubHeaderV2OperationItemOptions } options - 操作项配置信息。用于构建SubHeaderV2OperationItem对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: SubHeaderV2OperationItemOptions);
  /**
   * The accessibilityText of this text or icon.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  accessibilityText?: ResourceStr;
  /**
   * The accessibilityDescription of this text or icon.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  accessibilityDescription?: ResourceStr;
  /**
   * The accessibilityLevel of this text or icon.
   * @default "auto".The options are as follows:<br/>
   *     "auto":The value is converted to "yes" or "no" based on the component.
   *     "yes": the current component is selectable for the accessibility service.
   *     "no": The current component is not selectable for the accessibility service.
   *     "no-hide-descendants":The current component and all its child components are not selectable<br/>
   *     for the accessibility service.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  accessibilityLevel?: string;
  /**
   * Sets the default focus state of the text or icon.
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  defaultFocus?: boolean;

  /**
   * 子标题右侧操作项id。需要为子标题右侧操作项设置id的时候设置此参数，缺省时不设置此参数。
   * 
   * 默认值：undefined，表示不设置子标题右侧操作项id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  @Trace
  id?: string;
}

/**
 * 自定义标题区内容的回调事件类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export type SubHeaderV2TitleBuilder = () => void;

/**
 * 子标题，用于列表项或内容项顶部，将该列表或内容划分为一个区块，子标题名称用来概括该区块内容。
 * 
 * 该组件基于[状态管理（V2）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)实现，相较于
 * [状态管理（V1）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)，状态管理（V2）增强了对数据对象的深度观察与管理能力，不再局限于组
 * 件层级。借助状态管理（V2），开发者可以通过该组件更灵活地控制子标题的数据和状态，实现更高效的用户界面刷新。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果SubHeaderV2设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，编译工具
 * > 链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到SubHeaderV2本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议SubHeaderV2设
 * > 置通用属性和通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ComponentV2
export declare struct SubHeaderV2 {
  /**
   * 图标设置项，用于为子标题添加图标标识。
   * 
   * 默认值：undefined
   * 
   * 当title使用secondaryTitle属性时，设置icon属性才会生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly icon?: SubHeaderV2IconType;
  /**
   * 标题设置项。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly title?: SubHeaderV2Title;
  /**
   * 下拉选择器的配置项，包含下拉选项内容、选中状态及回调事件。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly select?: SubHeaderV2Select;
  /**
   * 操作区元素样式，用于定义子标题右侧操作按钮的显示形式。
   * 
   * 默认值：SubHeaderV2OperationType.BUTTON
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly operationType?: SubHeaderV2OperationType;
  /**
   * 操作区的设置项，用于配置子标题右侧的操作按钮。
   * 
   * 默认值：undefined
   * 
   * 当operationType为ICON_GROUP时，数组最多包含三个元素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly operationItems?: SubHeaderV2OperationItem[];
  /**
   * 自定义标题区内容。当设置此参数时，title参数将不生效。
   * 
   * 默认值：() => void
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @BuilderParam
  titleBuilder?: SubHeaderV2TitleBuilder;
}