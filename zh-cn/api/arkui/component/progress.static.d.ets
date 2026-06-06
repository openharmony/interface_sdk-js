'use static';
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
import { ResourceColor, Length, PX, VP, LPX, Font, ResourceStr } from "./units";
import { Resource } from '../../global/resource';
import { CommonMethod, ContentModifier, CommonConfiguration } from './common';
import { LinearGradient } from "./dataPanel";
import { LengthMetrics } from '../Graphics';
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier } from "./common";

/**
 * 进度条选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ProgressOptions {
    /**
     * 指定当前进度值。设置小于0的数值时置为0，设置大于total的数值时置为total。
     * 取值范围：[0, total]。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: double;
    /**
     * 指定进度总长。设置小于等于0的数值时置为100。
     * 默认值：100
     * 。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    total?: double;
    /**
     * 指定进度条类型。
     * 默认值：ProgressType.Linear。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type?: ProgressType;
}
/**
 * 进度条类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ProgressType {
    /**
     * 线性样式。当高度大于宽度时，自适应垂直显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Linear = 0,
    /**
     * 环形无刻度样式，环形圆环逐渐显示直至完全填充。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Ring = 1,
    /**
     * 圆形样式，显示类似月圆月缺的进度展示效果，从月牙逐渐变化至满月。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Eclipse = 2,
    /**
     * 环形有刻度样式，显示类似时钟刻度形式的进度展示效果。刻度外圈出现重叠时自动转换为环形无刻度进度条。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ScaleRing = 3,
    /**
     * 胶囊样式，头尾两端圆弧处的进度展示效果与Eclipse相同，中段的进度展示效果与Linear相同。当高度大于宽度时，自适应垂直显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Capsule = 4
}
/**
 * 进度条的当前状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ProgressStatus {
    /**
     * Loading status.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LOADING,
    /**
     * Processing status.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PROGRESSING
}
/**
 * 进度条样式选项。
 *
 * 继承自[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ProgressStyleOptions extends CommonProgressStyleOptions {
    /**
     * 设置进度条宽度（不支持百分比设置）。
     * 默认值：4vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strokeWidth?: Length;
    /**
     * 设置环形进度条总刻度数。
     * 取值范围：[2, min(width, height)/scaleWidth/2/π]。默认值：120。
     * <br>超出取值范围时，样式显示为环形无刻度进度条。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scaleCount?: int;
    /**
     * 设置环形进度条刻度粗细（不支持百分比设置）。刻度粗细大于进度条宽度时，为系统默认粗细。
     * 默认值：2vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scaleWidth?: Length;
}
/**
 * 进度条通用样式选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CommonProgressStyleOptions {
    /**
     * 进度平滑动效的开关。开启平滑动效后设置进度，进度会从当前值渐变至设定值，页面会有进度变化的动效；否则进度从当前值突变至设定值，页面无动效。
     * true：表示开启进度平滑动效。
     * false：表示关闭进度平滑动效。
     * 默认值：true。
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableSmoothEffect?: boolean;
}
/**
 * 扫光效果选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ScanEffectOptions {
    /**
     * 扫光效果的开关。仅支持[ProgressType]{@link ProgressType}类型为Linear、Ring、Capsule的进度条。
     * true：表示开启扫光效果。
     * false：表示关闭扫光效果。
     * 默认值：false。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableScanEffect?: boolean;
}
/**
 * 圆形样式选项。圆形样式的显示类似月圆月缺的进度展示效果，从月牙逐渐变化至满月。
 *
 * 继承自[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EclipseStyleOptions extends CommonProgressStyleOptions {}
/**
 * 环形有刻度样式选项。
 *
 * 继承自[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ScaleRingStyleOptions extends CommonProgressStyleOptions {
    /**
     * 设置进度条宽度（不支持百分比设置）。
     * 默认值：4vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strokeWidth?: Length;
    /**
     * 设置环形进度条刻度粗细（不支持百分比设置）。刻度粗细大于进度条宽度时，为系统默认粗细。
     * 默认值：2vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scaleWidth?: Length;
    /**
     * 设置环形进度条总刻度数。
     * 取值范围：[2, min(width, height)/scaleWidth/2/π]。默认值：120。
     * <br>超出取值范围时，样式显示为环形无刻度进度条。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scaleCount?: int;
}
/**
 * 环形无刻度样式选项。
 *
 * 继承自[ScanEffectOptions]{@link ScanEffectOptions}和[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RingStyleOptions extends ScanEffectOptions, CommonProgressStyleOptions {
    /**
     * 设置进度条宽度（不支持百分比设置）。
     * 默认值：4vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strokeWidth?: Length;
    /**
     * 进度条阴影开关。
     * true：表示打开进度条阴影；false：表示关闭进度条阴影。
     * 默认值：false
     * 。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shadow?: boolean;
    /**
     * 设置进度条状态。当设置为ProgressStatus.LOADING时会开启检查更新动效，此时设置进度值不生效。当从ProgressStatus.LOADING设置为ProgressStatus.PROGRESSING时，检查
     * 更新动效会执行到终点再停止。
     * 默认值：ProgressStatus.PROGRESSING。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    status?: ProgressStatus;
}
/**
 * 线性样式选项。
 *
 * 继承自[ScanEffectOptions]{@link ScanEffectOptions}和[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LinearStyleOptions extends ScanEffectOptions, CommonProgressStyleOptions {
    /**
     * 设置进度条宽度（不支持百分比设置）。
     * 默认值：4vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strokeWidth?: Length;
    /**
     * 设置线性进度条的圆角半径。
     * 取值范围[0, strokeWidth / 2]。
     * 默认值：strokeWidth / 2。
     *
     * @default strokeWidth / 2
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strokeRadius?: PX | VP | LPX | Resource;
}
/**
 * 胶囊样式选项。
 *
 * 继承自[ScanEffectOptions]{@link ScanEffectOptions}和[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CapsuleStyleOptions extends ScanEffectOptions, CommonProgressStyleOptions {
    /**
     * 内描边颜色。
     * 默认值：'#33007dff'。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderColor?: ResourceColor;
    /**
     * 内描边宽度（不支持百分比设置）。
     * 默认值：1vp
     * 。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderWidth?: Length;
    /**
     * 文本内容，应用可自定义。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    content?: string;
    /**
     * 文本样式。
     * 默认值：文本大小（不支持百分比设置）：12fp
     * 其他文本参数跟随[Text]{@link text}组件的主题值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    font?: Font;
    /**
     * 文本颜色。
     * 默认值：'#ff182431'
     * 。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fontColor?: ResourceColor;
    /**
     * 显示百分比文本的开关。开启后，进度条上显示当前进度的百分比。设置了content属性时该属性不生效。
     * true：表示显示百分比文本；false：表示不显示百分比文本。
     * 默认值：false
     * 。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showDefaultPercentage?: boolean;
    /**
     * Capsule进度条圆角半径（不支持百分比设置）。
     * 默认值：min(width, height) / 2。
     *
     * @default min(width, height) / 2
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    borderRadius?: LengthMetrics;
}
/**
 * 进度条类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ProgressStyle {
    /**
     * 线性样式。当高度大于宽度时，自适应垂直显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Linear,
    /**
     * 环形无刻度样式，环形圆环逐渐显示直至完全填充。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Ring,
    /**
     * 圆形样式，显示类似月圆月缺的进度展示效果，从月牙逐渐变化至满月。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Eclipse,
    /**
     * 环形有刻度样式，显示类似时钟刻度形式的进度展示效果。刻度外圈出现重叠时自动转换为环形无刻度进度条。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ScaleRing,
    /**
     * 胶囊样式，头尾两端圆弧处的进度展示效果与Eclipse相同，中段的进度展示效果与Linear相同。当高度大于宽度时，自适应垂直显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Capsule
}
/**
 * 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。
 *
 * 支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)。
 *
 * > **说明：**
 * >
 * > 该组件重写了通用属性[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}，直接添加在Progress组件上，设置进度条的底色。如需设
 * > 置整个Progress组件的背景色，需要在外层容器上添加backgroundColor，并用该容器包裹Progress组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ProgressAttribute extends CommonMethod {
    /**
     * 设置当前进度值。设置小于0的数值时置为0，设置大于total的数值时置为total。非法数值不生效。
     *
     * @param { double | undefined } value
     * @returns { ProgressAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default value(value: double | undefined): this;
    /**
     * 设置进度条前景色。
     *
     * @param { ResourceColor | LinearGradient | undefined } value - 进度条前景色。<br/>。
     * @returns { ProgressAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default color(value: ResourceColor | LinearGradient | undefined): this;
    /**
     * 设置组件的样式。
     *
     * @param { LinearStyleOptions | RingStyleOptions | CapsuleStyleOptions | ProgressStyleOptions | undefined} value -
     *     组件的样式。<br/>- CapsuleStyleOptions：设置Capsule的样式。<br/>- RingStyleOptions：设置Ring的样式。<br/>- LinearStyleOptions：设置
     *     Linear的样式。<br/>- ScaleRingStyleOptions：设置ScaleRing的样式。<br/>- EclipseStyleOptions：设置Eclipse的样式。<br/>-
     *     ProgressStyleOptions：仅可设置各类型进度条的strokeWidth、scaleCount、scaleWidth，仅对支持这些样式设置的进度条生效。<br/>设置undefined时显示为与进度条类型
     *     相对应的默认样式。
     * @returns { ProgressAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default style(value: LinearStyleOptions | RingStyleOptions | CapsuleStyleOptions | ProgressStyleOptions | undefined): this;
    /**
     * 设置隐私敏感。
     *
     * @param { boolean | undefined } isPrivacySensitiveMode - 设置隐私敏感，隐私模式下进度清零，文字将被遮罩。true：打开隐私敏感；false：关闭隐私敏感。<br/> 默认
     *     值：false<br/>**说明：** <br/>设置undefined表示不敏感。<!--Del--><br/>需要在卡片中使用Progress，并用
     *     [FormComponent]{@link form_component}组件设置[隐私遮罩]{@link CommonMethod#obscured}属性，显示卡片时才有隐私遮罩效果。<!--DelEnd-->。
     * @returns { ProgressAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default privacySensitive(isPrivacySensitiveMode: boolean | undefined): this;
    /**
     * 定制progress内容区的方法。
     *
     * @param { ContentModifier<ProgressConfiguration> | undefined } modifier - The contentModifier of progress.
     * @returns { ProgressAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<ProgressConfiguration> | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<ProgressAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { ProgressAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ProgressAttribute> | AttributeModifier<CommonMethod> | undefined): this;

    /**
     * 设置Progress组件选项。
     *
     * @param { ProgressOptions } options - 构建Progress组件的选项。
     * @returns { ProgressAttribute } 返回Progress属性的实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setProgressOptions(options: ProgressOptions): this;
}
/**
 * 进度条配置。继承自[CommonConfiguration]{@link CommonConfiguration}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ProgressConfiguration extends CommonConfiguration<ProgressConfiguration> {
    /**
     * 当前进度值。当设置的数值小于0时，将其置为0。当设置的数值大于total时，将其置为total。
     *
     * 默认值：0
     *
     * 取值范围：[0, total]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: double;
    /**
     * 进度总长。
     *
     * 默认值：100
     *
     * **说明：**
     *
     * total是负数时，按照100处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    total: double;
}
/**
 * 创建进度条组件。
 *
 * @param { ProgressOptions } options - 按进度条类型不同，设置不同属性的进度条组件参数。
 * @returns { ProgressAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Progress(
    options: ProgressOptions
): ProgressAttribute;

/**
 * 定义Progress组件。
 *
 * @param { CustomBuilderT<ProgressAttribute> } style - Progress属性实例。
 * @returns { ProgressAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Progress(
    style: CustomBuilderT<ProgressAttribute>,
): ProgressAttribute;