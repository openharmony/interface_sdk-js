/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,software
 * distributed under the License is distributed on an "ASIS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Enumerates the string value match pattern.
 * @syscap SystemCapability.Test.UiTest
 * @since 8
 */
declare enum MatchPattern {
  /**
   * Equals to a string.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @test
   */
  EQUALS = 0,
  /**
   * Contains a substring.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @test
   */
  CONTAINS = 1,
  /**
   * StartsWith a substring.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @test
   */
  STARTS_WITH = 2,
  /**
   * EndsWith a substring.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @test
   */
  ENDS_WITH = 3
}

/**
 * Describes the attribute requirements for the target UiComponents.
 *
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.uitest.On
 * @syscap SystemCapability.Test.UiTest
 */
declare class By {
  /**
   * Specifies the text for the target UiComponent.
   * @syscap SystemCapability.Test.UiTest
   * @param txt The text value.
   * @param pattern The {@link MatchPattern} of the text value,default to {@link MatchPattern.EQUALS}
   * @returns this {@link By} object.
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#text
   * @test
   */
  text(txt: string, pattern?: MatchPattern): By;

  /**
   * Specifies the inspector key of the target UiComponent.
   * @syscap SystemCapability.Test.UiTest
   * @param key The inspectorKey value.
   * @returns this {@link By} object.
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#id
   * @test
   */
  key(key: string): By;

  /**
   * Specifies the id of the target UiComponent.
   * @syscap SystemCapability.Test.UiTest
   * @param id The id value.
   * @returns this {@link By} object.
   * @since 8
   * @deprecated since 9
   * @test
   */
  id(id: number): By;

  /**
   * Specifies the type of the target UiComponent.
   * @syscap SystemCapability.Test.UiTest
   * @param tp The type value.
   * @returns this {@link By} object.
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#type
   * @test
   */
  type(tp: string): By;

  /**
   * Specifies the clickable status of the target UiComponent.
   * @syscap SystemCapability.Test.UiTest
   * @param b The clickable status,default to true.
   * @returns this {@link By} object.
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#clickable
   * @test
   */
  clickable(b?: boolean): By;

  /**
   * Specifies the scrollable status of the target UiComponent.
   * @syscap SystemCapability.Test.UiTest
   * @param b The scrollable status,default to true.
   * @returns this {@link By} object.
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#scrollable
   * @test
   */
  scrollable(b?: boolean): By;

  /**
   * Specifies the enabled status of the target UiComponent.
   * @syscap SystemCapability.Test.UiTest
   * @param b The enabled status,default to true.
   * @returns this {@link By} object.
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#enabled
   * @test
   */
  enabled(b?: boolean): By;

  /**
   * Specifies the focused status of the target UiComponent.
   * @syscap SystemCapability.Test.UiTest
   * @param b The focused status,default to true.
   * @returns this {@link By} object.
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#focused
   * @test
   */
  focused(b?: boolean): By;

  /**
   * Specifies the selected status of the target UiComponent.
   * @syscap SystemCapability.Test.UiTest
   * @param b The selected status,default to true.
   * @returns this {@link By} object.
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.On#selected
   * @test
   */
  selected(b?: boolean): By;

  /**
   * Requires the target UiComponent which is before another UiComponent that specified by the given {@link By}
   * object,used to locate UiComponent relatively.
   * @syscap SystemCapability.Test.UiTest
   * @param by Describes the attribute requirements of UiComponent which the target one is in front of.
   * @returns this {@link By} object.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link On.isBefore}
   * @test
   */
  isBefore(by: By): By;

  /**
   * Requires the target UiComponent which is after another UiComponent that specified by the given {@link By}
   * object,used to locate UiComponent relatively.
   * @syscap SystemCapability.Test.UiTest
   * @param by Describes the attribute requirements of UiComponent which the target one is in back of.
   * @returns this {@link By} object.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link On.isAfter}
   * @test
   */
  isAfter(by: By): By;
}

/**
 * Represents a UiComponent of the ohos application,user can perform operations or query attributes on it.
 *
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.uitest.Component
 * @test
 * @syscap SystemCapability.Test.UiTest
 */
