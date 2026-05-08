/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file
 * @kit API10LessDeprecatedModules
 */

/**
 * wantConstant模块提供want中操作want常数和解释Flags说明的能力。
 *
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.app.ability.wantConstant/wantConstant
 */
declare namespace wantConstant {
  /**
   * want操作的常数。用于表示要执行的通用操作。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6
   * @deprecated since 9
   */
  export enum Action {
    /**
     * 指示返回原点的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_HOME = 'ohos.want.action.home',

    /**
     * 指示启动显示小键盘的页面功能的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_DIAL = 'ohos.want.action.dial',

    /**
     * 指示启动页面搜索功能的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_SEARCH = 'ohos.want.action.search',

    /**
     * 指示启动提供无线网络设置的页面功能的操作，例如，Wi-Fi选项。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_WIRELESS_SETTINGS = 'ohos.settings.wireless',

    /**
     * 指示启动管理已安装应用程序的页面功能的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_MANAGE_APPLICATIONS_SETTINGS = 'ohos.settings.manage.applications',

    /**
     * 指示启动显示指定应用程序详细信息的页面功能的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_APPLICATION_DETAILS_SETTINGS = 'ohos.settings.application.details',

    /**
     * 指示启动页面功能以设置闹钟的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_SET_ALARM = 'ohos.want.action.setAlarm',

    /**
     * 指示启动显示所有警报的页面功能的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_SHOW_ALARMS = 'ohos.want.action.showAlarms',

    /**
     * 指示启动用于使闹钟睡眠的页面功能的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_SNOOZE_ALARM = 'ohos.want.action.snoozeAlarm',

    /**
     * 指示启动删除闹钟的页面功能的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_DISMISS_ALARM = 'ohos.want.action.dismissAlarm',

    /**
     * 指示启动页面功能以关闭计时器的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_DISMISS_TIMER = 'ohos.want.action.dismissTimer',

    /**
     * 指示启动发送sms的页面功能的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_SEND_SMS = 'ohos.want.action.sendSms',

    /**
     * 指示启动页面功能以打开联系人或图片的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_CHOOSE = 'ohos.want.action.choose',

    /**
     * 指示启动页面拍照功能的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 8
     * @deprecated since 9
     */
    ACTION_IMAGE_CAPTURE = 'ohos.want.action.imageCapture',

    /**
     * 指示启动页面功能以拍摄视频的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 8
     * @deprecated since 9
     */
    ACTION_VIDEO_CAPTURE = 'ohos.want.action.videoCapture',

    /**
     * 指示显示应用程序选择对话框的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_SELECT = 'ohos.want.action.select',

    /**
     * 指示发送单个数据记录的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_SEND_DATA = 'ohos.want.action.sendData',

    /**
     * 指示发送多个数据记录的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_SEND_MULTIPLE_DATA = 'ohos.want.action.sendMultipleData',

    /**
     * 指示请求媒体扫描仪扫描文件并将文件添加到媒体库的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_SCAN_MEDIA_FILE = 'ohos.want.action.scanMediaFile',

    /**
     * 指示查看数据的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_VIEW_DATA = 'ohos.want.action.viewData',

    /**
     * 指示编辑数据的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ACTION_EDIT_DATA = 'ohos.want.action.editData',

    /**
     * 指示用行为选择器来展示选择的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    INTENT_PARAMS_INTENT = 'ability.want.params.INTENT',

    /**
     * 指示与行为选择器一起使用时的字符序列对话框标题。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    INTENT_PARAMS_TITLE = 'ability.want.params.TITLE',

    /**
     * 指示选择文件的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 7
     * @deprecated since 9
     */
    ACTION_FILE_SELECT = 'ohos.action.fileSelect',

    /**
     * 指示发送数据时与目标关联的数据流的URI。对应的value必须是string类型的数组。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 7
     * @deprecated since 9
     */
    PARAMS_STREAM = 'ability.params.stream',

    /**
     * 指示提供oauth服务的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 8
     * @deprecated since 9
     */
    ACTION_APP_ACCOUNT_OAUTH = 'ohos.account.appAccount.action.oauth'
  }

