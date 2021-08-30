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

import {CommonMethod, Visibility} from "./common";

export declare enum FormDimension {
  Dimension_1_2,
  Dimension_2_2,
  Dimension_2_4,
  Dimension_4_4
}

interface FormComponent extends CommonMethod<FormComponent> {
  (value: {id: number, name: string, bundle: string, ability: string, module: string, dimension?: FormDimension}): FormComponent;

  size(value: {width: number, height: number}): FormComponent;

  moduleName(value: string): FormComponent;

  dimension(value: FormDimension): FormComponent;

  allowUpdate(value: boolean): FormComponent;

  visibility(value: Visibility): FormComponent;

  onAcquired(callback: (info: {id: number}) => void): FormComponent;

  onError(callback: (info: {errcode: number, msg: string}) => void): FormComponent;

  onRouter(callback: (info: any) => void): FormComponent;
}

export declare const FormComponentInterface: FormComponent;
