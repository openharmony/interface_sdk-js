/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
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

import type BaseContext from './application/BaseContext';
import type { Callback } from './@ohos.base';
import { NodeController } from './arkui/NodeController';
import { typeNode } from './arkui/FrameNode';

/*** if arkts static */
import { XComponentController } from './arkui/component/xcomponent';
import { LocalStorage } from './arkui/stateManagement/storage/localStorage';
/*** endif */

/**
 * 该模块提供画中画基础功能，包括判断当前系统是否支持画中画功能，以及创建画中画控制器用于启动或停止画中画等。适用于视频播放、视频通话或视频会议场景下，以小窗（画中画）模式呈现内容。
 *
 * > **说明：**
 * >
 * > - 在<!--RP2-->OpenHarmony 6.0<!--RP2End-->之前，支持在Phone、Tablet设备使用画中画功能，其他设备不可用；从<!--RP2-->OpenHarmony 6.0<!--RP2End--
 * > >开始，支持在Phone、PC/2in1、Tablet设备使用画中画功能，其他设备不可用。
 * >
 * > - 针对系统能力SystemCapability.Window.SessionManager，请先使用
 * > [canIUse()]{@link canIUse}接口判断当前设备是否支持此syscap及对应接口。
 *
 * @syscap SystemCapability.Window.SessionManager
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @since 24 static
 */
declare namespace PiPWindow {
  /**
   * 判断当前设备是否支持画中画功能。
   *
   * @returns { boolean } 当前系统是否支持画中画功能。true表示支持，false则表示不支持。
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 24 static
   */
  function isPiPEnabled(): boolean;

  /**
   * 创建画中画控制器，使用Promise异步回调。
   *
   * @param { PiPConfiguration } config - 创建画中画控制器的参数。该参数不能为空，并且构造该参数的context和componentController不能为空。构造该参数时，如果指定了
   *     templateType，需保证templateType是[PiPTemplateType]{@link PiPWindow.PiPTemplateType}类型；如果指定了controlGroups，需保证
   *     controlGroups与templateType匹配，详见[PiPControlGroup]{@link PiPWindow.PiPControlGroup}。
   * @returns { Promise<PiPController> } Promise对象。返回当前创建的画中画控制器。
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 24 static
   */
  function create(config: PiPConfiguration): Promise<PiPController>;

