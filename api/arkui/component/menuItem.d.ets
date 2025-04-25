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
 * @arkts 1.2
 */


import { ResourceStr, Font, ResourceColor } from "./units";
import { CustomBuilder, CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { SymbolGlyphModifier } from '../../arkui/SymbolGlyphModifier';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Defines the option of MenuItem.
 *
 * @interface MenuItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface MenuItemOptions {
    /**
     * Defines the start display image info.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    startIcon?: ResourceStr;
    /**
     * Defines the start display symbol info.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    symbolStartIcon?: SymbolGlyphModifier;
    /**
     * Defines the content string display info.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    content?: ResourceStr;
    /**
     * Defines the end display image info.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    endIcon?: ResourceStr;
    /**
     * Defines the end display symbol info.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    symbolEndIcon?: SymbolGlyphModifier;
    /**
     * Defines the end label info like shortcut.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    labelInfo?: ResourceStr;
    /**
     * Create the submenu.
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    builder?: CustomBuilder;
}
export declare interface MenuItemAttribute extends CommonMethod {
    /**
     * Setting whether menuItem is selected.
     *
     * @param { boolean } value
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selected(value: boolean | undefined): this;
    /**
     * Whether the relevant check icon is displayed when a menu item is selected.
     * Use type ResourceStr or SymbolGlyphModifier to specify icon instead of the default check mark.
     *
     * @param { boolean | ResourceStr | SymbolGlyphModifier } value - Indicates whether to display icon when selected.
     * <br>true: displays the default check mark when selected.
     * <br>false: does not displays icon when selected.
     * <br>ResourceStr or SymbolGlyphModifier: displays the specified icon when selected.
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectIcon(value: boolean | ResourceStr | SymbolGlyphModifier | undefined): this;
    /**
     * Triggers a callback when a menu item is selected or unchecked.
     *
     * @param { function } callback
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onChange(callback: ((selected: boolean) => void) | undefined): this;
    /**
     * Sets the content font style.
     * Family and style are not supported currently and will be fixed in future.
     *
     * @param { Font } value - Indicates the font style of content text.
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentFont(value: Font | undefined): this;
    /**
     * Sets the font color of content text.
     *
     * @param { ResourceColor } value - Indicates the font color of content text.
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentFontColor(value: ResourceColor | undefined): this;
    /**
     * Sets the label info font style.
     * Family and style are not supported currently and will be fixed in future.
     *
     * @param { Font } value - Indicates the font style of label info text.
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    labelFont(value: Font | undefined): this;
    /**
     * Sets the font color of label info text.
     *
     * @param { ResourceColor } value - Indicates the font color of label info text.
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    labelFontColor(value: ResourceColor | undefined): this;
    attributeModifier(modifier: AttributeModifier<MenuItemAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIMenuItemAttribute extends UICommonMethod {
    /**
     * Setting whether menuItem is selected.
     *
     * @param { boolean } value
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selected(value: boolean | undefined): this;
    /**
     * Whether the relevant check icon is displayed when a menu item is selected.
     * Use type ResourceStr or SymbolGlyphModifier to specify icon instead of the default check mark.
     *
     * @param { boolean | ResourceStr | SymbolGlyphModifier } value - Indicates whether to display icon when selected.
     * <br>true: displays the default check mark when selected.
     * <br>false: does not displays icon when selected.
     * <br>ResourceStr or SymbolGlyphModifier: displays the specified icon when selected.
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selectIcon(value: boolean | ResourceStr | SymbolGlyphModifier | undefined): this;
    /**
     * Triggers a callback when a menu item is selected or unchecked.
     *
     * @param { function } callback
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onChange(callback: ((selected: boolean) => void) | undefined): this;
    /**
     * Sets the content font style.
     * Family and style are not supported currently and will be fixed in future.
     *
     * @param { Font } value - Indicates the font style of content text.
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    contentFont(value: Font | undefined): this;
    /**
     * Sets the font color of content text.
     *
     * @param { ResourceColor } value - Indicates the font color of content text.
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    contentFontColor(value: ResourceColor | undefined): this;
    /**
     * Sets the label info font style.
     * Family and style are not supported currently and will be fixed in future.
     *
     * @param { Font } value - Indicates the font style of label info text.
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    labelFont(value: Font | undefined): this;
    /**
     * Sets the font color of label info text.
     *
     * @param { ResourceColor } value - Indicates the font color of label info text.
     * @returns { MenuItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    labelFontColor(value: ResourceColor | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<MenuItemAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function MenuItem(
    value?: MenuItemOptions | CustomBuilder, 
    @memo
    content_?: () => void,
): UIMenuItemAttribute