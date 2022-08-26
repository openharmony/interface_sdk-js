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
* Declares interfaces related to mouse pointer attributes.
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Pointer
* @import import pointer from '@ohos.multimodalInput.pointer';
*/

declare namespace pointer {
enum PointerStyle {
    // Default
    DEFAULT,

    // East arrow
    EAST,

    // West arrow
    WEST,

    // South arrow
    SOUTH,

    // North arrow
    NORTH,

    // East-west arrow
    WEST_EAST,

    // North-south arrow
    NORTH_SOUTH,

    // North-east arrow
    NORTH_EAST,

    // North-west arrow
    NORTH_WEST,

    // South-east arrow
    SOUTH_EAST,

    // South-west arrow
    SOUTH_WEST,

    // North-east and south-west arrow
    NORTH_EAST_SOUTH_WEST,

    // North-west and south-east arrow
    NORTH_WEST_SOUTH_EAST,

    // Cross
    CROSS,

    // Copy cursor
    CURSOR_COPY,

    // Forbid cursor
    CURSOR_FORBID,

    // Sucker
    COLOR_SUCKER,

    // Hand grabbing
    HAND_GRABBING,

    // Hand open
    HAND_OPEN,

    // Hand pointing
    HAND_POINTING,

    // Help
    HELP,

    // Move
    MOVE,

    // Resize left and right
    RESIZE_LEFT_RIGHT,

    // Resize up and down
    RESIZE_UP_DOWN,

    // Screenshot selection
    SCREENSHOT_CHOOSE,

    // Screenshot cursor
    SCREENSHOT_CURSOR,

    // Text cursor
    TEXT_CURSOR,

    // Zoom in
    ZOOM_IN,

    // Zoom out
    ZOOM_OUT,

    // East arrow of the middle mouse button
    MIDDLE_BTN_EAST,

    // West arrow of the middle mouse button
    MIDDLE_BTN_WEST,

    // South arrow of the middle mouse button
    MIDDLE_BTN_SOUTH,

    // North arrow of the middle mouse button
    MIDDLE_BTN_NORTH,

    // North-south arrow of the middle mouse button
    MIDDLE_BTN_NORTH_SOUTH,

    // North-east arrow of the middle mouse button
    MIDDLE_BTN_NORTH_EAST,

    // North-west arrow of the middle mouse button
    MIDDLE_BTN_NORTH_WEST,

    // South-east arrow of the middle mouse button
    MIDDLE_BTN_SOUTH_EAST,

    // South-west arrow of the middle mouse button
    MIDDLE_BTN_SOUTH_WEST,

    // North-west and south-east arrow of the middle mouse button
    MIDDLE_BTN_NORTH_SOUTH_WEST_EAST,
  }

  /**
   * Sets the pointer moving speed.
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @param speed Pointer moving speed.
   * @param callback Callback used to return the result.
   */
  function setPointerSpeed(speed: number, callback: AsyncCallback<void>): void;

  /**
   * Sets the pointer moving speed.
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @param speed Pointer moving speed.
   * @return Returns the result through a promise.
   */
  function setPointerSpeed(speed: number): Promise<void>;

  /**
   * Queries the pointer moving speed.
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @param callback Callback used to return the result.
   */
  function getPointerSpeed(callback: AsyncCallback<number>): void;

  /**
   * Queries the pointer moving speed.
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @return Returns the result through a promise.
   */
  function getPointerSpeed(): Promise<number>;

  /**
   * Sets the pointer style.
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @param windowId Window ID.
   * @param pointerStyle Pointer style.
   * @param callback Callback used to return the result.
   */
  function setPointerStyle(windowId: number, pointerStyle: PointerStyle, callback: AsyncCallback<void>): void;

  /**
   * Sets the pointer style.
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @param windowId Window ID.
   * @param pointerStyle Pointer style.
   * @return Returns the result through a promise.
   */
  function setPointerStyle(windowId: number, pointerStyle: PointerStyle): Promise<void>;

  /**
   * Queries the pointer style.
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @param windowId Window ID.
   * @param callback Callback used to return the result.
   */
  function getPointerStyle(windowId: number, callback: AsyncCallback<PointerStyle>): void;

  /**
   * Queries the pointer style.
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @param windowId Window ID.
   * @return Returns the result through a promise.
   */
  function getPointerStyle(windowId: number): Promise<PointerStyle>;

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