  /**
   * 创建画中画控制器，使用typeNode为画中画添加自定义UI节点。使用Promise异步回调。
   *
   * @param { PiPConfiguration } config - 创建画中画控制器的参数。该参数不能为空，并且构造该参数的context不能为空。构造该参数时，如果指定了templateType，需保证
   *     templateType是[PiPTemplateType]{@link PiPWindow.PiPTemplateType}类型；如果指定了controlGroups，需保证controlGroups与
   *     templateType匹配，详见[PiPControlGroup]{@link PiPWindow.PiPControlGroup}。
   * @param { typeNode.XComponent } contentNode - 用于渲染画中画窗口中的内容。该参数不能为空。
   * @returns { Promise<PiPController> } Promise对象。返回当前创建的画中画控制器。
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  function create(config: PiPConfiguration, contentNode: typeNode.XComponent): Promise<PiPController>;

  /**
   * 创建画中画控制器时的参数。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 24 static
   */
  interface PiPConfiguration {
    /**
     * 表示上下文环境。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    context: BaseContext;

    /**
     * 表示原始[XComponent]{@link ./@internal/component/ets/xcomponent}控制器。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    componentController: XComponentController;

    /**
     * navigation控件ID，不传值则默认不需要缓存页面。
     *
     * 1、UIAbility使用[Navigation]{@link Navigation}管理页面时，需要设置Navigation控件的id属性，并将该id设置给画中画控制器，确
     * 保还原场景下能够从画中画窗口恢复到原页面。
     *
     * 2、UIAbility使用[Router]{@link @ohos.router:router}管理页面时，无需设置navigationId。
     *
     * 3、UIAbility只有单页面时，无需设置navigationId，还原场景下也能够从画中画窗口恢复到原页面。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    navigationId?: string;

    /**
     * navigation控件下的子页面ID，点击"恢复全屏窗口"按钮后，恢复到指定的页面。
     * 只适用于UIAbility使用[Navigation]{@link Navigation}管理页面的场景，可以设置为Navigation下的子页面ID。
     * 默认为-1，恢复Navigation栈顶页面。推荐使用方法[getUniqueId()]{@link BaseCustomComponent#getUniqueId}获取页面ID。
     * 使用[Navigation]{@link Navigation}模块内页面路由时，
     * 推荐使用[系统路由表](docroot://ui/arkts-navigation-cross-package.md#系统路由表)，
     * 否则可能会出现[getUniqueId()]{@link BaseCustomComponent#getUniqueId}获取页面ID不准确的情况。
     *
     * @default -1
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    handleId?: int;

    /**
     * 模板类型，用以区分视频播放、视频通话、视频会议或视频直播，不传值则默认为视频播放模板。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    templateType?: PiPTemplateType;

    /**
     * 原始内容宽度，单位为px。用于确定画中画窗口比例。当
     * [使用typeNode的方式]{@link PiPWindow.create(config: PiPConfiguration, contentNode: typeNode.XComponent)}创建
     * PiPController时，不传值则默认为1920。当[不使用typeNode的方式]{@link PiPWindow.create(config: PiPConfiguration)}创建PiPController时，不传
     * 值则默认为[XComponent]{@link XComponent}组件的宽度。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    contentWidth?: int;

    /**
     * 原始内容高度，单位为px。用于确定画中画窗口比例。当
     * [使用typeNode的方式]{@link PiPWindow.create(config: PiPConfiguration, contentNode: typeNode.XComponent)}创建
     * PiPController时，不传值则默认为1080。当[不使用typeNode的方式]{@link PiPWindow.create(config: PiPConfiguration)}创建PiPController时，不传
     * 值则默认为[XComponent]{@link XComponent}组件的高度。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    contentHeight?: int;

    /**
     * 画中画控制面板的可选控件组列表，应用可以对此进行配置以决定是否显示。应用未配置时，面板显示基础控件（如视频播放控件组的播放/暂停控件）；应用选择配置时，则最多可以选择三个控件，超出三个create接口抛出401错误码。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    controlGroups?: Array<PiPControlGroup>;

    /**
     * 自定义UI控制器，用于实现在画中画界面的自定义UI功能。此参数不填时，默认不使用自定义UI功能
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    customUIController?: NodeController;

    /**
     * 页面级别的UI状态存储单元。多实例下可用来跟踪主窗实例的UI状态存储对象，不传值则无法通过画中画窗口获取主窗的UI状态存储对象。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17 dynamic
     * @since 24 static
     */
    localStorage?: LocalStorage;

    /**
     * 当前应用第一次拉起画中画的窗口大小。
     *
     * 0：代表不设置大小。按照上个应用的画中画关闭前的大小启动；
     *
     * 1：代表小窗；
     *
     * 2：代表大窗；
     *
     * 不传值则为默认值0。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 24 static
     */
    defaultWindowSizeType?: int;

    /**
     * 是否开启画中画四角吸附功能。当开启画中画四角吸附功能后，屏幕将被划分为四个热区：以屏幕的上下中线和左右中线为界，形成左上、右上、左下、右下四个区域。用户拖动画中画窗口并松手后，系统将根据窗口中心点所处的热区，自动将窗口吸附到
     * 对应角落。
     *
     * true：表示开启画中画四角吸附功能。
     *
     * false：表示关闭画中画四角吸附功能。
     *
     * 不传值则为默认值true。
     *
     * 该接口在Phone、Tablet设备上可正常调用，在其他设备上不生效。
     *
     * @default true
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    cornerAdsorptionEnabled?: boolean;
  }

  /**
   * 画中画窗口大小。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 24 static
   */
  interface PiPWindowSize {
    /**
     * 窗口宽度，单位为px，该参数应为正整数，不大于屏幕宽度。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 24 static
     */
    width: int;

