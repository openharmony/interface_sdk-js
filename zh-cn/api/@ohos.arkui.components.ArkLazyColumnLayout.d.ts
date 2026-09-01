/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * 定义懒加载列布局组件。
 *
 * @interface LazyColumnLayoutInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface LazyColumnLayoutInterface {
  /**
   * 构造懒加载列布局属性。
   *
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  (): LazyColumnLayoutAttribute;
}

/**
 * 定义懒加载列布局属性。
 *
 * @extends CommonMethod<LazyColumnLayoutAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class LazyColumnLayoutAttribute extends CommonMethod<LazyColumnLayoutAttribute> {
  /**
   * 行之间的间距。
   *
   * @param { LengthMetrics | undefined } space - 行之间的间距。
   *     <br>默认值为0。<br>范围：[0, +∞)。
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  space(space: LengthMetrics | undefined): LazyColumnLayoutAttribute;

  /**
   * 设置行内容的水平对齐方式。
   *
   * @param { HorizontalAlign | undefined } value - 行内容的水平对齐。
   *     <br>默认值为HorizontalAlign.Center。
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  alignItems(value: HorizontalAlign | undefined): LazyColumnLayoutAttribute;

  /**
   * 设置懒加载列布局的header。
   *
   * @param { CustomBuilder | undefined } builder - header生成器函数
   *     <br>传递undefined将移除header。
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  header(builder: CustomBuilder | undefined): LazyColumnLayoutAttribute;

  /**
   * 设置懒加载列布局的footer。
   *
   * @param { CustomBuilder | undefined } builder - footer生成器函数
   *     <br>传入undefined移除footer。
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  footer(builder: CustomBuilder | undefined): LazyColumnLayoutAttribute;

  /**
   * 设置header和footer吸顶吸底样式。
   *
   * @param { StickyStyle | undefined } sticky - header和footer吸顶吸底样式。
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  sticky(sticky: StickyStyle | undefined): LazyColumnLayoutAttribute;

  /**
   * 当子组件在可见区域的索引发生变化时触发。
   *
   * @param { OnVisibleIndexesChangeCallback | undefined } callback - 回调函数，当可见区域中子组件的索引发生变化时触发。
   *     <br>传递undefined将取消注册回调。
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): LazyColumnLayoutAttribute;
}

/**
 * 定义懒式列布局组件。
 *
 *
 * @type { LazyColumnLayoutInterface }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @uicomponent
 * @since 26.0.0 dynamic
 */
export declare const LazyColumnLayout: LazyColumnLayoutInterface;

/**
 * 定义懒加载列布局组件实例。
 *
 *
 * @type { LazyColumnLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const LazyColumnLayoutInstance: LazyColumnLayoutAttribute;