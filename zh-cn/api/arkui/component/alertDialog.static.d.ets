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
 * 显示警告弹窗组件，可设置文本内容与响应回调。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 * >
 * > - 从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 * >
 * > - 本模块功能依赖UI的执行上下文，不可在[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的地方使用，参见
 * > [UIContext]{@link @ohos.arkui.UIContext}说明。
 * 
 * @file AlertDialog
 * @kit ArkUI
 */
import { ResourceStr, ResourceColor, VoidCallback, Offset, Dimension, BorderRadiuses, LocalizedBorderRadiuses, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, EdgeStyles } from './units';
import { WordBreak, DialogButtonStyle, BorderStyle } from './enums';
import { Rectangle, BlurStyle, Callback, TransitionEffect, ShadowOptions, ShadowStyle, HoverModeAreaType, DismissReason, BackgroundBlurStyleOptions, BackgroundEffectOptions, DistortionMode, EdgeLightMode } from './common';
import { LevelOrder, ImmersiveMode, LevelMode } from '../../@ohos.promptAction';
import { DismissDialogAction } from './actionSheet';
import { AttributeModifier, CommonMethod, SystemUiMaterial } from './common';
/**
 * 警告弹窗的对齐方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DialogAlignment {
    /**
     * 垂直顶部对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Top,
    /**
     * 垂直居中对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Center,
    /**
     * 垂直底部对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Bottom,
    /**
     * 默认对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Default,
    /**
     * 左上对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TopStart,
    /**
     * 右上对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TopEnd,
    /**
     * 左中对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CenterStart,
    /**
     * 右中对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CenterEnd,
    /**
     * 左下对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BottomStart,
    /**
     * 右下对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BottomEnd
}
/**
 * 警告弹窗中按钮的对齐方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DialogButtonDirection {
    /**
     * 两个及以下按钮水平排布，两个以上为竖直排布。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AUTO = 0,
    /**
     * 按钮水平布局。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    HORIZONTAL = 1,
    /**
     * 按钮竖直布局。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    VERTICAL = 2
}
/**
 * 警告弹窗中按钮的样式。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AlertDialogButtonBaseOptions {
    /**
     * 点击Button是否响应，默认值true。
     * 
     * 值为true时，Button可以响应。值为false时，Button不可以响应。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enabled?: boolean;
    /**
     * 设置Button是否是默认焦点，默认值false。值为true表示Button为默认焦点，值为false表示Button不为默认焦点。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    defaultFocus?: boolean;
    /**
     * 设置Button的风格样式，默认值DialogButtonStyle.DEFAULT。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default -
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    style?: DialogButtonStyle;
    /**
     * Button的文本内容，若值为null，则该按钮不显示。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: ResourceStr;
    /**
     * Button的文本颜色。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontColor?: ResourceColor;
    /**
     * Button背景颜色。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundColor?: ResourceColor;
    /**
     * Button选中时的回调。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    action: VoidCallback;
}
/**
 * 继承自[AlertDialogButtonBaseOptions]{@link AlertDialogButtonBaseOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AlertDialogButtonOptions extends AlertDialogButtonBaseOptions {
    /**
     * 在弹窗获焦且未进行tab键走焦时，按钮是否默认响应Enter键。多个Button时，只允许一个Button的该字段配置为true，否则所有Button均不响应。多重弹窗可自动获焦连续响应。在defaultFocus为true时
     * 不生效。值为true表示按钮默认响应Enter键，值为false时，按钮不默认响应Enter键。
     * 
     * 默认值：false 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    primary?: boolean;
}
/**
 * 弹窗中message的截断方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AlertDialogTextStyleOptions {
    /**
     * 弹窗message内容的文本截断方式。
     * 
     * 默认值：WordBreak.BREAK_ALL
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    wordBreak?: WordBreak;
}
/**
 * 警告弹窗的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AlertDialogParam {
    /**
     * 弹窗标题。
     * 
     * API version 20之前，弹窗标题的对齐方式为左对齐。
     * 
     * API version 20及之后，弹窗标题的对齐方式为居中对齐。 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    title?: ResourceStr;
    /**
     * 弹窗副标题。
     * 
     * API version 20之前，弹窗副标题的对齐方式为左对齐。
     * 
     * API version 20及之后，弹窗副标题的对齐方式为居中对齐。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    subtitle?: ResourceStr;
    /**
     * 弹窗内容。
     * 
     * API version 20之前，弹窗内容的对齐方式为左对齐。
     * 
     * API version 20及之后，弹窗内容的对齐方式为居中对齐。  
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    message: ResourceStr;
    /**
     * 点击遮障层时，是否关闭弹窗，true表示关闭弹窗。false表示不关闭弹窗。
     * 
     * 默认值：true
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    autoCancel?: boolean;
    /**
     * 点击遮障层关闭dialog时的回调。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    cancel?: VoidCallback;
    /**
     * 弹窗在竖直方向上的对齐方式。
     * 
     * 默认值：DialogAlignment.Default 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     * 
     * **说明**：
     * 
     * 若在[UIExtension]{@link @ohos.arkui.uiExtension:uiExtension}中设置showInSubWindow为true，弹窗将基于UIExtension的宿主窗口对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    alignment?: DialogAlignment;
    /**
     * 弹窗相对alignment所在位置的偏移量。
     * 
     * 默认值：{ dx: 0 , dy: 0 }
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Offset;
    /**
     * 弹窗容器宽度所占用栅格数。
     * 
     * 默认值：4 
     * 
     * 取值范围：大于等于0的整数。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    gridCount?: int;
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
     * **说明**：showInSubWindow为true的弹窗无法触发显示另一个showInSubWindow为true的弹窗。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
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
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: Dimension;
    /**
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
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors;
    /**
     * 设置弹窗背板的边框样式。
     * 
     * 默认值：BorderStyle.Solid
     * 
     * 如果使用borderStyle属性，需要和borderWidth属性一起使用。 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
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
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * 设置弹窗message内容的文本样式。 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    textStyle?: AlertDialogTextStyleOptions;
    /**
     * 是否响应悬停态，值为true时，响应悬停态。
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
     * @default false
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
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDidAppear?: VoidCallback;
    /**
     * 弹窗消失后的事件回调。
     * 
     * **说明：**
     * 
     * 正常时序依次为：onWillAppear >> onDidAppear >> onWillDisappear >> onDidDisappear。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。
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
     * - 默认值：LevelMode.OVERLAY。
     * - 当且仅当showInSubWindow属性设置为false时生效。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 15开始，该接口支持在原子化服务中使用。
     *
     * @default LevelMode.OVERLAY
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    levelMode?: LevelMode;
    /**
     * 设置页面级弹窗需要显示的层级下的[getUniqueId]{@link FrameNode:FrameNode#getUniqueId}。仅在levelMode属性设置为LevelMode.EMBEDDED时生效。
     * 
     * 取值范围：大于等于0的数字。传入小于0的数字本项配置不生效。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 15开始，该接口支持在原子化服务中使用。
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
     * @default ImmersiveMode.DEFAULT
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
/**
 * 继承自[AlertDialogParam]{@link AlertDialogParam}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AlertDialogParamWithConfirm extends AlertDialogParam {
    /**
     * 确认Button的使能状态、默认焦点、按钮风格、文本内容、文本色、按钮背景色和点击回调。在弹窗获焦且未进行tab键走焦时，该按钮默认响应Enter键。多重弹窗情况下，可自动获焦并连续响应。默认响应Enter键能力在
     * defaultFocus为true时不生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    confirm?: AlertDialogButtonBaseOptions;
}
/**
 * 继承自[AlertDialogParam]{@link AlertDialogParam}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AlertDialogParamWithButtons extends AlertDialogParam {
    /**
     * 主要Button的使能状态、默认焦点、按钮风格、文本内容、文本色、按钮背景色和点击回调。在弹窗获焦且未进行tab键走焦时，该按钮默认响应Enter键，且多重弹窗可自动获焦连续响应。默认响应Enter键能力在
     * defaultFocus为true时不生效。 具体使用方式请参考
     * [示例7](docroot://reference/apis-arkui/arkui-ts/ts-methods-alert-dialog-box copy.md#示例7自定义背景模糊效果参数) 。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    primaryButton: AlertDialogButtonBaseOptions;
    /**
     * 次要Button的使能状态、默认焦点、按钮风格、文本内容、文本色、按钮背景色和点击回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    secondaryButton: AlertDialogButtonBaseOptions;
}
/**
 * 继承自[AlertDialogParam]{@link AlertDialogParam}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AlertDialogParamWithOptions extends AlertDialogParam {
    /**
     * 弹窗容器中的多个按钮。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    buttons: Array<AlertDialogButtonOptions>;
    /**
     * 按钮排布方向默认为DialogButtonDirection.AUTO。建议3个以上按钮使用Auto模式（两个以上按钮会切换为纵向模式，通常能显示更多按钮）。非Auto模式下，3个以上按钮可能会显示不全，超出显示范围的按钮会被
     * 截断。
     *
     * @default DialogButtonDirection.AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    buttonDirection?: DialogButtonDirection;
}