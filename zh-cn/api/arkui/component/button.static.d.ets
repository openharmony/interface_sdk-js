"use static"
/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * 按钮组件，可快速创建不同样式的按钮。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 * 
 * ###### 子组件
 * 
 * 可以包含单个子组件。
 * 
 * @file
 * @kit ArkUI
 */
import { CustomBuilder, Builder, CustomBuilderT, ConstructorT } from './builder';
import { ComponentBuilder } from './builder';
import { Resource } from '../../global/resource';
import { ResourceStr, ResourceColor, Length, Font } from './units';
import { TextAlign, TextOverflow, FontWeight, FontStyle, TextHeightAdaptivePolicy } from './enums';
import { CommonConfiguration, CommonMethod, ContentModifier, AttributeModifier } from './common';

/**
 * 按钮的类型。
 * 
 * > **说明：**
 * >
 * > - 按钮圆角通过
 * > [通用属性borderRadius]{@link CommonMethod#borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses)}设置。
 * >
 * > - 当按钮类型为Capsule时，borderRadius设置不生效，按钮圆角始终为宽、高中较小值的一半。
 * >
 * > - 当按钮类型为Circle时，若同时设置了宽和高，则borderRadius不生效，且按钮半径为宽高中较小值的一半；若只设置宽、高中的一个，则borderRadius不生效，且按钮半径为所设宽或所设高值的一半；若不设置宽高，则
 * > borderRadius为按钮半径；若borderRadius的值为负，则borderRadius的值按照0处理。
 * >
 * > - 按钮文本通过[fontSize]{@link fontSize}、[fontColor]{@link fontColor}、[fontStyle]{@link fontStyle}、
 * > [fontFamily]{@link fontFamily}、[fontWeight]{@link fontWeight}进行设置。
 * >
 * > - 设置[颜色渐变]{@link common}需先设置[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}为透明色。
 * >
 * > - 在不设置borderRadius时，圆角矩形按钮的圆角大小保持默认值不变。圆角大小不会随按钮高度变化而变化，和controlSize属性有关，controlSize为NORMAL时圆角大小20vp，controlSize为
 * > SMALL时圆角大小14vp。
 * >
 * > - 设置Button的[border]{@link CommonMethod#border}时，会有默认的
 * > [borderRadius]{@link CommonMethod#borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses)}值。如果同时使用
 * > `border`和`borderRadius`，需将`borderRadius`放在`border`之后，以确保`borderRadius`不会被`border`中的默认`radius`覆盖。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ButtonType {
    /**
     * 胶囊型按钮（圆角默认为高度的一半）。
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Capsule,
    /**
     * 圆形按钮。
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Circle,
    /**
     * 普通按钮（默认不带圆角）。 
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Normal,
    /**
     * 圆角矩形按钮（默认值：controlSize为NORMAL，圆角大小20vp，controlSize为SMALL，圆角大小14vp）。
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 15开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 15开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ROUNDED_RECTANGLE = 3
}
/**
 * 按钮的重要程度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ButtonStyleMode {
    /**
     * 普通按钮（一般界面操作）。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NORMAL = 0,
    /**
     * 强调按钮（用于强调当前操作）。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    EMPHASIZED = 1,
    /**
     * 文本按钮（纯文本，无背景颜色）。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TEXTUAL = 2
}
/**
 * 按钮的角色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ButtonRole {
    /**
     * 正常按钮。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NORMAL = 0,
    /**
     * 警示按钮。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ERROR = 1
}
/**
 * 定义ButtonConfiguration中使用的回调类型。
 *
 * @param { double } xPos - 点击位置x的坐标。<br/>单位：vp
 * @param { double } yPos - 点击位置y的坐标。<br/>单位：vp
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ButtonTriggerClickCallback = (xPos: double, yPos: double) => void;
/**
 * 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ButtonConfiguration extends CommonConfiguration<ButtonConfiguration> {
    /**
     * Button的文本标签。
     * 
     * **说明**：当文本字符的长度超过按钮本身的宽度时，文本将会被截断。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    label: string;
    /**
     * 指示是否按下Button。
     * 
     * true：按下；false：未按下。
     * 
     * 默认值：false 
     * 
     * **说明：**  
     * 
     * 此按压属性生效区域大小为原本Button组件的大小，而非build出来的新组件大小。若新build出来的组件超过原本组件的大小，那么超出部分按压不触发。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pressed: boolean;
    /**
     * 使用builder新构建出来组件的点击事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    triggerClick: ButtonTriggerClickCallback;
}
/**
 * 按钮的尺寸。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ControlSize {
    /**
     * 小尺寸按钮。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SMALL = 'small',
    /**
     * 正常尺寸按钮。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NORMAL = 'normal'
}
/**
 * 按钮的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ButtonOptions {
    /**
     * 按钮显示样式。
     * 
     * 默认值：ButtonType.ROUNDED_RECTANGLE
     * 
     * 从API version 18及之后，ButtonType的默认值修改为ButtonType.ROUNDED_RECTANGLE。API version 18之前的版本，ButtonType的默认值为
     * ButtonType.Capsule。
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type?: ButtonType;
    /**
     * 按钮按下时是否开启按压态显示效果。
     * 
     * true：开启按压效果；false：关闭按压效果。
     * 
     * 默认值：true
     * 
     * **说明：** 
     * 
     * 当开启按压态显示效果，且开发者设置状态样式时，会基于状态样式设置完成后的背景色再进行颜色叠加。
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stateEffect?: boolean;
    /**
     * 按钮的样式和重要程度，根据设置枚举值的不同，系统自动会调整按钮的背景色和文字颜色。背景色和文字颜色也支持开发者通过
     * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、[fontColor]{@link fontColor}和
     * [role]{@link role}接口设置，实际显示效果以最后一次设置为准。
     * 
     * 默认值：ButtonStyleMode.EMPHASIZED 
     * 
     * **说明：**  
     * 
     * 按钮重要程度：强调按钮>普通按钮>文字按钮。
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default ButtonStyleMode.EMPHASIZED
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    buttonStyle?: ButtonStyleMode;
    /**
     * 按钮的尺寸。
     * 
     * 默认值：ControlSize.NORMAL
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default ControlSize.NORMAL
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    controlSize?: ControlSize;
    /**
     * 按钮的角色，根据设置枚举值的不同，系统自动会调整按钮的背景色和文字颜色。背景色和文字颜色也支持开发者通过
     * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、[fontColor]{@link fontColor}和
     * [buttonStyle]{@link buttonStyle}接口设置，实际显示效果以最后一次设置为准。
     * 
     * 默认值：ButtonRole.NORMAL 
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default ButtonRole.NORMAL
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    role?: ButtonRole;
}
/**
 * 按钮中文本的显示样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ButtonLabelStyle {
    /**
     * 设置label文本超长时的显示方式。文本截断是按字截断。例如，英文以单词为最小单位进行截断，若需要以字母为单位进行截断，可在字母间添加零宽空格。
     * 
     * 默认值：TextOverflow.Ellipsis
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    overflow?: TextOverflow;
    /**
     * 设置label文本的最大行数。如果指定此参数，则文本最多不会超过指定的行。如果有多余的文本，可以通过overflow来指定截断方式。
     * 
     * 默认值：1
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    maxLines?: int;
    /**
     * 设置label文本最小显示字号。需配合maxFontSize以及maxLines或布局大小限制使用。
     * 
     * **说明：**  
     * 
     * minFontSize小于或等于0时，自适应字号不生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    minFontSize?: double | ResourceStr;
    /**
     * 设置label文本最大显示字号。需配合minFontSize以及maxLines或布局大小限制使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    maxFontSize?: double | ResourceStr;
    /**
     * 设置label文本自适应高度的方式。
     * 
     * 默认值：TextHeightAdaptivePolicy.MAX_LINES_FIRST
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    heightAdaptivePolicy?: TextHeightAdaptivePolicy;
    /**
     * 设置label文本字体样式。
     * 
     * 默认值：默认值参考[Font]{@link Font}。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    font?: Font;
    /**
     * 设置内容的水平对齐模式。
     * 
     * 默认值：TextAlign.Start
     * 
     * **设备差异：** 
     * 
     * 默认值是TextAlign.Start。在穿戴设备上，默认值为TextAlign.Center。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    textAlign?: TextAlign;
}

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ButtonAttribute extends CommonMethod {
    /**
     * 设置Button样式。
     *
     * @param { ButtonType } value - Button样式。<br/>API version 18及之后，ButtonType的默认值从ButtonType.Capsule变更为
     *     ButtonType.ROUNDED_RECTANGLE。API version 18之前的版本，ButtonType的默认值为ButtonType.Capsule。<br/>设置undefined时与默认值保持一致。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default type(value: ButtonType | undefined): this;
    /**
     * 设置是否开启按压态显示效果。
     *
     * @param { boolean } value - 按钮按下时是否开启按压态显示效果。<br/>true：开启按压效果；false：关闭按压效果。<br/>默认值：true <br/>设置undefined时与默认值保持一
     *     致。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default stateEffect(value: boolean | undefined): this;
    /**
     * 设置Button组件的样式和重要程度。根据设置枚举值的不同，系统自动会调整按钮的背景色和文字颜色。背景色和文字颜色也支持开发者通过
     * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、[fontColor]{@link fontColor}和
     * [role]{@link role}接口设置，实际显示效果以最后一次设置为准。
     * 
     * > **说明：**
     * >
     * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
     * @param { ButtonStyleMode } value - Button组件的样式和重要程度。<br/>默认值：ButtonStyleMode.EMPHASIZED <br/>设置undefined时与默认值保持一
     *     致。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default buttonStyle(value: ButtonStyleMode | undefined): this;
    /**
     * 设置Button组件的尺寸。
     *
     * @param { ControlSize } value - Button组件的尺寸。<br/>默认值：ControlSize.NORMAL <br/>设置undefined时与默认值保持一致。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default controlSize(value: ControlSize | undefined): this;
    /**
     * 设置Button组件的角色。根据设置枚举值的不同，系统自动会调整按钮的背景色和文字颜色。背景色和文字颜色也支持开发者通过
     * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、[fontColor]{@link fontColor}和
     * [buttonStyle]{@link buttonStyle}接口设置，实际显示效果以最后一次设置为准。
     *
     * @param { ButtonRole } value - 设置Button组件的角色。<br/>默认值：ButtonRole.NORMAL <br/>设置undefined时与默认值保持一致。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default role(value: ButtonRole | undefined): this;
    /**
     * 设置文本显示颜色。
     *
     * @param { ResourceColor } value - 文本显示颜色。<br/>默认值：$r('sys.color.font_on_primary')，显示为白色字体。<br/>设置undefined时与默认值保持一
     *     致。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontColor(value: ResourceColor | undefined): this;
    /**
     * 设置文本显示字号。
     *
     * @param { Length } value - 文本显示字号。<br/>默认值：当controlSize为ControlSize.NORMAL时，默认值为`$r('sys.float.Body_L')`。<br/>当
     *     controlSize为ControlSize.SMALL时，默认值为`$r('sys.float.Body_S')`。<br/>**说明**：设置string类型时，不支持百分比。<br/>设置undefined时与
     *     默认值保持一致。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontSize(value: Length | undefined): this;
    /**
     * 设置文本的字体粗细。
     *
     * @param { int | FontWeight | string } value - 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，取值越大，字体越粗。<br>默认值：500<br/>
     *     string类型仅支持number类型取值的字符串形式，例如'400'，以及'bold'、'bolder'、'lighter'、'regular'、'medium'，分别对应FontWeight中相应的枚举值。<br/
     *     >当值为异常值或非法值时，字体粗细取值为400。<br/>设置undefined时与异常值保持一致。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontWeight(value: int | FontWeight | string | undefined): this;
    /**
     * 设置文本的字体样式。
     *
     * @param { FontStyle } value - 文本的字体样式。<br/>默认值：FontStyle.Normal <br/>设置undefined时与默认值保持一致。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontStyle(value: FontStyle | undefined): this;
    /**
     * 设置字体列表。
     *
     * @param { string | Resource } value - 字体列表。默认字体'HarmonyOS Sans'，当前支持'HarmonyOS Sans'字体和
     *     [注册自定义字体]{@link @ohos.font:font}。<br/>设置undefined时与默认值保持一致。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontFamily(value: string | Resource | undefined): this;
    /**
     * 定制Button内容区的方法。
     *
     * @param { ContentModifier<ButtonConfiguration> } modifier - 在Button组件上，定制内容区的方法。<br/>modifier：内容修改器，开发者需要自定义class实
     *     现ContentModifier接口。取值为undefined时，则不使用contentModifier。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<ButtonConfiguration> | undefined): this;
    /**
     * 设置Button组件label文本和字体的样式。
     *
     * @param { ButtonLabelStyle } value - Button组件label文本和字体的样式。取值为undefined时，按各属性的默认值处理。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default labelStyle(value: ButtonLabelStyle | undefined): this;
    /**
     * 设置文本最小的字体缩放倍数。
     *
     * @param { double | Resource } scale - 文本最小的字体缩放倍数。<br/>取值范围：[0, 1]<br/>**说明：** <br/>设置的值小于0时，按值为0处理，设置的值大于1，按值为1处
     *     理，异常值默认不生效。<br/>设置undefined时不生效。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default minFontScale(scale: double | Resource | undefined): this;
    /**
     * 设置文本最大的字体缩放倍数。
     *
     * @param { double | Resource  } scale - 文本最大的字体缩放倍数。<br/>取值范围：
     *     [1, +∞)<br/>**说明：** <br/>设置的值小于1时，按值为1处理，异常值默认不生效。<br/>未设置最大缩放倍数时，圆形按钮最大缩放倍数为1倍，胶囊型按钮、普通按钮、圆角矩形按钮最大缩放倍数跟随系统设置。<br/>设置undefined时不生效。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default maxFontScale(scale: double | Resource | undefined): this;
    /**
     * 设置Button组件的属性修改器。
     *
     * @param { AttributeModifier<ButtonAttribute> | AttributeModifier<CommonMethod> | undefined } modifier - Button组件的属
     *     性修改器。 取值为undefined时，则不使用attributeModifier。<br/>ButtonAttribute：当前组件的[属性]{@link ButtonAttribute}<br/>
     *     CommonMethod：[通用属性]{@link common}
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ButtonAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 使用文本内容创建相应的按钮组件，此时Button无法包含子组件。
 * 
 * 文本内容默认单行显示。
 *
 * @param { ResourceStr } label - 按钮文本内容。<br/>**说明：** 当文本字符的长度超过按钮本身的宽度时，文本将会被截断。
 * @param { ButtonOptions } [options] - 配置按钮的显示样式。<br/> 未设置时，则按照ButtonOptions中各参数的默认值配置。
 * @param { CustomBuilder } [content_] - container
 * @returns { ButtonAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function Button(
    label: ResourceStr, options?: ButtonOptions, 
    content_?: CustomBuilder,
): ButtonAttribute

/**
 * Defines Button Component.
 *
 * @param { ButtonOptions } [options] - the options of Button.
 * @param { CustomBuilder } [content_] - container
 * @returns { ButtonAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function Button(
    options?: ButtonOptions, 
    content_?: CustomBuilder,
): ButtonAttribute

/**
 * Defines the Extendable Button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export declare abstract class ExtendableButton implements ButtonAttribute {
    /**
     * Constructor of Extendable Button.
     *
     * @param { ConstructorT<T> } factory
     * @param { ResourceStr } label
     * @param { ButtonOptions } [options] - Button Component Options
     * @param { CustomBuilder } [content_] - subcomponent trailing closure
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    @ComponentBuilder
    static $_instantiate<T extends ExtendableButton>(
        factory: ConstructorT<T>, 
        label: ResourceStr, 
        options?: ButtonOptions, 
        content_?: CustomBuilder
    ): T;

    /**
     * Constructor of Extendable Button.
     *
     * @param { ConstructorT<T> } factory
     * @param { ButtonOptions } [options]
     * @param { CustomBuilder } [content_]
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    @ComponentBuilder
    static $_instantiate<T extends ExtendableButton>(
        factory: ConstructorT<T>, 
        options?: ButtonOptions,
        content_?: CustomBuilder
    ): T;

    /**
     * Entry of Extendable Button.
     *
     * @param { CustomBuilderT<T> } styles
     * @param { ConstructorT<T> } factory
     * @param { CustomBuilder } [content_]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @unpublished
     * @stagemodelonly
     * @since 26.1.0 staticonly
     */
    @Builder
    static _instantiateImpl<T extends ExtendableButton>(
        styles: CustomBuilderT<T>, 
        factory: ConstructorT<T>, 
        content_?: CustomBuilder
    ): void;

    /**
     * Set the Button Options.
     *
     * @param { ResourceStr } label
     * @param { ButtonOptions } [options]
     * @returns { ExtendableButton }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setButtonOptions(
        label: ResourceStr, 
        options?: ButtonOptions
    ): this;

    /**
     * Set the Button Options.
     *
     * @param { ButtonOptions } [options]
     * @returns { ExtendableButton }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setButtonOptions(options?: ButtonOptions): this;
}
