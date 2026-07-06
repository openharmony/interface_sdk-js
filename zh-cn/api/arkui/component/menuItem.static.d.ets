'use static'
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
 * 用来展示菜单中具体的菜单选项。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 * 
 * > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。
 * 
 * ###### 子组件
 * 
 * 无
 *
 * @file
 * @kit ArkUI
 */
import { ResourceStr, Font, ResourceColor } from './units';
import { CommonMethod, Bindable } from './common';
import { CustomBuilder } from './builder';
import { SymbolGlyphModifier } from '../../arkui/SymbolGlyphModifier';
import { ComponentBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MenuItemOptions {
    /**
     * MenuItem的起始图标。不支持Symbol图标。使用Symbol图标时，须使用symbolStartIcon。 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    startIcon?: ResourceStr;
    /**
     * MenuItem起始的Symbol图标。配置该项时，原先startIcon图标不显示。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    symbolStartIcon?: SymbolGlyphModifier;
    /**
     * MenuItem的内容。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    content?: ResourceStr;
    /**
     * MenuItem的末尾图标。不支持Symbol图标。使用Symbol图标时，须使用symbolEndIcon。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    endIcon?: ResourceStr;
    /**
     * MenuItem末尾的Symbol图标。配置该项时，原先endIcon图标不显示。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    symbolEndIcon?: SymbolGlyphModifier;
    /**
     * MenuItem结束的标签信息，如快捷方式Ctrl+C等。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    labelInfo?: ResourceStr;
    /**
     * 用于构建二级菜单。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    builder?: CustomBuilder;
}
/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MenuItemAttribute extends CommonMethod {
    /**
     * 设置菜单项是否选中。
     * 
     * 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
     * 
     * 从API version 18开始，该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
     *
     * @param { boolean | undefined | Bindable<boolean> } value - 菜单项是否选中。取值为undefined时，按默认值处理。<br/>true：菜单项被选中；false：菜单
     *     项不被选中。<br />默认值：false
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selected(value: boolean | undefined | Bindable<boolean>): this;
    /**
     * 设置当菜单项被选中时，是否显示被选中的图标。
     *
     * @param { boolean | ResourceStr | SymbolGlyphModifier | undefined } value - 菜单项被选中时，是否显示被选中的图标。取值为undefined时，按默认值处
     *     理。<br/>true：显示默认的对勾图标；false：不显示图标。<br/>ResourceStr：显示指定的图标。<br/>SymbolGlyphModifier：显示指定的HMSymbol图标。<br/>默认值：
     *     false
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selectIcon(value: boolean | ResourceStr | SymbolGlyphModifier | undefined): this;
    /**
     * 当选中状态发生变化时，触发该回调。只有手动触发且MenuItem状态改变时才会触发onChange回调。
     *
     * @param { ((selected: boolean) => void) | undefined } callback - 选中状态发生变化时，触发该回调。<br />true：未选中切换为选中；false：选中切换为未选
     *     中。<br/>ArkTS-Sta：当callback的值为undefined时，不使用回调函数。
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onChange(callback: ((selected: boolean) => void) | undefined): this;
    /**
     * 设置菜单项中内容信息的字体样式。
     *
     * @param { Font | undefined } value - 菜单项中内容信息的字体样式。取值为undefined时，按各属性的默认值处理。
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentFont(value: Font | undefined): this;
    /**
     * 设置菜单项中内容信息的字体颜色。
     *
     * @param { ResourceColor | undefined } value - 菜单项中内容信息的字体颜色。取值为undefined时，按默认值处理。<br />默认值：'#E5000000'
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentFontColor(value: ResourceColor | undefined): this;
    /**
     * 设置菜单项中标签信息的字体样式。
     *
     * @param { Font | undefined } value - 菜单项中标签信息的字体样式。取值为undefined时，按各属性的默认值处理。
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default labelFont(value: Font | undefined): this;
    /**
     * 设置菜单项中标签信息的字体颜色。
     *
     * @param { ResourceColor | undefined } value - 菜单项中标签信息的字体颜色。取值为undefined时，按默认值处理。<br />默认值：'#99000000'
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default labelFontColor(value: ResourceColor | undefined): this;
    /**
     * 设置MenuItem组件的属性修改器。
     *
     * @param { AttributeModifier<MenuItemAttribute> | AttributeModifier<CommonMethod> | undefined } modifier - MenuItem
     *     组件的属性修改器。取值为undefined时，则不使用属性修改器。<br/>CommonMethod：[通用属性]{@link common}
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(
        modifier: AttributeModifier<MenuItemAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines MenuItem Component.
 *
 * @param { MenuItemOptions | CustomBuilder } [value] - the options of MenuItem.
 * @param { CustomBuilder } [content_] - container
 * @returns { MenuItemAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function MenuItem(
    value?: MenuItemOptions | CustomBuilder,
    content_?: CustomBuilder,
): MenuItemAttribute