declare class UiComponent {
  /**
   * Click this {@link UiComponent}.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.Component#click
   * @test
   */
  click(): Promise<void>;

  /**
   * Double click this {@link UiComponent}.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Component.doubleClick}
   * @test
   */
  doubleClick(): Promise<void>;

  /**
   * Long click this {@link UiComponent}.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Component.longClick}
   * @test
   */
  longClick(): Promise<void>;

  /**
   * Get the id attribute value.
   * @syscap SystemCapability.Test.UiTest
   * @returns the id value.
   * @since 8
   * @deprecated since 9
   * @test
   */
  getId(): Promise<number>;

  /**
   * Get the inspectorKey attribute value.
   * @syscap SystemCapability.Test.UiTest
   * @returns the inspectorKey value.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Component.getId}
   * @test
   */
  getKey(): Promise<string>;

  /**
   * Get the text attribute value.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Component.getText}
   * @test
   */
  getText(): Promise<string>;

  /**
   * Get the type name.
   * @syscap SystemCapability.Test.UiTest
   * @returns the type name.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Component.getType}
   * @test
   */
  getType(): Promise<string>;

  /**
   * Get the clickable status of this {@link UiComponent}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the clickable status.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Component.isClickable}
   * @test
   */
  isClickable(): Promise<boolean>;

  /**
   * Get the scrollable status of this {@link UiComponent}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the scrollable status.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Component.isScrollable}
   * @test
   */
  isScrollable(): Promise<boolean>;

  /**
   * Get the enabled status of this {@link UiComponent}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the enabled status.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Component.isEnabled}
   * @test
   */
  isEnabled(): Promise<boolean>;

  /**
   * Get the focused status of this {@link UiComponent}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the focused status.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Component.isFocused}
   * @test
   */
  isFocused(): Promise<boolean>;

  /**
   * Get the selected status of this {@link UiComponent}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the selected status.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Component.isSelected}
   * @test
   */
  isSelected(): Promise<boolean>;

  /**
   * Inject text to this {@link UiComponent},applicable to TextInput.
   * @syscap SystemCapability.Test.UiTest
   * @param text The text to inject.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Component.inputText}
   * @test
   */
  inputText(text: string): Promise<void>;

  /**
   * Scroll on this {@link UiComponent}to find matched {@link UiComponent},applicable to scrollable one.
   * @syscap SystemCapability.Test.UiTest
   * @param by The attribute requirements of the target {@link UiComponent}.
   * @returns the found result,or undefined if not found.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Component.scrollSearch}
   * @test
   */
  scrollSearch(by: By): Promise<UiComponent>;
}

/**
 * The unified facade of UiTest framework,can be used to find {@link UiComponent},trigger keyEvents,perform
 * coordinates-based UI actions,capture screen and so on.
 *
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.uitest.Driver
 * @test
 * @syscap SystemCapability.Test.UiTest
 */
declare class UiDriver {
  /**
   * Create an {@link UiDriver} object.
   * @syscap SystemCapability.Test.UiTest
   * @returns the {@link UiDriver} object.
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.Driver#create
   * @test
   */
  static create(): UiDriver;

  /**
   * Delay with specified duration.
   * @syscap SystemCapability.Test.UiTest
   * @param duration The delay duration in milliseconds.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Driver.delayMs}
   * @test
   */
  delayMs(duration: number): Promise<void>;

  /**
   * Find the first matched {@link UiComponent} on current UI.
   * @syscap SystemCapability.Test.UiTest
   * @param by The attribute requirements of the target {@link UiComponent}.
   * @returns the first matched {@link UiComponent} or undefined.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Driver.findComponent}
   * @test
   */
  findComponent(by: By): Promise<UiComponent>;

  /**
   * Find all the matched {@link UiComponent}s on current UI.
   * @syscap SystemCapability.Test.UiTest
   * @param by The attribute requirements of the target {@link UiComponent}.
   * @returns the matched {@link UiComponent}s list.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Driver.findComponents}
   * @test
   */
  findComponents(by: By): Promise<Array<UiComponent>>;

