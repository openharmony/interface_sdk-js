'use static'
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
 * @file
 * @kit ArkUI
 */

import { ResourceStr, VoidCallback } from './arkui/component/units';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { Builder, CustomBuilder } from './arkui/component/builder';
import { RichEditorSelection, RichEditorController } from './arkui/component/richEditor';
import { MenuItemOptions } from './arkui/component/menuItem';
import uiMaterial from './@ohos.arkui.uiMaterial';

/**
 * 编辑菜单选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface EditorMenuOptions {
  /**
   * 图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon: ResourceStr | undefined;

  /**
   * Symbol图标资源，优先级大于icon。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * 点击菜单项的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  action?: VoidCallback;

  /**
   * 点击时显示用户自定义组件，自定义组件在构造时结合@Builder使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  builder?: CustomBuilder;
}

/**
 * 扩展下拉菜单。
 * 
 * 继承于[MenuItemOptions](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-menuitem.md#menuitemoptions)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ExpandedMenuOptions extends MenuItemOptions {
  /**
   * 点击菜单项的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  action?: VoidCallback;
}

/**
 * 选中内容信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface EditorEventInfo {
  /**
   * 选中内容信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content?: RichEditorSelection;
}

/**
 * 替代内置系统菜单粘贴项的事件回调。
 *
 * @param { ?EditorEventInfo } [event] - 事件信息。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type SelectionMenuOnPasteCallback = (event?: EditorEventInfo) => void;

/**
 * 替代内置系统菜单复制项的事件回调。
 *
 * @param { ?EditorEventInfo } [event] - 事件信息。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type SelectionMenuOnCopyCallback = (event?: EditorEventInfo) => void;

/**
 * 替代内置系统菜单剪切项的事件回调。
 *
 * @param { ?EditorEventInfo } [event] - 事件信息。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type SelectionMenuOnCutCallback = (event?: EditorEventInfo) => void;

/**
 * 替代内置系统菜单全选项的事件回调。
 *
 * @param { ?EditorEventInfo } [event] - 事件信息。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type SelectionMenuOnSelectAllCallback = (event?: EditorEventInfo) => void;

/**
 * SelectionMenuOptions定义SelectionMenu的可选菜单类型项及其具体配置参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface SelectionMenuOptions {
  /**
   * 编辑菜单。
   * 
   * editorMenuOptions未配置时，不显示编辑菜单。
   * 
   * 同时配置EditorMenuOptions中action和builder时，点击图标会同时响应。
   * 
   * 点击编辑菜单图标默认不关闭整个菜单，应用可以通过action接口配置RichEditorController的closeSelectionMenu主动关闭菜单。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  editorMenuOptions?: Array<EditorMenuOptions>;

  /**
   * 扩展下拉菜单。
   * 
   * expandedMenuOptions参数为空时无更多按钮，不显示扩展下拉菜单。
   * 
   * expandedMenuOptions参数不为空时显示更多按钮，配置菜单项收起在更多按钮中，点击更多按钮展示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  expandedMenuOptions?: Array<ExpandedMenuOptions>;

  /**
   * 富文本控制器不为空时显示默认系统菜单（包含剪切复制粘贴等部分）且默认菜单功能内置。
   * 
   * controller为空时不显示更多按钮，expandedMenuOptions参数不为空则在下拉菜单中显示。
   * 
   * 系统默认只支持复制粘贴富文本文本内容，图文混排需要应用自定义onCopy、onPaste接口。应用自行配置onCopy | onPaste接口时，系统菜单默认复制粘贴失效，调用应用自定义函数。 
   * 
   * **说明：**
   * 
   * 点击自定义文本选择菜单内置复制功能选项后，自定义菜单消失选中文本高亮保留。
   * 
   * 点击自定义文本选择菜单内置全选功能选项后，自定义菜单消失文本全选高亮。
   * 
   * 点击自定义文本选择菜单内置粘贴功能选项后，空白处粘贴或者选中文本替换粘贴均是保留被复制文本的样式。
   * 
   * 当富文本组件[RichEditor](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-richeditor.md)的copyOptions属性设置为
   * `CopyOptions.None`时，内置的复制剪切功能不会被限制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller?: RichEditorController;

  /**
   * 替代内置系统菜单粘贴项的事件回调。
   * 
   * 生效前提是一定要有controller参数，有系统默认菜单才能替换内置粘贴功能。
   * 
   * **说明：**
   * 
   * event为返回信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onPaste?: SelectionMenuOnPasteCallback;

  /**
   * 替代内置系统菜单复制项的事件回调。
   * 
   * 生效前提是一定要有controller参数，有系统默认菜单才能替换内置复制功能。
   * 
   * **说明：**
   * 
   * event为返回信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onCopy?: SelectionMenuOnCopyCallback;

  /**
   * 替代内置系统菜单剪切项的事件回调。
   * 
   * 生效前提是一定要有controller参数，有系统默认菜单才能替换内置剪切功能。
   * 
   * **说明：**
   * 
   * event为返回信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onCut?: SelectionMenuOnCutCallback;

  /**
   * 替代内置系统菜单全选项的事件回调。
   * 
   * 生效前提是一定要有controller参数，有系统默认菜单才能替换内置全选功能。
   * 
   * **说明：**
   * 
   * event为返回信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onSelectAll?: SelectionMenuOnSelectAllCallback;

  /**
   * 菜单背景板使用的系统材质，用于实现菜单背景的视觉效果（如模糊、透明度等）。不同系统材质包含不同的属性，影响最终的显示效果。具体材质类型及属性请参考
   * [uiMaterial.Material](docroot://reference/apis-arkui/arkts-apis-uimaterial.md#material)。默认值：undefined，无材质效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  backgroundSystemMaterial?: uiMaterial.Material;
}

/**
 * 入参为空时，文本选择菜单组件SelectionMenu内容区大小及组件大小为零。表现例如，富文本组件
 * [RichEditor](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-richeditor.md)使用
 * [bindSelectionMenu](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-richeditor.md#bindselectionmenu)接口绑定一
 * 个SelectionMenu的右键菜单，则右键富文本组件区域时无任何菜单弹出。
 *
 * @param { SelectionMenuOptions } options - 文本选择菜单可选项。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Builder
export declare function SelectionMenu(options: SelectionMenuOptions): void;
