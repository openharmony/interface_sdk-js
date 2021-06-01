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

export interface BrightnessResponse {
  value: number;
}
export interface GetBrightnessOptions {
  success?: (data: BrightnessResponse) => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface SetBrightnessOptions {
  value: number;
  success?: () => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface BrightnessModeResponse {
  mode: number;
}
export interface GetBrightnessModeOptions {
  success?: (data: BrightnessModeResponse) => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface SetBrightnessModeOptions {
  mode: number;
  success?: () => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface SetKeepScreenOnOptions {
  keepScreenOn: boolean;
  success?: () => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export default class Brightness {
  static getValue(options?: GetBrightnessOptions): void;
  static setValue(options: SetBrightnessOptions): void;
  static getMode(options?: GetBrightnessModeOptions): void;
  static setMode(options: SetBrightnessModeOptions): void;
  static setKeepScreenOn(options: SetKeepScreenOnOptions): void;
}
