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

import {CommonMethod} from "./common";

/**
 * Camera component, which provides the preview and photographing functions.
 * @devices phone, tablet, car.
 * @since 7
 */
export declare enum DevicePosition {
  /**
   * Front camera
   * @devices phone, tablet, car.
   * @since 7
   */
  Front,

  /**
   * Back camera
   * @devices phone, tablet, car.
   * @since 7
   */
  Back
}

/**
 * Camera component, which provides the preview and photographing functions.
 * @devices phone, tablet, car.
 * @since 7
 */
export declare class CameraExtend<T> extends CameraAttribute<T> {
}

/**
 * resolution Width, resolution Height
 * @devices phone, tablet, car.
 * @since 7
 */
interface Camera extends CameraAttribute<Camera> {
  /**
   * Set the value.
   * @devices phone, tablet, car.
   * @since 7
   */
  (value: { id: string, resolutionWidth: number, resolutionHeight: number }): Camera;
}

/**
 * set CameraAttribute
 * @devices phone, tablet, car.
 * @since 7
 */
declare class CameraAttribute<T> extends CommonMethod<T> {
  /**
   * Set devicePosition value.
   * @devices phone, tablet, car.
   * @since 7
   */
  devicePosition(value: DevicePosition): T;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare const CameraInterface: Camera;
