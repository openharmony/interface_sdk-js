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
 * Configuration object for the **FolderStack** hover status, which describes the information about child components
 * that need to be moved to the upper screen in hover status.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface FolderStackOptions {
  /**
   * Array of IDs of child components that will be moved to the upper half-screen in hover status.
   * 
   * Default value: **[]**
   *
   * When hover is triggered, the child components in the **upperItems** array automatically avoid the foldable screen
   * crease area and move to the upper half-screen, while other components are stacked in the lower half-screen area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  upperItems?: Array<string>;
}

/**
 * **FolderStack** extends the [Stack]{@link ./stack} container, adding the <!--RP1-->foldable screen hover<!--RP1End-->
 * capability. By setting child component IDs in the **upperItems** array of the
 * [FolderStackOptions]{@link FolderStackOptions} configuration, the corresponding child components automatically avoid
 * the fold crease area and move to the upper screen. **FolderStack** is designed for the hover status scenario of dual-
 * fold devices, such as video playback and video conferencing apps, where the video image automatically moves to the
 * upper screen while the control panel remains on the lower screen. This component addresses the adaptation challenges
 * of dual-fold devices, delivering benefits such as improved user experience and simplified layout adaptation for
 * developers.
 *
 * > **NOTE**
 * >
 * > - The hover capability of this component is designed for <!--RP2-->dual-fold<!--RP2End--> devices and takes effect
 * > only on dual-fold devices. You can use [FoldStatus]{@link FoldStatus} to determine the fold status of the device.
 * >
 * > - When the parent component of this component is an
 * > [if/else: conditional rendering](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) node, the
 * > foldable screen hover capability becomes invalid.
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
   * A foldable screen hover layout container that extends [Stack]{@link ./stack}. It implements the foldable screen
   * hover capability through the **upperItems** configuration. When the device is in hover status, the specified child
   * components automatically move to the upper screen, while other components are stacked on the lower screen.
   *
   * @param { object } value - id of children need to be show in upperItem [since 11 - 17]
   * @param { FolderStackOptions } [options] - Configuration options of **FolderStack**, used to set the child
   *     components that need to be moved to the upper half screen in hover status. When the foldable screen hover
   *     capability is needed, specify child component IDs through the **upperItems** array. If not passed,
   *     **FolderStack** is used as a regular **Stack** component without the hover capability enabled, and
   *     **upperItems** defaults to an empty array. [since 18]
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
 * Defines the information about the fold status change, which takes effect only in landscape mode.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface OnFoldStatusChangeInfo {
  /**
   * Fold status of the current device.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  foldStatus: FoldStatus;
}

/**
 * Triggered when the fold status changes<!--RP4-->, which takes effect only in landscape mode<!--RP4End-->.
 *
 * @param { OnFoldStatusChangeInfo } event - Information about the fold status change. This takes effect only in
 *     landscape mode.
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
 * In addition to the [universal attributes]{@link CommonMethod}, the following attributes are supported.
 *
 * > **NOTE**
 * >
 * > Setting the **offset** and **margin** attributes may cause the upper and lower screens to obscure the fold crease
 * > area. This is not recommended.
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
   * Sets the alignment of child components in the container. After this attribute is set, child components are arranged
   * in the container according to the specified alignment. When both this attribute and
   * [align]{@link CommonMethod#align(value: Alignment)} are set, whichever is set last takes effect.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { Alignment } value - Alignment of the child component in the container. The value can be **TopStart**,
   *     **Top**, **TopEnd**, **Start**, **Center**, **End**, **BottomStart**, **Bottom**, or **BottomEnd**.
   *     <br>Default value: **Alignment.Center**
   *     <br>If an illegal value is set, the default value is used.
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  alignContent(value: Alignment): FolderStackAttribute;

  /**
   * Triggered when the fold status of the current device changes <!--RP3-->(This callback takes effect only in
   * landscape mode.)<!--RP3End-->.
   *
   * Typical usage: Adjust the app layout based on the fold status, for example, displaying a two-column layout in the
   * expanded state and adjusting the content distribution between the upper and lower screens in the half-fold status.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { function } callback - Callback invoked when the fold state of the device changes. [since 11 - 17]
   * @param { OnFoldStatusChangeCallback } callback - Callback invoked when the fold state of the device
   *     changes. [since 18]
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onFolderStateChange(callback: OnFoldStatusChangeCallback): FolderStackAttribute;

  /**
   * Triggered when the hover status of the current device changes.
   *
   * Typical usage: Adjust the app layout and interaction logic based on the hover status, for example, optimizing the
   * content display on the upper and lower screens in hover mode.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { function } handler - Callback invoked when the hover state of the device changes. [since 12 - 17]
   * @param { OnHoverStatusChangeCallback } handler - Callback invoked when the hover state of the device
   *     changes. [since 18]
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  onHoverStatusChange(handler: OnHoverStatusChangeCallback): FolderStackAttribute;

  /**
   * Sets whether to use the default animation effect. After this attribute is set, the default hover animation effect
   * of **FolderStack** is enabled or disabled.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { boolean } value - Whether to use the default animation effect.
   *     <br>Default value: **true**, which means the default animation effect is used; **false** means the default
   *     animation effect is not used.
   *     <br>If an illegal value is set, the default value is used.
   * @returns { FolderStackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enableAnimation(value: boolean): FolderStackAttribute;

  /**
   * Sets whether to enable auto-rotation for the **FolderStack** component in half-fold status. When the system auto-
   * rotate switch is turned off, this attribute controls whether **FolderStack** performs auto-rotation in half-fold
   * status.
   *
   * Typical usage: When the user has turned off the auto-rotate function in system settings, the app layout orientation
   * can still be automatically adjusted based on the fold status when the foldable device is in half-fold status.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { boolean } value - Whether to enable auto rotation.
   *     <br>Default value: **true**. When set to **true**, **FolderStack** automatically rotates during layout in the
   *     half-fold status (see [FoldStatus]{@link FoldStatus}). When set to **false**, FolderStack does not
   *     automatically rotate in the half-fold status. This attribute takes effect only when system auto rotation is
   *     disabled. When system auto rotation is enabled, this attribute does not take effect, and **FolderStack**
   *     follows the system rotation behavior. This parameter takes effect only on dual-fold devices. When the parent
   *     component of **FolderStack** is an if/else conditional rendering node, this parameter becomes invalid.
   *     <br>Illegal value: processed as the default value.
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
   * Rotation angle of the current app orientation.
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
 * **FolderStack** extends the [Stack]{@link ./stack} container, adding the <!--RP1-->foldable screen hover<!--RP1End-->
 * capability. By setting child component IDs in the **upperItems** array of the
 * [FolderStackOptions]{@link FolderStackOptions} configuration, the corresponding child components automatically avoid
 * the fold crease area and move to the upper screen. **FolderStack** is designed for the hover status scenario of dual-
 * fold devices, such as video playback and video conferencing apps, where the video image automatically moves to the
 * upper screen while the control panel remains on the lower screen. This component addresses the adaptation challenges
 * of dual-fold devices, delivering benefits such as improved user experience and simplified layout adaptation for
 * developers.
 *
 * > **NOTE**
 * >
 * > - The hover capability of this component is designed for <!--RP2-->dual-fold<!--RP2End--> devices and takes effect
 * > only on dual-fold devices. You can use [FoldStatus]{@link FoldStatus} to determine the fold status of the device.
 * >
 * > - When the parent component of this component is an
 * > [if/else: conditional rendering](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) node, the
 * > foldable screen hover capability becomes invalid.
 *
 * ## Child Components
 *
 * Multiple child components are supported.
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
