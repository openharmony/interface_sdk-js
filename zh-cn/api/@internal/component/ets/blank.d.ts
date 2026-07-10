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
 * # 子组件
 * 
 * 不支持设置子组件。
 */

/**
 * Create Blank.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface BlankInterface {
    /**
     * 创建空白填充组件。
     * 
     * 从API version 10开始：  
     * 
     * - Blank在父容器[Row]{@link Row}, [Column]{@link Column} 或[Flex]{@link Flex}主轴方向上未设置大小时会自动拉伸、压缩，设置了大小或容器自适应子节点大小时不会自动拉伸、压缩
     * 。
     * - Blank设置主轴方向大小（size）与min时约束关系为max(min, size)。  
     * - Blank在父容器交叉轴上设置大小时不会撑满父容器交叉轴，交叉轴不设置大小时alignSelf默认值为ItemAlign.Stretch，会撑满容器交叉轴。
     *
     * @param { number | string } min - 空白填充组件在容器主轴上的最小大小。<br/>默认值：0，number类型单位为vp，string类型可以显式指定像素单位，如'10
     *     px'。不指定像素单位时，默认单位vp，如'10'，等同于10vp。<br />非法值：按默认值处理。<br/>**说明：** <br/>不支持设置百分比。负值使用默认值。当最小值大于容器可用空间时，使用最小值作为自身大小
     *     并超出容器。
     * @returns { BlankAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    (min?: number | string): BlankAttribute;
  }
  
  /**
   * 除支持[通用属性]{@link CommonMethod}外，还支持以下属性：
   * 
   * 支持[通用事件]{@link CommonMethod}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @noninterop [since 11]
   */
  declare class BlankAttribute extends CommonMethod<BlankAttribute> {
    /**
     * 设置空白填充的填充颜色，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
     *
     * @param { ResourceColor } value - 空白填充的填充颜色。<br/>默认值：Color.Transparent <br />非法值：按默认值处理。
     * @returns { BlankAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    color(value: ResourceColor): BlankAttribute;
  }
  
  /**
   * 空白填充组件，在容器主轴方向上，空白填充组件具有自动填充容器空余部分的能力。仅当父组件为[Row]{@link Row}/[Column]{@link Column}/[Flex]{@link Flex}时生效。
   * 
   * > **说明：**
   * >
   * > 该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @noninterop [since 11]
   */
  declare const Blank: BlankInterface;
  
  /**
   * Defines Blank Component instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @noninterop [since 11]
   */
  declare const BlankInstance: BlankAttribute;