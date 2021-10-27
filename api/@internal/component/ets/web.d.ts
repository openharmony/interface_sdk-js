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

/**
 * Defines the WebController.
 * @since 8
 */
export declare class WebController {
  /**
   * Defines the constructor of WebController.
   * @since 8
   */
  constructor();

  /**
   * Reload current web page.
   * @since 8
   */
  reload();
}

/**
 * Defines the option of Web component.
 * @since 8
 */
export declare interface WebOption {
  /**
   * The web url.
   * @since 8
   */
  src: string;

  /**
   * The web Controller.
   * @since 8
   */
  controller: WebController;
}

/**
 * Defines the Web component.
 * @since 8
 */
interface Web extends WebAttribute<Web> {
  /**
   * Defines the constructor of Web.
   * @since 8
   */
  (value: WebOption): Web;
}

/**
 * Defines the Web component attribute functions.
 * @since 8
 */
declare class WebAttribute<T> extends CommonMethod<T> {
  /**
   * The Callback of onPageStart.
   * @since 8
   */
  onPageStart(callback: (url: string) => void): T;

  /**
   * The Callback of onPageFinish.
   * @since 8
   */
  onPageFinish(callback: (url: string) => void): T;

  /**
   * The Callback of onError.
   * @since 8
   */
  onError(callback: (errorMsg: string) => void): T;

  /**
   * The Callback of onMessage.
   * @since 8
   */
  onMessage(callback: (msg: string) => void): T;
}

export declare class WebExtend<T> extends WebAttribute<T> {}
export declare const WebInterface: Web;
