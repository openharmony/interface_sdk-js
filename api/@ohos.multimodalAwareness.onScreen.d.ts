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

import { BusinessError, Callback } from './@ohos.base';

/**
 * This module provides the onscreen awareness capability.
 * 
 * > **NOTE**
 * >
 *
 * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
 * @since 20 dynamic
 * @since 23 static
 */

declare namespace onScreen {
  /**
   * Enumerates the scenarios of the onscreen content.
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @since 20 dynamic
   * @since 23 static
   */
  export enum Scenario {
    /**
     * Unknown scenario.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,
    /**
     * Article scenario.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    ARTICLE = 1,
  }

  /**
   * Enumerates the control event types.
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @since 20 dynamic
   * @since 23 static
   */
  export enum EventType {
    /**
     * Scrolling to the hook.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    SCROLL_TO_HOOK = 1,
  }

  /**
   * Defines the paragraph information.
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface Paragraph {
    /**
     * Hook ID of the paragraph, which is the identifier of each main paragraph.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    hookId?: long,
    /**
     * Chapter ID of the paragraph, which is the identifier of each subchapter.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    chapterId?: int,
    /**
     * Title of the paragraph.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    title?: string,
    /**
     * Content of the paragraph.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    text?: string
  }

  /**
   * Defines the options for obtaining the onscreen content.
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface ContentOptions {
    /**
     * ID of the window whose content needs to be obtained. If this parameter is not set or is set to **undefined**, the
     * content of the full-screen window is obtained by default.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    windowId?: int,
    /**
     * Whether content understanding is required. The default value is **False**.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    contentUnderstand?: boolean,
    /**
     * Whether to obtain the page link. The default value is **False**.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pageLink?: boolean,
    /**
     * Whether to obtain only the text and divide the text into paragraphs. The default value is **False**.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    textOnly?: boolean,
  }

  /**
   * Defines the onscreen content.
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface PageContent {
    /**
     * Window ID of the onscreen content.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    windowId: int,
    /**
     * Session ID, which identifies the call action.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    sessionId: long,
    /**
     * Bundle name of the onscreen content.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    bundleName: string,
    /**
     * Scenario of the onscreen content. This parameter is available only when **options.contentUnderstand** is set to 
     * **True**.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    scenario?: Scenario,
    /**
     * Title of the onscreen content. This parameter is available only when **options.contentUnderstand** is set to 
     * **True**.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    title?: string,
    /**
     * Body of the onscreen content. This parameter is available only when **options.contentUnderstand** is set to 
     * **True**.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    content?: string,
    /**
     * Page link of the onscreen content. This parameter is available only when **options.pageLink** is set to **True**.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pageLink?: string,
    /**
     * Paragraph information of the onscreen content. This parameter is available only when **options.textOnly** is set 
     * to **True**.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    paragraphs?: Paragraph[],
  }

  /**
   * Defines a control event.
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface ControlEvent {
    /**
     * ID of the window to be operated.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    windowId: int,
    /**
     * ID of the session to be operated. The hook ID and the session ID can be obtained from 
     * [PageContent]{@link onScreen.PageContent} of a session.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    sessionId: long,
    /**
     * Control event type.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    eventType: EventType,
    /**
     * Hook ID corresponding to the control event. The hook ID and the session ID can be obtained from 
     * [PageContent]{@link onScreen.PageContent} of a session.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    hookId?: long,
  }

  /**
   * Obtains the onscreen content when a window is displayed on the screen.
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { ContentOptions } [options] - Options for obtaining the onscreen screen content. By default, the window ID
   *     is not specified, and other options are **False**.
   * @returns { Promise<PageContent> } Indicates the promise which carries retrieved page content
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
   * @since 20 dynamic
   * @since 23 static
   */
  function getPageContent(options?: ContentOptions): Promise<PageContent>;

  /**
   * If the target window is displayed on the screen, you can use this API to send screen control events based on the 
   * paragraph information obtained via [onScreen.getPageContent]{@link onScreen.getPageContent}.
   *
   * @permission ohos.permission.SIMULATE_USER_INPUT
   * @param { ControlEvent } event - Onscreen control event.
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
   * @since 20 dynamic
   * @since 23 static
   */
  function sendControlEvent(event: ControlEvent): Promise<void>;

