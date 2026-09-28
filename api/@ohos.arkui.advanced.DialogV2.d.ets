/*
* Copyright (C) 2024 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit ArkUI
 */

/**
 * Defines the click event type for buttons in the dialog box action area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare type AdvancedDialogV2ButtonAction = () => void;

/**
 * Defines the button used in a dialog box to perform actions.
 *
 * > **NOTE**
 * >
 * > The priority of **buttonStyle** and **role** is higher than that of **fontColor** and **background**. If
 * > **buttonStyle** and **role** are at the default values, the settings of **fontColor** and **background** take
 * > effect.
 * >
 * > If **defaultFocus** is set for multiple buttons, the default focus is the first button in the display order that
 * > has **defaultFocus** set.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @class AdvancedDialogV2Button
 */
@ObservedV2
export declare class AdvancedDialogV2Button {
  /**
   * Content of the button.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  content: ResourceStr;
  /**
   * Action triggered when the button is clicked.
   *
   * By default, there is no action.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  action?: AdvancedDialogV2ButtonAction;
  /**
   * Background of the button.
   *
   * The setting follows **buttonStyle** by default.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  background?: ColorMetrics;
  /**
   * Font color of the button.
   *
   * The setting follows **buttonStyle** by default.
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  fontColor?: ColorMetrics;
  /**
   * Style of the button.
   *
   * Default value: **ButtonStyleMode.NORMAL** for 2-in-1 devices and **ButtonStyleMode.TEXTUAL** for other devices
   *
   * Decorator: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  buttonStyle?: ButtonStyleMode;
  /**
   * Role of the button.
   *
   * Default value: **ButtonRole.NORMAL**
   *
   * Decorator: @Trace
   *
   * @default ButtonRole.NORMAL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  role?: ButtonRole;
  /**
   * Whether the button is the default focus.
   *
   * **true**: The button is the default focus.
   *
   * **false**: The button is not the default focus.
   *
   * Default value: **false**.
   *
   * Decorator: @Trace
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  defaultFocus?: boolean;
  /**
   * Whether the button is enabled.
   *
   * **true**: The button is enabled.
   *
   * **false**: The button is disabled.
   *
   * Default value: **true**.
   *
   * Decorator: @Trace
   *
   * @default { true }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  enabled?: boolean;
  /**
   * Alignment method of the button text.
   *
   * Default value: **TextAlign.Start**
   *
   * Decorator: @Trace
   *
   * @default { TextAlign.Start }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  @Trace
  textAlign?: TextAlign;
  /**
   * A constructor used to create an **AdvancedDialogV2Button** instance.
   *
   * @param { AdvancedDialogV2ButtonOptions } options - button info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: AdvancedDialogV2ButtonOptions);
}

/**
 * Provides options used to initialize an **AdvancedDialogV2Button** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare interface AdvancedDialogV2ButtonOptions {
  /**
   * Content of the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  content: ResourceStr;
  /**
   * Action triggered when the button is clicked.
   *
   * By default, there is no event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  action?: AdvancedDialogV2ButtonAction;
  /**
   * Background of the button.
   *
   * The setting follows **buttonStyle** by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  background?: ColorMetrics;
  /**
   * Font color of the button.
   *
   * The setting follows **buttonStyle** by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  fontColor?: ColorMetrics;
  /**
   * Style of the button.
   *
   * Default value: **ButtonStyleMode.NORMAL** for 2-in-1 devices and **ButtonStyleMode.TEXTUAL** for other devices
   *
   * @default ButtonStyleMode.TEXTUAL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  buttonStyle?: ButtonStyleMode;
  /**
   * Role of the button.
   *
   * Default value: **ButtonRole.NORMAL**
   *
   * @default ButtonRole.NORMAL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  role?: ButtonRole;
  /**
   * Whether the button is the default focus.
   *
   * **true**: The button is the default focus.
   *
   * **false**: The button is not the default focus.
   *
   * Default value: **false**.
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  defaultFocus?: boolean;
  /**
   * Whether the button is enabled.
   *
   * **true**: The button is enabled.
   *
   * **false**: The button is disabled.
   *
   * Default value: **true**.
   *
   * @default { true }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enabled?: boolean;
  /**
   * Alignment method of the button text.
   *
   * Default value: **TextAlign.Start**
   *
   * @default { TextAlign.Start }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  textAlign?: TextAlign;
}

/**
 * Defines the event triggered when the selected status of the check box changes.
 *
 * @param { boolean } checked - Checkbox status.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare type AdvancedDialogV2OnCheckedChange = (checked: boolean) => void;

/**
 * The dialog box is a modal window that commands attention while retaining the current context. It is frequently used
 * to draw the user's attention to vital information or prompt the user to complete a specific task. As all modal
 * windows, this component requires the user to interact before exiting.
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1), V2
 * offers a higher level of observation and management over data objects beyond the component level. You can now more
 * easily manage dialog box data and states with greater flexibility, leading to faster UI updates.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **DialogV2** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **DialogV2** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **DialogV2** component.
 *
 * @struct { TipsDialogV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ComponentV2
export declare struct TipsDialogV2 {
  /**
   * Image to be displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Require
  @Param
  imageRes: ResourceStr | PixelMap;
  /**
   * Size of the image.
   *
   * Default value: **64*64vp**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  imageSize?: SizeOptions;
  /**
   * Stroke color of the image.
   *
   * Default value: **Color.Black**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  imageBorderColor?: ColorMetrics;
  /**
   * Stroke width of the image.
   *
   * By default, there is no stroke effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  imageBorderWidth?: LengthMetrics;
  /**
   * Title of the dialog box.
   *
   * It is not displayed by default.
   *
   * **NOTE**
   *
   * If the title exceeds two lines, it will be truncated with an ellipsis (...).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  title?: ResourceStr;
  /**
   * Content of the dialog box.
   *
   * It is not displayed by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  content?: ResourceStr;
  /**
   * Content of the check box.
   *
   * It is not displayed by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  checkTips?: ResourceStr;
  /**
   * Whether to select the check box.
   *
   * **true**: The check box is selected. **false**: The check box is not selected.
   *
   * Default value: **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  checked?: boolean;
  /**
   * Left button of the dialog box.
   *
   * It is not displayed by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  primaryButton?: AdvancedDialogV2Button;
  /**
   * Right button of the dialog box.
   *
   * It is not displayed by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  secondaryButton?: AdvancedDialogV2Button;
  /**
   * Event triggered when the selected status of the check box changes.
   *
   * By default, there is no event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  onCheckedChange?: AdvancedDialogV2OnCheckedChange;
}

/**
 * The dialog box is a modal window that commands attention while retaining the current context. It is frequently used
 * to draw the user's attention to vital information or prompt the user to complete a specific task. As all modal
 * windows, this component requires the user to interact before exiting.
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1), V2
 * offers a higher level of observation and management over data objects beyond the component level. You can now more
 * easily manage dialog box data and states with greater flexibility, leading to faster UI updates.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **DialogV2** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **DialogV2** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **DialogV2** component.
 *
 * @struct { SelectDialogV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ComponentV2
export declare struct SelectDialogV2 {
  /**
   * Sets the SelectDialogV2 title.
   *
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Require
  @Param
  title: ResourceStr;
  /**
   * Sets the SelectDialogV2 content.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  content?: ResourceStr;
  /**
   * Sets the SelectDialogV2 selected index.
   *
   * @type { ?number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  selectedIndex?: number;
  /**
   * Sets the SelectDialogV2 confirm button.
   *
   * @type { ?AdvancedDialogV2Button }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  confirm?: AdvancedDialogV2Button;
  /**
   * Sets the SelectDialog sheets.
   * @type { SheetInfo[] }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Require
  @Param
  radioContent: SheetInfo[];
}

/**
 * The dialog box is a modal window that commands attention while retaining the current context. It is frequently used
 * to draw the user's attention to vital information or prompt the user to complete a specific task. As all modal
 * windows, this component requires the user to interact before exiting.
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1), V2
 * offers a higher level of observation and management over data objects beyond the component level. You can now more
 * easily manage dialog box data and states with greater flexibility, leading to faster UI updates.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **DialogV2** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **DialogV2** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **DialogV2** component.
 *
 * @struct { ConfirmDialogV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ComponentV2
export declare struct ConfirmDialogV2 {
  /**
   * Sets the ConfirmDialogV2 title.
   *
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Require
  @Param
  title: ResourceStr;
  /**
   * Sets the ConfirmDialogV2 content.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  content?: ResourceStr;
  /**
   * Sets the ConfirmDialogV2 checkbox tips.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  checkTips?: ResourceStr;
  /**
   * Sets the ConfirmDialogV2 checkbox state.
   *
   * @type { ?boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  checked?: boolean;
  /**
   * Sets the ConfirmDialogV2 primary button.
   *
   * @type { ?AdvancedDialogV2Button }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  primaryButton?: AdvancedDialogV2Button;
  /**
   * Sets the ConfirmDialogV2 secondary button.
   *
   * @type { ?AdvancedDialogV2Button }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  secondaryButton?: AdvancedDialogV2Button;
  /**
   * Sets the ConfirmDialogV2 CheckBox Callback.
   *
   * @type { ?AdvancedDialogV2OnCheckedChange }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  onCheckedChange?: AdvancedDialogV2OnCheckedChange;
}

/**
 * The dialog box is a modal window that commands attention while retaining the current context. It is frequently used
 * to draw the user's attention to vital information or prompt the user to complete a specific task. As all modal
 * windows, this component requires the user to interact before exiting.
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1), V2
 * offers a higher level of observation and management over data objects beyond the component level. You can now more
 * easily manage dialog box data and states with greater flexibility, leading to faster UI updates.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **DialogV2** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **DialogV2** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **DialogV2** component.
 *
 * @struct { AlertDialogV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ComponentV2
export declare struct AlertDialogV2 {
  /**
   * Sets the AlertDialogV2 title.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  primaryTitle?: ResourceStr;
  /**
   * Sets the AlertDialogV2 secondary title.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  secondaryTitle?: ResourceStr;
  /**
   * Sets the AlertDialogV2 content.
   *
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Require
  @Param
  content: ResourceStr;
  /**
   * Sets the AlertDialogV2 primary button.
   *
   * @type { ?AdvancedDialogV2Button }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  primaryButton?: AdvancedDialogV2Button;
  /**
   * Sets the AlertDialogV2 secondary button.
   *
   * @type { ?AdvancedDialogV2Button }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  secondaryButton?: AdvancedDialogV2Button;
}

/**
 * The dialog box is a modal window that commands attention while retaining the current context. It is frequently used
 * to draw the user's attention to vital information or prompt the user to complete a specific task. As all modal
 * windows, this component requires the user to interact before exiting.
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1), V2
 * offers a higher level of observation and management over data objects beyond the component level. You can now more
 * easily manage dialog box data and states with greater flexibility, leading to faster UI updates.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **DialogV2** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **DialogV2** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **DialogV2** component.
 *
 * @struct { LoadingDialogV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ComponentV2
export declare struct LoadingDialogV2 {
  /**
   * Sets the LoadingDialogV2 content.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  content?: ResourceStr;
}

/**
 * The dialog box is a modal window that commands attention while retaining the current context. It is frequently used
 * to draw the user's attention to vital information or prompt the user to complete a specific task. As all modal
 * windows, this component requires the user to interact before exiting.
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1), V2
 * offers a higher level of observation and management over data objects beyond the component level. You can now more
 * easily manage dialog box data and states with greater flexibility, leading to faster UI updates.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **DialogV2** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **DialogV2** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **DialogV2** component.
 *
 * @struct { CustomContentDialogV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ComponentV2
export declare struct CustomContentDialogV2 {
  /**
   * Sets the CustomContentDialogV2 title.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  primaryTitle?: ResourceStr;
  /**
   * Sets the CustomContentDialogV2 secondary title.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  secondaryTitle?: ResourceStr;
  /**
   * Sets the CustomContentDialogV2 content.
   *
   * @type { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @BuilderParam
  contentBuilder: CustomBuilder;
  /**
   * Sets the CustomContentDialogV2 content area padding.
   *
   * @type { ?LocalizedPadding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  contentAreaPadding?: LocalizedPadding;
  /**
   * Sets the CustomContentDialogV2 buttons.
   * @type { ?AdvancedDialogV2Button[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  buttons?: AdvancedDialogV2Button[];
}

/**
 * The dialog box is a modal window that commands attention while retaining the current context. It is frequently used
 * to draw the user's attention to vital information or prompt the user to complete a specific task. As all modal
 * windows, this component requires the user to interact before exiting.
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1), V2
 * offers a higher level of observation and management over data objects beyond the component level. You can now more
 * easily manage dialog box data and states with greater flexibility, leading to faster UI updates.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **DialogV2** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **DialogV2** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **DialogV2** component.
 *
 * @struct { PopoverDialogV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ComponentV2
export declare struct PopoverDialogV2 {
  /**
   * Sets the PopoverDialogV2 Visible Status.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Require
  @Param
  visible: boolean;
  /**
   * Sets the callback when visibility changed.
   *
   * @type { ?PopoverDialogV2OnVisibleChange }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Event
  $visible?: PopoverDialogV2OnVisibleChange;
  /**
   * Sets the PopoverDialogV2 options.
   *
   * @type { PopoverDialogV2Options }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Require
  @Param
  popover: PopoverDialogV2Options;
  /**
   * Sets the targetBuilder content.
   *
   * @type { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @BuilderParam
  targetBuilder: CustomBuilder;
}

/**
 * Defines the event triggered when the visibility of the popover dialog box changes.
 *
 * @param { boolean } visible - The visibility of PopoverDialogV2.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare type PopoverDialogV2OnVisibleChange = (visible: boolean) => void;

/**
 * Defines a set of options used to configure the popover dialog box, including its content and position.
 *
 * Inherits [CustomPopupOptions]{@link CustomPopupOptions}.
 *
 * > **NOTE**
 * >
 * > The default value of **radius** is **32vp**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare interface PopoverDialogV2Options extends CustomPopupOptions {}