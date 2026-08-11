/*
  * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit MultimodalAwarenessKit
 */

import type image from '@ohos.multimedia.image';
import type { Callback } from './@ohos.base';
 
/**
 * 本模块提供记忆链接能力调用，包括编码内容传递、订阅事件和取消订阅事件。记忆链接允许系统应用获取第三方应用的编码内容，支持实时事件监听和回调机制，适用于系统应用请求（如截图）并获取应用链接数据的场景，通过跨应用数据传递提升用户体验。
 *
 * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
 * @atomicservice
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace metadataBinding {
  /**
   * 在图片中加入信息。通过特定的编码算法将metadata信息嵌入到图片中。可用于防伪、版权保护等场景。使用promise异步回调。
   *
   * @param { image.PixelMap } srcImage - 待编码的原始图片，用于嵌入metadata信息的图片。
   * @param { string } metadata - 嵌入的信息。字符串编码格式建议使用UTF-8，长度不应超过128Bytes，且避免包含不可打印字符。
   * @returns { Promise<image.PixelMap> } Promise对象。返回嵌入信息的图片。
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @throws { BusinessError } 32100002 - Encode process fail. Possible causes:
   *     <br>1. Image processing error.
   *     <br>2. Channel coding error.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function encodeImage(srcImage: image.PixelMap, metadata: string): Promise<image.PixelMap>;

  /**
   * 解析图片中携带的信息。通过对应的解码算法从图片中提取嵌入的metadata信息。使用promise异步回调。
   *
   * @param { image.PixelMap } encodedImage - 带有信息的图片，需为通过encodeImage接口处理过的编码图片。
   * @returns { Promise<string> } Promise对象。返回从图片解析出的信息。
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @throws { BusinessError } 32100003 - Decode process fail. Possible causes:
   *     <br>1. Image is not an encoded Image.
   *     <br>2. Image destroyed, decoding failed.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function decodeImage(encodedImage: image.PixelMap): Promise<string>;

  /**
   * 推送待嵌入的信息给调用编码接口的应用或服务。使用promise异步回调。
   *
   * @param { string } bundleName - 应用包名，需为已安装应用的包名。
   * @returns { Promise<string> } Promise对象。返回当前所在页面的applink信息。
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function notifyMetadataBindingEvent(bundleName: string): Promise<string>;

  /**
   * 第三方应用将需要编码的内容传递给接口服务，接口服务将内容传递给调用编码接口的系统应用或服务。
   *
   * @param { string } metadata - 要嵌入图片中的信息。字符串长度不超过128Bytes。
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function submitMetadata(metadata: string): void;

  /**
   * 订阅系统获取编码内容的事件。应用注册回调，事件发生时通过回调通知应用。调用on()方法订阅事件后，必须在不再需要监听事件时调用off()方法取消订阅，释放监听资源。
   *
   * @param { 'operationSubmitMetadata' } type - 事件类型，type为'operationSubmitMetadata'，表示系统应用获取编码内容。
   * @param { string } bundleName - 应用包名，用于标识注册订阅事件的第三方应用。在事件发生时，系统将通过此包名识别并通知对应的注册应用。需确保传入的包名为有效的应用包名。
   * @param { Callback<int> } callback - 回调函数，用于返回事件编码。当事件值为1时表示截图事件。注意：回调函数应快速执行，避免阻塞UI线程。
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @throws { BusinessError } 32100004 - Subscribe Failed. Possible causes:
   *     <br>1. Abnormal system capability.
   *     <br>2. IPC communication abnormality.
   *     <br>3. Algorithm loading exception.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @atomicservice
   * @since 18 dynamic
   */
  function on(type: 'operationSubmitMetadata', bundleName: string, callback: Callback<int>): void;
 
  /**
   * 取消订阅系统获取编码内容的事件。
   *
   * @param { 'operationSubmitMetadata' } type - 事件类型，type为'operationSubmitMetadata'，表示系统应用获取编码内容。
   * @param { string } bundleName - 应用包名，标识注册应用的包名，需与订阅时传入的包名一致。
   * @param { Callback<int> } [callback] - 回调函数，返回编码结果。需要取消监听的回调函数，需与订阅时传入的回调函数一致。建议在订阅时保存回调函数引用，在取消订阅时使用同一引用。若不填，则取消当前监
   *     听该事件的所有回调函数。
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @throws { BusinessError } 32100005 - Unsubscribe Failed. Possible causes:
   *     <br> 1. Abnormal system capability.
   *     <br> 2. IPC communication abnormality.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @atomicservice
   * @since 18 dynamic
   */
  function off(type: 'operationSubmitMetadata', bundleName: string, callback?: Callback<int>): void;

  /**
   * 订阅系统获取编码内容的事件。
   *
   * @param { string } bundleName - 第三方应用的包名。
   * @param { Callback<int> } callback - 回调函数，返回截图事件。
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @throws { BusinessError } 32100004 - Subscribe Failed. Possible causes:
   *     <br>1. Abnormal system capability.
   *     <br>2. IPC communication abnormality.
   *     <br>3. Algorithm loading exception.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @since 23 static
   */
  function onOperationSubmitMetadata(bundleName: string, callback: Callback<int>): void;

  /**
   * 取消订阅系统获取编码内容的事件。
   *
   * @param { string } bundleName - 第三方应用的包名，需与订阅时传入的包名一致。
   * @param { Callback<int> } [callback] - 回调函数，返回截图事件。需要取消监听的回调函数，需与订阅时传入的回调函数一致。若不填，则取消当前监听该事件的所有回调函数。
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @throws { BusinessError } 32100005 - Unsubscribe Failed. Possible causes:
   *     <br>1. Abnormal system capability.
   *     <br>2. IPC communication abnormality.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @since 23 static
   */
  function offOperationSubmitMetadata(bundleName: string, callback?: Callback<int>): void;
}

export default metadataBinding;