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
   * X-coordinate of the Surface display area relative to the upper left corner of the XComponent, in px. If not set,
   * the area is centered by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  offsetX?: number;

  /**
   * Y-coordinate of the Surface display area relative to the upper left corner of the XComponent, in px. If not set,
   * the area is centered by default.
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
   * Whether to lock the orientation of the Surface when the screen rotates. The default value is false, which means
   * the orientation is not locked.<br>true: locks the orientation; false: does not lock the orientation.
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
 * Describes whether the surface held by the XComponent component is opaque during rendering.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 22 dynamic
 */
declare interface SurfaceConfig {
  /**
   * Whether the Surface held by the XComponent needs to be treated as opaque during rendering. If this parameter is
   * not set, the default value is false, which means that the transparency of the pixels of the content drawn on the
   * Surface is applied during rendering.<br>The value true means that the Surface needs to be treated as opaque, and
   * false means the opposite.<br>Default value: false
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
   * A constructor used to create a **XComponentController** instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  constructor();

  /**
   * Obtains the ID of the surface corresponding to the XComponent. This parameter is valid only when the XComponent
   * type is SURFACE("surface") or TEXTURE.
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
   * @param { object } value - Width and height of the Surface held by the XComponent. The value of surfaceWidth
   *     ranges from greater than 0 to no more than 8192, in px. If 0, a negative number, or another invalid value is
   *     passed in, the API does not take effect. The value of surfaceHeight ranges from greater than 0 to no more
   *     than 8192, in px. If 0, a negative number, or another invalid value is passed in, the API does not take
   *     effect.
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
    * @param { SurfaceRect } rect - Rectangle for displaying the surface held by the **XComponent**.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @crossplatform [since 20]
    * @atomicservice
    * @since 12 dynamic
    */
   onSurfaceChanged(surfaceId: string, rect: SurfaceRect): void;

  /**
   * Called when the surface held by the **XComponent** is destroyed. This callback takes effect only when the
   * **XComponent** type is SURFACE("surface") or TEXTURE. For details, see [Creating an XComponent and Managing the
   * Surface Lifecycle](docroot://ui/napi-xcomponent-guidelines.md#creating-an-xcomponent-and-managing-the-surface-lifecycle).
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
   * Configures and starts AI analysis. Before using this API, enable the image AI analysis capability by calling
   * [enableAnalyzer]{@link XComponentAttribute#enableAnalyzer}. This API takes effect only when the **XComponent**
   * type is SURFACE or TEXTURE. This API uses a promise to return the result asynchronously.<br>When this API is
   * called, the frame at the moment of the call is captured for analysis. Pay attention to the timing of starting the
   * analysis to avoid inconsistency between the displayed content and the analysis result.<br>If this API is called
   * again before the previous call is complete, an error callback is triggered.
   *
   * > **NOTE**
   *
   * > The analysis type cannot be dynamically modified.
   * > The AI analysis capability depends on the device capability. If the device does not support this capability, an
   * > error code is returned.
   *
   * @param { ImageAnalyzerConfig } config - Settings of the AI image analyzer.
   * @returns { Promise<void> } Promise that returns no value. It is used to indicate AI analysis is successfully
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
   * Stops AI analysis. This API takes effect only when the **XComponent** type is SURFACE or TEXTURE. Before calling
   * this API, call [enableAnalyzer]{@link XComponentAttribute#enableAnalyzer} and
   * [startImageAnalyzer]{@link XComponentController#startImageAnalyzer} to enable the AI analysis capability. After
   * this API is called, the content displayed by AI analysis is destroyed.
   *
   * > **NOTE**
   *
   * > If this API is called when the **startImageAnalyzer** API has not yet returned any result, an error callback is
   * > triggered.
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
   * @returns { DrawingCanvas | null} Canvas object that can be used to draw on the XComponent area. Returns null when
   *     the canvas object cannot be obtained (for example, when the Surface is not created or the canvas is occupied
   *     and not released).
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
   * @param { DrawingCanvas } canvas - Canvas object returned by the lockCanvas method called earlier.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  unlockCanvasAndPost(canvas: DrawingCanvas):void;

  /**
   * Sets the options of the surface created by the **XComponent**, which are used to set whether the surface held by
   * the **XComponent** needs to be treated as opaque during rendering. When the content drawn on the surface is
   * completely opaque, the surface can be set to opaque to improve rendering performance. When the drawn content
   * contains transparent areas, the surface must remain non-opaque to ensure that the transparency effect is
   * displayed correctly.
   *
   * > **NOTE**
   * >
   * > This API takes effect only when the type of **XComponent** is **TEXTURE** or **SURFACE**.
   *
   * @param { SurfaceConfig } config - Surface configuration options, used to set whether the Surface held by the
   *     XComponent needs to be treated as opaque during rendering.
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
   * Sets an AI analysis option for the component. Through this option, you can configure the analysis type or bind an
   * analysis controller. It takes effect only when the type is SURFACE or TEXTURE. If this option is not set, no AI
   * analysis option is configured, and AI analysis can be enabled separately through the enableAnalyzer attribute.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  imageAIOptions?: ImageAIOptions;

  /**
   * Sets the ID of the screen associated with the component. With this parameter, the screen content associated with
   * the component can be displayed on the component. The screen ID can be obtained through the getAllScreens API of
   * the [@ohos.screen]{@link ohos.screen} module. Default value: **0**, which indicates the primary screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 17 dynamic
   */
  screenId?: number;
}

