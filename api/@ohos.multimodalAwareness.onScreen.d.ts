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

/**
 * This module provides the capability to use on screen awareness
 *
 * @namespace onScreen
 * @syscap SystemCapability.MultimodalAwareness.OnScreen
 * @since 20
 */

declare namespace onScreen {
  /**
   * Enum for page content scenario
   *
   * @enum { number } Scenario
   * @syscap SystemCapability.MultimodalAwareness.OnScreen
   * @since 20
  */
  export enum Scenario {
    /**
     * indicates unknown scenario
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @since 20
     */
    UNKNOWN = 0,
    /**
     * indicates article scenario
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @since 20
     */
    ARTICLE = 1,
  }

  /**
   * Enum for control event type
   *
   * @enum { number } EvenType
   * @syscap SystemCapability.MultimodalAwareness.OnScreen
   * @since 20
  */
  export enum EventType {
    /**
     * indicates unknown eventtype
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @since 20
     */
    UNKNOWN = 0,
    /**
     * indicates scroll to hook event type
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @since 20
     */
    SCROLL_TO_HOOK = 1,
  }

  /**
   * Interface for paragraph
   * @interface Paragraph
   * @syscap SystemCapability.MultimodalAwareness.OnScreen
   * @systemapi
   * @since 20
   */
  export interface Paragraph {
    /**
     * indicates hook id
     * @type { number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    hookId?: number,
    /**
     * indicates paragraph title
     * @type { string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    title?: string,
    /**
     * indicates paragraph content
     * @type { string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    content?: string,
  }

  /**
   * Interface for content option
   * @interface ContentOption
   * @syscap SystemCapability.MultimodalAwareness.OnScreen
   * @systemapi
   * @since 20
   */
  export interface ContentOption {
    /**
     * indicates content option windowId
     * @type { number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    windowId?: number,
    /**
     * indicates content option contentUnderstand
     * @type { boolean }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    contentUnderstand?: boolean,
    /**
     * indicates content option pageLink
     * @type { boolean }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    pageLink?: boolean,
    /**
     * indicates content option textOnly
     * @type { boolean }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    textOnly?: boolean,
    /**
     * indicates content option maxPararaphSize
     * @type { number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    maxParagraphSize?: number,
  }

  /**
   * Interface for pageContent
   * @interface PageContent
   * @syscap SystemCapability.MultimodalAwareness.OnScreen
   * @systemapi
   * @since 20
   */
  export interface PageContent {
    /**
     * indicates content option maxPararaphSize
     * @type { number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    windowId: number,
    /**
     * indicates content option maxPararaphSize
     * @type { number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    sessionId: number,
    /**
     * indicates content option maxPararaphSize
     * @type { string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    bundleName: string,
    /**
     * indicates content option maxPararaphSize
     * @type { Scenario }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    scenario?: Scenario,
    /**
     * indicates content option maxPararaphSize
     * @type { string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    title?: string,
    /**
     * indicates content option maxPararaphSize
     * @type { string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    content?: string,
    /**
     * indicates content option maxPararaphSize
     * @type { string }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    pageLink?: string,
    /**
     * indicates content option maxPararaphSize
     * @type { Array<Paragraph> }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    paragraphs?: Array<Paragraph>,
  }

  /**
   * Interface for control event
   * @interface ControlEvent
   * @syscap SystemCapability.MultimodalAwareness.OnScreen
   * @systemapi
   * @since 20
   */
  export interface ControlEvent {
    /**
     * indicates content option maxPararaphSize
     * @type { number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    windowId: number,
    /**
     * indicates content option maxPararaphSize
     * @type { number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    sessionId: number,
    /**
     * indicates content option maxPararaphSize
     * @type { EventType }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    eventType: EventType,
    /**
     * indicates content option maxPararaphSize
     * @type { number }
     * @syscap SystemCapability.MultimodalAwareness.OnScreen
     * @systemapi
     * @since 20
     */
    hookId?: number,
  }

  /**
   * get page content
   * @param { ContentOption } contentOption - Indicates the event type.
   * @returns { Promise<PageContent> } The result of device roatation radian.
   * @throws { BusinessError } 201 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   * <br> device capabilities.
   * @throws { BusinessError } 32500001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @since 20
   */
  function getPageContent(option: ContentOption): Promise<PageContent>;

  /**
   * send control event
   * @param { ControlEvent } event - Indicates the event type.
   * @returns { Promise<void> } The result of device roatation radian.
   * @throws { BusinessError } 201 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   * <br> device capabilities.
   * @throws { BusinessError } 32500001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.DeviceStatus
   * @systemapi
   * @since 20
   */
  function sendControlEvent(event: ControlEvent): Promise<void>;

}
export default onScreen;