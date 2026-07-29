/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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
 * @file AutoDeviceSwitch
 * @kit CameraKit
 */

import { ErrorCallback, AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/BaseContext';
import image from './@ohos.multimedia.image';
import type colorSpaceManager from './@ohos.graphics.colorSpaceManager';
import photoAccessHelper from './@ohos.file.photoAccessHelper';

/**
 * 本模块为开发者提供一套简单且易于理解的相机服务接口，开发者通过调用接口可以开发相机应用。应用通过访问和操作相机硬件，实现基础操作，如预览、拍照和录像；还可以通过接口组合完成更多操作，如控制闪光灯和曝光时间、对焦或调焦等。
 * 
 * > **说明：**
 * >
 * > - 当前页面仅包含本模块的系统接口，其他公开接口参见[@ohos.multimedia.camera (相机管理)]{@link camera}。
 *
 * @syscap SystemCapability.Multimedia.Camera.Core
 * @atomicservice [since 12]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace camera {
  /**
   * 获取相机管理器实例，同步返回结果。
   *
   * @param { Context } context - 应用上下文。
   * @returns { CameraManager } 相机管理器。
   * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
   * @throws { BusinessError } 7400201 - Camera service fatal error.
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  function getCameraManager(context: Context): CameraManager;

  /**
   * 枚举，相机状态。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum CameraStatus {
    /**
     * 新的相机出现。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_STATUS_APPEAR = 0,

    /**
     * 相机被移除。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_STATUS_DISAPPEAR = 1,

    /**
     * 相机可用。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_STATUS_AVAILABLE = 2,

    /**
     * 相机不可用。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_STATUS_UNAVAILABLE = 3
  }

  /**
   * 枚举，折叠机折叠状态。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FoldStatus {
    /**
     * 表示当前设备不可折叠。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    NON_FOLDABLE = 0,

    /**
     * 表示当前设备折叠状态为完全展开。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    EXPANDED = 1,

    /**
     * 表示当前设备折叠状态为折叠。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    FOLDED = 2
  }

  /**
   * 枚举，传感器颜色滤镜排列方式。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum SensorColorFilterArrangement {  
    /**
     * 蓝绿绿红（Blue-Green-Green-Red）滤镜排列方式。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    BGGR = 0,

    /**
     * 绿蓝红绿（Green-Blue-Red-Green）滤镜排列方式。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    GBRG = 1,

    /**
     * 绿红蓝绿（Green-Red-Blue-Green）滤镜排列方式。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    GRBG = 2,

    /**
     * 红绿绿蓝（Red-Green-Green-Blue）滤镜排列方式。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    RGGB = 3
  }

  /**
   * 相机配置信息项。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Profile {
    /**
     * 输出格式。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly format: CameraFormat;

    /**
     * 分辨率。
     * 
     * 设置的是相机的分辨率宽度和高度，而非实际输出图像的宽度和高度。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly size: Size;
  }

  /**
   * 帧率范围。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface FrameRateRange {
    /**
     * 最小帧率。单位：fps。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly min: int;

    /**
     * 最大帧率。单位：fps。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly max: int;
  }

  /**
   * 视频配置信息项，继承[Profile]{@link camera.Profile}。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface VideoProfile extends Profile {
    /**
     * 帧率范围。单位：fps(frames per second)。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly frameRateRange: FrameRateRange;
  }

  /**
   * 相机输出能力项。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CameraOutputCapability {
    /**
     * 支持的预览配置信息集合。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly previewProfiles: Array<Profile>;

    /**
     * 支持的拍照配置信息集合。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly photoProfiles: Array<Profile>;

    /**
     * 支持的录像配置信息集合。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly videoProfiles: Array<VideoProfile>;

    /**
     * Supported depth stream profiles.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly depthProfiles: Array<DepthProfile>;

    /**
     * 支持的metadata流类型信息集合。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly supportedMetadataObjectTypes: Array<MetadataObjectType>;
  }

  /**
   * 相机控制器效果激活状态信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface ControlCenterStatusInfo {
    /**
     * 相机控制器效果类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readonly effectType: ControlCenterEffectType;
   
    /**
     * 相机控制器效果激活状态。true表示已激活，false表示未激活。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readonly isActive: boolean;
  }

  /**
   * 相机错误码。
   * 
   * 接口使用不正确以及on接口监听error状态返回。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum CameraErrorCode {
    /**
     * 参数缺失或者参数类型不对。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    INVALID_ARGUMENT = 7400101,

    /**
     * 操作流程不对，不允许。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    OPERATION_NOT_ALLOWED = 7400102,

    /**
     * session 未配置返回。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    SESSION_NOT_CONFIG = 7400103,

    /**
     * session 未运行返回。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    SESSION_NOT_RUNNING = 7400104,

    /**
     * session 配置已锁定返回。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    SESSION_CONFIG_LOCKED = 7400105,

    /**
     * 设备设置已锁定返回。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_SETTING_LOCKED = 7400106,

    /**
     * 设备重复打开返回。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CONFLICT_CAMERA = 7400107,

    /**
     * 安全原因相机被禁用。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_DISABLED = 7400108,

    /**
     * 相机被抢占导致无法使用。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_PREEMPTED = 7400109,

    /**
     * 与当前配置存在冲突。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    UNRESOLVED_CONFLICTS_WITH_CURRENT_CONFIGURATIONS = 7400110,

    /**
     * 相机服务异常返回。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    SERVICE_FATAL_ERROR = 7400201,

    /**
     * Camera frequently switched.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    DEVICE_FREQUENTLY_SWITCHED = 7400111,

    /**
     * Camera lens retracted.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    CAMERA_LENS_RETRACTED = 7400112
  }

  /**
   * Enumerates the types of the parameters used for prelaunch.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum RestoreParamType {
    /**
     * The parameter used for prelaunch is not required.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NO_NEED_RESTORE_PARAM = 0,

    /**
     * Persistent parameter type. This parameter is used to restore stream information with the specified time point.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    PRESISTENT_DEFAULT_PARAM = 1,

    /**
     * Temporary parameter type. This parameter is used to restore stream information only within a period of time after
     * the camera application is closed. Its priority is higher than that of the persistent parameter.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    TRANSIENT_ACTIVE_PARAM = 2
  }

  /**
   * Defines the effect parameters used to preheat an image.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface SettingParam {
    /**
     * Skin smoothing level, which is obtained through
     * [Beauty.getSupportedBeautyRange]{@link camera.BeautyQuery.getSupportedBeautyRange}. For example, the value **1**
     * indicates level-1 smoothing.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    skinSmoothLevel: int;

    /**
     * Face slimming level, which is obtained through
     * [Beauty.getSupportedBeautyRange]{@link camera.BeautyQuery.getSupportedBeautyRange}. For example, the value **1**
     * indicates level-1 slimming.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    faceSlender: int;

    /**
     * Skin tone perfection level, which is obtained through
     * [Beauty.getSupportedBeautyRange]{@link camera.BeautyQuery.getSupportedBeautyRange}. For example, the value
     * **0xBF986C** indicates a specific color.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    skinTone: int;
  }

  /**
   * Defines the camera prelaunch configuration.
   * Currently, the configuration is used for sensor-level prelaunch. It will be used for stream-level prelaunch in a
   * later version.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrelaunchConfig {
    /**
     * Camera device.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    cameraDevice: CameraDevice;

    /**
     * Type of the parameter used for prelaunch.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    restoreParamType?: RestoreParamType;

    /**
     * Activation time, in minutes.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    activeTime?: int;

    /**
     * Setting parameter.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    settingParam?: SettingParam;
  }

  /**
   * 相机管理器类，使用前需要通过[getCameraManager]{@link camera.getCameraManager}接口获取相机管理实例。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CameraManager {
    /**
     * 获取支持的基础相机设备对象（如获取CameraType为CAMERA_TYPE_DEFAULT的默认相机），同步返回结果。
     * 
     * 如果需要获取额外的相机设备对象（如获取CameraType为CAMERA_TYPE_TELEPHOTO的长焦相机），可通过
     * [getCameraDevices]{@link camera.CameraManager.getCameraDevices}接口获取。
     *
     * @returns { Array<CameraDevice> } 相机设备列表。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    getSupportedCameras(): Array<CameraDevice>;

    /**
     * 查询相机设备支持的输出能力，同步返回结果。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { CameraDevice } camera - Camera device.
     * @returns { CameraOutputCapability } 相机输出能力。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode)
     */
    getSupportedOutputCapability(camera: CameraDevice): CameraOutputCapability;

    /**
     * 获取指定的相机设备对象支持的模式，同步返回结果。
     *
     * @param { CameraDevice } camera - Camera device.
     * @returns { Array<SceneMode> } 相机支持的模式列表。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getSupportedSceneModes(camera: CameraDevice): Array<SceneMode>;

    /**
     * 查询相机设备在指定模式下支持的输出能力，同步返回结果。
     *
     * @param { CameraDevice } camera - Camera device.
     * @param { SceneMode } mode - Scene mode.
     * @returns { CameraOutputCapability } 相机输出能力。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode): CameraOutputCapability;

    /**
     * 查询指定相机在指定模式下支持的完整输出能力，包括未压缩图（YUV）、HEIF和HDR等能力。
     * 
     * > **说明：**
     * >
     * > 使用YUV，HEIF或HDR等能力前，需要先显式调用此方法确保获取完整输出能力。
     *
     * @param { CameraDevice } camera - Camera device.
     * @param { SceneMode } mode - Scene mode.
     * @returns { CameraOutputCapability } 相机输出能力。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    getSupportedFullOutputCapability(camera: CameraDevice, mode: SceneMode): CameraOutputCapability;

    /**
     * 查询当前相机是否禁用。
     *
     * @returns { boolean } 返回true表示相机被禁用，返回false表示相机未被禁用。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    isCameraMuted(): boolean;

    /**
     * Checks whether the camera device can be muted.
     *
     * @returns { boolean } Check result for whether the camera device can be muted. **true** if it can be muted,
     *     **false** otherwise.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 13]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    isCameraMuteSupported(): boolean;

    /**
     * Mutes or unmutes the camera device.
     *
     * @param { boolean } mute - Mutes or unmutes the camera device. **true** to mute, **false** otherwise.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 12
     * @useinstead camera.CameraManager.muteCameraPersistent
     */
    muteCamera(mute: boolean): void;

    /**
     * Mutes the camera device permanently.
     *
     * @permission ohos.permission.CAMERA_CONTROL
     * @param { boolean } mute - Mutes or unmutes the camera device. **true** to mute, **false** otherwise.
     * @param { PolicyType } type - Policy type. For details about the available options, see
     *     [PolicyType]{@link camera.PolicyType}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    muteCameraPersistent(mute: boolean, type: PolicyType): void;

    /**
     * 使用CameraDevice对象创建CameraInput实例，同步返回结果。
     * 
     * 该接口使用前首先通过[getSupportedCameras]{@link camera.CameraManager.getSupportedCameras}接口查询当前设备支持的相机设备信息列表，开发者需要根据具体使用场景选
     * 择符合需求的相机设备，然后使用该接口创建CameraInput实例。
     *
     * @permission ohos.permission.CAMERA
     * @param { CameraDevice } camera - CameraDevice对象，通过
     *     [getSupportedCameras]{@link camera.CameraManager.getSupportedCameras} 接口获取。
     * @returns { CameraInput } 返回CameraInput实例。接口调用失败会返回相应错误码，错误码类型为[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed. [since 12]
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    createCameraInput(camera: CameraDevice): CameraInput;

    /**
     * 根据相机位置和类型创建CameraInput实例，同步返回结果。
     * 
     * 该接口使用前需要开发者根据应用具体使用场景自行指定相机位置和类型，例如打开前置相机进入自拍功能。
     *
     * @permission ohos.permission.CAMERA
     * @param { CameraPosition } position - 相机位置，首先通过
     *     [getSupportedCameras]{@link camera.CameraManager.getSupportedCameras} 接口获取支持的相机设备对象，然后根据返回的相机设备对象获取设备位置信息。
     * @param { CameraType } type - 相机类型，首先通过 [getSupportedCameras]{@link camera.CameraManager.getSupportedCameras} 接口获取
     *     支持的相机设备对象，然后根据返回的相机设备对象获取设备类型信息。
     * @returns { CameraInput } 返回CameraInput实例。接口调用失败会返回相应错误码，错误码类型为[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed. [since 12]
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    createCameraInput(position: CameraPosition, type: CameraType): CameraInput;

    /**
     * Creates a CameraInput instance by camera and calling token.
     * 
     * Before using this interface, first through the getSupportedCameras interface to query the current list of camera
     * devices supported by the device, the developer needs to be based on specific scenarios to choose the camera
     * device
     * that meets the needs of the developer, and then use this interface to create a CameraInput instance.
     *
     * @permission ohos.permission.CAMERA
     * @param { CameraDevice } camera - Camera device used to create the instance.
     * @param { int } tokenId - The calling token id.
     * @returns { CameraInput } Returns a CameraInput instance. Failure of an interface call returns the corresponding
     *     error code, which is of type CameraErrorCode.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    createCameraInputWithTokenId(camera: CameraDevice, tokenId: int): CameraInput;

    /**
     * 创建预览输出对象，同步返回结果。
     *
     * @param { Profile } profile - 支持的预览配置信息，通过
     *     [getSupportedOutputCapability]{@link camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode)}
     *     接口获取。
     * @param { string } surfaceId - 从[XComponent]{@link XComponent}或者
     *     [ImageReceiver]{@link @ohos.multimedia.image:image.ImageReceiver}组件获取的surfaceId。
     * @returns { PreviewOutput } PreviewOutput实例。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    createPreviewOutput(profile: Profile, surfaceId: string): PreviewOutput;

    /**
     * 创建无配置信息的预览输出对象，同步返回结果。该接口需配合[preconfig]{@link camera.PhotoSession.preconfig}一起使用。
     *
     * @param { string } surfaceId - 从[XComponent]{@link XComponent}或者
     *     [ImageReceiver]{@link @ohos.multimedia.image:image.ImageReceiver}组件获取的surfaceId。
     * @returns { PreviewOutput } PreviewOutput实例。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    createPreviewOutput(surfaceId: string): PreviewOutput;

    /**
     * 创建拍照输出对象，同步返回结果。
     * 
     * > **说明：**
     * >
     * > - 从API version 10开始支持，从API version 11开始废弃。
     * >
     * > - 该接口只支持创建JPEG格式的拍照输出对象。
     *
     * @param { Profile } profile - 支持的拍照配置信息，通过
     *     [getSupportedOutputCapability]{@link camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode)}
     *     接口获取。
     * @param { string } surfaceId - 从[ImageReceiver]{@link @ohos.multimedia.image:image.ImageReceiver}获取的surfaceId。
     * @returns { PhotoOutput } PhotoOutput实例。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.CameraManager.createPhotoOutput(profile?: Profile)
     */
    createPhotoOutput(profile: Profile, surfaceId: string): PhotoOutput;

    /**
     * 创建拍照输出对象，同步返回结果。
     *
     * @param { Profile } profile - 支持的拍照配置信息，通过
     *     [getSupportedOutputCapability]{@link camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode)}
     *     接口获取。
     *     <br>API version 11时，该参数必填；从API version 12开始，如果使用[preconfig]{@link camera.PhotoSession.preconfig}进行预配置，传入
     *     profile参数会覆盖preconfig的预配置参数。
     * @returns { PhotoOutput } PhotoOutput实例。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    createPhotoOutput(profile?: Profile): PhotoOutput;

    /**
     * 创建录像输出对象，同步返回结果。
     * 
     * 在录像模式下，使能SDR或HDR_VIVID拍摄效果时，CameraFormat与ColorSpace必须按照下列表格中的对应关系配置，若不满足表格中CameraFormat与ColorSpace配置，会导致预览异常等问题。
     * 
     * | SDR/HDR拍摄         | CameraFormat             | ColorSpace       |
     * |--------------------|--------------------------|------------------|
     * | SDR                | CAMERA_FORMAT_YUV_420_SP | BT709_LIMIT      |
     * | HDR_VIVID          | CAMERA_FORMAT_YCRCB_P010<br>CAMERA_FORMAT_YCBCR_P010 | BT2020_HLG_LIMIT<br>BT2020_HLG_FULL |
     *
     * @param { VideoProfile } profile - 支持的录像配置信息，通过
     *     [getSupportedOutputCapability]{@link camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode)}
     *     接口获取。
     * @param { string } surfaceId - 从[AVRecorder]{@link @ohos.multimedia.media:media.AVRecorder}获取的surfaceId。
     * @returns { VideoOutput } VideoOutput实例。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    createVideoOutput(profile: VideoProfile, surfaceId: string): VideoOutput;

    /**
     * 创建无配置信息的录像输出对象，同步返回结果。该接口需配合[preconfig]{@link camera.VideoSession.preconfig}功能一起使用。
     *
     * @param { string } surfaceId - 从[AVRecorder]{@link @ohos.multimedia.media:media.AVRecorder}获取的surfaceId。
     * @returns { VideoOutput } VideoOutput实例。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    createVideoOutput(surfaceId: string): VideoOutput;

    /**
     * 创建metadata流输出对象，同步返回结果。
     *
     * @param { Array<MetadataObjectType> } metadataObjectTypes - metadata流类型信息，通过
     *     [getSupportedOutputCapability]{@link camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode)}
     *     接口获取。
     * @returns { MetadataOutput } MetadataOutput实例。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    createMetadataOutput(metadataObjectTypes: Array<MetadataObjectType>): MetadataOutput;

    /**
     * Creates a DepthDataOutput instance. This API returns the result synchronously.
     *
     * @param { DepthProfile } profile - Supported preview profile, which is obtained through
     *
     *     [getSupportedOutputCapability]{@link camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode)}.
     * @returns { DepthDataOutput } DepthDataOutput instance. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    createDepthDataOutput(profile: DepthProfile): DepthDataOutput;

    /**
     * 创建CaptureSession实例，同步返回结果。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { CaptureSession } CaptureSession实例。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.CameraManager.createSession
     */
    createCaptureSession(): CaptureSession;

    /**
     * 创建指定SceneMode的Session实例，同步返回结果。
     *
     * @param { SceneMode } mode - 相机支持的模式。如果传入的参数异常（如超出范围、传入null或未定义等），实际接口不会生效。
     * @returns { T } Session实例。接口调用失败会返回相应的错误码，错误码类型为[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @throws { BusinessError } 7400101 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     *     3. Parameter verification failed. [since 19]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    createSession<T extends Session>(mode: SceneMode): T;

    /**
     * 相机设备状态回调，通过注册回调函数获取相机的状态变化。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'cameraStatus' } type - 监听事件，固定为'cameraStatus'。cameraManager对象获取成功后可监听。目前只支持对设备打开或者关闭会触发该事件并返回对应信息。
     * @param { AsyncCallback<CameraStatusInfo> } callback - 回调函数，用于获取镜头状态变化信息。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    on(type: 'cameraStatus', callback: AsyncCallback<CameraStatusInfo>): void;

    /**
     * Subscribes camera status change event callback.
     *
     * @param { AsyncCallback<CameraStatusInfo> } callback - Callback used to get the camera status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onCameraStatus(callback: AsyncCallback<CameraStatusInfo>): void;

    /**
     * 相机设备状态注销回调，通过注销回调函数取消获取相机的状态变化。
     *
     * @param { 'cameraStatus' } type - 监听事件，固定为'cameraStatus'。cameraManager对象获取成功后可监听。
     * @param { AsyncCallback<CameraStatusInfo> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    off(type: 'cameraStatus', callback?: AsyncCallback<CameraStatusInfo>): void;

    /**
     * Unsubscribes from camera status change event callback.
     *
     * @param { AsyncCallback<CameraStatusInfo> } [callback] - Callback used to get the camera status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offCameraStatus(callback?: AsyncCallback<CameraStatusInfo>): void;

    /**
     * 注册折叠设备折叠状态变化的监听。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'foldStatusChange' } type - 监听事件，固定为'foldStatusChange'。表示折叠设备折叠状态发生变化。
     * @param { AsyncCallback<FoldStatusInfo> } callback - 回调函数。返回折叠设备折叠信息。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     */
    on(type: 'foldStatusChange', callback: AsyncCallback<FoldStatusInfo>): void;

    /**
     * Subscribes fold status change event callback.
     *
     * @param { AsyncCallback<FoldStatusInfo> } callback - Callback used to get the fold status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onFoldStatusChange(callback: AsyncCallback<FoldStatusInfo>): void;

    /**
     * 关闭折叠设备折叠状态变化的监听。
     *
     * @param { 'foldStatusChange' } type - 监听事件，固定为'foldStatusChange'。表示折叠设备折叠状态发生变化。
     * @param { AsyncCallback<FoldStatusInfo> } callback - 回调函数，返回折叠设备折叠信息。如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有
     *     callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     */
    off(type: 'foldStatusChange', callback?: AsyncCallback<FoldStatusInfo>): void;

    /**
     * Unsubscribes from fold status change event callback.
     *
     * @param { AsyncCallback<FoldStatusInfo> } [callback] - Callback used to get the fold status change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offFoldStatusChange(callback?: AsyncCallback<FoldStatusInfo>): void;

    /**
     * Subscribes to camera mute status events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'cameraMute' } type - Event type. The value is fixed at **'cameraMute'**, indicating the camera mute
     *     status. The event can be listened for when a CameraManager instance is obtained. This event is triggered and
     *     the status is returned when the camera device is muted or unmuted.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the camera mute status. **true** if muted,
     *     **false** otherwise.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 13]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     */
    on(type: 'cameraMute', callback: AsyncCallback<boolean>): void;

    /**
     * Subscribes camera mute change event callback.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to get the camera mute change.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onCameraMute(callback: AsyncCallback<boolean>): void;

    /**
     * Unsubscribes from camera mute status events.
     *
     * @param { 'cameraMute' } type - Event type. The value is fixed at **'cameraMute'**, indicating the camera mute
     *     status. The event can be listened for when a CameraManager instance is obtained.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the camera mute status. **true** if muted,
     *     **false** otherwise. This parameter is optional. If this parameter is specified, the subscription to the
     *     specified event **on('cameraMute')** with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.)
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 13]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     */
    off(type: 'cameraMute', callback?: AsyncCallback<boolean>): void;

    /**
     * Unsubscribes from camera mute change event callback.
     *
     * @param { AsyncCallback<boolean> } [callback] - Callback used to get the camera mute change.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offCameraMute(callback?: AsyncCallback<boolean>): void;

    /**
     * Subscribes control center status change event callback.
     *
     * @param { 'controlCenterStatusChange' } type - Event type.
     * @param { AsyncCallback<boolean> } callback - Callback used to get the control center status change.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'controlCenterStatusChange', callback: AsyncCallback<boolean>): void;

    /**
     * Subscribes control center status change event callback.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to get the control center status change.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onControlCenterStatusChange(callback: AsyncCallback<boolean>): void;

    /**
     * Unsubscribes control center status change event callback.
     *
     * @param { 'controlCenterStatusChange' } type - Event type.
     * @param { AsyncCallback<boolean> } [callback] - Callback used to get the control center status change.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'controlCenterStatusChange', callback?: AsyncCallback<boolean>): void;

    /**
     * Unsubscribes control center status change event callback.
     *
     * @param { AsyncCallback<boolean> } [callback] - Callback used to get the control center status change.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offControlCenterStatusChange(callback?: AsyncCallback<boolean>): void;

    /**
     * Check if the control center active.
     *
     * @returns { boolean } this value that specifies whether the control center active.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isControlCenterActive(): boolean;

    /**
     * Create a ControlCenterSession instance.
     *
     * @permission ohos.permission.CAMERA_CONTROL
     * @returns { ControlCenterSession } the ControlCenterSession instance.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    createControlCenterSession(): ControlCenterSession;

    /**
     * Checks whether a camera device supports prelaunch.
     *
     * @param { CameraDevice } camera - Camera device.
     * @returns { boolean } Check result for the support of prelaunch. **true** if supported, **false** otherwise.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    isPrelaunchSupported(camera: CameraDevice): boolean;

    /**
     * Sets prelaunch configuration.
     * Before the setting, call [isPrelaunchSupported]{@link camera.CameraManager.isPrelaunchSupported} to check whether
     * the camera device supports prelaunch.
     *
     * @permission ohos.permission.CAMERA
     * @param { PrelaunchConfig } prelaunchConfig - Prelaunch configuration.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 202 - Not System Application. [since 12]
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    setPrelaunchConfig(prelaunchConfig: PrelaunchConfig): void;

    /**
     * Prelaunches the camera device. This API is called when a user clicks the system camera icon to start the camera
     * application.
     *
     * @throws { BusinessError } 202 - Not System Application. [since 13]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    prelaunch(): void;

    /**
     * Pre-switches a camera device to speed up its startup.
     *
     * @param { string } cameraId - Camera ID.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    preSwitchCamera(cameraId: string): void;

    /**
     * 创建延迟预览输出对象，在配流时替代普通的预览输出对象加入数据流。
     *
     * @param { Profile } profile - 支持的预览配置信息，通过
     *     [getSupportedOutputCapability]{@link camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode)}
     *     接口获取。
     * @returns { PreviewOutput } PreviewOutput实例。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 23]
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 24]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    createDeferredPreviewOutput(profile: Profile): PreviewOutput;

    /**
     * 检测设备是否支持手电筒。
     *
     * @returns { boolean } 表示设备是否支持手电筒，true表示设备支持手电筒，false表示设备不支持手电。
     *     <br>如果返回false，则[isTorchModeSupported]{@link camera.CameraManager.isTorchModeSupported}、
     *     [getTorchMode]{@link camera.CameraManager.getTorchMode}、
     *     [setTorchMode]{@link camera.CameraManager.setTorchMode}、
     *     [isTorchLevelControlSupported]{@link camera.CameraManager.isTorchLevelControlSupported}和
     *     [setTorchModeOnWithLevel]{@link camera.CameraManager.setTorchModeOnWithLevel}都不会生效。
     *     <br>若接口调用失败，返回undefined。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    isTorchSupported(): boolean;

    /**
     * 检测是否支持设置的手电筒模式。
     *
     * @param { TorchMode } mode - 手电筒模式。传参为null或者undefined，作为0处理，手电筒关闭。
     * @returns { boolean } 返回true表示设备支持设置的手电筒模式，返回false表示设备不支持的手电筒模式。若接口调用失败，返回undefined。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    isTorchModeSupported(mode: TorchMode): boolean;

    /**
     * 获取当前设备手电筒模式。
     *
     * @returns { TorchMode } 返回设备当前手电筒模式。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getTorchMode(): TorchMode;

    /**
     * 设置设备手电筒模式。
     *
     * @param { TorchMode } mode - 手电筒模式。传参为null或者undefined，作为0处理，手电筒关闭。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect. [since 11 - 17]
     * @throws { BusinessError } 7400102 - Operation not allowed. [since 12]
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setTorchMode(mode: TorchMode): void;

    /**
     * 检测设备是否支持手电筒亮度调节功能。
     *
     * @returns { boolean } 表示设备是否支持手电筒亮度调节功能。返回true表示支持，返回false表示不支持。若接口调用失败，返回undefined。
     * @throws { BusinessError } 202 - Not System Application. [since 23 - 24]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @stagemodelonly
     * @atomicservice [since 26.0.0]
     * @since 23 dynamic&static
     */
    isTorchLevelControlSupported(): boolean;

    /**
     * 手电筒设置指定亮度级别。
     *
     * @param { double } torchLevel - 手电筒亮度级别。通常范围是[0.0, 1.0]（0.0为最暗，1.0为最亮）。
     * @throws { BusinessError } 202 - Not System Application. [since 23 - 24]
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @stagemodelonly
     * @atomicservice [since 26.0.0]
     * @since 23 dynamic&static
     */
    setTorchModeOnWithLevel(torchLevel: double): void;

    /**
     * 手电筒状态变化回调，通过注册回调函数获取手电筒状态变化。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'torchStatusChange' } type - 监听事件，固定为'torchStatusChange'。cameraManager对象获取成功后可监听。目前只支持手电筒打开，手电筒关闭，手电筒不可
     *     用，手电筒恢复可用会触发该事件并返回对应信息。
     * @param { AsyncCallback<TorchStatusInfo> } callback - 回调函数，用于获取手电筒状态变化信息。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    on(type: 'torchStatusChange', callback: AsyncCallback<TorchStatusInfo>): void;

    /**
     * Subscribes torch status change event callback.
     *
     * @param { AsyncCallback<TorchStatusInfo> } callback - Callback used to return the torch status change
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onTorchStatusChange(callback: AsyncCallback<TorchStatusInfo>): void;

    /**
     * 手电筒状态变化注销回调，通过注销回调函数取消获取手电筒状态变化。
     *
     * @param { 'torchStatusChange' } type - 监听事件，固定为'torchStatusChange'。cameraManager对象获取成功后可监听。
     * @param { AsyncCallback<TorchStatusInfo> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    off(type: 'torchStatusChange', callback?: AsyncCallback<TorchStatusInfo>): void;

    /**
     * Unsubscribes torch status change event callback.
     *
     * @param { AsyncCallback<TorchStatusInfo> } [callback] - Callback used to return the torch status change
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offTorchStatusChange(callback?: AsyncCallback<TorchStatusInfo>): void;

    /**
     * 根据相机位置和相机类型查询对应相机。
     * 
     * 获取指定[CameraPosition]{@link camera.CameraPosition}和[CameraType]{@link camera.CameraType}的相机镜头，如果该接口返回结果为undefined，
     * 表示当前设备未查询到该镜头。
     *
     * @param { CameraPosition } position - 需要得到的CameraDevice对象对应的CameraPosition条件。
     * @param { CameraType } type - 需要得到的CameraDevice对象对应的CameraType条件。
     * @returns { CameraDevice } 根据相机位置和相机类型查询的对应相机。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    getCameraDevice(position: CameraPosition, type: CameraType): CameraDevice;

    /**
     * 获取指定相机设备的并发信息。返回空数组表示不支持并发。
     *
     * @param { Array<CameraDevice> } cameras - 一组CameraDevice相机设备，并得到与这一组CameraDevice对应的并发信息，推荐设置为由
     *     [getCameraDevice]{@link camera.CameraManager.getCameraDevice}获取的前置与后置两个用于并发的相机设备。
     * @returns { Array<CameraConcurrentInfo> } 一组CameraDevice相机设备对象对应的并发信息，与CameraDevice相机设备一一对应。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    getCameraConcurrentInfos(cameras: Array<CameraDevice>): Array<CameraConcurrentInfo>;

    /**
     * 根据相机位置、相机类型数组和连接类型查询符合条件的相机列表。
     *
     * @param { CameraPosition } position - 相机的位置。
     * @param { Array<CameraType> } types - 相机类型数组。
     * @param { ConnectionType } connectType - 相机的连接类型。
     * @returns { Array<CameraDevice> } 根据相机位置、相机类型数组和连接类型查询符合条件的相机列表。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    getCameraDevices(position: CameraPosition, types: Array<CameraType>, connectType: ConnectionType): Array<CameraDevice>;
  }

  /**
   * 手电筒回调返回的接口实例，表示手电筒状态信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface TorchStatusInfo {
    /**
     * 手电筒是否可用。true表示手电筒可用，false表示手电筒不可用。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly isTorchAvailable: boolean;

    /**
     * 手电筒是否被激活。true表示手电筒被激活，false表示手电筒未被激活。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly isTorchActive: boolean;

    /**
     * 手电筒亮度等级，取值范围为[0,1]，越靠近1，亮度越大。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly torchLevel: double;
  }

  /**
   * 枚举，手电筒模式。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  enum TorchMode {
    /**
     * 常关模式。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    OFF = 0,

    /**
     * 常开模式。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    ON = 1,

    /**
     * 自动模式，系统根据环境自动调节手电筒亮度。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    AUTO = 2
  }

  /**
   * 相机管理器回调返回的接口实例，该实例表示相机状态信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CameraStatusInfo {
    /**
     * 相机信息。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    camera: CameraDevice;

    /**
     * 相机状态。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    status: CameraStatus;
  }

  /**
   * 相机管理器回调返回的接口实例，表示折叠机折叠状态信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface FoldStatusInfo {
    /**
     * 当前折叠状态所支持的相机信息列表。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    readonly supportedCameras: Array<CameraDevice>;

    /**
     * 折叠屏折叠状态。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    readonly foldStatus: FoldStatus;
  }

  /**
   * 枚举，相机位置。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum CameraPosition {
    /**
     * 相对于设备屏幕没有固定的朝向的相机。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_POSITION_UNSPECIFIED = 0,

    /**
     * 后置相机。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_POSITION_BACK = 1,

    /**
     * 前置相机。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_POSITION_FRONT = 2,

    /**
     * 折叠态相机。
     * 
     * 从API version 11开始支持，从API version 12开始废弃。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 12]
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead null
     * @useinstead null
     */
    CAMERA_POSITION_FOLD_INNER = 3
  }

  /**
   * 枚举，相机类型。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum CameraType {
    /**
     * 默认相机类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_TYPE_DEFAULT = 0,

    /**
     * 广角相机。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_TYPE_WIDE_ANGLE = 1,

    /**
     * 超广角相机。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_TYPE_ULTRA_WIDE = 2,

    /**
     * 长焦相机。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_TYPE_TELEPHOTO = 3,

    /**
     * 带景深信息的相机。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_TYPE_TRUE_DEPTH = 4,
  }

  /**
   * 枚举，相机连接类型。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ConnectionType {
    /**
     * 内置相机。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_CONNECTION_BUILT_IN = 0,

    /**
     * USB连接的相机。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_CONNECTION_USB_PLUGIN = 1,

    /**
     * 远程连接的相机。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_CONNECTION_REMOTE = 2
  }

  /**
   * 枚举，远端相机设备类型。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 10 - 14]
   * @publicapi [since 15]
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum HostDeviceType {
    /**
     * 未知设备类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 10 - 14]
     * @publicapi [since 15]
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    UNKNOWN_TYPE = 0,

    /**
     * 手机设备。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 10 - 14]
     * @publicapi [since 15]
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    PHONE = 0x0E,

    /**
     * 平板设备。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 10 - 14]
     * @publicapi [since 15]
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    TABLET = 0x11
  }

  /**
   * 相机设备信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CameraDevice {
    /**
     * 相机ID。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly cameraId: string;

    /**
     * 相机位置。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly cameraPosition: CameraPosition;

    /**
     * 相机类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly cameraType: CameraType;

    /**
     * 相机连接类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly connectionType: ConnectionType;

    /**
     * 远端设备名称。若当前无远端设备，返回为空。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 10 - 14]
     * @publicapi [since 15]
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly hostDeviceName: string;

    /**
     * 远端设备类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 10 - 14]
     * @publicapi [since 15]
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly hostDeviceType: HostDeviceType;

    /**
     * 相机安装角度，不会随着屏幕旋转而改变。取值范围为[0, 360]。单位：度。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    readonly cameraOrientation: int;

    /**
     * Camera device retractable attribute
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly isRetractable?: boolean;

    /**
     * 相机镜头等效焦距。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 20 dynamic
     * @since 23 static
     */
    readonly lensEquivalentFocalLength?: Array<int>;

    /**
     * 是否为逻辑摄像头（由多个物理相机组成）, true表示是逻辑摄像头，false表示是物理摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly isLogicalCamera?: boolean;

    /**
     * 组成此逻辑相机的物理相机列表。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly constituentCameraDevices?: Array<CameraDevice>;

    /**
     * 镜头实际焦距。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly lensFocalLength?: double;

    /**
     * 相机最小对焦距离。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly minimumFocusDistance?: double;

    /**
     * 镜头畸变参数数组。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly lensDistortion?: Array<double>;

    /**
     * 镜头内参标定参数数组。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly lensIntrinsicCalibration?: Array<double>;

    /**
     * 传感器物理尺寸（宽度和高度）。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly sensorPhysicalSize?: Array<double>;

    /**
     * 传感器像素阵列尺寸（宽度和高度。单位：像素）。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly sensorPixelArraySize?: Array<int>;

    /**
     * 传感器颜色滤镜排列方式。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly sensorColorFilterArrangement?: SensorColorFilterArrangement;

    /**
     * Car设备摄像头位置。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    readonly automotiveCameraPosition?: AutomotiveCameraPosition;
  }

  /**
   * 尺寸参数。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Size {
    /**
     * 图像尺寸高（像素）。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    height: int;

    /**
     * 图像尺寸宽（像素）。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    width: int;
  }

  /**
   * 点坐标用于对焦和曝光配置。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Point {
    /**
     * 点的x坐标。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * 点的y坐标。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    y: double;
  }

  /**
   * 相机设备输入对象。
   * 
   * 会话中[Session]{@link camera.Session}使用的相机信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CameraInput {
    /**
     * 打开相机，通过注册回调函数获取状态。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当打开相机成功，err为undefined，否则为错误对象，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
     * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    open(callback: AsyncCallback<void>): void;

    /**
     * 打开相机，使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
     * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    open(): Promise<void>;

    /**
     * 打开相机。使用Promise异步回调。
     *
     * @param { boolean } isSecureEnabled - 设置true为使能以安全的方式打开相机，设置false则反之。接口调用失败会返回相应错误码，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @returns { Promise<bigint> } Promise对象，返回安全相机的句柄。
     * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
     * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    open(isSecureEnabled: boolean): Promise<bigint>;

    /**
     * 关闭相机，通过注册回调函数获取状态。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当关闭相机成功，err为undefined，否则为错误对象。错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    close(callback: AsyncCallback<void>): void;

    /**
     * 关闭相机，使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    close(): Promise<void>;

    /**
     * Delay close camera.
     *
     * @param { int } time - delay time for turning off camera, in units of second.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    closeDelayed(time: int): Promise<void>;

    /**
     * 监听CameraInput的错误事件，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，CameraInput对象创建成功可监听。相机设备出错情况下可触发该事件并返回结果，比如设备不可用或者冲突等返回对应错误信息。
     * @param { CameraDevice } camera - CameraDevice对象。
     * @param { ErrorCallback } callback - 回调函数，用于获取结果。返回错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    on(type: 'error', camera: CameraDevice, callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { CameraDevice } camera - Camera device.
     * @param { ErrorCallback } callback - Callback used to get the camera input errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onError(camera: CameraDevice, callback: ErrorCallback): void;

    /**
     * 注销监听CameraInput的错误事件。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，CameraInput对象创建成功可监听。相机设备出错情况下可触发该事件并返回结果，比如设备不可用或者冲突等返回对应错误信息。
     * @param { CameraDevice } camera - CameraDevice对象。
     * @param { ErrorCallback } callback - 回调函数，如果指定参数则取消对应callback（callback对象不能是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    off(type: 'error', camera: CameraDevice, callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { CameraDevice } camera - Camera device.
     * @param { ErrorCallback } [callback] - Callback used to get the camera input errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offError(camera: CameraDevice, callback?: ErrorCallback): void;

    /**
     * 监听CameraInput的镜头遮挡或脏污事件，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'cameraOcclusionDetection' } type - 监听事件，固定为'cameraOcclusionDetection'，CameraInput对象创建成功可监听。相机镜头被遮挡或有脏污可
     *     触发该事件并返回结果。
     * @param { AsyncCallback<CameraOcclusionDetectionResult> } callback - 回调函数，用于获取结果。返回遮挡状态。
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 22]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 22]
     * @publicapi [since 23]
     * @atomicservice [since 23]
     * @since 12 dynamic
     */
    on(type: 'cameraOcclusionDetection', callback: AsyncCallback<CameraOcclusionDetectionResult>): void;

    /**
     * Subscribes to camera occlusion detection results.
     *
     * @param { AsyncCallback<CameraOcclusionDetectionResult> } callback - Callback used to get detection results.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onCameraOcclusionDetection(callback: AsyncCallback<CameraOcclusionDetectionResult>): void;

    /**
     * 注销监听CameraInput的镜头遮挡或脏污事件。使用callback异步回调。
     *
     * @param { 'cameraOcclusionDetection' } type - 监听事件，固定为'cameraOcclusionDetection'，CameraInput对象创建成功可监听。相机镜头被遮挡或有脏污可
     *     触发该事件并返回结果。
     * @param { AsyncCallback<CameraOcclusionDetectionResult> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否
     *     则取消所有callback。
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 22]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 22]
     * @publicapi [since 23]
     * @atomicservice [since 23]
     * @since 12 dynamic
     */
    off(type: 'cameraOcclusionDetection', callback?: AsyncCallback<CameraOcclusionDetectionResult>): void;

    /**
     * Unsubscribes from camera occlusion detection results.
     *
     * @param { AsyncCallback<CameraOcclusionDetectionResult> } [callback] - Callback used to get detection results.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offCameraOcclusionDetection(callback?: AsyncCallback<CameraOcclusionDetectionResult>): void;

    /**
     * Sets the camera to be used as a camera at the specified position.
     *
     * @param { CameraPosition } position - The positon used for the camera.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    usedAsPosition(position: CameraPosition): void;

    /**
     * Control auxiliary.
     *
     * @param { AuxiliaryType } auxiliaryType - Auxiliary type.
     * @param { AuxiliaryStatus } auxiliaryStatus - Auxiliary status.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    controlAuxiliary(auxiliaryType: AuxiliaryType, auxiliaryStatus: AuxiliaryStatus): Promise<void>;

    /**
     * 查询设备不同折叠状态下，相机物理镜头角度是否可变。
     *
     * @returns { boolean } 查询设备不同折叠状态下，相机物理镜头角度是否可变。true表示可变，false表示不可变。若接口调用失败，返回undefined。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    isPhysicalCameraOrientationVariable(): boolean;

    /**
     * 获取设备当前折叠状态下的物理镜头角度。
     *
     * @returns { int } 返回设备当前折叠状态下的物理镜头角度。
     *     <br>单位为度数（degree），取值范围为[0, 360]。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    getPhysicalCameraOrientation(): int;

    /**
     * 选择是否使用物理镜头角度。
     *
     * @param { boolean } isUsed - 选择是否使用物理镜头角度。true表示使用，false表示不使用。
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    usePhysicalCameraOrientation(isUsed: boolean): void;

    /**
     * 以指定的并发类型打开相机。使用Promise异步回调。
     *
     * @param { CameraConcurrentType } type - 以指定的并发类型打开相机。接口调用失败会返回相应错误码。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
     * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    open(type: CameraConcurrentType): Promise<void>;
  }

  /**
   * 枚举，相机模式。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  enum SceneMode {
    /**
     * 普通拍照模式。详情见[PhotoSession]{@link camera.PhotoSession}。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    NORMAL_PHOTO = 1,

    /**
     * 普通录像模式。详情见[VideoSession]{@link camera.VideoSession}。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    NORMAL_VIDEO = 2,

    /**
     * Portrait photo mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    PORTRAIT_PHOTO = 3,

    /**
     * Night photo mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NIGHT_PHOTO = 4,

    /**
     * Professional photo mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    PROFESSIONAL_PHOTO = 5,

    /**
     * Professional video mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    PROFESSIONAL_VIDEO = 6,

    /**
     * Slow-motion video mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SLOW_MOTION_VIDEO = 7,

    /**
     * Macro photo mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MACRO_PHOTO = 8,

    /**
     * Macro video mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MACRO_VIDEO = 9,

    /**
     * Light painting mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    LIGHT_PAINTING_PHOTO = 10,

    /**
     * High-resolution photo mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIGH_RESOLUTION_PHOTO = 11,

    /**
     * 安全相机模式。详情见[SecureSession]{@link camera.SecureSession}。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    SECURE_PHOTO = 12,

    /**
     * Quick snap mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    QUICK_SHOT_PHOTO = 13,

    /**
     * Large aperture video mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    APERTURE_VIDEO = 14,

    /**
     * Panoramic photo mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    PANORAMA_PHOTO = 15,

    /**
     * Time-lapse photo mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TIME_LAPSE_PHOTO = 16,

    /**
     * Fluorescence photo mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    FLUORESCENCE_PHOTO = 17
  }

  /**
   * 枚举，输出格式。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum CameraFormat {
    /**
     * RGBA_8888格式的图片。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_FORMAT_RGBA_8888 = 3,

    /**
     * DNG（数字负片）格式的图片。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 12 dynamic
     * @since 23 static
     */
    CAMERA_FORMAT_DNG = 4,

    /**
     * YUV_420_SP格式的图片，对应为NV21格式的图片。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_FORMAT_YUV_420_SP = 1003,

    /**
     * JPEG格式的图片。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_FORMAT_JPEG = 2000,

    /**
     * YCBCR_P010格式的图片。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    CAMERA_FORMAT_YCBCR_P010,

    /**
     * YCRCB_P010格式的图片。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    CAMERA_FORMAT_YCRCB_P010 = 2002,

    /**
     * HEIF格式的图片。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    CAMERA_FORMAT_HEIC = 2003,

    /**
     * Depth map in DEPTH_16 format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    CAMERA_FORMAT_DEPTH_16 = 3000,

    /**
     * Depth map in DEPTH_32 format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    CAMERA_FORMAT_DEPTH_32 = 3001,

    /**
     * 增强型DNG格式的图片。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 18 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 18 dynamic
     * @since 23 static
     */
    CAMERA_FORMAT_DNG_XDRAW = 5
  }

  /**
   * 枚举，闪光灯模式。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum FlashMode {
    /**
     * 闪光灯关闭。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FLASH_MODE_CLOSE = 0,

    /**
     * 闪光灯打开。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FLASH_MODE_OPEN = 1,

    /**
     * 自动闪光灯。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FLASH_MODE_AUTO = 2,

    /**
     * 闪光灯常亮。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FLASH_MODE_ALWAYS_OPEN = 3
  }

  /**
   * Describes the LCD flash information.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface LcdFlashStatus {
    /**
     * Whether the LCD flash is required. **true** if required, **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    readonly isLcdFlashNeeded: boolean;

    /**
     * LCD flash compensation.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    readonly lcdCompensation: int;
  }

  /**
   * 提供了查询设备的闪光灯状态和模式的能力。
   * 
   * > **说明：**
   * >
   * > - 本Interface的起始版本为API version 12。接口在API version 12发生兼容变更，保留了内层元素的起始版本信息，会出现外层元素@since版本号大于内层元素的情况，不影响接口使用。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface FlashQuery {
    /**
     * 检测是否有闪光灯，返回是否支持闪光灯。
     *
     * @returns { boolean } 表示设备是否支持闪光灯。true表示支持闪光灯，false表示不支持闪光灯。
     *     <br>如果返回false，则[isFlashModeSupported]{@link camera.FlashQuery.isFlashModeSupported}、
     *     [setFlashMode]{@link camera.Flash.setFlashMode}和[getFlashMode]{@link camera.Flash.getFlashMode}都不会生效。
     *     <br>接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    hasFlash(): boolean;

    /**
     * 检测闪光灯模式是否支持。
     *
     * @param { FlashMode } flashMode - 指定闪光灯模式。传参为null或者undefined，作为0处理，闪光灯关闭。
     * @returns { boolean } 检测表示支持该闪光灯模式。true表示支持，false表示不支持。接口调用失败会抛出相应错误码并返回undefined，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    isFlashModeSupported(flashMode: FlashMode): boolean;

    /**
     * Checks whether the LCD flash is supported.
     *
     * @returns { boolean } Check result for the support of the LCD flash. **true** if supported, **false** otherwise.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isLcdFlashSupported(): boolean;
  }

  /**
   * Flash继承自[FlashQuery]{@link camera.FlashQuery}。
   * 
   * 闪光灯类，对设备闪光灯操作。
   * 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Flash extends FlashQuery {
    /**
     * 获取当前设备的闪光灯模式。
     *
     * @returns { FlashMode } 获取当前设备的闪光灯模式。接口调用失败会抛出相应错误码并返回undefined，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getFlashMode(): FlashMode;

    /**
     * 设置闪光灯模式。
     * 
     * 进行设置之前，需要先检查：
     * 
     * 1. 设备是否支持闪光灯，可使用方法[hasFlash]{@link camera.FlashQuery.hasFlash}。
     * 2. 设备是否支持指定的闪光灯模式，可使用方法[isFlashModeSupported]{@link camera.FlashQuery.isFlashModeSupported}。
     *
     * @param { FlashMode } flashMode - 指定闪光灯模式。传参为null或者undefined，作为0处理，闪光灯关闭。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setFlashMode(flashMode: FlashMode): void;

    /**
     * Enables or disables the LCD flash.
     * 
     * Before the setting, call [isLcdFlashSupported]{@link camera.FlashQuery.isLcdFlashSupported} to check whether the
     * device supports the LCD flash.
     *
     * @param { boolean } enabled - Whether to enable or disable the LCD flash. **true** to enable, **false** otherwise.
     *     If null or undefined is passed, it is treated as 0 and the LCD flash is disabled.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    enableLcdFlash(enabled: boolean): void;

    /**
     * 订阅闪光灯状态变化事件回调。
     *
     * @param { Callback<FlashState> } callback - 回调函数，用于获取闪光灯状态变化信息。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    onFlashStateChange(callback: Callback<FlashState>): void;

    /**
     * 取消订阅闪光灯状态变化事件回调。
     *
     * @param { Callback<FlashState> } [callback] - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    offFlashStateChange(callback?: Callback<FlashState>): void;
  }

  /**
   * 枚举，闪光灯状态。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum FlashState {
    /**
     * 闪光灯为不可用状态，为默认值。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    FLASH_STATE_UNAVAILABLE = 0,

    /**
     * 闪光灯为可用状态。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    FLASH_STATE_READY = 1,

    /**
     * 闪光灯已经被打开。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    FLASH_STATE_FLASHING = 2
  }

  /**
   * 枚举，曝光模式。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ExposureMode {
    /**
     * 曝光模式未指定。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    EXPOSURE_MODE_UNSPECIFIED = -1,

    /**
     * 锁定曝光模式。不支持曝光区域中心点设置。
     * 
     * 设置该模式后，每次拍照时曝光都会默认锁定。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    EXPOSURE_MODE_LOCKED = 0,

    /**
     * 自动曝光模式。支持曝光区域中心点设置，可以使用[AutoExposure.setMeteringPoint]{@link camera.AutoExposure.setMeteringPoint}接口设置曝光区域中心点。
     * 
     * 设置该模式后，仅设置后的首次拍照生效。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    EXPOSURE_MODE_AUTO = 1,

    /**
     * 连续自动曝光。不支持曝光区域中心点设置。
     * 
     * 设置该模式后，拍照系统会根据每次的环境变化自动调整曝光。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    EXPOSURE_MODE_CONTINUOUS_AUTO = 2,

    /**
     * 手动曝光。支持设置曝光时长。
     * 
     * 设置该模式后，用户可通过
     * [ManualExposure.setExposureDuration](docroot://reference/apis-camera-kit/arkts-apis-camera-ManualExposure.md#setexposureduration24)
     * 设置曝光时长。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 12 dynamic
     * @since 23 static
     */
    EXPOSURE_MODE_MANUAL = 3
  }

  /**
   * 枚举，曝光状态。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum ExposureState {
    /**
     * 曝光处于扫描状态。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    EXPOSURE_STATE_SCAN = 0,

    /**
     * 曝光已经收敛。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    EXPOSURE_STATE_CONVERGED = 1
  }

  /**
   * 枚举，曝光测光模式。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 12 - 23]
   * @publicapi [since 24]
   * @atomicservice [since 24]
   * @since 12 dynamic
   * @since 23 static
   */
  enum ExposureMeteringMode {
    /**
     * 矩阵测光模式。对画面广泛区域进行测光，适合拍摄自然风光。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 12 dynamic
     * @since 23 static
     */
    MATRIX = 0,

    /**
     * 中心测光模式。对整个画面进行测光，但最大比重分配给中央区域，适合拍摄人像。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 12 dynamic
     * @since 23 static
     */
    CENTER = 1,

    /**
     * 点测光模式。对画面测光点周围约2.5%进行测光，专注于特定微小区域的光线，如被摄主体的眼睛。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 12 dynamic
     * @since 23 static
     */
    SPOT = 2,

    /**
     * Center-weighted and highlight metering mode. This mode focuses on the highlight area near the center of the
     * screen.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    CENTER_HIGHLIGHT_WEIGHTED = 3
  }

  /**
   * 针对设备的自动曝光特性提供了一系列查询功能。
   * >
   * > - 本模块接口在API version 12发生兼容变更，保留了内层元素的起始版本信息，会出现外层元素@since版本号大于内层元素的情况，不影响接口使用。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface AutoExposureQuery {
    /**
     * 检测曝光模式是否支持。
     *
     * @param { ExposureMode } aeMode - 曝光模式。传参为null或者undefined，作为0处理，曝光锁定。
     * @returns { boolean } 获取是否支持曝光模式，true为支持，false为不支持。接口调用失败会抛出相应错误码并返回undefined，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    isExposureModeSupported(aeMode: ExposureMode): boolean;

    /**
     * 查询曝光补偿范围。
     *
     * @returns { Array<double> } 获取补偿范围的数组。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getExposureBiasRange(): Array<double>;

    /**
     * 检测是否支持指定的曝光测光模式。
     *
     * @param { ExposureMeteringMode } aeMeteringMode - 曝光测光模式。
     * @returns { boolean } 是否支持曝光测光模式。true表示支持，false表示不支持
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 23]
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect. [since 12 - 23]
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 12 dynamic
     * @since 23 static
     */
    isExposureMeteringModeSupported(aeMeteringMode: ExposureMeteringMode): boolean;
  }

  /**
   * AutoExposure继承自[AutoExposureQuery]{@link camera.AutoExposureQuery}。
   * 
   * 自动曝光类，对设备自动曝光（AE）操作。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface AutoExposure extends AutoExposureQuery {
    /**
     * 获取当前曝光模式。
     * 
     * > **说明：**
     * >
     * > 若未通过[setExposureMode]{@link camera.AutoExposure.setExposureMode}接口进行设置，直接调用该接口查询当前曝光模式，会返回无效值。
     *
     * @returns { ExposureMode } 获取当前曝光模式。接口调用失败会抛出相应错误码并返回undefined，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getExposureMode(): ExposureMode;

    /**
     * 设置曝光模式。进行设置之前，需要先检查设备是否支持指定的曝光模式，可使用方法
     * [isExposureModeSupported]{@link camera.AutoExposureQuery.isExposureModeSupported}。
     *
     * @param { ExposureMode } aeMode - 曝光模式。传参为null或者undefined，作为0处理，曝光锁定。
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400102 - Operation not allowed. [since 19]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setExposureMode(aeMode: ExposureMode): void;

    /**
     * 查询曝光区域中心点。
     *
     * @returns { Point } 获取当前曝光点。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getMeteringPoint(): Point;

    /**
     * 设置曝光区域中心点，曝光点应在0-1坐标系内，该坐标系左上角为{0，0}，右下角为{1，1}。
     * 
     * 此坐标系是以设备充电口在右侧时的横向设备方向为基准的，例如应用的预览界面布局以设备充电口在下侧时的竖向方向为基准，布局宽高为{w，h}，且触摸点为{x，y}，则转换后的坐标点为{y/h，1-x/w}。
     *
     * @param { Point } point - 曝光点，x、y设置范围应在[0，1]之内，超过范围，如果小于0设置0，大于1设置1。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setMeteringPoint(point: Point): void;

    /**
     * 设置曝光补偿，曝光补偿值（EV）。
     * 
     * 进行设置之前，建议先通过方法[getExposureBiasRange]{@link camera.AutoExposureQuery.getExposureBiasRange}查询支持的范围。
     *
     * @param { double } exposureBias - 曝光补偿，[getExposureBiasRange]{@link camera.AutoExposureQuery.getExposureBiasRange}
     *     查询支持的范围，如果设置超过支持范围的值，自动匹配到就近临界点。
     *     <br>曝光补偿存在步长，由于设备差异，步长也存在差异。例如步长为0.5，则设置1.2时，获取到实际生效曝光补偿为1.0。
     *     <br>接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400102 - Operation not allowed. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setExposureBias(exposureBias: double): void;

    /**
     * 查询当前曝光值。
     *
     * @returns { double } 获取曝光值。曝光补偿存在步长，如步长为0.5。则设置1.2时，获取到实际生效曝光补偿为1.0。
     *     <br>接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getExposureValue(): double;

    /**
     * 获取当前曝光测光模式。
     *
     * @returns { ExposureMeteringMode } 当前曝光测光模式。
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 23]
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @throws { BusinessError } 7400102 - Operation not allowed, the inputDevice or the session is abnormal. [since 24]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 12 dynamic
     * @since 23 static
     */
    getExposureMeteringMode(): ExposureMeteringMode;

    /**
     * 设置曝光测光模式。
     *
     * @param { ExposureMeteringMode } aeMeteringMode - 曝光测光模式。
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 23]
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect. [since 12 - 23]
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @throws { BusinessError } 7400102 - Operation not allowed, the inputDevice or the session is abnormal. [since 24]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 12 dynamic
     * @since 23 static
     */
    setExposureMeteringMode(aeMeteringMode: ExposureMeteringMode): void;

    /**
     * 监听曝光状态事件变更。使用callback异步回调。
     *
     * @param { Callback<ExposureState> } callback - 回调函数，返回当前曝光状态。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    onExposureStateChange(callback: Callback<ExposureState>): void

    /**
     * 注销监听曝光状态事件变更。使用callback异步回调。
     *
     * @param { Callback<ExposureState> } [callback] - 回调函数，如果指定参数则取消对应callback，callback对象如果为空或为匿名函数，则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    offExposureStateChange(callback?: Callback<ExposureState>): void
  }

  /**
   * 枚举，焦距模式。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum FocusMode {
    /**
     * 手动对焦。通过手动修改相机焦距来改变对焦位置，不支持对焦点设置。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FOCUS_MODE_MANUAL = 0,

    /**
     * 连续自动对焦。不支持对焦点设置。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FOCUS_MODE_CONTINUOUS_AUTO = 1,

    /**
     * 自动对焦。支持对焦点设置，可以使用[Focus.setFocusPoint]{@link camera.Focus.setFocusPoint}设置对焦点，根据对焦点执行一次自动对焦。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FOCUS_MODE_AUTO = 2,

    /**
     * 对焦锁定。不支持对焦点设置。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FOCUS_MODE_LOCKED = 3
  }

  /**
   * 枚举，焦距状态。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum FocusState {
    /**
     * 触发对焦。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FOCUS_STATE_SCAN = 0,

    /**
     * 对焦成功。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FOCUS_STATE_FOCUSED = 1,

    /**
     * 未完成对焦。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FOCUS_STATE_UNFOCUSED = 2
  }

  /**
   * Enumerates the focus range types.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  enum FocusRangeType {
    /**
     * Auto focus.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    AUTO = 0,

    /**
     * Focus on near objects.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    NEAR = 1
  }

  /**
   * Enumerates the focus drive types.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  enum FocusDrivenType {
    /**
     * Automatic.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    AUTO = 0,

    /**
     * Face-driven.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    FACE = 1
  }

  /**
   * Enumerates the focus tracking modes.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  enum FocusTrackingMode {
    /**
     * Automatic.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    AUTO = 0
  }

  /**
   * Describes the focus tracking information, which is obtained by calling VideoSessionForSys.
   * [on('focusTrackingInfoAvailable')]{@link camera.VideoSession.on(type: 'focusTrackingInfoAvailable', callback: Callback<FocusTrackingInfo>)}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  interface FocusTrackingInfo {
    /**
     * Tracing mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    trackingMode: FocusTrackingMode;

    /**
     * Tracking region.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    trackingRegion: Rect;
  }

  /**
   * 提供了查询是否支持当前对焦模式的方法。
   * 
   * > **说明：**
   * >
   * > - 本Interface的起始版本为API version 12。接口在API version 12发生兼容变更，保留了内层元素的起始版本信息，会出现外层元素@since版本号大于内层元素的情况，不影响接口使用。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface FocusQuery {
    /**
     * 检测对焦模式是否支持。
     *
     * @param { FocusMode } afMode - 指定的焦距模式。传参为null或者undefined，作为0处理，手动对焦模式。
     * @returns { boolean } 检测对焦模式是否支持。true表示支持，false表示不支持。接口调用失败会抛出相应错误码并返回undefined，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    isFocusModeSupported(afMode: FocusMode): boolean;

    /**
     * Checks whether the focus assist is supported.
     *
     * @returns { boolean } Check result for the support of the focus assist. **true** if supported, **false**
     *     otherwise. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isFocusAssistSupported(): boolean;

    /**
     * Checks whether a focus range type is supported.
     *
     * @param { FocusRangeType } type - Focus range type.
     * @returns { boolean } Check result for the support of the focus range type. **true** if supported, **false**
     *     otherwise. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    isFocusRangeTypeSupported(type: FocusRangeType): boolean;

    /**
     * Checks whether a focus drive type is supported.
     *
     * @param { FocusDrivenType } type - Focus drive type.
     * @returns { boolean } Check result for the support of the focus drive type. **true** if supported, **false**
     *     otherwise. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    isFocusDrivenTypeSupported(type: FocusDrivenType): boolean;
  
    /**
     * 检查设备是否支持锁定焦点跟踪的功能。
     *
     * @returns { boolean } 检查是否支持锁定焦点跟踪。true表示支持，false表示不支持。接口调用失败会抛出相应错误码并返回undefined。
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    isLockFocusTrackingSupported(): boolean;
  }

  /**
   * Focus继承自[FocusQuery]{@link camera.FocusQuery}。
   * 
   * 对焦类，对设备对焦操作。
   * 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Focus extends FocusQuery {
    /**
     * 获取当前的对焦模式。
     *
     * @returns { FocusMode } 获取当前设备的焦距模式。接口调用失败会抛出相应错误码并返回undefined，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getFocusMode(): FocusMode;

    /**
     * 设置对焦模式。
     * 
     * 进行设置之前，需要先检查设备是否支持指定的焦距模式，可使用方法[isFocusModeSupported]{@link camera.FocusQuery.isFocusModeSupported}。
     *
     * @param { FocusMode } afMode - 指定的焦距模式。传参为null或者undefined，作为0处理，手动对焦模式。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setFocusMode(afMode: FocusMode): void;

    /**
     * 设置焦点，焦点应在0-1坐标系内，该坐标系左上角为{0，0}，右下角为{1，1}。
     * 
     * 此坐标系是以设备充电口在右侧时的横向设备方向为基准的，例如应用的预览界面布局以设备充电口在下侧时的竖向方向为基准，布局宽高为{w，h}，且触碰点为{x，y}，则转换后的坐标点为{y/h，1-x/w}。
     *
     * @param { Point } point - 焦点。x、y设置范围应在[0，1]之内，超过范围，如果小于0设置0，大于1设置1。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setFocusPoint(point: Point): void;

    /**
     * 查询当前的焦点。
     *
     * @returns { Point } 用于获取当前的焦点。接口调用失败会返回相应错误码，错误码类型为[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getFocusPoint(): Point;

    /**
     * 查询当前的焦距值。
     *
     * @returns { double } 用于获取当前焦距，单位mm。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getFocalLength(): double;

    /**
     * Checks whether the focus assist is enabled.
     *
     * @returns { boolean } Check result for whether the focus assist is enabled. **true** if enabled, **false**
     *     otherwise.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getFocusAssist(): boolean;

    /**
     * Sets the focus assist. Before the setting, call
     * [isFocusAssistSupported]{@link camera.FocusQuery.isFocusAssistSupported} to check whether the device supports the
     * focus assist.
     *
     * @param { boolean } enabled - Whether to enable or disable focus assist. **true** to enable, **false** otherwise.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setFocusAssist(enabled: boolean): void;

    /**
     * Obtains the focus range type in use.
     *
     * @returns { FocusRangeType } Focus range type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    getFocusRange(): FocusRangeType;

    /**
     * Sets a focus range type. Before the setting, call
     * [isFocusRangeTypeSupported]{@link camera.FocusQuery.isFocusRangeTypeSupported} to check whether the focus range
     * type is supported.
     *
     * @param { FocusRangeType } type - Focus range type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    setFocusRange(type: FocusRangeType): void;

    /**
     * Obtains the focus drive type in use.
     *
     * @returns { FocusDrivenType } Focus drive type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    getFocusDriven(): FocusDrivenType;

    /**
     * Sets a focus drive type. Before the setting, call
     * [isFocusDrivenTypeSupported]{@link camera.FocusQuery.isFocusDrivenTypeSupported} to check whether the focus drive
     * type is supported.
     *
     * @param { FocusDrivenType } type - Focus drive type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    setFocusDriven(type: FocusDrivenType): void;

    /**
     * 锁定焦点跟踪，使对焦持续追踪指定的物体。通过focusPoint参数指定追踪目标。
     *
     * @param { Point } focusPoint - 锁定对焦跟踪点。x、y的取值范围均为 [0, 1]，超出范围则设置不生效。(0, 0)表示画面左上角，(1, 1)表示画面右下角。
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    lockFocusTracking(focusPoint: Point): void;

    /**
     * 解锁焦点跟踪。
     *
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    unlockFocusTracking(): void;
  }

  /**
   * Manual Focus Query object.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface ManualFocusQuery {
    /**
     * Checks whether a focus distance is supported.
     *
     * @returns { boolean } Is focus distance supported.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 24 dynamic&static
     */
    isFocusDistanceSupported(): boolean;
  }

  /**
   * ManualFocus object.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 12 - 23]
   * @publicapi [since 24]
   * @atomicservice [since 24]
   * @since 12 dynamic
   * @since 23 static
   */
  interface ManualFocus extends ManualFocusQuery {
    /**
     * Gets current focus distance, ranging from 0.0 to 1.0, with 0.0 being shortest
     * distance at which the lens can focus and 1.0 the furthest. The default value is 1.0.
     *
     * @returns { double } The current focus distance.
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 23]
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400102 - Operation not allowed, the inputDevice or the session is abnormal. [since 24]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 12 dynamic
     * @since 23 static
     */
    getFocusDistance(): double;

    /**
     * Sets focus distance. Possible distance values range from 0.0 to 1.0, with 0.0 being shortest
     * distance at which the lens can focus and 1.0 the furthest. The default value is 1.0.
     *
     * @param { double } distance - Focus distance.
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 23]
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect. [since 12 - 23]
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400102 - Operation not allowed, the inputDevice or the session is abnormal. [since 24]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 12 dynamic
     * @since 23 static
     */
    setFocusDistance(distance: double): void;
  }

  /**
   * 枚举，白平衡模式。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @atomicservice [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum WhiteBalanceMode {
    /**
     * 自动
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO = 0,

    /**
     * 阴天
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    CLOUDY = 1,

    /**
     * 白炽光
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    INCANDESCENT =2,

    /**
     * 荧光
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    FLUORESCENT =3,

    /**
     * 日光
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DAYLIGHT = 4,

    /**
     * 手动
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    MANUAL = 5,

    /**
     * 锁定
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    LOCKED = 6
  }

  /**
   * 提供了查询设备对指定的白平衡模式是否支持，以及获取设备支持的白平衡模式范围的方法。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @atomicservice [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  interface WhiteBalanceQuery {
    /**
     * 检测是否支持当前传入的白平衡模式。
     *
     * @param { WhiteBalanceMode } mode - 白平衡模式。
     * @returns { boolean } 表示是否支持白平衡模式。true表示支持，false表示不支持。若接口调用失败，返回undefined。
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 19]
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isWhiteBalanceModeSupported(mode: WhiteBalanceMode): boolean;

    /**
     * 获取手动白平衡模式下，白平衡值的范围。
     *
     * @returns { Array<int> } 用于获取手动白平衡值的可调范围，如[2800，10000]，单位为K（Kelvin，温度单位），实际情况根据底层能力返回为准。若接口调用失败，返回undefined。
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 19]
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getWhiteBalanceRange(): Array<int>;
 
    /**
     * 获取支持配置的白平衡色调调节范围。
     *
     * @returns { Array<int> } 用于获取色调调节值的可调范围。若接口调用失败，返回undefined。
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getColorTintRange(): Array<int>;

    /**
      * Checks whether the RGB gain is supported.
      *
      * @returns { boolean } Check result for the support of the RGB gain. **true** if supported, **false**
      *     otherwise. If the operation fails, an error code defined in
      *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
      * @throws { BusinessError } 202 - Not System Application.
      * @throws { BusinessError } 7400103 - Session not config.
      * @syscap SystemCapability.Multimedia.Camera.Core
      * @systemapi
      * @stagemodelonly
      * @since 26.1.0 dynamic&static
      */
     isWhiteBalanceGainsSupported(): boolean;
  }

  /**
   * WhiteBalance继承自[WhiteBalanceQuery]{@link camera.WhiteBalanceQuery}。
   * 
   * 提供了处理设备白平衡的相关功能，包括获取和设置白平衡模式以及白平衡值。
   * 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @atomicservice [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  interface WhiteBalance extends WhiteBalanceQuery {
    /**
     * 获取当前白平衡模式。
     *
     * @returns { WhiteBalanceMode } 获取当前白平衡模式。若接口调用失败，返回undefined。
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 19]
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getWhiteBalanceMode(): WhiteBalanceMode;

    /**
     * 设置白平衡模式。设置之前需要先检查设备是否支持指定的白平衡模式，具体方法请参考
     * [isWhiteBalanceModeSupported]{@link camera.WhiteBalanceQuery.isWhiteBalanceModeSupported}。
     *
     * @param { WhiteBalanceMode } mode - 白平衡模式。
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 19]
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setWhiteBalanceMode(mode: WhiteBalanceMode): void;

    /**
     * 获取当前手动白平衡的值。
     *
     * @returns { int } 返回当前白平衡值，单位为K（Kelvin，温度单位）。
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 19]
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getWhiteBalance(): int;

    /**
     * 设置手动白平衡值。
     * 
     * 设置之前需要先检查设备支持的白平衡值范围，具体方法请参考[getWhiteBalanceRange]{@link camera.WhiteBalanceQuery.getWhiteBalanceRange}。
     *
     * @param { int } whiteBalance - 设置手动白平衡值，单位为K（Kelvin，温度单位）。
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 19]
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setWhiteBalance(whiteBalance: int): void;
 
    /**
     * 设置白平衡的色调调节值。
     * 
     * 设置之前需要先检查设备支持配置的白平衡色调调节范围，具体方法请参考[getColorTintRange]{@link camera.WhiteBalanceQuery.getColorTintRange}。
     *
     * @param { int } colorTint - 设置手动白平衡色调调节值。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setColorTint(colorTint: int): void;
 
    /**
     * 获取当前白平衡的色调调节值。
     *
     * @returns { int } 返回当前白平衡色调调节值。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getColorTint(): int;

    /**
     * Gets RGB white balance gain values.
     *
     * @returns { WhiteBalanceGains } The current RGB white balance gain values.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    getWhiteBalanceGains(): WhiteBalanceGains;

    /**
     * Sets RGB white balance gain values.
     *
     * @param { WhiteBalanceGains } gains - RGB white balance gain values.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    setWhiteBalanceGains(gains: WhiteBalanceGains): void;
  }

  /**
   * Provides APIs to check whether a camera device supports manual ISO setting and obtain the ISO range supported by
   * the device.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 12 - 23]
   * @publicapi [since 24]
   * @atomicservice [since 24]
   * @since 12 dynamic
   * @since 23 static
   */
  interface ManualIsoQuery {
    /**
     * Checks whether manual ISO setting is supported.
     *
     * @returns { boolean } Check result for the support of manual ISO setting. **true** if supported, **false**
     *     otherwise. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isManualIsoSupported(): boolean;

    /**
     * Obtains the supported ISO range.
     *
     * @returns { Array<int> } ISO range. The value range is [50, 100, ..., 6400]. The actual value depends on the
     *     bottom-layer capability. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getIsoRange(): Array<int>;

    /**
     * Get a array of supported standard ISO sensitivity values, as defined in ISO 12232:2006.
     *
     * @returns { int[] } The array of ISO sensitivity values.
     * @throws {BusinessError} 7400102 - Operation not allowed, the inputDevice or the session is abnormal.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 24 dynamic&static
     */
    getSupportedIsoRange(): int[];
  }

  /**
   * ManualIso object.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 12 - 23]
   * @publicapi [since 24]
   * @atomicservice [since 24]
   * @since 12 dynamic
   * @since 23 static
   */
  interface ManualIso extends ManualIsoQuery {
    /**
     * Gets current ISO.
     *
     * @returns { int } The current ISO.
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 23]
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws {BusinessError} 7400102 - Operation not allowed, the inputDevice or the session is abnormal. [since 24]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 12 dynamic
     * @since 23 static
     */
    getIso(): int;

    /**
     * Sets ISO sensitivity value, within the range of getSupportedIsoRange. This control can not be effective if
     * ExposureMode is set to EXPOSURE_MODE_LOCKED.
     *
     * @param { int } iso - ISO
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 23]
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect. [since 12 - 23]
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400102 - Operation not allowed, the inputDevice or the session is abnormal. [since 24]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 12 dynamic
     * @since 23 static
     */
    setIso(iso: int): void;
  }

  /**
   * 平滑变焦模式。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  enum SmoothZoomMode {
    /**
     * 贝塞尔曲线模式。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    NORMAL = 0
  }

  /**
   * 平滑变焦参数信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface SmoothZoomInfo {
    /**
     * 平滑变焦总时长。单位ms。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    duration: int;
  }

  /**
   * 等效焦距信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 12 - 24]
   * @publicapi [since 26.0.0]
   * @atomicservice [since 26.0.0]
   * @since 12 dynamic
   * @since 23 static
   */
  interface ZoomPointInfo {
    /**
     * 可变焦距比。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    readonly zoomRatio: double;

    /**
     * 当前焦距比对应的等效焦距值。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    readonly equivalentFocalLength: int;
  }

  /**
   * 提供了与设备的缩放相关的查询功能，包括获取支持的缩放比例范围。
   * 
   * > **说明：**
   * >
   * > - 本Interface的起始版本为API version 12。接口在API version 12发生兼容变更，保留了内层元素的起始版本信息，会出现外层元素@since版本号大于内层元素的情况，不影响接口使用。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface ZoomQuery {
    /**
     * 获取支持的变焦范围。
     *
     * @returns { Array<double> } 用于获取可变焦距比范围，返回的数组包括其最小值和最大值。接口调用失败会抛出相应错误码并返回undefined，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。若当前设备不支持变焦，调用该接口会返回undefined。
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getZoomRatioRange(): Array<double>;

    /**
     * 获取当前模式的等效焦距信息列表。
     *
     * @returns { Array<ZoomPointInfo> } 获取当前模式的等效焦距信息列表。
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 24]
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    getZoomPointInfos(): Array<ZoomPointInfo>;

    /**
     * Checks whether zoom center point is supported.
     *
     * @returns { boolean } Is the zoom center point supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isZoomCenterPointSupported(): boolean;

    /**
     * 获取RAW拍摄期间支持的变焦比例范围。
     *
     * @returns { Array<double> } 变焦比例范围。
     * @throws {BusinessError} 7400102 - Operation not allowed, the inputDevice or the session is abnormal.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    getRAWCaptureZoomRatioRange(): Array<double>;
  }

  /**
   * Zoom继承自[ZoomQuery]{@link camera.ZoomQuery}。
   * 
   * 变焦类，对设备变焦操作。
   * 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Zoom extends ZoomQuery {
    /**
     * 获取当前的变焦比。
     *
     * @returns { double } 获取当前的变焦比结果。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getZoomRatio(): double;

    /**
     * 设置变焦比，变焦精度最高为小数点后两位，如果设置超过支持的精度范围，则只保留精度范围内数值。
     *
     * @param { double } zoomRatio - 可变焦距比，通过[getZoomRatioRange]{@link camera.ZoomQuery.getZoomRatioRange}获取支持的变焦范围，如果设置
     *     超过支持范围的值，则只保留精度范围内数值。
     *     <br>设置可变焦距比到底层生效需要一定时间，获取正确设置的可变焦距比需要等待1~2帧的时间。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setZoomRatio(zoomRatio: double): void;

    /**
     * 触发平滑变焦。
     *
     * @param { double } targetRatio - 目标值。通过[getZoomRatioRange]{@link camera.ZoomQuery.getZoomRatioRange}获取支持的变焦范围，如果设置
     *     超过支持范围的值，则只保留精度范围内数值。
     * @param { SmoothZoomMode } mode - 平滑变焦模式。默认为0。
     * @throws { BusinessError } 7400103 - Session not config. [since 11 - 17]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setSmoothZoom(targetRatio: double, mode?: SmoothZoomMode): void;

    /**
     * Instructs the bottom layer to prepare for zooming, for example, powering on the sensor.
     *
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    prepareZoom(): void;

    /**
     * Instructs the bottom layer to unprepare for zooming.
     *
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    unprepareZoom(): void;

    /**
     * Sets zoom center point.
     *
     * @param { Point } point - Target zoom center point.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    setZoomCenterPoint(point: Point): void;

    /**
     * Gets zoom center point.
     *
     * @returns { Point } The current zoom center point.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getZoomCenterPoint(): Point;
  }

  /**
   * 枚举，视频防抖模式。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum VideoStabilizationMode {
    /**
     * 关闭视频防抖功能。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    OFF = 0,

    /**
     * 使用基础防抖算法。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    LOW = 1,

    /**
     * 使用防抖效果一般的防抖算法，防抖效果优于LOW类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    MIDDLE = 2,

    /**
     * 使用防抖效果最好的防抖算法，防抖效果优于MIDDLE类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    HIGH = 3,

    /**
     * 自动进行选择防抖算法。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    AUTO = 4
  }

  /**
   * 提供了查询设备在录像模式下是否支持对应的视频防抖模式的能力。
   * 
   * > **说明：**
   * >
   * > - 本Interface的起始版本为API version 12。接口在API version 12发生兼容变更，保留了内层元素的起始版本信息，会出现外层元素@since版本号大于内层元素的情况，不影响接口使用。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface StabilizationQuery {
    /**
     * 查询是否支持指定的视频防抖模式。
     *
     * @param { VideoStabilizationMode } vsMode - 视频防抖模式。
     * @returns { boolean } 返回视频防抖模式是否支持。true表示支持，false表示不支持。接口调用失败会抛出相应错误码并返回undefined，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    isVideoStabilizationModeSupported(vsMode: VideoStabilizationMode): boolean;
  }

  /**
   * Stabilization继承自[StabilizationQuery]{@link camera.StabilizationQuery}。
   * 
   * 提供设备在录像模式下设置视频防抖的操作。
   * 
   * 需要会话中有录像流（[VideoOutput]{@link camera.VideoOutput}）的前提下，才可以对视频进行防抖设置。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Stabilization extends StabilizationQuery {
    /**
     * 查询当前正在使用的视频防抖模式。
     *
     * @returns { VideoStabilizationMode } 视频防抖是否正在使用。若接口调用失败，返回undefined。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getActiveVideoStabilizationMode(): VideoStabilizationMode;

    /**
     * 设置视频防抖模式。需要先检查设备是否支持对应的防抖模式，可以通过
     * [isVideoStabilizationModeSupported]{@link camera.StabilizationQuery.isVideoStabilizationModeSupported}方法判断所设置的模式是
     * 否支持。建议在[commitConfig]{@link camera.Session.commitConfig()}与[Start]{@link camera.Session.start()}之间设置视频防抖。
     *
     * @param { VideoStabilizationMode } mode - 需要设置的视频防抖模式。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setVideoStabilizationMode(mode: VideoStabilizationMode): void;
  }

  /**
   * Enumerates the camera portrait theme types.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum PortraitThemeType {
    /**
     * Natural portrait theme type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    NATURAL = 0,

    /**
     * Delicate portrait theme type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    DELICATE = 1,

    /**
     * Stylish portrait theme type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    STYLISH = 2
  }

  /**
   * Enumerates the beauty types.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  enum BeautyType {
    /**
     * Automatic.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    AUTO = 0,

    /**
     * Skin smoothing.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SKIN_SMOOTH = 1,

    /**
     * Face slimming.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    FACE_SLENDER = 2,

    /**
     * Skin tone perfection.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SKIN_TONE = 3,

    /**
     * Skin tone bright beauty type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    SKIN_TONE_BRIGHT = 4,

    /**
     * Eye big eyes beauty type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    EYE_BIG_EYES = 5,

    /**
     * Hair hairline beauty type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    HAIR_HAIRLINE = 6,

    /**
     * Face makeup beauty type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    FACE_MAKEUP = 7,

    /**
     * Head shrink beauty type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    HEAD_SHRINK = 8,

    /**
     * Nose slender beauty type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    NOSE_SLENDER = 9
  }

  /**
   * Provides APIs to obtain and set the beauty effect.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface BeautyQuery {
    /**
     * Obtains the supported beauty types.
     *
     * @returns { Array<BeautyType> } Array of beauty types supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getSupportedBeautyTypes(): Array<BeautyType>;

    /**
     * Obtains the levels that can be set a beauty type. The beauty levels vary according to the device type. The
     * following table is only an example.
     * | Input Parameter          | Example Return Value   | Return Value Description    |
     * | ----------------| ----  | ---------|
     * | AUTO           | [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]     |Beauty levels supported when **type** is set to **AUTO**. The value **0**      * means that beauty mode is disabled, and other positive values mean the corresponding automatic beauty levels.   |
     * | SKIN_SMOOTH    | [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]     | Beauty levels supported when **type** is set to **SKIN_SMOOTH**. The value      * **0** means that the skin smoothing feature is disabled, and other positive values mean the corresponding skin smoothing levels.   |
     * | FACE_SLENDER   | [0, 1, 2, 3, 4, 5]      | Beauty levels supported when **type** is set to **FACE_SLENDER**. The value **0** means that      * the face slimming feature is disabled, and other positive values mean the corresponding face slimming levels.  |
     * | SKIN_TONE      | [-1, 16242611]      | Beauty levels supported when **type** is set to **SKIN_TONE**. The value **-1** means that the skin tone perfection feature is disabled. Other non-negative values mean the skin tone perfection levels represented by RGB,<br> for example, 16242611, which is 0xF7D7B3 in hexadecimal format, where F7, D7, and B3 represent the values of the R channel, G channel, and B channel, respectively.   |
     *
     * @param { BeautyType } type - Beauty type.
     * @returns { Array<int> } Array of levels supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getSupportedBeautyRange(type: BeautyType): Array<int>;

    /**
     * Gets supported portrait theme type.
     *
     * @returns { Array<PortraitThemeType> } Lists of portrait theme types
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    getSupportedPortraitThemeTypes(): Array<PortraitThemeType>;

    /**
     * Checks whether portrait theme is supported.
     *
     * @returns { boolean } Is portrait theme supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    isPortraitThemeSupported(): boolean;
  }

  /**
   * Beauty extends [BeautyQuery]{@link camera.BeautyQuery}
   * Provides APIs to obtain and set the beauty effect.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface Beauty extends BeautyQuery {
    /**
     * Obtains the level of the beauty type in use.
     *
     * @param { BeautyType } type - Beauty type.
     * @returns { int } the beauty effect in use.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getBeauty(type: BeautyType): int;

    /**
     * Sets a beauty type and its level. Beauty mode is turned off only when all the
     * [beauty types]{@link camera.BeautyType} obtained through
     * [getSupportedBeautyTypes]{@link camera.BeautyQuery.getSupportedBeautyTypes} are disabled.
     *
     * @param { BeautyType } type - Beauty type.
     * @param { int } value - Beauty level, which is obtained through
     *     [getSupportedBeautyRange]{@link camera.BeautyQuery.getSupportedBeautyRange}.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setBeauty(type: BeautyType, value: int): void;

    /**
     * Sets a portrait theme type for a camera device.
     *
     * @param { PortraitThemeType } type - The type of portrait theme.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    setPortraitThemeType(type: PortraitThemeType): void;
  }

  /**
   * EffectSuggestion object.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface EffectSuggestion {

    /**
     * Checks whether effect suggestion is supported.
     *
     * @returns { boolean } Is the effect suggestion supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isEffectSuggestionSupported(): boolean;

    /**
     * Enable effect suggestion for session.
     *
     * @param { boolean } enabled enable effect suggestion for session if TRUE..
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    enableEffectSuggestion(enabled: boolean): void;

    /**
     * Gets supported effect suggestion types.
     *
     * @returns { Array<EffectSuggestionType> } The array of the effect suggestion types.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getSupportedEffectSuggestionTypes(): Array<EffectSuggestionType>;

    /**
     * Set the range of effect suggestion type and enable status.
     * The application should fully set all data when it starts up.
     *
     * @param { Array<EffectSuggestionStatus> } status - The array of the effect suggestion status.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setEffectSuggestionStatus(status: Array<EffectSuggestionStatus>): void;

    /**
     * Update the enable status of the effect suggestion type.
     *
     * @param { EffectSuggestionType } type - The type of effect suggestion.
     * @param { boolean } enabled - The status of effect suggestion type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    updateEffectSuggestion(type: EffectSuggestionType, enabled: boolean): void;
  }

  /**
   * Enumerates the color effect types.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum ColorEffectType {
    /**
     * Regular color effect.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NORMAL = 0,

    /**
     * Bright color effect.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    BRIGHT = 1,

    /**
     * Soft color effect.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SOFT = 2,

    /**
     * Black and white color effect.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BLACK_WHITE = 3
  }

  /**
   * 枚举，相机控制器支持的效果类型。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum ControlCenterEffectType {
    /**
     * 美颜。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    BEAUTY = 0,

    /**
     * 人像虚化。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    PORTRAIT = 1,

    /**
     * 自动对焦。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 24 dynamic&static
     */
    AUTO_FRAMING = 2,

    /**
     * 色彩效果。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    COLOR_EFFECT = 3
  }

  /**
   * Enumerates the policy types.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum PolicyType {
    /**
     * Privacy.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    PRIVACY = 1
  }

  /**
   * Provides the API to obtain the color effects supported.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface ColorEffectQuery {
    /**
     * Obtains the supported color effects.
     *
     * @returns { Array<ColorEffectType> } Array of color effects supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getSupportedColorEffects(): Array<ColorEffectType>;
  }

  /**
   * ColorEffect extends [ColorEffectQuery]{@link camera.ColorEffectQuery}
   * Provides the APIs to obtain and set the lens color effect.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface ColorEffect extends ColorEffectQuery {
    /**
     * Obtains the color effect in use.
     *
     * @returns { ColorEffectType } Color effect.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getColorEffect(): ColorEffectType;

    /**
     * Sets a color effect. Before the setting, call
     * [getSupportedColorEffects]{@link camera.ColorEffectQuery.getSupportedColorEffects} to obtain the supported color
     * effects.
     *
     * @param { ColorEffectType } type - The type of color effect.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setColorEffect(type: ColorEffectType): void;
  }

  /**
   * 色彩管理类，用于查询色彩空间参数。
   * 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface ColorManagementQuery {
    /**
     * 获取支持的色彩空间列表。
     *
     * @returns { Array<colorSpaceManager.ColorSpace> } 支持的色彩空间列表。若接口调用失败，返回undefined。
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage. [since 12 - 17]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getSupportedColorSpaces(): Array<colorSpaceManager.ColorSpace>;
  }

  /**
   * ColorManagement继承自[ColorManagementQuery]{@link camera.ColorManagementQuery}。
   * 
   * 色彩管理类，用于设置色彩空间参数。
   * 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface ColorManagement extends ColorManagementQuery {
    /**
     * 获取当前设置的色彩空间。
     *
     * @returns { colorSpaceManager.ColorSpace } 当前设置的色彩空间。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getActiveColorSpace(): colorSpaceManager.ColorSpace;

    /**
     * 设置色彩空间。
     * 
     * 使用该接口前，必须先通过[getSupportedColorSpaces]{@link camera.ColorManagementQuery.getSupportedColorSpaces}获取当前设备所支持的
     * ColorSpaces。该接口建议在[addOutput]{@link camera.Session.addOutput}之后、
     * [commitConfig]{@link camera.Session.commitConfig()}之前调用，如果在[commitConfig]{@link camera.Session.commitConfig()}之后调
     * 用该接口，会导致相机会话配置耗时增加。
     * 
     * P3广色域与HDR高动态范围成像：
     * 
     * 应用可以下发不同的色彩空间（ColorSpace）参数来支持P3广色域以及HDR的功能。若应用不主动设置色彩空间，拍照、录像模式均默认为SDR拍摄。
     * 
     * 应用针对不同模式使能HDR效果、设置的色彩空间以及设置相机输出流[Profile]{@link camera.Profile}中的[CameraFormat]{@link camera.CameraFormat}一一对应关系可
     * 参考下表。例如，在录像模式下若需要选择HDR拍摄，相机预览输出流和录像输出流[Profile]{@link camera.Profile}中的[CameraFormat]{@link camera.CameraFormat}可
     * 选择CAMERA_FORMAT_YCRCB_P010，色彩空间ColorSpace可选择设置BT2020_HLG_LIMIT。
     * 
     * 在拍照模式下，若需要获取HDR高显效果的图片，可通过设置色彩空间（ColorSpace）为DISPLAY_P3或BT2020_HLG实现。其中BT2020_HLG能够表示更广的色域，需要搭配使用预览输出格式（
     * Profile.format）P010（CAMERA_FORMAT_YCRCB_P010/CAMERA_FORMAT_YCBCR_P010）来提升图像质感。
     * 
     * 在录像模式下，通过设置色彩空间为H_LOG, 可以录制LOG视频（不支持前置与微距）。
     * 
     * 从API version 23开始，可以通过接口
     * [getSupportedFullOutputCapability]{@link camera.CameraManager.getSupportedFullOutputCapability}查询是否支持拍照模式下的预览P010
     * 格式。
     * 
     * - 若应用不主动设置色彩空间，在拍照模式下，当预览输出格式为CAMERA_FORMAT_YUV_420_SP时，色彩空间默认为SRGB；当预览输出格式为CAMERA_FORMAT_YCRCB_P010/
     * CAMERA_FORMAT_YCBCR_P010时，色彩空间默认为BT2020_HLG。
     * - 若应用主动设置色彩空间，在拍照模式下，预览输出格式与色彩空间必须按照下列表格中的对应关系配置，若不满足则会在
     * [setColorSpace]{@link camera.ColorManagement.setColorSpace}或[commitConfig]{@link camera.Session.commitConfig()}时返
     * 回错误码。
     * 
     * 拍照模式：
     * 
     * | SDR/HDR拍摄        | 预览输出格式 | 色彩空间 |
     *   |--------------------|------------| ------------|
     *   | SDR(Default)       | CAMERA_FORMAT_YUV_420_SP       | SRGB       |
     *   | HDR P3               | CAMERA_FORMAT_YUV_420_SP | DISPLAY_P3 |
     *  | HDR BT.2020 | CAMERA_FORMAT_YCRCB_P010,<br>CAMERA_FORMAT_YCBCR_P010 | BT2020_HLG |
     * 
     * 在录像模式下，使能SDR或HDR_VIVID拍摄效果时，CameraFormat与ColorSpace必须按照下列表格中的对应关系配置，若不满足表格中CameraFormat与ColorSpace配置，会导致预览异常等问题。
     * 
     * 录像模式：
     * 
     * | SDR/HDR拍摄         | CameraFormat             | ColorSpace       |
     * |--------------------|--------------------------|------------------|
     * | SDR(Default)               | CAMERA_FORMAT_YUV_420_SP | BT709_LIMIT      |
     * | HDR_VIVID          | CAMERA_FORMAT_YCRCB_P010 | BT2020_HLG_LIMIT,<br>BT2020_HLG |
     *
     * @param { colorSpaceManager.ColorSpace } colorSpace - The type of color space.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - The colorSpace does not match the format.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    setColorSpace(colorSpace: colorSpaceManager.ColorSpace): void;
  }

  /**
   * 控制中心类，用于查询是否支持相机控制器。
   * 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface ControlCenterQuery {
    /**
     * 查询是否支持相机控制器。
     *
     * @returns { boolean } 返回是否支持相机控制器。true表示支持，false表示不支持。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    isControlCenterSupported(): boolean;

    /**
     * 查询相机控制器支持的效果类型。
     *
     * @returns { Array<ControlCenterEffectType> } 支持的效果类型。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getSupportedEffectTypes(): Array<ControlCenterEffectType>;
  }

  /**
   * ControlCenter继承自[ControlCenterQuery]{@link camera.ControlCenterQuery}。
   * 
   * 控制中心类，用于使能相机控制器。
   * 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface ControlCenter extends ControlCenterQuery {
    /**
     * 使能相机控制器。
     *
     * @param { boolean } enabled - 开启或关闭相机控制器。true表示开启，false表示关闭。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    enableControlCenter(enabled: boolean): void;
  }

  /**
   * 自动切换镜头查询类，用于查询设备是否支持自动切换镜头。
   * 
   * [自动切换镜头能力](docroot://media/camera/camera-auto-switch.md)仅支持折叠屏设备使用，如需使能该能力请参考
   * [enableAutoDeviceSwitch]{@link camera.AutoDeviceSwitch.enableAutoDeviceSwitch}。
   * 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 13 dynamic
   * @since 23 static
   */
  interface AutoDeviceSwitchQuery {
    /**
     * 查询设备是否支持自动切换镜头能力。
     *
     * @returns { boolean } 是否支持自动切换镜头，true为支持，false为不支持。
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage. [since 13 - 17]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    isAutoDeviceSwitchSupported(): boolean;
  }

  /**
   * 自动切换镜头类，继承自[AutoDeviceSwitchQuery]{@link camera.AutoDeviceSwitchQuery}，用于使能或去使能自动切换镜头。自动切换镜头能力仅支持折叠屏设备使用，详细开发指导请参考
   * [自动切换摄像头实践](docroot://media/camera/camera-auto-switch.md)。
   * 
   * 使用建议：自动切换镜头功能由系统自动完成输入设备切换、会话配置和参数接续。如系统发现镜头切换时，两颗镜头的变焦范围不一致，则会通过
   * [AutoDeviceSwitchStatus]{@link camera.AutoDeviceSwitchStatus}中的isDeviceCapabilityChanged字段告知应用，但仍需要应用自己处理UX的变更（如变焦范
   * 围的调整，需要重新通过[getZoomRatioRange]{@link camera.ZoomQuery.getZoomRatioRange}接口获取数据并更新UX），因此更适用于极简UX交互的场景。
   * 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 13 dynamic
   * @since 23 static
   */
  interface AutoDeviceSwitch extends AutoDeviceSwitchQuery {
    /**
     * 使能或去使能自动切换镜头。可以先通过[isAutoDeviceSwitchSupported]{@link camera.AutoDeviceSwitchQuery.isAutoDeviceSwitchSupported}获取
     * 当前设备是否支持自动切换镜头。
     * 
     * > **说明：**
     * >
     * > 该接口仅用于有多个前置镜头的折叠设备，在不同的折叠状态下可自动切换到当前可使用的前置镜头。无法实现前后置镜头的切换。
     *
     * @param { boolean } enabled - 使能或去使能自动切换镜头。true表示使能，false表示不使能。
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @throws { BusinessError } 7400101 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     *     3. Parameters verification failed. [since 19]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    enableAutoDeviceSwitch(enabled: boolean): void;
  }

  /**
   * 自动切换镜头状态信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 13 dynamic
   * @since 23 static
   */
  interface AutoDeviceSwitchStatus {
    /**
     * 自动切换镜头是否成功。true表示成功，false表示失败。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly isDeviceSwitched: boolean;

    /**
     * 自动切换镜头成功后，其镜头能力值是否发生改变。true表示发生变化，false表示未发生变化。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly isDeviceCapabilityChanged: boolean;
  }

  /**
   * 提供查询设备是否支持相机微距拍摄的方法。
   * 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 12 - 18]
   * @publicapi [since 19]
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface MacroQuery {
    /**
     * 检测当前状态下是否支持微距能力，需要在CaptureSession调用
     * [commitConfig]{@link camera.Session.commitConfig(callback: AsyncCallback<void>)}之后进行调用。
     *
     * @returns { boolean } 返回是否支持微距能力。true表示支持，false表示不支持。
     * @throws { BusinessError } 202 - Not System Application. [since 11 - 18]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 11 - 18]
     * @publicapi [since 19]
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    isMacroSupported(): boolean;
  }

  /**
   * Macro继承自[MacroQuery]{@link camera.MacroQuery}。
   * 
   * 提供使能微距能力的接口。
   * 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 11 - 18]
   * @publicapi [since 19]
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Macro extends MacroQuery {
    /**
     * 使能当前的微距能力。
     * 
     * > **说明：**
     * >
     * > 使用该接口前，需要先通过[isMacroSupported]{@link camera.MacroQuery.isMacroSupported}接口查询当前设备是否支持微距能力。
     *
     * @param { boolean } enabled - 是否开启微距能力。true表示开启微距能力，false表示关闭微距能力。
     * @throws { BusinessError } 202 - Not System Application. [since 11 - 18]
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400102 - Operation not allowed. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 11 - 18]
     * @publicapi [since 19]
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    enableMacro(enabled: boolean): void;
  }

  /**
   * Enum for usage type used in capture session.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum UsageType {
    /**
     * Bokeh usage type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    BOKEH = 0
  }

  /**
   * 会话类，保存一次相机运行所需要的所有资源[CameraInput]{@link camera.CameraInput}、[CameraOutput]{@link camera.CameraOutput}，并向相机设备申请完成相机功
   * 能（录像，拍照）。
   * 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Session {
    /**
     * 开始配置会话。
     *
     * @throws { BusinessError } 7400105 - Session config locked.
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    beginConfig(): void;

    /**
     * 提交配置信息，通过注册回调函数获取结果。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当提交配置信息成功，err为undefined，否则为错误对象。错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}，比如预览流与录像输出流的分辨率的宽高比不一致，会返回7400201。
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    commitConfig(callback: AsyncCallback<void>): void;

    /**
     * 提交配置信息。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    commitConfig(): Promise<void>;

    /**
     * 判断当前cameraInput是否可以添加到session中。当前函数需要在[beginConfig]{@link camera.Session.beginConfig}和
     * [commitConfig]{@link camera.Session.commitConfig()}之间生效。
     *
     * @param { CameraInput } cameraInput - 需要添加的CameraInput实例。传参异常（如超出范围、传入null、未定义等），实际接口不会生效。
     * @returns { boolean } 判断当前cameraInput是否可以添加到session中。true表示支持添加当前cameraInput，false表示不支持添加。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    canAddInput(cameraInput: CameraInput): boolean;

    /**
     * 把[CameraInput]{@link camera.CameraInput}加入到会话。
     *
     * @param { CameraInput } cameraInput - 需要添加的CameraInput实例。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config. [since 11 - 17]
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    addInput(cameraInput: CameraInput): void;

    /**
     * 移除[CameraInput]{@link camera.CameraInput}。当前函数需要在[beginConfig]{@link camera.Session.beginConfig}和
     * [commitConfig]{@link camera.Session.commitConfig()}之间生效。
     *
     * @param { CameraInput } cameraInput - 需要移除的CameraInput实例。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config. [since 11 - 17]
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    removeInput(cameraInput: CameraInput): void;

    /**
     * 判断当前cameraOutput是否可以添加到session中。当前函数需要在[addInput]{@link camera.Session.addInput}和
     * [commitConfig]{@link camera.Session.commitConfig()}之间生效。
     *
     * @param { CameraOutput } cameraOutput - 需要添加的CameraOutput实例。传参异常（如超出范围、传入null、未定义等），实际接口不会生效。
     * @returns { boolean } 是否可以添加当前cameraOutput到session中，true为可添加，false为不可添加。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    canAddOutput(cameraOutput: CameraOutput): boolean;

    /**
     * 把[CameraOutput]{@link camera.CameraOutput}加入到会话。
     *
     * @param { CameraOutput } cameraOutput - 需要添加的CameraOutput实例。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config. [since 11 - 17]
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    addOutput(cameraOutput: CameraOutput): void;

    /**
     * 从会话中移除[CameraOutput]{@link camera.CameraOutput}。
     *
     * @param { CameraOutput } cameraOutput - 需要移除的CameraOutput实例。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config. [since 11 - 17]
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    removeOutput(cameraOutput: CameraOutput): void;

    /**
     * 开始会话工作，通过注册回调函数获取结果。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当开始会话工作成功，err为undefined，否则为错误对象。错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @throws { BusinessError } 7400102 - Operation not allowed. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * 开始会话工作。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @throws { BusinessError } 7400102 - Operation not allowed. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * 停止会话工作，通过注册回调函数获取结果。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当停止会话工作成功，err为undefined，否则为错误对象。错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * 停止会话工作。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * 释放会话资源，通过注册回调函数获取结果。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当释放会话资源成功，err为undefined，否则为错误对象。错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * 释放会话资源。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * Set usage for the capture session.
     *
     * @param { UsageType } usage - The capture session usage.
     * @param { boolean } enabled - Enable usage for session if TRUE.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    setUsage(usage: UsageType, enabled: boolean): void;

    /**
     * Get the supported camera output capability set.
     *
     * @param { CameraDevice } camera - Camera device.
     * @returns { Array<CameraOutputCapability> } The array of the output capability.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    getCameraOutputCapabilities(camera: CameraDevice): Array<CameraOutputCapability>;

    /**
     * Sets key-value pairs parameters for the session.
     *
     * @param { Record<string, string> } kvpairs - The pairs of tag name and value in camera metadata.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setParameters(kvpairs: Record<string, string>): void;

    /**
     * Gets the values of the given key in camera metadata.
     *
     * @param { string } key - Tag name in camera metadata.
     * @returns { Array<string> } The values of the key in camera metadata.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    getParameters(key: string): Array<string>;

    /**
     * Gets the supported keys in camera metadata.
     *
     * @returns { Array<string> } The supported keys in camera metadata.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    getSupportedKeys(): Array<string>;

    /**
     * Gets the active value of the given key in camera metadata.
     *
     * @param { string } key - Tag name in camera metadata.
     * @returns { string } The active value of the key in camera metadata.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    getActiveParameter(key: string): string;
  }

  /**
   * 拍照会话类，保存一次相机运行所需要的所有资源[CameraInput]{@link camera.CameraInput}、[CameraOutput]{@link camera.CameraOutput}，并向相机设备申请完成相
   * 机功能(录像，拍照)。
   * 
   * > **说明：**
   * >
   * > 从 API version 10开始支持，从API version 11开始废弃。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead camera.VideoSession
   */
  interface CaptureSession {
    /**
     * 开始配置会话。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @throws { BusinessError } 7400105 - Session config locked.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.beginConfig
     */
    beginConfig(): void;

    /**
     * 提交配置信息，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当提交配置信息成功，err为undefined，否则为错误对象。错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.commitConfig(callback: AsyncCallback<void>)
     */
    commitConfig(callback: AsyncCallback<void>): void;

    /**
     * 提交配置信息。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.commitConfig()
     */
    commitConfig(): Promise<void>;

    /**
     * 把[CameraInput]{@link camera.CameraInput}加入到会话。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { CameraInput } cameraInput - 需要添加的CameraInput实例。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.addInput
     */
    addInput(cameraInput: CameraInput): void;

    /**
     * 移除[CameraInput]{@link camera.CameraInput}。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { CameraInput } cameraInput - 需要移除的CameraInput实例。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.removeInput
     */
    removeInput(cameraInput: CameraInput): void;

    /**
     * 把[CameraOutput]{@link camera.CameraOutput}加入到会话。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { CameraOutput } cameraOutput - 需要添加的CameraOutput实例。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.addOutput
     */
    addOutput(cameraOutput: CameraOutput): void;

    /**
     * 从会话中移除[CameraOutput]{@link camera.CameraOutput}。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { CameraOutput } cameraOutput - 需要移除的CameraOutput实例。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.removeOutput
     */
    removeOutput(cameraOutput: CameraOutput): void;

    /**
     * 开始会话工作，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当开始会话工作成功，err为undefined，否则为错误对象。错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.start(callback: AsyncCallback<void>)
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * 开始会话工作。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.start()
     */
    start(): Promise<void>;

    /**
     * 停止会话工作，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当停止会话工作成功，err为undefined，否则为错误对象。错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.stop(callback: AsyncCallback<void>)
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * 停止会话工作。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.stop()
     */
    stop(): Promise<void>;

    /**
     * 释放会话资源，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当释放会话资源成功，err为undefined，否则为错误对象。错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.release(callback: AsyncCallback<void>)
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * 释放会话资源。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.release()
     */
    release(): Promise<void>;

    /**
     * 检测是否有闪光灯。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { boolean } 设备支持闪光灯。true表示支持，false表示不支持。接口调用失败会返回相应错误码，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.FlashQuery.hasFlash
     */
    hasFlash(): boolean;

    /**
     * 检测闪光灯模式是否支持。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { FlashMode } flashMode - 指定闪光灯模式。
     * @returns { boolean } 检测闪光灯模式是否支持。true表示支持，false表示不支持。接口调用失败会返回相应错误码，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.FlashQuery.isFlashModeSupported
     */
    isFlashModeSupported(flashMode: FlashMode): boolean;

    /**
     * 获取当前设备的闪光灯模式。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { FlashMode } 获取当前设备的闪光灯模式。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Flash.getFlashMode
     */
    getFlashMode(): FlashMode;

    /**
     * 设置闪光灯模式。
     * 
     * 进行设置之前，需要先检查：
     * 
     * 1. 设备是否支持闪光灯，可使用方法[hasFlash]{@link camera.CaptureSession.hasFlash}。
     * 2. 设备是否支持指定的闪光灯模式，可使用方法[isFlashModeSupported]{@link camera.CaptureSession.isFlashModeSupported}。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { FlashMode } flashMode - 指定闪光灯模式。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Flash.setFlashMode
     */
    setFlashMode(flashMode: FlashMode): void;

    /**
     * 查询曝光模式是否支持。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { ExposureMode } aeMode - 曝光模式。
     * @returns { boolean } 获取是否支持曝光模式。true表示支持，false表示不支持。接口调用失败会返回相应错误码，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposureQuery.isExposureModeSupported
     */
    isExposureModeSupported(aeMode: ExposureMode): boolean;

    /**
     * 获取当前曝光模式。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { ExposureMode } 获取当前曝光模式。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposure.getExposureMode
     */
    getExposureMode(): ExposureMode;

    /**
     * 设置曝光模式。进行设置之前，需要先检查设备是否支持指定的曝光模式，可使用方法
     * [isExposureModeSupported]{@link camera.CaptureSession.isExposureModeSupported}。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { ExposureMode } aeMode - 曝光模式。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposure.setExposureMode
     */
    setExposureMode(aeMode: ExposureMode): void;

    /**
     * 查询曝光区域中心点。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { Point } 获取当前曝光点。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposure.getMeteringPoint
     */
    getMeteringPoint(): Point;

    /**
     * 设置曝光区域中心点，曝光点应位于0-1坐标系内，该坐标系左上角为{0，0}，右下角为{1，1}。
     * 
     * 此坐标系是以设备充电口在右侧时的横向设备方向为基准的，例如应用的预览界面布局以设备充电口在下侧时的竖向方向为基准，布局宽高为{w，h}，且触碰点为{x，y}，则转换后的坐标点为{y/h，1-x/w}。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { Point } point - 曝光点，x,y设置范围应在[0,1]之内，超过范围，如果小于0设置0，大于1设置1。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposure.setMeteringPoint
     */
    setMeteringPoint(point: Point): void;

    /**
     * 查询曝光补偿范围。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { Array<number> } 获取补偿范围的数组。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposureQuery.getExposureBiasRange
     */
    getExposureBiasRange(): Array<number>;

    /**
     * 设置曝光补偿，曝光补偿值（EV）。
     * 
     * 进行设置之前，建议先通过方法[getExposureBiasRange]{@link camera.CaptureSession.getExposureBiasRange}查询支持的范围。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { number } exposureBias - 曝光补偿，[getExposureBiasRange]{@link camera.AutoExposureQuery.getExposureBiasRange}
     *     查询支持的范围，如果设置超过支持范围的值，自动匹配到就近临界点。曝光补偿存在步长，如步长为0.5。则设置1.2时，获取到实际生效曝光补偿为1.0。接口调用失败会返回相应错误码，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。传参为null或者undefined，作为0处理，曝光补偿设置0。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposure.setExposureBias
     */
    setExposureBias(exposureBias: number): void;

    /**
     * 查询当前的曝光值。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { number } 获取曝光值。曝光补偿存在步长，如步长为0.5。则设置1.2时，获取到实际生效曝光补偿为1.0。接口调用失败会返回相应错误码，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposure.getExposureValue
     */
    getExposureValue(): number;

    /**
     * 查询对焦模式是否支持。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { FocusMode } afMode - 指定的焦距模式。
     * @returns { boolean } 检测对焦模式是否支持。true表示支持，false表示不支持。接口调用失败会返回相应错误码，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.FocusQuery.isFocusModeSupported
     */
    isFocusModeSupported(afMode: FocusMode): boolean;

    /**
     * 获取当前的对焦模式。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { FocusMode } 获取当前设备的焦距模式。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Focus.getFocusMode
     */
    getFocusMode(): FocusMode;

    /**
     * 设置对焦模式。
     * 
     * 进行设置之前，需要先检查设备是否支持指定的焦距模式，可使用方法[isFocusModeSupported]{@link camera.CaptureSession.isFocusModeSupported}。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { FocusMode } afMode - 指定的焦距模式。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Focus.setFocusMode
     */
    setFocusMode(afMode: FocusMode): void;

    /**
     * 设置焦点，焦点应在0-1坐标系内，该坐标系左上角为{0，0}，右下角为{1，1}。
     * 
     * 此坐标系是以设备充电口在右侧时的横向设备方向为基准的，例如应用的预览界面布局以设备充电口在下侧时的竖向方向为基准，布局宽高为{w，h}，且触碰点为{x，y}，则转换后的坐标点为{y/h，1-x/w}。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { Point } point - 焦点。x,y设置范围应在[0,1]之内，超过范围，如果小于0设置0，大于1设置1。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Focus.setFocusPoint
     */
    setFocusPoint(point: Point): void;

    /**
     * 查询焦点。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { Point } 用于获取当前焦点。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Focus.getFocusPoint
     */
    getFocusPoint(): Point;

    /**
     * 查询焦距值。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { number } 用于获取当前焦距。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Focus.getFocalLength
     */
    getFocalLength(): number;

    /**
     * 获取支持的变焦范围。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { Array<number> } 用于获取可变焦距比范围，返回的数组包括其最小值和最大值。接口调用失败会返回相应错误码，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.ZoomQuery.getZoomRatioRange
     */
    getZoomRatioRange(): Array<number>;

    /**
     * 获取当前的变焦比。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { number } 获取当前的变焦比结果。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Zoom.getZoomRatio
     */
    getZoomRatio(): number;

    /**
     * 设置变焦比，变焦精度最高为小数点后两位，如果设置超过支持的精度范围，则只保留精度范围内数值。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { number } zoomRatio - 可变焦距比，通过[getZoomRatioRange]{@link camera.ZoomQuery.getZoomRatioRange}获取支持的变焦范围，如果设置
     *     超过支持范围的值，则只保留精度范围内数值。传参为null或者undefined，作为0处理，变焦设置最小值。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Zoom.setZoomRatio
     */
    setZoomRatio(zoomRatio: number): void;

    /**
     * 查询是否支持指定的视频防抖模式。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { VideoStabilizationMode } vsMode - 视频防抖模式。传参为null或者undefined，作为0处理，超级防抖模式关闭。
     * @returns { boolean } 返回视频防抖模式是否支持。true表示支持，false表示不支持。接口调用失败会返回相应错误码，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.StabilizationQuery.isVideoStabilizationModeSupported
     */
    isVideoStabilizationModeSupported(vsMode: VideoStabilizationMode): boolean;

    /**
     * 查询当前正在使用的视频防抖模式。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { VideoStabilizationMode } 视频防抖是否正在使用。接口调用失败会返回相应错误码，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Stabilization.getActiveVideoStabilizationMode
     */
    getActiveVideoStabilizationMode(): VideoStabilizationMode;

    /**
     * 设置视频防抖模式。需要先检查设备是否支持对应的防抖模式，可以通过
     * [isVideoStabilizationModeSupported]{@link camera.CaptureSession.isVideoStabilizationModeSupported}方法判断所设置的模式是否支持。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { VideoStabilizationMode } mode - 需要设置的视频防抖模式。传参为null或者undefined，作为0处理，超级防抖模式关闭。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Stabilization.setVideoStabilizationMode
     */
    setVideoStabilizationMode(mode: VideoStabilizationMode): void;

    /**
     * 监听相机聚焦的状态变化，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'focusStateChange' } type - 监听事件，固定为'focusStateChange'，session 创建成功可监听。仅当自动对焦模式时,且相机对焦状态发生改变时可触发该事件。
     * @param { AsyncCallback<FocusState> } callback - 回调函数，用于获取当前对焦状态。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.VideoSession.on(type: 'focusStateChange', callback: AsyncCallback<FocusState>)
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * 注销监听相机聚焦的状态变化。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { 'focusStateChange' } type - 监听事件，固定为'focusStateChange'，session 创建成功可监听。
     * @param { AsyncCallback<FocusState> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.VideoSession.off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>)
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * 监听拍照会话的错误事件，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，session创建成功之后可监听该接口。session调用相关接口出现错误时会触发该事件，比如调用
     *     [beginConfig]{@link camera.CaptureSession.beginConfig}，
     *     [commitConfig]{@link camera.CaptureSession.commitConfig()}，[addInput]{@link camera.CaptureSession.addInput}等接
     *     口发生错误时返回错误信息。
     * @param { ErrorCallback } callback - 回调函数，用于获取错误信息。返回错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.VideoSession.on(type: 'error', callback: ErrorCallback)
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * 注销监听拍照会话的错误事件，通过注册回调函数获取结果。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，session创建成功之后可监听该接口。
     * @param { ErrorCallback } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.VideoSession.off(type: 'error', callback?: ErrorCallback)
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Obtains the supported beauty types.
     *
     * @returns { Array<BeautyType> } Array of beauty types supported.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.BeautyQuery.getSupportedBeautyTypes
     */
    getSupportedBeautyTypes(): Array<BeautyType>;

    /**
     * Obtains the levels that can be set a beauty type. The beauty levels vary according to the device type. The
     * following table is only an example.
     * | Input Parameter          | Example Return Value   | Return Value Description    |
     * | ----------------| ----  | ---------|
     * | AUTO           | [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]     |Beauty levels supported when **type** is set to **AUTO**. The value **0** means that beauty mode is disabled, and other positive values mean the corresponding automatic beauty levels.   |
     * | SKIN_SMOOTH    | [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]     | Beauty levels supported when **type** is set to **SKIN_SMOOTH**. The value **0** means that the skin smoothing feature is disabled, and other positive values mean the corresponding skin smoothing levels.   |
     * | FACE_SLENDER   | [0, 1, 2, 3, 4, 5]      | Beauty levels supported when **type** is set to **FACE_SLENDER**. The value **0** means that the face slimming feature is disabled, and other positive values mean the corresponding face slimming levels.  |
     * | SKIN_TONE      | [-1, 16242611]      | Beauty levels supported when **type** is set to **SKIN_TONE**. The value **-1** means that the skin tone perfection feature is disabled. Other non-negative values mean the skin tone perfection levels represented by RGB,<br> for example, 16242611, which is 0xF7D7B3 in hexadecimal format, where F7, D7, and B3 represent the values of the R channel, G channel, and B channel, respectively.   |
     *
     * @param { BeautyType } type - Beauty type.
     * @returns { Array<number> } Array of levels supported.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.BeautyQuery.getSupportedBeautyRange
     */
    getSupportedBeautyRange(type: BeautyType): Array<number>;

    /**
     * Obtains the level of the beauty type in use.
     *
     * @param { BeautyType } type - Beauty type.
     * @returns { number } the beauty effect in use.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Beauty.getBeauty
     */
    getBeauty(type: BeautyType): number;

    /**
     * Sets a beauty type and its level. Beauty mode is turned off only when all the
     * [beauty types]{@link camera.BeautyType} obtained through
     * [getSupportedBeautyTypes]{@link camera.CaptureSession.getSupportedBeautyTypes} are disabled.
     *
     * @param { BeautyType } type - Beauty type.
     * @param { number } value - Beauty level, which is obtained through
     *     [getSupportedBeautyRange]{@link camera.CaptureSession.getSupportedBeautyRange}.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Beauty.setBeauty
     */
    setBeauty(type: BeautyType, value: number): void;
  }

  /**
   * 枚举，提供预配置的类型。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PreconfigType {
    /**
     * 720P预配置。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    PRECONFIG_720P = 0,

    /**
     * 1080P预配置。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    PRECONFIG_1080P = 1,

    /**
     * 4K预配置。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    PRECONFIG_4K = 2,

    /**
     * 高质量预配置。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    PRECONFIG_HIGH_QUALITY = 3,

    /**
     * 预配置支持预览高动态范围显示和HDR动图拍摄。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    PRECONFIG_HIGH_QUALITY_PHOTOSESSION_BT2020 = 4
  }

  /**
   * 枚举，提供预配置的分辨率比例。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PreconfigRatio {
    /**
     * 1:1画幅。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    PRECONFIG_RATIO_1_1 = 0,

    /**
     * 4:3画幅。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    PRECONFIG_RATIO_4_3 = 1,

    /**
     * 16:9画幅。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    PRECONFIG_RATIO_16_9 = 2
  }

  /**
   * Enumerates the scene features.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum SceneFeatureType {
    /**
     * Moon scene.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MOON_CAPTURE_BOOST = 0,

    /**
     * Scene where a tripod is used for photo capture.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TRIPOD_DETECTION = 1,

    /**
     * Scene for long exposure photography.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    LOW_LIGHT_BOOST = 2
  }

  /**
   * Describes the scene feature detection result.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface SceneFeatureDetectionResult {
    /**
     * Scene feature type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    readonly featureType: SceneFeatureType;

    /**
     * Whether the specified scene feature is detected. **true** if detected, **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    readonly detected: boolean;
  }

  /**
   * Enumerates the tripod statuses.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum TripodStatus {
    /**
     * Error status, or no tripod detected.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    INVALID = 0,

    /**
     * The tripod is active.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    ACTIVE = 1,

    /**
     * The system is transitioning into a stable tripod mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    ENTERING = 2,

    /**
     * The system is leaving the stable tripod mode.
     * This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    EXITING = 3
  }

  /**
   * TripodDetectionResult extends [SceneFeatureDetectionResult]{@link camera.SceneFeatureDetectionResult}
   * Describes the tripod detection result.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface TripodDetectionResult extends SceneFeatureDetectionResult {
    /**
     * Tripod status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly tripodStatus: TripodStatus;
  }

  /**
   * Provides the scene detection and query capabilities.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface SceneDetectionQuery {
    /**
     * Checks whether a scene feature is supported.
     *
     * @param { SceneFeatureType } type - Scene feature.
     * @returns { boolean } Check result for the support of the scene feature. **true** if supported, **false**
     *     otherwise.
     * @throws { BusinessError } 202 - Not System Application, only throw in session usage.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isSceneFeatureSupported(type: SceneFeatureType): boolean;
  }

  /**
   * Provides the scene detection capability. It inherits from [SceneDetectionQuery]{@link camera.SceneDetectionQuery}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface SceneDetection extends SceneDetectionQuery {
    /**
     * Enables or disables a scene feature. This API must be called after
     * [SceneFeatureDetectionResult]{@link camera.SceneFeatureDetectionResult} of the corresponding scene feature is
     * received.
     *
     * @param { SceneFeatureType } type - Scene feature.
     * @param { boolean } enabled - Whether to enable the scene feature. **true** to enable, **false** otherwise.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    enableSceneFeature(type: SceneFeatureType, enabled: boolean): void;
  }

  /**
   * Enumerates the camera imaging modes.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum CameraImagingMode {
    /**
     * Auto imaging mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    AUTO = 0,

    /**
     * RGB imaging mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    RGB = 1,

    /**
     * IR imaging mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    IR = 2
  }

  /**
   * Imaging mode query object.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ImagingModeQuery {
    /**
     * Checks whether a camera imaging mode is supported.
     *
     * @param { CameraImagingMode } mode - Imaging mode.
     * @returns { boolean } Is the imaging mode supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isImagingModeSupported(mode: CameraImagingMode): boolean;
  }

  /**
   * Implements imaging mode.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ImagingMode extends ImagingModeQuery {
    /**
     * Gets current imaging mode.
     *
     * @returns { CameraImagingMode } The current imaging mode.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getImagingMode(): CameraImagingMode;

    /**
     * Sets imaging mode.
     *
     * @param { CameraImagingMode } mode - Target imaging mode.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setImagingMode(mode: CameraImagingMode): void;
  }

  /**
   * Implements a photo session for system applications, which sets the parameters of the normal photo mode and saves
   * all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput}
   * instances required to run the camera. It inherits from [Session]{@link camera.Session}.
   *
   * @extends PhotoSession, Beauty, ColorEffect, ColorManagement, Macro, SceneDetection, EffectSuggestion [since 11 - 13]
   * @extends PhotoSession, Beauty, ColorEffect, ColorManagement, Macro, SceneDetection, EffectSuggestion,
   *     DepthFusion [since 14]
   * @extends PhotoSession, Beauty, ColorEffect, ColorManagement, Macro, SceneDetection, EffectSuggestion,
   *     DepthFusion, ImagingMode [since 26.0.0]
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface PhotoSessionForSys extends PhotoSession, Beauty, ColorEffect, ColorManagement, Macro, SceneDetection, EffectSuggestion, DepthFusion, ImagingMode {
  }

  /**
   * 枚举，拍照画质优先策略。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 21 dynamic
   * @since 24 static
   */
  enum PhotoQualityPrioritization {
    /**
     * 画质优先，拍照需要较长的时间，以输出高画质的图片。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    HIGH_QUALITY = 0,

    /**
     * 性能优先，会降低画质来提升拍照的速度。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    SPEED = 1,
  }

  /**
   * PhotoSession继承自[Session]{@link camera.Session}、[Flash]{@link camera.Flash}、
   * [AutoExposure]{@link camera.AutoExposure}、[WhiteBalance]{@link camera.WhiteBalance}、[Focus]{@link camera.Focus}、
   * [Zoom]{@link camera.Zoom}、[ColorManagement]{@link camera.ColorManagement}、
   * [AutoDeviceSwitch]{@link camera.AutoDeviceSwitch}、[Macro]{@link camera.Macro}、
   * [ManualExposure](docroot://reference/apis-camera-kit/arkts-apis-camera-ManualExposure.md)、
   * [ManualFocus](docroot://reference/apis-camera-kit/arkts-apis-camera-ManualFocus.md)、
   * [ManualIso](docroot://reference/apis-camera-kit/arkts-apis-camera-ManualIso.md)、
   * [OIS](docroot://reference/apis-camera-kit/arkts-apis-camera-OIS.md)、
   * [Aperture](docroot://reference/apis-camera-kit/arkts-apis-camera-Aperture.md)。
   * 
   * 普通拍照模式会话类，提供了对闪光灯、曝光、白平衡、对焦、变焦、色彩空间、微距、手动曝光、手动对焦、手动ISO、光学防抖及光圈的操作。
   * 
   * 默认的拍照模式，用于拍摄标准照片。支持多种照片格式和分辨率，适合大多数日常拍摄场景。
   * 
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorManagement [since 11 - 12]
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorManagement, AutoDeviceSwitch [since 13 - 18]
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorManagement, AutoDeviceSwitch, Macro [since 19 - 19]
   * @extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom, ColorManagement, AutoDeviceSwitch,
   *     Macro [since 20 - 23]
   * @extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom, ColorManagement, AutoDeviceSwitch,
   *     Macro, ManualExposure, ManualFocus, ManualIso, OIS, Aperture [since 24]
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface PhotoSession extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom, ColorManagement,
      AutoDeviceSwitch, Macro, ManualExposure, ManualFocus, ManualIso, OIS, Aperture {
    /**
     * 查询当前Session是否支持指定的预配置类型。
     *
     * @param { PreconfigType } preconfigType - 指定配置预期分辨率。
     * @param { PreconfigRatio } preconfigRatio - 可选画幅比例，默认为4:3。
     * @returns { boolean } 是否支持指定预配置类型。true表示支持，false表示不支持。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    canPreconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): boolean;

    /**
     * 对当前Session进行预配置。
     *
     * @param { PreconfigType } preconfigType - 指定配置预期分辨率。
     * @param { PreconfigRatio } preconfigRatio - 可选画幅比例，默认为4:3。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    preconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): void;

    /**
     * 监听普通拍照会话的错误事件，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，session创建成功之后可监听该接口。session调用相关接口出现错误时会触发该事件，比如调用
     *     [beginConfig]{@link camera.Session.beginConfig}，
     *     [commitConfig]{@link camera.Session.commitConfig(callback: AsyncCallback<void>)}，
     *     [addInput]{@link camera.Session.addInput}等接口发生错误时返回错误信息。
     * @param { ErrorCallback } callback - 回调函数，用于获取错误信息。返回错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * 注销监听普通拍照会话的错误事件，通过注册回调函数获取结果。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，session创建成功之后可监听该接口。
     * @param { ErrorCallback } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * 监听相机聚焦的状态变化，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'focusStateChange' } type - 监听事件，固定为'focusStateChange'，session创建成功可监听。仅当自动对焦模式时，且相机对焦状态发生改变时可触发该事件。
     * @param { AsyncCallback<FocusState> } callback - 回调函数，用于获取当前对焦状态。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * 注销监听相机聚焦的状态变化。
     *
     * @param { 'focusStateChange' } type - 监听事件，固定为'focusStateChange'，session创建成功可监听。
     * @param { AsyncCallback<FocusState> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * 监听相机平滑变焦的状态变化，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'smoothZoomInfoAvailable' } type - 监听事件，固定为'smoothZoomInfoAvailable'，session创建成功可监听。
     * @param { AsyncCallback<SmoothZoomInfo> } callback - 回调函数，用于获取当前平滑变焦状态。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * 注销监听相机平滑变焦的状态变化。
     *
     * @param { 'smoothZoomInfoAvailable' } type - 监听事件，固定为'smoothZoomInfoAvailable'，session创建成功可监听。
     * @param { AsyncCallback<SmoothZoomInfo> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } [callback] - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * 监听相机微距状态变化，通过注册回调函数获取结果。使用callback异步回调。
     *
     * @param { 'macroStatusChanged' } type - 监听事件，固定为'macroStatusChanged'，session创建成功可监听。
     * @param { AsyncCallback<boolean> } callback - 回调函数，用于获取当前微距状态，返回true为开启状态，返回false为禁用状态。
     * @throws { BusinessError } 202 - Not System Application. [since 11 - 19]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 11 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 11 dynamic
     */
    on(type: 'macroStatusChanged', callback: AsyncCallback<boolean>): void;

    /**
     * Subscribes camera macro status event callback.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return macro detection result,
     *     true indicating macro scene is detected and can be enabled, false indicating no macro scene is detected,
     *     and macro should be disabled.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onMacroStatusChanged(callback: AsyncCallback<boolean>): void;

    /**
     * 注销相机微距状态变化的监听。
     *
     * @param { 'macroStatusChanged' } type - 注销监听事件，固定为'macroStatusChanged'，session创建成功可触发此事件。
     * @param { AsyncCallback<boolean> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则参数默认为空，取消所有callback。
     * @throws { BusinessError } 202 - Not System Application. [since 11 - 19]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 11 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 11 dynamic
     */
    off(type: 'macroStatusChanged', callback?: AsyncCallback<boolean>): void;

    /**
     * Unsubscribes camera macro status event callback.
     *
     * @param { AsyncCallback<boolean> } [callback] - Callback used to return macro detection result,
     *     true indicating macro scene is detected and can be enabled, false indicating no macro scene is detected,
     *     and macro should be disabled.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offMacroStatusChanged(callback?: AsyncCallback<boolean>): void;

    /**
     * Subscribe to scene feature detection status change events. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'featureDetection' } type - Event type. The value is fixed at **'featureDetection'**. The event can be
     *     listened for when a photo session is created.
     * @param { SceneFeatureType } featureType - Scene feature type.
     * @param { AsyncCallback<SceneFeatureDetectionResult> } callback - Callback used to return the status of the scene
     *     feature detection.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'featureDetection', featureType: SceneFeatureType, callback: AsyncCallback<SceneFeatureDetectionResult>): void;

    /**
     * Subscribes to feature detection results.
     *
     * @param { SceneFeatureType } featureType - Feature type.
     * @param { AsyncCallback<SceneFeatureDetectionResult> } callback - Callback used to get the detection result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFeatureDetection(featureType: SceneFeatureType, callback: AsyncCallback<SceneFeatureDetectionResult>): void;

    /**
     * Unsubscribe from camera feature detection status change events.
     *
     * @param { 'featureDetection' } type - Event type. The value is fixed at **'featureDetection'**. The event can be
     *     listened for when a session is created.
     * @param { SceneFeatureType } featureType - Scene feature type.
     * @param { AsyncCallback<SceneFeatureDetectionResult> } callback - Callback used to return the result. This
     *     parameter is optional. If this parameter is specified, the subscription to the specified event
     *     **on('featureDetection')** with the specified callback is canceled. (The callback object cannot be an
     *     anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'featureDetection', featureType: SceneFeatureType, callback?: AsyncCallback<SceneFeatureDetectionResult>): void;

    /**
     * Unsubscribes from feature detection result.
     *
     * @param { SceneFeatureType } featureType - Feature type.
     * @param { AsyncCallback<SceneFeatureDetectionResult> } [callback] - Callback used to get the detection result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFeatureDetection(featureType: SceneFeatureType, callback?: AsyncCallback<SceneFeatureDetectionResult>): void;

    /**
     * Subscribes to effect suggestion event callback.
     *
     * @param { 'effectSuggestionChange' } type - Event type.
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'effectSuggestionChange', callback: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Subscribes to effect suggestion event callback.
     *
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onEffectSuggestionChange(callback: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Unsubscribes from effect suggestion event callback.
     *
     * @param { 'effectSuggestionChange' } type - Event type.
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'effectSuggestionChange', callback?: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Unsubscribes from effect suggestion event callback.
     *
     * @param { AsyncCallback<EffectSuggestionType> } [callback] - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offEffectSuggestionChange(callback?: AsyncCallback<EffectSuggestionType>): void;

    /**
     * 监听相机自动切换镜头状态变化，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - 监听事件，固定为'autoDeviceSwitchStatusChange'，session创建成功可监听。
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - 回调函数，用于获取当前自动切换镜头的状态。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     */
    on(type: 'autoDeviceSwitchStatusChange', callback: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * Subscribes to auto device switch status event callback.
     *
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onAutoDeviceSwitchStatusChange(callback: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * 注销监听相机自动切换镜头状态变化。
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - 监听事件，固定为'autoDeviceSwitchStatusChange'，session创建成功可监听。
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有
     *     callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     */
    off(type: 'autoDeviceSwitchStatusChange', callback?: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * Unsubscribes to auto device switch status event callback.
     *
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } [callback] - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offAutoDeviceSwitchStatusChange(callback?: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * Subscribes to LCD flash status change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'lcdFlashStatus' } type - Event type. The value is fixed at **'lcdFlashStatus'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to return the LCD flash status change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'lcdFlashStatus', callback: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Subscribes to lcd flash status.
     *
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onLcdFlashStatus(callback: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from LCD flash status change events.
     *
     * @param { 'lcdFlashStatus' } type - Event type. The value is fixed at **'lcdFlashStatus'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event **on('lcdFlashStatus')**
     *     with the specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'lcdFlashStatus', callback?: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from lcd flash status.
     *
     * @param { AsyncCallback<LcdFlashStatus> } [callback] - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offLcdFlashStatus(callback?: AsyncCallback<LcdFlashStatus>): void;

    /**
     * 监听系统压力状态变化，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'systemPressureLevelChange' } type - 监听事件，固定为'systemPressureLevelChange'，session创建成功可监听。
     * @param { AsyncCallback<SystemPressureLevel> } callback - 回调函数，用于获取当前系统压力状态.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'systemPressureLevelChange', callback: AsyncCallback<SystemPressureLevel>): void;

    /**
     * Subscribes to system pressure level event callback.
     *
     * @param { AsyncCallback<SystemPressureLevel> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onSystemPressureLevelChange(callback: AsyncCallback<SystemPressureLevel>): void;

    /**
     * 注销监听系统压力状态变化。
     *
     * @param { 'systemPressureLevelChange' } type - 注销监听事件，固定为'systemPressureLevelChange'，session创建成功可触发此事件。
     * @param { AsyncCallback<SystemPressureLevel> } [callback] - 回调函数，如果指定参数则取消对应callback (callback对象不可是匿名函数)，否则参数默认为空，
     *     取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'systemPressureLevelChange', callback?: AsyncCallback<SystemPressureLevel>): void;

    /**
     * Unsubscribes to system pressure level event callback.
     *
     * @param { AsyncCallback<SystemPressureLevel> } [callback] - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offSystemPressureLevelChange(callback?: AsyncCallback<SystemPressureLevel>): void;

    /**
     * Gets session functions.
     *
     * @param { CameraOutputCapability } outputCapability - CameraOutputCapability to set.
     * @returns { Array<PhotoFunctions> } List of session functions.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    getSessionFunctions(outputCapability: CameraOutputCapability): Array<PhotoFunctions>;

    /**
     * Gets session conflict functions.
     *
     * @returns { Array<PhotoConflictFunctions> } List of session conflict functions.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    getSessionConflictFunctions(): Array<PhotoConflictFunctions>;

    /**
     * 订阅ISO信息变化事件回调。
     *
     * @param { Callback<IsoInfo> } callback - 回调函数，用于获取ISO信息变化信息。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    onIsoInfoChange(callback: Callback<IsoInfo>): void;

    /**
     * 取消订阅ISO信息变化事件回调。
     *
     * @param { Callback<IsoInfo> } [callback] - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    offIsoInfoChange(callback?: Callback<IsoInfo>): void;

    /**
     * 订阅曝光信息变化事件回调。曝光参数更改后，系统将返回更新后的曝光信息。使用callback异步回调。
     *
     * @param { Callback<ExposureInfo> } callback - 回调函数，用于获取曝光值变化信息。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    onExposureInfoChange(callback: Callback<ExposureInfo>): void;

    /**
     * 取消订阅曝光信息变化事件回调。如果订阅了曝光信息，请在释放相机前取消订阅。使用callback异步回调。
     *
     * @param { Callback<ExposureInfo> } [callback] - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    offExposureInfoChange(callback?: Callback<ExposureInfo>): void;
  }

  /**
   * Implements a video session for system applications, which sets the parameters of the normal video mode and saves
   * all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput}
   * instances required to run the camera. It inherits from [Session]{@link camera.Session}.
   *
   * @extends VideoSession, Beauty, ColorEffect, ColorManagement, Macro [since 11 - 14]
   * @extends VideoSession, Beauty, ColorEffect, ColorManagement, Macro, Aperture, ColorReservation [since 15 - 17]
   * @extends VideoSession, Beauty, ColorEffect, ColorManagement, Macro, Aperture, ColorReservation,
   *     EffectSuggestion [since 18]
   * @extends VideoSession, Beauty, ColorEffect, ColorManagement, Macro, Aperture, ColorReservation,
   *     EffectSuggestion, ImagingMode [since 26.0.0]
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface VideoSessionForSys extends VideoSession, Beauty, ColorEffect, ColorManagement, Macro, Aperture, ColorReservation, EffectSuggestion, ImagingMode {
  }

  /**
   * 枚举，录像质量优先级。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 14 dynamic
   * @since 23 static
   */
  enum QualityPrioritization {
    /**
     * 高录像质量。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 14 dynamic
     * @since 23 static
     */
    HIGH_QUALITY = 0,

    /**
     * 功耗平衡的录像质量。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 14 dynamic
     * @since 23 static
     */
    POWER_BALANCE = 1
  }

  /**
   * VideoSession继承自[Session]{@link camera.Session}、[Flash]{@link camera.Flash}、
   * [AutoExposure]{@link camera.AutoExposure}、[WhiteBalance]{@link camera.WhiteBalance}、[Focus]{@link camera.Focus}、
   * [Zoom]{@link camera.Zoom}、[Stabilization]{@link camera.Stabilization}、
   * [ColorManagement]{@link camera.ColorManagement}、[AutoDeviceSwitch]{@link camera.AutoDeviceSwitch}、
   * [Macro]{@link camera.Macro}、[ControlCenter]{@link camera.ControlCenter}、
   * [ManualExposure](docroot://reference/apis-camera-kit/arkts-apis-camera-ManualExposure.md)、
   * [ManualFocus](docroot://reference/apis-camera-kit/arkts-apis-camera-ManualFocus.md)、
   * [ManualIso](docroot://reference/apis-camera-kit/arkts-apis-camera-ManualIso.md)、
   * [OIS](docroot://reference/apis-camera-kit/arkts-apis-camera-OIS.md)、
   * [Aperture](docroot://reference/apis-camera-kit/arkts-apis-camera-Aperture.md)。
   * 
   * 普通录像模式会话类，提供了对闪光灯、曝光、白平衡、对焦、变焦、视频防抖、色彩空间、微距及控制器、手动曝光、手动对焦、手动ISO、光学防抖及光圈的操作。
   * 
   * 默认的视频录制模式，适用于一般场景。支持720P、1080p等多种分辨率的录制，可选择不同帧率（如30fps、60fps）。
   * 
   * @extends Session, Flash, AutoExposure, Focus, Zoom, Stabilization, ColorManagement [since 11 - 12]
   * @extends AutoDeviceSwitch [since 13 - 18]
   * @extends Session, Flash, AutoExposure, Focus, Zoom, Stabilization, ColorManagement,
   *     AutoDeviceSwitch, Macro [since 19 - 19]
   * @extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom, Stabilization, ColorManagement, ControlCenter,
   *     AutoDeviceSwitch, Macro [since 20 - 24]
   * @extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom, Stabilization, ColorManagement, ControlCenter,
   *     AutoDeviceSwitch, Macro, ManualExposure, ManualFocus, ManualIso, OIS, Aperture [since 26.0.0]
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface VideoSession extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom, Stabilization,
    ColorManagement, ControlCenter, AutoDeviceSwitch, Macro, ManualExposure, ManualFocus, ManualIso, OIS,
    Aperture {
    /**
     * 查询当前Session是否支持指定的预配置类型。
     *
     * @param { PreconfigType } preconfigType - 指定配置预期分辨率。
     * @param { PreconfigRatio } preconfigRatio - 可选画幅比例，默认为16:9。
     * @returns { boolean } true: 支持指定预配置类型。<br/>false: 不支持指定预配置类型。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    canPreconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): boolean;

    /**
     * 对当前Session进行预配置。
     *
     * @param { PreconfigType } preconfigType - 指定配置预期分辨率。
     * @param { PreconfigRatio } preconfigRatio - 可选画幅比例，默认为16:9。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    preconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): void;

    /**
     * 监听普通录像会话的错误事件，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，session创建成功之后可监听该接口。session调用相关接口出现错误时会触发该事件，比如调用
     *     [beginConfig]{@link camera.Session.beginConfig}，
     *     [commitConfig]{@link camera.Session.commitConfig(callback: AsyncCallback<void>)}，
     *     [addInput]{@link camera.Session.addInput}等接口发生错误时返回错误信息。
     * @param { ErrorCallback } callback - 回调函数，用于获取错误信息。返回错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * 注销监听普通录像会话的错误事件，通过注册回调函数获取结果。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，session创建成功之后可监听该接口。
     * @param { ErrorCallback } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * 监听相机聚焦的状态变化，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'focusStateChange' } type - 监听事件，固定为'focusStateChange'，session创建成功可监听。仅当自动对焦模式时，且相机对焦状态发生改变时可触发该事件。
     * @param { AsyncCallback<FocusState> } callback - 回调函数，用于获取当前对焦状态。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * 注销监听相机聚焦的状态变化。
     *
     * @param { 'focusStateChange' } type - 监听事件，固定为'focusStateChange'，session创建成功可监听。
     * @param { AsyncCallback<FocusState> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * 监听相机平滑变焦的状态变化，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'smoothZoomInfoAvailable' } type - 监听事件，固定为'smoothZoomInfoAvailable'，session创建成功可监听。
     * @param { AsyncCallback<SmoothZoomInfo> } callback - 回调函数，用于获取当前平滑变焦状态。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * 注销监听相机平滑变焦的状态变化。
     *
     * @param { 'smoothZoomInfoAvailable' } type - 监听事件，固定为'smoothZoomInfoAvailable'，session创建成功可监听。
     * @param { AsyncCallback<SmoothZoomInfo> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } [callback] - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
      * 监听相机控制器效果激活状态变化，通过注册回调函数获取结果。使用callback异步回调。
      * 
      * > **说明：**
      * >
      * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
      *
      * @param { 'controlCenterEffectStatusChange' } type - 监听事件，固定为'controlCenterEffectStatusChange'，session创建成功可监听。
      * @param { AsyncCallback<ControlCenterStatusInfo> } callback - 回调函数，用于获取当前控制器激活状态。
      * @syscap SystemCapability.Multimedia.Camera.Core
      * @atomicservice
      * @since 20 dynamic
      */
     on(type: 'controlCenterEffectStatusChange', callback: AsyncCallback<ControlCenterStatusInfo>): void;

     /**
      * Subscribes to control center effect status change callback.
      *
      * @param { AsyncCallback<ControlCenterStatusInfo> } callback - Callback used to get control center effect status.
      * @syscap SystemCapability.Multimedia.Camera.Core
      * @since 23 static
      */
     onControlCenterEffectStatusChange(callback: AsyncCallback<ControlCenterStatusInfo>): void;

     /**
      * 注销监听相机控制器激活状态变化。
      *
      * @param { 'controlCenterEffectStatusChange' } type - 注销监听事件，固定为'controlCenterEffectStatusChange'，session创建成功可触发此事
      *     件。
      * @param { AsyncCallback<ControlCenterStatusInfo> } [callback] - 回调函数，如果指定参数则取消对应callback (callback对象不可是匿名函数)，否则参数
      *     默认为空，取消所有callback。
      * @syscap SystemCapability.Multimedia.Camera.Core
      * @atomicservice
      * @since 20 dynamic
      */
     off(type: 'controlCenterEffectStatusChange', callback?: AsyncCallback<ControlCenterStatusInfo>): void;

     /**
      * Unsubscribes to control center effect status change callback.
      *
      * @param { AsyncCallback<ControlCenterStatusInfo> } [callback] - Callback used to get control center effect
      *     status.
      * @syscap SystemCapability.Multimedia.Camera.Core
      * @since 23 static
      */
     offControlCenterEffectStatusChange(callback?: AsyncCallback<ControlCenterStatusInfo>): void;

    /**
     * 监听相机微距状态变化，通过注册回调函数获取结果。使用callback异步回调。
     *
     * @param { 'macroStatusChanged' } type - 监听事件，固定为'macroStatusChanged'，session创建成功可监听。
     * @param { AsyncCallback<boolean> } callback - 回调函数，用于获取当前微距状态，返回true是开启状态，返回false是禁用状态。
     * @throws { BusinessError } 202 - Not System Application. [since 11 - 19]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 11 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 11 dynamic
     */
    on(type: 'macroStatusChanged', callback: AsyncCallback<boolean>): void;

    /**
     * Subscribes camera macro status event callback.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return macro detection result,
     *     true indicating macro scene is detected and can be enabled, false indicating no macro scene is detected,
     *     and macro should be disabled.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onMacroStatusChanged(callback: AsyncCallback<boolean>): void;

    /**
     * 注销相机微距状态变化的监听。
     *
     * @param { 'macroStatusChanged' } type - 注销监听事件，固定为'macroStatusChanged'，session创建成功可触发此事件。
     * @param { AsyncCallback<boolean> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则参数默认为空，取消所有callback, 返
     *     回true表示成功，false表示失败。
     * @throws { BusinessError } 202 - Not System Application. [since 11 - 19]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 11 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 11 dynamic
     */
    off(type: 'macroStatusChanged', callback?: AsyncCallback<boolean>): void;

    /**
     * Unsubscribes camera macro status event callback.
     *
     * @param { AsyncCallback<boolean> } [callback] - Callback used to return macro detection result,
     *     true indicating macro scene is detected and can be enabled, false indicating no macro scene is detected,
     *     and macro should be disabled.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offMacroStatusChanged(callback?: AsyncCallback<boolean>): void;

    /**
     * Subscribes to LCD flash status change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'lcdFlashStatus' } type - Event type. The value is fixed at **'lcdFlashStatus'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to return the LCD flash status change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'lcdFlashStatus', callback: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Subscribes to lcd flash status.
     *
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onLcdFlashStatus(callback: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from LCD flash status change events.
     *
     * @param { 'lcdFlashStatus' } type - Event type. The value is fixed at **'lcdFlashStatus'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event **on('lcdFlashStatus')**
     *     with the specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'lcdFlashStatus', callback?: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from lcd flash status.
     *
     * @param { AsyncCallback<LcdFlashStatus> } [callback] - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offLcdFlashStatus(callback?: AsyncCallback<LcdFlashStatus>): void;

    /**
     * 监听相机自动切换镜头状态变化，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - 监听事件，固定为'autoDeviceSwitchStatusChange'，session创建成功可监听。
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - 回调函数，用于获取当前自动切换镜头的状态。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     */
    on(type: 'autoDeviceSwitchStatusChange', callback: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * Subscribes to auto device switch status event callback.
     *
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onAutoDeviceSwitchStatusChange(callback: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * 注销监听相机自动切换镜头状态变化。
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - 监听事件，固定为'autoDeviceSwitchStatusChange'，session创建成功可监听。
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有
     *     callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     */
    off(type: 'autoDeviceSwitchStatusChange', callback?: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * Unsubscribes to auto device switch status event callback.
     *
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } [callback] - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offAutoDeviceSwitchStatusChange(callback?: AsyncCallback<AutoDeviceSwitchStatus>): void;

    /**
     * Subscribes to focus tracking information events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'focusTrackingInfoAvailable' } type - Event type. The value is fixed at
     *     **'focusTrackingInfoAvailable'**. The event can be listened for when a VideoSessionForSys object is created.
     * @param { Callback<FocusTrackingInfo> } callback - Callback used to return the focus tracking information.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     */
    on(type: 'focusTrackingInfoAvailable', callback: Callback<FocusTrackingInfo>): void;

    /**
     * Subscribes to focus tracking info event callback.
     *
     * @param { Callback<FocusTrackingInfo> } callback - Callback used to get the focus tracking info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFocusTrackingInfoAvailable(callback: Callback<FocusTrackingInfo>): void;

    /**
     * Unsubscribes from focus tracking information events.
     *
     * @param { 'focusTrackingInfoAvailable' } type - Event type. The value is fixed at
     *     **'focusTrackingInfoAvailable'**. The event can be listened for when a VideoSessionForSys object is created.
     * @param { Callback<FocusTrackingInfo> } callback - Callback used to return the result. This parameter is optional.
     *     If this parameter is specified, the subscription to the specified event **on('focusTrackingInfoAvailable')**
     *     with the specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     */
    off(type: 'focusTrackingInfoAvailable', callback?: Callback<FocusTrackingInfo>): void;

    /**
     * Unsubscribes from focus tracking info event callback.
     *
     * @param { Callback<FocusTrackingInfo> } [callback] - Callback used to get the focus tracking info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFocusTrackingInfoAvailable(callback?: Callback<FocusTrackingInfo>): void;

    /**
     * Subscribes to effect suggestion change events.
     *
     * @param { 'effectSuggestionChange' } type - Event type.
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     */
    on(type: 'effectSuggestionChange', callback: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Subscribes to effect suggestion change events.
     *
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onEffectSuggestionChange(callback: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Unsubscribes from effect suggestion change events.
     *
     * @param { 'effectSuggestionChange' } type - Event type.
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     */
    off(type: 'effectSuggestionChange', callback?: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Unsubscribes from effect suggestion change events.
     *
     * @param { AsyncCallback<EffectSuggestionType> } [callback] - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offEffectSuggestionChange(callback?: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Subscribes to camera light status changes. This API uses an asynchronous callback to return the result.
     *
     * @param { 'lightStatusChange' } type - Event type. The value is fixed at **'lightStatusChange'**.
     *     <br>The event can
     *     be listened for when a VideoSessionForSys object is created.
     * @param { AsyncCallback<LightStatus> } callback - Callback used to return the light status information.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     */
    on(type: 'lightStatusChange', callback: AsyncCallback<LightStatus>): void;

    /**
     * Subscribes camera light status event callback.
     *
     * @param { AsyncCallback<LightStatus> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onLightStatusChange(callback: AsyncCallback<LightStatus>): void;

    /**
     * Unsubscribes from camera light status changes.
     *
     * @param { 'lightStatusChange' } type - Event type. The value is fixed at **'lightStatusChange'**.
     *     <br>The event can
     *     be listened for when a VideoSessionForSys object is created.
     * @param { AsyncCallback<LightStatus> } callback - Callback used to return the result. This parameter is optional.
     *     If this parameter is specified, the subscription to the specified event **on('lightStatusChange')** with the
     *     specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     */
    off(type: 'lightStatusChange', callback?: AsyncCallback<LightStatus>): void;

    /**
     * Unsubscribes camera light status event callback.
     *
     * @param { AsyncCallback<LightStatus> } [callback] - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offLightStatusChange(callback?: AsyncCallback<LightStatus>): void;

    /**
     * 监听系统压力状态变化，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'systemPressureLevelChange' } type - 监听事件，固定为'systemPressureLevelChange'，session创建成功可监听。
     * @param { AsyncCallback<SystemPressureLevel> } callback - 回调函数，用于获取当前系统压力状态。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'systemPressureLevelChange', callback: AsyncCallback<SystemPressureLevel>): void;

    /**
     * Subscribes to system pressure level event callback.
     *
     * @param { AsyncCallback<SystemPressureLevel> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onSystemPressureLevelChange(callback: AsyncCallback<SystemPressureLevel>): void;

    /**
     * 注销监听系统压力状态变化。
     *
     * @param { 'systemPressureLevelChange' } type - 注销监听事件，固定为'systemPressureLevelChange'，session创建成功可触发此事件。
     * @param { AsyncCallback<SystemPressureLevel> } callback - 回调函数，如果指定参数则取消对应callback (callback对象不可是匿名函数)，否则参数默认为空，取消
     *     所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'systemPressureLevelChange', callback?: AsyncCallback<SystemPressureLevel>): void;

    /**
     * Unsubscribes to system pressure level event callback.
     *
     * @param { AsyncCallback<SystemPressureLevel> } [callback] - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offSystemPressureLevelChange(callback?: AsyncCallback<SystemPressureLevel>): void;

    /**
     * Gets session functions.
     *
     * @param { CameraOutputCapability } outputCapability - CameraOutputCapability to set.
     * @returns { Array<VideoFunctions> } List of session functions.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    getSessionFunctions(outputCapability: CameraOutputCapability): Array<VideoFunctions>;

    /**
     * Gets session conflict functions.
     *
     * @returns { Array<VideoConflictFunctions> } List of session conflict functions.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    getSessionConflictFunctions(): Array<VideoConflictFunctions>;

    /**
     * 设置录像质量优先级。
     * 
     * > **说明：**
     * >
     * > - 默认为高录像质量，设置为功耗平衡将降低录像质量以减少功耗。实际功耗收益因平台而异。
     * >
     * > - 建议该接口在[commitConfig]{@link camera.Session.commitConfig(callback: AsyncCallback<void>)}和
     * > [start]{@link camera.Session.start()}之间调用。
     *
     * @param { QualityPrioritization } quality - 需要设置的视频质量优先级（默认为高录像质量）。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 7400103 - Session not config. The session has not been committed or configured.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 14 dynamic
     * @since 23 static
     */
    setQualityPrioritization(quality: QualityPrioritization): void;

    /**
     * 监听相机感光度（ISO）状态变化，通过注册回调函数获取最新ISO值。
     *
     * @param { Callback<IsoInfo> } callback - 回调函数，用于获取相机当前的ISO值。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    onIsoInfoChange(callback: Callback<IsoInfo>): void;

    /**
     * 取消监听相机感光度（ISO）状态的变化。
     *
     * @param { Callback<IsoInfo> } [callback] - 回调函数，可选。
     *     <br>如果指定callback参数则注销该callback监听，callback不可是匿名函数。
     *     <br>如果未指定callback，则注销所有已存在的callback监听。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    offIsoInfoChange(callback?: Callback<IsoInfo>): void;

    /**
     * 订阅曝光信息变化事件回调。曝光参数更改后，系统将返回更新后的曝光信息。使用callback异步回调。
     *
     * @param { Callback<ExposureInfo> } callback - 回调函数，用于获取曝光值变化信息。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    onExposureInfoChange(callback: Callback<ExposureInfo>): void;

    /**
     * 取消订阅曝光信息变化事件回调。如果订阅了曝光信息，请在释放相机前取消订阅。使用callback异步回调。
     *
     * @param { Callback<ExposureInfo> } [callback] - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    offExposureInfoChange(callback?: Callback<ExposureInfo>): void;

    /**
     * Subscribes aperture info event callback.
     *
     * @param { Callback<ApertureInfo> } callback - Callback used to get the aperture info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    onApertureInfoChange(callback: Callback<ApertureInfo>): void;

    /**
     * Unsubscribes from aperture info event callback.
     *
     * @param { Callback<ApertureInfo> } [callback] - Callback used to get the aperture info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    offApertureInfoChange(callback?: Callback<ApertureInfo>): void;
  }

  /**
   * RGB white balance gain values.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface WhiteBalanceGains {  
    /**
     * The red gain component of the white balance value.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    redGain: double;

    /**
     * The green gain component of the white balance value.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    greenGain: double;

    /**
     * The blue gain component of the white balance value.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    blueGain: double;
  }

  /**
   * 枚举，系统压力等级。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum SystemPressureLevel {
    /**
     * 系统压力正常。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_PRESSURE_NORMAL = 0,

    /**
     * 系统压力升高，但是系统不会主动管控。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_PRESSURE_MILD = 1,

    /**
     * 系统压力可能对图像总质量、性能产生影响。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_PRESSURE_SEVERE = 2,

    /**
     * 系统压力对图像质量、性能产生显著影响。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_PRESSURE_CRITICAL = 3,

    /**
     * 系统压力过高，停止工作。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_PRESSURE_SHUTDOWN = 4
  }

  /**
   * Enumerates the camera light statuses, which are obtained by calling VideoSessionForSys.
   * [on('lightStatusChange')]{@link camera.VideoSession.on(type: 'lightStatusChange', callback: AsyncCallback<LightStatus>)}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  enum LightStatus {
    /**
     * Normal lighting conditions.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    NORMAL = 0,

    /**
     * Insufficient lighting (too dark).
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    INSUFFICIENT = 1
  }

  /**
   * Enumerates the portrait effects.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  enum PortraitEffect {
    /**
     * Disabled.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    OFF = 0,

    /**
     * Circles.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    CIRCLES = 1,

    /**
     * Heart-shaped.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    HEART = 2,

    /**
     * Rotated.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ROTATED = 3,

    /**
     * Studio light.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    STUDIO = 4,

    /**
     * Theater light.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    THEATER = 5
  }

  /**
   * Queries portrait parameters.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface PortraitQuery {
    /**
     * Obtains the supported portrait effects.
     *
     * @returns { Array<PortraitEffect> } Array of portrait effects supported.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @throws { BusinessError } 202 - Not System Application. [since 11]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getSupportedPortraitEffects(): Array<PortraitEffect>;
  }

  /**
   * Portrait: inherits from [PortraitQuery]{@link camera.PortraitQuery}.
   * Provides the APIs for portrait photo settings.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface Portrait extends PortraitQuery {
    /**
     * Obtains the portrait effect in use.
     *
     * @returns { PortraitEffect } Portrait effect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 202 - Not System Application. [since 11]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getPortraitEffect(): PortraitEffect;

    /**
     * Sets a portrait effect. Before the setting, use
     * [getSupportedPortraitEffects]{@link camera.PortraitQuery.getSupportedPortraitEffects} to obtain the supported
     * portrait effects and check whether the target portrait effect is supported.
     *
     * @param { PortraitEffect } effect - Effect Portrait effect to set.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 202 - Not System Application. [since 11]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    setPortraitEffect(effect: PortraitEffect): void;
  }

  /**
   * 变焦范围。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 11 - 23]
   * @publicapi [since 24]
   * @atomicservice [since 24]
   * @since 11 dynamic
   * @since 23 static
   */
  interface ZoomRange {
    /**
     * 最小变焦值。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 11 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly min: double;

    /**
     * 最大变焦值。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 11 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly max: double;
  }

  /**
   * 物理光圈对象。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 11 - 23]
   * @publicapi [since 24]
   * @atomicservice [since 24]
   * @since 11 dynamic
   * @since 23 static
   */
  interface PhysicalAperture {
    /**
     * 特定物理光圈的变焦范围。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 11 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 11 dynamic
     * @since 23 static
     */
    zoomRange: ZoomRange;

    /**
     * 支持的物理光圈值。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 11 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 11 dynamic
     * @since 23 static
     */
    apertures: Array<double>;
  }

  /**
   * Provides the aperture query capability.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 12 - 23]
   * @publicapi [since 24]
   * @atomicservice [since 24]
   * @since 12 dynamic
   * @since 23 static
   */
  interface ApertureQuery {
    /**
     * Obtains the supported virtual apertures.
     *
     * @returns { Array<double> } Array of virtual apertures supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getSupportedVirtualApertures(): Array<double>;

    /**
     * Gets the supported physical apertures.
     * Move to ApertureQuery interface from Aperture since 12.
     *
     * @returns { Array<PhysicalAperture> } The array of supported physical apertures.
     * @throws { BusinessError } 202 - Not System Application. [since 11 - 23]
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws {BusinessError} 7400102 - Operation not allowed, the inputDevice or the session is abnormal. [since 24]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 11 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 11 dynamic
     * @since 23 static
     */
    getSupportedPhysicalApertures(): Array<PhysicalAperture>;
  }

  /**
   * Provides the APIs for aperture settings. It inherits from [ApertureQuery]{@link camera.ApertureQuery}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 11 - 23]
   * @publicapi [since 24]
   * @atomicservice [since 24]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Aperture extends ApertureQuery {
    /**
     * Obtains the virtual aperture in use.
     *
     * @returns { double } Virtual aperture.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getVirtualAperture(): double;

    /**
     * Sets a virtual aperture. Before the setting, call
     * [getSupportedVirtualApertures]{@link camera.ApertureQuery.getSupportedVirtualApertures} to obtain the supported
     * virtual apertures.
     *
     * @param { double } aperture - virtual aperture value
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setVirtualAperture(aperture: double): void;

    /**
     * Gets current physical aperture value.
     *
     * @returns { double } The current physical aperture value.
     * @throws { BusinessError } 202 - Not System Application. [since 11 - 23]
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws {BusinessError} 7400102 - Operation not allowed, the inputDevice or the session is abnormal. [since 24]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 11 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 11 dynamic
     * @since 23 static
     */
    getPhysicalAperture(): double;

    /**
     * Sets physical aperture value.
     *
     * @param { double } aperture - physical aperture value. The supported physical aperture range can be obtained by
     *     calling [getSupportedPhysicalApertures]{@link camera.ApertureQuery.getSupportedPhysicalApertures}
     * @throws { BusinessError } 202 - Not System Application. [since 11 - 23]
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws {BusinessError} 7400102 - Operation not allowed, the inputDevice or the session is abnormal. [since 24]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 11 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 11 dynamic
     * @since 23 static
     */
    setPhysicalAperture(aperture: double): void;
  }

  /**
   * PortraitPhotoSession extends Session, Flash, AutoExposure, Focus, Zoom, Beauty, ColorEffect, ColorManagement,
   * Portrait, Aperture
   * Implements a portrait photo session, which sets the parameters of the portrait photo mode and saves all
   * [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput}
   * instances required to run the camera. It inherits from [Session]{@link camera.Session}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface PortraitPhotoSession extends Session, Flash, AutoExposure, Focus, Zoom, Beauty, ColorEffect, ColorManagement, Portrait, Aperture {
    /**
     * Subscribes to PortraitSession error events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as
     *     [beginConfig]{@link camera.Session.beginConfig},
     *     [commitConfig]{@link camera.Session.commitConfig()}, and
     *     [addInput]{@link camera.Session.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from PortraitSession error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. This parameter is optional. If this
     *     parameter is specified, the subscription to the specified event **on('error')** with the specified callback
     *     is canceled. (The callback object cannot be an anonymous function.)
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     auto focus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. This parameter is optional.
     *     If this parameter is specified, the subscription to the specified event **on('focusStateChange')** with the
     *     specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes to smooth zoom state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the smooth zoom state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from smooth zoom state change events.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event
     *     **on('smoothZoomInfoAvailable')** with the specified callback is canceled. (The callback object cannot be an
     *     anonymous function.)
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } [callback] - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes to LCD flash status change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'lcdFlashStatus' } type - Event type. The value is fixed at **'lcdFlashStatus'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to return the LCD flash status change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'lcdFlashStatus', callback: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Subscribes to lcd flash status.
     *
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onLcdFlashStatus(callback: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from LCD flash status change events.
     *
     * @param { 'lcdFlashStatus' } type - Event type. The value is fixed at **'lcdFlashStatus'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event **on('lcdFlashStatus')**
     *     with the specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'lcdFlashStatus', callback?: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from lcd flash status.
     *
     * @param { AsyncCallback<LcdFlashStatus> } [callback] - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offLcdFlashStatus(callback?: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Gets session functions.
     *
     * @param { CameraOutputCapability } outputCapability - CameraOutputCapability to set.
     * @returns { Array<PortraitPhotoFunctions> } List of session functions.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    getSessionFunctions(outputCapability: CameraOutputCapability): Array<PortraitPhotoFunctions>;

    /**
     * Gets session conflict functions.
     *
     * @returns { Array<PortraitPhotoConflictFunctions> } List of session conflict functions.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    getSessionConflictFunctions(): Array<PortraitPhotoConflictFunctions>;
  }

  /**
   * Aperture video session object.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface ApertureVideoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, Aperture {
    /**
     * Subscribes to HighResolutionPhotoSession error events. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as
     *     [beginConfig]{@link camera.Session.beginConfig},
     *     [commitConfig]{@link camera.Session.commitConfig()}, and
     *     [addInput]{@link camera.Session.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from HighResolutionPhotoSession error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. This parameter is optional. If this
     *     parameter is specified, the subscription to the specified event **on('error')** with the specified callback
     *     is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     auto focus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. This parameter is optional.
     *     If this parameter is specified, the subscription to the specified event **on('focusStateChange')** with the
     *     specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes to smooth zoom state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the smooth zoom state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from smooth zoom state change events.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event
     *     **on('smoothZoomInfoAvailable')** with the specified callback is canceled. (The callback object cannot be an
     *     anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } [callback] - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;
  }

  /**
   * Provides APIs to obtain the manual exposure range supported.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 12 - 23]
   * @publicapi [since 24]
   * @atomicservice [since 24]
   * @since 12 dynamic
   * @since 23 static
   */
  interface ManualExposureQuery {
    /**
     * Obtains the supported manual exposure durations.
     *
     * @returns { Array<int> } Array of manual exposure durations supported, in ms.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getSupportedExposureRange(): Array<int>;

    /**
     * Gets the supported manual exposure duration range, units: microseconds.
     *
     * @returns { Array<int> } The array of manual exposure range.
     * @throws { BusinessError } 7400102 - Operation not allowed, session or inputdevice maybe abnormal.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 24 dynamic&static
     */
    getSupportedExposureDurationRange(): Array<int>;

    /**
     * Get exposure bias step.
     *
     * @returns { double } exposure bias step.
     * @throws { BusinessError } 7400102 - Operation not allowed, session or inputdevice maybe abnormal.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    getExposureBiasStep(): double;
  }

  /**
   * ManualExposure extends [ManualExposureQuery]{@link camera.ManualExposureQuery}
   * Provides APIs to obtain and set the exposure duration.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 11 - 23]
   * @publicapi [since 24]
   * @atomicservice [since 24]
   * @since 11 dynamic
   * @since 23 static
   */
  interface ManualExposure extends ManualExposureQuery {
    /**
     * Obtains the manual exposure duration in use.
     *
     * @returns { int } The current exposure value, in units of ms
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getExposure(): int;

    /**
     * Gets current exposure value.
     *
     * @returns { int } The current exposure value, in units of microsecond
     * @throws { BusinessError } 7400102 - Operation not allowed, session or inputdevice maybe abnormal.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 24 dynamic&static
     */
    getExposureDuration(): int;

    /**
     * Sets the manual exposure duration. Before using this API, call
     * [getSupportedExposureRange]{@link camera.ManualExposureQuery.getSupportedExposureRange} to obtain the supported
     * manual exposure durations, in ms.
     *
     * @param { int } exposure - Manual exposure duration, which must be one of the supported durations obtained by
     *     running [getSupportedExposureRange]{@link camera.ManualExposureQuery.getSupportedExposureRange}.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400102 - Operation not allowed. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setExposure(exposure: int): void;

    /**
     * Sets Exposure duration value, units: microseconds.This control is only effective if
     * ExposureMode is set to EXPOSURE_MODE_MANUAL.
     *
     * @param { int } exposureDuration - Exposure duration value
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 24 dynamic&static
     */
    setExposureDuration(exposureDuration: int): void;
  }

  /**
   * NightPhotoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ColorManagement, ManualExposure
   * Implements a night photo session, which sets the parameters of the night photo mode and saves all
   * [CameraInput]{@link camera.CameraInput}, [CameraOutput]{@link camera.CameraOutput}, and
   * [PhotoOutput]{@link camera.PhotoOutput} instances required to run the camera. It inherits from
   * [Session]{@link camera.Session}.
   * For night photo capture scenarios, you must listen for the
   * [onCaptureEnd]{@link camera.PhotoOutput.on(type: 'captureEnd', callback: AsyncCallback<CaptureEndInfo>)}
   * event to mark the end of the photo capture session.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface NightPhotoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, Beauty, ColorManagement, ManualExposure {
    /**
     * Subscribes to PortraitSession error events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as
     *     [beginConfig]{@link camera.Session.beginConfig},
     *     [commitConfig]{@link camera.Session.commitConfig()}, and
     *     [addInput]{@link camera.Session.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from PortraitSession error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. This parameter is optional. If this
     *     parameter is specified, the subscription to the specified event **on('error')** with the specified callback
     *     is canceled. (The callback object cannot be an anonymous function.)
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     auto focus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. This parameter is optional.
     *     If this parameter is specified, the subscription to the specified event **on('focusStateChange')** with the
     *     specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes to smooth zoom state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the smooth zoom state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from smooth zoom state change events.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event
     *     **on('smoothZoomInfoAvailable')** with the specified callback is canceled. (The callback object cannot be an
     *     anonymous function.)
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } [callback] - Callback used to get the zoom info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes to LCD flash status change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'lcdFlashStatus' } type - Event type. The value is fixed at **'lcdFlashStatus'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to return the LCD flash status change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'lcdFlashStatus', callback: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Subscribes to lcd flash status.
     *
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onLcdFlashStatus(callback: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from LCD flash status change events.
     *
     * @param { 'lcdFlashStatus' } type - Event type. The value is fixed at **'lcdFlashStatus'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<LcdFlashStatus> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event **on('lcdFlashStatus')**
     *     with the specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'lcdFlashStatus', callback?: AsyncCallback<LcdFlashStatus>): void;

    /**
     * Unsubscribes from lcd flash status.
     *
     * @param { AsyncCallback<LcdFlashStatus> } [callback] - Callback used to get the lcd flash status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offLcdFlashStatus(callback?: AsyncCallback<LcdFlashStatus>): void;
  }

  /**
   * 感光度（ISO）参数信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 12 - 21]
   * @publicapi [since 22]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface IsoInfo {
    /**
     * ISO value.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 21]
     * @publicapi [since 22]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    readonly iso?: int;
  }

  /**
   * 曝光信息对象。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 12 - 23]
   * @publicapi [since 24]
   * @atomicservice [since 24]
   * @since 12 dynamic
   * @since 23 static
   */
  interface ExposureInfo {
    /**
     * 曝光时间值。单位：微秒。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 12 dynamic
     * @since 23 static
     */
    readonly exposureTime?: int;
  }

  /**
   * Describes the aperture information.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface ApertureInfo {
    /**
     * Aperture.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    readonly aperture?: double;
  }

  /**
   * Describes the illumination information.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface LuminationInfo {
    /**
     * Illumination. The value range is [0, 1].
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    readonly lumination?: double;
  }

  /**
   * ProfessionalPhotoSession extends Session, AutoExposure, ManualExposure, Focus, ManualFocus, WhiteBalance, ManualIso
   * , Flash, Zoom, ColorEffect, Aperture
   * Implements a professional photo session, which sets the parameters of the professional photo mode and saves all
   * [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput}
   * instances required to run the camera. It inherits from [Session]{@link camera.Session}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface ProfessionalPhotoSession extends Session, AutoExposure, ManualExposure, Focus,
    ManualFocus, WhiteBalance, ManualIso, Flash, Zoom, ColorEffect, Aperture {
    /**
     * Subscribes to HighResolutionPhotoSession error events. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as
     *     [beginConfig]{@link camera.Session.beginConfig},
     *     [commitConfig]{@link camera.Session.commitConfig()}, and
     *     [addInput]{@link camera.Session.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from HighResolutionPhotoSession error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. This parameter is optional. If this
     *     parameter is specified, the subscription to the specified event **on('error')** with the specified callback
     *     is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     auto focus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. This parameter is optional.
     *     If this parameter is specified, the subscription to the specified event **on('focusStateChange')** with the
     *     specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes to smooth zoom state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the smooth zoom state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from smooth zoom state change events.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event
     *     **on('smoothZoomInfoAvailable')** with the specified callback is canceled. (The callback object cannot be an
     *     anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } [callback] - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes to automatic ISO change events to obtain real-time ISO information. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'isoInfoChange' } type - Event type. The value is fixed at **'isoInfoChange'**.
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to return the ISO information.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'isoInfoChange', callback: AsyncCallback<IsoInfo>): void;

    /**
     * Subscribes ISO info event callback.
     *
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to get the ISO info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onIsoInfoChange(callback: AsyncCallback<IsoInfo>): void;

    /**
     * Unsubscribes from automatic ISO change events.
     *
     * @param { 'isoInfoChange' } type - Event type. The value is fixed at **'isoInfoChange'**.
     * @param { AsyncCallback<IsoInfo> } callback - Callback, which is optional and is used to match **callback** in
     *     **on('isoInfoChange')**.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'isoInfoChange', callback?: AsyncCallback<IsoInfo>): void;

    /**
     * Unsubscribes from ISO info event callback.
     *
     * @param { AsyncCallback<IsoInfo> } [callback] - Callback used to get the ISO info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offIsoInfoChange(callback?: AsyncCallback<IsoInfo>): void;

    /**
     * Subscribes to exposure information change events to obtain the exposure information. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { 'exposureInfoChange' } type - Event type. The value is fixed at **'exposureInfoChange'**.
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to return the exposure information.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'exposureInfoChange', callback: AsyncCallback<ExposureInfo>): void;

    /**
     * Subscribes exposure info event callback.
     *
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to get the exposure info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onExposureInfoChange(callback: AsyncCallback<ExposureInfo>): void;

    /**
     * Unsubscribes from exposure information change events.
     *
     * @param { 'exposureInfoChange' } type - Event type. The value is fixed at **'exposureInfoChange'**.
     * @param { AsyncCallback<ExposureInfo> } callback - Callback, which is optional and is used to match **callback**
     *     in **on('exposureInfoChange')**.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'exposureInfoChange', callback?: AsyncCallback<ExposureInfo>): void;

    /**
     * Unsubscribes from exposure info event callback.
     *
     * @param { AsyncCallback<ExposureInfo> } [callback] - Callback used to get the exposure info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offExposureInfoChange(callback?: AsyncCallback<ExposureInfo>): void;

    /**
     * Subscribes to aperture change events to obtain the real-time aperture information. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'apertureInfoChange' } type - Event type. The value is fixed at **'apertureInfoChange'**.
     * @param { AsyncCallback<ApertureInfo> } callback - Callback used to return the aperture information.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'apertureInfoChange', callback: AsyncCallback<ApertureInfo>): void;

    /**
     * Subscribes aperture info event callback.
     *
     * @param { AsyncCallback<ApertureInfo> } callback - Callback used to get the aperture info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onApertureInfoChange(callback: AsyncCallback<ApertureInfo>): void;

    /**
     * Unsubscribes from aperture change events.
     *
     * @param { 'apertureInfoChange' } type - Event type. The value is fixed at **'apertureInfoChange'**.
     * @param { AsyncCallback<ApertureInfo> } callback - Callback, which is optional and is used to match **callback**
     *     in **on('apertureInfoChange')**.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'apertureInfoChange', callback?: AsyncCallback<ApertureInfo>): void;

    /**
     * Unsubscribes from aperture info event callback.
     *
     * @param { AsyncCallback<ApertureInfo> } [callback] - Callback used to get the aperture info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offApertureInfoChange(callback?: AsyncCallback<ApertureInfo>): void;

    /**
     * Subscribes to illumination change events to obtain real-time illumination information. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { 'luminationInfoChange' } type - Event type. The value is fixed at **'luminationInfoChange'**.
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to return the illumination information.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'luminationInfoChange', callback: AsyncCallback<LuminationInfo>): void;

    /**
     * Subscribes lumination info event callback.
     *
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to get the lumination info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onLuminationInfoChange(callback: AsyncCallback<LuminationInfo>): void;

    /**
     * Unsubscribes from illumination change events.
     *
     * @param { 'luminationInfoChange' } type - Event type. The value is fixed at **'luminationInfoChange'**.
     * @param { AsyncCallback<LuminationInfo> } callback - Callback, which is optional and is used to match **callback**
     *     in **on('luminationInfoChange')**.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'luminationInfoChange', callback?: AsyncCallback<LuminationInfo>): void;

    /**
     * Unsubscribes from lumination info event callback.
     *
     * @param { AsyncCallback<LuminationInfo> } [callback] - Callback used to get the lumination info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offLuminationInfoChange(callback?: AsyncCallback<LuminationInfo>): void;
  }

  /**
   * ProfessionalVideoSession extends Session, AutoExposure, ManualExposure, Focus, ManualFocus, WhiteBalance, ManualIso
   * , Flash, Zoom, ColorEffect, Aperture
   * Implements a professional video session, which sets the parameters of the professional video mode and saves all
   * [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput}
   * instances required to run the camera. It inherits from [Session]{@link camera.Session}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface ProfessionalVideoSession extends Session, AutoExposure, ManualExposure, Focus,
    ManualFocus, WhiteBalance, ManualIso, Flash, Zoom, ColorEffect, Aperture {
    /**
     * Subscribes to HighResolutionPhotoSession error events. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as
     *     [beginConfig]{@link camera.Session.beginConfig},
     *     [commitConfig]{@link camera.Session.commitConfig()}, and
     *     [addInput]{@link camera.Session.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from HighResolutionPhotoSession error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. This parameter is optional. If this
     *     parameter is specified, the subscription to the specified event **on('error')** with the specified callback
     *     is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     auto focus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. This parameter is optional.
     *     If this parameter is specified, the subscription to the specified event **on('focusStateChange')** with the
     *     specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes to smooth zoom state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the smooth zoom state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from smooth zoom state change events.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event
     *     **on('smoothZoomInfoAvailable')** with the specified callback is canceled. (The callback object cannot be an
     *     anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } [callback] - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes to automatic ISO change events to obtain real-time ISO information. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'isoInfoChange' } type - Event type. The value is fixed at **'isoInfoChange'**.
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to return the ISO information.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'isoInfoChange', callback: AsyncCallback<IsoInfo>): void;

    /**
     * Subscribes ISO info event callback.
     *
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to get the ISO info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onIsoInfoChange(callback: AsyncCallback<IsoInfo>): void;

    /**
     * Unsubscribes from automatic ISO change events.
     *
     * @param { 'isoInfoChange' } type - Event type. The value is fixed at **'isoInfoChange'**.
     * @param { AsyncCallback<IsoInfo> } callback - Callback, which is optional and is used to match **callback** in
     *     **on('isoInfoChange')**.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'isoInfoChange', callback?: AsyncCallback<IsoInfo>): void;

    /**
     * Unsubscribes from ISO info event callback.
     *
     * @param { AsyncCallback<IsoInfo> } [callback] - Callback used to get the ISO info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offIsoInfoChange(callback?: AsyncCallback<IsoInfo>): void;

    /**
     * Subscribes to exposure information change events to obtain the exposure information. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { 'exposureInfoChange' } type - Event type. The value is fixed at **'exposureInfoChange'**.
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to return the exposure information.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'exposureInfoChange', callback: AsyncCallback<ExposureInfo>): void;

    /**
     * Subscribes exposure info event callback.
     *
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to get the exposure info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onExposureInfoChange(callback: AsyncCallback<ExposureInfo>): void;

    /**
     * Unsubscribes from exposure information change events.
     *
     * @param { 'exposureInfoChange' } type - Event type. The value is fixed at **'exposureInfoChange'**.
     * @param { AsyncCallback<ExposureInfo> } callback - Callback, which is optional and is used to match **callback**
     *     in **on('exposureInfoChange')**.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'exposureInfoChange', callback?: AsyncCallback<ExposureInfo>): void;

    /**
     * Unsubscribes from exposure info event callback.
     *
     * @param { AsyncCallback<ExposureInfo> } [callback] - Callback used to get the exposure info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offExposureInfoChange(callback?: AsyncCallback<ExposureInfo>): void;

    /**
     * Subscribes to aperture change events to obtain the real-time aperture information. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'apertureInfoChange' } type - Event type. The value is fixed at **'apertureInfoChange'**.
     * @param { AsyncCallback<ApertureInfo> } callback - Callback used to return the aperture information.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'apertureInfoChange', callback: AsyncCallback<ApertureInfo>): void;

    /**
     * Subscribes aperture info event callback.
     *
     * @param { AsyncCallback<ApertureInfo> } callback - Callback used to get the aperture info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onApertureInfoChange(callback: AsyncCallback<ApertureInfo>): void;

    /**
     * Unsubscribes from aperture change events.
     *
     * @param { 'apertureInfoChange' } type - Event type. The value is fixed at **'apertureInfoChange'**.
     * @param { AsyncCallback<ApertureInfo> } callback - Callback, which is optional and is used to match **callback**
     *     in **on('apertureInfoChange')**.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'apertureInfoChange', callback?: AsyncCallback<ApertureInfo>): void;

    /**
     * Unsubscribes from aperture info event callback.
     *
     * @param { AsyncCallback<ApertureInfo> } [callback] - Callback used to get the aperture info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offApertureInfoChange(callback?: AsyncCallback<ApertureInfo>): void;

    /**
     * Subscribes to illumination change events to obtain real-time illumination information. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { 'luminationInfoChange' } type - Event type. The value is fixed at **'luminationInfoChange'**.
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to return the illumination information.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'luminationInfoChange', callback: AsyncCallback<LuminationInfo>): void;

    /**
     * Subscribes lumination info event callback.
     *
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to get the lumination info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onLuminationInfoChange(callback: AsyncCallback<LuminationInfo>): void;

    /**
     * Unsubscribes from illumination change events.
     *
     * @param { 'luminationInfoChange' } type - Event type. The value is fixed at **'luminationInfoChange'**.
     * @param { AsyncCallback<LuminationInfo> } callback - Callback, which is optional and is used to match **callback**
     *     in **on('luminationInfoChange')**.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'luminationInfoChange', callback?: AsyncCallback<LuminationInfo>): void;

    /**
     * Unsubscribes from lumination info event callback.
     *
     * @param { AsyncCallback<LuminationInfo> } [callback] - Callback used to get the lumination info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offLuminationInfoChange(callback?: AsyncCallback<LuminationInfo>): void;
  }

  /**
   * Enumerates the slow-motion states.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum SlowMotionStatus {
    /**
     * Disabled.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DISABLED = 0,

    /**
     * Ready.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    READY = 1,

    /**
     * Video start.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    VIDEO_START = 2,

    /**
     * Video complete.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    VIDEO_DONE = 3,

    /**
     * Finished.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    FINISHED = 4
  }

  /**
   * SlowMotionVideoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect
   * Implements a slow-motion video session, which sets the parameters of the slow-motion video mode and saves all
   * [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput}
   * instances required to run the camera. It inherits from [Session]{@link camera.Session}.
   * 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface SlowMotionVideoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect {
    /**
     * Subscribes to HighResolutionPhotoSession error events. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as
     *     [beginConfig]{@link camera.Session.beginConfig},
     *     [commitConfig]{@link camera.Session.commitConfig()}, and
     *     [addInput]{@link camera.Session.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from HighResolutionPhotoSession error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. This parameter is optional. If this
     *     parameter is specified, the subscription to the specified event **on('error')** with the specified callback
     *     is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     auto focus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. This parameter is optional.
     *     If this parameter is specified, the subscription to the specified event **on('focusStateChange')** with the
     *     specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes to smooth zoom state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the smooth zoom state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from smooth zoom state change events.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event
     *     **on('smoothZoomInfoAvailable')** with the specified callback is canceled. (The callback object cannot be an
     *     anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } [callback] - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Checks whether the device supports slow-motion detection.
     * 
     * @returns { boolean } Check result for the support of slow-motion detection. **true** if supported, **false**
     *     otherwise. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config. [since 12 - 18]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isSlowMotionDetectionSupported(): boolean;

    /**
     * Sets an area for slow-motion detection.
     * 
     * @param { Rect } area - Area.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect. [since 12 - 18]
     * @throws { BusinessError } 7400103 - Session not config. [since 12 - 18]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setSlowMotionDetectionArea(area: Rect): void;

    /**
     * Subscribes to slow-motion status change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'slowMotionStatus' } type - Event type. The value is fixed at **'slowMotionStatus'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<SlowMotionStatus> } callback - Callback used to return the slow-motion status change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'slowMotionStatus', callback: AsyncCallback<SlowMotionStatus>): void;

    /**
     * Subscribes slow motion status callback.
     *
     * @param { AsyncCallback<SlowMotionStatus> } callback - Callback used to get the slow motion status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onSlowMotionStatus(callback: AsyncCallback<SlowMotionStatus>): void;

    /**
     * Unsubscribes from slow-motion status change events.
     *
     * @param { 'slowMotionStatus' } type - Event type. The value is fixed at **'slowMotionStatus'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<SlowMotionStatus> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event **on('slowMotionStatus')**
     *     with the specified callback is canceled. (The callback object cannot be an anonymous function.) If the
     *     operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'slowMotionStatus', callback?: AsyncCallback<SlowMotionStatus>): void;

    /**
     * Unsubscribes slow motion status callback.
     *
     * @param { AsyncCallback<SlowMotionStatus> } [callback] - Callback used to get the slow motion status.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offSlowMotionStatus(callback?: AsyncCallback<SlowMotionStatus>): void;
  }

  /**
   * HighResolutionPhotoSession extends Session, AutoExposure, Focus
   * Implements a high-resolution photo session, which sets the parameters of the high-resolution photo mode and saves
   * all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput}
   * instances required to run the camera. It inherits from [Session]{@link camera.Session}.
   * 
   * > **NOTE**
   * >
   * > In high-resolution photo capture scenarios, the physical camera lens must be used instead of the logical lens.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface HighResolutionPhotoSession extends Session, AutoExposure, Focus {
    /**
     * Subscribes to HighResolutionPhotoSession error events. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as
     *     [beginConfig]{@link camera.Session.beginConfig},
     *     [commitConfig]{@link camera.Session.commitConfig()}, and
     *     [addInput]{@link camera.Session.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from HighResolutionPhotoSession error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. This parameter is optional. If this
     *     parameter is specified, the subscription to the specified event **on('error')** with the specified callback
     *     is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     auto focus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. This parameter is optional.
     *     If this parameter is specified, the subscription to the specified event **on('focusStateChange')** with the
     *     specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;
  }

  /**
   * Implements a macro photo session, which sets the parameters of the macro photo mode and saves all
   * [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput}
   * instances required to run the camera. It inherits from [Session]{@link camera.Session}.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus [since 12 - 13]
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus, DepthFusion [since 14 - 17]
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus, DepthFusion,
   *     ColorManagement [since 18]
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface MacroPhotoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus,
      DepthFusion, ColorManagement {
    /**
     * Subscribes to HighResolutionPhotoSession error events. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as
     *     [beginConfig]{@link camera.Session.beginConfig},
     *     [commitConfig]{@link camera.Session.commitConfig()}, and
     *     [addInput]{@link camera.Session.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from HighResolutionPhotoSession error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. This parameter is optional. If this
     *     parameter is specified, the subscription to the specified event **on('error')** with the specified callback
     *     is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     auto focus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. This parameter is optional.
     *     If this parameter is specified, the subscription to the specified event **on('focusStateChange')** with the
     *     specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes to smooth zoom state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the smooth zoom state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from smooth zoom state change events.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event
     *     **on('smoothZoomInfoAvailable')** with the specified callback is canceled. (The callback object cannot be an
     *     anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } [callback] - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;
  }

  /**
   * Implements a macro video session, which sets the parameters of the macro video mode and saves all
   * [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput}
   * instances required to run the camera. It inherits from [Session]{@link camera.Session}.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus [since 12 - 17]
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus, ColorManagement [since 18]
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface MacroVideoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect,
      ManualFocus, ColorManagement {
    /**
     * Subscribes to HighResolutionPhotoSession error events. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as
     *     [beginConfig]{@link camera.Session.beginConfig},
     *     [commitConfig]{@link camera.Session.commitConfig()}, and
     *     [addInput]{@link camera.Session.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from HighResolutionPhotoSession error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. This parameter is optional. If this
     *     parameter is specified, the subscription to the specified event **on('error')** with the specified callback
     *     is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     auto focus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. This parameter is optional.
     *     If this parameter is specified, the subscription to the specified event **on('focusStateChange')** with the
     *     specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes to smooth zoom state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the smooth zoom state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from smooth zoom state change events.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event
     *     **on('smoothZoomInfoAvailable')** with the specified callback is canceled. (The callback object cannot be an
     *     anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } [callback] - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;
  }

  /**
   * SecureSession继承自[Session]{@link camera.Session}、[Flash]{@link camera.Flash}、
   * [AutoExposure]{@link camera.AutoExposure}、[WhiteBalance]{@link camera.WhiteBalance}、[Focus]{@link camera.Focus}、
   * [Zoom]{@link camera.Zoom}。
   * 
   * 安全模式会话类，提供了对闪光灯、曝光、白平衡、对焦、变焦的操作。
   * 
   * 通过[createSession]{@link camera.CameraManager.createSession}接口传入[SceneMode]{@link camera.SceneMode}为SECURE_PHOTO模式创建
   * 一个安全模式的会话。该模式开放给人脸识别、银行等有安全诉求的应用，需要结合<!--RP1-->安全TA<!--RP1End-->使用，支持同时输出普通预览流和安全流的业务场景。<!--RP2-->
   * 
   * 安全TA：可用于图片处理，它具备验证服务器下发数据的验签能力、图片签名、解析及组装tlv逻辑的能力，还具备密钥读取、创建及操作能力。<!--RP2End-->
   * 
   * @extends Session, Flash, AutoExposure, Focus, Zoom [since 12 - 19]
   * @extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom [since 20]
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface SecureSession extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom {
    /**
     * 将其中一条[PreviewOutput]{@link camera.PreviewOutput}标记成安全输出。
     *
     * @param { PreviewOutput } previewOutput - 需要标记成安全输出的预览流，传参异常时，会返回错误码。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config. [since 12 - 17]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    addSecureOutput(previewOutput: PreviewOutput): void;

    /**
     * 监听安全相机会话的错误事件，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，session创建成功之后可监听该接口。session调用相关接口出现错误时会触发该事件，比如调用
     *     [beginConfig]{@link camera.Session.beginConfig}，[commitConfig]{@link camera.Session.commitConfig()}，
     *     [addInput]{@link camera.Session.addInput}等接口发生错误时返回错误信息。
     * @param { ErrorCallback } callback - 回调函数，用于获取错误信息。返回错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * 注销监听安全相机会话的错误事件，通过注册回调函数获取结果。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，session创建成功之后可监听该接口。
     * @param { ErrorCallback } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * 监听相机聚焦的状态变化，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'focusStateChange' } type - 监听事件，固定为'focusStateChange'，session创建成功可监听。仅当自动对焦模式时，且相机对焦状态发生改变时可触发该事件。
     * @param { AsyncCallback<FocusState> } callback - 回调函数，用于获取当前对焦状态。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * 注销监听相机聚焦的状态变化。
     *
     * @param { 'focusStateChange' } type - 监听事件，固定为'focusStateChange'，session创建成功可监听。
     * @param { AsyncCallback<FocusState> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;
  }

  /**
   * LightPaintingPhotoSession extends Session, Flash, Focus, Zoom, ColorEffect
   * Implements a light painting photo session, which sets the parameters of the light painting photo mode and saves all
   * [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput}
   * instances required to run the camera. It inherits from [Session]{@link camera.Session}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface LightPaintingPhotoSession extends Session, Flash, Focus, Zoom, ColorEffect {
    /**
     * Subscribes to HighResolutionPhotoSession error events. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as
     *     [beginConfig]{@link camera.Session.beginConfig},
     *     [commitConfig]{@link camera.Session.commitConfig()}, and
     *     [addInput]{@link camera.Session.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from HighResolutionPhotoSession error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. This parameter is optional. If this
     *     parameter is specified, the subscription to the specified event **on('error')** with the specified callback
     *     is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     auto focus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. This parameter is optional.
     *     If this parameter is specified, the subscription to the specified event **on('focusStateChange')** with the
     *     specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes to smooth zoom state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the smooth zoom state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from smooth zoom state change events.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event
     *     **on('smoothZoomInfoAvailable')** with the specified callback is canceled. (The callback object cannot be an
     *     anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } [callback] - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Obtains the type of light painting shutter mode in use.
     *
     * @returns { LightPaintingType } The light painting type in use.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getLightPaintingType(): LightPaintingType;

    /**
     * Sets the type of light painting shutter mode.
     *
     * @param { LightPaintingType } type - Light painting type to set.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setLightPaintingType(type: LightPaintingType): void;

    /**
     * Obtains the supported types of light painting shutter mode.
     *
     * @returns { Array<LightPaintingType> } List of light painting types.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getSupportedLightPaintingTypes(): Array<LightPaintingType>;
  }

  /**
   * Quick shot photo session object.
   *
   * @extends Session, AutoExposure, ColorEffect, ColorManagement, EffectSuggestion, Flash, Focus, Zoom [since 12 - 21]
   * @extends Session, AutoExposure, ColorEffect, ColorManagement, EffectSuggestion, Flash, Focus, Zoom,
   *     Beauty [since 22]
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface QuickShotPhotoSession extends Session, AutoExposure, ColorEffect, ColorManagement, EffectSuggestion,
    Flash, Focus, Zoom, Beauty {
    /**
     * Subscribes to HighResolutionPhotoSession error events. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as
     *     [beginConfig]{@link camera.Session.beginConfig},
     *     [commitConfig]{@link camera.Session.commitConfig()}, and
     *     [addInput]{@link camera.Session.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from HighResolutionPhotoSession error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. This parameter is optional. If this
     *     parameter is specified, the subscription to the specified event **on('error')** with the specified callback
     *     is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes to effect suggestion event callback.
     *
     * @param { 'effectSuggestionChange' } type - Event type.
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'effectSuggestionChange', callback: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Subscribes to effect suggestion change events.
     *
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onEffectSuggestionChange(callback: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Unsubscribes from effect suggestion event callback.
     *
     * @param { 'effectSuggestionChange' } type - Event type.
     * @param { AsyncCallback<EffectSuggestionType> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'effectSuggestionChange', callback?: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Unsubscribes from effect suggestion change events.
     *
     * @param { AsyncCallback<EffectSuggestionType> } [callback] - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offEffectSuggestionChange(callback?: AsyncCallback<EffectSuggestionType>): void;

    /**
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     auto focus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. This parameter is optional.
     *     If this parameter is specified, the subscription to the specified event **on('focusStateChange')** with the
     *     specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes to smooth zoom state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the smooth zoom state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Subscribes zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from smooth zoom state change events.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event
     *     **on('smoothZoomInfoAvailable')** with the specified callback is canceled. (The callback object cannot be an
     *     anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;

    /**
     * Unsubscribes from zoom info event callback.
     *
     * @param { AsyncCallback<SmoothZoomInfo> } [callback] - Callback used to get the zoom info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void;
  }

  /**
   * PanoramaPhotoSession extends Session, Focus, AutoExposure, WhiteBalance, ColorEffect
   * Implements a panoramic photo session, which sets the parameters of the panoramic photo mode and saves all
   * [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput}
   * instances required to run the camera. It inherits from [Session]{@link camera.Session}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface PanoramaPhotoSession extends Session, Focus, AutoExposure, WhiteBalance, ColorEffect {
    /**
     * Subscribes to HighResolutionPhotoSession error events. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as
     *     [beginConfig]{@link camera.Session.beginConfig},
     *     [commitConfig]{@link camera.Session.commitConfig()}, and
     *     [addInput]{@link camera.Session.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from HighResolutionPhotoSession error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. This parameter is optional. If this
     *     parameter is specified, the subscription to the specified event **on('error')** with the specified callback
     *     is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     auto focus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. This parameter is optional.
     *     If this parameter is specified, the subscription to the specified event **on('focusStateChange')** with the
     *     specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;
  }

  /**
   * Fluorescence photo session object.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface FluorescencePhotoSession extends Session, AutoExposure, Focus, Zoom {
    /**
     * Subscribes to error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { 'error' } type - Event type.
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { 'focusStateChange' } type - Event type.
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;
  }

  /**
   * Photo Functions object.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface PhotoFunctions extends FlashQuery, AutoExposureQuery, ManualExposureQuery, FocusQuery, ZoomQuery, BeautyQuery, ColorEffectQuery, ColorManagementQuery, MacroQuery, SceneDetectionQuery {
  }

  /**
   * Video Functions object.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface VideoFunctions extends FlashQuery, AutoExposureQuery, ManualExposureQuery, FocusQuery, ZoomQuery, StabilizationQuery, BeautyQuery, ColorEffectQuery, ColorManagementQuery, MacroQuery, SceneDetectionQuery {
  }

  /**
   * Portrait Photo Functions object.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface PortraitPhotoFunctions extends FlashQuery, AutoExposureQuery, FocusQuery, ZoomQuery, BeautyQuery, ColorEffectQuery, ColorManagementQuery, PortraitQuery, ApertureQuery, SceneDetectionQuery {
  }

  /**
   * Photo Conflict Functions object.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface PhotoConflictFunctions extends ZoomQuery, MacroQuery {
  }

  /**
   * Video Conflict Functions object.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface VideoConflictFunctions extends ZoomQuery, MacroQuery {
  }

  /**
   * Portrait Photo Conflict Functions object.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface PortraitPhotoConflictFunctions extends ZoomQuery, PortraitQuery, ApertureQuery {
  }

  /**
   * 会话中[Session]{@link camera.Session}使用的输出信息，output的基类。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CameraOutput {
    /**
     * 释放输出资源，通过注册回调函数获取结果。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当释放输出资源成功，err为undefined，否则为错误对象。错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * 释放输出资源。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * Defines the PiP status data.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface SketchStatusData {
    /**
     * Status of PiP. The options are 0 (stopped), 1 (started), 2 (stopping), and 3 (starting).
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    status: int;

    /**
     * Zoom ratio of PiP.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    sketchRatio: double;

    /**
     * Offset of PiP.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    centerPointOffset: Point;
  }

  /**
   * 预览输出类。继承[CameraOutput]{@link camera.CameraOutput}。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PreviewOutput extends CameraOutput {
    /**
     * 开始输出预览流，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当开始输出预览流成功，err为undefined，否则为错误对象。错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.start(callback: AsyncCallback<void>)
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * 开始输出预览流。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.start()
     */
    start(): Promise<void>;

    /**
     * 停止输出预览流，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当停止输出预览流成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.stop(callback: AsyncCallback<void>)
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * 停止输出预览流。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.stop()
     */
    stop(): Promise<void>;

    /**
     * 监听预览帧启动，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'frameStart' } type - 监听事件，固定为'frameStart'，previewOutput创建成功可监听。底层第一次开始曝光时触发该事件并返回。
     * @param { AsyncCallback<void> } callback - 回调函数，用于获取结果。只要有该事件返回就证明预览开始。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    on(type: 'frameStart', callback: AsyncCallback<void>): void;

    /**
     * Subscribes frame start event callback.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onFrameStart(callback: AsyncCallback<void>): void;

    /**
     * 注销预览帧启动的监听。
     *
     * @param { 'frameStart' } type - 监听事件，固定为'frameStart'，previewOutput创建成功可监听。
     * @param { AsyncCallback<void> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    off(type: 'frameStart', callback?: AsyncCallback<void>): void;

    /**
     * Unsubscribes from frame start event callback.
     *
     * @param { AsyncCallback<void> } [callback] - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offFrameStart(callback?: AsyncCallback<void>): void;

    /**
     * 监听预览帧结束，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'frameEnd' } type - 监听事件，固定为'frameEnd'，previewOutput创建成功可监听。预览完全结束最后一帧时触发该事件并返回。
     * @param { AsyncCallback<void> } callback - 回调函数，用于获取结果。只要有该事件返回就证明预览结束。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    on(type: 'frameEnd', callback: AsyncCallback<void>): void;

    /**
     * Subscribes frame end event callback.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onFrameEnd(callback: AsyncCallback<void>): void;

    /**
     * 注销监听预览帧结束。
     *
     * @param { 'frameEnd' } type - 监听事件，固定为'frameEnd'，previewOutput创建成功可监听。
     * @param { AsyncCallback<void> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    off(type: 'frameEnd', callback?: AsyncCallback<void>): void;

    /**
     * Unsubscribes from frame end event callback.
     *
     * @param { AsyncCallback<void> } [callback] - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offFrameEnd(callback?: AsyncCallback<void>): void;

    /**
     * 监听预览输出的错误事件，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，previewOutput创建成功可监听。预览接口使用错误时触发该事件，比如调用
     *     [Session.start]{@link camera.Session.start()}，[CameraOutput.release]{@link camera.CameraOutput.release()}等接口发
     *     生错误时返回对应错误信息。
     * @param { ErrorCallback } callback - 回调函数，用于获取错误信息。返回错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the preview output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * 注销监听预览输出的错误事件。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，previewOutput创建成功可监听。
     * @param { ErrorCallback } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the preview output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * 查询支持的帧率范围。
     *
     * @returns { Array<FrameRateRange> } 支持的帧率范围列表。若接口调用失败，返回undefined。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getSupportedFrameRates(): Array<FrameRateRange>;

    /**
     * 设置预览流帧率范围，设置的范围必须在支持的帧率范围内。
     * 
     * 进行设置前，可通过[getSupportedFrameRates]{@link camera.PreviewOutput.getSupportedFrameRates}接口查询支持的帧率范围。
     * 
     * > **说明：**
     * >
     * > 仅在[PhotoSession]{@link camera.PhotoSession}或[VideoSession]{@link camera.VideoSession}模式下支持。
     *
     * @param { int } minFps - 最小帧率（单位：fps），当传入的最大值小于最小值时，传参异常，接口不生效。
     * @param { int } maxFps - 最大帧率（单位：fps），当传入的最小值大于最大值时，传参异常，接口不生效。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400110 - Unresolved conflicts with current configurations.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    setFrameRate(minFps: int, maxFps: int): void;

    /**
     * 获取已设置的帧率范围。
     * 
     * 使用[setFrameRate]{@link camera.PreviewOutput.setFrameRate}接口对预览流设置过帧率后可查询。
     *
     * @returns { FrameRateRange } 帧率范围
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getActiveFrameRate(): FrameRateRange;

    /**
     * 获取预览旋转角度。
     * 
     * - 设备自然方向：设备默认使用方向。例如，直板机默认使用方向为竖屏（充电口向下）。
     * - 相机镜头角度：值等于相机图像顺时针旋转到设备自然方向的角度。例如，直板机后置相机传感器是横屏安装的，所以需要顺时针旋转90度到设备自然方向。
     * - 
     * [屏幕旋转角度](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-direction#section737072712182)：
     * 显示设备的屏幕顺时针旋转角度。
     *
     * @param { int } displayRotation - 显示设备的屏幕旋转角度，通过
     *     [display.getDefaultDisplaySync]{@link @ohos.display:display.getDefaultDisplaySync}获得。
     *     <br> 从API version 23开始，入参displayRotation为可选参数，当不传入参数时，由系统获取displayRotation进行预览旋转角度计算。
     *     <br> 单位为度数（degree），取值范围为[0, 360]。 [since 12 - 22]
     * @param { int } [displayRotation] - 显示设备的屏幕旋转角度，通过
     *     [display.getDefaultDisplaySync]{@link @ohos.display:display.getDefaultDisplaySync}获得。
     *     <br> 从API version 23开始，入参displayRotation为可选参数，当不传入参数时，由系统获取displayRotation进行预览旋转角度计算。
     *     <br> 单位为度数（degree），取值范围为[0, 360]。 [since 23]
     * @returns { ImageRotation } 返回预览旋转角度。若接口调用失败，返回undefined。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect. [since 12 - 22]
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getPreviewRotation(displayRotation?: int): ImageRotation;

    /**
     * 设置预览旋转角度。
     *
     * @param { ImageRotation } previewRotation - 预览旋转角度
     * @param { boolean } isDisplayLocked - Surface在屏幕旋转时是否锁定方向，未设置时默认取值为false，即不锁定方向。true表示锁定方向，false表示不锁定方向。详情请参考
     *     [SurfaceRotationOptions]{@link SurfaceRotationOptions}
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    setPreviewRotation(previewRotation: ImageRotation, isDisplayLocked?: boolean): void;

    /**
     * 获取当前生效的配置信息。
     *
     * @returns { Profile } 当前生效的配置信息
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getActiveProfile(): Profile;

    /**
     * 配置延迟预览的Surface，可以在[commitConfig]{@link camera.Session.commitConfig()}配流和[start]{@link camera.Session.start()}启流之后
     * 运行。
     *
     * @param { string } surfaceId - 从[XComponent]{@link XComponent}组件获取的surfaceId。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 13 - 23]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @atomicservice [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    addDeferredSurface(surfaceId: string): void;

    /**
     * Checks whether Picture-in-Picture (PiP) preview is supported.
     *
     * @returns { boolean } Check result for the support of the PiP preview. **true** if supported, **false** otherwise.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isSketchSupported(): boolean;

    /**
     * Obtains the zoom ratio when PiP preview is enabled.
     *
     * @returns { double } Zoom ratio. If PiP preview is not supported, the value **-1** is returned.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getSketchRatio(): double;

    /**
     * Enables or disables PiP preview.
     *
     * @param { boolean } enabled - Whether to enable or disable PiP view. **true** to enable, **false** otherwise.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400102 - Operation not allowed. [since 12]
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    enableSketch(enabled: boolean): void;

    /**
     * Attaches a surface for PiP preview.
     *
     * @param { string } surfaceId - Surface ID, which is obtained from
     *     [XComponent]{@link XComponent}.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect. [since 12]
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    attachSketchSurface(surfaceId: string): void;

    /**
     * Subscribes to PiP status change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'sketchStatusChanged' } type - Event type. The value is fixed at **'sketchStatusChanged'**. The event
     *     can be listened for when a PiP preview stream is created. This event is triggered when PiP preview is enabled
     *     or disabled or the zoom ratio changes while PiP preview is enabled.
     * @param { AsyncCallback<SketchStatusData> } callback - Callback used to return the PiP status data.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'sketchStatusChanged', callback: AsyncCallback<SketchStatusData>): void;

    /**
     * Subscribes sketch status changed event callback.
     *
     * @param { AsyncCallback<SketchStatusData> } callback - Callback used to sketch status data.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onSketchStatusChanged(callback: AsyncCallback<SketchStatusData>): void;

    /**
     * Unsubscribes from PiP status change events.
     *
     * @param { 'sketchStatusChanged' } type - Event type. The value is fixed at **'sketchStatusChanged'**. The event
     *     can be listened for when a PiP preview stream is created.
     * @param { AsyncCallback<SketchStatusData> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event
     *     **on('sketchStatusChanged')** with the specified callback is canceled. (The callback object cannot be an
     *     anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'sketchStatusChanged', callback?: AsyncCallback<SketchStatusData>): void;

    /**
     * Unsubscribes sketch status changed event callback.
     *
     * @param { AsyncCallback<SketchStatusData> } [callback] - Callback used to get sketch status data.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offSketchStatusChanged(callback?: AsyncCallback<SketchStatusData>): void;

    /**
     * 检查是否支持预览带宽压缩（指通过编码减少数据量，降低其在传输链路中的带宽占用）。
     *
     * @returns { boolean } 是否支持预览带宽压缩。true表示支持，false表示不支持。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    isBandwidthCompressionSupported(): boolean;

    /**
     * 使能预览带宽压缩。
     * 
     * 使能之前，可先使用方法[isBandwidthCompressionSupported]{@link camera.PreviewOutput.isBandwidthCompressionSupported}对设备是否支持预览
     * 带宽压缩进行检查。
     * 
     * > **说明：**
     * >
     * > 该接口只能在使用[Session.commitConfig]{@link camera.Session.commitConfig(callback: AsyncCallback<void>)}接口之前调用，否则会影响预览流
     * > 出流格式。
     *
     * @param { boolean } enabled - 是否使能预览带宽压缩。true表示使能，false表示不使能。
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    enableBandwidthCompression(enabled: boolean): void;

    /**
     * LOG视频下，查询是否支持辅助监看功能。辅助监看开启后，预览画面还原至原色域，录制出的视频仍然是LOG视频格式。
     * 
     * > **说明：**
     * >
     * > 辅助监看效果仅支持1080P及以下分辨率。
     *
     * @returns { boolean } 是否支持辅助监看功能。true表示支持，false表示不支持。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    isLogViewAssistSupported(): boolean;

    /**
     * LOG视频下，使能辅助监看之前，可先使用方法[isLogViewAssistSupported]{@link camera.PreviewOutput.isLogViewAssistSupported}查询设备是否支持预览辅助
     * 监看。
     * 
     * > **说明：**
     * >
     * > - 该接口只能在使用[Session.commitConfig]{@link camera.Session.commitConfig(callback: AsyncCallback<void>)}接口之后调用。
     * >
     * > - 预览辅助监看效果仅支持1080P及以下分辨率。
     *
     * @param { boolean } enable - 是否使能辅助监看。true表示使能，false表示不使能。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setLogViewAssistEnable(enable: boolean): void;
  }

  /**
   * Enum for effect suggestion.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum EffectSuggestionType {
    /**
     * None.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    EFFECT_SUGGESTION_NONE = 0,
    /**
     * Portrait.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    EFFECT_SUGGESTION_PORTRAIT = 1,
    /**
     * Food.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    EFFECT_SUGGESTION_FOOD = 2,

    /**
     * Sky.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    EFFECT_SUGGESTION_SKY = 3,

    /**
     * Sunrise and sunset.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    EFFECT_SUGGESTION_SUNRISE_SUNSET = 4,

    /**
     * Stage.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    EFFECT_SUGGESTION_STAGE = 5
  }

  /**
   * Effect suggestion status
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  class EffectSuggestionStatus {
    /**
     * Effect Suggestion type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    type: EffectSuggestionType;
    /**
     * Effect Suggestion type status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    status: boolean;
  }

  /**
   * 枚举，图片旋转角度。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ImageRotation {
    /**
     * 图片旋转0度。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    ROTATION_0 = 0,

    /**
     * 图片旋转90度。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    ROTATION_90 = 90,

    /**
     * 图片旋转180度。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    ROTATION_180 = 180,

    /**
     * 图片旋转270度。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    ROTATION_270 = 270
  }

  /**
   * 图片地理位置信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Location {
    /**
     * 纬度（度）。取值范围：[-90, 90]。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    latitude: double;

    /**
     * 经度（度）。取值范围：[-180, 180]。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    longitude: double;

    /**
     * 海拔（米）。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    altitude: double;
  }

  /**
   * 枚举，图片质量。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum QualityLevel {
    /**
     * 图片质量高。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    QUALITY_LEVEL_HIGH = 0,

    /**
     * 图片质量中等。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    QUALITY_LEVEL_MEDIUM = 1,

    /**
     * 图片质量差。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    QUALITY_LEVEL_LOW = 2
  }

  /**
   * 拍摄照片的设置。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PhotoCaptureSetting {
    /**
     * 图片质量。
     * 
     * 当quality未下发时，默认按compressionQuality下发生效；若quality与compressionQuality同时下发则按compressionQuality下发生效；若quality与
     * compressionQuality均未下发则图片质量默认是高等。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    quality?: QualityLevel;

    /**
     * 图片旋转角度（默认0度，顺时针旋转）。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    rotation?: ImageRotation;

    /**
     * 图片地理位置信息（默认以设备硬件信息为准）。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    location?: Location;

    /**
     * 镜像使能开关（默认关）。使用之前需要使用[isMirrorSupported]{@link camera.PhotoOutput.isMirrorSupported}进行判断是否支持。true表示使能，false表示不使能。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    mirror?: boolean;

    /**
     * 图片压缩质量值，取值范围为(1, 100)。
     * 
     * 当compressionQuality未下发时，默认按quality生效；若quality与compressionQuality同时下发则按compressionQuality下发生效；若quality与
     * compressionQuality均未下发则图片质量默认是高等。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    compressionQuality?: int;
  }

  /**
   * Enumerates the deferred delivery image types. In deferred delivery, photo and video capture are divided into two
   * phases. In the first phase, an image or video is output to users at a relatively fast speed. In the second phase, a
   * higher-resolution image or video is output again after optimization processing.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum DeferredDeliveryImageType {
    /**
     * Deferred delivery is not supported.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Deferred delivery for photo capture.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    PHOTO = 1,

    /**
     * Deferred delivery for video capture.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    VIDEO = 2
  }

  /**
   * 全质量图对象。
   * 
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Photo {
    /**
     * Full-quality image.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    main: image.Image;

    /**
     * Raw image.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    raw?: image.Image;

    /**
     * Depth data.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    depthData?: DepthData;

    /**
     * Releases output resources. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * 图片容器类型，用于获取全质量图和未压缩图(YUV)。
   *
   * @unionmember { image.Image } 图片容器类型，用于获取全质量图。
   * @unionmember { image.Picture } 图片容器类型，用于获取未压缩图(YUV)。
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 23 dynamic&static
   */
  type ImageType = image.Image | image.Picture;

  /**
   * 获取全质量图和未压缩图的对象。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  interface CapturePhoto {
    /**
     * Object of the full-quality image and the uncompressed image.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    main: ImageType;

    /**
     * Releases output resources. This API uses a promise to return the result.
     * Model constraint: This API can be used only in the stage model.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    release(): Promise<void>;
  }

  /**
   * A class object that functions as a thumbnail proxy.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface DeferredPhotoProxy {
    /**
     * Obtains the PixelMap of a thumbnail. This API uses a promise to return the result.
     *
     * @returns { Promise<image.PixelMap> } PixelMap of the thumbnail.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getThumbnail(): Promise<image.PixelMap>;

    /**
     * Releases depth data output resources. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * 枚举，视频编码类型。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 13 dynamic
   * @since 23 static
   */
  enum VideoCodecType {
    /**
     * 视频编码类型AVC。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    AVC = 0,

    /**
     * 视频编码类型HEVC。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    HEVC = 1
  }

  /**
   * 拍照会话中使用的输出信息，继承[CameraOutput]{@link camera.CameraOutput}。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PhotoOutput extends CameraOutput {
    /**
     * 以默认设置触发一次拍照，通过注册回调函数获取结果。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当以默认设置触发拍照成功，err为undefined，否则为错误对象。错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    capture(callback: AsyncCallback<void>): void;

    /**
     * 以默认设置触发一次拍照。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    capture(): Promise<void>;

    /**
     * 以指定参数触发一次拍照，通过注册回调函数获取结果。使用callback异步回调。
     *
     * @param { PhotoCaptureSetting } setting - 拍照设置，传入undefined类型数据按默认设置触发一次拍照处理。
     * @param { AsyncCallback<void> } callback - 回调函数，用于获取结果。接口调用失败会返回相应错误码，错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    capture(setting: PhotoCaptureSetting, callback: AsyncCallback<void>): void;

    /**
     * 以指定参数触发一次拍照。使用Promise异步回调。
     *
     * @param { PhotoCaptureSetting } setting - 拍照设置，传入undefined类型数据按默认设置触发一次拍照处理。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    capture(setting: PhotoCaptureSetting): Promise<void>;

    /**
     * Starts the burst mode, in which users can capture a series of photos in quick succession. This API is generally
     * used in photo mode. After the burst mode starts, the bottom layer continues displaying photos. You can call
     * [confirmCapture]{@link camera.PhotoOutput.confirmCapture} to cancel the burst mode. This API uses a promise to
     * return the result.
     *
     * @param { PhotoCaptureSetting } setting - Shooting parameters. The input of **undefined** is processed as if no
     *     parameters were passed.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    burstCapture(setting: PhotoCaptureSetting): Promise<void>;

    /**
     * Confirms photo capture. This API is generally used in night photo mode when users need to stop the exposure
     * countdown and take a photo in advance.
     * This API is used to end the burst mode, which is started by calling
     * [burstCapture]{@link camera.PhotoOutput.burstCapture}.
     *
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    confirmCapture(): void;

    /**
     * Confirm if the raw image delivery is supported
     *
     * @returns { boolean } TRUE if the type of delivery image is support.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    isRawDeliverySupported(): boolean;

    /**
     * Enable raw image image delivery.
     *
     * @param { boolean } enabled - Target state for raw image delivery.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    enableRawDelivery(enabled: boolean): void;

    /**
     * Checks whether deferred delivery of a certain type is supported.
     *
     * @param { DeferredDeliveryImageType } type - Deferred delivery image type.
     * @returns { boolean } Check result for the support of deferred delivery. **true** if supported, **false**
     *     otherwise.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isDeferredImageDeliverySupported(type: DeferredDeliveryImageType): boolean;

    /**
     * Checks whether deferred delivery of a certain type is enabled.
     *
     * @param { DeferredDeliveryImageType } type - Deferred delivery image type.
     * @returns { boolean } Check result for whether deferred delivery is enabled. **true** if enabled, **false**
     *     otherwise.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isDeferredImageDeliveryEnabled(type: DeferredDeliveryImageType): boolean;

    /**
     * Enables deferred delivery of a certain type.
     *
     * @param { DeferredDeliveryImageType } type - Deferred delivery image type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    deferImageDelivery(type: DeferredDeliveryImageType): void;

    /**
     * Check if the depth data delivery is supported.
     *
     * @returns { boolean } TRUE if the type of delivery image is enabled.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    isDepthDataDeliverySupported(): boolean;

    /**
     * Enable depth data delivery.
     *
     * @param { boolean } enabled - Target state for depth data delivery.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    enableDepthDataDelivery(enabled: boolean): void;

    /**
     * 查询支持的动态照片短视频编码类型。
     *
     * @returns { Array<VideoCodecType> } 支持的动态照片短视频编码类型列表。若接口调用失败，返回undefined。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    getSupportedMovingPhotoVideoCodecTypes(): Array<VideoCodecType>;

    /**
     * 设置动态照片短视频编码类型。
     *
     * @param { VideoCodecType } codecType - 动态照片短视频编码类型。
     *     <br>如果设置不在枚举范围内，则该参数不会生效。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    setMovingPhotoVideoCodecType(codecType: VideoCodecType): void;

    /**
     * 注册监听拍照返回照片上报事件。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'photoAvailable' } type - 监听事件，固定为'photoAvailable'，photoOutput创建成功后可监听。
     * @param { AsyncCallback<Photo> } callback - 回调函数，用于监听拍照返回照片上报事件。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    on(type: 'photoAvailable', callback: AsyncCallback<Photo>): void;

    /**
     * Subscribes photo available event callback.
     *
     * @param { AsyncCallback<Photo> } callback - Callback used to get the Photo.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onPhotoAvailable(callback: AsyncCallback<Photo>): void;

    /**
     * 注销监听拍照返回照片上报事件。
     *
     * @param { 'photoAvailable' } type - 监听事件，固定为'photoAvailable'，photoOutput创建成功后可监听。
     * @param { AsyncCallback<Photo> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    off(type: 'photoAvailable', callback?: AsyncCallback<Photo>): void;

    /**
     * Unsubscribes photo available event callback.
     *
     * @param { AsyncCallback<Photo> } [callback] - Callback used to get the Photo.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offPhotoAvailable(callback?: AsyncCallback<Photo>): void;

    /**
     * 注册监听全质量图和未压缩图。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > - 注册监听接口时，不支持在该接口监听的回调方法里调用
     * > [offCapturePhotoAvailable]{@link camera.PhotoOutput.offCapturePhotoAvailable(callback?: Callback<CapturePhoto>)}
     * > 注销回调。
     * >
     * > - 拍摄未压缩图（YUV）格式图片时，仅支持使用此接口注册监听。
     *
     * @param { Callback<CapturePhoto> } callback - 回调函数，用于监听全质量图和未压缩图上报事件。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    onCapturePhotoAvailable(callback: Callback<CapturePhoto>): void;

    /**
     * 注销监听全质量图和未压缩图。使用callback异步回调。
     *
     * @param { Callback<CapturePhoto> } [callback] - 回调函数，如果指定参数则取消对应callback，callback对象不可是匿名函数，否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    offCapturePhotoAvailable(callback?: Callback<CapturePhoto>): void;

    /**
     * Subscribes to events indicating available thumbnail proxies. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'deferredPhotoProxyAvailable' } type - Event type. The value is fixed at
     *     **'deferredPhotoProxyAvailable'**. The event can be listened for when a photoOutput instance is created.
     * @param { AsyncCallback<DeferredPhotoProxy> } callback - Callback used to return the thumbnail proxy.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    on(type: 'deferredPhotoProxyAvailable', callback: AsyncCallback<DeferredPhotoProxy>): void;

    /**
     * Subscribes deferred photo proxy available event callback.
     *
     * @param { AsyncCallback<DeferredPhotoProxy> } callback - Callback used to get the DeferredPhotoProxy.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onDeferredPhotoProxyAvailable(callback: AsyncCallback<DeferredPhotoProxy>): void;

    /**
     * Unsubscribes from events indicating available thumbnail proxies.
     *
     * @param { 'deferredPhotoProxyAvailable' } type - Event type. The value is fixed at
     *     **'deferredPhotoProxyAvailable'**. The event can be listened for when a photoOutput instance is created.
     * @param { AsyncCallback<DeferredPhotoProxy> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event
     *     **on('deferredPhotoProxyAvailable')** with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 11 dynamic
     */
    off(type: 'deferredPhotoProxyAvailable', callback?: AsyncCallback<DeferredPhotoProxy>): void;

    /**
     * Unsubscribes deferred photo proxy available event callback.
     *
     * @param { AsyncCallback<DeferredPhotoProxy> } [callback] - Callback used to get the DeferredPhotoProxy.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offDeferredPhotoProxyAvailable(callback?: AsyncCallback<DeferredPhotoProxy>): void;

    /**
     * 注册监听photoAsset上报。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'photoAssetAvailable' } type - 监听事件，固定为'photoAssetAvailable'，photoOutput创建成功后可监听。
     * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } callback - 回调函数，用于监听photoAsset上报。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     */
    on(type: 'photoAssetAvailable', callback: AsyncCallback<photoAccessHelper.PhotoAsset>): void;

    /**
     * Subscribes to photo asset event callback.
     * 
     * This API processes deferred photo delivery data by quickly displaying low-quality images to give
     * users the impression of faster photo capture, while also generating high-quality images to maintain the
     * final output quality. For details about the design specifications, see
     * [Optimizing Deferred Photo Delivery](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-camera-shot2see).
     *
     * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } callback - Callback used to get the asset.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onPhotoAssetAvailable(callback: AsyncCallback<photoAccessHelper.PhotoAsset>): void;

    /**
     * 注销photoAsset上报。
     *
     * @param { 'photoAssetAvailable' } type - 监听事件，固定为'photoAssetAvailable'，photoOutput创建成功后可监听。
     * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } callback - 需要解监听的回调方法。如果callback不为空且与此对应的监听方法一致，不为匿名方法，则解注
     *     册该方法；如果callback为空，则解监听所有回调。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     */
    off(type: 'photoAssetAvailable', callback?: AsyncCallback<photoAccessHelper.PhotoAsset>): void;

    /**
     * Unsubscribes photo asset event callback.
     *
     * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } [callback] - Callback used to get the asset.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offPhotoAssetAvailable(callback?: AsyncCallback<photoAccessHelper.PhotoAsset>): void;

    /**
     * 查询是否支持镜像拍照。
     *
     * @returns { boolean } 返回是否支持镜像拍照，true表示支持，false表示不支持。若接口调用失败，返回undefined。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    isMirrorSupported(): boolean;

    /**
     * 是否启用动态照片镜像拍照。
     * 
     * 调用该接口前，需要通过[isMovingPhotoSupported]{@link camera.PhotoOutput.isMovingPhotoSupported}查询是否支持动态照片拍摄功能以及通过
     * [isMirrorSupported]{@link camera.PhotoOutput.isMirrorSupported}查询是否支持镜像拍照功能。
     *
     * @param { boolean } enabled - 是否启用动态照片镜像拍照。true为开启动态照片镜像拍照，false为关闭动态照片镜像拍照。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    enableMirror(enabled: boolean): void;

    /**
     * 监听拍照开始，通过注册回调函数获取Capture ID。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'captureStart' } type - 监听事件，固定为'captureStart'，photoOutput创建成功后可监听。每次拍照，底层开始曝光时触发该事件并返回。
     * @param { AsyncCallback<number> } callback - 使用callback的方式获取Capture ID。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.PhotoOutput.on(type: 'captureStartWithInfo', callback: AsyncCallback<CaptureStartInfo>)
     */
    on(type: 'captureStart', callback: AsyncCallback<number>): void;

    /**
     * 注销拍照开始的监听。
     * 
     * > **说明：**
     * >
     * > 从 API version 10开始支持，从API version 11开始废弃。
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'captureStart' } type - 监听事件，固定为'captureStart'，photoOutput创建成功后可监听。
     * @param { AsyncCallback<number> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.PhotoOutput.off(type: 'captureStartWithInfo', callback?: AsyncCallback<CaptureStartInfo>)
     */
    off(type: 'captureStart', callback?: AsyncCallback<number>): void;

    /**
     * 监听拍照开始，通过注册回调函数获取[CaptureStartInfo]{@link camera.CaptureStartInfo}。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'captureStartWithInfo' } type - 监听事件，固定为'captureStartWithInfo'，photoOutput创建成功后可监听。
     * @param { AsyncCallback<CaptureStartInfo> } callback - 使用callback的方式获取Capture ID。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    on(type: 'captureStartWithInfo', callback: AsyncCallback<CaptureStartInfo>): void;

    /**
     * Subscribes capture start event callback.
     *
     * @param { AsyncCallback<CaptureStartInfo> } callback - Callback used to get the capture start info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onCaptureStartWithInfo(callback: AsyncCallback<CaptureStartInfo>): void;

    /**
     * 注销监听拍照。
     *
     * @param { 'captureStartWithInfo' } type - 监听事件，固定为'captureStartWithInfo'，photoOutput创建成功后可监听。
     * @param { AsyncCallback<CaptureStartInfo> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     */
    off(type: 'captureStartWithInfo', callback?: AsyncCallback<CaptureStartInfo>): void;

    /**
     * Unsubscribes from capture start event callback.
     *
     * @param { AsyncCallback<CaptureStartInfo> } [callback] - Callback used to get the capture start info.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offCaptureStartWithInfo(callback?: AsyncCallback<CaptureStartInfo>): void;

    /**
     * 监听拍照帧输出捕获，通过注册回调函数获取结果。使用callback异步回调。
     *
     * @param { 'frameShutter' } type - 监听事件，固定为'frameShutter'，photoOutput创建成功后可监听。
     * @param { AsyncCallback<FrameShutterInfo> } callback - 回调函数，用于获取相关信息。该回调返回意味着可以再次下发拍照请求。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    on(type: 'frameShutter', callback: AsyncCallback<FrameShutterInfo>): void;

    /**
     * Subscribes frame shutter event callback.
     *
     * @param { AsyncCallback<FrameShutterInfo> } callback - Callback used to get the frame shutter information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onFrameShutter(callback: AsyncCallback<FrameShutterInfo>): void;

    /**
     * 注销监听拍照帧输出捕获。
     *
     * @param { 'frameShutter' } type - 监听事件，固定为'frameShutter'，photoOutput创建成功后可监听。
     * @param { AsyncCallback<FrameShutterInfo> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    off(type: 'frameShutter', callback?: AsyncCallback<FrameShutterInfo>): void;

    /**
     * Unsubscribes from frame shutter event callback.
     *
     * @param { AsyncCallback<FrameShutterInfo> } [callback] - Callback used to get the frame shutter information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offFrameShutter(callback?: AsyncCallback<FrameShutterInfo>): void;

    /**
     * 监听拍照曝光结束捕获，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'frameShutterEnd' } type - 监听事件，固定为'frameShutterEnd'，photoOutput创建成功后可监听。
     * @param { AsyncCallback<FrameShutterEndInfo> } callback - 回调函数，用于获取相关信息。该回调返回表示拍照曝光结束。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     */
    on(type: 'frameShutterEnd', callback: AsyncCallback<FrameShutterEndInfo>): void;

    /**
     * Subscribes frame shutter end event callback.
     *
     * @param { AsyncCallback<FrameShutterEndInfo> } callback - Callback used to get the frame shutter end information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onFrameShutterEnd(callback: AsyncCallback<FrameShutterEndInfo>): void;

    /**
     * 注销监听拍照曝光结束捕获。
     *
     * @param { 'frameShutterEnd' } type - 监听事件，固定为'frameShutterEnd'，photoOutput创建成功后可监听。
     * @param { AsyncCallback<FrameShutterEndInfo> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有
     *     callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     */
    off(type: 'frameShutterEnd', callback?: AsyncCallback<FrameShutterEndInfo>): void;

    /**
     * Unsubscribes from frame shutter end event callback.
     *
     * @param { AsyncCallback<FrameShutterEndInfo> } [callback] - Callback used to get the frame shutter end
     *     information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offFrameShutterEnd(callback?: AsyncCallback<FrameShutterEndInfo>): void;

    /**
     * 监听拍照结束，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'captureEnd' } type - 监听事件，固定为'captureEnd'。photoOutput创建成功后可监听。拍照完全结束可触发该事件发生并返回相应信息。
     * @param { AsyncCallback<CaptureEndInfo> } callback - 回调函数，用于获取相关信息。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    on(type: 'captureEnd', callback: AsyncCallback<CaptureEndInfo>): void;

    /**
     * Subscribes capture end event callback.
     *
     * @param { AsyncCallback<CaptureEndInfo> } callback - Callback used to get the capture end information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onCaptureEnd(callback: AsyncCallback<CaptureEndInfo>): void;

    /**
     * 注销监听拍照结束。
     *
     * @param { 'captureEnd' } type - 监听事件，固定为'captureEnd'，photoOutput创建成功后可监听。
     * @param { AsyncCallback<CaptureEndInfo> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    off(type: 'captureEnd', callback?: AsyncCallback<CaptureEndInfo>): void;

    /**
     * Unsubscribes from capture end event callback.
     *
     * @param { AsyncCallback<CaptureEndInfo> } [callback] - Callback used to get the capture end information.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offCaptureEnd(callback?: AsyncCallback<CaptureEndInfo>): void;

    /**
     * 监听可拍下一张，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'captureReady' } type - 监听事件，固定为'captureReady'，photoOutput创建成功后可监听。当下一张可拍时可触发该事件发生并返回相应信息。
     * @param { AsyncCallback<void> } callback - 回调函数，用于获取相关信息。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     */
    on(type: 'captureReady', callback: AsyncCallback<void>): void;

    /**
     * Subscribes capture ready event callback. After receiving the callback, can proceed to the next capture
     *
     * @param { AsyncCallback<void> } callback - Callback used to notice capture ready.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onCaptureReady(callback: AsyncCallback<void>): void;

    /**
     * 注销监听可拍下一张。
     *
     * @param { 'captureReady' } type - 监听事件，固定为'captureReady'，photoOutput创建成功后可监听。
     * @param { AsyncCallback<void> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     */
    off(type: 'captureReady', callback?: AsyncCallback<void>): void;

    /**
     * Unsubscribes from capture ready event callback.
     *
     * @param { AsyncCallback<void> } [callback] - Callback used to notice capture ready.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offCaptureReady(callback?: AsyncCallback<void>): void;

    /**
     * 监听预估的拍照时间，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'estimatedCaptureDuration' } type - 监听事件，固定为'estimatedCaptureDuration'，photoOutput创建成功后可监听。拍照完全结束可触发该事件发
     *     生并返回相应信息。
     * @param { AsyncCallback<double> } callback - 回调函数，用于获取预估的单次拍照底层出sensor采集帧时间，单位：毫秒。如果上报-1，代表没有预估时间。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     */
    on(type: 'estimatedCaptureDuration', callback: AsyncCallback<double>): void;

    /**
     * Subscribes estimated capture duration event callback.
     *
     * @param { AsyncCallback<double> } callback - Callback used to notify the estimated capture duration (in
     *     milliseconds).
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onEstimatedCaptureDuration(callback: AsyncCallback<double>): void;

    /**
     * 注销监听预估的拍照时间。
     *
     * @param { 'estimatedCaptureDuration' } type - 监听事件，固定为'estimatedCaptureDuration'，photoOutput创建成功后可监听。
     * @param { AsyncCallback<double> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     */
    off(type: 'estimatedCaptureDuration', callback?: AsyncCallback<double>): void;

    /**
     * Unsubscribes from estimated capture duration event callback.
     *
     * @param { AsyncCallback<double> } [callback] - Callback used to
     *     notify the estimated capture duration (in milliseconds).
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offEstimatedCaptureDuration(callback?: AsyncCallback<double>): void;

    /**
     * 监听拍照输出发生错误，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，photoOutput创建成功后可监听。拍照接口调用时出现错误触发该事件并返回错误信息。
     * @param { ErrorCallback } callback - 回调函数，用于获取错误信息。返回错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the photo output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * 注销监听拍照输出发生错误。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，photoOutput创建成功后可监听。
     * @param { ErrorCallback } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the photo output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * 获取当前生效的配置信息。
     *
     * @returns { Profile } 当前生效的配置信息
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getActiveProfile(): Profile;

    /**
     * Checks whether the quick thumbnail feature is supported.
     * This API takes effect after [addOutput]{@link camera.Session.addOutput} and
     * [addInput]{@link camera.Session.addInput} and before
     * [commitConfig]{@link camera.Session.commitConfig()}.
     *
     * @returns { boolean } Check result for the support of the quick thumbnail feature. **true** if supported,
     *     **false** otherwise.
     * @throws { BusinessError } 7400104 - session is not running.
     * @throws { BusinessError } 202 - Not System Application. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    isQuickThumbnailSupported(): boolean;

    /**
     * Enables or disables the quick thumbnail feature.
     * This API takes effect after [addOutput]{@link camera.Session.addOutput} and
     * [addInput]{@link camera.Session.addInput} and before
     * [commitConfig]{@link camera.Session.commitConfig()}.
     *
     * @param { boolean } enabled - Whether to enable the quick thumbnail feature. **true** to enable, **false**
     *     otherwise.
     * @throws { BusinessError } 7400104 - session is not running.
     * @throws { BusinessError } 202 - Not System Application. [since 12]
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect. [since 12]
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    enableQuickThumbnail(enabled: boolean): void;

    /**
     * Subscribes to quick thumbnail output events. This API uses an asynchronous callback to return the result.
     * The listening takes effect after **enableQuickThumbnail(true)** is called.
     *
     * @param { 'quickThumbnail' } type - Event type. The value is fixed at **'quickThumbnail'**.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback that returns a PixelMap instance.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     */
    on(type: 'quickThumbnail', callback: AsyncCallback<image.PixelMap>): void;

    /**
     * Subscribes to camera thumbnail events.
     * This method is valid only after enableQuickThumbnail(true) is called.
     *
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to get the quick thumbnail.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onQuickThumbnail(callback: AsyncCallback<image.PixelMap>): void;

    /**
     * Unsubscribes from quick thumbnail output events.
     *
     * @param { 'quickThumbnail' } type - Event type. The value is fixed at **'quickThumbnail'**.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the result. This parameter is
     *     optional. If this parameter is specified, the subscription to the specified event **on('quickThumbnail')**
     *     with the specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 10 dynamic
     */
    off(type: 'quickThumbnail', callback?: AsyncCallback<image.PixelMap>): void;

    /**
     * Unsubscribes from camera thumbnail events.
     * This method is valid only after enableQuickThumbnail(true) is called.
     *
     * @param { AsyncCallback<image.PixelMap> } [callback] - Callback used to get the quick thumbnail.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offQuickThumbnail(callback?: AsyncCallback<image.PixelMap>): void;

    /**
     * Checks whether automatic high quality is supported for photos.
     *
     * @returns { boolean } Check result for whether automatic high quality is supported. **true** if supported,
     *     **false** otherwise.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400104 - session is not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    isAutoHighQualityPhotoSupported(): boolean;

    /**
     * Enables automatic high quality for photos. Before using this API, call
     * [isAutoHighQualityPhotoSupported]{@link camera.PhotoOutput.isAutoHighQualityPhotoSupported} to check whether
     * automatic high quality is supported.
     *
     * @param { boolean } enabled - Whether to enable or disable automatic high quality for photos. **true** to enable,
     *     **false** otherwise.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400104 - session is not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    enableAutoHighQualityPhoto(enabled: boolean): void;

    /**
     * Confirm if the auto cloud image enhancement is supported.
     *
     * @returns { boolean } TRUE if the auto cloud image enhancement is supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    isAutoCloudImageEnhancementSupported(): boolean;

    /**
     * Enable auto cloud image enhancement
     *
     * @param { boolean } enabled - Target state for auto cloud image enhancement.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    enableAutoCloudImageEnhancement(enabled: boolean): void;

    /**
     * 查询是否支持动态照片拍摄。
     *
     * @returns { boolean } 返回是否支持动态照片拍照。true表示支持，false表示不支持。若接口调用失败，返回undefined。
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    isMovingPhotoSupported(): boolean;

    /**
     * 使能动态照片拍照。
     *
     * @permission ohos.permission.MICROPHONE
     * @param { boolean } enabled - 使能动态照片拍照。true为开启动态照片，false为关闭动态照片。
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    enableMovingPhoto(enabled: boolean): void;

    /**
     * 检查是否支持指定的拍照画质优先策略。
     *
     * @param { PhotoQualityPrioritization } qualityPrioritization - 要检查的拍照画质优先策略。
     * @returns { boolean } 是否支持指定的拍照画质优先策略。true表示支持，false表示不支持。
     * @throws { BusinessError } 7400201 - Camera service fatal error,
     *     reconfiguring streams is needed to recover from failure.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    isPhotoQualityPrioritizationSupported(qualityPrioritization: PhotoQualityPrioritization): boolean;

    /**
     * 设置拍照画质优先策略。
     * 
     * 设置之前，可先使用方法
     * [isPhotoQualityPrioritizationSupported]{@link camera.PhotoOutput.isPhotoQualityPrioritizationSupported}对设备是否支持指定的
     * 拍照画质优先策略进行检查。
     *
     * @param { PhotoQualityPrioritization } qualityPrioritization - 要设置的拍照画质优先策略。
     * @throws { BusinessError } 7400201 - Camera service fatal error,
     *     reconfiguring streams is needed to recover from failure.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    setPhotoQualityPrioritization(qualityPrioritization: PhotoQualityPrioritization): void;

    /**
     * 获取拍照旋转角度。
     * 
     * - 设备自然方向：设备默认使用方向。例如，直板机默认使用方向为竖屏（充电口向下）。
     * - 相机镜头角度：值等于相机图像顺时针旋转到设备自然方向的角度。例如，直板机后置相机传感器是横屏安装的，所以需要顺时针旋转90度到设备自然方向。
     *
     * @param { int } deviceDegree - 设备旋转角度，单位度，取值范围：[0, 360]。
     *     <br>若入参超过该范围，则取入参除以360的余数。
     *     <br>从API version 23开始，入参deviceDegree为可选参数，当不传入参数时，由系统获取deviceDegree进行拍照旋转角度计算。 [since 12 - 22]
     * @param { int } [deviceDegree] - 设备旋转角度，单位度，取值范围：[0, 360]。
     *     <br>若入参超过该范围，则取入参除以360的余数。
     *     <br>从API version 23开始，入参deviceDegree为可选参数，当不传入参数时，由系统获取deviceDegree进行拍照旋转角度计算。 [since 23]
     * @returns { ImageRotation } 返回拍照旋转角度。若接口调用失败，返回undefined。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect. [since 12 - 22]
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getPhotoRotation(deviceDegree?: int): ImageRotation;

    /**
     * Confirm if offline processing is supported.
     *
     * @returns { boolean } TRUE if the type of offline is supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    isOfflineSupported(): boolean;

    /**
     * Enable offline processing.
     *
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400104 - session is not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    enableOffline(): void;

    /**
     * Subscribes offline Delivery finished events.
     * This method is valid only after enableOffline() is called.
     *
     * @param { 'offlineDeliveryFinished' } type - Event type.
     * @param { AsyncCallback<void> } callback - Callback used to get offline Delivery finished events.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     */
    on(type: 'offlineDeliveryFinished', callback: AsyncCallback<void>): void;

    /**
     * Subscribes offline Delivery finished events.
     * This method is valid only after enableOffline() is called.
     *
     * @param { AsyncCallback<void> } callback - Callback used to get offline Delivery finished events.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onOfflineDeliveryFinished(callback: AsyncCallback<void>): void;

    /**
     * Unsubscribes offline Delivery finished events.
     * This method is valid only after enableOffline() is called.
     *
     * @param { 'offlineDeliveryFinished' } type - Event type.
     * @param { AsyncCallback<void>} [callback] - Callback used to get offline Delivery finished events.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     */
    off(type: 'offlineDeliveryFinished', callback?: AsyncCallback<void>): void;

    /**
     * Unsubscribes offline Delivery finished events.
     * This method is valid only after enableOffline() is called.
     *
     * @param { AsyncCallback<void>} [callback] - Callback used to get offline Delivery finished events.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offOfflineDeliveryFinished(callback?: AsyncCallback<void>): void;

    /**
     * Set edit data.
     *
     * @param { string } editData - The edit data.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setEditData(editData: string): void;

    /**
     * Confirm if original image generation supported.
     *
     * @returns { boolean } TRUE if the original image generation is supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isOriginalImageGenerationSupported(): boolean;

    /**
     * Enable original image generation.
     *
     * @param { boolean } enabled - enable original image generation if TRUE.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    enableOriginalImageGeneration(enabled: boolean): void;

    /**
     * 确认是否支持自动扩展增益图（Gainmap）的输出。
     *
     * @returns { boolean } 是否支持自动扩展增益图（Gainmap）的输出。true表示支持，false表示不支持。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    isAutoExtendedGainmapDeliverySupported(): boolean;

    /**
     * 是否启用自动扩展增益图（Gainmap）的输出。
     *
     * @param { boolean } enabled - 是否启用自动扩展增益图（Gainmap）的输出。true表示启用，false表示不启用。
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    enableAutoExtendedGainmapDelivery(enabled: boolean): void;
  }

  /**
   * 拍照帧输出信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface FrameShutterInfo {
    /**
     * 拍照的ID。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    captureId: int;
    /**
     * 快门时间戳。单位毫秒。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    timestamp: long;
  }

  /**
   * 拍照曝光结束信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface FrameShutterEndInfo {
    /**
     * 拍照的ID。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    captureId: int;
  }

  /**
   * 拍照开始信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface CaptureStartInfo {
    /**
     * 拍照的ID。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    captureId: int;
    /**
     * 预估的单次拍照底层出sensor采集帧时间，如果上报-1，代表没有预估时间。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    time: long;
  }

  /**
   * 拍照停止信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CaptureEndInfo {
    /**
     * 拍照的ID。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    captureId: int;
    /**
     * 帧数。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    frameCount: int;
  }

  /**
   * Deferred video enhancement info.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface DeferredVideoEnhancementInfo {
    /**
     * Check whether deferred video enhancement available.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly isDeferredVideoEnhancementAvailable: boolean;
    /**
     * Video identifier.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly videoId?: string;
  }

  /**
   * 录像会话中使用的输出信息，继承[CameraOutput]{@link camera.CameraOutput}。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface VideoOutput extends CameraOutput {
    /**
     * 启动录制，通过注册回调函数获取结果。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当启动录制成功，err为undefined，否则为错误对象。错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * 启动录制。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * 结束录制，通过注册回调函数获取结果。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当结束录制成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * 结束录制。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * 查询是否支持镜像录像。
     *
     * @returns { boolean } 返回是否支持镜像录像，true表示支持，false表示不支持。若接口调用失败，返回undefined。
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 14]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 14]
     * @publicapi [since 15]
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    isMirrorSupported(): boolean;

    /**
     * 启用/关闭镜像录像。
     * 
     * - 调用该接口前，需要通过[isMirrorSupported]{@link camera.VideoOutput.isMirrorSupported}查询是否支录像镜像功能。
     * - 启用/关闭录像镜像后，需要通过[getVideoRotation]{@link camera.VideoOutput.getVideoRotation}获取录像旋转角度以及
     * [updateRotation]{@link @ohos.multimedia.media:media.AVRecorder.updateRotation}更新旋转角度。
     *
     * @param { boolean } enabled - 启用/关闭镜像录像。true为开启镜像录像，false为关闭镜像录像。
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 14]
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 14]
     * @publicapi [since 15]
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    enableMirror(enabled: boolean): void;

    /**
     * 查询支持的帧率范围。
     *
     * @returns { Array<FrameRateRange> } 支持的帧率范围列表。若接口调用失败，返回undefined。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getSupportedFrameRates(): Array<FrameRateRange>;

    /**
     * 设置录像流帧率范围，设置的范围必须在支持的帧率范围内。
     * 
     * 进行设置前，可通过[getSupportedFrameRates]{@link camera.VideoOutput.getSupportedFrameRates}查询支持的帧率范围。
     * 
     * > **说明：**
     * >
     * > 仅在[PhotoSession]{@link camera.PhotoSession}或[VideoSession]{@link camera.VideoSession}模式下支持。
     * >
     * > 接口调用前，先调用[getActiveFrameRate]{@link camera.VideoOutput.getActiveFrameRate}接口查询当前VideoSession的帧率，若下发的帧率与当前帧率相等，则
     * > 下发的帧率不会生效。
     *
     * @param { int } minFps - 最小帧率，单位：fps。当传入的最大值小于最小值时，传参异常，接口不生效。
     * @param { int } maxFps - 最大帧率，单位：fps。当传入的最小值大于最大值时，传参异常，接口不生效。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400110 - Unresolved conflicts with current configurations.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    setFrameRate(minFps: int, maxFps: int): void;

    /**
     * 获取已设置的帧率范围。
     * 
     * 使用[setFrameRate]{@link camera.VideoOutput.setFrameRate}对录像流设置过帧率后可查询。
     *
     * @returns { FrameRateRange } 帧率范围
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getActiveFrameRate(): FrameRateRange;

    /**
     * 获取录像旋转角度。
     * 
     * - 设备自然方向：设备默认使用方向。例如，直板机默认使用方向为竖屏（充电口向下）。
     * - 相机镜头角度：值等于相机图像顺时针旋转到设备自然方向的角度。例如，直板机后置相机传感器是横屏安装的，所以需要顺时针旋转90度到设备自然方向。
     *
     * @param { int } deviceDegree - 设备旋转角度，单位度，取值范围[0, 360]。
     *     <br> 从API version 23开始，入参deviceDegree为可选参数，当不传入参数时，由系统获取deviceDegree进行录像旋转角度计算。 [since 12 - 22]
     * @param { int } [deviceDegree] - 设备旋转角度，单位度，取值范围[0, 360]。
     *     <br> 从API version 23开始，入参deviceDegree为可选参数，当不传入参数时，由系统获取deviceDegree进行录像旋转角度计算。 [since 23]
     * @returns { ImageRotation } 返回录像旋转角度。若接口调用失败，返回undefined。
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect. [since 12 - 22]
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getVideoRotation(deviceDegree?: int): ImageRotation;

    /**
     * Confirm if auto deferred video enhancement is supported in the specific device.
     *
     * @returns { boolean } TRUE if auto deferred video enhancement is supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    isAutoDeferredVideoEnhancementSupported(): boolean;

    /**
     * Confirm if auto deferred video enhancement is enabled.
     *
     * @returns { boolean } TRUE if auto deferred video enhancement is enabled.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    isAutoDeferredVideoEnhancementEnabled(): boolean;

    /**
     * Enable auto deferred video enhancement if needed.
     *
     * @param { boolean } enabled - Status of auto deferred video enhancement.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    enableAutoDeferredVideoEnhancement(enabled: boolean): void;

    /**
     * Get supported video rotations.
     *
     * @returns { Array<ImageRotation> } The array of supported video rotations.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    getSupportedRotations(): Array<ImageRotation>;

    /**
     * Determine whether video rotation is supported.
     *
     * @returns { boolean } Is video rotation supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    isRotationSupported(): boolean;

    /**
     * Set a video rotation.
     *
     * @param { ImageRotation } rotation - The rotation angle.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    setRotation(rotation: ImageRotation): void;

    /**
     * Determine whether auto frame rate is supported.
     *
     * @returns { boolean } Is auto frame rate supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    isAutoVideoFrameRateSupported(): boolean;

    /**
     * Enable auto frame rate for video capture.
     *
     * @param { boolean } enabled - enable auto frame rate if TRUE.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    enableAutoVideoFrameRate(enabled: boolean): void;

    /**
     * Subscribes deferred video enhancement info callback.
     *
     * @param { 'deferredVideoEnhancementInfo' } type - Event type.
     * @param { AsyncCallback<DeferredVideoEnhancementInfo> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'deferredVideoEnhancementInfo', callback: AsyncCallback<DeferredVideoEnhancementInfo>): void;

    /**
     * Subscribes deferred video enhancement info callback.
     *
     * @param { AsyncCallback<DeferredVideoEnhancementInfo> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onDeferredVideoEnhancementInfo(callback: AsyncCallback<DeferredVideoEnhancementInfo>): void;

    /**
     * Unsubscribes from deferred video enhancement info callback.
     *
     * @param { 'deferredVideoEnhancementInfo' } type - Event type.
     * @param { AsyncCallback<DeferredVideoEnhancementInfo> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'deferredVideoEnhancementInfo', callback?: AsyncCallback<DeferredVideoEnhancementInfo>): void;

    /**
     * Unsubscribes from deferred video enhancement info callback.
     *
     * @param { AsyncCallback<DeferredVideoEnhancementInfo> } [callback] - Callback used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offDeferredVideoEnhancementInfo(callback?: AsyncCallback<DeferredVideoEnhancementInfo>): void;

    /**
     * 监听录像开始，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'frameStart' } type - 监听事件，固定为'frameStart'，videoOutput创建成功后可监听。底层第一次曝光时触发该事件并返回。
     * @param { AsyncCallback<void> } callback - 回调函数，用于获取结果。  只要有该事件返回就证明录像开始。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    on(type: 'frameStart', callback: AsyncCallback<void>): void;

    /**
     * Subscribes frame start event callback.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onFrameStart(callback: AsyncCallback<void>): void;

    /**
     * 注销监听录像开始。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'frameStart' } type - 监听事件，固定为'frameStart'，videoOutput创建成功后可监听。
     * @param { AsyncCallback<void> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    off(type: 'frameStart', callback?: AsyncCallback<void>): void;

    /**
     * Unsubscribes from frame start event callback.
     *
     * @param { AsyncCallback<void> } [callback] - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offFrameStart(callback?: AsyncCallback<void>): void;

    /**
     * 监听录像结束，通过注册回调函数获取结果。使用callback异步回调。
     *
     * @param { 'frameEnd' } type - 监听事件，固定为'frameEnd'，videoOutput创建成功后可监听。录像完全结束最后一帧时触发该事件并返回。
     * @param { AsyncCallback<void> } callback - 回调函数，用于获取结果。 只要有该事件返回就证明录像结束。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    on(type: 'frameEnd', callback: AsyncCallback<void>): void;

    /**
     * Subscribes frame end event callback.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onFrameEnd(callback: AsyncCallback<void>): void;

    /**
     * 注销监听录像结束。
     *
     * @param { 'frameEnd' } type - 监听事件，固定为'frameEnd'，videoOutput创建成功后可监听。
     * @param { AsyncCallback<void> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    off(type: 'frameEnd', callback?: AsyncCallback<void>): void;

    /**
     * Unsubscribes from frame end event callback.
     *
     * @param { AsyncCallback<void> } [callback] - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offFrameEnd(callback?: AsyncCallback<void>): void;

    /**
     * 监听录像输出发生错误，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，videoOutput创建成功后可监听。录像接口调用出现错误时触发该事件并返回对应错误码，比如调用
     *     [start]{@link camera.VideoOutput.start()}，[CameraOutput.release]{@link camera.CameraOutput.release()}接口时出现错误返
     *     回对应错误信息。
     * @param { ErrorCallback } callback - 回调函数，用于获取错误信息。返回错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the video output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * 注销监听录像输出发生错误。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，photoOutput创建成功后可监听。
     * @param { ErrorCallback } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the video output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * 获取当前生效的配置信息。
     *
     * @returns { VideoProfile } 当前生效的配置信息
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getActiveProfile(): VideoProfile;

    /**
     * Get supported video meta types.
     *
     * @returns { Array<VideoMetaType> } The array of supported video meta type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getSupportedVideoMetaTypes(): Array<VideoMetaType>;

    /**
     * Attach a meta surface to VideoOutput.
     *
     * @param { string } surfaceId - Surface object id used for receiving meta infos.
     * @param { VideoMetaType } type - Video meta type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    attachMetaSurface(surfaceId: string, type: VideoMetaType): void;
  }

  /**
   * Video meta type.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum VideoMetaType {
    /**
     * Video meta type for storing maker info.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    VIDEO_META_MAKER_INFO = 0
  }

  /**
   * 枚举，metadata元数据检测类型。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum MetadataObjectType {
    /**
     * 元数据的对象类型，用于人脸检测。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FACE_DETECTION = 0,

    /**
     * 元数据的对象类型，用于人体检测。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 22]
     * @publicapi [since 23]
     * @atomicservice [since 23]
     * @since 13 dynamic
     * @since 23 static
     */
    HUMAN_BODY = 1,

    /**
     * 用于检测猫脸的metadata类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    CAT_FACE = 2,

    /**
     * 用于检测猫的身体的metadata类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    CAT_BODY = 3,

    /**
     * 用于检测狗脸的metadata类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    DOG_FACE = 4,

    /**
     * 用于检测狗的身体的metadata类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    DOG_BODY = 5,

    /**
     * 用于显著性检测。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    SALIENT_DETECTION = 6,

    /**
     * 用于二维码检测。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    BAR_CODE_DETECTION = 7,

    /**
     * 用于基础人脸检测。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 23 dynamic&static
     */
    BASIC_FACE_DETECTION = 8,
  
    /**
     * Text detection type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    TEXT_DETECTION = 9
  }

  /**
   * Enumerates the types of light painting shutter modes.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum LightPaintingType {
    /**
     * Traffic trails.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TRAFFIC_TRAILS = 0,

    /**
     * Star trails.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STAR_TRAILS = 1,

    /**
     * Silky water.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SILKY_WATER = 2,

    /**
     * Light graffiti.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    LIGHT_GRAFFITI = 3
  }

  /**
   * 相机矩形。用于各类检测对象的矩形框绘制。返回的检测点坐标系以设备充电口在右侧时的横向设备方向为基准。该坐标系左上角为（0，0），右下角为（1，1），其中（topLeftX，topLeftY）表示矩形区域的左上角坐标，width和
   * height分别表示矩形区域的宽和高。因此在实际使用中根据业务诉求需要裁剪或者选择人脸区域时，必须将矩形区域的x坐标和y坐标分别乘以实际相机预览输出流的宽和高，即可得到裁剪后的人脸矩形区域。
   * 
   * 实际预览流的宽高指的是相机输出流的分辨率，请参考[profile]{@link camera.Profile}中的size。
   * 
   * 预览流的数据获取请参考[双路预览(ArkTs)](docroot://media/camera/camera-dual-channel-preview.md)。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Rect {
    /**
     * 矩形区域左上角x坐标，范围[0, 1]。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    topLeftX: double;
    /**
     * 矩形区域左上角y坐标，范围[0, 1]。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    topLeftY: double;
    /**
     * 矩形宽，范围[0, 1]。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    width: double;
    /**
     * 矩形高，范围[0, 1]。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    height: double;
  }

  /**
   * 枚举，人脸检测信息中的情绪类型。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 13 - 24]
   * @publicapi [since 26.0.0]
   * @atomicservice [since 26.0.0]
   * @since 13 dynamic
   * @since 23 static
   */
  enum Emotion {
    /**
     * 平静。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    NEUTRAL = 0,

    /**
     * 悲伤。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    SADNESS = 1,

    /**
     * 微笑。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    SMILE = 2,

    /**
     * 惊讶。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    SURPRISE = 3
  }

  /**
   * 相机元能力信息，[CameraInput]{@link camera.CameraInput}相机信息中的数据来源，通过metadataOutput.on('metadataObjectsAvailable')接口获取。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface MetadataObject {
    /**
     * metadata 类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly type: MetadataObjectType;

    /**
     * 当前时间戳。单位为纳秒（ns）。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly timestamp: int;

    /**
     * metadata 区域框。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly boundingBox: Rect;

    /**
     * Metadata object ID.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly objectId: int;

    /**
     * Confidence of the detection, with a value range of [0, 1].
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly confidence: double;

    /**
     * 是否已锁定焦点跟踪。true表示已锁定，false表示未锁定。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    readonly isLockFocusTracked?: boolean;
  }

  /**
   * 相机检测到的基础人脸元数据信息，继承自[MetadataObject]{@link camera.MetadataObject}。[CameraInput]{@link camera.CameraInput}相机信息中的数据来源，
   * 通过metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}
   * 接口获取。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @atomicservice [since 26.0.0]
   * @since 23 dynamic&static
   */
  interface MetadataBasicFaceObject extends MetadataObject {
    /**
     * 左眼区域框。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 23 dynamic&static
     */
    readonly leftEyeBoundingBox?: Rect;

    /**
     * 右眼区域框。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 23 dynamic&static
     */
    readonly rightEyeBoundingBox?: Rect;

    /**
     * 俯仰角度。取值范围为[-90, 90]，以向下为正方向。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 23 dynamic&static
     */
    readonly pitchAngle?: int;

    /**
     * 左右旋转角度。取值范围为[-90, 90]，以向右为正方向。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 23 dynamic&static
     */
    readonly yawAngle?: int;

    /**
     * 平面内旋转角度。取值范围为[-180, 180]，以顺时针方向为正方向。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 23 dynamic&static
     */
    readonly rollAngle?: int;
  }

  /**
   * 相机检测到的人脸元数据信息，继承自[MetadataObject]{@link camera.MetadataObject}。[CameraInput]{@link camera.CameraInput}相机信息中的数据来源，通过
   * metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}
   * 接口获取。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 13 - 24]
   * @publicapi [since 26.0.0]
   * @atomicservice [since 26.0.0]
   * @since 13 dynamic
   * @since 23 static
   */
  interface MetadataFaceObject extends MetadataObject {
    /**
     * 左眼区域框。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly leftEyeBoundingBox: Rect;

    /**
     * 右眼区域框。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly rightEyeBoundingBox: Rect;

    /**
     * 检测到的情绪类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly emotion: Emotion;

    /**
     * 情绪检测置信度。取值范围为[0, 1]。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly emotionConfidence: double;

    /**
     * 俯仰角度。取值范围为[-90, 90]，以向下为正方向。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly pitchAngle: int;

    /**
     * 左右旋转角度。取值范围为[-90, 90]，以向右为正方向。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly yawAngle: int;

    /**
     * 平面内旋转角度。取值范围为[-180, 180]，以顺时针方向为正方向。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly rollAngle: int;
  }

  /**
   * 相机检测到的人体元数据信息，继承自[MetadataObject]{@link camera.MetadataObject}。[CameraInput]{@link camera.CameraInput}相机信息中的数据来源，通过
   * metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}
   * 接口获取。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 13 - 24]
   * @publicapi [since 26.0.0]
   * @atomicservice [since 26.0.0]
   * @since 13 dynamic
   * @since 23 static
   */
  interface MetadataHumanBodyObject extends MetadataObject {
  }

  /**
   * 相机检测到的猫脸元数据信息，继承自[MetadataObject]{@link camera.MetadataObject}。[CameraInput]{@link camera.CameraInput}相机信息中的数据来源，通过
   * metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}
   * 接口获取。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 13 - 24]
   * @publicapi [since 26.0.0]
   * @atomicservice [since 26.0.0]
   * @since 13 dynamic
   * @since 23 static
   */
  interface MetadataCatFaceObject extends MetadataObject {
    /**
     * 左眼区域框。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly leftEyeBoundingBox: Rect;

    /**
     * 右眼区域框。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly rightEyeBoundingBox: Rect;
  }

  /**
   * 相机检测到的猫的身体元数据信息，继承自[MetadataObject]{@link camera.MetadataObject}。[CameraInput]{@link camera.CameraInput}相机信息中的数据来源，
   * 通过metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}
   * 接口获取。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 13 - 24]
   * @publicapi [since 26.0.0]
   * @atomicservice [since 26.0.0]
   * @since 13 dynamic
   * @since 23 static
   */
  interface MetadataCatBodyObject extends MetadataObject {
  }

  /**
   * 相机检测到的狗脸元数据信息，继承自[MetadataObject]{@link camera.MetadataObject}。[CameraInput]{@link camera.CameraInput}相机信息中的数据来源，通过
   * metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}
   * 接口获取。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 13 - 24]
   * @publicapi [since 26.0.0]
   * @atomicservice [since 26.0.0]
   * @since 13 dynamic
   * @since 23 static
   */
  interface MetadataDogFaceObject extends MetadataObject {
    /**
     * 左眼区域框。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly leftEyeBoundingBox: Rect;

    /**
     * 右眼区域框。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly rightEyeBoundingBox: Rect;
  }

  /**
   * 相机检测到的狗的身体元数据信息，继承自[MetadataObject]{@link camera.MetadataObject}。[CameraInput]{@link camera.CameraInput}相机信息中的数据来源，
   * 通过metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}
   * 接口获取。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 13 - 24]
   * @publicapi [since 26.0.0]
   * @atomicservice [since 26.0.0]
   * @since 13 dynamic
   * @since 23 static
   */
  interface MetadataDogBodyObject extends MetadataObject {
  }

  /**
   * 相机检测到的显著性物体元数据信息，继承自[MetadataObject]{@link camera.MetadataObject}。[CameraInput]{@link camera.CameraInput}相机信息中的数据来
   * 源，通过metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}
   * 接口获取。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 13 - 24]
   * @publicapi [since 26.0.0]
   * @atomicservice [since 26.0.0]
   * @since 13 dynamic
   * @since 23 static
   */
  interface MetadataSalientDetectionObject extends MetadataObject {
  }

  /**
   * 相机检测到的二维码元数据信息，继承自[MetadataObject]{@link camera.MetadataObject}。[CameraInput]{@link camera.CameraInput}相机信息中的数据来源，通
   * 过metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}
   * 接口获取。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 14 - 24]
   * @publicapi [since 26.0.0]
   * @atomicservice [since 26.0.0]
   * @since 14 dynamic
   * @since 23 static
   */
  interface MetadataBarcodeObject extends MetadataObject {
  }

  /**
   * 镜头遮挡或脏污检测回调返回的接口实例，表示镜头遮挡或脏污状态信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 12 - 22]
   * @publicapi [since 23]
   * @atomicservice [since 23]
   * @since 12 dynamic
   * @since 23 static
   */
  interface CameraOcclusionDetectionResult {
    /**
     * 镜头是否被遮挡。true表示镜头被遮挡，false表示镜头无遮挡。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 22]
     * @publicapi [since 23]
     * @atomicservice [since 23]
     * @since 12 dynamic
     * @since 23 static
     */
    readonly isCameraOccluded: boolean;

    /**
     * 镜头是否有脏污。true表示镜头有脏污，false表示镜头无脏污。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 22]
     * @publicapi [since 23]
     * @atomicservice [since 23]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly isCameraLensDirty: boolean;
  }

  /**
   * metadata流。继承[CameraOutput]{@link camera.CameraOutput}。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface MetadataOutput extends CameraOutput {
    /**
     * 开始输出metadata，通过注册回调函数获取结果。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当开始输出metadata成功，err为undefined，否则为错误对象。错误码类型
     *     [CameraErrorCode]{@link camera.CameraErrorCode}。
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * 开始输出metadata。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * 停止输出metadata，通过注册回调函数获取结果。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当停止输出metadata成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * 停止输出metadata。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * 新增需要上报的检测对象类型。
     *
     * @param { Array<MetadataObjectType> } types - metadata流类型信息，通过getSupportedOutputCapability接口获取。
     * @throws { BusinessError } 202 - Not System Application. [since 13 - 22]
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 22]
     * @publicapi [since 23]
     * @atomicservice [since 23]
     * @since 13 dynamic
     * @since 23 static
     */
    addMetadataObjectTypes(types: Array<MetadataObjectType>): void;

    /**
     * 删除需要上报的检测对象类型。
     *
     * @param { Array<MetadataObjectType> } types - metadata流类型信息，通过getSupportedOutputCapability接口获取。
     * @throws { BusinessError } 202 - Not System Application. [since 13 - 22]
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 13 - 22]
     * @publicapi [since 23]
     * @atomicservice [since 23]
     * @since 13 dynamic
     * @since 23 static
     */
    removeMetadataObjectTypes(types: Array<MetadataObjectType>): void;

    /**
     * 监听检测到的metadata对象，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'metadataObjectsAvailable' } type - 监听事件，固定为'metadataObjectsAvailable'，metadataOutput创建成功后可监听。
     *     <br>检测到有效的metadata数据时，触发该事件发生并返回相应的metadata数据。如果输入错误字段，则不会创建有效监听。
     * @param { AsyncCallback<Array<MetadataObject>> } callback - 回调函数，用于获取metadata数据。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>): void;

    /**
     * Subscribes to metadata objects available event callback.
     *
     * @param { AsyncCallback<Array<MetadataObject>> } callback - Callback used to get the available metadata objects.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onMetadataObjectsAvailable(callback: AsyncCallback<Array<MetadataObject>>): void;

    /**
     * 注销监听检测到的metadata对象。
     *
     * @param { 'metadataObjectsAvailable' } type - 监听事件，固定为'metadataObjectsAvailable'，metadataOutput创建成功后可监听。
     * @param { AsyncCallback<Array<MetadataObject>> } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有
     *     callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    off(type: 'metadataObjectsAvailable', callback?: AsyncCallback<Array<MetadataObject>>): void;

    /**
     * Unsubscribes from metadata objects available event callback.
     *
     * @param { AsyncCallback<Array<MetadataObject>> } [callback] - Callback used to get the available metadata objects.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offMetadataObjectsAvailable(callback?: AsyncCallback<Array<MetadataObject>>): void;

    /**
     * 监听metadata流的错误，通过注册回调函数获取结果。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当前注册监听接口，不支持在on监听的回调方法里，调用off注销回调。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，metadataOutput创建成功后可监听。metadata接口使用错误时触发该事件并返回对应错误码，比如调用
     *     [start]{@link camera.MetadataOutput.start()}，[CameraOutput.release]{@link camera.CameraOutput.release()}接口时发生
     *     错误返回对应错误信息。
     * @param { ErrorCallback } callback - 回调函数，用于获取错误信息。返回错误码，错误码类型[CameraErrorCode]{@link camera.CameraErrorCode}。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the metadata output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * 注销监听metadata流的错误。
     *
     * @param { 'error' } type - 监听事件，固定为'error'，metadataOutput创建成功后可监听。
     * @param { ErrorCallback } callback - 回调函数，如果指定参数则取消对应callback（callback对象不可是匿名函数），否则取消所有callback。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the metadata output errors.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * 检查设备是否支持锁定元数据对象（如猫脸、狗脸）追踪功能。
     *
     * @returns { boolean } 表示是否支持锁定元数据对象追踪功能。true表示支持，false表示不支持。
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    isLockMetadataObjectTrackingSupported(): boolean;

    /**
     * 锁定对特定元数据对象（如猫脸、狗脸）的追踪。
     * 
     * > **说明：**
     * >
     * > - 该功能以point所指向的点所在的对象为追踪对象，如果该点不存在追踪对象，则功能不生效。
     * >
     * > - 被锁定追踪的对象离开取景范围超过三秒或调用解锁追踪后，锁定追踪自动取消。
     *
     * @param { Point } point - 锁定元数据对象追踪的点位。
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    lockMetadataObjectTracking(point: Point): void;

    /**
     * 解锁元数据对象（如猫脸、狗脸）追踪。
     *
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    unlockMetadataObjectTracking(): void;
  }

  /**
   * Enumerates the time-lapse recording states.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum TimeLapseRecordState {
    /**
     * Recording not started.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    IDLE = 0,

    /**
     * Recording.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    RECORDING = 1
  }

  /**
   * Enumerates the time-lapse preview types, which affect the shooting algorithm.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum TimeLapsePreviewType {
    /**
     * Dark environment, a scenario with poor illumination, for example, at night or in a dark area.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DARK = 1,

    /**
     * Bright environment, a scenario with good illumination, for example, in the daytime or under light.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    LIGHT = 2
  }

  /**
   * Describes the Try AE parameters. Try AE indicates that the hardware reports the status based on the ambient
   * illumination change during time-lapse photographing.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface TryAEInfo {
    /**
     * Determine whether try AE is done.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    readonly isTryAEDone: boolean;

    /**
     * Determine whether AE hint is needed.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    readonly isTryAEHintNeeded?: boolean;

    /**
     * Timelapse preview type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    readonly previewType?: TimeLapsePreviewType;

    /**
     * Timelapse capture interval.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    readonly captureInterval?: int;
  }

  /**
   * TimeLapsePhotoSession extends Session, Focus, ManualFocus, AutoExposure, ManualExposure, ManualIso, WhiteBalance,
   * Zoom, ColorEffect
   * Implements a time-lapse photo session, which sets the parameters of the time-lapse photo mode and saves all
   * [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput}
   * instances required to run the camera. It inherits from [Session]{@link camera.Session}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface TimeLapsePhotoSession extends Session, Focus, ManualFocus, AutoExposure, ManualExposure, ManualIso, WhiteBalance, Zoom, ColorEffect {
    /**
     * Subscribes to HighResolutionPhotoSession error events. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as
     *     [beginConfig]{@link camera.Session.beginConfig},
     *     [commitConfig]{@link camera.Session.commitConfig()}, and
     *     [addInput]{@link camera.Session.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from HighResolutionPhotoSession error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. This parameter is optional. If this
     *     parameter is specified, the subscription to the specified event **on('error')** with the specified callback
     *     is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the capture session errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     auto focus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onFocusStateChange(callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. This parameter is optional.
     *     If this parameter is specified, the subscription to the specified event **on('focusStateChange')** with the
     *     specified callback is canceled. (The callback object cannot be an anonymous function.)
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change event callback.
     *
     * @param { AsyncCallback<FocusState> } [callback] - Callback used to get the focus state change.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offFocusStateChange(callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes to automatic ISO change events to obtain real-time ISO information. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'isoInfoChange' } type - Event type. The value is fixed at **'isoInfoChange'**.
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to return the ISO information.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'isoInfoChange', callback: AsyncCallback<IsoInfo>): void;

    /**
     * Subscribes ISO info event callback.
     *
     * @param { AsyncCallback<IsoInfo> } callback - Callback used to get the ISO info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onIsoInfoChange(callback: AsyncCallback<IsoInfo>): void;

    /**
     * Unsubscribes from automatic ISO change events.
     *
     * @param { 'isoInfoChange' } type - Event type. The value is fixed at **'isoInfoChange'**.
     * @param { AsyncCallback<IsoInfo> } callback - Callback, which is optional and is used to match **callback** in
     *     **on('isoInfoChange')**.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'isoInfoChange', callback?: AsyncCallback<IsoInfo>): void;

    /**
     * Unsubscribes from ISO info event callback.
     *
     * @param { AsyncCallback<IsoInfo> } [callback] - Callback used to get the ISO info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offIsoInfoChange(callback?: AsyncCallback<IsoInfo>): void;

    /**
     * Subscribes to exposure information change events to obtain the exposure information. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { 'exposureInfoChange' } type - Event type. The value is fixed at **'exposureInfoChange'**.
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to return the exposure information.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'exposureInfoChange', callback: AsyncCallback<ExposureInfo>): void;

    /**
     * Subscribes exposure info event callback.
     *
     * @param { AsyncCallback<ExposureInfo> } callback - Callback used to get the exposure info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onExposureInfoChange(callback: AsyncCallback<ExposureInfo>): void;

    /**
     * Unsubscribes from exposure information change events.
     *
     * @param { 'exposureInfoChange' } type - Event type. The value is fixed at **'exposureInfoChange'**.
     * @param { AsyncCallback<ExposureInfo> } callback - Callback, which is optional and is used to match **callback**
     *     in **on('exposureInfoChange')**.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'exposureInfoChange', callback?: AsyncCallback<ExposureInfo>): void;

    /**
     * Unsubscribes from exposure info event callback.
     *
     * @param { AsyncCallback<ExposureInfo> } [callback] - Callback used to get the exposure info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offExposureInfoChange(callback?: AsyncCallback<ExposureInfo>): void;

    /**
     * Subscribes to illumination change events to obtain real-time illumination information. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { 'luminationInfoChange' } type - Event type. The value is fixed at **'luminationInfoChange'**.
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to return the illumination information.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'luminationInfoChange', callback: AsyncCallback<LuminationInfo>): void;

    /**
     * Subscribes lumination info event callback.
     *
     * @param { AsyncCallback<LuminationInfo> } callback - Callback used to get the lumination info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onLuminationInfoChange(callback: AsyncCallback<LuminationInfo>): void;

    /**
     * Unsubscribes from illumination change events.
     *
     * @param { 'luminationInfoChange' } type - Event type. The value is fixed at **'luminationInfoChange'**.
     * @param { AsyncCallback<LuminationInfo> } callback - Callback, which is optional and is used to match **callback**
     *     in **on('luminationInfoChange')**.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'luminationInfoChange', callback?: AsyncCallback<LuminationInfo>): void;

    /**
     * Unsubscribes from lumination info event callback.
     *
     * @param { AsyncCallback<LuminationInfo> } [callback] - Callback used to get the lumination info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offLuminationInfoChange(callback?: AsyncCallback<LuminationInfo>): void;

    /**
     * Checks whether Try AE is required.
     *
     * @returns { boolean } Check result for whether Try AE is required. **true** if required, **false** otherwise. The
     *     error code type is defined in [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isTryAENeeded(): boolean;

    /**
     * Starts to execute Try AE.
     *
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    startTryAE(): void;

    /**
     * Stops the execution of Try AE.
     *
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    stopTryAE(): void;

    /**
     * Subscribes to Try AE change events to obtain real-time Try AE parameters. This API uses an asynchronous callback
     * to return the result.
     *
     * @param { 'tryAEInfoChange' } type - Event type. The value is fixed at **'tryAEInfoChange'**.
     * @param { AsyncCallback<TryAEInfo> } callback - Callback used to return the Try AE parameters.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'tryAEInfoChange', callback: AsyncCallback<TryAEInfo>): void;

    /**
     * Subscribes try AE info event callback.
     *
     * @param { AsyncCallback<TryAEInfo> } callback - Callback used to get the try AE info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onTryAEInfoChange(callback: AsyncCallback<TryAEInfo>): void;

    /**
     * Unsubscribes from Try AE change events.
     *
     * @param { 'tryAEInfoChange' } type - Event type. The value is fixed at **'tryAEInfoChange'**.
     * @param { AsyncCallback<TryAEInfo> } callback - Callback, which is optional and is used to match **callback** in
     *     **on('tryAEInfoChange')**.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'tryAEInfoChange', callback?: AsyncCallback<TryAEInfo>): void;

    /**
     * Unsubscribes from try AE info event callback.
     *
     * @param { AsyncCallback<TryAEInfo> } [callback] - Callback used to get the try AE info.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offTryAEInfoChange(callback?: AsyncCallback<TryAEInfo>): void;

    /**
     * Obtains the supported time-lapse shooting interval range.
     *
     * @returns { Array<int> } Interval range, in ms. The value depends on the underlying capability. If the operation
     *     fails, an error code defined in [CameraErrorCode]{@link camera.CameraErrorCode} is
     *     returned.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getSupportedTimeLapseIntervalRange(): Array<int>;

    /**
     * Obtains the current time-lapse shooting interval.
     *
     * @returns { int } Shooting interval, in ms.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getTimeLapseInterval(): int;

    /**
     * Sets a time-lapse shooting interval.
     *
     * @param { int } interval - Shooting interval, in units of ms, the supported range can be obtained by calling
     *     [getSupportedTimeLapseIntervalRange]{@link camera.TimeLapsePhotoSession.getSupportedTimeLapseIntervalRange}
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setTimeLapseInterval(interval: int): void;

    /**
     * Obtains the time-lapse shooting state.
     *
     * @returns { TimeLapseRecordState } Shooting state. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getTimeLapseRecordState(): TimeLapseRecordState;

    /**
     * Sets the time-lapse shooting state.
     *
     * @param { TimeLapseRecordState } state - Shooting state.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setTimeLapseRecordState(state: TimeLapseRecordState): void;

    /**
     * Obtains the time-lapse preview type.
     *
     * @returns { TimeLapsePreviewType } Preview type. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getTimeLapsePreviewType(): TimeLapsePreviewType;

    /**
     * Sets the time-lapse preview type.
     *
     * @param { TimeLapsePreviewType } type - Preview type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setTimeLapsePreviewType(type: TimeLapsePreviewType): void;
  }

  /**
   * Control center session object.
   *
   * @extends Beauty, Aperture [since 20 - 24]
   * @extends Beauty, Aperture, ColorEffect [since 26.0.0]
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface ControlCenterSession extends Beauty, Aperture, ColorEffect {
    /**
     * Release control center session object.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * Checks whether auto-framing is supported.
     *
     * @returns { boolean } Is auto-framing supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    isAutoFramingSupported(): boolean;

    /**
     * Gets the status of auto-framing effect.
     *
     * @returns { boolean } Is auto-framing active.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    getAutoFramingStatus(): boolean;

    /**
     * Enable auto-framing effect.
     *
     * @param { boolean } enabled enable auto-framing effect if TRUE.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 24 dynamic&static
     */
    enableAutoFraming(enabled: boolean): void;

    /**
     * Gets the current camera device.
     *
     * @returns { CameraDevice } the current camera device.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400104 - Session not running.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getCurrentDevice(): CameraDevice;

    /**
     * Sets the camera to be used as a camera at the specified position.
     *
     * @param { CameraPosition } position - The positon used for the camera.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    usedAsPosition(position: CameraPosition): void;

    /**
     * Gets the control center height.
     *
     * @returns { double } the control center height, in units of vp.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getControlCenterHeight(): double;
  }

  /**
   * Describes the accuracy of depth data.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum DepthDataAccuracy {
    /**
     * Relative accuracy, which is the depth map calculated based on the disparity.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    DEPTH_DATA_ACCURACY_RELATIVE = 0,

    /**
     * Absolute accuracy, which is the depth map calculated from distance measurement.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    DEPTH_DATA_ACCURACY_ABSOLUTE = 1
  }

  /**
   * Enumerates the quality levels of depth data.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum DepthDataQualityLevel {
    /**
     * The depth map is of poor quality and cannot be used for blurring.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    DEPTH_DATA_QUALITY_BAD = 0,

    /**
     * The depth map is of average quality and cannot be used for high-quality blurring.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    DEPTH_DATA_QUALITY_FAIR = 1,

    /**
     * The depth map is of high quality and can be used for high-quality blurring.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    DEPTH_DATA_QUALITY_GOOD = 2
  }

  /**
   * Describes the profile of depth data. It inherits from [Profile]{@link camera.Profile}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface DepthProfile {
    /**
     * Camera output format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly format: CameraFormat;

    /**
     * Accuracy of the depth data, which can be either relative accuracy or absolute accuracy.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly dataAccuracy: DepthDataAccuracy;

    /**
     * Depth data resolution.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly size: Size;
  }

  /**
   * Describes a depth data object.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface DepthData {
    /**
     * Camera output format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly format: CameraFormat;

    /**
     * Depth map.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly depthMap: image.PixelMap;

    /**
     * Quality level of the depth map.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly qualityLevel: DepthDataQualityLevel;

    /**
     * Accuracy of the depth data, which can be either relative accuracy or absolute accuracy.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly dataAccuracy: DepthDataAccuracy;

    /**
     * Releases depth data output resources. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * Implements depth data output. It inherits from [CameraOutput]{@link camera.CameraOutput}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface DepthDataOutput extends CameraOutput {
    /**
     * Starts depth data output. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * Stops depth data output. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * Subscribes to depth data availability events. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'depthDataAvailable' } type - Event type. The value is fixed at **'depthDataAvailable'**. The event can
     *     be listened for when a depthDataOutput instance is created.
     * @param { AsyncCallback<DepthData> } callback - Callback used to listen for depth data.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'depthDataAvailable', callback: AsyncCallback<DepthData>): void;

    /**
     * Subscribes to depth data objects available event callback.
     *
     * @param { AsyncCallback<DepthData> } callback - Callback used to get the available DepthData objects.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onDepthDataAvailable(callback: AsyncCallback<DepthData>): void;

    /**
     * Unsubscribes from depth data availability events.
     *
     * @param { 'depthDataAvailable' } type - Event type. The value is fixed at **'depthDataAvailable'**. The event can
     *     be listened for when a depthDataOutput instance is created.
     * @param { AsyncCallback<DepthData> } callback - Callback used to return the result. If this parameter is specified
     *     , the subscription to the specified event with the specified callback is canceled. (The callback object
     *     cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks
     *     are canceled.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'depthDataAvailable', callback?: AsyncCallback<DepthData>): void;

    /**
     * Unsubscribes from depth data objects available event callback.
     *
     * @param { AsyncCallback<DepthData> } [callback] - Callback used to get the available DepthData objects.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offDepthDataAvailable(callback?: AsyncCallback<DepthData>): void;

    /**
     * Subscribes to DepthDataOutput error events. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     depthDataOutput instance is created.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Subscribes to error events.
     *
     * @param { ErrorCallback } callback - Callback used to get the depth data output errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from DepthDataOutput error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     depthDataOutput instance is created.
     * @param { ErrorCallback } callback - Callback used to return the result. If this parameter is specified, the
     *     subscription to the specified event with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Unsubscribes from error events.
     *
     * @param { ErrorCallback } [callback] - Callback used to get the depth data output errors.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;
  }

  /**
   * A class for querying depth fusion capabilities.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  interface DepthFusionQuery {
    /**
     * Checks whether depth fusion is supported.
     *
     * @returns { boolean } Check result for the support of depth fusion. **true** if supported, **false** otherwise.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    isDepthFusionSupported(): boolean;

    /**
     * Obtains the depth fusion threshold.
     *
     * @returns { Array<double> } Depth fusion threshold.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    getDepthFusionThreshold(): Array<double>;
  }

  /**
   * Depth fusion class. It inherits from [DepthFusionQuery]{@link camera.DepthFusionQuery}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  interface DepthFusion extends DepthFusionQuery {
    /**
     * Checks whether depth fusion is enabled.
     *
     * @returns { boolean } Check result for whether depth fusion is enabled. **true** if enabled, **false** otherwise.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    isDepthFusionEnabled(): boolean;

    /**
     * Enables depth fusion.
     *
     * @param { boolean } enabled - Whether to enable depth fusion. **true** to enable, **false** otherwise.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    enableDepthFusion(enabled: boolean): void;
  }

  /**
   * Enumerates the color reservation types.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  enum ColorReservationType {
    /**
     * No color reservation.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Portrait color reservation.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    PORTRAIT = 1
  }

  /**
   * Provides APIs for querying the color retention type supported by the device.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  interface ColorReservationQuery {
    /**
     * Obtains the supported color reservation types.
     *
     * @returns { Array<ColorReservationType> } Array of color reservation types supported.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    getSupportedColorReservationTypes(): Array<ColorReservationType>;
  }

  /**
   * ColorReservation extends [ColorReservationQuery]{@link camera.ColorReservationQuery}
   * Provides API for obtaining and setting a color reservation type.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  interface ColorReservation extends ColorReservationQuery {
    /**
     * Obtains the color reservation type in use.
     *
     * @returns { ColorReservationType } Color reservation type.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    getColorReservation(): ColorReservationType;

    /**
     * Sets a color reservation type. Before the setting, call
     * [getSupportedColorReservationTypes]{@link camera.ColorReservationQuery.getSupportedColorReservationTypes} to
     * obtain the supported color reservation types.
     *
     * @param { ColorReservationType } type - Color reservation type, which is obtained by calling
     *     [getSupportedColorReservationTypes]{@link camera.ColorReservationQuery.getSupportedColorReservationTypes}.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    setColorReservation(type: ColorReservationType): void;
  }

  /**
   * Quick thumbnail object
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  interface QuickThumbnail {
    /**
     * capture id.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    readonly captureId: int;

    /**
     * Thumbnail image.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    thumbnailImage: image.PixelMap;

    /**
     * Release quick thumbnail object.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * 枚举，镜头并发类型。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 18 dynamic
   * @since 23 static
   */
  enum CameraConcurrentType {
    /**
     * 镜头全量能力并发。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    CAMERA_FULL_CAPABILITY = 1,

    /**
     * 镜头受限能力并发。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    CAMERA_LIMITED_CAPABILITY = 0
   }

  /**
   * 相机的输出并发能力信息。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 18 dynamic
   * @since 23 static
   */
  interface CameraConcurrentInfo {
    /**
     * 相机并发设备。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    readonly device: CameraDevice;

    /**
     * 相机支持的模式。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    readonly modes: Array<SceneMode>;

    /**
     * 相机对应模式的输出能力集。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    readonly outputCapabilities: Array<CameraOutputCapability>;

    /**
     * 镜头并发类型。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    readonly type: CameraConcurrentType;
  }

  /**
   * Enum for auxiliary status.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  enum AuxiliaryStatus {
    /**
     * Auxiliary locked.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    LOCKED = 0,

    /**
     * Turn on auxiliary.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    ON = 1,

    /**
     * Turn off auxiliary.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    OFF = 2
   }

  /**
   * Enum for auxiliary type.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  enum AuxiliaryType {
    /**
     * Contract lens.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    CONTRACT_LENS = 0
   }
  /**
   * 枚举，光学防抖（Optical Image Stabilization）模式。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum OISMode {  
    /**
     * 光学防抖关闭。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    OFF = 0,

    /**
     * 光学防抖自动控制。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    AUTO = 1,

    /**
     * 光学防抖由应用控制。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    CUSTOM = 2
  }
  /**
   * 枚举，光学防抖（OIS）轴向。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum OISAxes {  
    /**
     * 俯仰轴。相控制相机机身上下旋转，即机身围绕与镜头水平方向的轴旋转。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    PITCH = 0,

    /**
     * 偏航轴。控制相机机身左右旋转，即机身围绕与镜头垂直方向的轴旋转。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    YAW = 1
  }
  /**
   * OIS (Optical Image Stabilization) query interface.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface OISQuery {  
    /**
     * Checks if the specified OIS mode is supported.
     *
     * @param { OISMode } mode - The OIS mode to check.
     * @returns { boolean } Whether the mode is supported.
     * @throws { BusinessError } 7400102 - Operation not allowed, the inputDevice or the session is abnormal.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    isOISModeSupported(mode: OISMode): boolean;

    /**
     * Gets the supported bias range for the specified OIS axis.
     *
     * @param { OISAxes } oisAxis - The OIS axis.
     * @returns { Array<double> } The bias range.
     * @throws { BusinessError } 7400102 - Operation not allowed, the inputDevice or the session is abnormal.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    getSupportedOISBiasRange(oisAxis: OISAxes): Array<double>;

    /**
     * Gets the bias step for the specified OIS axis.
     *
     * @param { OISAxes } oisAxis - The OIS axis.
     * @returns { double } The bias step value.
     * @throws { BusinessError } 7400102 - Operation not allowed, the inputDevice or the session is abnormal.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    getSupportedOISBiasStep(oisAxis: OISAxes): double;

    /**
     * Gets the current OIS mode.
     *
     * @returns { OISMode } The current OIS mode.
     * @throws { BusinessError } 7400102 - Operation not allowed, the inputDevice or the session is abnormal.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    getCurrentOISMode(): OISMode;

    /**
     * Gets the current custom bias value for the specified OIS axis.
     *
     * @param { OISAxes } oisAxis - The OIS axis
     * @returns { double } The current bias value.
     * @throws { BusinessError } 7400102 - Operation not allowed, the inputDevice or the session is abnormal.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    getCurrentCustomOISBias(oisAxis: OISAxes): double;
  }

  /**
   * OIS (Optical Image Stabilization) interface.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface OIS extends OISQuery {
    /**
     * Sets the OIS mode.
     *
     * @param { OISMode } mode - The OIS mode to set.
     * @throws { BusinessError } 7400102 - Operation not allowed, the inputDevice or the session is abnormal.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    setOISMode(mode: OISMode): void;

    /**
     * Sets custom OIS bias values for each axis.
     *
     * @param { double } pitch - Bias value for pitch axis.
     * @param { double } yaw - Bias value for yaw axis.
     * @throws { BusinessError } 7400102 - Operation not allowed, the inputDevice or the session is abnormal.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    setOISModeCustom(pitch: double, yaw: double): void;
  }

  /**
   * 表示Car设备摄像头位置的枚举。
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum AutomotiveCameraPosition {
    /**
     * Car设备外部其他位置摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTOMOTIVE_CAMERA_POSITION_EXTERIOR_OTHER = 0,

    /**
     * Car设备外部前侧摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTOMOTIVE_CAMERA_POSITION_EXTERIOR_FRONT = 1,

    /**
     * Car设备外部后侧摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTOMOTIVE_CAMERA_POSITION_EXTERIOR_REAR = 2,

    /**
     * Car设备外部左侧摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTOMOTIVE_CAMERA_POSITION_EXTERIOR_LEFT = 3,

    /**
     * Car设备外部右侧摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTOMOTIVE_CAMERA_POSITION_EXTERIOR_RIGHT = 4,

    /**
     * Car设备内部其他位置摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTOMOTIVE_CAMERA_POSITION_INTERIOR_OTHER = 5,

    /**
     * Car设备内部第一排左侧摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTOMOTIVE_CAMERA_POSITION_INTERIOR_ROW_1_LEFT = 6,

    /**
     * Car设备内部第一排中央摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTOMOTIVE_CAMERA_POSITION_INTERIOR_ROW_1_CENTER = 7,

    /**
     * Car设备内部第一排右侧摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTOMOTIVE_CAMERA_POSITION_INTERIOR_ROW_1_RIGHT = 8,

    /**
     * Car设备内部第二排左侧摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTOMOTIVE_CAMERA_POSITION_INTERIOR_ROW_2_LEFT = 9,

    /**
     * Car设备内部第二排中央摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTOMOTIVE_CAMERA_POSITION_INTERIOR_ROW_2_CENTER = 10,

    /**
     * Car设备内部第二排右侧摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTOMOTIVE_CAMERA_POSITION_INTERIOR_ROW_2_RIGHT = 11,

    /**
     * Car设备内部第三排左侧摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTOMOTIVE_CAMERA_POSITION_INTERIOR_ROW_3_LEFT = 12,

    /**
     * Car设备内部第三排中央摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTOMOTIVE_CAMERA_POSITION_INTERIOR_ROW_3_CENTER = 13,

    /**
     * Car设备内部第三排右侧摄像头。
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTOMOTIVE_CAMERA_POSITION_INTERIOR_ROW_3_RIGHT = 14
  }
}

export default camera;