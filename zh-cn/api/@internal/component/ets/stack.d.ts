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
 * 设置堆叠容器的子组件对齐方式。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface StackOptions {
    /**
     * 设置子组件在容器内的对齐方式。
     * 
     * 默认值：Alignment.Center 
     * 
     * 非法值：按默认值处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    alignContent?: Alignment;
  }
  
  /**
   * 堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。
   * 
   * > **说明：**
   * 
   * > - 通用属性[align]{@link CommonMethod#align(value: Alignment)}在该组件上支持镜像能力。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @noninterop
   * @since 7 dynamic
   */
  interface StackInterface {
    /**
     * 堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。
     * 
     * > **说明：**
     * >
     * > 过多的组件嵌套会导致性能劣化。在部分场景中，直接使用组件属性或借助系统API的能力可以替代层叠容器的效果，减少了嵌套组件数进而优化性能。最佳实践请参考
     * > [组件嵌套优化-优先使用组件属性代替嵌套组件](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-component-nesting-optimization#section78181114123811)。
     *
     * @param { object } value [since 7 - 17]
     * @param { ?StackOptions } options - 设置子组件在容器内的对齐方式。 [since 18]
     * @returns { StackAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    (options?: StackOptions): StackAttribute;
  }
  
  /**
   * 除支持[通用属性]{@link common}外，还支持以下属性：
   * 
   * 支持[通用事件]{@link common}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @noninterop
   * @since 7 dynamic
   */
  declare class StackAttribute extends CommonMethod<StackAttribute> {
    /**
     * 设置子组件在容器内的对齐方式。该属性与[align]{@link CommonMethod#align(value: Alignment)}同时设置时，后设置的属性生效。该属性与接口的构造入参同时设置时，生效属性上的设置效果。
     *
     * @param { Alignment } value - 所有子组件在容器内的对齐方式。<br/>默认值：Alignment.Center <br />非法值：按默认值处理。
     * @returns { StackAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    alignContent(value: Alignment): StackAttribute;
  
    /**
     * Defines the PointLight
     *
     * @param { PointLightStyle } value - The point light style.
     * @returns { StackAttribute } The attribute of the stack.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    pointLight(value: PointLightStyle): StackAttribute;
  
    /**
     * 设置是否同步加载Stack区域内所有子组件。
     *
     * @param { boolean } enable - 是否同步加载Stack区域内所有子组件。<br/>true表示同步加载；false表示异步加载。<br/>默认值：true<br/>**说明：** <br/>设置为false
     *     时，在首次显示场景，若当前帧布局耗时超过50ms，会将Stack区域内尚未布局的子组件延后到下一帧进行布局。
     * @returns { StackAttribute } The attribute of the Stack.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    syncLoad(enable: boolean): StackAttribute;
  }
  
  /**
   * 堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。
   * 
   * > **说明：**
   * 
   * > - 通用属性[align]{@link CommonMethod#align(value: Alignment)}在该组件上支持镜像能力。
   * 
   * ###### 子组件
   * 
   * 可以包含子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @noninterop
   * @since 7 dynamic
   */
  declare const Stack: StackInterface;
  
  /**
   * Defines Stack Component instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @noninterop [since 11]
   */
  declare const StackInstance: StackAttribute;