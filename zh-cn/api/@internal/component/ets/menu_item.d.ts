/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * Menu中的菜单项信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare interface MenuItemOptions {
  /**
   * MenuItem的起始图标。不支持Symbol图标。使用Symbol图标时，须使用symbolStartIcon。默认不显示起始图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  startIcon?: ResourceStr;

  /**
   * MenuItem起始的Symbol图标。配置该项时，原先startIcon图标不显示。默认不显示Symbol起始图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  symbolStartIcon?: SymbolGlyphModifier;

  /**
   * MenuItem的内容。默认为空字符串。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  content?: ResourceStr;

  /**
   * MenuItem的末尾图标。不支持Symbol图标。使用Symbol图标时，须使用symbolEndIcon。默认不显示末尾图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  endIcon?: ResourceStr;

  /**
   * MenuItem末尾的Symbol图标。配置该项时，原先endIcon图标不显示。默认不显示Symbol末尾图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  symbolEndIcon?: SymbolGlyphModifier;

  /**
   * MenuItem结束的标签信息，如快捷方式Ctrl+C等。默认不显示标签信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  labelInfo?: ResourceStr;

  /**
   * 用于构建二级菜单。默认不显示二级菜单。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  builder?: CustomBuilder;
}

/**
 * 用来展示菜单中具体的菜单选项。
 * 
 * > **说明：**
 * 
 * > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
interface MenuItemInterface {
  /**
   *
   * @param { MenuItemOptions | CustomBuilder } value - 包含设置MenuItem的各项信息。需要使用标准菜单项配置（如起始图标、内容、标签等）时选择MenuItemOptions；需要自定义菜单项的显示内容和布局时选择CustomBuilder。如果不传该参数，则创建空的MenuItem对象。
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  (value?: MenuItemOptions | CustomBuilder): MenuItemAttribute;
}

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare class MenuItemAttribute extends CommonMethod<MenuItemAttribute> {
  /**
   * 设置菜单项是否选中。
   * 
   * 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   * 
   * 从API version 18开始，该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   *
   * @param { boolean } value - 菜单项是否选中。<br/>true：菜单项被选中；false：菜单项不被选中。<br />默认值：false
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  selected(value: boolean): MenuItemAttribute;

  /**
   * 设置当菜单项被选中时，菜单项图标的显示方式。
   *
   * @param { boolean } value - 菜单项被选中时的图标显示方式。<br/>true：显示默认的对勾图标；false：不显示图标。<br/>ResourceStr：显示指定的图标。<br/>
   *     SymbolGlyphModifier：显示指定的HMSymbol图标。<br/>默认值：false [since 9 - 9]
   * @param { boolean | ResourceStr } value - 菜单项被选中时的图标显示方式。<br/>true：显示默认的对勾图标；false：不显示图标。<br/>ResourceStr：显示指定的图
   *     标。<br/>SymbolGlyphModifier：显示指定的HMSymbol图标。<br/>默认值：false [since 10 - 11]
   * @param { boolean | ResourceStr | SymbolGlyphModifier } value - 菜单项被选中时的图标显示方式。<br/>true：显示默认的对勾图标；false：不显示图标。<
   *     br/>ResourceStr：显示指定的图标。<br/>SymbolGlyphModifier：显示指定的HMSymbol图标。<br/>默认值：false [since 12]
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  selectIcon(value: boolean | ResourceStr | SymbolGlyphModifier): MenuItemAttribute;

  /**
   * 当选中状态发生变化时，触发该回调。只有手动触发且MenuItem状态改变时才会触发onChange回调。
   *
   * @param { function } callback - 当前菜单项是否被选中。<br />true：当前菜单项已选中；false：当前菜单项未选中。
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onChange(callback: (selected: boolean) => void): MenuItemAttribute;

  /**
   * 设置菜单项中内容信息的字体样式。
   *
   * @param { Font } value - 菜单项中内容信息的字体样式。
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  contentFont(value: Font): MenuItemAttribute;

  /**
   * 设置菜单项中内容信息的字体颜色。
   *
   * @param { ResourceColor } value - 菜单项中内容信息的字体颜色。<br />默认值：'#E5000000'
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  contentFontColor(value: ResourceColor): MenuItemAttribute;

  /**
   * 设置菜单项中标签信息的字体样式。
   *
   * @param { Font } value - 菜单项中标签信息的字体样式。
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  labelFont(value: Font): MenuItemAttribute;

  /**
   * 设置菜单项中标签信息的字体颜色。
   *
   * @param { ResourceColor } value - 菜单项中标签信息的字体颜色。<br />默认值：'#99000000'
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  labelFontColor(value: ResourceColor): MenuItemAttribute;

  /**
   * Create the submenu for custom menu item.
   *
   * @param { CustomBuilder } builder - Indicates the builder function for submenu.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  subMenuBuilder(builder: CustomBuilder): MenuItemAttribute;
}

/**
 * 用来展示菜单中具体的菜单选项。
 * 
 * > **说明：**
 * 
 * > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。
 * 
 * ###### 子组件
 * 
 * 无
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare const MenuItem: MenuItemInterface;

/**
 * Defines MenuItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare const MenuItemInstance: MenuItemAttribute;