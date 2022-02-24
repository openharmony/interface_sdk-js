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

import {ErrorCallback, AsyncCallback} from './basic';
import Context from './@ohos.ability';

/**
 * @name camera
 * @syscap SystemCapability.Multimedia.Camera.Core
 * @import import camera from '@ohos.multimedia.camera';
 * @since 8
 * @systemapi
 */
declare namespace camera {

  /**
   * Creates a CameraManager instance.
   * @param context Current application context.
   * @return CameraManager instance.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  function getCameraManager(context: Context, callback: AsyncCallback<CameraManager>): void;
  function getCameraManager(context: Context): Promise<CameraManager>;

  /**
   * Enum for camera status.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum CameraStatus {
    /**
     * Appear status.
     * @since 8
     */
    CAMERA_STATUS_APPEAR = 0,
    /**
     * Disappear status.
     * @since 8
     */
    CAMERA_STATUS_DISAPPEAR,
    /**
     * Available status.
     * @since 8
     */
    CAMERA_STATUS_AVAILABLE,
    /**
     * Unavailable status.
     * @since 8
     */
    CAMERA_STATUS_UNAVAILABLE
  }

  /**
   * Camera manager object.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface CameraManager  {
    /**
     * Gets all camera descriptions.
     * @return All camera descriptions.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    getCameras(callback: AsyncCallback<Array<Camera>>): void;
    getCameras(): Promise<Array<Camera>>;

    /**
     * Creates a CameraInput instance by camera id.
     * @param cameraId Target camera id.
     * @return CameraInput instance.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    createCameraInput(cameraId: string, callback: AsyncCallback<CameraInput>): void;
    createCameraInput(cameraId: string): Promise<CameraInput>;

    /**
     * Creates a CameraInput instance by camera position and type.
     * @param position Target camera position.
     * @param type Target camera type.
     * @return CameraInput instance.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    createCameraInput(position: CameraPosition, type: CameraType, callback: AsyncCallback<CameraInput>): void;
    createCameraInput(position: CameraPosition, type: CameraType): Promise<CameraInput>;

    /**
     * Subscribes camera status change event callback.
     * @param type Event type.
     * @return CameraStatusInfo event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @initial
     */
    on(type: "cameraStatus", callback: AsyncCallback<CameraStatusInfo>): void;
  }

  /**
   * Camera status info.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface CameraStatusInfo {
    /**
     * Camera instance.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    camera: Camera;
    /**
     * Current camera status.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    status: CameraStatus;
  }

  /**
   * Enum for camera position.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum CameraPosition {
    /**
     * Unspecified position.
     * @since 8
     */
    CAMERA_POSITION_UNSPECIFIED = 0,
    /**
     * Back position.
     * @since 8
     */
    CAMERA_POSITION_BACK,
    /**
     * Front position.
     * @since 8
     */
    CAMERA_POSITION_FRONT
  }

  /**
   * Enum for camera type.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum CameraType {
    /**
     * Unspecified camera type
     * @since 8
     */
    CAMERA_TYPE_UNSPECIFIED = 0,

    /**
     * Wide camera
     * @since 8
     */
    CAMERA_TYPE_WIDE_ANGLE,

    /**
     * Ultra wide camera
     * @since 8
     */
    CAMERA_TYPE_ULTRA_WIDE,

    /**
     * Telephoto camera
     * @since 8
     */
    CAMERA_TYPE_TELEPHOTO,

    /**
     * True depth camera
     * @since 8
     */
    CAMERA_TYPE_TRUE_DEPTH
  }

  /**
   * Enum for camera connection type.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum ConnectionType {
    /**
     * Built-in camera.
     * @since 8
     */
    CAMERA_CONNECTION_BUILT_IN = 0,

    /**
     * Camera connected using USB
     * @since 8
     */
    CAMERA_CONNECTION_USB_PLUGIN,

    /**
     * Remote camera
     * @since 8
     */
    CAMERA_CONNECTION_REMOTE
  }

  /**
   * Camera object.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface Camera {
    /**
     * Camera id attribute.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly cameraId: string;
    /**
     * Camera position attribute.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly cameraPosition: CameraPosition;
    /**
     * Camera type attribute.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly cameraType: CameraType;
    /**
     * Camera connection type attribute.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly connectionType: ConnectionType;
  }

  /**
   * Size parameter.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface Size {
    /**
     * Height.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    height: number;
    /**
     * Width.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    width: number;
  }

  /**
   * Enum for camera data format. Align to pixel format and image format value.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum CameraFormat {
    /**
     * YCRCb 420 SP format.
     * @since 8
     */
    CAMERA_FORMAT_YCRCb_420_SP = 1003,

    /**
     * JPEG format.
     * @since 8
     */
    CAMERA_FORMAT_JPEG = 2000,
  }

  /**
   * Camera input object.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface CameraInput {
    /**
     * Gets camera id.
     * @return Camera id.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    getCameraId(callback: AsyncCallback<string>): void;
    getCameraId(): Promise<string>;

    /**
     * Gets all supported sizes for current camera input.
     * @return Supported size array.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    getSupportedSizes(format: CameraFormat, callback: AsyncCallback<Array<Size>>): void;
    getSupportedSizes(format: CameraFormat): Promise<Array<Size>>;

    /**
     * Gets all supported formats for current camera input.
     * @return Supported format array.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    getSupportedPreviewFormats(callback: AsyncCallback<Array<CameraFormat>>): void;
    getSupportedPreviewFormats(): Promise<Array<CameraFormat>>;
    getSupportedPhotoFormats(callback: AsyncCallback<Array<CameraFormat>>): void;
    getSupportedPhotoFormats(): Promise<Array<CameraFormat>>;
    getSupportedVideoFormats(callback: AsyncCallback<Array<CameraFormat>>): void;
    getSupportedVideoFormats(): Promise<Array<CameraFormat>>;

    /**
     * Check if device has flash light.
     * @return Flash light has or not.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    hasFlash(callback: AsyncCallback<boolean>): void;
    hasFlash(): Promise<boolean>;

    /**
     * Gets all supported flash modes for current camera input.
     * @return Supported flash mode array.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    isFlashModeSupported(flashMode: FlashMode, callback: AsyncCallback<boolean>): void;
    isFlashModeSupported(flashMode: FlashMode): Promise<boolean>;

    /**
     * Gets current flash mode.
     * @return Current flash mode.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    getFlashMode(callback: AsyncCallback<FlashMode>): void;
    getFlashMode(): Promise<FlashMode>;

    /**
     * Sets flash mode.
     * @param flashMode Target flash mode.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    setFlashMode(flashMode: FlashMode, callback: AsyncCallback<void>): void;
    setFlashMode(flashMode: FlashMode): Promise<void>;

    /**
     * Gets all supported focus modes for current camera input.
     * @return Supported focus mode array.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    isFocusModeSupported(afMode: FocusMode, callback: AsyncCallback<boolean>): void;
    isFocusModeSupported(afMode: FocusMode): Promise<boolean>;

    /**
     * Gets current focus mode.
     * @return Current focus mode.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    getFocusMode(callback: AsyncCallback<FocusMode>): void;
    getFocusMode(): Promise<FocusMode>;

    /**
     * Sets focus mode.
     * @param afMode Target focus mode.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    setFocusMode(afMode: FocusMode, callback: AsyncCallback<void>): void;
    setFocusMode(afMode: FocusMode): Promise<void>;

    /**
     * Gets all supported zoom ratio range.
     * @param afMode Target focus mode.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    getZoomRatioRange(callback: AsyncCallback<Array<number>>): void;
    getZoomRatioRange(): Promise<Array<number>>;

    /**
     * Gets zoom ratio.
     * @return Current zoom ratio.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    getZoomRatio(callback: AsyncCallback<number>): void;
    getZoomRatio(): Promise<number>;

    /**
     * Sets zoom ratio.
     * @param zoomRatio Target zoom ratio.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    setZoomRatio(zoomRatio: number, callback: AsyncCallback<void>): void;
    setZoomRatio(zoomRatio: number): Promise<void>;

    /**
     * Releases instance.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    release(callback: AsyncCallback<void>): void;
    release(): Promise<void>;

    /**
     * Subscribes focus status change event callback.
     * @param type Event type.
     * @return FocusState event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: "focusStateChange", callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes error event callback.
     * @param type Event type.
     * @return Error event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @initial
     */
    on(type: "error", callback: ErrorCallback<CameraInputError>): void;
  }

  /**
   * Enum for CameraInput error code.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum CameraInputErrorCode {
    /**
     * Unknown error.
     * @since 8
     */
    ERROR_UNKNOWN = -1
  }

  /**
   * Camera input error object.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface CameraInputError extends Error {
    code: CameraInputErrorCode;
  }

  /**
   * Enum for flash mode.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum FlashMode {
    /**
     * Close mode.
     * @since 8
     */
    FLASH_MODE_CLOSE = 0,
    /**
     * Open mode.
     * @since 8
     */
    FLASH_MODE_OPEN,
    /**
     * Auto mode.
     * @since 8
     */
    FLASH_MODE_AUTO,
    /**
     * Always open mode.
     * @since 8
     */
    FLASH_MODE_ALWAYS_OPEN
  }

  /**
   * Enum for focus mode.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum FocusMode {
    /**
     * Manual mode.
     * @since 8
     */
    FOCUS_MODE_MANUAL = 0,
    /**
     * Continuous auto mode.
     * @since 8
     */
    FOCUS_MODE_CONTINUOUS_AUTO,
    /**
     * Auto mode.
     * @since 8
     */
    FOCUS_MODE_AUTO,
    /**
     * Locked mode.
     * @since 8
     */
    FOCUS_MODE_LOCKED
  }

  /**
   * Enum for focus state.
   * @since 8
   */
  enum FocusState {
    /**
     * Scan state.
     * @since 8
     */
    FOCUS_STATE_SCAN = 0,
    /**
     * Focused state.
     * @since 8
     */
    FOCUS_STATE_FOCUSED,
    /**
     * Unfocused state.
     * @since 8
     */
    FOCUS_STATE_UNFOCUSED
  }

  /**
   * Gets a CaptureSession instance.
   * @param context Current application context.
   * @return CaptureSession instance.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  function createCaptureSession(context: Context, callback: AsyncCallback<CaptureSession>): void;
  function createCaptureSession(context: Context): Promise<CaptureSession>;

  /**
   * Capture session object.
   * @since 8
   */
  interface CaptureSession {
    /**
     * Begin capture session config.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    beginConfig(callback: AsyncCallback<void>): void;
    beginConfig(): Promise<void>;

    /**
     * Commit capture session config.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    commitConfig(callback: AsyncCallback<void>): void;
    commitConfig(): Promise<void>;

    /**
     * Adds a camera input.
     * @param cameraInput Target camera input to add.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    addInput(cameraInput: CameraInput, callback: AsyncCallback<void>): void;
    addInput(cameraInput: CameraInput): Promise<void>;

    /**
     * Adds a camera preview output.
     * @param previewOutput Target camera preview output to add.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    addOutput(previewOutput: PreviewOutput, callback: AsyncCallback<void>): void;
    addOutput(previewOutput: PreviewOutput): Promise<void>;

    /**
     * Adds a camera photo output.
     * @param photoOutput Target camera photo output to add.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    addOutput(photoOutput: PhotoOutput, callback: AsyncCallback<void>): void;
    addOutput(photoOutput: PhotoOutput): Promise<void>;

    /**
     * Adds a camera video output.
     * @param videoOutput Target camera video output to add.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    addOutput(videoOutput: VideoOutput, callback: AsyncCallback<void>): void;
    addOutput(videoOutput: VideoOutput): Promise<void>;

    /**
     * Removes a camera input.
     * @param cameraInput Target camera input to remove.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    removeInput(cameraInput: CameraInput, callback: AsyncCallback<void>): void;
    removeInput(cameraInput: CameraInput): Promise<void>;

    /**
     * Removes a camera preview output.
     * @param previewOutput Target camera preview output to remove.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    removeOutput(previewOutput: PreviewOutput, callback: AsyncCallback<void>): void;
    removeOutput(previewOutput: PreviewOutput): Promise<void>;

    /**
     * Removes a camera photo output.
     * @param photoOutput Target camera photo output to remove.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    removeOutput(photoOutput: PhotoOutput, callback: AsyncCallback<void>): void;
    removeOutput(photoOutput: PhotoOutput): Promise<void>;

    /**
     * Removes a camera video output.
     * @param videoOutput Target camera video output to remove.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    removeOutput(videoOutput: VideoOutput, callback: AsyncCallback<void>): void;
    removeOutput(videoOutput: VideoOutput): Promise<void>;

    /**
     * Starts capture session.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    start(callback: AsyncCallback<void>): void;
    start(): Promise<void>;

    /**
     * Stops capture session.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    stop(callback: AsyncCallback<void>): void;
    stop(): Promise<void>;

    /**
     * Release capture session instance.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    release(callback: AsyncCallback<void>): void;
    release(): Promise<void>;

    /**
     * Subscribes error event callback.
     * @param type Event type.
     * @return Error event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @initial
     */
    on(type: "error", callback: ErrorCallback<CaptureSessionError>): void;
  }

  /**
   * Enum for CaptureSession error code.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @initial
   */
  enum CaptureSessionErrorCode {
    ERROR_UNKNOWN = -1
  }

  /**
   * Capture session error object.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @initial
   */
  interface CaptureSessionError extends Error {
    code: CaptureSessionErrorCode;
  }

  /**
   * Creates a PreviewOutput instance.
   * @param surfaceId Surface object id used in camera preview output.
   * @return PreviewOutput instance.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  function createPreviewOutput(surfaceId: string, callback: AsyncCallback<PreviewOutput>): void;
  function createPreviewOutput(surfaceId: string): Promise<PreviewOutput>;

  /**
   * Preview output object.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface PreviewOutput {
    /**
     * Release output instance.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    release(callback: AsyncCallback<void>): void;
    release(): Promise<void>;

    /**
     * Subscribes frame start event callback.
     * @param type Event type.
     * @return Frame start event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: "frameStart", callback: AsyncCallback<void>): void;

    /**
     * Subscribes frame end event callback.
     * @param type Event type.
     * @return Frame end event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: "frameEnd", callback: AsyncCallback<void>): void;

    /**
     * Subscribes error event callback.
     * @param type Event type.
     * @return Error event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @initial
     */
    on(type: "error", callback: ErrorCallback<PreviewOutputError>): void;
  }

  /**
   * Enum for preview output error code.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @initial
   */
  enum PreviewOutputErrorCode {
    ERROR_UNKNOWN = -1
  }

  /**
   * Preview output error object.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @initial
   */
  interface PreviewOutputError extends Error {
    code: PreviewOutputErrorCode;
  }

  /**
   * Creates a PhotoOutput instance.
   * @param surfaceId Surface object id used in camera photo output.
   * @return PhotoOutput instance.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  function createPhotoOutput(surfaceId: string, callback: AsyncCallback<PhotoOutput>): void;
  function createPhotoOutput(surfaceId: string): Promise<PhotoOutput>;

  /**
   * Enumerates the image rotation angles.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum ImageRotation {
    /**
     * The capture image rotates 0 degrees.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    ROTATION_0 = 0,
    
    /**
     * The capture image rotates 90 degrees.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    ROTATION_90 = 90,
    
    /**
     * The capture image rotates 180 degrees.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    ROTATION_180 = 180,
    
    /**
     * The capture image rotates 270 degrees.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    ROTATION_270 = 270
  }

  /**
   * Enumerates the image quality levels.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum QualityLevel {
    /**
     * High image quality.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    QUALITY_LEVEL_HIGH = 0,
    
    /**
     * Medium image quality.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    QUALITY_LEVEL_MEDIUM,
    
    /**
     * Low image quality.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    QUALITY_LEVEL_LOW
  }

  /**
   * Photo capture options to set.
   * @since 8
   */
  interface PhotoCaptureSetting {
    /**
     * Photo image quality.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    quality?: QualityLevel;
    /**
     * Photo rotation.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    rotation?: ImageRotation;
  }

  /**
   * Photo output object.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface PhotoOutput {
    /**
     * Start capture output.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    capture(callback: AsyncCallback<void>): void;
    capture(setting: PhotoCaptureSetting, callback: AsyncCallback<void>): void;
    capture(setting?: PhotoCaptureSetting): Promise<void>;

    /**
     * Release output instance.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    release(callback: AsyncCallback<void>): void;
    release(): Promise<void>;

    /**
     * Subscribes capture start event callback.
     * @param type Event type.
     * @return Capture start event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: "captureStart", callback: AsyncCallback<number>): void;

    /**
     * Subscribes frame shutter event callback.
     * @param type Event type.
     * @return Frame shutter event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @initial
     */
    on(type: "frameShutter", callback: AsyncCallback<FrameShutterInfo>): void;

    /**
     * Subscribes capture end event callback.
     * @param type Event type.
     * @return Capture end event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: "captureEnd", callback: AsyncCallback<CaptureEndInfo>): void;

    /**
     * Subscribes error event callback.
     * @param type Event type.
     * @return Error event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @initial
     */
    on(type: "error", callback: ErrorCallback<PhotoOutputError>): void;
  }

  /**
   * Frame shutter callback info.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface FrameShutterInfo {
    /**
     * Capture id.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    captureId: number;
    /**
     * Timestamp for frame.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    timestamp: number;
  }

  /**
   * Capture end info.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface CaptureEndInfo {
    /**
     * Capture id.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    captureId: number;
    /**
     * Frame count.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    frameCount: number;
  }

  /**
   * Enum for photo output error code.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @initial
   */
  enum PhotoOutputErrorCode {
    ERROR_UNKNOWN = -1
  }

  /**
   * Photo output error object.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @initial
   */
  interface PhotoOutputError extends Error {
    code: PhotoOutputErrorCode;
  }

  /**
   * Creates a VideoOutput instance.
   * @param surfaceId Surface object id used in camera video output.
   * @return VideoOutput instance.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  function createVideoOutput(surfaceId: string, callback: AsyncCallback<VideoOutput>): void;
  function createVideoOutput(surfaceId: string): Promise<VideoOutput>;

  /**
   * Video output object.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface VideoOutput {
    /**
     * Start video output.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    start(callback: AsyncCallback<void>): void;
    start(): Promise<void>;

    /**
     * Stop video output.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    stop(callback: AsyncCallback<void>): void;
    stop(): Promise<void>;

    /**
     * Release output instance.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    release(callback: AsyncCallback<void>): void;
    release(): Promise<void>;

    /**
     * Subscribes frame start event callback.
     * @param type Event type.
     * @return Frame start event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: "frameStart", callback: AsyncCallback<void>): void;

    /**
     * Subscribes frame end event callback.
     * @param type Event type.
     * @return Frame end event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: "frameEnd", callback: AsyncCallback<void>): void;

    /**
     * Subscribes error event callback.
     * @param type Event type.
     * @return Error event callback.
     * @since 8
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @initial
     */
    on(type: "error", callback: ErrorCallback<VideoOutputError>): void;
  }

  /**
   * Enum for video output error code.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @initial
   */
  enum VideoOutputErrorCode {
    ERROR_UNKNOWN = -1
  }

  /**
   * Video output error object.
   * @since 8
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @initial
   */
  interface VideoOutputError extends Error {
    code: VideoOutputErrorCode;
  }
}

export default camera;