    /**
     * 窗口高度，单位为px，该参数应为正整数，不大于屏幕高度。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 24 static
     */
    height: int;

    /**
     * 窗口缩放比，显示大小相对于width和height的缩放比，该参数为浮点数，取值范围大于0.0，小于等于1.0。等于1表示与width和height一样大。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 24 static
     */
    scale: double;
  }

/**
   * 画中画窗口信息。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 24 static
   */
  interface PiPWindowInfo {
    /**
     * 画中画窗口ID。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 24 static
     */
    windowId: int;

    /**
     * 画中画窗口大小。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 24 static
     */
    size: PiPWindowSize;
  }

  /**
   * 画中画模板类型枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 24 static
   */
  enum PiPTemplateType {
    /**
     * 表示将要切换为画中画播放的媒体类型是视频，系统依此加载视频播放模板，该模板默认存在播放/暂停控件。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    VIDEO_PLAY = 0,

    /**
     * 表示将要切换为画中画播放的媒体类型是视频通话，系统依此加载视频通话模板。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    VIDEO_CALL = 1,

    /**
     * 表示将要切换为画中画播放的媒体类型是视频会议，系统依此加载视频会议模板。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    VIDEO_MEETING = 2,

    /**
     * 表示将要切换为画中画播放的媒体类型是直播，系统依此加载直播模板。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    VIDEO_LIVE = 3,
  }

  /**
   * 画中画生命周期状态枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 24 static
   */
  enum PiPState {
    /**
     * 表示画中画将要启动。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    ABOUT_TO_START = 1,

    /**
     * 表示画中画已经启动。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    STARTED = 2,

    /**
     * 表示画中画将要停止。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    ABOUT_TO_STOP = 3,

    /**
     * 表示画中画已经停止。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    STOPPED = 4,

    /**
     * 表示画中画将从小窗播放恢复到原始播放界面。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    ABOUT_TO_RESTORE = 5,

    /**
     * 表示画中画生命周期执行过程出现了异常。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    ERROR = 6
  }

  /**
   * 画中画控制面板的可选控件组列表，应用可以配置是否显示可选控件。使用时必须和[PiPTemplateType]{@link PiPWindow.PiPTemplateType}对应，否则
   * [create]{@link PiPWindow.create(config: PiPConfiguration)}接口抛出401错误码。
   *
   * @unionmember { VideoPlayControlGroup } 视频播放控件组。
   * @unionmember { VideoCallControlGroup } 视频通话控件组。
   * @unionmember { VideoMeetingControlGroup } 视频会议控件组。
   * @unionmember { VideoLiveControlGroup } 视频直播控件组。
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  type PiPControlGroup = VideoPlayControlGroup | VideoCallControlGroup | VideoMeetingControlGroup
    | VideoLiveControlGroup;

  /**
   * 视频播放控件组枚举。仅当[PiPTemplateType]{@link PiPWindow.PiPTemplateType}为VIDEO_PLAY时使用。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  enum VideoPlayControlGroup {
    /**
     * 视频上一个/下一个控件组。
     *
     * 与视频快进/后退控件组为互斥控件组。如添加视频快进/后退控件组，则不可添加该控件组。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    VIDEO_PREVIOUS_NEXT = 101,

    /**
     * 视频快进/后退控件组。
     *
     * 与视频上一个/下一个控件组为互斥控件组。如添加视频上一个/下一个控件组，则不可添加该控件组。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    FAST_FORWARD_BACKWARD = 102
  }

  /**
   * 视频通话控件组枚举。仅当[PiPTemplateType]{@link PiPWindow.PiPTemplateType} 为VIDEO_CALL时使用。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  enum VideoCallControlGroup {
    /**
     * 打开/关闭麦克风控件组。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    MICROPHONE_SWITCH = 201,

    /**
     * 挂断控件组。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    HANG_UP_BUTTON = 202,

    /**
     * 打开/关闭摄像头控件组。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    CAMERA_SWITCH = 203,

    /**
     * 静音控件组。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    MUTE_SWITCH = 204
  }

  /**
   * 视频会议控件组枚举。仅当[PiPTemplateType]{@link PiPWindow.PiPTemplateType} 为VIDEO_MEETING时使用。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  enum VideoMeetingControlGroup {
    /**
     * 挂断控件组。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    HANG_UP_BUTTON = 301,

    /**
     * 打开/关闭摄像头控件组。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    CAMERA_SWITCH = 302,

    /**
     * 静音控件组。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    MUTE_SWITCH = 303,

    /**
     * 打开/关闭麦克风控件组。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    MICROPHONE_SWITCH = 304
  }

  /**
   * 视频直播控件组枚举。仅当[PiPTemplateType]{@link PiPWindow.PiPTemplateType} 为VIDEO_LIVE时使用。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  enum VideoLiveControlGroup {
    /**
     * 播放/暂停直播控件组。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    VIDEO_PLAY_PAUSE = 401,

    /**
     * 静音控件组。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    MUTE_SWITCH = 402
  }

  /**
   * 控制面板控件状态枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  enum PiPControlStatus {
    /**
     * 播放。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    PLAY = 1,

    /**
     * 暂停。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    PAUSE = 0,

    /**
     * 打开。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    OPEN = 1,

    /**
     * 关闭。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    CLOSE = 0
  }

  /**
   * 控制面板控件类型枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  enum PiPControlType {
    /**
     * 播放/暂停直播控件组。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    VIDEO_PLAY_PAUSE = 0,

    /**
     * 视频上一个控件。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    VIDEO_PREVIOUS = 1,

    /**
     * 视频下一个控件。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    VIDEO_NEXT = 2,

    /**
     * 视频快进控件
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    FAST_FORWARD = 3,

    /**
     * 视频快退控件。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    FAST_BACKWARD = 4,

    /**
     * 挂断控件。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    HANG_UP_BUTTON = 5,

    /**
     * 打开/关闭麦克风控件。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    MICROPHONE_SWITCH = 6,

    /**
     * 打开/关闭摄像头控件。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    CAMERA_SWITCH = 7,

    /**
     * 打开/关闭静音控件。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    MUTE_SWITCH = 8
  }

  /**
   * 画中画控制面板控件动作事件类型，支持以下四种。
   *
   * @unionmember { PiPVideoActionEvent } 视频播放控制面板控件事件类型。
   * @unionmember { PiPCallActionEvent } 视频通话控制面板控件事件类型。
   * @unionmember { PiPMeetingActionEvent } 视频会议控制面板控件事件类型。
   * @unionmember { PiPLiveActionEvent } 直播控制面板控件事件类型。
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 24 static
   */
  type PiPActionEventType = PiPVideoActionEvent | PiPCallActionEvent | PiPMeetingActionEvent | PiPLiveActionEvent;

