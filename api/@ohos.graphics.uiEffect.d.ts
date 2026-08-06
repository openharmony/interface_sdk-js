/*
* Copyright (c) 2024 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * @file
 * @kit ArkGraphics2D
 */

import { AsyncCallback } from './@ohos.base';
import type common2D from './@ohos.graphics.common2D';
import type image from './@ohos.multimedia.image';
/*** if arkts static */
import { LinearGradientBlurOptions } from '@ohos.arkui.component';
/*** endif */

/**
 * This module provides basic capabilities for component effects, including blur, brightening, and more.
 * Effects are categorized into the Filter and VisualEffect classes, and effects of the same class can be cascaded
 * under an instance of that effect class. Using this module, you can quickly implement complex visual effects without
 * needing to master underlying image processing algorithms, reducing development complexity and improving
 * user experience.
 * In actual development, blur can be used for background blurring, and brightening can be used for
 * bright screen display, etc.
 *
 * - [Filter]{@link uiEffect.Filter}: Used to add specified Filter effects to a component.
 * - [VisualEffect]{@link uiEffect.VisualEffect}: Used to add specified VisualEffect effects to a component.
 *
 * @syscap SystemCapability.Graphics.Drawing
 * @form [since 22]
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace uiEffect {

  /**
   * Filter effect class, used to apply corresponding effects to specified components.
   * Before calling Filter methods, you need to first create a Filter instance through createFilter.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 23 static
   */
  interface Filter {
    /**
     * Adds a pixel stretch effect to the component.
     *
     * @param { Array<double> } stretchSizes - The percentage ratios of edge pixel stretching in the top, bottom,
     *     left, and right directions. The value range is [-1, 1]. A positive value indicates outward stretching,
     *     and the edge pixels of the specified original image ratio are used to fill in the top, bottom, left, and
     *     right directions. A negative value indicates inward shrinking, but the final image size remains unchanged.
     *     Note that the parameters for all four directions must be uniformly non-positive or non-negative,
     *     otherwise the effect will not take effect.
     * @param { TileMode } tileMode - The pixel fill mode for edge pixel stretching.
     * @returns { Filter } - Returns the Filter with the pixel stretch effect attached.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    pixelStretch(stretchSizes: Array<double>, tileMode: TileMode): Filter;

    /**
     * Adds a blur effect to the component.
     *
     * @param { double } blurRadius - Blur radius, in px. The value must be greater than or equal to 0.
     *     A larger blur radius results in a stronger blur effect. When the blur radius is 0, there is no blur effect.
     *     If a negative number is passed in, it is automatically corrected to 0.
     * @returns { Filter } - Returns the Filter with the blur effect attached, supporting chained calls
     *     to add other effects.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 23 static
     */
    blur(blurRadius: double): Filter;

    /**
     * Adds a water ripple effect to the component.
     *
     * @param { double } progress - Indicates the ripple progress. The value range is [0, 1].
     *     The closer the progress is to 1, the more fully the ripples are displayed.
     *     Values outside the range will not produce a ripple effect.
     * @param { int } waveCount - The number of waves when the water ripples. The value range is [1, 3].
     *     The wave count must be an integer. If a floating-point number or a value outside the range is provided,
     *     the ripple effect will not appear.
     * @param { double } x - The X-axis position of the center point where the water ripple first appears on the screen.
     *     The screen is normalized, with the top-left corner at (0, 0) and the top-right corner at (1, 0).
     *     A negative value indicates a position to the left of the screen.
     * @param { double } y - The Y-axis position of the center point where the water ripple first appears on the screen.
     *     The screen is normalized, with the top-left corner at (0, 0) and the bottom-left corner at (0, 1).
     *     A negative value indicates a position above the screen.
     * @param { WaterRippleMode } rippleMode - The scene mode of the water ripple.
     * @returns { Filter } - Returns the Filter with the water ripple effect attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    waterRipple(progress: double, waveCount: int, x: double, y: double, rippleMode: WaterRippleMode): Filter;

    /**
     * Adds a fly-in or fly-out deformation effect to the component.
     * Typical application scenarios include page transition animations, window entry/exit animations,
     * dialog pop-up animations, list item entry/exit animations, etc.
     *
     * @param { double } degree - Indicates the degree of fly-in or fly-out deformation. The value range is [0, 1].
     *     The closer the value is to 1, the more obvious the deformation.
     *     Values outside the range will not produce a deformation effect.
     * @param { FlyMode } flyMode - The scene mode of the fly-in or fly-out effect.
     *     BOTTOM indicates the fly-in or fly-out deformation scene from the bottom of the device.
     *     TOP indicates the fly-in or fly-out deformation scene from the top of the device.
     * @returns { Filter } - Returns the Filter with the fly-in or fly-out deformation effect attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    flyInFlyOutEffect(degree: double, flyMode: FlyMode): Filter;

    /**
     * Adds a lens distortion effect to the component.
     *
     * @param { double } distortionK - The distortion coefficient, indicating the degree of lens distortion.
     *     The value range is [-1, 1]. Values less than -1 are treated as -1; values greater than 1 are treated as 1.
     *     When the distortion coefficient is less than 0, the effect is barrel distortion; when greater than 0,
     *     the effect is pincushion distortion. The closer the value is to 0, the smaller the distortion;
     *     when the value is 0, there is no distortion effect.
     * @returns { Filter } - Returns the Filter with the lens distortion effect attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    distort(distortionK: double): Filter;

    /**
     * Adds a radius linear gradient blur effect to the component content.
     *
     * @param { double } radius - Blur radius, in px. A larger blur radius results in a stronger blur effect.
     *     The value range is [0, 128]. When the blur radius is 0, there is no blur effect;
     *     values less than 0 are treated as 0; values greater than 128 are treated as 128.
     * @param { LinearGradientBlurOptions } gradientParam - The linear gradient parameters, including
     *     fractionStops and direction.
     * @returns { Filter } - Returns the Filter with the radius linear gradient blur effect attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    radiusGradientBlur(radius: double, gradientParam: LinearGradientBlurOptions): Filter;

    /**
     * Adds a Bezier curve deformation effect to the component. This effect achieves precise distortion and
     * shape adjustment of the image by creating closed Bezier curves at the layer boundary.
     * There are four Bezier curve segments, connected head to tail in sequence, with each segment containing
     * one vertex and two tangent points. Typical application scenarios include face deformation effects,
     * card perspective distortion, etc.
     *
     * @param { Array<common2D.Point> } controlPoints - 12 Bezier deformation control points.
     *     The array length must be 12.
     *     Changing the positions of the control points changes the shape of the curves forming the edges,
     *     thereby distorting the image. The control point coordinates use a normalized coordinate system
     *     (default range [0, 1]), and coordinate values can be greater than 1 or less than 0.
     *     If the array length is not 12, the effect will not take effect.
     * @returns { Filter } - Returns the Filter with the Bezier curve deformation effect attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    bezierWarp(controlPoints: Array<common2D.Point>): Filter;

    /**
     * Adds a 3D lighting effect to the component content.
     *
     * @param { common2D.Point3d } lightPosition - The position of the light source in the component space.
     *     [-1, -1, 0] is the top-left corner of the component, [1, 1, 0] is the bottom-right corner of the component.
     *     The larger the z-axis component, the farther the light source is from the component plane,
     *     and the larger the illuminated area. The x component range is [-10, 10], the y component range is [-10, 10],
     *     and the z component range is [0, 10]. Values outside the range will be automatically clamped.
     * @param { common2D.Color } lightColor - The color of the light source. The RGBA components range from [0, 1].
     *     Values outside the range will be automatically clamped.
     * @param { double } lightIntensity - The intensity of the light source. The value range is [0, 1].
     *     A larger value indicates a brighter light source. Values outside the range will be automatically clamped.
     * @param { Mask } [displacementMap] - The displacement map parameter. This parameter is not currently effective
     *     and is not recommended to be passed in. Not setting it has no effect on the functionality.
     * @returns { Filter } - Returns the Filter with the content lighting effect attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    contentLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: double,
      displacementMap?: Mask): Filter;

    /**
     * Adds a color gradient effect to the component content.
     *
     * @param { Array<Color> } colors - The color array for multi-color gradient. The array length range is [0, 12],
     *     and each color value must be greater than or equal to 0.
     *     If the array length is 0 or greater than 12, or if the array lengths of colors, positions, and strengths
     *     are not equal, the effect will not take effect.
     * @param { Array<common2D.Point> } positions - The position array, corresponding to the
     *     distribution positions of colors.
     *     The array length range is [0, 12]. If the array length is 0 or greater than 12, or if the array lengths of
     *     colors, positions, and strengths are not equal, the effect will not take effect.
     * @param { Array<double> } strengths - The strength array, corresponding to the diffusion strength of colors.
     *     The array length range is [0, 12], and each strength value must be greater than or equal to 0.
     *     If the array length is 0 or greater than 12, or if the array lengths of colors, positions, and strengths
     *     are not equal, the effect will not take effect.
     * @param { Mask } [alphaMask] - The mask that controls the transparency distribution of the gradient effect.
     *     A Mask instance can be created through Mask creation methods (such as createRippleMask,
     *     createRadialGradientMask, etc.). Pass this parameter when you need to control the transparency distribution
     *     of the color gradient effect (such as local transparency or dynamic transparency effects).
     *     If not set, the transparency of the color gradient effect is entirely determined by the colors parameter.
     * @returns { Filter } - Returns the Filter with the color gradient effect attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<double>,
        alphaMask?: Mask): Filter;

    /**
     * Detects edges of the component content and adds an edge highlight effect.
     * This effect automatically detects the edge contours of the component content and overlays a highlight stroke.
     *
     * @param { double } alpha - Specifies the stroke highlight transparency. A larger value makes
     *     the stroke more obvious.
     *     The value range is [0, 1]. Setting it to 0 results in no stroke; values less than 0 are treated as 0;
     *     values greater than 1 are treated as 1.
     * @param { Color } [color] - Specifies the stroke highlight color. The RGB components range from [0, +∞).
     *     Pass this parameter when you need to customize the stroke highlight color (such as emphasizing
     *     a specific color effect).
     *     If not set, the original color of the component content is used by default. When the color parameter is set,
     *     the alpha in Color does not take effect; only RGB is used.
     * @param { Mask } [mask] - Specifies the stroke highlight intensity mask. A Mask instance can be created through
     *     Mask creation methods (such as createRippleMask, createRadialGradientMask, etc.). Pass this parameter when
     *     you need to control the area of the stroke highlight effect (such as local highlight instead
     *     of global highlight).
     *     If not set, the entire component content has the stroke highlight effect by default.
     * @param { boolean } [bloom] - Specifies whether the stroke has a bloom effect. Set to true
     *     when you need to enhance
     *     the visual effect; set to false when you need a simple stroke effect. The default value
     *     is true (with bloom effect).
     *     For images smaller than 16x16, there is only a stroke effect by default, no bloom effect, and this parameter
     *     has no effect.
     * @returns { Filter } - Returns the Filter with the edge highlight effect attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    edgeLight(alpha: double, color?: Color, mask?: Mask, bloom?: boolean): Filter;

    /**
     * Adds a distortion effect to the component content.
     *
     * @param { Mask } displacementMap - The displacement map, used to control the direction and
     *     intensity of distortion.
     *     A Mask instance can be created through Mask creation methods (such as createRippleMask,
     *     createPixelMapMask, etc.). It works together with the factor to determine the degree of distortion.
     * @param { [double, double] } [factor] - Specifies the horizontal and vertical distortion intensity coefficients.
     *     Pass this parameter when you need to control the direction and intensity of distortion
     *     (such as one-way distortion or differential distortion). The larger the absolute value of the coefficient,
     *     the more obvious the distortion. The recommended value range is [-10.0, 10.0].
     *     If not set, the default value is [1.0, 1.0], indicating that both horizontal and vertical directions
     *     apply the default distortion intensity. Setting it to [0.0, 0.0] results in no distortion effect.
     *     The grayscale value of the Mask controls the direction and intensity of distortion, and the factor
     *     multiplied by the Mask grayscale value jointly determines the final distortion degree,
     *     i.e., actual distortion value = Mask grayscale value × factor value.
     * @returns { Filter } - Returns the Filter with the distortion effect attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    displacementDistort(displacementMap: Mask, factor?: [double, double]): Filter;

    /**
     * Adds a dispersion effect controlled by a displacement map to the component content, simulating the
     * dispersion phenomenon when light passes through a prism. Typical application scenarios include
     * colorful effects, prism refraction simulation, etc.
     *
     * @param { Mask } dispersionMap - The displacement map, used to control the intensity, direction, and transparency
     *     of dispersion. It is recommended to use a PixelMapMask-type displacement map, which allows fine-grained
     *     control over the dispersion area and intensity through custom image textures.
     *     A Mask instance can be created through the createPixelMapMask method.
     * @param { double } alpha - The overall transparency of the dispersion effect. A smaller transparency value results
     *     in a more transparent effect. The value range is [0, 1.0]. Setting it to 0 results in no dispersion effect;
     *     values less than 0 are treated as 0; values greater than 1.0 are treated as 1.0.
     * @param { [double, double] } [rFactor] - The basic offset of the R channel in the X/Y direction.
     *     Pass this parameter when you need to customize the dispersion intensity and direction of the red channel.
     *     A larger offset results in a more obvious red dispersion effect. If not passed, the default
     *     value is [0.0, 0.0],
     *     meaning no R channel dispersion offset. The value range for each direction is [-1.0, 1.0],
     *     and values outside the range will be automatically clamped.
     * @param { [double, double] } [gFactor] - The basic offset of the G channel in the X/Y direction.
     *     Pass this parameter when you need to customize the dispersion intensity and direction of the green channel.
     *     If not passed, the default value is [0.0, 0.0], meaning no G channel dispersion offset.
     *     The value range is the same as rFactor, [-1.0, 1.0], and values outside the range will
     *     be automatically clamped.
     * @param { [double, double] } [bFactor] - The basic offset of the B channel in the X/Y direction.
     *     Pass this parameter when you need to customize the dispersion intensity and direction of the blue channel.
     *     If not passed, the default value is [0.0, 0.0], meaning no B channel dispersion offset.
     *     The value range is the same as rFactor, [-1.0, 1.0], and values outside the range will
     *     be automatically clamped.
     * @returns { Filter } - Returns the Filter with the dispersion effect controlled by the displacement map attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    maskDispersion(dispersionMap: Mask, alpha: double, rFactor?: [double, double], gFactor?: [double, double],
      bFactor?: [double, double]): Filter;

    /**
     * Adds an HDR (High Dynamic Range) brightening effect to the component content.
     * Nesting is not recommended, as forced nesting may cause overexposure.
     *
     * The brightening effect requires the HDR rendering pipeline to be enabled to take effect.
     * In some scenarios, HDR cannot be enabled even if an attempt is made to trigger the HDR rendering pipeline,
     * for example, when the device hardware specifications do not support HDR.
     *
     * The maximum supported brightness boost multiple is calculated as the device's current maximum brightness
     * divided by its SDR reference white luminance.
     *
     * > **NOTE**
     * >
     * > Using the HDR brightening effect incurs certain performance and power consumption overhead.
     * > It is recommended to use it in scenarios where HDR images or videos already exist.
     *
     * @permission ohos.permission.HDR_BRIGHTNESS [since 24]
     * @param { double } ratio - Brightening ratio. The value range is [1.0, the maximum brightening ratio supported by
     *     the current device]. Values less than 1.0 are treated as 1.0; a value equal to 1.0 means no processing;
     *     values greater than 1.0 attempt to trigger the HDR rendering pipeline;
     *     values exceeding the maximum ratio are treated as the maximum ratio.
     * @returns { Filter } - Returns the Filter with the HDR brightening effect attached,
     *     supporting chained calls to add other effects.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     *     [since 20 - 23]
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API. [since 24]
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     * @since 23 static
     */
    hdrBrightnessRatio(ratio: double): Filter;

    /**
     * Provides a Mask-based gradient blur effect for the component content.
     *
     * @param { double } radius - Maximum blur radius, in px. A larger value results in a stronger blur effect.
     *     The value range is [0, 128]. When the blur radius is 0, there is no blur effect;
     *     values less than 0 are treated as 0; values greater than 128 are treated as 128.
     * @param { Mask } radiusMap - The Mask object representing the degree of blurring.
     *     The grayscale value of the Mask represents the degree of blurring at the corresponding position;
     *     a larger grayscale value indicates more blurring.
     * @returns { Filter } - Returns the Filter with the current effect attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    variableRadiusBlur(radius: double, radiusMap: Mask): Filter;

    /**
     * Provides a Mask-based and directional light lighting effect for the component content.
     * Directional light illuminates the component plane from a uniform direction, with all light rays in the same
     * direction, not attenuating with distance, and the light intensity is evenly distributed across the component,
     * suitable for simulating distant light sources such as sunlight. Unlike the point light source of contentLight,
     * directional light does not need to specify the specific position of the light source.
     * Through the Mask, you can control lighting details, and through the factor, you can combine height maps
     * to enhance the relief effect.
     *
     * @param { common2D.Point3d } direction - The direction of the incident light, represented by three-dimensional
     *     coordinates indicating the direction of the light rays.
     * @param { Color } color - The light color.
     * @param { double } intensity - The light intensity. The value range is [0, +∞).
     *     A larger value indicates a brighter
     *     light source.
     * @param { Mask } [mask] - The displacement map, used to describe the three-dimensional details of the
     *     two-dimensional image surface. A Mask instance can be created through Mask creation methods
     *     (such as createRippleMask, createRadialGradientMask, etc.). Pass this parameter when you need to enhance
     *     local details and lighting reflection effects (such as relief, bump textures).
     *     Implemented through normal maps
     *     or height maps; if a height map is input, it needs to be used with the factor parameter.
     *     If not set, the default is empty, resulting in a global flat lighting effect without details.
     * @param { double } [factor] - The sampling scale coefficient. Pass this parameter when using a height map as the
     *     mask and needing to control the height scaling. If not set, the mask is sampled directly as a normal map;
     *     if a value is set, the mask is sampled as a height map, and the actual height value is the product of
     *     the mask sampling value and the factor.
     * @returns { Filter } - Returns the Filter with the lighting effect controlled by the displacement map attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    directionLight(direction: common2D.Point3d, color: Color, intensity: double, mask?: Mask, factor?: double): Filter;

    /**
     * Provides a Mask-based transition effect for the component content, which can be used for
     * page transition animations, scene transition effects, etc.
     *
     * It is not recommended to use this effect during screen size changes, such as screen rotation,
     * foldable screen opening/closing, etc.
     *
     * @param { Mask } alphaMask - Specifies the area of the transition effect through a mask.
     *     A Mask instance can be created through Mask creation methods (such as createRippleMask,
     *     createRadialGradientMask, etc.). The grayscale value of the Mask determines the degree of the
     *     transition effect; a larger grayscale value results in a more obvious transition effect in that area.
     * @param { double } [factor] - The transition coefficient. Pass this parameter when you need to control the
     *     transition progress (such as during animation or dynamic adjustment). A larger value makes the image
     *     closer to the post-transition page. If not set, the default value is 1.0 (transition completed state).
     *     The value range is [0.0, 1.0], and values outside the range will be automatically clamped to [0.0, 1.0].
     * @param { boolean } [inverse] - Whether to enable reverse transition. Set to true when you need a reverse
     *     transition effect (such as transitioning from the back page to the front page); set to false when you
     *     need a forward transition effect (such as transitioning from the front page to the back page).
     *     The default value is false (forward transition).
     * @returns { Filter } - Returns the Filter with the transition effect attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    maskTransition(alphaMask: Mask, factor?: double, inverse?: boolean): Filter;

    /**
     * Applies a heat distortion effect to the image, simulating the visual distortion caused by hot air flow.
     *
     * @param { HeatDistortionEffectParam } param - The heat distortion effect parameters.
     * @returns { Filter } - Returns the Filter with the heat distortion effect attached.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    heatDistortion(param: HeatDistortionEffectParam): Filter;

    /**
     * Applies a blur bubbles rise effect to the image, simulating a dreamy, bubbly distortion
     * similar to rising bubbles in liquid.
     *
     * @param { BlurBubblesRiseEffectParam } param - The blur bubbles rise effect parameters.
     * @returns { Filter } - Returns the Filter with the blur bubbles rise effect attached.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    blurBubblesRise(param: BlurBubblesRiseEffectParam): Filter;
  }

  /**
   * Pixel fill mode enumeration.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum TileMode {
    /**
     * Clamp mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    CLAMP = 0,

    /**
     * Repeat mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    REPEAT = 1,

    /**
     * Mirror mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MIRROR = 2,

    /**
     * Decal mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DECAL = 3,
  }

  /**
   * Water ripple scene mode enumeration.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum WaterRippleMode {
    /**
     * Phone tapping 2in1 device (receiving end).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SMALL2MEDIUM_RECV = 0,

    /**
     * Phone tapping 2in1 device (sending end).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SMALL2MEDIUM_SEND = 1,

    /**
     * Phone tapping phone.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SMALL2SMALL = 2,

    /**
     * 2in1 device sharing with other devices (keyboard and mouse sharing scenario).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    MINI_RECV = 3,
  }

  /**
   * Fly-in or fly-out deformation scene mode enumeration.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum FlyMode {

    /**
     * Fly-in or fly-out deformation from the bottom.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BOTTOM = 0,

    /**
     * Fly-in or fly-out deformation from the top.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TOP = 1,
  }

  /**
   * VisualEffect class, used to apply background color blending, border lighting, color gradient, and other
   * effects to a component. Before calling VisualEffect methods, you need to first create a VisualEffect instance
   * through createEffect.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface VisualEffect {

    /**
     * A blender for changing the background color of the component. Currently, only the brightness
     * blender is supported.
     *
     * @param { BrightnessBlender } blender - The blender for blending the background color.
     * @returns { VisualEffect } - Returns the VisualEffect with the background color change effect attached.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    backgroundColorBlender(blender: BrightnessBlender): VisualEffect;

    /**
     * Adds a 3D lighting effect to the border of a rounded rectangle component.
     *
     * @param { common2D.Point3d } lightPosition - The 3D position of the light source in the component space.
     *     [-1, -1, 0] is the top-left corner of the component, [1, 1, 0] is the bottom-right corner of the component.
     *     The larger the z-axis component, the farther the light source is from the component plane,
     *     and the larger the illuminated area. The x component range is [-10, 10], the y component range is [-10, 10],
     *     and the z component range is [0, 10]. Values outside the range will be automatically clamped.
     * @param { common2D.Color } lightColor - The color of the light source. Each component range is [0, 1].
     *     Values outside the range will be automatically clamped.
     * @param { double } lightIntensity - The intensity of the light source. The value range is [0, 1].
     *     A larger value indicates a brighter light source. Values outside the range will be automatically clamped.
     * @param { double } borderWidth - The illuminated width of the component border. The value range is [0.0, 30.0].
     *     Values outside the range will be automatically clamped. Setting it to 0.0 results in no lighting effect
     *     on the component border; a larger value results in a wider illuminated area.
     * @returns { VisualEffect } - Returns the VisualEffect with the border lighting effect attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    borderLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: double,
      borderWidth: double): VisualEffect;

    /**
     * Adds a color gradient effect to the component.
     *
     * @param { Array<Color> } colors - The color array for multi-color gradient. The array length range is [0, 12],
     *     and each color value must be greater than or equal to 0.
     *     If the array length is 0 or greater than 12, or if the array lengths of colors, positions, and strengths
     *     are not equal, there will be no color gradient effect.
     * @param { Array<common2D.Point> } positions - The position array, corresponding to the positions of colors.
     *     The array length range is [0, 12]. If the array length is 0 or greater than 12, or if the array lengths of
     *     colors, positions, and strengths are not equal, there will be no color gradient effect.
     * @param { Array<double> } strengths - The strength array, corresponding to the intensity of colors.
     *     The array length range is [0, 12], and each strength value must be greater than or equal to 0.
     *     If the array length is 0 or greater than 12, or if the array lengths of colors, positions, and
     *     strengths are not equal, there will be no color gradient effect.
     * @param { Mask } [alphaMask] - The alpha mask corresponding to the colors. A Mask instance can be created through
     *     Mask creation methods (such as createRippleMask, createRadialGradientMask, etc.). Pass this parameter when
     *     you need to control the transparency distribution of the color gradient effect (such as local transparency
     *     or dynamic transparency effects). If not set, the transparency of the color gradient effect is entirely
     *     determined by the colors parameter.
     * @returns { VisualEffect } - Returns the VisualEffect with the color gradient effect attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<double>,
      alphaMask?: Mask): VisualEffect;

    /**
     * Adds a material effect to the component. The material effect simulates the optical properties
     * (refraction, reflection) and dynamic perturbation effects of physical materials to achieve visual
     * representations of glass, metal, and other materials. It can be used for scenarios such as glass-textured UI,
     * fluid material animation, frosted glass effects, etc.
     *
     * @param { LiquidMaterialEffectParam } param - The material-related variables used to control the material display,
     *     including the material switch, refraction coefficient, reflection coefficient, and perturbation coefficient.
     * @param { Mask } useEffectMask - Declares whether to use blur caching. A Mask instance created with
     *     createUseEffectMask(true) uses blur caching, suitable for scenarios that need to reuse blur results
     *     to improve performance; a Mask instance created with createUseEffectMask(false) does not use blur caching,
     *     suitable for scenarios where blur effects change frequently.
     * @param { Mask } [distortMask] - The perturbation texture required for the material perturbation effect.
     *     The image texture of the Mask instance created from a pixelMap determines the pattern and direction
     *     of the perturbation effect. A Mask instance can be created through the createPixelMapMask method.
     *     When the material's perturbation coefficient (distortFactor) is not 0, this parameter must be set;
     *     otherwise, there will be no perturbation effect. When the perturbation coefficient is 0 or this parameter
     *     is not set, there is no perturbation effect. The default is not set.
     * @param { BrightnessParam } [brightnessParam] - Adds a brightening effect to the material.
     *     Pass this parameter when you need to enhance the visual brightness of the material
     *     (such as highlight display, glow effects). If not set, no brightening effect is added by default,
     *     and the material maintains its original brightness.
     * @returns { VisualEffect } - Returns the VisualEffect with the material effect attached.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    liquidMaterial(param : LiquidMaterialEffectParam, useEffectMask: Mask, distortMask?: Mask,
      brightnessParam?: BrightnessParam): VisualEffect;

    /**
     * Adds a nonlinear deformation effect to the component. Typical application scenarios include
     * page collapse animations, window close effects, card flip animations, scene transition effects, etc.
     *
     * NOTE
     * 1. This visual effect supports drawing outside the bounds of the control,
     *    but it is still subject to the clipping (Clip) of the parent control.
     * 2. Because it contains a foreground Filter, some visual effects of the component itself and its child components
     *    (e.g., BrightnessBlender or systemMaterial) are incompatible when not used in combination
     *    with the EffectComponent.
     * 3. It supports distorting the system material, but when used in combination with the EffectComponent,
     *    it will cause the background of the system material to be distorted.
     * 4. When calling distortionCollapse, an offscreen canvas equal in size to the deformed area will be created.
     *    The content of the current component (including child components) is then drawn onto this offscreen canvas,
     *    and the existing content on the canvas is drawn with deformation.
     * 5. When using this implementation without combining with the EffectComponent, interfaces that require screen
     *    capture, such as systemMaterial, backgroundEffect, brightness, and blur, will not be able to capture
     *    the correct screen.
     *
     * @param { DistortionParam } distortionParam - The parameters of the nonlinear deformation effect.
     * @returns { VisualEffect } - Returns the VisualEffect with the nonlinear deformation effect attached.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    distortionCollapse(distortionParam: DistortionParam): VisualEffect;
  }

  /**
   * Detailed description of the material brightness parameters.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  interface BrightnessParam {

    /**
     * Linear coefficient for grayscale adjustment. The value range is [-1, 1]. Values less than -1 are treated as -1;
     * values greater than 1 are treated as 1. A larger value results in a stronger grayscale adjustment effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    rate : double;

    /**
     * Grayscale adjustment ratio. The value range is [-1, 1]. Values less than -1 are treated as -1;
     * values greater than 1 are treated as 1. A larger value results in a stronger grayscale adjustment effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    lightUpDegree : double;

    /**
     * Third-order coefficient for grayscale adjustment. The value range is [-1, 1]. Values less than -1 are treated
     * as -1; values greater than 1 are treated as 1. A larger value results in a stronger grayscale adjustment effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    cubicCoeff : double;

    /**
     * Second-order coefficient for grayscale adjustment. The value range is [-1, 1]. Values less than -1 are treated
     * as -1; values greater than 1 are treated as 1. A larger value results in a stronger grayscale adjustment effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    quadCoeff : double;

    /**
     * Base saturation for brightness. The value range is [0, 1]. Values less than 0 are treated as 0;
     * values greater than 1 are treated as 1. A larger value indicates a higher base saturation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    saturation : double;

    /**
     * Positive adjustment coefficients based on the base saturation. The value range for each number is [-1, 1].
     * Values less than -1 are treated as -1; values greater than 1 are treated as 1.
     * A larger value indicates higher saturation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    posRgb : [double, double, double];

    /**
     * Negative adjustment coefficients based on the base saturation. The value range for each number is [-1, 1].
     * Values less than -1 are treated as -1; values greater than 1 are treated as 1.
     * A larger value indicates lower saturation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    negRgb : [double, double, double];

    /**
     * Blending ratio for the brightness effect. The value range is [0, 1]. Values less than 0 are treated as 0;
     * values greater than 1 are treated as 1. A larger value indicates a weaker brightness effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    fraction : double;
  }

  /**
   * The parameters of heat distortion effect.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface HeatDistortionEffectParam {

    /**
     * The intensity of the heat distortion.
     * The value range is [0, 1], and values outside the range will be clamped during implementation.
     * 0 means no distortion, and 1 represents the maximum distortion level.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    intensity: double;

    /**
     * The noise scale of the heat distortion, controlling the fineness of the noise texture.
     * The value range is [0.1, 5.0], and values outside the range will be clamped during implementation.
     * A larger value results in a finer noise texture.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    noiseScale: double;

    /**
     * The rise weight of the heat distortion, controlling the rising speed of bubbles.
     * The value range is [0, 1], and values outside the range will be clamped during implementation.
     * A larger value results in more obvious upward movement.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    riseWeight: double;

    /**
     * The animation progress of the heat distortion.
     * The value range is [0, 1], and values outside the range will be clamped during implementation.
     * 0 corresponds to the start of the animation, and 1 corresponds to the end of the animation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    progress: double;
  }

  /**
   * The parameters of blur bubbles rise effect.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface BlurBubblesRiseEffectParam {

    /**
     * The Gaussian blur intensity of the blur bubbles rise effect.
     * The value range is [0, 1], and values outside the range will be clamped during implementation.
     * 0 means no blur, and 1 represents the maximum blur level.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    blurIntensity: double;

    /**
     * The mixing strength between the original and blurred images.
     * The value range is [0, 1], and values outside the range will be clamped during implementation.
     * 0 corresponds to the original image, and 1 corresponds to the blurred image.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    mixStrength: double;

    /**
     * The animation progress of the blur bubbles rise effect.
     * The value range is [0, 1], and values outside the range will be clamped during implementation.
     * 0 corresponds to the start of the animation, and 1 corresponds to the end of the animation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    progress: double;

    /**
     * The mask image for the blur bubbles rise effect, controlling the blur bubbles area.
     * The masked area has a blur effect, while the unmasked area has no blur effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    maskImage: image.PixelMap;
  }

  /**
   * Material effect parameters, used to control the display properties of the material such as
   * refraction, reflection, perturbation, and overlay color.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  interface LiquidMaterialEffectParam {

    /**
     * Whether to enable the material effect. true means enabled, false means disabled.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    enable : boolean;

    /**
     * The perturbation effect progress. The value range is [0, 1]. Values less than 0 are treated as 0;
     * values greater than 1 are treated as 1. 0 indicates the start of perturbation, and 1 indicates the end.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    distortProgress : double;

    /**
     * The perturbation effect coefficient. The value must be greater than or equal to 0.
     * Values less than 0 indicate no perturbation effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    distortFactor : double;

    /**
     * The ripple effect progress. The value must be greater than or equal to 0.
     * Values less than 0 indicate no ripple effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    rippleProgress : double;

    /**
     * The positions where the ripple effect is applied. Pass this parameter when you need to trigger ripple effects
     * at multiple specified positions simultaneously. If not passed, there are no ripple positions by default,
     * and the ripple effect will not take effect. Each position in the array contains x and y dimensions,
     * using normalized coordinates where [0, 0] represents the top-left corner and [1, 1] represents
     * the bottom-right corner. A maximum of 10 position coordinates are supported; exceeding this will
     * make the entire parameter invalid.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    ripplePosition?: Array<[double, double]>;

    /**
     * The refraction coefficient. The value range is [0, 10]. Values less than 0 are treated as 0;
     * values greater than 10 are treated as 10. A value of 0 means no refraction effect;
     * a larger value indicates stronger refraction.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    refractionFactor : double;

    /**
     * The reflection coefficient. The value range is [0, 10]. Values less than 0 are treated as 0;
     * values greater than 10 are treated as 10. A value of 0 means no reflection effect;
     * a larger value indicates stronger reflection.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    reflectionFactor : double;

    /**
     * The material coefficient. The value range is [0, 1]. Values less than 0 are treated as 0;
     * values greater than 1 are treated as 1. A value of 0 means no material effect and the overlay color
     * is used for filling; a larger value indicates a more obvious material effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    materialFactor : double;

    /**
     * The overlay color of the material, where the four variables correspond to RGBA respectively.
     * The value range for each is [0, 1]. Values less than 0 are treated as 0; values greater than 1 are treated as 1.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    tintColor : [double, double, double, double];
  }

  /**
   * Blender type, used to describe the blending effect.
   *
   * @unionmember { BrightnessBlender } Brightness blender
   * @unionmember { HdrBrightnessBlender } HDR-enabled brightness blender
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  type Blender = BrightnessBlender | HdrBrightnessBlender;

  /**
   * Blender type, used to describe the blending effect.
   *
   * @unionmember { BrightnessBlender } Brightness blender
   * @unionmember { HdrBrightnessBlender } HDR-enabled brightness blender [since 20]
   * @unionmember { HdrDarkenBlender } HDR-adaptive darken blender [since 26.0.0]
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   */
  type Blender = BrightnessBlender | HdrBrightnessBlender | HdrDarkenBlender;

  /**
   * Brightness blender, used to add a brightness effect to a specified component.
   * Before calling BrightnessBlender, you need to first create a BrightnessBlender instance
   * through createBrightnessBlender.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface BrightnessBlender {

    /**
     * Third-order coefficient for grayscale adjustment. The value range is [-20, 20].
     * Values outside the range will be clamped during implementation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    cubicRate: double;

    /**
     * Second-order coefficient for grayscale adjustment. The value range is [-20, 20].
     * Values outside the range will be clamped during implementation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    quadraticRate: double;

    /**
     * Linear coefficient for grayscale adjustment. The value range is [-20, 20].
     * Values outside the range will be clamped during implementation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    linearRate: double;

    /**
     * Grayscale adjustment ratio. The value range is [-20, 20].
     * Values outside the range will be clamped during implementation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    degree: double;

    /**
     * Base saturation for brightness. The value range is [0, 20].
     * Values outside the range will be clamped during implementation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    saturation: double;

    /**
     * Positive RGB adjustment coefficients based on the base saturation. The value range for each number is [-20, 20].
     * Values outside the range will be clamped during implementation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    positiveCoefficient: [double, double, double];

    /**
     * Negative RGB adjustment coefficients based on the base saturation. The value range for each number is [-20, 20].
     * Values outside the range will be clamped during implementation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    negativeCoefficient: [double, double, double];

    /**
     * Blending ratio for the brightness effect. The value range is [0, 1].
     * Values outside the range will be clamped during implementation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fraction: double;
  }

  /**
   * HDR-enabled brightness blender (inherited from BrightnessBlender), used to add a brightness effect
   * to a specified component. Before calling HdrBrightnessBlender, you need to first create an
   * HdrBrightnessBlender instance through createHdrBrightnessBlender.
   * The parameters of this blender can be referenced from BrightnessBlender.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface HdrBrightnessBlender extends BrightnessBlender {  }

  /**
   * HDR-adaptive darken blender, used to add a darken effect to a specified component.
   * Before calling HdrDarkenBlender, you need to first create an HdrDarkenBlender instance
   * through createHdrDarkenBlender.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface HdrDarkenBlender {

    /**
     * HDR brightness ratio. The value range is [1.0, the maximum brightness ratio supported by the current device].
     * Values less than 1.0 are treated as 1.0; when the value is equal to 1.0, it represents the original brightness
     * of the component; values exceeding the maximum supported brightness ratio are treated as the maximum ratio.
     * The maximum supported brightness ratio = device maximum brightness / device default brightness.
     * Device maximum brightness can be obtained via hdc command: hdc shell param get const.display.brightness.max
     * Device default brightness can be obtained via hdc command: hdc shell param get const.display.brightness.default
     *
     * @property { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    hdrBrightnessRatio: double;

    /**
     * Converts RGB colors to grayscale values. The weights of the grayscale conversion formula can be
     * automatically adjusted according to the current color gamut, using different weight calculation methods
     * under different color gamuts; suitable for sRGB and other standard color gamut scenarios.
     * Pass this parameter when you need to customize grayscale conversion weights based on a specific color gamut
     * or visual effect. All three components have no boundary limits.
     * The default value is the standard grayscale weights [0.299, 0.587, 0.114].
     *
     * @property { ?[double, double, double] }
     * @default [0.299, 0.587, 0.114]
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    grayscaleFactor?: [double, double, double];
  }

  /**
   * RGBA color description.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface Color {

    /**
     * Red component of the color.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    red: double;

    /**
     * Green component of the color.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    green: double;

    /**
     * Blue component of the color.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    blue: double;

    /**
     * Alpha component of the color (transparency).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    alpha: double;
  }

  /**
   * Mask effect class, used as input for Filter and VisualEffect. Different types of Mask provide different
   * grayscale distribution patterns, such as wave ring masks, radial gradients, pixel map masks, etc.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  class Mask {

    /**
     * Creates a wave ring mask Mask instance by inputting the center position, radius, and width of the wave ring.
     *
     * @param { common2D.Point } center - Sets the position of the wave ring center on the component.
     *     [0, 0] is the top-left corner of the component, [1, 1] is the bottom-right corner of the component.
     *     The value range is [-10, 10], and values outside the range will be clamped during implementation.
     * @param { double } radius - Sets the radius of the wave ring, using normalized values.
     *     When the radius is 1, the wave ring radius equals the component height.
     *     The value range is [0, 10], and values outside the range will be clamped during implementation.
     * @param { double } width - Sets the width of the wave ring, using normalized values.
     *     When the width is 1, the wave ring width equals the component height.
     *     The value range is [0, 10], and values outside the range will be clamped during implementation.
     * @param { double } [offset] - Sets the offset of the wave peak position.
     *     The default value is 0, meaning the wave peak is at the exact center of the wave ring;
     *     -1.0 means the wave peak is at the innermost edge of the wave ring;
     *     1.0 means the wave peak is at the outermost edge of the wave ring.
     *     The value range is [-1, 1], and values outside the range will be clamped during implementation.
     * @returns { Mask } - Returns a Mask with the wave ring mask effect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createRippleMask(center: common2D.Point, radius: double, width: double, offset?: double): Mask;

    /**
     * Creates a Mask instance with scaling effect by inputting a pixelMap, the area of the pixelMap to be drawn,
     * the drawing area of the mounted node, and the color to fill outside the drawing area.
     *
     * @param { image.PixelMap } pixelMap - The PixelMap instance created by the image module.
     *     It can be obtained through image decoding or direct creation.
     * @param { common2D.Rect } srcRect - The area of the pixelMap to be drawn.
     *     The leftmost and topmost positions correspond to 0, and the rightmost and bottommost
     *     positions correspond to 1.
     *     right must be greater than left, and bottom must be greater than top; otherwise the
     *     effect will not take effect.
     * @param { common2D.Rect } dstRect - The drawing area of the pixelMap on the node where the mask is mounted.
     *     The leftmost and topmost positions of the node correspond to 0, and the rightmost and bottommost positions
     *     correspond to 1. right must be greater than left, and bottom must be greater than top;
     *     otherwise the effect will not take effect.
     * @param { Color } [fillColor] - The color to fill the area outside the pixelMap drawing area on the node.
     *     Each component range is [0, 1], default is transparent color. Values less than 0 are treated as 0,
     *     and values greater than 1 are treated as 1.
     * @returns { Mask } - Returns a Mask instance created based on the pixelMap.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createPixelMapMask(pixelMap: image.PixelMap, srcRect: common2D.Rect, dstRect: common2D.Rect,
      fillColor?: Color): Mask;

    /**
     * Creates a Mask instance by inputting a pixelMap. This interface does not perform scaling on the input pixelMap.
     *
     * @param { image.PixelMap } pixelMap - The PixelMap instance created by the image module.
     *     It can be obtained through image decoding or direct creation.
     * @returns { Mask } - Returns a Mask with the pixelMap.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    static createPixelMapMask(pixelMap: image.PixelMap): Mask;

    /**
     * Creates an elliptical mask Mask instance by inputting the center position of the ellipse,
     * the semi-major and semi-minor axes, and shape parameters.
     *
     * @param { common2D.Point } center - Sets the center point of the ellipse. [0, 0] is the top-left corner
     *     of the component, [1, 1] is the bottom-right corner of the component.
     *     The value range is [-10, 10], floating-point values are supported, and values outside the range will be
     *     clamped during implementation.
     * @param { double } radiusX - Sets the semi-major axis of the ellipse. When the radius is 1, it equals
     *     the component height. The value range is [0, 10], floating-point values are supported,
     *     and values outside the range will be clamped during implementation.
     * @param { double } radiusY - Sets the semi-minor axis of the ellipse. When the radius is 1, it equals
     *     the component height. The value range is [0, 10], floating-point values are supported,
     *     and values outside the range will be clamped during implementation.
     * @param { Array<[double, double]> } gradients - The binary arrays in the array represent gradients:
     *     [RGBA color, position]. The RGBA color uses the same value for all four channels, which can be regarded
     *     as a grayscale value; position represents the distribution position of the RGBA color along the radial
     *     direction outward. Both RGBA color and position have a value range of [0, 1], floating-point values are
     *     supported, values less than 0 are treated as 0, and values greater than 1 are treated as 1.
     *     The position parameter values must be strictly increasing, the number of binary arrays in the Array must be
     *     greater than or equal to 2, and the elements in the binary arrays must not be empty;
     *     otherwise the elliptical distribution effect will not take effect.
     * @returns { Mask } - Returns a grayscale Mask with the elliptical radial distribution effect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createRadialGradientMask(center: common2D.Point, radiusX: double, radiusY: double,
      gradients: Array<[double, double]>): Mask;

    /**
     * Creates a single-wave mask Mask instance by inputting the wave source center position and single-wave parameters.
     *
     * @param { common2D.Point } center - Sets the center point of the single-wave source. [0, 0] is the top-left
     *     corner of the component, [1, 1] is the bottom-right corner of the component.
     *     The value range is [-10, 10], floating-point values are supported, and values outside the range will be
     *     clamped during implementation.
     * @param { double } width - Sets the width of the single-wave ring.
     *     The value range is [0, 5], floating-point values are supported, and values outside the range will be
     *     clamped during implementation.
     * @param { double } propagationRadius - Sets the outer diffusion radius of the single-wave ring.
     *     The value range is [0, 10], floating-point values are supported, and values outside the range will be
     *     clamped during implementation.
     * @param { double } blurRadius - Sets the blur outer radius of the single-wave ring. A blur radius of 0 results
     *     in a solid-edge ring; otherwise, it is a soft-edge ring.
     *     The value range is [0, 5], floating-point values are supported, and values outside the range will be
     *     clamped during implementation.
     * @param { double } [turbulenceStrength] - Sets the turbulence intensity of the single-wave ring.
     *     The default value is 0; an intensity of 0 results in a regular ring, otherwise the ring edges will be
     *     turbulently distorted. The value range is [-1, 1], floating-point values are supported,
     *     and values outside the range will be clamped during implementation.
     * @returns { Mask } - Returns a grayscale Mask with a single wave shape.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createWaveGradientMask(center: common2D.Point, width: double, propagationRadius: double,
      blurRadius: double, turbulenceStrength?: double): Mask;

    /**
     * Creates and sets a Mask instance indicating whether to use blur caching. This Mask instance is specifically
     * designed for the useEffectMask parameter of the liquidMaterial method, used to declare whether the material
     * effect uses blur caching to improve performance. When this Mask instance is used with other Filter or
     * VisualEffect methods, the useEffect property may not take effect.
     *
     * @param { boolean } useEffect - Flag indicating whether to use blur caching. A value of true means use,
     *     and the blur effect will be displayed normally; a value of false means not use,
     *     and the blur effect will not be displayed.
     * @returns { Mask } - Returns a Mask instance that indicates whether to use blur caching.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    static createUseEffectMask(useEffect: boolean): Mask;
  }

  /**
   * Creates a Filter instance for adding multiple filter effects to a component.
   *
   * @returns { Filter } Returns a Filter instance, which supports adding multiple filter effects.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 23 static
   */
  function createFilter(): Filter;

  /**
   * Creates a VisualEffect instance for adding multiple VisualEffect effects to a component.
   *
   * @returns { VisualEffect } Returns a VisualEffect instance, which supports adding multiple VisualEffect effects.
   * @syscap SystemCapability.Graphics.Drawing
   * @form [since 24]
   * @since 12 dynamic
   * @since 23 static
   */
  function createEffect(): VisualEffect;

  /**
   * Creates a BrightnessBlender instance for adding a brightness effect to a component.
   *
   * @param { BrightnessBlenderParam } param - The brightness blender parameters, including grayscale adjustment
   *     coefficients, saturation, blending ratio, and other configuration items.
   * @returns { BrightnessBlender } Returns the brightness blender.
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  function createBrightnessBlender(param: BrightnessBlenderParam): BrightnessBlender;

  /**
   * Creates an HdrBrightnessBlender instance for adding an HDR-enabled brightness effect to a component.
   *
   * @param { BrightnessBlenderParam } param - The brightness blender parameters, including grayscale adjustment
     *     coefficients, saturation, blending ratio, and other configuration items, used to configure
     *     the brightness effect.
   * @returns { HdrBrightnessBlender } Returns the HDR-enabled brightness blender.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function createHdrBrightnessBlender(param: BrightnessBlenderParam): HdrBrightnessBlender;

  /**
   * Creates an HdrDarkenBlender instance for HDR layer darken blending effect.
   *
   * @param { double } hdrBrightnessRatio - HDR brightness ratio. The value range is [1.0, the maximum brightness ratio
   *     supported by the current device]. Values less than 1.0 are treated as 1.0; when the value is equal to 1.0,
   *     it represents the original brightness of the component; values exceeding the maximum supported brightness ratio
   *     are treated as the maximum ratio.
   *     The maximum supported brightness ratio = device maximum brightness / device default brightness.
    *     Device maximum brightness can be obtained via hdc command: hdc shell param get const.display.brightness.max
     *     Device default brightness can be obtained via hdc command:
     *     hdc shell param get const.display.brightness.default
   * @param { [double, double, double] } [grayscaleFactor] - Converts RGB colors to grayscale values.
   *     The weights of the grayscale conversion formula can be automatically adjusted according to the current
   *     color gamut, using different weight calculation methods under different color gamuts;
   *     suitable for sRGB and other standard color gamut scenarios. Pass this parameter when you need to customize
   *     grayscale conversion weights based on a specific color gamut or visual effect.
   *     All three components have no boundary limits. The default value is the standard grayscale weights
   *     [0.299, 0.587, 0.114].
   * @returns { HdrDarkenBlender } Returns the HDR darken blender, used to add a darken effect to a specified component.
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function createHdrDarkenBlender(hdrBrightnessRatio: double,
    grayscaleFactor?: [double, double, double]): HdrDarkenBlender;
}

/**
 * Parameter list of BrightnessBlender, used to configure various properties of the brightness effect,
 * including grayscale adjustment coefficients, saturation, and blending ratio parameters.
 *
 * @syscap SystemCapability.Graphics.Drawing
 * @systemapi
 * @form [since 22]
 * @since 12 dynamic
 * @since 23 static
 */
export declare interface BrightnessBlenderParam {

  /**
   * Third-order coefficient for grayscale adjustment. The value range is [-20, 20].
   * Values outside the range will be clamped during implementation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  cubicRate: double;

  /**
   * Second-order coefficient for grayscale adjustment. The value range is [-20, 20].
   * Values outside the range will be clamped during implementation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  quadraticRate: double;

  /**
   * Linear coefficient for grayscale adjustment. The value range is [-20, 20].
   * Values outside the range will be clamped during implementation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  linearRate: double;

  /**
   * Grayscale adjustment ratio. The value range is [-20, 20].
   * Values outside the range will be clamped during implementation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  degree: double;

  /**
   * Base saturation for brightness. The value range is [0, 20].
   * Values outside the range will be clamped during implementation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  saturation: double;

  /**
   * Positive RGB adjustment coefficients based on the base saturation. The value range for each number is [-20, 20].
   * Values outside the range will be clamped during implementation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  positiveCoefficient: [double, double, double];

  /**
   * Negative RGB adjustment coefficients based on the base saturation. The value range for each number is [-20, 20].
   * Values outside the range will be clamped during implementation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  negativeCoefficient: [double, double, double];

  /**
   * Blending ratio for the brightness effect. The value range is [0, 1].
   * Values outside the range will be clamped during implementation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  fraction: double;
}

export default uiEffect;