/**
 * Defines the specific configuration parameters used by XComponent on the native side. An XComponent created with this
 * constructor can pass its corresponding [FrameNode]{@link ../../../arkui/FrameNode} object to the native side, where
 * NDK APIs can be used to configure the surface lifecycle and [add event listeners]
 * (docroot://ui/ndk-listen-to-component-events.md).
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
   * Sets an AI analysis option for the component. Through this option, you can configure the analysis type or bind an
   * analysis controller. It takes effect only when the type is SURFACE or TEXTURE. If it is not set, no AI analysis
   * option is configured, and AI analysis can be enabled separately through the enableAnalyzer attribute.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  imageAIOptions?: ImageAIOptions;
}

/**
 * Enumerates the high dynamic range rendering types of HDR content.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic
 */
declare enum HdrType {
  /**
   * Default HDR type, which uses the standard high dynamic range rendering mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  DEFAULT = 0,
  /**
   * AI HDR type, which uses AI algorithms to intelligently expand the dynamic range of non-HDR content to achieve HDR
   * display effects.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  AIHDR = 1,
}

/**
 * Provides a surface for graphics rendering and media data writing. XComponent embeds the surface into the view and
 * supports customizing the position and size of the surface. It also supports capabilities such as AI image analysis,
 * HDR video brightness adjustment, screen capture and recording privacy protection, and canvas self-rendering. It is
 * applicable to scenarios that require high-performance self-rendering and media content display, such as video
 * playback, camera preview, game rendering, and AI image recognition. For details, see
 * [Custom Rendering (XComponent)](docroot://ui/napi-xcomponent-guidelines.md).
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
   * @param { XComponentOptions } options - Configuration options of XComponent, used to obtain the surface ID,
   *     register surface lifecycle callbacks and component event callbacks, and configure AI analysis on the ArkTS
   *     side.
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
   * @param { NativeXComponentParameters } params - Configuration parameters of the XComponent, used to obtain the
   *     XComponent node instance on the native side and register the Surface lifecycle callback and component event
   *     callback.
   * @returns { XComponentAttribute } The attribute of the xcomponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  (params: NativeXComponentParameters): XComponentAttribute;
}

/**
 * Callback event triggered after the native loading of the **XComponent** is complete, used to pass the context of the
 * **XComponent** instance object to the developer. Difference from
 * [onSurfaceCreated]{@link XComponentController#onSurfaceCreated}: the **onLoad** callback parameter is the **context**
 * object, which applies to the scenario where the **libraryname** parameter is set; the **onSurfaceCreated** callback
 * parameter is **surfaceId**, which applies to the scenario where the **libraryname** parameter is not set. **onLoad**
 * is triggered earlier than **onSurfaceCreated**.
 *
 * @param { object } [event] - Context of the XComponent instance object. The methods mounted on the context are
 *     defined by the developer on the native layer. Pass this parameter when the methods defined on the native layer
 *     need to be used in the callback; if it is not passed, the context object cannot be obtained in the callback.
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
   * Callback event triggered when native loading is complete.
   *
   * > **NOTE**
   *
   * > This callback is triggered only when the **libraryname** parameter is set for the **XComponent**. If the
   * > **libraryname** parameter is not set, use callbacks such as
   * > [onSurfaceCreated]{@link XComponentController#onSurfaceCreated}.
   *
   * @param { function } [callback] - Callback invoked when the native content is loaded, used to obtain the context of
   *     the XComponent instance. [since 8 - 17]
   * @param { OnNativeLoadCallback } callback - Callback invoked when the native content is loaded, used to obtain the
   *     context of the XComponent instance. [since 18]
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  onLoad(callback: OnNativeLoadCallback): XComponentAttribute;

  /**
   * Callback event triggered when native unloading is complete. Difference from
   * [onSurfaceDestroyed]{@link XComponentController#onSurfaceDestroyed}: **onDestroy** applies to the scenario where
   * the **libraryname** parameter is set, and the callback has no parameters; **onSurfaceDestroyed** applies to the
   * scenario where the **libraryname** parameter is not set, and the callback parameter is **surfaceId**.
   *
   * @param { function } event - Callback invoked when the native component is unloaded. [since 8 - 17]
   * @param { VoidCallback } event - Callback invoked when the native component is unloaded. [since 18]
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
   * @param { boolean } enable - Whether to enable the AI analysis feature.<br>true: enables AI analysis; false:
   *     disables AI analysis.<br>Default value: false
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
   * @param { boolean } isSecure - Whether to enable the privacy layer mode.<br>true: enables the privacy layer mode;
   *     false: disables the privacy layer mode.<br>Default value: false
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
   * @param { number } brightness - Brightness of the HDR video.<br>Default value: **1.0**<br>Value range: [0.0, 1.0].
   *     Values less than 0.0 are treated as 0.0, values greater than 1.0 are treated as 1.0, and other abnormal values
   *     are treated as 1.0.<br>0.0 indicates that the video is displayed at SDR brightness, and 1.0 indicates that the
   *     video is displayed at the highest HDR brightness currently allowed.
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
   * Adjusts the brightness when the component displays HDR content.<br>
   * When the parameter **type** is set to a value other than
   * [HdrType]{@link HdrType}.DEFAULT, before calling this API, check whether the **hdrFormats** attribute of
   * [Display]{@link ohos.display.Display} contains the corresponding
   * [HDRFormat]{@link ohos.graphics.hdrCapability.HDRFormat}.<br>Only when **hdrFormats** contains the corresponding
   * HDRFormat does the current device support the corresponding HDR type and the parameter setting take effect;
   * otherwise, the default value [HdrType]{@link HdrType}.DEFAULT is used.<br>
   * The mapping is as follows:
   *    | Value of type | HDRFormat that hdrFormats must contain |
   *    | -------- | -------- |
   *    | [HdrType]{@link HdrType}.AIHDR | [HDRFormat]{@link ohos.graphics.hdrCapability.HDRFormat}.VIDEO_AIHDR |
   *
   * > **NOTE**
   *
   * > - This API takes effect only when **type** in the XComponent constructor parameters is
   * > [XComponentType]{@link XComponentType}.SURFACE. Otherwise, it does not take effect.
   * >
   * > - XComponent components created through the [ArkUI NDK APIs](docroot://ui/ndk-build-ui-overview.md) are not
   * > supported.
   *
   * @param { number } brightness - Brightness of the HDR content.<br>Default value: **1.0**<br>Value range: [0.0, 1.0].
   *     Values less than 0.0 are treated as 0.0, values greater than 1.0 are treated as 1.0, and other abnormal values
   *     are treated as 1.0.<br>**0.0** indicates that the content is displayed at SDR brightness, and **1.0**
   *     indicates that the content is displayed at the maximum HDR brightness currently allowed.
   * @param { HdrType } [type] - HDR type used when displaying HDR content.<br>Default value: **HdrType.DEFAULT**
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  hdrBrightness(brightness: number, type?: HdrType): XComponentAttribute;

  /**
   * Use this API when an **XComponent** with a semi-transparent background color needs to enable an independent layer
   * (that is, to place the component content on a separate composition layer for rendering, so as to avoid rendering
   * anomalies when the semi-transparent area is blended with the content below).
   *
   * Using this API does not necessarily mean that an independent layer will be set. Due to the following reasons, such
   * as hardware specifications (for example, lack of hardware support for independent layer hardware composition) and
   * software specifications (for example, an independent layer intersecting with a UI component that has a blur
   * effect), a semi-transparent **XComponent** may fail to be set as an independent layer.
   *
   * To use this API effectively and avoid display issues, follow these guidelines:
   *
   * 1. If an **XComponent** with an independent layer overlaps with another **XComponent** below it, the **XComponent**
   * below it should also be configured with an independent layer.
   *
   * 2. If UI components are placed below an **XComponent** that has an independent layer set through this API and a
   * semi-transparent background, the displayed content of the UI components will disappear during composition. An
   * **XComponent** with an independent layer enabled must be placed below all UI elements that intersect with it.
   *
   * 3. Set an independent layer for an XComponent with a semi-transparent background in static layout scenarios, for
   * example, non-page transition scenarios and playback scenarios where video subtitles are static.
   *
   * @param { boolean } enabled - Whether to enable the independent layer of the component in the semi-transparent
   *     background state.<br>true: enables the independent layer; false: disables the independent layer.<br>When set
   *     to true, it may not take effect due to hardware specifications (for example, the hardware does not support
   *     hardware composition of the independent layer) or software specifications (for example, the independent layer
   *     intersects with a UI component with a blur effect). For details, see the API description above.<br>Default
   *     value: false
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  enableTransparentLayer(enabled: boolean): XComponentAttribute;
}

/**
 * Provides a surface for graphics rendering and media data writing. XComponent embeds the surface into the view and
 * supports customizing the position and size of the surface. It also supports capabilities such as AI image analysis,
 * HDR video brightness adjustment, screen capture and recording privacy protection, and canvas self-rendering. It is
 * applicable to scenarios that require high-performance self-rendering and media content display, such as video
 * playback, camera preview, game rendering, and AI image recognition. For details, see
 * [Custom Rendering (XComponent)](docroot://ui/napi-xcomponent-guidelines.md).
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
