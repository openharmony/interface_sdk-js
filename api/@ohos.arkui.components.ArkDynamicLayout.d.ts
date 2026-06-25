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
import { LayoutAlgorithm } from './arkui/LayoutAlgorithm';

/**
 * Defines the dynamic layout container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
export interface DynamicLayoutInterface {
    /**
     * Defines the dynamic layout container.
     *
     * @param { LayoutAlgorithm } algorithm - Layout algorithm of the dynamic layout component. If an invalid value is
     *     used, the child components are stacked and arranged according to
     *     [StackLayoutAlgorithm](docroot://reference/apis-arkui/js-apis-arkui-layoutAlgorithm.md#stacklayoutalgorithm).
     * @returns { DynamicLayoutAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    (algorithm: LayoutAlgorithm): DynamicLayoutAttribute;
}
/**
 * The [universal attributes](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md) are supported.
 *
 * > **NOTE**
 * >
 * > - When the layout algorithm is
 * > [RowLayoutAlgorithm](docroot://reference/apis-arkui/js-apis-arkui-layoutAlgorithm.md#rowlayoutalgorithm) or
 * > [ColumnLayoutAlgorithm](docroot://reference/apis-arkui/js-apis-arkui-layoutAlgorithm.md#columnlayoutalgorithm),
 * > the [Flex layout](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-flex-layout.md) attributes set for
 * > child components take effect.
 * >
 * > - When the layout algorithm is
 * > [StackLayoutAlgorithm](docroot://reference/apis-arkui/js-apis-arkui-layoutAlgorithm.md#stacklayoutalgorithm),
 * > the [layoutGravity](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-location.md#layoutgravity20)
 * > attribute set for child components takes effect.
 * >
 * > - When the layout algorithm is
 * > [CustomLayoutAlgorithm](docroot://reference/apis-arkui/js-apis-arkui-layoutAlgorithm.md#customlayoutalgorithm),
 * > the [setMeasuredSize](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#setmeasuredsize12) method of the
 * > [FrameNode](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#framenode-1) component of **DynamicLayout**
 * > has a higher priority than the [sizing](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md) and
 * > [border styling](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md) attributes. The
 * > [measure](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#measure12) and
 * > [layout](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#layout12) methods of the child component
 * > [FrameNode](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#framenode-1) have a higher priority than the
 * > [ignoreLayoutSafeArea](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-expand-safe-area.md#ignorelayoutsafearea20)
 * > attribute.
 *
 * The [universal events](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md) are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
export declare class DynamicLayoutAttribute extends CommonMethod<DynamicLayoutAttribute> {}

/**
 * Defines the dynamic layout container component, which supports dynamically switching between different layout
 * algorithms at runtime without changing the status of child components.
 * > **Child Components**
 * >
 * > Child components are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @uicomponent
 * @since 24 dynamic
 */
export declare const DynamicLayout: DynamicLayoutInterface;

/**
 * Defines DynamicLayout Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @uicomponent
 * @since 24 dynamic
 */
export declare const DynamicLayoutInstance: DynamicLayoutAttribute;
