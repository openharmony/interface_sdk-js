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
 * A dynamic layout container component that supports dynamically switching between different layout algorithms at
 * runtime without altering the state of child components. Using **DynamicLayout** improves layout flexibility and
 * simplifies the development process for UI adaptation and multi-view switching. It is suitable for scenarios such as
 * responsive layouts (adapting to different screen sizes), multi-view mode switching (e.g., switching between list,
 * grid, and waterfall layouts), and user-defined layouts.
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
     * @param { LayoutAlgorithm } algorithm - Layout algorithm for the dynamic layout container. Supported layout
     *     algorithm instances include [RowLayoutAlgorithm]{@link LayoutAlgorithm:RowLayoutAlgorithm} (
     *     horizontal linear layout, suitable for horizontal arrangement scenarios),
     *     [ColumnLayoutAlgorithm]{@link LayoutAlgorithm:ColumnLayoutAlgorithm} (vertical linear layout,
     *     suitable for vertical arrangement scenarios),
     *     [StackLayoutAlgorithm]{@link LayoutAlgorithm:StackLayoutAlgorithm} (stack layout, suitable for
     *     overlapping scenarios), [GridLayoutAlgorithm]{@link LayoutAlgorithm:GridLayoutAlgorithm} (grid
     *     layout, suitable for regular grid scenarios), and
     *     [CustomLayoutAlgorithm]{@link LayoutAlgorithm:CustomLayoutAlgorithm} (custom layout, suitable for
     *     complex and special layout scenarios). For details, see
     *     [LayoutAlgorithm]{@link LayoutAlgorithm:LayoutAlgorithm}. If an invalid value (such as **null**,
     *     **undefined**, or an invalid layout algorithm object) is passed, child components are laid out according to
     *     [StackLayoutAlgorithm]{@link LayoutAlgorithm:StackLayoutAlgorithm}, with child components stacked on
     *     top of each other.
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
 * The [universal attributes]{@link CommonMethod} are supported.
 *
 * > **NOTE**
 * >
 * > - When the layout algorithm is [RowLayoutAlgorithm]{@link LayoutAlgorithm:RowLayoutAlgorithm} or
 * > [ColumnLayoutAlgorithm]{@link LayoutAlgorithm:ColumnLayoutAlgorithm}, the flex layout attributes set on
 * > child components take effect, while the [layoutGravity]{@link CommonMethod#layoutGravity} attribute does not.
 * >
 * > - When the layout algorithm is [StackLayoutAlgorithm]{@link LayoutAlgorithm:StackLayoutAlgorithm}, the
 * > [layoutGravity]{@link CommonMethod#layoutGravity} attribute set on child components takes effect, while the
 * > flex layout attributes do not.
 * >
 * > - When the layout algorithm is [CustomLayoutAlgorithm]{@link LayoutAlgorithm:CustomLayoutAlgorithm},
 * > the setMeasuredSize method of the **DynamicLayout** component's FrameNode takes precedence over the size
 * > settings and border attributes, and the measure and layout methods of the child component's FrameNode take
 * > precedence over the ignoreLayoutSafeArea attribute.
 * >
 * > - When the layout algorithm is [GridLayoutAlgorithm]{@link LayoutAlgorithm:GridLayoutAlgorithm}, the
 * > flex layout attributes set on child components do not take effect, the
 * > [layoutGravity]{@link CommonMethod#layoutGravity} attribute does not take effect, and the positions of child
 * > components are controlled by the **GridLayoutAlgorithm** parameters.
 *
 * The [universal events]{@link CommonMethod} are supported.
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
 * A dynamic layout container component that supports dynamically switching between different layout algorithms at
 * runtime without altering the state of child components. Using **DynamicLayout** improves layout flexibility and
 * simplifies the development process for UI adaptation and multi-view switching. It is suitable for scenarios such as
 * responsive layouts (adapting to different screen sizes), multi-view mode switching (e.g., switching between list,
 * grid, and waterfall layouts), and user-defined layouts.
 *
 * ## Child Components
 *
 * Child components are supported.
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
