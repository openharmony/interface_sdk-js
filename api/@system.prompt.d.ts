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

export interface ShowToastOptions {
  message: string;
  duration?: number;
}
export interface Button {
  text: string;
  color: string;
}
export interface ShowDialogSuccessResponse {
  index: number;
}
export interface ShowDialogOptions {
  title?: string;
  message?: string;
  buttons?: [Button, Button?, Button?];
  success?: (data: ShowDialogSuccessResponse) => void;
  cancel?: (data: string, code: string) => void;
  complete?: (data: string) => void;
}
export default class Prompt {
  static showToast(options: ShowToastOptions): void;
  static showDialog(options: ShowDialogOptions): void;
}