  /**
   * 视频播放控制事件类型。
   *
   * @unionmember { 'playbackStateChanged' } 播放状态发生了变化。
   * @unionmember { 'nextVideo' } 播放下一个视频。
   * @unionmember { 'previousVideo' } 播放上一个视频。
   * @unionmember { 'fastForward' } 视频进度快进。从API version 12 开始支持。 [since 12]
   * @unionmember { 'fastBackward' } 视频进度后退。从API version 12 开始支持。 [since 12]
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 24 static
   */
  type PiPVideoActionEvent = 'playbackStateChanged' | 'nextVideo' | 'previousVideo' | 'fastForward' | 'fastBackward';

  /**
   * 视频通话控制事件类型。
   *
   * @unionmember { 'hangUp' } 挂断视频通话。
   * @unionmember { 'micStateChanged' } 打开或关闭麦克风。
   * @unionmember { 'videoStateChanged' } 打开或关闭摄像头。
   * @unionmember { 'voiceStateChanged' } 静音或解除静音。 [since 12]
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 24 static
   */
  type PiPCallActionEvent = 'hangUp' | 'micStateChanged' | 'videoStateChanged' | 'voiceStateChanged';

  /**
   * 视频会议控制事件类型。
   *
   * @unionmember { 'hangUp' } 挂断视频会议。
   * @unionmember { 'voiceStateChanged' } 静音或解除静音。
   * @unionmember { 'videoStateChanged' } 打开或关闭摄像头。
   * @unionmember { 'micStateChanged' } 打开或关闭麦克风。 [since 12]
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 24 static
   */
  type PiPMeetingActionEvent = 'hangUp' | 'voiceStateChanged' | 'videoStateChanged' | 'micStateChanged';

