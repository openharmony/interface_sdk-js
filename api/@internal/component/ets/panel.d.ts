/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/**
 * Sets the initial state of the slidable panel.
 * @since 7
 */
/**
 * Sets the initial state of the slidable panel.
 * @crossplatform
 * @since 10
 */
declare enum PanelMode {
  /**
   * Minimum state.
   * @since 7
   */
  /**
   * Minimum state.
   * @crossplatform
   * @since 10
   */
  Mini,

  /**
   * SHalf-screen-like status
   * @since 7
   */
  /**
   * SHalf-screen-like status
   * @crossplatform
   * @since 10
   */
  Half,

  /**
   * Class Full Screen Status.
   * @since 7
   */
  /**
   * Class Full Screen Status.
   * @crossplatform
   * @since 10
   */
  Full,
}

/**
 * Sets the type of sliding panel.
 * @since 7
 */
/**
 * Sets the type of sliding panel.
 * @crossplatform
 * @since 10
 */
declare enum PanelType {
  /**
   * The switch between the minibar and full-screen display is provided.
   * @since 7
   */
  /**
   * The switch between the minibar and full-screen display is provided.
   * @crossplatform
   * @since 10
   */
  Minibar,

  /**
   * Permanent content display class.
   * The switchover effect is provided in three sizes: large (full-screen), medium (half-screen), and small.
   * @since 7
   */
  /**
   * Permanent content display class.
   * The switchover effect is provided in three sizes: large (full-screen), medium (half-screen), and small.
   * @crossplatform
   * @since 10
   */
  Foldable,

  /**
   * Temporary content display area.
   * The switchover effect is provided in three sizes: large (full-screen), medium (half-screen), and small.
   * @since 7
   */
  /**
   * Temporary content display area.
   * The switchover effect is provided in three sizes: large (full-screen), medium (half-screen), and small.
   * @crossplatform
   * @since 10
   */
  Temporary,
}

/**
 * Provides a sliding panel interface.
 * @since 7
 */
/**
 * Provides a sliding panel interface.
 * @crossplatform
 * @since 10
 */
interface PanelInterface {
  /**
   * Called when the panel slidable panel pops up.
   * @since 7
   */
  /**
   * Called when the panel slidable panel pops up.
   * @crossplatform
   * @since 10
   */
  (show: boolean): PanelAttribute;
}

/**
 * @since 7
 */
/**
 * Pane Attribute.
 * @crossplatform
 * @since 10
 */
declare class PanelAttribute extends CommonMethod<PanelAttribute> {
  /**
   * Called when the initial state of the slidable panel is set.
   * @since 7
   */
  /**
   * Called when the initial state of the slidable panel is set.
   * @crossplatform
   * @since 10
   */
  mode(value: PanelMode): PanelAttribute;

  /**
   * Called when the slidable panel type is set.
   * @since 7
   */
  /**
   * Called when the slidable panel type is set.
   * @crossplatform
   * @since 10
   */
  type(value: PanelType): PanelAttribute;

  /**
   * Called when determining whether dragbar exists.
   * @since 7
   */
  /**
   * Called when determining whether dragbar exists.
   * @crossplatform
   * @since 10
   */
  dragBar(value: boolean): PanelAttribute;

  /**
   * Called when the height in the full state is specified.
   * @since 7
   */
  /**
   * Called when the height in the full state is specified.
   * @crossplatform
   * @since 10
   */
  fullHeight(value: number | string): PanelAttribute;

  /**
   * Called when the height in the half state is specified.
   * @since 7
   */
  /**
   * Called when the height in the half state is specified.
   * @crossplatform
   * @since 10
   */
  halfHeight(value: number | string): PanelAttribute;

  /**
   * Called when the height in the mini state is specified.
   * @since 7
   */
  /**
   * Called when the height in the mini state is specified.
   * @crossplatform
   * @since 10
   */
  miniHeight(value: number | string): PanelAttribute;

  /**
   * Called when the panel slidable panel pops up.
   * @since 7
   */
  /**
   * Called when the panel slidable panel pops up.
   * @crossplatform
   * @since 10
   */
  show(value: boolean): PanelAttribute;

  /**
   * Called when the panel background mask is requested.
   * @since 9
   */
  /**
   * Called when the panel background mask is requested.
   * @crossplatform
   * @since 10
   */
  backgroundMask(color: ResourceColor): PanelAttribute;

  /**
   * Called when the state of the slidable panel changes.
   * @since 7
   */
  /**
   * Called when the state of the slidable panel changes.
   * @crossplatform
   * @since 10
   */
  onChange(
    event: (
      /**
       * Width of content area.
       * @since 7
       */
      width: number,

      /**
       * Height of content area.
       * @since 7
       */
      height: number,

      /**
       * Initial state.
       * @since 7
       */
      mode: PanelMode,
    ) => void,
  ): PanelAttribute;

  /**
   * Called when height of the panel is changed
   * @since 9
   */
  /**
   * Called when height of the panel is changed
   * @crossplatform
   * @since 10
   */
  onHeightChange(callback: (value: number) => void): PanelAttribute;
}

/**
 * Defines Panel Component.
 * @since 7
 */
/**
 * Defines Panel Component.
 * @crossplatform
 * @since 10
 */
declare const Panel: PanelInterface;

/**
 * Defines Panel Component instance.
 * @since 7
 */
/**
 * Defines Panel Component instance.
 * @crossplatform
 * @since 10
 */
declare const PanelInstance: PanelAttribute;
