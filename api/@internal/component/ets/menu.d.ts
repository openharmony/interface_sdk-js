/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * Defines the Menu Component.
 * @since 9
 */
interface MenuInterface {
  /**
   * Creates the menu component.
   * @since 9
   */
  (): MenuAttribute;
}

/**
 * Defines the Menu component attribute functions.
 * @since 9
 */
declare class MenuAttribute extends CommonMethod<MenuAttribute> {
  /**
   * Sets the Menu text size.
   * @param { Length } value - Indicates the font size of menu item.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @deprecated since 10
   * @useinstead font
   */
  fontSize(value: Length): MenuAttribute;

  /**
   * Sets the font style.
   * Family and style are not supported currently and will be fixed in future.
   * @param { Font } value - Indicates the font style of menu item.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  font(value: Font): MenuAttribute;

  /**
   * Sets the Menu font color.
   * @param { ResourceColor } value - Indicates the font color of menu item.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontColor(value: ResourceColor): MenuAttribute;
}

/**
 * Defines Menu Component.
 * @since 9
 */
declare const Menu: MenuInterface;

/**
 * Defines Menu Component instance.
 * @since 9
 */
declare const MenuInstance: MenuAttribute;