  /**
   * 直播控制事件类型。
   *
   * @unionmember { 'playbackStateChanged' } 播放或暂停直播。
   * @unionmember { 'voiceStateChanged' } 静音或解除静音。 [since 12]
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 24 static
   */
  type PiPLiveActionEvent = 'playbackStateChanged' | 'voiceStateChanged';

  /**
   * 描述画中画控制面板控件动作事件回调。
   *
   * @param { PiPActionEventType } event - 回调画中画控制面板控件动作事件类型。<br/>应用依据控件动作事件做相应处理，如触发'playbackStateChanged'事件时，需要开始或停止视频
   *     。
   * @param { int } [status] - 表示可切换状态的控件当前的状态，如具备打开和关闭两种状态的麦克风控件组、摄像头控件组和静音控件组，打开为1，关闭为0。其余控件该参数返回默认值-1。
   *     取值限定为整数
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  type ControlPanelActionEventCallback = (event: PiPActionEventType, status?: int) => void;

  /**
   * Describe picture-in-picture stage change event callback.
   *
   * @param { PiPState } state - 画中画窗口状态。
   * @param { string } reason - the reason of state change
   * @syscap SystemCapability.Window.SessionManager
   * @since 24 static
   */
  type StateChangeCallback = (state: PiPState, reason: string) => void;

  /**
   * 画中画控制面板控件动作回调的参数。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 24 static
   */
  interface ControlEventParam {
    /**
     * 回调画中画控制面板控件动作事件类型。应用依据控件类型做相应处理，如视频模板中暂停/播放控件被点击时，需要开始或停止视频。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    controlType: PiPControlType;

    /**
     * 表示可切换状态的控件当前的状态，如具备打开和关闭两种状态的麦克风控件组、摄像头控件组和静音控件组，打开为PiPControlStatus.PLAY，关闭为PiPControlStatus.PAUSE。如不具备开/关和播放/暂停
     * 状态的挂断控件默认返回值为-1。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    status?: PiPControlStatus;
  }

  /**
   * 画中画控制器实例。用于启动、停止画中画以及更新回调注册等。
   *
   * 下列API示例中都需先使用[PiPWindow.create()]{@link PiPWindow.create(config: PiPConfiguration)}方法获取到PiPController实例，再通过此实例调用对应方
   * 法。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 24 static
   */
  interface PiPController {

    /**
     * 启动画中画，使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 1300012 - The PiP window state is abnormal.
     * @throws { BusinessError } 1300013 - Failed to create the PiP window.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @throws { BusinessError } 1300015 - Repeated PiP operation.
     * @throws { BusinessError } 1300034 - This operation conflicts with other floating windows. Possible cause:
     *     App has already started float view. [since 26.0.0]
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    startPiP(): Promise<void>;

    /**
     * 停止画中画，使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 1300011 - Failed to destroy the PiP window.
     * @throws { BusinessError } 1300012 - The PiP window state is abnormal.
     * @throws { BusinessError } 1300015 - Repeated PiP operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    stopPiP(): Promise<void>;

    /**
     * 设置是否在返回桌面时自动启动画中画，默认不自动拉起。
     *
     * 在使用XComponent方案实现画中画功能并结合Navigation进行路由管理时，首次调用setAutoStartEnabled(true)方法，系统会缓存当前应用传入的NavigationId的栈顶信息。
     *
     * @param { boolean } enable - 如返回桌面时需自动启动画中画，则该参数配置为true，否则为false。若设置-系统-智慧多窗-自动启动画中画开关为关闭状态，就算该参数配置为true，应用返回桌面时也不
     *     会自动启动画中画窗口。
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    setAutoStartEnabled(enable: boolean): void;

    /**
     * 当媒体源切换时，向画中画控制器更新媒体源尺寸信息。
     *
     * @param { int } width - 表示媒体内容宽度，必须为大于0的整数，单位为px。用于更新画中画窗口比例。
     * @param { int } height - 表示媒体内容高度，必须为大于0的整数，单位为px。用于更新画中画窗口比例。
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 24 static
     */
    updateContentSize(width: int, height: int): void;

