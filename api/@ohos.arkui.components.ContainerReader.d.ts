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
import { Size } from './arkui/Graphics';
/**
 * Defines the configuration options for the **ContainerReader** component, used to specify parameters for reading 
 * container size and obtaining breakpoint values. The component size and breakpoint values cannot be changed through 
 * this parameter.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ContainerReaderInfo {
  /**
   * Size of the **ContainerReader** component, used for layout analysis and breakpoint calculation.
   * 
   * Note:
   * 
   * This parameter supports two-way binding through 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters). 
   * After binding, when the component size value changes, the bound variable of **size** automatically updates.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  size: Size;
  /**
   * Width breakpoint of the container, which is the obtained width breakpoint enum value of the **ContainerReader** 
   * component.
   * 
   * Note:
   * 
   * This parameter supports two-way binding through 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters). 
   * After binding, when the component width breakpoint value changes, the bound variable of **widthBreakpoint** 
   * automatically updates.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  widthBreakpoint?: WidthBreakpoint;
  /**
   * Height breakpoint of the container, which is the height breakpoint enum value of the **ContainerReader** component 
   * under different aspect ratio thresholds.
   * 
   * Note:
   * 
   * This parameter supports two-way binding through 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters). 
   * After binding, when the component height breakpoint value changes, the bound variable of **heightBreakpoint** 
   * automatically updates.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  heightBreakpoint?: HeightBreakpoint;
}

/**
 * Defines the breakpoint configuration options, which are used to specify threshold parameters for container size 
 * analysis.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface BreakpointOptions {
  /**
   * Array of width breakpoint values. The array must be monotonically increasing.
   * 
   * Default value: **[320, 600, 840, 1440]**, in vp, consistent with the default window width breakpoints.
   * 
   * Note:
   * 
   * A maximum of 5 breakpoints are supported, meaning the maximum array length is 4.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  width?: Array<double>;
  /**
   * Array of height breakpoint values. The height breakpoint value is the ratio of the component's height to its width.
   * No unit. The array must be monotonically increasing.
   * 
   * Default value: **[0.8, 1.2]**, consistent with the default window height breakpoints.
   * 
   * Note:
   * 
   * A maximum of 3 breakpoints are supported, meaning the maximum array length is 2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  height?: Array<double>;
}

/**
 * **ContainerReader** is a container breakpoint component used to obtain breakpoint information based on container size
 * in dynamic scenarios and perform responsive layout. This component returns the container's size and breakpoint in 
 * real time through 
 * [two-way binding](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters),
 * enabling you to create and lay out components based on container size.
 * 
 * > **NOTE**
 * >
 * > - To use **ContainerReader**, the parent component of **ContainerReader** should not rely on its child components 
 * > to determine its own size.
 * >
 * > - Container breakpoints determine height and width breakpoint values based on the component's own actual size and 
 * > breakpoint threshold array. The component size and breakpoint information only apply to the current component and 
 * > its child components. Multiple containers on the same page can have their own independent breakpoint states.
 * >
 * > - The size of the **ContainerReader** component is determined by its parent container and its own layout, and is 
 * > not affected by its child components. Layout specifications under different parent containers: when the parent 
 * > container is [Flex]{@link ./flex}, [Column]{@link ./column}, or 
 * > [Row]{@link ./row}, the remaining space of **ContainerReader** is filled; when the parent 
 * > container is of other types, the parent container is filled.
 * >
 * > - The parameters of the **ContainerReader** API must use state variables combined with the two-way binding (
 * > [!! syntax](docroot://ui/state-management/arkts-new-binding.md)) so that the frontend is promptly notified to 
 * > refresh the UI when the backend calculates size changes.
 * >
 * > - For more development guidance and complete examples on container breakpoints, see 
 * > [Container Breakpoint (ContainerReader)](docroot://ui/arkts-layout-development-container-reader.md).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ContainerReaderInterface {
  /**
   * Creates a **ContainerReader** component and configures container reader parameters.
   *
   * @param { ContainerReaderInfo } value - Container reader configuration options, including size data and breakpoint
   *     configuration.
   * @returns { ContainerReaderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  (value: ContainerReaderInfo): ContainerReaderAttribute;
}

/**
 * In addition to the [universal attributes]{@link CommonMethod}, the following attributes are 
 * supported:
 * 
 * [Universal events]{@link CommonMethod} are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class ContainerReaderAttribute extends CommonMethod<ContainerReaderAttribute> {
  /**
   * Sets the breakpoint configuration options, defining the size thresholds that trigger different layout behaviors.
   *
   * @param { BreakpointOptions } [value] - Breakpoint configuration options, containing arrays of width and height
   *     breakpoint thresholds.
   * @returns { ContainerReaderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  breakpointConfig(value?: BreakpointOptions): ContainerReaderAttribute;
}
/**
 * **ContainerReader** is a container breakpoint component used to obtain breakpoint information based on container size
 * in dynamic scenarios and perform responsive layout. This component returns the container's size and breakpoint in 
 * real time through 
 * [two-way binding](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters),
 * enabling you to create and lay out components based on container size.
 * 
 * > **NOTE**
 * >
 * > - To use **ContainerReader**, the parent component of **ContainerReader** should not rely on its child components 
 * > to determine its own size.
 * >
 * > - Container breakpoints determine height and width breakpoint values based on the component's own actual size and 
 * > breakpoint threshold array. The component size and breakpoint information only apply to the current component and 
 * > its child components. Multiple containers on the same page can have their own independent breakpoint states.
 * >
 * > - The size of the **ContainerReader** component is determined by its parent container and its own layout, and is 
 * > not affected by its child components. Layout specifications under different parent containers: when the parent 
 * > container is [Flex]{@link ./flex}, [Column]{@link ./column}, or 
 * > [Row]{@link ./row}, the remaining space of **ContainerReader** is filled; when the parent 
 * > container is of other types, the parent container is filled.
 * >
 * > - The parameters of the **ContainerReader** API must use state variables combined with the two-way binding (
 * > [!! syntax](docroot://ui/state-management/arkts-new-binding.md)) so that the frontend is promptly notified to 
 * > refresh the UI when the backend calculates size changes.
 * >
 * > - For more development guidance and complete examples on container breakpoints, see 
 * > [Container Breakpoint (ContainerReader)](docroot://ui/arkts-layout-development-container-reader.md).
 * 
 * ## Child Components
 * 
 * Supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @uicomponent
 * @since 26.0.0 dynamic
 */
export declare const ContainerReader: ContainerReaderInterface;
/**
 * Defines ContainerReader Component instance.
 * Provides access to ContainerReader component methods for container dimension analysis and breakpoint detection.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @uicomponent
 * @since 26.0.0 dynamic
 */
export declare const ContainerReaderInstance: ContainerReaderAttribute;
