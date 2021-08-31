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

import {CommonMethod, Color, ImageRepeat, ImageFit, Resource, PixelMap} from "./common";

export declare enum ImageRenderMode {
  Original,
  Template
}

export declare enum ImageInterpolation {
  None,
  Low,
  Medium,
  High
}

interface Image extends CommonMethod<Image> {
  (src: string | PixelMap | Resource): Image;

  alt(value: string | Resource): Image;

  matchTextDirection(value: boolean): Image;

  fitOriginalSize(value: boolean): Image;

  fillColor(value: Color | number | string | Resource): Image;

  objectFit(value: ImageFit): Image;

  objectRepeat(value: ImageRepeat): Image;

  autoResize(value: boolean): Image;

  renderMode(value: ImageRenderMode): Image;

  interpolation(value: ImageInterpolation): Image;

  sourceSize(value: { width: number, height: number }): Image;

  onComplete(callback: (event?: { width: number, height: number, componentWidth: number, componentHeight: number, loadingStatus: number }) => void): Image;

  onError(callback: (event?: { componentWidth: number, componentHeight: number }) => void): Image;

  onFinish(event: () => void): Image;
}

export declare const ImageInterface: Image;
