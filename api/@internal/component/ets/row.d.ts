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
 * Sets the spacing between child components of the **Row** component.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While starting version information is preserved for historical anonymous objects, there may be cases where the 
 * > outer element's @since version number is higher than inner element's. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface RowOptions {
  /**
   * Spacing between child components in the horizontal layout.
   * 
   * Since API version 9, this attribute does not take effect when **space** is a negative number or **justifyContent** 
   * is set to **FlexAlign.SpaceBetween**, **FlexAlign.SpaceAround**, or **FlexAlign.SpaceEvenly**.
   * 
   * Default value: **0**
   * 
   * Unit: vp
   * 
   * Invalid value: the default value is used.
   * 
   * **NOTE**
   * 
   * The value of **space** is a number greater than or equal to 0, or a string that can be converted to a number.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  space?: string | number;
}

/**
 * Sets the spacing between child components of the **Row** component. The spacing type **SpaceType** can be of the 
 * number, string, or Resource type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
interface RowOptionsV2 {
  /**
   * Spacing between child components in the horizontal layout.
   * 
   * Value range: greater than or equal to 0.
   * 
   * Since API version 9, this parameter does not take effect when **justifyContent** is set to 
   * **FlexAlign.SpaceBetween**, **FlexAlign.SpaceAround**, or **FlexAlign.SpaceEvenly**.
   * 
   * Default value: **0**
   * 
   * Unit: vp
   * 
   * Invalid value: the default value is used.
   * 
   * **NOTE**
   * 
   * The value of **space** is a number greater than or equal to 0, a string that can be converted to a non-negative 
   * number, or a Resource type data that can be converted to a number. A negative number is treated as an invalid value
   * and the default value 0 is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  space?: SpaceType;
}

/**
 * Defines a container that lays out child components horizontally. It supports setting the spacing between child 
 * components and the alignment mode, and is suitable for scenarios where multiple child components need to be arranged 
 * horizontally, such as toolbars, tab bars, and button groups.
 * 
 * > **NOTE**
 * >
 * > If no width or height is set for the **Row** component, it adapts to the size of child components in the main axis 
 * > or cross axis direction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface RowInterface {
  /**
   * Creates a horizontal linear layout container. You can set the spacing between child components.
   * 
   * > **NOTE**
   * >
   * > When using multi-component nesting in complex UIs, if layout components are nested too deeply or too many 
   * > components are nested, additional overhead will be incurred. It is recommended to optimize performance by 
   * > removing redundant nodes, using layout boundaries to reduce layout calculations, and properly adopting rendering 
   * > control syntax and layout component methods.
   *
   * @param { object } value [since 7 - 17]
   * @param { ?RowOptions } options - Configuration object of the horizontal layout, used to set the spacing between
   *     child components (unit: vp). The **space** attribute supports values of the number or string type. Pass this
   *     parameter when you need to customize the spacing between child components. If this parameter is not passed, the
   *     default spacing is 0.
   *     <br>
   *     <br>**Note:** Since API version 9, the **space** attribute does not take effect when it is set to a negative
   *     value or when **justifyContent** is set to **FlexAlign.SpaceBetween**, **FlexAlign.SpaceAround**, or
   *     **FlexAlign.SpaceEvenly**. [since 18]
   * @returns { RowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: RowOptions): RowAttribute;

  /**
   * Creates a horizontal linear layout container. You can set the spacing between child components.
   * 
   * > **NOTE**
   * >
   * > When using multi-component nesting in complex UIs, if layout components are nested too deeply or too many 
   * > components are nested, additional overhead will be incurred. It is recommended to optimize performance by 
   * > removing redundant nodes, using layout boundaries to reduce layout calculations, and properly adopting rendering 
   * > control syntax and layout component methods.
   *
   * @param { ?(RowOptions | RowOptionsV2) } options - Configuration object of the horizontal layout, used to set the
   *     spacing between child components (in vp). The space property supports values of the number, string, or Resource
   *     type. If not set, the default spacing is 0.
   *     <br>**Note:** Since API version 9, this property does not take effect when space is a negative number or
   *     **justifyContent** is set to **FlexAlign.SpaceBetween**, **FlexAlign.SpaceAround**, or
   *     **FlexAlign.SpaceEvenly**.
   * @returns { RowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  (options?: RowOptions | RowOptionsV2): RowAttribute;
}

/**
 * In addition to the [universal attributes]{@link CommonMethod}, the following attributes are supported.
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
declare class RowAttribute extends CommonMethod<RowAttribute> {
  /**
   * Sets the alignment format of child components in the vertical direction. After this attribute is set, child 
   * components are aligned in the specified manner in the vertical direction. By default, child components are 
   * vertically centered.
   *
   * @param { VerticalAlign } value - Alignment format of child components in the vertical direction.
   *     <br>Default value: **VerticalAlign.Center**
   * @returns { RowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignItems(value: VerticalAlign): RowAttribute;

  /**
   * Sets the alignment format of child components in the horizontal direction. After this attribute is set, child 
   * components are aligned in the specified manner in the horizontal direction. By default, child components are 
   * aligned at the start.
   *
   * > **NOTE**
   * >
   * > In a Row layout, if child components do not have [flexShrink]{@link CommonMethod#flexShrink} set, they are not
   * > shrunk by default. That is, the sum of the main axis sizes of all child components may exceed the main axis of
   * > the container. In this case, the alignment behavior of **FlexAlign.Center** and **FlexAlign.End** changes, and
   * > the start position of child components is the same as that of **FlexAlign.Start**.
   *
   * @param { FlexAlign } value - Alignment format of child components in the horizontal direction.
   *     <br>Default value: **FlexAlign.Start**
   *     <br>**Note:** Since API version 9, the **space** parameter does not take effect when **space** is a negative
   *     number or **justifyContent** is set to **FlexAlign.SpaceBetween**, **FlexAlign.SpaceAround**, or
   *     **FlexAlign.SpaceEvenly**.
   * @returns { RowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  justifyContent(value: FlexAlign): RowAttribute;
  /**
   * Sets the point light style to add a point light effect to the **Row** component, affecting the lighting
   * rendering of surrounding components marked as illuminable. A point light is a light source that emits light in
   * all directions from a specific position, and can be used to enhance the three-dimensional appearance and visual
   * depth of the UI. You can configure parameters such as the light position, color, and intensity through
   * **PointLightStyle**. For details, see [PointLightStyle]{@link PointLightStyle}.
   *
   * @param { PointLightStyle } value - Point light style, used to set the UI effect of a point light illuminating
   *     surrounding components. The **PointLightStyle** object contains parameters such as the light position,
   *     color, and intensity. For details about the configuration, see the link. Only the **Image**, **Column**,
   *     **Flex**, **Row**, and **Stack** components support point light settings.
   * @returns { RowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  pointLight(value: PointLightStyle): RowAttribute;
  /**
   * Sets whether to reverse the arrangement order of child components in the horizontal direction. When set to 
   * **true**, child components are arranged from right to left; when set to **false**, child components are arranged 
   * from left to right. This is applicable to scenarios where the display order of child components needs to be 
   * dynamically adjusted, such as internationalization layout adaptation.
   *
   * > **NOTE**
   * >
   * > If the **reverse** attribute is not set, the main axis direction is not reversed. If the **reverse** attribute
   * > is set and the parameter value is **undefined**, the default value **true** is used, and the main axis
   * > direction is reversed. If the parameter value is **false**, the main axis direction is not reversed. Since the
   * > main axis arrangement direction is affected by the universal attribute **direction**, if the **direction**
   * > attribute is set, when the **reverse** attribute is set to **true**, an additional reversal is always performed
   * > on the result of the direction attribute. If the **reverse** attribute is set to **false** or not set, the main
   * > axis direction is determined by the **direction** attribute without additional reversal.
   *
   * @param { Optional<boolean> } isReversed - Whether the arrangement order of child components in the horizontal
   *     direction is reversed.
   *     <br>The value **true** means that the child components are arranged in reverse order in the horizontal
   *     direction (from right to left), and the value **false** means that the child components are arranged in normal
   *     order in the horizontal direction (from left to right). If the parameter value is **undefined**, it is treated
   *     as **true**, and the main axis direction is reversed.
   * @returns { RowAttribute } The attribute of the row.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  reverse(isReversed: Optional<boolean>): RowAttribute;
}

/**
 * Defines a container that lays out child components horizontally. It supports setting the spacing between child 
 * components and the alignment mode, and is suitable for scenarios where multiple child components need to be arranged 
 * horizontally, such as toolbars, tab bars, and button groups.
 * 
 * > **NOTE**
 * >
 * > If no width or height is set for the **Row** component, it adapts to the size of child components in the main axis 
 * > or cross axis direction.
 * 
 * ###### Child Components
 * 
 * Supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const Row: RowInterface;

/**
 * Defines Row Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const RowInstance: RowAttribute;
