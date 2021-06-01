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

export interface AppResponse {
  appName: string;
  versionName: string;
  versionCode: number;
}
export interface RequestFullWindowOptions {
  duration?: number
}
export interface ScreenOnVisibleOptions {
  visible?: boolean;
  success?: () => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export default class App {
  static getInfo(): AppResponse;
  static terminate(): void;
  static screenOnVisible(options?: ScreenOnVisibleOptions): void;
  static requestFullWindow(options?: RequestFullWindowOptions): void;
}
