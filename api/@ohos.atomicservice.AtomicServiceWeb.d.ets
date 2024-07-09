/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 */

import { Callback } from '@ohos.base';

/**
 * Defines AtomicServiceWeb Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
@Component
export declare struct AtomicServiceWeb {
  /**
   * The address of the web page to be displayed.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  src: ResourceStr;
  /**
   * The navPathStack to control page route in Navigation and NavDestination.
   *
   * @type { ?NavPathStack }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  navPathStack?: NavPathStack;
  /**
   * The callback method to invoke after page is back or destroyed if postMessage() is called in H5 page.
   *
   * @type { ?Callback<OnMessageEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  onMessage?: Callback<OnMessageEvent>;
  /**
   * Triggered when the web page receives a web resource loading error.
   *
   * @type { ?Callback<OnErrorReceiveEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  onErrorReceive?: Callback<OnErrorReceiveEvent>;
  /**
   * Triggered when the web page receives a web resource loading HTTP error.
   *
   * @type { ?Callback<OnHttpErrorReceiveEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  onHttpErrorReceive?: Callback<OnHttpErrorReceiveEvent>;
  /**
   * Triggered at the begin of web page loading.
   *
   * @type { ?Callback<OnPageBeginEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  onPageBegin?: Callback<OnPageBeginEvent>;
  /**
   * Triggered at the end of web page loading.
   *
   * @type { ?Callback<OnPageEndEvent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  onPageEnd?: Callback<OnPageEndEvent>;
}

/**
 * The class for OnMessageEvent.
 *
 * @typedef OnMessageEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare interface OnMessageEvent {
  /**
   * The message data list.
   *
   * @type { object[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  data: object[];
}

/**
 * The class for OnErrorReceiveEvent.
 *
 * @typedef OnErrorReceiveEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare interface OnErrorReceiveEvent {
  /**
   * Web resource request of event.
   *
   * @type { WebResourceRequest }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  request: WebResourceRequest;

  /**
   * Web resource error of event.
   *
   * @type { WebResourceError }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  error: WebResourceError;
}

/**
 * The class for OnHttpErrorReceiveEvent.
 *
 * @typedef OnHttpErrorReceiveEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare interface OnHttpErrorReceiveEvent {
  /**
   * Web resource request of event.
   *
   * @type { WebResourceRequest }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  request: WebResourceRequest;

  /**
   * Web resource response of event.
   *
   * @type { WebResourceResponse }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  response: WebResourceResponse;
}

/**
 * The class for OnPageBeginEvent.
 *
 * @typedef OnPageBeginEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare interface OnPageBeginEvent {
  /**
   * The url of page.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  url: string;
}

/**
 * The class for OnPageEndEvent.
 *
 * @typedef OnPageEndEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare interface OnPageEndEvent {
  /**
   * The url of page.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  url: string;
}