  /**
   * Defines onscreen awareness capabilities (including but not limited to awareness in a reading scenario and OCR).
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface OnscreenAwarenessCap {
    /**
     * Capability list, including the capabilities for obtaining page content, page link, and text selection.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    capList?: string[];
    /**
     * Service group ID.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    groupId?: string;
  }

  /**
   * Defines the list of onscreen awareness parameters, which is used to obtain onscreen information in specific 
   * scenarios. For example, a window ID is provided to collect application UI content and links.
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface OnscreenAwarenessOptions {  
    /**
     * List of awareness parameters. The parameter result is a key-value data object.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    parameters?: Record<string, Object>;
  }

  /**
   * Defines a page information collection policy.
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum CollectStrategy {  
    /**
     * Collection is supported.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ALLOW = 1 << 0,
    /**
     * Collection policy of the split-screen window on the application.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SPLIT_SCREEN = 1 << 1,
    /**
     * Automatic collection is not supported.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    UNSUPPORTED_APP = 1 << 2,
    /**
     * Privacy window of the application.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PRIVATE_WINDOW = 1 << 3,
    /**
     * VM application, which is a non-HarmonyOS application.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ANCO_APP = 1 << 4,
    /**
     * Collection policies can be configured.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ALLOW_USER_CHANGE = 1 << 5,
    /**
     * Application data can be collected.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BUSINESS_APP = 1 << 6,
    /**
     * Floating window.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    FLOAT_SCREEN = 1 << 7,
    /**
     * Picture-in-picture mode.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PIP_SCREEN = 1 << 8,
    /**
     * Desktop application.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LAUNCHER = 1 << 9
  }

  /**
   * Provides page information, which includes:
   * 
   * * Basic page information, such as page content, links, and screenshots.
   * * Page entity information, such as the title and body of a page article.
   * * Page interaction information, such as clicks and scrolling.
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface AwarenessItem {  
    /**
     * Entity information of the awareness result, including the content, links, screenshots, and other entity 
     * information.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    itemInfo: Record<string, Object>;
  }

  /**
   * Provides entity information perceived, including content, links, images, and other types of entities.
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface EntityInfo {  
    /**
     * Name of the perceived entity, which is fixed.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    entityName: string;
    /**
     * Entity information of the awareness result, including the content, links, images, and other entity information.
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    entityInfo: Record<string, Object>;
  }
  
  /**
   * Returns the list of onscreen awareness information.
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface OnscreenAwarenessInfo {  
    /**
     * Return code. The default value **0** indicates success.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    resultCode: int;
    /**
     * Timestamp for accessing a specified page.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    timestamp: long;
    /**
     * Application UID.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    uid?: string;
    /**
     * Application bundle name.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    bundleName?: string;
    /**
     * Application name.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    appName?: string;
    /**
     * Applet ID, for example, the ID of WeChat or Alipay.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    miniProgramId?: string;
    /**
     * Name of a third-party mini program.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    miniProgramName?: string;
    /**
     * Application index.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    appIndex?: int;
    /**
     * Application page ID.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pageId?: string;
    /**
     * Collection record ID.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sampleId?: string;
    /**
     * Page collection policy, which is the bitwise OR operation combination of
     *    <br> [CollectStrategy]{@link onScreen. CollectStrategy}.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    collectStrategy?: int;
    /**
     * Display ID.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    displayId?: long;
    /**
     * Window ID.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    windowId?: int;
    /**
     * Page language information.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    languageInfo?: string;
    /**
     * Page tag information.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pageTags?: string[];
    /**
     * Data item information.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    items?: AwarenessItem[];
    /**
     * Entity information.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    entityInfo?: EntityInfo[];
  }

  /**
   * Enables proactive awareness on screen content and subscribes to a screen awareness result.
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { OnscreenAwarenessCap } capability - Onscreen awareness capability list.
   * @param { Callback<OnscreenAwarenessInfo[]> } callback - Callback function, which returns the onscreen
   *     <br> awareness result. The returned onscreen awareness information list **OnscreenAwarenessInfo[]**
   *     <br> contains a maximum of twoawareness information items.
   * @param { OnscreenAwarenessOptions } [options] - Onscreen awareness parameter list.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - The application or page is not supported.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function subscribe(capability: OnscreenAwarenessCap,
                     callback: Callback<OnscreenAwarenessInfo[]>, 
                     options?: OnscreenAwarenessOptions): void;

  /**
   * Disables proactive awareness on screen content and unsubscribes from a screen awareness result.
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { OnscreenAwarenessCap } capability - Onscreen awareness capability list.
   * @param { Callback<OnscreenAwarenessInfo[]> } [callback] - Callback to unregister. The returned onscreen
   *     <br> awareness information list **OnscreenAwarenessInfo[]** contains a maximum of two awareness
   *     <br> information items.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function unsubscribe(capability: OnscreenAwarenessCap, callback?: Callback<OnscreenAwarenessInfo[]>): void;

  /**
   * Proactively triggers screen content awareness and obtains the current screen awareness result.
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { OnscreenAwarenessCap } capability - Onscreen awareness capability list.
   * @param { OnscreenAwarenessOptions } [options] - Onscreen awareness parameter list.
   * @returns { Promise<OnscreenAwarenessInfo> } Promise used to return the onscreen awareness result.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - The application or page is not supported.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function trigger(capability: OnscreenAwarenessCap, 
                   options?: OnscreenAwarenessOptions): Promise<OnscreenAwarenessInfo>;

  /**
   * Proactively triggers screen content awareness to obtain page information.
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { OnscreenAwarenessCap } capability - Onscreen awareness capability list. For details, see
   *     <br> the followingsupported capability list.
   * @param { OnscreenAwarenessOptions } [options] - Onscreen awareness parameter list.
   * @returns { Promise<OnscreenAwarenessInfo[]> } Promise used to return the onscreen awareness result.
   *     <br>The returned onscreen awareness information list **OnscreenAwarenessInfo[]** contains a
   *     <br> maximum of two awareness information items.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - The application or page is not supported.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function capture(capability: OnscreenAwarenessCap, 
                   options?: OnscreenAwarenessOptions): Promise<OnscreenAwarenessInfo[]>;
  
  /**
   * Proactively triggers screen behavior interaction to identify screen behaviors and return behavior receipts. For
   *     <br> for example, after a link is clicked, the system accurately jumps to the specified paragraph and
   *     <br> highlights the text based on the receipt information.
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { OnscreenAwarenessCap } capability - Onscreen awareness capability list. For details, see the following
   *     <br> supported capability list.
   * @param { OnscreenAwarenessOptions } [options] - Onscreen awareness parameter list.
   * @returns { Promise<OnscreenAwarenessInfo[]> } Promise used to return the onscreen awareness result. The returned
   *     <br> onscreen awareness information list **OnscreenAwarenessInfo[]** contains a maximum of two awareness
   *     <br> information items.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @throws { BusinessError } 34000002 - The application or page is not supported.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function interact(capability: OnscreenAwarenessCap, 
                   options?: OnscreenAwarenessOptions): Promise<OnscreenAwarenessInfo[]>;

   /**
    * Proactively triggers screen content awareness to obtain the screen content for snapshot analysis.
    *
    * @permission ohos.permission.GET_SCREEN_CONTENT
    * @param { OnscreenAwarenessCap } capability - Onscreen awareness capability list. For details, see the following
    *     <br> supported capability list.
    * @param { OnscreenAwarenessOptions } [options] - Onscreen awareness parameter list.
    * @returns { Promise<OnscreenAwarenessInfo[]> } Promise used to return the onscreen awareness result. The returned
    *     <br> onscreen awareness information list **OnscreenAwarenessInfo[]** contains a maximum of two awareness
    *     <br> information items.
    * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
    *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
    * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
    * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
    *     <br> device capabilities.
    * @throws { BusinessError } 34000001 - Service exception.
    * @throws { BusinessError } 34000002 - The application or page is not supported.
    * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
    * @systemapi
    * @stagemodelonly
    * @since 23 dynamic&static
    */
   function apperceive(capability: OnscreenAwarenessCap, 
                   options?: OnscreenAwarenessOptions): Promise<OnscreenAwarenessInfo[]>;

  /**
   * Returns the status of the permission for reading screen information.
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface ReadingScreenPermissionStatus {  
    /**
     * Whether screen reading is allowed. **0**: no**1**: yes.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readingState: int;
    /**
     * If the screen information cannot be read, the corresponding status code will be returned.
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readingCode?: int;
  }
  
  /**
   * Enables the screen content access permission monitoring and returns the permission status in real time.
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { Callback<ReadingScreenPermissionStatus> } callback - Callback used to return the status of the permission
   *     <br> for reading screen information.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A non-system application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onReadingScreenPermissionListener(callback: Callback<ReadingScreenPermissionStatus>): void;

  /**
   * Disables the screen content access permission monitoring.
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { Callback<ReadingScreenPermissionStatus> } [callback] - Callback to unregister. If this parameter
   *     <br> is not passed, all callbacks of the event are unregistered.
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT.
   * @throws { BusinessError } 202 - Permission check failed. A nonsystem application uses the system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to limited
   *     <br> device capabilities.
   * @throws { BusinessError } 34000001 - Service exception.
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offReadingScreenPermissionListener(callback?: Callback<ReadingScreenPermissionStatus>): void;
}
export default onScreen;
