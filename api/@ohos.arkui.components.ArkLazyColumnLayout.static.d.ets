'use static'
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

import { ComponentBuilder, CustomBuilder } from '@ohos.arkui.component';
import { AttributeModifier, CommonMethod } from '@ohos.arkui.component';

/**
 * The LazyColumnLayoutAttribute
 *
 * @extends CommonMethod
 * @interface LazyColumnLayoutAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26 static
 * @noninterop
 */
export declare interface LazyColumnLayoutAttribute extends CommonMethod {
    /**
     * Called attributeModifier.
     *
     * @param { AttributeModifier<LazyColumnLayoutAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26 static
     */
    default attributeModifier(
      modifier: AttributeModifier<LazyColumnLayoutAttribute> | AttributeModifier<CommonMethod> | undefined): this;

    /**
     * Sets the spacing between list items along the main axis.
     *
     * @param { LengthMetrics } value - Spacing between list items along the main axis.<br>Default value: <em>0</em>
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26 static
     */
    default space(value: LengthMetrics): this;

    /**
     * Sets the alignment mode of list items along the cross axis.
     *
     * @param { ListItemAlign } value - Alignment mode of list items along the cross axis.<br>Default value: <em>ListItemAlign.Start</em>
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26 static
     */
    default alignListItem(value: ListItemAlign): this;

    /**
     * Called when a child component enters or leaves the list display area.
     *
     * @param { function } event - callback of list scroll,
     * start is the first index in visible content,
     * end is the last index in visible content.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26 static
     */
    default onScrollIndex(event: (start: number, end: number) => void): this;
}

/**
 * Defines LazyColumnLayout Component.
 *
 * @param { CustomBuilder } content_
 * @returns { LazyColumnLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26 static
 * @noninterop
 */
@ComponentBuilder
export declare function LazyColumnLayout (
    content_: CustomBuilder,
): LazyColumnLayoutAttribute;
