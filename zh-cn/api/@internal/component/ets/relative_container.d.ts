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
 * 相对布局组件，用于复杂场景中元素对齐的布局。
 * 
 * 子组件可以通过设置[alignRules]{@link CommonMethod#alignRules(value: AlignRuleOption)}来设置自身在相对容器中的对齐规则。
 * 
 * > **说明：**
 * >
 * > *
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
 * > * 相对布局容器内的子组件的[margin]{@link CommonMethod#margin}含义不同于通用属性的margin，其含义为到该方向上的锚点的距离。若该方向上没有锚点，则该方向的margin不生效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @noninterop
 * @since 9 dynamic
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
     * guideLine距离容器左侧或者顶部的距离。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    start? : Dimension;
  
    /**
     * guideLine距离容器右侧或者底部的距离。
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
   * guideLine参数，用于定义一条guideLine的id、方向和位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  declare interface GuideLineStyle {
    /**
     * guideLine的id，必须是唯一的并且不可与容器内组件重名。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    id : string;
  
    /**
     * 指定guideLine的方向。</br> 垂直方向的guideLine仅能作为组件水平方向的锚点，作为垂直方向的锚点时值为0；水平方向的guideLine仅能作为组件垂直方向的锚点，作为水平方向的锚点时值为0。</br>默认值：
     * Axis.Vertical 
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
     * 指定guideLine的位置。</br>当未声明或声明异常值（如undefined）时，guideLine的位置默认为start: 0。start和end两种声明方式选择一种即可。若同时声明，仅start生效。若容器在某个方向的
     * size被声明为"auto"，则该方向上guideLine的位置只能使用start方式声明（不允许使用百分比）。
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  declare enum LocalizedBarrierDirection {
    /**
     * 屏障在其所有[referencedId]{@link LocalizedBarrierStyle}的最左/右侧，LTR模式时为最左侧，RTL模式时为最右侧。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    START = 0,
  
    /**
     * 屏障在其所有[referencedId]{@link LocalizedBarrierStyle}的最左/右侧, LTR模式时为最右侧，RTL模式时为最左侧。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    END = 1,
  
    /**
     * 屏障在其所有[referencedId]{@link LocalizedBarrierStyle}的最上方。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    TOP = 2,
  
    /**
     * 屏障在其所有[referencedId]{@link LocalizedBarrierStyle}的最下方。
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
   * barrier参数，用于定义一条barrier的id、方向和生成时所依赖的组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  declare interface BarrierStyle {
    /**
     * barrier的id，必须是唯一的并且不可与容器内组件重名。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    id : string;
  
    /**
     * 指定barrier的方向。</br>垂直方向（TOP，BOTTOM）的barrier仅能作为组件的水平方向锚点，用作垂直方向锚点时值为0；水平方向（LEFT，RIGHT）的barrier仅能作为组件的垂直方向锚点，用作水平方向锚点
     * 时值为0。
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
     * 指定生成barrier所依赖的组件。
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
   * barrier参数，用于定义一条barrier的id、方向和生成时所依赖的组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  declare interface LocalizedBarrierStyle {
    /**
     * barrier的id，必须是唯一的并且不可与容器内组件重名。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    id : string;
  
    /**
     * 指定barrier的方向。</br> 垂直方向（TOP，BOTTOM）的barrier仅能作为组件的水平方向锚点，作为垂直方向锚点时值为0。水平方向（START，END）的barrier仅能作为组件的垂直方向锚点，作为水平方向锚点
     * 时值为0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    localizedDirection : LocalizedBarrierDirection;
  
    /**
     * 指定生成barrier所依赖的组件。
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
   * 除支持[通用属性]{@link common}外，还支持如下属性：
   * 
   * 支持[通用事件]{@link common}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @noninterop
   * @since 9 dynamic
   */
  declare class RelativeContainerAttribute extends CommonMethod<RelativeContainerAttribute> {
    /**
     * 设置RelativeContainer容器内的[辅助线](docroot://ui/arkts-layout-development-relative-layout.md#使用辅助线辅助定位子组件)，Array中每个项目即为一条
     * guideLine。
     *
     * @param { Array<GuideLineStyle> } value - RelativeContainer容器内的辅助线。
     * @returns { RelativeContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    guideLine(value: Array<GuideLineStyle>): RelativeContainerAttribute;
  
    /**
     * 设置RelativeContainer容器内的[屏障](docroot://ui/arkts-layout-development-relative-layout.md#多个组件的屏障)，Array中每个项目即为一条
     * barrier。
     *
     * @param { Array<BarrierStyle> } value - RelativeContainer容器内的屏障。
     * @returns { RelativeContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    barrier(value: Array<BarrierStyle>): RelativeContainerAttribute;
  
    /**
     * 设置RelativeContainer容器内的屏障，Array中每个项目即为一条barrier，支持定义镜像模式的屏障线。
     *
     * @param { Array<LocalizedBarrierStyle> } barrierStyle - RelativeContainer容器内的屏障。
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
   * 相对布局组件，用于复杂场景中元素对齐的布局。
   * 
   * 子组件可以通过设置[alignRules]{@link CommonMethod#alignRules(value: AlignRuleOption)}来设置自身在相对容器中的对齐规则。
   * 
   * > **说明：**
   * >
   * > *
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
   * > * 相对布局容器内的子组件的[margin]{@link CommonMethod#margin}含义不同于通用属性的margin，其含义为到该方向上的锚点的距离。若该方向上没有锚点，则该方向的margin不生效。
   * 
   * ###### 子组件
   * 
   * 支持多个子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @noninterop
   * @since 9 dynamic
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