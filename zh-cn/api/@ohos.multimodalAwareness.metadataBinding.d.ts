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
 * @file 记忆链接
 * @kit MultimodalAwarenessKit
 */

import type image from '@ohos.multimedia.image';
import type { Callback } from './@ohos.base';
 
/**
 * 本模块提供记忆链接能力调用，用于向图片加入和解析元数据信息，实现信息传递，包括编码内容传递、订阅事件和取消订阅事件。记忆链接允许系统应用获取第三方应用的编码内容，支持实时事件监听和回调机制，适用于需要在图片中存储和传递元数据的场景，可用于防伪、版权保护等场景，为开发者提供灵活的信息嵌入和解析机制。
 *
 * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
 * @atomicservice
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace metadataBinding {
  /**
   * 在图片中加入信息。通过特定的编码算法将metadata信息嵌入到图片中，编码过程对图片的视觉呈现影响极小，嵌入的信息可通过decodeImage接口解析。可用于防伪、版权保护等场景。使用Promise异步回调。
   *
   * @param { image.PixelMap } srcImage - 待编码的原始图片，用于嵌入metadata信息。
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
   * 解析图片中携带的信息。通过对应的解码算法从图片中提取嵌入的metadata信息。使用Promise异步回调。
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
   * 推送待嵌入的元数据信息给调用编码接口的应用或服务。系统会向指定包名的应用推送信息，并返回当前所在页面的applink信息，用于后续的编码处理。使用Promise异步回调。
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
   * 第三方应用将需要编码的内容传递给接口服务，接口服务将内容传递给调用编码接口的系统应用或服务。本接口由第三方应用调用，供系统应用订阅获取数据。系统应用需先通过on('operationSubmitMetadata')方法订阅事件，才能接收到编码内容。
   *
   * @param { string } metadata - 需要编码的内容。字符串长度不超过128Bytes。
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function submitMetadata(metadata: string): void;

  /**
   * 订阅系统应用请求获取编码内容的事件。当系统应用（如截图）请求获取应用的编码内容时触发该事件，应用注册回调后，事件发生时通过回调通知应用。调用on()方法订阅事件后，必须在不再需要监听事件时调用off()方法取消订阅，释放监听资源。
   *
   * @param { string } type - 事件类型，固定传入'operationSubmitMetadata'，表示系统应用获取编码内容。
   * @param { string } bundleName - 应用包名，用于标识注册订阅事件的第三方应用。在事件发生时，系统将通过此包名识别并通知对应的注册应用。需确保传入的包名为有效的应用包名。
   * @param { Callback<number> } callback - 回调函数，用于返回事件码。当事件值为1时表示截图事件，目前仅支持截图事件，取值范围：1（截图事件）。注意：回调函数应快速执行，避免阻塞UI线程。
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @throws { BusinessError } 32100004 - Subscribe Failed. Possible causes:
   *     <br>1. Abnormal system capability.
   *     <br>2. IPC communication abnormality.
   *     <br>3. Algorithm loading exception.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @atomicservice
   * @since 18 dynamic
   */
  function on(type: 'operationSubmitMetadata', bundleName: string, callback: Callback<number>): void;
 
  /**
   * 取消订阅系统获取编码内容的事件。需先调用on('operationSubmitMetadata')方法订阅事件，未订阅时调用不产生效果。取消订阅后，应用将不再接收编码内容传递事件。
   *
   * @param { string } type - 事件类型，固定传入'operationSubmitMetadata'，表示系统应用获取编码内容。
   * @param { string } bundleName - 应用包名，标识注册应用的包名，需与订阅时传入的包名一致。
   * @param { Callback<number> } [callback] - 回调函数，用于返回事件码。需要取消监听的回调函数，需与订阅时传入的回调函数一致。建议在订阅时保存回调函数引用，在取消订阅时使用同一引用。若不填，则取消当前监听该事件的所有回调函数。
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @throws { BusinessError } 32100005 - Unsubscribe Failed. Possible causes:
   *     <br> 1. Abnormal system capability.
   *     <br> 2. IPC communication abnormality.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @atomicservice
   * @since 18 dynamic
   */
  function off(type: 'operationSubmitMetadata', bundleName: string, callback?: Callback<number>): void;

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