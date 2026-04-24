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
 * Defines the LazyColumnLayout Component.
 *
 * @interface LazyColumnLayoutInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26 dynamic
 */
export interface LazyColumnLayoutInterface {
    /**
     * Creates a LazyColumnLayout component.
     *
     * @returns { LazyColumnLayoutAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26 dynamic
     */
    (): LazyColumnLayoutAttribute;
}

/**
 * Defines the LazyColumnLayout attribute functions.
 *
 * @extends CommonMethod<LazyColumnLayoutAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26 dynamic
 */
export declare class LazyColumnLayoutAttribute extends CommonMethod<LazyColumnLayoutAttribute> {
    /**
     * Sets the spacing between list items along the main axis.
     *
     * <p><strong>NOTE</strong>
     * <br>If this parameter is set to a negative number or a value greater than or equal to the length of the list content area, the default value is used.
     * <br>If this parameter is set to a value less than the width of the list divider, the width of the list divider is used as the spacing.
     * <br> Child components of <em>LazyColumnLayout</em> whose <em>visibility</em> attribute is set to <em>None</em> are not displayed,
     * but the spacing above and below them still takes effect.
     * </p>
     *
     * @param { LengthMetrics } value - Spacing between list items along the main axis.<br>Default value: <em>0</em>
     * @returns { LazyColumnLayoutAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26 dynamic
     */
    space(value: LengthMetrics): LazyColumnLayoutAttribute;

    /**
     * Sets the alignment mode of list items along the cross axis when the cross-axis width of the list is greater
     * than the cross-axis width of list items.
     *
     * @param { ListItemAlign } value - Alignment mode of list items along the cross axis.<br>Default value: <em>ListItemAlign.Start</em>
     * @returns { LazyColumnLayoutAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26 dynamic
     */
    alignListItem(value: ListItemAlign): LazyColumnLayoutAttribute;

    /**
     * Called when a child component enters or leaves the list display area.
     *
     * @param { function } event - callback of list scroll,
     * start is the first index in visible content,
     * end is the last index in visible content.
     * @returns { LazyColumnLayoutAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26 dynamic
     */
    onScrollIndex(event: (start: number, end: number) => void): LazyColumnLayoutAttribute;
}

/**
 * Defines LazyColumnLayout Component.
 *
 * @type { LazyColumnLayoutInterface }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26 dynamic
 */
export declare const LazyColumnLayout: LazyColumnLayoutInterface;
/**
 * Defines LazyColumnLayout Component instance.
 * @type { LazyColumnLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26 dynamic
 */
export declare const LazyColumnLayoutInstance: LazyColumnLayoutAttribute;
