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
import { ResourceColor, Length } from "./units";
import { CommonMethod, ContentModifier, CommonConfiguration, MultiShadowOptions } from './common';
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier } from "./common";

/**
 * DataPanelType enum
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DataPanelType {
    /**
     * Line data panel.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Line,
    /**
     * Circle data panel.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Circle
}
/**
 * ColorStop type
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ColorStop {
    /**
     * Color property.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color: ResourceColor;
    /**
     * Offset property.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset: Length;
}
/**
 * LinearGradient class
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class LinearGradient {
    /**
     * Constructor.
     *
     * @param { ColorStop[] } colorStops - the LinearGradient constructor parameter.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(colorStops: ColorStop[]);
}
/**
 * Defines the options of Shadow.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DataPanelShadowOptions extends MultiShadowOptions {
    /**
     * Current shadow colors.
     *
     * @default Consistent with valueColors
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    colors?: Array<ResourceColor | LinearGradient>;
}
/**
 * Defines the options of DataPanel.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DataPanelOptions {
    /**
     * Current data value. the max length is 9.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    values: double[];
    /**
     * Maximum value of the current data.
     * Default value: 100.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    max?: double;
    /**
     * DataPanel Type.
     * Default value: DataPanelType.Circle.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type?: DataPanelType;
}
/**
 * DataPanelConfiguration used by dataPanel content modifier
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DataPanelConfiguration extends CommonConfiguration<DataPanelConfiguration> {
    /**
     * Current data value. the max length is 9.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    values: double[];
    /**
     * Maximum value of the current data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    maxValue: double;
}
/**
 * Defines the Button component attributes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface DataPanelAttribute extends CommonMethod {
    /**
     * Disable the special effect of the data ratio chart.
     *
     * @param { boolean | undefined } value
     * @returns { DataPanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default closeEffect(value: boolean | undefined): this;
    /**
     * Set the value colors of the data ratio chart.
     *
     * @param { Array<ResourceColor | LinearGradient> | undefined } value - the value colors of the data ratio chart.
     * @returns { DataPanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default valueColors(value: Array<ResourceColor | LinearGradient> | undefined): this;
    /**
     * Set track background color of the data ratio chart.
     *
     * @param { ResourceColor | undefined } value - track background color of the data ratio chart.
     * @returns { DataPanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default trackBackgroundColor(value: ResourceColor | undefined): this;
    /**
     * Set the stroke width of the data ratio chart.
     *
     * @param { Length | undefined } value - the stroke width of the data ratio chart.
     * @returns { DataPanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default strokeWidth(value: Length | undefined): this;
    /**
     * Set the shadow width of the data ratio chart.
     *
     * @param { DataPanelShadowOptions | undefined | null } value - the track shadow width of the data ratio chart.
     * @returns { DataPanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default trackShadow(value: DataPanelShadowOptions | undefined | null): this;
    /**
     * Set the content modifier of data panel.
     *
     * @param { ContentModifier<DataPanelConfiguration> | undefined } modifier - The content modifier of data panel.
     * @returns { DataPanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<DataPanelConfiguration> | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<DataPanelAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { BadgeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<DataPanelAttribute> | AttributeModifier<CommonMethod> | undefined): this;

    /**
     * Set DataPanel options.
     *
     * @param { DataPanelOptions } options - DataPanel constructor options
     * @returns { DataPanelAttribute } Returns the instance of the DataPanelAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @unpublished
     * @stagemodelonly
     * @since 26.1.0 staticonly
     */
    default setDataPanelOptions(options: DataPanelOptions): this;
}
/**
 * Defines the DataPanel component.
 *
 * @param { DataPanelOptions } options - data panel options.
 * @returns { DataPanelAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function DataPanel(
    options: DataPanelOptions
): DataPanelAttribute;

/**
 * Defines DataPanel Component.
 *
 * @param { CustomBuilderT<DataPanelAttribute> } style - DataPanel attribute instance
 * @returns { DataPanelAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @unpublished
 * @stagemodelonly
 * @since 26.1.0 staticonly
 * @noninterop
 */
@Builder
export declare function DataPanel(
    style: CustomBuilderT<DataPanelAttribute>,
): DataPanelAttribute;