  /**
   * Assert t the matched {@link UiComponent}s exists on current UI;if not,assertError will be raised.
   * @syscap SystemCapability.Test.UiTest
   * @param by The attribute requirements of the target {@link UiComponent}.
   * @throws Throws this exception if following error occurs:{@code ComponentExistAssertion Failure}.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Driver.assertComponentExist}
   * @test
   */
  assertComponentExist(by: By): Promise<void>;

  /**
   * Press the BACK key.
   * @syscap SystemCapability.Test.UiTest
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Driver.pressBack}
   * @test
   */
  pressBack(): Promise<void>;

  /**
   * Press the specified key.
   * @syscap SystemCapability.Test.UiTest
   * @param keyCode the target keyCode.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Driver.pressHome}
   * @test
   */
  triggerKey(keyCode: number): Promise<void>;

  /**
   * Click on the specified location on the screen.
   * @syscap SystemCapability.Test.UiTest
   * @param x The x-coordinate.
   * @param y The y-coordinate.
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.Driver#click
   * @test
   */
  click(x: number, y: number): Promise<void>;

  /**
   * DoubleClick on the specified location on the screen.
   * @syscap SystemCapability.Test.UiTest
   * @param x The x-coordinate.
   * @param y The y-coordinate.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Driver.doubleClick}
   * @test
   */
  doubleClick(x: number, y: number): Promise<void>;

  /**
   * LongClick on the specified location on the screen.
   * @syscap SystemCapability.Test.UiTest
   * @param x The x-coordinate.
   * @param y The y-coordinate.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Driver.longClick}
   * @test
   */
  longClick(x: number, y: number): Promise<void>;

  /**
   * Swipe on the screen between the specified points.
   * @syscap SystemCapability.Test.UiTest
   * @param startx The x-coordinate of the starting point.
   * @param starty The y-coordinate of the starting point.
   * @param endx The x-coordinate of the ending point.
   * @param endy The y-coordinate of the ending point.
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.uitest.Driver#swipe
   * @test
   */
  swipe(startx: number, starty: number, endx: number, endy: number): Promise<void>;

  /**
   * Capture current screen and save as picture which PNG format.
   * @syscap SystemCapability.Test.UiTest
   * @param savePath the path where to store the picture.
   * @returns true if screen-capturing and file-storing are completed successfully,false otherwise.
   * @since 8
   * @deprecated since 9
   * @useinstead {@link Driver.screenCap}
   * @test
   */
  screenCap(savePath: string): Promise<boolean>;
}


/**
 * Describes the window mode of the tested window
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
declare enum WindowMode { 
   FULLSCREEN, 
   PRIMARY, 
   SECONDARY, 
   FLOATING 
}

/**
 * Resize direction for the window.
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
declare enum ResizeDirection { 
   LEFT, 
   RIGHT, 
   UP, 
   DOWN, 
   LEFT_UP, 
   LEFT_DOWN, 
   RIGHT_UP, 
   RIGHT_DOWN 
}

/**
 * Describes the rotation of the device display
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
declare enum DisplayRotation { 
   ROTATION_0, 
   ROTATION_90, 
   ROTATION_180, 
   ROTATION_270 
}

/**
 * Represents the point on the device screen.
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
declare interface Point {
  readonly X: number;
  readonly Y: number;
}

/**
 * Represents the rectangle area on the device screen.
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
declare interface Rect {
  readonly leftX: number;
  readonly topY: number;
  readonly rightX: number;
  readonly bottomY: number;
}

/**
 * Represents filer condition to get the window .
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 */
declare interface WindowFilter {
  bundleName?: string;
  title?: string;
  focused?: boolean;
  actived?: boolean;
}

/**
 * Describes the attribute requirements for the target Components.
 *
 * @since 9
 * @syscap SystemCapability.Test.UiTest
 */
declare class On {
  /**
   * Specifies the text for the target Component.
   * @syscap SystemCapability.Test.UiTest
   * @param txt The text value.
   * @param pattern The {@link MatchPattern} of the text value, default to {@link MatchPattern.EQUALS}
   * @returns this {@link On} object.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @since 9
   * @test
   */
  text(txt: string, pattern?: MatchPattern): On;

