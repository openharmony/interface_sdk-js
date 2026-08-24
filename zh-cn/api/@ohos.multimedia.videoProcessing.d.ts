/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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
 * @file 提供视频画质处理能力。
 * @kit MediaKit
 */

/**
 * 提供VideoProcessor类型，包括AIHDR相关功能。
 * 
 * @syscap SystemCapability.Multimedia.VideoProcessingEngine
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace videoProcessing {
    /**
     * 提供AIHDR功能状态。
     * 
     * @syscap SystemCapability.Multimedia.VideoProcessingEngine
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    interface VideoProcessorAiHdrStatus {
      /**
       * AIHDR是否启用。
       * 
       * @syscap SystemCapability.Multimedia.VideoProcessingEngine
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
       */
      enabled?: boolean;
    }
  
    /**
     * 提供统一的视频处理功能状态。
     * 
     * @syscap SystemCapability.Multimedia.VideoProcessingEngine
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    interface VideoProcessorStatus {
      /**
       * AIHDR状态。
       * 
       * @syscap SystemCapability.Multimedia.VideoProcessingEngine
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
       */
      aiHdr?: VideoProcessorAiHdrStatus;
    }
  
    /**
     * 视频处理功能状态变化的回调类型。
     * 
     * @param { VideoProcessorStatus } status - 视频处理功能状态。
     * @syscap SystemCapability.Multimedia.VideoProcessingEngine
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    type VideoProcessorStatusCallback = (status: VideoProcessorStatus) => void;
  
    /**
     * 提供VideoProcessor类型，包括AIHDR相关功能。
     * 
     * @syscap SystemCapability.Multimedia.VideoProcessingEngine
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    interface VideoProcessor {
      /**
       * 获取当前视频处理功能的状态。
       * 
       * @returns { Promise<VideoProcessorStatus | undefined> } Promise对象，用于返回VideoProcessorStatus；如果无法获取状态，则返回undefined。
       * @throws { BusinessError } 801 - 不支持该能力。
       * @syscap SystemCapability.Multimedia.VideoProcessingEngine
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
       */
      getStatus(): Promise<VideoProcessorStatus | undefined>;
  
      /**
       * 注册视频处理功能状态变化的监听回调。
       * 
       * @param { VideoProcessorStatusCallback } [callback] - 视频处理功能状态发生变化时触发的回调函数。
       * @throws { BusinessError } 801 - 不支持该能力。
       * @throws { BusinessError } 29200007 - 内存不足。
       * @throws { BusinessError } 29200009 - 输入值无效。
       * @syscap SystemCapability.Multimedia.VideoProcessingEngine
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
       */
      onStatusChange(callback: VideoProcessorStatusCallback): void;
  
      /**
       * 取消注册视频处理功能状态变化的监听回调。
       * 
       * @param { VideoProcessorStatusCallback } callback - 需要取消注册的回调函数。
       *     参数不填时，默认取消该事件类型的所有回调函数。
       * @throws { BusinessError } 801 - 不支持该能力。
       * @throws { BusinessError } 29200006 - 不允许执行该操作，可能是由于当前状态不正确。
       * @throws { BusinessError } 29200009 - 输入参数无效。
       * @syscap SystemCapability.Multimedia.VideoProcessingEngine
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
       */
      offStatusChange(callback?: VideoProcessorStatusCallback): void;
    }
  
    /**
     * 创建视频处理实例。
     * 
     * @returns { VideoProcessor } 操作成功时返回VideoProcessor实例，否则返回null。
     * @throws { BusinessError } 801 - 不支持该能力。
     *     由于设备能力受限，createVideoProcessor函数无法正常工作。
     * @throws { BusinessError } 29200003 - 创建视频处理实例失败。
     *     例如，实例数量超过上限。
     * @throws { BusinessError } 29200007 - 内存不足。
     * @syscap SystemCapability.Multimedia.VideoProcessingEngine
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    function createVideoProcessor(): VideoProcessor;
  }
  
  export default videoProcessing;
  