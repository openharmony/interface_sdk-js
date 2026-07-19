/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * 定义懒加载垂直瀑布流布局组件。
 *
 * @interface LazyVWaterFlowLayoutInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface LazyVWaterFlowLayoutInterface {
  /**
   * 构造懒加载垂直瀑布流属性。
   *
   * @returns { LazyVWaterFlowLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  (): LazyVWaterFlowLayoutAttribute;
}

/**
 * 定义懒加载瀑布流布局属性。
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class LazyWaterFlowLayoutAttribute<T> extends CommonMethod<T> {
  /**
   * 行之间的间距。
   *
   * @param { LengthMetrics | undefined } value - 行之间的间距。
   *     <br>默认值：LengthMetrics.vp(0)
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  rowsGap(value: LengthMetrics | undefined): T;

  /**
   * 列之间的间距。
   *
   * @param { LengthMetrics | undefined } value - 列之间的间距。
   *     <br>默认值：LengthMetrics.vp(0)
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  columnsGap(value: LengthMetrics | undefined): T;

  /**
   * 设置懒加载瀑布流布局的header。
   *
   * @param { CustomBuilder | undefined } builder - header生成器函数
   *     <br>传递undefined将删除header。
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  header(builder: CustomBuilder | undefined): T;

  /**
   * 设置懒加载瀑布流布局的footer。
   *
   * @param { CustomBuilder | undefined } builder - footer生成器函数
   *     <br>传递undefined将删除footer。
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  footer(builder: CustomBuilder | undefined): T;

  /**
   * 设置header和footer的吸顶吸底样式。
   *
   * @param { StickyStyle | undefined } sticky - header和footer的吸顶吸底样式
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  sticky(sticky: StickyStyle | undefined): T;

  /**
   * 当组件中显示的第一个或最后一个项目更改时调用。
   * 它在组件初始化时会触发一次。
   *
   * @param { OnVisibleIndexesChangeCallback | undefined } callback - 回调函数，当可见区域中子组件的索引发生变化时触发。
   *     <br>传递undefined将取消注册回调。
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): T;
}

/**
 * 定义懒加载垂直瀑布流布局属性。
 *
 * @extends LazyWaterFlowLayoutAttribute<LazyVWaterFlowLayoutAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class LazyVWaterFlowLayoutAttribute extends LazyWaterFlowLayoutAttribute<LazyVWaterFlowLayoutAttribute> {
  /**
   * 该参数用于指定当前瀑布流布局中的列数。
   *
   * @param { string | ItemFillPolicy | undefined } value - 布局中的列数。
   *     <br>默认值：'1fr'
   * @returns { LazyVWaterFlowLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  columnsTemplate(value: string | ItemFillPolicy | undefined): LazyVWaterFlowLayoutAttribute;
}

/**
 * 定义LazyVWaterFlowLayout组件。
 *
 * @type { LazyVWaterFlowLayoutInterface }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @uicomponent
 * @since 26.0.0 dynamic
 */
export declare const LazyVWaterFlowLayout: LazyVWaterFlowLayoutInterface;

/**
 * 定义LazyVWaterFlowLayout组件实例。
 *
 * @type { LazyVWaterFlowLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const LazyVWaterFlowLayoutInstance: LazyVWaterFlowLayoutAttribute;