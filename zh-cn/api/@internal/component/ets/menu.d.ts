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
 * 以垂直列表形式显示的菜单。
 * 
 * > **说明：**
 * 
 * > - Menu组件需和
 * > [bindMenu]{@link CommonMethod#bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions)}或
 * > [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)}
 * > 方法配合使用，不支持作为普通组件单独使用。
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
     * 作为菜单的固定容器，无参数。
     * 
     * > **说明：** 
     * >
     * > - 菜单和菜单项宽度计算规则：
     * > >
     * > >   - 布局过程中，期望每个菜单项的宽度一致。若子组件设置了宽度，则以[constraintSize]{@link CommonMethod#constraintSize}为准。
     * > >
     * > >   - Menu不设置宽度的情况：Menu会对子组件MenuItem、MenuItemGroup设置默认2栅格的宽度，若菜单项内容区比2栅格宽，则会自适应撑开。
     * > >
     * > >   - Menu设置宽度的情况：Menu会对子组件MenuItem、MenuItemGroup设置减去padding后的固定宽度。
     * > >
     * > >   - Menu支持设置的最小宽度为64vp。
     * >
     * > - Menu不支持的通用属性：[外描边设置]{@link common}下的属性、
     * > [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}。
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
 * Menu子菜单展开样式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum SubMenuExpandingMode {
    /**
     * 默认展开样式，子菜单位于同一平面侧边展开。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    SIDE_EXPAND = 0,
    /**
     * 直接展开样式，子菜单嵌于主菜单内展开。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    EMBEDDED_EXPAND = 1,
    /**
     * 堆叠样式，子菜单浮于主菜单上方展开。
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
 * 除支持[通用属性]{@link common}外，还支持以下属性：
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
     * 统一设置Menu中所有文本的尺寸。
     * 
     * > **说明：** 
     * >
     * > 从API version 9开始支持，从API version 10开始废弃，建议使用[font]{@link MenuAttribute#font}代替。
     *
     * @param { Length } value - Menu中所有文本的尺寸，Length为number类型时，使用fp单位。不支持设置百分比。
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstead font
     */
    fontSize(value: Length): MenuAttribute;
    /**
     * 统一设置Menu中所有文本的尺寸。
     *
     * @param { Font } value - Menu中所有文本的尺寸。<br/>默认值：<br/>{<br/>      size: 16,<br/>      family: 'HarmonyOS Sans',<br/>
     *          weight: FontWeight.Medium,<br/>      style: FontStyle.Normal<br/>}
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    font(value: Font): MenuAttribute;
    /**
     * 统一设置Menu中所有文本的颜色。
     *
     * @param { ResourceColor } value - Menu中所有文本的颜色。
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    fontColor(value: ResourceColor): MenuAttribute;
    /**
     * 设置Menu边框圆角半径。
     *
     * @param { Dimension | BorderRadiuses } value - Menu边框圆角半径。<br/>默认值：2in1设备上默认值为8vp，其他设备上默认值为20vp。<br/> 从API version
     *     12开始，当水平方向两个圆角半径之和的最大值大于菜单宽度，或垂直方向两个圆角半径之和的最大值大于菜单高度时，菜单四个圆角均采用菜单默认圆角半径值。<br/>当设置Dimension类型且传参为异常值时，菜单圆角取默认
     *     值。<br/>当设置BorderRadiuses类型且传参为异常值时，菜单默认没有圆角。
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    radius(value: Dimension | BorderRadiuses): MenuAttribute;
    /**
     * 设置menuItem分割线样式，不设置该属性则不展示分割线。
     * 
     * startMargin + endMargin 超过组件宽度后startMargin和endMargin会被置0。
     *
     * @param { DividerStyleOptions | undefined } options - 设置menuItem分割线样式。<br />-strokeWidth：分割线的线宽。<br />-color：分割线的颜
     *     色。<br />-startMargin：分割线与menuItem侧边起始端的距离。<br />-endMargin：分割线与menuItem侧边结束端的距离。<br />-mode：分割线的模式，默认值为
     *     FLOATING_ABOVE_MENU。
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    menuItemDivider(options: DividerStyleOptions | undefined): MenuAttribute;
    /**
     * 设置menuItemGroup上下分割线的样式，不设置该属性则默认展示分割线。
     *
     * @param { DividerStyleOptions | undefined } options - 设置menuItemGroup顶部和底部分割线样式。<br />-strokeWidth：分割线的线宽，默认值是1px。
     *     <br />-color：分割线的颜色，默认值是 #33000000。<br />-startMargin：分割线与menuItemGroup侧边起始端的距离，默认为16vp，单位为vp。<br />-
     *     endMargin：分割线与menuItemGroup侧边结束端的距离，默认为16vp，单位为vp。<br />-mode：分割线的模式，默认值为FLOATING_ABOVE_MENU。
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    menuItemGroupDivider(options: DividerStyleOptions | undefined): MenuAttribute;
    /**
     * 设置Menu子菜单展开样式。
     *
     * @param { SubMenuExpandingMode } mode - Menu子菜单展开样式。<br/>默认值：SubMenuExpandingMode.SIDE_EXPAND
     * @returns { MenuAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    subMenuExpandingMode(mode: SubMenuExpandingMode): MenuAttribute;
    /**
     * 设置Menu子菜单展开符号。
     *
     * @param { SymbolGlyphModifier } symbol - Menu子菜单展开符号。<br/>1、子菜单的展开样式为SubMenuExpandingMode.SIDE_EXPAND时，不显示展开符号。<br
     *     />2、子菜单的展开样式为SubMenuExpandingMode.EMBEDDED_EXPAND时，展开时展开符号会顺时针旋转180°。<br/>默认值：
     *     `$r('sys.symbol.chevron_down').fontSize('24vp')` <br/>3、子菜单的展开样式为SubMenuExpandingMode.STACK_EXPAND时，展开时展开符号会顺
     *     时针旋转90°。<br/>默认值：`$r('sys.symbol.chevron_forward').fontSize('20vp').padding('2vp')`
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
 * 以垂直列表形式显示的菜单。
 * 
 * > **说明：**
 * 
 * > - Menu组件需和
 * > [bindMenu]{@link CommonMethod#bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions)}或
 * > [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)}
 * > 方法配合使用，不支持作为普通组件单独使用。
 * 
 * ###### 子组件
 * 
 * 包含[MenuItem]{@link menu_item}、[MenuItemGroup]{@link menu_item_group}子组件。
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
 * @noninterop [since 11]
 */
declare const MenuInstance: MenuAttribute;