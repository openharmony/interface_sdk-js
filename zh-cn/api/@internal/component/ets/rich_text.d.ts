/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * 为RichText组件提供接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 11]
 * @atomicservice [since 11 - 11]
 * @since 8 dynamic
 */
interface RichTextInterface {
  /**
   * 设置值。
   *
   * @param { string | Resource } content [since 20]
   *     { string } content [since 8 - 19]
   * @returns { RichTextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 11]
   * @atomicservice [since 11 - 11]
   * @since 8 dynamic
   */
  (content: string | Resource): RichTextAttribute;
}

/**
 * 定义RichText属性函数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 11]
 * @atomicservice [since 11 - 11]
 * @since 8 dynamic
 */
declare class RichTextAttribute extends CommonMethod<RichTextAttribute> {
  /**
   * 当富文本加载开始时触发。
   *
   * @param { function } callback
   * @returns { RichTextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 11]
   * @atomicservice [since 11 - 11]
   * @since 8 dynamic
   */
  onStart(callback: () => void): RichTextAttribute;

  /**
   * 当富文本加载结束时触发。
   *
   * @param { function } callback
   * @returns { RichTextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 11]
   * @atomicservice [since 11 - 11]
   * @since 8 dynamic
   */
  onComplete(callback: () => void): RichTextAttribute;
}

/**
 * 定义RichText组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 11]
 * @atomicservice [since 11 - 11]
 * @since 8 dynamic
 */
declare const RichText: RichTextInterface;

/**
 * 定义RichText组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 11]
 * @atomicservice [since 11 - 11]
 * @since 8 dynamic
 */
declare const RichTextInstance: RichTextAttribute;