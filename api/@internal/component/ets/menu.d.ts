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
 * The **Menu** component is a vertical list of items presented to the user.
 * 
 * > **NOTE**
 * >
 * > - This component is supported since API version 9. Newly added APIs will be marked with a superscript to indicate 
 * > their 
 * >
 * > - The **Menu** component must be used together with the 
 * > [bindMenu]{@link CommonMethod#bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions)} or 
 * > [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)}
 * > method. It does not work when used alone.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
interface MenuInterface {
    /**
     * Creates a fixed container for a menu. This API does not have any parameters.
     * 
     * > **NOTE**
     * >
     * > - Rules for calculating the width of menus and menu items:
     * > >
     * > >   - During the layout, the width of each menu item is expected to be the same. If a child component has its 
     * > width set, the [size calculation rule]{@link CommonMethod#constraintSize} prevails.
     * > >
     * > >   - If no width is set for the **Menu** component, it applies a default two-column width to the **MenuItem** 
     * > and **MenuItemGroup** child components. If a menu item's content area exceeds the two-column width, the 
     * > **Menu** component automatically expands the menu item's content area.
     * > >
     * > >   - When an explicit width is set for the **Menu** component, its child components **MenuItem** and 
     * > **MenuItemGroup** adopt a fixed width (equal to the **Menu** component's configured width minus the padding).
     * > >
     * > >   - The minimum width is 64 vp.
     * >
     * > - Universal attributes unsupported by **Menu**: [outline]{@link common} attributes and the 
     * > [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} attribute
     *
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    (): MenuAttribute;
}

/**
 * Enumerates the submenu expanding modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum SubMenuExpandingMode {
    /**
     * Default mode. Submenus are expanded on the side on the same plane.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    SIDE_EXPAND = 0,
    /**
     * Embedded mode. Submenus are expanded while embedded within the main menu.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    EMBEDDED_EXPAND = 1,
    /**
     * Stack mode. Submenus are expanded above the main menu.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    STACK_EXPAND = 2
}

/**
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare class MenuAttribute extends CommonMethod<MenuAttribute> {
    /**
     * Sets the size of all text within the menu.
     * 
     * > **NOTE**
     *
     * @param { Length } value - Size of all text within the menu. If the value of the Length type is a number, the unit
     *     is fp. Percentage values are not supported.
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstead font
     */
    fontSize(value: Length): MenuAttribute;
    /**
     * Sets the size of all text within the menu.
     *
     * @param { Font } value - Size of all text within the menu.<br>Default value:<br>{<br>      size: 16,<br>
     *     family: 'HarmonyOS Sans',<br>      weight: FontWeight.Medium,<br>      style: FontStyle.Normal<br>}
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    font(value: Font): MenuAttribute;
    /**
     * Sets the font color of all text within the menu.
     *
     * @param { ResourceColor } value - Font color of all text within the menu.
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    fontColor(value: ResourceColor): MenuAttribute;
    /**
     * Sets the radius of the menu border corners.
     *
     * @param { Dimension | BorderRadiuses } value - Radius of the menu border corners.<br>Default value: **8vp** for 2-
     *     in-1 devices and **20vp** for other devices<br> Since API version 12, if the sum of the two maximum corner
     *     radii in the horizontal direction exceeds the menu width, or if the sum of the two maximum corner radii in
     *     the vertical direction exceeds the menu height, the default corner radius will be used for all four corners
     *     of the menu.<br>When the Dimension type is used: Invalid input values will trigger a fallback to the default
     *     corner radius.<br>When the BorderRadiuses type is used: Invalid input values will result in the menu having
     *     no rounded corners by default.
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    radius(value: Dimension | BorderRadiuses): MenuAttribute;
    /**
     * Sets the style of the menu item divider. If this attribute is not set, the divider will not be displayed.
     * 
     * If the sum of **startMargin** and **endMargin** exceeds the component width, both **startMargin** and 
     * **endMargin** will be set to **0**.
     *
     * @param { DividerStyleOptions | undefined } options - Style of the menu item divider.<br>- **strokeWidth**: stroke
     *     width of the divider.<br>- **color**: color of the divider.<br>- **startMargin**: distance between the
     *     divider and the start edge of the menu item.<br>- **endMargin**: distance between the divider and the end
     *     edge of the menu item.<br>- **mode**: mode of the divider, which is **FLOATING_ABOVE_MENU** by default.
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    menuItemDivider(options: DividerStyleOptions | undefined): MenuAttribute;
    /**
     * Sets the style of the top and bottom dividers for the menu item group. If this attribute is not set, the dividers
     * will be displayed by default.
     *
     * @param { DividerStyleOptions | undefined } options - Style of the top and bottom dividers for the menu item
     *     group.<br>- **strokeWidth**: stroke width of the divider. The default value is 1 px.<br>- **color**: color of
     *     the divider. The default value is **#33000000**.<br>- **startMargin**: distance between the divider and the
     *     start edge of the menu item group. The default value is 16 vp.<br>- **endMargin**: distance between the
     *     divider and the end edge of the menu item group. The default value is 16 vp.<br>- **mode**: mode of the
     *     divider, which is **FLOATING_ABOVE_MENU** by default.
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    menuItemGroupDivider(options: DividerStyleOptions | undefined): MenuAttribute;
    /**
     * Sets the submenu expanding mode of the menu.
     *
     * @param { SubMenuExpandingMode } mode - Submenu expanding mode of the menu.<br>Default value:
     *     **SubMenuExpandingMode.SIDE_EXPAND**
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    subMenuExpandingMode(mode: SubMenuExpandingMode): MenuAttribute;
    /**
     * Sets the submenu expand symbol of the menu.
     *
     * @param { SymbolGlyphModifier } symbol - Submenu expand symbol of the menu.<br>1.
     *     **SubMenuExpandingMode.SIDE_EXPAND**: The expand symbol is not displayed.<br>2.
     *     **SubMenuExpandingMode.EMBEDDED_EXPAND**: The symbol rotates 180° clockwise upon expansion.<br>Default value:
     *     **$r('sys.symbol.chevron_down').fontSize('24vp')**<br>3. **SubMenuExpandingMode.STACK_EXPAND**: The symbol
     *     rotates 90° clockwise upon expansion.<br>Default value:
     *     **$r('sys.symbol.chevron_forward').fontSize('20vp').padding('2vp')**
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 23]
     * @atomicservice
     * @since 20 dynamic
     */
    subMenuExpandSymbol(symbol: SymbolGlyphModifier): MenuAttribute;
}

/**
 * The **Menu** component is a vertical list of items presented to the user.
 * 
 * > **NOTE**
 * >
 * > - This component is supported since API version 9. Newly added APIs will be marked with a superscript to indicate 
 * > their 
 * >
 * > - The **Menu** component must be used together with the 
 * > [bindMenu]{@link CommonMethod#bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions)} or 
 * > [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)}
 * > method. It does not work when used alone.
 * 
 * ###### Child Components
 * 
 * This component contains the [MenuItem]{@link menu_item} and [MenuItemGroup]{@link menu_item_group} child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const Menu: MenuInterface;

/**
 * Defines Menu Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const MenuInstance: MenuAttribute;