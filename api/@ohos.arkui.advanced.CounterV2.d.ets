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

/**
 * Specifies the **CounterV2** type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum CounterV2Type {
    /**
     * List **CounterV2**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    LIST = 0,

    /**
     * Compact **CounterV2**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    COMPACT = 1,

    /**
     * Inline number **CounterV2**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    INLINE = 2,

    /**
     * Inline date **CounterV2**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    INLINE_DATE = 3
}

/**
 * Defines the mouse hover callback type for the **CounterV2** component.
 *
 * @param { boolean } isHover - Whether the mouse is hovering over the component.
 *     The value is **true** when the mouse enters and **false** when it leaves.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export type OnCounterV2HoverCallback = (isHover: boolean) => void;

/**
 * Defines the common attributes and events of the **CounterV2** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class CounterV2CommonOptions {
    /**
     * Whether **CounterV2** can obtain focus.
     *
     * **NOTE**
     *
     * This attribute takes effect for the list and compact **CounterV2**, but not for the inline number and inline
     * date **CounterV2**.
     *
     * Default value: **true**
     *
     * **true**: **CounterV2** can obtain focus; **false**: **CounterV2** cannot obtain focus.
     *
     * When the value is **undefined**, the default value is used.
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    focusable?: boolean;

    /**
     * Step of **CounterV2**.
     *
     * **NOTE**
     *
     * This attribute takes effect for the list, compact Type, and inline number **CounterV2**, but not for the
     * inline date **CounterV2**.
     *
     * Value range: an integer greater than or equal to 1.
     *
     * Default value: **1**
     *
     * If the value is out of the value range, the default value is used.
     *
     * When the value is **undefined**, the default value is used.
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    step?: int;

    /**
     * Callback triggered when the mouse enters or leaves the increase button of the **CounterV2** component.
     *
     * Use scenario: Pass in this callback when you need to perform custom operations (such as changing button
     * styles and displaying tooltips) when hovering over the increase button.
     *
     * **NOTE**
     *
     * This attribute takes effect for the list, compact, and inline number **CounterV2**, but not for the inline
     * date **CounterV2**.
     *
     * Default value: **undefined**, indicating that this callback is not triggered.
     *
     * When the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    onHoverIncrease?: OnCounterV2HoverCallback;

    /**
     * Callback triggered when the mouse enters or leaves the decrease button of the **CounterV2** component.
     *
     * Use scenario: Pass in this callback when you need to perform custom operations (such as changing button
     * styles and displaying tooltips) when hovering over the decrease button.
     *
     * **NOTE**
     *
     * This attribute takes effect for the list, compact, and inline number **CounterV2**, but not for the inline
     * date **CounterV2**.
     *
     * Default value: **undefined**, indicating that this callback is not triggered.
     *
     * When the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    onHoverDecrease?: OnCounterV2HoverCallback;
}

/**
 * Defines the callback for the value change of the inline number **CounterV2**.
 *
 * @param { int } value - Current value.
 *     Value range: [min, max], where **min** and **max** correspond to the minimum and maximum values of
 *     **CounterV2**, respectively.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export type OnInlineCounterV2Change = (value: int) => void;

/**
 * Defines the attributes and events of the inline number **CounterV2**.
 *
 * > **NOTE**
 * >
 * > **min** must be less than or equal to **max**. If **min** is greater than **max**, **max** is used.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class CounterV2InlineStyleOptions extends CounterV2CommonOptions {
    /**
     * Initial value of **CounterV2**.
     *
     * Default value: **0**
     *
     * Valid value range: [min, max], where **min** and **max** correspond to the minimum and maximum values of
     * **CounterV2**, respectively.
     *
     * If the value is **undefined**, the default value is used.
     *
     * Boundary handling: If value is less than **min**, **min** is used. If value is greater than **max**, **max**
     * is used.
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    value?: int;

    /**
     * Minimum value of **CounterV2**.
     *
     * Default value: **0**
     *
     * Value range: (-∞, max]
     *
     * If the value exceeds the range (that is, the set value is greater than **max**), **max** is used.
     *
     * If the value is **undefined**, the default value is used.
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    min?: int;

    /**
     * Maximum value of **CounterV2**.
     *
     * Default value: **999**
     *
     * Value range: [min, +∞)
     *
     * If the value exceeds the range (that is, the set value is less than **min**), **min** is used.
     *
     * If the value is **undefined**, the default value is used.
     *
     * @default 999
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    max?: int;

    /**
     * Width of the number text.
     *
     * Default value: adaptive text width.
     *
     * Value range: [0, +∞)
     *
     * Unit: vp
     *
     * If the value exceeds the range (that is, the set value is less than 0), **0** is used.
     *
     * If the value is **undefined**, the default value is used.
     *
     * @default undefined
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    textWidth?: double;

    /**
     * Callback triggered when the value changes. The callback parameter **value** indicates the currently displayed
     * value.
     *
     * Use scenario: Pass in this callback when you need to perform custom operations upon value changes (such as
     * updating associated data, triggering service logic, or logging).
     *
     * Default value: **undefined**, indicating that the callback is not triggered when the value changes.
     *
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    onChange?: OnInlineCounterV2Change;
}

/**
 * Defines the attributes and events of the list and compact **CounterV2**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class CounterV2NumberStyleOptions extends CounterV2InlineStyleOptions {
    /**
     * Description text of **CounterV2**.
     *
     * Default value: ''
     *
     * Note: Pass this parameter when description text (such as price and quantity) needs to be displayed next to
     * **CounterV2**.
     *
     * When the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    label?: ResourceStr;

    /**
     * Callback triggered when the increase button of the **CounterV2** component gains focus.
     *
     * Use scenario: Pass this callback when custom operations (such as changing styles and logging) need to be
     * performed when the increase button gains focus.
     *
     * Default value: **undefined**, indicating that this callback is not triggered.
     *
     * When the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    onFocusIncrease?: VoidCallback;

    /**
     * Callback triggered when the decrease button of the **CounterV2** component gains focus.
     *
     * Use scenario: Pass this callback when custom operations (such as changing styles and logging) need to be
     * performed when the decrease button gains focus.
     *
     * Default value: **undefined**, indicating that this callback is not triggered.
     *
     * When the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    onFocusDecrease?: VoidCallback;

    /**
     * Callback triggered when the increase button of the **CounterV2** component loses focus.
     *
     * Use scenario: Pass this callback when custom operations (such as validating input and saving state) need to
     * be performed when the increase button loses focus.
     *
     * Default value: **undefined**, indicating that this callback is not triggered.
     *
     * When the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    onBlurIncrease?: VoidCallback;

    /**
     * Callback triggered when the decrease button of the **CounterV2** component loses focus.
     *
     * Use scenario: Pass this callback when custom operations (such as validating input and saving state) need to
     * be performed when the decrease button loses focus.
     *
     * Default value: **undefined**, indicating that this callback is not triggered.
     *
     * When the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    onBlurDecrease?: VoidCallback;
}

/**
 * Defines common date attributes and methods, including year, month, and day.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class CounterV2DateData {
    /**
     * Year of the inline date type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    year: int;

    /**
     * Month of the inline date type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    month: int;

    /**
     * Day of the inline date type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    day: int;

    /**
     * Constructor of **CounterV2DateData**, used to initialize a date object.
     *
     * @param { int } year - Year of the inline date type. Value range: [1, 5000]. If the value is out of the range,
     *     the default value is used.
     * @param { int } month - Month of the inline date type. Value range: [1, 12]. If the value is out of the range,
     *     the default value is used.
     * @param { int } day - Day of the inline date type. Value range: [1, 31]. It must be a valid date. For example,
     *     if **month** is **2**, passing **30** for **day** is treated as an invalid value and the default value
     *     will be used. If the value is out of the range, the default value is used.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    constructor(year: int, month: int, day: int);

    /**
     * Returns the current date value in the string format, which is **YYYY-MM-DD**.
     *
     * @returns { string } Date string in the **YYYY-MM-DD** format, for example, **2024-01-15**.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    toString(): string;
}

/**
 * Defines the callback for date changes of the inline date **CounterV2**.
 *
 * @param { CounterV2DateData } date - Current date value.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export type OnDateCounterV2ChangeCallback = (date: CounterV2DateData) => void;

/**
 * Defines the attributes and events of the inline date **CounterV2**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class CounterV2DateStyleOptions extends CounterV2CommonOptions {
    /**
     * Initial year of the inline date type.
     *
     * Default value: **1**
     *
     * Value range: [1, 5000]
     *
     * If the value is out of the range, the default value is used.
     *
     * If the value is **undefined**, the default value is used.
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    year?: int;

    /**
     * Initial month of the inline date type.
     *
     * Default value: **1**
     *
     * Value range: [1, 12]
     *
     * If the value is out of the range, the default value is used.
     *
     * If the value is **undefined**, the default value is used.
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    month?: int;

    /**
     * Initial day of the inline date type.
     *
     * Default value: **1**
     *
     * Value range: [1, 31]
     *
     * It must be a valid date. For example, if **month** is **2**, passing **30** for **day** is treated as an invalid
     * value and the default value will be used.
     *
     * If the value is out of the range, the default value is used.
     *
     * If the value is **undefined**, the default value is used.
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    day?: int;

    /**
     * Callback invoked when the date changes. The parameter **date** indicates the currently displayed date value.
     *
     * Use scenario: Pass in this callback when you need to perform custom operations (such as updating associated
     * data, triggering business logic, and logging) when the date changes.
     *
     * Default value: **undefined**, indicating that this callback is not triggered.
     *
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    onDateChange?: OnDateCounterV2ChangeCallback;
}

/**
 * Defines the type and style of the **CounterV2** component.
 *
 * When you select a **CounterV2** type, you must select the corresponding **CounterV2** style. If the style parameter
 * does not match the type, the default style of that type is used.
 *
 * | CounterV2 Type | CounterV2 Style |
 * | ----------------------- | ------------------ |
 * | CounterV2Type.LIST | CounterV2NumberStyleOptions |
 * | CounterV2Type.COMPACT | CounterV2NumberStyleOptions |
 * | CounterV2Type.INLINE | CounterV2InlineStyleOptions |
 * | CounterV2Type.INLINE_DATE | CounterV2DateStyleOptions |
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class CounterV2Options {
    /**
     * Type of the **CounterV2**. It must be used with the corresponding style parameter. For details about the
     * mapping, see the table below.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    type: CounterV2Type;

    /**
     * Style of the list and compact **CounterV2**.
     *
     * Default value: **undefined**, which displays a list or compact **CounterV2** with the value **0**.
     *
     * Pass this parameter when you need to customize attributes such as the label, initial value, range, and step of
     * the list or compact **CounterV2**. If the initial value of the counter is **0** and no custom configuration is
     * required, you can skip this parameter to use the default style.
     *
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    numberOptions?: CounterV2NumberStyleOptions;

    /**
     * Style of the inline number **CounterV2**.
     *
     * Default value: **undefined**, which displays an inline number **CounterV2** with the value **0**.
     *
     * Pass this parameter when you need to customize attributes such as the initial value, range, step, text width,
     * and change callback of the inline number **CounterV2**. If the initial value of the counter is **0** and no
     * custom configuration is required, you can skip this parameter to use the default style.
     *
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    inlineOptions?: CounterV2InlineStyleOptions;

    /**
     * Style of the inline date **CounterV2**.
     *
     * Default value: **undefined**, which displays an inline date **CounterV2** with the date **0001/01/01**.
     *
     * Pass this parameter when you need to customize attributes such as the initial date and date change callback of
     * the inline date **CounterV2**. If the default date **0001/01/01** needs to be displayed and no custom
     * configuration is required, you can skip this parameter to use the default style.
     *
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    dateOptions?: CounterV2DateStyleOptions;

    /**
     * Layout direction.
     *
     * Default value: **Direction.Auto**
     *
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    direction?: Direction;
}

/**
 * The **CounterV2** component enables precise numeric value adjustment. It provides four types: list, compact,
 * inline number, and inline date, which are applicable to scenarios such as shopping cart quantity adjustment and
 * date selection.
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2).
 * Compared with
 * [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1), state
 * management V2 delivers enhanced capabilities for deep observation and management of data objects, and is no longer
 * limited to the component level. With state management V2, you can more flexibly control the data and state of
 * **CounterV2** through this component, achieving more efficient UI refresh.
 *
 * > **NOTE**
 * >
 * > - If [universal attributes]{@link CommonMethod} and
 * > [universal events]{@link CommonMethod} are set for **CounterV2**, the compilation toolchain
 * > generates an additional node \_\_Common\_\_ and attaches the universal attributes or universal events to
 * > \_\_Common\_\_, rather than directly applying them to **CounterV2** itself. This may cause the universal
 * > attributes or universal events you set to not take effect or behave unexpectedly. Therefore, setting universal
 * > attributes and universal events for **CounterV2** is not recommended.
 * >
 * > - This component API can only be used in the stage model.
 *
 * Universal attributes are not supported.
 *
 * Universal events are not supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
declare struct CounterV2Component {
    /**
     * Defines the type and style of the **CounterV2** component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Param
    options: CounterV2Options;
}

export {
    CounterV2Component,
    CounterV2Options,
    CounterV2DateData,
    CounterV2Type
}
