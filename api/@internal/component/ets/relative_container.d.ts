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
 * Provides ports for relative containers.
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
   * Defines the constructor of RelativeContainer.
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
   * Distance between the guideline and the left or top of the container.
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start? : Dimension;

  /**
   * Distance between the guideline and the right or bottom of the container.
   * Unit: vp.
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
 * Defines the ID, direction, and position of a guideline.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface GuideLineStyle {
  /**
   * ID of the guideline, which must be unique and cannot be the same as the name of any component in the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  id : string;

  /**
   * Direction of the guideline.
   * 
   * A guideline in the vertical direction can only be used as the anchor of the component in the horizontal direction, 
   * and the value is **0** when it is used as the anchor in the vertical direction. A guideline in the horizontal 
   * direction can only be used as the anchor of the component in the vertical direction, and the value is **0** when it
   * is used as the anchor in the horizontal direction.
   * 
   * Default value: **Axis.Vertical**
   * 
   * Invalid values are treated as the default value.
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
   * If no value is specified or an invalid value (for example, **undefined**) is provided, the guideline position 
   * defaults to **start: 0**. Only **start** or **end** can be selected for the guideline position. If both are 
   * declared, only **start** takes effect. If the container size in a certain direction is set to **"auto"**, the 
   * guideline position in that direction must be declared in **start** mode, and the value cannot be a percentage.
   * 
   * Default value:
   * 
   * {
   * 
   * start: 0
   * 
   * } 
   * 
   * Invalid values are treated as the default value.
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
   * The barrier is on the left side of all the referenced components specified by
   * [referencedId]{@link BarrierStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  LEFT,

  /**
   * The barrier is on the right side of all the referenced components specified by
   * [referencedId]{@link BarrierStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  RIGHT,

  /**
   * The barrier is at the top of all the referenced components specified by
   * [referencedId]{@link BarrierStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TOP,

  /**
   * The barrier is at the bottom of all the referenced components specified by
   * [referencedId]{@link relative_container:BarrierStyle}.
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum LocalizedBarrierDirection {
  /**
   * The barrier is on the left (for left-to-right scripts) or right (for right-to-left scripts) side of 
   * all the referenced components specified by [referencedId]{@link LocalizedBarrierStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  START = 0,

  /**
   * The barrier is on the right (for left-to-right scripts) or left (for right-to-left scripts) side of 
   * all the referenced components specified by [referencedId]{@link LocalizedBarrierStyle}.
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
 * Defines the ID, direction, and referenced components of a barrier.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface BarrierStyle {
  /**
   * ID of the barrier, which must be unique and cannot be the same as the name of any component in the container.
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
   * Vertical-direction barriers (including **TOP** and **BOTTOM**) can only serve as the horizontal anchor of a 
   * component. If they are used as a vertical anchor, the anchor value will be **0**. Horizontal-direction barriers (
   * including **LEFT** and **RIGHT**) can only serve as the vertical anchor of a component. If they are used as a 
   * horizontal anchor, the anchor value will be **0**.
   * 
   * Default value: **BarrierDirection.LEFT**
   * 
   * Invalid values are treated as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction : BarrierDirection;

  /**
   * Referenced components of the barrier.
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
 * Defines the ID, direction, and referenced components of a barrier.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedBarrierStyle {
  /**
   * ID of the barrier, which must be unique and cannot be the same as the name of any component in the container.
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
   * Vertical-direction barriers (including **TOP** and **BOTTOM**) can only serve as the horizontal anchor of a 
   * component. If they are used as a vertical anchor, the anchor value will be **0**. Horizontal-direction barriers (
   * including **START** and **END**) can only serve as the vertical anchor of a component. If they are used as a 
   * horizontal anchor, the anchor value will be **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedDirection : LocalizedBarrierDirection;

  /**
   * Referenced components of the barrier.
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
   * in the **RelativeContainer** component. The value is an array, each element of which is a guideline.
   *
   * @param { Array<GuideLineStyle> } value - Guidelines in the **RelativeContainer** component.
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
   * the **RelativeContainer** component. The value is an array, each element of which is a barrier.
   *
   * @param { Array<BarrierStyle> } value - Barriers in the **RelativeContainer** component.
   * @returns { RelativeContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  barrier(value: Array<BarrierStyle>): RelativeContainerAttribute;

  /**
   * Sets barriers in the **RelativeContainer** component. Each array element defines a barrier. Barriers can be defined
   * in mirrored layout mode.
   *
   * @param { Array<LocalizedBarrierStyle> } barrierStyle - Barriers in the **RelativeContainer** component.
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
 * The **RelativeContainer** component is a container component used for relative layout of elements in complex
 * scenarios.
 * Child components can define their alignment rules within the container using
 * [alignRules]{@link CommonMethod#alignRules}.
 * > **NOTE**
 * >
 * > * When [width]{@link CommonMethod#width} and [height]{@link CommonMethod#height} are not set,
 * > **RelativeContainer** defaults to 100% in both dimensions.
 * >
 * > * Since API version 11, setting [width]{@link CommonMethod#width} or [height]{@link CommonMethod#height} to
 * > **"auto"** enables child-adaptive sizing. However, if the child components use the container as an anchor in the
 * > horizontal direction, the **auto** value of **width** has no effect (equivalent to **width** not being set). The
 * > same rule applies to the vertical direction.
 * >
 * > * Since API version 20, the size adaptation behavior of child components in the **RelativeContainer** component
 * > follows the following rules, depending on the **LayoutPolicy** setting for
 * > [width]{@link CommonMethod#width} and [height]{@link CommonMethod#height}:
 * > **LayoutPolicy.wrapContent**: The child component adapts to its content size and is constrained by the size of the
 * > ancestor node. **LayoutPolicy.fixAtIdealSize**: The child component adapts to its ideal content size and is not
 * > constrained by the size of the ancestor node. If **width** is set to **wrapContent** or **fixAtIdealSize**, and the
 * > child component (in the horizontal direction) directly or indirectly uses the **RelativeContainer** as its anchor,
 * > the container's horizontal size will not adapt to the child component. The same rule applies to the vertical
 * > direction.
 * >
 * > * For a child component of the container,
 * > [margin]{@link CommonMethod#margin} has a different meaning from the universal attribute **margin**. It indicates
 * > the distance to the anchor in the respective direction. If there is no anchor in the respective direction,
 * > **margin** in that direction does not take effect.
 * >
 * > **Child Components**
 * >
 * > Multiple child components are supported.
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
