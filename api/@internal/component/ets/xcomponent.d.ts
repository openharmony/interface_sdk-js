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
 * Surface Rectangle information.
 *
 * @interface SurfaceRect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
declare interface SurfaceRect {
  /**
   * The horizontal offset of the surface relative to XComponent.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  offsetX?: number;

  /**
   * The vertical offset of the surface relative to XComponent.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  offsetY?: number;

  /**
   * The width of the surface created by XComponent
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  surfaceWidth: number;

  /**
   * The height of the surface created by XComponent
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  surfaceHeight: number;
}

/**
 * Defines XComponentController
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
declare class XComponentController {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  constructor();

  /**
   * Get the id of surface created by XComponent.
   *
   * @returns { string } The id of surface created by XComponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  getXComponentSurfaceId(): string;

  /**
   * Get the context of native XComponent.
   *
   * @returns { Object } The context of native XComponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  getXComponentContext(): Object;

  /**
   * Set the surface size created by XComponent.
   *
   * @param { object } value - surface size
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Set the surface size created by XComponent.
   *
   * @param { object } value - surface size
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @deprecated since 12
   * @useinstead setXComponentSurfaceRect
   */
  setXComponentSurfaceSize(value: {
    surfaceWidth: number;
    surfaceHeight: number;
  }): void;

  /**
   * Set the rectangle information of surface created by XComponent.
   *
   * @param { SurfaceRect } rect - The surface rectangle information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  setXComponentSurfaceRect(rect: SurfaceRect): void;

  /**
   * Get the rectangle information of Surface created by XComponent.
   *
   * @returns { SurfaceRect } The surface rectangle information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  getXComponentSurfaceRect(): SurfaceRect;

  /**
   * Called after the surface is first created.
   *
   * @param { string } surfaceId - The id of the surface created by XComponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  onSurfaceCreated(surfaceId: string): void;

  /**
   * Called after the surface rectangle information is changed.
   *
   * @param { string } surfaceId - The id of the surface created by XComponent.
   * @param { SurfaceRect } rect - The rectangle information of the surface created by XComponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  onSurfaceChanged(surfaceId: string, rect: SurfaceRect): void;

  /**
   * Called when the surface is about to be destroyed.
   *
   * @param { string } surfaceId - The id of the surface created by XComponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  onSurfaceDestroyed(surfaceId: string): void;
}

/**
 * Defines XComponent.
 *
 * @interface XComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
interface XComponentInterface {
  /**
   * Constructor parameters
   *
   * @param { object } value - Indicates the options of the xcomponent.
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  (value: { id: string; type: string; libraryname?: string; controller?: XComponentController }): XComponentAttribute;

  /**
   * Constructor parameters
   *
   * @param { object } value - Indicates the options of the xcomponent.
   * @returns { XComponentAttribute } The attribute of the xcomponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  (value: { id: string; type: XComponentType; libraryname?: string; controller?: XComponentController }): XComponentAttribute;
}

/**
 * Defines XComponentAttribute.
 *
 * @extends CommonMethod<XComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
declare class XComponentAttribute extends CommonMethod<XComponentAttribute> {
  /**
   * Called when judging whether the xcomponent surface is created.
   *
   * @param { function } [callback] - Called when judging whether the xcomponent surface is created.
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  onLoad(callback: (event?: object) => void): XComponentAttribute;

  /**
   * Called when judging whether the xcomponent is destroyed.
   *
   * @param { function } event - Called when judging whether the xcomponent is destroyed.
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  onDestroy(event: () => void): XComponentAttribute;
}

/**
 * Defines XComponent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
declare const XComponent: XComponentInterface;

/**
 * Defines XComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
declare const XComponentInstance: XComponentAttribute;