  /**
   * Specifies the id of the target Component.
   * @syscap SystemCapability.Test.UiTest
   * @param id The id value.
   * @returns this {@link On} object.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @since 9
   * @test
   */
  id(id: string): On;

  /**
   * Specifies the type of the target Component.
   * @syscap SystemCapability.Test.UiTest
   * @param tp The type value.
   * @returns this {@link On} object.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @since 9
   * @test
   */
  type(tp: string): On;

  /**
   * Specifies the clickable status of the target Component.
   * @syscap SystemCapability.Test.UiTest
   * @param b The clickable status,default to true.
   * @returns this {@link On} object.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @since 9
   * @test
   */
  clickable(b?: boolean): On;

  /**
   * Specifies the longClickable status of the target Component.
   * @syscap SystemCapability.Test.UiTest
   * @param b The clickable status,default to true.
   * @returns this {@link On} object.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @since 9
   * @test
   */
  longClickable(b?: boolean): On;

  /**
   * Specifies the scrollable status of the target Component.
   * @syscap SystemCapability.Test.UiTest
   * @param b The scrollable status,default to true.
   * @returns this {@link On} object.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @since 9
   * @test
   */
  scrollable(b?: boolean): On;

  /**
   * Specifies the enabled status of the target Component.
   * @syscap SystemCapability.Test.UiTest
   * @param b The enabled status,default to true.
   * @returns this {@link On} object.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @since 9
   * @test
   */
  enabled(b?: boolean): On;

  /**
   * Specifies the focused status of the target Component.
   * @syscap SystemCapability.Test.UiTest
   * @param b The focused status,default to true.
   * @returns this {@link On} object.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @since 9
   * @test
   */
  focused(b?: boolean): On;

  /**
   * Specifies the selected status of the target Component.
   * @syscap SystemCapability.Test.UiTest
   * @param b The selected status,default to true.
   * @returns this {@link On} object.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @since 9
   * @test
   */
  selected(b?: boolean): On;

  /**
   * Specifies the checked status of the target Component.
   * @syscap SystemCapability.Test.UiTest
   * @param b The checked status,default to false.
   * @returns this {@link On} object.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @since 9
   * @test
   */
  checked(b?: boolean): On;

  /**
   * Specifies the checkable status of the target Component.
   * @syscap SystemCapability.Test.UiTest
   * @param b The checkable status,default to false.
   * @returns this {@link On} object.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @since 9
   * @test
   */
  checkable(b?: boolean): On;

  /**
   * Requires that the target Component which is before another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   * @syscap SystemCapability.Test.UiTest
   * @param on Describes the attribute requirements of Component which the target one is in front of.
   * @returns this {@link On} object.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @since 9
   * @test
   */
  isBefore(on: On): On;

  /**
   * Requires that the target Component which is after another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   * @syscap SystemCapability.Test.UiTest
   * @param on Describes the attribute requirements of Component which the target one is in back of.
   * @returns this {@link On} object.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @since 9
   * @test
   */
  isAfter(on: On): On;
}

/**
 * Represents an Component of the ohos application,user can perform operations or query attributes on it.
 *
 * @since 9
 * @test
 * @syscap SystemCapability.Test.UiTest
 */
declare class Component {
  /**
   * Click this {@link Component}.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @test
   */
  click(): Promise<void>;

  /**
   * Double click this {@link Component}.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @test
   */
  doubleClick(): Promise<void>;

  /**
   * Long click this {@link Component}.
   * @syscap SystemCapability.Test.UiTest
   * @since 9
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @test
   */
  longClick(): Promise<void>;

