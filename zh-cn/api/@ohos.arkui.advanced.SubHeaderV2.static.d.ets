'use static';
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
 *
 * @file
 * @kit ArkUI
 */
import { TextModifier } from './arkui/TextModifier';

import { ResourceStr } from '@ohos.arkui.component';
import { ResourceStr } from './arkui/component/units';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';

import { SelectOption } from '@ohos.arkui.component';
import { SelectOption } from './arkui/component/select';

import { ObservedV2, Trace, Param } from '@ohos.arkui.stateManagement';
import { ObservedV2, Trace, Param } from './arkui/stateManagement/decorator';

import { ComponentV2 } from '@ohos.arkui.component';
import { ComponentV2 } from './arkui/component/customComponent';

import { BuilderParam, Builder } from '@ohos.arkui.component';
import { BuilderParam, Builder } from './arkui/component/builder';

/**
 * SubHeaderV2IconType
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare type SubHeaderV2IconType = ResourceStr | SymbolGlyphModifier;

/**
 * 用于构建SubHeaderV2Title对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
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
   * @since 23 static
   */
  primaryTitle?: ResourceStr;
  /**
   * 设置标题文本属性，如设置主标题颜色、字体大小、字重等。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  primaryTitleModifier?: TextModifier;
  /**
   * 副标题内容。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  secondaryTitle?: ResourceStr;
  /**
   * 设置副标题文本属性，如设置副标题颜色、字体大小、字重等。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
   */
  titleAccessibilityText?: ResourceStr;
  /**
   * 标题id。需要为标题设置id的时候设置此参数，缺省时不设置此参数。
   * 
   * 默认值：undefined，表示不设置标题id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  id?: string;
}
/**
 * 标题设置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class SubHeaderV2Title {
  /**
   * 标题内容。
   * 
   * 当[SubHeaderV2]{@link SubHeaderV2}中同时使用primaryTitle、secondaryTitle、icon属性时，设置primaryTitle属性不生效。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public primaryTitle?: ResourceStr;
  /**
   * 设置标题文本属性，如设置标题颜色、字体大小、字重等。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public primaryTitleModifier?: TextModifier;
  /**
   * 副标题内容。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public secondaryTitle?: ResourceStr;
  /**
   * 设置副标题文本属性，如设置副标题颜色、字体大小、字重等。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public secondaryTitleModifier?: TextModifier;
  /**
   * 设置标题自定义朗读内容。
   * 
   * 默认值：undefined
   * 
   * 值为undefined时，默认朗读组件显示的标题内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public titleAccessibilityText?: ResourceStr;
  /**
   * 标题id。需要为标题设置id的时候设置此参数，缺省时不设置此参数。
   * 
   * 默认值：undefined，表示不设置标题id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  @Trace
  public id?: string;
  /**
   * 标题内容信息SubHeaderV2Title构造函数。
   *
   * @param { SubHeaderV2TitleOptions } options - 标题内容信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public constructor(options: SubHeaderV2TitleOptions);
}
/**
 * 下拉菜单选中某一项的回调类型。
 *
 * @param { int } selectedIndex - 选中的下拉菜单项的索引值，索引从0开始计数。
 * @param { string } [selectedContent] - 选中的下拉菜单项的文本内容，即用户选择的菜单项显示的文本。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type SubHeaderV2SelectOnSelect = (selectedIndex: int, selectedContent?: string) => void;
/**
 * 用于构建SubHeaderV2Select对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface SubHeaderV2SelectOptions {
  /**
   * 下拉选项内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
   */
  selectedIndex?: int;
  /**
   * 设置下拉按钮本身的文本内容。默认值：''。从API version 20开始，支持Resource类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedContent?: ResourceStr;
  /**
   * 下拉菜单选中某一项的回调。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
   */
  defaultFocus?: boolean;
  /**
   * 下拉按钮id。需要为下拉按钮设置id的时候设置此参数，缺省时不设置此参数。
   * 
   * 默认值：undefined，表示不设置下拉按钮id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  id?: string;
}
/**
 * 下拉选择器配置项，包含下拉选项内容、选中状态及回调事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class SubHeaderV2Select {
  /**
   * 下拉选项内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public options: SelectOption[];
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
   * @since 23 static
   */
  @Trace
  public selectedIndex?: int;
  /**
   * 设置下拉按钮本身的文本内容。默认值：'' 。从API version 20开始，支持Resource类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public selectedContent?: ResourceStr;
  /**
   * 下拉菜单选中某一项的回调。 
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public onSelect?: SubHeaderV2SelectOnSelect;
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
   * @since 23 static
   */
  @Trace
  public defaultFocus?: boolean;
  /**
   * 下拉按钮id。需要为下拉按钮设置id的时候设置此参数，缺省时不设置此参数。
   * 
   * 默认值：undefined，表示不设置下拉按钮id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  @Trace
  public id?: string;
  /**
   * select内容以及事件构造函数。
   *
   * @param { SubHeaderV2SelectOptions } options - 下拉选项信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public constructor(options: SubHeaderV2SelectOptions);
}
/**
 * 操作区元素样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum SubHeaderV2OperationType {
  /**
   * 文本按钮（带右箭头）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TEXT_ARROW = 0,
  /**
   * 文本按钮（不带右箭头）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BUTTON = 1,
  /**
   * 图标按钮（最多支持配置三张图标）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ICON_GROUP = 2,
  /**
   * 加载动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LOADING = 3
}
/**
 * 操作区设置项的回调事件类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type SubHeaderV2OperationItemAction = () => void;

/**
 * SubHeaderV2OperationItemType
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare type SubHeaderV2OperationItemType = ResourceStr | SymbolGlyphModifier;

/**
 * 用于构建SubHeaderV2OperationItem对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface SubHeaderV2OperationItemOptions {
  /**
   * 操作项显示的内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content: SubHeaderV2OperationItemType;
  /**
   * 选项操作事件回调，点击操作项时触发，用于执行自定义操作。默认值：() => void。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  action?: SubHeaderV2OperationItemAction;
  /**
   * 子标题右侧操作项无障碍描述。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityText?: ResourceStr;
  /**
   * 子标题右侧操作项无障碍说明，用于为用户进一步说明当前组件。
   * 
   * 默认值：“单指双击即可执行”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
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
   * @since 23 static
   */
  defaultFocus?: boolean;
  /**
   * 子标题右侧操作项id。需要为子标题右侧操作项设置id的时候设置此参数，缺省时不设置此参数。
   * 
   * 默认值：undefined，表示不设置子标题右侧操作项id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  id?: string;
}
/**
 * 操作区的设置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class SubHeaderV2OperationItem {
  /**
   * 操作区元素内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public content: SubHeaderV2OperationItemType;
  /**
   * 操作区事件回调。默认值：() => void。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public action?: SubHeaderV2OperationItemAction;
  /**
   * 操作项SubHeaderV2OperationItem的构造函数。
   *
   * @param { SubHeaderV2OperationItemOptions } options - 操作项配置信息。用于构建SubHeaderV2OperationItem对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(options: SubHeaderV2OperationItemOptions);
  /**
   * 子标题右侧操作项无障碍描述。 
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public accessibilityText?: ResourceStr;
  /**
   * 子标题右侧操作项无障碍说明，用于为用户进一步说明当前组件。
   * 
   * 默认值：“单指双击即可执行”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public accessibilityDescription?: ResourceStr;
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
   * @since 23 static
   */
  @Trace
  public accessibilityLevel?: string;
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
   * @since 23 static
   */
  @Trace
  public defaultFocus?: boolean;
  /**
   * 子标题右侧操作项id。需要为子标题右侧操作项设置id的时候设置此参数，缺省时不设置此参数。
   * 
   * 默认值：undefined，表示不设置子标题右侧操作项id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  @Trace
  public id?: string;
}
/**
 * 自定义标题区内容的回调事件类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Builder
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
 * @since 23 static
 * @noninterop
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
   * @since 23 static
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
   * @since 23 static
   */
  @Param
  readonly title?: SubHeaderV2Title;
  /**
   * 下拉选择器的配置项，包含下拉选项内容、选中状态及回调事件。
   * 
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @Param
  readonly select?: SubHeaderV2Select;
  /**
   * 操作区元素样式，用于定义子标题右侧操作按钮的显示形式。
   * 
   * 默认值：SubHeaderV2OperationType.BUTTON
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
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
   * @since 23 static
   */
  @Param
  readonly operationItems?: SubHeaderV2OperationItem[];
  /**
   * 自定义标题区内容。当设置此参数时，title参数将不生效。
   * 
   * 默认值：() => void
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @BuilderParam
  titleBuilder?: SubHeaderV2TitleBuilder;

  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}