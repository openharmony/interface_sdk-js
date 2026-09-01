/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * Declaration of the menu item on the right side.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class SelectTitleBarMenuItem {
  /**
   * Icon resource.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;

  /**
   * Symbol icon resource, which has higher priority than **value**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Icon label.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 13 dynamic
   */
  label?: ResourceStr;

  /**
   * Whether to enable the item.
   *
   * Default value: **false**. **true** to enable, **false** to disable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isEnabled?: boolean;

  /**
   * Action to perform.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;

  /**
   * Accessibility text, that is, accessible label name. If a component does not contain text information, it will not
   * be announced by the screen reader when selected. In this case, the screen reader user cannot know which component
   * is selected. To solve this problem, you can set accessibility text for components without text information. When
   * such a component is selected, the screen reader announces the specified accessibility text, informing the user
   * which component is selected.
   *
   * Default value: value of the **label** property if it is set and an empty string otherwise.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessible description. You can provide comprehensive text explanations to help users understand the operation
   * they are about to perform and its potential consequences, especially when these cannot be inferred from the
   * component's attributes and accessibility text alone. If a component contains both text information and the
   * accessible description, the text is announced first and then the accessible description, when the component is
   * selected.
   *
   * Default value: **"Double-tap to activate"**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level. It determines whether the component can be recognized by accessibility services.
   *
   * The options are as follows:
   *
   * **"auto"**: It is treated as "yes" by the system.
   *
   * **"yes"**: The component can be recognized by accessibility services.
   *
   * **"no"**: The component cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: Neither the component nor its child components can be recognized by accessibility
   * services.
   *
   * Default value: **"auto"**
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * The **SelectTitleBar** component represents a drop-down menu title bar used for switching between pages of different
 * levels (configured with the **Back** button).
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **SelectTitleBar** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional **__Common__** node and mounts the universal attributes and universal events on this node
 * > rather than the **SelectTitleBar** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **SelectTitleBar** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@Component
export declare struct SelectTitleBar {
  /**
   * Index of the currently selected item.
   *
   * The index of the first item is 0. If this attribute is not set, the default value **0** will be used.
   *
   * @type { number }. [since 10 - 19]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  selected: number;

  /**
   * Options in the drop-down menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  options: Array<SelectOption>;

  /**
   * List of menu items on the right side of the title bar. This parameter is passed to add a list of menu items to the
   * right side of the title bar. If this parameter is not specified, the menu area on the right is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  menuItems?: Array<SelectTitleBarMenuItem>;

  /**
   * Subtitle, used to display supplementary information. This parameter is passed to show the subtitle. If this
   * parameter is not specified, the subtitle area is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  subtitle?: ResourceStr;

  /**
   * Value for the badge.
   *
   * Value range: [-2147483648, 2147483647]. If the value is out of the range, 4294967296 is added or subtracted so that
   * the value is within the range. If the value is not an integer, it is rounded off to the nearest integer. For
   * example, 5.5 is rounded off to 5.
   *
   * Note: The badge will not be displayed if the value is less than or equal to 0.
   *
   * The maximum number of messages is 99. If this limit is exceeded, only **99+** is displayed. Extremely large values
   * are considered exceptional and will result in the badge not being displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  badgeValue?: number;

  /**
   * Whether to hide the back arrow on the left.
   *
   * Default value: **false**. **true** to hide, **false** to show.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  hidesBackButton?: boolean;

  /**
   * Callback invoked when an option in the drop-down menu is selected. The index of the selected option is passed in.
   * This parameter is passed to handle specific service logic after an option in the drop-down menu is selected. This
   * parameter can be omitted when there is no specific service logic.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onSelected?: ((index: number) => void);
}