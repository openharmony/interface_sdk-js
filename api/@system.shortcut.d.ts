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

export interface CreateShortcutOptions {
  success?: (data: any) => void;
  fail?: (data: any, code: number) => void;
  complete?: () => void;
  page?: string;
  label?: string;
  description?: string;
  icon?: string;
  bundleName?: string;
  abilityName?: string;
}
export interface CheckShortcutHasCreatedResponse {
  exists: boolean;
}
export interface CheckShortcutHasCreatedOptions {
  success?: (data: CheckShortcutHasCreatedResponse) => void;
  fail?: (data: any, code: number) => void;
  complete?: () => void;
  page?: string;
  abilityName?: string;
}
export default class Shortcut {
  static create(options?: CreateShortcutOptions): void;
  static hasCreated(options?: CheckShortcutHasCreatedOptions);
}
