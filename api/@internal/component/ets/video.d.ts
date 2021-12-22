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

import { CommonMethod } from "./common";
import { ImageFit } from "./enums";
import { Resource } from "./units";

/**
 * @since 7
 */
export declare class VideoController {
  /**
   * constructor.
   * @since 7
   */
  constructor();

  /**
   * Provides events to play.
   * @since 7
   */
  start();

  /**
   * Provides a pause event for playback.
   * @since 7
   */
  pause();

  /**
   * Provides an event to stop playback.
   * @since 6
   */
  stop();

  /**
   * Provide the progress method of video playback.
   * @since 7
   */
  setCurrentTime(value: number);

  /**
   * Provides a full screen playback method.
   * @since 7
   */
  requestFullscreen(value: boolean);

  /**
   * Provides a method to exit full screen playback.
   * @since 7
   */
  exitFullscreen();
}

/**
 * @since 7
 */
interface Video extends VideoAttribute<Video> {
  /**
   * Set the value.
   * @since 7
   */
  (value: {
    src?: string | Resource;
    currentProgressRate?: number | string;
    previewUri?: string;
    controller?: VideoController;
  }): Video;
}

/**
 * @since 7
 */
declare class VideoAttribute<T> extends CommonMethod<T> {
  /**
   * Called when judging whether the video is muted.
   * @since 7
   */
  muted(value: boolean): T;

  /**
   * Called when judging whether the video is played automatically.
   * @since 7
   */
  autoPlay(value: boolean): T;

  /**
   * Called when judging whether the control bar is displayed.
   * @since 7
   */
  controls(value: boolean): T;

  /**
   * Called when judging whether the video is played circular.
   * @since 6
   */
  loop(value: boolean): T;

  /**
   * Called when determining the zoom type of the video source.
   * @since 7
   */
  objectFit(value: ImageFit): T;

  /**
   * Called when the video is played.
   * @since 7
   */
  onStart(event: () => void): T;

  /**
   * Called when the video is paused.
   * @since 7
   */
  onPause(event: () => void): T;

  /**
   * Called when the video playback ends.
   * @since 7
   */
  onFinish(event: () => void): T;

  /**
   * Called when the video enters and exits the full screen.
   * @since 7
   */
  onFullscreenChange(callback: (event?: { fullscreen: boolean }) => void): T;

  /**
   * Called when the video preparation is complete.
   * @since 7
   */
  onPrepared(callback: (event?: { duration: number }) => void): T;

  /**
   * Called when the time information is reported when the progress bar process is operated.
   * @since 7
   */
  onSeeking(callback: (event?: { time: number }) => void): T;

  /**
   * Called when the playback time information is reported after the operation progress bar is completed.
   * @since 7
   */
  onSeeked(callback: (event?: { time: number }) => void): T;

  /**
   * Called when the playback progress changes.
   * @since 7
   */
  onUpdate(callback: (event?: { time: number }) => void): T;

  /**
   * Called when playback fails.
   * @since 7
   */
  onError(event: () => void): T;
}

export declare class VideoExtend<T> extends VideoAttribute<T> {}
export declare const VideoInterface: Video;
