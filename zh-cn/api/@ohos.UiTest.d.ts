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
 * **UiTest**模块提供用于在测试期间模拟UI操作的API，例如单击、双击、长按和滑动。
 * 本模块提供以下功能：
 * 
 * - [On<sup>9+</sup>]{@link On}：提供用于组件过滤和匹配的UI组件特征描述API。
 * - [Component<sup>9+</sup>]{@link Component}：表示UI上的组件，提供获取组件属性、单击组件、
 *   滚动查找组件和文本注入的API。
 * - [Driver<sup>9+</sup>]{@link Driver}：作为入口类，提供组件匹配/查找、按键注入、坐标单击/滑动和截图等功能的API。
 * - [UiWindow<sup>9+</sup>]{@link UiWindow}：作为入口类，提供获取窗口属性、拖动窗口和调整窗口大小的API。
 * - [By<sup>(已废弃)</sup>]{@link BY}：提供用于组件过滤和匹配的UI组件特征描述API。该API自API版本8起支持，
 *   自API版本9起废弃。建议使用{@link On}替代。
 * - [UiComponent<sup>(已废弃)</sup>]{@link UiComponent}：表示UI上的组件，提供获取组件属性、单击组件、
 *   滚动查找组件和文本注入的API。该API自API版本8起支持，自API版本9起废弃。
 *   建议使用[Component<sup>9+</sup>]{@link Component}替代。
 * - [UiDriver<sup>(已废弃)</sup>]{@link UiDriver}：作为入口类，提供组件匹配/查找、按键注入、坐标单击/滑动和截图等功能的API。
 *   该API自API版本8起支持，自API版本9起废弃。建议使用[Driver<sup>9+</sup>]{@link Driver}替代。
 * 
 * > **说明：**
 * >
 * > - 本模块的API仅能在<!--RP1-->[UITest](docroot://application-test/uitest-guidelines.md)<!--RP1End-->中使用。
 * >
 * > - 本模块的API不支持并发调用。
 * 
 * @file
 * @kit TestKit
 * 
 */



import { Callback } from './@ohos.base';

/**
 * 枚举组件属性支持的匹配模式。
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
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     * @test
     */
    CONTAINS = 1,
    /**
     * 以给定值开头。
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
     * 以给定值结尾。
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
     * 使用正则表达式匹配。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    REG_EXP = 4,
    /**
     * 使用不区分大小写的正则表达式匹配。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    REG_EXP_ICASE = 5,
}


/**
 * UiTest框架在**By**类中提供了丰富的UI组件特征描述API，用于过滤和匹配组件。
 * 
 * **By**类提供的API具有以下特点：
 * 
 * 1. 允许使用一个或多个属性作为匹配条件。例如，可以同时指定**text**和**id**属性来查找目标组件。
 * 2. 为组件属性提供多种匹配模式。
 * 3. 支持组件的绝对定位和相对定位。可以使用[By.isBefore<sup>(已废弃)</sup>]{@link By#isBefore}和
 *    [By.isAfter<sup>(已废弃)</sup>]{@link By#isAfter}等API指定相邻组件的特征来辅助定位。
 * 
 * **By**类中提供的所有API都是同步的。建议使用静态构造器**BY**以链式模式创建**By**对象。
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead On
 */
declare class By {
    /**
     * 指定目标组件的文本属性。支持多种匹配模式。
     *
     * @param { string } txt - 组件文本，用于匹配目标组件。
     * @param { MatchPattern } pattern - 匹配模式{@link MatchPattern}。
     *     <br>默认值：{@link MatchPattern.EQUALS}
     * @returns { By } - 匹配目标组件文本属性的**By**对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead On#text
     * @test
     */
    text(txt: string, pattern?: MatchPattern): By;

    /**
     * 指定目标组件的key属性。
     *
     * @param { string } key - 组件key。
     * @returns { By } - 匹配目标组件key属性的**By**对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead On#id(id: string)
     * @test
     */
    key(key: string): By;

    /**
     * 指定目标组件的ID属性。
     *
     * @param { number } id - 组件ID。
     * @returns { By } - 匹配目标组件ID属性的**By**对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead On#id(id: string)
     * @test
     */
    id(id: number): By;

    /**
     * 指定目标组件的类型属性。
     *
     * @param { string } tp - 组件类型。
     * @returns { By } - 匹配目标组件类型属性的**By**对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead On#type(tp: string)
     * @test
     */
    type(tp: string): By;

    /**
     * 指定目标组件的可点击属性。
     *
     * @param { boolean } b - 组件的可点击状态。值**true**表示组件可点击，**false**表示不可点击。默认值：**true**
     * @returns { By } - 匹配目标组件可点击属性的**By**对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead On#clickable
     * @test
     */
    clickable(b?: boolean): By;

    /**
     * 指定目标组件的可滚动属性。
     *
     * @param { boolean } b - 组件的可滚动状态。值**true**表示组件可滚动，**false**表示不可滚动。默认值：**true**
     * @returns { By } - 匹配目标组件可滚动属性的**By**对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead On#scrollable
     * @test
     */
    scrollable(b?: boolean): By;

    /**
     * 指定目标组件的可用属性。
     *
     * @param { boolean } b - 组件的可用状态。值**true**表示组件可用，**false**表示不可用。默认值：**true**
     * @returns { By } - 匹配目标组件可用属性的**By**对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead On#enabled
     * @test
     */
    enabled(b?: boolean): By;

    /**
     * 指定目标组件的聚焦属性。
     *
     * @param { boolean } b - 组件的聚焦状态。值**true**表示组件已聚焦，**false**表示未聚焦。默认值：**true**
     * @returns { By } - 匹配目标组件聚焦属性的**By**对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead On#focused
     * @test
     */
    focused(b?: boolean): By;

    /**
     * 指定目标组件的选中状态。
     *
     * @param { boolean } b - 组件的选中状态。值**true**表示组件已选中，**false**表示未选中。默认值：**true**
     * @returns { By } - 匹配目标组件选中属性的**By**对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead On#selected
     * @test
     */
    selected(b?: boolean): By;

    /**
     * 指定目标组件位于给定属性组件的前方。
     *
     * @param { By } by - 属性组件的信息。
     * @returns { By } - **By**对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead On#isBefore(on: On)
     * @test
     */
    isBefore(by: By): By;

    /**
     * 指定目标组件位于给定属性组件的后方。
     *
     * @param { By } by - 属性组件的信息。
     * @returns { By } - **By**对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead On#isAfter(on: On)
     * @test
     */
    isAfter(by: By): By;
}

/**
 * 在**UiTest**中，**UiComponent**类表示UI上的组件，提供获取组件属性、单击组件、滚动查找组件和文本注入的API。
 * 此类中提供的所有API都使用Promise返回结果，必须使用**await**调用。
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead Component
 * @test
 */
declare class UiComponent {
    /**
     * 单击此组件。该API使用Promise返回结果。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#click
     * @test
     */
    click(): Promise<void>;

    /**
     * 双击此组件。该API使用Promise返回结果。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#doubleClick
     * @test
     */
    doubleClick(): Promise<void>;

    /**
     * 长按此组件。该API使用Promise返回结果。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#longClick
     * @test
     */
    longClick(): Promise<void>;

    /**
     * 获取此组件的ID。该API使用Promise返回结果。
     *
     * @returns { Promise<number> } - 用于返回组件ID的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#getId
     * @test
     */
    getId(): Promise<number>;

    /**
     * 获取此组件的key。该API使用Promise返回结果。
     *
     * @returns { Promise<string> } - 用于返回key值的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#getId
     * @test
     */
    getKey(): Promise<string>;

    /**
     * 获取此组件的文本信息。该API使用Promise返回结果。
     *
     * @returns { Promise<string> } - 用于返回组件文本信息的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#getText
     * @test
     */
    getText(): Promise<string>;

    /**
     * 获取此组件的类型。该API使用Promise返回结果。
     *
     * @returns { Promise<string> } - 用于返回组件类型的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#getType
     * @test
     */
    getType(): Promise<string>;

    /**
     * 获取此组件的可点击状态。该API使用Promise返回结果。
     *
     * @returns { Promise<boolean> } - 用于返回组件是否可点击的Promise对象。值**true**表示组件可点击，**false**表示不可点击。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#isClickable
     * @test
     */
    isClickable(): Promise<boolean>;

    /**
     * 获取此组件的可滚动状态。该API使用Promise返回结果。
     *
     * @returns { Promise<boolean> } - 用于返回组件是否可滚动的Promise对象。值**true**表示组件可滚动，**false**表示不可滚动。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#isScrollable
     * @test
     */
    isScrollable(): Promise<boolean>;

    /**
     * 获取此组件的可用状态。该API使用Promise返回结果。
     *
     * @returns { Promise<boolean> } - 用于返回组件是否可用的Promise对象。值**true**表示组件可用，**false**表示不可用。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#isEnabled
     * @test
     */
    isEnabled(): Promise<boolean>;

    /**
     * 获取此组件的聚焦状态。该API使用Promise返回结果。
     *
     * @returns { Promise<boolean> } - 用于返回组件是否聚焦的Promise对象。值**true**表示组件已聚焦，**false**表示未聚焦。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#isFocused
     * @test
     */
    isFocused(): Promise<boolean>;

    /**
     * 获取此组件的选中状态。该API使用Promise返回结果。
     *
     * @returns { Promise<boolean> } - 用于返回组件是否选中的Promise对象。值**true**表示组件已选中，**false**表示未选中。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#isSelected
     * @test
     */
    isSelected(): Promise<boolean>;

    /**
     * 向组件输入文本。该API仅对可编辑文本组件生效。该API使用Promise返回结果。
     *
     * @param { string } text - 要输入的文本。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#inputText(text: string)
     * @test
     */
    inputText(text: string): Promise<void>;

    /**
     * 在此组件上滚动查找目标组件（适用于支持滚动的组件，如**List**）。该API使用Promise返回结果。
     *
     * @param { By } by - 目标组件的属性。
     * @returns { Promise<UiComponent> } - 用于返回目标组件的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#scrollSearch(on: On)
     * @test
     */
    scrollSearch(by: By): Promise<UiComponent>;
}

/**
 * **UiDriver**类是UiTest框架的主要入口。它提供组件匹配/查找、按键注入、坐标单击/滑动和截图等功能的API。
 * 此类提供的所有API（除**UiDriver.create()**外）都使用Promise返回结果，必须使用**await**调用。
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead Driver
 * @test
 */
declare class UiDriver {
    /**
     * 创建**UiDriver**对象并返回创建的对象。该API为静态API。
     * 
     * > **说明：**
     * >
     * > 该方法自API版本8起支持，自API版本9起废弃。建议使用[create<sup>9+</sup>]{@link Driver#create}替代。
     *
     * @returns { UiDriver } - 创建的**UiDriver**对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Driver#create
     * @test
     */
    static create(): UiDriver;

    /**
     * 在指定持续时间内延迟此**UiDriver**对象。该API使用Promise返回结果。
     *
     * @param { number } duration - 持续时间。
     *     <br>单位：ms
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Driver#delayMs
     * @test
     */
    delayMs(duration: number): Promise<void>;

    /**
     * 在此**UiDriver**对象中查找与给定属性匹配的目标组件。该API使用Promise返回结果。
     *
     * @param { By } by - 目标组件的属性。
     * @returns { Promise<UiComponent> } - 用于返回组件的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Driver#findComponent(on: On)
     * @test
     */
    findComponent(by: By): Promise<UiComponent>;

    /**
     * 在此**UiDriver**对象中查找所有与给定属性匹配的组件。该API使用Promise返回结果。
     *
     * @param { By } by - 目标组件的属性。
     * @returns { Promise<Array<UiComponent>> } - 用于返回组件列表的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Driver#findComponents(on: On)
     * @test
     */
    findComponents(by: By): Promise<Array<UiComponent>>;

    /**
     * 断言当前页面上存在与给定属性匹配的组件。如果组件不存在，该API将抛出JS异常，导致当前测试用例失败。
     * 该API使用Promise返回结果。
     *
     * @param { By } by - 目标组件的属性。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws {BusinessError} 401 - 输入参数无效。
     * @throws {BusinessError} 17000002 - 该API不支持并发调用。
     * @throws {BusinessError} 17000003 - 断言失败。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Driver#assertComponentExist
     * @test
     */
    assertComponentExist(by: By): Promise<void>;

    /**
     * 在此**UiDriver**对象上按下返回键。该API使用Promise返回结果。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Driver#pressBack()
     * @test
     */
    pressBack(): Promise<void>;

    /**
     * 触发此**UiDriver**对象中与给定键码匹配的按键。该API使用Promise返回结果。
     *
     * @param { number } keyCode - 键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Driver#triggerKey(keyCode: int)
     * @test
     */
    triggerKey(keyCode: number): Promise<void>;

    /**
     * 根据给定坐标单击此**UiDriver**对象的特定点。该API使用Promise返回结果。
     *
     * @param { number } x - 数值，表示目标点的水平坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { number } y - 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#click
     * @test
     */
    click(x: number, y: number): Promise<void>;

    /**
     * 根据给定坐标双击此**UiDriver**对象的特定点。该API使用Promise返回结果。
     *
     * @param { number } x - 数值，表示目标点的水平坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { number } y - 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#doubleClick
     * @test
     */
    doubleClick(x: number, y: number): Promise<void>;

    /**
     * 根据给定坐标长按此**UiDriver**对象的特定点。该API使用Promise返回结果。
     *
     * @param { number } x - 数值，表示目标点的水平坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { number } y - 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Component#longClick
     * @test
     */
    longClick(x: number, y: number): Promise<void>;

    /**
     * 在此**UiDriver**对象上根据给定坐标从起点滑动到终点。该API使用Promise返回结果。
     *
     * @param { number } startx - 数值，表示起点的水平坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { number } starty - 数值，表示起点的垂直坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { number } endx - 数值，表示目标点的水平坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { number } endy - 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Driver#swipe
     * @test
     */
    swipe(startx: number, starty: number, endx: number, endy: number): Promise<void>;

    /**
     * 截取此**UiDriver**对象的当前屏幕并将其保存为PNG图像到给定的保存路径。该API使用Promise返回结果。
     *
     * @param { string } savePath - 文件保存路径。
     * @returns { Promise<boolean> } - 用于返回截图操作是否成功的Promise对象。值**true**表示截图操作成功，**false**表示失败。
     * @syscap SystemCapability.Test.UiTest
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead Driver#screenCap(savePath: string)
     * @test
     */
    screenCap(savePath: string): Promise<boolean>;
}

/**
 * 枚举窗口模式。
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
     * 主窗口模式。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    PRIMARY = 1,
    /**
     * 次窗口模式。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    SECONDARY = 2,
    /**
     * 悬浮窗口模式。
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
 * 枚举窗口可调整大小的方向。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare enum ResizeDirection {
    /**
     * 左。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    LEFT = 0,
    /**
     * 右。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    RIGHT = 1,
    /**
     * 上。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    UP = 2,
    /**
     * 下。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    DOWN = 3,
    /**
     * 左上。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    LEFT_UP = 4,
    /**
     * 左下。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    LEFT_DOWN = 5,
    /**
     * 右上。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    RIGHT_UP = 6,
    /**
     * 右下。
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
 * 描述设备的显示旋转方向。
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform [since 26.0.0]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare enum DisplayRotation {
    /**
     * 设备显示未旋转，处于原始竖屏方向。
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
     * 设备显示顺时针旋转90°，处于横屏方向。
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
     * 设备显示顺时针旋转180°，处于反向竖屏方向。
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
     * 设备显示顺时针旋转270°，处于反向横屏方向。
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
 * 表示设备屏幕上的坐标点。
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare interface Point {
    /**
     * 坐标点的水平坐标。该值为大于0的整数。
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
     * 坐标点的垂直坐标。该值为大于0的整数。
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
     * 坐标点所属的显示ID。该值为大于或等于0的整数。默认值为设备的默认屏幕ID。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    displayId?: int;
}

/**
 * 表示设备屏幕上的矩形区域。
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare interface Rect {
    /**
     * 组件边框左上角的X坐标。该值为大于0的整数。
     *     <br>单位：px
     * @readonly [since 9-19]
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    left: int;
    /**
     * 组件边框左上角的Y坐标。该值为大于0的整数。
     *     <br>单位：px
     * @readonly [since 9-19]
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    top: int;
    /**
     * 组件边框右下角的X坐标。该值为大于0的整数。
     *     <br>单位：px
     * @readonly [since 9-19]
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    right: int;
    /**
     * 组件边框右下角的Y坐标。该值为大于0的整数。
     *     <br>单位：px
     * @readonly [since 9-19]
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    bottom: int;
    /**
     * 组件边框所属的显示ID。该值为大于或等于0的整数。
     *     <br>默认值：设备的默认屏幕ID。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    displayId?: int;
}

/**
 * 提供此窗口的标志属性。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare interface WindowFilter {
    /**
     * 窗口所属应用的包名。默认值为空。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    bundleName?: string;

    /**
     * 窗口标题。默认值为空。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    title?: string;

    /**
     * 窗口是否已聚焦。值**true**表示窗口已聚焦，**false**表示未聚焦。默认值为**false**。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    focused?: boolean;

    /**
     * 窗口是否正在与用户交互。值**true**表示窗口正在与用户交互，**false**表示未交互。
     * 
     * 该API自API版本11起废弃。建议使用**active** API替代。
     *
     * @syscap SystemCapability.Test.UiTest
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.UiTest.WindowFilter#active
     */
    actived?: boolean;

    /**
     * 窗口是否正在与用户交互。值**true**表示窗口正在与用户交互，**false**表示未交互。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    active?: boolean;

    /**
     * 窗口所属的显示ID。该值为大于或等于0的整数。默认值为设备的默认屏幕ID。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    displayId?: int;
}

/**
 * 枚举可监听的窗口变更事件类型。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 */
declare enum WindowChangeType {
    /**
     * 非窗口变更事件。
     *      <br>注意：该值仅能作为返回值使用。如果传入API中，将抛出异常。
     * 
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    WINDOW_UNDEFINED = 0,
    /**
     * 窗口添加事件。
     * 
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    WINDOW_ADDED = 1,
    /**
     * 窗口移除事件。
     * 
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    WINDOW_REMOVED = 2,
    /**
     * 窗口边界变更事件。
     * 
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    WINDOW_BOUNDS_CHANGED = 3,
}

/**
 * 枚举可监听的组件操作事件类型。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 */
declare enum ComponentEventType {
    /**
     * 非组件操作事件。
     * 
     * 注意：该值仅能作为返回值使用。如果传入API中，将抛出异常。
     * 
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    COMPONENT_UNDEFINED = 0,
    /**
     * 组件单击事件。
     * 
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    COMPONENT_CLICKED = 1,
    /**
     * 组件长按事件。
     * 
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    COMPONENT_LONG_CLICKED = 2,
    /**
     * 组件滚动开始事件。
     * 
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    COMPONENT_SCROLL_START = 3,
    /**
     * 组件滚动结束事件。
     * 
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    COMPONENT_SCROLL_END = 4,
    /**
     * [文本输入组件](docroot://ui/arkts-common-components-text-input.md)的文本变更事件。
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
 * 描述窗口变更事件监听的扩展配置，
 * 用于指定监听流程配置和事件过滤条件。
 * 
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 * @test
 */
declare interface WindowChangeOptions {
    /**
     * 监听超时时间间隔，防止因事件通知延迟导致监听失败。
     *     <br>取值范围：值应 >= 500
     *     <br>默认值：10000
     *     <br>单位：ms
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    timeout?: int;
    /**
     * 要监听的窗口的包名。默认监听所有窗口。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    bundleName?: string;
}

/**
 * 描述组件操作事件监听的扩展配置，
 * 用于指定监听流程配置和事件过滤条件。
 * 
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 * @test
 */
declare interface ComponentEventOptions {
    /**
     * 监听超时时间间隔，防止因事件通知延迟导致监听失败。
     * <br>取值范围：值应 >= 500
     * <br>默认值：10000
     *     <br>单位：ms
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    timeout?: int;
    /**
     * 要监听的目标组件的属性要求。默认监听所有组件。
     * **注意**：只能监听具有指定属性的组件。具有相对位置的组件如
     * **On.isBefore**、**On.isAfter**和**On.within**无法被监听。
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
 * 提供UI事件的信息。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 * @test
 */
declare interface UIElementInfo {
    /**
     * 应用的包名。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     * @test
     */
    readonly bundleName: string;
    /**
     * 组件或窗口类型。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     * @test
     */
    readonly type: string;
    /**
     * 组件或窗口的文本信息。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     * @test
     */
    readonly text: string;
    /**
     * 窗口变更事件类型。
     * 如果不是窗口变更事件，返回{@link WindowChangeType.WINDOW_UNDEFINED}。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    readonly windowChangeType?: WindowChangeType;
    /**
     * 组件操作事件类型。
     * 如果不是组件操作事件，返回{@link ComponentEventType.COMPONENT_UNDEFINED}。
     *
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    readonly componentEventType?: ComponentEventType;
    /**
     * 组件所属窗口的ID。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    readonly windowId?: int;
    /**
     * 组件ID。如果不是组件操作事件，返回空字符串。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    readonly componentId?: string;
    /**
     * 组件的矩形区域，如果是窗口则将rect的所有属性设为0。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    readonly componentRect?: Rect;
}

/**
 * 用于监听UI事件的观察者。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 * @test
 */
declare interface UIEventObserver {
    /**
     * 订阅toast组件事件。该API使用回调返回结果。
     *
     * @param { 'toastShow' } type - 事件类型。固定值为**'toastShow'**。
     * @param { Callback<UIElementInfo> } callback - 用于返回结果的回调。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @test
     */
    once(type: 'toastShow', callback: Callback<UIElementInfo>): void;

    /**
     * 监听toast显示一次
     * 
     * @param { Callback<UIElementInfo> } callback - 函数，返回监听到的UIElementInfo。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    onceToastShow(callback: Callback<UIElementInfo>): void;

    /**
     * 订阅dialog组件事件。该API使用回调返回结果。
     *
     * @param { 'dialogShow' } type - 事件类型。固定值为**'dialogShow'**。
     * @param { Callback<UIElementInfo> } callback - 用于返回结果的回调。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @test
     */
    once(type: 'dialogShow', callback: Callback<UIElementInfo>): void;

    /**
     * 监听dialog显示一次
     *
     * @param { Callback<UIElementInfo> } callback - 函数，返回监听到的UIElementInfo。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    onceDialogShow(callback: Callback<UIElementInfo>): void;

    /**
     * 开始监听指定类型的窗口变更事件，支持扩展配置。该API在检测到指定窗口变更事件时触发回调。
     * 该API仅能在[自由窗口](docroot://windowmanager/window-terminology.md#free-windows)模式下使用。
     *
     * @param { 'windowChange' } type - 要订阅的事件类型，可为**windowChange**。窗口变更时触发该事件。
     * @param { WindowChangeType } windowChangeType - 窗口变更事件类型。
     * @param { WindowChangeOptions } options - 扩展配置，包括监听超时时间间隔和要监听的窗口的包名。
     * @param { Callback<UIElementInfo> } callback - 事件发生时触发回调返回事件信息。
     * @throws { BusinessError } 17000005 - 不支持此操作。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @test
     */
    once(type: 'windowChange', windowChangeType: WindowChangeType, options: WindowChangeOptions, callback: Callback<UIElementInfo>): void;

    /**
     * 监听窗口变更一次，可设置额外的监听选项。
     * 
     * @param { WindowChangeType } windowChangeType - 要监听的窗口变更类型。
     * @param { WindowChangeOptions } options - 窗口变更的额外监听选项。
     * @param { Callback<UIElementInfo> } callback - 函数，返回监听到的UIElementInfo。
     * @throws { BusinessError } 17000005 - 不支持此操作。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    onceWindowChange(windowChangeType: WindowChangeType, options: WindowChangeOptions, callback: Callback<UIElementInfo>): void;

    /**
     * 开始监听指定类型的组件操作事件，支持扩展配置。该API在检测到指定组件操作事件时触发回调。
     *
     * @param { 'componentEventOccur' } type - 要订阅的事件类型，可为**componentEventOccur**。检测到组件操作时触发该事件。
     * @param { ComponentEventType } componentEventType - 组件操作事件类型。
     * @param { ComponentEventOptions } options - 扩展配置，包括监听超时时间间隔和要监听的组件的匹配条件。
     * @param { Callback<UIElementInfo> } callback - 用于返回结果的回调。
     * @throws { BusinessError } 17000005 - 不支持此操作。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @test
     */
    once(type: 'componentEventOccur', componentEventType: ComponentEventType, options: ComponentEventOptions, callback: Callback<UIElementInfo>): void;

    /**
     * 监听组件事件一次，可设置额外的监听选项。
     * 
     * @param { ComponentEventType } componentEventType - 要监听的组件事件类型。
     * @param { ComponentEventOptions } options - 组件事件的额外监听选项。
     * @param { Callback<UIElementInfo> } callback - 函数，返回监听到的UIElementInfo。
     * @throws { BusinessError } 17000005 - 不支持此操作。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    onceComponentEventOccur(componentEventType: ComponentEventType, options: ComponentEventOptions, callback: Callback<UIElementInfo>): void;
}

/**
 * 描述fling等UI操作的方向。
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
 * 描述注入的模拟鼠标按键。
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
     * 鼠标中键。
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
 * 描述触控板滑动手势选项的信息。
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 18 dynamic
 * @since 23 static
 * @test
 */
declare interface TouchPadSwipeOptions {
    /**
     * 滑动手势是否在触控板上停留1秒后再抬起。值**true**表示停留1秒，**false**表示不停留。
     * <br>默认值：false
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    stay?: boolean;

    /**
     * 滑动速度。
     * <br>取值范围：[200, 40000]
     * <br>单位：px/s。
     * <br>如果为负数则抛出错误码17000007。
     * <br>默认值：2000
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    speed?: int;
}

/**
 * 描述文本输入模式。
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 * @test
 */
declare interface InputTextMode {
    /**
     * 是否复制粘贴文本。值**true**表示复制粘贴文本，**false**表示键入文本。默认值：**false**
     * 
     * **注意**：如果输入文本包含中文字符、特殊字符或文本长度超过200个字符，
     * 无论此参数值如何，都将采用复制粘贴方式。
     *     
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    paste?: boolean;

    /**
     * 是否以追加模式输入文本。值**true**表示以追加模式输入文本，**false**表示相反。默认值：**false**
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
     * 操作期间按下的第一个keyCode。
     * 如果未设置，将不会注入按键事件。
     * 仅设置key2而不设置key1将导致BusinessError 17000007。
     *
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    key1?: int;
    /**
     * 操作期间按下的第二个KeyCode。
     * 如果未设置，将不会注入按键事件。
     * 仅设置key2而不设置key1将导致BusinessError 17000007。
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
     * 触摸动作的速度。
     * <br>取值范围：[200, 40000]
     * <br>单位：px/s。
     * <br>如果为负数则抛出错误码17000007。
     * <br>默认值：600
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    speed?: int;
    /**
     * 操作的持续时间，单位为毫秒。
     * <br>取值范围：值应 >= 1500
     * <br>单位：ms
     * <br>默认值：1500
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    duration?: int;
    /**
     * 触摸压力值。
     * <br>取值范围：[0.0, 1.0]
     * <br>默认值：1.0
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
 * 手写笔按键类型枚举。
 *
 * @syscap SystemCapability.Test.UiTest
 * @FaAndStageModel
 * @atomicservice
 * @since 26.0.0 dynamic&static
 * @test
 */
declare enum PenKey {
    /**
     * 书写键。
     *
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    HANDWRITING = 0,
    /**
     * 智能键。
     *
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    SMART = 1,
    /**
     * 空中鼠标键。
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
 * 手写笔模式枚举。
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
     * 空中鼠标模式。
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
 * 手写笔按键操作类型枚举。
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
 * 手写笔按键操作选项。
 *

 * @syscap SystemCapability.Test.UiTest
 * @FaAndStageModel
 * @atomicservice
 * @since 26.0.0 dynamic&static
 * @test
 */
declare interface PenKeyOperationOptions {
    /**
     * 空中鼠标模式操作的坐标点。在空中鼠标模式下key为AIR_MOUSE时必填。
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
 * 自API版本9起，UiTest框架在**On**类中提供了丰富的UI组件特征描述API，用于过滤和匹配组件。
 * 
 * **On**类提供的API具有以下特点：
 * 
 * 1. 允许使用一个或多个属性作为匹配条件。例如，可以同时指定**text**和**id**属性来查找目标组件。
 * 2. 为组件属性提供多种匹配模式。
 * 3. 支持组件的绝对定位和相对定位。可以使用[ON.isBefore]{@link On.isBefore(on: On)}和
 *    [ON.isAfter]{@link On.isAfter(on: On)}等API指定相邻组件的特征来辅助定位。
 * 
 * **On**类中提供的所有API都是同步的。建议使用静态构造器**ON**以链式模式创建**On**对象。
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class On {
    /**
     * 指定目标组件的文本属性。支持多种匹配模式。
     * 
     * > **说明：**
     * >
     * > 如果组件的[accessibilityLevel]{@link ./@internal/component/ets/common:CommonMethod#accessibilityLevel}
     * > 设置为**no**或**no-hide-descendants**，则无法使用此API指定目标组件的文本属性来查找组件。
     * > 此时可以使用[On.originalText()]{@link On#originalText} API。
     *
     * @param { string } txt - 组件文本，用于匹配目标组件。<!--RP2--><!--RP2End-->
     * @param { MatchPattern } [pattern] - 匹配模式{@link MatchPattern}。
     *     <br>默认值：{@link MatchPattern.EQUALS}
     * @returns { On } - 匹配目标组件文本属性的**On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    text(txt: string, pattern?: MatchPattern): On;

    /**
     * 指定目标组件的ID属性。
     *
     * @param { string } id - 组件ID。<!--RP2--><!--RP2End-->
     * @returns { On } - 匹配目标组件ID属性的**On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    id(id: string): On;

    /**
     * 指定目标组件的类型属性。
     *
     * @param { string } tp - 组件类型。<!--RP2--><!--RP2End-->
     * @returns { On } - 匹配目标组件类型属性的**On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    type(tp: string): On;

    /**
     * 指定目标组件的可点击属性。
     *
     * @param { boolean } [b] - 组件的可点击状态。值**true**表示组件可点击，**false**表示不可点击。默认值：**true**<!--RP2--><!--RP2End-->
     * @returns { On } - 匹配目标组件可点击属性的**On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.参数类型错误；2.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    clickable(b?: boolean): On;

    /**
     * 指定目标组件的可长按属性。
     *
     * @param { boolean } [b] - 组件的可长按状态。值**true**表示组件可长按，**false**表示不可长按。默认值：**true**<!--RP2--><!--RP2End-->
     * @returns { On } - 匹配目标组件可长按属性的**On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.参数类型错误；2.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    longClickable(b?: boolean): On;

    /**
     * 指定目标组件的可滚动属性。
     *
     * @param { boolean } [b] - 组件的可滚动状态。值**true**表示组件可滚动，**false**表示不可滚动。默认值：**true**<!--RP2--><!--RP2End-->
     * @returns { On } - 匹配目标组件可滚动属性的**On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.参数类型错误；2.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    scrollable(b?: boolean): On;

    /**
     * 指定目标组件的可用属性。
     *
     * @param { boolean } [b] - 组件的可用状态。值**true**表示组件可用，**false**表示不可用。默认值：**true**<!--RP2--><!--RP2End-->
     * @returns { On } - 匹配目标组件可用属性的**On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.参数类型错误；2.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    enabled(b?: boolean): On;

    /**
     * 指定目标组件的聚焦属性。
     *
     * @param { boolean } [b] - 组件的聚焦状态。值**true**表示组件已聚焦，**false**表示未聚焦。默认值：**true**<!--RP2--><!--RP2End-->
     * @returns { On } - 匹配目标组件聚焦属性的**On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.参数类型错误；2.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    focused(b?: boolean): On;

    /**
     * 指定目标组件的选中属性。
     *
     * @param { boolean } [b] - 组件的选中状态。值**true**表示组件已选中，**false**表示未选中。默认值：**true**<!--RP2--><!--RP2End-->
     * @returns { On } - 匹配目标组件选中属性的**On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.参数类型错误；2.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    selected(b?: boolean): On;

    /**
     * 指定目标组件的勾选属性。
     *
     * @param { boolean } [b] - 组件的勾选状态。值**true**表示组件已勾选，**false**表示未勾选。默认值：**true**<!--RP2--><!--RP2End-->
     * @returns { On } - 匹配目标组件勾选属性的**On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.参数类型错误；2.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    checked(b?: boolean): On;

    /**
     * 指定目标组件的可勾选属性。
     *
     * @param { boolean } [b] - 组件的可勾选状态。值**true**表示组件可勾选，**false**表示不可勾选。默认值：**true**<!--RP2--><!--RP2End-->
     * @returns { On } - 匹配目标组件可勾选属性的**On**对象。
     * @throws { BusinessError } 401 - 参数错误。1.参数类型错误；2.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    checkable(b?: boolean): On;

    /**
     * 指定目标组件位于给定属性组件的前方。
     *
     * @param { On } on - 属性组件的信息。<!--RP3--><!--RP3End-->
     * @returns { On } - **On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    isBefore(on: On): On;

    /**
     * 要求目标组件位于给定{@link Component}对象指定的组件前方，用于相对定位组件。
     *
     * @param { Component } com - 描述目标组件在其前方的组件。
     * @returns { On } 此{@link On}对象。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    isBefore(com: Component): On;
    /**
     * 指定目标组件位于给定属性组件的后方。
     *
     * @param { On } on - 属性组件的信息。<!--RP3--><!--RP3End-->
     * @returns { On } - **On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    isAfter(on: On): On;

    /**
     * 要求目标组件位于给定{@link Component}对象指定的组件后方，用于相对定位组件。
     *
     * @param { Component } com - 描述目标组件在其后方的组件。
     * @returns { On } 此{@link On}对象。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    isAfter(com: Component): On;
    /**
     * 指定目标组件位于给定属性组件的内部。
     *
     * @param { On } on - 属性组件的信息。<!--RP3--><!--RP3End-->
     * @returns { On } - **On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     * @test
     */
    within(on: On): On;

    /**
     * 要求目标组件位于给定{@link Component}对象指定的组件内部，用于相对定位组件。
     *
     * @param { Component } com - 描述目标组件在其内部的组件。
     * @returns { On } 此{@link On}对象。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    within(com: Component): On;

    /**
     * 指定目标组件位于给定应用窗口内。
     *
     * @param { string } bundleName - 应用窗口的包名。<!--RP2--><!--RP2End-->
     * @returns { On } - **On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     * @test
     */
    inWindow(bundleName: string): On;

    /**
     * 获取指定显示器上的组件对象。
     *
     * @param { int } displayId - 组件所属的显示ID。该值为大于或等于0的整数。
     *     <br>**注意**：如果输入的**displayId**不存在，将上报异常**17000007**。可以使用
     *     [getAllDisplays]{@link @ohos.display:display.getAllDisplays(callback: AsyncCallback<Array<Display>>)}获取
     *     当前所有**display**对象并使用它们获取对应的显示ID。<!--RP2--><!--RP2End-->
     * @returns { On } - 指定组件所属显示器的**On**对象。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    belongingDisplay(displayId: int): On;

    /**
     * 指定目标组件的描述。支持多种匹配模式。
     *
     * @param { string } val - 组件的描述。<!--RP2--><!--RP2End-->
     * @param { MatchPattern } [pattern] - 匹配模式{@link MatchPattern}。
     *     <br>默认值：{@link MatchPattern.EQUALS}
     * @returns { On } - **On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     * @test
     */
    description(val: string, pattern?: MatchPattern): On;
    /**
     * 指定目标组件的**id**属性和匹配模式。
     *
     * @param { string } id - 组件ID。<!--RP2--><!--RP2End-->
     * @param { MatchPattern } pattern - 文本匹配模式{@link MatchPattern}。
     * @returns { On } - 匹配目标组件ID属性的**On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    id(id: string, pattern: MatchPattern): On;
    /**
     * 指定目标组件的**type**属性和匹配模式。
     *
     * @param { string } tp - 组件类型。<!--RP2--><!--RP2End-->
     * @param { MatchPattern } pattern - 文本匹配模式{@link MatchPattern}。
     * @returns { On } - 匹配目标组件类型属性的**On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    type(tp: string, pattern: MatchPattern): On;
    /**
     * 获取指定提示文本的组件对象并返回**On**对象。
     *
     * @param { string } val - 组件的指定提示文本。<!--RP2--><!--RP2End-->
     * @param { MatchPattern } [pattern] - 匹配模式{@link MatchPattern}。
     *     <br>默认值：{@link MatchPattern.EQUALS}
     * @returns { On } - 指定提示文本组件的**On**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    hint(val: string, pattern?: MatchPattern): On;

    /**
     * 指定组件的文本内容和文本匹配模式。
     * 
     * > **说明：**
     * >
     * > 如果组件的[accessibilityLevel]{@link ./@internal/component/ets/common:CommonMethod#accessibilityLevel}
     * > 设置为**no**或**no-hide-descendants**，可以使用此API指定目标组件的文本属性来查找组件。
     * > 此时[On.text()]{@link On#text} API不生效。
     *
     * @param { string } text - 组件文本，用于匹配目标组件。<!--RP2--><!--RP2End-->
     * @param { MatchPattern } [pattern] - 匹配模式{@link MatchPattern}。
     *     <br>默认值：{@link MatchPattern.EQUALS}
     * @returns { On } - 匹配目标组件文本属性的**On**对象。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    originalText(text: string, pattern?: MatchPattern): On;
}

/**
 * 表示UI上的组件，提供获取组件属性、单击组件、滚动查找组件和文本注入的API。
 * 此类中提供的所有API都使用Promise返回结果，必须使用**await**调用。
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
     * 单击此组件。该API使用Promise返回结果。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    click(): Promise<void>;

    /**
     * 双击此组件。该API使用Promise返回结果。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    doubleClick(): Promise<void>;

    /**
     * 长按此组件。该API使用Promise返回结果。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    longClick(): Promise<void>;

    /**
     * 获取此组件的ID。该API使用Promise返回结果。
     *
     * @returns { Promise<string> } - 用于返回组件ID的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    getId(): Promise<string>;

    /**
     * 获取组件所属的显示ID。该API使用Promise返回结果。
     *
     * @returns { Promise<int> } - 用于返回组件所属显示ID的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    getDisplayId(): Promise<int>;

    /**
     * 获取此组件的文本信息。该API使用Promise返回结果。
     * 
     * > **说明：**
     * >
     * > 如果组件的[accessibilityLevel]{@link ./@internal/component/ets/common:CommonMethod#accessibilityLevel}
     * > 属性设置为**no**或**no-hide-descendants**，则无法使用此API获取组件的文本信息。
     * > 此时可以使用[Component.getOriginalText()]{@link Component#getOriginalText}替代。
     *
     * @returns { Promise<string> } - 用于返回组件文本信息的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    getText(): Promise<string>;

    /**
     * 获取此组件的类型。该API使用Promise返回结果。
     *
     * @returns { Promise<string> } - 用于返回组件类型的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    getType(): Promise<string>;

    /**
     * 获取此组件的可点击状态。该API使用Promise返回结果。
     *
     * @returns { Promise<boolean> } - 用于返回组件对象是否可点击的Promise对象。
     *     值**true**表示组件可点击，**false**表示不可点击。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    isClickable(): Promise<boolean>;

    /**
     * 获取此组件的可长按状态。该API使用Promise返回结果。
     *
     * @returns { Promise<boolean> } - 用于返回组件对象是否可长按的Promise对象。
     *     值**true**表示组件可长按，**false**表示不可长按。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    isLongClickable(): Promise<boolean>;

    /**
     * 获取此组件的可滚动状态。该API使用Promise返回结果。
     *
     * @returns { Promise<boolean> } - 用于返回组件对象是否可滚动的Promise对象。
     *     值**true**表示组件可滚动，**false**表示不可滚动。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    isScrollable(): Promise<boolean>;

    /**
     * 获取此组件的可用状态。该API使用Promise返回结果。
     *
     * @returns { Promise<boolean> } - 用于返回组件是否可用的Promise对象。
     *     值**true**表示组件可用，**false**表示不可用。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    isEnabled(): Promise<boolean>;

    /**
     * 检查组件是否已聚焦。该API使用Promise返回结果。
     *
     * @returns { Promise<boolean> } - 用于返回组件是否聚焦的Promise对象。
     *     值**true**表示组件已聚焦，**false**表示未聚焦。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    isFocused(): Promise<boolean>;

    /**
     * 获取此组件的选中状态。该API使用Promise返回结果。
     *
     * @returns { Promise<boolean> } - 用于返回组件是否选中的Promise对象。
     *     值**true**表示组件已选中，**false**表示未选中。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    isSelected(): Promise<boolean>;

    /**
     * 获取此组件的勾选状态。该API使用Promise返回结果。
     *
     * @returns { Promise<boolean> } - 用于返回组件对象勾选状态的Promise对象。
     *     值**true**表示组件已勾选，**false**表示未勾选。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    isChecked(): Promise<boolean>;

    /**
     * 获取此组件的可勾选状态。该API使用Promise返回结果。
     *
     * @returns { Promise<boolean> } - 用于返回组件对象是否可勾选的Promise对象。
     *     值**true**表示组件可勾选，**false**表示不可勾选。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    isCheckable(): Promise<boolean>;

    /**
     * 清除组件中的原文本并输入指定文本。该API仅对可编辑文本组件生效。该API使用Promise返回结果。
     *
     * @param { string } text - 输入文本。目前支持英文、中文和特殊字符。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    inputText(text: string): Promise<void>;

    /**
     * 以指定文本输入模式向组件输入文本。该API仅对可编辑文本组件生效。该API使用Promise返回结果。
     *
     * @param { string } text - 输入文本。目前支持英文、中文和特殊字符。
     * @param { InputTextMode } mode - 文本输入模式。
     *     详见[InputTextMode]{@link InputTextMode}。
     *     <br>**注意**：如果**InputTextMode.addition**设置为**true**，则指定文本将追加到组件现有文本末尾。
     *     否则，指定文本将覆盖组件现有文本。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 801 - 能力不支持。由于设备能力限制，功能无法正常工作。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    inputText(text: string, mode: InputTextMode): Promise<void>;

    /**
     * 清除组件的文本信息。该API仅对可编辑文本组件生效。该API使用Promise返回结果。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    clearText(): Promise<void>;

    /**
     * 滚动到此组件的顶部。该API适用于支持滚动的组件。该API使用Promise返回结果。
     *
     * @param { int } [speed] - 滚动速度。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码401。
     *     <br>默认值：600
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.参数类型错误；2.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    scrollToTop(speed?: int): Promise<void>;

    /**
     * 滚动到此组件的底部。该API适用于支持滚动的组件。该API使用Promise返回结果。
     *
     * @param { int } [speed] - 滚动速度。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码401。
     *     <br>默认值：600
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.参数类型错误；2.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    scrollToBottom(speed?: int): Promise<void>;

    /**
     * 获取此组件的边界信息。该API使用Promise返回结果。
     *
     * @returns { Promise<Rect> } - 用于返回组件对象边界信息的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    getBounds(): Promise<Rect>;

    /**
     * 在此组件上滚动查找目标组件。该API适用于支持滚动的组件。该API使用Promise返回结果。
     *
     * @param { On } on - 目标组件的属性。
     * @returns { Promise<Component> } - 用于返回目标组件的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @test
     */
    scrollSearch(on: On): Promise<Component>;

    /**
     * 获取此组件所占区域的中心点。该API使用Promise返回结果。
     *
     * @returns { Promise<Point> } - 用于返回组件对象所占区域中心点的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    getBoundsCenter(): Promise<Point>;

    /**
     * 将此组件拖动到目标组件。该API使用Promise返回结果。
     *
     * @param { Component } target - 目标组件。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    dragTo(target: Component): Promise<void>;

    /**
     * 以指定比例对此组件执行双指张开操作。该API使用Promise返回结果。
     *
     * @param { double } scale - 缩放因子，为大于1的值。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    pinchOut(scale: double): Promise<void>;
    /**
     * 以指定比例对此组件执行双指捏合操作。该API使用Promise返回结果。
     *
     * @param { double } scale - 缩放因子，为0到1之间的值。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    pinchIn(scale: double): Promise<void>;

    /**
     * 获取此组件的描述。该API使用Promise返回结果。
     *
     * @returns { Promise<string> } - 用于返回组件描述的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     * @test
     */
    getDescription(): Promise<string>;
    /**
     * 获取组件的提示文本。该API使用Promise返回结果。
     *
     * @returns { Promise<string> } - 用于返回组件提示文本的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    getHint(): Promise<string>;
    /**
     * 在此组件上滚动查找目标组件。该API适用于支持滚动的组件。可以指定滚动方向和滚动起止点与组件边界的偏移量。
     * 该API使用Promise返回结果。
     *
     * @param { On } on - 目标组件的属性。
     * @param { boolean } [vertical] - 搜索方向是否为垂直方向。默认值**true**表示搜索方向为垂直方向。
     *     **false**表示搜索方向为水平方向。
     * @param { number } [offset] - 滚动起止点与组件边界的偏移量，单位为像素。默认值为**80**。
     *     该值为大于或等于0的整数。
     *     <br>默认值：80
     *     <br>单位：px
     * @returns { Promise<Component> } - 用于返回目标组件的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 18 dynamic
     * @test
     */
    scrollSearch(on: On, vertical?: boolean, offset?: number): Promise<Component>;
    /**
     * 在此{@link Component}上滚动查找匹配的{@link Component}，适用于可滚动组件。
     *
     * @param { On } on - 目标{@link Component}的属性要求。
     * @param { boolean } [vertical] - 滑动方向是否为垂直方向。
     *     <br>默认值：true
     * @param { int } [offset] - 滑动起止点与组件边界的偏移量
     *     <br>单位：px
     *     <br>默认值：80
     * @returns { Promise<Component | null> } 查找结果，如果未找到则返回null。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    scrollSearch(on: On, vertical?: boolean, offset?: int): Promise<Component | null>;
    /**
     * 获取此组件的文本信息。该API使用Promise返回结果。如果组件的
     * [accessibilityLevel]{@link ./@internal/component/ets/common:CommonMethod#accessibilityLevel}
     * 属性设置为**no**或**no-hide-descendants**，可以使用此API获取组件的文本信息，
     * 但[Component.getText()]{@link Component#getText}无法获取。
     *
     * @returns { Promise<string> } - 用于返回组件文本信息的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    getOriginalText(): Promise<string>;
}

/**
 * **Driver**类是UiTest框架的主要入口。它提供组件匹配/查找、按键注入、坐标单击/滑动和截图等功能的API。
 * 此类提供的所有API（除**Driver.create()**外）都使用Promise返回结果，必须使用**await**调用。
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
     * 创建**Driver**对象并返回创建的对象。该API为静态API。
     *
     * @returns { Driver } - 创建的**{@link Driver}**对象。
     * @throws { BusinessError } 17000001 - 初始化失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    static create(): Driver;

    /**
     * 延迟执行指定持续时间。该API使用Promise返回结果。
     *
     * @param { int } duration - 指定时间，单位为ms。该值为大于或等于0的整数。
     *     <br>单位：ms
     *     <br>取值范围：值应 >= 0
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    delayMs(duration: int): Promise<void>;

    /**
     * 根据指定属性查找目标组件。该API使用Promise返回结果。
     *
     * @param { On } on - 目标{@link Component}的属性。
     * @returns { Promise<Component> } - 用于返回{@link Component}或undefined的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @test
     */
    findComponent(on: On): Promise<Component>;
    /**
     * 在当前UI上查找第一个匹配的{@link Component}。
     *
     * @param { On } on - 目标{@link Component}的属性要求。
     * @returns { Promise<Component | null> } 第一个匹配的{@link Component}或undefined。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    findComponent(on: On): Promise<Component | null>;
    /**
     * 根据指定属性查找窗口。该API使用Promise返回结果。
     *
     * @param { WindowFilter } filter - 目标{@link UiWindow}的属性。
     * @returns { Promise<UiWindow> } - 用于返回目标{@link UiWindow}的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @test
     */
    findWindow(filter: WindowFilter): Promise<UiWindow>;
    /**
     * 查找第一个匹配的{@link UiWindow}窗口。
     *
     * @param { WindowFilter } filter - 目标{@link UiWindow}的过滤条件。
     * @returns { Promise<UiWindow | null> } 第一个匹配的{@link UiWindow}或undefined。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    findWindow(filter: WindowFilter): Promise<UiWindow | null>;
    /**
     * 在指定时间内根据属性查找目标组件。该API使用Promise返回结果。
     *
     * @param { On } on - 目标{@link Component}的属性。
     * @param { number } time - 查找目标{@link Component}的持续时间，单位为ms。该值为大于或等于0的整数。
     *     <br>单位：ms
     *     <br>取值范围：值应 >= 0
     * @returns { Promise<Component> } 第一个匹配的{@link Component}或undefined。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 26.0.0]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @test
     */
    waitForComponent(on: On, time: number): Promise<Component>;
    /**
     * 在给定时间内查找当前UI上第一个匹配的{@link Component}。
     *
     * @param { On } on - 目标{@link Component}的属性要求。
     * @param { int } time - 查找持续时间，单位为毫秒。
     *     <br>取值范围：值应 >= 0
     *     <br>单位：ms
     * @returns { Promise<Component | null> } 第一个匹配的{@link Component}或undefined。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    waitForComponent(on: On, time: int): Promise<Component | null>;
    /**
     * 根据指定属性查找所有匹配的组件并保存到列表中。该API使用Promise返回结果。
     *
     * @param { On } on - 目标{@link Component}的属性。
     * @returns { Promise<Array<Component>> } - 用于返回{@link Component}列表的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @test
     */
    findComponents(on: On): Promise<Array<Component>>;
    /**
     * 查找当前UI上所有匹配的{@link Component}。
     *
     * @param { On } on - 目标{@link Component}的属性要求。
     * @returns { Promise<Array<Component> | null> } 匹配的{@link Component}列表。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    findComponents(on: On): Promise<Array<Component> | null>;
    /**
     * 断言当前页面上是否存在与指定属性匹配的组件。该API使用Promise返回结果。
     *
     * @param { On } on - 目标{@link Component}的属性。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000003 - 断言失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    assertComponentExist(on: On): Promise<void>;

    /**
     * 按下返回键。该API使用Promise返回结果。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    pressBack(): Promise<void>;

    /**
     * 在指定屏幕上按下返回键。该API使用Promise返回结果。
     *
     * @param { int } displayId - 显示ID。该值为大于或等于0的整数。
     *     <br>**注意**：如果输入的**displayId**不存在，将上报异常**17000007**。
     * @returns { Promise<void> } 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    pressBack(displayId: int): Promise<void>;

    /**
     * 通过传入键值触发按键事件。该API使用Promise返回结果。
     *
     * @param { int } keyCode - 键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    triggerKey(keyCode: int): Promise<void>;

    /**
     * 在指定屏幕上通过传入键值触发按键事件。该API使用Promise返回结果。
     *
     * @param { int } keyCode - 键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     * @param { int } displayId - 显示ID。该值为大于或等于0的整数。
     *     <br>**注意**：如果输入的**displayId**不存在，将上报异常**401**。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    triggerKey(keyCode: int, displayId: int): Promise<void>;

    /**
     * 根据指定键值触发组合键事件。该API使用Promise返回结果。
     * 例如，如果**Key**的值为(2072, 2019)，则找到并单击匹配的组合键**Ctrl+C**。
     *
     * @param { number } key0 - 第一个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     * @param { number } key1 - 第二个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     * @param { number } [key2] - 第三个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *     <br>默认值：0
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @test
     */
    triggerCombineKeys(key0: number, key1: number, key2?: number): Promise<void>;

    /**
     * 在指定屏幕上根据指定键值触发组合键事件。该API使用Promise返回结果。
     * 例如，如果**Key**的值为(2072, 2019)，则找到并单击匹配的组合键**Ctrl+C**。
     *
     * @param { int } key0 - 第一个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     * @param { int } key1 - 第二个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     * @param { int } [key2] - 第三个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *     <br>默认值：0
     * @param { int } [displayId] - 显示ID。该值为大于或等于0的整数。默认值为设备的默认显示ID。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    triggerCombineKeys(key0: int, key1: int, key2?: int, displayId?: int): Promise<void>;

    /**
     * 单击目标坐标点。该API使用Promise返回结果。
     *
     * @param { int } x - 数值，表示目标点的水平坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { int } y - 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    click(x: int, y: int): Promise<void>;

    /**
     * 双击目标坐标点。该API使用Promise返回结果。
     *
     * @param { int } x - 数值，表示目标点的水平坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { int } y - 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    doubleClick(x: int, y: int): Promise<void>;

    /**
     * 长按目标坐标点。该API使用Promise返回结果。
     *
     * @param { int } x - 数值，表示目标点的水平坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { int } y - 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    longClick(x: int, y: int): Promise<void>;

    /**
     * 从起始坐标点滑动到目标坐标点。该API使用Promise返回结果。
     *
     * @param { int } startx - 数值，表示起点的水平坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { int } starty - 数值，表示起点的垂直坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { int } endx - 数值，表示目标点的水平坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { int } endy - 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { int } [speed] - 滑动速度，单位为px/s。取值范围为200到40000。如果设置的值不在范围内，
     *     将使用默认值**600**。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码401。
     *     <br>默认值：600
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    swipe(startx: int, starty: int, endx: int, endy: int, speed?: int): Promise<void>;

    /**
     * 从起始坐标点拖动到目标坐标点。该API使用Promise返回结果。
     *
     * @param { int } startx - 数值，表示起点的水平坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { int } starty - 数值，表示起点的垂直坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { int } endx - 数值，表示目标点的水平坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { int } endy - 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { int } [speed] - 拖动速度，单位为px/s。取值范围为200到40000。如果设置的值不在范围内，
     *     将使用默认值**600**。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码401。
     *     <br>默认值：600
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 26.0.0]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    drag(startx: int, starty: int, endx: int, endy: int, speed?: int): Promise<void>;

    /**
     * 单击目标坐标点。该API使用Promise返回结果。
     *
     * @param { Point } point - Point对象，用于传递目标点信息。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    clickAt(point: Point): Promise<void>;
    /**
     * 在屏幕指定位置单击，可设置触摸选项。
     *
     * @param { Point } point - 手指触摸屏幕的坐标点。
     * @param { TouchOptions } [options] - 单击操作的选项。
     *                           仅'pressure'属性适用于此方法。
     *                           设置其他属性将导致BusinessError 17000007。
     *                           默认值：参考TouchOptions的默认值。
     * @returns { Promise<void> }
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    clickAt(point: Point, options?: TouchOptions): Promise<void>;
    /**
     * 双击目标坐标点。该API使用Promise返回结果。
     *
     * @param { Point } point - Point对象，用于传递目标点信息。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    doubleClickAt(point: Point): Promise<void>;

    /**
     * 在目标坐标点长按指定持续时间。该API使用Promise返回结果。
     *
     * @param { Point } point - Point对象，用于传递目标点信息。
     * @param { int } [duration] - 长按持续时间，单位为ms。
     *     <br>取值范围：值应 >= 1500
     *     <br>单位：ms
     *     <br>默认值：1500
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    longClickAt(point: Point, duration?: int): Promise<void>;
    /**
     * 在屏幕指定位置长按，可设置触摸选项。
     *
     * @param { Point } point - 手指触摸屏幕的坐标点。
     * @param { TouchOptions } [options] - 长按操作的选项。
     *                         仅'duration'和'pressure'属性适用于此方法。
     *                         设置其他属性将导致BusinessError 17000007。
     *                         默认值：参考TouchOptions的默认值。
     * @returns { Promise<void> }
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    longClickAt(point: Point, options?: TouchOptions): Promise<void>;
    /**
     * 从起始坐标点滑动到目标坐标点。该API使用Promise返回结果。
     *
     * @param { Point } from - Point对象，传递起点坐标和起点所属的显示ID。
     * @param { Point } to - Point对象，传递目标点坐标和目标点所属的显示ID。
     *     <br>**注意**：目标点和起点必须在同一屏幕上。否则将抛出**17000007**异常。
     * @param { int } [speed] - 滑动速度，单位为px/s。取值范围为200到40000。如果设置的值不在范围内，
     *     将使用默认值**600**。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码17000007。
     *     <br>默认值：600
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    swipeBetween(from: Point, to: Point, speed?: int): Promise<void>;
    /**
     * 在屏幕指定点之间滑动，可设置触摸选项。
     *
     * @param { Point } from - 手指触摸屏幕的坐标点。
     * @param { Point } to - 手指离开屏幕的坐标点。
     * @param { TouchOptions } [options] - 滑动操作的选项。
     *                                仅'speed'和'pressure'属性适用于此方法。
     *                                设置其他属性将导致BusinessError 17000007。
     *                                默认值：参考TouchOptions的默认值。
     * @returns { Promise<void> }
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    swipeBetween(from: Point, to: Point, options?: TouchOptions): Promise<void>;
    /**
     * 从起点拖动到目标点。可以指定拖动速度和拖动前的点击持续时间。该API使用Promise返回结果。
     *
     * @param { Point } from - Point对象，传递起点坐标和起点所属的显示ID。
     * @param { Point } to - Point对象，传递目标点坐标和目标点所属的显示ID。
     *     <br>**注意**：目标点和起点必须在同一屏幕上。否则将抛出**17000007**异常。
     * @param { int } [speed] - 拖动速度，单位为px/s。取值范围为200到40000。如果设置的值不在范围内，
     *     将使用默认值**600**。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码17000007。
     *     <br>默认值：600
     * @param { int } [duration] - 拖动前长按的持续时间。
     *     <br>取值范围：值应 >= 1500
     *     <br>单位：ms
     *     <br>默认值：1500
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    dragBetween(from: Point, to: Point, speed?: int, duration?: int): Promise<void>;
    /**
     * 在屏幕指定点之间拖动，可设置选项。
     *
     * @param { Point } from - 手指触摸屏幕的坐标点。
     * @param { Point } to - 手指离开屏幕的坐标点。
     * @param { TouchOptions } [options] - 拖动操作的选项。
     *                         仅'pressure'、'speed'和'duration'属性适用于此方法。
     *                         设置其他属性将导致BusinessError 17000007。
     *                         默认值：参考TouchOptions的默认值。
     * @returns { Promise<void> }
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    dragBetween(from: Point, to: Point, options?: TouchOptions): Promise<void>;
    /**
     * 截取当前屏幕并保存为PNG图像到给定的保存路径。该API使用Promise返回结果。
     * 该API可用于支持截图的场景。
     *
     * @param { string } savePath - 文件保存路径。路径必须为当前应用的
     *     [沙箱路径](docroot://file-management/app-sandbox-directory.md)。
     * @returns { Promise<boolean> } - 用于返回截图操作是否成功的Promise对象。
     *     值**true**表示操作成功，**false**表示失败。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    screenCap(savePath: string): Promise<boolean>;

    /**
     * 截取指定屏幕并保存为PNG图像到给定的保存路径。该API使用Promise返回结果。
     * 该API可用于支持截图的场景。
     *
     * @param { string } savePath - 文件保存路径。路径必须为当前应用的
     *     [沙箱路径](docroot://file-management/app-sandbox-directory.md)。
     * @param { int } displayId - 显示ID。该值为大于或等于0的整数。
     *     <br>**注意**：如果输入的**displayId**不存在，将上报异常**401**。
     * @returns { Promise<boolean> } 用于返回截图操作是否成功的Promise对象。值
     *     **true**表示截图操作成功，**false**表示失败。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    screenCap(savePath: string, displayId: int): Promise<boolean>;

    /**
     * 获取当前布局信息并以json格式保存为文件。
     *
     * @param { string } savePath - 存储json的路径，必须在应用沙箱目录中。
     *     路径必须为当前应用的[沙箱路径](docroot://file-management/app-sandbox-directory.md)。
     * @param { int } [displayId] - 指定显示的ID，默认为主屏幕的displayId。
     * @returns { Promise<boolean> } 如果成功完成转储布局和文件存储则返回true，否则返回false。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    dumpLayout(savePath: string, displayId?: int): Promise<boolean>;
    /**
     * 设置当前场景的显示旋转方向。该API使用Promise返回结果。适用于可旋转场景。
     *
     * @param { DisplayRotation } rotation - 设备的显示旋转方向。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 26.0.0]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    setDisplayRotation(rotation: DisplayRotation): Promise<void>;

    /**
     * 获取当前设备的显示旋转方向。该API使用Promise返回结果。
     *
     * @returns { Promise<DisplayRotation> } - 用于返回当前设备显示旋转方向的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    getDisplayRotation(): Promise<DisplayRotation>;

    /**
     * 获取指定设备的显示旋转方向。该API使用Promise返回结果。
     *
     * @param { int } displayId - 显示ID。该值为大于或等于0的整数。
     *     <br>**注意**：如果输入的**displayId**不存在，将上报异常**17000007**。
     * @returns { Promise<DisplayRotation> } - 用于返回指定设备显示旋转方向的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    getDisplayRotation(displayId: int): Promise<DisplayRotation>;

    /**
     * 启用或禁用显示旋转。该API使用Promise返回结果。
     *
     * @param { boolean } enabled - 屏幕是否可以旋转。值**true**表示屏幕可以旋转，**false**表示不可旋转。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    setDisplayRotationEnabled(enabled: boolean): Promise<void>;

    /**
     * 获取当前设备的显示大小。该API使用Promise返回结果。
     *
     * @returns { Promise<Point> } - 用于返回**Point**对象的Promise对象。
     *     当前设备屏幕大小为**Point.x * Point.y**。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 26.0.0]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    getDisplaySize(): Promise<Point>;

    /**
     * 获取当前设备指定显示的大小。该API使用Promise返回结果。
     *
     * @param { int } displayId - 显示ID。该值为大于或等于0的整数。
     *     <br>**注意**：如果输入的**displayId**不存在，将上报异常**17000007**。
     * @returns { Promise<Point> } 用于返回**Point**对象的Promise对象。指定显示的大小为
     *     **Point.x * Point.y**。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 26.0.0]
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    getDisplaySize(displayId: int): Promise<Point>;

    /**
     * 获取当前设备的显示密度。该API使用Promise返回结果。
     *
     * @returns { Promise<Point> } 用于返回**Point**对象的Promise对象。当前设备显示密度为
     *     **Point.x*Point.y**。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    getDisplayDensity(): Promise<Point>;

    /**
     * 获取当前设备指定显示的密度。该API使用Promise返回结果。
     *
     * @param { int } displayId - 显示ID。该值为大于或等于0的整数。
     *     <br>**注意**：如果输入的**displayId**不存在，将上报异常**17000007**。
     * @returns { Promise<Point> } 用于返回**Point**对象的Promise对象。指定显示的密度为
     *     **Point.x*Point.y**。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    getDisplayDensity(displayId: int): Promise<Point>;

    /**
     * 唤醒当前显示。该API使用Promise返回结果。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    wakeUpDisplay(): Promise<void>;

    /**
     * 在设备上注入返回主屏幕的操作。该API使用Promise返回结果。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    pressHome(): Promise<void>;

    /**
     * 在指定显示上注入返回主屏幕的操作。该API使用Promise返回结果。
     *
     * @param { int } displayId - 显示ID。该值为大于或等于0的整数。
     *     <br>**注意**：如果输入的**displayId**不存在，将上报异常**17000007**。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    pressHome(displayId: int): Promise<void>;

    /**
     * 检查当前UI上的所有组件是否处于空闲状态。该API使用Promise返回结果。
     *
     * @param { int } idleTime - 空闲时间阈值，单位为ms。如果组件保持不活跃的持续时间达到此阈值，
     *     则认为其处于空闲状态。该值必须为大于或等于0的整数。
     *     <br>单位：ms
     * @param { int } timeout - 最大等待时间，单位为毫秒。该值为大于或等于0的整数。
     *     <br>单位：ms
     * @returns { Promise<boolean> } - 用于返回当前UI上所有组件是否处于空闲状态的Promise对象。
     *     值true表示当前UI上所有组件处于空闲状态，false表示相反。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 26.0.0]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    waitForIdle(idleTime: int, timeout: int): Promise<boolean>;

    /**
     * 模拟fling操作。该API使用Promise返回结果。
     *
     * @param { Point } from - 手指触摸屏幕的点的坐标。
     * @param { Point } to - 手指离开屏幕的点的坐标。
     * @param { int } stepLen - 步长，单位为像素。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { int } speed - fling速度，单位为px/s。取值范围为200到40000。如果设置的值不在范围内，
     *     将使用默认值**600**。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码17000007。
     *     <br>默认值：600
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    fling(from: Point, to: Point, stepLen: int, speed: int): Promise<void>;

    /**
     * 向设备注入多指操作。该API使用Promise返回结果。
     *
     * @param { PointerMatrix } pointers - 滚动轨迹，包括手指数和沿轨迹的坐标数组。
     * @param { int } [speed] - 指针动作速度，单位为px/s。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码401。
     *     <br>默认值：600
     * @returns { Promise<boolean> } - 用于返回操作是否成功的Promise对象。
     *     值**true**表示操作成功，**false**表示失败。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    injectMultiPointerAction(pointers: PointerMatrix, speed?: int): Promise<boolean>;

    /**
     * 模拟指定方向和速度的fling操作。该API使用Promise返回结果。
     *
     * @param { UiDirection } direction - fling操作的方向。
     * @param { int } speed - 滚动速度。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码401。
     *     <br>默认值：600
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     * @test
     */
    fling(direction: UiDirection, speed: int): Promise<void>;

    /**
     * 在指定显示上模拟指定方向和速度的fling操作。该API使用Promise返回结果。
     *
     * @param { UiDirection } direction - fling操作的方向。
     * @param { int } speed - fling速度，单位为px/s。取值范围为200到40000。如果设置的值不在范围内，
     *     将使用默认值**600**。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码401。
     *     <br>默认值：600
     * @param { int } displayId - 显示ID。该值为大于或等于0的整数。
     *     <br>**注意**：如果输入的**displayId**不存在，将上报异常**401**。
     * @returns { Promise<void> } 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    fling(direction: UiDirection, speed: int, displayId: int): Promise<void>;

    /**
     * 在指定坐标处注入鼠标单击动作，可选按键或组合键。该API使用Promise返回结果。
     * 例如，如果**key1**的值为**2072**，则鼠标单击时按下**Ctrl**键。
     *
     * @param { Point } p - 鼠标单击的坐标。
     * @param { MouseButton } btnId - 按下的鼠标按键。
     * @param { int } [key1] - 第一个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *     <br>默认值：0
     * @param { int } [key2] - 第二个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *     <br>默认值：0
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     * @test
     */
    mouseClick(p: Point, btnId: MouseButton, key1?: int, key2?: int): Promise<void>;

    /**
     * 将鼠标光标移动到目标点。该API使用Promise返回结果。
     *
     * @param { Point } p - 终点坐标。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     * @test
     */
    mouseMoveTo(p: Point): Promise<void>;

    /**
     * 在指定坐标处注入鼠标滚轮滚动动作，可选按键或组合键。该API使用Promise返回结果。
     * 例如，如果**key1**的值为**2072**，则鼠标滚动时按下**Ctrl**键。
     *
     * @param { Point } p - 鼠标单击的坐标。
     * @param { boolean } down - 鼠标滚轮是否向下滚动。值**true**表示鼠标滚轮向下滚动，**false**表示向上滚动。
     * @param { number } d - 鼠标滚轮滚动的刻度数。一个刻度表示滚动120 px。
     *     该值为大于或等于0的整数。
     *     <br>取值范围：值应 >= 0
     *     <br>单位：px
     * @param { number } [key1] - 第一个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *     <br>默认值：0
     * @param { number } [key2] - 第二个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *     <br>默认值：0
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @test
     */
    mouseScroll(p: Point, down: boolean, d: number, key1?: number, key2?: number): Promise<void>;

    /**
     * 在指定坐标处注入鼠标滚轮滚动动作，可选按键或组合键及指定滚动速度。该API使用Promise返回结果。
     *
     * @param { Point } p - 鼠标单击的坐标。
     * @param { boolean } down - 鼠标滚轮是否向下滚动。值**true**表示鼠标滚轮向下滚动，**false**表示向上滚动。
     * @param { int } d - 鼠标滚轮滚动的刻度数。一个刻度表示滚动120 px。该值为大于或等于0的整数。
     *     <br>单位：cell
     * @param { int } [key1] - 第一个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *     <br>默认值：0
     * @param { int } [key2] - 第二个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *     <br>默认值：0
     * @param { int } [speed] - 鼠标滚轮滚动速度。
     *     <br>取值范围：[1, 500]
     *     <br>单位：ticks/s
     *     <br>如果为负数则抛出错误码401。
     *     <br>默认值：20
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     * @test
     */
    mouseScroll(p: Point, down: boolean, d: int, key1?: int, key2?: int, speed?: int): Promise<void>;

    /**
     * 截取当前屏幕的指定区域并将截图保存为PNG图像到指定路径。该API使用Promise返回结果。
     * 该API可用于支持截图的场景。
     *
     * @param { string } savePath - 文件保存路径。路径必须为当前应用的
     *     [沙箱路径](docroot://file-management/app-sandbox-directory.md)。
     * @param { Rect } [rect] - 要截取的屏幕区域。默认值为整个屏幕。
     * @returns { Promise<boolean> } - 用于返回截图操作是否成功的Promise对象。
     *     值**true**表示截图操作成功，**false**表示失败。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 26.0.0]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     * @test
     */
    screenCapture(savePath: string, rect?: Rect): Promise<boolean>;

    /**
     * 创建UI事件监听器{@link UIEventObserver}。
     *
     * @returns { UIEventObserver } - UI事件监听器{@link UIEventObserver}。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     * @test
     */
    createUIEventObserver(): UIEventObserver;

    /**
     * 在指定坐标处注入双击动作，可选按键或组合键。该API使用Promise返回结果。
     * 例如，如果**key**的值为**2072**，则双击时按下**Ctrl**键。
     *
     * @param { Point } p - 双击的坐标。
     * @param { MouseButton } btnId - 按下的鼠标按键。
     * @param { int } [key1] - 第一个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *     <br>默认值：0
     * @param { int } [key2] - 第二个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *     <br>默认值：0
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     * @test
     */
    mouseDoubleClick(p: Point, btnId: MouseButton, key1?: int, key2?: int): Promise<void>;

    /**
     * 在指定坐标处注入鼠标长按动作，可选按键或组合键。该API使用Promise返回结果。
     * 例如，如果**Key**的值为**2072**，则在指定坐标处执行鼠标长按，同时按住**Ctrl**键。
     *
     * @param { Point } p - 鼠标设备长按的坐标。
     * @param { MouseButton } btnId - 按下的鼠标按键。
     * @param { number } [key1] - 第一个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *     <br>默认值：0
     * @param { number } [key2] - 第二个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *     <br>默认值：0
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 11 dynamic
     * @test
     */
    mouseLongClick(p: Point, btnId: MouseButton, key1?: number, key2?: number): Promise<void>;

    /**
     * 在指定坐标处注入鼠标长按动作，可选按键或组合键及指定持续时间。该API使用Promise返回结果。
     * 例如，如果**Key**的值为**2072**，则在指定坐标处执行鼠标长按，同时按住**Ctrl**键。
     *
     * @param { Point } p - 鼠标设备长按的坐标。
     * @param { MouseButton } btnId - 按下的鼠标按键。
     * @param { int } [key1] - 第一个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *     <br>默认值：0
     * @param { int } [key2] - 第二个键值。该值为大于或等于0的整数。
     *     详见[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *     <br>默认值：0
     * @param { int } [duration] - 长按持续时间。
     *     <br>取值范围：值应 >= 1500
     *     <br>单位：ms
     *     <br>默认值：1500
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    mouseLongClick(p: Point, btnId: MouseButton, key1?: int, key2?: int, duration?: int): Promise<void>;

    /**
     * 将鼠标指针从起点移动到终点。该API使用Promise返回结果。
     *
     * @param { Point } from - 起点坐标。
     * @param { Point } to - 终点坐标。
     * @param { int } [speed] - 鼠标移动速度。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码401。
     *     <br>默认值：600
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     * @test
     */
    mouseMoveWithTrack(from: Point, to: Point, speed?: int): Promise<void>;

    /**
     * 将鼠标指针从起点拖动到终点。该API使用Promise返回结果。
     *
     * @param { Point } from - 起点坐标。
     * @param { Point } to - 终点坐标。
     * @param { number } [speed] - 鼠标拖动速度。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码401。
     *     <br>默认值：600
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 11 dynamic
     * @test
     */
    mouseDrag(from: Point, to: Point, speed?: number): Promise<void>;

    /**
     * 将鼠标从起点拖动到终点。可以指定拖动速度和拖动前的持续时间。该API使用Promise返回结果。
     *
     * @param { Point } from - 起点坐标。
     * @param { Point } to - 终点坐标。
     * @param { int } [speed] - 鼠标拖动速度。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码401。
     *     <br>默认值：600
     * @param { int } [duration] - 拖动前长按的持续时间。
     *     <br>取值范围：值应 >= 1500
     *     <br>单位：ms
     *     <br>默认值：1500
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    mouseDrag(from: Point, to: Point, speed?: int, duration?: int): Promise<void>;

    /**
     * 按住鼠标左键在屏幕指定点之间拖动，可设置触摸和按键选项。
     *
     * @param { Point } from - 起始点。
     * @param { Point } to - 结束点。
     * @param { TouchOptions } [touchOptions] - 用于速度和持续时间设置的触摸选项。
     *                                    此方法中仅'speed'和'duration'属性有效。
     *                                    设置其他属性将导致BusinessError 17000007。
     *                                    默认值：参考TouchOptions的默认值。
     * @param { KeyOptions } [keyOptions] - 拖动期间按下的键码选项。
     *                                    默认值：参考keyOptions的默认值。
     * @returns { Promise<void> }
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    mouseDrag(from: Point, to: Point, touchOptions?: TouchOptions, keyOptions?: KeyOptions): Promise<void>;

    /**
     * 在指定坐标处输入文本，不清除组件中的原文本。该API使用Promise返回结果。
     *
     * @param { Point } p - 目标坐标。
     * @param { string } text - 输入文本。目前支持英文、中文和特殊字符。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     * @test
     */
    inputText(p: Point, text: string): Promise<void>;

    /**
     * 在指定坐标点以指定输入模式输入文本。该API使用Promise返回结果。
     *
     * @param { Point } p - 目标坐标。
     * @param { string } text - 输入文本。目前支持英文、中文和特殊字符。
     * @param { InputTextMode } mode - 文本输入模式。
     *     详见[InputTextMode]{@link InputTextMode}。
     *      **说明**
     *     
     *      如果**InputTextMode.addition**设置为**true**，则光标移动到文本末尾并输入指定文本。
     *     如果值为**false**，则在坐标点输入指定文本。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 801 能力不支持。由于设备能力限制，功能无法正常工作。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    inputText(p: Point, text: string, mode: InputTextMode): Promise<void>;

    /**
     * 模拟触控板上的多指滑动手势。该API使用Promise返回结果。
     *
     * @param { int } fingers - 手指数。值可以为3或4。
     * @param { UiDirection } direction - 滑动方向。
     * @param { TouchPadSwipeOptions } [options] - 触控板多指滑动手势的附加选项。
     *     默认使用**{@link TouchPadSwipeOptions}**中属性的默认值。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000005 不支持此操作。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    touchPadMultiFingerSwipe(fingers: int, direction: UiDirection, options?: TouchPadSwipeOptions): Promise<void>;

    /**
     * 模拟手写笔单击操作。该API使用Promise返回结果。
     *
     * @param { Point } point - 单击点的坐标。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    penClick(point: Point): Promise<void>;

    /**
     * 模拟手写笔长按操作。该API使用Promise返回结果。
     *
     * @param { Point } point - 长按点的坐标。
     * @param { double } [pressure] - 手写笔的滑动压力。取值范围为0.0到1.0。默认值为**1.0**。
     *     <br>取值范围：[0.0, 1.0]
     *     <br>默认值：1.0
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    penLongClick(point: Point, pressure?: double): Promise<void>;

    /**
     * 模拟手写笔双击操作。该API使用Promise返回结果。
     *
     * @param { Point } point - 双击点的坐标。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    penDoubleClick(point: Point): Promise<void>;

    /**
     * 模拟手写笔滑动操作。该API使用Promise返回结果。
     *
     * @param { Point } startPoint - 起点坐标。
     * @param { Point } endPoint - 终点坐标。
     * @param { int } [speed] - 手写笔滑动速度。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码401。
     *     <br>默认值：600
     * @param { double } [pressure] - 手写笔的滑动压力。
     *     <br>取值范围：[0.0, 1.0]
     *     <br>默认值：1.0
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    penSwipe(startPoint: Point, endPoint: Point, speed?: int, pressure?: double): Promise<void>;

    /**
     * 模拟连续多点手写笔注入操作。该API使用Promise返回结果。
     *
     * @param { PointerMatrix } pointers - 滚动轨迹，包括手指数和沿轨迹的坐标数组。
     *     **注意**：目前仅支持单指操作。**PointerMatrix**中的**fingers**值必须设置为**1**。
     * @param { int } [speed] - 手写笔指针动作速度。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码401。
     *     <br>默认值：600
     * @param { double } [pressure] - 注入压力。
     *     <br>取值范围：[0.0, 1.0]
     *     <br>默认值：1.0
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    injectPenPointerAction(pointers: PointerMatrix, speed?: int, pressure?: double): Promise<void>;

    /**
     * 触发手写笔按键操作。
     *
     * 支持的组合：
     * 
     * - HANDWRITING模式：HANDWRITING键配合CLICK或DOUBLE_CLICK操作。
     * - AIR_MOUSE模式：AIR_MOUSE键配合CLICK或DOUBLE_CLICK操作（需要options中的point），
     *   HANDWRITING键配合CLICK或DOUBLE_CLICK操作，SMART键配合CLICK操作。
     * 其他组合将导致BusinessError 17000007。
     *
     * @param { PenKey } key - 要操作的手写笔按键。
     * @param { PenMode } mode - 手写笔模式。
     * @param { PenKeyOperation } operation - 操作类型。
     * @param { PenKeyOperationOptions } [options] - 操作选项，包括可选的坐标点。
     *                                   默认值：参考PenKeyOperationOption的默认值。
     * @returns { Promise<void> }
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000005 - 不支持此操作。
     * @throws { BusinessError } 17000007 - 参数校验失败。不支持的键、模式和操作组合。
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     * @test
     */
    triggerPenKey(key: PenKey, mode: PenMode, operation: PenKeyOperation, options?: PenKeyOperationOptions): Promise<void>;
    /**
     * 注入表冠旋转事件。可以指定旋转速度。该API使用Promise返回结果。
     *
     * @param { int } d - 旋转刻度数。正值表示顺时针旋转，负值表示逆时针旋转。该值必须为整数。
     * @param { int } [speed] - 旋转速度。
     *     <br>单位：ticks/s。
     *     <br>取值范围：[1, 500]
     *     <br>如果为负数则抛出错误码17000007。
     *     <br>默认值：20
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 801 - 能力不支持。由于设备能力限制，无法调用该API。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    crownRotate(d: int, speed?: int): Promise<void>;

    /**
     * 在指定坐标处长按并检查目标组件是否存在。该API使用Promise返回结果。
     *
     * @param { On } on - 目标{@link Component}的属性。
     * @param { Point } point - 长按点的坐标。
     * @param { int } [duration] - 长按持续时间。
     *     <br>取值范围：值应 >= 1500
     *     <br>默认值：1500
     * @returns { Promise<boolean> } - 用于返回长按操作期间目标组件是否存在的Promise对象。
     *     值**true**表示目标组件存在，**false**表示不存在。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 26.0.0]
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    isComponentPresentWhenLongClick(on: On, point: Point, duration?: int): Promise<boolean>;

    /**
     * 从起点拖动到终点并检查目标组件是否存在。该API使用Promise返回结果。
     *
     * @param { On } on - 目标{@link Component}的属性。
     * @param { Point } from - Point对象，传递起点坐标和起点所属的显示ID。
     * @param { Point } to - Point对象，传递目标点坐标和目标点所属的显示ID。
     *     <br>**注意**：目标点和起点必须在同一屏幕上。否则将抛出**17000007**异常。
     * @param { int } [speed] - 拖动速度。
     *     <br>取值范围：[200, 40000]
     *     <br>如果为负数则抛出错误码17000007。
     *     <br>默认值：600
     * @param { int } [duration] - 拖动前长按的持续时间。
     *     <br>取值范围：值应 >= 1500
     *     <br>默认值：1500
     * @returns { Promise<boolean> } - 用于返回拖动操作期间目标组件是否存在的Promise对象。
     *     值**true**表示目标组件存在，**false**表示不存在。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    isComponentPresentWhenDrag(on: On, from: Point, to: Point, speed?: int, duration?: int): Promise<boolean>;

    /**
     * 从起点滑动到终点并检查目标组件是否存在。该API使用Promise返回结果。
     *
     * @param { On } on - 目标组件的属性。
     * @param { Point } from - Point对象，传递起点坐标和起点所属的显示ID。
     * @param { Point } to - Point对象，传递目标点坐标和目标点所属的显示ID。
     *     <br>**注意**：目标点和起点必须在同一屏幕上。否则将抛出**17000007**异常。
     * @param { int } [speed] - 滚动速度。
     *     <br>取值范围：[200, 40000]
     *     <br>如果为负数则抛出错误码17000007。
     *     <br>默认值：600
     * @returns { Promise<boolean> } - 用于返回滑动操作期间目标组件是否存在的Promise对象。
     *     值**true**表示目标组件存在，**false**表示不存在。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    isComponentPresentWhenSwipe(on: On, from: Point, to: Point, speed?: int): Promise<boolean>;

    /**
     * 模拟触控板上的双指滚动操作。该API使用Promise返回结果。
     *
     * @param { Point } point - 在触控板上执行双指滚动时鼠标光标的位置。
     * @param { UiDirection } direction - 触控板上双指滚动的方向。
     * @param { int } d - 双指在触控板上滚动的刻度数。一个刻度表示向目标点移动120 px。
     *     该值为大于或等于0的整数。
     * @param { int } [speed] - 触控板上双指滚动的速度。
     *     <br>单位：ticks/s。
     *     <br>取值范围：[1, 500]
     *     <br>如果为负数则抛出错误码17000007。
     *     <br>默认值：20
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000005 - 不支持此操作。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    touchPadTwoFingersScroll(point: Point, direction: UiDirection, d: int, speed?: int): Promise<void>;

    /**
     * 模拟显示屏幕上的指关节敲击。该API使用Promise返回结果。
     * 
     * > **说明：**
     * >
     * > 如果设备上的指关节手势已禁用<!--RP4--><!--RP4End-->，将返回17000005。
     *
     * @param { Array<Point> } pointers - 显示屏幕上指关节敲击的坐标数组。数组长度可以为1或2。
     * @param { int } times - 在显示屏幕上连续敲击的次数。
     *     <br>取值范围：[1,2]
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000005 - 不支持此操作。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    knuckleKnock(pointers: Array<Point>, times: int): Promise<void>;

    /**
     * 模拟多点指关节滚动操作。该API使用Promise返回结果。
     *
     * > **说明：**
     * >
     * > 如果设备上的指关节手势已禁用<!--RP4--><!--RP4End-->，将返回17000005。
     *
     * @param { PointerMatrix } pointers - 滚动轨迹，包括手指数和沿轨迹的坐标数组。
     *     
     *     **注意**：目前仅支持单指操作。**PointerMatrix**中的**fingers**值必须设置为**1**。
     * @param { int } [speed] - 指关节指针动作速度。
     *     <br>取值范围：[200, 40000]
     *     <br>单位：px/s。
     *     <br>如果为负数则抛出错误码17000007。
     *     <br>默认值：600
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000005 - 不支持此操作。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     * @test
     */
    injectKnucklePointerAction(pointers: PointerMatrix, speed?: int): Promise<void>;
}

/**
 * **UiWindow**类表示UI上的窗口，提供获取窗口属性、拖动窗口和调整窗口大小的API。
 * 此类中提供的所有API都使用Promise返回结果，必须使用**await**调用。
 *
 * @syscap SystemCapability.Test.UiTest
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 * @test
 */
declare class UiWindow {
    /**
     * 获取窗口所属应用的包名。该API使用Promise返回结果。
     *
     * @returns { Promise<string> } - 用于返回窗口所属应用包名的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    getBundleName(): Promise<string>;

    /**
     * 获取窗口的边界信息。该API使用Promise返回结果。
     *
     * @returns { Promise<Rect> } - 用于返回窗口边框信息的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    getBounds(): Promise<Rect>;

    /**
     * 获取窗口标题。该API使用Promise返回结果。
     *
     * @returns { Promise<string> } - 用于返回窗口标题的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    getTitle(): Promise<string>;

    /**
     * 获取窗口模式。该API使用Promise返回结果。
     *
     * @returns { Promise<WindowMode> } - 用于返回窗口模式信息的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    getWindowMode(): Promise<WindowMode>;

    /**
     * 检查窗口是否已聚焦。该API使用Promise返回结果。
     *
     * @returns { Promise<boolean> } - 用于返回窗口是否聚焦的Promise对象。值**true**表示窗口已聚焦，**false**表示未聚焦。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    isFocused(): Promise<boolean>;

    /**
     * 检查窗口是否处于活动状态。该API使用Promise返回结果。
     * 
     *
     * @returns { Promise<boolean> } - 用于返回窗口是否处于活动状态的Promise对象。值**true**表示窗口处于活动状态，**false**表示未活动。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead UiWindow#isActive
     * @test
     */
    isActived(): Promise<boolean>;

    /**
     * 聚焦窗口。该API使用Promise返回结果。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    focus(): Promise<void>;

    /**
     * 将窗口移动到目标点。该API使用Promise返回结果。该API适用于可移动的窗口。
     *
     * @param { int } x - 数值，表示目标点的水平坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { int } y - 数值，表示目标点的垂直坐标。该值为大于或等于0的整数。
     *     <br>单位：px
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @throws { BusinessError } 17000005 - 不支持此操作。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    moveTo(x: int, y: int): Promise<void>;

    /**
     * 根据指定的宽度、高度和方向调整窗口大小。该API使用Promise返回结果。
     * 该API适用于可调整大小的窗口。
     *
     * @param { int } wide - 调整后的窗口宽度，数值格式。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { int } height - 调整后的窗口高度，数值格式。该值为大于或等于0的整数。
     *     <br>单位：px
     * @param { ResizeDirection } direction - 调整大小的方向。
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @throws { BusinessError } 17000005 - 不支持此操作。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    resize(wide: int, height: int, direction: ResizeDirection): Promise<void>;

    /**
     * 切换到分屏模式。该API使用Promise返回结果。该API适用于支持分屏的窗口。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @throws { BusinessError } 17000005 - 不支持此操作。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    split(): Promise<void>;

    /**
     * 最大化窗口。该API使用Promise返回结果。该API适用于可最大化的窗口。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @throws { BusinessError } 17000005 - 不支持此操作。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    maximize(): Promise<void>;

    /**
     * 最小化窗口。该API使用Promise返回结果。该API适用于可最小化的窗口。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @throws { BusinessError } 17000005 - 不支持此操作。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    minimize(): Promise<void>;

    /**
     * 将窗口恢复到之前的模式。该API使用Promise返回结果。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @throws { BusinessError } 17000005 - 不支持此操作。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    resume(): Promise<void>;

    /**
     * 关闭窗口。该API使用Promise返回结果。
     *
     * @returns { Promise<void> } - 无返回值的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @throws { BusinessError } 17000005 - 不支持此操作。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    close(): Promise<void>;

    /**
     * 检查窗口是否处于活动状态。该API使用Promise返回结果。
     *
     * @returns { Promise<boolean> } - 用于返回窗口是否处于活动状态的Promise对象。值**true**表示窗口处于活动状态，**false**表示未活动。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     * @test
     */
    isActive(): Promise<boolean>;

    /**
     * 获取窗口所属的显示ID。该API使用Promise返回结果。
     *
     * @returns { Promise<int> } - 用于返回窗口所属显示ID的Promise对象。
     * @throws { BusinessError } 17000002 - 该API不支持并发调用。
     * @throws { BusinessError } 17000004 - 窗口或组件不可见或已销毁。
     * @syscap SystemCapability.Test.UiTest
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     * @test
     */
    getDisplayId(): Promise<int>;
}

/**
 * 表示设备显示上的指针二维数组，用于构建可通过UiDriver注入的多指轨迹。
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
     * 创建**PointerMatrix**对象并返回创建的对象。该API为静态API。
     *
     * @param { int } fingers - 多指操作期间注入的手指数。
     *     <br>取值范围：[1, 10]
     * @param { int } steps - 手指执行的步数。
     *     <br>取值范围：[1, 1000]
     * @returns { PointerMatrix } - 创建的**PointerMatrix**对象。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @test
     */
    static create(fingers: int, steps: int): PointerMatrix;

    /**
     * 在**PointerMatrix**对象中为指定手指和步数对应的动作设置坐标。
     *
     * @param { int } finger - 手指数。该值为大于或等于0的整数，不能超过构建**PointerMatrix**对象时设置的手指数。
     * @param { int } step - 步数。该值为大于或等于0的整数，不能超过构建**PointerMatrix**对象时设置的步数。
     * @param { Point } point - 动作的坐标。建议相邻坐标之间的距离在10 px到80 px范围内。
     * @throws { BusinessError } 401 - 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。
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
 * 用于便捷构建{@link By}对象的静态构造器，使用示例：BY.text('txt').enabled(true)。
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.UiTest.ON
 * @test
 */
declare const BY: By;

/**
 * 用于便捷构建{@link On}对象的静态构造器，使用示例：ON.text('txt').enabled(true)。
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @test
 */
declare const ON: On;

/**
 * 用于便捷构建{@link On}对象的静态构造器，使用示例：ON.text('txt').enabled(true)。
 *
 * @syscap SystemCapability.Test.UiTest
 * @since 23 static
 * @test
 */
declare namespace ON {
    /**
     * 指定目标组件的文本。
     *
     * @param { string } txt - 文本值。
     * @param { MatchPattern } [pattern] - 文本的{@link MatchPattern}。
     *     <br>默认值：MatchPattern.EQUALS
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function text(txt: string, pattern?: MatchPattern): On;

    /**
     * 指定目标组件的id。
     *
     * @param { string } id - id值。
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function id(id: string): On;

    /**
     * 指定目标组件的类型。
     *
     * @param { string } tp - 类型值。
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function type(tp: string): On;

    /**
     * 指定目标组件的可点击状态。
     *
     * @param { boolean } [b] - 可点击状态。
     *     <br>默认值：true
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function clickable(b?: boolean): On;

    /**
     * 指定目标组件的可长按状态。
     *
     * @param { boolean } [b] - 可长按状态。
     *     <br>默认值：true
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function longClickable(b?: boolean): On;

    /**
     * 指定目标组件的可滚动状态。
     *
     * @param { boolean } [b] - 可滚动状态。
     *     <br>默认值：true
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function scrollable(b?: boolean): On;

    /**
     * 指定目标组件的可用状态。
     *
     * @param { boolean } [b] - 可用状态。
     *     <br>默认值：true
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function enabled(b?: boolean): On;

    /**
     * 指定目标组件的聚焦状态。
     *
     * @param { boolean } [b] - 聚焦状态。
     *     <br>默认值：true
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function focused(b?: boolean): On;

    /**
     * 指定目标组件的选中状态。
     *
     * @param { boolean } [b] - 选中状态。
     *     <br>默认值：true
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function selected(b?: boolean): On;

    /**
     * 指定目标组件的勾选状态。
     *
     * @param { boolean } [b] - 勾选状态。
     *     <br>默认值：true
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function checked(b?: boolean): On;

    /**
     * 指定目标组件的可勾选状态。
     *
     * @param { boolean } [b] - 可勾选状态。
     *     <br>默认值：true
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function checkable(b?: boolean): On;

    /**
     * 要求目标组件位于给定{@link On}对象指定的组件前方，用于相对定位组件。
     *
     * @param { On } on - 描述目标组件在其前方的组件的属性要求。
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function isBefore(on: On): On;

    /**
     * 要求目标组件位于给定{@link Component}对象指定的组件前方，用于相对定位组件。
     *
     * @param { Component } com - 描述目标组件在其前方的组件。
     * @returns { On } 此{@link On}对象。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @since 26.0.0 static
     * @test
     */
    export function isBefore(com: Component): On;

    /**
     * 要求目标组件位于给定{@link On}对象指定的组件后方，用于相对定位组件。
     *
     * @param { On } on - 描述目标组件在其后方的组件的属性要求。
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function isAfter(on: On): On;

    /**
     * 要求目标组件位于给定{@link Component}对象指定的组件后方，用于相对定位组件。
     *
     * @param { Component } com - 描述目标组件在其后方的组件。
     * @returns { On } 此{@link On}对象。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @since 26.0.0 static
     * @test
     */
    export function isAfter(com: Component): On;
    /**
     * 要求目标组件位于给定{@link On}对象指定的组件内部，用于相对定位组件。
     *
     * @param { On } on - 描述目标组件在其内部的组件的属性要求。
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function within(on: On): On;

    /**
     * 要求目标组件位于给定{@link Component}对象指定的组件内部，用于相对定位组件。
     *
     * @param { Component } com - 描述目标组件在其内部的组件。
     * @returns { On } 此{@link On}对象。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @FaAndStageModel
     * @since 26.0.0 static
     * @test
     */
    export function within(com: Component): On;

    /**
     * 指定目标组件所在窗口所属应用的bundleName。
     *
     * @param { string } bundleName - 指定窗口的bundleName。
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function inWindow(bundleName: string): On;

    /**
     * 指定目标组件所属的displayId。
     *
     * @param { int } displayId - 指定显示的Id。
     * @returns { On } 此{@link On}对象。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function belongingDisplay(displayId: int): On;

    /**
     * 指定目标组件的描述。
     *
     * @param { string } val - 描述值。
     * @param { MatchPattern } [pattern] - 描述值的{@link MatchPattern}。
     *     <br>默认值：{@link MatchPattern.EQUALS}
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function description(val: string, pattern?: MatchPattern): On;
    /**
     * 指定目标组件的id。
     *
     * @param { string } id - id值。
     * @param { MatchPattern } pattern - id的{@link MatchPattern}。
     *     <br>默认值：{@link MatchPattern.EQUALS}
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function id(id: string, pattern: MatchPattern): On;
    /**
     * 指定目标组件的类型。
     *
     * @param { string } tp - 类型值。
     * @param { MatchPattern } pattern - 类型的{@link MatchPattern}。
     *     <br>默认值：{@link MatchPattern.EQUALS}
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function type(tp: string, pattern: MatchPattern): On;
    /**
     * 指定目标组件的提示文本。
     *
     * @param { string } val - 提示值。
     * @param { MatchPattern } [pattern] - 提示文本的{@link MatchPattern}。
     *     <br>默认值：{@link MatchPattern.EQUALS}
     * @returns { On } 此{@link On}对象。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function hint(val: string, pattern?: MatchPattern): On;

    /**
     * 指定目标组件的原始文本。
     * 如果组件的无障碍属性
     * [accessibilityLevel]{@link ./@internal/component/ets/common:CommonMethod#accessibilityLevel}
     * 设置为'no'或'no-hide-descendants'，
     * 将无法使用{@link On.text}匹配具有指定原始文本的组件，但可以使用此方法实现；
     * 如果组件未设置上述无障碍属性，此方法与{@link On.text}无区别。
     *
     * @param { string } text - 原始文本值。
     * @param { MatchPattern } [pattern] - 文本的{@link MatchPattern}。
     *     <br>默认值：{@link MatchPattern.EQUALS}
     * @returns { On } 此{@link On}对象。
     * @throws { BusinessError } 17000007 - 参数校验失败。
     * @syscap SystemCapability.Test.UiTest
     * @since 23 static
     * @test
     */
    export function originalText(text: string, pattern?: MatchPattern): On;
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
