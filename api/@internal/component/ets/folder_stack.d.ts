/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 */

/**
 * Enumerates the window modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare type WindowStatusType = import('../api/@ohos.window').default.WindowStatusType;

/**
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer
 * > element's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface FolderStackOptions {
  /**
   * Array of IDs of child components that will be moved to the upper half screen in the hover state.
   * 
   * On hover, child components with IDs in this array automatically shift away from the crease area and move to the 
   * upper half screen, while other components are stacked in the lower half screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  upperItems?: Array<string>;
}

/**
 * Provides ports for stacking containers.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop [since 12]
 */
interface FolderStackInterface {
  /**
   * Defines the constructor of FolderStack component.
   *
   * @param { object } value - id of children need to be show in upperItem [since 11 - 17]
   * @param { FolderStackOptions } [options] - Configuration of the **FolderStack** component. [since 18]
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  (options?: FolderStackOptions): FolderStackAttribute;
}

/**
 * Called when the folding state changes. This API takes effect only in landscape mode.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer
 * > element's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface OnFoldStatusChangeInfo {
  /**
   * Current fold state of the device.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  foldStatus: FoldStatus;
}

/**
 * Current fold state of the device.
 *
 * @param { OnFoldStatusChangeInfo } event - Current fold state of the device.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnFoldStatusChangeCallback = (event: OnFoldStatusChangeInfo) => void;

/**
 * Defines the current callback invoked when the hover state of the device changes.
 *
 * @param { HoverEventParam } param - Parameters related to the hover state of the device, including the fold state,
 *     hover state, application orientation, and window mode enumeration of the device.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnHoverStatusChangeCallback = (param: HoverEventParam) => void;

/**
 * In addition to the [universal events]{@link CommonMethod}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop [since 12]
 */
declare class FolderStackAttribute extends CommonMethod<FolderStackAttribute> {
  /**
   * Sets the alignment of child components in the container. When both this attribute and the
   * [align]{@link CommonMethod#align} attribute are set, whichever is set last takes effect.
   *
   * @param { Alignment } value - Alignment of child components in the container.
   *     <br>Default value: **Alignment.Center**.
   *     <br>Invalid values are treated as the default value.
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  alignContent(value: Alignment): FolderStackAttribute;

  /**
   * Triggered when the fold state of the device changes. This API takes effect only in
   * landscape mode.
   *
   * @param { function } callback - Callback invoked when the fold state of the device changes. [since 11 - 17]
   * @param { OnFoldStatusChangeCallback } callback
   *     - Callback invoked when the fold state of the device changes. [since 18]
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onFolderStateChange(callback: OnFoldStatusChangeCallback): FolderStackAttribute;

  /**
   * Triggered when the hover state of the device changes.
   *
   * @param { function } handler - Callback invoked when the hover state of the device changes. [since 12 - 17]
   * @param { OnHoverStatusChangeCallback } handler
   *     - Callback invoked when the hover state of the device changes. [since 18]
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onHoverStatusChange(handler: OnHoverStatusChangeCallback): FolderStackAttribute;

  /**
   * Sets whether to enable the default animation.
   *
   * @param { boolean } value - Whether to enable the default animation.
   *     <br>Default value: **true**. **true**: Enable the default animation. **false**: Disable
   *     the default animation.
   *     <br>Invalid values are treated as the default value.
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enableAnimation(value: boolean): FolderStackAttribute;

  /**
   * Sets whether to enable auto rotation. This attribute is effective only when auto rotation
   * is disabled in device system settings.
   *
   * @param { boolean } value - Whether to enable auto rotation.
   *     <br>Default value: **true**. **true**: Enable auto rotation when the **FolderStack**
   *     component is in [half-folded state](docroot://reference/apis-arkui/arkui-ts/ts-appendix-enums.md#foldstatus11).
   *     **false**: Disable auto rotation. This setting applies uniformly across all device types.
   *     <br>Invalid values are treated as the default value.
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  autoHalfFold(value: boolean): FolderStackAttribute;
}

/**
 * The param of hover event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface HoverEventParam {
  /**
   * Current fold state of the device.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  foldStatus: FoldStatus;

  /**
   * Whether hover mode is enabled. **true**: Hover mode is enabled. **false**: Hover mode is disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  isHoverMode: boolean;

  /**
   * Current orientation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  appRotation: AppRotation;

  /**
   * Window mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  windowStatusType: WindowStatusType;
}
/**
 * **FolderStack** extends the [Stack]{@link stack} container, adding the <!--RP1-->foldable phone hover<!--RP1End-->
 * capability. Child components specified in the **upperItems** array of [FolderStackOptions]{@link FolderStackOptions}
 * automatically avoid the screen crease area and reposition to the upper display.
 * > **NOTE**
 * >
 * > The hover capability is designed for and only works on <!--RP2-->dual-fold devices<!--RP2End-->.
 * >
 * > When the component's parent is an
 * > [if/else conditional render](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) node, the foldable
 * > hover feature is disabled.
 * >
 * > **Child Components**
 * >
 * > Multiple child components are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop [since 12]
 */
declare const FolderStack: FolderStackInterface;

/**
 * Defines FolderStack Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop [since 12]
 */
declare const FolderStackInstance: FolderStackAttribute;
