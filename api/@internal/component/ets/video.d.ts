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
 * Seek mode.
 * @since 8
 */
/**
 * Seek mode.
 * @crossplatform
 * @since 10
 */
declare enum SeekMode {
  /**
   * Sync to keyframes before the time point.
   * @since 8
   */
  /**
   * Sync to keyframes before the time point.
   * @crossplatform
   * @since 10
   */
  PreviousKeyframe,

  /**
   * Sync to keyframes after the time point.
   * @since 8
   */
  /**
   * Sync to keyframes after the time point.
   * @crossplatform
   * @since 10
   */
  NextKeyframe,

  /**
   * Sync to closest keyframes.
   * @since 8
   */
  /**
   * Sync to closest keyframes.
   * @crossplatform
   * @since 10
   */
  ClosestKeyframe,

  /**
   * Seek to frames closest the time point.
   * @since 8
   */
  /**
   * Seek to frames closest the time point.
   * @crossplatform
   * @since 10
   */
  Accurate,
}

/**
 * playback speed.
 * @since 8
 */
/**
 * playback speed.
 * @crossplatform
 * @since 10
 */
declare enum PlaybackSpeed {
  /**
   * 0.75x speed playback.
   * @since 8
   */
  /**
   * 0.75x speed playback.
   * @crossplatform
   * @since 10
   */
  Speed_Forward_0_75_X,

  /**
   * 1.00x speed playback.
   * @since 8
   */
  /**
   * 1.00x speed playback.
   * @crossplatform
   * @since 10
   */
  Speed_Forward_1_00_X,

  /**
   * 1.25x speed playback.
   * @since 8
   */
  /**
   * 1.25x speed playback.
   * @crossplatform
   * @since 10
   */
  Speed_Forward_1_25_X,

  /**
   * 1.75x speed playback.
   * @since 8
   */
  /**
   * 1.75x speed playback.
   * @crossplatform
   * @since 10
   */
  Speed_Forward_1_75_X,

  /**
   * 2.00x speed playback.
   * @since 8
   */
  /**
   * 2.00x speed playback.
   * @crossplatform
   * @since 10
   */
  Speed_Forward_2_00_X,
}

/**
 * Defines the video options.
 * @since 7
 */
/**
 * Defines the video options.
 * @crossplatform
 * @since 10
 */
declare interface VideoOptions {
  /**
   * src of video.
   * @since 7
   */
  /**
   * src of video.
   * @crossplatform
   * @since 10
   */
  src?: string | Resource;

  /**
   * playback rate of video.
   * @since 7
   */
  /**
   * playback rate of video.
   * @crossplatform
   * @since 10
   */
  currentProgressRate?: number | string | PlaybackSpeed;

  /**
   * preview uri of video.
   * @since 7
   */
  /**
   * preview uri of video.
   * @crossplatform
   * @since 10
   */
  previewUri?: string | PixelMap | Resource;

  /**
   * controller of video.
   * @since 7
   */
  /**
   * controller of video.
   * @crossplatform
   * @since 10
   */
  controller?: VideoController;
}

/**
 * Defines the video controller.
 * @since 7
 */
/**
 * Defines the video controller.
 * @crossplatform
 * @since 10
 */
declare class VideoController {
  /**
   * constructor.
   * @since 7
   */
  /**
   * constructor.
   * @crossplatform
   * @since 10
   */
  constructor();

  /**
   * Provides events to play.
   * @since 7
   */
  /**
   * Provides events to play.
   * @crossplatform
   * @since 10
   */
  start();

  /**
   * Provides a pause event for playback.
   * @since 7
   */
  /**
   * Provides a pause event for playback.
   * @crossplatform
   * @since 10
   */
  pause();

  /**
   * Provides an event to stop playback.
   * @since 7
   */
  /**
   * Provides an event to stop playback.
   * @crossplatform
   * @since 10
   */
  stop();

  /**
   * Provide the progress method of video playback.
   * @since 7
   */
  /**
   * Provide the progress method of video playback.
   * @crossplatform
   * @since 10
   */
  setCurrentTime(value: number);

  /**
   * Provides a full screen playback method.
   * @since 7
   */
  /**
   * Provides a full screen playback method.
   * @crossplatform
   * @since 10
   */
  requestFullscreen(value: boolean);

  /**
   * Provides a method to exit full screen playback.
   * @since 7
   */
  /**
   * Provides a method to exit full screen playback.
   * @crossplatform
   * @since 10
   */
  exitFullscreen();

  /**
   * Provide the progress method of video playback.
   * @since 8
   */
  /**
   * Provide the progress method of video playback.
   * @crossplatform
   * @since 10
   */
  setCurrentTime(value: number, seekMode: SeekMode);
}

