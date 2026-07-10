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
import { CommonConfiguration, CommonMethod, ShadowOptions, ContentModifier, DateTimeOptions } from './common';
import { ResourceColor, Length, ResourceStr } from "./units";
import { FontStyle, FontWeight } from "./enums";
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier, Callback } from "./common";

/**
 * TextClock容器组件的控制器，可以将该控制器绑定到TextClock组件，通过它控制文本时钟的启动与停止。一个TextClock组件仅支持绑定一个控制器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TextClockController {
    /**
     * TextClockController的构造函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor();
    /**
     * 启动文本时钟。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start(): void;
    /**
     * 停止文本时钟。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stop(): void;
}
/**
 * 开发者需要自定义class实现ContentModifier接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextClockConfiguration extends CommonConfiguration<TextClockConfiguration> {
    /**
     * 当前文本时钟时区偏移量。
     *
     * 取值范围为[-14, 12]，表示东十二区到西十二区，其中负值表示东时区，正值表示西时区，比如东八区为-8。设置值为该取值范围内的浮点数时会进行取整，舍弃小数部分。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    timeZoneOffset: double;
    /**
     * 指示文本时钟是否启动。
     *
     * true：表示启动文本时钟。
     *
     * false：表示关闭文本时钟。
     *
     * 默认值：true
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    started: boolean;
    /**
     * 当前文本时钟时区的UTC秒数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    timeValue: long;
}
/**
 * 用于构建TextClock组件的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextClockOptions {
    /**
     * 设置时区偏移量。
     * 取值范围为[-14, 12]，表示东十二区到西十二区，其中负值表示东时区，正值表示西时区，比如东八区为-8。设置值为该取值范围内的浮点数时会进行取整，舍弃小数部分。
     * 对横跨国际日界线的国家或地区，用-13（UTC+13）和-14（UTC+14）来保证整个国家或者区域处在相同的时间，当设置的值不在取值范围内时，将使用当前系统的时区偏移量。
     * 设置值为{ 9.5, 3.5, -3.5, -4.5, -5.5, -5.75, -6.5, -9.5, -10.5, -12.75 }集合中的浮点数时不进行取整。
     * 默认值：当前系统的时区偏移量。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    timeZoneOffset?: double;
    /**
     * TextClock controller.
     * Anonymous Object Rectification.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    controller?: TextClockController;
}
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
export declare interface TextClockAttribute extends CommonMethod {
    /**
     * 设置显示时间格式，如“yyyy/MM/dd”、“yyyy-MM-dd”。
     *
     * y：年（yyyy表示完整年份，yy表示年份后两位）
     *
     * M：月（若想使用01月则使用MM）
     *
     * d：日（若想使用01日则使用dd）
     *
     * E：星期（若想使用星期六则使用EEEE，若想使用周六则使用E、EE、EEE）
     *
     * H：小时（24小时制）   h：小时（12小时制）
     *
     * m：分钟
     *
     * s：秒
     *
     * SS：厘秒（format中S个数<3，全部按厘秒处理）
     *
     * SSS：毫秒（format中S个数>=3，全部按毫秒处理）
     *
     * a：上午/下午（当设置小时制式为H时，该参数不生效）
     *
     * 日期间隔符："年月日"、“/”、"-"、"."（可以自定义间隔符样式，字母不可以作为间隔符，汉字可以作为间隔符处理）
     *
     * 允许自行拼接组合显示格式，即：年、月、日、星期、时、分、秒、毫秒可拆分为子元素，可自行排布组合。时间更新频率最高为一秒一次，不建议单独设置厘秒和毫秒格式。
     *
     * 当设置无效字母时（非上述字母被认为是无效字母），该字母会被忽略。如果format全是无效字母时，显示格式跟随系统语言和系统小时制。例如系统语言为中文时，12小时制显示格式为yyyy/MM/dd aa hh:mm:ss.SSS，
     * 24小时制显示格式为yyyy/MM/dd HH:mm:ss.SSS。
     *
     * 若format为空字符串（""）或者undefined，则使用默认值。
     *
     * 非卡片中默认值：12小时制：aa hh:mm:ss，24小时制：HH:mm:ss。
     *
     * 卡片中默认值：12小时制：hh:mm，24小时制：HH:mm 。
     *
     * 卡片中使用时，最小时间单位为分钟。如果设置格式中有秒或厘秒按默认值处理。
     *
     * 以下是format输入的格式样式及对应的显示效果：
     *
     * | 输入格式                | 显示效果            |
     * | ---------------------- | ------------------- |
     * | yyyy年M月d日 EEEE       | 2023年2月4日 星期六 |
     * | yyyy年M月d日            | 2023年2月4日        |
     * | M月d日 EEEE             | 2月4日 星期六       |
     * | M月d日                  | 2月4日              |
     * | MM/dd/yyyy             | 02/04/2023          |
     * | EEEE MM月dd日           | 星期六 02月04日     |
     * | yyyy（完整年份）         | 2023年              |
     * | yy（年份后两位）         | 23年                |
     * | MM（完整月份）           | 02月                |
     * | M（月份）               | 2月                 |
     * | dd（完整日期）           | 04日                |
     * | d（日期）               | 4日                 |
     * | EEEE（完整星期）         | 星期六              |
     * | E、EE、EEE（简写星期）   | 周六                |
     * | yyyy年M月d日            | 2023年2月4日        |
     * | yyyy/M/d               | 2023/2/4            |
     * | yyyy-M-d               | 2023-2-4            |
     * | yyyy.M.d               | 2023.2.4            |
     * | HH:mm:ss（时:分:秒）    | 17:00:04            |
     * | aa hh:mm:ss（时:分:秒） | 上午 5:00:04        |
     * | hh:mm:ss（时:分:秒）    | 5:00:04             |
     * | HH:mm（时:分）          | 17:00               |
     * | aa hh:mm（时:分）       | 上午 5:00           |
     * | hh:mm（时:分）          | 5:00                |
     * | mm:ss（分:秒）          | 00:04               |
     * | mm:ss.SS（分:秒.厘秒）  | 00:04.91            |
     * | mm:ss.SSS（分:秒.毫秒） | 00:04.536           |
     * | hh:mm:ss aa            | 5:00:04 上午        |
     * | HH                     | 17                  |
     *
     * @param { ResourceStr | undefined } value
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default format(value: ResourceStr | undefined): this;
    /**
     * 组件不可见时不回调。
     *
     * 非卡片中使用时，该事件回调间隔为秒。
     *
     * 卡片中使用时，该事件回调间隔为分钟。
     *
     * @param { Callback<long> | undefined } event - 事件变化回调。回调返回值是Unix Time Stamp，即自1970年1月1日（UTC）起经过的秒数。<br/>取值为
     *     undefined时，不使用回调函数。
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDateChange(event: Callback<long> | undefined): this;
    /**
     * 设置字体颜色。
     *
     * @param { ResourceColor | undefined } value
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontColor(value: ResourceColor | undefined): this;
    /**
     * 设置字体大小。
     *
     * @param { Length | undefined } value
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontSize(value: Length | undefined): this;
    /**
     * 设置字体样式。
     *
     * @param { FontStyle | undefined } value
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontStyle(value: FontStyle | undefined): this;
    /**
     * 设置文本的字体粗细，设置过大可能会导致不同字体下的文字出现截断。
     *
     * @param { int | FontWeight | string | undefined } value
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontWeight(value: int | FontWeight | string | undefined): this;
    /**
     * 设置字体列表。
     *
     * @param { ResourceStr | undefined } value
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontFamily(value: ResourceStr | undefined): this;
    /**
     * 设置文字阴影效果。该接口支持以数组形式入参，实现多重文字阴影。不支持fill字段, 不支持智能取色模式。
     *
     * @param { ShadowOptions | Array<ShadowOptions> | undefined } value - 文字的字体阴影效果。<br/>设置undefined时按默认阴影效果处理。
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default textShadow(value: ShadowOptions | Array<ShadowOptions> | undefined): this;
    /**
     * 设置文字特性效果，比如数字等宽的特性。
     *
     * 格式为：normal \| \<feature-tag-value\>
     *
     * \<feature-tag-value\>的格式为：\<string\> \[ \<integer\> \| on \| off ]
     *
     * \<feature-tag-value\>的个数可以有多个，中间用','隔开。
     *
     * 例如，使用等宽时钟数字的输入格式为："ss01" on。
     *
     * @param { string | undefined } value - 文字特性效果。<br/>设置undefined时没有特性效果。
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontFeature(value: string | undefined): this;
    /**
     * 定制TextClock内容区的方法。
     *
     * @param { ContentModifier<TextClockConfiguration> | undefined } modifier - 在TextClock组件上，定制内容区的方法。<br/>modifier： 内
     *     容修改器，开发者需要自定义class实现ContentModifier接口。<br/>设置undefined时显示为默认内容。
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<TextClockConfiguration> | undefined): this;
    /**
     * 设置小时是否显示前导0。
     *
     * @param { DateTimeOptions | undefined } dateTimeOptions - 设置小时是否显示前导0，只支持设置hour参数，参数值为{hour: "2-digit"}时表示显示前导0，参数
     *     值为{hour: "numeric"}时表示不显示前导0。<br/>默认值：undefined，默认状态下，24小时制显示前导0，12小时制不显示前导0。
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default dateTimeOptions(dateTimeOptions: DateTimeOptions | undefined): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<TextClockAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { TextClockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<TextClockAttribute> | AttributeModifier<CommonMethod> | undefined): this;

    /**
     * 设置TextClock组件的选项。
     *
     * @param { TextClockOptions } [options] - 构造TextClock组件的选项。
     * @returns { TextClockAttribute } 返回TextClock属性的实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setTextClockOptions(options?: TextClockOptions): this;
}
/**
 * 创建文本时钟组件。
 *
 * @param { TextClockOptions } [options] - 通过文本显示当前系统时间的组件参数。
 * @returns { TextClockAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function TextClock(
    options?: TextClockOptions
): TextClockAttribute;

/**
 * 定义TextClock组件。
 *
 * @param { CustomBuilderT<TextClockAttribute> } style - TextClock属性的实例。
 * @returns { TextClockAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function TextClock(
    style: CustomBuilderT<TextClockAttribute>,
): TextClockAttribute;