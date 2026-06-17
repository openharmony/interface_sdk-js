/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
import { AsyncCallback } from './@ohos.base';
/**
 * 弹窗显示层级模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
export enum LevelMode {
    /**
     * 弹窗层级为应用窗口根节点，应用内路由导航切换弹窗不隐藏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    OVERLAY = 0,
    /**
     * 弹窗节点为页面内路由/导航下的节点，随路由导航切换，弹窗随页面隐藏。
     * 
     * **说明：** 
     * 
     * 1. 目前只支持挂载在Page或者[NavDestination]{@link nav_destination}节点上，优先挂载在Page节点下，只支持在这两种页面内顶层显示。
     * 2. 该模式下新起的页面可以覆盖在弹窗上，页面返回后该弹窗依旧存在，弹窗内容不会丢失。 
     * 3. 该模式下需确保目标页面节点如Page节点已挂载上树，再拉起弹窗，否则弹窗将无法挂载到对应的页面节点内。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    EMBEDDED = 1
}

/**
 * 页面内弹窗蒙层显示区域模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
export enum ImmersiveMode {
    /**
     * 弹窗蒙层遵循父节点布局约束进行显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    DEFAULT = 0,
    /**
     * 弹窗蒙层可扩展至覆盖状态栏和导航条。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    EXTEND = 1
}

/**
 * 弹窗层级，可以控制弹窗显示的顺序。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export class LevelOrder {
    /**
     * 创建指定顺序的弹窗层级。
     *
     * @param { number } order - 弹窗显示顺序。取值范围为[-100000.0, 100000.0]，如果值小于-100000.0则设置为-100000.0，如果值大于100000.0则设置为100000.
     *     0。
     * @returns { LevelOrder } 返回当前对象实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    static clamp(order: number): LevelOrder;
    /**
     * 获取弹窗显示顺序。
     *
     * @returns { number } 返回显示顺序数值。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getOrder(): number;
}

/**
 * 创建并显示即时反馈、对话框和操作菜单。
 * 
 * > **说明：**
 * 
 * > - 本模块不支持在[UIAbility]{@link @ohos.app.ability.UIAbility}的文件声明处使用，即不能在UIAbility的生命周期中调用，需要在
 *     创建组件实例后使用。
 * >
 * > - 本模块功能依赖UI的执行上下文，不可在[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的地方使用，参见
 * > [UIContext]{@link @ohos.arkui.UIContext}说明。建议<!--Del-->在除
 * > [ServiceExtensionAbility](docroot://application-models/serviceextensionability-sys.md)等无UI界面的场景外，均<!--DelEnd-->使用
 * > UIContext中的弹窗方法。
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare namespace promptAction {
    /**
     * Toast的选项。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    interface ShowToastOptions {
        /**
         * 显示的文本信息。
         * <br>**说明：** 
         * <br/>默认字体为'Harmony Sans'，不支持设置其他字体。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @FaAndStageModel
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        message: string | Resource;
        /**
         * 设置Toast弹出的持续时间。
         * <br/>默认值：1500ms
         * <br/>取值范围：[1500, 10000]
         * <br/>若小于1500ms则取默认值，若大于10000ms则取上限值10000ms。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @FaAndStageModel
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        duration?: number;
        /**
         * 设置Toast底部边框距离导航条的高度，软键盘拉起时，如果bottom值过小，Toast要被软键盘遮挡时，会自动避让至距离软键盘80vp处。
         * <br/>默认值：80vp
         * <br/>**说明：** 
         * <br/>当底部没有导航条时，bottom为设置弹窗底部边框距离窗口底部的高度。
         * <br/>设置对齐方式alignment后，bottom不生效。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @FaAndStageModel
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        bottom?: string | number;
        /**
         * 设置Toast层级。
         * <br>默认值：ToastShowMode.DEFAULT，默认显示在应用内。
         *
         * @default ToastShowMode.DEFAULT
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform [since 12]
         * @atomicservice [since 12]
         * @since 11 dynamic
         */
        showMode?: ToastShowMode;
        /**
         * 对齐方式。
         * <br/>默认值：undefined，当未设置alignment且存在导航条或软键盘时，Toast会自动根据导航条或软键盘位置进行调整，可参考bottom的说明。
         * <br>**说明：** 
         * <br/>不同alignment下，Toast位置对齐效果，如下图所示。
         * <br/>![zh-cn_image_0001](figures/toast_alignment.PNG)<br/>Toast的文本显示默认自左向右，不支持其他对齐方式。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        alignment?: Alignment;
        /**
         * 在对齐方式上的偏移。
         * <br/>默认值：{ dx: 0, dy: 0 }，默认没有偏移。
         * <br/>**说明：** 
         * <br/>仅支持设置px类型的数值。如需设置其他类型的数值，应将其他类型转换为px类型后传入。例如，若需设置vp，应将其转换为px后传入。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        offset?: Offset;
        /**
         * Toast的背板颜色。
         * <br/>默认值：Color.Transparent
         * <br/>**说明：** 
         * <br/>backgroundColor会与模糊属性backgroundBlurStyle叠加产生效果，如果不符合预期，可将backgroundBlurStyle设置为BlurStyle.NONE，即可取消模糊。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        backgroundColor?: ResourceColor;
        /**
         * Toast的文本颜色。<br/>默认值：Color.Black
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        textColor?: ResourceColor;
        /**
         * Toast的背板模糊材质。
         * <br/>默认值：从API版本26.0.0开始，为BlurStyle.NONE，API版本26.0.0之前，为BlurStyle.COMPONENT_ULTRA_THICK。
         * <br/>**说明：** 
         * <br/>设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则颜色显示将不符合预期效果。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        backgroundBlurStyle?: BlurStyle;
        /**
         * Toast的背板阴影。
         * <br/>默认值：ShadowStyle.OUTER_DEFAULT_MD
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        shadow?: ShadowOptions | ShadowStyle;
        /**
         * 是否响应悬停态，值为true时，响应悬停态。
         * <br/>默认值：false，默认不响应。
         *
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 14 dynamic
         */
        enableHoverMode?: boolean;
        /**
         * 响应悬停态时，弹窗的显示区域。
         * <br/>默认值：HoverModeAreaType.BOTTOM_SCREEN，默认显示在下半屏。
         *
         * @default HoverModeAreaType.BOTTOM_SCREEN
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 14 dynamic
         */
        hoverModeArea?: HoverModeAreaType;
        /**
         * 设置组件的系统材质。
         * <br/>默认值：如果主动设置了backgroundBlurStyle或backgroundColor接口，默认值是无系统材质效果，否则默认值
         * 是style为ImmersiveStyle.ULTRA_THICK的[ImmersiveMaterial](arkts-apis-uimaterial.md#immersivematerial)对象。
         * 设置undefined时与默认值保持一致。 
         * <br/>**说明：** 
         * <br />不同系统材质对应不同的属性影响效果，该接口影响
         * 背景色[backgroundColor](arkui-ts/ts-universal-attributes-background.md#backgroundcolor)、
         * 边框颜色[borderColor](arkui-ts/ts-universal-attributes-border.md#bordercolor)、
         * 边框宽度[borderWidth](arkui-ts/ts-universal-attributes-border.md#borderwidth)、
         * 阴影[shadow](arkui-ts/ts-universal-attributes-image-effect.md#shadow)，不建议与上述接口一起使用。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @atomicservice
         * @since 26.0.0 dynamic
         */
        systemMaterial?: SystemUiMaterial;
    }
    /**
     * 设置Toast的显示模式，默认显示在应用内，支持显示在子窗。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    export enum ToastShowMode {
        /**
         * Toast显示在应用内。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform [since 12]
         * @atomicservice [since 12]
         * @since 11 dynamic
         */
        DEFAULT = 0,
        /**
         * Toast显示在子窗。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform [since 12]
         * @atomicservice [since 12]
         * @since 11 dynamic
         */
        TOP_MOST = 1,
        /**
         * Toast shows in SYSTEM_TOAST window.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 12 dynamic
         */
        SYSTEM_TOP_MOST = 2
    }
    /**
     * 菜单中的菜单项按钮。
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    interface Button {
        /**
         * 按钮文本内容。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @FaAndStageModel
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        text: string | Resource;
        /**
         * 按钮文本颜色。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @FaAndStageModel
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        color: string | Resource;
        /**
         * 在弹窗获焦且未进行tab键走焦时，按钮是否默认响应Enter键。多个Button时，只允许一个Button的该字段配置为true，
         * 否则所有Button均不响应。多重弹窗可自动获焦连续响应。
         * 值为true表示按钮默认响应Enter键，值为false时，按钮不默认响应Enter键。
         * <br/>默认值：false
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        primary?: boolean;
    }
    /**
     * 对话框的响应结果。
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    interface ShowDialogSuccessResponse {
        /**
         * 选中按钮在buttons数组中的索引，从0开始。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @FaAndStageModel
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        index: number;
    }
    /**
     * 对话框的选项。
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    interface ShowDialogOptions {
        /**
         * 标题文本。<br/>默认值：undefined，取值为undefined默认不显示标题。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @FaAndStageModel
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        title?: string | Resource;
        /**
         * 内容文本。<br/>默认值：undefined，取值为undefined默认不显示内容。 
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @FaAndStageModel
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        message?: string | Resource;
        /**
         * 对话框中按钮的数组，结构为：{text:'button',&nbsp;color:&nbsp;'\#666666'}，支持大于1个按钮。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @FaAndStageModel
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        buttons?: Array<Button>;
        /**
         * 对话框遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。
         * <br/>默认值：{ x: 0, y: 0, width: '100%', height: '100%' } 
         * <br/>**说明：**
         * <br/>showInSubWindow为true时，maskRect不生效。
         * <br/>maskRect在设置[Rectangle](arkui-ts/ts-methods-alert-dialog-box.md#rectangle8类型说明)中的部分属性后，若未设置其余的属性，
         * 则其余属性的默认值为0。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice [since 11]
         * @since 10 dynamic
         */
        maskRect?: Rectangle;
        /**
         * 对话框在竖直方向上的对齐方式。
         * <br/>默认值：DialogAlignment.Default
         * <br/>**说明：**
         * <br/>若在UIExtension中设置showInSubWindow为true, 弹窗将基于UIExtension的宿主窗口对齐。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice [since 11]
         * @since 10 dynamic
         */
        alignment?: DialogAlignment;
        /**
         * 对话框相对alignment所在位置的偏移量。
         * <br/>默认值：{&nbsp;dx:&nbsp;0&nbsp;,&nbsp;dy:&nbsp;0&nbsp;}
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice [since 11]
         * @since 10 dynamic
         */
        offset?: Offset;
        /**
         * 某对话框需要显示在主窗口之外时，是否在子窗口显示此对话框。值为true表示在子窗口显示对话框。
         * <br/>默认值：false，对话框显示在应用内，而非独立子窗口。
         * <br/>**说明：** showInSubWindow为true的对话框无法触发显示另一个showInSubWindow为true的对话框。
         *
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice [since 12]
         * @since 11 dynamic
         */
        showInSubWindow?: boolean;
        /**
         * 对话框是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与对话框周围其他控件进行交互，即蒙层区域无法事件透传。
         * 值为false表示为非模态窗口且无蒙层，可以与对话框周围其他控件进行交互。
         * <br/>默认值：true
         *
         * @default true
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice [since 12]
         * @since 11 dynamic
         */
        isModal?: boolean;
        /**
         * 对话框背板颜色。
         * <br/>默认值：Color.Transparent
         * <br/>**说明：** 
         * <br/>backgroundColor会与模糊属性backgroundBlurStyle叠加产生效果，如果不符合预期，可将backgroundBlurStyle设置为BlurStyle.NONE，即可取消模糊。
         *
         * @default Color.Transparent
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        backgroundColor?: ResourceColor;
        /**
         * 对话框背板模糊材质。
         * <br/>默认值：从API版本26.0.0开始，为BlurStyle.NONE，API版本26.0.0之前，为BlurStyle.COMPONENT_ULTRA_THICK。
         * <br/>**说明：** 
         * <br/>设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则颜色显示将不符合预期效果。
         *
         * @default BlurStyle.COMPONENT_ULTRA_THICK
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        backgroundBlurStyle?: BlurStyle;
        /**
         * 背景模糊效果。默认值请参考BackgroundBlurStyleOptions类型说明。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 19 dynamic
         */
        backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
        /**
         * 背景效果参数。默认值请参考BackgroundEffectOptions类型说明。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 19 dynamic
         */
        backgroundEffect?: BackgroundEffectOptions;
        /**
         * 设置对话框背板的阴影。
         * <br /> 当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM。其他设备默认无阴影。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        shadow?: ShadowOptions | ShadowStyle;
        /**
         * 是否响应悬停态，值为true时，响应悬停态。
         * <br />默认值：false，默认不响应。
         * <br />**说明：**
         * <br />PC/2in1设备弹窗默认显示在上半屏，在enableHoverMode设置为true时，可以通过设置hoverModeArea参数显示在下半屏。
         * 其他设备弹窗在enableHoverMode设置为true时默认显示在下半屏，可以通过设置hoverModeArea参数显示在上半屏。
         *
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 14 dynamic
         */
        enableHoverMode?: boolean;
        /**
         * 设置悬停态下对话框的默认展示区域。
         * <br />默认值：HoverModeAreaType.BOTTOM_SCREEN
         *
         * @default HoverModeAreaType.BOTTOM_SCREEN
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 14 dynamic
         */
        hoverModeArea?: HoverModeAreaType;
        /**
         * 对话框弹出后的事件回调。
         * <br />**说明：**
         * <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
         * <br />2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
         * <br />3.快速点击弹出，关闭对话框时，onWillDisappear在onDidAppear前生效。
         * <br/>4.对话框入场动效未完成时彻底关闭对话框，动效打断，onDidAppear不会触发。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 19 dynamic
         */
        onDidAppear?: Callback<void>;
        /**
         * 对话框消失后的事件回调。
         * <br />**说明：**
         * <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 19 dynamic
         */
        onDidDisappear?: Callback<void>;
        /**
         * 对话框显示动效前的事件回调。
         * <br />**说明：**
         * <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
         * <br />2.在onWillAppear内设置改变对话框显示效果的回调事件，二次弹出生效。 
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 19 dynamic
         */
        onWillAppear?: Callback<void>;
        /**
         * 对话框退出动效前的事件回调。
         * <br />**说明：**
         * <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 19 dynamic
         */
        onWillDisappear?: Callback<void>;
        /**
         * 设置对话框显示层级。
         * <br />**说明：**
         * <br />- 默认值：LevelMode.OVERLAY
         * <br />- 当且仅当showInSubWindow属性设置为false时生效。
         *
         * @default LevelMode.OVERLAY
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 15 dynamic
         */
        levelMode?: LevelMode;
        /**
         * 置页面级对话框需要显示的层级下的[节点UniqueID](js-apis-arkui-frameNode.md#getuniqueid12)。
         * <br/>取值范围：大于等于0的数字。
         * <br />**说明：** 
         * <br />- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 15 dynamic
         */
        levelUniqueId?: number;
        /**
         * 设置页面内对话框蒙层效果。
         * <br />**说明：**
         * <br />- 默认值：ImmersiveMode.DEFAULT 
         * <br />- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
         *
         * @default ImmersiveMode.DEFAULT
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 15 dynamic
         */
        immersiveMode?: ImmersiveMode;
        /**
         * 设置对话框显示的顺序。
         * <br />**说明：**
         * <br />- 默认值：LevelOrder.clamp(0) 
         * <br />- 不支持动态刷新顺序。
         *
         * @default The value returned by LevelOrder.clamp(0)
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 18 dynamic
         */
        levelOrder?: LevelOrder;
        /**
         * 设置弹窗的系统材质。
         * <br />**说明：**
         * <br/>- 默认值：[ImmersiveOptions](arkts-apis-uimaterial.md#immersiveoptions)的style为ImmersiveStyle.ULTRA_THICK的
         * [ImmersiveMaterial](arkts-apis-uimaterial.md#immersivematerial)对象。设置undefined时与默认值保持一致。
         * <br/>- 不同的材质具有不同的效果，该接口影响
         * 背景色[backgroundColor](arkui-ts/ts-universal-attributes-background.md#backgroundcolor)、
         * 背景模糊[backgroundBlurStyle](arkui-ts/ts-universal-attributes-background.md#backgroundblurstyle9)、
         * 背景效果[backgroundEffect](arkui-ts/ts-universal-attributes-background.md#backgroundeffect11)、
         * 阴影[shadow](arkui-ts/ts-universal-attributes-image-effect.md#shadow)，不建议与上述接口一起使用。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @atomicservice
         * @since 26.0.0 dynamic
         */
        systemMaterial?: SystemUiMaterial;
        /**
         * Sets the distortion animation Mode of the dialog.
         *
         * @default DistortionMode.DISTORTION_AUTO
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0 dynamic
         */
        distortionMode?: DistortionMode;
        /**
         * Sets the edgeLight animation Mode of the dialog.
         *
         * @default EdgeLightMode.EDGELIGHT_DISABLED
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0 dynamic
         */
        edgeLightMode?: EdgeLightMode;
    }
    /**
     * 自定义弹窗的状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    enum CommonState {
        /**
         * 未初始化，控制器未与dialog绑定时。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 20 dynamic
         */
        UNINITIALIZED = 0,
        /**
         * 已初始化，控制器与dialog绑定后。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 20 dynamic
         */
        INITIALIZED = 1,
        /**
         * 显示中，dialog显示动画过程中。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 20 dynamic
         */
        APPEARING = 2,
        /**
         * 已显示，dialog显示动画结束。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 20 dynamic
         */
        APPEARED = 3,
        /**
         * 消失中，dialog消失动画过程中。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 20 dynamic
         */
        DISAPPEARING = 4,
        /**
         * 已消失，dialog消失动画结束后。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 20 dynamic
         */
        DISAPPEARED = 5
    }
    /**
     * 公共控制器，可以控制promptAction相关组件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    class CommonController {
        /**
         * 控制器的构造函数。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 18 dynamic
         */
        constructor();
        /**
         * 关闭显示的自定义弹窗，若已关闭，则不生效。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 18 dynamic
         */
        close(): void;
        /**
         * 获取自定义弹窗的状态。
         *
         * @returns { CommonState } 返回对应的弹窗状态。
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 20 dynamic
         */
        getState(): CommonState;
    }
    /**
     * 自定义弹窗控制器，继承自[CommonController](#commoncontroller18)。
     *
     * DialogController可作为UIContext弹出自定义弹窗的成员变量，具体用法可看
     * [openCustomDialogWithController](arkts-apis-uicontext-promptaction.md#opencustomdialogwithcontroller18)和
     * [presentCustomDialog](arkts-apis-uicontext-promptaction.md#presentcustomdialog18)示例。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    class DialogController extends CommonController {
    }
    /**
     * 弹窗的选项。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    interface BaseDialogOptions {
        /**
         * 弹窗遮蔽层区域。
         * <br/>默认值：{ x: 0, y: 0, width: '100%', height: '100%' }
         * <br/>**说明：** 
         * <br/>showInSubWindow为true时，maskRect不生效。
         * <br/>maskRect在设置[Rectangle](arkui-ts/ts-methods-alert-dialog-box.md#rectangle8类型说明)中的部分属性后，若未设置其余的属性，则其余属性的默认值为0。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice [since 12]
         * @since 11 dynamic
         */
        maskRect?: Rectangle;
        /**
         * 弹窗在竖直方向上的对齐方式。
         * <br>默认值：DialogAlignment.Default 
         * <br/>**说明：**
         * <br/>若在UIExtension中设置showInSubWindow为true, 弹窗将基于UIExtension的宿主窗口对齐。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice [since 12]
         * @since 11 dynamic
         */
        alignment?: DialogAlignment;
        /**
         * 弹窗相对alignment所在位置的偏移量。
         * <br/>默认值：{&nbsp;dx:&nbsp;0&nbsp;,&nbsp;dy:&nbsp;0&nbsp;}
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice [since 12]
         * @since 11 dynamic
         */
        offset?: Offset;
        /**
         * 某弹窗需要显示在主窗口之外时，是否在子窗口显示此弹窗。值为true表示在子窗口显示弹窗。
         * <br/>默认值：false，弹窗显示在应用内，而非独立子窗口。
         *
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice [since 12]
         * @since 11 dynamic
         */
        showInSubWindow?: boolean;
        /**
         * 弹窗在子窗口中的显示模式。
         * <br/>默认值：DialogDisplayMode.SCREEN_BASED
         * <br/>**说明：**
         * <br/>仅当showInSubWindow设置为true时生效。
         *
         * @default DialogDisplayMode.SCREEN_BASED
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 26.0.0 dynamic
         */
        displayModeInSubWindow?: DialogDisplayMode;
        /**
         * 弹窗是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与弹窗周围其他控件进行交互，即蒙层区域无法事件透传。
         * 值为false表示为非模态窗口且无蒙层，可以与弹窗周围其他控件进行交互。
         * <br/>默认值：true
         *
         * @default true
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice [since 12]
         * @since 11 dynamic
         */
        isModal?: boolean;
        /**
         * 点击遮障层时，是否关闭弹窗，true表示关闭弹窗。false表示不关闭弹窗。<br/>默认值：true 
         *
         * @default true
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        autoCancel?: boolean;
        /**
         * 设置弹窗显示和退出的过渡效果。
         * <br/>**说明：**
         * <br/> 1.如果不设置，则使用默认的显示/退出动效。
         * <br/> 2.显示动效中按back键，打断显示动效，执行退出动效，动画效果为显示动效与退出动效的曲线叠加后的效果。
         * <br/> 3.退出动效中按back键，不会打断退出动效，退出动效继续执行，继续按back键退出应用。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        transition?: TransitionEffect;
        /**
         * 设置弹窗内容显示的过渡效果。默认无动效。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 19 dynamic
         */
        dialogTransition?: TransitionEffect;
        /**
         * 设置蒙层显示的过渡效果。默认无动效。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 19 dynamic
         */
        maskTransition?: TransitionEffect;
        /**
         * 自定义蒙层颜色。<br>默认值: 0x33000000
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        maskColor?: ResourceColor;
        /**
         * 交互式关闭回调函数。
         * <br/>**说明：** 
         * <br/>1.当用户执行点击遮障层关闭、侧滑（左滑/右滑）、三键back、键盘ESC关闭交互操作时，如果注册该回调函数，则不会立刻关闭弹窗。
         * 在回调函数中可以通过reason得到阻拦关闭弹窗的操作类型，从而根据原因选择是否能关闭弹窗。当前组件返回的reason中，暂不支持CLOSE_BUTTON的枚举值。
         * <br/>2.在onWillDismiss回调中，不能再做onWillDismiss拦截。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
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
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        onDidAppear?: () => void;
        /**
         * 弹窗消失后的事件回调。
         * <br />**说明：**
         * <br />正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。 
         * <br/>当弹窗退场动画未完成时（例如：同时触发弹窗关闭和页面切换），该回调不会触发。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        onDidDisappear?: () => void;
        /**
         * 弹窗显示动效前的事件回调。
         * <br />**说明：**
         * <br />1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
         * <br />2.在onWillAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        onWillAppear?: () => void;
        /**
         * 弹窗退出动效前的事件回调。
         * <br />**说明：**
         * <br />1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
         * <br />2.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        onWillDisappear?: () => void;
        /**
         * 用于设置弹窗是否在拉起软键盘时进行自动避让。<br/>默认值：KeyboardAvoidMode.DEFAULT
         *
         * @default KeyboardAvoidMode.DEFAULT
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        keyboardAvoidMode?: KeyboardAvoidMode;
        /**
         * 是否响应悬停态，值为true时，响应悬停态。
         * <br />默认值：false，默认不响应。
         * <br />**说明：**
         * <br />PC/2in1设备弹窗默认显示在上半屏，在enableHoverMode设置为true。
         * 可以通过设置hoverModeArea参数显示在下半屏。其他设备弹窗在enableHoverMode设置为true时默认显示在下半屏，可以通过设置hoverModeArea参数显示在上半屏。
         *
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 14 dynamic
         */
        enableHoverMode?: boolean;
        /**
         * 悬停态下弹窗默认展示区域。<br />默认值：HoverModeAreaType.BOTTOM_SCREEN
         *
         * @default HoverModeAreaType.BOTTOM_SCREEN
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 14 dynamic
         */
        hoverModeArea?: HoverModeAreaType;
        /**
         * 背景模糊效果。默认值请参考BackgroundBlurStyleOptions类型说明。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 19 dynamic
         */
        backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
        /**
         * 背景效果参数。默认值请参考BackgroundEffectOptions类型说明。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 19 dynamic
         */
        backgroundEffect?: BackgroundEffectOptions;
        /**
         * 弹窗避让键盘后，和键盘之间距离。
         * <br />**说明：**
         * <br/>- 默认值：16vp
         * <br />- 默认单位：vp
         * <br />- 当且仅当keyboardAvoidMode属性设置为DEFAULT时生效。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 15 dynamic
         */
        keyboardAvoidDistance?: LengthMetrics;
        /**
         * 设置弹窗显示层级。
         * <br />**说明：**
         * <br />- 默认值：LevelMode.OVERLAY 
         * <br />- 当且仅当showInSubWindow属性设置为false时生效。
         *
         * @default LevelMode.OVERLAY
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 15 dynamic
         */
        levelMode?: LevelMode;
        /**
         * 设置页面级弹窗需要显示的层级下的[节点UniqueID](js-apis-arkui-frameNode.md#getuniqueid12)。
         * <br/>取值范围：大于等于0的数字。
         * <br />**说明：** 
         * <br />- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 15 dynamic
         */
        levelUniqueId?: number;
        /**
         * 设置页面内弹窗蒙层效果。
         * <br />**说明：**
         * <br />- 默认值：ImmersiveMode.DEFAULT 
         * <br />- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
         *
         * @default ImmersiveMode.DEFAULT
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 15 dynamic
         */
        immersiveMode?: ImmersiveMode;
        /**
         * 设置弹窗显示的顺序。<br />**说明：**<br />- 默认值：LevelOrder.clamp(0) <br />- 不支持动态刷新顺序。
         *
         * @default The value returned by LevelOrder.clamp(0)
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 18 dynamic
         */
        levelOrder?: LevelOrder;
        /**
         * 设置弹窗是否获取焦点。值为true表示获取焦点，值为false表示不获取焦点。
         * <br />默认值：true 
         * <br />**说明：**
         * <br />只有弹出覆盖在当前窗口之上的弹窗才可以获取焦点。
         *
         * @default true
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 19 dynamic
         */
        focusable?: boolean;
        /**
         * 设置弹窗的系统材质。
         * <br/>**说明：**
         * <br/>- 默认值：[ImmersiveOptions](arkts-apis-uimaterial.md#immersiveoptions)的style为
         * ImmersiveStyle.ULTRA_THICK的[ImmersiveMaterial](arkts-apis-uimaterial.md#immersivematerial)对象。
         * 设置undefined时与默认值保持一致。
         * <br/>- 不同的材质具有不同的效果，该接口影响
         * 背景色[backgroundColor](arkui-ts/ts-universal-attributes-background.md#backgroundcolor)、
         * 背景模糊[backgroundBlurStyle](arkui-ts/ts-universal-attributes-background.md#backgroundblurstyle9)、
         * 背景效果[backgroundEffect](arkui-ts/ts-universal-attributes-background.md#backgroundeffect11)、
         * 边框颜色[borderColor](arkui-ts/ts-universal-attributes-border.md#bordercolor)、
         * 边框宽度[borderWidth](arkui-ts/ts-universal-attributes-border.md#borderwidth)、
         * 阴影[shadow](arkui-ts/ts-universal-attributes-image-effect.md#shadow)，不建议与上述接口一起使用。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @atomicservice
         * @since 26.0.0 dynamic
         */
        systemMaterial?: SystemUiMaterial;
        /**
         * Sets the distortion animation Mode of the dialog.
         *
         * @default DistortionMode.DISTORTION_AUTO
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0 dynamic
         */
        distortionMode?: DistortionMode;
        /**
         * Sets the edgeLight animation Mode of the dialog.
         *
         * @default EdgeLightMode.EDGELIGHT_DISABLED
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0 dynamic
         */
        edgeLightMode?: EdgeLightMode;
    }
    /**
     * 自定义弹窗的内容，继承自[BaseDialogOptions](#basedialogoptions11)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    interface CustomDialogOptions extends BaseDialogOptions {
        /**
         * 设置自定义弹窗的内容。
         * <br/>**说明：** 
         * <br/>builder需要赋值为箭头函数，格式如下：() => { this.XXX() }，其中XXX是内部builder名。
         * <br/>全局builder需要在组件内部创建，并在内部builder中调用。
         * <br/>builder根节点宽高百分比相对弹窗容器大小。
         * <br/>builder非根节点宽高百分比相对父节点大小。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice [since 12]
         * @since 11 dynamic
         */
        builder: CustomBuilder;
        /**
         * 设置弹窗背板颜色。
         * <br/>默认值：Color.Transparent
         * <br/>**说明：** 
         * <br/>当设置了backgroundColor为非透明色时，backgroundBlurStyle需要设置为BlurStyle.NONE，否则颜色显示将不符合预期效果。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        backgroundColor?: ResourceColor;
        /**
         * 设置背板的圆角半径。
         * <br />可分别设置4个圆角的半径。
         * <br />默认值：{ topLeft: '32vp', topRight: '32vp', bottomLeft: '32vp', bottomRight: '32vp' }
         * <br /> 圆角大小受组件尺寸限制，最大值为组件宽或高的一半，若值为负，则按照默认值处理。 
         * <br /> 百分比参数方式：以父元素弹窗宽和高的百分比来设置弹窗的圆角。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        cornerRadius?: Dimension | BorderRadiuses;
        /**
         * 设置弹窗背板的宽度。
         * <br />**说明：**
         * <br>- 弹窗宽度默认最大值：400vp 
         * <br />- 百分比参数方式：弹窗参考宽度基于所在窗口的宽度的基础上调整。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        width?: Dimension;
        /**
         * 设置弹窗背板的高度。
         * <br />**说明：**
         * <br />- 弹窗高度默认最大值：0.9 *（窗口高度 - 安全区域）。
         * <br />- 百分比参数方式：弹窗参考高度为（窗口高度 - 安全区域），在此基础上调小或调大。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        height?: Dimension;
        /**
         * 设置弹窗背板的边框宽度。
         * <br />可分别设置4个边框宽度。
         * <br />默认值：0 
         * <br />单位：vp 
         * <br /> 百分比参数方式：以父元素弹窗宽的百分比来设置弹窗的边框宽度。
         * <br />当弹窗左边框和右边框大于弹窗宽度，弹窗上边框和下边框大于弹窗高度，显示可能不符合预期。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        borderWidth?: Dimension | EdgeWidths;
        /**
         * 设置弹窗背板的边框颜色。
         * <br/>默认值：Color.Black
         * <br/> 如果使用borderColor属性，需要和borderWidth属性一起使用。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        borderColor?: ResourceColor | EdgeColors;
        /**
         * 设置弹窗背板的边框样式。
         * <br/>默认值：BorderStyle.Solid
         * <br/> 如果使用borderStyle属性，需要和borderWidth属性一起使用。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        borderStyle?: BorderStyle | EdgeStyles;
        /**
         * 设置弹窗背板的阴影。
         * <br />当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM。其他设备默认无阴影。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        shadow?: ShadowOptions | ShadowStyle;
        /**
         * 弹窗背板模糊材质。
         * <br/>默认值：从API版本26.0.0开始，为BlurStyle.NONE，API版本26.0.0之前，为BlurStyle.COMPONENT_ULTRA_THICK。
         * <br/>**说明：** 
         * <br/>设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则颜色显示将不符合预期效果。
         *
         * @default BlurStyle.COMPONENT_ULTRA_THICK
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12 dynamic
         */
        backgroundBlurStyle?: BlurStyle;
    }
    /**
     * 表示弹窗背板的圆角半径允许的数据字段类型。
     *
     * @typedef { Dimension | BorderRadiuses } DialogOptionsCornerRadius
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    declare type DialogOptionsCornerRadius = Dimension | BorderRadiuses;
    /**
     * 表示弹窗背板的边框宽度允许的数据字段类型。
     *
     * @typedef { Dimension | EdgeWidths } DialogOptionsBorderWidth
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    declare type DialogOptionsBorderWidth = Dimension | EdgeWidths;
    /**
     * 表示弹窗背板的边框颜色允许的数据字段类型。
     *
     * @typedef { ResourceColor | EdgeColors } DialogOptionsBorderColor
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    declare type DialogOptionsBorderColor = ResourceColor | EdgeColors;
    /**
     * 表示弹窗背板的边框样式允许的数据字段类型。
     *
     * @typedef { BorderStyle | EdgeStyles } DialogOptionsBorderStyle
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    declare type DialogOptionsBorderStyle = BorderStyle | EdgeStyles;
    /**
     * 表示弹窗背板的阴影允许的数据字段类型。
     *
     * @typedef { ShadowOptions | ShadowStyle } DialogOptionsShadow
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    declare type DialogOptionsShadow = ShadowOptions | ShadowStyle;
    /**
     * 自定义弹窗的内容，继承自[BaseDialogOptions](#basedialogoptions11)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    interface DialogOptions extends BaseDialogOptions {
        /**
         * 设置弹窗背板颜色。
         * <br/>默认值：Color.Transparent
         * <br/>**说明：** 
         * <br/>backgroundColor会与模糊属性backgroundBlurStyle叠加产生效果，如果不符合预期，可将backgroundBlurStyle设置为BlurStyle.NONE，即可取消模糊。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 18 dynamic
         */
        backgroundColor?: ResourceColor;
        /**
         * 设置弹窗背板的圆角半径。
         * <br />可分别设置4个圆角的半径。
         * <br />默认值：{ topLeft: '32vp', topRight: '32vp', bottomLeft: '32vp', bottomRight: '32vp' }
         * <br /> 圆角大小受组件尺寸限制，最大值为组件宽或高的一半，若值为负，则按照默认值处理。 
         * <br /> 百分比参数方式：以父元素弹窗宽和高的百分比来设置弹窗的圆角。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 18 dynamic
         */
        cornerRadius?: DialogOptionsCornerRadius;
        /**
         * 设置弹窗背板的宽度。
         * <br />**说明：**
         * <br>- 默认最大值：400vp 
         * <br />- 百分比参数方式：弹窗参考宽度基于所在窗口宽度调整。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 18 dynamic
         */
        width?: Dimension;
        /**
         * 设置弹窗背板的高度。
         * <br />**说明：**
         * <br />- 默认最大值：0.9 *（窗口高度 - 安全区域）。
         * <br />- 百分比参数方式：弹窗参考高度为（窗口高度 - 安全区域），在此基础上调小或调大。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 18 dynamic
         */
        height?: Dimension;
        /**
         * 设置弹窗背板的边框宽度。
         * <br />可分别设置4个边框宽度。
         * <br />默认值：0 
         * <br />单位：vp 
         * <br /> 百分比参数方式：以父元素弹窗宽的百分比来设置弹窗的边框宽度。
         * <br />当弹窗左边框和右边框大于弹窗宽度，弹窗上边框和下边框大于弹窗高度，显示可能不符合预期。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 18 dynamic
         */
        borderWidth?: DialogOptionsBorderWidth;
        /**
         * 设置弹窗背板的边框颜色。
         * <br/>默认值：Color.Black 
         * <br/> 如果使用borderColor属性，需要和borderWidth属性一起使用。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 18 dynamic
         */
        borderColor?: DialogOptionsBorderColor;
        /**
         * 设置弹窗背板的边框样式。
         * <br/>默认值：BorderStyle.Solid。
         * <br/> 如果使用borderStyle属性，需要和borderWidth属性一起使用。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 18 dynamic
         */
        borderStyle?: DialogOptionsBorderStyle;
        /**
         * 设置弹窗背板的阴影。
         * <br />当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM。其他设备默认无阴影。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 18 dynamic
         */
        shadow?: DialogOptionsShadow;
        /**
         * 弹窗背板模糊材质。
         * <br/>默认值：从API版本26.0.0开始，为BlurStyle.NONE，API版本26.0.0之前，为BlurStyle.COMPONENT_ULTRA_THICK。
         * <br/>**说明：** 
         * <br/>设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则颜色显示将不符合预期效果。
         *
         * @default BlurStyle.COMPONENT_ULTRA_THICK
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 18 dynamic
         */
        backgroundBlurStyle?: BlurStyle;
    }
    /**
     * 操作菜单的响应结果。
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    interface ActionMenuSuccessResponse {
        /**
         * 选中按钮在buttons数组中的索引，从0开始。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @FaAndStageModel
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        index: number;
    }
    /**
     * 操作菜单的选项。
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    interface ActionMenuOptions {
        /**
         * 标题文本。
         * <br/>默认值：undefined，取值为undefined默认不显示标题。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @FaAndStageModel
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        title?: string | Resource;
        /**
         * 菜单中菜单项按钮的数组，结构为：{text:'button',&nbsp;color:&nbsp;'\#666666'}，支持1-6个按钮。按钮数量大于6个时，仅显示前6个按钮，之后的按钮不显示。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @FaAndStageModel
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        buttons: [
            Button,
            Button?,
            Button?,
            Button?,
            Button?,
            Button?
        ];
        /**
         * 某操作菜单需要显示在主窗口之外时，是否在子窗口显示此菜单。值为true表示在子窗口显示菜单。
         * <br/>默认值：false，在子窗口不显示菜单。
         * <br/>**说明：** 
         * <br/> - showInSubWindow为true的菜单无法触发显示另一个showInSubWindow为true的菜单。 
         * <br/> - 若在UIExtension中设置showInSubWindow为true, 菜单将基于UIExtension的宿主窗口对齐。
         *
         * @default false
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice [since 12]
         * @since 11 dynamic
         */
        showInSubWindow?: boolean;
        /**
         * 菜单是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与菜单周围其他控件进行交互，即蒙层区域无法事件透传。
         * 值为false表示为非模态窗口且无蒙层，可以与菜单周围其他控件进行交互。
         * <br/>默认值：true
         *
         * @default true
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice [since 12]
         * @since 11 dynamic
         */
        isModal?: boolean;
        /**
         * 设置菜单显示层级。
         * <br />**说明：**
         * <br />- 默认值：LevelMode.OVERLAY 
         * <br />- 当且仅当showInSubWindow属性设置为false时生效。
         *
         * @default LevelMode.OVERLAY
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 15 dynamic
         */
        levelMode?: LevelMode;
        /**
         * 设置页面级菜单需要显示的层级下的[节点UniqueID](js-apis-arkui-frameNode.md#getuniqueid12)。
         * <br/>取值范围：大于等于0的数字。
         * <br />**说明：**
         * <br />- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 15 dynamic
         */
        levelUniqueId?: number;
        /**
         * 设置页面内菜单蒙层效果。
         * <br />**说明：**
         * <br />- 默认值：ImmersiveMode.DEFAULT 
         * <br />- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。
         *
         * @default ImmersiveMode.DEFAULT
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 15 dynamic
         */
        immersiveMode?: ImmersiveMode;
        /**
         * 菜单弹出后的事件回调。
         * <br />**说明：**
         * <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
         * <br />2.快速点击弹出，关闭菜单时，onWillDisappear在onDidAppear前生效。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 20 dynamic
         */
        onDidAppear?: Callback<void>;
        /**
         * 菜单消失后的事件回调。
         * <br />**说明：**
         * <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 20 dynamic
         */
        onDidDisappear?: Callback<void>;
        /**
         * 菜单显示动效前的事件回调。
         * <br />**说明：**
         * <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。 
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 20 dynamic
         */
        onWillAppear?: Callback<void>;
        /**
         * 菜单退出动效前的事件回调。
         * <br />**说明：**
         * <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 20 dynamic
         */
        onWillDisappear?: Callback<void>;
        /**
         * 设置弹窗的系统材质。
         * <br/>默认值：[ImmersiveOptions](arkts-apis-uimaterial.md#immersiveoptions)的style为
         * ImmersiveStyle.ULTRA_THICK的[ImmersiveMaterial](arkts-apis-uimaterial.md#immersivematerial)对象。
         * 设置undefined时与默认值保持一致。不同的材质具有不同的效果，可以影响弹窗的背景色、边框、阴影等视觉属性。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @atomicservice
         * @since 26.0.0 dynamic
         */
        systemMaterial?: SystemUiMaterial;
        /**
         * Sets the distortion animation Mode of the dialog.
         *
         * @default DistortionMode.DISTORTION_AUTO
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0 dynamic
         */
        distortionMode?: DistortionMode;
        /**
         * Sets the edgeLight animation Mode of the dialog.
         *
         * @default EdgeLightMode.EDGELIGHT_DISABLED
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0 dynamic
         */
        edgeLightMode?: EdgeLightMode;
    }
    /**
     * Creates and displays a toast.
     * 
     * 创建并显示即时反馈。
     * 
     * > **说明：**
     * >
     * > - 从API version 9开始支持，从API version 18开始废弃，建议使用[showToast](arkts-apis-uicontext-promptaction.md#showtoast)替代。
     *      showToast需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的
     *      [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取[PromptAction](arkts-apis-uicontext-promptaction.md)对象，
     *      然后通过该对象进行调用。且直接使用showToast可能导致[UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。
     * >
     * > - 从API version 10开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的
     *      [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的
     *      [PromptAction](arkts-apis-uicontext-promptaction.md)对象。
     * >
     * > - Toast样式单一，不支持内容的自定义，具体支持能力请参考[ShowToastOptions](#showtoastoptions)提供的接口。
     *
     * @param { ShowToastOptions } options - Toast选项。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.arkui.UIContext.PromptAction#showToast
     */
    function showToast(options: ShowToastOptions): void;
    /**
    * 显示即时反馈并通过Promise返回其id。
    * 
    * > **说明：**
    * >
    * > - 不支持在输入法类型窗口中使用子窗（showMode设置为TOP_MOST或者SYSTEM_TOP_MOST）的openToast，详情见输入法框架的约束与限制说明
    * > [createPanel]{@link @ohos.inputMethodEngine:inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo)}
    * > 。
    * >
    * > - 直接使用openToast可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，建议使用UIContext中的getPromptAction方法获
    * > 取到PromptAction对象，再通过该对象调用
    * > [openToast](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#opentoast18)实现。
     *
     * @param { ShowToastOptions } options - Toast选项。
     * @returns { Promise<number> } 返回即时反馈的id，可供closeToast使用。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    function openToast(options: ShowToastOptions): Promise<number>;
    /**
     * 关闭即时反馈。
     * 
     * > **说明：**
     * >
     * > 直接使用closeToast可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，建议使用
     *   UIContext中的getPromptAction方法获取
     * > 到PromptAction对象，再通过该对象调用
     * > [closeToast](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#closetoast18)实现。
     *
     * @param { number } toastId - openToast返回的id。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @throws { BusinessError } 103401 - Cannot find the toast.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    function closeToast(toastId: number): void;
    /**
     * 创建并显示对话框，对话框响应结果使用callback异步回调返回。
     * 
     * > **说明：**
     * >
     * > - 从API version 9开始支持，从API version 18开始废弃，建议使用[showDialog](arkts-apis-uicontext-promptaction.md#showdialog)替代。
     * showDialog需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的
     * [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取[PromptAction](arkts-apis-uicontext-promptaction.md)对象，
     * 然后通过该对象进行调用。且直接使用showDialog可能导致[UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。
     * >
     * > - 从API version 10开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的
     * [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的
     * [PromptAction](arkts-apis-uicontext-promptaction.md)对象。
     *
     * @param { ShowDialogOptions } options - 页面显示对话框信息描述。
     * @param { AsyncCallback<ShowDialogSuccessResponse> } callback - 回调函数。弹出对话框成功，err为undefined，
     *      data为获取到的对话框响应结果，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.arkui.UIContext.PromptAction#showDialog
     */
    function showDialog(options: ShowDialogOptions, callback: AsyncCallback<ShowDialogSuccessResponse>): void;
    /**
     * 创建并显示对话框，对话框通过Promise返回结果。
     * 
     * > **说明：**
     * >
     * > - 从API version 9开始支持，从API version 18开始废弃，建议使用[showDialog](arkts-apis-uicontext-promptaction.md#showdialog-1)替代。
     * showDialog需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的
     * [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取[PromptAction](arkts-apis-uicontext-promptaction.md)对象，
     * 然后通过该对象进行调用。且直接使用showDialog可能导致[UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。
     * >
     * > - 从API version 10开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的
     * [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的
     * [PromptAction](arkts-apis-uicontext-promptaction.md)对象。
     *
     * @param { ShowDialogOptions } options - 对话框选项。
     * @returns { Promise<ShowDialogSuccessResponse> } Promise对象，返回对话框的响应结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.arkui.UIContext.PromptAction#showDialog
     */
    function showDialog(options: ShowDialogOptions): Promise<ShowDialogSuccessResponse>;
    /**
     * 打开自定义弹窗。通过Promise返回结果。
     * 
     * <!--Del-->不支持在ServiceExtension中使用。<!--DelEnd-->
     * 
     * 弹窗宽度在设备竖屏时默认为 所在窗口宽度 - 左右margin（16vp，设备为2in1时为40vp），最大默认宽度为400vp。
     * 
     * > **说明：**
     * >
     * > - 从API version 11开始支持，从API version 18开始废弃，建议使用[openCustomDialog](arkts-apis-uicontext-promptaction.md#opencustomdialog12-1)替代。
     * openCustomDialog需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的
     * [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取
     * [PromptAction](arkts-apis-uicontext-promptaction.md)对象，然后通过该对象进行调用。且直接使用openCustomDialog可能导致
     * [UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。
     * >
     * > - 从API version 12开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的
     * [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的
     * [PromptAction](arkts-apis-uicontext-promptaction.md)对象。
     *
     * @param { CustomDialogOptions } options - 自定义弹窗的内容。 
     *      <br>**说明：** 如果BaseDialogOptions中的[isModal](js-apis-promptAction.md#basedialogoptions11)与
     *      [showInSubWindow](js-apis-promptAction.md#basedialogoptions11)同时设置为true，
     *      则只生效showInSubWindow = true，此时为非模态弹出框且不会显示蒙层，并在子窗口中显示。
     * @returns { Promise<number> } 返回供closeCustomDialog使用的对话框id。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.arkui.UIContext.PromptAction#openCustomDialog
     */
    function openCustomDialog(options: CustomDialogOptions): Promise<number>;
    /**
     * 关闭自定义弹窗。
     * 
     * > **说明：**
     * >
     * > - 从API version 11开始支持，从API version 18开始废弃，建议使用[closeCustomDialog](arkts-apis-uicontext-promptaction.md#closecustomdialog12-1)替代。
     * closeCustomDialog需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的
     * [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取
     * [PromptAction](arkts-apis-uicontext-promptaction.md)对象，然后通过该对象进行调用。且直接使用closeCustomDialog可能导致
     * [UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。
     * >
     * > - 从API version 12开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的
     * [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的
     * [PromptAction](arkts-apis-uicontext-promptaction.md)对象。
     *
     * @param { number } dialogId - openCustomDialog返回的对话框id。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.arkui.UIContext.PromptAction#closeCustomDialog
     */
    function closeCustomDialog(dialogId: number): void;
    /**
     * 创建并显示操作菜单，菜单响应结果使用callback异步回调返回。
     * 
     * > **说明：**
     * >
     * > - 从API version 9开始支持，从API version 18开始废弃，建议使用[showActionMenu](arkts-apis-uicontext-promptaction.md#showactionmenu11)替代。
     * showActionMenu需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的
     * [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取
     * [PromptAction](arkts-apis-uicontext-promptaction.md)对象，然后通过该对象进行调用。且直接使用showActionMenu可能导致
     * [UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。
     * >
     * > - 从API version 11开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的
     * [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的
     * [PromptAction](arkts-apis-uicontext-promptaction.md)对象。
     *
     * @param { ActionMenuOptions } options - 操作菜单选项。
     * @param { AsyncCallback<ActionMenuSuccessResponse> } callback - 回调函数。弹出操作菜单成功，err为undefined，
     *      data为获取到的操作菜单响应结果，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.arkui.UIContext.PromptAction#showActionMenu
     */
    function showActionMenu(options: ActionMenuOptions, callback: AsyncCallback<ActionMenuSuccessResponse>): void;
    /**
     * 创建并显示操作菜单，菜单响应后通过Promise返回结果。
     * 
     * > **说明：**
     * >
     * > - 从API version 9开始支持，从API version 18开始废弃，建议使用[showActionMenu](arkts-apis-uicontext-promptaction.md#showactionmenu)替代。
     * showActionMenu需先通过[UIContext](arkts-apis-uicontext-uicontext.md)中的
     * [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取
     * [PromptAction](arkts-apis-uicontext-promptaction.md)对象，然后通过该对象进行调用。且直接使用showActionMenu可能导致
     * [UI上下文不明确](../../ui/arkts-global-interface.md#ui上下文不明确)的问题。
     * >
     * > - 从API version 10开始，可以通过使用[UIContext](arkts-apis-uicontext-uicontext.md)中的
     * [getPromptAction](arkts-apis-uicontext-uicontext.md#getpromptaction)方法获取当前UI上下文关联的
     * [PromptAction](arkts-apis-uicontext-promptaction.md)对象。
     *
     * @param { ActionMenuOptions } options - Promise对象，返回菜单的响应结果。
     * @returns { Promise<ActionMenuSuccessResponse> } Promise对象，返回菜单的响应结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - Internal error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.arkui.UIContext.PromptAction#showActionMenu
     */
    function showActionMenu(options: ActionMenuOptions): Promise<ActionMenuSuccessResponse>;
}
/**
 * Dialog关闭的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DismissDialogAction {
    /**
     * Dialog关闭回调函数。开发者需要退出时调用，不需要退出时无需调用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    dismiss: Callback<void>;
    /**
     * Dialog无法关闭原因。根据开发者需求选择不同操作下，Dialog是否关闭。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    reason: DismissReason;
}
export default promptAction;