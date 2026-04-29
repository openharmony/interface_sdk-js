/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 */

/**
 * Defines the lazy vertical waterflow layout component.
 *
 * @interface LazyVWaterFlowLayoutInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface LazyVWaterFlowLayoutInterface {
  /**
   * Construct the lazy vertical waterflow attribute.
   *
   * @returns { LazyVWaterFlowLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  (): LazyVWaterFlowLayoutAttribute;
}

/**
 * Defines the lazy waterflow layout attribute.
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class LazyWaterFlowLayoutAttribute<T> extends CommonMethod<T> {
  /**
   * The spacing between rows.
   *
   * @param { LengthMetrics | undefined } value - The spacing between rows.
   *     <br>Default value: LengthMetrics.vp(0)
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  rowsGap(value: LengthMetrics | undefined): T;

  /**
   * The spacing between columns.
   *
   * @param { LengthMetrics | undefined } value - The spacing between columns.
   *     <br>Default value: LengthMetrics.vp(0)
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  columnsGap(value: LengthMetrics | undefined): T;

  /**
   * Called when the first or last item displayed in the component changes.
   * It is triggered once when the component is initialized.
   *
   * @param { onVisibleIndexesChangeCallback | undefined } callback - callback function, triggered
   *     when the index of child components in the visible area changes.
   *     <br>Passing undefined will unregister the callback.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onVisibleIndexesChange(callback: onVisibleIndexesChangeCallback | undefined): T;
}

/**
 * Defines the lazy vertical waterflow layout attribute.
 *
 * @extends LazyWaterFlowLayoutAttribute<LazyVWaterFlowLayoutAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class LazyVWaterFlowLayoutAttribute extends LazyWaterFlowLayoutAttribute<LazyVWaterFlowLayoutAttribute> {
  /**
   * This parameter specifies the number of columns in the current waterflow layout.
   *
   * @param { string | ItemFillPolicy | undefined } value - Number of columns in the layout.
   *     <br>Default value: '1fr'
   * @returns { LazyVWaterFlowLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  columnsTemplate(value: string | ItemFillPolicy | undefined): LazyVWaterFlowLayoutAttribute;
}

/**
 * Defines LazyVWaterFlowLayout Component.
 *
 * @type { LazyVWaterFlowLayoutInterface }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const LazyVWaterFlowLayout: LazyVWaterFlowLayoutInterface;

/**
 * Defines LazyVWaterFlowLayout Component instance.
 *
 * @type { LazyVWaterFlowLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const LazyVWaterFlowLayoutInstance: LazyVWaterFlowLayoutAttribute;
