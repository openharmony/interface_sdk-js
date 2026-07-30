/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file 相机选择器
 * @kit CameraKit
 */

import type Context from './application/Context';
import type camera from './@ohos.multimedia.camera';

/**
 * 本模块提供相机拍照与录制的能力。应用可选择媒体类型实现拍照和录制的功能。调用此类接口时，应用必须在界面UIAbility中调用，否则无法启动cameraPicker应用。
 *
 * @syscap SystemCapability.Multimedia.Camera.Core
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace cameraPicker {

  /**
   * 相机选择器的配置信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  class PickerProfile {
    /**
     * 相机的位置。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    cameraPosition: camera.CameraPosition;

    /**
     * 保存配置信息的uri，默认值请参考[文件uri]{@link @ohos.file.fileuri:fileUri.FileUri.constructor}。当前saveUri参数为可选参数，若未配置该参数，则拍摄的照片和视频
     * 会默认存入媒体库中；若不想将照片和视频存入媒体库中，请自行配置应用沙箱内的文件资源路径，如自行传入资源路径时请确保该文件存在且具备写入权限，否则会保存失败。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    saveUri?: string;

    /**
     * 录制的最大时长（单位：秒）。默认为0，不设置最大录制时长。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    videoDuration?: int;
  }

  /**
   * 枚举，相机选择器的媒体类型。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  enum PickerMediaType {
    /**
     * 拍照模式。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    PHOTO = 'photo',

    /**
     * 录制模式。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    VIDEO = 'video'
  }

  /**
   * 相机选择器的处理结果。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  class PickerResult {
    /**
     * 处理的结果，成功返回0，失败返回-1。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    resultCode: int;

    /**
     * 返回的uri地址。若saveUri为空，resultUri为公共媒体路径。若saveUri不为空且具备写权限，resultUri与saveUri相同。若saveUri不为空且不具备写权限，则无法获取到resultUri。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    resultUri: string;

    /**
     * 返回的媒体类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    mediaType: PickerMediaType;
  }

  /**
   * 拉起相机选择器，根据媒体类型进入相应的模式。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 当应用在阔折叠设备上运行时，如果已在设备展开态下启动相机picker，将设备由展开态切换到折叠态，相机picker被自动推至后台。
   *
   * @param { Context } context - 应用上下文。
   * @param { Array<PickerMediaType> } mediaTypes - 媒体类型。
   * @param { PickerProfile } pickerProfile - pickerProfile对象。
   * @returns { Promise<PickerResult> } Promise对象，返回相机选择器的处理结果[PickerResult]{@link cameraPicker.PickerResult}。
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function pick(context: Context, mediaTypes: Array<PickerMediaType>, pickerProfile: PickerProfile): Promise<PickerResult>;
}

export default cameraPicker;