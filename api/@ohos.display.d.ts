/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * Interface of display manager.
 *
 * @namespace display
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @since 7
 */
/**
 * Interface of display manager.
 *
 * @namespace display
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @crossplatform
 * @since 10
 */
declare namespace display {
  /**
   * Obtain the default display.
   *
   * @param { AsyncCallback<Display> } callback the result of display
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.display#getDefaultDisplaySync
   */
  function getDefaultDisplay(callback: AsyncCallback<Display>): void;

  /**
   * Obtain the default display.
   *
   * @returns { Promise<Display> } the result of display
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.display#getDefaultDisplaySync
   */
  function getDefaultDisplay(): Promise<Display>;

  /**
   * Obtain the default display.
   *
   * @returns { Display } the result of display
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Obtain the default display.
   *
   * @returns { Display } the result of display
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  function getDefaultDisplaySync(): Display;

  /**
   * Obtain all displays.
   *
   * @param { AsyncCallback<Array<Display>> } callback the result of all displays
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.display#getAllDisplays
   */
  function getAllDisplay(callback: AsyncCallback<Array<Display>>): void;

  /**
   * Obtain all displays.
   *
   * @returns { Promise<Array<Display>> } the result of all displays
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.display#getAllDisplays
   */
  function getAllDisplay(): Promise<Array<Display>>;

  /**
   * Obtain all displays.
   *
   * @param { AsyncCallback<Array<Display>> } callback the result of all displays
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  function getAllDisplays(callback: AsyncCallback<Array<Display>>): void;

  /**
   * Obtain all displays.
   *
   * @returns { Promise<Array<Display>> } the result of all displays
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  function getAllDisplays(): Promise<Array<Display>>;

  /**
   * Check whether there is a privacy window on the current display.
   *
   * @param { number } displayId Display id to query
   * @returns { boolean } true means there is a privacy window on the current display
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function hasPrivateWindow(displayId: number): boolean;

  /**
   * Register the callback for display changes.
   *
   * @param { 'add' | 'remove' | 'change' } type the event of display change
   * @param { Callback<number> } callback the display id of changed
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  function on(type: 'add' | 'remove' | 'change', callback: Callback<number>): void;

  /**
   * Unregister the callback for display changes.
   *
   * @param { 'add' | 'remove' | 'change' } type the event of display change event
   * @param { Callback<number> } callback the display id of changed
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  function off(type: 'add' | 'remove' | 'change', callback?: Callback<number>): void;

  /**
   * Register the callback for private mode changes.
   *
   * @param { 'privateModeChange' } type the event of private mode changes
   * @param { Callback<boolean> } callback Callback used to return the result whether display is on private mode or not
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function on(type: 'privateModeChange', callback: Callback<boolean>): void;

  /**
   * Unregister the callback for private mode changes.
   *
   * @param { 'privateModeChange' } type the event of private mode changes
   * @param { Callback<boolean> } callback Callback used to return the result whether display is on private mode or not
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function off(type: 'privateModeChange', callback?: Callback<boolean>): void;

  /**
   * Enumerates the display states.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  enum DisplayState {
    /**
     * Unknown.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    STATE_UNKNOWN = 0,
    /**
     * Screen off.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    STATE_OFF,
    /**
     * Screen on.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    STATE_ON,
    /**
     * Doze, but it will update for some important system messages.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    STATE_DOZE,
    /**
     * Doze and not update.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    STATE_DOZE_SUSPEND,
    /**
     * VR node.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    STATE_VR,
    /**
     * Screen on and not update.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    STATE_ON_SUSPEND
  }

  /**
   * Enumerates the display orientation.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  enum Orientation {
    /**
     * Indicate that the display content is in portrait mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    PORTRAIT = 0,

    /**
     * Indicate that the display content is in landscape mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    LANDSCAPE = 1,

    /**
     * Indicate that the display content is in the opposite direction of the portrait mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    PORTRAIT_INVERTED = 2,

    /**
     * Indicate that the display content is in the opposite direction of the landscape mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    LANDSCAPE_INVERTED = 3
  }

  /**
   * Rectangle
   *
   * @interface Rect
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Rectangle
   *
   * @interface Rect
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  interface Rect {
    /**
     * The X-axis coordinate of the upper left vertex of the rectangle, in pixels.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * The X-axis coordinate of the upper left vertex of the rectangle, in pixels.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    left: number;

    /**
     * The Y-axis coordinate of the upper left vertex of the rectangle, in pixels.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * The Y-axis coordinate of the upper left vertex of the rectangle, in pixels.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    top: number;

    /**
     * Width of the rectangle, in pixels.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Width of the rectangle, in pixels.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    width: number;

    /**
     * Height of the rectangle, in pixels.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Height of the rectangle, in pixels.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    height: number;
  }

  /**
   * Curved area rects of the waterfall display.
   *
   * @interface WaterfallDisplayAreaRects
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  interface WaterfallDisplayAreaRects {
    /**
     * Indicates the size of left side curved area of the waterfall screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    readonly left: Rect;

    /**
     * Indicates the size of right side curved area of the waterfall screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    readonly right: Rect;

    /**
     * Indicates the size of top side curved area of the waterfall screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    readonly top: Rect;

    /**
     * Indicates the size of bottom side curved area of the waterfall screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    readonly bottom: Rect;
  }

  /**
   * Cutout information of the display.
   *
   * @interface CutoutInfo
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  interface CutoutInfo {
    /**
     * Bounding rectangles of the cutout areas of the display.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    readonly boundingRects: Array<Rect>;

    /**
     * Rectangles of curved parts on each side of a waterfall display.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    readonly waterfallDisplayAreaRects: WaterfallDisplayAreaRects;
  }

  /**
   * Define properties of the display. They cannot be updated automatically.
   *
   * @interface Display
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  /**
   * Define properties of the display. They cannot be updated automatically.
   *
   * @interface Display
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  interface Display {
    /**
     * Display ID.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Display ID.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    id: number;

    /**
     * Display name.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    name: string;

    /**
     * The display is alive.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    alive: boolean;

    /**
     * The state of display.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    state: DisplayState;

    /**
     * Refresh rate, in Hz.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    refreshRate: number;

    /**
     * Rotation degrees of the display.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    rotation: number;

    /**
     * Display width, in pixels.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Display width, in pixels.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    width: number;

    /**
     * Display height, in pixels.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Display height, in pixels.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    height: number;

    /**
     * Display resolution.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    densityDPI: number;

    /**
     * Display orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    orientation: Orientation;

    /**
     * Display density, in pixels. The value for a low-resolution display is 1.0.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    densityPixels: number;

    /**
     * Text scale density of the display.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    scaledDensity: number;

    /**
     * DPI on the x-axis.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    xDPI: number;

    /**
     * DPI on the y-axis.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    yDPI: number;

    /**
     * Obtain the cutout info of the display.
     *
     * @param { AsyncCallback<CutoutInfo> } callback
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    getCutoutInfo(callback: AsyncCallback<CutoutInfo>): void;

    /**
     * Obtain the cutout info of the display.
     *
     * @returns { Promise<CutoutInfo> }
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    getCutoutInfo(): Promise<CutoutInfo>;
  }
}

export default display;
