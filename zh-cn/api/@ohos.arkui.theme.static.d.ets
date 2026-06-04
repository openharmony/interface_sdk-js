
'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */

import { ResourceColor } from '@ohos.arkui.component';

import { ResourceColor } from './arkui/component/units';

/**
 * 当前生效的主题风格对象，可从
 * [onWillApplyTheme](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#onwillapplytheme12)中获取。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Theme {

  /**
     * 主题颜色资源。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  colors: Colors;
}

/**
   * 主题颜色资源。
   *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Colors {

  /**
     * 品牌色。</br>影响组件：[TextInput]{@link ./@internal/component/ets/text_input}、
     * [Search]{@link ./@internal/component/ets/search}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  brand: ResourceColor;

  /**
   * 系统主色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  primary?: ResourceColor;

  /**
   * 系统主题反色的颜色值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onPrimary?: ResourceColor;

  /**
   * 系统容器颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  container?: ResourceColor;

  /**
     * 一级警示色。</br>影响组件：[TipsDialog]{@link @ohos.arkui.advanced.Dialog:TipsDialog}、
     * [AlertDialog]{@link @ohos.arkui.advanced.Dialog:AlertDialog}、
     * [CustomContentDialog]{@link @ohos.arkui.advanced.Dialog:CustomContentDialog}、</br>
     * [Badge]{@link ./@internal/component/ets/badge}、[Button]{@link ./@internal/component/ets/button}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  warning: ResourceColor;

  /**
     * 二级提示色。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  alert: ResourceColor;

  /**
     * 确认色。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  confirm: ResourceColor;

  /**
     * 一级文本字体颜色。</br>影响组件：[EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar}、
     * [LoadingDialog]{@link @ohos.arkui.advanced.Dialog:LoadingDialog}、
     * [TipsDialog]{@link @ohos.arkui.advanced.Dialog:TipsDialog}、</br>
     * [ConfirmDialog]{@link @ohos.arkui.advanced.Dialog:ConfirmDialog}、
     * [AlertDialog]{@link @ohos.arkui.advanced.Dialog:AlertDialog}、
     * [SelectDialog]{@link @ohos.arkui.advanced.Dialog:SelectDialog}、</br>
     * [CustomContentDialog]{@link @ohos.arkui.advanced.Dialog:CustomContentDialog}、
     * [Swiper]{@link ./@internal/component/ets/swiper}、[Text]{@link ./@internal/component/ets/text}、</br>
     * [SubHeader]{@link @ohos.arkui.advanced.SubHeader}、[ProgressButton]{@link @ohos.arkui.advanced.ProgressButton}、
     * [AlphabetIndexer]{@link ./@internal/component/ets/alphabet_indexer}、</br>
     * [Popup]{@link @ohos.arkui.advanced.Popup}、[Select]{@link ./@internal/component/ets/select}、
     * [Chip]{@link @ohos.arkui.advanced.Chip}、</br>[ToolBar]{@link @ohos.arkui.advanced.ToolBar}、
     * [Menu]{@link ./@internal/component/ets/menu}、[TextInput]{@link ./@internal/component/ets/text_input}、</br>
     * [Search]{@link ./@internal/component/ets/search}、[TimePicker]{@link ./@internal/component/ets/time_picker}、
     * [DatePicker]{@link ./@internal/component/ets/date_picker}、</br>
     * [TextPicker]{@link ./@internal/component/ets/text_picker}、
     * [ComposeListItem]{@link @ohos.arkui.advanced.ComposeListItem}、[TreeView]{@link @ohos.arkui.advanced.TreeView}。从
     * API版本26.0.0开始，新增[CalendarPicker]{@link ./@internal/component/ets/calendar_picker}、
     * [UIPickerComponent]{@link ./@internal/component/ets/ui_picker_component}、
     * [RichEditor]{@link ./@internal/component/ets/rich_editor}、[MenuItem]{@link ./@internal/component/ets/menu_item}、
     * [MenuItemGroup]{@link ./@internal/component/ets/menu_item_group}、
     * [Counter]{@link ./@internal/component/ets/counter}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontPrimary: ResourceColor;

  /**
     * 二级文本字体颜色。</br>影响组件：[EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar}、
     * [AlertDialog]{@link @ohos.arkui.advanced.Dialog:AlertDialog}、
     * [CustomContentDialog]{@link @ohos.arkui.advanced.Dialog:CustomContentDialog}、</br>
     * [SubHeader]{@link @ohos.arkui.advanced.SubHeader}、
     * [AlphabetIndexer]{@link ./@internal/component/ets/alphabet_indexer}、[Popup]{@link @ohos.arkui.advanced.Popup}、</
     * br>[TextInput]{@link ./@internal/component/ets/text_input}、[Search]{@link ./@internal/component/ets/search}、
     * [ComposeListItem]{@link @ohos.arkui.advanced.ComposeListItem}、</br>
     * [TreeView]{@link @ohos.arkui.advanced.TreeView}、[TextClock]{@link ./@internal/component/ets/text_clock}。从API版本26.
     * 0.0开始，新增[MenuItem]{@link ./@internal/component/ets/menu_item}、
     * [MenuItemGroup]{@link ./@internal/component/ets/menu_item_group}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSecondary: ResourceColor;

  /**
     * 三级文本字体颜色。</br>影响组件：[ComposeListItem]{@link @ohos.arkui.advanced.ComposeListItem}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontTertiary: ResourceColor;

  /**
     * 四级文本字体颜色。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontFourth: ResourceColor;

  /**
     * 高亮字体颜色。</br>影响组件：[TipsDialog]{@link @ohos.arkui.advanced.Dialog:TipsDialog}、
     * [ConfirmDialog]{@link @ohos.arkui.advanced.Dialog:ConfirmDialog}、
     * [AlertDialog]{@link @ohos.arkui.advanced.Dialog:AlertDialog}、</br>
     * [SelectDialog]{@link @ohos.arkui.advanced.Dialog:SelectDialog}、
     * [CustomContentDialog]{@link @ohos.arkui.advanced.Dialog:CustomContentDialog}、
     * [SubHeader]{@link @ohos.arkui.advanced.SubHeader}、</br>
     * [AlphabetIndexer]{@link ./@internal/component/ets/alphabet_indexer}、[Popup]{@link @ohos.arkui.advanced.Popup}、
     * [Button]{@link ./@internal/component/ets/button}、</br>[Select]{@link ./@internal/component/ets/select}、
     * [ToolBar]{@link @ohos.arkui.advanced.ToolBar}、[Search]{@link ./@internal/component/ets/search}、</br>
     * [TimePicker]{@link ./@internal/component/ets/time_picker}、
     * [DatePicker]{@link ./@internal/component/ets/date_picker}、
     * [TextPicker]{@link ./@internal/component/ets/text_picker}。从API版本26.0.0开始，新增
     * [RichEditor]{@link ./@internal/component/ets/rich_editor}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontEmphasize: ResourceColor;

  /**
     * 一级文本反转颜色，用于彩色背景。</br>影响组件：[Badge]{@link ./@internal/component/ets/badge}、
     * [Button]{@link ./@internal/component/ets/button}、[Chip]{@link @ohos.arkui.advanced.Chip}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontOnPrimary: ResourceColor;

  /**
     * 二级文本反转颜色，用于彩色背景。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontOnSecondary: ResourceColor;

  /**
     * 三级文本反转颜色，用于彩色背景。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontOnTertiary: ResourceColor;

  /**
     * 四级文本反转颜色，用于彩色背景。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontOnFourth: ResourceColor;

  /**
     * 一级图标颜色。</br>影响组件：[EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar}、
     * [Swiper]{@link ./@internal/component/ets/swiper}、[ToolBar]{@link @ohos.arkui.advanced.ToolBar}、</br>
     * [TreeView]{@link @ohos.arkui.advanced.TreeView}。从API版本26.0.0开始，新增
     * [MenuItem]{@link ./@internal/component/ets/menu_item}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconPrimary: ResourceColor;

  /**
     * 二级图标颜色。</br>影响组件：[LoadingDialog]{@link @ohos.arkui.advanced.Dialog:LoadingDialog}、
     * [SubHeader]{@link @ohos.arkui.advanced.SubHeader}、</br>[Popup]{@link @ohos.arkui.advanced.Popup}、
     * [Chip]{@link @ohos.arkui.advanced.Chip}、[Search]{@link ./@internal/component/ets/search}、</br>
     * [TreeView]{@link @ohos.arkui.advanced.TreeView}。从API版本26.0.0开始，新增
     * [LoadingProgress]{@link ./@internal/component/ets/loading_progress}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconSecondary: ResourceColor;

  /**
     * 三级图标颜色。</br>影响组件：[SubHeader]{@link @ohos.arkui.advanced.SubHeader}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconTertiary: ResourceColor;

  /**
     * 四级图标颜色。</br>影响组件：[Checkbox]{@link ./@internal/component/ets/checkbox}、
     * [CheckboxGroup]{@link ./@internal/component/ets/checkboxgroup}、[Radio]{@link ./@internal/component/ets/radio}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconFourth: ResourceColor;

  /**
     * 高亮图标颜色。</br>影响组件：[ToolBar]{@link @ohos.arkui.advanced.ToolBar}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconEmphasize: ResourceColor;

  /**
     * 高亮辅助图标颜色。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconSubEmphasize: ResourceColor;

  /**
     * 一级图标反转颜色，用于彩色背景。</br>影响组件：[Checkbox]{@link ./@internal/component/ets/checkbox}、
     * [CheckboxGroup]{@link ./@internal/component/ets/checkboxgroup}、[Radio]{@link ./@internal/component/ets/radio}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconOnPrimary: ResourceColor;

  /**
     * 二级图标反转颜色，用于彩色背景。</br>影响组件：[Chip]{@link @ohos.arkui.advanced.Chip}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconOnSecondary: ResourceColor;

  /**
     * 三级图标反转颜色，用于彩色背景。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconOnTertiary: ResourceColor;

  /**
     * 四级图标反转颜色，用于彩色背景。</br>影响组件：[ProgressButton]{@link @ohos.arkui.advanced.ProgressButton}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconOnFourth: ResourceColor;

  /**
     * 一级背景颜色（实色，不透明）。</br>影响组件：[TextInput]{@link ./@internal/component/ets/text_input}、
     * [QRCode]{@link ./@internal/component/ets/qrcode}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundPrimary: ResourceColor;

  /**
     * 二级背景颜色（实色，不透明）。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundSecondary: ResourceColor;

  /**
     * 三级背景颜色（实色，不透明）。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundTertiary: ResourceColor;

  /**
     * 四级背景颜色（实色，不透明）。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundFourth: ResourceColor;

  /**
     * 高亮背景颜色（实色，不透明）。</br>影响组件：[Progress]{@link ./@internal/component/ets/progress}、
     * [Button]{@link ./@internal/component/ets/button}、[Slider]{@link ./@internal/component/ets/slider}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundEmphasize: ResourceColor;

  /**
     * 前背景。</br>影响组件：[QRCode]{@link ./@internal/component/ets/qrcode}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compForegroundPrimary: ResourceColor;

  /**
     * 白色背景。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundPrimary: ResourceColor;

  /**
     * 白色透明背景。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundPrimaryTran: ResourceColor;

  /**
     * 常亮背景。</br>影响组件：[Toggle]{@link ./@internal/component/ets/toggle}、[Slider]{@link ./@internal/component/ets/slider}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundPrimaryContrary: ResourceColor;

  /**
     * 灰色背景。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundGray: ResourceColor;

  /**
     * 二级背景。</br>影响组件：[Swiper]{@link ./@internal/component/ets/swiper}、[Slider]{@link ./@internal/component/ets/slider}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundSecondary: ResourceColor;

  /**
     * 三级背景。</br>影响组件：[EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar}、
     * [Progress]{@link ./@internal/component/ets/progress}、
     * [AlphabetIndexer]{@link ./@internal/component/ets/alphabet_indexer}、</br>
     * [Button]{@link ./@internal/component/ets/button}、[Select]{@link ./@internal/component/ets/select}、
     * [Toggle]{@link ./@internal/component/ets/toggle}、</br>[Chip]{@link @ohos.arkui.advanced.Chip}、
     * [TextInput]{@link ./@internal/component/ets/text_input}、[Search]{@link ./@internal/component/ets/search}。从API版本26
     * .0.0开始，新增[UIPickerComponent]{@link ./@internal/component/ets/ui_picker_component}、
     * [TextPicker]{@link ./@internal/component/ets/text_picker}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundTertiary: ResourceColor;

  /**
     * 高亮背景。</br>影响组件：[Swiper]{@link ./@internal/component/ets/swiper}、[Toggle]{@link ./@internal/component/ets/toggle}、
     * [Chip]{@link @ohos.arkui.advanced.Chip}、</br>[Checkbox]{@link ./@internal/component/ets/checkbox}、
     * [CheckboxGroup]{@link ./@internal/component/ets/checkboxgroup}、[Radio]{@link ./@internal/component/ets/radio}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundEmphasize: ResourceColor;

  /**
     * 黑色中性高亮背景颜色。</br>影响组件：[PatternLock]{@link ./@internal/component/ets/pattern_lock}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundNeutral: ResourceColor;

  /**
     * 20%高亮背景颜色。</br>影响组件：[Progress]{@link ./@internal/component/ets/progress}、
     * [ProgressButton]{@link @ohos.arkui.advanced.ProgressButton}、
     * [AlphabetIndexer]{@link ./@internal/component/ets/alphabet_indexer}、</br>
     * [Select]{@link ./@internal/component/ets/select}、[Toggle]{@link ./@internal/component/ets/toggle}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compEmphasizeSecondary: ResourceColor;

  /**
     * 10%高亮背景颜色。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compEmphasizeTertiary: ResourceColor;

  /**
     * 通用分割线颜色。</br>影响组件：[SelectDialog]{@link @ohos.arkui.advanced.Dialog:SelectDialog}、
     * [PatternLock]{@link ./@internal/component/ets/pattern_lock}、[Divider]{@link ./@internal/component/ets/divider}。从
     * API版本26.0.0开始，新增[UIPickerComponent]{@link ./@internal/component/ets/ui_picker_component}、
     * [TextPicker]{@link ./@internal/component/ets/text_picker}、[MenuItem]{@link ./@internal/component/ets/menu_item}、
     * [MenuItemGroup]{@link ./@internal/component/ets/menu_item_group}、[Select]{@link ./@internal/component/ets/select}
     * 。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compDivider: ResourceColor;

  /**
     * 通用反转颜色。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compCommonContrary: ResourceColor;

  /**
     * 获焦态背景颜色。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compBackgroundFocus: ResourceColor;

  /**
     * 获焦态一级反转颜色。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compFocusedPrimary: ResourceColor;

  /**
     * 获焦态二级反转颜色。</br>影响组件：暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compFocusedSecondary: ResourceColor;

  /**
     * 获焦态三级反转颜色。</br>影响组件：[Scroll]{@link ./@internal/component/ets/scroll}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  compFocusedTertiary: ResourceColor;

  /**
     * 通用悬停交互式颜色。</br>影响组件：[EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar}、
     * [Chip]{@link @ohos.arkui.advanced.Chip}、[TreeView]{@link @ohos.arkui.advanced.TreeView}。从API版本26.0.0开始，新增
     * [RichEditor]{@link ./@internal/component/ets/rich_editor}、[MenuItem]{@link ./@internal/component/ets/menu_item}、
     * [Select]{@link ./@internal/component/ets/select}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interactiveHover: ResourceColor;

  /**
     * 通用按压交互式颜色。</br>影响组件：[EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar}、
     * [Chip]{@link @ohos.arkui.advanced.Chip}、[TreeView]{@link @ohos.arkui.advanced.TreeView}。从API版本26.0.0开始，新增
     * [RichEditor]{@link ./@internal/component/ets/rich_editor}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interactivePressed: ResourceColor;

  /**
     * 通用获焦交互式颜色。</br>影响组件：[EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar}、
     * [Chip]{@link @ohos.arkui.advanced.Chip}、[TreeView]{@link @ohos.arkui.advanced.TreeView}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interactiveFocus: ResourceColor;

  /**
     * 通用激活交互式颜色。</br>影响组件：[TreeView]{@link @ohos.arkui.advanced.TreeView}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interactiveActive: ResourceColor;

  /**
     * 通用选择交互式颜色。</br>影响组件：[TreeView]{@link @ohos.arkui.advanced.TreeView}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interactiveSelect: ResourceColor;

  /**
     * 通用点击交互式颜色。</br>影响组件：从API版本26.0.0开始，新增[MenuItem]{@link ./@internal/component/ets/menu_item}、
     * [Select]{@link ./@internal/component/ets/select}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  interactiveClick: ResourceColor;
}

/**
   * 自定义主题风格对象。
   *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CustomTheme {

  /**
     * 自定义浅色主题颜色资源。</br>
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  colors?: CustomColors;

  /**
     * 自定义深色主题颜色资源。
     * 
     * **说明**：如果未设置darkColors，颜色值将与浅色模式下的colors配置相同，并且不会随着颜色模式的变化而变化，除非该颜色是通过dark目录下的资源进行设置的。</br>
     *
   * @default If not set darkColors, color value will same as colors under light mode and will not change with color
   *     mode, unless the color is setted by resource in dark directory.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  darkColors?: CustomDarkColors;
}

/**
   * 自定义主题颜色资源类型。
   *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CustomColors = Partial<Colors>;

/**
   * 自定义深色主题颜色资源类型。
   *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare type CustomDarkColors = Partial<Colors>;

/**
   * ThemeControl将自定义Theme应用于App组件内，实现App组件风格跟随Theme切换。
   *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ThemeControl {

  /**
     * 将用户自定义Theme设置应用级默认主题，以实现应用风格跟随Theme切换。
     * 
     * 
     * 需确保在页面build前执行。因运行于静态类型上下文中的ArkTS不存在全局作用域，因此需要在入口组件的static闭包或aboutToAppear生命周期函数中调用该接口。
     *
   * @param { CustomTheme | undefined } theme
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static setDefaultTheme(theme: CustomTheme | undefined): void;
}