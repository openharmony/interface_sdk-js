/*
* Copyright (C) 2023-2025 Huawei Device Co., Ltd.
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
 * ###### Child Components
 * 
 * Not supported
 * 
 * ###### Events
 * 
 * The [universal events]{@link ./@internal/component/ets/common} are not supported.
 *
 * @file
 * @kit ArkUI
 */

/**
 * Defines the icon type of the element on the left of the **ComposeListItem** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare enum IconType {
  /**
   * Badge with an icon size of 8 x 8 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BADGE = 1,
  /**
   * Small icon with an icon size of 16 x 16 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NORMAL_ICON = 2,
  /**
   * System icon with an icon size of 24 x 24 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SYSTEM_ICON = 3,
  /**
   * Profile picture with an icon size of 40 x 40 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  HEAD_SCULPTURE = 4,
  /**
   * Application icon with an icon size of 64 x 64 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  APP_ICON = 5,
  /**
   * Preview image with an icon size of 96 x 96 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  PREVIEW = 6,
  /**
   * Icon with a horizontal special ratio (width is greater than height), keeping the longest side at 96 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LONGITUDINAL = 7,
  /**
   * Icon with a vertical special ratio (height is greater than width), keeping the longest side at 96 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  VERTICAL = 8
}

/**
 * Defines the type of the icon element on the right of the **ComposeListItem** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class OperateIcon {
  /**
   * Resource of the icon or arrow on the right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;

  /**
   * Resource of the symbol icon or arrow on the right, which has higher priority than **value**.
   *
   * If this parameter is not set or is set to **undefined**, the symbol icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Click event of the icon or arrow on the right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;

  /**
   * Accessibility text, that is, accessible label name, of the icon or arrow on the right. If a component does not
   * contain text information, it will not be announced by the screen reader when selected. In this case, the screen
   * reader user cannot know which component is selected. To solve this problem, you can set accessibility text for
   * components without text information. When such a component is selected, the screen reader announces the specified
   * accessibility text, informing the user which component is selected.
   *
   * Default value: **""**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessible description of the icon or arrow on the right. You can provide comprehensive text explanations to help
   * users understand the operation they are about to perform and its potential consequences, especially when these
   * cannot be inferred from the component's attributes and accessibility text alone. If a component contains both text
   * information and the accessible description, the text is announced first and then the accessible description, when
   * the component is selected.
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
   * Accessibility level of the icon or arrow on the right. It determines whether the component can be recognized by
   * accessibility services.
   *
   * The options are as follows:
   *
   * **"auto"**: It is treated as "no" by the system.
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
 * Defines the type where the element on the right of the **ComposeListItem** component is **Switch**, **CheckBox**, or
 * **Radio**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class OperateCheck {
  /**
   * Whether the switch, check box, or radio button on the right is selected.
   *
   * Default value: **false**.
   *
   * **true**: selected.
   *
   * **false**: not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isCheck?: boolean;

  /**
   * Callback invoked when the selected state of the switch, check box, or radio button on the right is changed.
   *
   * **true**: from not selected to selected.
   *
   * **false**: from selected to not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onChange?: (value: boolean) => void;

  /**
   * Accessibility text, that is, accessible label name, of the switch, check box, or radio button on the right. If a
   * component does not contain text information, it will not be announced by the screen reader when selected. In this
   * case, the screen reader user cannot know which component is selected. To solve this problem, you can set
   * accessibility text for components without text information. When such a component is selected, the screen reader
   * announces the specified accessibility text, informing the user which component is selected.
   *
   * Default value: **""**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessible description of the switch, check box, or radio button on the right. You can provide comprehensive text
   * explanations to help users understand the operation they are about to perform and its potential consequences,
   * especially when these cannot be inferred from the component's attributes and accessibility text alone. If a
   * component contains both text information and the accessible description, the text is announced first and then the
   * accessible description, when the component is selected.
   *
   * By default, the announcement rules for the basic components **Switch**, **CheckBox**, and **Radio** are applied.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level of the switch, check box, or radio button on the right. It determines whether the component can
   * be recognized by accessibility services.
   *
   * The options are as follows:
   *
   * **"auto"**: It is treated as "no" by the system.
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
 * Defines the type of the button element on the right of the **ComposeListItem** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class OperateButton {
  /**
   * Text of the button on the right.
   *
   * Default value: **""**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  text?: ResourceStr;

  /**
   * Accessibility text, that is, accessible label name, of the button on the right. If a component does not contain
   * text information, it will not be announced by the screen reader when selected. In this case, the screen reader user
   * cannot know which component is selected. To solve this problem, you can set accessibility text for components
   * without text information. When such a component is selected, the screen reader announces the specified
   * accessibility text, informing the user which component is selected.
   *
   * Default value: **""**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessible description of the button on the right. You can provide comprehensive text explanations to help users
   * understand the operation they are about to perform and its potential consequences, especially when these cannot be
   * inferred from the component's attributes and accessibility text alone. If a component contains both text
   * information and the accessible description, the text is announced first and then the accessible description, when
   * the component is selected.
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
   * Accessibility level of the button on the right. It determines whether the component can be recognized by
   * accessibility services.
   *
   * The options are as follows:
   *
   * **"auto"**: It is treated as "no" by the system.
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
 * Defines elements for the left and center areas of the **ComposeListItem** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class ContentItem {
  /**
   * Icon style of the element on the left.
   *
   * If this parameter is not set or is set to **undefined**, the icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  iconStyle?: IconType;

  /**
   * Icon resource of the element on the left.
   *
   * If this parameter is not set or is set to **undefined**, the icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon?: ResourceStr;

  /**
   * Symbol icon resource of the element on the left, which has higher priority than **icon**. If both **icon** and this
   * parameter are set, only the symbol icon is displayed.
   *
   * If this parameter is not set or is set to **undefined**, the symbol icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Primary text of the element in the center.
   *
   * If this parameter is not set or is set to **undefined**, the primary text is not displayed.
   *
   * **Text processing rules**: Text will wrap to a new line when it exceeds the length limit.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  primaryText?: ResourceStr;

  /**
   * Secondary text of the element in the center.
   *
   * If this parameter is not set or is set to **undefined**, the secondary text is not displayed.
   *
   * **Text processing rules**: Text will wrap to a new line when it exceeds the length limit.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  secondaryText?: ResourceStr;

  /**
   * Description of the element in the center.
   *
   * If this parameter is not set or is set to **undefined**, the description is not displayed.
   *
   * **Text processing rules**: Text will wrap to a new line when it exceeds the length limit.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  description?: ResourceStr;
}

/**
 * Defines the type of the element on the right of the **ComposeListItem** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class OperateItem {
  /**
   * First icon with a size of 24 x 24 vp.
   *
   * If this parameter is not set or is set to **undefined**, the icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon?: OperateIcon;

  /**
   * Second icon with a size of 24 x 24 vp.
   *
   * If this parameter is not set or is set to **undefined**, the icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  subIcon?: OperateIcon;

  /**
   * Button.
   *
   * If this parameter is not set or is set to **undefined**, the button is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  button?: OperateButton;

  /**
   * Switch.
   *
   * If this parameter is not set or is set to **undefined**, the switch is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   */
  switch?: OperateCheck;

  /**
   * Check box with a size of 24 x 24 vp.
   *
   * If this parameter is not set or is set to **undefined**, the check box is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  checkbox?: OperateCheck;

  /**
   * Radio button with a size of 24 x 24 vp.
   *
   * If this parameter is not set or is set to **undefined**, the radio button is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  radio?: OperateCheck;

  /**
   * Image with a size of 48 x 48 vp.
   *
   * If this parameter is not set or is set to **undefined**, the image is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  image?: ResourceStr;

  /**
   * Symbol icon with a size of 48 x 48 vp.
   *
   * If this parameter is not set or is set to **undefined**, the symbol icon is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Text.
   *
   * If this parameter is not set or is set to **undefined**, the text is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  text?: ResourceStr;

  /**
   * Arrow with a size of 12 x 24 vp.
   *
   * If this parameter is not set or is set to **undefined**, the arrow is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  arrow?: OperateIcon;
}

/**
 * The **ComposeListItem** component is a container that presents a series of items arranged in a column with the same
 * width. You can use it to present data of the same type in a multiple and coherent row style, for example, images or
 * text.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **ComposeListItem** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional **__Common__** node and mounts the universal attributes and universal events on this node
 * > rather than the **ComposeListItem** component itself. As a result, the configured universal attributes and
 * > universal events may fail to take effect or behave as intended. For this reason, avoid using universal attributes
 * > and events with the **ComposeListItem** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@Component
export declare struct ComposeListItem {
  /**
   * Elements on the left and in the center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop contentItem?: ContentItem;

  /**
   * Element on the right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop operateItem?: OperateItem;
}