    /**
     * 更新画中画控制面板控件功能状态。
     *
     * @param { PiPControlType } controlType - 表示画中画控制面板控件类型。目前仅支持VIDEO_PLAY_PAUSE、MICROPHONE_SWITCH、CAMERA_SWITCH和
     *     MUTE_SWITCH这几种控件类型，传入其他控件类型不生效也不报错。
     * @param { PiPControlStatus } status - 表示画中画控制面板控件状态。
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    updatePiPControlStatus(controlType: PiPControlType, status: PiPControlStatus): void;

    /**
     * 更新画中画节点内容，使用Promise异步回调。
     *
     * @param { typeNode.XComponent } contentNode - 用于渲染画中画窗口中的内容。该参数不能为空。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 24 static
     */
    updateContentNode(contentNode: typeNode.XComponent): Promise<void>;

    /**
     * 更新控制面板控件使能状态。
     *
     * @param { PiPControlType } controlType - 表示画中画控制面板控件类型。
     * @param { boolean } enabled - 表示画中画控制面板控件使能状态。true表示控件为可使用状态，false则为禁用状态。
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    setPiPControlEnabled(controlType: PiPControlType, enabled: boolean): void;

    /**
     * 获取画中画窗口信息，使用Promise异步回调。
     *
     * @returns { Promise<PiPWindowInfo> } Promise对象，返回当前画中画窗口信息。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 24 static
     */
    getPiPWindowInfo(): Promise<PiPWindowInfo>;

    /**
     * 获取设置中自动启动画中画开关的状态，使用Promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象，返回当前自动启动画中画开关状态，true表示开启，false表示关闭。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    getPiPSettingSwitch(): Promise<boolean>;

    /**
     * 获取画中画的隐藏状态。使用Promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象，返回当前画中画的隐藏状态。true表示前台可见，false表示前台不可见（收入侧边栏）。画中画生命周期不为
     *     [STARTED]{@link PiPWindow.PiPState}时调用本接口总是返回false。
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    isPiPActive(): Promise<boolean>;

    /**
     * 开启画中画生命周期状态变化的监听，建议在不需要使用时关闭监听，否则可能存在内存泄漏。
     *
     * @param { 'stateChange' } type - 事件类型，固定为'stateChange'，即画中画生命周期状态变化事件。
     * @param { function } callback - 回调生命周期状态变化事件以及原因。<br/>state：[PiPState]{@link PiPWindow.PiPState}，表示当前画中画生命周期状态。
     *     <br/>reason：string，表示当前生命周期的切换原因。
     *     <br/>在<!--RP1-->OpenHarmony 6.1<!--RP1End-->之前，reason始终为“0”，无需关注。
     *     <br/>从<!--RP1-->OpenHarmony 6.1<!--RP1End-->开始，reason为当前生命周期的切换原因：
     *     <br/>"requestStart"：应用调用startPip接口；
     *     <br/>"autoStart"：应用退后台触发画中画自动启动；
     *     <br/>"requestDelete"：应用调用stopPip接口；
     *     <br/>"panelActionDelete"：用户点击画中画窗口的关闭按钮；
     *     <br/>"dragDelete"：用户将画中画窗口拖入垃圾桶；
     *     <br/>"panelActionRestore"：用户点击画中画窗口的还原按钮（无还原按钮时可点击画中画窗口）触发还原；
     *     <br/>"other"：其他原因，如新的画中画窗口拉起导致当前窗口被关闭、应用主窗口被关闭等场景。
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'stateChange', callback: (state: PiPState, reason: string) => void): void;

    /**
     * Register picture-in-picture control state change listener.
     *
     * @param { StateChangeCallback } callback - Used to handle {'stateChange'} command
     * @syscap SystemCapability.Window.SessionManager
     * @since 24 static
     */
    onStateChange(callback: StateChangeCallback): void;

