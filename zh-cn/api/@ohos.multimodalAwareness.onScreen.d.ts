/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 屏上感知
 * @kit MultimodalAwarenessKit
 */

import { BusinessError, Callback } from './@ohos.base';

/**
 * 本模块提供对屏上内容的感知能力，支持获取页面内容、链接、截屏等信息，识别阅读场景、短视频场景等应用场景，提供文章标题、正文等实体信息，以及点击、滚动等交互信息。
 *
 * > **说明：**
 * >
 * > 1. 本模块首批接口从API version 20开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * > 2. 本模块为系统接口。
 *
 * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
 * @since 20 dynamic
 * @since 23 static
 */

declare namespace onScreen {
  /**
   * 定义屏上内容的场景类型。
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @since 20 dynamic
   * @since 23 static
   */
  export enum Scenario {
    /**
     * 表示屏上内容所处场景未知。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,
    /**
     * 表示屏上内容处于文章场景。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    ARTICLE = 1,
  }

  /**
   * 定义控制事件的类型。
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @since 20 dynamic
   * @since 23 static
   */
  export enum EventType {
    /**
     * 表示滚动到hook点事件。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    SCROLL_TO_HOOK = 1,
  }

  /**
   * 段落信息。
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface Paragraph {
    /**
     * 段落对应的hook ID，每个主要段落的标识。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    hookId?: long,
    /**
     * 段落对应的chapter ID，每个子章节的标识。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    chapterId?: int,
    /**
     * 段落对应的标题。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    title?: string,
    /**
     * 段落对应的内容。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    text?: string
  }

  /**
   * 屏上内容的获取选项。
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface ContentOptions {
    /**
     * 需要获取内容的窗口ID，不赋值或赋值undefined则默认获取全屏窗口。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    windowId?: int,
    /**
     * 是否需要进行内容理解，true表示需要，false表示不需要，默认为false。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    contentUnderstand?: boolean,
    /**
     * 是否获取复访链接，true表示获取，false表示不获取，默认为false。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pageLink?: boolean,
    /**
     * 是否只获取文本并划分段落，true表示是，false表示否，默认为false。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    textOnly?: boolean,
  }

  /**
   * 屏上内容。
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface PageContent {
    /**
     * 获取到的屏上内容的窗口ID
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    windowId: int,
    /**
     * 此次调用该接口的session ID，标识当次调用动作。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    sessionId: long,
    /**
     * 获取到的屏上内容的包名。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    bundleName: string,
    /**
     * 获取到的屏上内容的场景。仅在options.contentUnderstand为true时，才会获取该属性。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    scenario?: Scenario,
    /**
     * 获取到的屏上内容的标题。只有在options.contentUnderstand为true时，才会获取该属性。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    title?: string,
    /**
     * 获取到的屏上内容的正文。只有在options.contentUnderstand为true时，才会获取该属性。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    content?: string,
    /**
     * 获取到的屏上内容的复访链接。只有在options.pageLink为true时，才会获取该属性。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    pageLink?: string,
    /**
     * 获取到的文本段落信息。只有在options.textOnly为true时，才会获取该属性。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    paragraphs?: Paragraph[],
  }

  /**
   * 控制事件。
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface ControlEvent {
    /**
     * 控制事件要操作的窗口的window ID。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    windowId: int,
    /**
     * 控制事件要操作的session ID。控制事件要操作的hook ID和该次会话对应的session ID都由某次会话获取的[PageContent]{@link onScreen.PageContent}提供。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    sessionId: long,
    /**
     * 控制事件类型。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    eventType: EventType,
    /**
     * 控制事件对应的hook ID。控制事件要操作的hook ID和该次会话对应的session ID都由某次会话获取的[PageContent]{@link onScreen.PageContent}提供。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    hookId?: long,
  }

  /**
   * 在需要抓取内容的窗口在桌面上时，调用该接口以获取屏上内容。
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { ContentOptions } [options] - 获取屏上内容的选项，默认为不指定window ID，且其余选项均为false。
   * @returns { Promise<PageContent> } Promise对象，返回获取到的页面内容
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
   * 在需要控制的窗口在桌面上时，在调用[onScreen.getPageContent]{@link onScreen.getPageContent}后，根据其返回的段落信息，调用该接口发送屏上控制事件。
   *
   * @permission ohos.permission.SIMULATE_USER_INPUT
   * @param { ControlEvent } event - 屏上控制事件。
   * @returns { Promise<void> } Promise对象。
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
   * 屏上感知能力（包括但不限于阅读场景感知、OCR识别等功能）。
   * 
   * 参数约束说明：
   * 
   * 用户可通过能力项（capList）或分组 ID（groupId）使用屏上感知功能。
   * 
   * * 逻辑关系：capList 与 groupId 互为补充必填项，至少需提供其一，且不为空。
   * * 校验规则：调用接口时，系统会单独检测capList和groupId。
   * * 能力列表：按能力项或分组ID使用屏上感知功能，具体定义如下。
   *   * capList支持能力列表
   *     按具体业务场景预设的能力，可进行单一订阅或者触发，如下：
   *     |capList支持能力列表|功能说明|
   *     | ---- | ------ |
   *     |Article|获取阅读场景的感知信息。|
   *     |ShortVideo|获取短视频场景的感知信息。|
   *     |Todo|获取待办场景的感知信息。|
   *     |Activity|获取基础服务的感知信息。|
   *     |UiImage|获取页面内子图信息。|
   *     |JumpContext|高亮跳转到指定上下文。|
   *     |QuickSnap|获取单次截屏信息。使用规格：仅在capture接口使用，capList仅传递"QuickSnap"时生效，其他使用接口均返回401错误码。|
   *     |UiTree|获取页面内JSON树信息。起始版本：26.0.0|
   *     |InjectEvent|注入事件。起始版本：26.0.0|
   *     |CollectStrategy|获取屏幕采集策略。起始版本：26.0.0|
   *
   *   * groupId支持能力列表<br>
   *     按业务场景预设的一组能力集合。可统一订阅业务场景，如下：
   *     |groupId支持能力列表|对应子项能力|功能说明|
   *     | ---- | ------ | ------|
   *     |SmartEdge|Article|获取阅读场景的感知信息。|
   *     |SmartEdge|ShortVideo|获取短视频场景的感知信息。|
   *     |SmartEdge|Todo|获取待办场景的感知信息。|
   *     |SmartEdge|Activity|获取基础服务的感知信息。|
   *     |CeliaMemory|Article|获取阅读场景的感知信息。|
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface OnscreenAwarenessCap {
    /**
     * 表示能力集合，包含页面内容、页面链接、文本选择等能力。具体能力项见下表。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    capList?: string[];
    /**
     * 业务分组ID。具体分组ID见下表。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    groupId?: string;
  }

  /**
   * 屏上感知参数列表，用于特定场景下获取屏上信息，如提供窗口ID用以采集应用界面内容和链接。
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface OnscreenAwarenessOptions {  
    /**
     * 感知参数列表，参数结果是key-value数据对象。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    parameters?: Record<string, Object>;
  }

  /**
   * 页面信息收集策略。
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum CollectStrategy {  
    /**
     * 应用支持采集。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ALLOW = 1 << 0,
    /**
     * 应用分屏窗口采集策略。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SPLIT_SCREEN = 1 << 1,
    /**
     * 应用不支持自动采集。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    UNSUPPORTED_APP = 1 << 2,
    /**
     * 应用隐私窗口。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PRIVATE_WINDOW = 1 << 3,
    /**
     * 虚拟机应用，非鸿蒙应用。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ANCO_APP = 1 << 4,
    /**
     * 应用的采集策略可配置。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ALLOW_USER_CHANGE = 1 << 5,
    /**
     * 应用数据可采集。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BUSINESS_APP = 1 << 6,
    /**
     * 悬浮窗口。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    FLOAT_SCREEN = 1 << 7,
    /**
     * 画中画模式。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PIP_SCREEN = 1 << 8,
    /**
     * 桌面应用。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LAUNCHER = 1 << 9
  }

  /**
   * 提供页面信息。包括：
   * 
   * * 页面基础信息，如页面内容、链接、截屏。
   * * 页面实体信息，如页面文章的标题、正文信息。
   * * 页面交互信息，如点击、滚动信息。
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface AwarenessItem {  
    /**
     * 感知结果实体信息，包括内容、链接、截屏和其它实体信息。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    itemInfo: Record<string, Object>;
  }

  /**
   * 提供感知到的实体信息，包括内容、链接、图像和其他类型的实体。
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface EntityInfo {  
    /**
     * 感知结果实体名称，固定内容。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    entityName: string;
    /**
     * 感知结果实体信息，包括内容、链接、图像和其它实体。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    entityInfo: Record<string, Object>;
  }
  
  /**
   * 屏上感知返回信息列表。
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface OnscreenAwarenessInfo {  
    /**
     * 返回码，默认0 表示成功。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    resultCode: int;
    /**
     * 表示进入特定页面的时间戳，单位：ms。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    timestamp: long;
    /**
     * 表示应用UID。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    uid?: string;
    /**
     * 应用包名。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    bundleName?: string;
    /**
     * 应用名称。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    appName?: string;
    /**
     * 小程序ID，如微信、支付宝等三方应用小程序ID。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    miniProgramId?: string;
    /**
     * 小程序名称，三方应用小程序名称。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    miniProgramName?: string;
    /**
     * 应用索引。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    appIndex?: int;
    /**
     * 应用页面ID。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pageId?: string;
    /**
     * 采集记录ID。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sampleId?: string;
    /**
     * 页面采集策略，是 [CollectStrategy]{@link onScreen.CollectStrategy} 的按位或运算组合。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    collectStrategy?: int;
    /**
     * 屏幕ID。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    displayId?: long;
    /**
     * 窗口ID。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    windowId?: int;
    /**
     * 页面语言信息。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    languageInfo?: string;
    /**
     * 页面标签信息。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pageTags?: string[];
    /**
     * 数据项信息。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    items?: AwarenessItem[];
    /**
     * 实体信息。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    entityInfo?: EntityInfo[];
  }

  /**
   * 开启屏幕内容主动感知，并订阅屏幕感知结果。
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT [since 23 - 24]
   * @permission ohos.permission.GET_SCREEN_CONTENT or ohos.permission.ONSCREEN_AWARENESS [since 26.0.0]
   * @param { OnscreenAwarenessCap } capability - 屏上感知能力列表。
   * @param { Callback<OnscreenAwarenessInfo[]> } callback - 回调函数，返回屏幕感知结果。返回的感知信息列表 OnscreenAwarenessInfo[] 最多同时返回2个感知信
   *     息项。
   * @param { OnscreenAwarenessOptions } [options] - 屏上感知参数列表，不传递则使用默认参数配置。
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT or ohos.permission.ONSCREEN_AWARENESS.
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
   * 关闭屏幕内容主动感知，并取消订阅屏幕感知结果。
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT [since 23 - 24]
   * @permission ohos.permission.GET_SCREEN_CONTENT or ohos.permission.ONSCREEN_AWARENESS [since 26.0.0]
   * @param { OnscreenAwarenessCap } capability - 屏上感知能力列表。
   * @param { Callback<OnscreenAwarenessInfo[]> } [callback] - 需取消的回调函数。省略则移除该感知能力的所有回调。返回的感知信息列表 OnscreenAwarenessInfo
   *     [] 最多同时返回2个感知信息项。
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT or ohos.permission.ONSCREEN_AWARENESS.
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
   * 主动触发屏幕内容感知，获取当前屏幕感知结果。
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT [since 23 - 24]
   * @permission ohos.permission.GET_SCREEN_CONTENT or ohos.permission.ONSCREEN_AWARENESS [since 26.0.0]
   * @param { OnscreenAwarenessCap } capability - 屏上感知能力列表，支持列表见
   *     [OnscreenAwarenessCap]{@link onScreen.OnscreenAwarenessCap}。
   * @param { OnscreenAwarenessOptions } [options] - 屏上感知参数列表，不传递则使用默认参数配置。
   * @returns { Promise<OnscreenAwarenessInfo> } Promise对象，返回屏幕感知结果。
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT or ohos.permission.ONSCREEN_AWARENESS.
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
   * 主动触发屏幕内容感知，获取页面信息。
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT [since 23 - 24]
   * @permission ohos.permission.GET_SCREEN_CONTENT or ohos.permission.ONSCREEN_AWARENESS [since 26.0.0]
   * @param { OnscreenAwarenessCap } capability - 屏上感知能力列表，具体见下面支持的能力列表。
   * @param { OnscreenAwarenessOptions } [options] - 屏上感知参数列表，不传递则使用默认参数配置。
   * @returns { Promise<OnscreenAwarenessInfo[]> } Promise对象，返回屏幕感知结果。返回的感知信息列表 OnscreenAwarenessInfo[] 最多同时返回2个感知信息项。
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT or ohos.permission.ONSCREEN_AWARENESS.
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
   * 主动触发屏幕行为交互，实现对界面行为的识别与行为反馈。例如：当capList能力列表为JumpContext时，点击后通过反馈信息精准跳转至指定段落并实现文字高亮。当capList能力列表为InjectEvent时，点击后执行相应
   * 的点击事件。
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT [since 23 - 24]
   * @permission ohos.permission.GET_SCREEN_CONTENT or ohos.permission.ONSCREEN_AWARENESS [since 26.0.0]
   * @param { OnscreenAwarenessCap } capability - 屏上感知能力列表，具体见下面支持的能力列表。
   * @param { OnscreenAwarenessOptions } [options] - 屏上感知参数列表，不传递则使用默认参数配置。
   * @returns { Promise<OnscreenAwarenessInfo[]> } Promise对象，返回屏幕感知结果。返回的感知信息列表 OnscreenAwarenessInfo[] 最多同时返回2个感知信息项。
   * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
   *     <br> permission: ohos.permission.GET_SCREEN_CONTENT or ohos.permission.ONSCREEN_AWARENESS.
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
    * 主动触发屏幕内容感知，获取屏幕内容进行快照分析。
    *
    * @permission ohos.permission.GET_SCREEN_CONTENT [since 23 - 24]
    * @permission ohos.permission.GET_SCREEN_CONTENT or ohos.permission.ONSCREEN_AWARENESS [since 26.0.0]
    * @param { OnscreenAwarenessCap } capability - 屏上感知能力列表，具体见下面支持的能力列表。
    * @param { OnscreenAwarenessOptions } [options] - 屏上感知参数列表，不传此参数时，使用默认参数配置。
    * @returns { Promise<OnscreenAwarenessInfo[]> } Promise对象，返回屏幕感知结果。返回的感知信息列表 OnscreenAwarenessInfo[] 最多同时返回2个感知信息项。
    * @throws { BusinessError } 201 - Permission denied. An attempt was made to get page content forbidden by
    *     <br> permission: ohos.permission.GET_SCREEN_CONTENT or ohos.permission.ONSCREEN_AWARENESS.
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
   * 读取屏幕信息的授权状态。
   *
   * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface ReadingScreenPermissionStatus {  
    /**
     * 表示是否允许读屏。
     * 
     * 0：不允许读屏。
     * 
     * 1：允许读屏。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readingState: int;
    /**
     * 如果屏幕无法读取，将返回相应的状态码，参考[CollectStrategy]{@link onScreen.CollectStrategy}。
     *
     * @syscap SystemCapability.MultimodalAwareness.OnScreenAwareness
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readingCode?: int;
  }
  
  /**
   * 开启屏幕内容访问权限监测，实时返回授权状态。
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { Callback<ReadingScreenPermissionStatus> } callback - 回调函数，返回读取屏幕信息的授权状态。
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
   * 关闭屏幕内容访问权限监测。
   *
   * @permission ohos.permission.GET_SCREEN_CONTENT
   * @param { Callback<ReadingScreenPermissionStatus> } [callback] - 回调函数。需要取消监听的回调函数，需与订阅时传入的回调函数一致。若不填，则取消当前监听该事件的所有回调
   *     函数。
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