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
 * limitations under the License.
 */

/**
 主题换肤
 * @file
 主题换肤
 * @kit ArkUI
 */
/**
 * 当前生效的主题风格对象，可从
 * [onWillApplyTheme](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#onwillapplytheme12)中获取。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare interface Theme {
  /**
     * 主题颜色资源。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  colors: Colors;
  }

/**
   * 主题颜色资源。
   *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare interface Colors {

  /**
     * 品牌色。</br>**影响组件：** [TextInput]{@link text_input}、[Search]{@link search}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  brand: ResourceColor;

  /**
     * 系统主色。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  primary?: ResourceColor;

  /**
     * 系统主题反色的颜色值。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onPrimary?: ResourceColor;

  /**
     * 系统容器颜色。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  container?: ResourceColor;

  /**
     * 一级警示色。</br>**影响组件：** [TipsDialog]{@link @ohos.arkui.advanced.Dialog:TipsDialog}、
     * [AlertDialog]{@link @ohos.arkui.advanced.Dialog:AlertDialog}、
     * [CustomContentDialog]{@link @ohos.arkui.advanced.Dialog:CustomContentDialog}、</br>[Badge]{@link badge}、
     * [Button]{@link button}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  warning: ResourceColor;

  /**
     * 二级提示色。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  alert: ResourceColor;

  /**
     * 确认色。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  confirm: ResourceColor;

  /**
     * 一级文本字体颜色。</br>**影响组件：** [EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar}、
     * [LoadingDialog]{@link @ohos.arkui.advanced.Dialog:LoadingDialog}、
     * [TipsDialog]{@link @ohos.arkui.advanced.Dialog:TipsDialog}、</br>
     * [ConfirmDialog]{@link @ohos.arkui.advanced.Dialog:ConfirmDialog}、
     * [AlertDialog]{@link @ohos.arkui.advanced.Dialog:AlertDialog}、
     * [SelectDialog]{@link @ohos.arkui.advanced.Dialog:SelectDialog}、</br>
     * [CustomContentDialog]{@link @ohos.arkui.advanced.Dialog:CustomContentDialog}、[Swiper]{@link swiper}、
     * [Text]{@link text}、</br>[SubHeader]{@link @ohos.arkui.advanced.SubHeader}、
     * [ProgressButton]{@link @ohos.arkui.advanced.ProgressButton}、[AlphabetIndexer]{@link alphabet_indexer}、</br>
     * [Popup]{@link @ohos.arkui.advanced.Popup}、[Select]{@link select}、[Chip]{@link @ohos.arkui.advanced.Chip}、</br>
     * [ToolBar]{@link @ohos.arkui.advanced.ToolBar}、[Menu]{@link menu}、[TextInput]{@link text_input}、</br>
     * [Search]{@link search}、[TimePicker]{@link time_picker}、[DatePicker]{@link date_picker}、</br>
     * [TextPicker]{@link text_picker}、[ComposeListItem]{@link @ohos.arkui.advanced.ComposeListItem}、
     * [TreeView]{@link @ohos.arkui.advanced.TreeView}。从API版本26.0.0开始，新增[CalendarPicker]{@link calendar_picker}、
     * [UIPickerComponent]{@link ui_picker_component}、[RichEditor]{@link rich_editor}、[MenuItem]{@link menu_item}、
     * [MenuItemGroup]{@link menu_item_group}、[Counter]{@link counter}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontPrimary: ResourceColor;

  /**
     * 二级文本字体颜色。</br>**影响组件：** [EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar}、
     * [AlertDialog]{@link @ohos.arkui.advanced.Dialog:AlertDialog}、
     * [CustomContentDialog]{@link @ohos.arkui.advanced.Dialog:CustomContentDialog}、</br>
     * [SubHeader]{@link @ohos.arkui.advanced.SubHeader}、[AlphabetIndexer]{@link alphabet_indexer}、
     * [Popup]{@link @ohos.arkui.advanced.Popup}、</br>[TextInput]{@link text_input}、[Search]{@link search}、
     * [ComposeListItem]{@link @ohos.arkui.advanced.ComposeListItem}、</br>
     * [TreeView]{@link @ohos.arkui.advanced.TreeView}、[TextClock]{@link text_clock}。从API版本26.0.0开始，新增
     * [MenuItem]{@link menu_item}、[MenuItemGroup]{@link menu_item_group}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontSecondary: ResourceColor;

  /**
     * 三级文本字体颜色。</br>**影响组件：** [ComposeListItem]{@link @ohos.arkui.advanced.ComposeListItem}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontTertiary: ResourceColor;

  /**
     * 四级文本字体颜色。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFourth: ResourceColor;

  /**
     * 高亮字体颜色。</br>**影响组件：** [TipsDialog]{@link @ohos.arkui.advanced.Dialog:TipsDialog}、
     * [ConfirmDialog]{@link @ohos.arkui.advanced.Dialog:ConfirmDialog}、
     * [AlertDialog]{@link @ohos.arkui.advanced.Dialog:AlertDialog}、</br>
     * [SelectDialog]{@link @ohos.arkui.advanced.Dialog:SelectDialog}、
     * [CustomContentDialog]{@link @ohos.arkui.advanced.Dialog:CustomContentDialog}、
     * [SubHeader]{@link @ohos.arkui.advanced.SubHeader}、</br>[AlphabetIndexer]{@link alphabet_indexer}、
     * [Popup]{@link @ohos.arkui.advanced.Popup}、[Button]{@link button}、</br>[Select]{@link select}、
     * [ToolBar]{@link @ohos.arkui.advanced.ToolBar}、[Search]{@link search}、</br>[TimePicker]{@link time_picker}、
     * [DatePicker]{@link date_picker}、[TextPicker]{@link text_picker}。从API版本26.0.0开始，新增[RichEditor]{@link rich_editor}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontEmphasize: ResourceColor;

  /**
     * 一级文本反转颜色，用于彩色背景。</br>**影响组件：** [Badge]{@link badge}、[Button]{@link button}、
     * [Chip]{@link @ohos.arkui.advanced.Chip}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontOnPrimary: ResourceColor;

  /**
     * 二级文本反转颜色，用于彩色背景。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontOnSecondary: ResourceColor;

  /**
     * 三级文本反转颜色，用于彩色背景。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontOnTertiary: ResourceColor;

  /**
     * 四级文本反转颜色，用于彩色背景。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontOnFourth: ResourceColor;

  /**
     * 一级图标颜色。</br>**影响组件：** [EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar}、[Swiper]{@link swiper}、
     * [ToolBar]{@link @ohos.arkui.advanced.ToolBar}、</br>[TreeView]{@link @ohos.arkui.advanced.TreeView}。从API版本26.0.0开
     * 始，新增[MenuItem]{@link menu_item}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconPrimary: ResourceColor;

  /**
     * 二级图标颜色。</br>**影响组件：** [LoadingDialog]{@link @ohos.arkui.advanced.Dialog:LoadingDialog}、
     * [SubHeader]{@link @ohos.arkui.advanced.SubHeader}、</br>[Popup]{@link @ohos.arkui.advanced.Popup}、
     * [Chip]{@link @ohos.arkui.advanced.Chip}、[Search]{@link search}、</br>
     * [TreeView]{@link @ohos.arkui.advanced.TreeView}。从API版本26.0.0开始，新增[LoadingProgress]{@link loading_progress}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconSecondary: ResourceColor;

  /**
     * 三级图标颜色。</br>**影响组件：** [SubHeader]{@link @ohos.arkui.advanced.SubHeader}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconTertiary: ResourceColor;

  /**
     * 四级图标颜色。</br>**影响组件：** [Checkbox]{@link checkbox}、[CheckboxGroup]{@link checkboxgroup}、[Radio]{@link radio}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconFourth: ResourceColor;

  /**
     * 高亮图标颜色。</br>**影响组件：** [ToolBar]{@link @ohos.arkui.advanced.ToolBar}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconEmphasize: ResourceColor;

  /**
     * 高亮辅助图标颜色。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconSubEmphasize: ResourceColor;

  /**
     * 一级图标反转颜色，用于彩色背景。</br>**影响组件：** [Checkbox]{@link checkbox}、[CheckboxGroup]{@link checkboxgroup}、
     * [Radio]{@link radio}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconOnPrimary: ResourceColor;

  /**
     * 二级图标反转颜色，用于彩色背景。</br>**影响组件：** [Chip]{@link @ohos.arkui.advanced.Chip}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconOnSecondary: ResourceColor;

  /**
     * 三级图标反转颜色，用于彩色背景。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconOnTertiary: ResourceColor;

  /**
     * 四级图标反转颜色，用于彩色背景。</br>**影响组件：** [ProgressButton]{@link @ohos.arkui.advanced.ProgressButton}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconOnFourth: ResourceColor;

  /**
     * 一级背景颜色（实色，不透明）。</br>**影响组件：** [TextInput]{@link text_input}、[QRCode]{@link qrcode}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundPrimary: ResourceColor;

  /**
     * 二级背景颜色（实色，不透明）。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundSecondary: ResourceColor;

  /**
     * 三级背景颜色（实色，不透明）。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundTertiary: ResourceColor;

  /**
     * 四级背景颜色（实色，不透明）。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundFourth: ResourceColor;

  /**
     * 高亮背景颜色（实色，不透明）。</br>**影响组件：** [Progress]{@link progress}、[Button]{@link button}、[Slider]{@link slider}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundEmphasize: ResourceColor;

  /**
     * 前背景。</br>**影响组件：** [QRCode]{@link qrcode}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compForegroundPrimary: ResourceColor;

  /**
     * 白色背景。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundPrimary: ResourceColor;

  /**
     * 白色透明背景。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundPrimaryTran: ResourceColor;

  /**
     * 常亮背景。</br>**影响组件：** [Toggle]{@link toggle}、[Slider]{@link slider}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundPrimaryContrary: ResourceColor;

  /**
     * 灰色背景。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundGray: ResourceColor;

  /**
     * 二级背景。</br>**影响组件：** [Swiper]{@link swiper}、[Slider]{@link slider}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundSecondary: ResourceColor;

  /**
     * 三级背景。</br>**影响组件：** [EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar}、[Progress]{@link progress}、
     * [AlphabetIndexer]{@link alphabet_indexer}、</br>[Button]{@link button}、[Select]{@link select}、
     * [Toggle]{@link toggle}、</br>[Chip]{@link @ohos.arkui.advanced.Chip}、[TextInput]{@link text_input}、
     * [Search]{@link search}。从API版本26.0.0开始，新增[UIPickerComponent]{@link ui_picker_component}、
     * [TextPicker]{@link text_picker}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundTertiary: ResourceColor;

  /**
     * 高亮背景。</br>**影响组件：** [Swiper]{@link swiper}、[Toggle]{@link toggle}、[Chip]{@link @ohos.arkui.advanced.Chip}、</br>
     * [Checkbox]{@link checkbox}、[CheckboxGroup]{@link checkboxgroup}、[Radio]{@link radio}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundEmphasize: ResourceColor;

  /**
     * 黑色中性高亮背景颜色。</br>**影响组件：** [PatternLock]{@link pattern_lock}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundNeutral: ResourceColor;

  /**
     * 20%高亮背景颜色。</br>**影响组件：** [Progress]{@link progress}、[ProgressButton]{@link @ohos.arkui.advanced.ProgressButton}、
     * [AlphabetIndexer]{@link alphabet_indexer}、</br>[Select]{@link select}、[Toggle]{@link toggle}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compEmphasizeSecondary: ResourceColor;

  /**
     * 10%高亮背景颜色。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compEmphasizeTertiary: ResourceColor;

  /**
     * 通用分割线颜色。</br>**影响组件：** [SelectDialog]{@link @ohos.arkui.advanced.Dialog:SelectDialog}、
     * [PatternLock]{@link pattern_lock}、[Divider]{@link divider}。从API版本26.0.0开始，新增
     * [UIPickerComponent]{@link ui_picker_component}、[TextPicker]{@link text_picker}、[MenuItem]{@link menu_item}、
     * [MenuItemGroup]{@link menu_item_group}、[Select]{@link select}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compDivider: ResourceColor;

  /**
     * 通用反转颜色。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compCommonContrary: ResourceColor;

  /**
     * 获焦态背景颜色。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compBackgroundFocus: ResourceColor;

  /**
     * 获焦态一级反转颜色。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compFocusedPrimary: ResourceColor;

  /**
     * 获焦态二级反转颜色。</br>**影响组件：** 暂无组件使用。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compFocusedSecondary: ResourceColor;

  /**
     * 获焦态三级反转颜色。</br>**影响组件：** [Scroll]{@link scroll}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  compFocusedTertiary: ResourceColor;

  /**
     * 通用悬停交互式颜色。</br>**影响组件：** [EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar}、
     * [Chip]{@link @ohos.arkui.advanced.Chip}、[TreeView]{@link @ohos.arkui.advanced.TreeView}。从API版本26.0.0开始，新增
     * [RichEditor]{@link rich_editor}、[MenuItem]{@link menu_item}、[Select]{@link select}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interactiveHover: ResourceColor;

  /**
     * 通用按压交互式颜色。</br>**影响组件：** [EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar}、
     * [Chip]{@link @ohos.arkui.advanced.Chip}、[TreeView]{@link @ohos.arkui.advanced.TreeView}。从API版本26.0.0开始，新增
     * [RichEditor]{@link rich_editor}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interactivePressed: ResourceColor;

  /**
     * 通用获焦交互式颜色。</br>**影响组件：** [EditableTitleBar]{@link @ohos.arkui.advanced.EditableTitleBar}、
     * [Chip]{@link @ohos.arkui.advanced.Chip}、[TreeView]{@link @ohos.arkui.advanced.TreeView}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interactiveFocus: ResourceColor;

  /**
     * 通用激活交互式颜色。</br>**影响组件：** [TreeView]{@link @ohos.arkui.advanced.TreeView}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interactiveActive: ResourceColor;

  /**
     * 通用选择交互式颜色。</br>**影响组件：** [TreeView]{@link @ohos.arkui.advanced.TreeView}
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interactiveSelect: ResourceColor;

  /**
     * 通用点击交互式颜色。</br>**影响组件：** 从API版本26.0.0开始，新增[MenuItem]{@link menu_item}、[Select]{@link select}。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interactiveClick: ResourceColor;
  }

/**
   * 自定义主题风格对象。
   *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare interface CustomTheme {
  /**
     * 自定义浅色主题颜色资源。</br>
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  colors?: CustomColors;

  /**
     * 自定义深色主题颜色资源。
     * 
     * **说明**：如果未设置darkColors，则使用浅色模式下的colors配置，并且不会随着系统深浅色模式的切换而变化；如果对应颜色通过dark目录下的资源进行设置，则会优先使用dark目录下的资源。
     *
   * @default If not set darkColors, color value will same as colors under light mode and will not change with color
   *     mode, unless the color is setted by resource in dark directory.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  darkColors?: CustomDarkColors;
  }

/**
   * 自定义主题颜色资源类型。
   *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare type CustomColors = Partial<Colors>;

/**
   * 自定义深色主题颜色资源类型。
   *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type CustomDarkColors = Partial<Colors>;

/**
   * ThemeControl将自定义Theme应用于App组件内，实现App组件风格跟随Theme切换。
   *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class ThemeControl {
  /**
     * 将用户自定义Theme设置应用级默认主题，以实现应用风格跟随Theme切换。若在页面中使用此接口设置应用级默认主题，需确保该接口在页面build前执行。若在UIAbility中使用此接口设置应用级默认主题，需确保该接口在
     * onWindowStageCreate阶段里windowStage.
     * [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)接口调用完成的回调函数中执行。详细代码可参考
     * [设置应用内组件自定义主题色](docroot://ui/theme_skinning.md#设置应用内组件自定义主题色)。
     *
   * @param { CustomTheme } theme
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static setDefaultTheme(theme: CustomTheme): void;
  }