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
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class EditableTitleBarMenuItem {
  /**
   * Icon resource.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;

  /**
   * Icon label.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  label?: ResourceStr;

  /**
   * Whether to enable the item. Default value: **true**.
   *
   * **true**: The item is enabled.
   *
   * **false**: The item is disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isEnabled?: boolean;

  /**
   * Right-side custom button click event of the title bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
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
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessible description. You can provide comprehensive text explanations to help users understand the operation they
   * are about to perform and its potential consequences, especially when these cannot be inferred from the component's
   * attributes and accessibility text alone. If a component contains both text information and the accessible
   * description, the text is announced first and then the accessible description, when the component is selected.
   *
   * Default value: **"Double-tap to activate"**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level. It determines whether the component can be recognized by accessibility services.
   *
   * The options are as follows:
   *
   * **"auto"**: This option is treated as "yes" by the system for this component.
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
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Whether to set the item as the default focus.
   *
   * **true**: Set the item as the default focus.
   *
   * **false**: Do not set the item as the default focus.
   *
   * Default value: **false**
   *
   * The **defaultFocus** attribute requires the **isEnabled** attribute to be set to **true** beforehand; otherwise,
   * **defaultFocus** will be treated as **false**.
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  defaultFocus?: boolean;

  /**
   * Symbol icon resource, which has higher priority than **value**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;
}

/**
 * Declaration of the image item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type EditableTitleBarItem = EditableTitleBarMenuItem;

/**
 * Declaration of the left icon type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare enum EditableLeftIconType {
  /**
   * Back.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  Back = 0,

  /**
   * Cancel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  Cancel = 1
}

/**
 * Indicates the options of the editable title bar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare interface EditableTitleBarOptions {
  /**
   * Background color of the title bar.
   *
   * Default value: **'#00000000'**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Background blur style of the title bar.
   *
   * Default value: **BlurStyle.NONE**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Types of the expanded safe areas.
   *
   * Default value: **[SafeAreaType.SYSTEM]**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  safeAreaTypes?: Array<SafeAreaType>;

  /**
   * Edges for expanding the safe area.
   *
   * Default value: **[SafeAreaEdge.TOP]**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  safeAreaEdges?: Array<SafeAreaEdge>;
}

/**
 * The editable title bar is a title bar that comes with button icons, typically **Cancel** on the left and **Confirm**
 * on the right, on a multi-select or editing page.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **EditableTitleBar** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional **__Common__** node and mounts the universal attributes and universal events on this node
 * > rather than the **EditableTitleBar** component itself. As a result, the configured universal attributes and
 * > universal events may fail to take effect or behave as intended. For this reason, avoid using universal attributes
 * > and events with the **EditableTitleBar** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@Component
export declare struct EditableTitleBar {
  /**
   * Type of the icon on the left.
   *
   * Default value: **EditableLeftIconType.Back**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  leftIconStyle: EditableLeftIconType;

  /**
   * A single menu item for the profile picture on the left. This parameter is required to display a profile picture on
   * the left side of the title bar. If this parameter is not passed, the default value is used and no profile picture
   * is displayed.
   *
   * Default value: **undefined**
   *
   * Note: Accessibility properties are not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  imageItem?: EditableTitleBarItem;

  /**
   * Title.
   *
   * Default value: **''**, indicating that the title is empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  title: ResourceStr;

  /**
   * Subtitle. This parameter is required to display a subtitle below the title bar. If this parameter is not passed,
   * the default value is used and no subtitle is displayed.
   *
   * Default value: **''**, indicating that the subtitle is empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  subtitle?: ResourceStr;

  /**
   * Whether the save button on the right is required.
   *
   * Default value: **true**, indicating that the save button on the right is required.
   *
   * **NOTE**
   *
   * If not decorated by @Require, this parameter is not subject to mandatory validation during construction.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isSaveIconRequired: boolean;

  /**
   * List of menu items on the right. This parameter is required to display custom buttons on the right of the title
   * bar. If this parameter is not passed, the default value is used, and no menu item list is displayed on the right.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  menuItems?: Array<EditableTitleBarMenuItem>;

  /**
   * Save button click event. This parameter is required to customize the save operation logic. If this parameter is not
   * specified, clicking the button does not respond.
   *
   * Default value: **() => void**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onSave?: () => void;

  /**
   * Cancel action event, which is triggered when the left button is of the Cancel type. This parameter is required to
   * customize the return or cancel operation logic. If this parameter is not specified, clicking the button on the left
   * does not respond.
   *
   * Default value: **() => void**
   *
   * Back action event, which is triggered when the button on the left side is of the Back type, since API version 12.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onCancel?: () => void;

  /**
   * Title style.
   *
   * Default value:
   *
   * {
   *
   * safeAreaTypes: [SafeAreaType.SYSTEM],
   *
   * safeAreaEdges: [SafeAreaEdge.TOP],
   *
   * backgroundColor: '#00000000'
   *
   * }
   *
   * **NOTE**
   *
   * If not decorated by @Require, this parameter is not subject to mandatory validation during construction.
   *
   * @default {expandSafeAreaTypes: SafeAreaType.SYSTEM, expandSafeAreaEdges: SafeAreaEdge.TOP}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  options: EditableTitleBarOptions;

  /**
   * Content margin. Negative numbers are not supported.
   *
   * Default value:
   *
   * {start: LengthMetrics.resource(*$r('sys.float.margin_left')*), end: LengthMetrics.resource(*$r('
   * sys.float.margin_right')*)}
   *
   * @default {start: LengthMetrics.resource($r('sys.float.margin_left')),
   *     <br> end: LengthMetrics.resource($r('sys.float.margin_right'))}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  contentMargin?: LocalizedMargin;

  /**
   * Whether the left icon is the default focus.
   *
   * Default value: **false**, indicating that the left icon is not the default focus.
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  leftIconDefaultFocus?: boolean;

  /**
   * Whether the save icon is the default focus.
   *
   * Default value: **false**, indicating that the save icon is not the default focus.
   *
   * @default { false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  saveIconDefaultFocus?: boolean;
}