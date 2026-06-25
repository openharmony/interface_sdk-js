/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * 特效合并容器组件，用于子节点特效绘制的合并，实现特效的绘制性能优化。
 * 
 * > **说明：**
 * >
 * > - 该组件从API Version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 * >
 * > - 本模块为系统接口。
 * 
 * > - 目前该组件仅支持子组件背景模糊效果的绘制合并优化。
 * >
 * > - 在对子组件的背景模糊特效进行绘制合并时，需要将子组件的backgroundBlurStyle(BlurStyle)属性替换成useEffect(true)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 * @noninterop
 */
interface EffectComponentInterface {
  /**
   * 创建特效绘制合并组件，用于对子组件背景模糊特效的绘制合并。
   *
   * @returns { EffectComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  (): EffectComponentAttribute;

  /**
   * 创建特效绘制合并组件，无参数或者参数为EffectLayer.None时用于对子组件背景模糊特效的绘制合并。有明确参数时表示当前渲染图层置于特殊图层。
   *
   * @param { EffectComponentOptions } [options] - EffectComponent构造参数。
   * @returns { EffectComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  (options?: EffectComponentOptions): EffectComponentAttribute;
}

/**
 * EffectComponent的渲染层级。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 20 dynamic
 */
declare enum EffectLayer {
  /**
   * 无特效层。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  NONE = 0,

  /**
   * 充电动画层。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  CHARGE_MOTION = 1,

  /**
   * 充电文字层。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  CHARGE_TEXT = 2
}

/**
 * 设置当前EffectComponent构造参数，包含EffectComponent的渲染层级。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 20 dynamic
 */
declare interface EffectComponentOptions {
  /**
   * EffectComponent的渲染层级。
   * 
   * 默认值：EffectLayer.NONE
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  effectLayer?: EffectLayer;
}

/**
 * 支持通用属性，目前仅支持对backgroundBlurStyle属性做绘制合并优化。
 * 
 * 不支持通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 * @noninterop
 */
declare class EffectComponentAttribute extends CommonMethod<EffectComponentAttribute> {
  /**
   * Use snapshot when Effect Component have no visual effect.
   *
   * @param { boolean } enable
   * @returns { EffectComponentAttribute }
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 19 dynamic
   */
  alwaysSnapshot(enable: boolean): EffectComponentAttribute;
}

/**
 * 特效合并容器组件，用于子节点特效绘制的合并，实现特效的绘制性能优化。
 * 
 * > **说明：**
 * >
 * > - 该组件从API Version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 * >
 * > - 本模块为系统接口。
 * 
 * > - 目前该组件仅支持子组件背景模糊效果的绘制合并优化。
 * >
 * > - 在对子组件的背景模糊特效进行绘制合并时，需要将子组件的backgroundBlurStyle(BlurStyle)属性替换成useEffect(true)。
 * 
 * ###### 子组件
 * 
 * 可以包含子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 * @noninterop
 */
declare const EffectComponent: EffectComponentInterface;

/**
 * Defines Effect Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 * @noninterop
 */
declare const EffectComponentInstance: EffectComponentAttribute;