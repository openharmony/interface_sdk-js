'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @arkts 1.2
 */
import { Component } from './arkui/component/customComponent';
import { ResourceStr } from './arkui/component/units';
import { BuilderParam, Builder } from './arkui/component/builder';
import { PropRef } from './arkui/stateManagement/decorator';
/**
 * Declare FilterType
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare enum FilterType {
    /**
     * The multi_line_filter type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    MULTI_LINE_FILTER = 0,
    /**
     * The list_filter type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    LIST_FILTER = 1
}
/**
 * This parameter is used to define the input of each filtering dimension.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare class FilterParams {
    /**
     * filter item name.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    name: ResourceStr;
    /**
     * filter options.
     *
     * @type { Array<ResourceStr> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    options: Array<ResourceStr>;
}
/**
 * This parameter specifies the selection result of a filtering dimension.
 * The index starts from 0.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare class FilterResult {
    /**
     * result name.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    name: ResourceStr;
    /**
     * result index.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    index: number;
    /**
     * result value.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    value: ResourceStr;
}

/**
 * Callback method after a user clicks a filter item.
 *
 * @typedef { function } OnFilterChangedCallback
 * @param { Array<FilterResult> } filterResults - The result of filter.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
declare type OnFilterChangedCallback = (filterResults: Array<FilterResult>) => void;

/**
 * Declare Filter.The Filter is used in scenarios where multi-dimensional filtering is required.
 * @struct { Filter }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
@Component
export declare struct Filter {
    /**
     * Container in the user-defined filtering result display area.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @BuilderParam 
    container: () => void;
    /**
     * Multi-dimensional filtering parameters.
     *
     * @type { Array<FilterParams> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef 
    multiFilters: Array<FilterParams>;
    /**
     * FilterParams, Additional filter item parameter. The filter item name is displayed and can be deselected.
     *
     * @type { ?FilterParams }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef 
    additionFilters?: FilterParams;
    /**
     * FilterParams, Callback method after a user clicks a filter item.
     *
     * @type { OnFilterChangedCallback } FilterType, Filter display style type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    onFilterChanged: OnFilterChangedCallback;
    /**
     * FilterType, Filter display style type.
     *
     * @type { ?FilterType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef 
    filterType?: FilterType;
    /**
     * The method to build component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @Builder 
    build(): void;
}