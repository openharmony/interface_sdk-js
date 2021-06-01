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

export interface GetStorageOptions {
  key: string;
  default?: string;
  success?: (data: any) => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface SetStorageOptions {
  key: string;
  value: string;
  success?: () => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface ClearStorageOptions {
  success?: () => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface DeleteStorageOptions {
  key: string;
  success?: () => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export default class Storage {
  static get(options: GetStorageOptions): void;
  static set(options: SetStorageOptions): void;
  static clear(options?: ClearStorageOptions): void;
  static delete(options: DeleteStorageOptions): void;
}
