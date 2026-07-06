/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
  * @file Defines the arc button component
  * @kit ArkUI
  */

import { ColorMetrics, LengthMetrics } from '@ohos.arkui.node';

 /**
 * Enumerates the types of arc buttons that can be set for **ArcButton**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare enum ArcButtonPosition {
    /**
     * Upper arc button located at the top of the circular screen.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    TOP_EDGE = 0,
    /**
     * Lower arc button located at the bottom of the circular screen.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    BOTTOM_EDGE = 1
}

/**
 * Enumerates the style modes that can be set for **ArcButton**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare enum ArcButtonStyleMode {
    /**
     * Emphasized style in light color mode. Displayed as a blue background with white text.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    EMPHASIZED_LIGHT = 0,
    /**
     * Warning style in dark color mode. Displayed as a red background with white text.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    EMPHASIZED_DARK = 1,
    /**
     * Normal style in light color mode. Displayed as a dark blue background with blue text.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    NORMAL_LIGHT = 2,
    /**
     * Normal style in dark color mode. Displayed as a dark gray background with blue text.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    NORMAL_DARK = 3,
    
    /**
     * Custom button color and font color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    CUSTOM = 4
}

/**
 * Enumerates the states that can be set for **ArcButton**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare enum ArcButtonStatus {
    /**
     * Normal state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    NORMAL = 0,
    /**
     * Pressed state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    PRESSED = 1,
    /**
     * Disabled state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    DISABLED = 2
}

/**
 * Defines the progress indicator configuration options of the **ArcButton** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare class ArcButtonProgressConfig {
  /**
   * Current progress value. Values less than 0 are adjusted to **0**, and values greater than the **total** value are 
   * capped at the **total** value.
   * 
   * Default value: **0**.
   * 
   * Value range: [0, total]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  value: number;
  /**
   * Maximum progress value.
   * 
   * Default value: **100**
   * 
   * Value range: [0, 2147483647]. If the value is 0 or out of the range, the default value 100 is used.
   *
   * @default 100
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  total?: number;
  /**
   * Foreground color of the progress indicator. If the component's background color (
   * [backgroundColor]{@link ArcButtonOptions}) is set, it is used as the default foreground color of the progress 
   * indicator. The foreground color of the progress indicator is not affected by the button style (
   * [ArcButtonStyleMode]{@link ArcButtonStyleMode}). The progress indicator's background color is derived solely from 
   * its foreground color, with an opacity value of 25%.
   * 
   * Default value: **"#1F71FF"**, which is blue.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  color?: ResourceColor;
}

/**
 * Defines the default or custom style parameters for the **ArcButton** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface CommonArcButtonOptions {
    /**
     * Type of the arc button.
     * 
     * Default value: **ArcButtonPosition.BOTTOM_EDGE**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    position?: ArcButtonPosition;
    /**
     * Style mode for the arc button. This style cannot be used together with the 
     * [ArcButtonProgressConfig]{@link ArcButtonProgressConfig} style.
     * 
     * Default value: **ArcButtonStyleMode.EMPHASIZED_LIGHT**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    styleMode?: ArcButtonStyleMode;
    /**
     * Status of the arc button.
     * 
     * Default value: **ArcButtonStatus.NORMAL**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    status?: ArcButtonStatus;
    /**
     * Text displayed on the arc button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    label?: ResourceStr;
    /**
     * Background blur style of the arc button.
     * 
     * Default value: **BlurStyle.NONE**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Background color of the arc button.
     * 
     * This property takes effect only when **ArcButtonStyleMode** is set to **CUSTOM**.
     * 
     * Default value: **Color.Black**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    backgroundColor?: ColorMetrics;
    /**
     * Shadow color of the arc button.
     * 
     * Default value: **Color.Black**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    shadowColor?: ColorMetrics;
    /**
     * Whether to enable the shadow for the arc button.
     * 
     * Default value: **false**
     * 
     * The value **true** means to enable the shadow, and **false** means the opposite.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    shadowEnabled?: boolean;
    /**
     * Font size of the arc button.
     * 
     * Default value: **19fp**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    fontSize?: LengthMetrics;
    /**
     * Font color of the arc button.
     * 
     * This property takes effect only when **ArcButtonStyleMode** is set to **CUSTOM**.
     * 
     * Default value: **Color.White**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    fontColor?: ColorMetrics;
    /**
     * Font color of the arc button when pressed.
     * 
     * This property takes effect only when **ArcButtonStyleMode** is set to **CUSTOM**.
     * 
     * Default value: **Color.White**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    pressedFontColor?: ColorMetrics;
    /**
     * Font style of the arc button.
     * 
     * Default value: **FontStyle.Normal**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    fontStyle?: FontStyle;
    /**
     * Font family of the arc button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    fontFamily?: string | Resource;
    /**
     * Margin of the arc button text.
     * 
     * Default value: **{start:24vp, top: 10vp,end: 24vp, bottom:16vp }**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    fontMargin?: LocalizedMargin;
    
    /**
     * Parameters for the progress indicator of the **ArcButton** component. If this property is not set, the 
     * **ArcButton** component is displayed as a button (see 
     * [Example 1](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ArcButton.md#example-1-setting-an-arc-button)
     * ). If this property is set, the component is displayed as a progress indicator (see 
     * [Example 2](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ArcButton.md#example-2-setting-a-device-progress-indicator-button)
     * ). The progress indicator style is not affected by the settings of the 
     * [ArcButtonStyleMode]{@link ArcButtonStyleMode} attribute.
     * 
     * Default value: default values of all properties of [ArcButtonProgressConfig]{@link ArcButtonProgressConfig}
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    progressConfig?: ArcButtonProgressConfig;
    
    /**
     * Callback triggered by touch actions on the arc button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    onTouch?: Callback<TouchEvent>;
    
    /**
     * Callback triggered by click actions on the arc button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    onClick?: Callback<ClickEvent>;
}
/**
 * Defines the default or custom style parameters for the **ArcButton** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare class ArcButtonOptions {
    /**
     * Type of the arc button.
     * 
     * Default value: **ArcButtonPosition.BOTTOM_EDGE**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    position: ArcButtonPosition;
    /**
     * Style mode for the arc button. This style cannot be used together with the 
     * [ArcButtonProgressConfig]{@link ArcButtonProgressConfig} style.
     * 
     * Default value: **ArcButtonStyleMode.EMPHASIZED_LIGHT**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    styleMode: ArcButtonStyleMode;
    /**
     * Status of the arc button.
     * 
     * Default value: **ArcButtonStatus.NORMAL**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    status: ArcButtonStatus;
    /**
     * Text displayed on the arc button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    label: ResourceStr;
    /**
     * Background blur style of the arc button.
     * 
     * Default value: **BlurStyle.NONE**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    backgroundBlurStyle: BlurStyle;
    /**
     * Background color of the arc button.
     * 
     * This property takes effect only when **ArcButtonStyleMode** is set to **CUSTOM**.
     * 
     * Default value: **Color.Black**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    backgroundColor: ColorMetrics;
    /**
     * Shadow color of the arc button.
     * 
     * Default value: **Color.Black**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    shadowColor: ColorMetrics;
    /**
     * Whether to enable the shadow for the arc button.
     * 
     * Default value: **false**
     * 
     * The value **true** means to enable the shadow, and **false** means the opposite.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    shadowEnabled: boolean;
    /**
     * Font size of the arc button.
     * 
     * Default value: **19fp**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    fontSize: LengthMetrics;
    /**
     * Font color of the arc button.
     * 
     * This property takes effect only when **ArcButtonStyleMode** is set to **CUSTOM**.
     * 
     * Default value: **Color.White**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    fontColor: ColorMetrics;
    /**
     * Font color of the arc button when pressed.
     * 
     * This property takes effect only when **ArcButtonStyleMode** is set to **CUSTOM**.
     * 
     * Default value: **Color.White**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    pressedFontColor: ColorMetrics;
    /**
     * Font style of the arc button.
     * 
     * Default value: **FontStyle.Normal**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    fontStyle: FontStyle;
    /**
     * Font family of the arc button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    fontFamily: string | Resource;
    /**
     * Margin of the arc button text.
     * 
     * Default value: **{start:24vp, top: 10vp,end: 24vp, bottom:16vp }**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    fontMargin: LocalizedMargin;

    /**
     * Parameters for the progress indicator of the **ArcButton** component. If this property is not set, the 
     * **ArcButton** component is displayed as a button (see 
     * [Example 1](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ArcButton.md#example-1-setting-an-arc-button)
     * ). If this property is set, the component is displayed as a progress indicator (see 
     * [Example 2](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ArcButton.md#example-2-setting-a-device-progress-indicator-button)
     * ). The progress indicator style is not affected by the settings of the 
     * [ArcButtonStyleMode]{@link ArcButtonStyleMode} attribute.
     * 
     * Default value: default values of all properties of [ArcButtonProgressConfig]{@link ArcButtonProgressConfig}
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    progressConfig?: ArcButtonProgressConfig;
    
    /**
     * Callback triggered by touch actions on the arc button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    onTouch?: Callback<TouchEvent>;
    
    /**
     * Callback triggered by click actions on the arc button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    onClick?: Callback<ClickEvent>;
    
    /**
     * A constructor used to create an **ArcButton** component.
     *
     * @param { CommonArcButtonOptions } options - Text, background color, shadow, and other parameters of the
     *     **ArcButton** component.
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    constructor(options: CommonArcButtonOptions);
}
/**
 * The **ArcButton** component offers various button styles, such as emphasized, normal, and warning. It is recommended 
 * for devices with circular screens.
 * 
 * > **NOTE**
 * 
 * > - This component can be used on phones, PCs, 2-in-1 devices, tablets, TVs, and wearables. In API version 22 and 
 * > earlier versions, a compilation warning will be reported when this component is used on phones, PCs, 2-in-1 
 * > devices, tablets, and TVs, but the component can still run properly.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@Component
export declare struct ArcButton {
    /**
     * Text, background color, shadow, and other parameters of the **ArcButton** component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Circle
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Require
    readonly options: ArcButtonOptions;
}