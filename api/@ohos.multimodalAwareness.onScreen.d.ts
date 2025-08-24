/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit MultimodalAwarenessKit
 */

import { BusinessError } from './@ohos.base';

/**
 * This module provides the capability to use on screen awareness
 *
 * @namespace onScreen
 * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
 * @since 20
 */

declare namespace onScreen {
  /**
   * Enum for page content scenario
   *
   * @enum { number } Scenario
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @since 20
  */
  export enum Scenario {
    /**
     * Indicates unknown scenario
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @since 20
     */
    UNKNOWN = 0,
    /**
     * Indicates article scenario
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @since 20
     */
    ARTICLE = 1,
  }

  /**
   * Enum for control event type
   *
   * @enum { number } EventType
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @since 20
  */
  export enum EventType {
    /**
     * Indicates scroll to hook event type
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @since 20
     */
    SCROLL_TO_HOOK = 1,
  }

  /**
   * Interface for paragraph
   * @interface Paragraph
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20
   */
  export interface Paragraph {
    /**
     * Indicates paragraph hook id
     * @type { ?number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    hookId?: number,
    /**
     * Indicates paragraph chapter id if paragraph is splited to chapters
     * @type { ?number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    chapterId?: number,
    /**
     * Indicates paragraph title
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    title?: string,
    /**
     * Indicates paragraph text
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    text?: string
  }

  /**
   * Interface for content options
   * @interface ContentOptions
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20
   */
  export interface ContentOptions {
    /**
     * Indicates the windowId which need to gather, full screen window is specified by default
     * @type { ?number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    windowId?: number,
    /**
     * Indicates whether content understanding is required, false by default
     * @type { ?boolean }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    contentUnderstand?: boolean,
    /**
     * Indicates whether page link is required, false by default
     * @type { ?boolean }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    pageLink?: boolean,
    /**
     * Indicates whether only text needs to be processed to return paragraphs, false by default
     * @type { ?boolean }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    textOnly?: boolean,
  }

  /**
   * Interface for pageContent
   * @interface PageContent
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20
   */
  export interface PageContent {
    /**
     * Indicates window id corresponding to the content
     * @type { number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    windowId: number,
    /**
     * Indicates session id corresponding to the content
     * @type { number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    sessionId: number,
    /**
     * Indicates bundle name corresponding to the content
     * @type { string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    bundleName: string,
    /**
     * Indicates scenario of the content
     * @type { ?Scenario }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    scenario?: Scenario,
    /**
     * Indicates title if content understand is needed
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    title?: string,
    /**
     * Indicates content if content understand is needed
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    content?: string,
    /**
     * Indicates page link if page link is needed
     * @type { ?string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    pageLink?: string,
    /**
     * Indicates paragraphs if text only is needed
     * @type { ?Paragraph[] }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    paragraphs?: Paragraph[],
  }

  /**
   * Interface for control event
   * @interface ControlEvent
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20
   */
  export interface ControlEvent {
    /**
     * Indicates controlled window id
     * @type { number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    windowId: number,
    /**
     * Indicates session id 
     * @type { number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    sessionId: number,
    /**
     * Indicates control event type
     * @type { EventType }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    eventType: EventType,
    /**
     * Indicates controlled hookid for specific event type and specific session id
     * @type { ?number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20
     */
    hookId?: number,
  }

  /**
   * Get page content
   * 
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { ContentOptions } [options] - Indicates options to get page content
   * @returns { Promise<PageContent> } Indicates the promise which carrys retrieved page content
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - The application or page is not supported.
   * @throws { BusinessError } 34000003 - The window ID is invalid. Possible causes: 1. window id is not passed
   *     <br> when screen is splited. 2. passed window id is not on screen or floating.
   * @throws { BusinessError } 34000004 - The page is not ready.
   * @throws { BusinessError } 34000006 - The request timed out.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20
   */
  function getPageContent(options?: ContentOptions): Promise<PageContent>;

  /**
   * Send control event
   * 
   * @permission ohos.permission.SIMULATE_USER_INPUT
   * @param { ControlEvent } event - Indicates the control event sent to the screen
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.SIMULATE_USER_INPUT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000005 - The target is not found.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20
   */
  function sendControlEvent(event: ControlEvent): Promise<void>;
}
export default onScreen;