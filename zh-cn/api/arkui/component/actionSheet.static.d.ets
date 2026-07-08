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
 * 列表弹窗。
 * 
 * > **说明：**
 * > >  本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 * >
 * > 从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 * >
 * > 本模块功能依赖UI的执行上下文，不可在[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的地方使用，参见
 * > [UIContext]{@link @ohos.arkui.UIContext}说明。
 * 
 *
 * @file ActionSheet
 * @kit ArkUI
 */
import { Resource } from '../../global/resource';
import { VoidCallback, ResourceStr, ResourceColor, Dimension, BorderRadiuses, LocalizedEdgeColors, EdgeColors, EdgeWidths, LocalizedEdgeWidths, EdgeStyles, LocalizedBorderRadiuses } from './units';
import { Callback, DismissReason, Rectangle, BlurStyle, TransitionEffect, ShadowOptions, HoverModeAreaType, ShadowStyle, BackgroundBlurStyleOptions, BackgroundEffectOptions, DistortionMode, EdgeLightMode } from './common';
import { DialogButtonStyle, BorderStyle } from './enums';
import { DialogAlignment } from './alertDialog';
import { LevelOrder, LevelMode, ImmersiveMode } from '../../@ohos.promptAction';
import { AttributeModifier, CommonMethod, SystemUiMaterial } from './common';
/**
 * 弹窗中的选项内容，每一项支持设置文本、图标以及选中的回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface SheetInfo {
    /**
     * 选项的文本内容。
     * 
     * 文本超长时会触发滚动条。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    title: string | Resource;
    /**
     * 选项的图标，默认无图标显示。
     * 
     * string格式可用于加载网络图片和本地图片，常用于加载网络图片。当使用相对路径引用本地图片时，例如Image("common/test.jpg")。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    icon?: string | Resource;
    /**
     * 选项选中的回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: VoidCallback;
}
/**
 * Dialog关闭的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DismissDialogAction {
    /**
     * Dialog关闭回调函数。开发者需要退出时调用，不需要退出时无需调用此函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dismiss(): void;
    /**
     * Reason why the dialog box cannot be dismissed. You must specify whether to close the dialog box for each of the
     * listed actions.
     *
     * @type { DismissReason }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reason: DismissReason;
}
/**
 * 弹窗中按钮的样式。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ActionSheetButtonOptions {
    /**
     * 点击Button是否响应，true表示Button可以响应，false表示Button不可以响应。
     * 
     * 默认值：true
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 10 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enabled?: boolean;
    /**
     * 设置Button是否是默认焦点，true表示Button是默认焦点，false表示Button不是默认焦点。
     * 
     * 默认值：false
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 10 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    defaultFocus?: boolean;
    /**
     * 设置Button的风格样式。
     * 
     * 默认值：DialogButtonStyle.DEFAULT
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 10 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default DialogButtonStyle.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    style?: DialogButtonStyle;
    /**
     * Button文本内容。
     * 
     * 当文本内容过长无法显示时，用省略号代替未显示的部分。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 8 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: string | Resource;
    /**
     * Button选中时的回调。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 8
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: VoidCallback;
}
/**
 * 弹窗的对齐方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ActionSheetOffset {
    /**
     * 弹出窗口相对于对齐位置dx的偏移量。
     * 
     * 需要显式指定像素单位，如'10px'，也可设置百分比字符串，如'100%'。
     * 
     * **说明：** 
     * 
     * 不指定像素单位时，默认单位vp，如'10'，等同于10。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dx: double | string | Resource;
    /**
     * 弹出窗口相对于对齐位置dy的偏移量。
     * 
     * 需要显式指定像素单位，如'10px'，也可设置百分比字符串，如'100%'。
     * 
     * **说明：** 
     * 
     * 不指定像素单位时，默认单位vp，如'10'，等同于10。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    dy: double | string | Resource;
}
/**
 * 列表选择弹窗的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ActionSheetOptions {
    /**
     * 弹窗标题。
     * 
     * 当文本内容过长无法显示时，用省略号代替未显示的部分。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。 
     * 
     * **ArkTS-Dyn起始版本：** 11 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    title: string | Resource;
    /**
     * 弹窗副标题。
     * 
     * 当文本内容过长无法显示时，用省略号代替未显示的部分。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。 
     * 
     * **ArkTS-Dyn起始版本：** 10 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    subtitle?: ResourceStr;
    /**
     * 弹窗内容。
     * 
     * 文本超长时会触发滚动条。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。  
     * 
     * **ArkTS-Dyn起始版本：** 11 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    message: string | Resource;
    /**
     * 确认Button的使能状态、默认焦点、按钮风格、文本内容和点击回调。在弹窗获焦且未进行tab键走焦时，该按钮默认响应Enter键。多重弹窗情况下，可自动获焦并连续响应。默认响应Enter键能力在defaultFocus为
     * true时不生效。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。 
     * 
     * **ArkTS-Dyn起始版本：** 18 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    confirm?: ActionSheetButtonOptions;
    /**
     * 点击遮障层关闭dialog时的回调。  
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。  
     * 
     * **ArkTS-Dyn起始版本：** 18 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    cancel?: VoidCallback;
    /**
     * 设置选项内容，每个选择项支持设置图片、文本和选中的回调。 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 11 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    sheets: Array<SheetInfo>;
    /**
     * 点击遮障层时，是否关闭弹窗。
     * 
     * 默认值：true
     * 
     * 值为true时，点击遮障层关闭弹窗，值为false时，点击遮障层不关闭弹窗。 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 11 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default true - The value true means to close the dialog box when the overlay is clicked, and false means
     *     the opposite.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    autoCancel?: boolean;
    /**
     * 弹窗在竖直方向上的对齐方式。
     * 
     * 默认值：DialogAlignment.Bottom  
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * **说明：** 
     * 
     * 若在[UIExtension]{@link @ohos.arkui.uiExtension:uiExtension}中设置showInSubWindow为true，弹窗将基于UIExtension的宿主窗口对齐。
     * 
     * **ArkTS-Dyn起始版本：** 11 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default DialogAlignment.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    alignment?: DialogAlignment;
    /**
     * 弹窗相对alignment所在位置的偏移量。
     * 
     * 默认值：
     * 
     * 1.alignment设置为Top、TopStart、TopEnd时默认值为{dx: 0,dy: "40vp"} 
     * 
     * 2.alignment设置为其他时默认值为{dx: 0,dy: "-40vp"} 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 18 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: ActionSheetOffset;
    /**
     * 弹窗遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。
     * 
     * 默认值：{ x: 0, y: 0, width: '100%', height: '100%' } 
     * 
     * **说明：** 
     * 
     * showInSubWindow为true时，maskRect不生效。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 10 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default - {x:0,y:0, width:'100%', height:'100%'}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    maskRect?: Rectangle;
    /**
     * 某弹窗需要显示在主窗口之外时，是否在子窗口显示此弹窗。值为true表示在子窗口显示弹窗。
     * 
     * 默认值：false，弹窗显示在应用内，而非独立子窗口。
     * 
     * **说明：** 
     * 
     * showInSubWindow为true的弹窗无法触发显示另一个showInSubWindow为true的弹窗。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。 
     * 
     * **ArkTS-Dyn起始版本：** 11 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showInSubWindow?: boolean;
    /**
     * 弹窗是否为模态窗口，模态窗口有蒙层，非模态窗口无蒙层。值为false时，弹窗为非模态窗口，无蒙层。
     * 
     * 默认值：true，此时弹窗有蒙层。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。 
     * 
     * **ArkTS-Dyn起始版本：** 11 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isModal?: boolean;
    /**
     * 弹窗背板颜色。
     * 
     * 默认值：Color.Transparent
     * 
     * **说明：** 
     * 
     * backgroundColor会与模糊属性backgroundBlurStyle叠加产生效果，如果不符合预期，可将backgroundBlurStyle设置为BlurStyle.NONE，即可取消模糊。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。 
     * 
     * **ArkTS-Dyn起始版本：** 11 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundColor?: ResourceColor;
    /**
     * 弹窗背板模糊材质。
     * 
     * 默认值：从API版本26.0.0开始，为BlurStyle.NONE，API版本26.0.0之前，为BlurStyle.COMPONENT_ULTRA_THICK。
     * 
     * **说明：** 
     * 
     * 设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则颜色显示将不符合预期效果。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。 
     * 
     * **ArkTS-Dyn起始版本：** 11 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * 背景模糊效果。默认值请参考BackgroundBlurStyleOptions类型说明。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。 
     * 
     * **ArkTS-Dyn起始版本：** 19 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * 背景效果参数。默认值请参考BackgroundEffectOptions类型说明。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。 
     * 
     * **ArkTS-Dyn起始版本：** 19 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundEffect?: BackgroundEffectOptions;
    /**
     * 交互式关闭回调函数。
     * 
     * **说明：**
     * 
     * 1.当用户执行点击遮障层关闭、侧滑（左滑/右滑）、三键back、键盘ESC关闭交互操作时，如果注册该回调函数，则不会立刻关闭弹窗。在回调函数中可以通过reason得到阻拦关闭弹窗的操作类型，从而根据原因选择是否能关闭弹窗。当前
     * 组件返回的reason中，暂不支持CLOSE_BUTTON的枚举值。
     * 
     * 2.在onWillDismiss回调中，不能再做onWillDismiss拦截。 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。 
     * 
     * **ArkTS-Dyn起始版本：** 12 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDismiss?: Callback<DismissDialogAction>;
    /**
     * 设置弹窗显示和退出的过渡效果。
     * 
     * **说明：**
     * 
     * 1.如果不设置，则使用默认的显示/退出动效。
     * 
     * 2.显示动效中按back键，打断显示动效，执行退出动效，动画效果为显示动效与退出动效的曲线叠加后的效果。
     * 
     * 3.退出动效中按back键，不会打断退出动效，退出动效继续执行，继续按back键退出应用。 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 12 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transition?: TransitionEffect;
    /**
     * 设置背板的圆角半径。
     * 
     * 可分别设置4个圆角的半径。
     * 
     * 默认值：{ topLeft: '32vp', topRight: '32vp', bottomLeft: '32vp', bottomRight: '32vp' }
     * 
     * 圆角大小受组件尺寸限制，最大值为组件宽或高的一半，若值为负，则按照默认值处理。 
     * 
     * 百分比参数方式：以父元素弹窗宽和高的百分比来设置弹窗的圆角。
     * 
     * **说明：**
     * 
     * 当cornerRadius属性类型为LocalizedBorderRadiuses时，支持随语言习惯改变布局顺序。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 12 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default - {topLeft:'32vp', topRight:'32vp', bottomLeft:'32vp', bottomRight:'32vp'}, The corner radius is subject
     *     to the component size, with the maximum value being half of the component width or height. If the value is
     *     negative, the default value is used. When set to a percentage, the value defines the radius as a percentage
     *     of
     *     the parent component's width or height.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    cornerRadius?: Dimension | BorderRadiuses | LocalizedBorderRadiuses;
    /**
     * 设置弹窗背板的宽度。
     * 
     * **说明：**
     * 
     * - 弹窗宽度默认最大值：400vp。
     * - 百分比参数方式：弹窗参考宽度为所在窗口的宽度，在此基础上调小或调大。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 12 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default - Default maximum width of the dialog box: 400 vp,
     *     When this parameter is set to a percentage, the reference width of the dialog box is the width of the window
     *     where the dialog box is located. You can decrease or increase the width as needed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Dimension;
    /**
     * 设置弹窗背板的高度。
     * 
     * **说明：**
     * 
     * - 弹窗高度默认最大值：0.9 *（窗口高度 - 安全区域）。
     * - 百分比参数方式：弹窗参考高度为（窗口高度 - 安全区域），在此基础上调小或调大。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 12 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default - Default maximum height of the dialog box: 0.9 x (Window height – Safe area)
     *     <br>When this parameter is set to a percentage, the reference height of the dialog box is the height of the
     *     window where the dialog box is located minus the safe area. You can decrease or increase the height as
     *     needed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: Dimension;
    /**
     * 设置弹窗背板的边框宽度。
     * 
     * 可分别设置4个边框宽度。
     * 
     * 默认值：0
     * 
     * 百分比参数方式：以父元素弹窗宽的百分比来设置弹窗的边框宽度。
     * 
     * 当弹窗左边框和右边框大于弹窗宽度，弹窗上边框和下边框大于弹窗高度，显示可能不符合预期。
     * 
     * **说明：**
     * 
     * 当borderWidth属性类型为LocalizedEdgeWidths时，支持随语言习惯改变布局顺序。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 12 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default 0 - When set to a percentage, the value defines the border width as a percentage of the parent dialog
     *     box's width. If the left and right borders are greater than its width, or the top and bottom borders are
     *     greater
     *     than its height, the dialog box may not display as expected.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths;
    /**
     * 设置弹窗背板的边框颜色。
     * 
     * 默认值：Color.Black
     * 
     * 如果使用borderColor属性，需要和borderWidth属性一起使用。
     * 
     * **说明：**
     * 
     * 当borderColor属性类型为LocalizedEdgeColors时，支持随语言习惯改变布局顺序。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 12 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default Color.Black - borderColor must be used with borderWidth in pairs.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors;
    /**
     * 设置弹窗背板的边框样式。
     * 
     * 默认值：BorderStyle.Solid。
     * 
     * 如果使用borderStyle属性，需要和borderWidth属性一起使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。 
     * 
     * **ArkTS-Dyn起始版本：** 12 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default BorderStyle.Solid - borderStyle must be used with borderWidth in pairs.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderStyle?: BorderStyle | EdgeStyles;
    /**
     * 设置弹窗背板的阴影。 
     * 
     * 当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM。其他设备默认无阴影。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 12 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default - Default value on 2-in-1 devices: ShadowStyle.OUTER_FLOATING_MD when the dialog box is focused and
     *     ShadowStyle.OUTER_FLOATING_SM otherwise.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * 是否响应悬停态，值为true表示响应悬停态。
     * 
     * 默认值：false，默认不响应。
     * 
     * **说明：**
     * 
     * PC/2in1设备弹窗默认显示在上半屏，在enableHoverMode设置为true时，可以通过设置hoverModeArea参数显示在下半屏。其他设备弹窗在enableHoverMode设置为true时默认显示在下半屏，可
     * 以通过设置hoverModeArea参数显示在上半屏。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 14开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 14 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default false - meaning not to enable the hover mode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableHoverMode?: boolean;
    /**
     * 悬停态下弹窗默认展示区域。
     * 
     * 默认值：HoverModeAreaType.BOTTOM_SCREEN。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 14开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 14 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hoverModeArea?: HoverModeAreaType;
    /**
     * 弹窗弹出后的事件回调。
     * 
     * **说明：**
     * 
     * 1.正常时序依次为：onWillAppear >> onDidAppear >> onWillDisappear >> onDidDisappear。
     * 
     * 2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
     * 
     * 3.快速点击弹出，关闭弹窗时，onWillDisappear在onDidAppear前生效。
     * 
     * 4.弹窗入场动效未完成时彻底关闭弹窗，动效打断，onDidAppear不会触发。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。 
     * 
     * **ArkTS-Dyn起始版本：** 19 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDidAppear?: VoidCallback;
    /**
     * 弹窗消失时的事件回调。
     * 
     * **说明：**
     * 
     * 正常时序依次为：onWillAppear >> onDidAppear >> onWillDisappear >> onDidDisappear。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。 
     * 
     * **ArkTS-Dyn起始版本：** 19 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDidDisappear?: VoidCallback;
    /**
     * 弹窗显示动效前的事件回调。
     * 
     * **说明：**
     * 
     * 1.正常时序依次为：onWillAppear >> onDidAppear >> onWillDisappear >> onDidDisappear。
     * 
     * 2.在onWillAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 19 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillAppear?: VoidCallback;
    /**
     * 弹窗退出动效前的事件回调。
     * 
     * **说明：**
     * 
     * 正常时序依次为：onWillAppear >> onDidAppear >> onWillDisappear >> onDidDisappear。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 19 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDisappear?: VoidCallback;
    /**
     * 设置弹窗显示层级。
     * 
     * **说明：**
     * 
     * - 默认值：LevelMode.OVERLAY 
     * - 仅当showInSubWindow属性设置为false时生效。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 15开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 15 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default LevelMode.OVERLAY - This parameter takes effect only when showInSubWindow is set to false.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    levelMode?: LevelMode;
    /**
     * 设置页面级弹窗需要显示的层级下的[getUniqueId]{@link FrameNode:FrameNode#getUniqueId}。
     * 
     * 取值范围：大于等于0的数字。传入小于0的数字本项配置不生效。
     * 
     * **说明：**
     * 
     * - 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 15开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 15 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    levelUniqueId?: int;
    /**
     * 设置页面内弹窗蒙层效果。
     * 
     * **说明：**
     * 
     * - 默认值：ImmersiveMode.DEFAULT 
     * - 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 15开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 15 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default ImmersiveMode.DEFAULT - This parameter takes effect only when levelMode is set to LevelMode.EMBEDDED.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    immersiveMode?: ImmersiveMode;
    /**
     * 设置弹窗显示的顺序。
     * 
     * **说明：**
     * 
     * - 默认值：LevelOrder.clamp(0) 
     * - 不支持动态刷新顺序。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 18开始，该接口支持在原子化服务中使用。
     * 
     * **ArkTS-Dyn起始版本：** 18 
     * 
     * **ArkTS-Sta起始版本：** 23
     *
     * @default The value returns by LevelOrder.clamp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    levelOrder?: LevelOrder;
    /**
     * 设置弹窗的系统材质。
     * 
     * **说明：**
     * 
     * - 默认值：ImmersiveOptions的style为ImmersiveStyle.ULTRA_THICK的ImmersiveMaterial对象。设置undefined时与默认值保持一致。
     * - 不同的材质具有不同的效果，该接口影响背景色[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、背景模糊
     * [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions)}
     * 、背景效果[backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}、边框颜色
     * [borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
     * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}，不建议与上述接口一起使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    systemMaterial?: SystemUiMaterial;
    /**
     * Sets the distortion animation Mode of the dialog.
     *
     * @default DistortionMode.DISTORTION_AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    distortionMode?: DistortionMode;
    /**
     * Sets the edgeLight animation Mode of the dialog.
     *
     * @default EdgeLightMode.EDGELIGHT_AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    edgeLightMode?: EdgeLightMode;
}