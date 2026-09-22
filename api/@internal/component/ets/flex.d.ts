/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Describes the layout and alignment of child components within the **Flex** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface FlexOptions {
  /**
   * Direction in which child components are arranged in the **Flex** container, that is, the direction of the main 
   * axis. After this attribute is set, child components are arranged along the main axis in the specified direction.
   * 
   * Default value: **FlexDirection.Row**
   * 
   * Invalid values are handled as the default value.
   * 
   * The options are as follows:
   * 
   * - **Row**: The main axis runs horizontally, starting from the left.
   * - **RowReverse**: The main axis runs horizontally, starting from the right.
   * - **Column**: The main axis runs vertically, starting from the top.
   * - **ColumnReverse**: The main axis runs vertically, starting from the bottom.
   * 
   * The starting positions of **Row** and **RowReverse** are affected by the **direction** attribute of the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  direction?: FlexDirection;

  /**
   * Whether the **Flex** container has a single line/column or multiple lines/columns. After this attribute is set, 
   * child components are laid out in the container according to the specified wrap mode.
   * 
   * Default value: **FlexWrap.NoWrap**
   * 
   * Invalid values are handled as the default value.
   * 
   * The options are as follows:
   * 
   * - **NoWrap**: No wrapping. Child components are truncated if their total width exceeds the container width.
   * - **Wrap**: Wrapping is enabled. The first line is at the top.
   * - **WrapReverse**: Wrapping is enabled. The first line is at the bottom.
   * 
   * **Note:** In multi-line layout, the stacking direction of new lines is determined by the cross axis direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  wrap?: FlexWrap;

  /**
   * Alignment of all child components on the main axis of the **Flex** container. After this attribute is set, child 
   * components are distributed and arranged along the main axis according to the specified alignment.
   * 
   * Default value: **FlexAlign.Start**
   * 
   * Invalid values are handled as the default value.
   * 
   * The options are as follows:
   * 
   * - **Start**: Aligned with the start edge.
   * - **Center**: Center alignment.
   * - **End**: Aligned with the end edge.
   * - **SpaceBetween**: Aligned with both edges, with equal spacing between child components.
   * - **SpaceAround**: Equal spacing on both sides of each child component.
   * - **SpaceEvenly**: Equal spacing between child components and at both ends.
   * 
   * **Note:** When **justifyContent** is set to **SpaceBetween**, **SpaceAround**, or **SpaceEvenly**, the **space** 
   * parameter does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  justifyContent?: FlexAlign;

  /**
   * Alignment of all child components on the cross axis of the **Flex** container. After this attribute is set, child 
   * components are positioned along the cross axis according to the specified alignment.
   * 
   * Default value: **ItemAlign.Start**
   * 
   * Invalid values are handled as the default value.
   * 
   * The options are as follows:
   * 
   * - **Auto**: Uses the alignment of the parent container.
   * - **Start**: Aligned with the start edge.
   * - **Center**: Center alignment.
   * - **End**: Aligned with the end edge.
   * - **Stretch**: Stretched to fill the container.
   * - **Baseline**: Aligned with the baseline.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignItems?: ItemAlign;

  /**
   * Alignment of multiple lines of content when there is extra space on the cross axis. This attribute takes effect 
   * only when wrap is set to **Wrap** or **WrapReverse**.
   * 
   * Default value: **FlexAlign.Start**
   * 
   * Invalid values are handled as the default value.
   * 
   * The options are as follows:
   * 
   * - **Start**: Aligned with the start edge.
   * - **Center**: Center alignment.
   * - **End**: Aligned with the end edge.
   * - **SpaceBetween**: Aligned with both edges, with equal spacing between lines.
   * - **SpaceAround:** Equal spacing on both sides of each line.
   * - **SpaceEvenly**: Equal spacing between lines and at both ends.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignContent?: FlexAlign;

  /**
   * Spacing between child components in the **Flex** container on the main axis and cross axis. It contains two 
   * attributes: **main** and **cross**. Pass this parameter when you need to adjust the spacing between child 
   * components. If not passed, there is no spacing between child components.
   * 
   * Default value: **{main: LengthMetrics.px(0), cross: LengthMetrics.px(0)}**
   * 
   * Invalid values are handled as the default value.
   * 
   * When **space.main** or **space.cross** is a negative value, or when **justifyContent** is set to 
   * **FlexAlign.SpaceBetween**, **FlexAlign.SpaceAround**, or **FlexAlign.SpaceEvenly**, the **space** parameter does 
   * not take effect. The **main** attribute takes effect in both single-line and multi-line layouts, while the 
   * **cross** attribute takes effect only when **wrap** is set to **Wrap** or **WrapReverse** (multi-line layout).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  space?: FlexSpaceOptions;
}

/**
 * Sets the spacing between child components along the main axis or cross axis of the **Flex** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface FlexSpaceOptions {
  /**
   * Spacing between adjacent child components on the main axis of the **Flex** container. After being set, adjacent 
   * child components in the main axis direction are separated by the specified spacing. This takes effect in both 
   * single-line and multi-line layouts. This parameter does not take effect when **space.main** is a negative number, 
   * or when **justifyContent** is set to **FlexAlign.SpaceBetween**, **FlexAlign.SpaceAround**, or 
   * **FlexAlign.SpaceEvenly**.
   * 
   * Default value: **LengthMetrics.px(0)**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  main?: LengthMetrics;

  /**
   * Spacing between adjacent lines on the cross axis of the **Flex** container. After being set, adjacent lines in the 
   * cross axis direction are separated by the specified spacing. This takes effect only in multi-line layouts (when 
   * **wrap** is set to **Wrap** or **WrapReverse**). This parameter does not take effect when **space.cross** is a 
   * negative number, or when **justifyContent** is set to **FlexAlign.SpaceBetween**, **FlexAlign.SpaceAround**, or 
   * **FlexAlign.SpaceEvenly**.
   * 
   * Default value: **LengthMetrics.px(0)**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cross?: LengthMetrics;
}

/**
 * The **Flex** component is a container that uses the flexible box model for layout. It provides an efficient mechanism
 * for arranging and aligning child elements, as well as distributing available space among them.
 * 
 * For details, see [Flex Layout](docroot://ui/arkts-layout-development-flex-layout.md).
 * 
 * > **NOTE**
 * >
 * > - The **Flex** component involves a secondary layout process during rendering. Therefore, in scenarios with strict 
 * > performance requirements, you are advised to use [Column]{@link ./column} or [Row]{@link ./row} instead. For best 
 * > practices, see the layout optimization guide - Proper Use of Layout Components.
 * >
 * > - When the main axis length of the **Flex** component is not set, it fills the parent container by default. If a 
 * > child component with [position]{@link CommonMethod#position} set is included, the **Flex** component will not fill 
 * > the parent container. When the main axis length of the [Column]{@link ./column} or [Row]{@link ./row} component is 
 * > not set, it follows the child node size by default.
 * >
 * > - When the **Flex**, **Column**, or **Row** component has no child nodes and no width or height is set, the default
 * > width and height are **-1**.
 * >
 * > - The main axis length can be set to **auto** to make the **Flex** component adapt to the child component layout. 
 * > During adaptation, the **Flex** length is constrained by the [constraintSize]{@link CommonMethod#constraintSize} 
 * > attribute and the maximum and minimum lengths passed by the parent container, with the **constraintSize** attribute
 * > taking higher priority.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface FlexInterface {
  /**
   * Creates a **Flex** layout container for arranging and aligning child components in a flexible manner and 
   * distributing remaining space.
   *
   * @param { FlexOptions } value - Configuration options of the **Flex** container, used to set the layout direction,
   *     wrapping mode, alignment, and spacing of child components. If not passed, the default configuration is used.
   *     For details about the default values of each attribute, see [FlexOptions]{@link FlexOptions}.
   * @returns { FlexAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value?: FlexOptions): FlexAttribute;
}

/**
 * The [universal attributes]{@link CommonMethod} are supported.
 * 
 * The [universal events]{@link CommonMethod} are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare class FlexAttribute extends CommonMethod<FlexAttribute> {
  /**
   * Sets the point light style to the **Flex** component, affecting the lighting rendering of surrounding components
   * marked as illuminable. Parameters such as the position, color, and intensity of the light source can be configured
   * through **PointLightStyle**.
   *
   * @param { PointLightStyle } value - Point light style, used to set the position, color, intensity, and other
   *     attributes of the light source, affecting the lighting effect of the component. Only **Image**, **Column**,
   *     **Flex**, **Row**, and **Stack** components support setting point lights.
   * @returns { FlexAttribute } The attribute of the flex.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  pointLight(value: PointLightStyle): FlexAttribute;
}

/**
 * The **Flex** component is a container that uses the flexible box model for layout. It provides an efficient mechanism
 * for arranging and aligning child elements, as well as distributing available space among them.
 * 
 * For details, see [Flex Layout](docroot://ui/arkts-layout-development-flex-layout.md).
 * 
 * > **NOTE**
 * >
 * > - The **Flex** component involves a secondary layout process during rendering. Therefore, in scenarios with strict 
 * > performance requirements, you are advised to use [Column]{@link ./column} or [Row]{@link ./row} instead. For best 
 * > practices, see the layout optimization guide - Proper Use of Layout Components.
 * >
 * > - When the main axis length of the **Flex** component is not set, it fills the parent container by default. If a 
 * > child component with [position]{@link CommonMethod#position} set is included, the **Flex** component will not fill 
 * > the parent container. When the main axis length of the [Column]{@link ./column} or [Row]{@link ./row} component is 
 * > not set, it follows the child node size by default.
 * >
 * > - When the **Flex**, **Column**, or **Row** component has no child nodes and no width or height is set, the default
 * > width and height are **-1**.
 * >
 * > - The main axis length can be set to **auto** to make the **Flex** component adapt to the child component layout. 
 * > During adaptation, the **Flex** length is constrained by the [constraintSize]{@link CommonMethod#constraintSize} 
 * > attribute and the maximum and minimum lengths passed by the parent container, with the **constraintSize** attribute
 * > taking higher priority.
 * 
 * ###### Child Components
 * 
 * This component can contain child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const Flex: FlexInterface;

/**
 * Defines Flex Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const FlexInstance: FlexAttribute;
