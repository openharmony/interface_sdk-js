/*
* Copyright (c) 2022 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { AsyncCallback } from "./basic";

/**
* Interfaces of mouse pointer related properties
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Pointer
* @import import pointer from '@ohos.multimodalInput.pointer';
*/

declare namespace pointer {

  /**
   * Sets whether the pointer icon is visible.
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @param visible Whether the pointer icon is visible. The value true indicates that the pointer icon is visible, 
   * and the value false indicates the opposite.
   */
  function setPointerVisible(visible: boolean, callback: AsyncCallback<void>) : void;
  function setPointerVisible(visible: boolean) : Promise<void>;

  /**
   * Checks whether the pointer icon is visible.
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @return Returns <b>true</b> if the pointer icon is visible; returns <b>false</b> otherwise.
   */
  function isPointerVisible(callback: AsyncCallback<boolean>) : void;
  function isPointerVisible() : Promise<boolean>;
}

export default pointer;