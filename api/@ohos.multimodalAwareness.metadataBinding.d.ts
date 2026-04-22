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
 * The **metadataBinding** module provides metadata binding–specific functions such as metadata transfer, event 
 * subscription, and event unsubscription.
 *
 * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
 * @atomicservice
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace metadataBinding {
  /**
   * Encodes metadata into an image. This API uses a promise to return the result.
   *
   * @param { image.PixelMap } srcImage - Source image.
   * @param { string } metadata - Metadata to be encoded.
   * @returns { Promise<image.PixelMap> } Promise object, which is used to return the image with encoded metadata.
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
   * Decodes the information carried in the image. This API uses a promise to return the result.
   *
   * @param { image.PixelMap } encodedImage - Image with metadata encoded.
   * @returns { Promise<string> } Promise object, which is used to return the encoded metadata of the image.
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
   * Transfers metadata to the application or service that calls the encoding API. This API uses a promise to return the
   * result.
   *
   * @param { string } bundleName - Bundle name used to obtain the application link.
   * @returns { Promise<string> } Promise used to return the application link information of the current page.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function notifyMetadataBindingEvent(bundleName: string): Promise<string>;

  /**
   * Transfers the metadata to be encoded to the MSDP. The MSDP determines whether to transfer the metadata to the 
   * system application or service that calls the encoding API.
   *
   * @param { string } metadata - Metadata to be encoded.
   * @throws { BusinessError } 32100001 - Internal handling failed.
   * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function submitMetadata(metadata: string): void;

  /**
   * Subscribes to a system event to obtain the encoded metadata. The application needs to register a callback to return
   * the encoded metadata when the registered system event occurs.
   *
   * @param { 'operationSubmitMetadata' } type - Event type. This parameter has a fixed value of
   *     **operationSubmitMetadata**, indicating the system application's attempt to obtain the encoded metadata.
   * @param { string } bundleName - Application bundle name.
   * @param { Callback<int> } callback - Callback used to return the encoded metadata.
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
   * Unsubscribes from system events that are used to obtain the encoded metadata. The respective callback will be 
   * unregistered.
   *
   * @param { 'operationSubmitMetadata' } type - Event type. This parameter has a fixed value of
   *     **operationSubmitMetadata**, indicating the system application's attempt to obtain the encoded metadata.
   * @param { string } bundleName - Application bundle name.
   * @param { Callback<int> } callback - Callback used to return the encoded metadata.
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
   * Subscribes to a system event to obtain the encoded metadata.
   *
   * @param { string } bundleName - Bundle name of a third-party application
   * @param { Callback<int> } callback - Call back the screenshot event
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
   * Unsubscribes from system events that are used to obtain the encoded metadata.
   *
   * @param { string } bundleName - Bundle name of a third-party application
   * @param { Callback<int> } [callback] - Call back the screenshot event
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
