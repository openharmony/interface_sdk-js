/*
* Copyright (C) 2023-2024 Huawei Device Co., Ltd.
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
 * @file Dialog
 * @kit ArkUI
 */

import { Theme, CustomTheme } from '@ohos.arkui.theme';

/**
 * > **NOTE**
 * >
 * > The priority of **buttonStyle** and **role** is higher than that of **fontColor** and **background**. If
 * > **buttonStyle** and **role** are at the default values, the settings of **fontColor** and **background** take
 * > effect.
 * >
 * > If **defaultFocus** is set for multiple buttons, the default focus is the first button in the display order that
 * > has **defaultFocus** set to **true**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class ButtonOptions {
  /**
   * Content of the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;
  /**
   * Click event of the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;
  /**
   * Background color of the button.
   *
   * The setting follows **buttonStyle** by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  background?: ResourceColor;
  /**
   * Font color of the button.
   *
   * The setting follows **buttonStyle** by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor?: ResourceColor;
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
   * @since 12 dynamic
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
   * @since 12 dynamic
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
 * TipsDialog({controller: CustomDialogController, imageRes: ResourceStr | PixelMap, imageSize?: SizeOptions, title?:
 * ResourceStr, content?: ResourceStr, checkTips?: ResourceStr, isChecked?: boolean, checkAction?: (isChecked: boolean)
 * => void, onCheckedChange?: Callback\<boolean>, primaryButton?: ButtonOptions, secondaryButton?: ButtonOptions, theme?
 * : Theme | CustomTheme, themeColorMode?: ThemeColorMode})
 *
 * Defines a tip dialog box used to remind users to pay attention to specific matters or perform confirmation
 * operations.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@CustomDialog
export declare struct TipsDialog {
  /**
   * Tip pop-up dialog box controller, used to control the show and hide of the dialog box.
   *
   * **Note:** The **@Require** decorator is not used, and parameters are not mandatorily validated during construction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  controller: CustomDialogController;
  /**
   * Image displayed.
   *
   * @type { Resource }. [since 10 - 11]
   * @type { ResourceStr | PixelMap } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  imageRes: ResourceStr | PixelMap;
  /**
   * Image size.
   *
   * Default value: **64*64vp**
   *
   * @type { SizeOptions }. [since 10 - 11]
   * @type { ?SizeOptions }. [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  imageSize?: SizeOptions;
  /**
   * Title of the dialog box.
   *
   * If this parameter is not set or is set to **undefined**, the title is not displayed.
   *
   * **NOTE**
   *
   * If the title exceeds two lines, it will be truncated with an ellipsis (...).
   *
   * @type { ResourceStr }. [since 10 - 11]
   * @type { ?ResourceStr }. [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  title?: ResourceStr;
  /**
   * Content of the dialog box.
   *
   * If this parameter is not set or is set to **undefined**, the content is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  content?: ResourceStr;
  /**
   * Content of the check box.
   *
   * If this parameter is not set or is set to **undefined**, the check box content is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  checkTips?: ResourceStr;
  /**
   * When **isChecked** is **true**, the checkbox is selected; when **isChecked** is **false**, the checkbox is
   * unselected.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  isChecked?: boolean;
  /**
   * State change event of the checkbox. When **isChecked** is **true**, the checkbox is selected; when **isChecked** is
   * **false**, the checkbox is unselected.
   *
   * **Note:** It is recommended to use onCheckedChange<sup>12+</sup>.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  checkAction?: (isChecked: boolean) => void;
  /**
   * Left button of the dialog box.
   *
   * If this parameter is not set or is set to **undefined**, the left button is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  primaryButton?: ButtonOptions;
  /**
   * Right button of the dialog box.
   *
   * If this parameter is not set or is set to **undefined**, the right button is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  secondaryButton?: ButtonOptions;
  /**
   * Theme information, which can be a custom theme or a **Theme** instance obtained from **onWillApplyTheme**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  theme?: Theme | CustomTheme;
  /**
   * Theme color mode of the dialog box.
   *
   * Default value: **ThemeColorMode.SYSTEM**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  themeColorMode?: ThemeColorMode;
  /**
   * Callback invoked when the checked state of the checkbox changes. The callback parameter is of the boolean type. The
   * value **true** indicates that the checkbox is checked, and **false** indicates that the checkbox is not checked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  onCheckedChange?: Callback<boolean>;
}

/**
 * SelectDialog({controller: CustomDialogController, title: ResourceStr, content?: ResourceStr, selectedIndex?: number,
 * confirm?: ButtonOptions, radioContent: Array&lt;SheetInfo&gt;, theme?: Theme | CustomTheme, themeColorMode?:
 * ThemeColorMode})
 *
 * Displays a dialog box from which the user can select options presented in a list or grid.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@CustomDialog
export declare struct SelectDialog {
  /**
   * Controller of the selection dialog box, used to control the show and hide of the dialog box.
   *
   * **Note:** The **@Require** decorator is not used, and mandatory validation is not performed on the parameter during
   * construction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  controller: CustomDialogController;
  /**
   * Title of the dialog box.
   *
   * **NOTE**
   *
   * If the title exceeds two lines, it will be truncated with an ellipsis (...).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  title: ResourceStr;
  /**
   * Content of the dialog box.
   *
   * If this parameter is not set or is set to **undefined**, the content is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  content?: ResourceStr;
  /**
   * Index of the selected option in the dialog box.
   *
   * Value range: an integer no less than -1
   *
   * The default value is **-1**, indicating that there is no selected option. Values less than -1 are treated as no
   * selected option.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedIndex?: number;
  /**
   * Bottom button of the selection dialog box.
   *
   * When not set by default or set to **undefined**, the bottom button is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  confirm?: ButtonOptions;
  /**
   * List of subitems in the dialog box. You can set text and a select callback for each subitem.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  radioContent: Array<SheetInfo>;
  /**
   * Theme information, which can be a custom theme or a **Theme** instance obtained from **onWillApplyTheme**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  theme?: Theme | CustomTheme;
  /**
   * Theme color mode of the dialog box.
   *
   * Default value: **ThemeColorMode.SYSTEM**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  themeColorMode?: ThemeColorMode;
}

/**
 * ConfirmDialog({controller: CustomDialogController, title: ResourceStr, content?: ResourceStr, checkTips?:
 * ResourceStr, isChecked?: boolean, onCheckedChange?: Callback\<boolean>, primaryButton?: ButtonOptions,
 * secondaryButton?: ButtonOptions, theme?: Theme | CustomTheme, themeColorMode?: ThemeColorMode})
 *
 * Defines a confirmation dialog box used to provide error feedback or prompt information when an operation is not
 * correctly executed (for example, a network error or low battery level) or when an incorrect operation is performed (
 * for example, fingerprint enrollment).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@CustomDialog
export declare struct ConfirmDialog {
  /**
   * Confirmation dialog box controller, used to control the show and hide of the dialog box.
   *
   * **Note:** When **@Require** is not used, mandatory validation is not performed on the parameter during
   * construction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  controller: CustomDialogController;
  /**
   * Title of the dialog box.
   *
   * **NOTE**
   *
   * If the title exceeds two lines, it will be truncated with an ellipsis (...).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  title: ResourceStr;
  /**
   * Content of the dialog box.
   *
   * If this parameter is not set or is set to **undefined**, the content is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  content?: ResourceStr;
  /**
   * Tip content of the checkbox.
   *
   * When not set by default or set to **undefined**, the tip content of the checkbox is not displayed.
   *
   * **Note:** When the tip content is not set, the checkbox is also displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  checkTips?: ResourceStr;
  /**
   * Whether the checkbox is selected. The value **true** means selected, and **false** means unselected.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  isChecked?: boolean;
  /**
   * Left button of the dialog box.
   *
   * If this parameter is not set or is set to **undefined**, the left button is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  primaryButton?: ButtonOptions;
  /**
   * Right button of the dialog box.
   *
   * If this parameter is not set or is set to **undefined**, the right button is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  secondaryButton?: ButtonOptions;
  /**
   * Theme information, which can be a custom theme or a **Theme** instance obtained from **onWillApplyTheme**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  theme?: Theme | CustomTheme;
  /**
   * Theme color mode of the dialog box.
   *
   * Default value: **ThemeColorMode.SYSTEM**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  themeColorMode?: ThemeColorMode;
  /**
   * Callback invoked when the checked state of the checkbox changes. The callback parameter is of the boolean type. The
   * value **true** indicates that the checkbox is checked, and **false** indicates that the checkbox is not checked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  onCheckedChange?: Callback<boolean>;
}

/**
 * AlertDialog({controller: CustomDialogController, primaryTitle?: ResourceStr, secondaryTitle?: ResourceStr, content:
 * ResourceStr, primaryButton?: ButtonOptions, secondaryButton?: ButtonOptions, theme?: Theme | CustomTheme,
 * themeColorMode?: ThemeColorMode})
 *
 * Defines an alert dialog box used to warn the user when triggering an irreversible operation that will have serious
 * consequences (such as deletion, reset, cancel editing, stop, etc.).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@CustomDialog
export declare struct AlertDialog {
  /**
   * Alert dialog box controller, used to control the show and hide of the dialog box.
   *
   * **Note:** The **@Require** decorator is not used, and mandatory validation is not performed during construction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  controller: CustomDialogController;
  /**
   * Primary title of the alert dialog box.
   *
   * This parameter is not set or set to **undefined** by default, indicating the primary title of the alert dialog box
   * is not displayed.
   *
   * **Note:** If the title exceeds two lines, "..." is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  primaryTitle?: ResourceStr;
  /**
   * Secondary title of the alert dialog box.
   *
   * This parameter is not set or set to **undefined** by default, indicating the secondary title of the alert dialog
   * box is not displayed.
   *
   * **Note:** If the title exceeds two lines, "..." is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  secondaryTitle?: ResourceStr;
  /**
   * Content of the alert dialog box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  content: ResourceStr;
  /**
   * Left button of the alert dialog box.
   *
   * This parameter is not set or set to **undefined** by default, indicating the left button of the alert dialog box is
   * not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  primaryButton?: ButtonOptions;
  /**
   * Right button of the alert dialog box.
   *
   * This parameter is not set or set to **undefined** by default, indicating the right button of the alert dialog box
   * is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  secondaryButton?: ButtonOptions;
  /**
   * Theme information, which can be a custom theme or a **Theme** instance obtained from **onWillApplyTheme**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  theme?: Theme | CustomTheme;
  /**
   * Theme color mode of the dialog box.
   *
   * Default value: **ThemeColorMode.SYSTEM**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  themeColorMode?: ThemeColorMode;
}

/**
 * LoadingDialog({Controller: CustomDialogController, content?: ResourceStr, theme?: Theme | CustomTheme, themeColorMode
 * ?: ThemeColorMode})
 *
 * Displays a loading dialog box to inform the user of the operation progress.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@CustomDialog
export declare struct LoadingDialog {
  /**
   * Controller of the loading dialog box, used to control the show and hide of the dialog box.
   *
   * **Note:** The **@Require** decorator is not used, and mandatory validation is not performed during construction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  Controller: CustomDialogController;
  /**
   * Content of the loading dialog box.
   *
   * If this parameter is not set or is set to **undefined**, the content is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  content?: ResourceStr;
  /**
   * Theme information, which can be a custom theme or a **Theme** instance obtained from **onWillApplyTheme**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  theme?: Theme | CustomTheme;
  /**
   * Theme color mode of the dialog box.
   *
   * Default value: **ThemeColorMode.SYSTEM**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  themeColorMode?: ThemeColorMode;
}

/**
 * CustomContentDialog({controller: CustomDialogController, contentBuilder: () => void, primaryTitle?: ResourceStr,
 * secondaryTitle?: ResourceStr, localizedContentAreaPadding?: LocalizedPadding, contentAreaPadding?: Padding, buttons?:
 * ButtonOptions[], theme?: Theme | CustomTheme, themeColorMode?: ThemeColorMode})
 *
 * Displays a dialog box that contains custom content and operation area.
 *
 * > **NOTE**
 * >
 * > When the height of the dialog box is insufficient, the area defined by **contentBuilder** will be compressed.
 * > Global scrolling will be enabled if the compressed area's height falls below 100 vp.
 * >
 * > You must define scrolling of the content area in **CustomContentDialog**. In addition, the custom scrolling of the
 * > content area must be used in conjunction with the **nestedScroll** property, as in the
 * > **nestedScroll({ scrollForward: NestedScrollMode.PARALLEL, scrollBackward: NestedScrollMode.PARALLEL })** example.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
@CustomDialog
export declare struct CustomContentDialog {
  /**
   * Dialog controller used to control the show and hide of the dialog box.
   *
   * **Note:** Not decorated by **@Require**, and the parameter is not subject to mandatory validation during
   * construction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  controller: CustomDialogController;
  /**
   * Primary title of the dialog box.
   *
   * If this parameter is not set or is set to **undefined**, the primary title is not displayed.
   *
   * **NOTE**
   *
   * If the title exceeds two lines, it will be truncated with an ellipsis (...).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  primaryTitle?: ResourceStr;
  /**
   * Secondary title of the dialog box.
   *
   * If this parameter is not set or is set to **undefined**, the secondary title is not displayed.
   *
   * **NOTE**
   *
   * If the title exceeds two lines, it will be truncated with an ellipsis (...).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  secondaryTitle?: ResourceStr;
  /**
   * Component builder function used to construct the content area of the dialog box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @BuilderParam
  contentBuilder: () => void;
  /**
   * Padding of the content area of the dialog box. This attribute does not take effect when
   * **localizedContentAreaPadding** is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentAreaPadding?: Padding;
  /**
   * Padding of the content area of the dialog box, which supports adaptation based on language direction. When this
   * attribute is set, **contentAreaPadding** does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedContentAreaPadding?: LocalizedPadding;
  /**
   * Buttons in the operation area of the dialog box. A maximum of four buttons are allowed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  buttons?: ButtonOptions[];
  /**
   * Theme information, which can be a custom theme or a **Theme** instance obtained from **onWillApplyTheme**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  theme?: Theme | CustomTheme;
  /**
   * Light/dark mode of the custom dialog box.
   *
   * Default value: **ThemeColorMode.SYSTEM**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  themeColorMode?: ThemeColorMode;
}

/**
 * A dialog is a modal window that temporarily displays information that requires user attention or actions that need to
 * be performed, while preserving the current context. Users must complete the interaction before exiting this modal
 * state.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **Dialog** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **Dialog** component itself. As a result, the configured universal attributes and universal events
 * > may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events with
 * > the **Dialog** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
@Component
export declare struct PopoverDialog {
  /**
   * Whether to show the follow-hand dialog box. The value **true** means to show the dialog box, and **false** means to
   * hide it.
   *
   * The default value is **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  @Link
  visible: boolean;
  /**
   * Parameters of the follow-hand dialog box, including the dialog box content, position, and other attributes. For
   * details, see **PopoverOptions** type description.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  @Require
  @Prop
  popover: PopoverOptions;
  /**
   * Builder function of the target component on which the follow-hand dialog box is based, used to define the reference
   * position component for displaying the dialog box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  @Require
  @BuilderParam
  targetBuilder: Callback<void>;
}

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
 * @since 14 dynamic
 */
export declare interface PopoverOptions extends CustomPopupOptions {}