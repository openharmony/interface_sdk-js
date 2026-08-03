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
 * 相对布局组件，用于复杂场景中元素对齐的布局。通过设置子组件的对齐规则，实现子组件相对于容器或其他子组件的对齐，适用于需要灵活布局、减少嵌套层级的复杂界面。
 * 
 * 子组件可以通过设置[alignRules]{@link CommonMethod#alignRules(value: AlignRuleOption)}来设置自身在相对容器中的对齐规则。
 * 
 * > **说明：**
 * >
 * > * 该组件从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > * 在RelativeContainer组件中，不设置[width]{@link CommonMethod#width(value: Length)}、
 * > [height]{@link CommonMethod#height(value: Length)}时，对应属性布局表现与设置为100%相同。
 * >
 * > * 从API version 11开始，在RelativeContainer组件中，[width]{@link CommonMethod#width(value: Length)}、
 * > [height]{@link CommonMethod#height(value: Length)}设置"auto"表示自适应子组件。当width设置"auto"时，如果水平方向上子组件以容器作为锚点，则"auto"不生效（即视为
 * > 不设置width），垂直方向上同理。
 * >
 * > * 从API version 20开始，在RelativeContainer组件中，[width]{@link CommonMethod#width(widthValue: Length | LayoutPolicy)}、
 * > [height]{@link CommonMethod#height(heightValue: Length | LayoutPolicy)}设置LayoutPolicy.wrapContent表示自适应子组件且被祖先节点尺寸约
 * > 束，设置LayoutPolicy.fixAtIdealSize表示自适应子组件且不被祖先节点尺寸约束。当width设置wrapContent或fixAtIdealSize时，如果水平方向上子组件直接或间接以容器作为锚点，则容器在该
 * > 方向上的尺寸不自适应该组件，垂直方向上同理。
 * >
 * > * RelativeContainer中子组件的[margin]{@link CommonMethod#margin}不同于通用属性margin，指子组件到该方向上锚点的距离。例如，当alignRules设置了left锚点时，
 * > margin.left表示子组件到left锚点的距离。若alignRules未设置某个边界方向的锚点（如未设置left或right锚点），则该方向的margin不生效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
interface RelativeContainerInterface {
  /**
   * 相对布局组件，用于复杂场景中元素对齐的布局。
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
 * guideLine位置参数，用于定义guideLine的位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface GuideLinePosition {
  /**
   * guideLine距离容器左侧或者顶部的距离。单位：vp。
   * 
   * 默认值：0。与end二选一，若同时声明则仅start生效。若容器的width被声明为"auto"，则Axis.Vertical类型的guideLine只能使用start方式声明（不允许使用百分比）；若容器的height被声明为"
   * auto"，则Axis.Horizontal类型的guideLine只能使用start方式声明（不允许使用百分比）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start? : Dimension;

  /**
   * guideLine距离容器右侧或者底部的距离。单位：vp。与start二选一，若同时声明则仅start生效。若容器的width被声明为"auto"，则Axis.Vertical类型的guideLine不支持使用end方式声明；若容
   * 器的height被声明为"auto"，则Axis.Horizontal类型的guideLine不支持使用end方式声明。
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
 * guideLine参数，用于定义一条guideLine的id、方向和位置，辅助子组件在RelativeContainer中进行定位和对齐。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface GuideLineStyle {
  /**
   * guideLine的id，用于标识辅助线，子组件可通过此id引用该辅助线作为锚点。必须是唯一的并且不可与容器内组件重名。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  id : string;

  /**
   * 指定guideLine的方向。Axis.Vertical表示垂直辅助线，仅能作为组件水平方向的锚点；Axis.Horizontal表示水平辅助线，仅能作为组件垂直方向的锚点。
   * 
   * 默认值：Axis.Vertical
   * 
   * 非法值：按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction : Axis;

  /**
   * 指定guideLine的位置。
   * 
   * 当未声明或声明异常值（如undefined）时，guideLine的位置默认为start: 0。start和end两种声明方式选择一种即可。若同时声明，仅start生效。若容器的width被声明为"auto"，则
   * Axis.Vertical类型guideLine的位置只能使用start方式声明（不允许使用百分比）；若容器的height被声明为"auto"，则Axis.Horizontal类型guideLine的位置只能使用start方式声明
   * （不允许使用百分比）。
   * 
   * 默认值：
   * 
   * {
   * 
   * start: 0
   * 
   * }
   * 
   * 非法值：按默认值处理。
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
 * 定义屏障线的方向。
 *
 * @syscap SystemCapability.Test.UiTest
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum BarrierDirection {
  /**
   * 屏障在其所有[referencedId]{@link BarrierStyle}的最左侧。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  LEFT = 0,

  /**
   * 屏障在其所有[referencedId]{@link BarrierStyle}的最右侧。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  RIGHT = 1,

  /**
   * 屏障在其所有[referencedId]{@link BarrierStyle}的最上方。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TOP = 2,

  /**
   * 屏障在其所有[referencedId]{@link BarrierStyle}的最下方。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BOTTOM = 3
}

/**
 * 定义支持镜像模式的屏障线的方向。
 * 
 * | 名称 |  值  | 说明                       |
 * | ------ | -- | ----------------------------- |
 * | START  | 0  |屏障在其所有[referencedId]{@link LocalizedBarrierStyle}的起始侧，LTR模式时为最左侧，RTL模式时为最右侧。|
 * | END    | 1  | 屏障在其所有[referencedId]{@link LocalizedBarrierStyle}的结束侧，LTR模式时为最右侧，RTL模式时为最左侧。|
 * | TOP    | 2  | 屏障在其所有[referencedId]{@link LocalizedBarrierStyle}的最上方。|
 * | BOTTOM | 3  | 屏障在其所有[referencedId]{@link LocalizedBarrierStyle}的最下方。|
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
  BOTTOM = 3
}

/**
 * barrier参数，用于定义一条barrier的id、方向和生成时所依赖的组件，子组件可通过barrier的id引用屏障作为锚点进行对齐定位。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface BarrierStyle {
  /**
   * barrier的id，用于标识屏障，子组件可通过此id引用该屏障作为锚点。必须是唯一的并且不可与容器内组件重名。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  id : string;

  /**
   * 指定barrier的方向。
   * 
   * 水平屏障线（TOP/BOTTOM）仅能作为组件垂直方向锚点（top或bottom），用于水平方向锚点时位置视为0。垂直屏障线（LEFT/RIGHT）仅能作为组件水平方向锚点（left或right），用于垂直方向锚点时位置视为0。
   * 
   * 默认值：BarrierDirection.LEFT
   * 
   * 非法值：按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction : BarrierDirection;

  /**
   * 指定生成barrier所依赖的组件。将需要作为屏障基准的组件id放入数组，至少包含一个有效组件ID，不存在的ID会被忽略。barrier根据组件边界计算位置：LEFT取最左侧，RIGHT取最右侧，TOP取最上方，BOTTOM取最下
   * 方。
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
 * barrier参数，用于定义一条支持镜像模式的barrier的id、方向和生成时所依赖的组件，子组件可通过barrier的id引用屏障作为锚点进行对齐定位。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedBarrierStyle {
  /**
   * barrier的id，用于标识屏障，子组件可通过此id引用该屏障作为锚点。必须是唯一的并且不可与容器内组件重名。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  id : string;

  /**
   * 指定barrier的方向。
   * 
   * 水平屏障线（TOP/BOTTOM）仅能作为组件垂直方向锚点（top或bottom），用于水平方向锚点时位置视为0。垂直屏障线（START/END，支持LTR/RTL镜像）仅能作为组件水平方向锚点（start或end），用于垂直方向
   * 锚点时位置视为0。
   * 
   * 默认值：LocalizedBarrierDirection.START
   * 
   * 非法值：按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedDirection : LocalizedBarrierDirection;

  /**
   * 指定生成barrier所依赖的组件。将需要作为屏障基准的组件id放入数组，至少包含一个有效组件ID，不存在的ID会被忽略。支持镜像模式的屏障根据LTR/RTL模式下的实际位置计算屏障位置。
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
 * 除支持[通用属性]{@link ./common}外，还支持如下属性：
 * 
 * 支持[通用事件]{@link ./common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare class RelativeContainerAttribute extends CommonMethod<RelativeContainerAttribute> {
  /**
   * 设置RelativeContainer容器内的[辅助线](docroot://ui/arkts-layout-development-relative-layout.md#使用辅助线辅助定位子组件)，数组中每个元素代表一条辅助线。
   * 典型使用场景：子组件基于虚拟参考线对齐、创建可灵活调整的参考线定位、多个子组件基于同一基准线布局。
   *
   * @param { Array<GuideLineStyle> } value - RelativeContainer容器内的辅助线，定义guideLine的id、方向和位置，用于辅助定位子组件。
   * @returns { RelativeContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  guideLine(value: Array<GuideLineStyle>): RelativeContainerAttribute;

  /**
   * 设置RelativeContainer容器内的[屏障](docroot://ui/arkts-layout-development-relative-layout.md#多个组件的屏障)，子组件可以以屏障为锚点进行对齐定位。数组中
   * 每个元素代表一条屏障。典型使用场景：避免子组件重叠、基于组件边缘创建虚拟边界、实现组件间自动间隔。
   *
   * @param { Array<BarrierStyle> } value - RelativeContainer容器内的屏障，用于定义屏障的id、方向和依赖组件，子组件可以以屏障为锚点进行对齐定位。
   * @returns { RelativeContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  barrier(value: Array<BarrierStyle>): RelativeContainerAttribute;

  /**
   * 设置RelativeContainer容器内的屏障，子组件可以以屏障为锚点进行对齐定位，支持定义镜像模式的屏障线。数组中每个元素代表一条屏障。典型使用场景：RTL语言布局适配、镜像界面设计、根据阅读方向自动调整屏障位置。
   *
   * @param { Array<LocalizedBarrierStyle> } barrierStyle - RelativeContainer容器内的屏障，支持定义镜像模式的屏障线。
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
 * 相对布局组件，用于复杂场景中元素对齐的布局。通过设置子组件的对齐规则，实现子组件相对于容器或其他子组件的对齐，适用于需要灵活布局、减少嵌套层级的复杂界面。
 * 
 * 子组件可以通过设置[alignRules]{@link CommonMethod#alignRules(value: AlignRuleOption)}来设置自身在相对容器中的对齐规则。
 * 
 * > **说明：**
 * >
 * > * 该组件从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > * 在RelativeContainer组件中，不设置[width]{@link CommonMethod#width(value: Length)}、
 * > [height]{@link CommonMethod#height(value: Length)}时，对应属性布局表现与设置为100%相同。
 * >
 * > * 从API version 11开始，在RelativeContainer组件中，[width]{@link CommonMethod#width(value: Length)}、
 * > [height]{@link CommonMethod#height(value: Length)}设置"auto"表示自适应子组件。当width设置"auto"时，如果水平方向上子组件以容器作为锚点，则"auto"不生效（即视为
 * > 不设置width），垂直方向上同理。
 * >
 * > * 从API version 20开始，在RelativeContainer组件中，[width]{@link CommonMethod#width(widthValue: Length | LayoutPolicy)}、
 * > [height]{@link CommonMethod#height(heightValue: Length | LayoutPolicy)}设置LayoutPolicy.wrapContent表示自适应子组件且被祖先节点尺寸约
 * > 束，设置LayoutPolicy.fixAtIdealSize表示自适应子组件且不被祖先节点尺寸约束。当width设置wrapContent或fixAtIdealSize时，如果水平方向上子组件直接或间接以容器作为锚点，则容器在该
 * > 方向上的尺寸不自适应该组件，垂直方向上同理。
 * >
 * > * RelativeContainer中子组件的[margin]{@link CommonMethod#margin}不同于通用属性margin，指子组件到该方向上锚点的距离。例如，当alignRules设置了left锚点时，
 * > margin.left表示子组件到left锚点的距离。若alignRules未设置某个边界方向的锚点（如未设置left或right锚点），则该方向的margin不生效。
 * 
 * ###### 子组件
 * 
 * 支持多个子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
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