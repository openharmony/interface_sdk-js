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
 * Describes the supported data types for the **space** parameter in the constructors of the **Column** component. The 
 * type is a union of the following types.
 *
 * @unionmember { string } The value type is string, and the value must be a string that can be converted to a non-
 *     negative number. If a negative number or a string that cannot be converted is set, the default value **0** is
 *     used.
 * @unionmember { number } The value type is number, and the value must be greater than or equal to 0. If a negative
 *     number or invalid value is set, the default value **0** is used.
 * @unionmember { Resource } The value type is a resource reference type. It can take values from system resources or
 *     application resources.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare type SpaceType = string | number | Resource;

/**
 * Sets the spacing between child components of the **Column** component.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
interface ColumnOptions {
  /**
   * Vertical spacing between child components in the column layout.
   * 
   * If **space** is a negative number or [justifyContent]{@link ColumnAttribute#justifyContent} is set to 
   * **FlexAlign.SpaceBetween**, **FlexAlign.SpaceAround**, or **FlexAlign.SpaceEvenly**, **space** does not take 
   * effect.
   * 
   * Value range: [0, +∞)
   * 
   * Default value: **0**
   * 
   * Invalid value: handled as the default value.
   * 
   * Unit: vp
   * 
   * **NOTE**
   * 
   * The value of **space** is a number greater than or equal to 0, or a string that can be converted to a non-negative 
   * number.
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
 * Sets the spacing between child components of the **Column** component. The spacing type **SpaceType** can be number, 
 * string, or Resource.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
interface ColumnOptionsV2 {
  /**
   * Vertical spacing between elements in the column layout.
   * 
   * If **space** is a negative number or [justifyContent]{@link ColumnAttribute#justifyContent} is set to 
   * **FlexAlign.SpaceBetween**, **FlexAlign.SpaceAround**, or **FlexAlign.SpaceEvenly**, **space** does not take 
   * effect.
   * 
   * Value range: [0, +∞)
   * 
   * Default value: **0**
   * 
   * Unit: vp
   * 
   * Invalid value: The default value is used.
   * 
   * **NOTE**
   * 
   * The value of **space** is a number greater than or equal to 0, a string that can be converted to a non-negative 
   * number, or a Resource type that can be converted to a number.
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
 * A container that lays out child components along the vertical direction. It is suitable for scenarios where multiple 
 * child components need to be arranged sequentially in the vertical direction, such as list items, form items, and card
 * content. It supports setting attributes such as child component spacing and alignment, enabling quick implementation 
 * of vertical linear layout.
 * 
 * > **NOTE**
 * >
 * > If no height or width is set for the **Column** component, it adapts to the size of child components in the main 
 * > axis (vertical direction) or cross axis (horizontal direction).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface ColumnInterface {
  /**
   * Creates a vertical linear layout container. You can set the spacing between child components.
   * 
   * > **NOTE**
   * >
   * > When using multi-component nesting in complex UIs, if layout components are nested too deeply or too many 
   * > components are nested, additional overhead will be incurred. It is recommended to optimize performance by 
   * > removing redundant nodes, using layout boundaries to reduce layout calculations, and properly adopting rendering 
   * > control syntax and layout component methods.
   *
   * @param { object } value [since 7 - 17]
   * @param { ColumnOptions } [options] - Spacing configuration options of the **Column** component. It sets the
   *     vertical spacing between elements in the column layout through the **space** attribute. Pass this parameter
   *     when a fixed vertical spacing needs to be set for child components; if omitted, no child component spacing is
   *     set.
   *     <br> [since 18]
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: ColumnOptions): ColumnAttribute;
  /**
   * Creates a vertical linear layout container. You can set the spacing between child components.
   * 
   * > **NOTE**
   * >
   * > When using multi-component nesting in complex UIs, if layout components are nested too deeply or too many 
   * > components are nested, additional overhead will be incurred. It is recommended to optimize performance by 
   * > removing redundant nodes, using layout boundaries to reduce layout calculations, and properly adopting rendering 
   * > control syntax and layout component methods.
   *
   * @param { ColumnOptions | ColumnOptionsV2 } [options] - Spacing configuration options of the **Column** component.
   *     The **space** attribute sets the vertical spacing between elements in the column layout. **space** supports
   *     settings of the number, string, or Resource type. Pass this parameter when a fixed vertical spacing needs to be
   *     set for child components; if omitted, no child component spacing is set.
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  (options?: ColumnOptions | ColumnOptionsV2): ColumnAttribute;
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
declare class ColumnAttribute extends CommonMethod<ColumnAttribute> {
  /**
   * Alignment mode of the child components in the horizontal direction.
   *
   * @param { HorizontalAlign } value - Alignment format of the child components in the horizontal direction.
   *     <br>Default value: **HorizontalAlign.Center**
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignItems(value: HorizontalAlign): ColumnAttribute;

   /**
    * Alignment mode of the child components in the vertical direction.
    *
    * > **NOTE**
    * >
    * > During the column layout, if [flexShrink]{@link CommonMethod#flexShrink} is not set for a child component, the
    * > child component is not compressed by default. This can result in the total main axis size of all child components
    * > exceeding the container's main axis size, which makes **FlexAlign.Center** and **FlexAlign.End** ineffective.
    *
    * @param { FlexAlign } value - Alignment format of child components in the vertical direction.
    *     <br>Default value: **FlexAlign.Start**
    *     <br>**Note:** If the child component does not set [flexShrink]{@link CommonMethod#flexShrink},
    *     **FlexAlign.Center** and **FlexAlign.End** may not take effect. For details, see the description below. When
    *     this parameter is set to **FlexAlign.SpaceBetween**, **FlexAlign.SpaceAround**, or **FlexAlign.SpaceEvenly**,
    *     the [space]{@link ColumnOptions} attribute does not take effect.
    * @returns { ColumnAttribute }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  justifyContent(value: FlexAlign): ColumnAttribute;
  /**
   * Adds a point light effect to the **Column** component, affecting the lighting rendering of surrounding components
   * marked as illuminable. A point light is a light source that emits light in all directions from a specific
   * position, and can be used to enhance the three-dimensional appearance and visual depth of the UI. You can configure
   * parameters such as the light position, color, and intensity through **PointLightStyle**. For details, see
   * [PointLightStyle]{@link PointLightStyle}.
   *
   * @param { PointLightStyle } value - Point light style used to set the UI effect of a point light illuminating
   *     surrounding components. Only the **Image**, **Column**, **Flex**, **Row**, and **Stack** components support
   *     the point light setting.
   * @returns { ColumnAttribute } The attribute of the column.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  pointLight(value: PointLightStyle): ColumnAttribute;
  /**
   * Sets whether to reverse the vertical arrangement of child components.
   * > **NOTE**
   * >
   * > If the **reverse** attribute is not set, the main axis direction is not reversed. If the attribute is set and the
   * > parameter value is **undefined**, it defaults to **true**, and the main axis direction is reversed. The universal
   * > attribute **direction** only changes the cross axis direction of **Column**, not the main axis direction of
   * > **Column**, so it does not affect the **reverse** attribute.
   *
   * @param { Optional<boolean> } isReversed - Whether the child components are arranged in reverse order in the
   *     vertical direction.
   *     <br>Default value: **true**. The value **true** indicates that the child components are arranged in reverse
   *     order in the vertical direction, and **false** indicates that they are arranged in normal order.
   * @returns { ColumnAttribute } The attribute of the column.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  reverse(isReversed: Optional<boolean>): ColumnAttribute;
}

/**
 * A container that lays out child components along the vertical direction. It is suitable for scenarios where multiple 
 * child components need to be arranged sequentially in the vertical direction, such as list items, form items, and card
 * content. It supports setting attributes such as child component spacing and alignment, enabling quick implementation 
 * of vertical linear layout.
 * 
 * > **NOTE**
 * >
 * > If no height or width is set for the **Column** component, it adapts to the size of child components in the main 
 * > axis (vertical direction) or cross axis (horizontal direction).
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
declare const Column: ColumnInterface;

/**
 * Defines Column Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const ColumnInstance: ColumnAttribute;