  /**
   * want实体的常数。用于表示目标Ability额外的类别信息。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6
   * @deprecated since 9
   */
  export enum Entity {
    /**
     * 指示默认实体，如果未指定实体，则使用该实体。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ENTITY_DEFAULT = 'entity.system.default',

    /**
     * 指示主屏幕实体。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ENTITY_HOME = 'entity.system.home',

    /**
     * 表示语音交互实体。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ENTITY_VOICE = 'entity.system.voice',

    /**
     * 指示浏览器类别。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ENTITY_BROWSABLE = 'entity.system.browsable',

    /**
     * 指示视频类别。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    ENTITY_VIDEO = 'entity.system.video'
  }

  /**
   * Flags说明。用于表示处理Want的方式。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantConstant/wantConstant#Flags
   */
  export enum Flags {
    /**
     * 指示对URI执行读取操作的授权。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantConstant/wantConstant.Flags#FLAG_AUTH_READ_URI_PERMISSION
     */
    FLAG_AUTH_READ_URI_PERMISSION = 0x00000001,

    /**
     * 指示对URI执行写入操作的授权。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantConstant/wantConstant.Flags#FLAG_AUTH_WRITE_URI_PERMISSION
     */
    FLAG_AUTH_WRITE_URI_PERMISSION = 0x00000002,

    /**
     * 将结果返回给元能力。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    FLAG_ABILITY_FORWARD_RESULT = 0x00000004,

    /**
     * 确定是否可以将本地设备上的功能迁移到远程设备。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    FLAG_ABILITY_CONTINUATION = 0x00000008,

    /**
     * 指定组件是否属于OHOS。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    FLAG_NOT_OHOS_COMPONENT = 0x00000010,

    /**
     * 指定是否启动某个能力。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    FLAG_ABILITY_FORM_ENABLED = 0x00000020,

    /**
     * 指示URI上可能持久化的授权。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 6
     * @deprecated since 9
     */
    FLAG_AUTH_PERSISTABLE_URI_PERMISSION = 0x00000040,

    /**
     * 按照前缀匹配的方式验证URI权限。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 6
     * @deprecated since 9
     */
    FLAG_AUTH_PREFIX_URI_PERMISSION = 0x00000080,

    /**
     * 支持分布式调度系统中的多设备启动。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    FLAG_ABILITYSLICE_MULTI_DEVICE = 0x00000100,

    /**
     * 指示无论主机应用程序是否已启动，都将启动使用服务模板的功能。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    FLAG_START_FOREGROUND_ABILITY = 0x00000200,

    /**
     * 表示迁移是可拉回的。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 6
     * @deprecated since 9
     */
    FLAG_ABILITY_CONTINUATION_REVERSIBLE = 0x00000400,

    /**
     * 如果未安装指定的功能，请安装该功能。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantConstant/wantConstant.Flags#FLAG_INSTALL_ON_DEMAND
     */
    FLAG_INSTALL_ON_DEMAND = 0x00000800,

    /**
     * 如果未安装，使用后台模式安装该功能。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    FLAG_INSTALL_WITH_BACKGROUND_MODE = 0x80000000,

    /**
     * 指示清除其他任务的操作。可以为传递给 **FeatureAbility** 中
     * [startAbility]{@link @ohos.ability.featureAbility:featureAbility.startAbility(parameter: StartAbilityParameter, callback: AsyncCallback<number>)}
     * 方法的**Want**设置此标志，并且必须与**FLAG_ABILITY_NEW_MISSION**一起使用。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    FLAG_ABILITY_CLEAR_MISSION = 0x00008000,

    /**
     * 指示在历史任务堆栈上创建任务的操作。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    FLAG_ABILITY_NEW_MISSION = 0x10000000,

    /**
     * 指示如果启动能力的现有实例已位于任务堆栈的顶部，则将重用该实例。否则，将创建一个新的能力实例。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 6
     * @deprecated since 9
     */
    FLAG_ABILITY_MISSION_TOP = 0x20000000
  }
}

export default wantConstant;