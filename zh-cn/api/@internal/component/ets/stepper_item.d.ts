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

import { CommonMethod } from './common';

/**
* 步骤导航器nextLabel的显示状态。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper
 */
declare enum ItemState {

  /**
   * 正常状态，右侧文本按钮正常显示，可点击进入下一个StepperItem。
   *
   * **说明：**
   *
   * 从API version 8开始支持，从API version 22开始废弃，建议使用[index]{@link SwiperAttribute#index}替代。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#index
   */
  Normal,

  /**
   * 不可用状态，右侧文本按钮灰度显示，不可点击进入下一个StepperItem。
   *
   * **说明：**
   *
   * 从API version 8开始支持，从API version 22开始废弃，建议使用[indicatorInteractive]{@link SwiperAttribute#indicatorInteractive}替代。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#indicatorInteractive
   */
  Disabled,

  /**
   * 等待状态，右侧文本按钮不显示，显示等待进度条，不可点击进入下一个StepperItem。
   *
   * **说明：**
   *
   * 从API version 8开始支持，从API version 22开始废弃，建议使用[Swiper]{@link swiper}替代。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper
   */
  Waiting,

  /**
   * 跳过状态，右侧文本按钮默认显示“跳过”，此时可在Stepper的onSkip回调中自定义相关逻辑。
   *
   * **说明：**
   *
   * 从API version 8开始支持，从API version 22开始废弃，建议使用[index]{@link SwiperAttribute#index}替代。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#index
   */
  Skip
}

/**
* 用作[Stepper]{@link stepper}组件的页面子组件。
*
* > **说明：**
*
* > - 从API version 8开始支持，从API version 22开始废弃，建议使用[Swiper]{@link swiper}替代。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper#SwiperInterface
 * @noninterop
 */
interface StepperItemInterface {

  /**
   * 创建[Stepper]{@link stepper}组件的页面子组件。
   *
   * > **说明：**
   *
   * > 从API version 8开始支持，从API version 22开始废弃，建议使用
   * > [Swiper](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper.md#属性)替代。
   *
   * @returns { StepperItemAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper#SwiperAttribute
   */
  (): StepperItemAttribute;
}

/**
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper#SwiperAttribute
 * @noninterop
 */
declare class StepperItemAttribute extends CommonMethod<StepperItemAttribute> {

  /**
   * 设置左侧文本按钮内容，第一页没有左侧文本按钮，当步骤导航器大于一页时，除第一页外默认值都为“返回”。
   *
   * > **说明：**
   *
   * > 从API version 8开始支持，从API version 22开始废弃，建议使用[showPrevious]{@link SwiperController#showPrevious}替代。
   *
   * @param { string } value - 左侧文本按钮内容。字符串超长时，先缩小再换行（2行）最后截断。
   * @returns { StepperItemAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperController#showPrevious
   */
  prevLabel(value: string): StepperItemAttribute;

  /**
   * 设置右侧文本按钮内容，最后一页默认值为“开始”，其余页默认值为“下一步”。
   *
   * > **说明：**
   *
   * > 从API version 8开始支持，从API version 22开始废弃，建议使用[showNext]{@link SwiperController#showNext}替代。
   *
   * @param { string } value - 右侧文本按钮内容。字符串超长时，先缩小再换行（2行）最后截断。
   * @returns { StepperItemAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperController#showNext
   */
  nextLabel(value: string): StepperItemAttribute;

  /**
   * 设置步骤导航器nextLabel的显示状态。
   *
   * > **说明：**
   *
   * > 从API version 8开始支持，从API version 22开始废弃，建议使用[indicatorInteractive]{@link SwiperAttribute#indicatorInteractive}替代。
   *
   * @param { ItemState } value - 步骤导航器nextLabel的显示状态。<br/>默认值：ItemState.Normal
   * @returns { StepperItemAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#indicatorInteractive
   */
  status(value?: ItemState): StepperItemAttribute;
}

/**
* Defines StepperItem Component instance.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper
 * @noninterop
 */
declare const StepperItemInstance: StepperItemAttribute;

/**
* 用作[Stepper]{@link stepper}组件的页面子组件。
*
* > **说明：**
*
* > - 从API version 8开始支持，从API version 22开始废弃，建议使用[Swiper]{@link swiper}替代。
*
* ###### 子组件
*
* 支持单个子组件。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper
 * @noninterop
 */
declare const StepperItem: StepperItemInterface;