  /**
   * Get the id attribute value.
   * @syscap SystemCapability.Test.UiTest
   * @returns the id value.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  getId(): Promise<string>;

  /**
   * Get the text attribute value.
   * @syscap SystemCapability.Test.UiTest
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  getText(): Promise<string>;

  /**
   * Get the type name.
   * @syscap SystemCapability.Test.UiTest
   * @returns the type name.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  getType(): Promise<string>;

  /**
   * Get the clickable status of this {@link Component}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the clickable status.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  isClickable(): Promise<boolean>;

  /**
   * Get the longClickable status of this {@link Component}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the longClickable status.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  isLongClickable(): Promise<boolean>;

  /**
   * Get the scrollable status of this {@link Component}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the scrollable status.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  isScrollable(): Promise<boolean>;

  /**
   * Get the enabled status of this {@link Component}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the enabled status.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  isEnabled(): Promise<boolean>;

  /**
   * Get the focused status of this {@link Component}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the focused status.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  isFocused(): Promise<boolean>;

  /**
   * Get the selected status of this {@link Component}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the selected status.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  isSelected(): Promise<boolean>;

  /**
   * Get the checked status of this {@link Component}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the checked status.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  isChecked(): Promise<boolean>;

  /**
   * Get the checkable status of this {@link Component}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the checkable status.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  isCheckable(): Promise<boolean>;

  /**
   * Inject text to this {@link Component},applicable to TextInput.
   * @syscap SystemCapability.Test.UiTest
   * @param text The text to inject.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  inputText(text: string): Promise<void>;

  /**
   * Clear text of this {@link Component},applicable to TextInput.
   * @syscap SystemCapability.Test.UiTest
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  clearText(): Promise<void>;

  /**
   * Scroll on this {@link Component} to the top,applicable to scrollable one.
   * @syscap SystemCapability.Test.UiTest
   * @param speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 15000,set it 600 if out of range.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  scrollToTop(speed?: number): Promise<void>;

  /**
   * Scroll on this {@link Component} to the bottom,applicable to scrollable one.
   * @syscap SystemCapability.Test.UiTest
   * @param speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 15000,set it 600 if out of range.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  scrollToBottom(speed?: number): Promise<void>;

  /**
   * Scroll on this {@link Component}to find matched {@link Component},applicable to scrollable one.
   * @syscap SystemCapability.Test.UiTest
   * @param on The attribute requirements of the target {@link Component}.
   * @returns the found result,or undefined if not found.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  scrollSearch(on: On): Promise<Component>;

  /**
   * Get the bounds rect of this {@link Component}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the bounds rect object.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  getBounds(): Promise<Rect>;

  /**
   * Get the boundsCenter of this {@link Component}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the boundsCenter object.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  getBoundsCenter(): Promise<Point>;

  /**
   * Drag this {@link Component} to the bounds rect of target Component.
   * @syscap SystemCapability.Test.UiTest
   * @param target The target {@link Component}.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  dragTo(target: Component): Promise<void>;

  /**
   * Pinch enlarge this {@link Component} to the target scale.
   * @syscap SystemCapability.Test.UiTest
   * @param scale The scale of the pinch enlarge this {@link Component}'s size.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  pinchOut(scale: number): Promise<void>;

  /**
   * Pinch shrink this {@link Component} to the target scale.
   * @syscap SystemCapability.Test.UiTest
   * @param scale The scale of the pinch shrink this {@link Component}'s size.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the component is invisible or destroyed.
   * @since 9
   * @test
   */
  pinchIn(scale: number): Promise<void>;
}

/**
 * The unified facade of UiTest framework,can be used to find {@link Component},trigger keyEvents,perform
 * coordinates-based UI actions,capture screen and so on.
 *
 * @since 9
 * @test
 * @syscap SystemCapability.Test.UiTest
 */
declare class Driver {
  /**
   * Create an {@link Driver} object.
   * @syscap SystemCapability.Test.UiTest
   * @returns the {@link Driver} object.
   * @throws {BusinessError} 17000001 - if the test framework failed to initialize.
   * @since 9
   * @test
   */
  static create(): Driver;