/**
 * Defines the video interface.
 * @since 7
 */
/**
 * Defines the video interface.
 * @crossplatform
 * @since 10
 */
interface VideoInterface {
  /**
   * Set the value.
   * @since 7
   */
  /**
   * Set the value.
   * @crossplatform
   * @since 10
   */
  (value: VideoOptions): VideoAttribute;
}

/**
 * Defines the video attribute functions.
 * @since 7
 */
/**
 * Defines the video attribute functions.
 * @crossplatform
 * @since 10
 */
declare class VideoAttribute extends CommonMethod<VideoAttribute> {
  /**
   * Called when judging whether the video is muted.
   * @since 7
   */
  /**
   * Called when judging whether the video is muted.
   * @crossplatform
   * @since 10
   */
  muted(value: boolean): VideoAttribute;

  /**
   * Called when judging whether the video is played automatically.
   * @since 7
   */
  /**
   * Called when judging whether the video is played automatically.
   * @crossplatform
   * @since 10
   */
  autoPlay(value: boolean): VideoAttribute;

  /**
   * Called when judging whether the control bar is displayed.
   * @since 7
   */
  /**
   * Called when judging whether the control bar is displayed.
   * @crossplatform
   * @since 10
   */
  controls(value: boolean): VideoAttribute;

  /**
   * Called when judging whether the video is played circular.
   * @since 6
   */
  /**
   * Called when judging whether the video is played circular.
   * @crossplatform
   * @since 10
   */
  loop(value: boolean): VideoAttribute;

  /**
   * Called when determining the zoom type of the video source.
   * @since 7
   */
  /**
   * Called when determining the zoom type of the video source.
   * @crossplatform
   * @since 10
   */
  objectFit(value: ImageFit): VideoAttribute;

  /**
   * Called when the video is played.
   * @since 7
   */
  /**
   * Called when the video is played.
   * @crossplatform
   * @since 10
   */
  onStart(event: () => void): VideoAttribute;

  /**
   * Called when the video is paused.
   * @since 7
   */
  /**
   * Called when the video is paused.
   * @crossplatform
   * @since 10
   */
  onPause(event: () => void): VideoAttribute;

  /**
   * Called when the video playback ends.
   * @since 7
   */
  /**
   * Called when the video playback ends.
   * @crossplatform
   * @since 10
   */
  onFinish(event: () => void): VideoAttribute;

  /**
   * Called when the video enters and exits the full screen.
   * @since 7
   */
  /**
   * Called when the video enters and exits the full screen.
   * @crossplatform
   * @since 10
   */
  onFullscreenChange(callback: (event?: {
    /**
     * Play the flag in full screen.
     * @crossplatform
     * @since 10
     */
    fullscreen: boolean
  }) => void): VideoAttribute;

  /**
   * Called when the video preparation is complete.
   * @since 7
   */
  /**
   * Called when the video preparation is complete.
   * @crossplatform
   * @since 10
   */
  onPrepared(callback: (event?: {
    /**
     * Playback duration.
     * @crossplatform
     * @since 10
     */
    duration: number
  }) => void): VideoAttribute;

  /**
   * Called when the time information is reported when the progress bar process is operated.
   * @since 7
   */
  /**
   * Called when the time information is reported when the progress bar process is operated.
   * @crossplatform
   * @since 10
   */
  onSeeking(callback: (event?: {
    /**
     * Play time.
     * @crossplatform
     * @since 10
     */
    time: number
  }) => void): VideoAttribute;

  /**
   * Called when the playback time information is reported after the operation progress bar is completed.
   * @since 7
   */
  /**
   * Called when the playback time information is reported after the operation progress bar is completed.
   * @crossplatform
   * @since 10
   */
  onSeeked(callback: (event?: {
    /**
     * Play time.
     * @crossplatform
     * @since 10
     */
    time: number
  }) => void): VideoAttribute;

  /**
   * Called when the playback progress changes.
   * @since 7
   */
  /**
   * Called when the playback progress changes.
   * @crossplatform
   * @since 10
   */
  onUpdate(callback: (event?: {
    /**
     * Play time.
     * @crossplatform
     * @since 10
     */
    time: number
  }) => void): VideoAttribute;

  /**
   * Called when playback fails.
   * @since 7
   */
  /**
   * Called when playback fails.
   * @crossplatform
   * @since 10
   */
  onError(event: () => void): VideoAttribute;
}

/**
 * Defines Video Component.
 * @since 7
 */
/**
 * Defines Video Component.
 * @crossplatform
 * @since 10
 */
declare const Video: VideoInterface;

/**
 * Defines Video Component instance.
 * @since 7
 */
/**
 * Defines Video Component instance.
 * @crossplatform
 * @since 10
 */
declare const VideoInstance: VideoAttribute;
