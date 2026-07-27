/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 AVMusicTemplate
 * @file
 AVMusicTemplate
 * @kit AVSessionKit
 */
import type { Callback } from './@ohos.base';
import image from './@ohos.multimedia.image';
import { WantAgent } from './@ohos.app.ability.wantAgent';

/**
 * > **说明：**
 * >
 * > - 本模块仅适用于API version 23及以上版本的Car设备。
 *
 * @namespace avMusicTemplate
 * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
 * @stagemodelonly
 * @since 23 dynamic&static
 */
declare namespace avMusicTemplate {
  /**
   * 创建音频模板，返回音频模板实例。
   *
   * @param { AVMusicTemplateType } accessType - 音频模板类型。
   * @returns { AVMusicTemplate } 音频模板对象，可用于获取会话ID。
   * @throws { BusinessError } 801 - Capability not supported.function createAVMusicTemplate
   *     can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 35000001 - Failed to create the AVMusicTemplate.
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function createAVMusicTemplate(accessType: AVMusicTemplateType): AVMusicTemplate;

  /**
   * 创建音频模板控制器，返回音频模板控制器对象。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } sessionId - AVSession对象唯一的会话标识。
   * @returns { AVMusicTemplateController } 音频模板控制器实例，用于与接入音频模板的媒体应用进行数据交互。
   * @throws { BusinessError } 201 - Permission verify failed.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 801 - Capability not supported.function createAVMusicTemplateController
   *     can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 35000002 - Failed to create the AVMusicTemplate controller.
   * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function createAVMusicTemplateController(sessionId: string): AVMusicTemplateController;

  /**
   * 获取所有的音频模板描述，返回音频模板描述的集合。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { int } [userId] - 用户ID。以用户传递为准，可为空。
   * @returns { AVMusicTemplateDescriptor[] } 音频模板描述的集合。
   * @throws { BusinessError } 201 - Permission verify failed.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 801 - Capability not supported.function getAllAVMusicTemplateDescriptors
   *     can not work correctly due to limited device capabilities.
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getAllAVMusicTemplateDescriptors(userId?: int): AVMusicTemplateDescriptor[];

  /**
   * 注册音频模板创建的监听。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { Callback<AVMusicTemplateDescriptor> } callback - 回调函数，参数为音频模板描述。用于监听音频模板创建事件。
   * @throws { BusinessError } 201 - Permission verify failed.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 801 - Capability not supported.function onAVMusicTemplateCreate
   *     can not work correctly due to limited device capabilities.
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onAVMusicTemplateCreate(callback: Callback<AVMusicTemplateDescriptor>): void;

  /**
   * 注销音频模板创建监听。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { Callback<AVMusicTemplateDescriptor> } [callback] - 回调函数，返回音频模板描述。不填该参数则注销该类型对应的所有回调。
   * @throws { BusinessError } 201 - Permission verify failed.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 801 - Capability not supported.function offAVMusicTemplateCreate
   *     can not work correctly due to limited device capabilities.
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offAVMusicTemplateCreate(callback?: Callback<AVMusicTemplateDescriptor>): void;

  /**
   * 注册音频模板销毁监听。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { Callback<AVMusicTemplateDescriptor> } callback - 回调函数，参数为音频模板描述。
   * @throws { BusinessError } 201 - Permission verify failed.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 801 - Capability not supported.function onAVMusicTemplateDestroy
   *     can not work correctly due to limited device capabilities.
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onAVMusicTemplateDestroy(callback: Callback<AVMusicTemplateDescriptor>): void;

  /**
   * 注销音频模板销毁监听。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { Callback<AVMusicTemplateDescriptor> } [callback] - 回调函数，返回音频模板描述。不填该参数则注销该类型对应的所有回调。
   * @throws { BusinessError } 201 - Permission verify failed.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 801 - Capability not supported.function offAVMusicTemplateDestroy
   *     can not work correctly due to limited device capabilities.
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offAVMusicTemplateDestroy(callback?: Callback<AVMusicTemplateDescriptor>): void;

  /**
   * 音频模板描述。包含音频模板唯一标识，应用的包名和用户ID。
   *
   * @typedef {AVMusicTemplateDescriptor}
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface AVMusicTemplateDescriptor {
    /**
     * 音频模板唯一标识。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sessionId: string;

    /**
     * 应用的包名。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    bundleName: string;

    /**
     * 用户ID。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    userId: int;
  }

  /**
   * 定义无参数的异步回调函数类型。使用Promise异步回调。
   *
   * @typedef { function } NoParamAsyncCallback
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type NoParamAsyncCallback = () => Promise<void>;

  /**
   * 主标签页查询事件。使用Promise异步回调。
   *
   * @typedef { function } QueryMainTabsEvent
   * @returns { Promise<MediaTab[]> } Promise对象，返回媒体标签页的集合。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type QueryMainTabsEvent = () => Promise<MediaTab[]>;

  /**
   * 媒体标签页内容查询事件。使用Promise异步回调。
   *
   * @typedef { function } QueryMediaTabContentEvent
   * @param { string } tabId - 标签页的ID。
   * @returns { Promise<MediaTabContent> } Promise对象，返回媒体标签页内容。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type QueryMediaTabContentEvent = (tabId: string) => Promise<MediaTabContent>;

  /**
   * 媒体实体查询事件。使用Promise异步回调。
   *
   * @typedef { function } QueryMediaEntityEvent
   * @param { QueryMediaEntityParam } params - 查询媒体实体的参数。
   * @returns { Promise<PageMediaEntity> } Promise对象，返回查询的媒体实体分页对象。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type QueryMediaEntityEvent = (params: QueryMediaEntityParam) => Promise<PageMediaEntity>;

  /**
   * 合集查询事件。使用Promise异步回调。
   *
   * @typedef { function } QueryCompilationEvent
   * @param { string } compilationId - 合集的ID。
   * @param { int } pageIndex - 页面的索引。
   * @returns { Promise<PageMediaEntity> } Promise对象，返回查询的合集媒体实体对象。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type QueryCompilationEvent = (compilationId: string, pageIndex: int) => Promise<PageMediaEntity>;

  /**
   * 播放列表查询事件。使用Promise异步回调。
   *
   * @typedef { function } QueryPlaylistEvent
   * @param { int } pageIndex - 页面的索引。
   * @param { Sort } 排序类型。 - 排序类型。
   * @returns { Promise<PageMediaEntity> } Promise对象，返回查询的播放列表的分页对象。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type QueryPlaylistEvent = (pageIndex: int, sort: Sort) => Promise<PageMediaEntity>;

  /**
   * 当前单曲查询事件。使用Promise异步回调。
   *
   * @typedef { function } QueryCurrentSingleEvent
   * @returns { Promise<Single> } Promise对象，返回Single对象。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type QueryCurrentSingleEvent = () => Promise<Single>;


  /**
   * 按关键字查询合集的事件。使用Promise异步回调。
   *
   * @typedef { function } QueryCompilationByKeywordEvent
   * @param { string } 用于查找合集的关键字。 - 用于查找合集的关键字。
   * @returns { Promise<Compilation[]> } Promise对象，返回与关键字相关的合集数组。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type QueryCompilationByKeywordEvent = (keyword: string) => Promise<Compilation[]>;

  /**
   * 通过关键字查询媒体数据的回调事件
   *
   * @typedef { function } QueryMediaEntityByKeywordEvent
   * @param { string } 关键字 - 关键字
   * @param { EntityType } searchType - 搜索内容的类型
   * @param { int } pageIndex - 页面索引
   * @returns { Promise<PageMediaEntity> } 通过promise返回PageMediaEntity
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type QueryMediaEntityByKeywordEvent = (keyword: string, searchType: EntityType,
    pageIndex: int) => Promise<PageMediaEntity>;

  /**
   * 推荐媒体实体列表查询事件。使用Promise异步回调。
   *
   * @typedef { function } QueryRecommendMediaEntityListEvent
   * @returns { Promise<MediaEntity[]> } Promise对象，返回推荐的媒体实体的数组。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type QueryRecommendMediaEntityListEvent = () => Promise<MediaEntity[]>;

  /**
   * 热词查询事件。使用Promise异步回调。
   *
   * @typedef { function } QueryHotWordsEvent
   * @returns { Promise<string[]> } Promise对象，返回热词的数组。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type QueryHotWordsEvent = () => Promise<string[]>;

  /**
   * 搜索历史查询事件。使用Promise异步回调。
   *
   * @typedef { function } QuerySearchHistoryEvent
   * @returns { Promise<string[]> } Promise对象，返回搜索历史的数组。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type QuerySearchHistoryEvent = () => Promise<string[]>;

  /**
   * 清除搜索历史事件。使用Promise异步回调。
   *
   * @typedef { function } ClearSearchHistoryEvent
   * @returns { Promise<OperResult> } Promise对象，返回清除搜索历史的操作结果的对象。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type ClearSearchHistoryEvent = () => Promise<OperResult>;

  /**
   * 登录事件。使用Promise异步回调。
   *
   * @typedef { function } LoginEvent
   * @param { LoginType } controlType - 登录类型。
   * @param { string } [二维码ID。] - 二维码ID。
   * @returns { Promise<QrCodeInfo[]> } Promise对象，返回二维码信息的数组。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type LoginEvent = (controlType: LoginType, id?: string) => Promise<QrCodeInfo[]>;

  /**
   * 对话框信息请求事件。使用Promise异步回调。
   *
   * @typedef { function } RequestDialogInfoEvent
   * @param { DialogActionType } actionType - 对话框操作类型。
   * @param { DialogActionInfo } [actionInfo] - 对话框动作结果的信息。
   * @returns { Promise<DialogInfo> } Promise对象，返回对话框信息。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type RequestDialogInfoEvent = (actionType: DialogActionType, actionInfo?: DialogActionInfo) => Promise<DialogInfo>;

  /**
   * 处理购买会员事件。使用Promise异步回调。
   *
   * @typedef { function } HandleMemberPurchaseEvent
   * @param { MemberPurchaseInfo } 购买会员的信息。 - 购买会员的信息。
   * @returns { Promise<DialogInfo> } Promise对象，返回对话框信息。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type HandleMemberPurchaseEvent = (info: MemberPurchaseInfo) => Promise<DialogInfo>;

  /**
   * 购买会员查询事件。使用Promise异步回调。
   *
   * @typedef { function } QueryMemberPurchaseEvent
   * @param { MemberPurchaseType } 购买会员的类型。 - 购买会员的类型。
   * @returns { Promise<MemberPurchaseInfo[]> } Promise对象，返回会员购买信息的数组。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type QueryMemberPurchaseEvent = (memberPurchaseType: MemberPurchaseType) => Promise<MemberPurchaseInfo[]>;

  /**
   * 自定义内容查询事件。使用Promise异步回调。
   *
   * @typedef { function } QueryCustomContentEvent
   * @param { CustomType[] } queryType - 自定义类型：包含用户基本信息、界面选项卡配置、代码编译选项和系统设置项。
   * @returns { Promise<CustomElement> } Promise对象，返回我的页面的自定义元素。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type QueryCustomContentEvent = (queryType: CustomType[]) => Promise<CustomElement>;

  /**
   * 媒体实体下载事件。使用Promise异步回调。
   *
   * @typedef { function } DownloadMediaEntityEvent
   * @param { DownloadControlType } controlType - controlType的可选项包括：开始下载、删除下载、恢复下载、暂停下载。
   * @param { MediaEntity } mediaEntity - 媒体实体。
   * @returns { Promise<OperResult> } Promise对象，返回下载媒体实体的操作结果对象。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type DownloadMediaEntityEvent = (controlType: DownloadControlType, mediaEntity: MediaEntity) => Promise<OperResult>;

  /**
   * 设置变更事件类型。使用Promise异步回调。
   *
   * @typedef { function } SettingsChangeEvent
   * @param { SettingItem } settingItem - 设置项。
   * @returns { Promise<SettingItem> } Promise对象，返回变更过的设置项。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type SettingsChangeEvent = (settingItem: SettingItem) => Promise<SettingItem>;

  /**
   * 问题和建议事件。使用Promise异步回调。
   *
   * @typedef { function } ProblemAndAdviceEvent
   * @param { string } 问题和建议的内容。 - 问题和建议的内容。
   * @returns { Promise<OperResult> } Promise对象，返回问题和建议的操作结果对象。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type ProblemAndAdviceEvent = (advice: string) => Promise<OperResult>;

  /**
   * 搜播事件。使用Promise异步回调。
   *
   * @typedef { function } ExecuteActionEvent
   * @param { SearchPlayInfoType } 搜播信息的类型。 - 搜播信息的类型。
   * @param { SearchPlayInfo } 搜播信息。 - 搜播信息。
   * @returns { Promise<OperResult> } Promise对象，返回搜播的操作结果对象。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type PlayForSearchEvent = (command: SearchPlayInfoType, args: SearchPlayInfo) => Promise<OperResult>;

  /**
   * 执行操作事件。使用Promise异步回调。
   *
   * @typedef { function } ExecuteActionEvent
   * @param { string } actionType - 动作类型。
   * @param { string } 参数信息。 - 参数信息。
   * @returns { Promise<string> } Promise对象，返回执行操作的结果字符串。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type ExecuteActionEvent = (actionType: string, params: string) => Promise<string>;

  /**
   * 媒体实体播放事件。使用Promise异步回调。
   *
   * @typedef { function } PlayMediaEntityEvent
   * @param { MediaEntity } mediaEntity - 需要播放的媒体实体。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type PlayMediaEntityEvent = (mediaEntity: MediaEntity) => Promise<void>;

  /**
   * 媒体实体收藏事件。使用Promise异步回调。
   *
   * @typedef { function } FavoriteMediaEntityEvent
   * @param { MediaFavoriteType } actionType - 操作类型。
   * @param { MediaEntity } mediaEntity - 媒体实体。
   * @returns { Promise<OperResult> } Promise对象，返回收藏媒体实体的操作结果对象。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type FavoriteMediaEntityEvent = (actionType: MediaFavoriteType, mediaEntity: MediaEntity) => Promise<OperResult>;

  /**
   * 调用[avMusicTemplate.createAVMusicTemplate]{@link avMusicTemplate.createAVMusicTemplate}获取实例后，可获取其ID，启动音频模板界面，并配置数据获取
   * 方法。随后，同步数据给模板控制方，以完成后续操作。
   * 
   * > **说明：**
   * >
   * > - 本模块仅适用于API version 23及以上版本的Car设备。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  class AVMusicTemplate {
    /**
     * 音频模板唯一的标识。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sessionId: string;

    /**
     * 音频模板标签。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sessionTag: string;

    /**
     * 启动音频模板界面。使用Promise异步回调。
     *
     * @returns { Promise<OperResult> } Promise对象，返回启动音频模板界面的操作结果。
     * @throws { BusinessError } 801 - capability not supported.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    startTemplate(): Promise<OperResult>;

    /**
     * 注册查询主标签的事件监听。使用callback异步回调。
     *
     * @param { QueryMainTabsEvent } callback - 回调函数，返回查询主标签事件。
     * @throws { BusinessError } 801 - Capability not supported.function onQueryMainTabs
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onQueryMainTabs(callback: QueryMainTabsEvent): void;

    /**
     * 注销查询主标签事件监听。
     *
     * @param { QueryMainTabsEvent } [callback] - 查询主标签事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offQueryMainTabs
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offQueryMainTabs(callback?: QueryMainTabsEvent): void;

    /**
     * 注册查询媒体标签内容事件监听。使用callback异步回调。
     *
     * @param { QueryMediaTabContentEvent } callback - 回调函数，返回查询媒体标签页内容的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onQueryMediaTabContent
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onQueryMediaTabContent(callback: QueryMediaTabContentEvent): void;

    /**
     * 取消查询媒体标签内容监听。
     *
     * @param { QueryMediaTabContentEvent } [callback] - 查询媒体标签页内容的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offQueryMediaTabContent
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offQueryMediaTabContent(callback?: QueryMediaTabContentEvent): void;

    /**
     * 注册查询媒体实体监听。使用callback异步回调。
     *
     * @param { QueryMediaEntityEvent } callback - 回调函数，返回查询媒体实体的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onQueryMediaEntity
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onQueryMediaEntity(callback: QueryMediaEntityEvent): void;

    /**
     * 注销查询媒体实体监听。
     *
     * @param { QueryMediaEntityEvent } [callback] - 查询媒体实体的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offQueryMediaEntity
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offQueryMediaEntity(callback?: QueryMediaEntityEvent): void;

    /**
     * 注册查询合集的监听。使用callback异步回调。
     *
     * @param { QueryCompilationEvent } callback - 回调函数，返回查询合集的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onQueryCompilation
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onQueryCompilation(callback: QueryCompilationEvent): void;

    /**
     * 注销查询合集的监听。
     *
     * @param { QueryCompilationEvent } [callback] - 查询合集的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offQueryCompilation
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offQueryCompilation(callback?: QueryCompilationEvent): void;

    /**
     * 注册查询播放列表的监听。使用callback异步回调。
     *
     * @param { QueryPlaylistEvent } callback - 回调函数，返回查询播放列表的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onQueryPlaylist
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onQueryPlaylist(callback: QueryPlaylistEvent): void;

    /**
     * 注销查询播放列表的监听。
     *
     * @param { QueryPlaylistEvent } [callback] - 查询播放列表的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offQueryPlaylist
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offQueryPlaylist(callback?: QueryPlaylistEvent): void;

    /**
     * 注册查询当前单曲的监听。使用callback异步回调。
     *
     * @param { QueryCurrentSingleEvent } callback - 回调函数，返回查询当前单曲的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onQueryCurrentSingle
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onQueryCurrentSingle(callback: QueryCurrentSingleEvent): void;

    /**
     * 注销查询当前单曲的监听。
     *
     * @param { QueryCurrentSingleEvent } [callback] - 查询当前单曲的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offQueryCurrentSingle
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offQueryCurrentSingle(callback?: QueryCurrentSingleEvent): void;

    /**
     * 注册按关键字查询合集的监听。使用callback异步回调。
     *
     * @param { QueryCompilationByKeywordEvent } callback - 回调函数，返回按关键字查询合集的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onQueryCompilationByKeyword
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onQueryCompilationByKeyword(callback: QueryCompilationByKeywordEvent): void;

    /**
     * 注销按关键字查询合集的监听。
     *
     * @param { QueryCompilationByKeywordEvent } [callback] - 按关键字查询合集的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offQueryCompilationByKeyword
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offQueryCompilationByKeyword(callback?: QueryCompilationByKeywordEvent): void;

    /**
     * 注册按关键字查询媒体实体的监听。使用callback异步回调。
     *
     * @param { QueryMediaEntityByKeywordEvent } callback - 回调函数，返回按关键字查询媒体实体的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onQueryMediaEntityByKeyword
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onQueryMediaEntityByKeyword(callback: QueryMediaEntityByKeywordEvent): void;

    /**
     * 注销按关键字查询媒体实体的监听。
     *
     * @param { QueryMediaEntityByKeywordEvent } [callback] - 按关键字查询媒体实体的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offQueryMediaEntityByKeyword
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offQueryMediaEntityByKeyword(callback?: QueryMediaEntityByKeywordEvent): void;

    /**
     * 注册查询推荐媒体列表的监听。使用callback异步回调。
     *
     * @param { QueryRecommendMediaEntityListEvent } callback - 回调函数，返回查询推荐媒体列表的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onQueryRecommendMediaEntityList
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onQueryRecommendMediaEntityList(callback: QueryRecommendMediaEntityListEvent): void;

    /**
     * 注销查询推荐媒体列表的监听。
     *
     * @param { QueryRecommendMediaEntityListEvent } [callback]
     查询推荐媒体列表的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offQueryRecommendMediaEntityList
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offQueryRecommendMediaEntityList(callback?: QueryRecommendMediaEntityListEvent): void;

    /**
     * 注册查询热词的监听。使用callback异步回调。
     *
     * @param { QueryHotWordsEvent } callback - 回调函数，返回查询热词的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onQueryHotWords
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onQueryHotWords(callback: QueryHotWordsEvent): void;

    /**
     * 注销查询热词的监听。
     *
     * @param { QueryHotWordsEvent } [callback] - 查询热词的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offQueryHotWords
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offQueryHotWords(callback?: QueryHotWordsEvent): void;

    /**
     * 注册查询搜索历史的监听。使用callback异步回调。
     *
     * @param { QuerySearchHistoryEvent } callback - 回调函数，返回查询搜索历史的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onQuerySearchHistory
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onQuerySearchHistory(callback: QuerySearchHistoryEvent): void;

    /**
     * 注销查询搜索历史的监听。
     *
     * @param { QuerySearchHistoryEvent } [callback] - 查询搜索历史的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offQuerySearchHistory
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offQuerySearchHistory(callback?: QuerySearchHistoryEvent): void;

    /**
     * 注册清除搜索历史的监听。使用callback异步回调。
     *
     * @param { ClearSearchHistoryEvent } callback - 回调函数，返回清除搜索历史的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onClearSearchHistory
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onClearSearchHistory(callback: ClearSearchHistoryEvent): void;

    /**
     * 注销清除搜索历史的监听。
     *
     * @param { ClearSearchHistoryEvent } [callback] - 清除搜索历史的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offClearSearchHistory
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offClearSearchHistory(callback?: ClearSearchHistoryEvent): void;

    /**
     * 注册登录事件的监听。使用callback异步回调。
     *
     * @param { LoginEvent } callback - 回调函数，返回登录事件。
     * @throws { BusinessError } 801 - Capability not supported.function onLogin
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onLogin(callback: LoginEvent): void;

    /**
     * 注销登录事件的监听。
     *
     * @param { LoginEvent } [callback] - 登录事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offLogin
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offLogin(callback?: LoginEvent): void;

    /**
     * 注册请求对话框信息的监听。使用callback异步回调。
     *
     * @param { RequestDialogInfoEvent } callback - 回调函数，返回请求对话框信息的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onRequestDialogInfo
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onRequestDialogInfo(callback: RequestDialogInfoEvent): void;

    /**
     * 注销请求对话框信息的监听。
     *
     * @param { RequestDialogInfoEvent } [callback] - 请求对话框信息的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offRequestDialogInfo
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offRequestDialogInfo(callback?: RequestDialogInfoEvent): void;

    /**
     * 注册处理购买会员事件的监听。使用callback异步回调。
     *
     * @param { HandleMemberPurchaseEvent } callback - 回调函数，返回处理购买会员的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onHandleMemberPurchase
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onHandleMemberPurchase(callback: HandleMemberPurchaseEvent): void;

    /**
     * 注销处理购买会员事件的监听。
     *
     * @param { HandleMemberPurchaseEvent } [callback] - 处理购买会员的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offHandleMemberPurchase
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offHandleMemberPurchase(callback?: HandleMemberPurchaseEvent): void;

    /**
     * 注册查询购买会员事件的监听。使用callback异步回调。
     *
     * @param { QueryMemberPurchaseEvent } callback - 回调函数，返回查询购买会员的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onQueryMemberPurchase
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onQueryMemberPurchase(callback: QueryMemberPurchaseEvent): void;

    /**
     * 注销查询购买会员事件的监听。
     *
     * @param { QueryMemberPurchaseEvent } [callback] - 查询购买会员的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offQueryMemberPurchase
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offQueryMemberPurchase(callback?: QueryMemberPurchaseEvent): void;

    /**
     * 注册查询自定义内容事件的监听。使用callback异步回调。
     *
     * @param { QueryCustomContentEvent } callback - 回调函数，返回查询自定义内容的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onQueryCustomContent
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onQueryCustomContent(callback: QueryCustomContentEvent): void;

    /**
     * 注销查询自定义内容事件的监听。
     *
     * @param { QueryCustomContentEvent } [callback] - 查询自定义内容的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offQueryCustomContent
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offQueryCustomContent(callback?: QueryCustomContentEvent): void;

    /**
     * 注册下载媒体实体事件的监听。使用callback异步回调。
     *
     * @param { DownloadMediaEntityEvent } callback - 回调函数，返回下载媒体实体的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onDownloadMediaEntity
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDownloadMediaEntity(callback: DownloadMediaEntityEvent): void;

    /**
     * 注销下载媒体实体事件的监听。
     *
     * @param { DownloadMediaEntityEvent } [callback] - 下载媒体实体的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offDownloadMediaEntity
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offDownloadMediaEntity(callback?: DownloadMediaEntityEvent): void;

    /**
     * 注册设置改变事件的监听。使用callback异步回调。
     *
     * @param { SettingsChangeEvent } callback - 回调函数，返回设置改变的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onSettingsChange
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onSettingsChange(callback: SettingsChangeEvent): void;

    /**
     * 注销设置改变事件的监听。
     *
     * @param { SettingsChangeEvent } [callback] - 设置改变的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offSettingsChange
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offSettingsChange(callback?: SettingsChangeEvent): void;

    /**
     * 注册问题与建议事件的监听。使用callback异步回调。
     *
     * @param { ProblemAndAdviceEvent } callback - 回调函数，返回问题与建议的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onProblemAndAdvice
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onProblemAndAdvice(callback: ProblemAndAdviceEvent): void;

    /**
     * 注销问题与建议事件的监听。
     *
     * @param { ProblemAndAdviceEvent } [callback] - 处理问题与建议的回调。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offProblemAndAdvice
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offProblemAndAdvice(callback?: ProblemAndAdviceEvent): void;

    /**
     * 注册搜播事件的监听。使用callback异步回调。
     *
     * @param { PlayForSearchEvent } callback - 回调函数，返回搜播的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onPlayForSearch
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onPlayForSearch(callback: PlayForSearchEvent): void;

    /**
     * 注销搜播事件的监听。
     *
     * @param { PlayForSearchEvent } [callback] - 搜播的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offPlayForSearch
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offPlayForSearch(callback?: PlayForSearchEvent): void;

    /**
     * 注册执行操作事件的监听。使用callback异步回调。
     *
     * @param { ExecuteActionEvent } callback - 回调函数，返回执行操作的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onExecuteAction
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onExecuteAction(callback: ExecuteActionEvent): void;

    /**
     * 注销执行操作事件的监听。
     *
     * @param { ExecuteActionEvent } [callback] - 执行操作的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offExecuteAction
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offExecuteAction(callback?: ExecuteActionEvent): void;

    /**
     * 注册播放媒体实体事件的监听。使用callback异步回调。
     *
     * @param { PlayMediaEntityEvent } callback - 回调函数，返回播放媒体实体的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onPlayMediaEntity
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onPlayMediaEntity(callback: PlayMediaEntityEvent): void;

    /**
     * 注销播放媒体实体事件的监听。
     *
     * @param { PlayMediaEntityEvent } [callback] - 播放媒体实体的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offPlayMediaEntity
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offPlayMediaEntity(callback?: PlayMediaEntityEvent): void;

    /**
     * 注册收藏媒体实体事件的监听。使用callback异步回调。
     *
     * @param { FavoriteMediaEntityEvent } callback - 回调函数，返回收藏媒体实体的事件。
     * @throws { BusinessError } 801 - Capability not supported.function onFavoriteMediaEntity
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onFavoriteMediaEntity(callback: FavoriteMediaEntityEvent): void;

    /**
     * 注销收藏媒体实体事件的监听。
     *
     * @param { FavoriteMediaEntityEvent } [callback] - 收藏媒体实体的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - Capability not supported.function offFavoriteMediaEntity
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offFavoriteMediaEntity(callback?: FavoriteMediaEntityEvent): void;

    /**
     * 向音频模板控制方同步用户信息。使用Promise异步回调。
     *
     * @param { UserInfo } userInfo - 用户信息。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.function setUserInfo
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000011 - Thr data write error, data is invalid.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setUserInfo(userInfo: UserInfo): Promise<void>;

    /**
     * 向音频模板控制方同步对话框命令。使用Promise异步回调。
     *
     * @param { DialogControlType } type - 对话框控制类型。
     * @param { DialogInfo } dialogInfo - 对话框信息。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.function setDialogCommand
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000011 - Thr data write error, data is invalid.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setDialogCommand(type: DialogControlType, dialogInfo: DialogInfo): Promise<void>;

    /**
     * 向音频模板控制方同步当前单曲。使用Promise异步回调。
     *
     * @param { Single } single - 当前单曲。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.function setCurrentSingle
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000011 - Thr data write error, data is invalid.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setCurrentSingle(single: Single): Promise<void>;

    /**
     * 向音频模板控制方同步媒体资源变更信息。使用Promise异步回调。
     *
     * @param { MediaEntity[] } entities - 媒体实体的数组。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.function setMediaEntities
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000011 - Thr data write error, data is invalid.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setMediaEntities(entities: MediaEntity[]): Promise<void>;

    /**
     * 向音频模板控制方同步标签页内容信息。使用Promise异步回调。
     *
     * @param { string } tabId - 标签的ID。
     * @param { MediaTabContent } tabContent - 媒体标签页内容。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.function setTabContent
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000011 - Thr data write error, data is invalid.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setTabContent(tabId: string, tabContent: MediaTabContent): Promise<void>;

    /**
     * 向音频模板控制方同步播放列表。使用Promise异步回调。
     *
     * @param { PageMediaEntity } playlist - 分页媒体实体。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.function setPlaylist
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000011 - Thr data write error, data is invalid.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setPlaylist(playlist: PageMediaEntity): Promise<void>;

    /**
     * 向音频模板控制方同步单曲下载状态信息。使用Promise异步回调。
     *
     * @param { MediaEntity } single - 单曲。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.function setDownloadMediaEntityStatus
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000011 - Thr data write error, data is invalid.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setDownloadMediaEntityStatus(single: MediaEntity): Promise<void>;

    /**
     * 上报自定义数据变更信息至媒体中心
     *
     * @param { ActionType } actionType - 操作类型
     * @param { CustomType } customType - 自定义数据的类型
     * @param { CustomElement } customElement - 自定义数据
     * @returns { Promise<void> } 通过promise'返回上报自定义数据的结果
     * @throws { BusinessError } 801 - Capability not supported.function setCustomElements
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000011 - Thr data write error, data is invalid.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setCustomElements(actionType: ActionType, customType: CustomType,
      customElement: CustomElement): Promise<void>;

    /**
     * 向音频模板控制方同步设置信息。使用Promise异步回调。
     *
     * @param { SettingItem[] } settingItems - 设置项数组。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.function setSettings
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000011 - Thr data write error, data is invalid.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setSettings(settingItems: SettingItem[]): Promise<void>;

    /**
     * 向音频模板控制方同步执行操作信息。使用Promise异步回调。
     *
     * @param { string } actionType - 行为类型。
     * @param { string } params - 行为信息。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.function reportExecuteAction
     *     can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000011 - Thr data write error, data is invalid.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    reportExecuteAction(actionType: string, params: string): Promise<void>;

    /**
     * 向音频模板控制方同步用于被拉起的Ability。使用Promise异步回调。
     *
     * @param { WantAgent } want - 能力信息。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000011 - Thr data write error, data is invalid.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setExtensionAbility(want: WantAgent): Promise<void>;

    /**
     * 销毁音频模板实例。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.function destroy
     *     can not work correctly due to limited device capabilities.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    destroy(): Promise<void>;
  }

  /**
   * 音频模板控制器，可以获得音频模板控制器唯一的标识，用于与接入音频模板的媒体应用数据交互。
   * 
   * > **说明：**
   * >
   * > - 本模块仅适用于API version 23及以上版本的Car设备。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  class AVMusicTemplateController {

    /**
     * 音频模板控制器唯一的标识。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sessionId: string;

    /**
     * 音频模板控制器是否销毁。true表示已经销毁，false表示没有销毁。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isDestroy: boolean;

    /**
     * 查询主标签。使用Promise异步回调。
     *
     * @returns { Promise<MediaTab[]> } Promise对象，返回查询的主标签页数组。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    queryMainTabs(): Promise<MediaTab[]>;

    /**
     * 查询媒体标签内容。使用Promise异步回调。
     *
     * @param { string } tabId - 标签页ID。
     * @returns { Promise<MediaTabContent> } Promise对象，返回媒体标签页内容。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    queryMediaTabContent(tabId: string): Promise<MediaTabContent>;

    /**
     * 查询媒体实体。使用Promise异步回调。
     *
     * @param { QueryMediaEntityParam } params - 查询媒体实体参数。
     * @returns { Promise<PageMediaEntity> } Promise对象，返回查询的媒体实体分页对象。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    queryMediaEntity(params: QueryMediaEntityParam): Promise<PageMediaEntity>;

    /**
     * 查询合集。使用Promise异步回调。
     *
     * @param { string } compilationId - 合集的ID。
     * @param { int } pageIndex - 页索引。
     * @returns { Promise<PageMediaEntity> } Promise对象，返回查询的合集的分页对象。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    queryCompilation(compilationId: string, pageIndex: int): Promise<PageMediaEntity>;

    /**
     * 查询播放列表。使用Promise异步回调。
     *
     * @param { int } pageIndex - 页索引。
     * @param { Sort } sort - 查询到的播放列表数据的排序类型。
     * @returns { Promise<PageMediaEntity> } Promise对象，返回查询的播放列表的分页对象。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    queryPlaylist(pageIndex: int, sort: Sort): Promise<PageMediaEntity>;

    /**
     * 查询当前单曲。使用Promise异步回调。
     *
     * @returns { Promise<Single> } Promise对象，返回当前单曲。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    queryCurrentSingle(): Promise<Single>;

    /**
     * 按关键字查询合集。使用Promise异步回调。
     *
     * @param { string } 关键字。 - 关键字。
     * @returns { Promise<Compilation[]> } Promise对象，返回合集数组。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    queryCompilationByKeyword(keyword: string): Promise<Compilation[]>;

    /**
     * 按关键字查询媒体实体。使用Promise异步回调。
     *
     * @param { string } 关键字。 - 关键字。
     * @param { EntityType } searchType - 媒体资源类型。
     * @param { int } pageIndex - 页索引。
     * @returns { Promise<PageMediaEntity> } Promise对象，返回与该关键字相关的媒体实体分页对象。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    queryMediaEntityByKeyword(keyword: string, searchType: EntityType, pageIndex: int): Promise<PageMediaEntity>;

    /**
     * 查询推荐的媒体实体列表。使用Promise异步回调。
     *
     * @returns { Promise<MediaEntity[]> } Promise对象，返回推荐的媒体实体数组。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    queryRecommendMediaEntityList(): Promise<MediaEntity[]>;

    /**
     * 查询热词。使用Promise异步回调。
     *
     * @returns { Promise<string[]> } Promise对象，返回热词数组。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    queryHotWords(): Promise<string[]>;

    /**
     * 查询搜索历史。使用Promise异步回调。
     *
     * @returns { Promise<string[]> } Promise对象，返回历史搜索词数组。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    querySearchHistory(): Promise<string[]>;

    /**
     * 清除搜索历史。使用Promise异步回调。
     *
     * @returns { Promise<OperResult> } Promise对象，返回清除搜索历史的操作结果。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    clearSearchHistory(): Promise<OperResult>;

    /**
     * 更新设置信息。使用Promise异步回调。
     *
     * @param { SettingItem } settingItem - 待更新的设置项。
     * @returns { Promise<SettingItem> } Promise对象，返回更新后的设置项。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    updateSettings(settingItem: SettingItem): Promise<SettingItem>;

    /**
     * 报告问题和建议。使用Promise异步回调。
     *
     * @param { string } 问题或者建议。 - 问题或者建议。
     * @returns { Promise<OperResult> } Promise对象，返回报告问题和建议的操作结果。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    reportProblemAndAdvice(advice: string): Promise<OperResult>;

    /**
     * 登录。使用Promise异步回调。
     *
     * @param { LoginType } controlType - 登录类型。
     * @param { string } [二维码ID。] - 二维码ID。
     * @returns { Promise<QrCodeInfo[]> } Promise对象，返回二维码信息的数组。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    login(controlType: LoginType, id?: string): Promise<QrCodeInfo[]>;

    /**
     * 请求对话框信息。使用Promise异步回调。
     *
     * @param { DialogActionType } actionType - 对话框操作类型。
     * @param { DialogActionInfo } [actionInfo] - 对话框操作的信息。
     * @returns { Promise<DialogInfo> } Promise对象，返回对话框信息。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    requestDialogInfo(actionType: DialogActionType, actionInfo?: DialogActionInfo): Promise<DialogInfo>;

    /**
     * 处理购买会员情况。使用Promise异步回调。
     *
     * @param { MemberPurchaseInfo } 购买会员的信息。 - 购买会员的信息。
     * @returns { Promise<DialogInfo> } Promise对象，返回对话框信息。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    handleMemberPurchase(info: MemberPurchaseInfo): Promise<DialogInfo>;

    /**
     * 查询购买会员的情况。使用Promise异步回调。
     *
     * @param { MemberPurchaseType } memberPurchaseType - 会员购买类型。
     * @returns { Promise<MemberPurchaseInfo[]> } Promise对象，返回购买会员信息的数组。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    queryMemberPurchase(memberPurchaseType: MemberPurchaseType): Promise<MemberPurchaseInfo[]>;

    /**
     * 查询自定义内容。使用Promise异步回调。
     *
     * @param { CustomType[] } queryType - 自定义类型数组。
     * @returns { Promise<CustomElement> } Promise对象，返回查询的自定义元素。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    queryCustomContent(queryType: CustomType[]): Promise<CustomElement>;

    /**
     * 下载媒体实体。使用Promise异步回调。
     *
     * @param { DownloadControlType } controlType - 下载的控制类型。
     * @param { MediaEntity } mediaEntity - 媒体实体。
     * @returns { Promise<OperResult> } Promise对象，返回下载媒体实体的操作结果。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    downloadMediaEntity(controlType: DownloadControlType, mediaEntity: MediaEntity): Promise<OperResult>;

    /**
     * 搜播，支持音视频，示例仅以音频为例。使用Promise异步回调。
     *
     * @param { SearchPlayInfoType } 搜播的信息类型。 - 搜播的信息类型。
     * @param { SearchPlayInfo } 搜播信息。 - 搜播信息。
     * @returns { Promise<OperResult> } Promise对象，返回操作结果。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    playForSearch(command: SearchPlayInfoType, args: SearchPlayInfo): Promise<OperResult>;

    /**
     * 执行动作。使用Promise异步回调。
     *
     * @param { string } actionType - 动作类型。
     * @param { string } 动作信息。 - 动作信息。
     * @returns { Promise<string> } Promise对象，返回执行动作的结果。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    executeAction(actionType: string, params: string): Promise<string>;

    /**
     * 播放媒体。使用Promise异步回调。
     *
     * @param { MediaEntity } mediaEntity - 包含标题、作者等元数据的媒体实体对象。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    playMediaEntity(mediaEntity: MediaEntity): Promise<void>;

    /**
     * 收藏媒体。使用Promise异步回调。
     *
     * @param { MediaFavoriteType } actionType - 媒体收藏的类型。
     * @param { MediaEntity } mediaEntity - 媒体实体。
     * @returns { Promise<OperResult> } Promise对象，返回收藏媒体的操作结果。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000003 - Template listener not registered.
     * @throws { BusinessError } 35000005 - AVMusicTemplate does not exist.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    favoriteMediaEntity(actionType: MediaFavoriteType, mediaEntity: MediaEntity): Promise<OperResult>;

    /**
     * 注册用户信息改变的回调。使用callback异步回调。
     *
     * @param { Callback<UserInfo> } callback - 回调函数，参数为用户信息。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onUserInfoChange(callback: Callback<UserInfo>): void;

    /**
     * 注销用户信息改变的回调。使用callback异步回调。
     *
     * @param { Callback<UserInfo> } [callback] - 回调函数，返回用户信息。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offUserInfoChange(callback?: Callback<UserInfo>): void;

    /**
     * 注册对话框命令改变的回调。使用callback异步回调。
     *
     * @param { ReportDialogCommandEvent } callback - 回调函数，上报对话框命令事件。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDialogCommandChange(callback: ReportDialogCommandEvent): void;

    /**
     * 注销对话框命令改变的回调。
     *
     * @param { ReportDialogCommandEvent } [callback] - 上报对话框命令事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offDialogCommandChange(callback?: ReportDialogCommandEvent): void;

    /**
     * 注册当前单曲改变的回调。使用callback异步回调。
     *
     * @param { Callback<Single> } callback - 回调函数，返回当前单曲的信息。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onCurrentSingleChange(callback: Callback<Single>): void;

    /**
     * 注销当前单曲改变的回调。使用callback异步回调。
     *
     * @param { Callback<Single> } [callback] - 回调函数，返回当前单曲的信息。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offCurrentSingleChange(callback?: Callback<Single>): void;

    /**
     * 注册媒体实体改变的回调。使用callback异步回调。
     *
     * @param { Callback<MediaEntity[]> } callback - 回调函数，返回媒体实体数组。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onMediaEntitiesChange(callback: Callback<MediaEntity[]>): void;

    /**
     * 注销媒体实体改变的回调。使用callback异步回调。
     *
     * @param { Callback<MediaEntity[]> } [callback] - 回调函数，返回媒体实体数组。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offMediaEntitiesChange(callback?: Callback<MediaEntity[]>): void;

    /**
     * 注册标签页内容改变的回调。使用callback异步回调。
     *
     * @param { ReportTabContentEvent } callback - 回调函数，上报标签页内容事件。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onTabContentChange(callback: ReportTabContentEvent): void;

    /**
     * 注销标签页内容改变的回调。
     *
     * @param { ReportTabContentEvent } [callback] - 上报标签页内容事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offTabContentChange(callback?: ReportTabContentEvent): void;

    /**
     * 注册上报播放列表改变的回调。使用callback异步回调。
     *
     * @param { Callback<PageMediaEntity> } callback - 回调函数，返回标签页媒体实体信息。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onPlaylistChange(callback: Callback<PageMediaEntity>): void;

    /**
     * 注销上报播放列表改变的回调。使用callback异步回调。
     *
     * @param { Callback<PageMediaEntity> } [callback] - 回调函数，返回标签页媒体实体信息。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offPlaylistChange(callback?: Callback<PageMediaEntity>): void;

    /**
     * 注册上报下载媒体状态改变的回调。使用callback异步回调。
     *
     * @param { Callback<MediaEntity> } callback - 回调函数，返回媒体实体信息。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDownloadMediaEntityStatusChange(callback: Callback<MediaEntity>): void;

    /**
     * 注销上报下载媒体状态改变的回调。使用callback异步回调。
     *
     * @param { Callback<MediaEntity> } [callback] - 回调函数，返回媒体实体信息。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offDownloadMediaEntityStatusChange(callback?: Callback<MediaEntity>): void;

    /**
     * 注册上报自定义元素改变的回调。使用callback异步回调。
     *
     * @param { ReportCustomElementsChangeEvent } callback - 回调函数，上报自定义元素改变事件。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onCustomElementsChange(callback: ReportCustomElementsChangeEvent): void;

    /**
     * 注销上报自定义元素改变的回调。
     *
     * @param { ReportCustomElementsChangeEvent } [callback] - 上报自定义元素改变事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offCustomElementsChange(callback?: ReportCustomElementsChangeEvent): void;

    /**
     * 注册上报设置改变的回调。使用callback异步回调。
     *
     * @param { Callback<SettingItem[]> } callback - 回调函数，返回设置项数组。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onSettingsChange(callback: Callback<SettingItem[]>): void;

    /**
     * 注销上报设置改变的回调。使用callback异步回调。
     *
     * @param { Callback<SettingItem[]> } [callback] - 回调函数，用于接收并处理设置项数组。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offSettingsChange(callback?: Callback<SettingItem[]>): void;

    /**
     * 注册上报执行动作的回调。使用callback异步回调。
     *
     * @param { ReportExecuteActionEvent } callback - 回调函数，上报对应按钮动作的事件。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onReportExecuteAction(callback: ReportExecuteActionEvent): void;

    /**
     * 注销上报执行动作的回调。
     *
     * @param { ReportExecuteActionEvent } [callback] - 上报执行动作的事件。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offReportExecuteAction(callback?: ReportExecuteActionEvent): void;

    /**
     * 注册回调，当需要拉起指定媒体应用界面时触发。使用callback异步回调。
     *
     * @param { ReportExecuteAbilityEvent } callback - 回调函数，通知音频模板控制方拉起指定三方应用界面的事件，包含应用包名和界面名称等信息。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onExtensionAbilityChange(callback: ReportExecuteAbilityEvent): void;

    /**
     * 注销回调，用于停止监听拉起指定媒体应用的请求。
     *
     * @param { ReportExecuteAbilityEvent } [callback] - 通知音频模板控制方拉起指定的媒体应用界面的事件回调。不填该参数则注销该类型对应的所有回调。
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 35000006 - AVMusicTemplateController does not exist.
     * @throws { BusinessError } 35000012 - AVMusicTemplate error.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offExtensionAbilityChange(callback?: ReportExecuteAbilityEvent): void;

    /**
     * 销毁音频模板控制器。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - capability not supported.
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    destroy(): Promise<void>;

  }

  /**
   * 对话框命令上报事件。
   *
   * @对话框控制类型。def { function } ReportDialogCommandEvent
   * @param { DialogControlType } 对话框控制类型。 - 对话框控制类型。
   * @param { DialogInfo } buttonInfo - 对话框信息。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type ReportDialogCommandEvent = (type: DialogControlType, buttonInfo: DialogInfo) => void;

  /**
   * 标签页内容上报事件。
   *
   * @typedef { function } ReportTabContentEvent
   * @param { string } tabId - 标签页的ID。
   * @param { MediaTabContent } tabContent - 标签页的内容。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type ReportTabContentEvent = (tabId: string, tabContent: MediaTabContent) => void;

  /**
   * 上报自定义元素变更信息的回调事件
   *
   * @typedef { function } ReportCustomElementsChangeEvent
   * @param { ActionType } actionType - 操作类型
   * @param { CustomType } customType - 自定义信息类型
   * @param { CustomElement } customElement - 自定义数据
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type ReportCustomElementsChangeEvent = (actionType: ActionType, customType: CustomType,
    customElement: CustomElement) => void;

  /**
   * 执行动作上报事件。
   *
   * @typedef { function } ReportExecuteActionEvent
   * @param { string } actionType - 操作类型。
   * @param { string } 执行动作的信息。 - 执行动作的信息。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type ReportExecuteActionEvent = (actionType: string, params: string) => void;

  /**
   * 通知音频模板控制方拉起指定媒体应用界面事件。
   *
   * @typedef { function } ReportExecuteActionEvent
   * @param { WantAgent } want - 媒体应用页面启动信息。
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type ReportExecuteAbilityEvent = (want: WantAgent) => void;

  /**
   * 媒体收藏类型的定义。该类型可取的值为下表字符串。
   *
   * @typedef { 'addFavorite' | 'removeFavorite' } MediaFavoriteType
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type MediaFavoriteType = 'addFavorite' | 'removeFavorite';

  /**
   * 操作类型的定义。该类型可取的值为下表字符串。
   *
   * @typedef { add' | 'remove } ActionType
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type ActionType = 'add' | 'remove';

  /**
   * 自定义类型。该类型可取的值为下表字符串。
   *
   * @typedef { 'USER_INFO' | 'TAB' | 'COMPILATION' | 'SETTINGS' } CustomType
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type CustomType = 'USER_INFO' | 'TAB' | 'COMPILATION' | 'SETTINGS';

  /**
   * 定义下载操作的控制类型，包括开始下载、删除下载、恢复下载和暂停下载。该类型可取的值为下表字符串。
   *
   * @typedef { 'startDownload' | 'deleteDownload' | 'resumeDownload' | 'pauseDownload' } DownloadControlType
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type DownloadControlType = 'startDownload' | 'deleteDownload' | 'resumeDownload' | 'pauseDownload';

  /**
   * 登录的类型。该类型可取的值为下表字符串。
   *
   * @typedef { 'queryLoginInfo' | 'refreshLoginInfo' | 'cancel' | 'logout' } LoginType
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type LoginType = 'queryLoginInfo' | 'refreshLoginInfo' | 'cancel' | 'logout';

  /**
   * 对话框操作类型。该类型可取的值为下表字符串。
   *
   * @typedef { 'open' | 'close' | 'refresh' } DialogActionType
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type DialogActionType = 'open' | 'close' | 'refresh';

  /**
   * 对话框控制类型的定义。该类型可取的值为下表字符串。
   *
   * @typedef { 'open' | 'close' | 'refresh' | 'toast' } DialogControlType
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type DialogControlType = 'open' | 'close' | 'refresh' | 'toast';

  /**
   * 操作结果的定义。
   *
   * @interface OperResult
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface OperResult {
    /**
     * 错误码。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    errorCode: int;

    /**
     * 错误信息。
     *
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    errorMsg?: string;
  }

  /**
   * 媒体标签页的定义。
   *
   * @interface MediaTab
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface MediaTab {
    /**
     * 标签页的标识。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    tabId: string;

    /**
     * 标签页的名称。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    tabName: string;

    /**
     * 标签页的图标（接入模板时在主界面的标签页中必填）。
     *
     * @type { ?image.PixelMap }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    tabIcon?: image.PixelMap;

    /**
     * 标签页上的附加内容。
     *
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    extraDataJson?: string;
  }

  /**
   * 媒体标签页内容的定义。继承自[OperResult]{@link avMusicTemplate.OperResult}。
   *
   * @extends OperResult
   * @interface MediaTabContent
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface MediaTabContent extends OperResult {

    /**
     * 标签页的ID。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    tabId: string;

    /**
     * 页面内容的合集数组。
     *
     * @type { Compilation[] }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    compilations: Compilation[];
  }

  /**
   * “我的主页”自定义元素的定义。继承自[OperResult]{@link avMusicTemplate.OperResult}。
   *
   * @extends OperResult
   * @interface CustomElement
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface CustomElement extends OperResult {

    /**
     * 用户信息。
     *
     * @type { ?UserInfo }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    userInfo?: UserInfo;

    /**
     * 标签页信息。
     *
     * @type { ?MediaTab[] }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    tabs?: MediaTab[];

    /**
     * 合集数组。
     *
     * @type { ?Compilation[] }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    customCompilations?: Compilation[];

    /**
     * 设置项数组。
     *
     * @type { ?SettingItem[] }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    settings?: SettingItem[];
  }

  /**
   * 合集的定义。继承自[OperResult]{@link avMusicTemplate.OperResult}。
   *
   * @extends OperResult
   * @interface Compilation
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface Compilation extends OperResult {

    /**
     * 合集的唯一标识。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    id: string;

    /**
     * 合集的标题。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    title: string;

    /**
     * 是否有更多的合集数据。true表示有，false表示没有。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    hasMoreData: boolean;

    /**
     * 合集的总个数。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    totalSize: int;
    /**
     * 合集的媒体资源类型。
     *
     * @type { EntityType }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    memberMediaType: EntityType;

    /**
     * 合集的内容。
     *
     * @type { MediaEntity[] }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    topElements: MediaEntity[];
  }

  /**
   * 标签页媒体的定义。继承自[OperResult]{@link avMusicTemplate.OperResult}。
   *
   * @extends OperResult
   * @interface Compilation
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface PageMediaEntity extends OperResult {
    /**
     * 分页查询页码。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pageIndex: int;

    /**
     * 页面的大小。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pageSize: int;

    /**
     * 是否有下一页。true表示有，false表示没有。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    hasMoreData: boolean;

    /**
     * 数据总大小。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    totalSize: int;
    /**
     * 媒体资源类型。
     *
     * @type { EntityType }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    memberMediaType: EntityType;

    /**
     * 查询数据内容（根据类型传递相应的结构数据）。
     *
     * @type { MediaEntity[] }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    elements: MediaEntity[];

    /**
     * 数据排序。
     *
     * @type { ?Sort }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sort?: Sort;

    /**
     * 剧集区间。
     *
     * @type { ?EpisodeRange }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    episodeRange?: EpisodeRange;
  }

  /**
   * 媒体实例的定义。继承自[OperResult]{@link avMusicTemplate.OperResult}。
   *
   * @interface MediaEntity
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface MediaEntity {

    /**
     * 媒体资源的ID。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    mediaId: string;

    /**
     * 媒体资源的类型。
     *
     * @type { EntityType }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    mediaType: EntityType;

    /**
     * 父节点的媒体资源ID。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    parentId: string;

    /**
     * 父节点的媒体资源类型。
     *
     * @type { EntityType }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    parentMediaType: EntityType;

    /**
     * 媒体资源的标题。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    title: string;

    /**
     * 媒体资源的描述。
     *
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    desc?: string;

    /**
     * 媒体资源的封面图片URL。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    imageUrl: string;

    /**
     * 媒体资源的播放状态。
     *
     * @type { PlaybackState }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    playState: PlaybackState;
  }

  /**
   * 媒体元素Singer/Radio/Banner结构体定义
   *
   * @extends MediaEntity
   * @interface MediaElement
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface MediaElement extends MediaEntity { }

  /**
   * 海报的定义。继承自[MediaEntity]{@link avMusicTemplate.MediaEntity}。
   *
   * @extends MediaEntity
   * @interface Banner
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface Banner extends MediaEntity {
    /**
     * 是否支持一键启播。true表示支持，false表示不支持。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSupportOnePlay: boolean;
  }

  /**
   * 专辑的定义。继承自[MediaEntity]{@link avMusicTemplate.MediaEntity}。
   *
   * @extends MediaEntity
   * @interface Album
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface Album extends MediaEntity {
    /**
     * 歌手名。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    singer: string;

    /**
     * 播放量。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    playCounts: string;

    /**
     * 收藏或订阅的信息。
     *
     * @type { FavoriteData }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    favSubscribeData: FavoriteData;

    /**
     * 专辑的总音频数。
     *
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    episodeCounts?: string;
  }

  /**
   * 单曲的定义。继承自[MediaEntity]{@link avMusicTemplate.MediaEntity}。
   *
   * @extends MediaEntity
   * @interface Single
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface Single extends MediaEntity {

    /**
     * 是否是VIP歌曲。true表示是，false表示不是。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isVip: boolean;

    /**
     * 歌手名。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    singer: string;

    /**
     * 播放歌曲信息。
     *
     * @type { PlayInfo }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    playInfo: PlayInfo;

    /**
     * 收藏或订阅的信息。
     *
     * @type { FavoriteData }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    favSubscribeData: FavoriteData;

    /**
     * 歌曲标签信息的数组。
     *
     * @type { ?string[] }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    tags?: string[];

    /**
     * 歌曲设置项的数组。
     *
     * @type { ?SettingItem[] }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    settings?: SettingItem[];

    /**
     * 歌曲下载状态。
     *
     * @type { ?DownloadStatus }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    downloadStatus?: DownloadStatus;

    /**
     * 歌曲下载进度。
     *
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    downloadProgress?: int;
  }

  /**
   * 表示下载状态类型的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum DownloadStatus {
    /**
     * 下载成功。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOWNLOAD_SUCCESS = 0,

    /**
     * 下载中。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOWNLOADING = 1,

    /**
     * 下载失败。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOWNLOAD_FAIL = 2
  }

  /**
   * 排行榜的定义。继承自[MediaEntity]{@link avMusicTemplate.MediaEntity}。
   *
   * @extends MediaEntity
   * @interface Ranking
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface Ranking extends MediaEntity {
    /**
     * 榜单下的推荐歌曲。
     *
     * @type { MediaEntity[] }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    topElements: MediaEntity[];
  }

  /**
   * 播放信息的定义。
   *
   * @interface MediaElement
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface PlayInfo {
    /**
     * 播放量。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    playCounts: string;

    /**
     * 是否支持下一首。true表示支持，false表示不支持。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSupportNext: boolean;

    /**
     * 是否支持上一首。true表示支持，false表示不支持。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSupportPrev: boolean;

    /**
     * 是否支持快进。true表示支持，false表示不支持。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSupportQuickForward: boolean;

    /**
     * 是否支持快退。true表示支持，false表示不支持。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSupportQuickBackward: boolean;

    /**
     * 快进的步长，单位为毫秒（ms）。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    quickForwardStep: int;

    /**
     * 快退的步长，单位为毫秒（ms）。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    quickBackwardStep: int;

    /**
     * 是否支持跳过开头。true表示支持，false表示不支持。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSupportSkipHead: boolean;

    /**
     * 是否支持跳过结尾。true表示支持，false表示不支持。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSupportSkipTail: boolean;

    /**
     * 是否支持切换播放模式。true表示支持，false表示不支持。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSupportPlayMode: boolean;

    /**
     * 是否支持改变播放速率。true表示支持，false表示不支持。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSupportPlayRate: boolean;

    /**
     * 支持的播放速率的数组。
     *
     * @type { string[] }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    supportedPlayRate: string[];

    /**
     * 当前的播放速率。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    currentPlayRate: string;

    /**
     * 是否支持声音质量。true表示支持，false表示不支持。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSupportSoundQuality: boolean;

    /**
     * 是否支持音效。true表示支持，false表示不支持。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSupportSoundEffect: boolean;

    /**
     * 播放总时长，单位为毫秒（ms）。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    totalDuration: int;

    /**
     * 当前播放的时长，单位为毫秒（ms）。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    currentPlayDuration: int;

    /**
     * 是否支持进度。true表示支持，false表示不支持。默认值为true。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSupportProgress: boolean;
  }

  /**
   * 收藏/订阅的定义。
   *
   * @interface FavoriteData
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface FavoriteData {
    /**
     * 是否支持收藏/订阅。true表示支持，false表示不支持。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSupportFav: boolean;

    /**
     * 是否已收藏/订阅。true表示已收藏/订阅，false表示未收藏/订阅。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isFavorite: boolean;

    /**
     * 收藏/订阅的数量。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    favCounts: string;
  }

  /**
   * 用户信息的定义。
   *
   * @interface MediaElement
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface UserInfo {
    /**
     * 用户的唯一ID。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    userInfoId: string;

    /**
     * 用户昵称。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    nickName: string;

    /**
     * 用户的头像图片URL。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    profilePicUrl: string;

    /**
     * 其他关于用户的描述。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    tips: string;

    /**
     * 用户是否登录。true表示已登录，false表示未登录。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isLogin: boolean;

    /**
     * 用户是否是VIP。true表示是，false表示不是。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isVip: boolean;
  }

  /**
   * 会员购买信息的定义。
   *
   * @interface MediaElement
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface MemberPurchaseInfo {
    /**
     * 会员购买信息的唯一ID。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    id: string;

    /**
     * 会员购买图片的URL（该图片必须采用21:9的宽高比）。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    diagramUrl: string;

    /**
     * 会员购买图片。
     *
     * @type { ?image.PixelMap }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    diagramData?: image.PixelMap;

    /**
     * 会员购买图片的内容。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    diagramContent: string;

    /**
     * 会员购买类型。
     *
     * @type { MemberPurchaseType }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    memberPurchaseType: MemberPurchaseType;
  }

  /**
   * 二维码信息的定义。
   *
   * @interface QrCodeInfo
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface QrCodeInfo {

    /**
     * 用于唯一标识用户登录的二维码会话。
     * 
     * 当二维码过期时，MediaUI将使用此ID从媒体应用查询并更新新的二维码。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    id: string;

    /**
     * 购买价格。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    price: string;

    /**
     * 标题名称。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    titleName: string;

    /**
     * 详情名称。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    detailName: string;

    /**
     * 提示信息。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    tips: string;

    /**
     * 与二维码关联的应用图标，用于应用登录的二维码应显示目标应用的图标。
     *
     * @type { ?image.PixelMap }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    icon?: image.PixelMap;

    /**
     * 二维码的内容。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    content: string;

    /**
     * 二维码图片。
     *
     * @type { ?image.PixelMap }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    codeData?: image.PixelMap;

    /**
     * 二维码有效期（单位：秒）。
     * 
     * 当二维码到期时，二维码ID将用于再次查询并获得新的二维码。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    validPeriod: int;
  }

  /**
   * 设置项的定义。
   *
   * @interface SettingItem
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface SettingItem {
    /**
     * 设置项的唯一ID。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    id: string;

    /**
     * 设置项的标题。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    title: string;

    /**
     * 设置项的描述。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    desc: string;

    /**
     * 设置项的类型。
     *
     * @type { ?SettingType }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    settingType?: SettingType;

    /**
     * 设置项的值。
     * 
     * - 当settingType为SettingType.SWITCH时，该值为boolean类型。
     * - 当settingType为SettingType.LIST时，该值为SettingContent数组。
     * - 当settingType为SettingType.JUMP时，该值为string类型。
     *
     * @type { ?(string | boolean | SettingContent[] | WantAgent) }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    settingValue?: string | boolean | SettingContent[] | WantAgent;

    /**
     * 与当前设置关联的媒体ID。
     * 
     * 如果设置与当前媒体信息相关联，需要设置mediaId；否则，不需要设置mediaId。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    mediaId: string;
  }

  /**
   * 设置内容的定义（音频模板里有定义设置页面，设置内容用于设置页的填充）。
   *
   * @interface SettingContent
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface SettingContent {
    /**
     * 设置的内容。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    value: string;

    /**
     * 是否选择设置项内容。true表示选择，false表示不选择。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSelected: boolean;

    /**
     * 设置内容的描述的数组。
     *
     * @type { ?string[] }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    textTags?: string[];

    /**
     * 设置内容的图片标签数组。
     *
     * @type { ?image.PixelMap[] }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    imageTags?: image.PixelMap[];
  }

  /**
   * 对话框动作信息的定义。
   *
   * @interface DialogActionInfo
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DialogActionInfo {
    /**
     * 对话框动作的唯一标识符。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    dialogId: string;

    /**
     * 对话框中的复选框是否已选中。true表示已选中，false表示未选中。无默认值。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isChecked: boolean;

    /**
     * 用户点击的按钮的ID。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    clickedBtnId: string;
  }

  /**
   * 对话框信息的定义。
   *
   * @interface DialogInfo
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DialogInfo {
    /**
     * 对话框的唯一ID。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    dialogId: string;

    /**
     * 对话框的类型。
     *
     * @type { DialogType }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    dialogType: DialogType;

    /**
     * 对话框的标题。
     *
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    title?: string;

    /**
     * 对话框的内容。
     *
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    text?: string;

    /**
     * 对话框按钮的数组。
     *
     * @type { ?DialogButtonInfo[] }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    buttons?: DialogButtonInfo[];

    /**
     * 对话框二维码的数组。
     * 
     * 当设置了二维码信息时，此对话框将被识别为二维码对话框，并将优先显示二维码信息。最多可以设置两个。
     *
     * @type { ?QrCodeInfo[] }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    qrCodes?: QrCodeInfo[];

    /**
     * 对话框的其他信息。
     *
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    description?: string;
  }

  /**
   * 对话框按钮信息的定义。
   *
   * @interface DialogButtonInfo
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DialogButtonInfo {
    /**
     * 按钮的ID。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    buttonId: string;

    /**
     * 按钮的文本。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    buttonText: string;

    /**
     * 按钮的类型。
     *
     * @type { ButtonType }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    buttonType: ButtonType;
  }

  /**
   * 搜播的音频项目的定义。
   *
   * @interface SearchPlayMusicItem
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface SearchPlayMusicItem {
    /**
     * 音频的唯一标识。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    entityId: string;

    /**
     * 音频的名称。
     *
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    entityName?: string;
  }

  /**
   * 搜播的音频信息的定义。
   *
   * @interface SearchPlayMusicInfo
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface SearchPlayMusicInfo {

    /**
     * 音频列表。
     *
     * @type { SearchPlayMusicItem[] }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    items: SearchPlayMusicItem[];

    /**
     * 音频的显示名称。
     *
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    displayName?: string;

    /**
     * 对音频的描述。
     *
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    description?: string;

    /**
     * 是否仅执行播放音乐的操作。true表示是，false表示否。无默认值。
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    playMusicOnly?: boolean;

    /**
     * 音频的播放模式。
     *
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    playMode?: string;
  }

  /**
   * 搜播的视频信息的定义。
   *
   * @interface SearchPlayVideoInfo
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface SearchPlayVideoInfo {

    /**
     * 音频的唯一标识。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    entityId: string;

    /**
     * 视频的集数ID。
     *
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    episodeId?: string;

    /**
     * 视频的剧集序号。
     *
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    episodeNumber?: int;

    /**
     * 视频的额外信息。
     *
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    extras?: string;

  }

  /**
   * 搜播信息的定义。
   *
   * @interface SearchPlayInfo
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface SearchPlayInfo {
    /**
     * 搜播的音频信息。
     *
     * @type { ?SearchPlayMusicInfo }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    musicInfo?: SearchPlayMusicInfo;

    /**
     * 搜播的视频信息。
     *
     * @type { ?SearchPlayVideoInfo }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    videoInfo?: SearchPlayVideoInfo;
  }


  /**
   * 剧集的范围的定义。
   *
   * @interface EpisodeRange
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface EpisodeRange {
    /**
     * 开始的索引。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    start: int;

    /**
     * 结束的索引。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    end: int;
  }

  /**
   * 查询媒体实例参数的定义。
   *
   * @interface QueryMediaEntityParam
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface QueryMediaEntityParam {
    /**
     * 媒体实例的ID。
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    entityId: string;

    /**
     * 分页查询页码。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pageIndex: int;

    /**
     * 媒体资源类型。
     *
     * @type { EntityType }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    type: EntityType;

    /**
     * 子节点的媒体资源类型。
     *
     * @type { ?EntityType }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subEntityType?: EntityType;

    /**
     * 查询到的列表数据排序。
     *
     * @type { ?Sort }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sort?: Sort;

    /**
     * 要查询的剧集区间。
     *
     * @type { ?EpisodeRange }
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    episodeRange?: EpisodeRange;
  }


  /**
   * 表示设置类型的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum SettingType {
    /**
     * 开关设置，用于控制功能的开启或关闭。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SWITCH = 0,

    /**
     * 列表设置，用于从多个选项中选择一个选项。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LIST = 1,

    /**
     * 跳转设置，用于跳转到另一个界面。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    JUMP = 2
  }

  /**
   * 表示对话框类型的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum DialogType {
    /**
     * 普通对话框。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NORMAL = 0,

    /**
     * 联网对话框。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    INTERNET = 1,

    /**
     * 流程对话框。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    FLOW = 2,

    /**
     * 付费对话框。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PAID = 3,

    /**
     * VIP对话框。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    VIP = 4,

    /**
     * 登录对话框。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LOGIN = 5,

    /**
     * 错误对话框。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ERROR = 6,

    /**
     * 未知对话框。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    UNKNOWN = 7
  }

  /**
   * 表示按钮类型的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum ButtonType {
    /**
     * 普通按钮。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NORMAL = 0,

    /**
     * 强调按钮。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    EMPHASIZE = 1
  }

  /**
   * 表示媒体资源类型的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum EntityType {
    /**
     * 未知的媒体资源类型。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    UNKNOWN = 0,

    /**
     * 单曲类型。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SINGLE = 1,

    /**
     * 歌手类型。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SINGER = 2,

    /**
     * 专辑类型。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ALBUM = 3,

    /**
     * 排行榜类型。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RANKING = 4,

    /**
     * 海报类型。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BANNER = 5,

    /**
     * 电台类型。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RADIO_STATION = 6
  }

  /**
   * 表示媒体资源的播放状态的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum PlaybackState {
    /**
     * 准备中状态。
     * 
     * 表示媒体文件尚未准备好播放，媒体正在加载或缓冲中。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PLAYBACK_STATE_PREPARE = 0,

    /**
     * 正在播放状态。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PLAYBACK_STATE_PLAY = 1,

    /**
     * 暂停状态。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PLAYBACK_STATE_PAUSE = 2,

    /**
     * 停止状态。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PLAYBACK_STATE_STOP = 3,

    /**
     * 播放完成状态。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PLAYBACK_STATE_COMPLETED = 4,

    /**
     * 播放错误状态。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PLAYBACK_STATE_ERROR = 5,

    /**
     * 缓冲状态。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PLAYBACK_STATE_BUFFERING = 6
  }

  /**
   * 表示会员购买类型的枚举。
   *
   * @enum { string }
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum MemberPurchaseType {
    /**
     * 常规购买。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NORMAL = 'normal',

    /**
     * 会员推广海报购买。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BANNER = 'banner'
  }


  /**
   * 表示音频模板类型的枚举。
   *
   * @enum { string }
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum AVMusicTemplateType {
    /**
     * 音频模板类型的默认值。
     * 
     * 用于标识当前音频模板应用的业务类型，开发者创建模板时可根据自身业务修改此值。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DEFAULT = 'smartCar'
  }

  /**
   * 表示搜播信息类型的枚举。
   *
   * @enum { string }
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum SearchPlayInfoType {
    /**
     * 播放音乐。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PLAY_MUSIC = 'playMusic',

    /**
     * 播放视频。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PLAY_VIDEO = 'playVideo'
  }

  /**
   * 表示查询到的列表数据排序类型的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum Sort {
    /**
     * 默认值，默认正序。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NONE = 0,

    /**
     * 正序。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ORDER = 1,

    /**
     * 倒序。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    REVERSE_ORDER = 2
  }

  /**
   * 表示错误码类型的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum AVMusicTemplateErrorCode {
    /**
     * 音频模板创建失败。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ERR_CODE_CREATE_AV_MUSIC_TEMPLATE_FAILED = 35000001,

    /**
     * 音频模板控制器创建失败。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ERR_CODE_CREATE_AV_MUSIC_TEMPLATE_CONTROLLER_FAILED = 35000002,

    /**
     * 模板监听未注册。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ERR_CODE_TEMPLATE_LISTENER_NO_EXIT = 35000003,

    /**
     * 未注册模板控制器回调。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ERR_CODE_CONTROLLER_CALLBACK_NO_EXIT = 35000004,

    /**
     * 音频模板不存在。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ERR_CODE_AV_MUSIC_TEMPLATE_NOT_EXIST = 35000005,

    /**
     * 模板控制器不存在。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ERR_CODE_CONTROLLER_NOT_EXIST = 35000006,

    /**
     * 模板控制器已经存在。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ERR_CODE_CONTROLLER_IS_EXIST = 35000007,

    /**
     * 音频模板管理服务不存在。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ERR_CODE_SERVICE_NOT_EXIST = 35000008,

    /**
     * 音频模板管理服务异常。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ERR_CODE_SERVICE_EXCEPTION = 35000009,

    /**
     * 数据超过了允许的最大传输容量。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ERR_CODE_EXCEED_MAX_DATA_SIZE = 35000010,

    /**
     * 写数据失败，数据不可用。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ERR_CODE_WRITE_RESULT_EXCEPTION = 35000011,

    /**
     * 音频模板错误。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVMusicTemplate
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ERR_CODE_AV_MUSIC_TEMPLATE_ERROR = 35000012
  }

}

export default avMusicTemplate;