  /**
   * Delay with specified duration.
   * @syscap SystemCapability.Test.UiTest
   * @param duration The delay duration in milliseconds.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  delayMs(duration: number): Promise<void>;

  /**
   * Find the first matched {@link Component} on current UI.
   * @syscap SystemCapability.Test.UiTest
   * @param on The attribute requirements of the target {@link Component}.
   * @returns the first matched {@link Component} or undefined.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  findComponent(on: On): Promise<Component>;

  /**
   * Find the first matched {@link UiWindow} window.
   * @syscap SystemCapability.Test.UiTest
   * @param filter The filer condition of the target {@link UiWindow}.
   * @returns the first matched {@link UiWindow} or undefined.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  findWindow(filter: WindowFilter): Promise<UiWindow>;

  /**
   * Find the first matched {@link Component} on current UI during the time given.
   * @syscap SystemCapability.Test.UiTest
   * @param on The attribute requirements of the target {@link Component}.
   * @param time Duration of finding in milliseconds
   * @returns the first matched {@link Component} or undefined.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  waitForComponent(on: On, time: number): Promise<Component>;

  /**
   * Find all the matched {@link Component}s on current UI.
   * @syscap SystemCapability.Test.UiTest
   * @param on The attribute requirements of the target {@link Component}.
   * @returns the matched {@link Component}s list.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  findComponents(on: On): Promise<Array<Component>>;

  /**
   * Assert t the matched {@link Component}s exists on current UI;if not,assertError will be raised.
   * @syscap SystemCapability.Test.UiTest
   * @param on The attribute requirements of the target {@link Component}.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000003 - if the assertion failed.
   * @since 9
   * @test
   */
  assertComponentExist(on: On): Promise<void>;

  /**
   * Press the BACK key.
   * @syscap SystemCapability.Test.UiTest
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  pressBack(): Promise<void>;

  /**
   * Press the specified key.
   * @syscap SystemCapability.Test.UiTest
   * @param keyCode the target keyCode.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  triggerKey(keyCode: number): Promise<void>;

  /**
   * Press two or three key combinations
   * @syscap SystemCapability.Test.UiTest
   * @param key0 the first keyCode.
   * @param key1 the second keyCode.
   * @param key2 the third keyCode.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  triggerCombineKeys(key0: number, key1: number, key2?: number): Promise<void>;

  /**
   * Click on the specified location on the screen.
   * @syscap SystemCapability.Test.UiTest
   * @param x The x-coordinate.
   * @param y The y-coordinate.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  click(x: number, y: number): Promise<void>;

  /**
   * DoubleClick on the specified location on the screen.
   * @syscap SystemCapability.Test.UiTest
   * @param x The x-coordinate.
   * @param y The y-coordinate.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  doubleClick(x: number, y: number): Promise<void>;

  /**
   * LongClick on the specified location on the screen.
   * @syscap SystemCapability.Test.UiTest
   * @param x The x-coordinate.
   * @param y The y-coordinate.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  longClick(x: number, y: number): Promise<void>;

  /**
   * Swipe on the screen between the specified points.
   * @syscap SystemCapability.Test.UiTest
   * @param startx The x-coordinate of the starting point.
   * @param starty The y-coordinate of the starting point.
   * @param endx The x-coordinate of the ending point.
   * @param endy The y-coordinate of the ending point.
   * @param speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 15000,set it 600 if out of range.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  swipe(startx: number, starty: number, endx: number, endy: number, speed?: number): Promise<void>;

  /**
   * Drag on the screen between the specified points.
   * @syscap SystemCapability.Test.UiTest
   * @param startx The x-coordinate of the starting point.
   * @param starty The y-coordinate of the starting point.
   * @param endx The x-coordinate of the ending point.
   * @param endy The y-coordinate of the ending point.
   * @param speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 15000,set it 600 if out of range.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  drag(startx: number, starty: number, endx: number, endy: number, speed?: number): Promise<void>;

  /**
   * Capture current screen and save as picture which PNG format.
   * @syscap SystemCapability.Test.UiTest
   * @param savePath the path where to store the picture.
   * @returns true if screen-capturing and file-storing are completed successfully,false otherwise.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  screenCap(savePath: string): Promise<boolean>;

  /**
   * Set the rotation of the device display.
   * @syscap SystemCapability.Test.UiTest
   * @param rotation The target rotation to set.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  setDisplayRotation(rotation: DisplayRotation): Promise<void>;

  /**
   * Get the rotation of the device display.
   * @syscap SystemCapability.Test.UiTest
   * @returns the current display rotation.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  getDisplayRotation(): Promise<DisplayRotation>;

  /**
   * Enable/disable the rotation of device display.
   * @syscap SystemCapability.Test.UiTest
   * @param enabled Enable the rotation or not.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  setDisplayRotationEnabled(enabled: boolean): Promise<void>;

  /**
   * Get the size of the device display.
   * @syscap SystemCapability.Test.UiTest
   * @returns the size of the device display.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  getDisplaySize(): Promise<Point>;

  /**
   * Get the density of the device display.
   * @syscap SystemCapability.Test.UiTest
   * @returns the density of the device display.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  getDisplayDensity(): Promise<Point>;

  /**
   * Wake up the device display.
   * @syscap SystemCapability.Test.UiTest
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  wakeUpDisplay(): Promise<void>;

  /**
   * Press the home key.
   * @syscap SystemCapability.Test.UiTest
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  pressHome(): Promise<void>;

  /**
   * Wait for the UI become idle.
   * @syscap SystemCapability.Test.UiTest
   * @param idleTime the threshold of UI idle time, in millisecond.
   * @param timeout The maximum time to wait for idle, in millisecond.
   * @returns true if wait for idle succeed in the timeout, false otherwise.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  waitForIdle(idleTime: number, timeout: number): Promise<boolean>;

  /**
   * Inject fling on the device display.
   * @syscap SystemCapability.Test.UiTest
   * @param from The coordinate point where the finger touches the screen.
   * @param to The coordinate point where the finger leaves the screen.
   * @param stepLen the length of each step, in pixels.
   * @param speed The speed of fling (pixels per second),default is 600,the value ranges from 200 to 15000,set it 600 if out of range.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  fling(from: Point, to: Point, stepLen: number, speed: number): Promise<void>;

  /**
   * Inject multi-pointer action on the device display.
   * @syscap SystemCapability.Test.UiTest
   * @param pointers The two-dimensional array of pointers to inject.
   * @param speed The speed of swipe (pixels per second),default is 600,the value ranges from 200 to 15000,set it 600 if out of range.
   * @returns true if the operation finished, false
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @since 9
   * @test
   */
  injectMultiPointerAction(pointers: PointerMatrix, speed?: number): Promise<boolean>;
}

