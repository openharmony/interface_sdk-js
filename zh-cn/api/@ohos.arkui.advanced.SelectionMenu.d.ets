/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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

import uiMaterial from './@ohos.arkui.uiMaterial';

/**
 * 编辑菜单选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface EditorMenuOptions {

  /**
   * 图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon: ResourceStr;

  /**
   * Symbol图标资源，优先级大于icon。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * 点击菜单项的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  action?: () => void;

  /**
   * 点击时显示用户自定义组件，自定义组件在构造时结合@Builder使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  builder?: () => void;
}

/**
 * 扩展下拉菜单。
 * 
 * 继承于[MenuItemOptions](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-menuitem.md#menuitemoptions对象说明)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface ExpandedMenuOptions extends MenuItemOptions {

  /**
   * 点击菜单项的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  action?: () => void;
}

/**
 * 选中内容信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface EditorEventInfo {

  /**
   * 选中内容信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  content?: RichEditorSelection;
}

/**
 * SelectionMenuOptions定义SelectionMenu的可选菜单类型项及其具体配置参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  expandedMenuOptions?: Array<ExpandedMenuOptions>;

  /**
   * 扩展下拉菜单。
   * 
   * expandedMenuOptions参数为空时无更多按钮，不显示扩展下拉菜单。
   * 
   * expandedMenuOptions参数不为空时显示更多按钮，配置菜单项收起在更多按钮中，点击更多按钮展示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onPaste?: (event?: EditorEventInfo) => void;

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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onCopy?: (event?: EditorEventInfo) => void;

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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onCut?: (event?: EditorEventInfo) => void;

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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onSelectAll?: (event?: EditorEventInfo) => void;

  /**
   * 菜单的背景板的系统材质。不同系统材质包含不同的属性影响效果。默认值：undefined，无材质效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundSystemMaterial?: uiMaterial.Material;
}

/**
 * 入参为空时，文本选择菜单组件SelectionMenu内容区大小及组件大小为零。表现例如，富文本组件[RichEditor]{@link rich_editor}使用
 * [bindSelectionMenu]{@link RichEditorAttribute#bindSelectionMenu}接口绑定一个SelectionMenu的右键菜单，则右键富文本组件区域时无任何菜单弹出。
 *
 * @param { SelectionMenuOptions } options - 文本选择菜单可选项。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Builder
export declare function SelectionMenu(options: SelectionMenuOptions): void;