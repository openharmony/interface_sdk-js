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
* 鼠标指针相关属性接口
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Mouse
* @import import mouse from '@ohos.multimodalInput.mouse';
*/

declare namespace mouse {

  /**
   * Sets whether the pointer icon is visible.
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Mouse
   * @param visible Whether the pointer icon is visible. The value true indicates that the pointer icon is visible, 
   * and the value false indicates the opposite.
   */
  function setPointerVisible(visible: boolean, callback: AsyncCallback<void>) : void;
  function setPointerVisible(visible: boolean) : Promise<void>;

  /**
   * Checks whether the pointer icon is visible.
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Mouse
   * @return Returns <b>true</b> if the pointer icon is visible; returns <b>false</b> otherwise.
   */
  function isPointerVisible(callback: AsyncCallback<boolean>) : void;
  function isPointerVisible() : Promise<boolean>;

   /**
   * 设置鼠标捕获模式是否开启
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Mouse
   * @param capture whether the mouse capture mode is on.The value <b>true</b> indicates that
   * the capture mode is on, and the value <b>false</b>  indicates that the capture mode is off.
   */
  function setCaptureMode(capture: boolean, callback: AsyncCallback<void>) : void;
  function setCaptureMode(capture: boolean) : Promise<void>;
}

export default mouse;