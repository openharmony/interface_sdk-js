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
 * @arkts 1.2
 */


import { ImageAIOptions, ImageAnalyzerConfig } from "./imageCommon";
import { CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { XComponentType } from "./enums";
import { VoidCallback } from "./units";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Surface Rectangle information.
 *
 * @interface SurfaceRect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface SurfaceRect {
    /**
     * The horizontal offset of the surface relative to XComponent.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    offsetX?: number;
    /**
     * The vertical offset of the surface relative to XComponent.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    offsetY?: number;
    /**
     * The width of the surface created by XComponent
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    surfaceWidth: number;
    /**
     * The height of the surface created by XComponent
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    surfaceHeight: number;
}
/**
 * Surface rotation options.
 *
 * @interface SurfaceRotationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface SurfaceRotationOptions {
    /**
     * Lock property of the surface rotation.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    lock?: boolean;
}
/**
 * Defines XComponentController
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class XComponentController {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Get the id of surface created by XComponent.
     *
     * @returns { string } The id of surface created by XComponent.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getXComponentSurfaceId(): string;
    /**
     * Get the context of native XComponent.
     *
     * @returns { Object } The context of native XComponent.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getXComponentContext(): Object;
    /**
     * Set the rectangle information of surface created by XComponent.
     *
     * @param { SurfaceRect } rect - The surface rectangle information.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    setXComponentSurfaceRect(rect: SurfaceRect): void;
    /**
     * Get the rectangle information of Surface created by XComponent.
     *
     * @returns { SurfaceRect } The surface rectangle information.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    getXComponentSurfaceRect(): SurfaceRect;
    /**
     * Set the rotation options of the Surface created by XComponent.
     *
     * @param { SurfaceRotationOptions } rotationOptions - The surface rotation options.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    setXComponentSurfaceRotation(rotationOptions: SurfaceRotationOptions): void;
    /**
     * Get the rotation options result of the Surface created by XComponent.
     *
     * @returns { Required<SurfaceRotationOptions> } The surface rotation options result.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    getXComponentSurfaceRotation(): Required<SurfaceRotationOptions>;
    /**
     * Called after the surface is first created.
     *
     * @param { string } surfaceId - The id of the surface created by XComponent.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    onSurfaceCreated(surfaceId: string): void;
    /**
     * Called after the surface rectangle information is changed.
     *
     * @param { string } surfaceId - The id of the surface created by XComponent.
     * @param { SurfaceRect } rect - The rectangle information of the surface created by XComponent.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    onSurfaceChanged(surfaceId: string, rect: SurfaceRect): void;
    /**
     * Called when the surface is about to be destroyed.
     *
     * @param { string } surfaceId - The id of the surface created by XComponent.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    onSurfaceDestroyed(surfaceId: string): void;
    /**
     * Start image analyzer.
     *
     * @param { ImageAnalyzerConfig } config - Image analyzer config.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 110001 - Image analysis feature is unsupported.
     * @throws { BusinessError } 110002 - Image analysis is currently being executed.
     * @throws { BusinessError } 110003 - Image analysis is stopped.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    startImageAnalyzer(config: ImageAnalyzerConfig): Promise<void>;
    /**
     * Stop image analyzer.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    stopImageAnalyzer(): void;
}
/**
 * Defines the xcomponent options.
 *
 * @interface XComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface XComponentOptions {
    /**
     * The type of xcomponent
     *
     * @type { XComponentType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    type: XComponentType;
    /**
     * The controller of xcomponent.
     *
     * @type { XComponentController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    controller: XComponentController;
    /**
     * Image ai options.
     *
     * @type { ?ImageAIOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    imageAIOptions?: ImageAIOptions;
    /**
     * Identifier of a screen.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    screenId?: number;
}
/**
 * Defines the native xcomponent parameters.
 *
 * @interface NativeXComponentParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface NativeXComponentParameters {
    /**
     * The type of xcomponent
     *
     * @type { XComponentType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    type: XComponentType;
    /**
     * Image ai options.
     *
     * @type { ?ImageAIOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    imageAIOptions?: ImageAIOptions;
}
/**
 * Callback invoked when XComponent onload.
 *
 * @typedef { function } OnNativeLoadCallback
 * @param { object } [event] - Get the context of the XCompoonent instance object,
 * and the methods mounted on the context are defined by the developer in the C++layer.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type OnNativeLoadCallback = (event?: object) => void;
export declare interface XComponentAttribute extends CommonMethod {
    /**
     * Called when judging whether the xcomponent surface is created.
     *
     * @param { OnNativeLoadCallback } callback - Called when judging whether the xcomponent surface is created.
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onLoad(callback: OnNativeLoadCallback | undefined): this;
    /**
     * Called when judging whether the xcomponent is destroyed.
     *
     * @param { VoidCallback } event - Called when judging whether the xcomponent is destroyed.
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDestroy(event: VoidCallback | undefined): this;
    /**
     * Enable image analyzer for XComponent.
     *
     * @param { boolean } enable
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    enableAnalyzer(enable: boolean | undefined): this;
    /**
     * Enable privacy protection for XComponent.
     *
     * @param { boolean } isSecure
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    enableSecure(isSecure: boolean | undefined): this;
    /**
     * Set hdrBrightness for XComponent.
     *
     * @param { number } brightness - control the brightness of HDR video
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    hdrBrightness(brightness: number | undefined): this;
    /**
     * Enable transparent layer for XComponent.
     *
     * @param { boolean } enabled - whether to enable transparent layer for XComponent.
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    enableTransparentLayer(enabled: boolean | undefined): this;
    attributeModifier(modifier: AttributeModifier<XComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines the XComponent parameter interface.
 *
 * @interface XComponentParameter
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface XComponentParameter {
    /**
     * The id of xcomponent
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    id: string;
    /**
     * The type of xcomponent
     *
     * @type { XComponentType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type: XComponentType;
    /**
     * The name of the dynamic library compiled and output by the native layer.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    libraryname?: string;
    /**
     * The controller of xcomponent.
     *
     * @type { ?XComponentController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    controller?: XComponentController;
}
export declare interface UIXComponentAttribute extends UICommonMethod {
    /**
     * Called when judging whether the xcomponent surface is created.
     *
     * @param { OnNativeLoadCallback } callback - Called when judging whether the xcomponent surface is created.
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onLoad(callback: OnNativeLoadCallback | undefined): this;
    /**
     * Called when judging whether the xcomponent is destroyed.
     *
     * @param { VoidCallback } event - Called when judging whether the xcomponent is destroyed.
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onDestroy(event: VoidCallback | undefined): this;
    /**
     * Enable image analyzer for XComponent.
     *
     * @param { boolean } enable
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    enableAnalyzer(enable: boolean | undefined): this;
    /**
     * Enable privacy protection for XComponent.
     *
     * @param { boolean } isSecure
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    enableSecure(isSecure: boolean | undefined): this;
    /**
     * Set hdrBrightness for XComponent.
     *
     * @param { number } brightness - control the brightness of HDR video
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    hdrBrightness(brightness: number | undefined): this;
    /**
     * Enable transparent layer for XComponent.
     *
     * @param { boolean } enabled - whether to enable transparent layer for XComponent.
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    enableTransparentLayer(enabled: boolean | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<XComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function XComponent(
    params: XComponentParameter | XComponentOptions | NativeXComponentParameters, 
    @memo
    content_?: () => void,
): UIXComponentAttribute