    /**
     * 关闭画中画生命周期状态变化的监听。
     *
     * @param { 'stateChange' } type - 事件类型，固定为'stateChange'，即画中画生命周期状态变化事件。
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'stateChange'): void;

    /**
     * Unregister picture-in-picture lifecycle state change listener.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 24 static
     */
    offStateChange(): void;

    /**
     * 开启画中画控制面板控件动作事件的监听，建议在不需要使用时关闭监听，否则可能存在内存泄漏。推荐使用
     * [on('controlEvent')]{@link PiPWindow.PiPController.on(type: 'controlEvent', callback: Callback<ControlEventParam>)}
     * 来开启画中画控制面板控件动作事件的监听。
     *
     * @param { 'controlPanelActionEvent' } type - 事件类型，固定为'controlPanelActionEvent'，即画中画控制面板控件动作事件。
     * @param { function } callback - 描述画中画控制面板控件动作事件回调。[since 11 - 11]
     * @param { ControlPanelActionEventCallback } callback - 描述画中画控制面板控件动作事件回调。 [since 12]
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'controlPanelActionEvent', callback: ControlPanelActionEventCallback): void;

    /**
     * Register picture-in-picture control panel action event listener.
     *
     * @param { ControlPanelActionEventCallback } callback - Used to handle {'controlPanelActionEvent'} command.
     * @syscap SystemCapability.Window.SessionManager
     * @since 24 static
     */
    onControlPanelActionEvent(callback: ControlPanelActionEventCallback): void;

    /**
     * 关闭画中画控制面板控件动作事件的监听。推荐使用
     * [off('controlEvent')]{@link PiPWindow.PiPController.off(type: 'controlEvent', callback?: Callback<ControlEventParam>)}
     * 来关闭画中画控制面板控件动作事件的监听。
     *
     * @param { 'controlPanelActionEvent' } type - 事件类型，固定为'controlPanelActionEvent'，即画中画控制面板控件动作事件。
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'controlPanelActionEvent'): void;

    /**
     * Unregister picture-in-picture lifecycle event listener
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 24 static
     */
    offControlPanelActionEvent(): void;

    /**
     * 开启画中画控制面板控件动作事件的监听，建议在不需要使用时关闭监听，否则可能存在内存泄漏。
     *
     * @param { 'controlEvent' } type - 事件类型，固定为'controlEvent'，即画中画控制面板控件动作事件。
     * @param { Callback<ControlEventParam> } callback - 描述画中画控制面板控件动作事件回调。
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'controlEvent', callback: Callback<ControlEventParam>): void;

    /**
     * Register picture-in-picture control event listener.
     *
     * @param { Callback<ControlEventParam> } callback - Used to handle {'controlEvent'} command.
     * @syscap SystemCapability.Window.SessionManager
     * @since 24 static
     */
    onControlEvent(callback: Callback<ControlEventParam>): void;

    /**
     * 关闭画中画控制面板控件动作事件的监听。
     *
     * @param { 'controlEvent' } type - 事件类型，固定为'controlEvent'，即画中画控制面板控件动作事件。
     * @param { Callback<ControlEventParam> } callback - 描述画中画控制面板控件动作事件回调。如果未传入参数，解除type为'controlEvent'的所有回调。
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'controlEvent', callback?: Callback<ControlEventParam>): void;

    /**
     * Unregister picture-in-picture control event listener
     *
     * @param { Callback<ControlEventParam> } [callback] - Used to handle {'controlEvent'} command.
     *     If not provided, all callbacks for the given event type will be removed.
     * @syscap SystemCapability.Window.SessionManager
     * @since 24 static
     */
    offControlEvent(callback?: Callback<ControlEventParam>): void;

