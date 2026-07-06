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
 * @file
 * @kit ArkUI
 */
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
 * > - 按钮文本通过[fontSize]{@link ButtonAttribute#fontSize}、[fontColor]{@link ButtonAttribute#fontColor}、
 * > [fontStyle]{@link ButtonAttribute#fontStyle}、[fontFamily]{@link ButtonAttribute#fontFamily}、
 * > [fontWeight]{@link ButtonAttribute#fontWeight}进行设置。
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
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ButtonType {
  /**
   * 胶囊型按钮（圆角默认为高度的一半）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Capsule,

  /**
   * 圆形按钮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Circle,

  /**
   * 普通按钮（默认不带圆角）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Normal,

  /**
   * 圆角矩形按钮（默认值：controlSize为NORMAL，圆角大小20vp，controlSize为SMALL，圆角大小14vp）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  ROUNDED_RECTANGLE = 3
}

/**
 * 按钮的重要程度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum ButtonStyleMode {
    /**
     * 普通按钮（一般界面操作）。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    NORMAL = 0,
    /**
     * 强调按钮（用于强调当前操作）。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    EMPHASIZED = 1,
    /**
     * 文本按钮（纯文本，无背景颜色）。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    TEXTUAL = 2
}

/**
 * 按钮的角色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ButtonRole {
    /**
     * 正常按钮。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     */
    NORMAL = 0,
    /**
     * 警示按钮。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     */
    ERROR = 1
}

/**
 * 定义ButtonConfiguration中使用的回调类型。
 *
 * @param { number } xPos - 点击位置x的坐标。<br/>单位：vp
 * @param { number } yPos - 点击位置y的坐标。<br/>单位：vp
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ButtonTriggerClickCallback = (xPos: number, yPos: number) => void;

/**
 * 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */

declare interface ButtonConfiguration extends CommonConfiguration<ButtonConfiguration> {
    /**
     * Button的文本标签。
     * 
     * **说明**：当文本字符的长度超过按钮本身的宽度时，文本将会被截断。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
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
     * 此按压属性生效区域大小为原本Button组件的大小，而非build出来的新组件大小。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    pressed: boolean;
    /**
     * 使用builder新构建出来组件的点击事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    triggerClick: ButtonTriggerClickCallback;
}

/**
 * 按钮的尺寸。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum ControlSize {
    /**
     * 小尺寸按钮。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    SMALL = 'small',
    /**
     * 正常尺寸按钮。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    NORMAL = 'normal'
}

/**
 * 按钮的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface ButtonOptions {
    /**
     * 按钮显示样式。
     * 
     * 默认值：ButtonType.ROUNDED_RECTANGLE
     * 
     * API version 18及之后，ButtonType的默认值修改为ButtonType.ROUNDED_RECTANGLE。API version 18之前的版本，ButtonType的默认值为
     * ButtonType.Capsule。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
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
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    stateEffect?: boolean;
    /**
     * 按钮的样式和重要程度，根据设置枚举值的不同，系统自动会调整按钮的背景色和文字颜色。背景色和文字颜色也支持开发者通过
     * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、
     * [fontColor]{@link ButtonAttribute#fontColor}和[role]{@link ButtonAttribute#role}接口设置，实际显示效果以最后一次设置为准。
     * 
     * 默认值：ButtonStyleMode.EMPHASIZED 
     * 
     * **说明：**  
     * 
     * 按钮重要程度：强调按钮>普通按钮>文字按钮。
     *
     * @default ButtonStyleMode.EMPHASIZED
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    buttonStyle?: ButtonStyleMode;
    /**
     * 按钮的尺寸。
     * 
     * 默认值：ControlSize.NORMAL
     *
     * @default ControlSize.NORMAL
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    controlSize?: ControlSize;
    /**
     * 按钮的角色，根据设置枚举值的不同，系统自动会调整按钮的背景色和文字颜色。背景色和文字颜色也支持开发者通过
     * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、
     * [fontColor]{@link ButtonAttribute#fontColor}和[buttonStyle]{@link ButtonAttribute#buttonStyle}接口设置，实际显示效果以最后一次设置为
     * 准。
     * 
     * 默认值：ButtonRole.NORMAL
     *
     * @default ButtonRole.NORMAL
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     */
    role?: ButtonRole;
}

/**
 * 按钮组件，可快速创建不同样式的按钮。
 * 
 * > **说明：**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
interface ButtonInterface {
    /**
     * 创建一个空按钮。
     *
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    (): ButtonAttribute;
    /**
     * 创建可以包含单个子组件的按钮。未通过该接口设置时，则按照ButtonOptions中各参数的默认值配置。
     *
     * @param { ButtonOptions } options - 配置按钮的显示样式。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    (options: ButtonOptions): ButtonAttribute;
    /**
     * 使用文本内容创建相应的按钮组件，此时Button无法包含子组件。
     * 
     * 文本内容默认单行显示。
     *
     * @param { ResourceStr } label - 按钮文本内容。<br/>**说明：** 当文本字符的长度超过按钮本身的宽度时，文本将会被截断。
     * @param { ButtonOptions } options - 配置按钮的显示样式。 <br/> 未设置时，则按照ButtonOptions中各参数的默认值配置。
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    (label: ResourceStr, options?: ButtonOptions): ButtonAttribute;
}

/**
 * Button组件的label文本及其字体样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface LabelStyle {
    /**
     * 设置label文本超长时的显示方式。文本截断是按字截断。例如，英文以单词为最小单位进行截断，若需要以字母为单位进行截断，可在字母间添加零宽空格。
     * 
     * 默认值：TextOverflow.Ellipsis
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    overflow?: TextOverflow;
    /**
     * 设置label文本的最大行数。如果指定此参数，则文本最多不会超过指定的行。如果有多余的文本，可以通过overflow来指定截断方式。
     * 
     * 默认值：1
     * 
     * **说明：** 
     * 
     * 设置小于等于0的值时，按默认值处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    maxLines?: number;
    /**
     * 设置label文本最小显示字号。需配合maxFontSize以及maxLines或布局大小限制使用。
     * 
     * **说明：**  
     * 
     * minFontSize小于或等于0时，自适应字号不生效。
     * 为number类型时默认单位：fp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    minFontSize?: number | ResourceStr;
    /**
     * 设置label文本最大显示字号。需配合minFontSize以及maxLines或布局大小限制使用。
     * 为number类型时默认单位：fp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    maxFontSize?: number | ResourceStr;
    /**
     * 设置label文本自适应高度的方式。
     * 
     * 默认值：TextHeightAdaptivePolicy.MAX_LINES_FIRST
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    heightAdaptivePolicy?: TextHeightAdaptivePolicy;
    /**
     * 设置label文本字体样式。
     * 
     * 默认值：
     * 
     * {
     * 
     * size:'16.0fp',
     * 
     * weight:FontWeight.Medium,
     * 
     * style:FontStyle.Normal,
     * 
     * family:'HarmonyOS Sans'
     * 
     * }
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    font?: Font;
    /**
     * 设置label文本在水平方向上的对齐方式，label文本被截断时生效。当使用子节点的Text组件设置label时，此属性不生效，实际的文本对齐方式由子节点Text组件的textAlign属性决定。
     * 
     * Wearable设备默认值为TextAlign.Center，其他设备默认值为TextAlign.Start。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    textAlign?: TextAlign;
}
/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 * 
 * 支持[通用事件]{@link common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class ButtonAttribute extends CommonMethod<ButtonAttribute> {
  /**
   * 设置Button样式。
   *
   * @param { ButtonType } value - Button样式。<br/>API version 18及之后，ButtonType的默认值从ButtonType.Capsule变更为
   *     ButtonType.ROUNDED_RECTANGLE。
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  type(value: ButtonType): ButtonAttribute;

  /**
   * 设置是否开启按压态显示效果。
   *
   * @param { boolean } value - 按钮按下时是否开启按压态显示效果。<br/>true：开启按压效果；false：关闭按压效果。<br/>默认值：true
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  stateEffect(value: boolean): ButtonAttribute;

  /**
   * 设置Button组件的样式和重要程度。根据设置枚举值的不同，系统自动会调整按钮的背景色和文字颜色。背景色和文字颜色也支持开发者通过
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、
   * [fontColor]{@link ButtonAttribute#fontColor}和[role]{@link ButtonAttribute#role}接口设置，实际显示效果以最后一次设置为准。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { ButtonStyleMode } value - Button组件的样式和重要程度。<br/>默认值：ButtonStyleMode.EMPHASIZED
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  buttonStyle(value: ButtonStyleMode): ButtonAttribute;

  /**
   * 设置Button组件的尺寸。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { ControlSize } value - Button组件的尺寸。<br/>默认值：ControlSize.NORMAL
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  controlSize(value: ControlSize): ButtonAttribute;

  /**
   * 设置Button组件的角色。根据设置枚举值的不同，系统自动会调整按钮的背景色和文字颜色。背景色和文字颜色也支持开发者通过
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、
   * [fontColor]{@link ButtonAttribute#fontColor}和[buttonStyle]{@link ButtonAttribute#buttonStyle}接口设置，实际显示效果以最后一次设置为准。
   *
   * @param { ButtonRole } value - 设置Button组件的角色。<br/>默认值：ButtonRole.NORMAL
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  role(value: ButtonRole): ButtonAttribute;

  /**
   * 设置文本显示颜色。
   *
   * @param { ResourceColor } value - 文本显示颜色。<br/>默认值：$r('sys.color.font_on_primary')，显示为白色字体。
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontColor(value: ResourceColor): ButtonAttribute;

  /**
   * 设置文本显示字号。
   *
   * @param { Length } value - 文本显示字号。<br/>默认值：当controlSize为ControlSize.NORMAL时，默认值为`$r('sys.float.Body_L')`。<br/>当
   *     controlSize为ControlSize.SMALL时，默认值为`$r('sys.float.Body_S')`。<br/>**说明**：设置string类型时，不支持百分比。
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontSize(value: Length): ButtonAttribute;

  /**
   * 设置文本的字体粗细。
   *
   * @param { number | FontWeight | string } value - 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，取值越大，字体越粗。<br>默认值：500<br/>
   *     string类型仅支持number类型取值的字符串形式，例如'400'，以及'bold'、'bolder'、'lighter'、'regular'、'medium'，分别对应FontWeight中相应的枚举值。<br/>当
   *     值为异常值或非法值时，字体粗细取值为400。
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontWeight(value: number | FontWeight | string): ButtonAttribute;

  /**
   * 设置文本的字体样式。
   *
   * @param { FontStyle } value - 文本的字体样式。<br/>默认值：FontStyle.Normal
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontStyle(value: FontStyle): ButtonAttribute;

  /**
   * 设置字体列表。
   *
   * @param { string | Resource } value - 字体列表。默认字体'HarmonyOS Sans'，当前支持'HarmonyOS Sans'字体和
   *     [注册自定义字体]{@link @ohos.font:font}。
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontFamily(value: string | Resource): ButtonAttribute;

  /**
   * 定制Button内容区的方法。
   *
   * @param { ContentModifier<ButtonConfiguration> } modifier - 在Button组件上，定制内容区的方法。<br/>modifier：内容修改器，开发者需要自定义class实现
   *     ContentModifier接口。
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<ButtonConfiguration>): ButtonAttribute;

  /**
   * 设置Button组件label文本和字体的样式。
   *
   * @param { LabelStyle } value - Button组件label文本和字体的样式。
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  labelStyle(value: LabelStyle): ButtonAttribute;
  
  /**
   * 设置文本最小的字体缩放倍数。
   *
   * @param { number | Resource } scale - 文本最小的字体缩放倍数。<br/>取值范围：[0, 1]<br/>**说明：** <br/>设置的值小于0时，按值为0处理，设置的值大于1，按值为1处理，异
   *     常值默认不生效。
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  minFontScale(scale: number | Resource): ButtonAttribute;

  /**
   * 设置文本最大的字体缩放倍数。
   *
   * @param { number | Resource  } scale - 文本最大的字体缩放倍数。<br/>取值范围：
   *     [1, +∞)<br/>**说明：** <br/>设置的值小于1时，按值为1处理，异常值默认不生效。<br/>未设置最大缩放倍数时，圆形按钮最大缩放倍数为1倍，胶囊型按钮、普通按钮、圆角矩形按钮最大缩放倍数跟随系统设置。
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  maxFontScale(scale: number | Resource): ButtonAttribute;
}

/**
 * 按钮组件，可快速创建不同样式的按钮。
 * 
 * > **说明：**
 * 
 * ###### 子组件
 * 
 * 可以包含单个子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const Button: ButtonInterface;

/**
 * Defines Button Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const ButtonInstance: ButtonAttribute;