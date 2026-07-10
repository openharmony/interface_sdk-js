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
 * The **EffectComponent** component defines combined special effects for child components to optimize the special 
 * effect drawing performance.
 * 
 * > **NOTE**
 * 
 * > - The APIs provided by this component are system APIs.
 * >
 * > - Currently, this component provides only combined background blur effects for child components.
 * >
 * > - To use this component for combined background blur effects, first replace the **backgroundBlurStyle(BlurStyle)** 
 * > attribute of the target child components with **useEffect(true)**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 * @noninterop
 */
interface EffectComponentInterface {
  /**
   * Creates an **EffectComponent** component.
   *
   * @returns { EffectComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  (): EffectComponentAttribute;

  /**
   * Creates an effect drawing and combination component. If no parameter is passed or the parameter is 
   * EffectLayer.None, the background blur effect of child components is combined. If a parameter is specified, the 
   * current rendering layer is placed on a special layer.
   *
   * @param { EffectComponentOptions } [options] - EffectComponent constructor parameter.
   * @returns { EffectComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  (options?: EffectComponentOptions): EffectComponentAttribute;
}

/**
 * Rendering layer of the EffectComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 20 dynamic
 */
declare enum EffectLayer {
  /**
   * No special effect layer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  NONE = 0,

  /**
   * Charging animation layer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  CHARGE_MOTION = 1,

  /**
   * Charging text layer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  CHARGE_TEXT = 2
}

/**
 * Sets the construction parameters of the current EffectComponent, including the rendering layer of the 
 * EffectComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 20 dynamic
 */
declare interface EffectComponentOptions {
  /**
   * Rendering layer of the EffectComponent.
   * 
   * Default value: EffectLayer.NONE
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  effectLayer?: EffectLayer;
}

/**
 * The universal attributes are supported. Currently, this component only works with the **backgroundBlurStyle** 
 * attribute.
 * 
 * The universal events are not supported.
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
 * The **EffectComponent** component defines combined special effects for child components to optimize the special 
 * effect drawing performance.
 * 
 * > **NOTE**
 * 
 * > - The APIs provided by this component are system APIs.
 * >
 * > - Currently, this component provides only combined background blur effects for child components.
 * >
 * > - To use this component for combined background blur effects, first replace the **backgroundBlurStyle(BlurStyle)** 
 * > attribute of the target child components with **useEffect(true)**.
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