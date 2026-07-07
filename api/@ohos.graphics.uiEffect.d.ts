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
 * The uiEffect module provides basic capabilities to apply an effect, for example, blur, pixel stretch, and brightness,
 * to a component. Effects are classified into filters and visual effects. Effects of the same category can be cascaded
 * in an effect instance of the corresponding category. In actual development, the blur effect can be used for
 * background blurring, and the brightness effect can be used for screen-on display.
 *
 * - [Filter](docroot://reference/apis-arkgraphics2d/js-apis-uiEffect.md#filter): applies a filter to a component.
 * - [VisualEffect](docroot://reference/apis-arkgraphics2d/js-apis-uiEffect.md#visualeffect): applies a visual effect to
 * a component.
 *
 * @syscap SystemCapability.Graphics.Drawing
 * @form [since 22]
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace uiEffect {

   /**
     * A class that can apply a filter to a component. Before calling any API in **Filter**, you must use
     * [createFilter](js-apis-uiEffect.md#uieffectcreatefilter) to create a **Filter** instance.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 23 static
   */
  interface Filter {
    /**
     * Applies the pixel stretch effect onto the component.
     *
     * @param { Array<double> } stretchSizes - Ratio based on which the pixels grow towards the top, bottom, left,
     *     and right edges. The value range is [-1, 1]. A positive value indicates outward stretching, and the upper,
     *     lower, left, and right edges are filled with edge pixels of the specified original image ratio. A negative
     *     value indicates inward stretching, but the image size remains unchanged. The values for the four directions
     *     must be all positive or all negative.
     * @param { TileMode } tileMode - Pixel tiling mode for pixel stretch.
     * @returns { Filter } **Filter** instance with the pixel stretch effect.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    pixelStretch(stretchSizes: Array<double>, tileMode: TileMode): Filter;

    /**
     * Applies the blur effect to the component.
     *
     * @param { double } blurRadius - Blur radius. The value must be greater than or equal to 0. The larger the radius
     *     is, the more blurred the content is. If the value is 0, the content is not blurred.
     * @returns { Filter } Filter instance with the blur effect.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 23 static
     */
    blur(blurRadius: double): Filter;

    /**
     * Applies the ripple effect onto the component.
     *
     * @param { double } progress - Progress of the ripple. The value range is [0, 1]. The closer the value is to 1,
     *     the more fully the ripple effect is displayed. If a value outside this range is provided, no ripple effect
     *     will be displayed.
     * @param { int } waveCount - Number of ripples that form when the ripple effect. The value range is [1, 3].
     *     The value must be an integer. Ripples will not be displayed if a floating point number or a value outside
     *     this range is provided.
     * @param { double } x - X coordinate on the screen that marks the center of the ripple when the ripple effect is
     *     initially triggered. The ripples are normalized across the screen, with the coordinates of the upper left
     *     corner set to (0, 0) and the upper right corner set to (1, 0). A negative number indicates that the center
     *     of the ripple is located to the left of the screen's center.
     * @param { double } y - Y coordinate on the screen that marks the center of the ripple when the ripple effect is
     *     initially triggered. The ripples are normalized across the screen, with the coordinates of the upper left
     *     corner set to (0, 0) and the lower left corner set to (0, 1). A negative number indicates that the center
     *     of the ripple is located above the screen's center.
     * @param { WaterRippleMode } rippleMode - Scene mode of the ripple effect.
     * @returns { Filter } - **Filter** instance with the ripple effect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    waterRipple(progress: double, waveCount: int, x: double, y: double, rippleMode: WaterRippleMode): Filter;

    /**
     * Applies fly-in and fly-out animations onto the component.
     *
     * @param { double } degree - Degree of control over deformation of the fly-in and fly-out animations. The value
     *     range is [0, 1]. A value closer to 1 results in more obvious deformation. If a value outside this range is
     *     provided, no fly-in and fly-out animations will be displayed.
     * @param { FlyMode } flyMode - Scene mode of the fly-in and fly-out animations. **BOTTOM** means that the fly-in
     *     and fly-out animations occur from the bottom of the screen, and **TOP** means that the fly-in and fly-out
     *     animations occur from the top of the screen.
     * @returns { Filter } - Returns a filter with the fly-in and fly-out animations.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    flyInFlyOutEffect(degree: double, flyMode: FlyMode): Filter;

    /**
     * Applies the lens distortion effect onto the component.
     *
     * @param { double } distortionK - Distortion coefficient, indicating the degree of lens distortion. The value
     *     range is [-1, 1]. A value less than -1 evaluates to the value **-1**. A value greater than 1 evaluates to
     *     the value **1**.
     * @returns { Filter } - Returns a filter with the lens distortion effect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    distort(distortionK: double): Filter;

    /**
     * Applies a radial linear gradient blur effect to the component.
     *
     * @param { double } radius - Blur radius. A larger value indicates a higher blur degree. The value range is
     *     [0, 128]. A zero blur radius disables the blur effect. Negative values default to **0**, while values
     *     above **128** cap at **128**.
     * @param { LinearGradientBlurOptions } gradientParam - Linear gradient parameters, which include
     *     **fractionStops** and **direction**.
     * @returns { Filter } - Returns a filter with the radial linear gradient blur effect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    radiusGradientBlur(radius: double, gradientParam: LinearGradientBlurOptions): Filter;

    /**
     * Applies the Bezier curve deformation effect onto a component. This effect applies a closed Bezier curve to the
     * layer boundary to precisely distort and adjust the shape of an image. A Bezier curve consists of four segments
     * that are connected in sequence. Each segment contains one vertex and two tangents.
     *
     * @param { Array<common2D.Point> } controlPoints - 12 Bezier deformation control points. Changing the positions
     *     of these control points modifies the shape of the curve forming the edges, thus distorting the image. The
     *     control point coordinates are in the 0-1 coordinate system, and the coordinate values can be greater than
     *     1 or less than 0.
     * @returns { Filter } - Returns a filter with the Bezier curve deformation effect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    bezierWarp(controlPoints: Array<common2D.Point>): Filter;

    /**
     * Applies a 3D lighting effect to a component.
     *
     * @param { common2D.Point3d } lightPosition - Position of the light in the component space. [-1, -1, 0]
     *     indicates the upper left corner of the component, and [1, 1, 0] indicates the lower right corner of the
     *     component. The larger the z-axis component, the farther the light source is from the component plane and
     *     the larger the illumination area. The value range of the x component is [-10, 10], the value range of the
     *     y component is [-10, 10], and the value range of the z component is [0, 10]. If the value is out of the
     *     range, it will be automatically truncated.
     * @param { common2D.Color } lightColor - Light color. The value range of each element is [0, 1]. If the value is
     *     out of the range, it will be automatically truncated.
     * @param { double } lightIntensity - Light strength. The value range is [0, 1]. A larger value indicates a
     *     brighter light source. If the value is out of the range, it will be automatically truncated.
     * @param { Mask } [displacementMap] - This parameter is reserved for future use.
     * @returns { Filter } - Returns a filter with the light effect on the content.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    contentLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: double,
      displacementMap?: Mask): Filter;

    /**
     * Applies a color gradient effect to a component.
     *
     * @param { Array<Color> } colors - Color array, which is a gradient of multiple colors. The array length ranges
     *     from 0 to 12. The value of each color must be greater than or equal to 0. If the array length is 0 or
     *     greater than 12, or the lengths of the **colors**, **positions**, and **strengths** arrays are
     *     inconsistent, no color gradient effect is displayed.
     * @param { Array<common2D.Point> } positions - Position array, which is the positions of colors. The array length
     *     ranges from 0 to 12. If the array length is 0 or greater than 12, or the lengths of the **colors**,
     *     **positions**, and **strengths** arrays are inconsistent, no color gradient effect is displayed.
     * @param { Array<double> } strengths - Strength array, which is the diffusion strengths of colors. The array
     *     length ranges from 0 to 12. The value of each strength must be greater than or equal to 0. If the array
     *     length is 0 or greater than 12, or the lengths of the **colors**, **positions**, and **strengths** arrays
     *     are inconsistent, no color gradient effect is displayed.
     * @param { Mask } [alphaMask] - Mask alpha, which is the alpha display mask of colors. If this parameter is not
     *     set, the color gradient effect is applied to all component content by default.
     * @returns { Filter } - Returns a filter with the color gradient effect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<double>,
        alphaMask?: Mask): Filter;

    /**
     * Detects the edge of the component content and adds an edge highlight effect.
     *
     * @param { double } alpha - Specifies the highlight alpha value of the edge. A larger value indicates more
     *     obvious edges. The value range is [0, 1]. The value **0** disables the edge highlight effect. Negative
     *     values default to **0**, while values above **1** cap at **1**.
     * @param { Color } [color] - Highlight color of the edge. If this parameter is not set, the original color of
     *     the component content is used by default. If there is a value, the specified color is used. If this
     *     parameter is set to a value other than NULL, the alpha value in **Color** does not take effect, and only
     *     the RGB value takes effect.
     * @param { Mask } [mask] - Specifies the highlight strength of the edge. If this parameter is not set, the edge
     *     highlight effect is applied to all component content by default.
     * @param { boolean } [bloom] - Specifies whether the edge glows. **true** (default): both the edge highlight and
     *     glow effects are applied; **false**: only the edge highlight effect is applied. If the image size is less
     *     than 16 x 16, the edge highlight effect is applied by default, and the glow effect is not applied. In this
     *     case, this parameter does not take effect.
     * @returns { Filter } - Returns a filter with the edge highlight and glow effects.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    edgeLight(alpha: double, color?: Color, mask?: Mask, bloom?: boolean): Filter;

    /**
     * Applies a distortion effect to a component.
     *
     * @param { Mask } displacementMap - Distortion degree. It is determined by the product of this parameter and
     *     **factor**.
     * @param { [double, double] } [factor] - Horizontal and vertical distortion degree factors. A larger absolute
     *     value indicates a more obvious distortion degree. The recommended value range is [-10.0, 10.0]. If this
     *     parameter is not set, the default value **1.0** is used. If this parameter is set to **0**, no distortion
     *     effect is applied. It is determined by the product of this parameter and **mask**.
     * @returns { Filter } - Returns a filter with the distortion effect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    displacementDistort(displacementMap: Mask, factor?: [double, double]): Filter;

    /**
     * Applies a dispersion effect to a component, which is controlled by the displacement map.
     *
     * @param { Mask } dispersionMap - Displacement map, which is used to control the dispersion strength, direction,
     *     and alpha value. You are advised to use the displacement map of the **PixelMapMask** type.
     * @param { double } alpha - Alpha value of dispersion. A smaller value makes the object more transparent. The
     *     value range is [0, 1.0]. The value **0** means the dispersion effect does not take effect. Negative values
     *     default to **0**, while values above **1.0** cap at **1.0**.
     * @param { [double, double] } [rFactor] - Basic dispersion offset of the R channel in the X/Y direction. A larger
     *     value indicates a more obvious red dispersion effect. The value range in each direction is [-1.0, 1.0]. An
     *     offset less than **-1.0** evaluates to the value **-1.0**. A value greater than **1.0** evaluates to the
     *     value **1.0**.
     * @param { [double, double] } [gFactor] - Basic dispersion offset of the G channel in the X/Y direction. A larger
     *     value indicates a more obvious green dispersion effect. The value range is the same as that of **rFactor**.
     * @param { [double, double] } [bFactor] - Basic dispersion offset of the B channel in the X/Y direction. A larger
     *     value indicates a more obvious blue dispersion effect. The value range is the same as that of **rFactor**.
     * @returns { Filter } - Returns the filter that mounts the dispersion effect controlled by the displacement map.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    maskDispersion(dispersionMap: Mask, alpha: double, rFactor?: [double, double], gFactor?: [double, double],
      bFactor?: [double, double]): Filter;

    /**
     * Applies a high dynamic range (HDR) brightness enhancement filter to the component.
     *
     * @permission ohos.permission.HDR_BRIGHTNESS [since 24]
     * @param { double } ratio - The brightness multiplier ratio (1.0 = original, >1.0 = brighter).
     * @returns { Filter } - Returns hdr brightness Filter.
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
     * Provides a gradient blur effect based on
     * [Mask](docroot://reference/apis-arkgraphics2d/js-apis-uiEffect-sys.md#mask20) for the component content.
     *
     * @param { double } radius - Maximum blur radius. A larger value indicates a higher blur degree. The value range
     *     is [0, 128]. A zero blur radius disables the blur effect. Negative values default to **0**, while values
     *     above **128** cap at **128**.
     * @param { Mask } radiusMap - **Mask** object that indicates the blur degree.
     * @returns { Filter } - Returns the filter object of the current effect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    variableRadiusBlur(radius: double, radiusMap: Mask): Filter;

    /**
     * Provides a lighting effect based on
     * [Mask](docroot://reference/apis-arkgraphics2d/js-apis-uiEffect-sys.md#mask20) and parallel light for the
     * component content.
     *
     * @param { common2D.Point3d } direction - Direction of the directional light.
     * @param { Color } color - Light color.
     * @param { double } intensity - Light intensity. The value must be a non-negative number.
     * @param { Mask } [mask] - Displacement map, which is used to describe the three-dimensional details of the
     *     two-dimensional image surface. The normal map or height map is used to enhance the local details and
     *     lighting reflection effect. If the input is a height map, the **factor** parameter must be used together.
     *     By default, this parameter is left empty, and the lighting effect of a plane without details is displayed
     *     globally.
     * @param { double } [factor] - Sampling scaling coefficient. The default value is **null**, indicating that
     *     **mask** is set to the normal map for sampling. If the value is not **null**, **mask** is set to the height
     *     map for sampling. The actual height value is the product of the sampling value of **mask** and **factor**.
     * @returns { Filter } - Returns the filter that mounts the lighting effect controlled by the displacement map.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    directionLight(direction: common2D.Point3d, color: Color, intensity: double, mask?: Mask, factor?: double): Filter;

    /**
     * Provides a transition effect based on
     * [Mask](docroot://reference/apis-arkgraphics2d/js-apis-uiEffect-sys.md#mask20) for the component content. You
     * are not advised to use this effect when the screen size changes, for example, rotating the screen or opening
     * and closing the foldable screen.
     *
     * @param { Mask } alphaMask - Transition effect area specified by the mask.
     * @param { double } [factor] - Transition coefficient. The value range is [0.0, 1.0] and defaults to **1.0**. A
     *     larger value of **factor** indicates that the image is closer to the page after transition. If the value is
     *     out of the range, the value is automatically truncated to [0.0, 1.0].
     * @param { boolean } [inverse] - Whether to enable reverse transition. **true** means yes and **false** (default)
     *     means no.
     * @returns { Filter } - Returns a filter with the transition effect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    maskTransition(alphaMask: Mask, factor?: double, inverse?: boolean): Filter;

    /**
     * Applies heat distortion effect to simulate hot air distortion.
     * This effect creates a wavy distortion similar to heat shimmer or hot air rising.
     *
     * @param { HeatDistortionEffectParam } param - the heat distortion effect parameters.
     * @returns { Filter } - Returns the heat distortion Filter.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    heatDistortion(param: HeatDistortionEffectParam): Filter;

    /**
     * Applies blur bubbles rise effect to simulate rising bubbles with blur.
     * This effect creates a dreamy, bubbly distortion similar to rising bubbles in liquid.
     *
     * @param { BlurBubblesRiseEffectParam } param - the blur bubbles rise effect parameters.
     * @returns { Filter } - Returns the blur bubbles rise Filter.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    blurBubblesRise(param: BlurBubblesRiseEffectParam): Filter;
  }

   /**
    * Enumerates the pixel tiling modes.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum TileMode {
    /**
      * Clamp.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    CLAMP = 0,

    /**
      * Repeat.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    REPEAT = 1,

    /**
      * Mirror.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MIRROR = 2,

    /**
      * Decal.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DECAL = 3,
  }

   /**
    * Enumerates the scene modes of the ripple effect.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum WaterRippleMode {
    /**
      * A phone taps against a 2-in-1 device (receiver).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SMALL2MEDIUM_RECV = 0,

    /**
      * A phone taps against a 2-in-1 device (sender).
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SMALL2MEDIUM_SEND = 1,

    /**
      * A phone taps against another phone.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SMALL2SMALL = 2,

    /**
      * A 2-in-1 device shares data (keyboard and mouse) with other devices.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    MINI_RECV = 3,
  }

   /**
    * Enumerates the scene modes of fly-in and fly-out animations.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum FlyMode {

    /**
      * Fly-in and fly-out animations occur from the bottom of the screen.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BOTTOM = 0,

    /**
      * Fly-in and fly-out animations occur from the top of the screen.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TOP = 1,
  }

   /**
     * A class that can apply a visual effect to a component. Before calling any API in **VisualEffect**, you must
     * use [createEffect](js-apis-uiEffect.md#uieffectcreateeffect) to create a **VisualEffect** instance.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface VisualEffect {

    /**
     * Applies a blender to the component to change the background color of the component. The change effect is
     * determined by the input. Currently, only the brightness blender is supported.
     *
     * @param { BrightnessBlender } blender - Blender used to change the background color.
     * @returns { VisualEffect } Returns a **VisualEffect** object with the background color change effect.
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
     * @param { common2D.Point3d } lightPosition - 3D position of the light in the component space. [-1, -1, 0]
     *     indicates the upper left corner of the component, and [1, 1, 0] indicates the lower right corner of the
     *     component. The larger the z-axis component, the farther the light source is from the component plane and
     *     the larger the illumination area. The value range of the x component is [-10, 10], the value range of the
     *     y component is [-10, 10], and the value range of the z component is [0, 10]. If the value is out of the
     *     range, it will be automatically truncated.
     * @param { common2D.Color } lightColor - Light color. The value range of each element is [0, 1]. If the value is
     *     out of the range, it will be automatically truncated.
     * @param { double } lightIntensity - Light strength. The value range is [0, 1]. A larger value indicates a
     *     brighter light source. If the value is out of the range, it will be automatically truncated.
     * @param { double } borderWidth - Lighting width of the component border. The value range is [0.0, 30.0]. If the
     *     value is out of the range, it will be automatically truncated. The value **0.0** means that the component
     *     border is not lightened. A larger value indicates a wider lightened area.
     * @returns { VisualEffect } - Returns a **VisualEffect** object with the lighting effect on the border.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    borderLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: double,
      borderWidth: double): VisualEffect;

    /**
     * Applies a color gradient effect to a component.
     *
     * @param { Array<Color> } colors - Color array, which is used to implement multi-color gradient. The array
     *     length ranges from 0 to 12. Each color value is greater than or equal to 0. If the array length is 0 or
     *     greater than 12, or the lengths of the **colors**, **positions**, and **strengths** arrays are
     *     inconsistent, no color gradient effect is displayed.
     * @param { Array<common2D.Point> } positions - Position array, which is the positions of colors. The array
     *     length ranges from 0 to 12. If the array length is 0 or greater than 12, or the lengths of the **colors**,
     *     **positions**, and **strengths** arrays are inconsistent, no color gradient effect is displayed.
     * @param { Array<double> } strengths - Strength array, which is the strengths of colors. The array length ranges
     *     from 0 to 12. Each strength value is greater than or equal to 0. If the array length is 0 or greater than
     *     12, or the lengths of the **colors**, **positions**, and **strengths** arrays are inconsistent, no color
     *     gradient effect is displayed.
     * @param { Mask } [alphaMask] - Alpha of the mask corresponding to each color. If this parameter is not set, the
     *     alpha of the color gradient effect is determined only by the **colors** parameter.
     * @returns { VisualEffect } - Returns a **VisualEffect** object with the color gradient effect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<double>,
      alphaMask?: Mask): VisualEffect;

    /**
     * Applies a material effect to a component.
     *
     * @param { LiquidMaterialEffectParam } param - Relevant variables required for the material, which are used to
     *     control material display. This parameter includes material toggle, refraction coefficient, reflection
     *     coefficient, and distortion coefficient.
     * @param { Mask } useEffectMask - Whether to use the blur cache. A **Mask** instance created with
     *     **createUseEffectMask(true)** enables the blur cache; a **Mask** instance created with
     *     **createUseEffectMask(false)** disables the blur cache.
     * @param { Mask } [distortMask] - Distortion texture required for the material distortion effect, which is
     *     determined by the image texture used for creating the **Mask** instance with **pixelMap**. When the
     *     distortion coefficient of the material is not **0**, a texture must be preset for material distortion;
     *     otherwise, no distortion effect is applied. When the distortion coefficient of the material is **0** or
     *     this parameter is not specified, no distortion effect is applied.
     * @param { BrightnessParam } [brightnessParam] - Adds a brightness effect to the material. The brightness effect
     *     is disabled by default.
     * @returns { VisualEffect } - Returns a **VisualEffect** object with the material effect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    liquidMaterial(param : LiquidMaterialEffectParam, useEffectMask: Mask, distortMask?: Mask,
      brightnessParam?: BrightnessParam): VisualEffect;

    /**
     * Sets distortion collapse effect.
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
     *    and the existing content on the canvas is drawn with deformation. When using this implementation in
     *    combination without the EffectComponent, interfaces that require screen capture, such as systemMaterial,
     *    backgroundEffect, brightness, and blur, will not be able to capture the correct screen.
     *
     * @param { DistortionParam } distortionParam - the distortion params of distortion effect.
     * @returns { VisualEffect } - Returns the VisualEffect that the current effect have been added.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    distortionCollapse(distortionParam: DistortionParam): VisualEffect;
  }

   /**
    * Parameters of the brightness blender.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  interface BrightnessParam {

    /**
      * Linear coefficient for grayscale adjustment. The value range is [-1, 1]. A value less than -1 evaluates to
      * -1, and a value greater than 1 evaluates to 1. A larger value indicates a stronger grayscale adjustment effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    rate : double;

    /**
      * Grayscale adjustment degree. The value range is [-1, 1]. A value less than -1 evaluates to -1, and a value
      * greater than 1 evaluates to 1. A larger value indicates a stronger grayscale adjustment effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    lightUpDegree : double;

    /**
      * Third-order coefficient for grayscale adjustment. The value range is [-1, 1]. A value less than -1 evaluates
      * to -1, and a value greater than 1 evaluates to 1. A larger value indicates a stronger grayscale adjustment
      * effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    cubicCoeff : double;

    /**
      * Second-order coefficient for grayscale adjustment. The value range is [-1, 1]. A value less than -1 evaluates
      * to -1, and a value greater than 1 evaluates to 1. A larger value indicates a stronger grayscale adjustment
      * effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    quadCoeff : double;

    /**
      * Reference saturation for brightness. The value range is [0, 1]. A value less than 0 evaluates to 0, and a
      * value greater than 1 evaluates to 1. A larger value indicates a higher reference saturation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    saturation : double;

    /**
      * Positive adjustment coefficient based on the reference saturation. The value range is [-1, 1]. A value less
      * than -1 evaluates to -1, and a value greater than 1 evaluates to 1. A larger value indicates a higher
      * saturation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    posRgb : [double, double, double];

    /**
      * Negative adjustment coefficient based on the reference saturation. The value range is [-1, 1]. A value less
      * than -1 evaluates to -1, and a value greater than 1 evaluates to 1. A larger value indicates a lower
      * saturation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    negRgb : [double, double, double];

    /**
      * Blending fraction for the brightness effect. The value range is [0, 1]. A value less than 0 evaluates to 0,
      * and a value greater than 1 evaluates to 1. A larger value indicates a weaker brightness effect.
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
     * Defines distortion intensity for heat distortion effect.
     * Value range [0, 1], and values outside the range will be clamped.
     * 0 means no distortion, and 1 represents the maximum distortion level.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    intensity: double;

    /**
     * Defines noise scale for heat distortion effect, controls the fineness of the noise texture.
     * Value range [0.1, 5.0], and values outside the range will be clamped.
     * The larger the value, the finer the noise texture.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    noiseScale: double;

    /**
     * Defines rise weight for heat distortion effect, controls the rising speed of bubbles.
     * Value range [0, 1], and values outside the range will be clamped.
     * The larger the value, the more obvious the upward movement.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    riseWeight: double;

    /**
     * Defines animation progress for heat distortion effect.
     * Value range [0, 1], and values outside the range will be clamped.
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
     * Defines gaussian blur intensity for blur bubbles rise effect.
     * Value range [0, 1], and values outside the range will be clamped.
     * 0 means no blur, and 1 represents the maximum blur level.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    blurIntensity: double;

    /**
     * Defines mix strength between original and blurred images.
     * Value range [0, 1], and values outside the range will be clamped.
     * 0 corresponds to the original image, and 1 corresponds to the blurred image.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    mixStrength: double;

    /**
     * Defines animation progress for blur bubbles rise effect.
     * Value range [0, 1], and values outside the range will be clamped.
     * 0 corresponds to the start of the animation, and 1 corresponds to the end of the animation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    progress: double;

    /**
     * Defines mask image for blur bubbles rise effect, controls the blur bubbles area.
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
    * Parameters of the material effect, used to control the display properties of the material such as refraction,
    * reflection, distortion, and overlay color.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  interface LiquidMaterialEffectParam {

    /**
      * Whether to enable the material effect. The value **true** means to enable the material effect, and **false**
      * means to disable the material effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    enable : boolean;

    /**
      * Distortion effect progress. The value range is [0, 1]. A value less than 0 evaluates to 0, and a value
      * greater than 1 evaluates to 1. The value **0** indicates the start of distortion, and **1** indicates the
      * end of distortion.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    distortProgress : double;

    /**
      * Distortion effect coefficient. The value must be greater than or equal to 0. A value less than 0 indicates
      * no distortion effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    distortFactor : double;

    /**
      * Ripple effect progress. The value must be greater than or equal to 0. A value less than 0 indicates no
      * ripple effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    rippleProgress : double;

    /**
      * Position where the ripple effect takes effect. Pass this parameter when you need to trigger the ripple effect
      * at multiple specified positions simultaneously. If this parameter is not passed, no ripple position is set by
      * default, and the ripple effect does not take effect. Each position in the array contains x and y dimensions,
      * using normalized coordinates where [0, 0] indicates the upper left corner and [1, 1] indicates the lower
      * right corner. A maximum of 10 position coordinates are supported. If more than 10 are passed, the entire
      * parameter is invalid.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    ripplePosition?: Array<[double, double]>;

    /**
      * Refraction effect coefficient. The value range is [0, 10]. A value less than 0 evaluates to 0, and a value
      * greater than 10 evaluates to 10. The value **0** indicates no refraction effect. A larger value indicates a
      * higher refraction intensity.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    refractionFactor : double;

    /**
      * Reflection coefficient. The value range is [0, 10]. A value less than 0 evaluates to 0, and a value greater
      * than 10 evaluates to 10. The value **0** indicates no reflection effect. A larger value indicates a higher
      * reflection intensity.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    reflectionFactor : double;

    /**
      * Material coefficient. The value range is [0, 1]. A value less than 0 evaluates to 0, and a value greater
      * than 1 evaluates to 1. The value **0** indicates no material effect, and the overlay color is used for
      * filling. A larger value indicates a more obvious material effect.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    materialFactor : double;

    /**
      * Material overlay color. The four variables correspond to RGBA. The value range is [0, 1]. A value less than
      * 0 evaluates to 0, and a value greater than 1 evaluates to 1.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    tintColor : [double, double, double, double];
  }

  /**
   * Defines the blending effect.
   *
   * @unionmember { BrightnessBlender } Base brightness blender
   * @unionmember { HdrBrightnessBlender } HDR brightness blender
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  type Blender = BrightnessBlender | HdrBrightnessBlender;

  /**
   * Defines the blending effect.
   *
   * @unionmember { BrightnessBlender } Base brightness blender
   * @unionmember { HdrBrightnessBlender } HDR brightness blender [since 20]
   * @unionmember { HdrDarkenBlender } HDR-adaptive darken blender [since 26.0.0]
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   */
  type Blender = BrightnessBlender | HdrBrightnessBlender | HdrDarkenBlender;

   /**
    * The brightness blender, which is used to apply the brightness effect to a specified component. Before calling
    * any API of **BrightnessBlender**, use
    * [createBrightnessBlender](docroot://reference/apis-arkgraphics2d/js-apis-uiEffect-sys.md#uieffectcreatebrightnessblender)
    * to create a **BrightnessBlender** instance.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface BrightnessBlender {

    /**
     * Third-order coefficient for grayscale adjustment. The value range is [-20, 20]. Values beyond the range are
     * automatically truncated during implementation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    cubicRate: double;

    /**
     * Second-order coefficient for grayscale adjustment. The value range is [-20, 20]. Values beyond the range are
     * automatically truncated during implementation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    quadraticRate: double;

    /**
     * Linear coefficient for grayscale adjustment. The value range is [-20, 20]. Values beyond the range are
     * automatically truncated during implementation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    linearRate: double;

    /**
     * Degree of grayscale adjustment. The value range is [-20, 20]. Values beyond the range are automatically
     * truncated during implementation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    degree: double;

    /**
     * Reference saturation for brightness. The value range is [0, 20]. Values beyond the range are automatically
     * truncated during implementation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    saturation: double;

    /**
     * Positive adjustment coefficients in RGB channels based on the reference saturation. The value range of each
     * number is [-20, 20]. Values beyond the range are automatically truncated during implementation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    positiveCoefficient: [double, double, double];

    /**
     * Negative adjustment coefficients in RGB channels based on the reference saturation. The value range of each
     * number is [-20, 20]. Values beyond the range are automatically truncated during implementation.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    negativeCoefficient: [double, double, double];

    /**
     * Blending fraction for the brightness effect. The value range is [0, 1]. Values beyond the range are
     * automatically truncated during implementation.
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
    * The HDR-supported brightness blender (inherited from
    * [BrightnessBlender](docroot://reference/apis-arkgraphics2d/js-apis-uiEffect-sys.md#brightnessblender)), which
    * is used to apply the brightness effect to a specified component. Before calling any API of
    * **HdrBrightnessBlender**, use
    * [createHdrBrightnessBlender](docroot://reference/apis-arkgraphics2d/js-apis-uiEffect-sys.md#uieffectcreatehdrbrightnessblender20)
    * to create an **HdrBrightnessBlender** instance. The parameters of this blender can be found in
    * [BrightnessBlender](docroot://reference/apis-arkgraphics2d/js-apis-uiEffect-sys.md#brightnessblender).
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface HdrBrightnessBlender extends BrightnessBlender {  }

   /**
    * The HDR-supported darken blender, which is used to apply the darken effect to a specified component. Before
    * calling any API of **HdrDarkenBlender**, use
    * [createHdrDarkenBlender](docroot://reference/apis-arkgraphics2d/js-apis-uiEffect-sys.md#uieffectcreatehdrdarkenblender)
    * to create an **HdrDarkenBlender** instance.
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface HdrDarkenBlender {

    /**
      * HDR brightness ratio. The value range is [1.0, maximum brightness ratio supported by the device]. A value
      * less than 1.0 evaluates to 1.0. When the value is 1.0, the original brightness of the component is used. A
      * value greater than the maximum brightness ratio supported by the device evaluates to the maximum brightness
      * ratio. The maximum brightness ratio = maximum device brightness / default device brightness. The maximum
      * device brightness can be obtained using the hdc command: hdc shell param get
      * const.display.brightness.max. The default device brightness can be obtained using the hdc command: hdc shell
      * param get const.display.brightness.default.
     *
     * @property { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    hdrBrightnessRatio: double;

    /**
      * Grayscale factor used to convert RGB color to grayscale. The weight of the grayscale conversion formula can
      * be automatically adjusted based on the current color gamut, using different weight calculation methods for
      * different color gamuts. It is applicable to standard color gamut scenarios such as sRGB. Pass this parameter
      * when you need to customize the grayscale conversion weight based on a specific color gamut or visual effect.
      * The three components have no boundary restrictions. The default value is the standard grayscale weight
      * [0.299, 0.587, 0.114].
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
      * R component (red) of the color.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    red: double;

    /**
      * G component (green) of the color.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    green: double;

    /**
      * B component (blue) of the color.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    blue: double;

    /**
      * A component (alpha) of the color.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    alpha: double;
  }

   /**
    * Defines the mask for Filter or VisualEffect. Different types of masks provide different grayscale distribution
    * modes, such as ripple mask, radial gradient mask, and pixel map mask.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  class Mask {

    /**
     * Creates a ripple mask instance based on the center point, radius, and width.
     *
     * @param { common2D.Point } center - Center of the ripple on the component. [0, 0] indicates the upper left
     *     corner of the component, and [1, 1] indicates the lower right corner of the component. The value range is
     *     [-10, 10]. If the value is out of the range, it will be automatically truncated.
     * @param { double } radius - Radius of the ripple. A radius of 1 is equal to the height of the component. The
     *     value range is [0, 10]. If the value is out of the range, it will be automatically truncated.
     * @param { double } width - Width of the ripple. The value range is [0, 10]. If the value is out of the range,
     *     it will be automatically truncated.
     * @param { double } [offset] - Offset of the wave peak. The default value is 0, indicating that the wave peak is
     *     in the center of the ripple. The value **-1.0** indicates that the wave peak is at the innermost side of
     *     the ripple, and **1.0** indicates that the wave peak is at the outermost side of the ripple. The value
     *     range is [-1, 1]. If the value is out of the range, it will be automatically truncated.
     * @returns { Mask } Returns a **Mask** instance with the ripple mask effect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createRippleMask(center: common2D.Point, radius: double, width: double, offset?: double): Mask;

    /**
     * Creates a **Mask** instance with the scaling effect based on the pixel map, the drawing area of the pixel
     * map, the drawing area of the mount node, and the fill color outside the drawing area.
     *
     * @param { image.PixelMap } pixelMap - PixelMap instance created by the image module. An instance can be
     *     obtained by decoding an image or directly created.
     * @param { common2D.Rect } srcRect - Drawing area of the pixel map. The leftmost and topmost positions of the
     *     image correspond to 0, and the rightmost and bottommost positions correspond to 1. right must be greater
     *     than left, and bottom must be greater than top.
     * @param { common2D.Rect } dstRect - Drawing area of the pixel map on the node where the mask is mounted. The
     *     leftmost and topmost positions of the node correspond to 0, and the rightmost and bottommost positions
     *     correspond to 1. right must be greater than left, and bottom must be greater than top.
     * @param { Color } [fillColor] - Color filled in the area outside the drawing area of the pixel map on the node.
     *     The value range of each element is [0, 1]. The default value is transparent. Values less than 0 are
     *     converted to 0, and values greater than 1 are converted to 1.
     * @returns { Mask } Returns a **Mask** instance based on the pixel map.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createPixelMapMask(pixelMap: image.PixelMap, srcRect: common2D.Rect, dstRect: common2D.Rect,
      fillColor?: Color): Mask;

    /**
     * Creates a **Mask** instance based on the pixel map. This API does not scale the pixel map.
     *
     * @param { image.PixelMap } pixelMap - PixelMap instance created by the image module. An instance can be
     *     obtained by decoding an image or directly created.
     * @returns { Mask } Returns a **Mask** instance with the pixel map.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    static createPixelMapMask(pixelMap: image.PixelMap): Mask;

    /**
     * Creates a radial gradient mask instance based on the ellipse center, semi-major axis, semi-minor axis, and
     * shape parameters.
     *
     * @param { common2D.Point } center - Center of the ellipse. [0, 0] indicates the upper left corner of the
     *     component, and [1, 1] indicates the lower right corner of the component. The value range is [-10, 10].
     *     Floating-point numbers are allowed. If the value is out of the range, it will be automatically truncated.
     * @param { double } radiusX - Semi-major axis of the ellipse. A radius of 1 is equal to the height of the
     *     component. The value range is [0, 10]. Floating-point numbers are allowed. If the value is out of the
     *     range, it will be automatically truncated.
     * @param { double } radiusY - Semi-minor axis of the ellipse. A radius of 1 is equal to the height of the
     *     component. The value range is [0, 10]. Floating-point numbers are allowed. If the value is out of the
     *     range, it will be automatically truncated.
     * @param { Array<[double, double]> } gradients - Two-element arrays in the array represent gradients: [RGBA
     *     color, position]. The four RGBA channels use the same value, which can be regarded as a grayscale value.
     *     The position indicates the distribution position of the corresponding RGBA color along the radial
     *     direction outward. The value ranges of both RGBA color and position are [0, 1]. Floating-point numbers are
     *     allowed. Values less than 0 are converted to 0, and values greater than 1 are converted to 1. The position
     *     values must be in strictly ascending order. The number of two-element arrays must be greater than or equal
     *     to 2, and the elements in the two-element arrays cannot be empty. Otherwise, the radial distribution
     *     effect does not take effect.
     * @returns { Mask } Returns a grayscale **Mask** with the radial distribution effect of the ellipse shape.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createRadialGradientMask(center: common2D.Point, radiusX: double, radiusY: double,
      gradients: Array<[double, double]>): Mask;

    /**
     * Creates a single-wave mask instance based on the wave source center position and single-wave parameters.
     *
     * @param { common2D.Point } center - Center of the wave source. [0, 0] indicates the upper left corner of the
     *     component, and [1, 1] indicates the lower right corner of the component. The value range is [-10, 10].
     *     Floating-point numbers are allowed. If the value is out of the range, it will be automatically truncated.
     * @param { double } width - Width of the circular ring. The value range is [0, 5]. Floating-point numbers are
     *     allowed. If the value is out of the range, it will be automatically truncated.
     * @param { double } propagationRadius - Outer diffusion radius of the circular ring. The value range is [0, 10].
     *     Floating-point numbers are allowed. If the value is out of the range, it will be automatically truncated.
     * @param { double } blurRadius - Blur outer radius of the circular ring. A blur radius of 0 indicates a solid
     *     circular ring; otherwise, it indicates a blurred circular ring. The value range is [0, 5]. Floating-point
     *     numbers are allowed. If the value is out of the range, it will be automatically truncated.
     * @param { double } [turbulenceStrength] - Turbulence strength of the circular ring. The default value is 0. A
     *     strength of 0 indicates a regular circular ring; otherwise, the ring edge will be turbulently distorted.
     *     The value range is [-1, 1]. Floating-point numbers are allowed. If the value is out of the range, it will
     *     be automatically truncated.
     * @returns { Mask } Returns a grayscale **Mask** with a single wave shape.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createWaveGradientMask(center: common2D.Point, width: double, propagationRadius: double,
      blurRadius: double, turbulenceStrength?: double): Mask;

    /**
     * Creates and sets a **Mask** instance to specify whether to use the blur cache. This **Mask** instance is
     * designed for the **useEffectMask** parameter of the
     * [liquidMaterial](docroot://reference/apis-arkgraphics2d/js-apis-uiEffect-sys.md#liquidmaterial22) method, and
     * is used to specify whether the material effect uses the blur cache to improve performance. When this **Mask**
     * instance is used for other Filter or VisualEffect methods, the **useEffect** property may not take effect.
     *
     * @param { boolean } useEffect - Whether to use the blur cache. The value **true** means to use the cache, and
     *     the blur effect is displayed normally. The value **false** means not to use the cache, and the blur effect
     *     is not displayed.
     * @returns { Mask } Returns a **Mask** instance that specifies whether to use the blur cache.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    static createUseEffectMask(useEffect: boolean): Mask;
  }

   /**
    * Creates a **Filter** instance, which can be used to apply multiple filters to a component.
    *
    * @returns { Filter } **Filter** instance.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 23 static
   */
  function createFilter(): Filter;

   /**
    * Creates a **VisualEffect** instance, which can be used to apply multiple visual effects to a component.
    *
    * @returns { VisualEffect } **VisualEffect** instance.
   * @syscap SystemCapability.Graphics.Drawing
   * @form [since 24]
   * @since 12 dynamic
   * @since 23 static
   */
  function createEffect(): VisualEffect;

   /**
    * Creates a **BrightnessBlender** instance, which can be used to apply the brightness effect to a component.
    *
    * @param { BrightnessBlenderParam } param - Parameters that implement the brightness effect.
    * @returns { BrightnessBlender } **BrightnessBlender** instance with the brightness effect.
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  function createBrightnessBlender(param: BrightnessBlenderParam): BrightnessBlender;

   /**
    * Creates an [HdrBrightnessBlender](docroot://reference/apis-arkgraphics2d/js-apis-uiEffect-sys.md#hdrbrightnessblender20)
    * instance to add the HDR brightness effect to a component.
    *
    * @param { BrightnessBlenderParam } param - Parameters that implement the brightness effect.
    * @returns { HdrBrightnessBlender } Returns a blender with the brightness effect (HDR supported).
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function createHdrBrightnessBlender(param: BrightnessBlenderParam): HdrBrightnessBlender;

  /**
   * Create an HdrDarkenBlender, which is used to apply HDR-adaptive darken blender on UI components.
   * @param { double } hdrBrightnessRatio - The HDR brightness ratio of the src.
   * @param { [double, double, double] } [grayscaleFactor] - The grayscale factor for converting dst's RGB channels to
   *     grayscale. Formula: grayscale = dot(grayscaleFactor, dst).
   * @returns { HdrDarkenBlender } Returns the blender.
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function createHdrDarkenBlender(hdrBrightnessRatio: double,
    grayscaleFactor?: [double, double, double]): HdrDarkenBlender;
}

/**
 * Parameter list of BrightnessBlender, used to configure various properties of the brightness effect, including
 * grayscale adjustment coefficients, saturation, and blending fraction.
 *
 * @syscap SystemCapability.Graphics.Drawing
 * @systemapi
 * @form [since 22]
 * @since 12 dynamic
 * @since 23 static
 */
export declare interface BrightnessBlenderParam {

  /**
   * Third-order coefficient for grayscale adjustment. The value range is [-20, 20]. Values beyond the range are
   * automatically truncated during implementation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  cubicRate: double;

  /**
   * Second-order coefficient for grayscale adjustment. The value range is [-20, 20]. Values beyond the range are
   * automatically truncated during implementation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  quadraticRate: double;

  /**
   * Linear coefficient for grayscale adjustment. The value range is [-20, 20]. Values beyond the range are
   * automatically truncated during implementation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  linearRate: double;

  /**
   * Degree of grayscale adjustment. The value range is [-20, 20]. Values beyond the range are automatically
   * truncated during implementation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  degree: double;

  /**
   * Reference saturation for brightness. The value range is [0, 20]. Values beyond the range are automatically
   * truncated during implementation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  saturation: double;

  /**
   * Positive adjustment coefficients in RGB channels based on the reference saturation. The value range of each
   * number is [-20, 20]. Values beyond the range are automatically truncated during implementation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  positiveCoefficient: [double, double, double];

  /**
   * Negative adjustment coefficients in RGB channels based on the reference saturation. The value range of each
   * number is [-20, 20]. Values beyond the range are automatically truncated during implementation.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  negativeCoefficient: [double, double, double];

  /**
   * Blending fraction for the brightness effect. The value range is [0, 1]. Values beyond the range are
   * automatically truncated during implementation.
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