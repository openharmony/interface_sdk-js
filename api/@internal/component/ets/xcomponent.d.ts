/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * Describes the rectangle of the surface held by the **XComponent**.
 *
 * > **NOTE**
 *
 * > The **surfaceWidth** and **surfaceHeight** attributes default to the size of the **XComponent** if the
 * > [setXComponentSurfaceRect]{@link XComponentController#setXComponentSurfaceRect} API is not called and neither
 * > [border](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#border) nor
 * > [padding]{@link CommonMethod#padding} is set.
 * >
 * > Make sure the values of **surfaceWidth** and **surfaceHeight** do not exceed 8192 px. Exceeding this limit may
 * > lead to rendering issues.
 * >
 * > In immersive scenarios, the default layout of **SurfaceRect** does not include the safe area. To achieve an
 * > immersive effect, you must set the surface display area using the
 * > [setXComponentSurfaceRect]{@link XComponentController#setXComponentSurfaceRect} API.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SurfaceRect {
  /**
   * X-coordinate of the surface rectangle relative to the upper-left corner of the **XComponent**.
   *
   * Unit: px
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  offsetX?: number;

  /**
   * Y-coordinate of the surface rectangle relative to the upper left corner of the **XComponent**.
   *
   * Unit: px
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  offsetY?: number;

  /**
   * Width of the surface rectangle.
   *
   * Unit: px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  surfaceWidth: number;

  /**
   * Height of the surface rectangle.
   *
   * Unit: px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  surfaceHeight: number;
}

/**
 * Defines whether the orientation of the surface held by the current **XComponent** is locked when the screen rotates.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SurfaceRotationOptions {
  /**
   * Whether the orientation of the surface is locked when the screen rotates. If this parameter is not set, the default
   * value **false** is used, indicating that the orientation is not locked.
   *
   * **true**: The orientation of the surface is locked when the screen rotates.
   *
   * **false**: The orientation of the surface is not locked when the screen rotates.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  lock?: boolean;
}

/**
 * Describes whether the surface held by the **XComponent** is treated as opaque during rendering.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 22 dynamic
 */
declare interface SurfaceConfig {
  /**
   * Whether the surface held by the **XComponent** is treated as opaque during rendering. If this attribute is not set,
   * the default value **false** is used, indicating that the transparency of the pixels in the content drawn on the
   * surface will be applied during rendering.
   * **true**: yes; **false**: no.
   * Default value: **false**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  isOpaque?: boolean;
}

/**
 * Defines the controller of the **XComponent**. You can bind the controller to the **XComponent** to call the component
 * APIs through the controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 8 dynamic
 */
declare class XComponentController {
  /**
   * A constructor used to create a **XComponentController** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  constructor();

  /**
   * Obtains the ID of the surface held by the **XComponent**. This API works only when **type** of the **XComponent**
   * is **SURFACE("surface")** or **TEXTURE**.
   *
   * @returns { string } ID of the surface held by the **XComponent**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  getXComponentSurfaceId(): string;

  /**
   * Obtains the context of an **XComponent** object. This API works only when **type** of the **XComponent** is set to
   * **SURFACE("surface")** or **TEXTURE**.
   *
   * @returns { Object } Context of the **XComponent** object. The APIs contained in the context are defined by
   *     developers. The context is passed as the first parameter of the **onLoad** callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getXComponentContext(): Object;

  /**
   * Sets the width and height of the surface held by the **XComponent**. This API works only when **type** of the
   * **XComponent** is set to **SURFACE("surface")** or **TEXTURE**.
   *
   * Unit: px.
   *
   * @param { object } value - Width and Height of the surface held by the XComponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead setXComponentSurfaceRect
   */
  setXComponentSurfaceSize(value: {
    surfaceWidth: number;
    surfaceHeight: number;
  }): void;

  /**
   * Sets the display area for the surface held by the **XComponent**, including the width, height, and position
   * coordinates relative to the upper left corner of the component. This API is only effective when the **XComponent**
   * type is **SURFACE("surface")** or **TEXTURE**.
   *
   * @param { SurfaceRect } rect - Rectangle of the surface held by the **XComponent**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  setXComponentSurfaceRect(rect: SurfaceRect): void;

  /**
   * Obtains the display area for the surface held by the **XComponent**, including the width, height, and position
   * coordinates relative to the upper left corner of the component. This API is only effective when the **XComponent**
   * type is **SURFACE("surface")** or **TEXTURE**.
   *
   * @returns { SurfaceRect } Rectangle of the surface held by the **XComponent**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  getXComponentSurfaceRect(): SurfaceRect;

  /**
   * Sets whether to lock the orientation of the surface held by this **XComponent** when the screen rotates. This API
   * is effective only when the **XComponent** type is **SURFACE** (**"surface"**).
   *
   * @param { SurfaceRotationOptions } rotationOptions - Whether to lock the orientation of the surface held by the
   *     current **XComponent** when the screen rotates.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  setXComponentSurfaceRotation(rotationOptions: SurfaceRotationOptions): void;

  /**
   * Obtains whether the orientation of the surface held by this **XComponent** is locked when the screen rotates. This
   * API is effective only when the **XComponent** type is **SURFACE** (**"surface"**).
   *
   * @returns { Required<SurfaceRotationOptions> } Whether the orientation of the surface held by the current
   *     **XComponent** is locked when the screen rotates.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  getXComponentSurfaceRotation(): Required<SurfaceRotationOptions>;

  /**
   * Triggered when the surface held by the **XComponent** is created. This API works only when **type** of the
   * **XComponent** is set to **SURFACE("surface")** or **TEXTURE**.
   *
   * @param { string } surfaceId - ID of the surface held by the **XComponent**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  onSurfaceCreated(surfaceId: string): void;

  /**
   * Triggered when the surface held by the **XComponent** has its size changed (including the time when the
   * **XComponent** is created with the specified size). This API works only when **type** of the **XComponent** is set
   * to **SURFACE** (**"surface"**) or **TEXTURE**.
   *
   * @param { string } surfaceId - ID of the surface held by the **XComponent**.
   * @param { SurfaceRect } rect - Area for displaying the surface held by the **XComponent**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  onSurfaceChanged(surfaceId: string, rect: SurfaceRect): void;

  /**
   * Triggered when the surface held by the **XComponent** is destroyed. This API works only when **type** of the
   * **XComponent** is set to **SURFACE** (**"surface"**) or **TEXTURE**.
   *
   * @param { string } surfaceId - ID of the surface held by the **XComponent**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  onSurfaceDestroyed(surfaceId: string): void;

  /**
   * Starts AI image analysis in the given settings. Before calling this API, make sure the AI image analyzer is
   * [enabled]{@link XComponentAttribute#enableAnalyzer}. This API uses a promise to return the result.
   *
   * Because the image frame used for analysis is the one captured when this API is called, pay attention to the
   * invoking time of this API.
   *
   * If this API is repeatedly called before the execution is complete, an error callback is triggered.
   *
   * > **NOTE**
   *
   * > The image analysis type cannot be dynamically modified.
   * >
   * > This API depends on device capabilities. If it is called on an incompatible device, an error code is returned.
   *
   * @param { ImageAnalyzerConfig } config - Settings of the AI image analyzer.
   * @returns { Promise<void> } Promise that returns no value. It is used to indicate AI-based analysis is successfully
   *     executed.
   * @throws { BusinessError } 110001 - Image analysis feature is unsupported.
   * @throws { BusinessError } 110002 - Image analysis is currently being executed.
   * @throws { BusinessError } 110003 - Image analysis is stopped.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  startImageAnalyzer(config: ImageAnalyzerConfig): Promise<void>;

  /**
   * Stops AI image analysis. The content displayed by the AI image analyzer will be destroyed.
   *
   * > **NOTE**
   *
   * > If this API is called when the **startImageAnalyzer** API has not yet returned any result, an error callback is
   * > triggered.
   * >
   * > This feature depends on device capabilities.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  stopImageAnalyzer(): void;

  /**
   * Obtains a canvas object for drawing content on the **XComponent** component. For details about the drawing methods,
   * see [Canvas]{@link @ohos.graphics.drawing:drawing.Canvas}.
   *
   * @returns { DrawingCanvas | null} Returns a Canvas for drawing into the surface created by XComponent.
   *     Returns null if the surface is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  lockCanvas(): DrawingCanvas | null;

  /**
   * Submits the drawn content from a canvas object to the display area of the **XComponent** component and releases the
   * canvas object.
   *
   * @param { DrawingCanvas } canvas - The canvas previously obtained from lockCanvas.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  unlockCanvasAndPost(canvas: DrawingCanvas):void;

  /**
   * Sets the options of the surface created by the **XComponent**, which determine whether the surface held by the
   * **XComponent** is considered opaque during rendering.
   *
   * > **NOTE**
   * >
   * > This API takes effect only when the type of **XComponent** is **TEXTURE** or **SURFACE**.
   *
   * @param { SurfaceConfig } config - surface config
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  setXComponentSurfaceConfig(config: SurfaceConfig):void;
}

/**
 * Defines the options of the **XComponent**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface XComponentOptions {
  /**
   * Type of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  type: XComponentType;

  /**
   * Controller bound to the component, which can be used to invoke methods of the component. This parameter is
   * effective only when **type** is **SURFACE** or **TEXTURE**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  controller: XComponentController;

  /**
   * AI analysis options. You can configure the analysis type or bind an analyzer controller through this parameter.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  imageAIOptions?: ImageAIOptions;

  /**
   * Identifier of a screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 17 dynamic
   */
  screenId?: number;
}

/**
 * Defines the options of the **XComponent**. An XComponent created with such constructor parameters can pass its
 * corresponding [FrameNode]{@link ../../../arkui/FrameNode} object to the Native side, enabling the use of NDK APIs for
 * surface lifecycle–related settings and [component event listening](docroot://ui/ndk-listen-to-component-events.md).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 19 dynamic
 */
declare interface NativeXComponentParameters {
  /**
   * Type of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  type: XComponentType;

  /**
   * AI analysis options. You can configure the analysis type or bind an analyzer controller through this parameter.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  imageAIOptions?: ImageAIOptions;
}

/**
 * Sets the HDR type of the XComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic
 */
declare enum HdrType {
  /**
   * Default type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  DEFAULT = 0,
  /**
   * AIHDR type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  AIHDR = 1,
}

/**
 * **XComponent** provides a [surface](docroot://ui/napi-xcomponent-guidelines.md#overview) for graphics rendering and
 * media data input into your view. You can customize the position and size of the surface as needed. For details, see
 * [Native XComponent](docroot://ui/napi-xcomponent-guidelines.md).
 *
 * > **NOTE**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 8 dynamic
 */
interface XComponentInterface {

  /**
   * Constructor parameters
   *
   * @param { object } value - Indicates the options of the xcomponent.
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 12
   * @useinstead (value: { id: string; type: XComponentType; libraryname?: string; controller?: XComponentController })
   */
  (value: { id: string; type: string; libraryname?: string; controller?: XComponentController }): XComponentAttribute

  /**
   * Creates an **XComponent** component, whose lifecycle callbacks can be triggered from the native side.
   *
   * This API is deprecated since API version 12. You are advised to use
   * [XComponent(options: XComponentOptions)](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-xcomponent.md#xcomponent12)
   * instead.
   *
   * @param { object } value - Indicates the options of the xcomponent.
   * @returns { XComponentAttribute } The attribute of the xcomponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  (value: { id: string; type: XComponentType; libraryname?: string; controller?: XComponentController }): XComponentAttribute

  /**
   * Creates an **XComponent** component, allowing you to obtain the **SurfaceId** value on the ArkTS side, register the
   * lifecycle callbacks for the surface held by the **XComponent** and the callbacks for component events such as
   * touch, mouse, and key events, and configure the AI analyzer feature.
   *
   * @param { XComponentOptions } options - Options of the **XComponent**.
   * @returns { XComponentAttribute } The attribute of the xcomponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  (options: XComponentOptions): XComponentAttribute;

  /**
   * Obtains an **XComponent** node instance on the native side, and registers the lifecycle callbacks for the surface
   * held by the **XComponent** and the callbacks for component events, such as touch, mouse, and key events.
   *
   * @param { NativeXComponentParameters } params - Options of the **XComponent**.
   * @returns { XComponentAttribute } The attribute of the xcomponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  (params: NativeXComponentParameters): XComponentAttribute;
}

/**
 * Triggered after the surface held by **XComponent** is created.
 *
 * @param { object } [event] - Context of the **XComponent** object. The APIs contained in the context are defined at
 *     the native layer by developers.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnNativeLoadCallback = (event?: object) => void;

/**
 * In addition to universal attributes, the following attributes are supported.
 *
 * Since API version 12, the [universal events]{@link ./common} are supported when **type** is set to **SURFACE** or
 * **TEXTURE**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 8 dynamic
 */
declare class XComponentAttribute extends CommonMethod<XComponentAttribute> {
  /**
   * Triggered when the plugin is loaded.
   *
   * @param { function } [callback] - Callback triggered after the surface held by **XComponent** is
   *     created. [since 8 - 17]
   * @param { OnNativeLoadCallback } callback - Callback triggered after the surface held by **XComponent** is
   *     created. [since 18]
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  onLoad(callback: OnNativeLoadCallback): XComponentAttribute;

  /**
   * Triggered when the plugin is destroyed.
   *
   * @param { function } event - Callback triggered after **XComponent** is destroyed. [since 8 - 17]
   * @param { VoidCallback } event - Callback triggered after **XComponent** is destroyed. [since 18]
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  onDestroy(event: VoidCallback): XComponentAttribute;

  /**
   * Sets whether to enable the AI image analyzer, which supports subject recognition, text recognition, and object
   * lookup.
   *
   * For the settings to take effect, this attribute must be used together with
   * [StartImageAnalyzer]{@link XComponentController#startImageAnalyzer} and
   * [StopImageAnalyzer]{@link XComponentController#stopImageAnalyzer} of **XComponentController**.
   *
   * This feature cannot be used together with the
   * [overlay](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-overlay.md#overlay) attribute. If they
   * are set at the same time, the **CustomBuilder** attribute in **overlay** has no effect. This feature depends on
   * device capabilities.
   *
   * @param { boolean } enable - Whether to enable the AI image analyzer.<br>**true**: enable; **false**: disable<br>
   *     Default value: **false**.
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  enableAnalyzer(enable: boolean): XComponentAttribute;

  /**
   * Sets whether to enable the secure surface to protect the content rendered within the component from being captured
   * or recorded.
   *
   * @param { boolean } isSecure - Whether to enable the secure surface.<br>The value **true** means to enable the
   *     secure surface, and **false** means the opposite.<br>Default value: **false**.
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 13 dynamic
   */
  enableSecure(isSecure: boolean): XComponentAttribute;

  /**
   * Sets the brightness of HDR video playback for the component.
   *
   * @param { number } brightness - Brightness of HDR video playback.<br>Value range: 0.0 to 1.0. Values less than 0.0
   *     are equivalent to 0.0, and values greater than 1.0 are equivalent to 1.0. **0.0** indicates the brightness of
   *     the SDR video, and **1.0** indicates the brightness of the HDR video.<br>Default value: **1.0**.
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 14 - 19]
   * @publicapi [since 20]
   * @stagemodelonly
   * @atomicservice [since 20]
   * @since 14 dynamic
   */
  hdrBrightness(brightness: number): XComponentAttribute;

  /**
   * Set hdrBrightness for XComponent.
   *
   * @param { number } brightness - control the brightness of HDR video.
   * @param { HdrType } [type] - the HDR type of the XComponent.
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  hdrBrightness(brightness: number, type?: HdrType): XComponentAttribute;

  /**
   * Enable transparent layer for XComponent.
   *
   * @param { boolean } enabled - whether to enable transparent layer for XComponent.
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  enableTransparentLayer(enabled: boolean): XComponentAttribute;
}

/**
 * **XComponent** provides a [surface](docroot://ui/napi-xcomponent-guidelines.md#overview) for graphics rendering and
 * media data input into your view. You can customize the position and size of the surface as needed. For details, see
 * [Native XComponent](docroot://ui/napi-xcomponent-guidelines.md).
 *
 * > **NOTE**
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 8 dynamic
 */
declare const XComponent: XComponentInterface;

/**
 * Defines XComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 8 dynamic
 */
declare const XComponentInstance: XComponentAttribute;