    /**
     * 开启画中画窗口尺寸变化事件的监听，建议在不需要使用时关闭监听，否则可能存在内存泄漏。
     *
     * @param { 'pipWindowSizeChange' } type - 事件类型，固定为'pipWindowSizeChange'，即画中画窗口尺寸变化事件。
     * @param { Callback<PiPWindowSize> } callback - 回调函数。返回当前画中画窗口的尺寸。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    on(type: 'pipWindowSizeChange', callback: Callback<PiPWindowSize>): void;

    /**
     * Register picture-in-picture window size change event listener
     *
     * @param { Callback<PiPWindowSize> } callback - Callback used to return the picture-in-picture window size.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @since 24 static
     */
    onPipWindowSizeChange(callback: Callback<PiPWindowSize>): void;

    /**
     * 关闭画中画窗口尺寸变化事件的监听。
     *
     * @param { 'pipWindowSizeChange' } type - 事件类型，固定为'pipWindowSizeChange'，即画中画窗口尺寸变化事件。
     * @param { Callback<PiPWindowSize> } callback - 回调函数。返回当前画中画窗口的尺寸。如果传入参数，则关闭该监听。如果未传入参数，解除type为'pipWindowSizeChange
     *     '的所有回调。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    off(type: 'pipWindowSizeChange', callback?: Callback<PiPWindowSize>): void;

    /**
     * Unregister picture-in-picture window size change event listener
     *
     * @param { Callback<PiPWindowSize> } [callback] - Callback used to return the picture-in-picture window size.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @since 24 static
     */
    offPipWindowSizeChange(callback?: Callback<PiPWindowSize>): void;

    /**
     * 开启画中画窗口隐藏状态变化事件的监听，建议在不需要使用时关闭监听，否则可能存在内存泄漏。
     *
     * @param { 'activeStatusChange' } type - 事件类型，固定为'activeStatusChange'，即画中画隐藏状态变化事件。
     * @param { Callback<boolean> } callback - 返回当前画中画的隐藏状态。true表示前台可见，false表示前台不可见（收入侧边栏）。
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     */
    on(type: 'activeStatusChange', callback: Callback<boolean>): void;

    /**
     * Register picture-in-picture active status change listener.
     *
     * @param { Callback<boolean> } callback - Used to handle {'activeStatusChange'} command.
     *     True indicates that the pip is onscreen, and vice verse.
     *     <br>画中画显示状态变化回调函数
     * @throws { BusinessError } 801 - Capability not supported.
     *     function onActiveStatusChange(callback) can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @since 24 static
     */
    onActiveStatusChange(callback: Callback<boolean>): void;

    /**
     * 关闭画中画窗口隐藏状态变化事件的监听。
     *
     * @param { 'activeStatusChange' } type - 事件类型，固定为'activeStatusChange'，即画中画隐藏状态变化事件。
     * @param { Callback<boolean> } [callback] - 返回当前画中画的隐藏状态。true表示前台可见，false表示前台不可见（收入侧边栏）。如果未传入参数，解除type为'
     *     activeStatusChange'的所有回调。
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     */
    off(type: 'activeStatusChange', callback?: Callback<boolean>): void;

    /**
     * Unregister picture-in-picture active status change listener
     *
     * @param { Callback<boolean> } [callback] - Used to handle {'activeStatusChange'} command. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     function offActiveStatusChange(callback) can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @since 24 static
     */
    offActiveStatusChange(callback?: Callback<boolean>): void;

    /**
     * Returns a Boolean value that indicates whether picture-in-picture is supported
     *
     * @returns { boolean } - True if picture-in-picture is supported, otherwise false
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use
     * @since 18 dynamic
     * @since 24 static
     * @test
     */
    isPiPSupported(): boolean;
  }
}

export default PiPWindow;