/**
 * @since 9
 * @test
 * @syscap SystemCapability.Test.UiTest
 */
declare class UiWindow {
  /**
   * Get the bundle name of this {@link UiWindow}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the bundle name.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the window is invisible or destroyed.
   * @since 9
   * @test
   */
  getBundleName(): Promise<string>;

  /**
   * Get the bounds rect of this {@link UiWindow}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the bounds rect object.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the window is invisible or destroyed.
   * @since 9
   * @test
   */
  getBounds(): Promise<Rect>;

  /**
   * Get the title of this {@link UiWindow}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the title value.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the window is invisible or destroyed.
   * @since 9
   * @test
   */
  getTitle(): Promise<string>;

  /**
   * Get the window mode of this {@link UiWindow}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the {@link WindowMode} object
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the window is invisible or destroyed.
   * @since 9
   * @test
   */
  getWindowMode(): Promise<WindowMode>;

  /**
   * Get the focused status of this {@link UiWindow}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the focused status
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the window is invisible or destroyed.
   * @since 9
   * @test
   */
  isFocused(): Promise<boolean>;

  /**
   * Get the active status of this {@link UiWindow}.
   * @syscap SystemCapability.Test.UiTest
   * @returns the actived status
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the window is invisible or destroyed.
   * @since 9
   * @test
   */
  isActived(): Promise<boolean>;

  /**
   * Set the focused status of this {@link UiWindow}.
   * @syscap SystemCapability.Test.UiTest
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the window is invisible or destroyed.
   * @since 9
   * @test
   */
  focus(): Promise<void>;

