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
 * @file
 * @kit CameraKit
 */

import { ErrorCallback, AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/BaseContext';
import image from './@ohos.multimedia.image';
import type colorSpaceManager from './@ohos.graphics.colorSpaceManager';
import photoAccessHelper from './@ohos.file.photoAccessHelper';

/**
 * The module provides a set of camera service APIs for you to easily develop a camera application. The application can 
 * access and operate the camera hardware to implement basic operations, such as preview, taking photos, and recording 
 * videos. It can also perform more operations, for example, controlling the flash and exposure time, and focusing or 
 * adjusting the focus.
 *
 * @syscap SystemCapability.Multimedia.Camera.Core
 * @atomicservice [since 12]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace camera {
  /**
   * Obtains a CameraManager instance. This API returns the result synchronously.
   *
   * @param { Context } context - Application context.
   * @returns { CameraManager } CameraManager instance obtained.
   * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
   * @throws { BusinessError } 7400201 - Camera service fatal error.
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  function getCameraManager(context: Context): CameraManager;

  /**
   * Enumerates the camera statuses.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum CameraStatus {
    /**
     * A camera appears.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_STATUS_APPEAR = 0,

    /**
     * The camera disappears.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_STATUS_DISAPPEAR = 1,

    /**
     * The camera is available.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_STATUS_AVAILABLE = 2,

    /**
     * The camera is unavailable.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_STATUS_UNAVAILABLE = 3
  }

  /**
   * Enumerates the fold states available for a fordable device.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FoldStatus {
    /**
     * The device is not foldable.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    NON_FOLDABLE = 0,

    /**
     * The device is fully unfolded.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    EXPANDED = 1,

    /**
     * The device is folded.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    FOLDED = 2
  }

  /**
   * Enumerates the arrangement modes of the sensor color filter.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum SensorColorFilterArrangement {  
    /**
     * Blue-green-green-red filter arrangement.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    BGGR = 0,

    /**
     * Green-blue-red-green filter arrangement.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    GBRG = 1,

    /**
     * Green-red-blue-green arrangement mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    GRBG = 2,

    /**
     * Red-green-green-blue arrangement mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    RGGB = 3
  }

  /**
   * Describes the camera profile.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Profile {
    /**
     * Output format.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly format: CameraFormat;

    /**
     * Resolution.
     * 
     * The size setting corresponds to the camera's resolution width and height, rather than the actual dimensions of 
     * the output image.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly size: Size;
  }

  /**
   * Describes the frame rate range.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface FrameRateRange {
    /**
     * Minimum frame rate, in fps.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly min: int;

    /**
     * Maximum frame rate, in fps.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly max: int;
  }

  /**
   * Describes the video configuration information. It inherits from [Profile]{@link camera.Profile}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface VideoProfile extends Profile {
    /**
     * Frame rate range, in units of frames per second (FPS).
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly frameRateRange: FrameRateRange;
  }

  /**
   * Describes the camera output capability.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CameraOutputCapability {
    /**
     * Supported preview profiles.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly previewProfiles: Array<Profile>;

    /**
     * Supported photo profiles.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly photoProfiles: Array<Profile>;

    /**
     * Supported video profiles.
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
     * Supported metadata object types.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly supportedMetadataObjectTypes: Array<MetadataObjectType>;
  }

  /**
   * Describes the effect status information of a camera controller.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface ControlCenterStatusInfo {
    /**
     * Effect type of the camera controller.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readonly effectType: ControlCenterEffectType;
   
    /**
     * Whether the camera controller is activated. **true** if activated, **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readonly isActive: boolean;
  }

  /**
   * Enumerates the camera error codes,
   * which are returned when an API call is incorrect or the **on()** API is used to listen for the error status.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum CameraErrorCode {
    /**
     * A parameter is missing or the parameter type is incorrect.
     * 
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    INVALID_ARGUMENT = 7400101,

    /**
     * The operation is not allowed.
     * 
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    OPERATION_NOT_ALLOWED = 7400102,

    /**
     * The session is not configured.
     * 
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    SESSION_NOT_CONFIG = 7400103,

    /**
     * The session is not running.
     * 
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    SESSION_NOT_RUNNING = 7400104,

    /**
     * The session configuration is locked.
     * 
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    SESSION_CONFIG_LOCKED = 7400105,

    /**
     * The device setting is locked.
     * 
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_SETTING_LOCKED = 7400106,

    /**
     * The device is already started.
     * 
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CONFLICT_CAMERA = 7400107,

    /**
     * The camera is disabled for security reasons.
     * 
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_DISABLED = 7400108,

    /**
     * The camera is preempted.
     * 
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_PREEMPTED = 7400109,

    /**
     * The configuration conflicts with the current configuration.
     * 
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    UNRESOLVED_CONFLICTS_WITH_CURRENT_CONFIGURATIONS = 7400110,

    /**
     * The camera service is abnormal.
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
   * Implements camera management. Before calling any API in CameraManager, you must use 
   * [getCameraManager]{@link camera.getCameraManager} to obtain a CameraManager instance.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CameraManager {
    /**
     * Obtains the supported camera devices. This API returns the result synchronously.
     *
     * @returns { Array<CameraDevice> } Array of camera devices supported.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    getSupportedCameras(): Array<CameraDevice>;

    /**
     * Obtains the output capability supported by a camera device. This API returns the result synchronously.
     *
     * @param { CameraDevice } camera - Camera device.
     * @returns { CameraOutputCapability } Camera output capability obtained.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode)
     */
    getSupportedOutputCapability(camera: CameraDevice): CameraOutputCapability;

    /**
     * Obtains the scene modes supported by a camera device. This API returns the result synchronously.
     *
     * @param { CameraDevice } camera - Camera device.
     * @returns { Array<SceneMode> } Array of scene modes supported.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getSupportedSceneModes(camera: CameraDevice): Array<SceneMode>;

    /**
     * Obtains the output capability supported by a camera device in a given scene mode. This API returns the result
     * synchronously.
     *
     * @param { CameraDevice } camera - Camera device.
     * @param { SceneMode } mode - Scene mode.
     * @returns { CameraOutputCapability } Camera output capability obtained.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode): CameraOutputCapability;

    /**
     * Obtains the complete output capabilities supported by a specified camera in a specified mode, including YUV, HEIF
     * , and HDR.
     *
     * > **NOTE**
     * >
     * > Before using YUV, HEIF, or HDR, you need to explicitly call this method to ensure that the complete output
     * > capabilities are obtained.
     *
     * @param { CameraDevice } camera - Camera device.
     * @param { SceneMode } mode - Scene mode.
     * @returns { CameraOutputCapability } Camera output capability obtained.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    getSupportedFullOutputCapability(camera: CameraDevice, mode: SceneMode): CameraOutputCapability;

    /**
     * Checks whether this camera is muted.
     *
     * @returns { boolean } Check result for whether the camera is muted. **true** if muted, **false** otherwise.
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
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API. [since 13]
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
     * @permission ohos.camera.CAMERA_CONTROL
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
     * Creates a **CameraInput** instance with the specified **CameraDevice** instance. This API returns the result
     * synchronously.
     * Before calling this API, call [getSupportedCameras]{@link camera.CameraManager.getSupportedCameras} to obtain the
     * list of supported camera devices, select the camera device that meets the requirements based on the actual usage
     * scenario, and then create the **CameraInput** instance.
     *
     * @permission ohos.permission.CAMERA
     * @param { CameraDevice } camera - **CameraDevice** instance, which is obtained through
     *     [getSupportedCameras]{@link camera.CameraManager.getSupportedCameras}.
     * @returns { CameraInput } **CameraInput** instance created. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
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
     * Creates a **CameraInput** instance with the specified camera position and type. This API returns the result
     * synchronously.
     * Before calling this API, specify the camera position and type based on the usage scenario. For example, open the
     * front camera for the selfie feature
     *
     * @permission ohos.permission.CAMERA
     * @param { CameraPosition } position - Camera position. You need to obtain the supported camera object by calling
     *     [getSupportedCameras]{@link camera.CameraManager.getSupportedCameras} and then obtain the device position
     *     information based on the returned camera object.
     * @param { CameraType } type - Camera type. You need to obtain the supported camera object by calling
     *     [getSupportedCameras]{@link camera.CameraManager.getSupportedCameras} and then obtain the camera type based
     *     on the returned camera object.
     * @returns { CameraInput } **CameraInput** instance created. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
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
     * Creates a **PreviewOutput** instance. This API returns the result synchronously.
     *
     * @param { Profile } profile - Supported preview profile, which is obtained through
     *     [getSupportedOutputCapability]{@link camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode)}.
     * @param { string } surfaceId - Surface ID, which is obtained from
     *     [XComponent]{@link XComponent} or [ImageReceiver]{@link @ohos.multimedia.image:image.ImageReceiver}.
     * @returns { PreviewOutput } **PreviewOutput** instance created. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    createPreviewOutput(profile: Profile, surfaceId: string): PreviewOutput;

    /**
     * Creates a **PreviewOutput** instance without configuration. This API returns the result synchronously. It must be
     * used with [preconfig]{@link camera.PhotoSession.preconfig}.
     *
     * @param { string } surfaceId - Surface ID, which is obtained from
     *     [XComponent]{@link XComponent} or [ImageReceiver]{@link @ohos.multimedia.image:image.ImageReceiver}.
     * @returns { PreviewOutput } **PreviewOutput** instance created. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    createPreviewOutput(surfaceId: string): PreviewOutput;

    /**
     * Creates a **PhotoOutput** instance. This API returns the result synchronously.
     *
     * > **NOTE**
     * >
     * > - This API can only be used to create a **PhotoOutput** object in JPEG format.
     *
     * @param { Profile } profile - Supported photo profile, which is obtained through
     *     [getSupportedOutputCapability]{@link camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode)}.
     * @param { string } surfaceId - Surface ID, which is obtained from
     *     [ImageReceiver]{@link @ohos.multimedia.image:image.ImageReceiver}.
     * @returns { PhotoOutput } **PhotoOutput** instance created. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.CameraManager.createPhotoOutput(profile?: Profile)
     */
    createPhotoOutput(profile: Profile, surfaceId: string): PhotoOutput;

    /**
     * Creates a **PhotoOutput** instance. This API returns the result synchronously.
     *
     * @param { Profile } profile - Supported photo profile, which is obtained through
     *     [getSupportedOutputCapability]{@link camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode)}.
     *     <br>In API version 11, this parameter is mandatory. Starting from API version 12, it will overwrite the
     *     preconfigured parameters passed in through [preconfig]{@link camera.PhotoSession.preconfig}.
     * @returns { PhotoOutput } **PhotoOutput** instance created. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    createPhotoOutput(profile?: Profile): PhotoOutput;

    /**
     * Creates a **VideoOutput** instance. This API returns the result synchronously.
     * In video recording mode, if SDR or HDR VIVID is enabled, the camera format and color space must be configured
     * according to the relationships specified in the table below. Configurations that do not match the table will
     * cause issues such as preview exceptions.
     * | SDR/HDR Photo Capture        | CameraFormat             | ColorSpace       |
     * |--------------------|--------------------------|------------------|
     * | SDR                | CAMERA_FORMAT_YUV_420_SP | BT709_LIMIT      |
     * | HDR_VIVID          | CAMERA_FORMAT_YCRCB_P010<br>CAMERA_FORMAT_YCBCR_P010 | BT2020_HLG_LIMIT<br>BT2020_HLG_FULL |
     *
     * @param { VideoProfile } profile - Supported video profile, which is obtained through
     *     [getSupportedOutputCapability]{@link camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode)}.
     * @param { string } surfaceId - Surface ID, which is obtained from [AVRecorder]{@link @ohos.multimedia.media:media}.
     * @returns { VideoOutput } **VideoOutput** instance created. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    createVideoOutput(profile: VideoProfile, surfaceId: string): VideoOutput;

    /**
     * Creates a **VideoOutput** instance without configuration. This API returns the result synchronously. It must be
     * used with [preconfig]{@link camera.VideoSession.preconfig}.
     *
     * @param { string } surfaceId - Surface ID, which is obtained from [AVRecorder]{@link @ohos.multimedia.media:media}.
     * @returns { VideoOutput } **VideoOutput** instance created. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    createVideoOutput(surfaceId: string): VideoOutput;

    /**
     * Creates a **MetadataOutput** instance. This API returns the result synchronously.
     *
     * @param { Array<MetadataObjectType> } metadataObjectTypes - Metadata object types, which are obtained through
     *     [getSupportedOutputCapability]{@link camera.CameraManager.getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode)}.
     * @returns { MetadataOutput } **MetadataOutput** instance created. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
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
     * Creates a **CaptureSession** instance. This API returns the result synchronously.
     *
     * @returns { CaptureSession } **CaptureSession** instance created. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.CameraManager.createSession
     */
    createCaptureSession(): CaptureSession;

    /**
     * Creates a **Session** instance with a given scene mode. This API returns the result synchronously.
     *
     * @param { SceneMode } mode - Scene mode. The API does not take effect if the input parameter is invalid (for
     *     example, the value is out of range, null, or undefined).
     * @returns { T } **Session** instance created. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
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
     * Subscribes to camera status events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'cameraStatus' } type - Event type. The value is fixed at **'cameraStatus'**. The event can be listened
     *     for when a **CameraManager** instance is obtained. This event is triggered and the corresponding information
     *     is returned only when the camera device is enabled or disabled.
     * @param { AsyncCallback<CameraStatusInfo> } callback - Callback used to return the camera status change.
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
     * Unsubscribes from camera status events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'cameraStatus' } type - Event type. The value is fixed at **'cameraStatus'**. The event can be listened
     *     for when a **CameraManager** instance is obtained.
     * @param { AsyncCallback<CameraStatusInfo> } callback - Callback used to return the result. If this parameter is
     *     specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
     * Subscribes to fold status change events of the foldable device. This API uses an asynchronous callback to return
     * the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'foldStatusChange' } type - Event type. The value is fixed at **'foldStatusChange'**. The event is
     *     triggered when the fold state of the foldable device changes.
     * @param { AsyncCallback<FoldStatusInfo> } callback - Callback used to return the fold state information about the
     *     foldable device.
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
     * Unsubscribes from fold state change events of the foldable device.
     *
     * @param { 'foldStatusChange' } type - Event type. The value is fixed at **'foldStatusChange'**. The event is
     *     triggered when the fold state of the foldable device changes.
     * @param { AsyncCallback<FoldStatusInfo> } callback - Callback used to return the fold state information about the
     *     foldable device. If this parameter is specified, the subscription to the specified event with the specified
     *     callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to
     *     the specified event with all the callbacks are canceled.
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
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API. [since 13]
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
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API. [since 13]
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
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API. [since 12]
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
     * Creates a deferred PreviewOutput instance.
     *
     * @param { Profile } profile - Preview output profile.
     * @returns { PreviewOutput } the PreviewOutput instance.
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
     * Checks whether the camera device supports the flashlight.
     *
     * @returns { boolean } Check result for the support of the flashlight. **true** if supported, **false** otherwise.
     *     If the API call fails, undefined is returned.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    isTorchSupported(): boolean;

    /**
     * Checks whether a flashlight mode is supported.
     *
     * @param { TorchMode } mode - Flashlight mode. If the input parameter is null or undefined, it is treated as 0 and
     *     the flashlight is turned off.
     * @returns { boolean } Check result for the support of the flashlight mode. **true** if supported, **false**
     *     otherwise. If the API call fails, undefined is returned.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    isTorchModeSupported(mode: TorchMode): boolean;

    /**
     * Obtains the flashlight mode of this camera device.
     *
     * @returns { TorchMode } Flashlight mode.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getTorchMode(): TorchMode;

    /**
     * Sets the flashlight mode.
     *
     * @param { TorchMode } mode - Flashlight mode. If the input parameter is null or undefined, it is treated as 0 and
     *     the flashlight is turned off.
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
     * Checks whether the device supports flashlight brightness control.
     *
     * @returns { boolean } Whether the device supports flashlight brightness control. Returns **true** if supported,
     *     **false** if not. If the API call fails, undefined is returned.
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
     * Sets the torch mode to {@link camera.TorchMode.ON} with the specified torch level.
     *
     * @param { double } torchLevel - the specified torch level.
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
     * Subscribes to flashlight status change events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'torchStatusChange' } type - Event type. The value is fixed at **'torchStatusChange'**. The event can be
     *     listened for when a **CameraManager** instance is obtained. Currently, this event is triggered only in the
     *     following scenarios: The flashlight is turned on or turned off, or becomes unavailable or available.
     * @param { AsyncCallback<TorchStatusInfo> } callback - Callback used to return the flashlight status.
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
     * Unsubscribes from flashlight status change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'torchStatusChange' } type - Event type. The value is fixed at **'torchStatusChange'**. The event can be
     *     listened for when a **CameraManager** instance is obtained.
     * @param { AsyncCallback<TorchStatusInfo> } callback - Callback used to return the result. If this parameter is
     *     specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
     * Obtains the specified camera based on the camera position and type.
     * Obtains the camera lens of the specified [CameraPosition]{@link camera.CameraPosition}
     * and [CameraType]{@link camera.CameraType}. If the returned result is undefined, the
     * camera lens is not found on the current device.
     *
     * @param { CameraPosition } position - Camera position.
     * @param { CameraType } type - Camera type.
     * @returns { CameraDevice } Camera obtained.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    getCameraDevice(position: CameraPosition, type: CameraType): CameraDevice;

    /**
     * Obtains the concurrency information of the specified cameras. If the return value is an empty array, concurrency
     * is not supported.
     *
     * @param { Array<CameraDevice> } cameras - Array of **CameraDevice** objects. You are advised to use the front and
     *     rear cameras obtained by calling [getCameraDevice]{@link camera.CameraManager.getCameraDevice}.
     * @returns { Array<CameraConcurrentInfo> } Array of concurrency information corresponding to the provided
     *     CameraDevice objects, with a one-to-one mapping.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    getCameraConcurrentInfos(cameras: Array<CameraDevice>): Array<CameraConcurrentInfo>;

    /**
     * Obtains the list of cameras that meet the search criteria based on the camera position, camera types, and
     * connection type.
     *
     * @param { CameraPosition } position - Camera position.
     * @param { Array<CameraType> } types - Array of camera types.
     * @param { ConnectionType } connectType - Camera connection type.
     * @returns { Array<CameraDevice> } Array of cameras that meet the search criteria.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    getCameraDevices(position: CameraPosition, types: Array<CameraType>, connectType: ConnectionType): Array<CameraDevice>;
  }

  /**
   * Describes the flashlight status information.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface TorchStatusInfo {
    /**
     * Whether the flashlight is available. **true** if available, **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly isTorchAvailable: boolean;

    /**
     * Whether the flashlight is activated. **true** if activated, **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly isTorchActive: boolean;

    /**
     * Flashlight brightness level. The value range is [0, 1]. A larger value indicates a greater luminance.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly torchLevel: double;
  }

  /**
   * Enumerates the flashlight modes.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  enum TorchMode {
    /**
     * The flashlight is off.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    OFF = 0,

    /**
     * The flashlight is on.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    ON = 1,

    /**
     * The system automatically adjusts the flashlight brightness according to the environment.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    AUTO = 2
  }

  /**
   * Describes the camera status information.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CameraStatusInfo {
    /**
     * Camera device.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    camera: CameraDevice;

    /**
     * Camera status.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    status: CameraStatus;
  }

  /**
   * Describes the fold state information about a foldable device.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface FoldStatusInfo {
    /**
     * List of cameras supported in the current fold state.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    readonly supportedCameras: Array<CameraDevice>;

    /**
     * Fold state.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    readonly foldStatus: FoldStatus;
  }

  /**
   * Enumerates the camera positions.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum CameraPosition {
    /**
     * A camera that does not have a fixed orientation relative to the device screen.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_POSITION_UNSPECIFIED = 0,

    /**
     * Rear camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_POSITION_BACK = 1,

    /**
     * Front camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_POSITION_FRONT = 2,

    /**
     * Folded camera.
     *
     * This API is supported since API version 11 and deprecated since API version 12.
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
   * Enumerates the camera types.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum CameraType {
    /**
     * Default camera type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_TYPE_DEFAULT = 0,

    /**
     * Wide camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_TYPE_WIDE_ANGLE = 1,

    /**
     * Ultra-wide camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_TYPE_ULTRA_WIDE = 2,

    /**
     * Telephoto camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_TYPE_TELEPHOTO = 3,

    /**
     * Camera with depth of field information.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_TYPE_TRUE_DEPTH = 4,
  }

  /**
   * Enumerates the camera connection types.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ConnectionType {
    /**
     * Built-in camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_CONNECTION_BUILT_IN = 0,

    /**
     * Camera connected using USB.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_CONNECTION_USB_PLUGIN = 1,

    /**
     * Remote camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_CONNECTION_REMOTE = 2
  }

  /**
   * Enumerates the remote camera types.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi [since 10 - 14]
   * @publicapi [since 15 - 18]
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum HostDeviceType {
    /**
     * Unknown type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 10 - 14]
     * @publicapi [since 15 - 18]
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    UNKNOWN_TYPE = 0,

    /**
     * Mobile phone.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 10 - 14]
     * @publicapi [since 15 - 18]
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    PHONE = 0x0E,

    /**
     * Tablet.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 10 - 14]
     * @publicapi [since 15 - 18]
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    TABLET = 0x11
  }

  /**
   * Describes the camera device information.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CameraDevice {
    /**
     * Camera ID.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly cameraId: string;

    /**
     * Camera position.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly cameraPosition: CameraPosition;

    /**
     * Camera type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly cameraType: CameraType;

    /**
     * Camera connection type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly connectionType: ConnectionType;

    /**
     * Remote device name. If no remote device is available, an empty value is returned.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 10 - 14]
     * @publicapi [since 15 - 18]
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly hostDeviceName: string;

    /**
     * Remote device type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 10 - 14]
     * @publicapi [since 15 - 18]
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly hostDeviceType: HostDeviceType;

    /**
     * Camera installation angle, which does not change as the screen rotates. The value range is [0, 360], in degrees.
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
     * Equivalent focal length of the camera lens.
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
     * Whether a camera is a logical camera (consisting of multiple physical cameras). **true** if the camera is a
     * logical camera, **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly isLogicalCamera?: boolean;

    /**
     * List of physical cameras that form the logical camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly constituentCameraDevices?: Array<CameraDevice>;

    /**
     * Actual focal length of the lens.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly lensFocalLength?: double;

    /**
     * Minimum focus distance of the camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly minimumFocusDistance?: double;

    /**
     * Array of lens distortion parameters.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly lensDistortion?: Array<double>;

    /**
     * Array of lens internal parameter calibration parameters.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly lensIntrinsicCalibration?: Array<double>;

    /**
     * Physical dimensions (width and height) of the sensor.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly sensorPhysicalSize?: Array<double>;

    /**
     * Pixel array dimensions (width and height, in pixels) of the sensor.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly sensorPixelArraySize?: Array<int>;

    /**
     * Arrangement mode of the sensor color filter.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    readonly sensorColorFilterArrangement?: SensorColorFilterArrangement;
  }

  /**
   * Describes the image dimensions.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Size {
    /**
     * Image height, in pixels.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    height: int;

    /**
     * Image width, in pixels.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    width: int;
  }

  /**
   * Describes the point coordinates, which are used for focus and exposure configuration.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Point {
    /**
     * X coordinate of a point.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Y coordinate of a point.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    y: double;
  }

  /**
   * Defines the camera input object.
   * It provides camera device information used in [Session]{@link camera.Session}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CameraInput {
    /**
     * Opens this camera device. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the camera device is opened
     *     successfully, **err** is **undefined**; otherwise, **err** is an error object with an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
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
     * Opens this camera device. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Opens this camera device. This API uses a promise to return the result.
     *
     * @param { boolean } isSecureEnabled - Whether to open the camera device in secure mode. **true** to open in secure
     *     mode, **false** otherwise. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @returns { Promise<bigint> } Promise used to return the handle to the camera device in secure mode.
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
     * Closes this camera device. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the camera device is closed
     *     successfully, **err** is **undefined**. Otherwise, **err** is an error object with an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    close(callback: AsyncCallback<void>): void;

    /**
     * Closes this camera device. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * @param { int } time - delay time for turning off camera.
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
     * Subscribes to CameraInput error events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     CameraInput instance is created. This event is triggered and the result is returned when an error occurs on
     *     the camera device. For example, if the camera device is unavailable or a conflict occurs, the error
     *     information is returned.
     * @param { CameraDevice } camera - Camera device.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
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
     * Unsubscribes from CameraInput error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     CameraInput instance is created. This event is triggered and the result is returned when an error occurs on
     *     the camera device. For example, if the camera device is unavailable or a conflict occurs, the error
     *     information is returned.
     * @param { CameraDevice } camera - Camera device.
     * @param { ErrorCallback } callback - Callback used to return the result. If this parameter is specified, only the
     *     corresponding callback will be unregistered (the callback object cannot be an anonymous function); otherwise,
     *     all registered callbacks will be unregistered.
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
     * Subscribes to **CameraInput** occlusion events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'cameraOcclusionDetection' } type - Event type. The value is fixed at **'cameraOcclusionDetection'**.
     *     The event can be listened for when a **CameraInput** instance is created. It is triggered when the occlusion
     *     status of the camera lens changes, and the occlusion status is returned.
     * @param { AsyncCallback<CameraOcclusionDetectionResult> } callback - Callback used to return the occlusion status.
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
     * Unsubscribes from **CameraInput** occlusion events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'cameraOcclusionDetection' } type - Event type. The value is fixed at **'cameraOcclusionDetection'**.
     *     The event can be listened for when a **CameraInput** instance is created. It is triggered when the occlusion
     *     status of the camera lens changes, and the occlusion status is returned.
     * @param { AsyncCallback<CameraOcclusionDetectionResult> } callback - Callback used to return the result. If this
     *     parameter is specified, the subscription to the specified event with the specified callback is canceled. (The
     *     callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with
     *     all the callbacks are canceled.
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
     * Checks whether the physical camera orientation is adjustable in different fold states of the device.
     *
     * @returns { boolean } Check result for whether the physical camera orientation is adjustable. **true** if
     *     adjustable, **false** otherwise. If the API call fails, undefined is returned.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    isPhysicalCameraOrientationVariable(): boolean;

    /**
     * Obtains the physical camera orientation in the current fold state of the device.
     *
     * @returns { int } Physical camera orientation.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    getPhysicalCameraOrientation(): int;

    /**
     * Enables or disables the use of the physical camera orientation.
     *
     * @param { boolean } isUsed - Whether to enable the use of the physical camera orientation. **true** to enable,
     *     **false** otherwise.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    usePhysicalCameraOrientation(isUsed: boolean): void;

    /**
     * Opens the camera with the specified concurrency type. This API uses a promise to return the result.
     *
     * @param { CameraConcurrentType } type - Concurrency type. If the API fails to be called, an error code is
     *     returned.
     * @returns { Promise<void> } Promise that returns no value.
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
   * Enumerates the camera scene modes.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  enum SceneMode {
    /**
     * Normal photo mode. For details, see [PhotoSession]{@link camera.PhotoSession}.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    NORMAL_PHOTO = 1,

    /**
     * Normal record mode. For details, see [VideoSession]{@link camera.VideoSession}.
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
     * Secure mode. For details, see [SecureSession]{@link camera.SecureSession}.
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
   * Enumerates the camera output formats.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum CameraFormat {
    /**
     * RGBA_8888 image.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_FORMAT_RGBA_8888 = 3,

    /**
     * Digital Negative (DNG) image.
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
     * YUV_420_SP image, which corresponds to the NV21 image.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_FORMAT_YUV_420_SP = 1003,

    /**
     * JPEG image.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_FORMAT_JPEG = 2000,

    /**
     * YCBCR_P010 image.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    CAMERA_FORMAT_YCBCR_P010,

    /**
     * YCRCB_P010 image.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    CAMERA_FORMAT_YCRCB_P010 = 2002,

    /**
     * HEIF image.
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
     * Enhanced DNG image format.
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
   * Enumerates the flash modes.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum FlashMode {
    /**
     * The flash is off.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FLASH_MODE_CLOSE = 0,

    /**
     * The flash is on.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FLASH_MODE_OPEN = 1,

    /**
     * The flash mode is auto, indicating that the flash fires automatically depending on the photo capture conditions.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FLASH_MODE_AUTO = 2,

    /**
     * The flash is steady on.
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
   * Provides APIs to obtain the flash information of a camera device, including whether the LCD flash is supported.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface FlashQuery {
    /**
     * Checks whether the camera device has flash.
     *
     * @returns { boolean } Check result for whether the camera device has flash. **true** if it has flash, **false**
     *     otherwise. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    hasFlash(): boolean;

    /**
     * Checks whether a flash mode is supported.
     *
     * @param { FlashMode } flashMode - Flash mode. If the input parameter is null or undefined, it is treated as 0 and
     *     the flash is turned off.
     * @returns { boolean } Check result for the support of the flash mode. **true** if supported, **false** otherwise.
     *     If the operation fails, undefined is returned and an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is thrown.
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
   * Flash extends [FlashQuery]{@link camera.FlashQuery}
   * Provides APIs related to the flash.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Flash extends FlashQuery {
    /**
     * Obtains the flash mode in use.
     *
     * @returns { FlashMode } Flash mode obtained. If the operation fails, undefined is returned and an error code
     *     defined in [CameraErrorCode]{@link camera.CameraErrorCode} is thrown.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getFlashMode(): FlashMode;

    /**
     * Sets a flash mode.
     *
     * Before the setting, do the following checks:
     *
     * 1. Use [hasFlash]{@link camera.FlashQuery.hasFlash} to check whether the camera device has flash.
     * 2. Use [isFlashModeSupported]{@link camera.FlashQuery.isFlashModeSupported} to check whether the camera device supports the flash mode.
     *
     * @param { FlashMode } flashMode - Flash mode. If the input parameter is null or undefined, it is treated as 0 and
     *     the flash is turned off.
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
     * Subscribes flash state change event callback.
     *
     * @param { Callback<FlashState> } callback - Callback used to get the flash state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    onFlashStateChange(callback: Callback<FlashState>): void;

    /**
     * Unsubscribes flash state change event callback.
     *
     * @param { Callback<FlashState> } [callback] - Callback used to get the flash state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    offFlashStateChange(callback?: Callback<FlashState>): void;
  }

  /**
   * Enumerates the flash states.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum FlashState {
    /**
     * The flash is unavailable. This is the default value.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    FLASH_STATE_UNAVAILABLE = 0,

    /**
     * The flash is available.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    FLASH_STATE_READY = 1,

    /**
     * The flash is turned on.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    FLASH_STATE_FLASHING = 2
  }

  /**
   * Enumerates the exposure modes.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ExposureMode {
    /**
     * Unspecified exposure.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    EXPOSURE_MODE_UNSPECIFIED = -1,

    /**
     * Exposure locked. The metering point cannot be set.
     *
     * After this mode is used, the exposure will be locked by default for each photo capture.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    EXPOSURE_MODE_LOCKED = 0,

    /**
     * Auto exposure. The metering point can be set by calling
     * [AutoExposure.setMeteringPoint]{@link camera.AutoExposure.setMeteringPoint}.
     *
     * After this mode is used, it takes effect only for the first photo capture.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    EXPOSURE_MODE_AUTO = 1,

    /**
     * Continuous auto exposure. The metering point cannot be set.
     *
     * After this mode is used, the camera system automatically adjusts the exposure based on the environment changes
     * each time.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    EXPOSURE_MODE_CONTINUOUS_AUTO = 2,

    /**
     * Manual exposure mode.
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
   * Enumerates the exposure states.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum ExposureState {
    /**
     * Exposure is being scanned.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    EXPOSURE_STATE_SCAN = 0,

    /**
     * Exposure is converged.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    EXPOSURE_STATE_CONVERGED = 1
  }

  /**
   * Enumerates the exposure metering modes.
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
     * Matrix metering mode. A wide area of the screen is selected, which is ideal for shooting natural landscapes.
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
     * Center-weighted metering mode. Metering is performed on the entire image, with the center allocated with the
     * maximum weight, which is ideal for shooting portraits.
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
     * Spot metering mode. Metering is performed around 2.5% of the metering points, focusing on the light in a specific
     * small area, such as the eyes of the subject.
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
   * AutoExposureQuery provides APIs to query the automatic exposure feature of a camera device.
   *  >
   * > - In this version, a compatibility change was made that preserved the initial version information of inner
   * > elements. As a result, you might see outer element's @since version number being higher than that of the inner
   * > elements. However, this discrepancy does not affect the functionality of the interface.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface AutoExposureQuery {
    /**
     * Checks whether an exposure mode is supported.
     *
     * @param { ExposureMode } aeMode - Exposure mode. If the input parameter is null or undefined, it is treated as 0
     *     and exposure is locked.
     * @returns { boolean } Check result for the support of the exposure mode. **true** if supported, **false**
     *     otherwise. If the operation fails, undefined is returned and an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is thrown.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    isExposureModeSupported(aeMode: ExposureMode): boolean;

    /**
     * Obtains the exposure compensation values of the camera device.
     *
     * @returns { Array<double> } Array of compensation values. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getExposureBiasRange(): Array<double>;

    /**
     * Checks whether a specified exposure metering mode is supported.
     *
     * @param { ExposureMeteringMode } aeMeteringMode - Exposure metering mode
     * @returns { boolean } Is the exposure metering mode supported.
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
   * AutoExposure inherits from [AutoExposureQuery]{@link camera.AutoExposureQuery}.
   * It provides APIs related to auto exposure.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface AutoExposure extends AutoExposureQuery {
    /**
     * Obtains the exposure mode in use.
     *
     * > **NOTE**
     * >
     * > This API directly returns an invalid value if you have not set the exposure mode using
     * > [setExposureMode]{@link camera.AutoExposure.setExposureMode}.
     *
     * @returns { ExposureMode } Exposure mode obtained. If the operation fails, undefined is returned and an error code
     *     defined in [CameraErrorCode]{@link camera.CameraErrorCode} is thrown.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getExposureMode(): ExposureMode;

    /**
     * Sets an exposure mode. Before the setting, call
     * [isExposureModeSupported]{@link camera.AutoExposureQuery.isExposureModeSupported} to
     * check whether the exposure mode is supported.
     *
     * @param { ExposureMode } aeMode - Exposure mode. If the input parameter is null or undefined, it is treated as 0
     *     and exposure is locked.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400102 - Operation not allowed. [since 19]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setExposureMode(aeMode: ExposureMode): void;

    /**
     * Obtains the metering point of the camera device.
     *
     * @returns { Point } Metering point obtained. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getMeteringPoint(): Point;

    /**
     * Sets the metering point, which is the center point of the metering rectangle. The metering point must be in the
     * coordinate system (0-1), where the top-left corner is {0, 0} and the bottom-right corner is {1, 1}.
     *
     * The coordinate system is based on the horizontal device direction with the device's charging port on the right.
     * If the layout of the preview screen of an application is based on the vertical direction with the charging port
     * on the lower side, the layout width and height are {w, h}, and the touch point is {x, y}, then the coordinate
     * point after conversion is {y/h, 1-x/w}.
     *
     * @param { Point } point - Metering point. The value range of x and y must be within [0, 1]. If a value less than 0
     *     is passed, the value **0** is used. If a value greater than **1** is passed, the value **1** is used.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setMeteringPoint(point: Point): void;

    /**
     * Sets an exposure compensation value (EV).
     * Before the setting, you are advised to use
     * [getExposureBiasRange]{@link camera.AutoExposureQuery.getExposureBiasRange} to obtain the
     * supported values.
     *
     * @param { double } exposureBias - EV. The supported EV range can be obtained by calling
     *     [getExposureBiasRange]{@link camera.AutoExposureQuery.getExposureBiasRange}. If the
     *     value passed is not within the supported range, the nearest critical point is used.<br>Exposure compensation
     *     is adjusted in steps, and the step size may vary across devices due to hardware differences. For example, if
     *     the step size is 0.5, setting a value of 1.2 would result in an actual effective exposure compensation value
     *     of 1.0.<br>If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400102 - Operation not allowed. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setExposureBias(exposureBias: double): void;

    /**
     * Obtains the exposure value in use.
     *
     * @returns { double } Exposure value obtained. There is a step for EV. For example, if the step is 0.5 and this
     *     parameter is set to 1.2, the EV that takes effect is 1.0.
     *     <br>If the operation fails, an error code defined in [CameraErrorCode]{@link camera.CameraErrorCode} is
     *     returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getExposureValue(): double;

    /**
     * Gets current exposure metering mode.
     *
     * @returns { ExposureMeteringMode } The current exposure metering mode.
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
     * Sets exposure metering mode.
     *
     * @param { ExposureMeteringMode } aeMeteringMode - Exposure metering mode.
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
     * Registers a callback to listen for exposure state changes.
     *
     * @param { Callback<ExposureState> } callback - Callback used to get the exposure state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    onExposureStateChange(callback: Callback<ExposureState>): void

    /**
     * Unregisters the callback used to listen for exposure state changes.
     *
     * @param { Callback<ExposureState> } [callback] - Callback used to get the exposure state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    offExposureStateChange(callback?: Callback<ExposureState>): void
  }

  /**
   * Enumerates the focus modes.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum FocusMode {
    /**
     * Manual focus. The focal length of the camera can be manually set to change the focus position. However, the focal
     * point cannot be set.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FOCUS_MODE_MANUAL = 0,

    /**
     * Continuous auto focus. The focal point cannot be set.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FOCUS_MODE_CONTINUOUS_AUTO = 1,

    /**
     * The flash mode is auto, indicating that the flash fires automatically depending on the photo capture conditions.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FOCUS_MODE_AUTO = 2,

    /**
     * Focus locked. The focal point cannot be set.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FOCUS_MODE_LOCKED = 3
  }

  /**
   * Enumerates the focus states.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum FocusState {
    /**
     * Focusing.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FOCUS_STATE_SCAN = 0,

    /**
     * Focused.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FOCUS_STATE_FOCUSED = 1,

    /**
     * Unfocused.
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
   * Provides the API to check whether the focus assist is supported.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface FocusQuery {
    /**
     * Checks whether a focus mode is supported.
     *
     * @param { FocusMode } afMode - Focus mode. If the input parameter is null or undefined, it is treated as 0 and
     *     manual focus is used.
     * @returns { boolean } Check result for the support of the focus mode. **true** if supported, **false** otherwise.
     *     If the operation fails, undefined is returned and an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is thrown.
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
  }

  /**
   * Focus extends [FocusQuery]{@link camera.FocusQuery}
   * Provides APIs to obtain and set the camera focus mode and focus position.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Focus extends FocusQuery {
    /**
     * Obtains the focus mode in use.
     *
     * @returns { FocusMode } Focus mode obtained. If the operation fails, undefined is returned and an error code
     *     defined in [CameraErrorCode]{@link camera.CameraErrorCode} is thrown.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getFocusMode(): FocusMode;

    /**
     * Sets a focus mode.
     * Before the setting, call
     * [isFocusModeSupported]{@link camera.FocusQuery.isFocusModeSupported} to check whether the
     * focus mode is supported.
     *
     * @param { FocusMode } afMode - Focus mode. If the input parameter is null or undefined, it is treated as 0 and
     *     manual focus is used.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setFocusMode(afMode: FocusMode): void;

    /**
     * Sets the focal point. The focal point must be in the coordinate system (0-1), where the top-left corner is {0, 0}
     * and the bottom-right corner is {1, 1}.
     *
     * The coordinate system is based on the horizontal device direction with the device's charging port on the right.
     * If the layout of the preview screen of an application is based on the vertical direction with the charging port
     * on the lower side, the layout width and height are {w, h}, and the touch point is {x, y}, then the coordinate
     * point after conversion is {y/h, 1-x/w}.
     *
     * @param { Point } point - Focal point. The value range of x and y must be within [0, 1]. If a value less than 0 is
     *     passed, the value **0** is used. If a value greater than **1** is passed, the value **1** is used.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setFocusPoint(point: Point): void;

    /**
     * Obtains the focal point in use.
     *
     * @returns { Point } Focal point obtained. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getFocusPoint(): Point;

    /**
     * Obtains the focal length in use.
     *
     * @returns { double } Focal length, in mm. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
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
   * Enumerates the white balance modes.
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
     * Automatic.
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
     * Cloudy.
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
     * Incandescent light.
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
     * Fluorescence light.
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
     * Daylight.
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
     * Manual.
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
     * Locked.
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
   * WhiteBalanceQuery provides APIs to check whether a white balance mode is supported and obtain the white balance
   * mode range supported.
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
     * Checks whether a white balance mode is supported.
     *
     * @param { WhiteBalanceMode } mode - White balance mode.
     * @returns { boolean } Check result for the support of the white balance mode. **true** if supported, **false**
     *     otherwise. If the API call fails, undefined is returned.
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
     * Obtains the range of white balance values in manual white balance mode.
     *
     * @returns { Array<int> } Range of white balance values, for example, [2800, ...,10000], in units of K (Kelvin).
     *     The actual value depends on the bottom-layer capability. If the API call fails, undefined is returned.
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
     * Query the color tint range.
     *
     * @returns { Array<int> } The array of color tint range.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getColorTintRange(): Array<number>;
  }

  /**
   * **WhiteBalance** inherits from [WhiteBalanceQuery]{@link camera.WhiteBalanceQuery}.
   * It provides APIs to process white balance, including obtaining and setting the white balance mode and white balance
   * value.
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
     * Obtains the white balance mode in use.
     *
     * @returns { WhiteBalanceMode } White balance mode in use. If the API call fails, undefined is returned.
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
     * Sets a white balance mode. Before the setting, run
     * [isWhiteBalanceModeSupported]{@link camera.WhiteBalanceQuery.isWhiteBalanceModeSupported}
     * to check whether the device supports the specified white balance mode.
     *
     * @param { WhiteBalanceMode } mode - White balance mode.
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
     * Obtains the current white balance value.
     *
     * @returns { int } White balance value.
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
     * Sets a white balance value.
     * Before the setting, run
     * [getWhiteBalanceRange]{@link camera.WhiteBalanceQuery.getWhiteBalanceRange} to check the
     * white balance value range supported by the device.
     *
     * @param { int } whiteBalance - White balance value.
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
     * Sets color tint.
     *
     * @param { int } colorTint - Color tint.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setColorTint(colorTint: number): void;
 
    /**
     * Gets current color tint.
     *
     * @returns { int } The current color tint.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getColorTint(): number;
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
     * Sets ISO sensitivity value, within the range of getSupportedIsoRange. This control is only effective if
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
   * Enumerates the smooth zoom modes.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  enum SmoothZoomMode {
    /**
     * Bessel curve mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    NORMAL = 0
  }

  /**
   * Describes the smooth zoom information.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface SmoothZoomInfo {
    /**
     * Total duration of smooth zoom, in ms.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    duration: int;
  }

  /**
   * Describes the equivalent focal length information.
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
     * Zoom ratio.
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
     * Equivalent focal length corresponding to the current focal length ratio.
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
   * Provides the API to obtain the equivalent focal length information list in the current mode.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface ZoomQuery {
    /**
     * Obtains the supported zoom ratio range.
     *
     * @returns { Array<double> } Array containing the minimum and maximum zoom ratios. If the operation fails,
     *     undefined is returned and an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is thrown.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getZoomRatioRange(): Array<double>;

    /**
     * Obtains the equivalent focal length information list in the current mode.
     *
     * @returns { Array<ZoomPointInfo> } Equivalent focal length information list in the current mode.
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
     * Gets supported zoom ratio range during raw-capture.
     *
     * @returns { Array<double> } The zoom ratio range.
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
   * Zoom extend [ZoomQuery]{@link camera.ZoomQuery}
   * Provides APIs to process the zoom effect of a camera device, including obtaining the current zoom ratio, setting a
   * zoom ratio, setting a zoom ratio in a smooth manner, and preparing or unpreparing for zooming.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Zoom extends ZoomQuery {
    /**
     * Obtains the zoom ratio in use.
     *
     * @returns { double } Zoom ratio obtained. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error. [since 12]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getZoomRatio(): double;

    /**
     * Sets a zoom ratio, with a maximum precision of two decimal places.
     *
     * @param { double } zoomRatio - Zoom ratio. The supported zoom ratio range can be obtained by calling
     *     [getZoomRatioRange]{@link camera.ZoomQuery.getZoomRatioRange}. If the value passed in
     *     is not within the supported range, the value within the precision range is retained.<br>It takes some time
     *     for the zoom ratio to take effect at the bottom layer. To obtain the correct zoom ratio, you need to wait for
     *     one to two frames.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    setZoomRatio(zoomRatio: double): void;

    /**
     * Sets smooth zoom.
     *
     * @param { double } targetRatio - Target zoom ratio. The supported zoom ratio range can be obtained by calling
     *     [getZoomRatioRange]{@link camera.ZoomQuery.getZoomRatioRange}. If the value passed in
     *     is not within the supported range, the value within the precision range is retained.
     * @param { SmoothZoomMode } mode - Smooth zoom mode. The default value is **0**.
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
   * Enumerates the video stabilization modes.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum VideoStabilizationMode {
    /**
     * Video stabilization is disabled.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    OFF = 0,

    /**
     * The basic video stabilization algorithm is used.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    LOW = 1,

    /**
     * A video stabilization algorithm with a stabilization effect better than that of the **LOW** type is used.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    MIDDLE = 2,

    /**
     * A video stabilization algorithm with a stabilization effect better than that of the **MIDDLE** type is used.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    HIGH = 3,

    /**
     * The system automatically selects a video stabilization algorithm.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    AUTO = 4
  }

  /**
   * StabilizationQuery provides APIs to check the support for video stabilization.
   *
   * > **NOTE**
   * >
   * > - This interface was first introduced in API version 12. In this version, a compatibility change was made that
   * > preserved the initial version information of inner elements. As a result, you might see outer element's @since
   * > version number being higher than that of the inner elements. However, this discrepancy does not affect the
   * > functionality of the interface.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface StabilizationQuery {
    /**
     * Checks whether a video stabilization mode is supported.
     *
     * @param { VideoStabilizationMode } vsMode - Video stabilization mode.
     * @returns { boolean } Check result for the support of the video stabilization mode. **true** if supported,
     *     **false** otherwise. If the operation fails, undefined is returned and an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is thrown.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    isVideoStabilizationModeSupported(vsMode: VideoStabilizationMode): boolean;
  }

  /**
   * **Stabilization** inherits from [StabilizationQuery]{@link camera.StabilizationQuery}.
   * It provides APIs to set video stabilization.
   * Video stabilization can be set only when the session has a recording stream (
   * [VideoOutput]{@link camera.VideoOutput}). Among the enums of
   * [VideoStabilizationMode]{@link camera.VideoStabilizationMode}, the **HIGH** mode only takes
   * effect when the resolution set in [Profile]{@link camera.Profile} is 1920×1080.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Stabilization extends StabilizationQuery {
    /**
     * Obtains the video stabilization mode in use.
     *
     * @returns { VideoStabilizationMode } Video stabilization mode obtained. If the API call fails, undefined is
     *     returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    getActiveVideoStabilizationMode(): VideoStabilizationMode;

    /**
     * Sets a video stabilization mode. Before the setting, call
     * [isVideoStabilizationModeSupported]{@link camera.StabilizationQuery.isVideoStabilizationModeSupported}
     * to check whether the target video stabilization mode is supported. It is recommended that you set the video
     * stabilization mode between [commitConfig]{@link camera.Session.commitConfig()} and
     * [Start]{@link camera.Session.start()}.
     *
     * @param { VideoStabilizationMode } mode - Video stabilization mode.
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
   * Enumerates the effect types supported by the camera controller.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum ControlCenterEffectType {
    /**
     * Beauty effect.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    BEAUTY = 0,

    /**
     * Portrait blur effect.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    PORTRAIT = 1,

    /**
     * Automatic composition.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 24 dynamic&static
     */
    AUTO_FRAMING = 2
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
   * ColorManagementQuery provides the APIs for color space query.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface ColorManagementQuery {
    /**
     * Obtains the supported color spaces.
     *
     * @returns { Array<colorSpaceManager.ColorSpace> } Array of color spaces supported. If the API call fails,
     *     undefined is returned.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage. [since 12 - 17]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getSupportedColorSpaces(): Array<colorSpaceManager.ColorSpace>;
  }

  /**
   * **ColorManagement** inherits from [ColorManagementQuery]{@link camera.ColorManagementQuery}.
   * It provides the APIs for color space settings.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface ColorManagement extends ColorManagementQuery {
    /**
     * Obtains the color space in use.
     *
     * @returns { colorSpaceManager.ColorSpace } Color space.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getActiveColorSpace(): colorSpaceManager.ColorSpace;

    /**
     * Sets a color space.
     *
     * Before the setting, call
     * [getSupportedColorSpaces]{@link camera.ColorManagementQuery.getSupportedColorSpaces} to obtain the supported
     * color spaces. You are advised to call this API after [addOutput]{@link camera.Session.addOutput} and before
     * [commitConfig]{@link camera.Session.commitConfig()}. If this API is called after
     * [commitConfig]{@link camera.Session.commitConfig()}, the camera session configuration will take a longer time.
     *
     * P3 wide color gamut and HDR imaging:
     *
     * An application can deliver different color space parameters to declare its support for P3 and HDR. If an
     * application does not proactively set the color space, SDR is used by default in photo and video recording modes.
     *
     * For different modes, enabling HDR, setting the color space, and configuring
     * [CameraFormat]{@link camera.CameraFormat} in the camera output stream [profile]{@link camera.Profile} should
     * match. For details, see the table below. For example, to enable HDR in video recording mode, set
     * [CameraFormat]{@link camera.CameraFormat} in the camera preview and video output stream
     * [profiles]{@link camera.Profile} to **CAMERA_FORMAT_YCRCB_P010** and the color space to **BT2020_HLG_LIMIT**.
     *
     * To obtain HDR images in photo mode, set the color space to **DISPLAY_P3** or **BT2020_HLG**. **BT2020_HLG**
     * provides a wider color gamut, and should be used together with the **CameraFormat**, including
     * **CAMERA_FORMAT_YCRCB_P010** and **CAMERA_FORMAT_YCBCR_P010**, to improve the image quality.
     *
     * Since API version 23, you can call the
     * [getSupportedFullOutputCapability]{@link camera.CameraManager.getSupportedFullOutputCapability}
     * API to check whether the preview format P010 is supported in photo mode.
     *
     * - If the application does not set the color space, the default color space in photo mode is SRGB when the
     * **CameraFormat** is **CAMERA_FORMAT_YUV_420_SP**, and the default color space is **BT2020_HLG** when the
     * **CameraFormat** is **CAMERA_FORMAT_YCRCB_P010** or **CAMERA_FORMAT_YCBCR_P010**.
     * - If the application sets the color space, in photo mode, the **CameraFormat** and **ColorSpace** must be
     * configured according to the following mapping table. Otherwise, an error code will be returned in
     * [setColorSpace]{@link camera.ColorManagement.setColorSpace} or
     * [commitConfig]{@link camera.Session.commitConfig()}.
     *
     * Photo mode:
     * | SDR/HDR Photo Capture       | CameraFormat| ColorSpace|
     *  |--------------------|------------| ------------|
     *  | SDR(Default)       | CAMERA_FORMAT_YUV_420_SP       | SRGB       |
     *  | HDR P3               | CAMERA_FORMAT_YUV_420_SP | DISPLAY_P3 |
     *  | HDR BT.2020 | CAMERA_FORMAT_YCRCB_P010,<br>CAMERA_FORMAT_YCBCR_P010 | BT2020_HLG |
     *
     * In video recording mode, if SDR or HDR VIVID is enabled, the camera format and color space must be configured
     * according to the relationships specified in the table below. Configurations that do not match the table will
     * cause issues such as preview exceptions.
     *
     * Recording mode:
     * | SDR/HDR Photo Capture        | CameraFormat             | ColorSpace       |
     * |--------------------|--------------------------|------------------|
     * | SDR(Default)               | CAMERA_FORMAT_YUV_420_SP | BT709_LIMIT      |
     * | HDR_VIVID          | CAMERA_FORMAT_YCRCB_P010 | BT2020_HLG_LIMIT,<br>BT2020_HLG |
     * | HDR_VIVID          | CAMERA_FORMAT_YCBCR_P010 | BT2020_HLG_LIMIT,<br>BT2020_HLG |
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
   * ControlCenterQuery is used to check whether the camera controller is supported.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface ControlCenterQuery {
    /**
     * Checks whether the camera controller is supported.
     *
     * @returns { boolean } Check result for the support of the camera controller. **true** if supported, **false**
     *     otherwise.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    isControlCenterSupported(): boolean;

    /**
     * Obtains the effect types supported by the camera controller.
     *
     * @returns { Array<ControlCenterEffectType> } Array of effect types supported.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getSupportedEffectTypes(): Array<ControlCenterEffectType>;
  }

  /**
   * ControlCenter inherits from [ControlCenterQuery]{@link camera.ControlCenterQuery}.
   * It is used to enable the camera controller.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface ControlCenter extends ControlCenterQuery {
    /**
     * Enables the camera controller.
     *
     * @param { boolean } enabled - Whether to enable or disable the camera controller. **true** to enable, **false**
     *     otherwise.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    enableControlCenter(enabled: boolean): void;
  }

  /**
   * **AutoDeviceSwitchQuery** is used to check whether a device supports automatic camera switch.
   * [Automatic Camera Switching](docroot://media/camera/camera-auto-switch.md) is supported only on foldable devices.
   *
   * For details about how to enable this capability, see
   * [enableAutoDeviceSwitch]{@link camera.AutoDeviceSwitch.enableAutoDeviceSwitch}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 13 dynamic
   * @since 23 static
   */
  interface AutoDeviceSwitchQuery {
    /**
     * Checks whether the device supports automatic camera switch.
     *
     * @returns { boolean } Check result for the support of automatic camera switch. **true** if supported, **false**
     *     otherwise.
     * @throws { BusinessError } 7400103 - Session not config, only throw in session usage. [since 13 - 17]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    isAutoDeviceSwitchSupported(): boolean;
  }

  /**
   * **AutoDeviceSwitch** inherits from [AutoDeviceSwitchQuery]{@link camera.AutoDeviceSwitchQuery} and is used to
   * enable or disable automatic camera switch. This capability can be used only on foldable devices. For details about
   * the development, see
   * [Practices for Automatic Camera Switching (ArkTS)](docroot://media/camera/camera-auto-switch.md).
   *
   * It is recommended that the system automatically handle input device switching, session configuration, and parameter
   * continuity during automatic camera switch. If the system detects that the zoom ranges of the two cameras are
   * different during camera switching, it will notify the application through the **isDeviceCapabilityChanged** field
   * in [AutoDeviceSwitchStatus]{@link camera.AutoDeviceSwitchStatus}. However, the application
   * still needs to handle the UX change. For example, for the zoom range adjustment, the application needs to call
   * [getZoomRatioRange]{@link camera.ZoomQuery.getZoomRatioRange} to obtain data and update the
   * UX. Therefore, **AutoDeviceSwitch** is more applicable to simplified UX interactions.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 13 dynamic
   * @since 23 static
   */
  interface AutoDeviceSwitch extends AutoDeviceSwitchQuery {
    /**
     * Enables or disables automatic camera switch. You can use
     * [isAutoDeviceSwitchSupported]{@link camera.AutoDeviceSwitchQuery.isAutoDeviceSwitchSupported}
     * to check whether the device supports automatic camera switch.
     *
     * > **NOTE**
     * >
     * > This API is used only for foldable devices with multiple front cameras. In different fold states, the system
     * > can automatically switch to an available front camera. It does not enable automatic switching between front and
     * > rear cameras.
     *
     * @param { boolean } enabled - Whether to enable automatic camera switch. **true** to enable, **false** otherwise.
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
   * Describes the information about the automatic camera switch status.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 13 dynamic
   * @since 23 static
   */
  interface AutoDeviceSwitchStatus {
    /**
     * Whether the camera is automatically switched. **true** if auto-switched, **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly isDeviceSwitched: boolean;

    /**
     * Whether the camera capability is changed after the camera is automatically switched. **true** if changed,
     * **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    readonly isDeviceCapabilityChanged: boolean;
  }

  /**
   * MacroQuery provides the API to check the support for macro photography.
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
     * Checks whether macro photography is supported in the current state. This API must be called after
     * [commitConfig]{@link camera.Session.commitConfig(callback: AsyncCallback<void>)}.
     *
     * @returns { boolean } Check result for the support of macro photography. **true** if supported, **false**
     *     otherwise.
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
   * Macro inherits from [MacroQuery]{@link camera.MacroQuery}.
   * It provides the API to enable macro photography.
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
     * Enables or disables macro photography.
     *
     * > **NOTE**
     * >
     * > Before calling this API, call
     * > [isMacroSupported]{@link camera.MacroQuery.isMacroSupported} to check whether the
     * > current device supports macro photography.
     *
     * @param { boolean } enabled - Whether to enable macro photography. **true** to enable, **false** otherwise.
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
   * **Session** implements a session, which saves all [CameraInput]{@link camera.CameraInput} and
   * [CameraOutput]{@link camera.CameraOutput} instances required to run the camera and requests the camera
   * to take a photo or record a video.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Session {
    /**
     * Starts configuration for the session.
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
     * Commits the configuration for this session. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the configuration is
     *     successfully committed, **err** is **undefined**; otherwise, **err** is an error object with an error code
     *     defined in [CameraErrorCode]{@link camera.CameraErrorCode}. For example, if the
     *     aspect ratio of the preview stream is different from that of the video output stream, error code 7400201 is
     *     returned.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    commitConfig(callback: AsyncCallback<void>): void;

    /**
     * Commits the configuration for this session. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    commitConfig(): Promise<void>;

    /**
     * Checks whether a **CameraInput** instance can be added to this session. This API must be called after
     * [beginConfig]{@link camera.Session.beginConfig} and before [commitConfig]{@link camera.Session.commitConfig()}.
     *
     * @param { CameraInput } cameraInput - **CameraInput** instance to add. The API does not take effect if the input
     *     parameter is invalid (for example, the value is out of range, null, or undefined).
     * @returns { boolean } Check result for adding the **CameraInput** instance. **true** if it can be added, **false**
     *     otherwise.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    canAddInput(cameraInput: CameraInput): boolean;

    /**
     * Adds a [CameraInput]{@link camera.CameraInput} instance to this session.
     *
     * @param { CameraInput } cameraInput - **CameraInput** instance to add.
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
     * Removes a [CameraInput]{@link camera.CameraInput} instance from this session. This API must be called
     * after [beginConfig]{@link camera.Session.beginConfig} and before
     * [commitConfig]{@link camera.Session.commitConfig()}.
     *
     * @param { CameraInput } cameraInput - **CameraInput** instance to remove.
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
     * Determines whether a CameraOutput instance can be added to this session. This API must be called after
     * [addInput]{@link camera.Session.addInput} and before [commitConfig]{@link camera.Session.commitConfig()}.
     *
     * @param { CameraOutput } cameraOutput - **CameraOutput** instance to add. The API does not take effect if the
     *     input parameter is invalid (for example, the value is out of range, null, or undefined).
     * @returns { boolean } Check result for adding the **CameraOutput** instance. **true** if it can be added,
     *     **false** otherwise.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    canAddOutput(cameraOutput: CameraOutput): boolean;

    /**
     * Adds a [CameraOutput]{@link camera.CameraOutput} instance to this session.
     *
     * @param { CameraOutput } cameraOutput - **CameraOutput** instance to add.
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
     * Removes a [CameraOutput]{@link camera.CameraOutput} instance from this session.
     *
     * @param { CameraOutput } cameraOutput - **CameraOutput** instance to remove.
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
     * Starts this session. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the session starts successfully,
     *     **err** is **undefined**; otherwise, **err** is an error object with an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
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
     * Starts this session. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Stops this session. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the session stops successfully,
     *     **err** is **undefined**; otherwise, **err** is an error object with an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stops this session. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * Releases this session. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the session is released
     *     successfully, **err** is **undefined**; otherwise, **err** is an error object with an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases this session. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
   * Implements a capture session, which saves all [CameraInput]{@link camera.CameraInput} and
   * [CameraOutput]{@link camera.CameraOutput} instances required to run the camera and requests the camera
   * to complete shooting or video recording.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead camera.VideoSession
   */
  interface CaptureSession {
    /**
     * Starts configuration for the session.
     *
     * @throws { BusinessError } 7400105 - Session config locked.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.beginConfig
     */
    beginConfig(): void;

    /**
     * Commits the configuration for this session. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the configuration is
     *     successfully committed, **err** is **undefined**; otherwise, **err** is an error object with an error code
     *     defined in [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.commitConfig(callback: AsyncCallback<void>)
     */
    commitConfig(callback: AsyncCallback<void>): void;

    /**
     * Commits the configuration for this session. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.commitConfig()
     */
    commitConfig(): Promise<void>;

    /**
     * Adds a [CameraInput]{@link camera.CameraInput} instance to this session.
     *
     * @param { CameraInput } cameraInput - CameraInput instance to add.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.addInput
     */
    addInput(cameraInput: CameraInput): void;

    /**
     * Removes a [CameraInput]{@link camera.CameraInput} instance from this session.
     *
     * @param { CameraInput } cameraInput - CameraInput instance to remove.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.removeInput
     */
    removeInput(cameraInput: CameraInput): void;

    /**
     * Adds a [CameraOutput]{@link camera.CameraOutput} instance to this session.
     *
     * @param { CameraOutput } cameraOutput - CameraOutput instance to add.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.addOutput
     */
    addOutput(cameraOutput: CameraOutput): void;

    /**
     * Removes a [CameraOutput]{@link camera.CameraOutput} instance from this session.
     *
     * @param { CameraOutput } cameraOutput - CameraOutput instance to remove.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.removeOutput
     */
    removeOutput(cameraOutput: CameraOutput): void;

    /**
     * Starts this session. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the session starts successfully,
     *     **err** is **undefined**; otherwise, **err** is an error object with an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.start(callback: AsyncCallback<void>)
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * Starts this session. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.start()
     */
    start(): Promise<void>;

    /**
     * Stops this session. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the session stops successfully,
     *     **err** is **undefined**; otherwise, **err** is an error object with an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.stop(callback: AsyncCallback<void>)
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stops this session. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.stop()
     */
    stop(): Promise<void>;

    /**
     * Releases this session. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the session is released
     *     successfully, **err** is **undefined**; otherwise, **err** is an error object with an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.release(callback: AsyncCallback<void>)
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases this session. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.release()
     */
    release(): Promise<void>;

    /**
     * Checks whether the camera device has flash.
     *
     * @returns { boolean } Check result for whether the camera device has flash. **true** if it has flash, **false**
     *     otherwise. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.FlashQuery.hasFlash
     */
    hasFlash(): boolean;

    /**
     * Checks whether the flash mode is supported.
     *
     * @param { FlashMode } flashMode - Flash mode.
     * @returns { boolean } Check result for the support of the flash mode. **true** if supported, **false** otherwise.
     *     If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.FlashQuery.isFlashModeSupported
     */
    isFlashModeSupported(flashMode: FlashMode): boolean;

    /**
     * Obtains the flash mode in use.
     *
     * @returns { FlashMode } Flash mode obtained. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Flash.getFlashMode
     */
    getFlashMode(): FlashMode;

    /**
     * Sets a flash mode.
     * Before the setting, do the following checks:
     *
     * 1. Use [hasFlash]{@link camera.CaptureSession.hasFlash} to check whether the camera device has flash.
     * 2. Use [isFlashModeSupported]{@link camera.CaptureSession.isFlashModeSupported} to check whether the camera
     * device supports the flash mode.
     *
     * @param { FlashMode } flashMode - Flash mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Flash.setFlashMode
     */
    setFlashMode(flashMode: FlashMode): void;

    /**
     * Checks whether an exposure mode is supported.
     *
     * @param { ExposureMode } aeMode - Exposure mode.
     * @returns { boolean } Check result for the support of the exposure mode. **true** if supported, **false**
     *     otherwise. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposureQuery.isExposureModeSupported
     */
    isExposureModeSupported(aeMode: ExposureMode): boolean;

    /**
     * Obtains the exposure mode in use.
     *
     * @returns { ExposureMode } Exposure mode obtained. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposure.getExposureMode
     */
    getExposureMode(): ExposureMode;

    /**
     * Sets an exposure mode. Before the setting, call
     * [isExposureModeSupported]{@link camera.CaptureSession.isExposureModeSupported} to check whether the target
     * exposure mode is supported.
     *
     * @param { ExposureMode } aeMode - Exposure mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposure.setExposureMode
     */
    setExposureMode(aeMode: ExposureMode): void;

    /**
     * Obtains the metering point of the camera device.
     *
     * @returns { Point } Metering point obtained. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposure.getMeteringPoint
     */
    getMeteringPoint(): Point;

    /**
     * Sets the metering point, which is the center point of the metering rectangle. The metering point must be in the
     * coordinate system (0-1), where the top-left corner is {0, 0} and the bottom-right corner is {1, 1}.
     *
     * The coordinate system is based on the horizontal device direction with the device's charging port on the right.
     * If the layout of the preview screen of an application is based on the vertical direction with the charging port
     * on the lower side, the layout width and height are {w, h}, and the touch point is {x, y}, then the coordinate
     * point after conversion is {y/h, 1-x/w}.
     *
     * @param { Point } point - Metering point. The value range of x and y must be within [0,1]. If a value less than 0
     *     is passed, the value **0** is used. If a value greater than **1** is passed, the value **1** is used.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposure.setMeteringPoint
     */
    setMeteringPoint(point: Point): void;

    /**
     * Obtains the exposure compensation values of the camera device.
     *
     * @returns { Array<number> } Array of compensation values. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposureQuery.getExposureBiasRange
     */
    getExposureBiasRange(): Array<number>;

    /**
     * Sets an exposure compensation value (EV).
     * Before the setting, you are advised to use
     * [getExposureBiasRange]{@link camera.CaptureSession.getExposureBiasRange} to obtain the supported values.
     *
     * @param { number } exposureBias - EV. The supported EV range can be obtained by calling
     *     [getExposureBiasRange]{@link camera.AutoExposureQuery.getExposureBiasRange}. If the
     *     value passed is not within the supported range, the nearest critical point is used. There is a step for EV.
     *     For example, if the step is 0.5 and this parameter is set to 1.2, the EV that takes effect is 1.0. If the
     *     operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned. If the input parameter
     *     is null or undefined, the EV is set to 0.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposure.setExposureBias
     */
    setExposureBias(exposureBias: number): void;

    /**
     * Obtains the exposure value in use.
     *
     * @returns { number } Exposure value obtained. There is a step for EV. For example, if the step is 0.5 and this
     *     parameter is set to 1.2, the EV that takes effect is 1.0. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.AutoExposure.getExposureValue
     */
    getExposureValue(): number;

    /**
     * Checks whether a focus mode is supported.
     *
     * @param { FocusMode } afMode - Focus mode.
     * @returns { boolean } Check result for the support of the focus mode. **true** if supported, **false** otherwise.
     *     If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.FocusQuery.isFocusModeSupported
     */
    isFocusModeSupported(afMode: FocusMode): boolean;

    /**
     * Obtains the focus mode in use.
     *
     * @returns { FocusMode } Focus mode obtained. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Focus.getFocusMode
     */
    getFocusMode(): FocusMode;

    /**
     * Sets a focus mode.
     * Before the setting, call [isFocusModeSupported]{@link camera.CaptureSession.isFocusModeSupported} to check
     * whether the focus mode is supported.
     *
     * @param { FocusMode } afMode - Focus mode.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Focus.setFocusMode
     */
    setFocusMode(afMode: FocusMode): void;

    /**
     * Sets the focal point. The focal point must be in the coordinate system (0-1), where the top-left corner is {0, 0}
     * and the bottom-right corner is {1, 1}.
     *
     * The coordinate system is based on the horizontal device direction with the device's charging port on the right.
     * If the layout of the preview screen of an application is based on the vertical direction with the charging port
     * on the lower side, the layout width and height are {w, h}, and the touch point is {x, y}, then the coordinate
     * point after conversion is {y/h, 1-x/w}.
     *
     * @param { Point } point - Focal point. The value range of x and y must be within [0,1]. If a value less than 0 is
     *     passed, the value **0** is used. If a value greater than **1** is passed, the value **1** is used.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Focus.setFocusPoint
     */
    setFocusPoint(point: Point): void;

    /**
     * Obtains the focal point of the camera device.
     *
     * @returns { Point } Focal point obtained. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Focus.getFocusPoint
     */
    getFocusPoint(): Point;

    /**
     * Obtains the focal length of the camera device.
     *
     * @returns { number } Focal length obtained. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Focus.getFocalLength
     */
    getFocalLength(): number;

    /**
     * Obtains the supported zoom ratio range.
     *
     * @returns { Array<number> } Array containing the minimum and maximum zoom ratios. If the operation fails, an error
     *     code defined in [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.ZoomQuery.getZoomRatioRange
     */
    getZoomRatioRange(): Array<number>;

    /**
     * Obtains the zoom ratio in use.
     *
     * @returns { number } Zoom ratio obtained. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Zoom.getZoomRatio
     */
    getZoomRatio(): number;

    /**
     * Sets a zoom ratio, with a maximum precision of two decimal places.
     *
     * @param { number } zoomRatio - Zoom ratio. The supported zoom ratio range can be obtained by calling
     *     [getZoomRatioRange]{@link camera.ZoomQuery.getZoomRatioRange}. If the value passed in
     *     is not within the supported range, the value within the precision range is retained. If the input parameter
     *     is null or undefined, it is treated as 0 and the minimum zoom ratio is used.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Zoom.setZoomRatio
     */
    setZoomRatio(zoomRatio: number): void;

    /**
     * Checks whether a video stabilization mode is supported.
     *
     * @param { VideoStabilizationMode } vsMode - Video stabilization mode. If the input parameter is null or undefined,
     *     it is treated as 0 and video stabilization is disabled.
     * @returns { boolean } Check result for the support of the video stabilization mode. **true** if supported,
     *     **false** otherwise. If the operation fails, an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.StabilizationQuery.isVideoStabilizationModeSupported
     */
    isVideoStabilizationModeSupported(vsMode: VideoStabilizationMode): boolean;

    /**
     * Obtains the video stabilization mode in use.
     *
     * @returns { VideoStabilizationMode } Video stabilization mode obtained. If the operation fails, an error code
     *     defined in [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Stabilization.getActiveVideoStabilizationMode
     */
    getActiveVideoStabilizationMode(): VideoStabilizationMode;

    /**
     * Sets a video stabilization mode. Before the setting, call
     * [isVideoStabilizationModeSupported]{@link camera.CaptureSession.isVideoStabilizationModeSupported} to check
     * whether the target video stabilization mode is supported.
     *
     * @param { VideoStabilizationMode } mode - Video stabilization mode. If the input parameter is null or undefined,
     *     it is treated as 0 and video stabilization is disabled.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Stabilization.setVideoStabilizationMode
     */
    setVideoStabilizationMode(mode: VideoStabilizationMode): void;

    /**
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     auto focus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.VideoSession.on(type: 'focusStateChange', callback: AsyncCallback<FocusState>)
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. If this parameter is
     *     specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.VideoSession.off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>)
     */
    off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;

    /**
     * Subscribes to CaptureSession error events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as [beginConfig]{@link camera.CaptureSession.beginConfig},
     *     [commitConfig]{@link camera.CaptureSession.commitConfig()}, and
     *     [addInput]{@link camera.CaptureSession.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.VideoSession.on(type: 'error', callback: ErrorCallback)
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Unsubscribes from CaptureSession error events. This API uses a callback to return the result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. If this parameter is specified, the
     *     subscription to the specified event with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
   * Enumerates the preconfigured resolution types.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PreconfigType {
    /**
     * 720p resolution.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    PRECONFIG_720P = 0,

    /**
     * 1080p resolution.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    PRECONFIG_1080P = 1,

    /**
     * 4K resolution.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    PRECONFIG_4K = 2,

    /**
     * High-quality resolution.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    PRECONFIG_HIGH_QUALITY = 3,

    /**
     * Resolution that supports HDR preview and GIF photography.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    PRECONFIG_HIGH_QUALITY_PHOTOSESSION_BT2020 = 4
  }

  /**
   * Enumerates the preconfigured aspect ratios.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PreconfigRatio {
    /**
     * 1:1 aspect ratio.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    PRECONFIG_RATIO_1_1 = 0,

    /**
     * 4:3 aspect ratio.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    PRECONFIG_RATIO_4_3 = 1,

    /**
     * 16:9 aspect ratio.
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
   * Implements a photo session for system applications, which sets the parameters of the normal photo mode and saves
   * all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput}
   * instances required to run the camera. It inherits from [Session]{@link camera.Session}.
   *
   * @extends PhotoSession, Beauty, ColorEffect, ColorManagement, Macro, SceneDetection, EffectSuggestion [since 11 - 13]
   * @extends PhotoSession, Beauty, ColorEffect, ColorManagement, Macro, SceneDetection, EffectSuggestion,
   *     DepthFusion [since 14]
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface PhotoSessionForSys extends PhotoSession, Beauty, ColorEffect, ColorManagement, Macro, SceneDetection, EffectSuggestion, DepthFusion{
  }

  /**
   * Enumerates the photo quality prioritization strategies.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 21 dynamic
   * @since 24 static
   */
  enum PhotoQualityPrioritization {
    /**
     * Focuses on image quality, which may increase the time required for capturing photos to ensure high-quality
     * output.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    HIGH_QUALITY = 0,

    /**
     * Focuses on performance, trading off image quality for faster capture times.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    SPEED = 1,
  }

  /**
   * Implements a photo session, which sets the parameters of the normal photo mode and saves all
   * [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput}
   * instances required to run the camera. It inherits from [Session]{@link camera.Session}.
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
     * Checks whether this session supports a preconfigured resolution.
     *
     * @param { PreconfigType } preconfigType - Resolution type.
     * @param { PreconfigRatio } preconfigRatio - Aspect ratio. The default value is 4:3.
     * @returns { boolean } Whether a preconfigured resolution is supported. **true** if supported, **false** otherwise.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    canPreconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): boolean;

    /**
     * Preconfigures this session.
     *
     * @param { PreconfigType } preconfigType - Resolution type.
     * @param { PreconfigRatio } preconfigRatio - Aspect ratio. The default value is 4:3.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    preconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): void;

    /**
     * Subscribes to **PhotoSession** error events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as
     *     [beginConfig]{@link camera.Session.beginConfig},
     *     [commitConfig]{@link camera.Session.commitConfig(callback: AsyncCallback<void>)}, and
     *     [addInput]{@link camera.Session.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
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
     * Unsubscribes from **PhotoSession** error events. This API uses a callback to return the result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. If this parameter is specified, the
     *     subscription to the specified event with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     autofocus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
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
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. If this parameter is
     *     specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
     * Subscribes to smooth zoom state change events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the smooth zoom state change.
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
     * Unsubscribes from smooth zoom state change events.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the result. If this parameter is
     *     specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
     * Subscribes to macro state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'macroStatusChanged' } type - Event type. The value is fixed at **'macroStatusChanged'**. The event can
     *     be listened for when a session is created.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the macro state. **true** if enabled,
     *     **false** otherwise.
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
     * Unsubscribes from macro state change events.
     *
     * @param { 'macroStatusChanged' } type - Event type. The value is fixed at **'macroStatusChanged'**. The event can
     *     be listened for when a session is created.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If this parameter is specified,
     *     the subscription to the specified event with the specified callback is canceled. (The callback object cannot
     *     be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * Subscribes to automatic camera switch status change events. This API uses an asynchronous callback to return the
     * result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - Event type. The value is fixed at
     *     **'autoDeviceSwitchStatusChange'**. The event can be listened for when a session is created.
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback function, which is used to obtain the status
     *     of automatic camera switch.
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
     * Unsubscribes from automatic camera switch status change events.
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - Event type. The value is fixed at
     *     **'autoDeviceSwitchStatusChange'**. The event can be listened for when a session is created.
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result. If this parameter
     *     is specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
     * Subscribes to system pressure level change events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'systemPressureLevelChange' } type - Event type. The value is fixed at **'systemPressureLevelChange'**.
     *     The event can be listened for when a session is created.
     * @param { AsyncCallback<SystemPressureLevel> } callback - Callback used to return the current system pressure
     *     level.
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
     * Unsubscribes from system pressure level change events.
     *
     * @param { 'systemPressureLevelChange' } type - Event type. The value is fixed at **'systemPressureLevelChange'**.
     *     The event can be listened for when a session is created.
     * @param { AsyncCallback<SystemPressureLevel> } [callback] - Callback used to return the result. If this parameter
     *     is specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
     * Subscribes ISO info change event callback.
     *
     * @param { Callback<IsoInfo> } callback - Callback used to get the ISO info change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    onIsoInfoChange(callback: Callback<IsoInfo>): void;

    /**
     * Unsubscribes from ISO info change event callback.
     *
     * @param { Callback<IsoInfo> } [callback] - Callback used to get the ISO info change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    offIsoInfoChange(callback?: Callback<IsoInfo>): void;

    /**
     * Subscribes exposure info change event callback.
     * After exposure parameters are changed, the system will returns the updated exposure infos.
     *
     * @param { Callback<ExposureInfo> } callback - Callback used to get the exposure value change.
     *     <br>Exposure information callback listening.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    onExposureInfoChange(callback: Callback<ExposureInfo>): void;

    /**
     * Unsubscribes exposure info change event callback. Invoke this method after finishing camera operations.
     *
     * @param { Callback<ExposureInfo> } [callback] - Callback used to get the exposure value change.
     *     <br>Callback listening for canceling exposure information.
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
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface VideoSessionForSys extends VideoSession, Beauty, ColorEffect, ColorManagement, Macro, Aperture, ColorReservation, EffectSuggestion {
  }

  /**
   * Enumerates the priority levels for video recording quality.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 14 dynamic
   * @since 23 static
   */
  enum QualityPrioritization {
    /**
     * Prioritizes high-quality video recording.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 14 dynamic
     * @since 23 static
     */
    HIGH_QUALITY = 0,

    /**
     * Prioritizes video recording quality while balancing power consumption.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 14 dynamic
     * @since 23 static
     */
    POWER_BALANCE = 1
  }

  /**
   * VideoSession extends Session, Flash, AutoExposure, Focus, Zoom, Stabilization, ColorManagement
   * Implements a video session, which sets the parameters of the normal video mode and saves all
   * [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput}
   * instances required to run the camera. It inherits from [Session]{@link camera.Session}.
   *
   * @extends Session, Flash, AutoExposure, Focus, Zoom, Stabilization, ColorManagement [since 11 - 12]
   * @extends AutoDeviceSwitch [since 13 - 18]
   * @extends Session, Flash, AutoExposure, Focus, Zoom, Stabilization, ColorManagement, AutoDeviceSwitch, Macro [since 19 - 19]
   * @extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom, Stabilization, ColorManagement, ControlCenter,
   *     AutoDeviceSwitch, Macro [since 20]
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface VideoSession extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom, Stabilization,
      ColorManagement, ControlCenter, AutoDeviceSwitch, Macro {
    /**
     * Checks whether this session supports a preconfigured resolution.
     *
     * @param { PreconfigType } preconfigType - Resolution type.
     * @param { PreconfigRatio } preconfigRatio - Aspect ratio. The default value is 16:9.
     * @returns { boolean } **true**: The preconfigured resolution is supported.
     *     <br>**false**: The preconfigured resolution is not supported.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    canPreconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): boolean;

    /**
     * Preconfigures this session.
     *
     * @param { PreconfigType } preconfigType - Resolution type.
     * @param { PreconfigRatio } preconfigRatio - Aspect ratio. The default value is 16:9.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    preconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): void;

    /**
     * Subscribes to **PhotoSession** error events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created. This event is triggered and the error message is returned when an error occurs during the
     *     calling of a session-related API such as
     *     [beginConfig]{@link camera.Session.beginConfig},
     *     [commitConfig]{@link camera.Session.commitConfig(callback: AsyncCallback<void>)}, and
     *     [addInput]{@link camera.Session.addInput}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
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
     * Unsubscribes from **PhotoSession** error events. This API uses a callback to return the result.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. If this parameter is specified, the
     *     subscription to the specified event with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     autofocus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
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
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. If this parameter is
     *     specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
     * Subscribes to smooth zoom state change events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the smooth zoom state change.
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
     * Unsubscribes from smooth zoom state change events.
     *
     * @param { 'smoothZoomInfoAvailable' } type - Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The
     *     event can be listened for when a session is created.
     * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to return the result. If this parameter is
     *     specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
      * Subscribes to events indicating that the camera controller effect status changes. This API uses an asynchronous
      * callback to return the result.
      *
      * > **NOTE**
      * >
      * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
      *
      * @param { 'controlCenterEffectStatusChange' } type - Event type. The value is fixed at
      *     **'controlCenterEffectStatusChange'**. The event can be listened for when a session is created.
      * @param { AsyncCallback<ControlCenterStatusInfo> } callback - Callback used to return the effect status of the
      *     current controller.
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
      * Unsubscribes from events indicating that the camera controller effect status changes.
      *
      * @param { 'controlCenterEffectStatusChange' } type - Event type. The value is fixed at
      *     **'controlCenterEffectStatusChange'**. The event can be listened for when a session is created.
      * @param { AsyncCallback<ControlCenterStatusInfo> } [callback] - Callback used to return the result. If this
      *     parameter is specified, the subscription to the specified event with the specified callback is canceled. (
      *     The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event
      *     with all the callbacks are canceled.
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
     * Subscribes to macro state change events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'macroStatusChanged' } type - Event type. The value is fixed at **'macroStatusChanged'**. The event can
     *     be listened for when a session is created.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the macro state. **true** if enabled,
     *     **false** otherwise.
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
     * Unsubscribes from macro state change events.
     *
     * @param { 'macroStatusChanged' } type - Event type. The value is fixed at **'macroStatusChanged'**. The event can
     *     be listened for when a session is created.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If this parameter is specified,
     *     the subscription to the specified event with the specified callback is canceled. (The callback object cannot
     *     be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * Subscribes to automatic camera switch status change events. This API uses an asynchronous callback to return the
     * result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - Event type. The value is fixed at
     *     **'autoDeviceSwitchStatusChange'**. The event can be listened for when a session is created.
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback function, which is used to obtain the status
     *     of automatic camera switch.
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
     * Unsubscribes from automatic camera switch status change events.
     *
     * @param { 'autoDeviceSwitchStatusChange' } type - Event type. The value is fixed at
     *     **'autoDeviceSwitchStatusChange'**. The event can be listened for when a session is created.
     * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result. If this parameter
     *     is specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
     * @param { 'lightStatusChange' } type - Event type. The value is fixed at **'lightStatusChange'**.<br>The event can
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
     * @param { 'lightStatusChange' } type - Event type. The value is fixed at **'lightStatusChange'**.<br>The event can
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
     * Subscribes to system pressure level change events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'systemPressureLevelChange' } type - Event type. The value is fixed at **'systemPressureLevelChange'**.
     *     The event can be listened for when a session is created.
     * @param { AsyncCallback<SystemPressureLevel> } callback - Callback used to return the current system pressure
     *     level.
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
     * Unsubscribes from system pressure level change events.
     *
     * @param { 'systemPressureLevelChange' } type - Event type. The value is fixed at **'systemPressureLevelChange'**.
     *     The event can be listened for when a session is created.
     * @param { AsyncCallback<SystemPressureLevel> } callback - Callback used to return the result. If this parameter is
     *     specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
     * Sets the priority level for video recording quality.
     *
     * > **NOTE**
     * >
     * > - The default value is **HIGH_QUALITY**. Switching to **POWER_BALANCE** will compromise video recording quality
     * > to achieve lower power usage. The extent of power conservation achieved varies depending on the platform.
     * >
     * > - It is recommended that this API be called between
     * > [commitConfig]{@link camera.Session.commitConfig(callback: AsyncCallback<void>)} and
     * > [start]{@link camera.Session.start()}.
     *
     * @param { QualityPrioritization } quality - Priority level to set. The default value is **HIGH_QUALITY**.
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
     * Subscribes ISO info change event callback.
     *
     * @param { Callback<IsoInfo> } callback - Callback used to get the ISO info change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    onIsoInfoChange(callback: Callback<IsoInfo>): void;

    /**
     * Unsubscribes from ISO info change event callback.
     *
     * @param { Callback<IsoInfo> } [callback] - Callback used to get the ISO info change.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    offIsoInfoChange(callback?: Callback<IsoInfo>): void;
  }

  /**
   * Enumerates the system pressure levels.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum SystemPressureLevel {
    /**
     * The system pressure is normal.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_PRESSURE_NORMAL = 0,

    /**
     * The system pressure is elevated but not actively managed by the system.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_PRESSURE_MILD = 1,

    /**
     * The system pressure may affect the overall image quality and performance.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_PRESSURE_SEVERE = 2,

    /**
     * The system pressure has a significant impact on the image quality and performance.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_PRESSURE_CRITICAL = 3,

    /**
     * The system pressure is too high, causing the system to shut down.
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
   * Describes the zoom range.
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
     * Minimum zoom value.
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
     * Maximum zoom value.
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
   * Describes the physical aperture object.
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
     * Zoom range of a given physical aperture.
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
     * Supported physical aperture.
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
     * @param { double } aperture - physical aperture value.
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
     * @returns { int } The current exposure value.
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
     * @returns { int } The current exposure value.
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
     * Sets Exposure duration value, units: microseconds.
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
   * Describes the ISO information.
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
   * Describes the exposure information object.
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
     * Exposure time, in microseconds.
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
   * > **NOTE**
   * > > In slow-motion video mode, only preview streams and video streams can be added.
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
     * > **NOTE**
     * > > This API must be called after [commitConfig]{@link camera.Session.commitConfig()} is
     * > called.
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
     * > **NOTE**
     * > > Before the setting, call
     * > [isSlowMotionDetectionSupported]{@link camera.SlowMotionVideoSession.isSlowMotionDetectionSupported} to check
     * > whether the device supports slow-motion detection.
     * > This API must be called after [commitConfig]{@link camera.Session.commitConfig()} is
     * > called.
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
   * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus, DepthFusion, ColorManagement [since 18]
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface MacroPhotoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus, DepthFusion, ColorManagement {
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
  interface MacroVideoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ManualFocus, ColorManagement {
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
   * **SecureSession** inherits from [Session]{@link camera.Session},
   * [Flash]{@link camera.Flash}, [AutoExposure]{@link camera.AutoExposure},
   * [WhiteBalance]{@link camera.WhiteBalance}, [Focus]{@link camera.Focus}, and [Zoom]{@link camera.Zoom}.
   *
   * It implements a secure session, which provides operations on the flash, exposure, white balance, focus, and zoom.
   *
   * You can call [createSession]{@link camera.CameraManager.createSession} with
   * [SceneMode]{@link camera.SceneMode} set to **SECURE_PHOTO** to create a session in secure
   * mode. The secure mode is designed for applications with high security requirements, such as facial recognition
   * systems and banking services. It must be used together with the <!--RP1-->security TA<!--RP1End--> to support
   * service scenarios where both standard preview streams and security streams are output.<!--RP2-->
   *
   * The security TA can verify the signature of data delivered by the server, sign images, parse and assemble TLV logic
   * , and read, create, and operate keys. It applies to image processing.<!--RP2End-->
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
     * Marks a [PreviewOutput]{@link camera.PreviewOutput} stream as secure output.
     *
     * @param { PreviewOutput } previewOutput - Preview output stream. An error code is returned if the input parameter
     *     is invalid.
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
     * Subscribes to SecureSession error events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
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
     * Unsubscribes from SecureSession error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     session is created.
     * @param { ErrorCallback } callback - Callback used to return the result. If this parameter is specified, the
     *     subscription to the specified event with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * Subscribes to focus state change events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created. This event is triggered only when the camera focus state changes in
     *     auto focus mode.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the focus state change.
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
     * Unsubscribes from focus state change events.
     *
     * @param { 'focusStateChange' } type - Event type. The value is fixed at **'focusStateChange'**. The event can be
     *     listened for when a session is created.
     * @param { AsyncCallback<FocusState> } callback - Callback used to return the result. If this parameter is
     *     specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
   * @extends Session, AutoExposure, ColorEffect, ColorManagement, EffectSuggestion, Flash, Focus, Zoom, Beauty [since 22]
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
   * CameraOutput implements output information used in [Session]{@link camera.Session}. It is the base
   * class of **output**.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CameraOutput {
    /**
     * Releases output resources. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the output resources are
     *     released successfully, **err** is **undefined**; otherwise, **err** is an error object with an error code
     *     defined in [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases output resources. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
   * Implements preview output. It inherits from [CameraOutput]{@link camera.CameraOutput}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PreviewOutput extends CameraOutput {
    /**
     * Starts to output preview streams. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the preview stream output starts
     *     successfully, **err** is **undefined**; otherwise, **err** is an error object with an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.start(callback: AsyncCallback<void>)
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * Starts to output preview streams. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.start()
     */
    start(): Promise<void>;

    /**
     * Stops outputting preview streams. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the preview stream output stops
     *     successfully, **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.stop(callback: AsyncCallback<void>)
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stops outputting preview streams. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.Session.stop()
     */
    stop(): Promise<void>;

    /**
     * Subscribes to preview frame start events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'frameStart' } type - Event type. The value is fixed at **'frameStart'**. The event can be listened for
     *     when a previewOutput instance is created. This event is triggered and returned when the bottom layer starts
     *     exposure for the first time.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. The preview starts as long as this
     *     event is returned.
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
     * Unsubscribes from preview frame start events.
     *
     * @param { 'frameStart' } type - Event type. The value is fixed at **'frameStart'**. The event can be listened for
     *     when a previewOutput instance is created.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If this parameter is specified, the
     *     subscription to the specified event with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * Subscribes to preview frame end events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'frameEnd' } type - Event type. The value is fixed at **'frameEnd'**. The event can be listened for when
     *     a previewOutput instance is created. This event is triggered and returned when the last frame of preview
     *     ends.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. The preview ends as long as this
     *     event is returned.
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
     * Unsubscribes from preview frame end events.
     *
     * @param { 'frameEnd' } type - Event type. The value is fixed at **'frameEnd'**. The event can be listened for when
     *     a previewOutput instance is created.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If this parameter is specified, the
     *     subscription to the specified event with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * Subscribes to PreviewOutput error events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     previewOutput instance is created. This event is triggered and the corresponding error message is returned
     *     when an error occurs during the use of a preview-related API such as
     *     [Session.start]{@link camera.Session.start()} or
     *     [CameraOutput.release]{@link camera.CameraOutput.release()}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
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
     * Unsubscribes from PreviewOutput error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     previewOutput instance is created.
     * @param { ErrorCallback } callback - Callback used to return the result. If this parameter is specified, the
     *     subscription to the specified event with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * Obtains the supported frame rates.
     *
     * @returns { Array<FrameRateRange> } Array of supported frame rates. If the API call fails, undefined is returned.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getSupportedFrameRates(): Array<FrameRateRange>;

    /**
     * Sets a frame rate range for preview streams. The range must be within the supported frame rate range, which can
     * be obtained by calling [getSupportedFrameRates]{@link camera.PreviewOutput.getSupportedFrameRates}.
     *
     * > **NOTE**
     * >
     * > This API is valid only in [PhotoSession]{@link camera.PhotoSession} or
     * > [VideoSession]{@link camera.VideoSession} mode.
     *
     * @param { int } minFps - Minimum frame rate, in fps. When the maximum value is less than the minimum value, the
     *     API does not take effect.
     * @param { int } maxFps - Maximum frame rate, in fps. When the minimum value is greater than the maximum value, the
     *     API does not take effect.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400110 - Unresolved conflicts with current configurations.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    setFrameRate(minFps: int, maxFps: int): void;

    /**
     * Obtains the configured frame rate range.
     * This API is valid only after [setFrameRate]{@link camera.PreviewOutput.setFrameRate} is called to set a frame
     * rate range for preview streams.
     *
     * @returns { FrameRateRange } Frame rate range.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getActiveFrameRate(): FrameRateRange;

    /**
     * Obtains the preview rotation angle.
     *
     * - Device's natural orientation: the default orientation for using a device. For example, the default orientation
     * of the bar-type phone is in portrait mode, with the charging port facing downward.
     * - Camera lens angle: equivalent to the angle at which the camera is rotated clockwise to match the device's
     * natural orientation. For example, the rear camera sensor of a bar-type phone is installed in landscape mode.
     * Therefore, it needs to be rotated by 90 degrees clockwise to match the device's natural orientation.
     * - [Screen rotation](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-multi-device-window-direction#section15598121101615)
     * : indicates the clockwise rotation angle of the device screen.
     *
     * @param { int } displayRotation - Screen rotation angle of the display. It is obtained by calling
     *     [display.getDefaultDisplaySync]{@link @ohos.display:display.getDefaultDisplaySync}.<br> Since API version 23,
     *     the input parameter **displayRotation** is optional. If no parameter is passed, the system obtains the
     *     **displayRotation** value to calculate rotation angle of a video. [since 12 - 22]
     * @param { int } [displayRotation] - Screen rotation angle of the display. It is obtained by calling
     *     [display.getDefaultDisplaySync]{@link @ohos.display:display.getDefaultDisplaySync}.<br> Since API version 23,
     *     the input parameter **displayRotation** is optional. If no parameter is passed, the system obtains the
     *     **displayRotation** value to calculate rotation angle of a video. [since 23]
     * @returns { ImageRotation } The preview rotation angle obtained. If the API call fails, undefined is returned.
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
     * Sets the preview rotation angle.
     *
     * @param { ImageRotation } previewRotation - Preview rotation angle.
     * @param { boolean } isDisplayLocked - Whether the orientation of the surface is locked when the screen rotates. If
     *     this parameter is not set, the default value **false** is used, indicating that the orientation is not
     *     locked. **true** if locked, **false** otherwise. For details, see
     *     [SurfaceRotationOptions]{@link SurfaceRotationOptions}.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    setPreviewRotation(previewRotation: ImageRotation, isDisplayLocked?: boolean): void;

    /**
     * Obtains the profile that takes effect currently.
     *
     * @returns { Profile } Profile obtained.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getActiveProfile(): Profile;

    /**
     * Adds a deferred surface.
     *
     * @param { string } surfaceId - Surface object id used in camera photo output.
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
     * Checks whether preview bandwidth compression is supported. This involves reducing data volume through encoding to
     * minimize bandwidth usage during transmission.
     *
     * @returns { boolean } Check result for the support of preview bandwidth compression. **true** if supported,
     *     **false** otherwise.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    isBandwidthCompressionSupported(): boolean;

    /**
     * Enables preview bandwidth compression.
     * Before enabling this feature, you can call
     * [isBandwidthCompressionSupported]{@link camera.PreviewOutput.isBandwidthCompressionSupported} to check whether
     * the device supports preview bandwidth compression.
     *
     * > **NOTE**
     * >
     * > This function must be called prior to
     * > [Session.commitConfig]{@link camera.Session.commitConfig(callback: AsyncCallback<void>)}.
     * > Otherwise, the preview output stream format will be affected.
     *
     * @param { boolean } enabled - Whether to enable preview bandwidth compression. **true** to enable, **false**
     *     otherwise.
     * @throws { BusinessError } 7400102 - Operation not allowed.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    enableBandwidthCompression(enabled: boolean): void;
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
   * Enumerates the image rotation angles.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ImageRotation {
    /**
     * The image rotates 0 degrees.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    ROTATION_0 = 0,

    /**
     * The image rotates 90 degrees.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    ROTATION_90 = 90,

    /**
     * The image rotates 180 degrees.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    ROTATION_180 = 180,

    /**
     * The image rotates 270 degrees.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    ROTATION_270 = 270
  }

  /**
   * Describes the geolocation information.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Location {
    /**
     * Latitude, in degrees, within the range [-90, 90].
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    latitude: double;

    /**
     * Longitude, in degrees, within the range [-180, 180].
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    longitude: double;

    /**
     * Altitude, in meters.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    altitude: double;
  }

  /**
   * Enumerates the image quality levels.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum QualityLevel {
    /**
     * High image quality.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    QUALITY_LEVEL_HIGH = 0,

    /**
     * Medium image quality.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    QUALITY_LEVEL_MEDIUM = 1,

    /**
     * Low image quality.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    QUALITY_LEVEL_LOW = 2
  }

  /**
   * Describes the settings for taking an image.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PhotoCaptureSetting {
    /**
     * Image quality (low by default).
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    quality?: QualityLevel;

    /**
     * Rotation angle of the image. The default value is **0**, indicating clockwise rotation.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    rotation?: ImageRotation;

    /**
     * Geolocation information of the image (depending on the device hardware information by default).
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    location?: Location;

    /**
     * Whether mirror photography is enabled (disabled by default). Before using this enumerated value, call
     * [isMirrorSupported]{@link camera.PhotoOutput.isMirrorSupported} to check whether mirror
     * photography is supported. **true** if enabled, **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    mirror?: boolean;
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
   * Defines a higher-resolution image object.
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
   * Defines the image container type, which is used to obtain full-quality images or uncompressed images (YUV).
   *
   * @unionmember { image.Image } Image container type that obtains full-quality images.
   * @unionmember { image.Picture } Image container type that obtains uncompressed images (YUV).
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice
   * @since 23 dynamic&static
   */
  type ImageType = image.Image | image.Picture;

  /**
   * **CapturePhoto** provides APIs for obtaining the objects of the full-quality image and the uncompressed image.
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
   * Enumerates the video codec types.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 13 dynamic
   * @since 23 static
   */
  enum VideoCodecType {
    /**
     * AVC.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    AVC = 0,

    /**
     * HEVC.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    HEVC = 1
  }

  /**
   * Implements output information used in a photo session. It inherits from
   * [CameraOutput]{@link camera.CameraOutput}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PhotoOutput extends CameraOutput {
    /**
     * Captures a photo with the default photo capture parameters. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the photo is successfully
     *     captured with the default parameters, **err** is **undefined**; otherwise, **err** is an error object with an
     *     error code defined in [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    capture(callback: AsyncCallback<void>): void;

    /**
     * Captures a photo with the default photo capture parameters. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7400104 - Session not running.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    capture(): Promise<void>;

    /**
     * Captures a photo with the specified photo capture parameters. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { PhotoCaptureSetting } setting - Photo capture settings. If the input data is of the **undefined** type,
     *     a photo capture operation is triggered based on the default settings.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation fails, an error
     *     code defined in [CameraErrorCode]{@link camera.CameraErrorCode} is returned.
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
     * Captures a photo with the specified photo capture parameters. This API uses a promise to return the result.
     *
     * @param { PhotoCaptureSetting } setting - Photo capture settings. If the input data is of the **undefined** type,
     *     a photo capture operation is triggered based on the default settings.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the supported video codec types of moving photos.
     *
     * @returns { Array<VideoCodecType> } Array holding the supported video codec types. If the API call fails,
     *     undefined is returned.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    getSupportedMovingPhotoVideoCodecTypes(): Array<VideoCodecType>;

    /**
     * Sets a video codec type for moving photos.
     *
     * @param { VideoCodecType } codecType - Video codec type.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 13 dynamic
     * @since 23 static
     */
    setMovingPhotoVideoCodecType(codecType: VideoCodecType): void;

    /**
     * Subscribes to the events of returning available photos. This API uses an asynchronous callback to return the
     * result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'photoAvailable' } type - Event type. The value is fixed at **'photoAvailable'**. The event can be
     *     listened for when a **photoOutput** instance is created.
     * @param { AsyncCallback<Photo> } callback - Callback used to listen for the events of returning available photos.
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
     * Unsubscribes from the events of returning available photos.
     *
     * @param { 'photoAvailable' } type - Event type. The value is fixed at **'photoAvailable'**. The event can be
     *     listened for when a photoOutput instance is created.
     * @param { AsyncCallback<Photo> } callback - Callback used to return the result. If this parameter is specified,
     *     the subscription to the specified event with the specified callback is canceled. (The callback object cannot
     *     be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * Subscribes photo available event callback, which supports delivery of uncompressed photo.
     *
     * @param { Callback<CapturePhoto> } callback - Callback used to get the CapturePhoto.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    onCapturePhotoAvailable(callback: Callback<CapturePhoto>): void;

    /**
     * Unsubscribes photo available event callback, which supports delivery of uncompressed photo.
     *
     * @param { Callback<CapturePhoto> } [callback] - Callback used to get the CapturePhoto.
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
     * Subscribes to photo asset available events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'photoAssetAvailable' } type - Event type. The value is fixed at **'photoAssetAvailable'**. The event
     *     can be listened for when a photoOutput instance is created.
     * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } callback - Callback used to return the photo asset.
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
     * Unsubscribes from photo asset available events.
     *
     * @param { 'photoAssetAvailable' } type - Event type. The value is fixed at **'photoAssetAvailable'**. The event
     *     can be listened for when a photoOutput instance is created.
     * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } callback - Callback used for unsubscription. If this
     *     parameter is specified, the subscription to the specified event with the specified callback is canceled. (The
     *     callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with
     *     all the callbacks are canceled.
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
     * Checks whether mirror photography is supported.
     *
     * @returns { boolean } Check result for the support of mirror photography. **true** if supported, **false**
     *     otherwise. If the API call fails, undefined is returned.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    isMirrorSupported(): boolean;

    /**
     * Enables or disables mirroring photo capture.
     * Before calling this API, check whether moving photo capture is supported by calling
     * [isMovingPhotoSupported]{@link camera.PhotoOutput.isMovingPhotoSupported} and whether mirroring is supported by
     * calling [isMirrorSupported]{@link camera.PhotoOutput.isMirrorSupported}.
     *
     * @param { boolean } enabled - Whether to enable mirroring photo capture. **true** to enable, **false** otherwise.
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
     * Subscribes to capture start events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'captureStart' } type - Event type. The value is fixed at **'captureStart'**. The event can be listened
     *     for when a photoOutput instance is created. This event is triggered and returned when the bottom layer starts
     *     exposure each time a photo is taken.
     * @param { AsyncCallback<number> } callback - Callback used to return the capture ID.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.PhotoOutput.on(type: 'captureStartWithInfo', callback: AsyncCallback<CaptureStartInfo>)
     */
    on(type: 'captureStart', callback: AsyncCallback<number>): void;

    /**
     * Unsubscribes from capture start events.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'captureStart' } type - Event type. The value is fixed at **'captureStart'**. The event can be listened
     *     for when a photoOutput instance is created.
     * @param { AsyncCallback<number> } callback - Callback used to return the result. If this parameter is specified,
     *     the subscription to the specified event with the specified callback is canceled. (The callback object cannot
     *     be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead camera.PhotoOutput.off(type: 'captureStartWithInfo', callback?: AsyncCallback<CaptureStartInfo>)
     */
    off(type: 'captureStart', callback?: AsyncCallback<number>): void;

    /**
     * Subscribes to capture start events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'captureStartWithInfo' } type - Event type. The value is fixed at **'captureStartWithInfo'**. The event
     *     can be listened for when a photoOutput instance is created.
     * @param { AsyncCallback<CaptureStartInfo> } callback - Callback used to return the capture ID.
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
     * Unsubscribes from capture start events.
     *
     * @param { 'captureStartWithInfo' } type - Event type. The value is fixed at **'captureStartWithInfo'**. The event
     *     can be listened for when a photoOutput instance is created.
     * @param { AsyncCallback<CaptureStartInfo> } callback - Callback used to return the result. If this parameter is
     *     specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
     * Subscribes to frame shutter events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'frameShutter' } type - Event type. The value is fixed at **'frameShutter'**. The event can be listened
     *     for when a photoOutput instance is created.
     * @param { AsyncCallback<FrameShutterInfo> } callback - Callback used to return the result. A new photo capture
     *     request can be delivered as long as this event is returned.
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
     * Unsubscribes from frame shutter events.
     *
     * @param { 'frameShutter' } type - Event type. The value is fixed at **'frameShutter'**. The event can be listened
     *     for when a photoOutput instance is created.
     * @param { AsyncCallback<FrameShutterInfo> } callback - Callback used to return the result. If this parameter is
     *     specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
     * Subscribes to frame shutter end events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'frameShutterEnd' } type - Event type. The value is fixed at **'frameShutterEnd'**. The event can be
     *     listened for when a photoOutput instance is created.
     * @param { AsyncCallback<FrameShutterEndInfo> } callback - Callback used to return the result. It is invoked when
     *     the frame shutter ends.
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
     * Unsubscribes from frame shutter end events.
     *
     * @param { 'frameShutterEnd' } type - Event type. The value is fixed at **'frameShutterEnd'**. The event can be
     *     listened for when a photoOutput instance is created.
     * @param { AsyncCallback<FrameShutterEndInfo> } callback - Callback used to return the result. If this parameter is
     *     specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
     * Subscribes to capture end events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'captureEnd' } type - Event type. The value is fixed at **'captureEnd'**. The event can be listened for
     *     when a photoOutput instance is created. This event is triggered and the corresponding information is returned
     *     when the photo capture is complete.
     * @param { AsyncCallback<CaptureEndInfo> } callback - Callback used to return the result.
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
     * Unsubscribes from capture end events.
     *
     * @param { 'captureEnd' } type - Event type. The value is fixed at **'captureEnd'**. The event can be listened for
     *     when a photoOutput instance is created.
     * @param { AsyncCallback<CaptureEndInfo> } callback - Callback used to return the result. If this parameter is
     *     specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
     * Subscribes to capture ready events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'captureReady' } type - Event type. The value is fixed at **'captureReady'**. The event can be listened
     *     for when a photoOutput instance is created. The event is triggered and the corresponding information is
     *     returned when it is ready to take the next photo.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Unsubscribes from capture ready events.
     *
     * @param { 'captureReady' } type - Event type. The value is fixed at **'captureReady'**. The event can be listened
     *     for when a photoOutput instance is created.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If this parameter is specified, the
     *     subscription to the specified event with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * Subscribes to estimated capture duration events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'estimatedCaptureDuration' } type - Event type. The value is fixed at **'estimatedCaptureDuration'**.
     *     The event can be listened for when a photoOutput instance is created. This event is triggered and the
     *     corresponding information is returned when the photo capture is complete.
     * @param { AsyncCallback<double> } callback - Callback used to return the estimated duration when the sensor
     *     captures frames at the bottom layer in a single capture, measured in units of milliseconds. If **–1** is
     *     reported, there is no estimated duration.
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
     * Unsubscribes from estimated capture duration events.
     *
     * @param { 'estimatedCaptureDuration' } type - Event type. The value is fixed at **'estimatedCaptureDuration'**.
     *     The event can be listened for when a photoOutput instance is created.
     * @param { AsyncCallback<double> } callback - Callback used to return the result. If this parameter is specified,
     *     the subscription to the specified event with the specified callback is canceled. (The callback object cannot
     *     be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * Subscribes to PhotoOutput error events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     photoOutput instance is created. This event is triggered and the corresponding error message is returned when
     *     an error occurs during the calling of a photo-related API.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
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
     * Unsubscribes from PhotoOutput error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     photoOutput instance is created.
     * @param { ErrorCallback } callback - Callback used to return the result. If this parameter is specified, the
     *     subscription to the specified event with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * Obtains the profile that takes effect currently.
     *
     * @returns { Profile } Profile obtained.
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
     * Checks whether taking moving photos is supported.
     *
     * @returns { boolean } Check result for the support of taking moving photos. **true** if supported, **false**
     *     otherwise. If the API call fails, undefined is returned.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    isMovingPhotoSupported(): boolean;

    /**
     * Enables or disables the feature of taking moving photos.
     *
     * @permission ohos.permission.MICROPHONE
     * @param { boolean } enabled - Whether to enable the feature of taking moving photos. **true** to enable, **false**
     *     otherwise.
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
     * Checks whether the specified photo quality prioritization strategy is supported.
     *
     * @param { PhotoQualityPrioritization } qualityPrioritization - Photo quality prioritization strategy.
     * @returns { boolean } Check result for the support of the specified photo quality prioritization strategy.
     *     **true** if supported, **false** otherwise.
     * @throws { BusinessError } 7400201 - Camera service fatal error,
     *     reconfiguring streams is needed to recover from failure.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    isPhotoQualityPrioritizationSupported(qualityPrioritization: PhotoQualityPrioritization): boolean;

    /**
     * Sets the photo quality prioritization strategy.
     * Before setting the strategy, you can call
     * [isPhotoQualityPrioritizationSupported]{@link camera.PhotoOutput.isPhotoQualityPrioritizationSupported} to check
     * whether the device supports the specified photo quality prioritization strategy.
     *
     * @param { PhotoQualityPrioritization } qualityPrioritization - Photo quality prioritization strategy.
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
     * Obtains the photo rotation angle.
     *
     * - Device's natural orientation: the default orientation for using a device. For example, the default orientation
     * of the bar-type phone is in portrait mode, with the charging port facing downward.
     * - Camera lens angle: equivalent to the angle at which the camera is rotated clockwise to match the device's
     * natural orientation. For example, the rear camera sensor of a bar-type phone is installed in landscape mode.
     * Therefore, it needs to be rotated by 90 degrees clockwise to match the device's natural orientation.
     *
     * @param { int } deviceDegree - Device rotation angle, measured in degrees, within the range of [0, 360].<br>If the
     *     input value goes beyond this range, the system uses the remainder of the input value divided by 360.<br>Since
     *     API version 23, the input parameter **deviceDegree** is optional. If no parameter is passed, the system
     *     obtains the **deviceDegree** value to calculate the photo rotation angle. [since 12 - 22]
     * @param { int } [deviceDegree] - Device rotation angle, measured in degrees, within the range of [0, 360].<br>If
     *     the input value goes beyond this range, the system uses the remainder of the input value divided by 360.<br>
     *     Since API version 23, the input parameter **deviceDegree** is optional. If no parameter is passed, the system
     *     obtains the **deviceDegree** value to calculate the photo rotation angle. [since 23]
     * @returns { ImageRotation } Rotation angle of the photo. If the API call fails, undefined is returned.
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
  }

  /**
   * Describes the frame shutter information.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface FrameShutterInfo {
    /**
     * ID of this capture action.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    captureId: int;
    /**
     * Timestamp of the shutter, in milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    timestamp: long;
  }

  /**
   * Describes the frame shutter end information during capture.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 12 dynamic
   * @since 23 static
   */
  interface FrameShutterEndInfo {
    /**
     * ID of this capture action.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    captureId: int;
  }

  /**
   * Describes the capture start information.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 11 dynamic
   * @since 23 static
   */
  interface CaptureStartInfo {
    /**
     * ID of this capture action.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    captureId: int;
    /**
     * Estimated duration when the sensor captures frames at the bottom layer in a single capture. If **–1** is reported
     * , there is no estimated duration.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 11 dynamic
     * @since 23 static
     */
    time: long;
  }

  /**
   * Describes the capture end information.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CaptureEndInfo {
    /**
     * ID of this capture action.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    captureId: int;
    /**
     * Number of frames captured.
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
   * **VideoOutput** implements output information used in a video session. It inherits from
   * [CameraOutput]{@link camera.CameraOutput}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface VideoOutput extends CameraOutput {
    /**
     * Starts video recording. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If video recording starts
     *     successfully, **err** is **undefined**; otherwise, **err** is an error object with an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * Starts video recording. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * Stops video recording. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If video recording stops
     *     successfully, **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stops video recording. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * Checks whether mirror recording is supported.
     *
     * @returns { boolean } Check result for the support of mirror recording. **true** if supported, **false**
     *     otherwise. If the API call fails, undefined is returned.
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 14]
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 14]
     * @publicapi [since 15 - 18]
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    isMirrorSupported(): boolean;

    /**
     * Enables or disables mirror recording.
     *
     * - Before calling this API, check whether mirror recording is supported by using
     * [isMirrorSupported]{@link camera.VideoOutput.isMirrorSupported}.
     * - After enabling or disabling mirror recording, call
     * [getVideoRotation]{@link camera.VideoOutput.getVideoRotation} to obtain the rotation angle and
     * [updateRotation]{@link @ohos.multimedia.media:media.AVRecorder.updateRotation} to update the rotation angle.
     *
     * @param { boolean } enabled - Whether to enable mirror recording. **true** to enable, **false** otherwise.
     * @throws { BusinessError } 202 - Not System Application. [since 12 - 14]
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400103 - Session not config.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi [since 12 - 14]
     * @publicapi [since 15 - 18]
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    enableMirror(enabled: boolean): void;

    /**
     * Obtains the supported frame rates.
     *
     * @returns { Array<FrameRateRange> } Array of supported frame rates. If the API call fails, undefined is returned.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getSupportedFrameRates(): Array<FrameRateRange>;

    /**
     * Sets a frame rate range for preview streams. The range must be within the supported frame rate range, which can
     * be obtained by calling [getSupportedFrameRates]{@link camera.PreviewOutput.getSupportedFrameRates}.
     *
     * > **NOTE**
     * >
     * > This API is valid only in [PhotoSession]{@link camera.PhotoSession} or
     * > [VideoSession]{@link camera.VideoSession} mode.
     *
     * @param { int } minFps - Minimum frame rate, in fps. When the maximum value is less than the minimum value, the
     *     API does not take effect.
     * @param { int } maxFps - Maximum frame rate, in fps. When the minimum value is greater than the maximum value, the
     *     API does not take effect.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400110 - Unresolved conflicts with current configurations.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    setFrameRate(minFps: int, maxFps: int): void;

    /**
     * Obtains the configured frame rate range.
     * This API is valid only after [setFrameRate]{@link camera.PreviewOutput.setFrameRate} is called to set a frame
     * rate range for preview streams.
     *
     * @returns { FrameRateRange } Frame rate range.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 12 dynamic
     * @since 23 static
     */
    getActiveFrameRate(): FrameRateRange;

    /**
     * Obtains the video rotation angle.
     *
     * - Device's natural orientation: the default orientation for using a device. For example, the default orientation
     * of the bar-type phone is in portrait mode, with the charging port facing downward.
     * - Camera lens angle: equivalent to the angle at which the camera is rotated clockwise to match the device's
     * natural orientation. For example, the rear camera sensor of a bar-type phone is installed in landscape mode.
     * Therefore, it needs to be rotated by 90 degrees clockwise to match the device's natural orientation.
     *
     * @param { int } deviceDegree - Device rotation angle, measured in degrees, within the range of [0, 360].<br>Since
     *     API version 23, the input parameter **deviceDegree** is optional. If no parameter is passed, the system
     *     obtains the **deviceDegree** value to calculate the video rotation angle. [since 12 - 22]
     * @param { int } [deviceDegree] - Device rotation angle, measured in degrees, within the range of [0, 360].<br>
     *     Since API version 23, the input parameter **deviceDegree** is optional. If no parameter is passed, the system
     *     obtains the **deviceDegree** value to calculate the video rotation angle. [since 23]
     * @returns { ImageRotation } Returns the rotation angle of a video. If the API call fails, undefined is returned.
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
     * Subscribes to preview frame start events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'frameStart' } type - Event type. The value is fixed at **'frameStart'**. The event can be listened for
     *     when a previewOutput instance is created. This event is triggered and returned when the bottom layer starts
     *     exposure for the first time.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. The preview starts as long as this
     *     event is returned.
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
     * Unsubscribes from preview frame start events.
     *
     * @param { 'frameStart' } type - Event type. The value is fixed at **'frameStart'**. The event can be listened for
     *     when a previewOutput instance is created.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If this parameter is specified, the
     *     subscription to the specified event with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * Subscribes to preview frame end events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'frameEnd' } type - Event type. The value is fixed at **'frameEnd'**. The event can be listened for when
     *     a previewOutput instance is created. This event is triggered and returned when the last frame of preview
     *     ends.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. The preview ends as long as this
     *     event is returned.
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
     * Unsubscribes from preview frame end events.
     *
     * @param { 'frameEnd' } type - Event type. The value is fixed at **'frameEnd'**. The event can be listened for when
     *     a previewOutput instance is created.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If this parameter is specified, the
     *     subscription to the specified event with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * Subscribes to metadata error events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     metadataOutput instance is created. This event is triggered and the corresponding error message is returned
     *     when an error occurs during the use of a metadata-related API such as
     *     [start]{@link camera.MetadataOutput.start()} or
     *     [CameraOutput.release]{@link camera.CameraOutput.release()}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
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
     * Unsubscribes from metadata error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     metadataOutput instance is created.
     * @param { ErrorCallback } callback - Callback used to return the result. If this parameter is specified, the
     *     subscription to the specified event with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * Obtains the profile that takes effect currently.
     *
     * @returns { VideoProfile } Profile obtained.
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
   * Enumerates the types of metadata objects used for camera detection.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  enum MetadataObjectType {
    /**
     * Metadata object used for face detection.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    FACE_DETECTION = 0,

    /**
     * Metadata object used for human body detection.
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
     * Metadata object used for cat face detection.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    CAT_FACE = 2,

    /**
     * Metadata object used for cat body detection.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    CAT_BODY = 3,

    /**
     * Metadata object used for dog face detection.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    DOG_FACE = 4,

    /**
     * Metadata object used for dog body detection.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    DOG_BODY = 5,

    /**
     * Metadata object used for salient detection.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    SALIENT_DETECTION = 6,

    /**
     * Barcode detection type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    BAR_CODE_DETECTION = 7,

    /**
     * Basic face detection type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    BASIC_FACE_DETECTION = 8,
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
   * Describes a rectangle. The coordinate system for the returned detection points is based on the landscape device
   * orientation, with the charging port on the right. In this coordinate system, the top-left corner is (0, 0), and the
   * bottom-right corner is (1, 1). Here, **topLeftX** and **topLeftY** represent the coordinates of the top-left corner
   * of the rectangle, whereas **width** and **height** represent the width and height of the rectangle, respectively.
   * When cropping or selecting a face region based on specific requirements, the x and y coordinates of the rectangle
   * must be multiplied by the width and height of the actual camera preview output stream to obtain the cropped face
   * region.
   * The width and height of the actual preview stream refer to the resolution of the camera output stream. For details,
   * see **size** in [profile]{@link camera.Profile}.
   * For details about how to obtain the preview stream data, see
   * [Dual-Channel Preview (ArkTS)](docroot://media/camera/camera-dual-channel-preview.md).
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Rect {
    /**
     * X coordinate of the top-left corner of the rectangle, in the range of [0, 1].
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    topLeftX: double;
    /**
     * Y coordinate of the top-left corner of the rectangle, in the range of [0, 1].
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    topLeftY: double;
    /**
     * Width of the rectangle, in the range of [0, 1].
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    width: double;
    /**
     * Height of the rectangle, in the range of [0, 1].
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    height: double;
  }

  /**
   * Enumerates the types of emotions in the detected human face information.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum Emotion {
    /**
     * Quiet and calm.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    NEUTRAL = 0,

    /**
     * Sad.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    SADNESS = 1,

    /**
     * Smile.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    SMILE = 2,

    /**
     * Surprise.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    SURPRISE = 3
  }

  /**
   * Implements the basic metadata object used for camera detection. It serves as the data source of the camera
   * information in [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface MetadataObject {
    /**
     * Metadata object type.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly type: MetadataObjectType;

    /**
     * Current timestamp, in nanoseconds (ns).
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly timestamp: int;

    /**
     * Metadata rectangle.
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
  }

  /**
   * Metadata object for basic face.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  interface MetadataBasicFaceObject extends MetadataObject {
    /**
     * Bounding box for left eye.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    readonly leftEyeBoundingBox?: Rect;

    /**
     * Bounding box for right eye.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    readonly rightEyeBoundingBox?: Rect;

    /**
     * Pitch angle for face.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    readonly pitchAngle?: int;

    /**
     * Yaw angle for face.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    readonly yawAngle?: int;

    /**
     * Roll angle for face.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    readonly rollAngle?: int;
  }

  /**
   * Implements the human face metadata object used for camera detection. It inherits from
   * [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in
   * [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface MetadataFaceObject extends MetadataObject {
    /**
     * Left eye area.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly leftEyeBoundingBox: Rect;

    /**
     * Right eye area.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly rightEyeBoundingBox: Rect;

    /**
     * Detected emotion.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly emotion: Emotion;

    /**
     * Confidence of the emotion detection, with a value range of [0, 1].
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly emotionConfidence: double;

    /**
     * Pitch angle, with a value range of [-90, 90], where downward is positive.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly pitchAngle: int;

    /**
     * Yaw angle, with a value range of [-90, 90], where rightward is positive.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly yawAngle: int;

    /**
     * Row angle, with a value range of [-180, 180], where clockwise direction is positive.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly rollAngle: int;
  }

  /**
   * Implements the human body metadata object used for camera detection. It inherits from
   * [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in
   * [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface MetadataHumanBodyObject extends MetadataObject {
  }

  /**
   * Implements the cat face metadata object used for camera detection. It inherits from
   * [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in
   * [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface MetadataCatFaceObject extends MetadataObject {
    /**
     * Left eye area.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly leftEyeBoundingBox: Rect;

    /**
     * Right eye area.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly rightEyeBoundingBox: Rect;
  }

  /**
   * Implements the cat body metadata object used for camera detection. It inherits from
   * [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in
   * [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface MetadataCatBodyObject extends MetadataObject {
  }

  /**
   * Implements the dog face metadata object used for camera detection. It inherits from
   * [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in
   * [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface MetadataDogFaceObject extends MetadataObject {
    /**
     * Left eye area.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly leftEyeBoundingBox: Rect;

    /**
     * Right eye area.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly rightEyeBoundingBox: Rect;
  }

  /**
   * Implements the dog body metadata object used for camera detection. It inherits from
   * [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in
   * [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface MetadataDogBodyObject extends MetadataObject {
  }

  /**
   * Implements the salient detection metadata object used for camera detection. It inherits from
   * [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in
   * [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface MetadataSalientDetectionObject extends MetadataObject {
  }

  /**
   * Implements the barcode metadata object used for camera detection. It inherits from
   * [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in
   * [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput.
   * [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  interface MetadataBarcodeObject extends MetadataObject {
  }

  /**
   * Describes the instance returned by the occlusion status callback, which indicates whether the camera lens is
   * blocked or dirty.
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
     * Whether the camera lens is blocked. **true** if blocked, **false** otherwise.
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
     * Whether the camera lens is dirty. **true** if dirty, false otherwise.
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
   * Implements metadata streams. It inherits from [CameraOutput]{@link camera.CameraOutput}.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 10 dynamic
   * @since 23 static
   */
  interface MetadataOutput extends CameraOutput {
    /**
     * Starts to output metadata. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the metadata output starts
     *     successfully, **err** is **undefined**; otherwise, **err** is an error object with an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * Starts to output metadata. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7400103 - Session not config.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * Stops outputting metadata. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the metadata output stops
     *     successfully, **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stops outputting metadata. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 10 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * Adds the types of metadata objects to be detected.
     *
     * @param { Array<MetadataObjectType> } types - Metadata object types, which are obtained through
     *     **getSupportedOutputCapability**.
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
     * Removes the types of metadata objects to be detected.
     *
     * @param { Array<MetadataObjectType> } types - Metadata object types, which are obtained through
     *     **getSupportedOutputCapability**.
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
     * Subscribes to events indicating available metadata objects. This API uses an asynchronous callback to return the
     * result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'metadataObjectsAvailable' } type - Event type. The value is fixed at **'metadataObjectsAvailable'**.
     *     The event can be listened for when a metadataOutput instance is created.<br>This event is triggered and the
     *     corresponding metadata is returned when valid metadata is detected. If the input field is incorrect, no valid
     *     listening will be created.
     * @param { AsyncCallback<Array<MetadataObject>> } callback - Callback used to return the metadata.
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
     * Unsubscribes from events indicating available metadata objects.
     *
     * @param { 'metadataObjectsAvailable' } type - Event type. The value is fixed at **'metadataObjectsAvailable'**.
     *     The event can be listened for when a metadataOutput instance is created.
     * @param { AsyncCallback<Array<MetadataObject>> } callback - Callback used to return the result. If this parameter
     *     is specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.
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
     * Subscribes to metadata error events. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     metadataOutput instance is created. This event is triggered and the corresponding error message is returned
     *     when an error occurs during the use of a metadata-related API such as
     *     [start]{@link camera.MetadataOutput.start()} or
     *     [CameraOutput.release]{@link camera.CameraOutput.release()}.
     * @param { ErrorCallback } callback - Callback used to return an error code defined in
     *     [CameraErrorCode]{@link camera.CameraErrorCode}.
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
     * Unsubscribes from metadata error events.
     *
     * @param { 'error' } type - Event type. The value is fixed at **'error'**. The event can be listened for when a
     *     metadataOutput instance is created.
     * @param { ErrorCallback } callback - Callback used to return the result. If this parameter is specified, the
     *     subscription to the specified event with the specified callback is canceled. (The callback object cannot be
     *     an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are
     *     canceled.
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
     * @param { int } interval - Shooting interval, in ms.
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
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface ControlCenterSession extends Beauty, Aperture {
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
   * Enumerates the camera concurrency types.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 18 dynamic
   * @since 23 static
   */
  enum CameraConcurrentType {
    /**
     * Full camera concurrency.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    CAMERA_FULL_CAPABILITY = 1,

    /**
     * Limited camera concurrency.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    CAMERA_LIMITED_CAPABILITY = 0
   }

  /**
   * Describes the camera's concurrency information.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @atomicservice [since 19]
   * @since 18 dynamic
   * @since 23 static
   */
  interface CameraConcurrentInfo {
    /**
     * Concurrent camera device.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    readonly device: CameraDevice;

    /**
     * Scene mode.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    readonly modes: Array<SceneMode>;

    /**
     * Output capabilities of the camera.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice [since 19]
     * @since 18 dynamic
     * @since 23 static
     */
    readonly outputCapabilities: Array<CameraOutputCapability>;

    /**
     * Concurrency type.
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
   * Enumerates the optical image stabilization (OIS) mode.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum OISMode {  
    /**
     * OIS is disabled.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    OFF = 0,

    /**
     * OIS is automatically controlled.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    AUTO = 1,

    /**
     * OIS is controlled by the application.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    CUSTOM = 2
  }
  /**
   * Enumerates the OIS axes.
   *
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum OISAxes {  
    /**
     * Pitch axis. It controls the up-down rotation of the camera body, that is, the camera body rotates around the axis
     * horizontal to the lens.
     *
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    PITCH = 0,

    /**
     * Yaw axis. It controls the left-right rotation of the camera body, that is, the camera body rotates around the 
     * axis perpendicular to the lens.
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
}

export default camera;