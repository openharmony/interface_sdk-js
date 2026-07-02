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
  * UiTest提供UI自动化测试能力，供开发者在测试场景使用，主要支持控件查找与操作、坐标点击/滑动、按键注入、截图、窗口管理、多指操作、鼠标/手写笔/触摸板操作等能力。
  * 
  * 该模块提供以下功能：
  * 
  * - [On<sup>9+</sup>]{@link On}：提供控件特征描述能力，用于控件筛选匹配查找。
  * - [Component<sup>9+</sup>]{@link Component}：代表UI界面上的指定控件，提供控件属性获取，控件点击，滑动查找，文本注入等能力。
  * - [Driver<sup>9+</sup>]{@link Driver}：入口类，提供控件匹配/查找，按键注入，坐标点击/滑动，截图等能力。
  * - [UiWindow<sup>9+</sup>]{@link UiWindow}：代表UI界面上的窗口对象，提供窗口属性获取，窗口拖动、调整窗口大小等能力。
  * - [By<sup></sup>]{@link By}：提供控件特征描述能力，用于控件筛选匹配查找。从API version 8开始支持，从API version 9开始废弃，建议使用
  * [On<sup>9+</sup>]{@link On}替代。
  * - [UiComponent<sup></sup>]{@link UiComponent}：代表UI界面上的指定控件，提供控件属性获取，控件点击，滑动查找，文本注入等能力。从API version 8开始支持，从API version
  * 9开始废弃，建议使用[Component<sup>9+</sup>]{@link Component}替代。
  * - [UiDriver<sup></sup>]{@link UiDriver}：入口类，提供控件匹配/查找，按键注入，坐标点击/滑动，截图等能力。从API version 8开始支持，从API version 9开始废弃，建议使用
  * [Driver<sup>9+</sup>]{@link Driver}替代。
  * 
  * > **说明：**
  * >
  * > - 本模块接口在<!--RP1-->[自动化测试脚本](docroot://application-test/uitest-guidelines.md)<!--RP1End-->中使用。
  * >
  * > - 本模块接口不支持并发调用。
  * 
  * @file
  * @kit TestKit
  * 
 */



import { Callback } from './@ohos.base';

/**
 * 控件属性支持的匹配模式。
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
declare enum MatchPattern {
  /**
   * 等于给定值。
   * 
   * 从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   * @test
   */
  EQUALS = 0,

  /**
   * 包含给定值。
   * 
   * 从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   * @test
   */
  CONTAINS = 1,

  /**
   * 以给定值开始。
   * 
   * 从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   * @test
   */
  STARTS_WITH = 2,

  /**
   * 以给定的值结束。
   *
   * 从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   * @test
   */
  ENDS_WITH = 3,

  /**
   * 正则表达式匹配。
   * 
   * 从API version 18开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  REG_EXP = 4,

  /**
   * 正则表达式匹配，忽略大小写。
   * 
   * 从API version 18开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  REG_EXP_ICASE = 5
 }


/**
 * UiTest框架通过By类提供了丰富的控件特征描述API，用于进行控件筛选来匹配/查找出目标控件。
 * 
 * By提供的API能力具有以下几个特点:
 * 
 * 1、支持单属性匹配和多属性组合匹配，例如同时指定目标控件text和id。
 * 
 * 2、控件属性支持多种匹配模式。
 * 
 * 3、支持控件绝对定位，相对定位，可通过[By.isBefore<sup>(deprecated)</sup>]{@link By#isBefore}和
 * [By.isAfter<sup>(deprecated)</sup>]{@link By#isAfter}等API限定邻近控件特征进行辅助定位。
 * 
 * By类提供的所有API均为同步接口，建议使用者通过静态构造器BY来链式创建By对象。
 * 
 * > **说明：**
 * >
 * > 从API version 8开始支持，从API version 9开始废弃，建议使用[On<sup>9+</sup>]{@link On}替代。
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead On
 */
declare class By {
  /**
   * 指定目标控件文本属性，支持多种匹配模式，返回By对象自身。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[text<sup>9+</sup>]{@link On#text}替代。
   *
   * @param { string } txt - 指定控件文本，用于匹配目标控件文本。
   * @param { MatchPattern } pattern - 指定的文本匹配模式，默认为[EQUALS]{@link MatchPattern}。
   * @returns { By } - 返回指定目标控件文本属性的By对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead On#text
   * @test
   */
  text(txt: string, pattern?: MatchPattern): By;

  /**
   * 指定目标控件key值属性，返回By对象自身。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[id<sup>9+</sup>]{@link On#id(id: string)}替代。
   *
   * @param { string } key - 指定控件的Key值。
   * @returns { By } - 返回指定目标控件key值属性的By对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead On#id(id: string)
   * @test
   */
  key(key: string): By;

  /**
   * 指定目标控件id属性，返回By对象自身。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[id<sup>9+</sup>]{@link On#id(id: string)}替代。
   *
   * @param { number } id - 指定控件的id值。
   * @returns { By } - 返回指定目标控件id属性的By对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead On#id(id: string)
   * @test
   */
  id(id: number): By;

  /**
   * 指定目标控件的控件类型属性，返回By对象自身。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[type<sup>9+</sup>]{@link On#type(tp: string)}替代。
   *
   * @param { string } tp - 指定控件类型。
   * @returns { By } - 返回指定目标控件的控件类型属性的By对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead On#type(tp: string)
   * @test
   */
  type(tp: string): By;

  /**
   * 指定目标控件的可点击状态属性，返回By对象自身。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[clickable<sup>9+</sup>]{@link On#clickable}替代。
   *
   * @param { boolean } b - 指定控件可点击状态。true：可点击。false：不可点击。默认为true。
   * @returns { By } - 返回指定目标控件的可点击状态属性的By对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead On#clickable
   * @test
   */
  clickable(b?: boolean): By;

  /**
   * 指定目标控件的可滑动状态属性，返回By对象自身。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[scrollable<sup>9+</sup>]{@link On#scrollable}替代。
   *
   * @param { boolean } b - 控件可滑动状态。true：可滑动。false：不可滑动。默认为true。
   * @returns { By } - 返回指定目标控件的可滑动状态属性的By对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead On#scrollable
   * @test
   */
  scrollable(b?: boolean): By;

  /**
   * 指定目标控件的使能状态属性，返回By对象自身。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[enabled<sup>9+</sup>]{@link On#enabled}替代。
   *
   * @param { boolean } b - 指定控件使能状态。true：使能。false：未使能。默认为true。
   * @returns { By } - 返回指定目标控件的使能状态属性的By对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead On#enabled
   * @test
   */
  enabled(b?: boolean): By;

  /**
   * 指定目标控件的获焦状态属性，返回By对象自身。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[focused<sup>9+</sup>]{@link On#focused}替代。
   *
   * @param { boolean } b - 控件获焦状态。true：获焦。false：未获焦。默认为true。
   * @returns { By } - 返回指定目标控件的获焦状态属性的By对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead On#focused
   * @test
   */
  focused(b?: boolean): By;

  /**
   * 指定目标控件的被选中状态属性，返回By对象自身。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[selected<sup>9+</sup>]{@link On#selected}替代。
   *
   * @param { boolean } b - 指定控件被选中状态。true：被选中。false：未被选中。默认为true。
   * @returns { By } - 返回指定目标控件的被选中状态属性的By对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead On#selected
   * @test
   */
  selected(b?: boolean): By;

  /**
   * 指定目标控件位于给出的特征属性控件之前，返回By对象自身。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[isBefore<sup>9+</sup>]{@link On#isBefore(on: On)}替代。
   *
   * @param { By } by - 特征控件的属性。
   * @returns { By } - 返回指定目标控件位于给出的特征属性控件之前的By对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead On#isBefore(on: On)
   * @test
   */
  isBefore(by: By): By;

  /**
   * 指定目标控件位于给出的特征属性控件之后，返回By对象自身。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[isAfter<sup>9+</sup>]{@link On#isAfter(on: On)}替代。
   *
   * @param { By } by - 特征控件的属性。
   * @returns { By } - 返回指定目标控件位于给出的特征属性控件之后的By对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead On#isAfter(on: On)
   * @test
   */
  isAfter(by: By): By;
 }

/**
 * UiTest中，UiComponent类代表了UI界面上的一个控件，提供控件属性获取，控件点击，滑动查找，文本注入等API。
 * 该类提供的所有方法都使用Promise方式作为异步方法，需使用await调用。
 * 
 * > **说明：**
 * >
 * > 从API version 8开始支持，从API version 9开始废弃，建议使用[Component<sup>9+</sup>]{@link Component}替代。
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead Component
 * @test
 */
declare class UiComponent {
  /**
   * 控件对象进行点击操作。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[click<sup>9+</sup>]{@link Component#click}替代。
   *
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#click
   * @test
   */
  click(): Promise<void>;

  /**
   * 控件对象进行双击操作。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[doubleClick<sup>9+</sup>]{@link Component#doubleClick}替代。
   *
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#doubleClick
   * @test
   */
  doubleClick(): Promise<void>;

  /**
   * 控件对象进行长按操作。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[longClick<sup>9+</sup>]{@link Component#longClick}替代。
   *
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#longClick
   * @test
   */
  longClick(): Promise<void>;

  /**
   * 获取控件对象的id值。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[getId<sup>9+</sup>]{@link Component#getId}替代。
   *
   * @returns { Promise<number> } - Promise对象，返回控件的id值。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#getId
   * @test
   */
  getId(): Promise<number>;

  /**
   * 获取控件对象的key值。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[getId<sup>9+</sup>]{@link Component#getId}替代。
   *
   * @returns { Promise<string> } - Promise对象，返回控件的key值。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#getId
   * @test
   */
  getKey(): Promise<string>;

  /**
   * 获取控件对象的文本信息。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[getText<sup>9+</sup>]{@link Component#getText}替代。
   *
   * @returns { Promise<string> } - Promise对象，返回控件的文本信息。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#getText
   * @test
   */
  getText(): Promise<string>;

  /**
   * 获取控件对象的控件类型。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[getType<sup>9+</sup>]{@link Component#getType}替代。
   *
   * @returns { Promise<string> } - Promise对象，返回控件的类型。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#getType
   * @test
   */
  getType(): Promise<string>;

  /**
   * 获取控件对象可点击状态。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[isClickable<sup>9+</sup>]{@link Component#isClickable}替代。
   *
   * @returns { Promise<boolean> } - Promise对象，返回控件对象可点击状态。true：可点击。false：不可点击。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#isClickable
   * @test
   */
  isClickable(): Promise<boolean>;

  /**
   * 获取控件对象可滑动状态。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[isScrollable<sup>9+</sup>]{@link Component#isScrollable}替代。
   *
   * @returns { Promise<boolean> } - Promise对象，返回控件对象可滑动状态。true：可滑动。false：不可滑动。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#isScrollable
   * @test
   */
  isScrollable(): Promise<boolean>;

  /**
   * 获取控件使能状态。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[isEnabled<sup>9+</sup>]{@link Component#isEnabled}替代。
   *
   * @returns { Promise<boolean> } - Promise对象，返回控件使能状态。true：使能。false：未使能。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#isEnabled
   * @test
   */
  isEnabled(): Promise<boolean>;

  /**
   * 判断控件对象是否获焦。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[isFocused<sup>9+</sup>]{@link Component#isFocused}替代。
   *
   * @returns { Promise<boolean> } - Promise对象，返回控件对象是否获焦。true：获焦。false：未获焦。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#isFocused
   * @test
   */
  isFocused(): Promise<boolean>;

  /**
   * 获取控件对象被选中状态。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[isSelected<sup>9+</sup>]{@link Component#isSelected}替代。
   *
   * @returns { Promise<boolean> } - Promise对象，返回控件对象被选中的状态。true：被选中。false：未被选中。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#isSelected
   * @test
   */
  isSelected(): Promise<boolean>;

  /**
   * 向控件中输入文本，仅针对可编辑的文本组件生效。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[inputText<sup>9+</sup>]{@link Component#inputText(text: string)}替代。
   *
   * @param { string } text - 输入的文本信息。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#inputText(text: string)
   * @test
   */
  inputText(text: string): Promise<void>;

  /**
   * 在控件上滑动查找目标控件（适用于List等支持滑动的控件）。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[scrollSearch<sup>9+</sup>]{@link Component#scrollSearch(on: On)}替代。
   *
   * @param { By } by - 目标控件的属性要求。
   * @returns { Promise<UiComponent> } - Promise对象，返回目标控件对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#scrollSearch(on: On)
   * @test
   */
  scrollSearch(by: By): Promise<UiComponent>;
 }

/**
 * UiDriver类为uitest测试框架的总入口，提供控件匹配/查找，按键注入，坐标点击/滑动，截图等API。
 * 该类提供的方法除UiDriver.create()以外的所有方法都使用Promise方式作为异步方法，需使用await调用。
 * 
 * > **说明：**
 * >
 * > 从API version 8开始支持，从API version 9开始废弃，建议使用[Driver<sup>9+</sup>]{@link Driver}替代。
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead Driver
 * @test
 */
declare class UiDriver {
  /**
   * 静态方法，构造一个UiDriver对象，并返回该对象。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[create<sup>9+</sup>]{@link Driver.create}替代。
   *
   * @returns { UiDriver } - 返回构造的UiDriver对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Driver#create
   * @test
   */
  static create(): UiDriver;

  /**
   * UiDriver对象在给定的时间内延时。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[delayMs<sup>9+</sup>]{@link Driver#delayMs}替代。
   *
   * @param { number } duration - 给定的时间。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Driver#delayMs
   * @test
   */
  delayMs(duration: number): Promise<void>;

  /**
   * 在UiDriver对象中，根据给出的目标控件属性要求查找目标控件。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[findComponent<sup>9+</sup>]{@link Driver#findComponent(on: On)}替代。
   *
   * @param { By } by - 目标控件的属性要求。
   * @returns { Promise<UiComponent> } - Promise对象，返回控件对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Driver#findComponent(on: On)
   * @test
   */
  findComponent(by: By): Promise<UiComponent>;

  /**
   * 在UiDriver对象中，根据给出的目标控件属性要求查找出所有匹配控件，以列表保存。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[findComponents<sup>9+</sup>]{@link Driver#findComponents(on: On)}替代。
   *
   * @param { By } by - 目标控件的属性要求。
   * @returns { Promise<Array<UiComponent>> } - Promise对象，返回控件对象的列表。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Driver#findComponents(on: On)
   * @test
   */
  findComponents(by: By): Promise<Array<UiComponent>>;

  /**
   * 断言API，用于断言当前界面存在满足给出的目标控件属性的控件; 如果控件不存在，该API将抛出JS异常，使当前测试用例失败。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[assertComponentExist<sup>9+</sup>]{@link Driver#assertComponentExist}替
   * > 代。
   *
   * @param { By } by - 目标控件的属性要求。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws {BusinessError} 401 - if the input parameters are invalid.
   * @throws {BusinessError} 17000002 - The API does not support concurrent calls.
   * @throws {BusinessError} 17000003 - if the assertion failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Driver#assertComponentExist
   * @test
   */
  assertComponentExist(by: By): Promise<void>;

  /**
   * UiDriver对象进行点击BACK键的操作。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[pressBack<sup>9+</sup>]{@link Driver#pressBack()}替代。
   *
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Driver#pressBack()
   * @test
   */
  pressBack(): Promise<void>;

  /**
   * UiDriver对象采取如下操作：通过key值找到对应键并点击。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[triggerKey<sup>9+</sup>]{@link Driver#triggerKey(keyCode: int)}替代。
   *
   * @param { number } keyCode - 指定的key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Driver#triggerKey(keyCode: int)
   * @test
   */
  triggerKey(keyCode: number): Promise<void>;

  /**
   * UiDriver对象采取如下操作：在目标坐标点单击。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[click<sup>9+</sup>]{@link Component#click}替代。
   *
   * @param { number } x - 以number的形式传入目标点的横坐标信息，取值范围：大于等于0的整数。
   * @param { number } y - 以number的形式传入目标点的纵坐标信息，取值范围：大于等于0的整数。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#click
   * @test
   */
  click(x: number, y: number): Promise<void>;

  /**
   * UiDriver对象采取如下操作：在目标坐标点双击。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[doubleClick<sup>9+</sup>]{@link Component#doubleClick}替代。
   *
   * @param { number } x - 以number的形式传入目标点的横坐标信息，取值范围：大于等于0的整数。
   * @param { number } y - 以number的形式传入目标点的纵坐标信息，取值范围：大于等于0的整数。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#doubleClick
   * @test
   */
  doubleClick(x: number, y: number): Promise<void>;

  /**
   * UiDriver对象采取如下操作：在目标坐标点长按下鼠标左键。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[longClick<sup>9+</sup>]{@link Component#longClick}替代。
   *
   * @param { number } x - 以number的形式传入目标点的横坐标信息，取值范围：大于等于0的整数。
   * @param { number } y - 以number的形式传入目标点的纵坐标信息，取值范围：大于等于0的整数。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Component#longClick
   * @test
   */
  longClick(x: number, y: number): Promise<void>;

  /**
   * UiDriver对象采取如下操作：从给出的起始坐标点滑向给出的目的坐标点。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[swipe<sup>9+</sup>]{@link Driver#swipe}替代。
   *
   * @param { number } startx - 以number的形式传入起始点的横坐标信息，取值范围：大于等于0的整数。
   * @param { number } starty - 以number的形式传入起始点的纵坐标信息，取值范围：大于等于0的整数。
   * @param { number } endx - 以number的形式传入目的点的横坐标信息，取值范围：大于等于0的整数。
   * @param { number } endy - 以number的形式传入目的点的纵坐标信息，取值范围：大于等于0的整数。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Driver#swipe
   * @test
   */
  swipe(startx: number, starty: number, endx: number, endy: number): Promise<void>;

  /**
   * UiDriver对象采取如下操作：捕获当前屏幕，并保存为PNG格式的图片至给出的保存路径中。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[screenCap<sup>9+</sup>]{@link Driver#screenCap(savePath: string)}替代。
   *
   * @param { string } savePath - 文件保存路径。
   * @returns { Promise<boolean> } - Promise对象，返回截图操作是否成功完成。true：成功完成，false：未成功完成。
   * @syscap SystemCapability.Test.UiTest
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead Driver#screenCap(savePath: string)
   * @test
   */
  screenCap(savePath: string): Promise<boolean>;
 }

/**
 * 窗口的窗口模式。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare enum WindowMode {
  /**
   * 全屏模式。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  FULLSCREEN = 0,
  /**
   * 主窗口。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  PRIMARY = 1,
  /**
   * 第二窗口。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  SECONDARY = 2,
  /**
   * 浮动窗口。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  FLOATING = 3
 }

/**
 * 窗口调整大小的方向。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare enum ResizeDirection {
  /**
   * 左方。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  LEFT = 0,
  /**
   * 右方。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  RIGHT = 1,
  /**
   * 上方。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  UP = 2,
  /**
   * 下方。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  DOWN = 3,
  /**
   * 左上方。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  LEFT_UP = 4,
  /**
   * 左下方。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  LEFT_DOWN = 5,
  /**
   * 右上方。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  RIGHT_UP = 6,
  /**
   * 右下方。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  RIGHT_DOWN = 7
 }

/**
  * 设备显示器的显示方向。
  *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform [since 26.0.0]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare enum DisplayRotation {
  /**
      * 设备显示器不旋转，初始形态垂直显示。
      *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  ROTATION_0 = 0,
  /**
      * 设备显示器顺时针旋转90°，水平显示。
      *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  ROTATION_90 = 1,
  /**
      * 设备显示器顺时针旋转180°，逆向垂直显示。
      *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  ROTATION_180 = 2,
  /**
      * 设备显示器顺时针旋转270°，逆向水平显示。
      *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  ROTATION_270 = 3
 }

/**
 * 坐标点信息。
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare interface Point {
  /**
   * 坐标点的横坐标，取值大于0的整数。
   * 
   * **说明：** 从API version 20开始，该属性不再为只读属性。
   * 
   * 从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @readonly [since 9-19]
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  x: int;
  /**
   * 坐标点的纵坐标，取值大于0的整数。
   * 
   * **说明：** 从API version 20开始，该属性不再为只读属性。
   * 
   * 从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @readonly [since 9-19]
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  y: int;
  /**
   * 坐标点所属的屏幕ID，取值范围：大于等于0的整数。默认值为设备默认屏幕ID。
   * 
   * 从API version 20开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  displayId?: int;
 }

/**
 * 控件的边框信息。
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare interface Rect {
  /**
   * 控件边框的左上角的X坐标，取值大于0的整数。
   * 
   * **说明：** 从API version 20开始，该属性不再为只读属性。
   * 
   * 从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @readonly [since 9-19]
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  left: int;
  /**
   * 控件边框的左上角的Y坐标，取值大于0的整数。
   * 
   * **说明：** 从API version 20开始，该属性不再为只读属性。
   * 
   * 从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @readonly [since 9-19]
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  top: int;
  /**
   * 控件边框的右下角的X坐标，取值大于0的整数。
   * 
   * **说明：** 从API version 20开始，该属性不再为只读属性。
   * 
   * 从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @readonly [since 9-19]
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  right: int;
  /**
   * 控件边框的右下角的Y坐标，取值大于0的整数。
   * 
   * **说明：** 从API version 20开始，该属性不再为只读属性。
   * 
   * 从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @readonly [since 9-19]
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  bottom: int;
  /**
   * 控件边框所属的屏幕ID，取值大于或等于0的整数。默认值为设备默认屏幕ID。
   * 
   * 从API version 20开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  displayId?: int;
 }

/**
 * 窗口的标志属性信息。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare interface WindowFilter {
  /**
   * 窗口归属应用的包名，默认值为空。
   * 
   * 从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  bundleName?: string;

  /**
      * 窗口的标题信息，默认值为空。 从API version 11开始，该接口支持在原子化服务中使用。
      *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  title?: string;

  /**
   * 窗口是否处于获焦状态，true：获焦状态，false：未获焦状态，默认值为false。
   * 
   * 从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  focused?: boolean;

  /**
   * 窗口是否正与用户进行交互，true：交互状态，false：未交互状态，默认值为false。
   * 
   * 从API version 11开始废弃，建议使用active替代。
   *
   * @syscap SystemCapability.Test.UiTest
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.UiTest.WindowFilter#active
   */
  actived?: boolean;

  /**
   * 窗口是否正与用户进行交互，true：交互状态，false：未交互状态，默认值为false。
   * 
   * 从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  active?: boolean;

  /**
   * 窗口所属的屏幕ID。取值大于或等于0的整数。默认值为设备默认屏幕ID。
   * 
   * 从API version 20开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  displayId?: int;
 }

/**
 * 支持监听的窗口变化事件类型。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 */
declare enum WindowChangeType {
  /**
   * 非窗口变化事件。
   * 
   * **说明：** 该枚举值仅支持作为返回值，如果作为接口入参会抛出异常。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  WINDOW_UNDEFINED = 0,
  /**
   * 窗口出现事件。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  WINDOW_ADDED = 1,
  /**
   * 窗口消失事件。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  WINDOW_REMOVED = 2,
  /**
   * 窗口边框变化事件。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  WINDOW_BOUNDS_CHANGED = 3
 }

/**
 * 支持监听的控件操作事件类型。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 */
declare enum ComponentEventType {
  /**
   * 非窗口变化事件。
   * 
   * **说明：** 该枚举值仅支持作为返回值，如果作为接口入参会抛出异常。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  COMPONENT_UNDEFINED = 0,
  /**
   * 控件被点击事件。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  COMPONENT_CLICKED = 1,
  /**
   * 控件被长按事件。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  COMPONENT_LONG_CLICKED = 2,
  /**
   * 控件滚动开始事件。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  COMPONENT_SCROLL_START = 3,
  /**
   * 控件滚动结束事件。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  COMPONENT_SCROLL_END = 4,
  /**
   * [输入框控件](docroot://ui/arkts-common-components-text-input.md)文本变化事件。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  COMPONENT_TEXT_CHANGED = 5,
 }

/**
 * 窗口变化事件监听的扩展配置，用于指定监听过程配置及事件筛选条件。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 * @test
 */
declare interface WindowChangeOptions {
  /**
   * 监听超时时间，默认值为10000，单位：ms。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  timeout?: int;
  /**
   * 监听窗口对应包名，缺省时默认监听所有窗口。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  bundleName?: string;
 }

/**
 * 控件操作事件监听的扩展配置，用于指定监听过程配置及事件筛选条件。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 * @test
 */
declare interface ComponentEventOptions {
  /**
   * 监听超时时间，默认值为10000，单位：ms。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  timeout?: int;
  /**
   * 监听目标控件的属性要求，默认监听所有控件。
   * 
   * **说明：** 仅支持监听指定属性要求的控件，不支持监听指定On.isBefore、On.isAfter、On.within等相对位置的控件。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  on?: On;
 }

/**
 * UI事件的相关信息。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 * @test
 */
declare interface UIElementInfo {
  /**
   * 应用包名。
   * 
   * 从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  readonly bundleName: string;
  /**
   * 控件/窗口类型。
   * 
   * 从API version 11开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  readonly type: string;
  /**
      * 控件/窗口的文本信息。 从API version 11开始，该接口支持在原子化服务中使用。
      *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  readonly text: string;
  /**
   * 窗口变化事件类型，若非窗口变化事件返回WindowChangeType.WINDOW_UNDEFINED。
   * 
   * 从API version 22开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  readonly windowChangeType?: WindowChangeType;
  /**
   * 控件操作事件类型，若非控件操作事件返回ComponentEventType.COMPONENT_UNDEFINED。
   * 
   * 从API version 22开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  readonly componentEventType?: ComponentEventType;
  /**
   * 控件所属窗口id。
   * 
   * 从API version 22开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  readonly windowId?: int;
  /**
   * 控件id，若非控件操作事件返回空字符串。
   * 
   * 从API version 22开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  readonly componentId?: string;
  /**
   * 控件边框信息，若非控件操作事件则返回属性值均为0的Rect对象。
   * 
   * 从API version 22开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  readonly componentRect?: Rect;
 }

/**
 * UI事件监听器。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 * @test
 */
declare interface UIEventObserver {
  /**
   * 开始监听toast控件出现的事件，使用callback的形式返回结果。
   *
   * @param { 'toastShow' } type - 订阅的事件类型，取值为'toastShow'。
   * @param { Callback<UIElementInfo> } callback - 事件发生时执行的回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @test
   */
  once(type: 'toastShow', callback: Callback<UIElementInfo>): void;

  /**
   * Listen for toast show once
   *
   * @param { Callback<UIElementInfo> } callback - function, returns the monitored UIElementInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  onceToastShow(callback: Callback<UIElementInfo>): void;

  /**
   * 开始监听dialog控件出现的事件，使用callback的形式返回结果。
   *
   * @param { 'dialogShow' } type - 订阅的事件类型，取值为'dialogShow'。
   * @param { Callback<UIElementInfo> } callback - 事件发生时执行的回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @test
   */
  once(type: 'dialogShow', callback: Callback<UIElementInfo>): void;

  /**
   * Listen for dialog show once
   *
   * @param { Callback<UIElementInfo> } callback - function, returns the monitored UIElementInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  onceDialogShow(callback: Callback<UIElementInfo>): void;

  /**
   * 开始监听指定类型的窗口变化事件，支持设置事件监听的扩展配置，监听到指定窗口变化事件时触发callback回调。仅支持
   * [自由多窗模式](docroot://windowmanager/window-terminology.md#自由多窗模式)的窗口监听。
   *
   * @param { 'windowChange' } type - 订阅的事件类型，支持的事件为'windowChange'。当监听到窗口变化时，触发该事件。
   * @param { WindowChangeType } windowChangeType - 窗口变化事件类型。
   * @param { WindowChangeOptions } options - 窗口变化事件监听的扩展配置，包括监听超时时间和监听窗口对应包名。
   * @param { Callback<UIElementInfo> } callback - 事件发生时执行的回调函数，返回事件的相关信息。
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @test
   */
  once(type: 'windowChange', windowChangeType: WindowChangeType, options: WindowChangeOptions, callback: Callback<UIElementInfo>): void;

  /**
   * Listen on window change once, additional listening options can be set.
   *
   * @param { WindowChangeType } windowChangeType - Window change type to be listened on.
   * @param { WindowChangeOptions } options - Additional listening options of window change.
   * @param { Callback<UIElementInfo> } callback - function, returns the monitored UIElementInfo.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  onceWindowChange(windowChangeType: WindowChangeType, options: WindowChangeOptions, callback: Callback<UIElementInfo>): void;

  /**
   * 开始监听指定类型的控件操作事件，支持设置事件监听的扩展配置，监听到指定控件操作事件时触发callback回调。
   *
   * @param { 'componentEventOccur' } type - 订阅的事件类型，支持的事件为'componentEventOccur'。当监听到控件操作时，触发该事件。
   * @param { ComponentEventType } componentEventType - 控件操作事件类型。
   * @param { ComponentEventOptions } options - 控件操作事件监听的扩展配置，包括监听超时时间和监听控件匹配条件。
   * @param { Callback<UIElementInfo> } callback - 事件发生时执行的回调函数。
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @test
   */
  once(type: 'componentEventOccur', componentEventType: ComponentEventType, options: ComponentEventOptions, callback: Callback<UIElementInfo>): void;

  /**
   * Listen on component event once, additional listening options can be set.
   *
   * @param { ComponentEventType } componentEventType - Component event type to be listened on.
   * @param { ComponentEventOptions } options - Additional listening options of component event.
   * @param { Callback<UIElementInfo> } callback - function, returns the monitored UIElementInfo.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  onceComponentEventOccur(componentEventType: ComponentEventType, options: ComponentEventOptions, callback: Callback<UIElementInfo>): void;
 }

/**
 * 进行抛滑等UI操作时的方向。
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 */
declare enum UiDirection {
  /**
   * 向左。
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  LEFT = 0,
  /**
   * 向右。
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  RIGHT = 1,
  /**
   * 向上。
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  UP = 2,
  /**
   * 向下。
   *
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  DOWN = 3
 }

/**
 * 模拟注入的鼠标按钮。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 * @test
 */
declare enum MouseButton {
  /**
   * 鼠标左键。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  MOUSE_BUTTON_LEFT = 0,
  /**
   * 鼠标右键。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  MOUSE_BUTTON_RIGHT = 1,
  /**
   * 鼠标中间键。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  MOUSE_BUTTON_MIDDLE = 2
 }

/**
 * 触摸板多指滑动手势选项相关信息。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 18 dynamic
 * @since 23 static
 * @test
 */
declare interface TouchPadSwipeOptions {
  /**
   * 触摸板多指滑动结束是否停留1s后再抬起，默认为false（不停留1s），true：停留，false：不停留。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  stay?: boolean;

  /**
   * 滑动速率，取值范围为200-40000的整数，默认值为2000，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值2000。为负数时抛出参数错误的错误码。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  speed?: int;
 }

/**
 * 输入文本的方式。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 * @test
 */
declare interface InputTextMode {
  /**
   * 输入文本时是否指定以复制粘贴方式输入。true：指定以复制粘贴方式输入。false：指定以逐字键入方式输入。默认为false。
   * 
   * **说明：** 当输入文本中包含中文、特殊字符或文本长度超过200字符时，无论该参数取值为何，均以复制粘贴方式输入。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  paste?: boolean;

  /**
   * 输入文本时是否以追加的方式进行输入。true：以追加方式输入。false：不以追加方式输入。默认为false。
   *
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  addition?: boolean;
 }

/**
 * 表示按键操作的选项。
 *
 * @syscap SystemCapability.Test.UiTest
 * @FaAndStageModel
 * @atomicservice
 * @since 26.0.0 dynamic&static
 * @test
 */
declare interface KeyOptions {
  /**
   * 操作期间要按下的第一个键码。
   * 如果未设置，将不会注入任何按键事件。
   * 如果仅设置 key2 而未设置 key1，将会导致业务错误 17000007。
   *
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  key1?: int;
  /**
   * 操作期间要按下的第一个键码。  
   * 如果未设置，将不会注入任何按键事件。  
   * 如果仅设置 key2 而未设置 key1，将会导致业务错误 17000007。
   *
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  key2?: int;
 }

/**
 * 触摸操作的通用选项。
 *
 * @syscap SystemCapability.Test.UiTest
 * @FaAndStageModel
 * @atomicservice
 * @since 26.0.0 dynamic&static
 * @test
 */
declare interface TouchOptions {
  /**
   * 操作速度（每秒像素数），取值范围为 200 到 40000。  
   * 如果超出范围或为 null 或未定义，则默认设置为 600。
   *
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  speed?: int;
  /**
   * 操作持续时间（毫秒），最小值和默认值均为 1500。
   *
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  duration?: int;
  /**
   * 触摸的压力值，取值范围为 0 到 1， 默认值为 1。
   *
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  pressure?: double;
 }

/**
 * 笔按键类型枚举。
 *
 * @syscap SystemCapability.Test.UiTest
 * @FaAndStageModel
 * @atomicservice
 * @since 26.0.0 dynamic&static
 * @test
 */
declare enum PenKey {
  /**
   * 手写键。
   *
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  HANDWRITING = 0,
  /**
   * 智慧键。
   *
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  SMART = 1,
  /**
   * 空鼠键。
   *
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  AIR_MOUSE = 2
 }

/**
 * 笔按键操作类型枚举。
 *
 * @syscap SystemCapability.Test.UiTest
 * @FaAndStageModel
 * @atomicservice
 * @since 26.0.0 dynamic&static
 * @test
 */
declare enum PenKeyOperation {
  /**
   * 单击。
   *
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  CLICK = 0,
  /**
   * 双击。
   *
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  DOUBLE_CLICK = 1
 }

/**
 * 笔模式枚举。
 *
 * @syscap SystemCapability.Test.UiTest
 * @FaAndStageModel
 * @atomicservice
 * @since 26.0.0 dynamic&static
 * @test
 */
declare enum PenMode {
  /**
   * 手写模式。
   *
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  HANDWRITING = 0,
  /**
   * 空鼠模式。
   *
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  AIR_MOUSE = 1
 }

/**
 * 笔按键操作选项。
 *
 * @syscap SystemCapability.Test.UiTest
 * @FaAndStageModel
 * @atomicservice
 * @since 26.0.0 dynamic&static
 * @test
 */
declare interface PenKeyOperationOptions {
  /**
   * 空鼠模式操作的坐标点。当按键为 AIR_MOUSE 并处于空鼠模式时，该坐标点是必需的。
   *
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  point?: Point;
 }

/**
 * UiTest框架从API version 9开始，通过On类提供了丰富的控件特征描述API，用于进行控件筛选来匹配/查找出目标控件。
 * 
 * On提供的API能力具有以下几个特点:
 * 
 * 1、支持单属性匹配和多属性组合匹配，例如同时指定目标控件text和id。
 * 
 * 2、控件属性支持多种匹配模式。
 * 
 * 3、支持控件绝对定位，相对定位，可通过[ON.isBefore]{@link On#isBefore(on: On)}和[ON.isAfter]{@link On#isAfter(on: On)}等API限定邻近控件特征进行辅助定位。
 * 
 * On类提供的所有API均为同步接口，建议使用者通过静态构造器ON来链式创建On对象。
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class On {
  /**
   * 指定目标控件文本属性，支持多种匹配模式，返回On对象自身。
   *
   * > **说明**
   * >
   * > 如果控件的无障碍属性
   * > [accessibilityLevel](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitylevel)
   * > 设置为'no'或'no-hide-descendants'，无法使用本接口指定目标控件的文本属性用于查找控件，可以使用[On.originalText()]{@link On#originalText}接口实现。
   *
   * @param { string } txt - 指定控件文本，用于匹配目标控件文本。<!--RP2--><!--RP2End-->
   * @param { MatchPattern } [pattern] - 指定的文本匹配模式，默认为[EQUALS]{@link MatchPattern}。 [since 10]
   * @returns { On } - 返回指定目标控件文本属性的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  text(txt: string, pattern?: MatchPattern): On;

  /**
   * 指定目标控件id属性，返回On对象自身。
   *
   * @param { string } id - 指定控件的id值。<!--RP2--><!--RP2End-->
   * @returns { On } - 返回指定目标控件id属性的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  id(id: string): On;

  /**
   * 指定目标控件的控件类型属性，返回On对象自身。
   *
   * @param { string } tp - 指定控件类型。<!--RP2--><!--RP2End-->
   * @returns { On } - 返回指定目标控件的控件类型属性的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  type(tp: string): On;

  /**
   * 指定目标控件的可点击状态属性，返回On对象自身。
   *
   * @param { boolean } [b] - 指定控件可点击状态。true：可点击。false：不可点击。默认为true。<!--RP2--><!--RP2End--> [since 10]
   * @returns { On } - 返回指定目标控件的可点击状态属性的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter
   *     verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  clickable(b?: boolean): On;

  /**
   * 指定目标控件的可长按点击状态属性，返回On对象自身。
   *
   * @param { boolean } [b] - 指定控件可长按点击状态。true：可长按点击。false：不可长按点击。默认为true。<!--RP2--><!--RP2End--> [since 10]
   * @returns { On } - 返回指定目标控件的可长按点击状态属性的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter
   *     verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  longClickable(b?: boolean): On;

  /**
   * 指定目标控件的可滑动状态属性，返回On对象自身。
   *
   * @param { boolean } [b] - 控件可滑动状态。true：可滑动。false：不可滑动。默认为true。<!--RP2--><!--RP2End--> [since 10]
   * @returns { On } - 返回指定目标控件的可滑动状态属性的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter
   *     verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  scrollable(b?: boolean): On;

  /**
   * 指定目标控件的使能状态属性，返回On对象自身。
   *
   * @param { boolean } [b] - 指定控件使能状态。true：使能。false：未使能。默认为true。<!--RP2--><!--RP2End--> [since 10]
   * @returns { On } - 返回指定目标控件的使能状态属性的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter
   *     verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  enabled(b?: boolean): On;

  /**
   * 指定目标控件的获焦状态属性，返回On对象自身。
   *
   * @param { boolean } [b] - 控件获焦状态。true：获焦。false：未获焦。默认为true。<!--RP2--><!--RP2End--> [since 10]
   * @returns { On } - 返回指定目标控件的获焦状态属性的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter
   *     verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  focused(b?: boolean): On;

  /**
   * 指定目标控件的被选中状态属性，返回On对象自身。
   *
   * @param { boolean } [b] - 指定控件被选中状态。true：被选中。false：未被选中。默认为true。<!--RP2--><!--RP2End--> [since 10]
   * @returns { On } - 返回指定目标控件的被选中状态属性的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter
   *     verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  selected(b?: boolean): On;

  /**
   * 指定目标控件的被勾选状态属性，返回On对象自身。
   *
   * @param { boolean } [b] - 指定控件被勾选状态。true：被勾选。false：未被勾选。默认为true。<!--RP2--><!--RP2End--> [since 10]
   * @returns { On } - 返回指定目标控件的被勾选状态属性的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter
   *     verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  checked(b?: boolean): On;

  /**
   * 指定目标控件能否被勾选状态属性，返回On对象自身。
   *
   * @param { boolean } [b] - 指定控件能否被勾选状态。true：能被勾选。false：不能被勾选。默认为true。<!--RP2--><!--RP2End--> [since 10]
   * @returns { On } - 返回指定目标控件能否被勾选状态属性的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  checkable(b?: boolean): On;

  /**
   * 指定目标控件位于给出的特征属性控件之前，返回On对象自身。
   *
   * @param { On } on - 特征控件的属性要求。 <!--RP3--><!--RP3End-->
   * @returns { On } - 返回指定目标控件位于给出的特征属性控件之前的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  isBefore(on: On): On;

  /**
   * 要求目标组件位于由给定{@link Component}指定的另一个组件之前
   * 对象，用于相对于组件定位。
   *
   * @param { Component } com - 目标组件前面的组件如所示。
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  beforeComponent(com: Component): On;

  /**
   * 指定目标控件位于给出的特征属性控件之后，返回On对象自身。
   *
   * @param { On } on - 特征控件的属性要求。 <!--RP3--><!--RP3End-->
   * @returns { On } - 返回指定目标控件位于给出的特征属性控件之后的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  isAfter(on: On): On;

  /**
   * 要求目标组件位于由给定{@link Component}指定的另一个组件之后
   * 对象，用于相对于组件定位。
   *
   * @param { Component } com - 描述了目标组件在的后面。
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  afterComponent(com: Component): On;

  /**
   * 指定目标控件位于给出的特征属性控件之内，返回On对象自身。
   *
   * @param { On } on - 特征控件的属性要求。<!--RP3--><!--RP3End-->
   * @returns { On } - 返回指定目标控件位于给出的特征属性控件内的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  within(on: On): On;

  /**
   * 要求目标组件位于由给定{@link Component}指定的另一个组件的内部
   * 对象，用于相对于组件定位。
   *
   * @param { Component } com - 描述目标组件所在的组件。
   * @returns { On } this {@link On}对象。
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  withinComponent(com: Component): On;

  /**
   * 指定目标控件位于给出的应用窗口内，返回On对象自身。
   *
   * @param { string } bundleName - 应用窗口的包名。<!--RP2--><!--RP2End-->
   * @returns { On } - 返回指定目标控件位于给出的应用窗口内的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  inWindow(bundleName: string): On;

  /**
   * 获取指定屏幕内的控件对象，返回On对象自身。
   *
   * @param { int } displayId - 指定控件所属屏幕ID，取值范围：大于等于0的整数。
   *      **说明：** 传入displayId不存在时，将抛出17000007异常。可通过
   *     [getAllDisplays]{@link @ohos.display:display.getAllDisplays(callback: AsyncCallback<Array<Display>>)}获取当前所有的
   *     display对象，并由display对象获取对应的屏幕ID。<!--RP2--><!--RP2End-->
   * @returns { On } - 返回指定控件所属屏幕的On对象。
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  belongingDisplay(displayId: int): On;

  /**
   * 指定目标控件的描述属性，支持多种匹配模式，返回On对象自身。
   *
   * @param { string } val - 控件的描述属性。 <!--RP2--><!--RP2End-->
   * @param { MatchPattern } [pattern] - 指定的文本匹配模式，默认为[EQUALS]{@link MatchPattern}。
   * @returns { On } - 返回指定目标控件description属性的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  description(val: string, pattern?: MatchPattern): On;

  /**
   * 指定目标控件id属性和匹配模式，返回On对象自身。
   *
   * @param { string } id - 指定控件的id值。<!--RP2--><!--RP2End-->
   * @param { MatchPattern } pattern - 指定的文本匹配模式。
   * @returns { On } - 返回指定目标控件id属性的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  id(id: string, pattern: MatchPattern): On;

  /**
   * 指定目标控件的控件类型属性和匹配模式，返回On对象自身。
   *
   * @param { string } tp - 指定控件类型。<!--RP2--><!--RP2End-->
   * @param { MatchPattern } pattern - 指定的文本匹配模式。
   * @returns { On } - 返回指定目标控件的控件类型属性的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  type(tp: string, pattern: MatchPattern): On;

  /**
   * 获取指定提示文本的控件对象，返回On对象自身。
   *
   * @param { string } val - 指定控件提示文本。  <!--RP2--><!--RP2End-->
   * @param { MatchPattern } [pattern] - 指定的文本匹配模式，默认为[EQUALS]{@link MatchPattern}。
   * @returns { On } - 返回指定提示文本控件的On对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  hint(val: string, pattern?: MatchPattern): On;

  /**
   * 指定控件的文本内容和文本匹配模式，返回On对象自身。
   * 
   * > **说明**
   * >
   * > 如果控件的无障碍属性
   * > [accessibilityLevel](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitylevel)
   * > 设置为'no'或'no-hide-descendants'，可以使用本接口指定目标控件的文本属性用于查找控件，使用[On.text()]{@link On#text}接口不生效。
   *
   * @param { string } text - 指定控件文本，用于匹配目标控件文本。 <!--RP2--><!--RP2End-->
   * @param { MatchPattern } [pattern] - 指定的文本匹配模式，默认为[EQUALS]{@link MatchPattern}。
   * @returns { On } - 返回指定目标控件文本属性的On对象。
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  originalText(text: string, pattern?: MatchPattern): On;
 }

/**
 * UiTest框架在API9中，Component类代表了UI界面上的一个控件，提供控件属性获取，控件点击，滑动查找，文本注入等API。
 * 该类提供的所有方法都使用Promise方式作为异步方法，需使用await调用。
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 * @test
 */
declare class Component {
  /**
   * 控件对象进行点击操作。使用Promise异步回调。
   *
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  click(): Promise<void>;

  /**
   * 控件对象进行双击操作。使用Promise异步回调。
   *
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  doubleClick(): Promise<void>;

  /**
   * 控件对象进行长按操作。使用Promise异步回调。
   *
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  longClick(): Promise<void>;

  /**
   * 获取控件对象的id值。使用Promise异步回调。
   *
   * @returns { Promise<string> } - Promise对象，返回控件的id值。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  getId(): Promise<string>;

  /**
   * 获取控件对象所属的屏幕ID。使用Promise异步回调。
   *
   * @returns { Promise<int> } - Promise对象，返回控件所属的屏幕ID。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  getDisplayId(): Promise<int>;

  /**
   * 获取控件对象的文本信息。使用Promise异步回调。
   * 
   * > **说明**
   * >
   * > 如果控件的无障碍属性
   * > [accessibilityLevel](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitylevel)
   * > 设置为'no'或'no-hide-descendants'，无法使用本接口获取控件的文本信息，可以使用[Component.getOriginalText()]{@link Component#getOriginalText}
   * > 获取控件的文本信息。
   *
   * @returns { Promise<string> } - Promise对象，返回控件的文本信息。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  getText(): Promise<string>;

  /**
   * 获取控件对象的控件类型。使用Promise异步回调。
   *
   * @returns { Promise<string> } - Promise对象，返回控件的类型。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  getType(): Promise<string>;

  /**
   * 获取控件对象可点击属性。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } - Promise对象，返回控件对象是否可点击。true：可点击。false：不可点击。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  isClickable(): Promise<boolean>;

  /**
   * 获取控件对象可点击属性。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } - Promise对象，返回控件对象是否可点击。true：可点击。false：不可点击。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  isLongClickable(): Promise<boolean>;

  /**
   * 获取控件对象可滑动属性。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } - Promise对象，返回控件对象是否可滑动。true：可滑动。false：不可滑动。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  isScrollable(): Promise<boolean>;

  /**
   * 获取控件使能状态。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } - Promise对象，返回控件使能状态。true：使能。false：未使能。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  isEnabled(): Promise<boolean>;

  /**
   * 判断控件对象获焦状态。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } - Promise对象，返回控件对象获焦状态。true：获焦。false：未获焦。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  isFocused(): Promise<boolean>;

  /**
   * 获取控件对象被选中状态。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } - Promise对象，返回控件对象被选中状态。true：被选中。false：未被选中。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  isSelected(): Promise<boolean>;

  /**
   * 获取控件对象被勾选状态。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } - Promise对象，返回控件对象被勾选状态。true：被勾选。false：未被勾选。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  isChecked(): Promise<boolean>;

  /**
   * 获取控件对象能否被勾选属性。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } - Promise对象，返回控件对象能否可被勾选属性。true：可被勾选。false：不可被勾选。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  isCheckable(): Promise<boolean>;

  /**
   * 清空组件内原有文本并输入指定文本内容，仅针对可编辑的文本组件生效。使用Promise异步回调。
   *
   * @param { string } text - 输入的文本信息，当前支持英文、中文和特殊字符。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  inputText(text: string): Promise<void>;

  /**
   * 向控件中输入文本，并支持指定文本输入方式，仅针对可编辑的文本组件生效。使用Promise异步回调。
   *
   * @param { string } text - 输入的文本信息，当前支持英文、中文和特殊字符。
   * @param { InputTextMode } mode - 输入文本的方式，取值请参考[InputTextMode]{@link InputTextMode}。
   *     
   *      **说明：** InputTextMode.addition取值为true时，在控件已有文本末尾后追加指定文本。取值为false时，指定文本将覆盖控件已有文本。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited device
   *     capabilities.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  inputText(text: string, mode: InputTextMode): Promise<void>;

  /**
   * 清除控件的文本信息，仅针对可编辑的文本组件生效。使用Promise异步回调。
   *
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  clearText(): Promise<void>;

  /**
   * 在控件上滑动到顶部（适用支持滑动的控件）。使用Promise异步回调。
   *
   * @param { int } [speed] - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值600。为负数时抛出401错误码。
   *     [since 11]
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter
   *     verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  scrollToTop(speed?: int): Promise<void>;

  /**
   * 在控件上滑动到底部（适用支持滑动的控件）。使用Promise异步回调。
   *
   * @param { int } [speed] - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值600。为负数时抛出401错误码。
   *     [since 11]
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 2. Parameter
   *     verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  scrollToBottom(speed?: int): Promise<void>;

  /**
   * 获取控件对象的边框信息。使用Promise异步回调。
   *
   * @returns { Promise<Rect> } - Promise对象，返回控件对象的边框信息。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  getBounds(): Promise<Rect>;

  /**
   * 在控件上滑动查找目标控件（适用支持滑动的控件）。使用Promise异步回调。
   *
   * @param { On } on - 目标控件的属性要求。
   * @returns { Promise<Component> } - Promise对象，返回目标控件对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @test
   */
  scrollSearch(on: On): Promise<Component>;

  /**
   * 获取控件对象所占区域的中心点信息。使用Promise异步回调。
   *
   * @returns { Promise<Point> } - Promise对象，返回控件对象所占区域的中心点信息。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  getBoundsCenter(): Promise<Point>;

  /**
   * 将控件拖拽至目标控件处。使用Promise异步回调。
   *
   * @param { Component } target - 目标控件。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  dragTo(target: Component): Promise<void>;

  /**
   * 将控件按指定的比例进行捏合放大。使用Promise异步回调。
   *
   * @param { double } scale - 指定放大的比例。取值范围大于1。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  pinchOut(scale: double): Promise<void>;
  /**
   * 将控件按指定的比例进行捏合缩小。使用Promise异步回调。
   *
   * @param { double } scale - 指定缩小的比例。取值范围为0~1。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  pinchIn(scale: double): Promise<void>;

  /**
   * 获取控件对象的描述信息。使用Promise异步回调。
   *
   * @returns { Promise<string> } - Promise对象，返回控件的描述信息。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  getDescription(): Promise<string>;
  /**
   * 获取控件对象的提示文本。使用Promise异步回调。
   *
   * @returns { Promise<string> } - Promise对象，返回控件的提示文本。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  getHint(): Promise<string>;
  /**
   * 在控件上滑动查找目标控件（适用支持滑动的控件），支持指定滑动方向和滑动起止点与组件边框的偏移量。使用Promise异步回调。
   *
   * @param { On } on - 目标控件的属性要求。
   * @param { boolean } [vertical] - 默认为true，表示查找方向是纵向。false表示查找方向为横向。
   * @param { number } [offset] - 滑动起点/终点到组件边框的偏移，默认80，单位：px，取值范围：大于等于0的整数。
   * @returns { Promise<Component> } - Promise对象，返回目标控件对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @test
   */
  scrollSearch(on: On, vertical?: boolean, offset?: number): Promise<Component>;
  /**
   * Scroll on this {@link Component}to find matched {@link Component},applicable to scrollable one.
   *
   * @param { On } on - the attribute requirements of the target {@link Component}.
   * @param { boolean } [vertical] - Whether the swipe direction is vertical, default is true.
   * @param { int } [offset] - Offset from the swipe start/end point to the component border, default is 80.
   * @returns { Promise<Component | null> } the found result,or null if not found.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  scrollSearch(on: On, vertical?: boolean, offset?: int): Promise<Component | null>;
  /**
   * 获取控件对象的文本信息。使用Promise异步回调。如果控件的无障碍属性
   * [accessibilityLevel](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitylevel)
   * 设置为'no'或'no-hide-descendants'，可以使用本接口获取控件的文本信息，无法使用[Component.getText()]{@link Component#getText}获取控件的文本信息。
   *
   * @returns { Promise<string> } - Promise对象，返回控件的文本信息。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  getOriginalText(): Promise<string>;
 }

/**
 * Driver类为uitest测试框架的总入口，提供控件匹配/查找，按键注入，坐标点击/滑动，截图等能力。
 * 该类提供的方法除Driver.create()和Driver.createUIEventObserver()以外的所有方法都使用Promise方式作为异步方法，需使用await方式调用。
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 * @test
 */
declare class Driver {
  /**
   * 静态方法，构造一个Driver对象，并返回该对象。
   *
   * @returns { Driver } - 返回构造的Driver对象。
   * @throws { BusinessError } 17000001 - Initialization failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  static create(): Driver;

  /**
   * 在给定的时间内延时。使用Promise异步回调。
   *
   * @param { int } duration - 给定的时间，单位：ms，取值范围：大于等于0的整数。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  delayMs(duration: int): Promise<void>;

  /**
   * 根据给出的目标控件属性要求查找目标控件。使用Promise异步回调。
   *
   * @param { On } on - 目标控件的属性要求。
   * @returns { Promise<Component> } - Promise对象，返回控件对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @test
   */
  findComponent(on: On): Promise<Component>;
  /**
   * Find the first matched {@link Component} on current UI.
   *
   * @param { On } on - the attribute requirements of the target {@link Component}.
   * @returns { Promise<Component | null> } the first matched {@link Component} or undefined.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  findComponent(on: On): Promise<Component | null>;
  /**
   * 通过指定窗口的属性来查找目标窗口。使用Promise异步回调。
   *
   * @param { WindowFilter } filter - 目标窗口的属性。
   * @returns { Promise<UiWindow> } - Promise对象，返回目标窗口对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @test
   */
  findWindow(filter: WindowFilter): Promise<UiWindow>;
  /**
   * Find the first matched {@link UiWindow} window.
   *
   * @param { WindowFilter } filter - the filter condition of the target {@link UiWindow}.
   * @returns { Promise<UiWindow | null> } the first matched {@link UiWindow} or undefined.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  findWindow(filter: WindowFilter): Promise<UiWindow | null>;
  /**
   * 在用户给定的时间内，持续查找满足控件属性要求的目标控件。使用Promise异步回调。
   *
   * @param { On } on - 目标控件的属性要求。
   * @param { number } time - 查找目标控件的持续时间。单位ms，取值范围：大于等于0的整数。
   * @returns { Promise<Component> } Promise对象，返回控件对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @test
   */
  waitForComponent(on: On, time: number): Promise<Component>;
  /**
   * Find the first matched {@link Component} on current UI during the time given.
   *
   * @param { On } on - the attribute requirements of the target {@link Component}.
   * @param { int } time - duration of finding in milliseconds, not less than 0.
   * @returns { Promise<Component | null> } the first matched {@link Component} or undefined.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  waitForComponent(on: On, time: int): Promise<Component | null>;
  /**
   * 根据给出的目标控件属性要求查找出所有匹配控件，以列表保存。使用Promise异步回调。
   *
   * @param { On } on - 目标控件的属性要求。
   * @returns { Promise<Array<Component>> } - Promise对象，返回控件对象的列表。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @test
   */
  findComponents(on: On): Promise<Array<Component>>;
  /**
   * Find all the matched {@link Component}s on current UI.
   *
   * @param { On } on - the attribute requirements of the target {@link Component}.
   * @returns { Promise<Array<Component> | null> } the matched {@link Component}s list.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  findComponents(on: On): Promise<Array<Component> | null>;
  /**
   * 断言API，用于断言当前界面是否存在满足给出的目标属性的控件。使用Promise异步回调。
   *
   * @param { On } on - 目标控件的属性要求。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000003 - Assertion failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  assertComponentExist(on: On): Promise<void>;

  /**
   * 进行点击BACK键的操作。使用Promise异步回调。
   *
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  pressBack(): Promise<void>;

  /**
   * 对指定屏幕进行点击BACK键的操作。使用Promise异步回调。
   *
   * @param { int } displayId - 指定的屏幕ID，取值范围：大于等于0的整数。
   *      **说明：** 传入displayId不存在时，将抛出17000007异常。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  pressBack(displayId: int): Promise<void>;

  /**
   * 传入key值实现模拟点击对应按键的效果。使用Promise异步回调。
   *
   * @param { int } keyCode - 指定的key值，取值范围：大于等于0的整数。取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  triggerKey(keyCode: int): Promise<void>;

  /**
   * 在指定屏幕，传入key值实现模拟点击对应按键的效果。使用Promise异步回调。
   *
   * @param { int } keyCode - 指定的key值，取值范围：大于等于0的整数。取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}。
   * @param { int } displayId - 指定的屏幕ID，取值范围：大于等于0的整数。
   *      **说明：** 传入displayId不存在时，将抛出17000007异常。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  triggerKey(keyCode: int, displayId: int): Promise<void>;

  /**
   * 通过给定的key值，找到对应组合键并点击。使用Promise异步回调。例如，Key值为(2072, 2019)时，找到key值对应的组合键并点击，如Ctrl+c。
   *
   * @param { number } key0 - 指定的第一个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}。
   * @param { number } key1 - 指定的第二个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}。
   * @param { number } [key2] - 指定的第三个key值，取值范围：大于等于0的整数。取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}，
   *     默认值为0。 [since 11]
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @test
   */
  triggerCombineKeys(key0: number, key1: number, key2?: number): Promise<void>;

  /**
   * 通过给定的key值，找到对应组合键，并在指定屏幕下进行点击。使用Promise异步回调。例如，Key值为(2072, 2019)时，找到key值对应的组合键并点击，如Ctrl+c。
   *
   * @param { int } key0 - 指定的第一个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}。
   * @param { int } key1 - 指定的第二个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}。
   * @param { int } [key2] - 指定的第三个key值，取值范围：大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}，默认值
   *     为0。
   * @param { int } [displayId] - 指定的屏幕ID，取值范围：大于等于0的整数，默认值为设备默认屏幕ID。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  triggerCombineKeys(key0: int, key1: int, key2?: int, displayId?: int): Promise<void>;

  /**
   * 在目标坐标点单击。使用Promise异步回调。
   *
   * @param { int } x - 以number的形式传入目标点的横坐标信息，取值范围：大于等于0的整数。
   * @param { int } y - 以number的形式传入目标点的纵坐标信息，取值范围：大于等于0的整数。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  click(x: int, y: int): Promise<void>;

  /**
   * 在目标坐标点双击。使用Promise异步回调。
   *
   * @param { int } x - 以number的形式传入目标点的横坐标信息，取值范围：大于等于0的整数。
   * @param { int } y - 以number的形式传入目标点的纵坐标信息，取值范围：大于等于0的整数。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  doubleClick(x: int, y: int): Promise<void>;

  /**
   * 在目标坐标点长按。使用Promise异步回调。
   *
   * @param { int } x - 以number的形式传入目标点的横坐标信息，取值范围：大于等于0的整数。
   * @param { int } y - 以number的形式传入目标点的纵坐标信息，取值范围：大于等于0的整数。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  longClick(x: int, y: int): Promise<void>;

  /**
   * 从起始坐标点滑向目的坐标点。使用Promise异步回调。
   *
   * @param { int } startx - 以number的形式传入起始点的横坐标信息，取值范围：大于等于0的整数。
   * @param { int } starty - 以number的形式传入起始点的纵坐标信息，取值范围：大于等于0的整数。
   * @param { int } endx - 以number的形式传入目的点的横坐标信息，取值范围：大于等于0的整数。
   * @param { int } endy - 以number的形式传入目的点的纵坐标信息，取值范围：大于等于0的整数。
   * @param { int } [speed] - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值600。为负数时抛出401错误码。
   *     [since 11]
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  swipe(startx: int, starty: int, endx: int, endy: int, speed?: int): Promise<void>;

  /**
   * 从起始坐标点拖拽至目的坐标点。使用Promise异步回调。
   *
   * @param { int } startx - 以number的形式传入起始点的横坐标信息，取值范围：大于等于0的整数。
   * @param { int } starty - 以number的形式传入起始点的纵坐标信息，取值范围：大于等于0的整数。
   * @param { int } endx - 以number的形式传入目的点的横坐标信息，取值范围：大于等于0的整数。
   * @param { int } endy - 以number的形式传入目的点的纵坐标信息，取值范围：大于等于0的整数。
   * @param { int } [speed] - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值600。为负数时抛出401错误码。
   *     [since 11]
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  drag(startx: int, starty: int, endx: int, endy: int, speed?: int): Promise<void>;

  /**
   * 在目标坐标点进行单击。使用Promise异步回调。
   *
   * @param { Point } point - 以Point对象的形式传入目标点信息。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  clickAt(point: Point): Promise<void>;
  /**
   * 点击屏幕上的指定位置，可选择触摸选项。
   *
   * @param { Point } point - 手指接触屏幕的坐标点。
   * @param { TouchOptions } [options] - 单击操作的选项。
   *     只有''属性适用于此方法。
   *     设置其他属性将导致BusinessError 17000007。
   *     <br>默认值：参考TouchOptions的默认值。
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  clickAtWithOptions(point: Point, options?: TouchOptions): Promise<void>;
  /**
   * 对目标坐标进行双击。使用Promise异步回调。
   *
   * @param { Point } point - 以Point对象的形式传入目标点信息。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  doubleClickAt(point: Point): Promise<void>;

  /**
   * 长按目标坐标点，支持指定长按时长。使用Promise异步回调。
   *
   * @param { Point } point - 以Point对象的形式传入目标点信息。
   * @param { int } [duration] - 长按持续的时间，取值范围为大于等于1500的整数，默认值为1500，单位：ms。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  longClickAt(point: Point, duration?: int): Promise<void>;
  /**
   * 长按屏幕上的指定位置，可选择触摸设置。
   *
   * @param { Point } point - 手指接触屏幕的坐标点。
   * @param { TouchOptions } [options] - 用于长单击操作的选项。
   *     只有“持续时间”和“压力”属性适用于此方法。
   *     设置其他属性将导致BusinessError 17000007。
   *     <br>默认值：参考TouchOptions的默认值。
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  longClickAtWithOptions(point: Point, options?: TouchOptions): Promise<void>;
  /**
   * 从起始坐标点滑向目标坐标点。使用Promise异步回调。
   *
   * @param { Point } from - 以Point对象的形式传入起始点的坐标信息和所属屏幕ID。
   * @param { Point } to - 以Point对象的形式传入终止点的坐标信息和所属屏幕ID。
   *     
   *      **说明：** 应与起始点属于同一个屏幕，否则将抛出17000007异常。
   * @param { int } [speed] - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值600。为负数时抛出17000007错
   *     误码。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  swipeBetween(from: Point, to: Point, speed?: int): Promise<void>;
  /**
   * 使用可选的触摸选项在指定点之间滑动屏幕。
   *
   * @param { Point } from - 手指接触屏幕的坐标点。
   * @param { Point } to - 手指离开屏幕的坐标点。
   * @param { TouchOptions } [options] - 滑动操作的选项。
   *     只有“速度”和“压力”属性适用于此方法。
   *     设置其他属性将导致BusinessError 17000007。
   *     <br>默认值：参考TouchOptions的默认值。
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  swipeBetweenWithOptions(from: Point, to: Point, options?: TouchOptions): Promise<void>;
  /**
   * 从起始坐标点拖拽至目标坐标点，支持指定拖拽速度和拖拽前长按时间。使用Promise异步回调。
   *
   * @param { Point } from - 以Point对象的形式传入起始点的坐标信息和所属屏幕ID。
   * @param { Point } to - 以Point对象的形式传入终止点的坐标信息和所属屏幕ID。
   *     
   *      **说明：** 应与起始点属于同一个屏幕，否则将抛出17000007异常。
   * @param { int } [speed] - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值600。为负数时抛出17000007错
   *     误码。
   * @param { int } [duration] - 拖拽前长按持续的时间，取值范围为大于等于1500的整数，默认值为1500，单位：ms。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  dragBetween(from: Point, to: Point, speed?: int, duration?: int): Promise<void>;
  /**
   * 在屏幕上拖拽指定的点之间，具有可选设置。
   *
   * @param { Point } from - 手指接触屏幕的坐标点。
   * @param { Point } to - 手指离开屏幕的坐标点。
   * @param { TouchOptions } [options] - 拖动操作的选项。
   *     只有“压力”、“速度”和“持续时间”属性适用于此方法。
   *     设置其他属性将导致BusinessError 17000007。
   *     <br>默认值：参考TouchOptions的默认值。
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  dragBetweenWithOptions(from: Point, to: Point, options?: TouchOptions): Promise<void>;
  /**
   * 捕获当前屏幕，并保存为PNG格式的图片至给出的保存路径中。使用Promise异步回调。适用于支持截屏的场景。
   *
   * @param { string } savePath - 文件保存路径。路径需为当前应用的[沙箱路径](docroot://file-management/app-sandbox-directory.md)。
   * @returns { Promise<boolean> } - Promise对象，返回截图操作是否成功完成。true：完成，false：未完成。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  screenCap(savePath: string): Promise<boolean>;

  /**
   * 捕获指定屏幕，并保存为PNG格式的图片至给出的保存路径中。使用Promise异步回调。适用于支持截屏的场景。
   *
   * @param { string } savePath - 文件保存路径。路径需为当前应用的[沙箱路径](docroot://file-management/app-sandbox-directory.md)。
   * @param { int } displayId - 指定设备屏幕ID。取值范围：大于等于0的整数。
   *      **说明：** 传入displayId不存在时，将抛出17000007异常。
   * @returns { Promise<boolean> } Promise对象，返回截图操作是否成功完成。true：完成。false：未完成。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  screenCap(savePath: string, displayId: int): Promise<boolean>;

  /**
   * Get the current layout information and save as file with json format.
   *
   * @param { string } savePath - the path where to store the json, must be in the application sandbox directory.
   *     The path must be the [sandbox path](docroot://file-management/app-sandbox-directory.md) of the current
   *     application.
   * @param { int } [displayId] - the Id of the specified display, default is the displayId of the main screen.
   * @returns { Promise<boolean> } true if dump layout and file-storing are completed successfully,false otherwise.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  dumpLayout(savePath: string, displayId?: int): Promise<boolean>;
  /**
   * 将当前场景的显示方向设置为指定的显示方向。使用Promise异步回调。适用于可旋转的应用场景。
   *
   * @param { DisplayRotation } rotation - 设备的显示方向。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *      2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  setDisplayRotation(rotation: DisplayRotation): Promise<void>;

  /**
   * 获取当前设备的屏幕显示方向。使用Promise异步回调。
   *
   * @returns { Promise<DisplayRotation> } - Promise对象，返回当前设备的显示方向。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  getDisplayRotation(): Promise<DisplayRotation>;

  /**
   * 获取当前设备指定屏幕的显示方向。使用Promise异步回调。
   *
   * @param { int } displayId - 指定设备屏幕ID。取值范围：大于等于0的整数。 
   *     
   *      **说明：** 传入displayId不存在时，将抛出17000007异常。
   * @returns { Promise<DisplayRotation> } - Promise对象，返回指定屏幕的显示方向。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  getDisplayRotation(displayId: int): Promise<DisplayRotation>;

  /**
   * 启用/禁用设备旋转屏幕的功能。使用Promise异步回调。
   *
   * @param { boolean } enabled - 能否旋转屏幕的标识。true：可以旋转。false：不可以旋转。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  setDisplayRotationEnabled(enabled: boolean): Promise<void>;

  /**
   * 获取当前设备的屏幕大小。使用Promise异步回调。
   *
   * @returns { Promise<Point> } - Promise对象，返回Point对象，当前设备屏幕的大小为Point.x * Point.y。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  getDisplaySize(): Promise<Point>;

  /**
      * 获取当前设备指定屏幕的大小。使用Promise异步回调。
      *
   * @param { int } displayId - 指定设备屏幕ID。取值范围：大于等于0的整数。
      *      **说明：** 传入displayId不存在时，将抛出17000007异常。
   * @returns { Promise<Point> } Promise对象，返回Point对象，当前设备指定屏幕的大小为Point.x * Point.y。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  getDisplaySize(displayId: int): Promise<Point>;

  /**
   * 获取当前设备屏幕的分辨率。使用Promise异步回调。
   *
   * @returns { Promise<Point> } Promise对象，返回Point对象，当前设备屏幕的分辨率为Point.x*Point.y。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  getDisplayDensity(): Promise<Point>;

  /**
   * 获取当前设备指定屏幕的分辨率。使用Promise异步回调。
   *
   * @param { int } displayId - 指定设备屏幕ID。取值范围：大于等于0的整数。 
   *     
   *      **说明：** 传入displayId不存在时，将抛出17000007异常。
   * @returns { Promise<Point> } Promise对象，返回Point对象，当前设备指定屏幕的分辨率为Point.x*Point.y。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  getDisplayDensity(displayId: int): Promise<Point>;

  /**
   * 唤醒当前设备即设备亮屏。使用Promise异步回调。
   *
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  wakeUpDisplay(): Promise<void>;

  /**
   * 设备注入返回桌面操作。使用Promise异步回调。
   *
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  pressHome(): Promise<void>;

  /**
   * 设备指定屏幕上注入返回桌面操作。使用Promise异步回调。
   *
   * @param { int } displayId - 指定设备屏幕ID。取值范围：大于等于0的整数。 
   *     
   *      **说明：** 传入displayId不存在时，将抛出17000007异常。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  pressHome(displayId: int): Promise<void>;

  /**
   * 判断当前界面的所有控件是否已经空闲。使用Promise异步回调。
   *
   * @param { int } idleTime - 空闲时间的阈值。在这个时间段控件不发生变化，视为该控件空闲，单位：毫秒，取值范围：大于等于0的整数。
   * @param { int } timeout - 等待空闲的最大时间，单位：毫秒，取值范围：大于等于0的整数。
   * @returns { Promise<boolean> } - Promise对象，返回当前界面的所有控件是否已经空闲。true：已经空闲，false：不空闲。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  waitForIdle(idleTime: int, timeout: int): Promise<boolean>;

  /**
   * 模拟手指滑动后脱离屏幕的快速滑动操作。使用Promise异步回调。
   *
   * @param { Point } from - 手指接触屏幕的起始点坐标。
   * @param { Point } to - 手指离开屏幕时的坐标点。
   * @param { int } stepLen - 间隔距离，取值大于等于0的整数，单位：px。
   * @param { int } speed - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数时设为默认值600。为负数时抛出401错误码。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  fling(from: Point, to: Point, stepLen: int, speed: int): Promise<void>;

  /**
   * 向设备注入多指操作。使用Promise异步回调。
   *
   * @param { PointerMatrix } pointers - 滑动轨迹，包括操作手指个数和滑动坐标序列。
   * @param { int } [speed] - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值600。为负数时抛出401错误码。
   *     [since 11]
   * @returns { Promise<boolean> } - Promise对象，返回操作是否成功完成。true：完成，false：未完成。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  injectMultiPointerAction(pointers: PointerMatrix, speed?: int): Promise<boolean>;

  /**
   * 指定方向和滑动速率，模拟手指滑动后脱离屏幕的快速滑动操作。使用Promise异步回调。
   *
   * @param { UiDirection } direction - 进行抛滑的方向。
   * @param { int } speed - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数时设为默认值600。为负数时抛出401错误码。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  fling(direction: UiDirection, speed: int): Promise<void>;

  /**
   * 指定方向、滑动速率和操作屏幕，模拟手指滑动后脱离屏幕的快速滑动操作。使用Promise异步回调。
   *
   * @param { UiDirection } direction - 进行抛滑的方向。
   * @param { int } speed - 滑动速率，取值范围为200-40000，默认值为600，单位：px/s。为不在范围内的非负数时设为默认值600。为负数时抛出401错误码。
   * @param { int } displayId - 指定设备屏幕ID。取值范围：大于等于0的整数。
   *      **说明：** 传入displayId不存在时，将抛出17000007异常。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  fling(direction: UiDirection, speed: int, displayId: int): Promise<void>;

  /**
   * 在指定坐标点注入鼠标点击动作，支持同时按下对应键盘组合键。使用Promise异步回调。例如，Key值为2072时，按下Ctrl并进行鼠标点击动作。
   *
   * @param { Point } p - 鼠标点击的坐标。
   * @param { MouseButton } btnId - 按下的鼠标按钮。
   * @param { int } [key1] - 指定的第一个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}，默认值为0。
   *     [since 11]
   * @param { int } [key2] - 指定的第二个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}，默认值为0。
   *     [since 11]
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  mouseClick(p: Point, btnId: MouseButton, key1?: int, key2?: int): Promise<void>;

  /**
   * 将鼠标光标移到目标点。使用Promise异步回调。
   *
   * @param { Point } p - 目标点的坐标。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  mouseMoveTo(p: Point): Promise<void>;

  /**
   * 在指定坐标点注入鼠标滚轮滑动动作，支持同时按下对应键盘组合键。使用Promise异步回调。例如，Key值为2072时，按下Ctrl并进行鼠标滚轮滑动动作。
   *
   * @param { Point } p - 鼠标点击的坐标。
   * @param { boolean } down - 滚轮滑动方向是否向下。true表示向下滑动。false表示向上滚动。
   * @param { number } d - 鼠标滚轮滚动的格数，取值大于等于0的整数，每格对应目标点位移120px。
   * @param { number } [key1] - 指定的第一个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}，默认值
   *     为0。 [since 11]
   * @param { number } [key2] - 指定的第二个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}，默认值
   *     为0。 [since 11]
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @test
   */
  mouseScroll(p: Point, down: boolean, d: number, key1?: number, key2?: number): Promise<void>;

  /**
   * 在指定坐标点注入鼠标滚轮滑动动作，支持同时按下对应键盘组合键并且指定滑动速度。使用Promise异步回调。
   *
   * @param { Point } p - 鼠标点击的坐标。
   * @param { boolean } down - 滚轮滑动方向是否向下。true表示向下滑动。false表示向上滚动。
   * @param { int } d - 鼠标滚轮滚动的格数，取值大于等于0的整数，每格对应目标点位移120px。
   * @param { int } [key1] - 指定的第一个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}，默认值为0。
   * @param { int } [key2] - 指定的第二个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}，默认值为0。
   * @param { int } [speed] - 鼠标滚轮滚动的速度，范围：1-500的整数，单位：格/秒。为不在范围内的非负数或为null/undefined时设为默认值20。为负数时抛出401错误码。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  mouseScroll(p: Point, down: boolean, d: int, key1?: int, key2?: int, speed?: int): Promise<void>;

  /**
   * 捕获当前屏幕的指定区域，并保存为PNG格式的图片至给出的保存路径中。使用Promise异步回调。适用于支持截屏的场景。
   *
   * @param { string } savePath - 文件保存路径。路径需为当前应用的[沙箱路径](docroot://file-management/app-sandbox-directory.md)。
   * @param { Rect } [rect] - 截图区域，默认为全屏。 [since 11]
   * @returns { Promise<boolean> } - Promise对象，返回截图操作是否成功完成。true：成功完成，false：未成功完成。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 26.0.0]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  screenCapture(savePath: string, rect?: Rect): Promise<boolean>;

  /**
   * 创建一个UI事件监听器。
   *
   * @returns { UIEventObserver } - 返回找到的目标窗口对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   * @test
   */
  createUIEventObserver(): UIEventObserver;

  /**
   * 在指定坐标点注入鼠标双击动作，支持同时按下对应键盘组合键。使用Promise异步回调。例如，Key值为2072时，按下Ctrl并进行鼠标双击动作。
   *
   * @param { Point } p - 鼠标双击的坐标。
   * @param { MouseButton } btnId - 按下的鼠标按钮。
   * @param { int } [key1] - 指定的第一个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}，默认值0。
   * @param { int } [key2] - 指定的第二个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}，默认值0。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  mouseDoubleClick(p: Point, btnId: MouseButton, key1?: int, key2?: int): Promise<void>;

  /**
   * 在指定坐标点注入鼠标长按动作，支持同时按下对应键盘组合键。使用Promise异步回调。例如，Key值为2072时，按下Ctrl并进行鼠标长按动作。
   *
   * @param { Point } p - 鼠标长按的坐标。
   * @param { MouseButton } btnId - 按下的鼠标按钮。
   * @param { number } [key1] - 指定的第一个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}，默认值
   *     为0。
   * @param { number } [key2] - 指定的第二个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}，默认值
   *     为0。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @test
   */
  mouseLongClick(p: Point, btnId: MouseButton, key1?: number, key2?: number): Promise<void>;

  /**
   * 在指定坐标点注入鼠标长按动作，支持同时按下对应键盘组合键，支持指定长按时长。使用Promise异步回调。例如，Key值为2072时，按下Ctrl并进行鼠标长按动作。
   *
   * @param { Point } p - 鼠标长按的坐标。
   * @param { MouseButton } btnId - 按下的鼠标按钮。
   * @param { int } [key1] - 指定的第一个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}，默认值为0。
   * @param { int } [key2] - 指定的第二个key值，取值大于等于0的整数，取值范围：[KeyCode键码值]{@link @ohos.multimodalInput.keyCode:KeyCode}，默认值为0。
   * @param { int } [duration] - 长按持续的时间，取值范围为大于等于1500的整数，默认值为1500，单位：ms。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  mouseLongClick(p: Point, btnId: MouseButton, key1?: int, key2?: int, duration?: int): Promise<void>;

  /**
   * 鼠标从起始坐标点滑向终点坐标点。使用Promise异步回调。
   *
   * @param { Point } from - 起始点坐标。
   * @param { Point } to - 终点坐标。
   * @param { int } [speed] - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值600。为负数时抛出401错误码。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  mouseMoveWithTrack(from: Point, to: Point, speed?: int): Promise<void>;

  /**
   * 鼠标按住鼠标左键从起始坐标点拖拽至终点坐标点。使用Promise异步回调。
   *
   * @param { Point } from - 起始点坐标。
   * @param { Point } to - 终点坐标。
   * @param { number } [speed] - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值600。为负数时抛出401错误码
   *     。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @test
   */
  mouseDrag(from: Point, to: Point, speed?: number): Promise<void>;

  /**
   * 鼠标按住鼠标左键从起始坐标点拖拽至终点坐标点，支持指定拖拽速度和拖拽前长按时间。使用Promise异步回调。
   *
   * @param { Point } from - 起始点坐标。
   * @param { Point } to - 终点坐标。
   * @param { int } [speed] - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值600。为负数时抛出401错误码。
   * @param { int } [duration] - 拖拽前长按持续的时间，取值范围为大于等于1500的整数，默认值为1500，单位：ms。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  mouseDrag(from: Point, to: Point, speed?: int, duration?: int): Promise<void>;

  /**
   * 按住鼠标左键并在屏幕上的指定点之间拖动，
   * 具有可选的触摸和按键设置。
   *
   * @param { Point } from - 起点。
   * @param { Point } to - 终点。
   * @param { TouchOptions } [touchOptions] - 速度和持续时间设置的触摸选项。
   *     在此方法中，只有“速度”和“持续时间”属性有效。
   *     设置其他属性会导致BusinessError 17000007。
   *     <br>默认值：参考TouchOptions的默认值。
   * @param { KeyOptions } [keyOptions] - 拖动期间要按的键代码的键选项。
   *     <br>默认值：参考keyOptions的默认值。
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  mouseDragWithOptions(from: Point, to: Point, touchOptions?: TouchOptions, keyOptions?: KeyOptions): Promise<void>;

  /**
   * 在指定坐标点输入文本，不清空组件内原有文本，直接在坐标处追加输入。使用Promise异步回调。
   *
   * @param { Point } p - 输入文本的坐标点。
   * @param { string } text - 输入的文本信息，当前支持英文、中文和特殊字符。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  inputText(p: Point, text: string): Promise<void>;

  /**
   * 在指定坐标点输入文本，支持指定文本输入方式。使用Promise异步回调。
   *
   * @param { Point } p - 输入文本的坐标点。
   * @param { string } text - 输入的文本信息，当前支持英文、中文和特殊字符。
   * @param { InputTextMode } mode - 输入文本的方式，取值请参考[InputTextMode]{@link InputTextMode}。 
   *     
   *      **说明：** 
   *     
   *      InputTextMode.addition取值为true时，将光标移动至文本末尾后输入指定文本。取值为false时，将在坐标点位置输入指定文本。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 Capability not supported. function can not work correctly due to limited device
   *     capabilities.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  inputText(p: Point, text: string, mode: InputTextMode): Promise<void>;

  /**
   * 模拟触摸板多指滑动手势。使用Promise异步回调。
   *
   * @param { int } fingers - 触摸板多指滑动的手指数。取值为3或者4。
   * @param { UiDirection } direction - 触摸板多指滑动的方向。
   * @param { TouchPadSwipeOptions } [options] - 触摸板多指滑动手势附加选项，默认取TouchPadSwipeOptions中各属性的默认值。
   * @returns { Promise<void> } - Promise对象，返回无结果的Promise对象。
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000005 This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  touchPadMultiFingerSwipe(fingers: int, direction: UiDirection, options?: TouchPadSwipeOptions): Promise<void>;

  /**
   * 模拟手写笔点击操作。使用Promise异步回调。
   *
   * @param { Point } point - 点击的坐标点。
   * @returns { Promise<void> } - Promise对象，返回无结果的Promise对象。
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  penClick(point: Point): Promise<void>;

  /**
   * 模拟手写笔长按操作。使用Promise异步回调。
   *
   * @param { Point } point - 长按的坐标点。
   * @param { double } [pressure] - 手写笔滑动操作的压力，默认为1.0，取值范围为0.0到1.0。
   * @returns { Promise<void> } - Promise对象，返回无结果的Promise对象。
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  penLongClick(point: Point, pressure?: double): Promise<void>;

  /**
   * 模拟手写笔双击操作。使用Promise异步回调。
   *
   * @param { Point } point - 双击的坐标点。
   * @returns { Promise<void> } - Promise对象，返回无结果的Promise对象。
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  penDoubleClick(point: Point): Promise<void>;

  /**
   * 模拟手写笔的滑动操作。使用Promise异步回调。
   *
   * @param { Point } startPoint - 起始位置的坐标点。
   * @param { Point } endPoint - 结束位置的坐标点。
   * @param { int } [speed] - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值600。为负数时抛出401错误码。
   * @param { double } [pressure] - 手写笔滑动操作的压力，默认为1.0，取值范围为0.0到1.0。
   * @returns { Promise<void> } - Promise对象，返回无结果的Promise对象。
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  penSwipe(startPoint: Point, endPoint: Point, speed?: int, pressure?: double): Promise<void>;

  /**
   * 模拟手写笔多点连续注入操作。使用Promise异步回调。
   *
   * @param { PointerMatrix } pointers - 滑动轨迹，包括操作手指个数和滑动坐标序列。
   *     
   *     **说明**：当前仅支持单指操作，PointerMatrix中的操作手指个数fingers必须设置为1。
   * @param { int } [speed] - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值600。为负数时抛出401错误码。
   * @param { double } [pressure] - 手写笔多点连续注入的压力，默认为1.0，取值范围为0.0到1.0。
   * @returns { Promise<void> } - Promise对象，返回无结果的Promise对象。
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @test
   */
  injectPenPointerAction(pointers: PointerMatrix, speed?: int, pressure?: double): Promise<void>;

  /**
   * Trigger pen key operation.
   *
   * Supported combinations:
   *
   * - HANDWRITING mode: HANDWRITING key with CLICK or DOUBLE_CLICK operation.
   * - AIR_MOUSE mode: AIR_MOUSE key with CLICK or DOUBLE_CLICK operation (requires point in options),
   * HANDWRITING key with CLICK or DOUBLE_CLICK operation, SMART key with CLICK operation.
   * Other combinations will result in a BusinessError 17000007.
   *
   * @param { PenKey } key - the pen key to operate.
   * @param { PenMode } mode - the pen mode.
   * @param { PenKeyOperation } operation - the operation type.
   * @param { PenKeyOperationOptions } [options] - the operation options, including optional coordinate point.
   *     Default value: Refer to the default value of PenKeyOperationOption.
   *     <br>默认值：参考PenKeyOperationOption的默认值。
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @throws { BusinessError } 17000007 - Parameter verification failed. Unsupported key, mode, and operation combination.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   * @test
   */
  triggerPenKey(key: PenKey, mode: PenMode, operation: PenKeyOperation, options?: PenKeyOperationOptions): Promise<void>;
  /**
   * 注入手表表冠旋转事件，可指定旋转速度。使用Promise异步回调。
   *
   * @param { int } d - 手表表冠旋转的格数，正值表示顺时针旋转，负值表示逆时针旋转，取值需为整数。
   * @param { int } [speed] - 手表表冠旋转的格数，正值表示顺时针旋转，负值表示逆时针旋转，取值需为整数。
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  crownRotate(d: int, speed?: int): Promise<void>;

  /**
   * 在坐标点长按，并查找目标控件是否存在。使用Promise异步回调。
   *
   * @param { On } on - 目标控件的属性要求。
   * @param { Point } point - 长按的坐标点。
   * @param { int } [duration] - 长按持续的时间，取值范围为大于等于1500的整数，默认值为1500，单位：ms。
   * @returns { Promise<boolean> } - Promise对象。返回长按操作期间目标控件是否存在。true：存在。false：不存在。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  isComponentPresentWhenLongClick(on: On, point: Point, duration?: int): Promise<boolean>;

  /**
   * 从起始点拖拽至终止点，并查找目标控件是否存在。使用Promise异步回调。
   *
   * @param { On } on - 目标控件的属性要求。
   * @param { Point } from - 以Point对象的形式传入起始点的坐标信息和所属屏幕ID。
   * @param { Point } to - 以Point对象的形式传入终止点的坐标信息和所属屏幕ID。
   *     
   *      **说明：** 应与起始点属于同一个屏幕，否则将抛出17000007异常。
   * @param { int } [speed] - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值600。为负数时抛出17000007错
   *     误码。
   * @param { int } [duration] - 拖拽前长按持续的时间，取值范围为大于等于1500的整数，默认值为1500，单位：ms。
   * @returns { Promise<boolean> } - Promise对象。返回拖拽操作期间目标控件是否存在。true：存在。false：不存在。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  isComponentPresentWhenDrag(on: On, from: Point, to: Point, speed?: int, duration?: int): Promise<boolean>;

  /**
   * 从起始点滑向终止点，并查找目标控件是否存在。使用Promise异步回调。
   *
   * @param { On } on - 目标控件的属性要求。
   * @param { Point } from - 以Point对象的形式传入起始点的坐标信息和所属屏幕ID。
   * @param { Point } to - 以Point对象的形式传入终止点的坐标信息和所属屏幕ID。
   *     
   *      **说明：** 应与起始点属于同一个屏幕，否则将抛出17000007异常。
   * @param { int } [speed] - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值600。为负数时抛出17000007错
   *     误码。
   * @returns { Promise<boolean> } - Promise对象。返回滑动操作期间目标控件是否存在。true：存在。false：不存在。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  isComponentPresentWhenSwipe(on: On, from: Point, to: Point, speed?: int): Promise<boolean>;

  /**
   * 模拟触摸板双指滚动手势。使用Promise异步回调。
   *
   * @param { Point } point - 触摸板双指滚动时鼠标光标的位置。
   * @param { UiDirection } direction - 触摸板双指滚动的方向。
   * @param { int } d - 触摸板双指滚动的格数，取值为大于等于0的整数，每格对应目标点位移120px。
   * @param { int } [speed] - 触摸板双指滚动的速度，范围：1-500的整数，单位：格/秒。为不在范围内的非负数或为null/undefined时设为默认值20。为负数时抛出17000007错误码。
   * @returns { Promise<void> } - Promise对象，无返回结果。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  touchPadTwoFingersScroll(point: Point, direction: UiDirection, d: int, speed?: int): Promise<void>;

  /**
   * 模拟指关节敲击屏幕操作。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 若设备关闭了指关节手势<!--RP4--><!--RP4End-->，则调用本接口返回17000005错误码。
   *
   * @param { Array<Point> } pointers - 指关节敲击屏幕坐标点的数组，数组长度取值为1或2。
   * @param { int } times - 指关节连续敲击屏幕的次数，取值为1或2。
   * @returns { Promise<void> } - Promise对象。无返回结果。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  knuckleKnock(pointers: Array<Point>, times: int): Promise<void>;

  /**
   * 模拟指关节多点注入滑动操作。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 若设备关闭了指关节手势<!--RP4--><!--RP4End-->，则调用本接口返回17000005错误码。
   *
   * @param { PointerMatrix } pointers - 滑动轨迹，包括操作手指个数和滑动坐标序列。
   *     
   *     **说明**：当前仅支持单指操作，PointerMatrix中的操作手指个数fingers必须设置为1。
   * @param { int } [speed] - 滑动速率，取值范围为200-40000的整数，默认值为600，单位：px/s。为不在范围内的非负数或为null/undefined时设为默认值600。为负数时抛出17000007错
   *     误码。
   * @returns { Promise<void> } - Promise对象。无返回结果。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @test
   */
  injectKnucklePointerAction(pointers: PointerMatrix, speed?: int): Promise<void>;
 }

/**
 * UiWindow代表了UI界面上的一个窗口，提供窗口属性获取，窗口拖动、调整窗口大小等能力。
 * 该类提供的所有方法都使用Promise方式作为异步方法，需使用await方式调用。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 * @test
 */
declare class UiWindow {
  /**
   * 获取窗口归属应用的包名信息。使用Promise异步回调。
   *
   * @returns { Promise<string> } - Promise对象，返回窗口归属应用的包名信息。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  getBundleName(): Promise<string>;

  /**
   * 获取窗口的边框信息。使用Promise异步回调。
   *
   * @returns { Promise<Rect> } - Promise对象，返回窗口的边框信息。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  getBounds(): Promise<Rect>;

  /**
   * 获取窗口的标题信息。使用Promise异步回调。
   *
   * @returns { Promise<string> } - Promise对象，返回窗口的标题信息。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  getTitle(): Promise<string>;

  /**
   * 获取窗口的窗口模式信息。使用Promise异步回调。
   *
   * @returns { Promise<WindowMode> } - Promise对象，返回窗口的窗口模式信息。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  getWindowMode(): Promise<WindowMode>;

  /**
   * 判断窗口是否处于获焦状态。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } - Promise对象，返回窗口对象是否获取获焦状态。true：获焦。false：未获焦。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  isFocused(): Promise<boolean>;

  /**
   * 判断窗口是否为用户正在交互窗口。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 11开始废弃，建议使用[isActive<sup>11+</sup>]{@link UiWindow#isActive}替代。
   *
   * @returns { Promise<boolean> } - Promise对象，返回窗口对象是否为用户正在交互窗口。true表示是交互窗口。false表示非交互窗口。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead UiWindow#isActive
   * @test
   */
  isActived(): Promise<boolean>;

  /**
   * 让窗口获焦。使用Promise异步回调。
   *
   * @returns { Promise<void> } - Promise对象，返回无结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  focus(): Promise<void>;

  /**
   * 将窗口移动到目标点。使用Promise异步回调。适用于支持移动的窗口。
   *
   * @param { int } x - 以number的形式传入目标点的横坐标信息，取值范围：大于等于0的整数。
   * @param { int } y - 以number的形式传入目标点的纵坐标信息，取值范围：大于等于0的整数。
   * @returns { Promise<void> } - Promise对象，返回无结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  moveTo(x: int, y: int): Promise<void>;

  /**
   * 根据传入的宽、高和调整方向来调整窗口的大小。使用Promise异步回调。适用于支持调整大小的窗口。
   *
   * @param { int } wide - 以number的形式传入调整后窗口的宽度，取值范围：大于等于0的整数。
   * @param { int } height - 以number的形式传入调整后窗口的高度，取值范围：大于等于0的整数。
   * @param { ResizeDirection } direction - 以[ResizeDirection]{@link ResizeDirection}的形式传入窗口调整的方向。
   * @returns { Promise<void> } - Promise对象，返回无结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  resize(wide: int, height: int, direction: ResizeDirection): Promise<void>;

  /**
   * 将窗口模式切换成分屏模式。使用Promise异步回调。适用于支持切换分屏模式的窗口。
   *
   * @returns { Promise<void> } - Promise对象，返回无结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  split(): Promise<void>;

  /**
   * 将窗口最大化。使用Promise异步回调。适用于支持窗口最大化操作的窗口。
   *
   * @returns { Promise<void> } - Promise对象，返回无结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  maximize(): Promise<void>;

  /**
   * 将窗口最小化。使用Promise异步回调。适用于支持窗口最小化操作的窗口。
   *
   * @returns { Promise<void> } - Promise对象，返回无结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  minimize(): Promise<void>;

  /**
   * 将窗口恢复到之前的窗口模式。使用Promise异步回调。
   *
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  resume(): Promise<void>;

  /**
   * 将窗口关闭。使用Promise异步回调。
   *
   * @returns { Promise<void> } - Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @throws { BusinessError } 17000005 - This operation is not supported.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  close(): Promise<void>;

  /**
   * 判断窗口是否为用户正在交互窗口。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } - Promise对象，返回窗口对象是否为用户正在交互窗口。true：交互窗口。false：非交互窗口。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @test
   */
  isActive(): Promise<boolean>;

  /**
   * 获取窗口所属的屏幕ID。使用Promise异步回调。
   *
   * @returns { Promise<int> } - Promise对象，返回窗口所属的屏幕ID。
   * @throws { BusinessError } 17000002 - The API does not support concurrent calls.
   * @throws { BusinessError } 17000004 - The window or component is invisible or destroyed.
   * @syscap SystemCapability.Test.UiTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  getDisplayId(): Promise<int>;
 }

/**
 * 存储多指操作中每根手指每一步动作的坐标点及其行为的二维数组。
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 * @test
 */
declare class PointerMatrix {
  /**
   * 静态方法，构造一个PointerMatrix对象，并返回该对象。
   *
   * @param { int } fingers - 多指操作中注入的手指数，取值范围：[1,10]的整数。
   * @param { int } steps - 每根手指操作的步骤数，取值范围：[1,1000]的整数。
   * @returns { PointerMatrix } - 返回构造的PointerMatrix对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  static create(fingers: int, steps: int): PointerMatrix;

  /**
   * 设置PointerMatrix对象中指定手指和步骤对应动作的坐标点。
   *
   * @param { int } finger - 手指的序号，取值大于等于0的整数，且不超过构造PointerMatrix对象时设置的手指数。
   * @param { int } step - 步骤的序号，取值大于等于0的整数，且不超过构造PointerMatrix对象时设置的操作的步骤数。
   * @param { Point } point - 该行为的坐标点。建议相邻的坐标点距离在10px至80px范围内。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   * @test
   */
  setPoint(finger: int, step: int, point: Point): void;
 }

/**
 * The static builder for building {@link By}object conveniently,usage example:BY.text('txt').enabled(true).
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.UiTest.ON
 * @test
 */
declare const BY: By;

/**
 * The static builder for building {@link On}object conveniently,usage example:ON.text('txt').enabled(true).
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @test
 */
declare const ON: On;

/**
 * The static builder for building {@link On}object conveniently,usage example:ON.text('txt').enabled(true).
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 23 static
 * @test
 */
declare namespace ON {
  /**
   * Specifies the text for the target Component.
   *
   * @param { string } txt - the text value.
   * @param { MatchPattern } [pattern] - the {@link MatchPattern} of the text value, Set it default {@link 
   *     MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function text(txt: string, pattern?: MatchPattern): On;

  /**
   * Specifies the id of the target Component.
   *
   * @param { string } id - the id value.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function id(id: string): On;

  /**
   * Specifies the type of the target Component.
   *
   * @param { string } tp - The type value.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function type(tp: string): On;

  /**
   * Specifies the clickable status of the target Component.
   *
   * @param { boolean } [b] - the clickable status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function clickable(b?: boolean): On;

  /**
   * Specifies the longClickable status of the target Component.
   *
   * @param { boolean } [b] - the longClickable status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function longClickable(b?: boolean): On;

  /**
   * Specifies the scrollable status of the target Component.
   *
   * @param { boolean } [b] - the scrollable status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function scrollable(b?: boolean): On;

  /**
   * Specifies the enabled status of the target Component.
   *
   * @param { boolean } [b] - the enabled status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function enabled(b?: boolean): On;

  /**
   * Specifies the focused status of the target Component.
   *
   * @param { boolean } [b] - the focused status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function focused(b?: boolean): On;

  /**
   * Specifies the selected status of the target Component.
   *
   * @param { boolean } [b] - the - selected status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function selected(b?: boolean): On;

  /**
   * Specifies the checked status of the target Component.
   *
   * @param { boolean } [b] - the checked status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function checked(b?: boolean): On;

  /**
   * Specifies the checkable status of the target Component.
   *
   * @param { boolean } [b] - the checkable status.Set it default true if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function checkable(b?: boolean): On;

  /**
   * Requires that the target Component which is before another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   *
   * @param { On } on - describes the attribute requirements of Component which the target one is in front of.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function isBefore(on: On): On;

  /**
   * Requires that the target Component which is after another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   *
   * @param { On } on - describes the attribute requirements of Component which the target one is in back of.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function isAfter(on: On): On;

  /**
   * Requires that the target Component which is inside of another Component that specified by the given {@link On}
   * object,used to locate Component relatively.
   *
   * @param { On } on - describes the attribute requirements of Component which the target one is inside of.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function within(on: On): On;

  /**
   * Specifies the bundleName of the application which the window that the target Component is located belongs.
   *
   * @param { string } bundleName - the bundleName of the specified window.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function inWindow(bundleName: string): On;

  /**
   * Specifies the displayId to which the target Component belongs.
   *
   * @param { int } displayId - the Id of the specified display.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function belongingDisplay(displayId: int): On;

  /**
   * Specifies the description for the target Component.
   *
   * @param { string } val - the description value.
   * @param { MatchPattern } [pattern] - the {@link MatchPattern} of description value,set it default {@link 
   *     MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function description(val: string, pattern?: MatchPattern): On;
  /**
   * Specifies the id of the target Component.
   *
   * @param { string } id - the id value.
   * @param { MatchPattern } pattern - the {@link MatchPattern} of the text value,Set it default {@link 
   *     MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function id(id: string, pattern: MatchPattern): On;
  /**
   * Specifies the type of the target Component.
   *
   * @param { string } tp - The type value.
   * @param { MatchPattern } pattern - the {@link MatchPattern} of the text value,Set it default {@link 
   *     MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function type(tp: string, pattern: MatchPattern): On;
  /**
   * Specifies the hint for the target Component.
   *
   * @param { string } val - the hint value.
   * @param { MatchPattern } [pattern] - the {@link MatchPattern} of the text value,Set it default {@link 
   *     MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function hint(val: string, pattern?: MatchPattern): On;

  /**
   * Specifies the original text for the target Component.
   * If the accessibility property 'accessibilityLevel' of a component is set to 'no' or 'no-hide-descendants',
   * you will not be able to use {@link On.text} to match the component with the specified original text, but you can 
   * use this method to achieve it;
   * if the component does not set the above accessibility property, this method has no difference with {@link On.text}
   *
   * @param { string } text - the original text value.
   * @param { MatchPattern } [pattern] - the {@link MatchPattern} of the text value, Set it default {@link 
   *     MatchPattern.EQUALS} if null or undefined.
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @since 23 static
   * @test
   */
  export function originalText(text: string, pattern?: MatchPattern): On;

  /**
   * 要求目标组件位于由给定{@link Component}指定的另一个组件之前
   * 对象，用于相对于组件定位。
   *
   * @param { Component } com - 描述了目标组件在前面的组件。
   * @returns { On } this {@link On}对象。
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @since 26.0.0 static
   * @test
   */
  export function beforeComponent(com: Component): On;

  /**
   * 要求目标组件位于由给定{@link Component}指定的另一个组件之后
   * 对象，用于相对于组件定位。
   *
   * @param { Component } com - 描述目标组件的后端组件。
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @since 26.0.0 static
   * @test
   */
  export function afterComponent(com: Component): On;

  /**
   * 要求目标组件位于由给定{@link Component}指定的另一个组件的内部
   * 对象，用于相对于组件定位。
   *
   * @param { Component } com - 描述目标组件所在的组件。
   * @returns { On } this {@link On} object.
   * @throws { BusinessError } 17000007 - Parameter verification failed.
   * @syscap SystemCapability.Test.UiTest
   * @FaAndStageModel
   * @since 26.0.0 static
   * @test
   */
  export function withinComponent(com: Component): On;
 }

/*** if arkts dynamic */
 export {
     UiComponent,
     UiDriver,
     BY,
     By
 };
 /*** endif */

export {
     Component,
     Driver,
     UiWindow,
     ON,
     On,
     MatchPattern,
     DisplayRotation,
     ResizeDirection,
     WindowMode,
     Point,
     WindowFilter,
     Rect,
     PointerMatrix,
     UiDirection,
     MouseButton,
     UIElementInfo,
     UIEventObserver,
     TouchPadSwipeOptions,
     InputTextMode,
     WindowChangeType,
     ComponentEventType,
     WindowChangeOptions,
     ComponentEventOptions,
     KeyOptions,
     TouchOptions,
     PenKey,
     PenKeyOperation,
     PenMode,
     PenKeyOperationOptions
 };

/*** if arkts dynamic */
export {
    UiComponent,
    UiDriver,
    BY,
    By
};
/*** endif */