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
 * Defines XComponentController
 * @since 8
 * @systemapi
 */
declare class XComponentController {
  /**
   * constructor.
   * @since 8
   * @systemapi
   */
  constructor();

  /**
   * get the id of surface created by XComponent.
   * @since 8
   * @systemapi
   */
  getXComponentSurfaceId(): string;

  /**
   * get the context of native XComponent.
   * @since 8
   * @systemapi
   */
  getXComponentContext(): Object;

  /**
   * set the surface size created by XComponent.
   * @since 8
   * @systemapi
   */
  setXComponentSurfaceSize(value: {
    surfaceWidth: number;
    surfaceHeight: number;
  }): void;
}

/**
 * Defines XComponent.
 * @since 8
 * @systemapi
 */
interface XComponentInterface {
  /**
   * Constructor parameters
   * @since 8
   * @systemapi
   */
  (value: { id: string; type: string; libraryname?: string; controller?: XComponentController }): XComponentAttribute;
}

/**
 * Defines XComponentAttribute.
 * @since 8
 * @systemapi
 */
declare class XComponentAttribute extends CommonMethod<XComponentAttribute> {
  /**
   * Called when judging whether the xcomponent surface is created.
   * @since 8
   * @systemapi
   */
  onLoad(callback: (event?: object) => void): XComponentAttribute;

  /**
   * Called when judging whether the xcomponent is destroyed.
   * @since 8
   * @systemapi
   */
  onDestroy(event: () => void): XComponentAttribute;
}

declare const XComponent: XComponentInterface;
declare const XComponentInstance: XComponentAttribute;
