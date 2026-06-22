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
 * @file
 * @kit ArkUI
 */
import { ResourceColor, Offset, Dimension, EdgeStyles, EdgeColors, EdgeWidths, BorderRadiuses, VoidCallback } from '@ohos.arkui.component';
import { AsyncCallback, Callback } from '@ohos.base';
import { BlurStyle, ShadowOptions, ShadowStyle, HoverModeAreaType, Rectangle, TransitionEffect, KeyboardAvoidMode, DismissReason, BackgroundBlurStyleOptions, BackgroundEffectOptions, SystemUiMaterial, DistortionMode, EdgeLightMode } from '@ohos.arkui.component';
import { CustomBuilder } from '@ohos.arkui.component';
import { DialogAlignment } from '@ohos.arkui.component';
import { DismissDialogAction } from '@ohos.arkui.component';
import { BorderStyle, Alignment, DialogDisplayMode } from '@ohos.arkui.component';
import { Resource } from 'global.resource';
import { LengthMetrics } from 'arkui.Graphics';
import uiMaterial from '@ohos.arkui.uiMaterial';
/**
 * 弹窗显示层级模式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export enum LevelMode {
    /**
     * 弹窗层级为应用窗口根节点，应用内路由导航切换弹窗不隐藏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    OVERLAY = 0,
    /**
     * 弹窗节点为页面内路由/导航下的节点，随路由导航切换，弹窗随页面隐藏。
     * <br />**说明：** <br />1. 目前只支持挂载在Page或者[NavDestination]{@link nav_destination}节点上，优先挂载在Page节点下，
     * 只支持在这两种页面内顶层显示。
     * <br />2. 该模式下新起的页面可以覆盖在弹窗上，页面返回后该弹窗依旧存在，弹窗内容不会丢失。 
     * <br/>3. 该模式下需确保目标页面节点如Page节点已挂载上树，再拉起弹窗，否则弹窗将无法挂载到对应的页面节点内。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    EMBEDDED = 1
}
/**
 * 页面内弹窗蒙层显示区域模式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export enum ImmersiveMode {
    /**
     * 弹窗蒙层遵循父节点布局约束进行显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * 弹窗蒙层可扩展至覆盖状态栏和导航条。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    EXTEND = 1
}

/**
 * 弹窗层级，可以控制弹窗显示的顺序。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class LevelOrder {
    /**
     * 创建指定顺序的弹窗层级。
     *
     * @param { double } order - 弹窗显示顺序。取值范围为[-100000.0, 100000.0]，如果值小于-100000.0则设置为-100000.0，如果值大于100000.0则设置为100000.0。
     * @returns { LevelOrder } 返回当前对象实例。
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static clamp(order: double): LevelOrder;
    /**
     * 获取弹窗显示顺序。
     *
     * @returns { double }  返回显示顺序数值。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getOrder(): double;
}


/**
 * 创建并显示即时反馈、对话框和操作菜单。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 * >
 * > - 本模块不支持在[UIAbility]{@link @ohos.app.ability.UIAbility}的文件声明处使用，即不能在UIAbility的生命周期中调用，需要在创建组件实例后使用。
 * >
 * > - 本模块功能依赖UI的执行上下文，不可在[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的地方使用，参见
 * > [UIContext]{@link @ohos.arkui.UIContext}说明。建议<!--Del-->在除
 * > [ServiceExtensionAbility](docroot://application-models/serviceextensionability-sys.md)等无UI界面的场景外，均<!--DelEnd-->使用
 * > UIContext中的弹窗方法。
 *
 * @namespace promptAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare namespace promptAction {
    
    
    /**
     * Toast的选项。
     *
     * @typedef ShowToastOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface ShowToastOptions {
        
        
        /**
         * 显示的文本信息。
         * 
         * **说明：** 
         * 
         * 默认字体为'Harmony Sans'，不支持设置其他字体。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        message: string | Resource;
        
        
        /**
         * 设置Toast弹出的持续时间。
         * 
         * 默认值：1500ms
         * 
         * 取值范围：[1500, 10000]
         * 
         * 若小于1500ms则取默认值，若大于10000ms则取上限值10000ms。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        duration?: int;
        
        
        /**
         * 设置Toast底部边框距离导航条的高度，软键盘拉起时，如果bottom值过小，Toast要被软键盘遮挡时，会自动避让至距离软键盘80vp处。
         * 
         * 默认值：80vp
         * 
         * **说明：** 
         * 
         * 当底部没有导航条时，bottom为设置弹窗底部边框距离窗口底部的高度。
         * 
         * 设置对齐方式alignment后，bottom不生效。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        bottom?: string | double;
        
        /**
         * 设置Toast层级。
         * 
         * 默认值：ToastShowMode.DEFAULT，默认显示在应用内。
         *
         * @default ToastShowMode.DEFAULT
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        showMode?: ToastShowMode;
        /**
         * 对齐方式。
         * 
         * 默认值：undefined，当未设置alignment且存在导航条或软键盘时，Toast会自动根据导航条或软键盘位置进行调整，可参考bottom的说明。
         * 
         * **说明：** 
         * 
         * 不同alignment下，Toast位置对齐效果，如下图所示。
         * 
         * ![zh-cn_image_0001](docroot://reference/apis-arkui/figures/toast_alignment.PNG)
         * 
         * Toast的文本显示默认自左向右，不支持其他对齐方式。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        alignment?: Alignment;
        /**
         * 在对齐方式上的偏移。
         * 
         * 默认值：{ dx: 0, dy: 0 }，默认没有偏移。
         * 
         * **说明：** 
         * 
         * 仅支持设置px类型的数值。如需设置其他类型的数值，应将其他类型转换为px类型后传入。例如，若需设置vp，应将其转换为px后传入。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        offset?: Offset;
        /**
         * Toast的背板颜色。
         * 
         * 默认值：Color.Transparent
         * 
         * **说明：** 
         * 
         * backgroundColor会与模糊属性backgroundBlurStyle叠加产生效果，如果不符合预期，可将backgroundBlurStyle设置为BlurStyle.NONE，即可取消模糊。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        backgroundColor?: ResourceColor;
        /**
         * Toast的文本颜色。
         * 
         * 默认值：Color.Black
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        textColor?: ResourceColor;
        /**
         * Toast的背板模糊材质。
         * 
         * 默认值：BlurStyle.COMPONENT_ULTRA_THICK
         * 
         * **说明：** 
         * 
         * 设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则颜色显示将不符合预期效果。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        backgroundBlurStyle?: BlurStyle;
        /**
         * Toast的背板阴影。
         * 
         * 默认值：ShadowStyle.OUTER_DEFAULT_MD
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        shadow?: ShadowOptions | ShadowStyle;
        /**
         * 是否响应悬停态，值为true时，响应悬停态。
         * 
         * 默认值：false，默认不响应。
         *
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        enableHoverMode?: boolean;
        /**
         * 响应悬停态时，弹窗的显示区域。
         * 
         * 默认值：HoverModeAreaType.BOTTOM_SCREEN，默认显示在下半屏。
         *
         * @default HoverModeAreaType.BOTTOM_SCREEN
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        hoverModeArea?: HoverModeAreaType;
        /**
 	     * Set system-styled materials for toast. Different materials have different effects, which can influence
         * backgroundColor, border, shadow, and other visual attributes of toast.
         *
         * @type { ?SystemUiMaterial }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 26.0.0 static
         */
        systemMaterial?: SystemUiMaterial;
    }
    
    /**
     * 设置Toast的显示模式，默认显示在应用内，支持显示在子窗。
     *
     * @enum { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export enum ToastShowMode {
        
        /**
         * Toast显示在应用内。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        DEFAULT = 0,
        
        /**
         * Toast显示在子窗。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        TOP_MOST = 1,
        /**
         * Toast显示在系统Toast窗口。
         *
         * **系统接口：** 该接口为系统接口。
         * 
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 23 static
         */
        SYSTEM_TOP_MOST = 2
    }
    
    
    /**
     * 菜单中的菜单项按钮。
     *
     * @typedef Button
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface Button {
        
        
        /**
         * 按钮文本内容。
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        text: string | Resource;
        
        
        /**
         * 按钮文本颜色。
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        color: string | Resource;
        /**
         * 在弹窗获焦且未进行tab键走焦时，按钮是否默认响应Enter键。多个Button时，只允许一个Button的该字段配置为true，
         * 否则所有Button均不响应。多重弹窗可自动获焦连续响应。值为true表示按钮默认响应Enter键，值为false时，按钮不默认响应Enter键。
         * <br/>默认值：false
         *
         * @type { ?boolean }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        primary?: boolean;
    }
    /**
     * 菜单中的菜单项按钮，仅支持1个按钮。
     *
     * @typedef { [Button] } PromptActionSingleButton
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 staticonly
     */
    export type PromptActionSingleButton = [
        Button
    ];
    /**
     * 菜单中的菜单项按钮，仅支持2个按钮。
     *
     * @typedef { [Button, Button | undefined] } PromptActionDoubleButtons
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 staticonly
     */
    export type PromptActionDoubleButtons = [
        Button,
        Button | undefined
    ];
    /**
     * 菜单中的菜单项按钮，仅支持3个按钮。
     *
     * @typedef { [Button, Button | undefined, Button | undefined] } PromptActionTripleButtons
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 staticonly
     */
    export type PromptActionTripleButtons = [
        Button,
        Button | undefined,
        Button | undefined
    ];
    /**
     * 菜单中的菜单项按钮，仅支持4个按钮。
     *
     * @typedef { [Button, Button | undefined, Button | undefined, Button | undefined] } PromptActionQuadrupleButtons
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 staticonly
     */
    export type PromptActionQuadrupleButtons = [
        Button,
        Button | undefined,
        Button | undefined,
        Button | undefined
    ];
    /**
     * 菜单中的菜单项按钮，仅支持5个按钮。
     *
     * @typedef { [Button, Button | undefined, Button | undefined, Button | undefined, Button | undefined] }
     *     PromptActionQuintupleButtons
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 staticonly
     */
    export type PromptActionQuintupleButtons = [
        Button,
        Button | undefined,
        Button | undefined,
        Button | undefined,
        Button | undefined
    ];
    /**
     * 菜单中的菜单项按钮，仅支持6个按钮。
     *
     * @typedef { [Button, Button | undefined, Button | undefined, Button | undefined, Button | undefined, Button |
     *     undefined] } PromptActionSextupleButtons
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 staticonly
     */
    export type PromptActionSextupleButtons = [
        Button,
        Button | undefined,
        Button | undefined,
        Button | undefined,
        Button | undefined,
        Button | undefined
    ];
    
    
    /**
     * 对话框的响应结果。
     *
     * @typedef ShowDialogSuccessResponse
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface ShowDialogSuccessResponse {
        
        
        /**
         * 选中按钮在buttons数组中的索引，从0开始。
         *
         * @type { int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        index: int;
    }
    
    
    /**
     * 对话框的选项。
     *
     * @typedef ShowDialogOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface ShowDialogOptions {
        
        
        /**
         * 标题文本。
         * 
         * 默认值：undefined，取值为undefined默认不显示标题。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        title?: string | Resource;
        
        
        /**
         * 内容文本。
         * 
         * 默认值：undefined，取值为undefined默认不显示内容。 
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        message?: string | Resource;
        
        
        /**
         * 对话框中按钮的数组，结构为：{text:'button', color: '#666666'}，支持大于1个按钮。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        buttons?: Array<Button>;
        
        /**
         * 对话框遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。
         * 
         * 默认值：{ x: 0, y: 0, width: '100%', height: '100%' } 
         * 
         * **说明：**
         * 
         * showInSubWindow为true时，maskRect不生效。
         * 
         * maskRect在设置[Rectangle](docroot://reference/apis-arkui/arkui-ts/ts-methods-alert-dialog-box.md#rectangle8)中的部分
         * 属性后，若未设置其余的属性，则其余属性的默认值为0。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        maskRect?: Rectangle;
        
        /**
         * 对话框在竖直方向上的对齐方式。
         * 
         * 默认值：DialogAlignment.Default
         * 
         * **说明：**
         * 
         * 若在UIExtension中设置showInSubWindow为true, 弹窗将基于UIExtension的宿主窗口对齐。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        alignment?: DialogAlignment;
        
        /**
         * 对话框相对alignment所在位置的偏移量。
         * 
         * 默认值：{ dx: 0 , dy: 0 }
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        offset?: Offset;
        
        /**
         * 某对话框需要显示在主窗口之外时，是否在子窗口显示此对话框。值为true表示在子窗口显示对话框。
         * 
         * 默认值：false，对话框显示在应用内，而非独立子窗口。
         * 
         * **说明：** showInSubWindow为true的对话框无法触发显示另一个showInSubWindow为true的对话框。
         *
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        showInSubWindow?: boolean;

        /**
         * 对话框是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与对话框周围其他控件进行交互，即蒙层区域无法事件透传。值为false表示为非模态窗口且无蒙层，可以与对话框周围其他控件进行交互。
         * 
         * 默认值：true
         *
         * @default true
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        isModal?: boolean;
        /**
         * 对话框背板颜色。
         * 
         * 默认值：Color.Transparent
         * 
         * **说明：** 
         * 
         * backgroundColor会与模糊属性backgroundBlurStyle叠加产生效果，如果不符合预期，可将backgroundBlurStyle设置为BlurStyle.NONE，即可取消模糊。
         *
         * @default Color.Transparent
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        backgroundColor?: ResourceColor;
        /**
         * 对话框背板模糊材质。
         * 
         * 默认值：从API版本26.0.0开始，为BlurStyle.NONE，API版本26.0.0之前，为BlurStyle.COMPONENT_ULTRA_THICK。
         * 
         * **说明：** 
         * 
         * 设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则颜色显示将不符合预期效果。
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
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
        /**
         * 背景效果参数。默认值请参考BackgroundEffectOptions类型说明。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        backgroundEffect?: BackgroundEffectOptions;
        /**
         * 设置对话框背板的阴影。
         * 
         * 当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM。其他设备默认无阴影。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        shadow?: ShadowOptions | ShadowStyle;
        /**
         * 是否响应悬停态，值为true时，响应悬停态。
         * 
         * 默认值：false，默认不响应。
         * 
         * **说明：**
         * 
         * PC/2in1设备弹窗默认显示在上半屏，在enableHoverMode设置为true时，可以通过设置hoverModeArea参数显示在下半屏。其他设备弹窗在enableHoverMode设置为true时默认显示在下
         * 半屏，可以通过设置hoverModeArea参数显示在上半屏。
         *
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        enableHoverMode?: boolean;
        /**
         * 设置悬停态下对话框的默认展示区域。
         * 
         * 默认值：HoverModeAreaType.BOTTOM_SCREEN
         *
         * @default HoverModeAreaType.BOTTOM_SCREEN
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        hoverModeArea?: HoverModeAreaType;
        /**
         * 对话框弹出后的事件回调。
         * 
         * **说明：**
         * 
         * 1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
         * 
         * 2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
         * 
         * 3.快速点击弹出，关闭对话框时，onWillDisappear在onDidAppear前生效。
         * 
         * 4.对话框入场动效未完成时彻底关闭对话框，动效打断，onDidAppear不会触发。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        onDidAppear?: VoidCallback;
        /**
         * 对话框消失后的事件回调。
         * 
         * **说明：**
         * 
         * 1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        onDidDisappear?: VoidCallback;
        /**
         * 对话框显示动效前的事件回调。
         * 
         * **说明：**
         * 
         * 1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
         * 
         * 2.在onWillAppear内设置改变对话框显示效果的回调事件，二次弹出生效。 
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        onWillAppear?: VoidCallback;
        /**
         * 对话框退出动效前的事件回调。
         * 
         * **说明：**
         * 
         * 1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        onWillDisappear?: VoidCallback;
        /**
         * 设置对话框显示层级。
         * 
         * **说明：**
         * 
         * - 默认值：LevelMode.OVERLAY
         * - 当且仅当showInSubWindow属性设置为false时生效。
         *
         * @default LevelMode.OVERLAY
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        levelMode?: LevelMode;
        /**
         * 设置页面级对话框需要显示的层级下的节点UniqueID，该ID可以通过[getUniqueId]{@link FrameNode:FrameNode#getUniqueId}获取。
         * 
         * 取值范围：大于等于0的数字。
         * 
         * **说明：** 
         * 
         * - 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        levelUniqueId?: int;
        /**
         * 设置页面内对话框蒙层效果。
         * 
         * **说明：**
         * 
         * - 默认值：ImmersiveMode.DEFAULT 
         * - 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
         *
         * @default ImmersiveMode.DEFAULT
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        immersiveMode?: ImmersiveMode;
        /**
         * 设置对话框显示的顺序。
         * 
         * **说明：**
         * 
         * - 默认值：LevelOrder.clamp(0) 
         * - 不支持动态刷新顺序。
         *
         * @default The value returned by LevelOrder.clamp(0)
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
         * 、背景效果[backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}、阴影
         * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}，不建议与上述接口一起使用。
         * 
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 26.0.0 static
         */
        systemMaterial?: uiMaterial.Material;
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
     * 自定义弹窗的状态。
     *
     * @enum { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enum CommonState {
        /**
         * 未初始化，控制器未与dialog绑定时。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        UNINITIALIZED = 0,
        /**
         * 已初始化，控制器与dialog绑定后。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        INITIALIZED = 1,
        /**
         * 显示中，dialog显示动画过程中。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        APPEARING = 2,
        /**
         * 已显示，dialog显示动画结束。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        APPEARED = 3,
        /**
         * 消失中，dialog消失动画过程中。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        DISAPPEARING = 4,
        /**
         * 已消失，dialog消失动画结束后。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        DISAPPEARED = 5
    }
    /**
     * 公共控制器，可以控制promptAction相关组件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export class CommonController {
        /**
         * 控制器的构造函数。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        constructor();
        /**
         * 关闭显示的自定义弹窗，若已关闭，则不生效。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        close(): void;
        /**
         * 获取自定义弹窗的状态。
         *
         * @returns { CommonState } 返回对应的弹窗状态。
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        getState(): CommonState;
    }
    /**
     * 自定义弹窗控制器，继承自[CommonController](docroot://reference/apis-arkui/js-apis-promptAction copy.md#commoncontroller18)。
     * 
     * DialogController可作为UIContext弹出自定义弹窗的成员变量，具体用法可看
     * [openCustomDialogWithController](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#opencustomdialogwithcontroller18)
     * 和[presentCustomDialog](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#presentcustomdialog18)示例。
     *
     * @extends CommonController
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export class DialogController extends CommonController {
    }
    
    /**
     * 弹窗的选项。
     *
     * @typedef BaseDialogOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface BaseDialogOptions {
        
        /**
         * 弹窗遮蔽层区域。
         * <br/>默认值：{ x: 0, y: 0, width: '100%', height: '100%' }
         * <br/>**说明：** <br/>showInSubWindow为true时，maskRect不生效。
         * <br/>maskRect在设置[Rectangle](docroot://reference/apis-arkui/arkui-ts/ts-methods-alert-dialog-box.md#rectangle8)中的部分属性后，
         * 若未设置其余的属性，则其余属性的默认值为0。
         *
         * @type { ?Rectangle }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        maskRect?: Rectangle;
        
        /**
         * 弹窗在竖直方向上的对齐方式。<br>默认值：DialogAlignment.Default 
         * <br/>**说明：**<br/>若在UIExtension中设置showInSubWindow为true, 弹窗将基于UIExtension的宿主窗口对齐。
         *
         * @type { ?DialogAlignment }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        alignment?: DialogAlignment;
        
        /**
         * 弹窗相对alignment所在位置的偏移量。<br/>默认值：{&nbsp;dx:&nbsp;0&nbsp;,&nbsp;dy:&nbsp;0&nbsp;} 
         *
         * @type { ?Offset }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        offset?: Offset;
        
        /**
         * 某弹窗需要显示在主窗口之外时，是否在子窗口显示此弹窗。值为true表示在子窗口显示弹窗。<br/>默认值：false，弹窗显示在应用内，而非独立子窗口。
         *
         * @type { ?boolean }
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        showInSubWindow?: boolean;

        /**
         * Defines the dialog display mode when show in subwindow.
         *
         * @type { ?DialogDisplayMode }
         * @default DialogDisplayMode.SCREEN_BASED
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 26.0.0 static
         */
        displayModeInSubWindow?: DialogDisplayMode;

        /**
         * 弹窗是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与弹窗周围其他控件进行交互，即蒙层区域无法事件透传。
         * 值为false表示为非模态窗口且无蒙层，可以与弹窗周围其他控件进行交互。<br/>默认值：true
         * @type { ?boolean }
         * @default true
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        isModal?: boolean;
        /**
         * 点击遮障层时，是否关闭弹窗，true表示关闭弹窗。false表示不关闭弹窗。<br/>默认值：true
         *
         * @type { ?boolean }
         * @default true
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        autoCancel?: boolean;
        /**
         * 设置弹窗显示和退出的过渡效果。<br/>**说明：**<br/> 1.如果不设置，则使用默认的显示/退出动效。
         * <br/> 2.显示动效中按back键，打断显示动效，执行退出动效，动画效果为显示动效与退出动效的曲线叠加后的效果。
         * <br/> 3.退出动效中按back键，不会打断退出动效，退出动效继续执行，继续按back键退出应用。
         *
         * @type { ?TransitionEffect }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        transition?: TransitionEffect;
        /**
         * 设置弹窗内容显示的过渡效果。默认无动效。
         *
         * @type { ?TransitionEffect }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        dialogTransition?: TransitionEffect;
        /**
         * 设置蒙层显示的过渡效果。默认无动效。
         *
         * @type { ?TransitionEffect }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        maskTransition?: TransitionEffect;
        /**
         * 自定义蒙层颜色。<br>默认值: 0x33000000
         *
         * @type { ?ResourceColor }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        maskColor?: ResourceColor;
        /**
        * 交互式关闭回调函数。
        * <br/>**说明：** 
        * <br/>1.当用户执行点击遮障层关闭、侧滑（左滑/右滑）、三键back、键盘ESC关闭交互操作时，如果注册该回调函数，则不会立刻关闭弹窗。
        * 在回调函数中可以通过reason得到阻拦关闭弹窗的操作类型，从而根据原因选择是否能关闭弹窗。当前组件返回的reason中，暂不支持CLOSE_BUTTON的枚举值。
        * <br/>2.在onWillDismiss回调中，不能再做onWillDismiss拦截。
        *
        * @type { ?Callback<DismissDialogAction> }
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @stagemodelonly
        * @since 23 static
        */
        onWillDismiss?: Callback<DismissDialogAction>;
        /**
         * 弹窗弹出后的事件回调。
         * <br />**说明：**
         * <br />1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
         * <br />2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
         * <br />3.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
         * <br />4. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        onDidAppear?: VoidCallback;
        /**
         * 弹窗消失后的事件回调。
         * <br />**说明：**
         * <br />正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。 
         * <br/>当弹窗退场动画未完成时（例如：同时触发弹窗关闭和页面切换），该回调不会触发。
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        onDidDisappear?: VoidCallback;
        /**
         * 弹窗显示动效前的事件回调。
         * <br />**说明：**
         * <br />1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
         * <br />2.在onWillAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        onWillAppear?: VoidCallback;
        /**
         * 弹窗退出动效前的事件回调。
         * <br />**说明：**
         * <br />1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
         * <br />2.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        onWillDisappear?: VoidCallback;
        /**
         * 用于设置弹窗是否在拉起软键盘时进行自动避让。<br/>默认值：KeyboardAvoidMode.DEFAULT
         *
         * @type { ?KeyboardAvoidMode }
         * @default KeyboardAvoidMode.DEFAULT
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        keyboardAvoidMode?: KeyboardAvoidMode;
        /**
         * 是否响应悬停态，值为true时，响应悬停态。<br />默认值：false，默认不响应。
         * <br />**说明：**<br />PC/2in1设备弹窗默认显示在上半屏，在enableHoverMode设置为true。可以通过设置hoverModeArea参数显示在下半屏。
         * 其他设备弹窗在enableHoverMode设置为true时默认显示在下半屏，可以通过设置hoverModeArea参数显示在上半屏。
         *
         * @type { ?boolean }
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        enableHoverMode?: boolean;
        /**
         * 悬停态下弹窗默认展示区域。<br />默认值：HoverModeAreaType.BOTTOM_SCREEN
         *
         * @type { ?HoverModeAreaType }
         * @default HoverModeAreaType.BOTTOM_SCREEN
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        hoverModeArea?: HoverModeAreaType;
        /**
         * 背景模糊效果。默认值请参考BackgroundBlurStyleOptions类型说明。
         *
         * @type { ?BackgroundBlurStyleOptions }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
        /**
         * 背景效果参数。默认值请参考BackgroundEffectOptions类型说明。
         *
         * @type { ?BackgroundEffectOptions }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        backgroundEffect?: BackgroundEffectOptions;
        /**
         * 弹窗避让键盘后，和键盘之间距离。<br />**说明：**<br/>- 默认值：16vp<br />- 默认单位：vp
         * <br />- 当且仅当keyboardAvoidMode属性设置为DEFAULT时生效。
         *
         * @type { ?LengthMetrics }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        keyboardAvoidDistance?: LengthMetrics;
        /**
         * 设置弹窗显示层级。<br />**说明：**<br />- 默认值：LevelMode.OVERLAY <br />- 当且仅当showInSubWindow属性设置为false时生效。
         *
         * @type { ?LevelMode }
         * @default LevelMode.OVERLAY
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        levelMode?: LevelMode;
        /**
         * 设置页面级弹窗需要显示的层级下的节点UniqueID，该ID可以通过[getUniqueId]{@link FrameNode:FrameNode#getUniqueId}获取。
         * <br/>取值范围：大于等于0的数字。<br />**说明：** <br />- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
         *
         * @type { ?int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        levelUniqueId?: int;
        /**
         * 设置页面内弹窗蒙层效果。<br />**说明：**<br />- 默认值：ImmersiveMode.DEFAULT <br />- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
         *
         * @type { ?ImmersiveMode }
         * @default ImmersiveMode.DEFAULT
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        immersiveMode?: ImmersiveMode;
        /**
         * 设置弹窗显示的顺序。<br />**说明：**<br />- 默认值：LevelOrder.clamp(0) <br />- 不支持动态刷新顺序。
         *
         * @type { ?LevelOrder }
         * @default The value returned by LevelOrder.clamp(0)
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        levelOrder?: LevelOrder;
        /**
         * 设置弹窗是否获取焦点。值为true表示获取焦点，值为false表示不获取焦点。<br />默认值：true <br />**说明：**<br />只有弹出覆盖在当前窗口之上的弹窗才可以获取焦点。
         *
         * @type { ?boolean }
         * @default true
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        focusable?: boolean;
        /**
         * 设置弹窗的系统材质。<br/>**说明：**<br/>- 默认值：ImmersiveOptions的style为ImmersiveStyle.ULTRA_THICK的ImmersiveMaterial对象。
         * 设置undefined时与默认值保持一致。<br/>- 不同的材质具有不同的效果，该接口影响
         * 背景色[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、
         * 背景模糊[backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions)}、
         * 背景效果[backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}、
         * 边框颜色[borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、
         * 阴影[shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}，不建议与上述接口一起使用。
         *
         * @type { ?uiMaterial.Material }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 26.0.0 static
         */
        systemMaterial?: uiMaterial.Material;
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
     * 自定义弹窗的内容，继承自[BaseDialogOptions](docroot://reference/apis-arkui/js-apis-promptAction copy.md#basedialogoptions11)。
     *
     * @extends BaseDialogOptions
     * @interface CustomDialogOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface CustomDialogOptions extends BaseDialogOptions {
        
        /**
         *  设置自定义弹窗的内容。<br/>**说明：** <br/>builder需要赋值为箭头函数，格式如下：() => { this.XXX() }，其中XXX是内部builder名。
         * <br/>全局builder需要在组件内部创建，并在内部builder中调用。
         * <br/>builder根节点宽高百分比相对弹窗容器大小。
         * <br/>builder非根节点宽高百分比相对父节点大小。
         *
         * @type { CustomBuilder }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        builder: CustomBuilder;
        /**
         * 设置弹窗背板颜色。<br/>默认值：Color.Transparent
         * <br/>**说明：** 
         * <br/>当设置了backgroundColor为非透明色时，backgroundBlurStyle需要设置为BlurStyle.NONE，否则颜色显示将不符合预期效果。
         *
         * @type { ?ResourceColor }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        backgroundColor?: ResourceColor;
        /**
         * 设置背板的圆角半径。
         * <br />可分别设置4个圆角的半径。
         * <br />默认值：{ topLeft: '32vp', topRight: '32vp', bottomLeft: '32vp', bottomRight: '32vp' }
         * <br /> 圆角大小受组件尺寸限制，最大值为组件宽或高的一半，若值为负，则按照默认值处理。 
         * <br /> 百分比参数方式：以父元素弹窗宽和高的百分比来设置弹窗的圆角。
         *
         * @type { ?(Dimension | BorderRadiuses) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        cornerRadius?: Dimension | BorderRadiuses;
        /**
         * 设置弹窗背板的宽度。<br />**说明：**<br>- 弹窗宽度默认最大值：400vp <br />- 百分比参数方式：弹窗参考宽度基于所在窗口的宽度的基础上调整。
         *
         * @type { ?Dimension }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        width?: Dimension;
        /**
         * 设置弹窗背板的高度。<br />**说明：**<br />- 弹窗高度默认最大值：0.9 *（窗口高度 - 安全区域）。
         * <br />- 百分比参数方式：弹窗参考高度为（窗口高度 - 安全区域），在此基础上调小或调大。
         *
         * @type { ?Dimension }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        height?: Dimension;
        /**
         * 设置弹窗背板的边框宽度。
         * <br />可分别设置4个边框宽度。
         * <br />默认值：0 <br />单位：vp 
         * <br /> 百分比参数方式：以父元素弹窗宽的百分比来设置弹窗的边框宽度。
         * <br />当弹窗左边框和右边框大于弹窗宽度，弹窗上边框和下边框大于弹窗高度，显示可能不符合预期。
         *
         * @type { ?(Dimension | EdgeWidths) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        borderWidth?: Dimension | EdgeWidths;
        /**
         * 设置弹窗背板的边框颜色。<br/>默认值：Color.Black<br/> 如果使用borderColor属性，需要和borderWidth属性一起使用。
         *
         * @type { ?(ResourceColor | EdgeColors) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        borderColor?: ResourceColor | EdgeColors;
        /**
         * 设置弹窗背板的边框样式。<br/>默认值：BorderStyle.Solid<br/> 如果使用borderStyle属性，需要和borderWidth属性一起使用。
         *
         * @type { ?(BorderStyle | EdgeStyles) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        borderStyle?: BorderStyle | EdgeStyles;
        /**
         * 设置弹窗背板的阴影。
         * <br />当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM。其他设备默认无阴影。
         *
         * @type { ?(ShadowOptions | ShadowStyle) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        shadow?: ShadowOptions | ShadowStyle;
        /**
         * 弹窗背板模糊材质。
         * <br/>默认值：从API版本26.0.0开始，为BlurStyle.NONE，API版本26.0.0之前，为BlurStyle.COMPONENT_ULTRA_THICK。
         * <br/>**说明：** <br/>设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，
         * 否则颜色显示将不符合预期效果。
         *
         * @type { ?BlurStyle }
         * @default BlurStyle.COMPONENT_ULTRA_THICK
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        backgroundBlurStyle?: BlurStyle;
    }
    /**
     * 表示弹窗背板的圆角半径允许的数据字段类型。
     *
     * @unionmember { Dimension } 表示值类型为长度类型，用于描述尺寸单位。
     * @unionmember { BorderRadiuses } 表示值类型为圆角类型，用于描述组件边框圆角半径。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export type DialogOptionsCornerRadius = Dimension | BorderRadiuses;
    /**
     * 表示弹窗背板的边框宽度允许的数据字段类型。
     *
     * @unionmember { Dimension } 表示值类型为长度类型，用于描述尺寸单位。
     * @unionmember { EdgeWidths } 表示值类型为边框宽度类型，用于描述组件边框不同方向的宽度。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export type DialogOptionsBorderWidth = Dimension | EdgeWidths;
    /**
     * 表示弹窗背板的边框颜色允许的数据字段类型。
     *
     * @unionmember { ResourceColor } 表示值类型为颜色类型，用于描述资源颜色类型。
     * @unionmember { EdgeColors }  表示值类型为边框颜色，用于描述组件边框四条边的颜色。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export type DialogOptionsBorderColor = ResourceColor | EdgeColors;
    /**
     * 表示弹窗背板的边框样式允许的数据字段类型。
     *
     * @unionmember { BorderStyle }  表示值类型为边框类型，用于描述组件边框的类型。
     * @unionmember { EdgeStyles }  表示值类型为边框样式，用于描述组件边框四条边的样式。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export type DialogOptionsBorderStyle = BorderStyle | EdgeStyles;
    /**
     * 表示弹窗背板的阴影允许的数据字段类型。
     *
     * @unionmember { ShadowOptions }  表示值类型为阴影属性集合，用于设置阴影的模糊半径、阴影的颜色、X轴和Y轴的偏移量。
     * @unionmember { ShadowStyle }  表示值类型为阴影类型，用于描述阴影的类型。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export type DialogOptionsShadow = ShadowOptions | ShadowStyle;
    /**
     * 自定义弹窗的内容，继承自[BaseDialogOptions](docroot://reference/apis-arkui/js-apis-promptAction copy.md#basedialogoptions11)。
     *
     * @extends BaseDialogOptions
     * @typedef DialogOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface DialogOptions extends BaseDialogOptions {
        /**
         * 设置弹窗背板颜色。<br/>默认值：Color.Transparent<br/>**说明：** 
         * <br/>backgroundColor会与模糊属性backgroundBlurStyle叠加产生效果，如果不符合预期，可将backgroundBlurStyle设置为BlurStyle.NONE，即可取消模糊。
         *
         * @type { ?ResourceColor }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        backgroundColor?: ResourceColor;
        /**
         * 设置弹窗背板的圆角半径。<br />可分别设置4个圆角的半径。
         * <br />默认值：{ topLeft: '32vp', topRight: '32vp', bottomLeft: '32vp', bottomRight: '32vp' }<br /> 圆角大小受组件尺寸限制，
         * 最大值为组件宽或高的一半，若值为负，则按照默认值处理。 
         * <br /> 百分比参数方式：以父元素弹窗宽和高的百分比来设置弹窗的圆角。
         *
         * @type { ?DialogOptionsCornerRadius }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        cornerRadius?: DialogOptionsCornerRadius;
        /**
         * 设置弹窗背板的宽度。<br />**说明：**<br>- 默认最大值：400vp <br />- 百分比参数方式：弹窗参考宽度基于所在窗口宽度调整。
         *
         * @type { ?Dimension }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        width?: Dimension;
        /**
         * 设置弹窗背板的高度。<br />**说明：**<br />- 默认最大值：0.9 *（窗口高度 - 安全区域）。
         * <br />- 百分比参数方式：弹窗参考高度为（窗口高度 - 安全区域），在此基础上调小或调大。
         *
         * @type { ?Dimension }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        height?: Dimension;
        /**
         * 设置弹窗背板的边框宽度。<br />可分别设置4个边框宽度。<br />默认值：0 <br />单位：vp <br /> 百分比参数方式：以父元素弹窗宽的百分比来设置弹窗的边框宽度。
         * <br />当弹窗左边框和右边框大于弹窗宽度，弹窗上边框和下边框大于弹窗高度，显示可能不符合预期。
         *
         * @type { ?DialogOptionsBorderWidth }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        borderWidth?: DialogOptionsBorderWidth;
        /**
         * 设置弹窗背板的边框颜色。<br/>默认值：Color.Black <br/> 如果使用borderColor属性，需要和borderWidth属性一起使用。
         *
         * @type { ?DialogOptionsBorderColor }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        borderColor?: DialogOptionsBorderColor;
        /**
         * 设置弹窗背板的边框样式。<br/>默认值：BorderStyle.Solid。<br/> 如果使用borderStyle属性，需要和borderWidth属性一起使用。
         *
         * @type { ?DialogOptionsBorderStyle }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        borderStyle?: DialogOptionsBorderStyle;
        /**
         * 设置弹窗背板的阴影。<br />当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，
         * 失焦为ShadowStyle.OUTER_FLOATING_SM。其他设备默认无阴影。
         *
         * @type { ?DialogOptionsShadow }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        shadow?: DialogOptionsShadow;
        /**
         * 弹窗背板模糊材质。<br/>默认值：从API版本26.0.0开始，为BlurStyle.NONE，API版本26.0.0之前，为BlurStyle.COMPONENT_ULTRA_THICK。
         * <br/>**说明：** <br/>设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，
         * 否则颜色显示将不符合预期效果。
         *
         * @type { ?BlurStyle }
         * @default BlurStyle.COMPONENT_ULTRA_THICK
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        backgroundBlurStyle?: BlurStyle;
    }
    
    
    /**
     * 操作菜单的响应结果。
     *
     * @typedef ActionMenuSuccessResponse
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface ActionMenuSuccessResponse {
        
        
        /**
         * 选中按钮在buttons数组中的索引，从0开始。
         *
         * @type { int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        index: int;
    }
    
    
    /**
     * 操作菜单的选项。
     *
     * @typedef ActionMenuOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface ActionMenuOptions {
        
        
        /**
         * 标题文本。<br/>默认值：undefined，取值为undefined默认不显示标题。
         *
         * @type { ?(string | Resource) }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        title?: string | Resource;
        /**
         * 菜单中菜单项按钮的数组，结构为： {text:'button', color: '#666666'}.
         * 支持1-6个按钮。按钮数量大于6个时，仅显示前6个按钮，之后的按钮不显示。
         *
         * @type { PromptActionSingleButton | PromptActionDoubleButtons | PromptActionTripleButtons |
         *     PromptActionQuadrupleButtons | PromptActionQuintupleButtons | PromptActionSextupleButtons }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        buttons: PromptActionSingleButton | PromptActionDoubleButtons | PromptActionTripleButtons |
            PromptActionQuadrupleButtons | PromptActionQuintupleButtons | PromptActionSextupleButtons;
        
        /**
         * 某操作菜单需要显示在主窗口之外时，是否在子窗口显示此菜单。值为true表示在子窗口显示菜单。
         *
         * 默认值：false，在子窗口不显示菜单。
         * 
         * **说明：** - showInSubWindow为true的菜单无法触发显示另一个showInSubWindow为true的菜单。
         *          - 若在UIExtension中设置showInSubWindow为true, 菜单将基于UIExtension的宿主窗口对齐。
         * 
         * @type { ?boolean }
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        showInSubWindow?: boolean;

        /**
         * 菜单是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与菜单周围其他控件进行交互，即蒙层区域无法事件透传。
         * 值为false表示为非模态窗口且无蒙层，可以与菜单周围其他控件进行交互。<br/>默认值：true
         * @type { ?boolean }
         * @default true
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        isModal?: boolean;
        /**
         * 设置菜单显示层级。<br />**说明：**<br />- 默认值：LevelMode.OVERLAY <br />- 当且仅当showInSubWindow属性设置为false时生效。
         *
         * @type { ?LevelMode }
         * @default LevelMode.OVERLAY
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        levelMode?: LevelMode;
        /**
         * 设置页面级菜单需要显示的层级下的节点UniqueID，该ID可以通过[getUniqueId]{@link FrameNode:FrameNode#getUniqueId}获取。
         * 取值范围：大于等于0的数字。<br />**说明：**<br/>- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
         *
         * @type { ?int }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        levelUniqueId?: int;
        /**
         * 设置页面内菜单蒙层效果。<br />**说明：**<br />- 默认值：ImmersiveMode.DEFAULT <br />- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
         *
         * @type { ?ImmersiveMode }
         * @default ImmersiveMode.DEFAULT
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        immersiveMode?: ImmersiveMode;
         /**
         * 菜单弹出后的事件回调。<br />**说明：**<br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
         * <br />2.快速点击弹出，关闭菜单时，onWillDisappear在onDidAppear前生效。
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        onDidAppear?: VoidCallback;
        /**
         * 菜单消失后的事件回调。<br />**说明：**<br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        onDidDisappear?: VoidCallback;
        /**
         * 菜单显示动效前的事件回调。<br />**说明：**<br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        onWillAppear?: VoidCallback;
        /**
         * 菜单退出动效前的事件回调。<br />**说明：**<br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
         *
         * @type { ?VoidCallback }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        onWillDisappear?: VoidCallback;
        /**
         * 设置弹窗的系统材质。<br/>默认值：ImmersiveOptions的style为ImmersiveStyle.ULTRA_THICK的ImmersiveMaterial对象。
         * 设置undefined时与默认值保持一致。不同的材质具有不同的效果，可以影响弹窗的背景色、边框、阴影等视觉属性。
         *
         * @type { ?uiMaterial.Material }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 26.0.0 static
         */
        systemMaterial?: uiMaterial.Material;
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
     * 显示即时反馈并通过Promise返回其id。
     * 
     * > **说明：**
     * >
     * > - 不支持在输入法类型窗口中使用子窗（showMode设置为TOP_MOST或者SYSTEM_TOP_MOST）的openToast，详情见输入法框架的约束与限制说明
     * > [createPanel]{@link @ohos.inputMethodEngine:inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo)}
     * > 。
     * >
     * > - 直接使用openToast可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，建议使用UIContext中的
     * > getPromptAction方法获取到PromptAction对象，再通过该对象调用
     * > [openToast](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#opentoast18)实现。
     *
     * @param { ShowToastOptions } options - Toast选项。
     * @returns { Promise<int> } 返回即时反馈的id，可供closeToast使用。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export function openToast(options: ShowToastOptions): Promise<int>;
    /**
     * 关闭即时反馈。
     * 
     * > **说明：**
     * >
     * > 直接使用closeToast可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，建议使用UIContext中的getPromptAction
     * > 方法获取到PromptAction对象，再通过该对象调用
     * > [closeToast](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#closetoast18)实现。
     *
     * @param { int } toastId - openToast返回的id。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @throws { BusinessError } 103401 - Cannot find the toast.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export function closeToast(toastId: int): void;
}
export default promptAction;
