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
   * 设置子组件在容器内的对齐方式。该属性与接口的构造入参同时设置时，以属性设置的值为准。
   * 
   * 默认值：Alignment.Center 
   * 
   * 非法值：按默认值处理。
   * 
   * **说明：** 该参数与[align]{@link CommonMethod#align(value: Alignment)}同时设置时，后设置的属性值会覆盖先设置的属性值。
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
 * 堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。堆叠顺序基于子组件在父容器中的声明顺序，后声明的子组件具有更高的渲染层级，在视觉上覆盖前面的子组件。适用于需要层叠布局的场景，如页面上的悬浮按钮或提示信息、图片或视频上覆
 * 盖文字标签、多层叠加的弹窗或对话框等。相比使用多个容器嵌套实现层叠效果，Stack提供了更简洁高效的解决方案。
 * 
 * > **说明：**
 * >
 * > - 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > - 通用属性[align]{@link CommonMethod#align(value: Alignment)}在该组件上支持镜像能力。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface StackInterface {
  /**
   * 堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。堆叠顺序基于子组件在父容器中的声明顺序，后声明的子组件具有更高的渲染层级，在视觉上覆盖前面的子组件。
   * 
   * > **说明：**
   * >
   * > 组件嵌套层数过多会导致性能下降。在可通过组件属性或系统API实现相同布局效果的场景中，使用这些替代方法可以减少嵌套层数，从而优化性能。最佳实践请参考组件嵌套优化-优先使用组件属性代替嵌套组件。
   * >
   * > 该接口的alignContent参数与[align]{@link CommonMethod#align(value: Alignment)}同时设置时，后设置的属性值会覆盖先设置的属性值。该接口的alignContent参数与
   * > alignContent属性同时设置时，以属性设置的值为准。
   *
   * @param { object } value [since 7 - 17]
   * @param { ?StackOptions } options - 设置子组件在容器内的对齐方式。当需要将子组件对齐到特定位置（如顶部、底部、左上角等）而非默认居中时传入此参数；如果不传入此参数，则使用StackOptions的
   *     默认配置，其中alignContent默认为Alignment.Center。 [since 18]
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
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 支持[通用事件]{@link ./common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class StackAttribute extends CommonMethod<StackAttribute> {
  /**
   * 设置子组件在容器内的对齐方式。该属性与[align]{@link CommonMethod#align(value: Alignment)}同时设置时，后设置的属性值会覆盖先设置的属性值。该属性与接口构造入参同时设置时，以属性设置
   * 的值为准，与设置顺序无关。
   *
   * @param { Alignment } value - 所有子组件在容器内的对齐方式。
   *     <br>默认值：Alignment.Center 
   *     <br>非法值：按默认值处理。
   * @returns { StackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignContent(value: Alignment): StackAttribute;

  /**
   * 设置点光源样式，用于为Stack组件添加点光源效果，影响其堆叠子组件的光照渲染。点光源是从特定位置向四周发射光线的光源类型，可用于增强UI界面的立体感和视觉层次。通过PointLightStyle可配置光源的位置、颜色、强度等参
   * 数。详细信息请参见[PointLightStyle]{@link PointLightStyle}对象说明。
   *
   * @param { PointLightStyle } value - 点光源样式，用于设置点光源照亮周围组件的UI效果，影响组件的光照渲染。PointLightStyle对象包含光源位置、颜色、强度等参数，具体配置方式详见链接说
   *     明。仅Image、Column、Flex、Row、Stack组件支持设置点光源。
   * @returns { StackAttribute } The attribute of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  pointLight(value: PointLightStyle): StackAttribute;

  /**
   * 设置是否同步加载Stack区域内所有子组件。同步加载时，所有子组件会在当前帧内完成布局计算和渲染；异步加载时，系统会根据当前帧的布局耗时动态调整子组件的布局时机，避免阻塞主线程。
   *
   * @param { boolean } enable - 是否同步加载Stack区域内所有子组件。
   *     <br>true表示同步加载；false表示异步加载。
   *     <br>默认值：true
   *     <br>**说明：** 
   *     <br>设置为false时，在首次显示场景，若当前帧布局耗时超过50ms，会将Stack区域内尚未布局的子组件延后到下一帧进行布局。
   * @returns { StackAttribute } The attribute of the Stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  syncLoad(enable: boolean): StackAttribute;
}

/**
 * 堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。堆叠顺序基于子组件在父容器中的声明顺序，后声明的子组件具有更高的渲染层级，在视觉上覆盖前面的子组件。适用于需要层叠布局的场景，如页面上的悬浮按钮或提示信息、图片或视频上覆
 * 盖文字标签、多层叠加的弹窗或对话框等。相比使用多个容器嵌套实现层叠效果，Stack提供了更简洁高效的解决方案。
 * 
 * > **说明：**
 * >
 * > - 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
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
 * @since 7 dynamic
 * @noninterop
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
 * @noninterop
 */
declare const StackInstance: StackAttribute;