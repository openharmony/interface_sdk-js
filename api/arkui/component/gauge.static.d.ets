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
import { CommonMethod, CommonConfiguration, ContentModifier, MultiShadowOptions } from './common';
import { ResourceStr, Dimension, ResourceColor, Length } from "./units";
import { LinearGradient } from "./dataPanel";
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier } from "./common";

/**
 * Defines Gauge constructor options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface GaugeOptions {
    /**
     * Set current data value.
     * Anonymous Object Rectification.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: double | undefined;
    /**
     * Set current segment minimum value.
     * Anonymous Object Rectification.
     * Default value: 0.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    min?: double;
    /**
     * Set current segment maximum value.
     * Anonymous Object Rectification.
     * Default value: 100.
     * <br>**Note: * *
     * If max is less than min, the default values 0 and 100 are used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    max?: double;
}
/**
 * Defines the options of gauge track shadow.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GaugeShadowOptions extends MultiShadowOptions {}
/**
 * Defines the options of gauge indicator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GaugeIndicatorOptions {
    /**
     * Current indicator icon path.
     *
     * @default system style.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    icon?: ResourceStr;
    /**
     * Current indicator space.
     * Default value: 8vp.
     * <br>**Note: * *
     * For the default triangle style pointer, the spacing is the distance from the black triangle to the outer edge of
     * the ring.
     *
     * @default 8vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    space?: Dimension;
}
/**
 * GaugeConfiguration used by content modifier
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GaugeConfiguration extends CommonConfiguration<GaugeConfiguration> {
    /**
     * Current data value.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: double;
    /**
     * Current Segment Minimum Value.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    min: double;
    /**
     * Current Segment Maximum Value.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    max: double;
}
/**
 * Defines the Gauge component attributes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface GaugeAttribute extends CommonMethod {
    /**
     * Sets the value for the current profile.
     *
     * @param { double | undefined } value
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default value(value: double | undefined): this;
    /**
     * Set the start angle. Clock 0 is 0 degrees and clockwise is positive.
     *
     * @param { double | undefined } angle
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default startAngle(angle: double | undefined): this;
    /**
     * Sets the end angle position. Clock 0 is 0 degrees and clockwise is positive.
     *
     * @param { double | undefined } angle
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default endAngle(angle: double | undefined): this;
    /**
     * Set the color of the chart. You can set the solid color and segmented gradient color.
     *
     * @param { ResourceColor | LinearGradient | Array<[ResourceColor | LinearGradient, double]> | undefined } colors -
     *     section colors of gauge drawing.
     * @returns { GaugeAttribute } returns the instance of the GaugeAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default colors(colors: ResourceColor | LinearGradient | Array<[ResourceColor | LinearGradient, double]> | undefined): this;
    /**
     * Sets the thickness of the ring chart.
     *
     * @param { Length | undefined } length
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeWidth(length: Length | undefined): this;
    /**
     * Sets description content of the ring chart.
     *
     * @param { CustomBuilder | undefined | null } value - description content builder of the gauge drawing.
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default description(value: CustomBuilder | undefined | null): this;
    /**
     * Sets track shadow of the ring chart.
     *
     * @param { GaugeShadowOptions | undefined | null } value - track shadow options of the gauge drawing.
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default trackShadow(value: GaugeShadowOptions | undefined | null): this;
    /**
     * Sets indicator options of the ring chart.
     *
     * @param { GaugeIndicatorOptions | undefined | null } value - indicator options of the gauge drawing.
     * @returns { GaugeAttribute }  returns the instance of the GaugeAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default indicator(value: GaugeIndicatorOptions | undefined | null): this;
    /**
     * Sets if mark to privacy sensitive.
     *
     * @param { boolean | undefined } isPrivacySensitiveMode - indicates if mark to  privacy sensitive .
     * @returns { GaugeAttribute }  returns the instance of the GaugeAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default privacySensitive(isPrivacySensitiveMode: boolean | undefined): this;
    /**
     * Set the content modifier of gauge.
     *
     * @param { ContentModifier<GaugeConfiguration> | undefined } modifier - The content modifier of gauge.
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<GaugeConfiguration> | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<GaugeAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { GaugeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<GaugeAttribute> | AttributeModifier<CommonMethod> | undefined): this;

    /**
     * Set Gauge options.
     *
     * @param { GaugeOptions } options - Gauge constructor options
     * @returns { GaugeAttribute } Returns the instance of the GaugeAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @unpublished
     * @stagemodelonly
     * @since 26.1.0 staticonly
     */
    default setGaugeOptions(options: GaugeOptions): this;
}
/**
 * Defines the Gauge component.
 *
 * @param { GaugeOptions } options - gauge options.
 * @param { CustomBuilder } [content_]
 * @returns { GaugeAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Gauge(
    options: GaugeOptions, 
    content_?: CustomBuilder
): GaugeAttribute;

/**
 * Defines Gauge Component.
 *
 * @param { CustomBuilderT<GaugeAttribute> } style - Gauge attribute instance
 * @param { CustomBuilder } [content_] - Child component
 * @returns { GaugeAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @unpublished
 * @stagemodelonly
 * @since 26.1.0 staticonly
 * @noninterop
 */
@Builder
export declare function Gauge(
    style: CustomBuilderT<GaugeAttribute>,
    content_?: CustomBuilder,
): GaugeAttribute;