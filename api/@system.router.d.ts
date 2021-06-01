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

export interface RouterOptions {
  uri: string;
  params?: Object;
}
export interface BackRouterOptions {
  path?: string;
}
export interface RouterState {
  index: number;
  name: string;
  path: string;
}
export default class Router {
  static push(options: RouterOptions): void;
  static replace(options: RouterOptions): void;
  static back(options?: BackRouterOptions): void;
  static clear(): void;
  static getLength(): string;
  static getState(): RouterState;
}
