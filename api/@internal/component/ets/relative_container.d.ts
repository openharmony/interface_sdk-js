/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * Defines a relative layout component used for element alignment in complex scenarios. By setting the alignment rules 
 * of child components, it aligns child components relative to the container or other child components. It is suitable 
 * for complex UIs that require flexible layout and fewer nesting levels.
 * 
 * Child components can define their alignment rules within the container using 
 * [alignRules]{@link CommonMethod#alignRules(value: AlignRuleOption)}.
 * 
 * > **NOTE**
 * >
 * > * This component is supported since API version 9. New APIs in later versions are marked with a superscript to 
 * > indicate their initial version.
 * >
 * > * In the **RelativeContainer** component, when [width]{@link CommonMethod#width(value: Length)} and 
 * > [height]{@link CommonMethod#height(value: Length)} are not set, the layout behavior of the corresponding attributes
 * > is the same as when they are set to 100%.
 * >
 * > * Since API version 11, in the **RelativeContainer** component, setting 
 * > [width]{@link CommonMethod#width(value: Length)} and [height]{@link CommonMethod#height(value: Length)} to "auto" 
 * > means adapting to child components. When width is set to "auto", if a child component uses the container as an 
 * > anchor in the horizontal direction, "auto" does not take effect (that is, it is treated as if width is not set). 
 * > The same applies to the vertical direction.
 * >
 * > * Since API version 20, in the **RelativeContainer** component, setting 
 * > [width]{@link CommonMethod#width(widthValue: Length | LayoutPolicy)} and 
 * > [height]{@link CommonMethod#height(heightValue: Length | LayoutPolicy)} to **LayoutPolicy.wrapContent** means 
 * > adapting to child components while being constrained by the ancestor node size, and setting them to 
 * > **LayoutPolicy.fixAtIdealSize** means adapting to child components without being constrained by the ancestor node 
 * > size. When **width** is set to **wrapContent** or **fixAtIdealSize**, if a child component directly or indirectly 
 * > uses the container as an anchor in the horizontal direction, the container size in that direction does not adapt to
 * > that component. The same applies to the vertical direction.
 * >
 * > * The [margin]{@link CommonMethod#margin} of a child component in **RelativeContainer** differs from the universal 
 * > margin attribute. It refers to the distance from the child component to the anchor in that direction. For example, 
 * > when **alignRules** sets a left anchor, **margin.left** indicates the distance from the child component to the left
 * > anchor. If **alignRules** does not set an anchor in a certain boundary direction (for example, neither **left** nor
 * > **right** anchor is set), the **margin** in that direction does not take effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop [since 11]
 */
interface RelativeContainerInterface {
  /**
   * The **RelativeContainer** component is a container component used for relative layout of elements in complex 
   * scenarios.
   *
   * @returns { RelativeContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  (): RelativeContainerAttribute;
}

/**
 * Defines the position of a guideline.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface GuideLinePosition {
  /**
   * Distance from the guideline to the left or top edge of the container. Unit: vp.
   * 
   * Default value: **0**. Either this parameter or **end** is used. If both are declared, only **start** takes effect. 
   * If the **width** of the container is declared as "auto", a guideline of the **Axis.Vertical** type can be declared 
   * only in the **start** mode (percentage is not allowed). If the **height** of the container is declared as 
   * **"auto"**, a guideline of the **Axis.Horizontal** type can be declared only in the **start** mode (percentage is 
   * not allowed).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start? : Dimension;

  /**
   * Distance from the guideline to the right or bottom edge of the container. Unit: vp. Either this parameter or 
   * **start** is used. If both are declared, only **start** takes effect. If the **width** of the container is declared
   * as **"auto"**, a guideline of the **Axis.Vertical** type does not support declaration in the **end** mode. If the 
   * **height** of the container is declared as **"auto"**, a guideline of the **Axis.Horizontal** type does not support
   * declaration in the **end** mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  end? : Dimension;
}

/**
 * Defines the style of a guideline, which used to define the ID, direction, and position of a guideline, helping child 
 * components to be positioned and aligned in the **RelativeContainer**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface GuideLineStyle {
  /**
   * ID of the guideline, used to identify the guideline. A child component can reference this guideline as an anchor by
   * using this ID. The ID must be unique and cannot be the same as the name of any component in the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  id : string;

  /**
   * Direction of the guideline. **Axis.Vertical** indicates a vertical guideline, which can be used only as a 
   * horizontal anchor of a component. **Axis.Horizontal** indicates a horizontal guide line, which can be used only as 
   * a vertical anchor of a component.
   * 
   * Default value: **Axis.Vertical**
   * 
   * Invalid value: The default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction : Axis;

  /**
   * Position of the guideline.
   * 
   * If this parameter is not declared or an invalid value (for example, **undefined**) is declared, the position of the
   * guideline defaults to **start: 0**. You can declare either **start** or **end**. If both are declared, only 
   * **start** takes effect. If the width of the container is declared as **"auto"**, the position of an 
   * **Axis.Vertical** guideline can be declared only by using **start** (percentages are not allowed). If the 
   * **height** of the container is declared as **"auto"**, the position of an **Axis.Horizontal** guideline can be 
   * declared only by using **start** (percentages are not allowed).
   *
   * Default value: **{ start: 0 }**
   *
   * Invalid value: The default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  position : GuideLinePosition;
}

/**
 * Defines the direction of a barrier.
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum BarrierDirection {
  /**
   * The barrier is at the leftmost position of all its [referencedId]{@link BarrierStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  LEFT,

  /**
   * The barrier is at the rightmost position of all its [referencedId]{@link BarrierStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  RIGHT,

  /**
   * The barrier is at the topmost position of all its [referencedId]{@link BarrierStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TOP,

  /**
   * The barrier is at the bottommost position of all its [referencedId]{@link BarrierStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BOTTOM,
}

/**
 * Enumerates the directions of barriers with mirror mode support.
 * 
 * | Name|  Value | Description                      |
 * | ------ | -- | ----------------------------- |
 * | START  | 0  |The barrier is on the start side of all its |
 * |        |    |[referencedId]{@link LocalizedBarrierStyle}, that is, the |
 * |        |    |leftmost side in LTR mode and the rightmost side in RTL mode.|
 * | END    | 1  | The barrier is on the end side of all its [referencedId]{@link LocalizedBarrierStyle}, that is, the |
 * |        |    |rightmost side in LTR mode and the leftmost side in RTL mode.|
 * | TOP    | 2  | The barrier is at the top of all the referenced components specified by |
 * |        |    |[referencedId]{@link LocalizedBarrierStyle}.|
 * | BOTTOM | 3  | The barrier is at the bottom of all the referenced components specified by |
 * |        |    |[referencedId]{@link LocalizedBarrierStyle}.|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum LocalizedBarrierDirection {
  /**
   * The barrier is on the start side of all its [referencedId]{@link LocalizedBarrierStyle}, that is, the leftmost
   * side in LTR mode and the rightmost side in RTL mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  START = 0,

  /**
   * The barrier is on the end side of all its [referencedId]{@link LocalizedBarrierStyle}, that is, the rightmost
   * side in LTR mode and the leftmost side in RTL mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  END = 1,

  /**
   * The barrier is at the top of all the referenced components specified by 
   * [referencedId]{@link LocalizedBarrierStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TOP = 2,

  /**
   * The barrier is at the bottom of all the referenced components specified by 
   * [referencedId]{@link LocalizedBarrierStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BOTTOM = 3,
}

/**
 * Defines the style of a barrier, which is used to define the ID, direction, and dependent components of a barrier. 
 * Child components can reference the barrier by its ID as an anchor for alignment and positioning.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface BarrierStyle {
  /**
   * ID of the barrier, used to identify the barrier. A child component can reference this barrier as an anchor by this 
   * ID. It must be unique and cannot duplicate the name of any component in the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  id : string;

  /**
   * Direction of the barrier.
   * 
   * A horizontal barrier line (**TOP**\/**BOTTOM**) can serve only as a vertical directional anchor (**top** or 
   * **bottom**) of a component. When it is used as a horizontal directional anchor, its position is treated as **0**. A
   * vertical barrier line (**LEFT**\/**RIGHT**) can serve only as a horizontal directional anchor (**left** or
   * **right**) of a component. When it is used as a vertical directional anchor, its position is treated as **0**.
   * 
   * Default value: **BarrierDirection.LEFT**
   * 
   * Invalid value: processed as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction : BarrierDirection;

  /**
   * Components on which the barrier is generated. Put the IDs of the components that serve as the barrier reference 
   * into the array. At least one valid component ID is required. IDs that do not exist are ignored. The barrier 
   * position is calculated based on the component boundaries: **LEFT** takes the leftmost, **RIGHT** takes the 
   * rightmost, **TOP** takes the topmost, and **BOTTOM** takes the bottommost.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  referencedId : Array<string>;
}

/**
 * Defines the style of a localized barrier, which is used to define the ID, direction, and dependent components of a 
 * barrier that supports mirror mode. Child components can reference the barrier by its ID as an anchor for alignment 
 * and positioning.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedBarrierStyle {
  /**
   * ID of the barrier, used to identify the barrier. A child component can reference this ID to use the barrier as an 
   * anchor. The ID must be unique and must not duplicate the name of any component in the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  id : string;

  /**
   * Direction of the barrier.
   * 
   * A horizontal barrier line (**TOP**\/**BOTTOM**) can be used only as a vertical directional anchor (**top** or 
   * **bottom**) of a component. When it is used as a horizontal directional anchor, its position is treated as **0**. A
   * vertical barrier line (**START**\/**END**, supporting LTR/RTL mirroring) can be used only as a horizontal 
   * directional anchor (**start** or **end**) of a component. When it is used as a vertical directional anchor, its 
   * position is treated as **0**.
   * 
   * Default value: **LocalizedBarrierDirection.START**
   * 
   * Invalid value: the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedDirection : LocalizedBarrierDirection;

  /**
   * Components on which the barrier is generated. Put the IDs of the components that serve as the barrier reference 
   * into the array. The array must contain at least one valid component ID. IDs that do not exist are ignored. For a 
   * barrier that supports mirror mode, the barrier position is calculated based on the actual position in LTR/RTL mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  referencedId : Array<string>;
}

/**
 * In addition to the [universal attributes]{@link CommonMethod}, the following attributes are supported.
 *
 * > **NOTE**
 * >
 * > The **margin** attribute of a child component in **RelativeContainer** has special effective conditions. For
 * > details, see the description above.
 *
 * The [universal events]{@link CommonMethod} are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop [since 11]
 */
declare class RelativeContainerAttribute extends CommonMethod<RelativeContainerAttribute> {
  /**
   * Sets the
   * [guidelines](docroot://ui/arkts-layout-development-relative-layout.md#positioning-child-components-using-guidelines)
   * in the **RelativeContainer** component. Each element in the array represents a guideline. Typical usage
   * aligning child components based on virtual reference lines, creating flexibly adjustable reference lines for 
   * positioning, and laying out multiple child components based on the same baseline.
   *
   * @param { Array<GuideLineStyle> } value - Guideline inside the **RelativeContainer**, which defines the ID,
   *     direction, and position of the **guideLine** and is used to assist in positioning child components.
   * @returns { RelativeContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  guideLine(value: Array<GuideLineStyle>): RelativeContainerAttribute;

  /**
   * Sets the 
   * [barriers](docroot://ui/arkts-layout-development-relative-layout.md#setting-barriers-for-multiple-components) in 
   * the **RelativeContainer** component. Child components can use barriers as anchors for alignment and positioning. 
   * Each element in the array represents a barrier. Typical usage scenarios: preventing child components from 
   * overlapping, creating virtual boundaries based on component edges, and implementing automatic spacing between 
   * components.
   *
   * @param { Array<BarrierStyle> } value - Barrier in the **RelativeContainer** container, used to define the ID,
   *     direction, and dependent components of the barrier. Child components can use the barrier as an anchor for
   *     alignment and positioning.
   * @returns { RelativeContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  barrier(value: Array<BarrierStyle>): RelativeContainerAttribute;

  /**
   * Sets barriers in the **RelativeContainer**. Child components can use a barrier as an anchor for alignment and 
   * positioning, and barrier lines in mirror mode are supported. Each element in the array represents a barrier. 
   * Typical usage: RTL language layout adaptation, mirrored UI design, and automatic adjustment of barrier positions 
   * based on the reading direction.
   *
   * @param { Array<LocalizedBarrierStyle> } barrierStyle - Barrier in the **RelativeContainer** container, which
   *     supports defining barrier lines in mirror mode.
   * @returns { RelativeContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  barrier(barrierStyle: Array<LocalizedBarrierStyle>): RelativeContainerAttribute;
}

/**
 * Defines a relative layout component used for element alignment in complex scenarios. By setting the alignment rules 
 * of child components, it aligns child components relative to the container or other child components. It is suitable 
 * for complex UIs that require flexible layout and fewer nesting levels.
 * 
 * Child components can define their alignment rules within the container using 
 * [alignRules]{@link CommonMethod#alignRules(value: AlignRuleOption)}.
 * 
 * > **NOTE**
 * >
 * > * This component is supported since API version 9. New APIs in later versions are marked with a superscript to 
 * > indicate their initial version.
 * >
 * > * In the **RelativeContainer** component, when [width]{@link CommonMethod#width(value: Length)} and 
 * > [height]{@link CommonMethod#height(value: Length)} are not set, the layout behavior of the corresponding attributes
 * > is the same as when they are set to 100%.
 * >
 * > * Since API version 11, in the **RelativeContainer** component, setting 
 * > [width]{@link CommonMethod#width(value: Length)} and [height]{@link CommonMethod#height(value: Length)} to "auto" 
 * > means adapting to child components. When width is set to "auto", if a child component uses the container as an 
 * > anchor in the horizontal direction, "auto" does not take effect (that is, it is treated as if width is not set). 
 * > The same applies to the vertical direction.
 * >
 * > * Since API version 20, in the **RelativeContainer** component, setting 
 * > [width]{@link CommonMethod#width(widthValue: Length | LayoutPolicy)} and 
 * > [height]{@link CommonMethod#height(heightValue: Length | LayoutPolicy)} to **LayoutPolicy.wrapContent** means 
 * > adapting to child components while being constrained by the ancestor node size, and setting them to 
 * > **LayoutPolicy.fixAtIdealSize** means adapting to child components without being constrained by the ancestor node 
 * > size. When **width** is set to **wrapContent** or **fixAtIdealSize**, if a child component directly or indirectly 
 * > uses the container as an anchor in the horizontal direction, the container size in that direction does not adapt to
 * > that component. The same applies to the vertical direction.
 * >
 * > * The [margin]{@link CommonMethod#margin} of a child component in **RelativeContainer** differs from the universal 
 * > margin attribute. It refers to the distance from the child component to the anchor in that direction. For example, 
 * > when **alignRules** sets a left anchor, **margin.left** indicates the distance from the child component to the left
 * > anchor. If **alignRules** does not set an anchor in a certain boundary direction (for example, neither **left** nor
 * > **right** anchor is set), the **margin** in that direction does not take effect.
 * 
 * ###### Child Components
 * 
 * Multiple child components are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop [since 11]
 */
declare const RelativeContainer : RelativeContainerInterface;

/**
 * RelativeContainerInstance
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop [since 11]
 */
declare const RelativeContainerInstance: RelativeContainerAttribute;
