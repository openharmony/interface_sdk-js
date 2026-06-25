'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
import { Builder, ComponentV2, ResourceStr, ResourceColor, LocalizedMargin } from './@ohos.arkui.component';
import { SymbolGlyphModifier } from './@ohos.arkui.modifier';
import { Local, Param, ObservedV2, Require, Trace } from '@ohos.arkui.stateManagement';
import { SafeAreaType, SafeAreaEdge, BlurStyle } from '@ohos.arkui.component';

/**
 * Callback function when click on this menu item.
 *
 * @typedef { function } OnActionCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare type OnActionCallback = () => void;

/**
 * Declaration of the left icon type.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum EditableLeftIconTypeV2 {
  /**
   * The back type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  Back = 0,

  /**
   * The cancel type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  Cancel = 1
}

/**
 * Indicates the options of the left icon.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface EditableLeftIconV2Options {
  /**
   * Icon type, Back or Cancel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  iconType?: EditableLeftIconTypeV2;

  /**
   * Whether to get focus by default.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  defaultFocus?: boolean;

  /**
   * Callback function when click on the left icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onAction?: OnActionCallback;
}

/**
 * Declaration of the left icon configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ObservedV2
export declare class EditableLeftIconV2 {
  /**
   * Icon type, Back or Cancel.
   *
   * @default EditableLeftIconTypeV2.Back
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public iconType: EditableLeftIconTypeV2;

  /**
   * Whether to get focus by default.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public defaultFocus: boolean;

  /**
   * Callback function when click on the left icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public onAction?: OnActionCallback;

  /**
   * Constructor of EditableLeftIconV2.
   *
   * @param { EditableLeftIconV2Options } [options] - The options of the left icon
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(options?: EditableLeftIconV2Options);
}

/**
 * Indicates the options of the title.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface EditableTitleV2Options {
  /**
   * Main title content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  mainTitle?: ResourceStr;

  /**
   * Subtitle content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  subTitle?: ResourceStr;
}

/**
 * Declaration of the title configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ObservedV2
export declare class EditableTitleV2 {
  /**
   * Main title content.
   *
   * @default ''
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public mainTitle: ResourceStr;

  /**
   * Subtitle content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public subTitle?: ResourceStr;

  /**
   * Constructor of EditableTitleV2.
   *
   * @param { EditableTitleV2Options } [options] - The options of the title
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(options?: EditableTitleV2Options);
}

/**
 * Indicates the options of the menu item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface EditableTitleBarMenuItemV2Options {
  /**
   * Icon resource, supports Symbol or Image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  value?: ResourceStr;

  /**
   * Symbol icon style modifier.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  symbolStyle?: SymbolGlyphModifier;

  /**
   * Whether to enable this menu item.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isEnabled?: boolean;

  /**
   * Label text for long press dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  label?: ResourceStr;

  /**
   * Callback function when click on this menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  action?: OnActionCallback;

  /**
   * Accessibility level, options: 'auto', 'yes', 'no'.
   *
   * @default 'auto'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityLevel?: string;

  /**
   * Accessibility text for screen reader.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessibility description.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Whether to get focus by default.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  defaultFocus?: boolean;
}

/**
 * Declaration of the menu item on the right side.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ObservedV2
export declare class EditableTitleBarMenuItemV2 {
  /**
   * Icon resource, supports Symbol or Image.
   *
   * @default ''
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public value: ResourceStr;

  /**
   * Symbol icon style modifier.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public symbolStyle?: SymbolGlyphModifier;

  /**
   * Whether to enable this menu item.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public isEnabled: boolean;

  /**
   * Label text for long press dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public label?: ResourceStr;

  /**
   * Callback function when click on this menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public action?: OnActionCallback;

  /**
   * Accessibility level, options: 'auto', 'yes', 'no'.
   *
   * @default 'auto'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public accessibilityLevel: string;

  /**
   * Accessibility text for screen reader.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * Accessibility description.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * Whether to get focus by default.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public defaultFocus: boolean;

  /**
   * Constructor of EditableTitleBarMenuItemV2.
   *
   * @param { EditableTitleBarMenuItemV2Options } [options] - The options of the menu item
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(options?: EditableTitleBarMenuItemV2Options);
}

/**
 * Declaration of the image item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type EditableTitleBarItemV2 = EditableTitleBarMenuItemV2;

/**
 * Indicates the options of the image item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type EditableTitleBarItemV2Options = EditableTitleBarMenuItemV2Options;

/**
 * Indicates the options of the save button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface EditableSaveButtonV2Options {
  /**
   * Whether to show the save button.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isRequired?: boolean;

  /**
   * Whether to get focus by default.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  defaultFocus?: boolean;

  /**
   * Callback function when click on the save button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onAction?: OnActionCallback;
}

/**
 * Declaration of the save button configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ObservedV2
export declare class EditableSaveButtonV2 {
  /**
   * Whether to show the save button.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public isRequired: boolean;

  /**
   * Whether to get focus by default.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public defaultFocus: boolean;

  /**
   * Callback function when click on the save button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public onAction?: OnActionCallback;

  /**
   * Constructor of EditableSaveButtonV2.
   *
   * @param { EditableSaveButtonV2Options } [options] - The options of the save button
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(options?: EditableSaveButtonV2Options);
}

/**
 * Indicates the style options of the title bar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface EditableTitleBarStyleV2Options {
  /**
   * Background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  backgroundColor?: ResourceColor;

  /**
   * Background blur style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Indicates the types of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  safeAreaTypes?: Array<SafeAreaType>;

  /**
   * Indicates the edges of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  safeAreaEdges?: Array<SafeAreaEdge>;

  /**
   * Content margin, supports RTL layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  contentMargin?: LocalizedMargin;
}

/**
 * Declaration of the title bar style configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ObservedV2
export declare class EditableTitleBarStyleV2 {
  /**
   * Background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public backgroundColor?: ResourceColor;

  /**
   * Background blur style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public backgroundBlurStyle?: BlurStyle;

  /**
   * Indicates the types of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public safeAreaTypes?: Array<SafeAreaType>;

  /**
   * Indicates the edges of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public safeAreaEdges?: Array<SafeAreaEdge>;

  /**
   * Content margin, supports RTL layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public contentMargin?: LocalizedMargin;

  /**
   * Constructor of EditableTitleBarStyleV2.
   *
   * @param { EditableTitleBarStyleV2Options } [options] - The style options of the title bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(options?: EditableTitleBarStyleV2Options);
}

/**
 * Declaration of the editable title bar.
 *
 * @struct { EditableTitleBarV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentV2
export declare struct EditableTitleBarV2 {
  /**
   * Left icon configuration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Param
  leftIcon?: EditableLeftIconV2;

  /**
   * Title configuration, supports string or object form.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Param
  @Require
  title: ResourceStr | EditableTitleV2;

  /**
   * Image item configuration, displayed on the left side of the title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Param
  imageItem?: EditableTitleBarItemV2;

  /**
   * Custom menu items array, maximum 2-3 items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Param
  menuItems?: Array<EditableTitleBarMenuItemV2>;

  /**
   * Save button configuration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Param
  saveButton?: EditableSaveButtonV2;

  /**
   * Style and layout configuration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Param
  options: EditableTitleBarStyleV2;

  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @Builder
  build(): void;
}
