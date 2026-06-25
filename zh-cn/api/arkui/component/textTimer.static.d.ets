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
import { CommonConfiguration, CommonMethod, ShadowOptions, ContentModifier } from './common';
import { ResourceColor, Length, ResourceStr } from "./units";
import { FontStyle, FontWeight } from "./enums";
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier } from "./common";

/**
 * TextTimer组件的控制器，用于控制文本计时器。一个TextTimer组件仅支持绑定一个控制器，组件创建完成后相关指令才能被调用。一个TextTimerController只能控制最后一个绑定此
 * TextTimerController的TextTimer组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TextTimerController {
    /**
     * TextTimerController的构造函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor();
    /**
     * 计时开始。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start(): void;
    /**
     * 计时暂停。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pause(): void;
    /**
     * 重置计时器。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reset(): void;
}
/**
 * ContentModifier接口使用的TextTimer配置。
 *
 * 开发者需要自定义class实现ContentModifier接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextTimerConfiguration extends CommonConfiguration<TextTimerConfiguration> {
    /**
     * 计时器时间（isCountDown为true时生效），单位为毫秒。最长不超过86400000毫秒（24小时）。 0<count<86400000时，count值为倒计时初始值。否则，使用默认值为倒计时初始值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    count: long;
    /**
     * 是否倒计时。
     *
     * true：计时器开启倒计时，例如从30秒 ~ 0秒；false：计时器开始计时，例如从0秒 ~ 30秒。
     *
     * 默认值：false。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isCountDown: boolean;
    /**
     * 是否已经开始了计时。
     *
     * true：开始计时；false：未开始计时。
     *
     * 默认值：false。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    started: boolean;
    /**
     * 计时器经过的时间，单位为设置格式的最小单位。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    elapsedTime: long;
    /**
     * 计时器经过的时间，单位为设置格式的最小单位。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    startTime?: int;
}
/**
 * 用于构建TextTimer组件的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface TextTimerOptions {
    /**
     * 倒计时开关。
     * true：计时器开启倒计时，例如从30秒~0秒。
     * false：计时器开始计时，例如从0秒~30秒。
     * 默认值：false。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isCountDown?: boolean;
    /**
     * 计时器时间（isCountDown为true时生效），单位为毫秒。最长不超过86400000毫秒（24小时）。 0<count<86400000时，count值为计时器初始值。否则，使用默认值为计时器初始值。
     * 默认值：60000ms。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    count?: long;
    /**
     * TextTimer控制器。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    controller?: TextTimerController;
    /**
     * 计时器经过的时间，单位为设置格式的最小单位。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    startTime?: int;
}
/**
 * 时间文本发生变化时触发该事件。锁屏状态和应用后台状态下不会触发该事件。设置高精度的format（SSS、SS）时，回调间隔可能会出现波动。
 *
 * @param { long } utc
 * @param { long } elapsedTime
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TimerCallback = (utc: long, elapsedTime: long) => void;

/**
 * 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。
 *
 * 除支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)外，还支持以下事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface TextTimerAttribute extends CommonMethod {
    /**
     * 设置自定义格式，需至少包含一个HH、mm、ss、SS中的关键字。使用yy、MM、dd等日期格式时，使用默认值。
     *
     * 计时器更新频率按format最小单位处理，例如：format设置为'HH:mm'时，更新频率为一分钟。
     *
     * @param { string | undefined } value - 自定义日期显示的格式。<br/>默认值：'HH:mm:ss.SS' <br/>设置undefined时按默认值处理。
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default format(value: string | undefined): this;
    /**
     * 设置字体颜色。
     *
     * @param { ResourceColor | undefined } value
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontColor(value: ResourceColor | undefined): this;
    /**
     * 设置字体大小。
     *
     * @param { Length | undefined } value - 字体大小。value为Length中的number类型时，单位为fp。字体大小默认为16fp。value为Length中的string类型时，设置值为
     *     非数字开头的字符串时，按0fp处理；设置值为数字开头的字符串时，如果数字后内容包含除[像素单位](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md)
     *     外的字符（如字母、特殊符号等），则取值字符串开头的数字部分，单位为fp。例如设置值为"abc"时取值为0fp，设置值为"10vp"时取值为10vp，设置值为"10vp11abc"时取值
     *     为10fp。不支持设置百分比字符串。<br/>设置undefined时按默认值处理。
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontSize(value: Length | undefined): this;
    /**
     * 设置字体样式。
     *
     * @param { FontStyle | undefined } value - 字体样式，例如斜体的字体样式。<br/>默认值：FontStyle.Normal <br/>设置undefined时按默认值处理。
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontStyle(value: FontStyle | undefined): this;
    /**
     * 设置文本的字体粗细，设置过大可能会导致不同字体下的文字出现截断。
     *
     * @param { int | FontWeight | ResourceStr | undefined } value - 文本的字体粗细，number类型取值范围为[100, 900]，取值间隔为100，取值越大，字体越粗。
     *     number类型取值范围外的默认值为400。[ResourceStr]{@link ResourceStr}类型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"
     *     lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。<br/>默认值：FontWeight.Normal <br/>设置undefined时按默认值处理。
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontWeight(value: int | FontWeight | ResourceStr | undefined): this;
    /**
     * 设置字体列表。
     *
     * @param { ResourceStr | undefined } value - 字体列表。默认字体为'HarmonyOS Sans'。<br>应用当前支持'HarmonyOS Sans'字体和
     *     [注册自定义字体]{@link @ohos.font:font}。<br>卡片当前仅支持'HarmonyOS Sans'字体。<br/>设置undefined时按默认值处理。
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontFamily(value: ResourceStr | undefined): this;
    /**
     * 时间文本发生变化时触发该事件。锁屏状态和应用后台状态下不会触发该事件。设置高精度的[format]{@link format}（SS）时，回调间隔可能会出现波动。
     *
     * @param { TimerCallback | undefined } event
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onTimer(event: TimerCallback | undefined): this;
    /**
     * 设置文字阴影效果。该接口支持以数组形式入参，实现多重文字阴影。不支持fill字段, 不支持智能取色模式。
     *
     * @param { ShadowOptions | Array<ShadowOptions> | undefined } value - 文字阴影效果的参数，包括颜色、模糊半径、偏移量。<br/>设置undefined时按默认值
     *     处理。
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default textShadow(value: ShadowOptions | Array<ShadowOptions> | undefined): this;
    /**
     * 定制TextTimer内容区的方法。
     *
     * @param { ContentModifier<TextTimerConfiguration> | undefined } modifier - 在TextTimer组件上，定制内容区的方法。<br/>modifier： 内
     *     容修改器，开发者需要自定义class实现ContentModifier接口。<br/>设置undefined时显示为默认内容。
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<TextTimerConfiguration> | undefined): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<TextTimerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { TextTimerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<TextTimerAttribute> | AttributeModifier<CommonMethod> | undefined): this;

    /**
     * 设置TextTimer组件的选项。
     *
     * @param { TextTimerOptions } [options] - 构建TextTimer组件的选项。
     * @returns { TextTimerAttribute } 返回TextTimer属性的实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setTextTimerOptions(options?: TextTimerOptions): this;
}
/**
 * 创建文本计时器组件。
 *
 * @param { TextTimerOptions } [options] - 通过文本显示计时信息并控制其计时器状态的组件参数。
 * @returns { TextTimerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function TextTimer(
    options?: TextTimerOptions
): TextTimerAttribute;

/**
 * 定义TextTimer组件。
 *
 * @param { CustomBuilderT<TextTimerAttribute> } style - TextTimer属性的实例。
 * @returns { TextTimerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function TextTimer(
    style: CustomBuilderT<TextTimerAttribute>,
): TextTimerAttribute;