  /**
   * Move this {@link UiWindow} to the specified points.
   * @syscap SystemCapability.Test.UiTest
   * @param x The x coordinate of destination.
   * @param y The y coordinate of destination.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the window is invisible or destroyed.
   * @throws {BusinessError} 17000005 - if the action is not supported on this window.
   * @since 9
   * @test
   */
  moveTo(x: number, y: number): Promise<void>;

  /**
   * Resize this {@link UiWindow} to the specified size for the specified direction.
   * @syscap SystemCapability.Test.UiTest
   * @param wide The expected wide of the window after resizing.
   * @param height The expected height of the window after resizing.
   * @param direction The expected direction of the window after resizing.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the window is invisible or destroyed.
   * @throws {BusinessError} 17000005 - if the action is not supported on this window.
   * @since 9
   * @test
   */
  resize(wide: number, height: number, direction: ResizeDirection): Promise<void>;

  /**
   * Change this {@link UiWindow} into split screen mode.
   * @syscap SystemCapability.Test.UiTest
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the window is invisible or destroyed.
   * @throws {BusinessError} 17000005 - if the action is not supported on this window.
   * @since 9
   * @test
   */
  split(): Promise<void>;

  /**
   * Maximize this {@link UiWindow}.
   * @syscap SystemCapability.Test.UiTest
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the window is invisible or destroyed.
   * @throws {BusinessError} 17000005 - if the action is not supported on this window.
   * @since 9
   * @test
   */
  maximize(): Promise<void>;

  /**
   * Minimize this {@link UiWindow}.
   * @syscap SystemCapability.Test.UiTest
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the window is invisible or destroyed.
   * @throws {BusinessError} 17000005 - if the action is not supported on this window.
   * @since 9
   * @test
   */
  minimize(): Promise<void>;

  /**
   * Resume this {@link UiWindow}.
   * @syscap SystemCapability.Test.UiTest
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the window is invisible or destroyed.
   * @throws {BusinessError} 17000005 - if the action is not supported on this window.
   * @since 9
   * @test
   */
  resume(): Promise<void>;

  /**
   * Close this {@link UiWindow}.
   * @syscap SystemCapability.Test.UiTest
   * @throws {BusinessError} 17000002 - if the async function was not called with await.
   * @throws {BusinessError} 17000004 - if the window is invisible or destroyed.
   * @throws {BusinessError} 17000005 - if the action is not supported on this window.
   * @since 9
   * @test
   */
  close(): Promise<void>;
}

/**
 * Represents a two-dimensional array of pointers on the device display, it's used to build a
 * multi-finger trace which can be injected with UiDriver.
 *
 * @since 9
 * @test
 * @syscap SystemCapability.Test.UiTest
 */
declare class PointerMatrix {
  /**
   * Create an {@link PointerMatrix} object.
   * @syscap SystemCapability.Test.UiTest
   * @param fingers The number of fingers.
   * @param steps The number of steps of each finger trace.
   * @returns the {@link PointerMatrix} object.
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @since 9
   * @test
   */
  static create(fingers: number, steps: number): PointerMatrix;

  /**
   * Set the point value of an element in the PointerMatrix.
   * @syscap SystemCapability.Test.UiTest
   * @param finger The index of target finger to set.
   * @param step The index of target step to set.
   * @param point The coordinate of target step to set.
   * @throws {BusinessError} 401 - if the input parameters are invalid.

   * @since 9
   * @test
   */
  setPoint(finger: number, step: number, point: Point): void;
}

/**
 * The static builder for building {@link By}object conveniently,usage example:BY.text('txt').enabled(true).
 * @syscap SystemCapability.Test.UiTest
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.uitest.ON
 * @test
 */
declare const BY: By;
/**
 * The static builder for building {@link On}object conveniently,usage example:ON.text('txt').enabled(true).
 * @syscap SystemCapability.Test.UiTest
 * @since 9
 * @test
 */
declare const ON: On;

export {UiComponent, UiDriver, Component, Driver, UiWindow, ON, BY, MatchPattern, DisplayRotation, ResizeDirection, WindowMode, PointerMatrix};
