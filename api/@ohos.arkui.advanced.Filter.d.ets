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
 * @file
 * @kit ArkUI
 */

/**
 * Declare FilterType
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare enum FilterType {
  /**
   * Multi-line collapsible.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  MULTI_LINE_FILTER = 0,

  /**
   * Multi-line list.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LIST_FILTER = 1
}

/**
 * This parameter is used to define the input of each filtering dimension.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class FilterParams {
  /**
   * Name of the filter criterion.
   *
   * The default value is an empty string.
   *
   * **NOTE**
   *
   * If the text length exceeds the column width, it will be truncated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  name: ResourceStr;
  /**
   * Options of the filter criterion.
   *
   * The default value is an empty array.
   *
   * **NOTE**
   *
   * The text is truncated with an ellipsis (...) if it is too long.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  options: Array<ResourceStr>;
}

/**
 * This parameter specifies the selection result of a filtering dimension.
 * The index starts from 0.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class FilterResult {
  /**
   * Name of the filter criterion.
   *
   * The default value is an empty string.
   *
   * **NOTE**
   *
   * If the text length exceeds the column width, it will be truncated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  name: ResourceStr;
  /**
   * Index of the selected option of the filter criterion.
   *
   * Value range: an integer no less than -1
   *
   * The default value is **-1**, indicating that there is no selected option. Values less than -1 are treated as no
   * selected option.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  index: number;
  /**
   * Value of the selected option of the filter criterion.
   *
   * The default value is an empty string.
   *
   * **NOTE**
   *
   * If the text length exceeds the column width, it will be truncated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;
}

/**
 * The advanced filter component allows users to filter data with multiple criteria combined. It consists of a floating
 * bar and filters therein. The floating bar can be expanded to reveal the filters, which come in a multi-line
 * collapsible or multi-line list style. For added convenience, you can append an additional quick filter.
 *
 * > **NOTE**
 * >
 * > - This component can be used only in the stage model.
 * >
 * > - If the **Filter** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional \_\_Common\_\_ node and mounts the universal attributes and universal events on this node
 * > rather than the **Filter** component itself. As a result, the configured universal attributes and universal events
 * > may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events with
 * > the **Filter** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
@Component
export declare struct Filter {
  /**
   * Custom content of the filtering result display area, which is passed in a trailing closure.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @BuilderParam
  container: () => void;

  /**
   * List of filter criteria.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  multiFilters: Array<FilterParams>;

  /**
   * Additional quick filter criteria. If this parameter is not specified, the additional quick filter criteria are
   * not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  additionFilters?: FilterParams;

  /**
   * Callback invoked when the filter criteria are changed. The input parameter is the list of selected filter
   * criteria.
   *
   * @param { (filterResults: Array<FilterResult>) => void } FilterType, Filter display style type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onFilterChanged: (filterResults: Array<FilterResult>) => void;

  /**
   * Filter type.
   *
   * Default value: **FilterType.LIST_FILTER**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  filterType?: FilterType;
}