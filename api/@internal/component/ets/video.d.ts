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

import {CommonMethod, ImageFit} from "./common";

declare class VideoController {
  constructor();
  start();
  pause();
  stop();
  setCurrentTime(value: number);
  requestFullscreen(value: boolean);
  exitFullscreen();
}

interface Video extends CommonMethod<Video> {
  (value: {
    src?: string,
    currentProgressRate?: number | string,
    previewUri?: string,
    controller?: VideoController
  }): Video;

  muted(value: boolean): Video;
  autoPlay(value: boolean): Video;
  controls(value: boolean): Video;
  loop(value: boolean): Video;
  objectFit(value: ImageFit): Video;

  onStart(event: () => void): Video;
  onPause(event: () => void): Video;
  onFinish(event: () => void): Video;
  onFullscreenChange(callback: (event?: { fullscreen: boolean }) => void): Video;
  onPrepared(callback: (event?: { duration: number }) => void): Video;
  onSeeking(callback: (event?: { time: number }) => void): Video;
  onSeeked(callback: (event?: { time: number }) => void): Video;
  onUpdate(callback: (event?: { time: number }) => void): Video;
  onError(event: () => void): Video;
}

export declare const VideoInterface: Video;
