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
 * ###### 子组件
 * 
 * 无
 * 
 * ###### FilterAttribute
 * 
 * 不支持[通用事件]{@link ./@internal/component/ets/common}。
 *
 * @file
 * @kit ArkUI
 */
import { Component } from '@ohos.arkui.component';
import { ResourceStr } from '@ohos.arkui.component';
import { BuilderParam, Builder } from '@ohos.arkui.component';
import { PropRef } from '@ohos.arkui.stateManagement';
/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum FilterType {
    /**
     * 多行可折叠类型筛选器。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    MULTI_LINE_FILTER = 0,
    /**
     * 多行列表类型筛选器。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LIST_FILTER = 1
}
/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface FilterParams {
    /**
     * 筛选项维度名称。
     * 
     * 默认值：空字符串。
     * 
     * **说明**：如果文本大于列宽时，文本被截断。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name: ResourceStr;
    /**
     * 筛选项维度可选项列表。
     * 
     * 默认值：空数组。
     * 
     * **说明**：文本超长显示省略号。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    options: Array<ResourceStr>;
}
/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface FilterResult {
    /**
     * 筛选项维度名称。
     * 
     * 默认值：空字符串。
     * 
     * **说明**：如果文本大于列宽时，文本被截断。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name: ResourceStr;
    /**
     * 该维度筛选项选中项目的索引值。
     * 
     * 取值范围：大于等于-1的整数。
     * 
     * 默认值：-1，没有选中项。若设置数值小于-1，按没有选中项处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    index: int;
    /**
     * 该维度筛选项选中项目的值。
     * 
     * 默认值：空字符串。
     * 
     * **说明**：如果文本大于列宽时，文本被截断。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: ResourceStr;
}

/**
 * 用户点击筛选后的回调事件。回调函数的参数为选中的筛选项结果列表。
 *
 * @param { Array<FilterResult> } filterResults - 选中的筛选项结果列表。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare type OnFilterChangedCallback = (filterResults: Array<FilterResult>) => void;

/**
 * 多条件筛选，帮助用户在大量信息中找到所需内容，应结合具体场景选择合适筛选方式。多条件筛选控件由筛选器与悬浮条构成，悬浮条可下拉展示悬浮筛选器。筛选器样式可分为多行可折叠类型与多行列表类型，并可以在筛选器最后一行附加快捷筛选器。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果Filter设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，编译工具链会额外生
 * > 成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到Filter本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议Filter设置通用属性和通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct Filter {
    /**
     * 筛选结果展示区域自定义内容，通过尾随闭包形式传入。
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @BuilderParam
    container: () => void;
    /**
     * 多条件筛选列表。
     * @type { Array<FilterParams> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    multiFilters: Array<FilterParams>;
    /**
     * 附加快捷筛选项。如果不设置，则不显示附加快捷筛选项。
     * @type { ?FilterParams }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    additionFilters?: FilterParams;
    /**
     * 用户点击后的回调事件。回调函数的参数为选中的筛选项结果列表。
     * @type { OnFilterChangedCallback } FilterType, Filter display style type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onFilterChanged: OnFilterChangedCallback;
    /**
     * 筛选器的样式类型。<br/>默认值：FilterType.LIST_FILTER
     * @type { ?FilterType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    @PropRef
    filterType?: FilterType;
    /**
     * The method to build component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 staticonly
     */
    @Builder
    build(): void;
}