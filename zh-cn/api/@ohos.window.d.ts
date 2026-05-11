/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * The Window module provides basic window management capabilities, such as creating and destroying the current window, 
 * setting properties for the current window, and managing and scheduling windows.
 * 
 * This module provides the following common window-related functions:
 * 
 * - [Window]{@link @ohos.window}: window instance, which is the basic unit managed by the window manager.
 * - [WindowStage]{@link window.WindowStage}: window manager that manages windows.
 * 
 * > **NOTE**
 * >
 * > - This topic describes only system APIs provided by the module. For details about its public APIs, see 
 * > [@ohos.window (Window)]{@link @ohos.window}.
 * >
 * > - For the system capability SystemCapability.Window.SessionManager, use 
 * > [canIUse()]{@link canIUse} to check whether the device supports this system 
 * > capability and the corresponding APIs.
 *
 * @file
 * @kit ArkUI
 */

import { AsyncCallback, BusinessError } from './@ohos.base';
import BaseContext from './application/BaseContext';
import image from './@ohos.multimedia.image';
import rpc from './@ohos.rpc';
import dialogRequest from './@ohos.app.ability.dialogRequest';
/*** if arkts dynamic */
import { UIContext } from './@ohos.arkui.UIContext';
import { ColorMetrics } from './@ohos.arkui.node';
/*** endif */
import ConfigurationConstant from './@ohos.app.ability.ConfigurationConstant';
import bundleManager from './@ohos.bundle.bundleManager';
/*** if arkts static */
import { LocalStorage } from '@ohos.arkui.stateManagement';
import { UIContext } from '@ohos.arkui.UIContext';
import { ColorMetrics } from '@ohos.arkui.node';
import { ImageFit } from '@ohos.arkui.component';
/*** endif */

/*** if arkts dynamic */
/**
 * Defines the window callback.
 *
 * @syscap SystemCapability.Window.SessionManager
 * @atomicservice
 * @since 15 dynamic
 */
declare interface Callback<T, V = void> {
  /**
   * Defines the callback info.
   *
   * @param { T } data - the data will be used in the callback.
   * @returns { V } - Returns result of the callback.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   */
  (data: T): V;
}

/**
 * Defines the window callback.
 *
 * @syscap SystemCapability.Window.SessionManager
 * @atomicservice
 * @since 23 static
 */
type Callback<T, V = void> = (data: T) => V;

/**
 * Defines the window animation curve param.
 *
 * @syscap SystemCapability.Window.SessionManager
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 */
declare type WindowAnimationCurveParam = Array<double>;

/**
 * Callback function for transition controller
 *
 * @param { window.TransitionContext } context - The transition context
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi Hide this for inner system use.
 * @since 23 static
 */
declare type TransitionControllerCallback = (context: window.TransitionContext) => void;

/**
 * �����¼��Ļص���������
 *
 * @param { int } windowId - �����¼��Ĵ���id
 * @param { window.WindowEventType } event - ���ڻص����¼�����
 * @syscap SystemCapability.Window.SessionManager
 * @stagemodelonly
 * @since 24 dynamic&static
 */
declare type WindowEventListener = (windowId: int, event: window.WindowEventType) => void;

/**
 * Window manager.
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace window {
  /**
   * ��������ö�١�
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum WindowType {
    /**
     * ��ʾӦ���Ӵ��ڡ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    TYPE_APP = 0,
    /**
     * ��ʾϵͳ�澯���ڡ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    TYPE_SYSTEM_ALERT = 1,
    /**
     *
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 13
     */
    TYPE_INPUT_METHOD = 2,
    /**
     * ��ʾ״̬�����ڡ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_STATUS_BAR = 3,
    /**
     * ��ʾ֪ͨ����
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_PANEL = 4,
    /**
     * ��ʾ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_KEYGUARD = 5,
    /**
     * ��ʾ��������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_VOLUME_OVERLAY = 6,
    /**
     * ��ʾ���������ڡ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_NAVIGATION_BAR = 7,
    /**
     * ��ʾȫ����������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_FLOAT = 8,
    /**
     * ��ʾ��ֽ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_WALLPAPER = 9,
    /**
     * ��ʾ���档
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_DESKTOP = 10,
    /**
     * ��ʾ���������ġ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_LAUNCHER_RECENT = 11,
    /**
     * ��ʾ����Dock����
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_LAUNCHER_DOCK = 12,
    /**
     * ��ʾ�ǻ�������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_VOICE_INTERACTION = 13,
    /**
     * ��ʾ��ꡣ
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_POINTER = 14,
    /**
     * ��ʾ���������������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_FLOAT_CAMERA = 15,
    /**
     * ��ʾģ̬���ڡ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    TYPE_DIALOG = 16,
    /**
     * ��ʾ�������ڡ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_SCREENSHOT = 17,
    /**
     * ��ʾ������ʾ���ڡ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_SYSTEM_TOAST = 18,
    /**
     * ��ʾ��������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_DIVIDER = 19,
    /**
     * ��ʾȫ���������ڡ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_GLOBAL_SEARCH = 20,
    /**
     * ��ʾ��д�ʴ��ڡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 12 dynamic
     * @since 23 static
     */
    TYPE_HANDWRITE = 21,
    /**
     * ��ʾǮ��ˢ�����ڡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    TYPE_WALLET_SWIPE_CARD = 22,
    /**
     * ��ʾ�������صĶ��㴰�ڣ�����������Ļ�����͵���¼���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    TYPE_SCREEN_CONTROL = 23,
    /**
     * ��ʾ�����������������ڡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 17 dynamic
     * @since 23 static
     */
    TYPE_FLOAT_NAVIGATION = 24,
    /**
     * ��ʾ�����ô��ڲ㼶��ϵͳ���ڡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    TYPE_DYNAMIC = 25,
    /**
     * ��ʾ����Эͬ���ڡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    TYPE_MUTISCREEN_COLLABORATION = 26,
    /**
     * ��ʾӦ�������ڡ�
     * 
     * �˴������Ͳ�֧���ڴ�������ʱʹ�á�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 18 dynamic
     * @since 23 static
     */
    TYPE_MAIN = 32,
  }

  /**
   * �������ݵı������������ö�١�
   * 
   * ����������[����ʽ����](docroot://windowmanager/window-terminology.md#����ʽ����)����ʱ����Ҫ����AvoidAreaType��Ӧ��
   * [AvoidArea]{@link @ohos.window:window.AvoidArea}���������ݱ��á�
   * 
   * <!--RP13-->
   * 
   * <!--RP13End-->
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  enum AvoidAreaType {
    /**
     * ��ʾϵͳĬ������<!--RP11-->����״̬������������������<!--RP11End--> 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_SYSTEM = 0,

    /**
     * ��ʾ�ڿ�����
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_CUTOUT = 1,

    /**
     * ��ʾ��߷����������򡣵�ǰ�����豸���޴����ͱ�������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_SYSTEM_GESTURE = 2,

    /**
     * ��ʾ�̶�̬����������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_KEYBOARD = 3,

    /**
     * ��ʾ�ײ��������򡣵�����������ʾʱ���ײ�������������ʼ�մ��ڡ�<!--Del-->OpenHarmony���豸��֧�ִ�������<!--DelEnd--> 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_NAVIGATION_INDICATOR = 4,

    /**
     * ��ʾ������������<!--RP12-->OpenHarmony���豸��֧�ִ�������<!--RP12End--> 
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TYPE_FLOAT_NAVIGATION = 5
  }
  /**
   * ����ģʽö�١�
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  enum WindowMode {
    /**
     * ��ʾAPPδ���崰��ģʽ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    UNDEFINED = 1,
    /**
     * ��ʾAPPȫ��ģʽ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    FULLSCREEN = 2,
    /**
     * ��ʾAPP�����ര����Ҫģʽ�����·���ʱ���Ϸ���Ϊ��Ҫģʽ�����ҷ���ʱ�������Ϊ��Ҫģʽ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    PRIMARY = 3,
    /**
     * ��ʾAPP�����ര�ڴ�Ҫģʽ�����·���ʱ���·���Ϊ��Ҫģʽ�����ҷ���ʱ���ҷ���Ϊ��Ҫģʽ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    SECONDARY = 4,
    /**
     * ��ʾAPP����������ʽ����ģʽ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    FLOATING = 5
  }

  /**
   * �����������ڷ�������
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum SplitRatioPreference {
    /**
     * �������ڱ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EQUAL = 0,
    /**
     * ������������Ϊ�ϴ�ķ���������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PRIMARY_DOMINANT = 1,
    /**
     * ���δ�������Ϊ�ϴ�ķ���������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SECONDARY_DOMINANT = 2
  }

  /**
   * ���ڲ���ģʽö�١�
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   * @deprecated since 26.0.0
   */
  enum WindowLayoutMode {
    /**
     * ��ʾʹ�ò������ģʽ����������£�������ɴ��ڲ�����ã���Z��������֡�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 26.0.0
     */
    WINDOW_LAYOUT_MODE_CASCADE = 0,
    /**
     * ��ʾʹ��ƽ�̲���ģʽ��ƽ�̲����£��´򿪵�Ӧ�ô��ڳ��������Ҳࡣ
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 26.0.0
     */
    WINDOW_LAYOUT_MODE_TILE = 1
  }

  /**
   * ����ģʽö�١�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  enum WindowStatusType {
    /**
     * ��ʾAPPδ���崰��ģʽ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    UNDEFINED = 0,
    /**
     * ��ʾAPPȫ��ģʽ��
     * 
     * [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£���������������Ļ��Ĭ����dock������������״̬����ʾ��
     * 
     * ��ͨ��[maximize()]{@link @ohos.window:window.Window.maximize(presentation?: MaximizePresentation)}��
     * [setTitleAndDockHoverShown()]{@link @ohos.window:window.Window.setTitleAndDockHoverShown}���ã���hover������ʱ�Ƿ���ʾ��������
     * dock����
     * 
     * ��maximize()��setTitleAndDockHoverShown()�ӿڶ�����ʱ�������������õ�Ч��Ϊ׼��
     * 
     * ��[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£���������������Ļ���ޱ�������dock����ʾ����ͨ��
     * [setSpecificSystemBarEnabled()]{@link @ohos.window:window.Window.setSpecificSystemBarEnabled}�����Ƿ���ʾ״̬����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    FULL_SCREEN = 1,
    /**
     * ��ʾAPP�������ģʽ��[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£���������������Ļ������Ҫhover�Ϳ�����ʾdock����״̬���ͱ���������
     * [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£������ڸ�״̬��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    MAXIMIZE = 2,
    /**
     * ��ʾAPP������С��ģʽ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    MINIMIZE = 3,
    /**
     * ��ʾAPP����������ʽ����ģʽ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    FLOATING = 4,
    /**
     * ��ʾAPP����ģʽ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    SPLIT_SCREEN = 5
  }

  /**
   * ���ص�λö�١�
   * 
   * �������ص�λ���������ص�λ�����ʹ��[px2vp](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#px2vp12)��
   * [vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  enum PixelUnit {
    /**
     * �������ص�λ��px����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    PX = 0,
    /**
     * �������ص�λ��vp����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    VP = 1
  }

  /**
   * ���ڶ����������͡�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowAnimationCurve {
    /**
     * ��ʾ������ͷ��β���ٶȶ�����ͬ�ġ�
     * 
     * ʹ�ø���������ʱ[WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig}��duration���
     * 
     * ʹ�ø���������ʱ[WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig}��paramѡ��Ҳ���Ч��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    LINEAR = 0,
    /**
     * ��ʾ��ֵ���������ߣ�һ����0��1�Ķ������ߣ�ʵ�ʶ���ֵ�������߽��в�ֵ���㡣����ʱ�������߲�������������
     * [WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig}�е�duration�������ơ�
     * 
     * ʹ�ø���������ʱ[WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig}��durationѡ��Ҳ���Ч��
     * 
     * ʹ�ø���������ʱ[WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig}��param���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    INTERPOLATION_SPRING = 1,
    /**
     * ��ʾ���������ߡ�
     * 
     * ʹ�ø���������ʱ[WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig}�е�param��durationΪ�����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    CUBIC_BEZIER = 2
  }

  /**
   * ����ת����������ö�١�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowTransitionType {
    /**
     * ��ʾ��������ʱ��ת��������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DESTROY = 0
  }

  /**
   * ���ڶ�������ö�١�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  enum AnimationType {
    /**
     * ��ʾ���ڶ�������Ϊ���뵭�������붯���ڴ�����ʾ��������Ч�����������ڴ������ع�������Ч��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    FADE_IN_OUT = 0,
    /**
     * ��ʾ���ڶ�������Ϊ���롣���붯���ڴ�����ʾ��������Ч��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    FADE_IN = 1
  }

  /**
   * ״̬��<!--Del-->��������������<!--DelEnd-->���ԡ�
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 6 dynamic
   * @since 23 static
   */
  interface SystemBarProperties {
    /**
     * ״̬��������ɫ����Ϊ���ʱ��ʽΪʮ������RGB��ARGB��ɫ�������ִ�Сд������'#00FF00'��'#FF00FF00'��
     * ��Ϊ����ֵʱ��ʽ�̶�ΪARGB��ɫ����'#FF00FF00'��Ĭ��ֵΪϵͳ���õ���ɫ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 6 dynamic
     * @since 23 static
     */
    statusBarColor?: string;

    /**
     * ״̬��ͼ���Ƿ�Ϊ����״̬��true��ʾ������false��ʾ��������Ĭ��ֵ��false�� 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    isStatusBarLightIcon?: boolean;

    /**
     * ״̬��������ɫ�������ô����Ժ�`isStatusBarLightIcon`����������Ч��Ĭ��ֵ��`'#E5FFFFFF'`�� 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    statusBarContentColor?: string;

    /**
     * ����������������ɫ����Ϊ���ʱ��ʽΪʮ������RGB��ARGB��ɫ�������ִ�Сд������'#00FF00'��'#FF00FF00'��
     * ��Ϊ����ֵʱ��ʽ�̶�ΪARGB��ɫ����'#FF00FF00'��Ĭ��ֵΪϵͳ���õ���ɫ��
     * 
     * <!--RP13--><!--RP13End--> 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 6 dynamic
     * @since 23 static
     */
    navigationBarColor?: string;

    /**
     * ����������ͼ���Ƿ�Ϊ����״̬��true��ʾ������false��ʾ��������Ĭ��ֵ��false�� 
     * 
     * <!--RP13--><!--RP13End--> 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    isNavigationBarLightIcon?: boolean;

    /**
     * ����������������ɫ�������ô����Ժ�`isNavigationBarLightIcon`����������Ч��Ĭ��ֵ��`'#E5FFFFFF'`�� 
     * 
     * <!--RP13--><!--RP13End--> 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    navigationBarContentColor?: string;

    /**
     * �Ƿ�����״̬�����Ա仯ʱ�Ķ���Ч����true��ʾ���ã�false��ʾ�����á�Ĭ��ֵ��false�� 
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    enableStatusBarAnimation?: boolean;

    /**
     * �Ƿ������������������Ա仯ʱ�Ķ���Ч����true��ʾ���ã�false��ʾ�����á�Ĭ��ֵ��false�� 
     * 
     * <!--RP13--><!--RP13End--> 
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    enableNavigationBarAnimation?: boolean;
  }

  /**
   * ״̬�������ԡ��ڻ�ȡ״̬��������Ϣʱ���ء�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface StatusBarProperty {
    /**
     * ״̬��������ɫ���̶�ΪARGB��ʽ���磺`#E5FFFFFF`�� 
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    contentColor: string;
  }

  /**
   * ״̬�������ԡ�������ҳ�漶״̬������ʱʹ�á�
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface SystemBarStyle {
    /**
     * ״̬��������ɫ��Ĭ��ֵ��`'#E5FFFFFF'`��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    statusBarContentColor?: string;
  }

  /**
   * ������������״̬���ص���Ϣ��
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface SystemBarRegionTint {
    /**
     * ��ǰ���Ըı��ϵͳ�����ͣ���֧������Ϊ��������״̬����ϵͳ����
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    type: WindowType;

    /**
     * ��ǰϵͳ���Ƿ���ʾ��true��ʾ��ʾ��false��ʾ����ʾ��Ĭ��ֵΪtrue��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    isEnable?: boolean;

    /**
     * ��ǰϵͳ����λ�ü���С��Ĭ��ֵΪ{0,0,0,0}��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    region?: Rect;

    /**
     * ϵͳ��������ɫ��Ϊʮ������RGB��ARGB��ɫ�������ִ�Сд������'#00FF00'��'#FF00FF00'�� Ĭ��ֵΪ'0x66000000'��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    backgroundColor?: string;

    /**
     * ϵͳ��������ɫ�� Ĭ��ֵΪ'0xE5FFFFFF'��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentColor?: string;
  }

  /**
   * ��ǰϵͳ���ص���Ϣ���ϡ�
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface SystemBarTintState {
    /**
     * ��ǰ����������Ļid���ò���ӦΪ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    displayId: long;
    /**
     * ��ǰ�Ѹı������ϵͳ����Ϣ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    regionTint: Array<SystemBarRegionTint>;
  }

  /**
   * ֡��ָ�ꡣ
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  interface FrameMetrics {
    /**
     * �Ƿ�����֡��true��ʾ��֡��false��ʾ����֡��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    firstDrawFrame: boolean;

    /**
     * һ֡�е����ƴ�����ʱ����λ�����룩��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    inputHandlingDuration: long;

    /**
     * һ֡�еĲ��ֲ�����ʱ����λ�����룩��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    layoutMeasureDuration: long;

    /**
     * ��ǰ֡�Ŀ�ʼʱ�������λ�����룩��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    vsyncTimestamp: long;
  }

  /**
   * ���ھ�������
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface Rect {

    /**
     * �����������߽磬��λΪpx���ò���Ϊ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    left: int;

    /**
     * ����������ϱ߽磬��λΪpx���ò���ӦΪ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    top: int;

    /**
     * ��������Ŀ��ȣ���λΪpx���ò���ӦΪ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * ��������ĸ߶ȣ���λΪpx���ò���ӦΪ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * ���ھ������򣬵�λΪvp��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface RectInVP {

    /**
     * �����������߽�ֵ����λΪvp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    left: double;

    /**
     * ����������ϱ߽�ֵ����λΪvp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    top: double;

    /**
     * ��������Ŀ��ȣ���λΪvp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    width: double;

    /**
     * ��������ĸ߶ȣ���λΪvp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    height: double;
  }

  /**
   * ���ڻ������λ�á�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  export interface Position {

    /**
     * x���꣬��λΪpx���ò���ӦΪ������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    x: int;

    /**
     * y���꣬��λΪpx���ò���ӦΪ������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    y: int;
  }

  /**
   * ����ê��ö�١�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowAnchor {
    /**
     * �������Ͻǡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    TOP_START = 0,
    /**
     * �����ϱ߽������е㡣
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    TOP = 1,
    /**
     * �������Ͻǡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    TOP_END = 2,
    /**
     * ������߽�������е㡣
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    START = 3,
    /**
     * ���ں����������е㡣
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    CENTER = 4,
    /**
     * �����ұ߽�������е㡣
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    END = 5,
    /**
     * �������½ǡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    BOTTOM_START = 6,
    /**
     * �����±߽������е㡣
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    BOTTOM = 7,
    /**
     * �������½ǡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    BOTTOM_END = 8
  }

  /**
   * һ���Ӵ��������������λ�õĴ���ê�������Ϣ��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface WindowAnchorInfo {
    /**
     * һ���Ӵ��������������λ�ò���ʱ�Ĵ���ê��ö�١�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    anchorType: WindowAnchor;

    /**
     * һ���Ӵ�ê��������ê��λ�õ�X��ƫ��������λΪpx����֧���������룬����������ȡ����Ĭ��ֵΪ0��
     *
     * @default 0
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    offsetX?: int;

    /**
     * һ���Ӵ�ê��������ê��λ�õ�Y��ƫ��������λΪpx����֧���������룬����������ȡ����Ĭ��ֵΪ0��
     *
     * @default 0
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    offsetY?: int;
  }

  /**
   * �Ӵ��������������λ�ò���ʱ�Ĳ�����
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface SubWindowAttachOptions {
    /**
     * �Ӵ���ǰ����ģʽ�����ڿ���Ӧ�ö��Ƶ�UIЧ��������������Ĭ��Ϊ���ַ�����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    currentLayoutMode?: string;

    /**
     * ������С�仯�Ļص����󶨺������ص�һ�Σ�����������С�仯ʱ֪ͨ��Ĭ�ϲ������޷��յ�������С�仯֪ͨ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    parentWindowSizeChangeCallback?: Callback<Size>;

    /**
     * ����ģʽ�仯�Ļص����󶨺������ص�һ�Σ���������ģʽ�仯ʱ֪ͨ��Ĭ�ϲ������޷��յ�����ģʽ�仯֪ͨ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    parentWindowStatusChangeCallback?: Callback<WindowStatusType>;

    /**
     * �Ƿ�ʹ�ô���Эͬ��ϵ���������ڵĿ������ƵĽ�����
     *
     * @default false
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isIntersectedWidthLimit?: boolean;

    /**
     * �Ƿ�ʹ�ô���Эͬ��ϵ���������ڵĸ߶����ƵĽ�����
     *
     * @default false
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isIntersectedHeightLimit?: boolean;
  }

  /**
   * �������ݵı�������
   * 
   * ����������[����ʽ����](docroot://windowmanager/window-terminology.md#����ʽ����)����ʱ����Ҫ����
   * [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}��Ӧ��AvoidArea���������ݱ��á�
   * 
   * �ڱ��������ڣ�Ӧ�ô������ݱ��ڵ����޷���Ӧ�û�����¼���
   * 
   * > **˵����**
   * >
   * > ʾ��ͼչʾ��leftRect��topRect��rightRect��bottomRect�ĺ��塣
   * >
   * > ![avoidArea](docroot://reference/apis-arkui/figures/avoidArea.png)
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface AvoidArea {
    /**
     * ��ʵ�����壬�ݲ�֧��ʹ�á�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    visible: boolean;

    /**
     * ����λ�ڴ��ڵ������Խ��ߵ����ľ�������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    leftRect: Rect;

    /**
     * ����λ�ڴ��ڵ������Խ��ߵĶ����ľ�������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    topRect: Rect;

    /**
     * ����λ�ڴ��ڵ������Խ��ߵ��Ҳ�ľ�������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    rightRect: Rect;

    /**
     * ����λ�ڴ��ڵ������Խ��ߵĵײ��ľ�������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    bottomRect: Rect;
  }

  /**
   * ��vpΪ��λ��ʾ�Ĵ��ڱ���������Ϣ���ڽ���[����ʽ����](docroot://windowmanager/window-terminology.md#����ʽ����)����ʱ���ע��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface UIEnvAvoidAreaVP {
    /**
     * ��ʵ�����壬�ݲ�֧��ʹ�á�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    visible: boolean;

    /**
     * ����λ�ڴ��ڵ������Խ��ߵ����ľ���������λΪvp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    leftRect: RectInVP;

    /**
     * ����λ�ڴ��ڵ������Խ��ߵĶ����ľ���������λΪvp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    topRect: RectInVP;

    /**
     * ����λ�ڴ��ڵ������Խ��ߵ��Ҳ�ľ���������λΪvp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    rightRect: RectInVP;

    /**
     * ����λ�ڴ��ڵ������Խ��ߵĵײ��ľ���������λΪvp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    bottomRect: RectInVP;
  }

  /**
   * ���ڴ�С����λΪpx��
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface Size {
    /**
     * ���ڿ��ȣ���λΪpx���ò���ӦΪ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * ���ڸ߶ȣ���λΪpx���ò���ӦΪ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * ���ڴ�С����λΪvp��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface SizeInVP {
    /**
     * ���ڿ��ȣ���λΪvp���ò���Ϊ��������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    width: double;

    /**
     * ���ڸ߶ȣ���λΪvp���ò���Ϊ��������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    height: double;
  }

  /**
   * ��ǰ���ڵ���ϸ��Ϣ��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi [since 12 - 17]
   * @publicapi [since 18]
   * @since 12 dynamic
   * @since 23 static
   */
  interface WindowInfo {
    /**
     * ���ڳߴ硣
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @since 12 dynamic
     * @since 23 static
     */
    rect: Rect;

    /**
     * Ӧ��Bundle�����ơ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @since 12 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Ability�����ơ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @since 12 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * ����ID��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @since 12 dynamic
     * @since 23 static
     */
    windowId: int;

    /**
     * ����ģʽö�١�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    windowStatusType: WindowStatusType;

    /**
     * �����Ƿ�񽹡�true��ʾ���ڻ񽹣�false��ʾ����δ�񽹡�����ֵ��[isFocused()]{@link @ohos.window:window.Window.isFocused}�ӿ�һ�¡�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 14 - 17]
     * @publicapi [since 18]
     * @since 14 dynamic
     * @since 23 static
     */
    isFocused?: boolean;

    /**
     * ȫ������ϵ�µĴ��ڳߴ硣��չ�����������������Ͻ�Ϊ����ԭ�㣬�����������������������Ͻ�Ϊ����ԭ�㡣Ĭ��ֵ��[0, 0, 0, 0]��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    globalDisplayRect?: Rect;

    /**
     * Indicates the ID of the display where the window is located.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    displayId?: int;

    /**
     * ��������������Ļ�ϵ���ʵ��ʾ������������ʾʱ���������ţ���ȡ���������ź󴰿�����Ļ�ϵ���ʵλ�úʹ�С��Ĭ��ֵ��[0, 0, 0, 0]��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    globalRect?: Rect;
  }

  /**
   * ����������ʾ�豸�ʹ����Զ������ʾ�ܶ���Ϣ���������ص�λ�޹ص�����ϵ��������ʾ��С����ϵ����
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface WindowDensityInfo {
    /**
     * ����������Ļ��ϵͳ��ʾ��С����ϵ���������û����ñ仯���ò����仯��ΧΪ0.5-4.0��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    systemDensity: double;

    /**
     * ����������Ļ��ϵͳĬ����ʾ��С����ϵ�������洰��������Ļ�仯���ò����仯��ΧΪ0.5-4.0��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    defaultDensity: double;

    /**
     * �����Զ������õ���ʾ��С����ϵ�����ò���ȡֵ��ΧΪ0.5-4.0��δ���øò���ʱ��������ϵͳ��ʾ��С����ϵ���仯���ò�������������Ч�����Ӵ���ϵͳ�����ϵ���ϵͳ��ʾ��С����ϵ��(systemDensity)��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    customDensity: double;
  }

  /**
   * �������ԡ�
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface WindowProperties {
    /**
     * ���ڳߴ磬������߽��ϱ߽�������ڴ���������Ļ���϶�����㣬����ҳ����������
     * [onPageShow](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#onpageshow)��Ӧ����������
     * [onForeground]{@link @ohos.app.ability.UIAbility:UIAbility.onForeground}�׶λ�ȡ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    windowRect: Rect;

    /**
     * �����ڵĿɻ�������ߴ磬������߽��ϱ߽�������ڴ������϶�����㡣��Stageģ���£���Ҫ�ڵ���
     * [loadContent()]{@link @ohos.window:window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link @ohos.window:window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}����ҳ��
     * ���ݺ��ȡ�����ԡ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    drawableRect: Rect;

    /**
     * �������͡�
     * 
     * ��ǰ��������ʹ��[getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}�ӿڷ���type��׼ȷ�����⣬�������ڴ�������ʱ��ָ����
     * �����ͣ�����ͨ��getWindowProperties()�ӿڻ�ȡ�������͡�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     * @deprecated since 26.0.0
     * @useinstead WindowProperties#windowType
     */
    type: WindowType;

    /**
     * ���壺��������
     * ʹ�ó������жϵ�ǰ���������ڻ����Ӵ��ڵ�
     *
     * @type { ?WindowType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    windowType?: WindowType;

    /**
     * ������isLayoutFullScreenΪtrue�����������������״̬��������ֵΪtrue����������¾�����false��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 6 dynamic
     * @since 23 static
     */
    isFullScreen: boolean;

    /**
     * �����Ӵ������������[����ʽ����](docroot://windowmanager/window-terminology.md#����ʽ����)������ֵΪtrue��
     * 
     * �������������������[����ʽ����](docroot://windowmanager/window-terminology.md#����ʽ����)�Ҵ���ȫ��ģʽ������ֵΪtrue��
     * 
     * ��������¾�����false
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    isLayoutFullScreen: boolean;

    /**
     * �����Ƿ�ɻ񽹡�true��ʾ�ɻ񽹣�false��ʾ���ɻ񽹡� 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    focusable: boolean;

    /**
     * �����Ƿ�ɴ�����true��ʾ�ɴ�����false��ʾ���ɴ�����
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    touchable: boolean;

    /**
     * �������ȡ�ͨ��
     * [setWindowBrightness()]{@link @ohos.window:window.Window.setWindowBrightness(brightness: double, callback: AsyncCallback<void>)}
     * ���ô��ڵ�����ֵ���ò���Ϊ�������������õ����ȷ�ΧΪ[0.0, 1.0]��-1.0����ȡֵ1.0ʱ��ʾ������ȣ�ȡֵ-1.0ʱ����ʾ���ȸ���ϵͳ���������û����������ֵ����ʾ���ȸ���ϵͳ����ʱ��ȡ��������ֵΪ-1.0��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    brightness: double;

    /**
     * �²㴰�ڵİ���ֵ���ò���Ϊ��������ȡֵ��ΧΪ[0.0, 1.0]����ȡ1.0��ʾ���
     * 
     * **˵����** ��API version 7��ʼ֧�֣���API version 9��ʼ��������ǰ�޿�����ӿڡ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    dimBehindValue: number;

    /**
     * ��Ļ�Ƿ�����true��ʾ������false��ʾ��������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    isKeepScreenOn: boolean;

    /**
     * �����Ƿ�Ϊ��˽ģʽ��true��ʾ����Ϊ��˽ģʽ��false��ʾ����Ϊ����˽ģʽ����ͨ��
     * [setWindowPrivacyMode()]{@link @ohos.window:window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * ���ô��ڵ���˽ģʽ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    isPrivacyMode: boolean;

    /**
     * �����Ƿ�ΪԲ�ǡ�true��ʾ����ΪԲ�ǣ�false��ʾ����Ϊ��Բ�ǡ�
     * 
     * **˵����** ��API version 7��ʼ֧�֣���API version 9��ʼ��������ǰ�޿�����ӿڡ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    isRoundCorner: boolean;

    /**
     * ���ڱ����Ƿ�͸����true��ʾ͸����false��ʾ��͸����
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    isTransparent: boolean;

    /**
     * ����ID���ò���Ϊ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * ����������ĻID��Ĭ�Ϸ�������ĻID���ò���Ϊ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    displayId?: long;

    /**
     * �������ƣ�Ĭ��Ϊ���ַ�����
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    name?: string;

    /**
     * ȫ������ϵ�µĴ��ڳߴ硣��չ�����������������Ͻ�Ϊ����ԭ�㣬�����������������������Ͻ�Ϊ����ԭ�㡣Ĭ��ֵ��[0, 0, 0, 0]��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    globalDisplayRect?: Rect;
  }

  /**
   * ϵͳװ������ť��ʽ��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  interface DecorButtonStyle {
    /**
     * ��ɫģʽ����ɫģʽ�°�ť��ɫ����Ϊǳɫ��ǳɫģʽ�°�ť��ɫ����Ϊ��ɫ��δ������Ĭ�ϸ���ϵͳ��ɫģʽ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    colorMode?: ConfigurationConstant.ColorMode;

    /**
     * ��ť������ʾʱ�Ĵ�С��ȡֵ��Χ20vp-40vp��Ĭ��ֵ28vp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    buttonBackgroundSize? : int;

    /**
     * ��ť��࣬ȡֵ��Χ8vp-24vp��Ĭ��ֵ12vp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    spacingBetweenButtons? : int;

    /**
     * �رհ�ť�Ҳ�ര�ڱ߾࣬ȡֵ��Χ6vp-22vp��Ĭ��ֵ20vp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    closeButtonRightMargin? : int;

    /**
     * ����icon�Ĵ�С��ȡֵ��Χ16vp-24vp��Ĭ��ֵ20vp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    buttonIconSize? : int;

    /**
     * ��������Բ�ǰ뾶��ȡֵ��Χ4vp-8vp��Ĭ��ֵ4vp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    buttonBackgroundCornerRadius? : int;
  }

  /**
   * ɫ��ģʽ��
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum ColorSpace {
    /**
     * Ĭ��SRGBɫ��ģʽ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * ��ɫ��ģʽ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    WIDE_GAMUT = 1
  }
  /**
   * ���Ų�����
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface ScaleOptions {
    /**
     * X������Ų������ò���Ϊ��������Ĭ��ֵΪ1.0��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    x?: double;

    /**
     * Y������Ų������ò���Ϊ��������Ĭ��ֵΪ1.0��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    y?: double;

    /**
     * �������ĵ�X�����ꡣ�ò���Ϊ��������Ĭ��ֵΪ0.5�� ȡֵ��Χ[0.0, 1.0]��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotX?: double;

    /**
     * �������ĵ�Y�����ꡣ�ò���Ϊ��������Ĭ��ֵΪ0.5�� ȡֵ��Χ[0.0, 1.0]��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotY?: double;
  }

  /**
   * ��ת������
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface RotateOptions {
    /**
     * ��X�����ת�Ƕȡ��ò���Ϊ��������Ĭ��ֵΪ0.0��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    x?: double;

    /**
     * ��Y�����ת�Ƕȡ��ò���Ϊ��������Ĭ��ֵΪ0.0��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    y?: double;

    /**
     * ��Z�����ת�Ƕȡ��ò���Ϊ��������Ĭ��ֵΪ0.0��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    z?: double;

    /**
     * ��ת���ĵ�X�����ꡣ�ò���Ϊ��������Ĭ��ֵΪ0.5�� ȡֵ��ΧΪ[0.0, 1.0]��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotX?: double;

    /**
     * ��ת���ĵ�Y�����ꡣ�ò���Ϊ��������Ĭ��ֵΪ0.5�� ȡֵ��ΧΪ[0.0, 1.0]��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotY?: double;
  }

  /**
   * ƽ�Ʋ�����
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TranslateOptions {
    /**
     * X���ƽ�Ʋ������ò���Ϊ��������Ĭ��ֵΪ0.0����λΪpx��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    x?: double;

    /**
     * Y���ƽ�Ʋ������ò���Ϊ��������Ĭ��ֵΪ0.0����λΪpx��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    y?: double;

    /**
     * Z���ƽ�Ʋ������ò���Ϊ��������Ĭ��ֵΪ0.0����λΪpx��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    z?: double;
  }

  /**
   * ����ת������������Ϣ��
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TransitionContext {
    /**
     * ������Ŀ�괰�ڡ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    toWindow: Window;

    /**
     * ��������ת�����������״̬���ú�����Ҫ�ڶ�������[animateTo()]{@link ./@internal/component/ets/common}ִ�к����á�
     *
     * @param { boolean } isCompleted - ��������ת���Ƿ���ɡ�true��ʾ��ɱ���ת����false��ʾ��������ת����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    completeTransition(isCompleted: boolean): void;
  }

  /**
   * ����ת����������ʹ�����ӽӿ�֮ǰ���ȴ���ϵͳ���ڣ�����ʾ�����롣
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TransitionController {
    /**
     * ������ʾʱ���Զ��嶯�����á�
     *
     * @param { TransitionContext } context - ����ת��ʱ�������ġ�
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     */
    animationForShown(context: TransitionContext): void;

    /**
     * Animation configuration when showing window
     *
     * @default undefined
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    animationForShown?: TransitionControllerCallback;

    /**
     * ��������ʱ���Զ��嶯�����á�
     *
     * @param { TransitionContext } context - ����ת��ʱ�������ġ�
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     */
    animationForHidden(context: TransitionContext): void;

    /**
     * Animation configuration when hiding window
     *
     * @default undefined
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    animationForHidden?: TransitionControllerCallback;
  }

  /**
   * �����Ӵ��ڻ�ϵͳ����ʱ�Ĳ�����
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Configuration {
    /**
     * �������ơ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * �������͡�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    windowType: WindowType;

    /**
     * ��ǰӦ����������Ϣ�������ã���Ĭ��Ϊ�ա�<br>FAģ���²���Ҫʹ�øò��������ɴ����Ӵ��ڣ�ʹ�øò���ʱ�ᱨ����<br>Stageģ�ͱ���ʹ�øò��������ڴ���ȫ����������ģ̬����ϵͳ���ڡ� <br>
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ctx?: BaseContext;

    /**
     * ��ǰ��ĻID�������ã���Ĭ��Ϊ��������ĻID��<br>�ò���ӦΪ�Ǹ��������Ҷ�Ӧ��ĻID���ڡ�<br>��չ������Դ�����������£�ȫ����������ͨ��������ĻID��ʾ��ָ����Ļ�ϡ�<br>ģ̬����ϵͳ��������ĻID��Ч��Ĭ��Ϊ��������ĻID��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    displayId?: long;

    /**
     * ������ID�������ã���Ĭ��Ϊ-1��Ĭ�ϸ���Ϊ��ǰӦ�������Ķ�Ӧ������<br>FAģ���£��ò���ӦΪ�Ǹ��������Ҷ�Ӧ������ID���ڡ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    parentId?: int;

    /**
     * �Ƿ���ʾ����װ�Σ�����windowTypeΪTYPE_DIALOGʱ��Ч��true��ʾ��ʾ��false��ʾ����ʾ���˲���Ĭ��ֵΪfalse��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    decorEnabled?: boolean;

    /**
     * `decorEnabled`��������Ϊtrueʱ�����ڵı������ݡ�������ʾ�������Ҷ˲�����ϵͳ������������ˣ�
     * ����������ʡ�Ժű�ʾ�������ã���Ĭ��Ϊ���ַ�����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    title?: string;

    /**
     * ��ǰϵͳ���ڵĲ㼶������[WindowType]{@link window.WindowType}ΪTYPE_DYNAMICʱ��Ч��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    zIndex?: int;

    /**
     * �Ƿ�ʹ��ϵͳĬ��Density��ʹ��ϵͳĬ��Density֮�󣬴��ڲ������ϵͳ��ʾ��С�仯���²��֡�
     * 
     * ��������ϵͳ�������ô˲���Ϊtrueʱ����ʾ��ǰ����ʹ��ϵͳĬ��Density���Ҳ����ܵ�
     * [setDefaultDensityEnabled()](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setdefaultdensityenabled12)
     * ��[setCustomDensity()](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setcustomdensity15)���õ��������Լ�
     * [setDefaultDensityEnabled()]{@link window.Window.setDefaultDensityEnabled}���õı����ڵ����Ӱ�졣
     * 
     * ��������ϵͳ�������ô˲���Ϊfalseʱ����ʾ��ǰ���ڲ�ʹ��ϵͳĬ��Density���һ��ܵ�
     * [setDefaultDensityEnabled()](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setdefaultdensityenabled12)
     * ��[setCustomDensity()](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setcustomdensity15)���õ��������Լ�
     * [setDefaultDensityEnabled()]{@link window.Window.setDefaultDensityEnabled}���õı����ڵ����Ӱ�졣
     * 
     * Ĭ��Ϊfalse��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    defaultDensityEnabled?: boolean;
  }

  /**
   * ���ڳߴ����Ʋ�����Ӧ�ÿ���ͨ��[getWindowLimits]{@link @ohos.window:window.Window.getWindowLimits}��õ�ǰ���ڵĳߴ����ƣ���λΪpx������API version 2
   * 2��ʼ��������ͨ��[getWindowLimitsVP]{@link @ohos.window:window.Window.getWindowLimitsVP}��ȡ���ڳߴ����ƣ���λΪvp����
   * 
   * ���ڳߴ����Ƶ�������Ч�����Ĭ��ϵͳ���ơ�Ӧ�����ú�����ʱ���õ�����ȡ�����õ������ȼ��Ӹߵ�������Ϊ��
   * 
   * 1. Ӧ��ͨ��[setWindowLimits]{@link @ohos.window:window.Window.setWindowLimits(windowLimits: WindowLimits)}���ô��ڳߴ����ơ�
   * 2. Ӧ����[startAbility]{@link ./application/UIAbilityContext:UIAbilityContext#startAbility(want: Want, options?: StartOptions)}���𴰿�ʱͨ��[StartOptions]{@link @ohos.app.ability.StartOptions:StartOptions}ָ�����ڳߴ����ƣ�API version 17��ʼ֧�֣���
   * 3. Ӧ����[module.json5�����ļ��е�abilities��ǩ](docroot://quick-start/module-configuration-file.md#abilities��ǩ)������windowLimits��
   * 4. Ĭ��ϵͳ���ƣ����ڲ�ͬ��Ʒ�ʹ������ͣ���windowLimitsϵͳĬ�����ƴ��ڲ��죩��
   * 
   * > **˵����**
   * >
   * > ���maxWidth��maxHeight��minWidth��minHeight���ԣ�
   * >
   * > - Ĭ�ϵ�λΪpx����API version 22��ʼ֧��ͨ��pixelUnit���õ�λΪpx��vp��
   * >
   * > - ����Ϊ������������������ȡ����
   * >
   * > - Ĭ��ֵΪ0����ʾ���Բ������仯��
   * >
   * > - ����Ч��Χ����ֵ��ϵͳ�޶�����С�߶�/���ȡ�
   * >
   * > - ����Ч��Χ����ֵ��ϵͳ�޶������߶�/���ȡ�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface WindowLimits {

    /**
     * ���ڵ������ȡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    maxWidth?: int;

    /**
     * ���ڵ����߶ȡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    maxHeight?: int;

    /**
     * ���ڵ���С���ȡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    minWidth?: int;

    /**
     * ���ڵ���С�߶ȡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    minHeight?: int;

    /**
     * ���ڳߴ����Ƶĵ�λ��Ĭ��Ϊpx������ʽ����Ϊpx��vp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    pixelUnit?: PixelUnit;
  }

  /**
   * �������ϵ���С������󻯡��رհ�ť�������򣬸�����λ��������Դ������Ͻǡ�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface TitleButtonRect {

    /**
     * ����������ұ߽磬��λΪvp���ò���Ϊ������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    right: int;

    /**
     * ����������ϱ߽磬��λΪvp���ò���Ϊ������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    top: int;

    /**
     * ��������Ŀ��ȣ���λΪvp���ò���Ϊ������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * ��������ĸ߶ȣ���λΪvp���ò���Ϊ������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * ���ھ��Σ�����λ�ü����ڴ�С���仯���ص�ֵ���仯ԭ��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface RectChangeOptions {
    /**
     * New value of the window rectangle.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    rect: Rect,

    /**
     * ���ھ��α仯��ԭ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    reason: RectChangeReason;
  }

  /**
   * ϵͳ�������仯�󷵻ص�ǰ���������Լ������������͡�
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface AvoidAreaOptions {
    /**
     * ϵͳ�������仯�󷵻صı����������͡�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    type: AvoidAreaType;

    /**
     * ϵͳ�������仯�󷵻صı�������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    area: AvoidArea;
  }

  /**
   * ���ڲ�ͬ���ͱ���������Ϣ��ɵ�[��������](docroot://ui/arkts-env-system-property.md)�������ͣ�ÿ�����ͱ�������λΪpx��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface UIEnvWindowAvoidAreaInfoPX {
    /**
     * ��ʾ[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_SYSTEM���͵ı������򣬵�λΪpx��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    statusBar: AvoidArea;

    /**
     * ��ʾ[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_CUTOUT���͵ı������򣬵�λΪpx��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    cutout: AvoidArea;

    /**
     * ��ʾ[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_KEYBOARD���͵ı������򣬵�λΪpx��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    keyboard: AvoidArea;

    /**
     * ��ʾ[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_NAVIGATION_INDICATOR���͵ı������򣬵�λΪpx��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    navigationIndicator: AvoidArea;
  }

  /**
   * ���ڲ�ͬ���ͱ���������Ϣ��ɵ�[��������](docroot://ui/arkts-env-system-property.md)�������ͣ�ÿ�����ͱ�������λΪvp��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface UIEnvWindowAvoidAreaInfoVP {
    /**
     * ��ʾ[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_SYSTEM���͵ı������򣬵�λΪvp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    statusBar: UIEnvAvoidAreaVP;

    /**
     * ��ʾ[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_CUTOUT���͵ı������򣬵�λΪvp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    cutout: UIEnvAvoidAreaVP;

    /**
     * ��ʾ[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_KEYBOARD���͵ı������򣬵�λΪvp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    keyboard: UIEnvAvoidAreaVP;

    /**
     * ��ʾ[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_NAVIGATION_INDICATOR���͵ı������򣬵�λΪvp��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    navigationIndicator: UIEnvAvoidAreaVP;
  }

  /**
   * ���ھ��Σ�����λ�ü����ڴ�С���仯��ԭ��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum RectChangeReason {
    /**
     * Ĭ��ֵ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    UNDEFINED = 0,

    /**
     * ������󻯡�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MAXIMIZE = 1,

    /**
     * ���ڻָ�����һ�ε�״̬��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    RECOVER = 2,

    /**
     * ������ק�ƶ���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MOVE = 3,

    /**
     * ������ק���š�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DRAG = 4,

    /**
     * ���ڿ�ʼ��ק���š�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DRAG_START = 5,

    /**
     * ���ڽ�����ק���š�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DRAG_END = 6
  }

  /**
   * ���ڿɼ���״̬ö�١�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  enum OcclusionState {
    /**
     * ������ȫ�ɼ���û���κβ��ֱ�������͸�������ڵ�����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    NO_OCCLUSION = 0,

    /**
     * ���ڲ��ֿɼ������ֱ�������͸�������ڵ�����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    PARTIAL_OCCLUSION = 1,

    /**
     * ������ȫ���ɼ�����ȫ��������͸�������ڵ����򴰿���С�����򴰿����أ���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    FULL_OCCLUSION = 2
  }

  /**
   * ��������Ϣ��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  interface MainWindowInfo {
    /**
     * ID of the display to which the main window belongs.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    displayId: long,
    /**
     * ID of the main window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    windowId: int,
    /**
     * Foreground/Background status of the main window. **true** if the main window is in the foreground, **false**
     * otherwise.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    showing: boolean,
    /**
     * �����ڵ��������ơ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    label: string;
  }

  /**
   * �����ڽ�ͼ�������
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  interface WindowSnapshotConfiguration {
    /**
     * �Ƿ�ʹ�������ڵ����н�ͼ��Ĭ��ֵΪtrue�� true��ʾʹ�������ڵ����н�ͼ�����������ޱ���Ľ�ͼ����ʹ�������ڵ����½�ͼ��false��ʾʹ�������ڵ����½�ͼ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    useCache?: boolean;
  }

  /**
   * �����Ӵ��ڻ���ϵͳ���ڣ�ʹ��callback�첽�ص���
   * 
   * ��[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£��Ӵ��ڴ�����Ĭ����
   * [����ʽ����](docroot://windowmanager/window-terminology.md#����ʽ����)��
   * 
   * ���ɴ���״̬�£��Ӵ��ڲ���[decorEnabled]{@link @ohos.window:window.Configuration}Ϊfalseʱ���Ӵ��ڴ�����Ϊ����ʽ���֣��Ӵ��ڲ���decorEnabledΪtrue���Ӵ���
   * ������Ϊ�ǳ���ʽ���֡�
   *
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW [since 12]
   * @param { Configuration } config - ��������ʱ�Ĳ�����
   * @param { AsyncCallback<Window> } callback - �ص����������ص�ǰ�����Ĵ��ڶ���
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.createWindow can not work correctly due to limited device
   *     capabilities. [since 12]
   * @throws { BusinessError } 1300001 - Repeated operation.
   *     Possible cause: The window has been created and can not be created again.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: Invalid parent window type, parent window cannot be a subWindow. [since 12]
   * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause: The window type in the configuration is
   *     invalid. [since 12]
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300008 - The display device is abnormal. [since 9 - 16]
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createWindow(config: Configuration, callback: AsyncCallback<Window>): void;

  /**
   * �����Ӵ��ڻ���ϵͳ���ڣ�ʹ��Promise�첽�ص���
   * 
   * ��[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£��Ӵ��ڴ�����Ĭ����
   * [����ʽ����](docroot://windowmanager/window-terminology.md#����ʽ����)��
   * 
   * ���ɴ���״̬�£��Ӵ��ڲ���[decorEnabled]{@link @ohos.window:window.Configuration}Ϊfalseʱ���Ӵ��ڴ�����Ϊ����ʽ���֣��Ӵ��ڲ���decorEnabledΪtrue���Ӵ���
   * ������Ϊ�ǳ���ʽ���֡�
   *
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW [since 12]
   * @param { Configuration } config - ��������ʱ�Ĳ�����
   * @returns { Promise<Window> } Promise���󡣷��ص�ǰ�����Ĵ��ڶ���
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.createWindow can not work correctly due to limited device
   *     capabilities. [since 12]
   * @throws { BusinessError } 1300001 - Repeated operation.
   *     Possible cause: The window has been created and can not be created again.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: Invalid parent window type, parent window cannot be a subWindow. [since 12]
   * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause: The window type in the configuration is
   *     invalid. [since 12]
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300008 - The display device is abnormal. [since 9 - 16]
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createWindow(config: Configuration): Promise<Window>;

  /**
   * �����Ӵ��ڣ�ʹ��callback�첽�ص���
   * 
   * �Ӵ��ڴ�����Ĭ����[����ʽ����](docroot://windowmanager/window-terminology.md#����ʽ����)��
   * 
   * > **˵����**
   * >
   * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������id����null��undefinedʱ�����ܻᵼ��callback�޷��õ�ִ�У�����ʹ��
   * > [createWindow()]{@link window.createWindow(config: Configuration, callback: AsyncCallback<Window>)}�����
   *
   * @param { string } id - �������֣���[Configuration]{@link @ohos.window:window.Configuration}�е�name��
   * @param { WindowType } type - �������͡�
   * @param { AsyncCallback<Window> } callback - �ص����������ص�ǰ�������Ӵ��ڶ���
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead window.createWindow(config: Configuration, callback: AsyncCallback<Window>)
   */
  function create(id: string, type: WindowType, callback: AsyncCallback<Window>): void;

  /**
   * �����Ӵ��ڣ�ʹ��Promise�첽�ص���
   * 
   * �Ӵ��ڴ�����Ĭ����[����ʽ����](docroot://windowmanager/window-terminology.md#����ʽ����)��
   * 
   * > **˵����**
   * >
   * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��[createWindow()]{@link window.createWindow(config: Configuration)}�����
   *
   * @param { string } id - �������֣���[Configuration]{@link @ohos.window:window.Configuration}�е�name��
   * @param { WindowType } type - �������͡�
   * @returns { Promise<Window> } Promise���󡣷��ص�ǰ�������Ӵ��ڶ���
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead window.createWindow(config: Configuration)
   */
  function create(id: string, type: WindowType): Promise<Window>;

  /**
   * ����ϵͳ���ڣ�ʹ��Promise�첽�ص���
   * 
   * > **˵����**
   * >
   * > ��API version 8��ʼ֧�֣���API version 9��ʼ����������ʹ��[createWindow()]{@link window.createWindow(config: Configuration)}�����
   *
   * @param { BaseContext } ctx - ��ǰӦ����������Ϣ��
   * @param { string } id - �������֣���[Configuration]{@link @ohos.window:window.Configuration}�е�name��
   * @param { WindowType } type - �������͡�
   * @returns { Promise<Window> } Promise���󡣷��ص�ǰ�������Ӵ��ڶ���
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead window.createWindow(config: Configuration)
   */
  function create(ctx: BaseContext, id: string, type: WindowType): Promise<Window>;

  /**
   * ����ϵͳ���ڣ�ʹ��callback�첽�ص���
   * 
   * > **˵����**
   * >
   * > ��API version 8��ʼ֧�֣���API version 9��ʼ����������ʹ��
   * > [createWindow()]{@link window.createWindow(config: Configuration, callback: AsyncCallback<Window>)}�����
   *
   * @param { BaseContext } ctx - ��ǰӦ����������Ϣ��
   * @param { string } id - �������֣���[Configuration]{@link @ohos.window:window.Configuration}�е�name��
   * @param { WindowType } type - �������͡�
   * @param { AsyncCallback<Window> } callback - �ص����������ص�ǰ�������Ӵ��ڶ���
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead window.createWindow(config: Configuration, callback: AsyncCallback<Window>)
   */
  function create(ctx: BaseContext, id: string, type: WindowType, callback: AsyncCallback<Window>): void;

  /**
   * ����һ���Ӵ������󶨸�����ʹ��Promise�첽�ص���
   * 
   * �Ӵ����游����ʾ/���أ����������游�����٣��Ӵ�ͨ���ص��������������������ڱ仯��
   * 
   * �����ڸ������ٺ��������ٴ������Ӵ���
   *
   * @param { string } name - Indicates window name.
   * @param { int } parentId - Indicates parent window id. The window id is a non-negative number and exists.
   * @param { BaseContext } ctx - Indicates the context on which the window depends
   * @param { WindowEventListener } parentWindowEventListener - Indicates the event listener of parent window.
   * @returns { Promise<Window> } Promise���󡣷��ص�ǰ�������Ӵ��ڶ���
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     This can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300001 - Repeated operation.
   *     Possible cause: The window has been created and can not be created again.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: 1. Internal task error.
   *                     2. The number of windows has reached the limit.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   *     Possible cause: 1. The parent window does not exist or has been destroyed.
   *                     2. Invalid window type. Only main windows are supported.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function createSubWindowAndBindParent(name: string, parentId: int, ctx: BaseContext,
    parentWindowEventListener: WindowEventListener): Promise<Window>;

  /**
   * ����id����Ӧ�Ĵ��ڣ�ʹ��callback�첽�ص���
   * 
   * > **˵����**
   * >
   * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��[findWindow()]{@link window.findWindow}�����
   *
   * @param { string } id - �������֣���[Configuration]{@link @ohos.window:window.Configuration}�е�name��
   * @param { AsyncCallback<Window> } callback - �ص����������ص�ǰ���ҵ��Ĵ��ڶ���
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead window.findWindow
   */
  function find(id: string, callback: AsyncCallback<Window>): void;

  /**
   * ����id����Ӧ�Ĵ��ڣ�ʹ��Promise�첽�ص���
   * 
   * > **˵����**
   * >
   * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��[findWindow()]{@link window.findWindow}�����
   *
   * @param { string } id - �������֣���[Configuration]{@link @ohos.window:window.Configuration}�е�name��
   * @returns { Promise<Window> } Promise���󡣷��ص�ǰ���ҵĴ��ڶ���
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead window.findWindow
   */
  function find(id: string): Promise<Window>;

  /**
   * ����ָ�����ƶ�Ӧ�Ĵ��ڡ�
   *
   * @param { string } name - �������ơ������Ӵ��ڻ�ϵͳ����ʱʹ��[Configuration]{@link @ohos.window:window.Configuration}�еĴ������ƣ�����������ʱʹ��
   *     [getWindowName](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getwindowname12)��ȡ��ǰʵ���Ĵ������ơ�
   * @returns { Window } ��ǰ���ҵĴ��ڶ����������ָ�����ƶ�Ӧ�Ĵ��ڲ����ڣ��򷵻ض���Ϊ�ա�
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: The window is not created or destroyed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function findWindow(name: string): Window;

  /**
   * ��ȡ��ǰӦ���������ʾ�Ĵ��ڣ�ʹ��callback�첽�ص���
   * 
   * > **˵����**
   * >
   * > ��API version 6��ʼ֧�֣���API version 9��ʼ����������ʹ��
   * > [getLastWindow()]{@link window.getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>)}�����
   *
   * @param { AsyncCallback<Window> } callback - �ص����������ص�ǰӦ���������ʾ�Ĵ��ڶ���
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead window.getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>)
   */
  function getTopWindow(callback: AsyncCallback<Window>): void;

  /**
   * ��ȡ��ǰӦ���������ʾ�Ĵ��ڣ�ʹ��Promise�첽�ص���
   * 
   * > **˵����**
   * >
   * > ��API version 6��ʼ֧�֣���API version 9��ʼ����������ʹ��[getLastWindow()]{@link window.getLastWindow(ctx: BaseContext)}�����
   *
   * @returns { Promise<Window> } Promise���󡣷��ص�ǰӦ���������ʾ�Ĵ��ڶ���
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead window.getLastWindow(ctx: BaseContext)
   */
  function getTopWindow(): Promise<Window>;

  /**
   * ��ȡ��ǰӦ���������ʾ�Ĵ��ڣ�ʹ��Promise�첽�ص���
   * 
   * > **˵����**
   * >
   * > ��API version 8��ʼ֧�֣���API version 9��ʼ����������ʹ��[getLastWindow()]{@link window.getLastWindow(ctx: BaseContext)}�����
   *
   * @param { BaseContext } ctx - ��ǰӦ����������Ϣ��
   * @returns { Promise<Window> } Promise���󡣷��ص�ǰӦ���������ʾ�Ĵ��ڶ���
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead window.getLastWindow(ctx: BaseContext)
   */
  function getTopWindow(ctx: BaseContext): Promise<Window>;

  /**
   * ��ȡ��ǰӦ���������ʾ�Ĵ��ڣ�ʹ��callback�첽�ص���
   * 
   * > **˵����**
   * >
   * > ��API version 8��ʼ֧�֣���API version 9��ʼ����������ctx����null��undefinedʱ�����ܻᵼ��callback�޷��õ�ִ�У�����ʹ��
   * > [getLastWindow()]{@link window.getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>)}�����
   *
   * @param { BaseContext } ctx - ��ǰӦ����������Ϣ��
   * @param { AsyncCallback<Window> } callback - �ص����������ص�ǰӦ���������ʾ�Ĵ��ڶ���
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead window.getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>)
   */
  function getTopWindow(ctx: BaseContext, callback: AsyncCallback<Window>): void;

  /**
   * ��ȡ��ǰӦ���ڲ㼶��ߵ��Ӵ��ڣ�ʹ��callback�첽�ص���
   * 
   * ����Ӧ���Ӵ��ڻ��Ӵ���δ����[showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}������ʾ���򷵻�Ӧ����
   * ���ڡ�
   *
   * @param { BaseContext } ctx - Current application context.
   * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
   *     1. Top window or main window is null or destroyed;
   *     2. This window context is abnormal.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>): void;

  /**
   * ��ȡ��ǰӦ���ڲ㼶��ߵ��Ӵ��ڣ�ʹ��Promise�첽�ص���
   * 
   * ����Ӧ���Ӵ��ڻ��Ӵ���δ����[showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}������ʾ���򷵻�Ӧ����
   * ���ڡ�
   *
   * @param { BaseContext } ctx - ��ǰӦ����������Ϣ��
   * @returns { Promise<Window> } Promise���󡣷��ص�ǰӦ���ڲ㼶��ߵĴ��ڶ���
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
   *     1. Top window or main window is null or destroyed;
   *     2. This window context is abnormal.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getLastWindow(ctx: BaseContext): Promise<Window>;

  /**
   * ��С��ָ��ID����Ļ�е����������ڡ�
   *
   * @param { long } id - ��ʾ�豸[Display]{@link @ohos.display:display.DisplayState}��ID�ţ��ò�����֧���������롣
   * @param { AsyncCallback<void> } callback - �ص���Ϣ��
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities. [since 12]
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function minimizeAll(id: long, callback: AsyncCallback<void>): void;

  /**
   * ��С��ָ��ID����Ļ�е����������ڣ�ʹ��Promise�첽�ص���
   *
   * @param { long } id - ��ʾ�豸[Display]{@link @ohos.display:display.DisplayState}��ID�ţ��ò�����֧���������롣
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities. [since 12]
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function minimizeAll(id: long): Promise<void>;

  /**
   * ��С��ָ��ID����Ļ�г�ָ������֮������������ڣ�ʹ��Promise�첽�ص���
   *
   * @param { long } displayId - ��ĻID���ò�����֧���������룬���븡����������ȡ����
   * @param { int } excludeWindowId - ����ID����ͨ��
   *     [getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}�ӿڻ�ȡ����ش������ԣ���������id����ӦΪ����ID������IDС�ڵ���0
   *     ���򴰿�IDΪnull����undefinedʱ�����׳�[401������](docroot://reference/errorcode-universal.md#401-�������ʧ��)������ID����0���ǲ����ڻ��׳�13000
   *     02�����룻����ID����0�Ҵ��ڴ��ڵ��ǲ��ڸ���Ļ����С��ָ����Ļ�ϵ����������ڡ��ò�����֧���������룬���븡����������ȡ����
   * @returns { Promise<void> } Promise�����޷��ؽ����
   * @throws { BusinessError } 202 - Permission verification failed. A nonsystem application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: 1. Window is nullptr;
   *     2. Failed to find specified window by id.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function minimizeAllWithExclusion(displayId: long, excludeWindowId: int): Promise<void>;

  /**
   * �ര�ڿ����л�ʱ���ػ��߻ָ�Ӧ�ô��ڡ�
   *
   * @param { AsyncCallback<void> } callback - �ص�������
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities. [since 12]
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function toggleShownStateForAllAppWindows(callback: AsyncCallback<void>): void;

  /**
   * �ര�ڿ����л�ʱ���ػ��߻ָ�Ӧ�ô��ڣ�ʹ��Promise�첽�ص���
   *
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities. [since 12]
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function toggleShownStateForAllAppWindows(): Promise<void>;

  /**
   * ���ô��ڲ���ģʽ��ʹ��callback�첽�ص���
   *
   * @param { WindowLayoutMode } mode - ���õĴ��ڲ���ģʽ��
   * @param { AsyncCallback<void> } callback - �ص���Ϣ��
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   * @deprecated since 26.0.0
   */
  function setWindowLayoutMode(mode: WindowLayoutMode, callback: AsyncCallback<void>): void;

  /**
   * ���ô��ڲ���ģʽ��ʹ��Promise�첽�ص���
   *
   * @param { WindowLayoutMode } mode - ���õĴ��ڲ���ģʽ��
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   * @deprecated since 26.0.0
   */
  function setWindowLayoutMode(mode: WindowLayoutMode): Promise<void>;

  /**
   * �������Ƶ�������״̬��ʹ��callback�첽�ص���ϵͳ���ڰ�ȫ�Ŀ��ǣ������Ԥ���ƵĽ��úͻָ���Ӧ�õ��ñ��ӿڽ������ƺ��쳣�˳�������£������Ҫ�ָ����ƣ�������ʵ���Զ�������Ʋ��ٴε��ñ��ӿڻָ����ơ�
   *
   * @param { boolean } enable - �������Ƶ�������״̬��true��ʾ�������Ƶ�����false��ʾ�������Ƶ�������ǰ�����ô���Ļ���������ƣ���������δ���á�
   * @param { AsyncCallback<void> } callback - �ص���Ϣ��
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setGestureNavigationEnabled(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * �������Ƶ�������״̬��ʹ��Promise�첽�ص���ϵͳ���ڰ�ȫ�Ŀ��ǣ������Ԥ���ƵĽ��úͻָ���Ӧ�õ��ñ��ӿڽ������ƺ��쳣�˳�������£������Ҫ�ָ����ƣ�������ʵ���Զ�������Ʋ��ٴε��ñ��ӿڻָ����ơ�
   *
   * @param { boolean } enable - �������Ƶ�������״̬��true��ʾ�������Ƶ�����false��ʾ�������Ƶ�����
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setGestureNavigationEnabled(enable: boolean): Promise<void>;

  /**
   * ������ĻˮӡͼƬ��ʾ״̬��ʹ��Promise�첽�ص���
   *
   * @param { image.PixelMap } pixelMap - ˮӡͼƬ����ͨ��
   *     [createPixelMap]{@link @ohos.multimedia.image:image.createPixelMap(colors: ArrayBuffer, options: InitializationOptions)}
   *     �ӿڻ�ȡ��
   * @param { boolean } enable - �����Ƿ���ʾˮӡͼƬ��true��ʾˮӡͼƬ��false��ʾ����ʾˮӡͼƬ��������ʾˮӡ������������Ϊfalse���ܹر�ˮӡͼƬ��ʾ��
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean): Promise<void>;

  /**
   * ������ĻˮӡͼƬ����ʾ״̬�����趨ˮӡ�����ȼ���ʹ��Promise�첽�ص�����priority����0ʱ����ǰ�ӿ���
   * [setWaterMarkImage]{@link window.setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean, callback: AsyncCallback<void>)}
   * �ȼۡ�
   *
   * @param { image.PixelMap } pixelMap - ˮӡͼƬ����ͨ��
   *     [createPixelMap]{@link @ohos.multimedia.image:image.createPixelMap(colors: ArrayBuffer, options: InitializationOptions)}
   *     �ӿڻ�ȡ��
   * @param { boolean } enable - �����Ƿ���ʾˮӡͼƬ��true��ʾ��ʾˮӡͼƬ��false��ʾ����ʾˮӡͼƬ��������ʾˮӡ������������Ϊfalse���ܹر�ˮӡͼƬ��ʾ��
   * @param { int } priority - ˮӡ�������ȼ�����ֵԽС��ʾ���ȼ�Խ�ߣ�����ڵ���0��С��0ʱ����1300016�����롣����ˮӡʱ�������������ȼ�����һ�����õĵͣ��򱾴����ò�����Ч��
   * @returns { Promise<void> } - Promise�����޷��ؽ����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean, priority: int): Promise<void>;

  /**
   * ������ĻˮӡͼƬ��ʾ״̬��ʹ��callback�첽�ص���
   *
   * @param { image.PixelMap } pixelMap - ˮӡͼƬ����ͨ��
   *     [createPixelMap]{@link @ohos.multimedia.image:image.createPixelMap(colors: ArrayBuffer, options: InitializationOptions)}
   *     �ӿڻ�ȡ��
   * @param { boolean } enable - �����Ƿ���ʾˮӡͼƬ��true��ʾˮӡͼƬ��false��ʾ����ʾˮӡͼƬ��������ʾˮӡ������������Ϊfalse���ܹر�ˮӡͼƬ��ʾ��
   * @param { AsyncCallback<void> } callback - �ص���Ϣ��
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * ��ͬӦ���ڽ����ڽ����Դ����ת�Ƶ�Ŀ�괰�ڣ���֧��Ӧ���������Ӵ���Χ�ڵĽ���ת�ơ�ʹ��Promise�첽�ص���
   * 
   * Ŀ�괰����ȷ�����л�ý������������ͨ��
   * [setWindowFocusable()]{@link @ohos.window:window.Window.setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>)}
   * ���ã�����ȷ������[showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}�ɹ���ִ����ϡ�
   * 
   * > **˵����**
   * >
   * > �ڵ���shiftAppWindowFocus()ǰ������ȷ��Ŀ�괰���ѵ���
   * > [loadContent()]{@link @ohos.window:window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
   * > ��[setUIContent()]{@link @ohos.window:window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}����Ч��
   * > ������ܻᵼ�²��ɼ����ڻ�ȡ���㣬��ɹ����쳣��Ӱ���û����顣
   *
   * @param { int } sourceWindowId - Դ����id�������ǻ�״̬���Ƽ�ʹ��
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}������ȡ����id���ԡ�
   * @param { int } targetWindowId - Ŀ�괰��id���Ƽ�ʹ��
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}������ȡ����id���ԡ�
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: 1. The window is not created or destroyed;
   *     2. Internal task error.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   *     Possible cause: 1. Invalid window type. Only main windows and subwindows are supported.
   *     2. The two windows are not from the same process.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function shiftAppWindowFocus(sourceWindowId: int, targetWindowId: int): Promise<void>;

  /**
   * ����ϵͳ���ڵĴ��ڲ㼶��ʹ��Promise�첽�ص���
   * 
   * �����и�����ϵͳ����zIndex����Ϊ�����õ�ֵ������ǰ�󣬸����ʹ���֮����Բ㼶���ֲ��䣬���㴰�ڲ������仯����Ӧ�ùر�֮������ʹ��ڲ㼶�ָ�Ĭ��ֵ��
   * 
   * �Ƽ���ͬ���ʹ������ò�ͬ��zIndex������Ѿ�������ͬzIndex�Ĵ��ڣ�����ǰ�󣬴���֮�����Բ㼶���ֲ��䡣
   *
   * @param { WindowType } windowType - �������͡���֧��TYPE_WALLET_SWIPE_CARD��TYPE_VOICE_INTERACTION��TYPE_SCREENSHOT��
   *     TYPE_SCREEN_CONTROL��TYPE_FLOAT_NAVIGATION��TYPE_MUTISCREEN_COLLABORATION��
   * @param { int } zIndex - ϵͳ���ڵĲ㼶���ò�����֧���������룬���������뽫����ȡ����0�͸�����ʹ�������������¡�
   * @returns { Promise<void> } Promise�����޷��ؽ����
   * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause: Invalid window type.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 23 dynamic&static
   */
  function setSpecificSystemWindowZIndex(windowType: WindowType, zIndex: int): Promise<void>;

  /**
   * �����ں��Ӵ��ڿ��������ã����ڽ���������¼���Դ����ת�Ƶ�Ŀ�괰�ڡ�ʹ��Promise�첽�ص���
   * 
   * Դ���ڽ���[onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#ontouch)�¼����¼����ͱ���Ϊ
   * TouchType.Down���Ļص������е��ô˽ӿڲŻ�����������¼�ת��Ч�����ɹ����ô˽ӿں�ϵͳ����Դ���ڲ�����갴��̧��TouchType.Up���¼���������Ŀ�괰�ڲ�����갴�����£�TouchType.Down���¼���
   *
   * @param { int } sourceWindowId - Դ����id���Ƽ�ʹ��
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}������ȡ����id���ԡ�
   * @param { int } targetWindowId - Ŀ�괰��id���Ƽ�ʹ��
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}������ȡ����id���ԡ�
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 401 - Parameter error.
   *     Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Failed to convert parameter to sourceWindowId;
   *     3. Failed to convert parameter to targetWindowId;
   *     4. Invalid sourceWindowId or targetWindowId.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: 1. SourceWindow cannot find: not created or not belong to current process;
   *     2. TargetWindow cannot find: not created or not belong to current process;
   *     3. Internal task error.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   *     Possible cause: 1. Invalid window type. Only main windows and subwindows are supported;
   *     2. The two windows are not from the same process.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function shiftAppWindowPointerEvent(sourceWindowId: int, targetWindowId: int): Promise<void>;

  /**
   * �����ں��Ӵ��ڿ��������ã����ڽ����������¼���Դ����ת�Ƶ�Ŀ�괰�ڡ�ʹ��Promise�첽�ص���
   * 
   * Դ���ڽ���[onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#ontouch)�¼����¼����ͱ���Ϊ
   * TouchType.Down���Ļص������е��ô˽ӿڲŻ��д��������¼�ת��Ч�����ɹ����ô˽ӿں�ϵͳ����Դ���ڲ�������̧��TouchType.Up���¼���������Ŀ�괰�ڲ����������£�TouchType.Down���¼���
   *
   * @param { int } sourceWindowId - Դ����id���Ƽ�ʹ��
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}������ȡ����id���ԡ��ò���ӦΪ����0��������С�ڵ���0ʱ�᷵�ش���
   *     ��1300016��
   * @param { int } targetWindowId - Ŀ�괰��id���Ƽ�ʹ��
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}������ȡ����id���ԡ��ò���ӦΪ����0��������С�ڵ���0ʱ�᷵�ش���
   *     ��1300016��
   * @param { int } fingerId - �����¼�����ָΨһ��ʶ�����Ƽ�ʹ��
   *     [TouchEvent](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#touchevent����˵��)������touches���Ի�ȡ
   *     id���ò���ӦΪ���ڵ���0��������С��0ʱ�᷵�ش�����1300016��
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 801 - Capability not supported.
   *     Function shiftAppWindowTouchEvent can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: 1. SourceWindow cannot find: not created or not belong to current process;
   *     2. TargetWindow cannot find: not created or not belong to current process;
   *     3. Internal task error.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   *     Possible cause: 1. Invalid window type. Only main windows and subwindows are supported;
   *     2. The two windows are not from the same process.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  function shiftAppWindowTouchEvent(sourceWindowId: int, targetWindowId: int, fingerId: int): Promise<void>;

  /**
   * ��ȡ��ǰ��Ļ�Ŀɼ������ڣ�δ������̨�������ڣ���Ϣ��ʹ��Promise�첽�ص���
   *
   * @permission ohos.permission.VISIBLE_WINDOW_INFO [since 18]
   * @returns { Promise<Array<WindowInfo>> } Promise���󣬷��ص�ǰ�ɼ����ڵ������Ϣ��
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   *     Possible cause: Need ohos.permission.VISIBLE_WINDOW_INFO permission. [since 18]
   * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system
   *     API. [since 12 - 17]
   * @throws { BusinessError } 801 - Capability not supported.
   *     Function getVisibleWindowInfo can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use. [since 12 - 17]
   * @publicapi [since 18]
   * @since 12 dynamic
   * @since 23 static
   */
  function getVisibleWindowInfo(): Promise<Array<WindowInfo>>;

  /**
   * ��ȡָ����ǰ̨���ڵ�ǰջ��[Navigation]{@link ./@internal/component/ets/navigation}�е�
   * [NavDestination]{@link ./@internal/component/ets/nav_destination}���ƣ�ʹ��Promise�첽�ص���
   *
   * @param { int } windowId - ����Id������ָ��Ҫ��ѯ�Ĵ��ڡ��ò���ӦΪ����0��������С�ڵ���0ʱ�᷵�ش�����1300016�����ָ���Ĵ��ڲ����ڻ��������ڲ���ǰ̨�����ش�����Ϊ1300002��
   * @returns { Promise<string> } Promise���󡣷��ػ�ȡ����[NavDestination]{@link ./@internal/component/ets/nav_destination}���ơ�
   *     <br>����[Navigation]{@link ./@internal/component/ets/navigation}Ƕ���Լ���ǰҳ����ڶ��
   *     [Navigation]{@link ./@internal/component/ets/navigation}�ĳ�������ѯ���Ǻ󴴽���
   *     [Navigation]{@link ./@internal/component/ets/navigation}����Ϣ��
   *     <br>���ҳ��û��[Navigation]{@link ./@internal/component/ets/navigation}����
   *     [Navigation]{@link ./@internal/component/ets/navigation}��û��
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination}�����ؿ��ַ�����
   * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function getTopNavDestinationName(windowId: int): Promise<string>;

  /**
   * ��ȡָ��������ͬ�ߴ��ͼ��ʹ��Promise�첽�ص�������ǰ��������Ϊ��˽ģʽ����ͨ��
   * [setWindowPrivacyMode]{@link @ohos.window:window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
   * �ӿ����ã�����ͼ���Ϊ������
   *
   * @param { int } windowId - ����Id����ͨ��[getWindowProperties](@link @ohos.window:window.Window.getWindowProperties)
   * �ӿڻ�ȡ����ش������ԣ���������id����ӦΪ����ID��
   * @returns { Promise<image.PixelMap> } - Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: Internal task error.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function getSnapshot(windowId: int): Promise<image.PixelMap>;

  /**
   * ��ѯ��Ӧ��ָ�������µĿɼ��������飬����ǰ���ڲ㼶���У��㼶��ߵĴ��ڶ�Ӧ�����±�Ϊ0��ʹ��Promise�첽�ص���
   *
   * @param { long } displayId - ��ѯ�������ڵ�displayId���ò���ӦΪ�������������������Ե�С�����֣������ڴ�������
   *     [WindowProperties]{@link @ohos.window:window.WindowProperties}�л�ȡ��
   * @param { int } [windowNumber] - ��ѯ�Ĵ����������ò���ӦΪ����0���������������������Ե�С�����֣�δ���û�С�ڵ���0�����������������Ĵ��ڡ�
   * @param { int } [x] - ��ѯ��x���꣬����Ļ���Ͻ�Ϊԭ�㣬�ò���ӦΪ�Ǹ��������������������Ե�С�����֣�δ���û�С��0�������пɼ����ڡ�
   * @param { int } [y] - ��ѯ��y���꣬����Ļ���Ͻ�Ϊԭ�㣬�ò���ӦΪ�Ǹ��������������������Ե�С�����֣�δ���û�С��0�������пɼ����ڡ�
   * @returns { Promise<Array<Window>> } Promise���󡣷��ػ�ȡ���Ĵ��ڶ������顣
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function getWindowsByCoordinate(displayId: long, windowNumber?: int, x?: int, y?: int):
      Promise<Array<Window>>;

  /**
   * ��ȡָ����Ļ�Ͽɼ��Ĵ��ڲ�����Ϣ���飬���з��ص�ÿ��Rect�Ŀ��������Ѿ������ż�����ֵ������ǰ���ڲ㼶���У��㼶��ߵĶ�Ӧ����indexΪ0��ʹ��Promise�첽�ص���
   *
   * @param { long } displayId - ��Ҫ��ȡ���ڲ�����Ϣ��displayId���ò���ӦΪ��������Ϊ��ǰʵ�ʴ�����Ļ��displayId������ͨ����������
   *     [WindowProperties]{@link @ohos.window:window.WindowProperties}��ȡ��
   * @returns { Promise<Array<WindowLayoutInfo>> } Promise���󡣷��ػ�ȡ���Ĵ��ڲ�����Ϣ�������顣
   * @throws { BusinessError } 401 - Parameter error. Possible cause:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Function getAllWindowLayoutInfo can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal. [since 15 - 18]
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function getAllWindowLayoutInfo(displayId: long): Promise<Array<WindowLayoutInfo>>;

  /**
   * ����optionָ���Ĺ���������ȡָ����Ļ�Ͽɼ��Ĵ��ڲ�����Ϣ���飬���з��ص�ÿ��Rect�Ŀ��������Ѿ������ż�����ֵ������ǰ���ڲ㼶���У��㼶��ߵĶ�Ӧ����indexΪ0��ʹ��Promise�첽�ص�����δ����option������
   * ���ֶζ�ΪĬ��ֵʱ����ǰ�ӿ���[getAllWindowLayoutInfo]{@link window.getAllWindowLayoutInfo(displayId: long)}�ȼۡ�
   *
   * @param { long } displayId - ��Ҫ��ȡ���ڲ�����Ϣ��displayId���ò���ӦΪ��������Ϊ��ǰʵ�ʴ�����Ļ��displayId������ͨ����������
   *     [WindowProperties]{@link @ohos.window:window.WindowProperties}��ȡ��
   * @param { WindowInfoOptions } [option] - ����ѡ�����ָ��������Ϣ�Ƿ��ų�ϵͳ������ָ�����ڲ㼶���ͻ���ߵĴ��ڵ���Ϣ��Ĭ�ϲ����ˡ�
   * @returns { Promise<Array<WindowLayoutInfo>> } Promise���󡣷��ػ�ȡ���Ĵ��ڲ�����Ϣ�������顣
   * @throws { BusinessError } 801 - Capability not supported.
   *     Function getAllWindowLayoutInfo can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function getAllWindowLayoutInfo(displayId: long, option?: WindowInfoOptions): Promise<Array<WindowLayoutInfo>>;

  /**
   * ��ȡָ����Ļ����������λ��ǰ̨�Ĵ��ڶ�Ӧ�Ĵ���ģʽ��ʹ��Promise�첽�ص���
   *
   * @param { long } [displayId] - ��ѡ����ĻID�����ڻ�ȡ��Ӧ��Ļ�ϵĴ���ģʽ��Ϣ���ò���ӦΪ���ڵ���0��������С��0ʱ�᷵�ش�����1300016��������ֵΪnull�Լ�undefined�������ѯ����
   *     ��Ļ���������������Ե�С�����֡����ָ������Ļ�����ڣ�����ֵΪ0���Ƽ�ʹ��
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}������ȡ����������ĻID���ԡ�
   * @returns { Promise<int> } Promise���󡣷��ػ�ȡ���Ĵ���ģʽ��ÿһ��������λ����һ�ִ���ģʽ����ǰ֧�ֵĴ���ģʽ��
   *     [GlobalWindowMode]{@link @ohos.window:window.GlobalWindowMode}������ֵΪ��Ӧ����ģʽֵ��λ���л�����Ľ�������磬��ǰ��Ļ�ϴ���ȫ�����ڡ��������ͻ��л����ִ���
   *     ���򷵻�ֵΪ`0b1|0b100|0b1000 = 13`��
   * @throws { BusinessError } 801 - Capability not supported.
   *     function getGlobalWindowMode can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range;
   *     2. The parameter format is incorrect.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function getGlobalWindowMode(displayId?: long): Promise<int>;

  /**
   * ����״̬�������������Ա仯�ļ�����
   *
   * @param { 'systemBarTintChange' } type - �����¼����̶�Ϊ'systemBarTintChange'������������״̬�����Ա仯�¼���
   * @param { Callback<SystemBarTintState> } callback - �ص����������ص�ǰ��״̬������������Ϣ���ϡ�
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function on(type: 'systemBarTintChange', callback: Callback<SystemBarTintState>): void;

  /**
   * ����״̬�������������Ա仯�ļ�����
   *
   * @param { Callback<SystemBarTintState> } callback - �ص����������ص�ǰ��״̬������������Ϣ���ϡ�
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onSystemBarTintChange(callback: Callback<SystemBarTintState>): void;

  /**
   * �ر�״̬�������������Ա仯�ļ�����
   *
   * @param { 'systemBarTintChange' } type - �����¼����̶�Ϊ'systemBarTintChange'������������״̬�����Ա仯�¼���
   * @param { Callback<SystemBarTintState> } [callback] - �ص����������ص�ǰ��״̬������������Ϣ���ϡ�������������
   *     ��رոü��������δ�����������ر�����״̬�������������Ա仯�ļ�����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function off(type: 'systemBarTintChange', callback?: Callback<SystemBarTintState>): void;

  /**
   * �ر�״̬�������������Ա仯�ļ�����
   *
   * @param { Callback<SystemBarTintState> } [callback] - �ص����������ص�ǰ��״̬������������Ϣ���ϡ�������������
   *     ��رոü��������δ�����������ر�����״̬�������������Ա仯�ļ�����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offSystemBarTintChange(callback?: Callback<SystemBarTintState>): void;

  /**
   * �������Ƶ�������״̬�仯�ļ�����
   *
   * @param { 'gestureNavigationEnabledChange' } type - �����¼����̶�Ϊ'gestureNavigationEnabledChange'�������Ƶ�������״̬�仯�¼���
   * @param { Callback<boolean> } callback - �ص����������ص�ǰ���Ƶ���������״̬��true��ʾ���Ƶ���״̬�仯Ϊ���ã�false��ʾ���Ƶ���״̬�仯Ϊ���á�
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'gestureNavigationEnabledChange', callback: Callback<boolean>): void;

  /**
   * �������Ƶ�������״̬�仯�ļ�����
   *
   * @param { Callback<boolean> } callback - �ص����������ص�ǰ���Ƶ���������״̬��true��ʾ���Ƶ���״̬�仯Ϊ���ã�false��ʾ���Ƶ���״̬�仯Ϊ���á�
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onGestureNavigationEnabledChange(callback: Callback<boolean>): void;

  /**
   * �Ƴ����Ƶ�������״̬�仯�ļ�����
   *
   * @param { 'gestureNavigationEnabledChange' } type �����¼����̶�Ϊ'gestureNavigationEnabledChange'�������Ƶ�������״̬�仯�¼���
   * @param { Callback<boolean> } [callback] ��ע��Ļص���������������������رոü��������δ�����������ر��������Ƶ�������״̬�仯�ļ�����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'gestureNavigationEnabledChange', callback?: Callback<boolean>): void;

  /**
   * �Ƴ����Ƶ�������״̬�仯�ļ�����
   *
   * @param { Callback<boolean> } [callback] ��ע��Ļص���������������������رոü��������δ�����������ر��������Ƶ�������״̬�仯�ļ�����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offGestureNavigationEnabledChange(callback?: Callback<boolean>): void;

  /**
   * ����ˮӡ����״̬�仯�ļ�����
   *
   * @param { 'waterMarkFlagChange' } type - �����¼����̶�Ϊ'waterMarkFlagChange'����ˮӡ����״̬�仯�¼���
   * @param { Callback<boolean> } callback - �ص����������ص�ǰˮӡ������״̬��true��ʾ��ǰ������ˮӡ��false��ʾ��ǰδ����ˮӡ��
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'waterMarkFlagChange', callback: Callback<boolean>): void;

  /**
   * ����ˮӡ����״̬�仯�ļ�����
   *
   * @param { Callback<boolean> } callback - �ص����������ص�ǰˮӡ������״̬��true��ʾ��ǰ������ˮӡ��false��ʾ��ǰδ����ˮӡ��
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onWaterMarkFlagChange(callback: Callback<boolean>): void;

  /**
   * �Ƴ�ˮӡ����״̬�仯�ļ�����
   *
   * @param { 'waterMarkFlagChange' } type �����¼����̶�Ϊ'waterMarkFlagChange'����ˮӡ����״̬�仯�¼���
   * @param { Callback<boolean> } [callback] ��ע��Ļص���������������������رոü��������δ�����������ر�����ˮӡ����״̬�仯�ļ�����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
   *     <br>2. Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'waterMarkFlagChange', callback?: Callback<boolean>): void;

  /**
   * �Ƴ�ˮӡ����״̬�仯�ļ�����
   *
   * @param { Callback<boolean> } [callback] ��ע��Ļص���������������������رոü��������δ�����������ر�����ˮӡ����״̬�仯�ļ�����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offWaterMarkFlagChange(callback?: Callback<boolean>): void;

  /**
   * ����Ӧ�ý��̻�״̬�仯�ļ������˼������Ӧ�ü�Ļ�״̬�仯����ͬӦ���ڴ��ڼ�Ļ�״̬�����仯���򲻻ᴥ���ص�������
   *
   * @param { Callback<boolean> } callback - �ص����������ص�ǰӦ�ý��̻�״̬�ı仯��true��ʾ��ǰӦ�ý��̱�Ϊ��״̬��false��ʾ��ǰӦ�ý��̱�Ϊʧ��״̬��
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onApplicationFocusStateChange(callback: Callback<boolean>): void;

  /**
   * �ر�Ӧ�ý��̻�״̬�仯�ļ�����
   *
   * @param { Callback<boolean> } [callback] - Callback used to return the result whether application process
   *     focused or not. If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offApplicationFocusStateChange(callback?: Callback<boolean>): void;

  /**
   * ����ͬһӦ�ð�����ָ��moduleName��abilityName��ӦUIAbility������ҳ����ɫ��ʹ��Promise�첽�ص���
   * 
   * �ýӿڶ�ͬһӦ�ð����µ����н�����Ч�������ʵ����Ӧ�÷���������
   *
   * @param { string } moduleName - ��Ҫ���õ�UIAbility����ģ������moduleName�ĳ��ȷ�ΧΪ0-200�ֽڣ���֧�����õ�ǰͬһӦ�ð����ڵ�ģ�顣ģ�����ɿ�������
   *     [module.json5�����ļ�](docroot://quick-start/module-configuration-file.md#�����ļ���ǩ)�е�name�ֶ�ָ����
   * @param { string } abilityName - ��Ҫ���õ�UIAbility���֣�abilityName�ĳ��ȷ�ΧΪ0-200�ֽڣ���֧�����õ�ǰͬһӦ�ð����ڵ�abilityName��UIAbility���ɿ�����
   *     ��[module.json5�����ļ�abilities��ǩ](docroot://quick-start/module-configuration-file.md#abilities��ǩ)��name�ֶ�ָ����
   * @param { ColorMetrics } color - ���õ�����ҳ����ɫ��
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 801 - Capability not supported.function setStartWindowBackgroundColor can not to work
   *     correctly due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: Parameter exceeds the allowed length.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function setStartWindowBackgroundColor(moduleName: string, abilityName: string, color: ColorMetrics): Promise<void>;

  /**
   * ֪ͨ��Ļ�������¼����ͣ�ʹ��Promise�첽�ص���
   *
   * @param { ScreenshotEventType } eventType - �����¼����͡�
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function notifyScreenshotEvent(eventType: ScreenshotEventType): Promise<void>;

  /**
   * ���û�ȡ����Ӧ�ý����´��ڵ�ˮӡͼƬ��ʹ��Promise�첽�ص����ýӿ���Ҫ��
   * [loadContent()]{@link @ohos.window:window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
   * ��[setUIContent()]{@link @ohos.window:window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ
   * �á�
   *
   * @param {  image.PixelMap | undefined  } pixelMap - ����`image.PixelMap`��ʾ����ˮӡͼƬ������`undefined`��ʾȡ��ˮӡ��ʾ��<br/>���ͼƬ�ߴ�Ŀ��͸�
   *     ͬʱ�������ڳߴ��Լ���Ļ�ߴ�Ŀ��͸ߣ����ش�����1300016��<br/>���ͼƬ�ߴ�Ŀ���߳������ڳߴ�Ŀ���ߣ��������ڿ���ߵĲ��ֻᱻ�ü���<br/>���ͼƬ�ߴ�Ŀ����С�ڴ��ڳߴ�Ŀ���ߣ�С�ڵĲ��ֻ��Զ��ظ�����
   *     ��
   * @returns {  Promise<void>  } �޷��ؽ����Promise����
   * @throws {  BusinessError  } 801 - Capability not supported.
   *     Function setWatermarkImageForAppWindows can not to work correctly due to limited device capabilities.
   * @throws {  BusinessError  } 1300003 - This window manager service works abnormally.
   * @throws {  BusinessError  } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  function setWatermarkImageForAppWindows(pixelMap: image.PixelMap | undefined): Promise<void>;

  /**
   * ��ȡȫ����������Ϣ��ʹ��Promise�첽�ص���
   *
   * @permission ohos.permission.CUSTOM_SCREEN_CAPTURE
   * @returns { Promise<Array<MainWindowInfo>> } Promise���󡣷�����������Ϣ�б���
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  function getAllMainWindowInfo(): Promise<Array<MainWindowInfo>>;

  /**
   * ��ȡһ������ָ��windowId�������ڽ�ͼ��ʹ��Promise�첽�ص���
   *
   * @permission ohos.permission.CUSTOM_SCREEN_CAPTURE
   * @param { Array<int> } windowId - ��Ҫ��ȡ��ͼ��������ID�б�����ͨ��
   *     [window.getAllMainWindowInfo()]{@link window.getAllMainWindowInfo}��ȡ��������windowId����windowIdΪnull��undefined��С��0����
   *     ���ظ�ֵ����������512��ʱ�����ش�����401����windowId����0�������ڶ�Ӧ����ʱ������undefined��
   * @param { WindowSnapshotConfiguration } config - ��ȡ���ڽ�ͼʱ��������Ϣ��
   * @returns { Promise<Array<image.PixelMap | undefined>> } Promise used to return an array of PixelMap objects of the
   *     screenshots, representing the screenshots, in the order of the provided window ID array. If a window ID is
   *     valid but the corresponding main window cannot be found, undefined is returned.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  function getMainWindowSnapshot(windowId: Array<int>, config: WindowSnapshotConfiguration):
    Promise<Array<image.PixelMap | undefined>>;

  /**
   * ��ָ����������Ǩ�Ƶ�ָ������Ļ�ϡ�ʹ��Promise�첽�ص���
   * 
   * - ����[����](docroot://displaymanager/display-terminology.md#����)/
   * [��չ��](docroot://displaymanager/display-terminology.md#��չ��)��
   * [������](docroot://displaymanager/display-terminology.md#������)֮���Լ���������������֮��Ĵ���Ǩ�ƣ������������Ӵ���һ��Ǩ�Ƶ���Ӧ��Ļ���ұ�̧������������Ӵ������ϲ�ɻ���
   * �����ȡ���㣬���������ڻ񽹡�
   * - ������������չ��֮��Ĵ���Ǩ�ƣ�ֻ�Ὣ������Ǩ�Ƶ���Ӧ��Ļ��̧������ȡ���㡣
   * 
   * <!--RP3--><!--RP3End-->
   *
   * @param { long } displayId - Ŀ����Ļ��ID������ָ��ҪǨ�Ƶ�����Ļ���ò���ӦΪ�Ǹ���������ͨ��
   *     [getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}�ӿڻ�ȡ��
   *     [properties]{@link @ohos.window:window.WindowProperties}����ͨ��properties.displayId��ȡ��Ҳ��ͨ����ȡ
   *     [Display]{@link @ohos.display:display.DisplayState}�����
   *     [id](docroot://reference/apis-arkui/js-apis-display.md#����)���Ի�ȡ�˲�����
   * @param { int } windowId - Ŀ�������ڵ�ID������ָ��ҪǨ�ƵĴ��ڡ��ò���ӦΪ����0��������ͨ��
   *     [getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}�ӿڻ�ȡ��
   *     [properties]{@link @ohos.window:window.WindowProperties}����ͨ��properties.id��ȡ��
   * @returns { Promise<void> } - Promise�����޷��ؽ����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: The window is not found or has been destoryed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause: The window is not a main window.
   * @throws { BusinessError } 1300008 - Invalid display. Possible cause:
   *     1. DisplayId is a negative number or not exist.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function moveMainWindowToTargetDisplay(displayId: long, windowId: int): Promise<void>;

  /**
   * ������ʾ��������ö�١�<!--Del-->��ͬö��ֵ֮�������ɲ�ѯ
   * [����Orientationö��ֵ8\~10��12��ö��ֵ13\~16������(API9)](docroot://faqs/faqs-window-manager.md#����orientationö��ֵ810��12��ö��ֵ1316������api9)
   * ��<!--DelEnd-->
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum Orientation {
    /**
     * ��ʾδ���巽��ģʽ����ϵͳ�ж���
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,

    /**
     * ��ʾ������ʾģʽ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    PORTRAIT = 1,

    /**
     * ��ʾ������ʾģʽ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    LANDSCAPE = 2,

    /**
     * ��ʾ����������ʾģʽ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    PORTRAIT_INVERTED = 3,

    /**
     * ��ʾ���������ʾģʽ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    LANDSCAPE_INVERTED = 4,

    /**
     * ���洫�����Զ���ת��������ת��������������������������������ĸ������Ҳ��ܿ������ĵ���ת���ؿ��ơ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION = 5,

    /**
     * ���洫�����Զ�������ת��������ת�������������������޷���ת������������������Ҳ��ܿ������ĵ���ת���ؿ��ơ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_PORTRAIT = 6,

    /**
     * ���洫�����Զ�������ת��������ת������������������޷���ת�������������������Ҳ��ܿ������ĵ���ת���ؿ��ơ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_LANDSCAPE = 7,

    /**
     * ���洫�����Զ���ת��������ת��������������������������������ĸ��������ܿ������ĵ���ת���ؿ��ơ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_RESTRICTED = 8,

    /**
     * ���洫�����Զ�������ת��������ת�������������������޷���ת��������������������ܿ������ĵ���ת���ؿ��ơ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_PORTRAIT_RESTRICTED = 9,

    /**
     * ���洫�����Զ�������ת��������ת������������������޷���ת���������������������ܿ������ĵ���ת���ؿ��ơ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_LANDSCAPE_RESTRICTED = 10,

    /**
     * ��ʾ����ģʽ��������ʾ��������Ļ��ǰ����һ�¡�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    LOCKED = 11,

    /**
     * ���洫�����Զ���ת���ܿ������ĵ���ת���ؿ��ƣ��ҿ���ת������ϵͳ�ж�������ĳ���豸��������ת������������������������������޷���ת��������������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_UNSPECIFIED = 12,

    /**
     * ����ʱ��ʱ��ת��������֮����洫�����Զ���ת���ܿ������ĵ���ת���ؿ��ƣ��ҿ���ת������ϵͳ�ж���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_PORTRAIT = 13,

    /**
     * ����ʱ��ʱ��ת��������֮����洫�����Զ���ת���ܿ������ĵ���ת���ؿ��ƣ��ҿ���ת������ϵͳ�ж���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_LANDSCAPE = 14,

    /**
     * ����ʱ��ʱ��ת������������֮����洫�����Զ���ת���ܿ������ĵ���ת���ؿ��ƣ��ҿ���ת������ϵͳ�ж���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_PORTRAIT_INVERTED = 15,

    /**
     * ����ʱ��ʱ��ת�����������֮����洫�����Զ���ת���ܿ������ĵ���ת���ؿ��ƣ��ҿ���ת������ϵͳ�ж���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_LANDSCAPE_INVERTED = 16,

    /**
     * ��ʾ�����������תģʽ��������������ת�����ת�����治����ת�򲻿���ת��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLLOW_DESKTOP = 17
  }

  /**
   * ������ʾ�����ִ�н��ö�١�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum OrientationExecutionResult {
    /**
     * ���õķ�������Ч��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ORIENTATION_APPLIED = 0,
    /**
     * ���õķ�����Ч��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ORIENTATION_IGNORED = 1,
    /**
     * ���õķ��򱻹��𣬵�ϵͳ���������󣬽���Ч��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ORIENTATION_PENDING = 2
  }

  /**
   * ���ô�����ʾ�����ִ�н����
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface OrientationResult {
    /**
     * ������ʾ�����ִ�н��ö�١�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    executionResult : OrientationExecutionResult;
  }

  /**
   * ������ת�¼����͡�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum RotationChangeType {
    /**
     * ���ڼ�����ת��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    WINDOW_WILL_ROTATE = 0,
    /**
     * ������ת������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    WINDOW_DID_ROTATE = 1
  }

  /**
   * ���ھ�����������ϵ���͡�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum RectType {
    /**
     * ���ھ��������������Ļ����ϵ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RELATIVE_TO_SCREEN  = 0,
    /**
     * ���ھ�����������ڸ���������ϵ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RELATIVE_TO_PARENT_WINDOW = 1
  }

  /**
   * �����¼�����ö�١�
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum ScreenshotEventType {
    /**
     * ϵͳ�����ɹ���
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SCREENSHOT = 0,

    /**
     * ϵͳ������ֹ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SCREENSHOT_ABORT = 1,

    /**
     * ����������ʼ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SCROLL_SHOT_START = 2,

    /**
     * ��������������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SCROLL_SHOT_END = 3,

    /**
     * ����������ֹ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SCROLL_SHOT_ABORT = 4
  }

  /**
   * ��ת��Ϣ����ö�١�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  enum RotationInfoType {
    /**
     * ����������Ļ����ʾ�����Դ���ģ��Ժ������Ķ��巽ʽ��ʾ��
     * 
     * ��������ʹ��ʱ����Ҫע��÷����ʾ[RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo}�е�orientation������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    WINDOW_ORIENTATION = 0,
    /**
     * ��Ļ��ʾ��������Ļģ��Ժ������Ķ��巽ʽ��ʾ��
     * 
     * ��������ʹ��ʱ����Ҫע��÷����ʾ[display]{@link @ohos.display:display.DisplayState}�����orientation���ԡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    DISPLAY_ORIENTATION = 1,
    /**
     * �豸����Ļ˳ʱ����ת�Ƕȡ�
     * 
     * ��������ʹ��ʱ����Ҫע��÷����ʾ[display]{@link @ohos.display:display.DisplayState}�����rotation���ԡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    DISPLAY_ROTATION = 2
  }

  /**
   * ������ת�仯ʱ�Ĵ�����Ϣ��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  interface RotationChangeInfo {
    /**
     * ������ת�¼����͡�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    type: RotationChangeType;
    /**
     * ������ʾ����
     * 
     * - 0��ʾ������
     * - 1��ʾ���������
     * - 2��ʾ����������
     * - 3��ʾ������
     * 
     * ��������ʹ��ʱ����Ҫע��÷�����display���������orientation���岻һ�¡�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    orientation: int;
    /**
     * ����������ĻId��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    displayId: long;
    /**
     * ����������Ļ��ת��ľ��������С��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    displayRect: Rect;
  }

  /**
   * Ӧ���ڴ�����ת�仯ʱ���ص���Ϣ��ϵͳ����ݴ���Ϣ�ı䵱ǰ���ھ��������С����������������ת�仯����Ϣʱ��ϵͳ���ı������ڵĴ�С��
   * 
   * Ӧ�ô�����ϵͳ���ڴ�С�������ƣ�������������ع���ɼ�
   * [resize]{@link @ohos.window:window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  interface RotationChangeResult {
    /**
     * ���ھ�����������ϵ���͡�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    rectType: RectType;
    /**
     * �������Ļ�򸸴�����ϵ�Ĵ��ھ���������Ϣ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    windowRect: Rect;
  }

  /**
   * ��ת�¼�֪ͨͨ�ûص�������
   * 
   * ��������ʹ��ʱ���ص�������������Ϊ[RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo}������ֵ����Ϊ
   * [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult} \| void��
   *
   * @param { T } info - �ص���������ʱϵͳ����[RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo}���͵Ĳ�����
   * @returns { U } �ص�������Ҫ����[RotationChangeResult]{@link @ohos.window:window.RotationChangeResult} | void���͵ķ���ֵ��
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  type RotationChangeCallback<T, U> = (info: T) => U;

  /**
   * ���ڶ����������á�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface WindowAnimationConfig {
    /**
     * �����������͡�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    curve: WindowAnimationCurve;
    /**
     * �������ŵ�ʱ������λ���루ms����
     * 
     * Ĭ��ֵ��0�����ֵ��3000��
     * 
     * ���ݶ����������;����Ƿ���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    duration?: long;
    /**
     * �������߲��������ݶ����������;����Ƿ���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    param?: WindowAnimationCurveParam;
  }

  /**
   * ����ת���������á�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface TransitionAnimation {
    /**
     * ����ת���������á�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    config: WindowAnimationConfig;
    /**
     * ��͸���ȣ�ת���������õĴ������ԣ�ֵΪ0ʱ������ȫ͸����Ĭ��ֵΪ1.0������������ΪWindowTransitionType.DESTROYʱ�����������յ�Ĳ�͸���ȡ�ȡֵ��Χ0~1.0���ڶ�������ʱ�ָ�Ϊ1.0��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    opacity?: double;
  }

  /**
   * ����ģ������ö�١�
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  enum BlurStyle {
    /**
     * ��ʾ�ر�ģ����
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    OFF = 0,
    /**
     * ��ʾ�ϱ���ģ�����͡�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    THIN = 1,
    /**
     * ��ʾ���е�ģ�����͡�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REGULAR = 2,
    /**
     * ��ʾ�Ϻ��ģ�����͡�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    THICK = 3
  }

  /**
   * �����������ڡ�
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  enum WindowEventType {
    /**
     * �е�ǰ̨��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    WINDOW_SHOWN = 1,
    /**
     * ��״̬��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    WINDOW_ACTIVE = 2,
    /**
     * ʧ��״̬��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    WINDOW_INACTIVE = 3,
    /**
     * �е���̨��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    WINDOW_HIDDEN = 4,
    /**
     * �������١�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    WINDOW_DESTROYED = 7
  }

  /**
   * �������ʱ�Ĳ���ö�١�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum MaximizePresentation {
    /**
     * ���ʱ������Ӧ��app��ǰ���õ�ȫ��ģʽ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLLOW_APP_IMMERSIVE_SETTING = 0,
    /**
     * ���ʱ�������ǰ����������ȫ��ģʽ���˳�ȫ��ģʽ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    EXIT_IMMERSIVE = 1,
    /**
     * ���ʱ������ȫ��ģʽ�����Hover����������ʾ���ڱ�������dock����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ENTER_IMMERSIVE = 2,
    /**
     * ���ʱ������ȫ��ģʽ�����Hover�������ϲ���ʾ���ڱ�������dock����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    ENTER_IMMERSIVE_DISABLE_TITLE_AND_DOCK_HOVER = 3
  }

  /**
   * �ڿ��۵���2in1�豸�İ��۵�״̬�£���󻯴���ʱ���ڿ����ٲ���ģʽ�л����Ե�ö�١�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AcrossDisplayPresentation {
    /**
     * ��ʾ���浱ǰ������ٲ���ģʽ�л��Ĳ��ԡ�
     * ���δ���ÿ�����ʾ����Ӧ��Ĭ�ϵ�ϵͳ���ԣ�
     * ���豸����״̬�£����ڽ��뵥�����
     * �������ʱ������ֻ��ʾ����Ļ���ϰ벿�ֻ��°벿�֣���
     * ��չ��״̬�£�������󻯣������ۻ�Ϊ����ʱ�����ٲ�ģʽ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FOLLOW_ACROSS_DISPLAY_SETTING = 0,

    /**
     * ���豸�İ���״̬�£����ڿ���ֱ�ӽ����ٲ�ģʽ��
     * ��չ��״̬�£�������󻯣������ۻ�һ��ʱ�����ٲ�ģʽ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ENTER_ACROSS_DISPLAY_MODE = 1,

    /**
     * ���豸����״̬�£������˳��ٲ�ģʽ�����뵥�����
     * �������ʱ�����ڽ���ʾ����Ļ���ϰ벿�ֻ��°벿�֣���
     * ��չ��״̬�£�������󻯣����½�����ۺ��˳��ٲ�ģʽ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EXIT_ACROSS_DISPLAY_MODE = 2
  }

  /**
   * ��󻯴���ʱ�Ŀ�ѡ���á�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface MaximizeOptions {
    /**
     * �������ʱ�Ĳ��֡�
     *
     * @default MaximizePresentation.ENTER_IMMERSIVE
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maximizePresentation?: MaximizePresentation;

    /**
     * �������������ڵ��ٲ�ģʽ���ԡ�
     * �ò���ֻ���ھ����۵����ܵ�2in1�豸����ȷ���á�
     * ����������豸�����ϵ��ã���û���κ�Ч����
     *
     * @default AcrossDisplayPresentation.FOLLOW_ACROSS_DISPLAY_SETTING
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    acrossDisplayPresentation?: AcrossDisplayPresentation;

    /**
     * ��ͼ��Ч�����á����δָ������ʹ��ϵͳĬ�϶�Ч��
     * ������ʱ����ӳٲ���������Ϊ0ʱ����ʾ��ͼ��Ч��ȡ����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    snapshotAnimationConfig?: WindowSnapshotAnimationConfig;
  }

  /**
   * ����ģʽ��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum GlobalWindowMode {
    /**
     * ȫ�����ڣ������ƴ������󣬵�һ��������λΪ1��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FULLSCREEN = 1,

    /**
     * �������ڣ������ƴ������󣬵ڶ���������λΪ1��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SPLIT = 1 << 1,

    /**
     * �������������ƴ������󣬵�����������λΪ1��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FLOAT = 1 << 2,

    /**
     * ���л��������ƴ������󣬵��ĸ�������λΪ1��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    PIP = 1 << 3
  }

  /**
   * �����ƶ�ѡ�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface MoveConfiguration {
    /**
     * Ŀ����ĻID���ò���ӦΪ���������������ʱ������ȡ����Ĭ��ֵΪundefined������ò���ʱ�����ƶ��������Ŀ����Ļ���Ͻǵ�ָ��λ�á��˲�����������undefined����Ŀ����ĻID������ʱ�����ƶ�������ڵ�ǰ��Ļ���Ͻǵ�
     * ָ��λ�á�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    displayId?: long;
  }

  /**
   * ��ǰ֧����ʾ�����ص�ϵͳ�����͡�
   *
   * @unionmember { 'status' } Status bar.
   * @unionmember { 'navigation' } <!--RP13--><!--RP13End-->Three-button navigation bar.
   * @unionmember { 'navigationIndicator' } Bottom navigation bar. <!--RP12-->OpenHarmony devices do not support this
   *     capability.<!--RP12End-->
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  type SpecificSystemBar = 'status' | 'navigation'| 'navigationIndicator';

  /**
   * �����������ã�����ȫ��Ӧ����Ч��
   * 
   * ��ͬӦ�ü���ת��������Ч���Ա���ϵͳĬ�϶�Ч��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface StartAnimationSystemParams {
    /**
     * ���ڶ������͡�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    type: AnimationType;
    /**
     * ���ڶ����������á�Ĭ�϶�������ΪWindowAnimationCurve.LINEAR��durationΪ0��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    animationConfig?: WindowAnimationConfig;
  }

  /**
   * �����������á�
   * 
   * ����ͬӦ�õĲ�ͬability����ת��Ч��
   * 
   * ����ȫ��Ӧ����Ч��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface StartAnimationParams {
    /**
     * The type of window animation
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    type: AnimationType;
  }

  /**
   * Ӧ������ʱ�Ĵ��ڲ������á�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface WindowCreateParams {
    /**
     * The params of start animation
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    animationParams?: StartAnimationParams;
    /**
     * �����������ã�����ȫ��Ӧ����Ч��
     * 
     * ��ͬӦ�ü���ת��������Ч���Ա���ϵͳĬ�϶�Ч��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    systemAnimationParams?: StartAnimationSystemParams;
    /**
     * ��������ʱ�Ƿ���Ҫ����
     *
     * Ĭ�ϸ����Ʒ���ã�����PC�豸����������Ĭ���ж�����Phone�������Ӵ�Ĭ���޶���������Ʒ֧�����ã����濪�������õ�ֵ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    needAnimation?: boolean;

    /**
     * �Ƿ񸲸�ϵͳ���ڳߴ����ơ�
     * ���Ϊtrue����ǰ�����ڿ������ó���ϵͳ���ƵĴ��ڳߴ����ơ�
     *
     * @default false
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isWindowLimitsForcible?: boolean;
  }

  /**
   * ���ڽ�ͼ��Ч�����á�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface WindowSnapshotAnimationConfig {
    /**
     * ���ڽ�ͼ������Ч�ĳ���ʱ�䣨���룩��
     * ���δָ������ò���Ĭ��Ϊ��ϵͳ��Ч������ȷ����ֵ��
     * ����״̬��WindowStatusType.FLOING��WindowStatusType.FULLSCREEN֮��ת��Ϊ250��
     * 400����������������Ļ��ͼ��Ч������
     * �˲�������Ч��ΧΪ0-400��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    duration?: long;

    /**
     * ���ڽ�ͼ������Ч��ʼǰ���ӳ�ʱ�䣨���룩��
     * ���δָ������ò���Ĭ��Ϊ��ϵͳ��Ч������ȷ����ֵ��
     * ����״̬��WindowStatusType.FLOATING��WindowStatusType.FULLSCREEN֮��ת��Ϊ50��
     * 350����������������ͼ��Ч������
     * �˲�������Ч��ΧΪ0-350��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    delay?: long;
  }

  /**
   * �����̴�����Ϣ��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface KeyboardInfo {
    /**
     * ������ʼǰ�����̵�λ�úʹ�С��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    beginRect: Rect;

    /**
     * ���������������̵�λ�úʹ�С��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    endRect: Rect;
    /**
     * ��ǰ�Ƿ�����ʾ/���ض�����true��ʾ�ж�����false��ʾû�С�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    animated?: boolean;
    /**
     * ����������Ϣ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    config?: WindowAnimationConfig;
  }

  /**
   * �ؼ�֡�Ĳ������á�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface KeyFramePolicy {
    /**
     * �Ƿ����ؼ�֡��true��ʾ������false��ʾ�رա�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    enable: boolean;

    /**
     * ���ùؼ�֡�����л�����קʱ��������λΪ���룬Ĭ��ֵΪ1000��ȡֵΪ������������������ȡ������distance�ж�Ϊ��Ĺ�ϵ��������һ����ʼ�����л���
     *
     * @default 1000
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    interval?: long;

    /**
     * ���ùؼ�֡�����л�����ק����������λΪpx��Ĭ��ֵΪ1000��ȡֵΪ0��������������������ȡ��������Ϊ0ʱ��������ק�������ء���interval�ж�Ϊ��Ĺ�ϵ��������һ����ʼ�����л���
     *
     * @default 1000
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    distance?: int;

    /**
     * ���ùؼ�֡���ֵĶ�Ч�л�ʱ�䣬��λΪ���룬Ĭ��ֵΪ100��ȡֵΪ0��������������������ȡ����
     *
     * @default 100
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    animationDuration?: long;

    /**
     * ���ùؼ�֡�����л���Ч�ӳ�ʱ�䣬��λΪ���룬Ĭ��ֵΪ100��ȡֵΪ0��������������������ȡ����
     *
     * @default 100
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    animationDelay?: long;
  }

  /**
   * ��ǰ����ʵ�������ڹ����������Ļ�����Ԫ��
   * 
   * ����APIʾ���ж�����ʹ��
   * [getLastWindow()]{@link @ohos.window:window.getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>)}��
   * [createWindow()]{@link @ohos.window:window.createWindow(config: Configuration, callback: AsyncCallback<Window>)}��
   * [findWindow()]{@link @ohos.window:window.findWindow}�е���һ������ȡ��Windowʵ����windowClass������ͨ����ʵ�����ö�Ӧ������
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface Window {
    /**
     * ���ص�ǰ���ڣ�ʹ��callback�첽�ص�����֧��ϵͳ������Ӧ���Ӵ��ڡ�
     *
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    hide (callback: AsyncCallback<void>): void;

    /**
     * ���ص�ǰ���ڣ�ʹ��Promise�첽�ص�����֧��ϵͳ������Ӧ���Ӵ��ڡ�
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    hide(): Promise<void>;

    /**
     * ���ص�ǰ���ڣ������в��Ŷ�����ʹ��callback�첽�ص�����֧��ϵͳ���ڡ�
     *
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only system windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    hideWithAnimation(callback: AsyncCallback<void>): void;

    /**
     * ���ص�ǰ���ڣ������в��Ŷ�����ʹ��Promise�첽�ص�����֧��ϵͳ���ڡ�
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only system windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    hideWithAnimation(): Promise<void>;

    /**
     * ��ʾ��ǰ���ڣ�ʹ��callback�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [showWindow()]{@link window.Window.showWindow(callback: AsyncCallback<void>)}�����
     *
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.showWindow(callback: AsyncCallback<void>)
     */
    show(callback: AsyncCallback<void>): void;

    /**
     * ��ʾ��ǰ���ڣ�ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��[showWindow()]{@link window.Window.showWindow()}�����
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.showWindow()
     */
    show(): Promise<void>;

    /**
     * ��ʾ��ǰ���ڣ�ʹ��callback�첽�ص���֧��ϵͳ���ڡ�Ӧ���Ӵ��ڡ�ģ̬����ȫ����������������ʾ��Ӧ�������ڲ㼶������������
     * 
     * > **˵����**
     * >
     * > ���øýӿ�ǰ��������ͨ��[loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)��������
     * > [setUIContent]{@link @ohos.window:window.Window.setUIContent(path: string)}�������ҳ����ء����Ӧ��������û�����ҳ����أ�ֱ�ӵ��øýӿڣ������
     * > һֱ��ʾ�������棻���ϵͳ���ڡ�Ӧ���Ӵ��ڡ�ģ̬����ȫ��������û�����ҳ����أ�ֱ�ӵ��øýӿڣ����ڻᴦ��ǰ̨�������ɼ���
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    showWindow(callback: AsyncCallback<void>): void;

    /**
     * ��ʾ��ǰ���ڣ�ʹ��Promise�첽�ص���֧��ϵͳ���ڡ�Ӧ���Ӵ��ڡ�ģ̬����ȫ����������������ʾ��Ӧ�������ڲ㼶������������
     * 
     * > **˵����**
     * >
     * > ���øýӿ�ǰ����������ͨ��[loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)��������
     * > [setUIContent]{@link @ohos.window:window.Window.setUIContent(path: string)}�������ҳ����ء����Ӧ��������û�����ҳ����أ�ֱ�ӵ��øýӿڣ������
     * > һֱ��ʾ�������棻���ϵͳ���ڡ�Ӧ���Ӵ��ڡ�ģ̬����ȫ��������û�����ҳ����أ�ֱ�ӵ��øýӿڣ����ڻᴦ��ǰ̨�������ɼ���
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    showWindow(): Promise<void>;

    /**
     * ��ʾ��ǰ���ڻ�����ʾ��Ӧ�������ڵĲ㼶������������֧�ִ�����������ƴ�����ʾ����Ϊ��ʹ��Promise�첽�ص���
     * 
     * ��֧�ֳ�TYPE_DIALOG���͵Ĵ��ں�ģ̬�Ӵ��ڣ���ʹ��setSubWindowModal�������Ӵ���ģ̬���ԣ�֮���Ӧ���Ӵ��ڡ�Ӧ��������ȫ���������Լ�ϵͳ���ڡ�
     * 
     * > **˵����**
     * >
     * > ���øýӿ�ǰ����������ͨ��[loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)��������
     * > [setUIContent]{@link @ohos.window:window.Window.setUIContent(path: string)}�������ҳ����ء����Ӧ��������û�����ҳ����أ�ֱ�ӵ��øýӿڣ������
     * > һֱ��ʾ�������棻���ϵͳ���ڡ�Ӧ���Ӵ��ں�ȫ��������û�����ҳ����أ�ֱ�ӵ��øýӿڣ����ڻᴦ��ǰ̨�������ɼ���
     *
     * @param { ShowWindowOptions } options - ��ʾ�Ӵ��ڻ�ϵͳ����ʱ�Ĳ�����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported. Function showWindow can not work correctly due to
     *     limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Modal subwindow and dialog window can not set focusOnShow.
     * @throws { BusinessError } 1300016 - Parameter validation error. Possible cause: 1. The value of the parameter is
     *     out of the allowed range;
     *     2. The length of the parameter exceeds the allowed length;
     *     3. The parameter format is incorrect.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    showWindow(options: ShowWindowOptions): Promise<void>;

    /**
     * ��ʾ��ǰ���ڣ������в��Ŷ�����ʹ��callback�첽�ص�����֧��ϵͳ���ڡ�
     *
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only system windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    showWithAnimation(callback: AsyncCallback<void>): void;

    /**
     * ��ʾ��ǰ���ڣ������в��Ŷ�����ʹ��Promise�첽�ص�����֧��ϵͳ���ڡ�
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only system windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    showWithAnimation(): Promise<void>;

    /**
     * ���ٵ�ǰ���ڣ�ʹ��callback�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [destroyWindow()]{@link window.Window.destroyWindow(callback: AsyncCallback<void>)}�����
     *
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.destroyWindow(callback: AsyncCallback<void>)
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
     * ���ٵ�ǰ���ڣ�ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��[destroyWindow()]{@link window.Window.destroyWindow()}�����
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.destroyWindow()
     */
    destroy(): Promise<void>;

    /**
     * ���ٵ�ǰ���ڣ�ʹ��callback�첽�ص���֧��ϵͳ���ڼ�Ӧ���Ӵ��ڣ�ȫ����������ģ̬����
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    destroyWindow(callback: AsyncCallback<void>): void;

    /**
     * ���ٵ�ǰ���ڣ�ʹ��Promise�첽�ص���֧��ϵͳ���ڼ�Ӧ���Ӵ��ڣ�ȫ����������ģ̬����
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    destroyWindow(): Promise<void>;

    /**
     * �ƶ�����λ�ã�ʹ��Promise�첽�ص���
     * 
     * ȫ��ģʽ���ڲ�֧�ָò�����
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��[moveWindowTo()]{@link window.Window.moveWindowTo(x: int, y: int)}�����
     *
     * @param { number } x - ������x�᷽���ƶ���������λ�ã���λΪpx��ֵΪ����ʾλ����x���ҲֵࣻΪ����ʾλ����x����ֵࣻΪ0��ʾλ����x������ԭ�㡣�ò�����֧���������룬���������뽫����ȡ����
     * @param { number } y - ������y�᷽���ƶ���������λ�ã���λΪpx��ֵΪ����ʾλ����y���²ֵࣻΪ����ʾλ����y���ϲֵࣻΪ0��ʾλ����y������ԭ�㡣�ò�����֧���������룬���������뽫����ȡ����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.moveWindowTo(x: int, y: int)
     */
    moveTo(x: number, y: number): Promise<void>;

    /**
     * �ƶ�����λ�ã�ʹ��callback�첽�ص���
     * 
     * ȫ��ģʽ���ڲ�֧�ָò�����
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [moveWindowTo()]{@link window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)}�����
     *
     * @param { number } x - ������x�᷽���ƶ���������λ�ã���λΪpx��ֵΪ����ʾλ����x���ҲֵࣻΪ����ʾλ����x����ֵࣻΪ0��ʾλ����x������ԭ�㡣�ò�����֧���������룬���������뽫����ȡ����
     * @param { number } y - ������y�᷽���ƶ���������λ�ã���λΪpx��ֵΪ����ʾλ����y���²ֵࣻΪ����ʾλ����y���ϲֵࣻΪ0��ʾλ����x������ԭ�㡣�ò�����֧���������룬���������뽫����ȡ����
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)
     */
    moveTo(x: number, y: number, callback: AsyncCallback<void>): void;

    /**
     * �ƶ�����λ�ã�ʹ��Promise�첽�ص������óɹ������أ������غ��޷�������ȡ������Ч���������������ȡ����ʹ��
     * [moveWindowToAsync()]{@link window.Window.moveWindowToAsync(x: int, y: int)}��
     * 
     * > **˵����**
     * >
     * > - �������ڳ�������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING��WindowStatusType��ͨ��
     * > [getWindowStatus()]{@link window.Window.getWindowStatus}��ȡ�������������ģʽ��ʹ�á�
     * >
     * > - ��[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£������������Ļ���϶����ƶ����ڷ����ɴ���״̬�£���������ڸ��������϶����ƶ���
     * >
     * > - �����ڷ����ɴ���״̬��ʵ���������Ļ���϶�����ƶ�����ʹ��
     * > [moveWindowToGlobal()]{@link window.Window.moveWindowToGlobal(x: int, y: int, moveConfiguration?: MoveConfiguration)}
     * > ��
     * >
     * > - �÷����Է����ɴ���״̬�µ���������Ч��
     * >
     * > - [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£��������ڻ��Ӵ��ڵı������Ƴ���Ļ��������ϵͳ���Զ��ص����ڣ�ȷ�����������ֿɼ���
     *
     * @param { int } x - ������x�᷽���ƶ���������λ�ã���λΪpx��ֵΪ����ʾ��ԭ���Ҳֵ࣬Ϊ����ʾ��ԭ����ࡣ�ò�����֧���������룬���������뽫����ȡ����
     * @param { int } y - ������y�᷽���ƶ���������λ�ã���λΪpx��ֵΪ����ʾ��ԭ���·���ֵΪ����ʾ��ԭ���Ϸ����ò�����֧���������룬���������뽫����ȡ����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    moveWindowTo(x: int, y: int): Promise<void>;

    /**
     * �ƶ�����λ�ã�ʹ��callback�첽�ص������óɹ������أ������غ��޷�������ȡ������Ч���������������ȡ����ʹ��
     * [moveWindowToAsync()]{@link window.Window.moveWindowToAsync(x: int, y: int)}��
     * 
     * > **˵����**
     * >
     * > - �������ڳ�������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING��WindowStatusType��ͨ��
     * > [getWindowStatus()]{@link window.Window.getWindowStatus}��ȡ�������������ģʽ��ʹ�á�
     * >
     * > - ��[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£������������Ļ���϶����ƶ����ڷ����ɴ���״̬�£���������ڸ��������϶����ƶ���
     * >
     * > - �����ڷ����ɴ���״̬��ʵ���������Ļ���϶�����ƶ�����ʹ��
     * > [moveWindowToGlobal()]{@link window.Window.moveWindowToGlobal(x: int, y: int, moveConfiguration?: MoveConfiguration)}
     * > ��
     * >
     * > - �÷����Է����ɴ���״̬�µ���������Ч��
     * >
     * > - [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£��������ڻ��Ӵ��ڵı������Ƴ���Ļ��������ϵͳ���Զ��ص����ڣ�ȷ�����������ֿɼ���
     *
     * @param { int } x - ������x�᷽���ƶ���������λ�ã���λΪpx��ֵΪ����ʾ��ԭ���Ҳֵ࣬Ϊ����ʾ��ԭ����ࡣ
     *     �ò�����֧���������룬���������뽫����ȡ����
     * @param { int } y - ������y�᷽���ƶ���������λ�ã���λΪpx��ֵΪ����ʾ��ԭ���·���ֵΪ����ʾ��ԭ���Ϸ���
     *     �ò�����֧���������룬���������뽫����ȡ����
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    moveWindowTo(x: int, y: int, callback: AsyncCallback<void>): void;

    /**
     * �ƶ�����λ�ã�ʹ��Promise�첽�ص���������Ч�󷵻أ��ص��п�ʹ��[getWindowProperties()]{@link window.Window.getWindowProperties}����ʾ����������ȡ������Ч��
     * ����
     * 
     * �ýӿڽ��ڴ���Ϊ������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING������ģʽ��ͨ��
     * [getWindowStatus()]{@link window.Window.getWindowStatus}��ȡ��ʱ������Ч������������ģʽ�µ��÷��ش�����1300010�����롣
     * 
     * ��������������ģʽ�£���ͬ���ʹ��ڵ��ƶ���Ϊ���£�
     * 
     * | �������� | [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬ | �����ɴ���״̬ |
     * |---------|---------------|-----------------|
     * | ������ | �������Ļ�ƶ� | ���ò���Ч������ |
     * | Ӧ���Ӵ���/ģ̬�� | �������Ļ�ƶ� | ������������ƶ� |
     * | ϵͳ����/ȫ�������� | �������Ļ�ƶ� | �������Ļ�ƶ� |
     * 
     * > **˵����**
     * >
     * > - [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£��������ڻ��Ӵ��ڵı������Ƴ���Ļ��������ϵͳ���Զ��ص����ڣ�ȷ�����������ֿɼ���
     *
     * @param { int } x - ������x�᷽���ƶ���������λ�ã���λΪpx��ֵΪ����ʾλ����x���ҲֵࣻΪ����ʾλ����x����ࣻ
     *     ֵΪ0��ʾλ����x������ԭ�㡣�ò�����֧���������룬���������뽫����ȡ����
     * @param { int } y - ������y�᷽���ƶ���������λ�ã���λΪpx��ֵΪ����ʾλ����y���²ֵࣻΪ����ʾλ����y���ϲࣻ
     *     ֵΪ0��ʾλ����y������ԭ�㡣�ò�����֧���������룬���������뽫����ȡ����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *     2. The window type is not supported for this operation.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    moveWindowToAsync(x: int, y: int): Promise<void>;

    /**
     * �ƶ�����λ�ã�֧������moveConfiguration����ָ�������ƶ���Ŀ����ĻID��ʹ��Promise�첽�ص���������Ч�󷵻أ��ص��п�ʹ��
     * [getWindowProperties()]{@link window.Window.getWindowProperties}����ʾ����������ȡ������Ч�����
     * 
     * �ýӿڽ��ڴ���Ϊ������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING������ģʽ��ͨ��
     * [getWindowStatus()]{@link window.Window.getWindowStatus}��ȡ��ʱ������Ч������������ģʽ�µ��÷��ش�����1300010�����롣
     * 
     * ��������������ģʽ�£���ͬ���ʹ��ڵ��ƶ���Ϊ���£�
     * 
     * | �������� | [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬ | �����ɴ���״̬ |
     * |---------|---------------|-----------------|
     * | ������ | �������Ļ�ƶ� | ���ò���Ч������ |
     * | Ӧ���Ӵ���/ģ̬�� | �������Ļ�ƶ� | ������������ƶ� |
     * | ϵͳ����/ȫ�������� | �������Ļ�ƶ� | �������Ļ�ƶ� |
     * 
     * > **˵����**
     * >
     * > - [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£��������ڻ��Ӵ��ڵı������Ƴ���Ļ��������ϵͳ���Զ��ص����ڣ�ȷ�����������ֿɼ���
     *
     * @param { int } x - ������x�᷽���ƶ���ֵ��ֵΪ����ʾ���ƣ���λΪpx���ò���Ӧ��Ϊ���������������뽫����ȡ����
     * @param { int } y - ������y�᷽���ƶ���ֵ��ֵΪ����ʾ���ƣ���λΪpx���ò���Ӧ��Ϊ���������������뽫����ȡ����
     * @param { MoveConfiguration } [moveConfiguration] - �����ƶ�ѡ�δ���ý�Ĭ�ϱ���Ϊ��ǰ��Ļ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *     2. The window type is not supported for this operation.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    moveWindowToAsync(x: int, y: int, moveConfiguration?: MoveConfiguration): Promise<void>;

    /**
     * ������Ļ�����ƶ�����λ�ã�ʹ��Promise�첽�ص���������Ч�󷵻أ��ص��п�ʹ��[getWindowProperties()]{@link window.Window.getWindowProperties}����ʾ����������
     * ȡ������Ч�����
     * 
     * �ýӿڽ��ڴ���Ϊ������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING������ģʽ��ͨ��
     * [getWindowStatus()]{@link window.Window.getWindowStatus}��ȡ��ʱ������Ч������������ģʽ�µ��÷��ش�����1300010�����롣
     * 
     * > **˵����**
     * >
     * > - ��������������������ģʽʱ���ڷ�[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�µ��ò���Ч��������
     * >
     * > - [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£��������ڻ��Ӵ��ڵı������Ƴ���Ļ��������ϵͳ���Զ��ص����ڣ�ȷ�����������ֿɼ���
     *
     * @param { int } x - ��ʾ����Ļ���Ͻ�Ϊ��㣬������x�᷽���ƶ���ֵ����λΪpx��ֵΪ����ʾ���ƣ�ֵΪ����ʾ���ơ�
     *     �ò�����֧���������룬���������뽫����ȡ����
     * @param { int } y - ��ʾ����Ļ���Ͻ�Ϊ��㣬������y�᷽���ƶ���ֵ����λΪpx��ֵΪ����ʾ���ƣ�ֵΪ����ʾ���ơ�
     *     �ò�����֧���������룬���������뽫����ȡ����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *     2. The window type is not supported for this operation.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    moveWindowToGlobal(x: int, y: int): Promise<void>;

    /**
     * ������Ļ�����ƶ�����λ�ã�֧������moveConfiguration����ָ�������ƶ���Ŀ����ĻID��ʹ��Promise�첽�ص���������Ч�󷵻أ��ص��п�ʹ��
     * [getWindowProperties()]{@link window.Window.getWindowProperties}����ʾ����������ȡ������Ч�����
     * 
     * �ýӿڽ��ڴ���Ϊ������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING������ģʽ��ͨ��
     * [getWindowStatus()]{@link window.Window.getWindowStatus}��ȡ��ʱ������Ч������������ģʽ�µ��÷��ش�����1300010�����롣
     * 
     * > **˵����**
     * >
     * > - ��������������������ģʽʱ���ڷ�[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�µ��ò���Ч��������
     * >
     * > - [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£��������ڻ��Ӵ��ڵı������Ƴ���Ļ��������ϵͳ���Զ��ص����ڣ�ȷ�����������ֿɼ���
     *
     * @param { int } x - ��ʾ��Ŀ����Ļ���Ͻ�Ϊ��㣬������x�᷽���ƶ���ֵ����λΪpx��ֵΪ����ʾ���ƣ�ֵΪ����ʾ���ơ�
     *     �ò���Ӧ��Ϊ���������������뽫����ȡ����
     * @param { int } y - ��ʾ��Ŀ����Ļ���Ͻ�Ϊ��㣬������y�᷽���ƶ���ֵ����λΪpx��ֵΪ����ʾ���ƣ�ֵΪ����ʾ���ơ�
     *     �ò���Ӧ��Ϊ���������������뽫����ȡ����
     * @param { MoveConfiguration } [moveConfiguration] - �����ƶ�ѡ�δ���ý�Ĭ�ϱ���Ϊ��ǰ��Ļ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *     2. The window type is not supported for this operation.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    moveWindowToGlobal(x: int, y: int, moveConfiguration?: MoveConfiguration): Promise<void>;

    /**
     * ����[ȫ������ϵ](docroot://windowmanager/window-terminology.md#ȫ������ϵ)�ƶ�����λ�ã�ʹ��Promise�첽�ص���
     * 
     * �ýӿڽ��ڴ���Ϊ������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING������ģʽ��ͨ��
     * [getWindowStatus()]{@link window.Window.getWindowStatus}��ȡ��ʱ������Ч������������ģʽ�µ��÷��ش�����1300010�����롣
     * 
     * > **˵����**
     * >
     * > - ��������������������ģʽʱ���ڷ�[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�µ��ò���Ч��������
     * >
     * > - �����ƶ���������ڿ�Խ�����Ļ�����ڽ������������ص����������Ļ��
     * >
     * > - [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£��������ڻ��Ӵ��ڵı������Ƴ���Ļ��������ϵͳ���Զ��ص����ڣ�ȷ�����������ֿɼ���
     *
     * @param { int } x - ��ʾ������Ļ���Ͻ�Ϊ��㣬������x�᷽���ƶ���ֵ����λΪpx��ֵΪ����ʾ���ƣ�ֵΪ����ʾ���ơ�
     *     �ò���Ӧ��Ϊ���������������뽫����ȡ����
     * @param { int } y - ��ʾ������Ļ���Ͻ�Ϊ��㣬������y�᷽���ƶ���ֵ����λΪpx��ֵΪ����ʾ���ƣ�ֵΪ����ʾ���ơ�
     *     �ò���Ӧ��Ϊ���������������뽫����ȡ����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    moveWindowToGlobalDisplay(x: int, y: int): Promise<void>;

    /**
     * ���ڴ������ϽǶ���ı䵱ǰ���ڴ�С��ʹ��Promise�첽�ص���
     * 
     * Ӧ�����������Ӵ��ڴ��ڴ�С���ƣ�Ĭ�Ͽ��ȷ�Χ��[320, 1920]��Ĭ�ϸ߶ȷ�Χ��[240, 1920]����λΪvp��
     * 
     * Ӧ�����������Ӵ��ڵ���С��������С�߶ȿ��ɲ�Ʒ�˽������ã����ú����С��������С�߶��Բ�Ʒ������ֵΪ׼������ߴ����Ʒ�Χ����ͨ��
     * [getWindowLimits]{@link window.Window.getWindowLimits}�ӿڽ��в�ѯ��
     * 
     * ϵͳ���ڴ��ڴ�С���ƣ����ȷ�Χ��(0, 1920]���߶ȷ�Χ��(0, 1920]����λΪvp��
     * 
     * ���õĿ�����߶��ܵ�������Լ��������
     * 
     * �������õĴ��ڿ�/�߳ߴ�С�ڴ�����С��/������ֵ���򴰿���С��/������ֵ��Ч��
     * 
     * �������õĴ��ڿ�/�߳ߴ���ڴ�������/������ֵ���򴰿�����/������ֵ��Ч��
     * 
     * ȫ��ģʽ���ڲ�֧�ָò�����
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��[resize()]{@link window.Window.resize(width: int, height: int)}�����
     *
     * @param { number } width - ��ǰ���ڵ�Ŀ����ȣ���λΪpx���ò�����֧���������룬���������뽫����ȡ������ֵΪ�Ƿ��������׳�������
     *     [401](docroot://reference/errorcode-universal.md#401-�������ʧ��)����
     * @param { number } height - ��ǰ���ڵ�Ŀ��߶ȣ���λΪpx���ò�����֧���������룬���������뽫����ȡ������ֵΪ�Ƿ��������׳�������
     *     [401](docroot://reference/errorcode-universal.md#401-�������ʧ��)����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.resize(width: int, height: int)
     */
    resetSize(width: number, height: number): Promise<void>;

    /**
     * ���ڴ������ϽǶ���ı䵱ǰ���ڴ�С��ʹ��callback�첽�ص���
     * 
     * Ӧ�����������Ӵ��ڴ��ڴ�С���ƣ�Ĭ�Ͽ��ȷ�Χ��[320, 1920]��Ĭ�ϸ߶ȷ�Χ��[240, 1920]����λΪvp��
     * 
     * Ӧ�����������Ӵ��ڵ���С��������С�߶ȿ��ɲ�Ʒ�˽������ã����ú����С��������С�߶��Բ�Ʒ������ֵΪ׼������ߴ����Ʒ�Χ����ͨ��
     * [getWindowLimits]{@link window.Window.getWindowLimits}�ӿڽ��в�ѯ��
     * 
     * ϵͳ���ڴ��ڴ�С���ƣ����ȷ�Χ��(0, 1920]���߶ȷ�Χ��(0, 1920]����λΪvp��
     * 
     * ���õĿ�����߶��ܵ�������Լ��������
     * 
     * �������õĴ��ڿ�/�߳ߴ�С�ڴ�����С��/������ֵ���򴰿���С��/������ֵ��Ч��
     * 
     * �������õĴ��ڿ�/�߳ߴ���ڴ�������/������ֵ���򴰿�����/������ֵ��Ч��
     * 
     * ȫ��ģʽ���ڲ�֧�ָò�����
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [resize()]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}�����
     *
     * @param { number } width - ��ǰ���ڵ�Ŀ����ȣ���λΪpx���ò�����֧���������룬���������뽫����ȡ������ֵΪ�Ƿ��������׳�������
     *     [401](docroot://reference/errorcode-universal.md#401-�������ʧ��)����
     * @param { number } height - ��ǰ���ڵ�Ŀ��߶ȣ���λΪpx���ò�����֧���������룬���������뽫����ȡ������ֵΪ�Ƿ��������׳�������
     *     [401](docroot://reference/errorcode-universal.md#401-�������ʧ��)����
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)
     */
    resetSize(width: number, height: number, callback: AsyncCallback<void>): void;

    /**
     * ���ڴ������ϽǶ���ı䵱ǰ���ڴ�С��ʹ��Promise�첽�ص���
     * 
     * ���óɹ������أ��ýӿڷ��غ��޷�������ȡ������Ч���������������ȡ������ʹ�ýӿ�[resizeAsync()]{@link window.Window.resizeAsync}��
     * 
     * ���ڴ��ڴ�С����[WindowLimits]{@link @ohos.window:window.WindowLimits}������ߴ����Ʒ�Χ����ͨ��
     * [getWindowLimits]{@link window.Window.getWindowLimits}�ӿڽ��в�ѯ��
     * 
     * ���øýӿ����õĿ�����߶��ܵ�������Լ��������
     * 
     * �������õĴ��ڿ�/�߳ߴ�С�ڴ�����С��/������ֵ���򴰿���С��/������ֵ��Ч��ϵͳ���ں�ȫ��������������Сֵ���ܴ�����С��/������ֵ���ƣ�
     * 
     * �������õĴ��ڿ�/�߳ߴ���ڴ�������/������ֵ���򴰿�����/������ֵ��Ч��
     * 
     * �ýӿڽ��ڴ���Ϊ������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING������ģʽ��ͨ��
     * [getWindowStatus()]{@link window.Window.getWindowStatus}��ȡ��ʱ������Ч������������ģʽ�µ��÷���1300002�����롣
     * 
     * > **˵����**
     * >
     * > - �����ڴ���������������ģʽʱ���ڷ�[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�µ��ò���������Ч��
     *
     * @param { int } width - ��ǰ���ڵ�Ŀ����ȣ���λΪpx���ò�����֧���������룬���������뽫����ȡ����
     *     ��ֵΪ�Ƿ��������׳�������401����
     * @param { int } height - ��ǰ���ڵ�Ŀ��߶ȣ���λΪpx���ò�����֧���������룬���������뽫����ȡ����
     *     ��ֵΪ�Ƿ��������׳�������401����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error;
     *     3. Invalid window status type. Only supports windows in floating window mode.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    resize(width: int, height: int): Promise<void>;

    /**
     * ���ڴ������ϽǶ���ı䵱ǰ���ڴ�С��ʹ��callback�첽�ص���
     * 
     * ���óɹ������أ��ýӿڷ��غ��޷�������ȡ������Ч���������������ȡ������ʹ�ýӿ�[resizeAsync()]{@link window.Window.resizeAsync}��
     * 
     * ���ڴ��ڴ�С����[WindowLimits]{@link @ohos.window:window.WindowLimits}������ߴ����Ʒ�Χ����ͨ��
     * [getWindowLimits]{@link window.Window.getWindowLimits}�ӿڽ��в�ѯ��
     * 
     * ���øýӿ����õĿ�����߶��ܵ�������Լ��������
     * 
     * �������õĴ��ڿ�/�߳ߴ�С�ڴ�����С��/������ֵ���򴰿���С��/������ֵ��Ч��ϵͳ���ں�ȫ��������������Сֵ���ܴ�����С��/������ֵ���ƣ�
     * 
     * �������õĴ��ڿ�/�߳ߴ���ڴ�������/������ֵ���򴰿�����/������ֵ��Ч��
     * 
     * �ýӿڽ��ڴ���Ϊ������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING������ģʽ��ͨ��
     * [getWindowStatus()]{@link window.Window.getWindowStatus}��ȡ��ʱ������Ч������������ģʽ�µ��÷���1300002�����롣
     * 
     * > **˵����**
     * >
     * > - �����ڴ���������������ģʽʱ���ڷ�[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�µ��ò���������Ч��
     *
     * @param { int } width - ��ǰ���ڵ�Ŀ����ȣ���λΪpx���ò�����֧���������룬���������뽫����ȡ����
     * ��ֵΪ�Ƿ��������׳�������401����
     * @param { int } height - ��ǰ���ڵ�Ŀ��߶ȣ���λΪpx���ò�����֧���������룬���������뽫����ȡ����
     * ��ֵΪ�Ƿ��������׳�������401����
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error;
     *     3. Invalid window status type. Only supports windows in floating window mode.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    resize(width: int, height: int, callback: AsyncCallback<void>): void;

    /**
     * ���ڴ������ϽǶ���ı䵱ǰ���ڴ�С��ʹ��Promise�첽�ص���
     * 
     * ������Ч�󷵻أ��ص��п�ʹ��[getWindowProperties()]{@link window.Window.getWindowProperties}����ʾ����������ȡ������Ч�����
     * 
     * ���ڴ��ڴ�С����[WindowLimits]{@link @ohos.window:window.WindowLimits}������ߴ����Ʒ�Χ����ͨ��
     * [getWindowLimits]{@link window.Window.getWindowLimits}�ӿڽ��в�ѯ��
     * 
     * ���øýӿ����õĿ�����߶��ܵ�������Լ��������
     * 
     * �������õĴ��ڿ�/�߳ߴ�С�ڴ�����С��/������ֵ���򴰿���С��/������ֵ��Ч��ϵͳ���ں�ȫ��������������Сֵ���ܴ�����С��/������ֵ���ƣ�
     * 
     * �������õĴ��ڿ�/�߳ߴ���ڴ�������/������ֵ���򴰿�����/������ֵ��Ч��
     * 
     * �ýӿڽ��ڴ���Ϊ������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING������ģʽ��ͨ��
     * [getWindowStatus()]{@link window.Window.getWindowStatus}��ȡ��ʱ������Ч�������׳�������1300010��
     * 
     * > **˵����**
     * >
     * > - �ڷ�[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£������ڵ��ò���Ч��
     *
     * @param { int } width - ��ǰ���ڵ�Ŀ����ȣ���λΪpx���ò�����֧���������룬���������뽫����ȡ����
     *     ��ֵΪ�Ƿ��������׳�������401����
     * @param { int } height - ��ǰ���ڵ�Ŀ��߶ȣ���λΪpx���ò�����֧���������룬���������뽫����ȡ����
     *     ��ֵΪ�Ƿ��������׳�������401����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Invalid parameter range.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    resizeAsync(width: int, height: int): Promise<void>;

    /**
     * �����Ӵ���ģ̬���ڣ���WindowTypeΪTYPE_DIALOG�Ĵ��ڣ��Ĳ�����Ϣ��position��size���Ƿ����������ʹ��Promise�첽�ص���
     * 
     * 1��ֻ֧��������һ���Ӵ���ģ̬����ʹ�øýӿڡ�
     * 
     * 2�����Ӵ���ģ̬���ڵ��øýӿں�����ʹ�䲼����Ϣ��������ȫһ�²����֣����Ǵ���false�ٴε��øýӿڣ�����Ч����������
     * 
     * 3�����Ӵ���ģ̬���ڵ��øýӿں��ٵ���moveTo��resize���޸Ĳ�����Ϣ�Ľӿڽ�����Ч��
     * 
     * 4�����Ӵ���ģ̬���ڲ���ʹ�øù��ܺ󣬲���֤�Ӵ���ģ̬���ڵĲ�����Ϣ��position��size��Ϊȷ����ֵ����ҪӦ�����½������á�
     * 
     * �ýӿڵ�����Ч��
     * [setRelativePositionToParentWindowEnabled()]{@link window.Window.setRelativePositionToParentWindowEnabled}�ӿڵ��ò���Ч
     * ��
     *
     * @param { boolean } enabled - �����Ƿ����ø����������֡�true��ʾ���ã�false��ʾ�����á�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *     2. Internal task error.
     *     3. The subwindow level is more than one.
     *     4. The subwindow is following its parent window's position.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows and dialog windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    setFollowParentWindowLayoutEnabled(enabled: boolean): Promise<void>;

    /**
     * ��������һ���Ӵ��Ƿ�֧���������������λ�ò��䡣ʹ��Promise�첽�ص���
     * 
     * �����λ��ͨ��һ���Ӵ�������֮��ê���ƫ������ʾ���Ӵ�������ʹ�õĴ���ê����ͬ��
     * 
     * 1. ֻ֧��һ���Ӵ����øýӿڣ��Ӵ��账��������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING����
     * 2. ���Ӵ����øýӿں�����ʹ����ʾλ�ø����������������λ�ò��䣬���Ǵ���false�ٴε��øýӿڣ�����Ч����������
     * 3. ���Ӵ����øýӿں��ٵ���[moveWindowTo()]{@link window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)}��[maximize()]{@link window.Window.maximize(presentation?: MaximizePresentation)}�޸Ĵ���λ�û��С�Ľӿڽ�����Ч��
     * 
     * �ýӿڵ�����Ч��[setFollowParentWindowLayoutEnabled()]{@link window.Window.setFollowParentWindowLayoutEnabled}�ӿڵ��ò���Ч��
     *
     * @param { boolean } enabled - һ���Ӵ��Ƿ�֧���������������λ�ò��䡣true��ʾ֧�֣�false��ʾ��֧�֡�
     * @param { WindowAnchor } [anchor] - һ���Ӵ��������������λ�ò���ʱ�Ĵ���ê��ö�١��ò�������enabledΪtrueʱ��Ч��
     *     Ĭ��ֵΪwindow.WindowAnchor.TopStart����Ĭ��ê��Ϊ�������Ͻǡ�
     * @param { int } [offsetX] - һ���Ӵ�ê��������ê��λ�õ�x��ƫ��������λΪpx���ò�������enabledΪtrueʱ��Ч��
     *     ��֧���������룬����������ȡ����Ĭ��ֵΪ0��
     * @param { int } [offsetY] - һ���Ӵ�ê��������ê��λ�õ�y��ƫ��������λΪpx���ò�������enabledΪtrueʱ��Ч��
     *     ��֧���������룬����������ȡ����Ĭ��ֵΪ0��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function setRelativePositionToParentWindowEnabled can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    setRelativePositionToParentWindowEnabled(enabled: boolean, anchor?: WindowAnchor,
        offsetX?: int, offsetY?: int): Promise<void>;

    /**
     * ����һ���Ӵ��������������λ�ò��䡣ʹ��Promise�첽�ص���
     * 
     * �����λ��ͨ���Ӵ�������֮���ê��ƫ������ʾ���Ӵ�������ʹ�õĴ���ê����ͬ��
     * 
     * > **˵����**
     * >
     * > - ֻ֧��һ���Ӵ����øýӿڣ��Ӵ��账��������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING����
     * >
     * > - ���Ӵ����øýӿں�����ʹ����ʾλ�ø����������������λ�ò��䣬���ҿ��Լ���������С��ģʽ�л������ǵ���
     * > [detachLayoutToParentWindow()]{@link window.Window.detachLayoutToParentWindow}�ӿڽ�󣬷���Ч����������
     * >
     * > - ���Ӵ����øýӿں��ٵ���
     * > [moveWindowTo()]{@link @ohos.window:window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)}��
     * > [maximize()]{@link @ohos.window:window.Window.maximize(presentation?: MaximizePresentation)}��
     * > [setFollowParentWindowLayoutEnabled()]{@link @ohos.window:window.Window.setFollowParentWindowLayoutEnabled}���޸Ĵ�
     * > ��λ�õĽӿڣ���ͨ�����/�����������Ӵ�������ק�ƶ�����ק����ʱ������Ч��
     *
     * @param { WindowAnchorInfo } [anchorInfo] - һ���Ӵ��������������λ�ò���ʱ��ê���������������Ĭ���߼��ο�
     *     [WindowAnchorInfo]{@link window.WindowAnchorInfo}��
     * @param { SubWindowAttachOptions } [attachOptions] - �����Ӵ����ֵĸ��Ӳ�������������Ĭ���߼��ο�
     *     [SubWindowAttachOptions]{@link window.SubWindowAttachOptions}��
     * @returns { Promise<void> } Promise�����޷��ؽ����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function attachLayoutToParentWindow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: 1. Invalid window type. Only subwindows are supported;
     *     2. The current window's parent window is not a main window;
     *     3. Only level-1 subwindows are supported.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: 1. The subwindow is following its parent window's layout.
     *     2. The subwindow is not in the floating mode.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    attachLayoutToParentWindow(anchorInfo?: WindowAnchorInfo, attachOptions?: SubWindowAttachOptions): Promise<void>;

    /**
     * ���һ���Ӵ��������������λ�ò����Эͬ��ϵ��ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > - �Ӵ����ýӿ�ʱ�豣���Ӵ�����Эͬ״̬��
     * >
     * > - ���ýӿڽ��Эͬ���Ӵ�������Эͬʱ��λ�ã��ɶ��Ӵ�������ק���޸��Ӵ���С��λ�á�
     * >
     * > - ���Эͬ�󣬵���
     * > [moveWindowTo()]{@link @ohos.window:window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)}��
     * > [maximize()]{@link @ohos.window:window.Window.maximize(presentation?: MaximizePresentation)}��
     * > [setFollowParentWindowLayoutEnabled()]{@link @ohos.window:window.Window.setFollowParentWindowLayoutEnabled}�޸Ĵ���
     * > λ�õĽӿڣ���ͨ�����/�����������Ӵ�������ק�ƶ�����ק����ʱ����Ч��
     *
     * @returns { Promise<void> } Promise�����޷��ؽ����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function detachLayoutToParentWindow cannot work correctly due to limited device capabilities.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: 1. Invalid window type. Only subwindows are supported;
     *     2. Only level-1 subwindows are supported.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The subwindow is not attached to the main window.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    detachLayoutToParentWindow(): Promise<void>;

    /**
     * ���ô������ͣ�ʹ��Promise�첽�ص���
     *
     * @param { WindowType } type - �������͡�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setWindowType(type: WindowType): Promise<void>;

    /**
     * ���ô������ͣ�ʹ��callback�첽�ص���
     *
     * @param { WindowType } type - �������͡�
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setWindowType(type: WindowType, callback: AsyncCallback<void>): void;

    /**
     * ����������ģʽ��ʹ��Promise�첽�ص���
     *
     * @param { WindowMode } mode - ����ģʽ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowMode(mode: WindowMode): Promise<void>;

    /**
     * ����������ģʽ��ʹ��callback�첽�ص���
     *
     * @param { WindowMode } mode - ����ģʽ��
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowMode(mode: WindowMode, callback: AsyncCallback<void>): void;

    /**
     * ��ȡ��ǰ���ڵ����ԣ�ʹ��callback�첽�ص�������WindowProperties��
     * 
     * > **˵����**
     * >
     * > ��API version 6��ʼ֧�֣���API version 9��ʼ����������ʹ��[getWindowProperties()]{@link window.Window.getWindowProperties}�����
     *
     * @param { AsyncCallback<WindowProperties> } callback - �ص����������ص�ǰ�������ԡ�
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowProperties
     */
    getProperties(callback: AsyncCallback<WindowProperties>): void;

    /**
     * ��ȡ������������������Ļ�ϵ���ʵ��ʾ����ͬ���ӿڡ�
     * 
     * ��ĳЩ�豸�ϣ�������ʾʱ���ܾ��������ţ��˽ӿڿ��Ի�ȡ���ź󴰿�����Ļ�ϵ���ʵλ�úʹ�С��
     *
     * @returns { Rect } ��Ԫ��ֱ��ʾ������Ļ���Ͻǵ�x���ꡢ������Ļ���Ͻǵ�y���ꡢ���ź�Ĵ��ڿ��Ⱥ����ź�Ĵ��ڸ߶ȡ�
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Failed to convert result into JS value object.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    getGlobalRect(): Rect;

    /**
     * ��ȡ��ǰ���ڵ����ԣ�ʹ��Promise�첽�ص�������WindowProperties��
     * 
     * > **˵����**
     * >
     * > ��API version 6��ʼ֧�֣���API version 9��ʼ����������ʹ��[getWindowProperties()]{@link window.Window.getWindowProperties}�����
     *
     * @returns { Promise<WindowProperties> } Promise���󡣷��ص�ǰ�������ԡ�
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowProperties
     */
    getProperties(): Promise<WindowProperties>;

    /**
     * ��ȡ��ǰ���ڵ����ԡ�
     *
     * @returns { WindowProperties } ��ǰ�������ԡ�
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getWindowProperties(): WindowProperties;

    /**
     * ��ȡ��ǰ����������Ļ��ϵͳ��ʾ��С����ϵ����ϵͳĬ����ʾ��С����ϵ�����Զ�����ʾ��С����ϵ����Ϣ��
     *
     * @returns { WindowDensityInfo } ��ǰ���ڵ���ʾ��С����ϵ����Ϣ��������ֵΪ[-1, -1, -1]ʱ����ʾ��ǰ�豸��֧��ʹ�øýӿڡ�
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getWindowDensityInfo(): WindowDensityInfo;

    /**
     * �жϵ�ǰ���ڵ��������Ƿ��ǿ�����Ļʹ��ȫ��ģʽ��ʾ��ʹ��Promise�첽�ص�����֧����������Ӧ���Ӵ��ڡ�
     *
     * @returns { Promise<boolean> } Promise���󡣷���true��ʾ��ǰ���ڵ������ڿ�����Ļʹ��ȫ��ģʽ��ʾ������false��ʾ��ǰ���ڵ�������δ������Ļʹ��ȫ��ģʽ��ʾ��
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isMainWindowFullScreenAcrossDisplays(): Promise<boolean>;

    /**
     * ��ȡ��ǰ�������ݹ�ܵ�������ϵͳ������������������������������������봰�������ص�ʱ����Ҫ�������ݱ��õ�����
     * 
     * ������/�Ӵ��ڣ�
     * 
     * - [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬��������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING���£�
     * �����ڹ̶�̬�����̣�[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_KEYBOARD�����͵ı�������
     * - �������ڷ����ɴ���״̬��������������ģʽ�£�������ϵͳ����[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_SYSTEM�����͵ı�������
     * - �����������ೡ���£������ڷ�������������ģʽ�»��豸����ΪPhone��Tablet������ͨ���˽ӿڻ�ȡ�����ı������򣬷����ȡ�ı�������Ϊ�ա�
     * - �Ӵ����ڷ����ɴ���״̬���������������ģʽ�£��������ڵ�λ�úʹ�С��������һ��ʱ������ͨ���˽ӿڻ�ȡ�����ı������򣬷����ȡ�ı�������Ϊ�ա�
     * 
     * ȫ����������ģ̬����ϵͳ���ڣ�
     * 
     * - ���ڵ���[setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled}����ʹ�ܺ󣬲���ͨ���˽ӿڻ�ȡ�����ı������򣬷����ȡ�ı�������
     * Ϊ�ա�
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��[getWindowAvoidArea()]{@link window.Window.getWindowAvoidArea}�����
     *
     * @param { AvoidAreaType } type - ��ʾ���������͡�
     * @param { AsyncCallback<AvoidArea> } callback - �ص����������ش������ݱ�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowAvoidArea
     */
    getAvoidArea(type: AvoidAreaType, callback: AsyncCallback<AvoidArea>): void;

    /**
     * ��ȡ��ǰ�������ݹ�ܵ�������ϵͳ������������������������������������봰�������ص�ʱ����Ҫ�������ݱ��õ�����
     * 
     * ������/�Ӵ��ڣ�
     * 
     * - [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬��������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING���£�
     * �����ڹ̶�̬�����̣�[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_KEYBOARD�����͵ı�������
     * - �������ڷ����ɴ���״̬��������������ģʽ�£�������ϵͳ����[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_SYSTEM�����͵ı�������
     * - �����������ೡ���£������ڷ�������������ģʽ�»��豸����ΪPhone��Tablet������ͨ���˽ӿڻ�ȡ�����ı������򣬷����ȡ�ı�������Ϊ�ա�
     * - �Ӵ����ڷ����ɴ���״̬���������������ģʽ�£��������ڵ�λ�úʹ�С��������һ��ʱ������ͨ���˽ӿڻ�ȡ�����ı������򣬷����ȡ�ı�������Ϊ�ա�
     * 
     * ȫ����������ģ̬����ϵͳ���ڣ�
     * 
     * - ���ڵ���[setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled}����ʹ�ܺ󣬲���ͨ���˽ӿڻ�ȡ�����ı������򣬷����ȡ�ı�������
     * Ϊ�ա�
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��[getWindowAvoidArea()]{@link window.Window.getWindowAvoidArea}�����
     *
     * @param { AvoidAreaType } type - ��ʾ���������͡�
     * @returns { Promise<AvoidArea> } Promise���󡣷��ش������ݱ�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowAvoidArea
     */
    getAvoidArea(type: AvoidAreaType): Promise<AvoidArea>;

    /**
     * ��ȡ��ǰӦ�ô��ڵı������򣬼�ʹ��������ǰ���ڲ��ɼ�״̬��
     * 
     * ������/�Ӵ��ڣ�
     * 
     * - �������ڷ�[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬��������������ģʽ��������ģʽΪ
     * [window.WindowStatusType.FLOATING]{@link @ohos.window:window.WindowStatusType}���£�������ϵͳ����
     * [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_SYSTEM�����͵ı�������
     * - �����������ೡ���£������ڷ�������������ģʽ�»��豸����ΪPhone��Tablet������ͨ���˽ӿڻ�ȡ�����ı������򣬷����ȡ�ı�������Ϊ�ա�
     * - �Ӵ����ڷ����ɴ���״̬���������������ģʽ�£��������ڵ�λ�úʹ�С��������һ��ʱ������ͨ���˽ӿڻ�ȡ�����ı������򣬷����ȡ�ı�������Ϊ�ա�
     * 
     * ȫ����������ģ̬����ϵͳ���ڣ�
     * 
     * - ���ڵ���[setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled}����ʹ�ܺ󣬲���ͨ���˽ӿڻ�ȡ�����ı������򣬷����ȡ�ı�������
     * Ϊ�ա�
     *
     * @param { AvoidAreaType } type - Type of the area.
     * @returns { AvoidArea } �������ݱ�������
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Convert avoid area failed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    getWindowAvoidAreaIgnoringVisibility(type: AvoidAreaType): AvoidArea;

    /**
     * ��ȡ��ǰ���ڱ�������
     * 
     * ������/�Ӵ��ڣ�
     * 
     * - [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬��������������ģʽ��������ģʽΪ
     * [window.WindowStatusType.FLOATING]{@link @ohos.window:window.WindowStatusType}���£������ڹ̶�̬�����̣�
     * [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_KEYBOARD�����͵ı�������
     * - �������ڷ����ɴ���״̬��������������ģʽ�£�������ϵͳ����[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_SYSTEM�����͵ı�������
     * - �����������ೡ���£������ڷ�������������ģʽ�»��豸����ΪPhone��Tablet������ͨ���˽ӿڻ�ȡ�����ı������򣬷����ȡ�ı�������Ϊ�ա�
     * - �Ӵ����ڷ����ɴ���״̬���������������ģʽ�£��������ڵ�λ�úʹ�С��������һ��ʱ������ͨ���˽ӿڻ�ȡ�����ı������򣬷����ȡ�ı�������Ϊ�ա�
     * 
     * ȫ����������ģ̬����ϵͳ���ڣ�
     * 
     * - ���ڵ���[setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled}����ʹ�ܺ󣬲���ͨ���˽ӿڻ�ȡ�������򣬷����ȡ�ı�������Ϊ�ա�
     * 
     * �ýӿ�һ�����������ֳ�����
     * 
     * - ��[onWindowStageCreate()]{@link @ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate}�����У���ȡӦ������ʱ�ĳ�ʼ���ֱ�������ʱ��
     * ���øýӿڡ�
     * - ��Ӧ�����Ӵ���Ҫ��ʱ��ʾ������ʾ���������ֱ���ʱ�ɵ��øýӿڡ�
     *
     * @param { AvoidAreaType } type - Type of the area
     * @returns { AvoidArea } �������ݱ�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Convert avoid area failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getWindowAvoidArea(type: AvoidAreaType): AvoidArea;

    /**
     * ����ȫ����������ģ̬����WindowType��������Ϊϵͳ����ʱ�����øýӿ�ʹ�ܺ�ſ���ͨ��[getWindowAvoidArea()]{@link window.Window.getWindowAvoidArea}��ȡ���ڱ�
     * ������Ϣ��ͨ��
     * [on('avoidAreaChange')]{@link window.Window.on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>)}������
     * �ڱ������仯��
     *
     * @param { boolean } enabled - If true, the system window type can obtain avoid area. If false, the avoid area
     *     obtained by the system window type will always be empty.
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     *     Possible cause: The device does not support the API itself.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only global floating windows, dialog windows,
     *     or Window Type as system windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setSystemAvoidAreaEnabled(enabled: boolean): Promise<void>;

    /**
     * ��ȡ��������ģ̬����WindowTypeΪϵͳ���͵Ĵ����Ƿ���Ի�ȡ�������ݵı�����[AvoidArea]{@link @ohos.window:window.AvoidArea}��
     *
     * @returns { boolean } �Ƿ���Ի�ȡ�������ݵı�������
     *     <br> true��ʾ���Ի�ȡ��������false��ʾ�����Ի�ȡ��������
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Create js value failed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    isSystemAvoidAreaEnabled(): boolean;

    /**
     * ���õ�ǰ�����Ƿ�֧�ֻ�ȡ�����������͵ı�������δ���ô˽ӿ�����ǰ��ϵͳĬ�ϲ�֧�ֻ�ȡ�����������͵ı�������ʹ��Promise�첽�ص���
     * 
     * ���øýӿ�ʹ�ܺ�ſ���ͨ��[getWindowAvoidArea()]{@link window.Window.getWindowAvoidArea}��ȡ��
     * [TYPE_FLOAT_NAVIGATION]{@link @ohos.window:window.AvoidAreaType}�������Ͷ�Ӧ�ı��������ͨ��
     * [on('avoidAreaChange')]{@link window.Window.on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>)}����
     * TYPE_FLOAT_NAVIGATION�������Ͷ�Ӧ�ı�������ı仯��
     *
     * @param { boolean } enabled - �Ƿ�֧�ֻ�ȡ�����������͵ı�������<br>true��ʾ֧�֣�false��ʾ��֧�֡�</br>
     * @returns { Promise<void> } Promise�����޷��ؽ����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Create js value failed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setFloatNavigationAvoidAreaEnabled(enabled: boolean): Promise<void>;

    /**
     * ��ѯ��ǰ�����Ƿ�֧�ֻ�ȡ�����������͵ı�������
     *
     * @returns { boolean } �Ƿ�֧�ֻ�ȡ�����������͵ı�������
     *     <br>true��ʾ֧�֣�false��ʾ��֧�֡�
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Create js value failed.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    isFloatNavigationAvoidAreaEnabled(): boolean;

    /**
     * ���������ڻ��Ӵ��ڵĲ����Ƿ�Ϊȫ�����֣�ʹ��callback�첽�ص���
     * 
     * ȫ��������Чʱ�����ֲ�����״̬����<!--RP15-->����������<!--RP15End-->��������ܲ��������ص��������
     * 
     * ��ȫ��������Чʱ�����ֱ���״̬����<!--RP15-->����������<!--RP15End-->��������������ص���
     * 
     * > **˵����**
     * >
     * > ��API version 6��ʼ֧�֣���API version 9��ʼ��������������ʹ��
     * > [setWindowSystemBarEnable()]{@link window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)}
     * > ��[setWindowLayoutFullScreen()]{@link window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)}���ʵ��ȫ
     * > ����
     *
     * @param { boolean } isFullScreen - �Ƿ���Ϊȫ�����֣���ȫ������Ӱ��״̬����<!--RP15-->����������<!--RP15End-->��ʾ����true��ʾȫ����false��ʾ��ȫ����
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarEnable(names: Array<'status' | 'navigation'>)
     */
    setFullScreen(isFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * ���������ڻ��Ӵ��ڵĲ����Ƿ�Ϊȫ�����֣�ʹ��Promise�첽�ص���
     * 
     * ȫ��������Чʱ�����ֲ�����״̬����<!--RP15-->����������<!--RP15End-->��������ܲ��������ص��������
     * 
     * ��ȫ��������Чʱ�����ֱ���״̬����<!--RP15-->����������<!--RP15End-->��������������ص���
     * 
     * > **˵����**
     * >
     * > ��API version 6��ʼ֧�֣���API version 9��ʼ��������������ʹ��
     * > [setWindowSystemBarEnable()]{@link window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)}
     * > ��[setWindowLayoutFullScreen()]{@link window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)}���ʵ��ȫ
     * > ����
     *
     * @param { boolean } isFullScreen - �Ƿ���Ϊȫ�����֣���ȫ������Ӱ��״̬����<!--RP15-->����������<!--RP15End-->��ʾ����true��ʾȫ����false��ʾ��ȫ����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarEnable(names: Array<'status' | 'navigation'>)
     */
    setFullScreen(isFullScreen: boolean): Promise<void>;

    /**
     * ���������ڻ��Ӵ��ڵĲ����Ƿ�Ϊ����ʽ���֣�ʹ��callback�첽�ص���
     * 
     * ����ʽ������Чʱ�����ֲ�����״̬����<!--RP15-->����������<!--RP15End-->��������ܲ��������ص��������
     * 
     * �ǳ���ʽ������Чʱ�����ֱ���״̬����<!--RP15-->����������<!--RP15End-->��������������ص���
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowLayoutFullScreen()]{@link window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)}�����
     *
     * @param { boolean } isLayoutFullScreen - ���ڵĲ����Ƿ�Ϊ����ʽ���֣��ó���ʽ���ֲ�Ӱ��״̬����<!--RP15-->����������<!--RP15End-->��ʾ����true��ʾ����ʽ���֣�
     *     false��ʾ�ǳ���ʽ���֡�
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)
     */
    setLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * ���������ڻ��Ӵ��ڵĲ����Ƿ�Ϊ����ʽ���֣�ʹ��Promise�첽�ص���
     * 
     * ����ʽ������Чʱ�����ֲ�����״̬����<!--RP15-->����������<!--RP15End-->��������ܲ��������ص��������
     * 
     * �ǳ���ʽ������Чʱ�����ֱ���״̬����<!--RP15-->����������<!--RP15End-->��������������ص���
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowLayoutFullScreen()]{@link window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)}�����
     *
     * @param { boolean } isLayoutFullScreen - ���ڵĲ����Ƿ�Ϊ����ʽ���֣��ó���ʽ���ֲ�Ӱ��״̬����<!--RP15-->����������<!--RP15End-->��ʾ����true��ʾ����ʽ���֣�
     *     false��ʾ�ǳ���ʽ���֡�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)
     */
    setLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>;

    /**
     * ���������ڻ��Ӵ��ڵĲ����Ƿ�Ϊ����ʽ���֣�ʹ��callback�첽�ص���ϵͳ���ڵ��ò���Ч��
     * 
     * ����ʽ������Чʱ�����ֲ�����״̬����<!--RP15-->����������<!--RP15End-->��������ܲ��������ص��������
     * 
     * �ǳ���ʽ������Чʱ�����ֱ���״̬����<!--RP15-->����������<!--RP15End-->��������������ص���
     * 
     * > **˵����**
     * >
     * > ��API version 9��ʼ֧�֣���API version 12��ʼ����������ʹ��Promise��ʽ��
     * > [setWindowLayoutFullScreen()]{@link window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)}�����
     *
     * @param { boolean } isLayoutFullScreen - ���ڵĲ����Ƿ�Ϊ����ʽ���֣��ó���ʽ����״̬����<!--RP15-->����������<!--RP15End-->��Ȼ��ʾ����true��ʾ����ʽ���֣�
     *     false��ʾ�ǳ���ʽ���֡�
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)
     */
    setWindowLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * ����Ӧ�������ڻ�Ӧ���Ӵ��ڵĲ����Ƿ�Ϊ����ʽ���֣�ʹ��Promise�첽�ص������ര�ڵ��ò���ЧҲ��������
     * 
     * ����ʽ������Чʱ�����ֲ�����״̬����<!--RP15-->����������<!--RP15End-->��������ܲ��������ص��������
     * 
     * �ǳ���ʽ������Чʱ�����ֱ���״̬����<!--RP15-->����������<!--RP15End-->��������������ص���
     *
     * @param { boolean } isLayoutFullScreen - The window can layout in full screen
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>;

    /**
     * <!--RP14-->����������״̬���������������Ŀɼ�ģʽ��״̬��ͨ��status���ơ�����������ͨ��navigation����<!--RP14End-->��ʹ��callback�첽�ص���
     * 
     * ��API version 12��ʼ��<!--RP5-->�ýӿ���2in1�豸�ϵ��ò���Ч��<!--RP5End-->
     * 
     * ������Ч�󷵻ز�����ʾ״̬����<!--RP15-->����������<!--RP15End-->����ʾ����������ɡ��Ӵ��ڵ��ú���Ч����ȫ��ģʽ���������������ȳ����������ò���Ч��
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowSystemBarEnable()]{@link window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)}
     * > �����
     *
     * @param { Array<'status' | 'navigation'> } names - ���ô���ȫ��ģʽʱ״̬����<!--RP15-->����������<!--RP15End-->�Ƿ���ʾ��<br>���磬��ȫ����ʾ���ò�
     *     ������Ϊ['status',?'navigation']������Ϊ[]������ʾ��
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)
     */
    setSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void;

    /**
     * <!--RP14-->����������״̬���������������Ŀɼ�ģʽ��״̬��ͨ��status���ơ�����������ͨ��navigation����<!--RP14End-->��ʹ��Promise�첽�ص���
     * 
     * ��API version 12��ʼ��<!--RP5-->�ýӿ���2in1�豸�ϵ��ò���Ч��<!--RP5End-->
     * 
     * ������Ч�󷵻ز�����ʾ״̬����<!--RP15-->����������<!--RP15End-->����ʾ����������ɡ��Ӵ��ڵ��ú���Ч����ȫ��ģʽ���������������ȳ����������ò���Ч��
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowSystemBarEnable()]{@link window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)}
     * > �����
     *
     * @param { Array<'status' | 'navigation'> } names - ���ô���ȫ��ģʽʱ״̬����<!--RP15-->����������<!--RP15End-->�Ƿ���ʾ��<br>���磬��ȫ����ʾ���ò�
     *     ������Ϊ['status',?'navigation']������Ϊ[]������ʾ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)
     */
    setSystemBarEnable(names: Array<'status' | 'navigation'>): Promise<void>;

    /**
     * <!--RP14-->����������״̬���������������Ŀɼ�ģʽ��״̬��ͨ��status���ơ�����������ͨ��navigation����<!--RP14End-->��ʹ��callback�첽�ص���
     * 
     * ��API version 12��ʼ��<!--RP5-->�ýӿ���2in1�豸�ϵ��ò���Ч��<!--RP5End-->
     * 
     * ������Ч�󷵻ز�����ʾ״̬����<!--RP15-->����������<!--RP15End-->����ʾ����������ɡ��Ӵ��ڵ��ú���Ч����ȫ��ģʽ���������������ȳ����������ò���Ч��
     * 
     * > **˵����**
     * >
     * > ��API version 9��ʼ֧�֣���API version 12��ʼ����������ʹ��Promise��ʽ��
     * > [setWindowSystemBarEnable()]{@link window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)}
     * > �����
     *
     * @param { Array<'status' | 'navigation'> } names - ���ô���ȫ��ģʽʱ״̬����<!--RP15-->����������<!--RP15End-->�Ƿ���ʾ��<br>���磬��ȫ����ʾ���ò�
     *     ������Ϊ['status',?'navigation']������Ϊ[]������ʾ��
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead window.Window.setWindowSystemBarEnable(names: Array<'status' | 'navigation'>)
     */
    setWindowSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void;

    /**
     * <!--RP14-->����������״̬���������������Ŀɼ�ģʽ��״̬��ͨ��status���ơ�����������ͨ��navigation����<!--RP14End-->��ʹ��Promise�첽�ص���
     * 
     * ������Ч�󷵻ز�����ʾ״̬����<!--RP15-->����������<!--RP15End-->����ʾ����������ɡ��������ڷ�ȫ��/���ģʽ���������������ȳ����������ò���Ч������ȫ��/���ģʽ��������Ч��
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowSystemBarEnable(names: Array<'status'|'navigation'>): Promise<void>;

    /**
     * ����������״̬����<!--RP15-->����������<!--RP15End-->����ʾ�����أ�ʹ��Promise�첽�ص���
     * 
     * ������Ч�󷵻ز�����ʾ״̬����<!--RP15-->����������<!--RP15End-->����ʾ����������ɡ��Ӵ��ڵ��ú���Ч���������ڷ�ȫ��/���ģʽ���������������ȳ����������ò���Ч������ȫ��/���ģʽ��������Ч��
     *
     * @param {SpecificSystemBar} name - the set of system bar
     * @param {boolean} enable - Show specific system bar if true, or hide specific system bar if false.
     * @param {boolean} enableAnimation - Whether using animation during this setting,
     *     using animation if true or not using animation if false. [since 12]
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws {BusinessError} 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws {BusinessError} 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws {BusinessError} 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 12]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setSpecificSystemBarEnabled(name: SpecificSystemBar, enable: boolean, enableAnimation?: boolean): Promise<void>;

    /**
     * ����������<!--Del-->������������<!--DelEnd-->״̬�������ԣ�ʹ��callback�첽�ص���<!--RP5-->�ýӿ���2in1�豸�ϵ��ò���Ч��<!--RP5End-->
     * 
     * �Ӵ��ڵ��ú���Ч����ȫ��ģʽ���������������ȳ����������ò���Ч��
     * 
     * > **˵����**
     * >
     * > ��API version 6��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowSystemBarProperties()]{@link window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties)}
     * > �����
     *
     * @param { SystemBarProperties } systemBarProperties - <!--Del-->������������<!--DelEnd-->״̬�������ԡ�
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties)
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void;

    /**
     * ����������<!--Del-->������������<!--DelEnd-->״̬�������ԣ�ʹ��Promise�첽�ص���<!--RP5-->�ýӿ���2in1�豸�ϵ��ò���Ч��<!--RP5End-->
     * 
     * �Ӵ��ڵ��ú���Ч��
     * 
     * > **˵����**
     * >
     * > ��API version 6��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowSystemBarProperties()]{@link window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties)}
     * > �����
     *
     * @param { SystemBarProperties } systemBarProperties - <!--Del-->������������<!--DelEnd-->״̬�������ԡ�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties)
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>;

    /**
     * ����������<!--Del-->������������<!--DelEnd-->״̬�������ԣ�ʹ��callback�첽�ص���<!--RP5-->�ýӿ���2in1�豸�ϵ��ò���Ч��<!--RP5End-->
     * 
     * �Ӵ��ڵ��ú���Ч��
     * 
     * > **˵����**
     * >
     * > ��API version 9��ʼ֧�֣���API version 12��ʼ����������ʹ��Promise��ʽ��
     * > [setWindowSystemBarProperties()]{@link window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties)}
     * > �����
     *
     * @param { SystemBarProperties } systemBarProperties - <!--Del-->������������<!--DelEnd-->״̬�������ԡ�
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties)
     */
    setWindowSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void;

    /**
     * ����������<!--Del-->������������<!--DelEnd-->״̬�������ԣ�ʹ��Promise�첽�ص���
     * 
     * �Ӵ��ڵ��ú���Ч���������ڷ�ȫ��/���ģʽ���������������ȳ����������ò���Ч������ȫ��/���ģʽ��������Ч��
     *
     * @param { SystemBarProperties } systemBarProperties - <!--Del-->������������<!--DelEnd-->״̬�������ԡ�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>;

    /**
     * ��ȡ������<!--Del-->������������<!--DelEnd-->״̬�������ԡ�
     *
     * @returns { SystemBarProperties } ��ǰ<!--Del-->������������<!--DelEnd-->״̬�����ԡ�
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Create js object failed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getWindowSystemBarProperties(): SystemBarProperties;

    /**
     * ����������״̬����������ɫ��ʹ��Promise�첽�ص���
     * 
     * �Ӵ��ڲ�֧������״̬��������ɫ��������Ч�����������ڷ�ȫ��/���ģʽ���������������ȳ����������ò���Ч������ȫ��/���ģʽ��������Ч��
     *
     * @param { ColorMetrics } color - Ҫ���õ�״̬����ɫֵ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported on this device.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setStatusBarColor(color: ColorMetrics): Promise<void>;

    /**
     * ��ȡ������״̬�������ԣ���״̬��������ɫ��
     * 
     * �Ӵ��ڲ�֧�ֲ�ѯ�����û᷵�ش�����1300004��
     *
     * @returns { StatusBarProperty } ��ǰ״̬�����ԣ���״̬����ɫ��
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    getStatusBarProperty(): StatusBarProperty;

    /**
     * ��ȡ�豸��̬��������ʹ��
     *
     * @returns { Promise<string> } Promise used to return the window state snapshot.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the api due to limited device
     *     capabilities. Possible cause: The device does not support the api itself.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed;
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: The internal services of the window are not started normally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     * @test
     */
    getWindowStateSnapshot(): Promise<string>;

    /**
     * ���õ�ǰ�����Ƿ��������Ʋ໬���ع��ܣ����������Ե��óɹ����������͵Ĵ��ڵ��÷���1300004�����롣
     * 
     * �����˹��ܺ󣬽������ڴ���ȫ��ģʽ��λ��ǰ̨��״̬�²Ż���Ч��
     * 
     * ���ô˹��ܺ󣬵�ǰӦ�û���������������໬���ع���ʧЧ���л�������Ӧ�û��߻ص���������������ָ����໬���ع���������
     *
     * @param { boolean } enabled - trueʱ�����������ƹ��ܣ�falseʱ���÷������ƹ��ܡ�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    setGestureBackEnabled(enabled: boolean): Promise<void>;

    /**
     * ��ȡ��ǰ�����Ƿ����÷������ƹ��ܣ����������Ե��óɹ����������͵Ĵ��ڵ��÷���1300004�����롣
     *
     * @returns { boolean } �Ƿ��Ѿ����÷������ơ�true��ʾ�����÷������ƹ��ܣ�false��ʾ�ѽ��÷������ƹ��ܡ�
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    isGestureBackEnabled(): boolean;

    /**
     * ���������ڵ���ʾ�������ԣ�ʹ��Promise�첽�ص����������ڵ��ú���Ч��������
     *
     * @param { Orientation } orientation - ������ʾ��������ԡ�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Failed to convert parameter to Orientation.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setPreferredOrientation(orientation: Orientation): Promise<void>;

    /**
     * ����������ת�仯�ļ�����[RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo}�д�����ת�¼�����Ϊ���ڼ�����תʱ�����뷵��
     * [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult}��������ת�¼�����Ϊ������ת����ʱ����
     * [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult}����Ч��
     * 
     * �ú���ֻ���������߳�ע�ᡣͬһ�����ڶ��ע��ͬ���ͻص�������ֻ��Ч����ע���ͬ���ͻص���������ֵ��ϵͳ�ṩ�˳�ʱ�������ƣ���20ms�ڴ���δ����
     * [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult}��ϵͳ�������÷���ֵ��
     *
     * @param { 'rotationChange' } type - �����¼����̶�Ϊ'rotationChange'����������ת�仯�¼���
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void> } callback - �ص����������ش�����ת��Ϣ
     *     [RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo}��Ӧ�÷��ص�ǰ���ڱ仯���
     *     [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult}��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'rotationChange', callback: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void;

    /**
     * Register the callback of rotation change
     *
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined> } callback -
          *     Register the callback function.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onRotationChange(callback: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined>): void;

    /**
     * �رմ�����ת�仯�ļ�����
     *
     * @param { 'rotationChange' } type - �����¼����̶�Ϊ'rotationChange'����������ת�仯�¼���
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void> } [callback] - �ص���������������������رոü�
     *     �������δ�����������رոô��ڵ����м�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'rotationChange', 
       callback?: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void;

    /**
     * Unregister the callback of rotation change
     *
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined> } [callback] -
          *     Unregister the callback function. If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offRotationChange(callback?: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined>):
      void;

    /**
     * ����������uiExtension��ȫ���Ʊ仯�¼��ļ���, �����ڴ��ڴ���������������
     *
     * @param { 'uiExtensionSecureLimitChange' } eventType - �����¼����̶�Ϊ'uiExtensionSecureLimitChange'����������uiExtension��ȫ���Ʊ�
     *     ���¼���
     * @param { Callback<boolean> } callback - �ص���������������uiExtension��ȫ���Ʊ仯ʱ�����ص��������ز���Ϊtrue��ʾ������uiExtension���������ز���ȫ���ڣ������ز�
     *     ��Ϊfalse��ʾ������uiExtension�ر������ز���ȫ���ڡ��������ڴ��ڶ��uiExtension�������ز���Ϊtrue��ʾ����������һ��uiExtension���������ز���ȫ���ڣ������ز���Ϊfalse��ʾ��
     *     ��������uiExtension�ر������ز���ȫ���ڡ�
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function on('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    on(eventType: 'uiExtensionSecureLimitChange', callback: Callback<boolean>): void;

    /**
     * UIExtension in window secure limit change callback on.
     *
     * @param { Callback<boolean> } callback
          *     Callback used to return the result whether the APP has uiextension secure limit.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function on('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    onUiExtensionSecureLimitChange(callback: Callback<boolean>): void;

    /**
     * �رմ�����uiextension��ȫ���Ʊ仯�¼��ļ�����
     *
     * @param { 'uiExtensionSecureLimitChange' } eventType - �����¼����̶�Ϊ'uiExtensionSecureLimitChange'����������uiExtension��ȫ���Ʊ�
     *     ���¼���
     * @param { Callback<boolean> } callback - �ص��������������������رոü�������δ�����������ر����д��ڰ�ȫ���Ʊ仯�ļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function off('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    off(eventType: 'uiExtensionSecureLimitChange', callback?: Callback<boolean>): void;

    /**
     * UIExtension in window secure limit change callback off.
     *
     * @param { Callback<boolean> } [callback] Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function off('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    offUiExtensionSecureLimitChange(callback?: Callback<boolean>): void;

    /**
     * ��������֡��ָ��仯�¼��ļ������ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     * 
     * Ӧ��ע��֡�ʱ仯������ֻ�е��ͻ���UI���ݷ����ػ�ʱ����ҳ���л����Ϳ���Ӧ������������ñ���ɫ��͸���ȵȣ����Żᴥ��ע��Ļص�������ͬʱʹ�øýӿں�
     * [postFrameCallback](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#postframecallback12)��
     * [postDelayedFrameCallback](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#postdelayedframecallback12)
     * ��
     * [displaySync.on('frame')]{@link @ohos.graphics.displaySync:displaySync.DisplaySync.on(type: 'frame', callback: Callback<IntervalInfo>)}
     * �е�����һ��ʱ����ʹ��UI�����ػ棬Ҳ���ܴ����ص���
     *
     * @param { 'frameMetricsMeasured' } type - �����¼����ͣ��̶�Ϊ'frameMetricsMeasured'��������֡��ָ��仯�¼���
     * @param { Callback<FrameMetrics> } callback - ����֡��ָ��仯ʱ�Ļص������������֡��ָ��
     *     [FrameMetrics]{@link @ohos.window:window.FrameMetrics}��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    on(type: 'frameMetricsMeasured', callback: Callback<FrameMetrics>): void;

    /**
     * ��������֡��ָ��仯�¼��ļ������ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     * 
     * Ӧ��ע��֡�ʱ仯������ֻ�е��ͻ���UI���ݷ����ػ�ʱ����ҳ���л����Ϳ���Ӧ������������ñ���ɫ��͸���ȵȣ����Żᴥ��ע��Ļص�������ͬʱʹ�øýӿں�
     * [postFrameCallback](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#postframecallback12)��
     * [postDelayedFrameCallback](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#postdelayedframecallback12)
     * ��
     * [displaySync.on('frame')]{@link @ohos.graphics.displaySync:displaySync.DisplaySync.on(type: 'frame', callback: Callback<IntervalInfo>)}
     * �е�����һ��ʱ����ʹ��UI�����ػ棬Ҳ���ܴ����ص���
     *
     * @param { Callback<FrameMetrics> } callback - ����֡��ָ��仯ʱ�Ļص������������֡��ָ��
     *     [FrameMetrics]{@link @ohos.window:window.FrameMetrics}��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onFrameMetricsMeasured(callback: Callback<FrameMetrics>): void;

    /**
     * �رմ���֡��ָ��仯�¼��ļ������ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     *
     * @param { 'frameMetricsMeasured' } type - �����¼����ͣ��̶�Ϊ'frameMetricsMeasured'��������֡��ָ��仯�¼���
     * @param { Callback<FrameMetrics> } [callback] - �������������رոü�������δ�����������ر����д���֡��ָ��仯�ļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    off(type: 'frameMetricsMeasured', callback?: Callback<FrameMetrics>): void;

    /**
     * �رմ���֡��ָ��仯�¼��ļ������ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     *
     * @param { Callback<FrameMetrics> } [callback] - �������������رոü�������δ�����������ر����д���֡��ָ��仯�ļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offFrameMetricsMeasured(callback?: Callback<FrameMetrics>): void;

    /**
     * �������ڿɼ���״̬�仯�¼��ļ��������ӿڷ��صĿɼ��������������Ŀɼ��Կ��ܴ������������³�����
     * 
     * - �������ڵ���Ӱ���򣨿ɷֱ�ͨ��[setWindowShadowEnabled]{@link @ohos.window:window.Window.setWindowShadowEnabled}��
     * [setWindowShadowRadius]{@link @ohos.window:window.Window.setWindowShadowRadius}�����Ƿ���ʾ��Ӱ�Լ���Ӧ����Ӱ�뾶������סҲ���ڵ�����ʱ������������
     * ��ȫ�ɼ�����ʵ�ʷ��ص��ǲ��ֿɼ���
     * - �ϲ㴰�ڴ���͸��Ч��ʱ��������ȫ��͸��֮�������͸���̶ȣ������ڵ��²㴰�ڣ���ʱ�²㴰���ǿɼ��ġ�
     * - ��������ڶ���Ч���µĴ���Ҳ�����ڵ�ס�²㴰�ڣ��������ֻ��豸���϶�������ʱ���ص��²㴰����Ȼ�ǿɼ��ġ�
     *
     * @param { 'occlusionStateChanged' } type - �����¼����̶�Ϊ'occlusionStateChanged'�������ڿɼ��Ա仯�¼���
     * @param { Callback<OcclusionState> } callback - ���ڿɼ��Ա仯ʱ�Ļص������������[�ɼ���״̬]{@link @ohos.window:window.OcclusionState}
     *     ��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    on(type: 'occlusionStateChanged', callback: Callback<OcclusionState>): void;

    /**
     * �������ڿɼ���״̬�仯�¼��ļ��������ӿڷ��صĿɼ��������������Ŀɼ��Կ��ܴ������������³�����
     * 
     * - �������ڵ���Ӱ���򣨿ɷֱ�ͨ��[setWindowShadowEnabled]{@link @ohos.window:window.Window.setWindowShadowEnabled}��
     * [setWindowShadowRadius]{@link @ohos.window:window.Window.setWindowShadowRadius}�����Ƿ���ʾ��Ӱ�Լ���Ӧ����Ӱ�뾶������סҲ���ڵ�����ʱ������������
     * ��ȫ�ɼ�����ʵ�ʷ��ص��ǲ��ֿɼ���
     * - �ϲ㴰�ڴ���͸��Ч��ʱ��������ȫ��͸��֮�������͸���̶ȣ������ڵ��²㴰�ڣ���ʱ�²㴰���ǿɼ��ġ�
     * - ��������ڶ���Ч���µĴ���Ҳ�����ڵ�ס�²㴰�ڣ��������ֻ��豸���϶�������ʱ���ص��²㴰����Ȼ�ǿɼ��ġ�
     *
     * @param { Callback<OcclusionState> } callback - ���ڿɼ��Ա仯ʱ�Ļص������������[�ɼ���״̬]{@link @ohos.window:window.OcclusionState}
     *     ��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onOcclusionStateChanged(callback: Callback<OcclusionState>): void;

    /**
     * �رմ��ڿɼ���״̬�仯�¼��ļ�����
     *
     * @param { 'occlusionStateChanged' } type - �����¼����̶�Ϊ'occlusionStateChanged'�������ڿɼ��Ա仯�¼���
     * @param { Callback<OcclusionState> } [callback] - �������������رոü�������δ�����������ر����д��ڿɼ��Ա仯�ļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    off(type: 'occlusionStateChanged', callback?: Callback<OcclusionState>): void;

    /**
     * �رմ��ڿɼ���״̬�仯�¼��ļ�����
     *
     * @param { Callback<OcclusionState> } [callback] - �������������رոü�������δ�����������ر����д��ڿɼ��Ա仯�ļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offOcclusionStateChanged(callback?: Callback<OcclusionState>): void;

    /**
     * ���������ڵ���ʾ�������ԣ�ʹ��callback�첽�ص�����غ���������ʵ����ѯ
     * [�������л�](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-landscape-and-portrait-development)����������
     * ���ú���Ч��������
     *
     * @param { Orientation } orientation - ������ʾ��������ԡ�
     * @param { AsyncCallback<void> } callback - �ص��������ûص��������ص��ý���Ƿ�ɹ�����Ӧ����ת��Ч������
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Failed to convert parameter to Orientation.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>): void;

    /**
     * ���������ڵ���ʾ�������ԣ�ͨ��Promise�첽������ʾ�����ִ�н�����������ڵ��ú���Ч��OrientationResult����window.
     * [OrientationExecutionResult]{@link @ohos.window:window.OrientationExecutionResult}.ORIENTATION_IGNORED��
     *
     * @param { Orientation } orientation - ������ʾ��������ԡ�
     * @returns { Promise<OrientationResult> } Promise�������ô�����ʾ�����ִ�н����
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *                                          1. The window is not created or destroyed;
     *                                          2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setPreferredOrientationWithResult(orientation: Orientation): Promise<OrientationResult>;

    /**
     * ��ȡ���ڵ���ʾ�������ԡ�δָ������ʱ������window.Orientation.UNSPECIFIED��
     *
     * @returns { Orientation } ������ʾ��������ԡ�
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getPreferredOrientation(): Orientation;

    /**
     * ���ݵ�ǰ������ָ����ҳ��·��Ϊ���ڼ��ؾ���ҳ�����ݣ�ͨ��LocalStorage����״̬���Ը����ص�ҳ�棬ʹ��callback�첽�ص���
     * 
     * ������UIAbility����������ʹ�øýӿڣ��ظ����ý������پɵ�ҳ�����ݣ���UIContent���ټ����µ�ҳ�����ݣ������ʹ�á�
     * 
     * ��ǰUI��ִ�������Ŀ��ܲ���ȷ�����Բ������ڱ��ӿڵĻص���������UI��صĲ�����
     *
     * @param { string } path - Ҫ���ص������е�ҳ�����ݵ�·������·�������ӵ����̵�main_pages.json�ļ��С���֧�����·��д��������main_pages.json�е�srcȡֵ����һ�¡�
     * @param { LocalStorage } storage - ҳ�漶UI״̬�洢��Ԫ����������Ϊ���ص����ڵ�ҳ�����ݴ���״̬���ԡ�
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * ���ݵ�ǰ������ָ����ҳ��·��Ϊ���ڼ��ؾ���ҳ�����ݣ�ͨ��LocalStorage����״̬���Ը����ص�ҳ�棬ʹ��Promise�첽�ص���
     * 
     * ������UIAbility����������ʹ�øýӿڣ��ظ����ý������پɵ�ҳ�����ݣ���UIContent���ټ����µ�ҳ�����ݣ������ʹ�á�
     * 
     * ��ǰUI��ִ�������Ŀ��ܲ���ȷ�����Բ������ڱ��ӿڵĻص���������UI��صĲ�����
     *
     * @param { string } path - Ҫ���ص������е�ҳ�����ݵ�·������·�������ӵ����̵�main_pages.json�ļ��С���֧�����·��д��������main_pages.json�е�srcȡֵ����һ�¡�
     * @param { LocalStorage } storage - ҳ�漶UI״̬�洢��Ԫ����������Ϊ���ص����ڵ�ҳ�����ݴ���״̬���ԡ�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    loadContent(path: string, storage: LocalStorage): Promise<void>;

    /**
     * Ϊ��ǰ���ڼ��ؾ���ҳ�����ݣ�ʹ��callback�첽�ص���
     * 
     * ������UIAbility����������ʹ�øýӿڣ���ε��øýӿڻ������پɵ�ҳ�����ݣ���UIContent���ټ����µ�ҳ�����ݣ������ʹ�á�
     * 
     * ��ǰUI��ִ�������Ŀ��ܲ���ȷ�����Բ������ڱ��ӿڵĻص���������UI��صĲ�����
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}�����
     *
     * @param { string } path - Ҫ���ص������е�ҳ�����ݵ�·����Stageģ���¸�·�������ӵ����̵�main_pages.json�ļ��У�FAģ���¸�·�������ӵ����̵�config.json�ļ��С���֧�����
     *     ·��д��������main_pages.json��config.json�е�srcȡֵ����һ�¡�
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setUIContent(path: string, callback: AsyncCallback<void>)
     */
    loadContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * Ϊ��ǰ���ڼ��ؾ���ҳ�����ݣ�ʹ��Promise�첽�ص���
     * 
     * ������UIAbility����������ʹ�øýӿڣ���ε��øýӿڻ������پɵ�ҳ�����ݣ���UIContent���ټ����µ�ҳ�����ݣ������ʹ�á�
     * 
     * ��ǰUI��ִ�������Ŀ��ܲ���ȷ�����Բ������ڱ��ӿڵĻص���������UI��صĲ�����
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��[setUIContent()]{@link window.Window.setUIContent(path: string)}�����
     *
     * @param { string } path - Ҫ���ص������е�ҳ�����ݵ�·����Stageģ���¸�·�������ӵ����̵�main_pages.json�ļ��У�FAģ���¸�·�������ӵ����̵�config.json�ļ��С���֧�����
     *     ·��д��������main_pages.json��config.json�е�srcȡֵ����һ�¡�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setUIContent(path: string)
     */
    loadContent(path: string): Promise<void>;

    /**
     * ��ȡUIContextʵ����
     *
     * @returns { UIContext } ����UIContextʵ������
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getUIContext() : UIContext;

    /**
     * ���ݵ�ǰ������ָ����ĳ��ҳ��·��Ϊ���ڼ��ؾ���ҳ�����ݣ�ʹ��callback�첽�ص���
     *
     * @param { string } path - Ҫ���ص������е�ҳ�����ݵ�·����Stageģ���¸�·�������ӵ����̵�main_pages.json�ļ��У�FAģ���¸�·�������ӵ����̵�config.json�ļ��С���֧�����·��д��������main_pages.json��config.json�е�srcȡֵ����һ�¡�
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setUIContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * ���ݵ�ǰ������ָ����ĳ��ҳ��·��Ϊ���ڼ��ؾ���ҳ�����ݣ�ʹ��Promise�첽�ص���
     *
     * @param { string } path - Ҫ���ص������е�ҳ�����ݵ�·����Stageģ���¸�·�������ӵ����̵�main_pages.json�ļ��У�FAģ���¸�·�������ӵ����̵�config.json�ļ��С���֧�����·��д��������main_pages.json��config.json�е�srcȡֵ����һ�¡�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setUIContent(path: string): Promise<void>;

    /**
     * ����ָ��·��ҳ������Ϊ��ǰ���ڼ���[����·��](docroot://ui/arkts-routing.md#����·��)ҳ�棬ͨ��LocalStorage����״̬����������ҳ�棬ʹ��callback�첽�ص���
     * 
     * ������UIAbility����������ʹ�øýӿڣ��ظ����øýӿڽ������پɵ�ҳ�����ݣ���UIContent���ټ����µ�ҳ�����ݣ������ʹ�á�
     * 
     * ��ǰUI��ִ�������Ŀ��ܲ���ȷ�����Բ������ڱ��ӿڵĻص���������UI��صĲ�����
     *
     * @param { string } name - ����·��ҳ������ơ�
     * @param { LocalStorage } storage - ҳ�漶UI״̬�洢��Ԫ����������Ϊ���ص����ڵ�ҳ�����ݴ���״̬���ԡ�
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * ����ָ��·��ҳ������Ϊ��ǰ���ڼ���[����·��](docroot://ui/arkts-routing.md#����·��)ҳ�棬ʹ��callback�첽�ص���
     * 
     * ������UIAbility����������ʹ�øýӿڣ��ظ����øýӿڽ������پɵ�ҳ�����ݣ���UIContent���ټ����µ�ҳ�����ݣ������ʹ�á�
     * 
     * ��ǰUI��ִ�������Ŀ��ܲ���ȷ�����Բ������ڱ��ӿڵĻص���������UI��صĲ�����
     *
     * @param { string } name - ����·��ҳ������ơ�
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, callback: AsyncCallback<void>): void;

    /**
     * ����ָ��·��ҳ������Ϊ��ǰ���ڼ���[����·��](docroot://ui/arkts-routing.md#����·��)ҳ�棬ͨ��LocalStorage����״̬����������ҳ�棬ʹ��Promise�첽�ص���
     * 
     * ������UIAbility����������ʹ�øýӿڣ��ظ����øýӿڽ������پɵ�ҳ�����ݣ���UIContent���ټ����µ�ҳ�����ݣ������ʹ�á�
     * 
     * ��ǰUI��ִ�������Ŀ��ܲ���ȷ�����Բ������ڱ��ӿڵĻص���������UI��صĲ�����
     *
     * @param { string } name - ����·��ҳ������ơ�
     * @param { LocalStorage } storage - ҳ�漶UI״̬�洢��Ԫ����������Ϊ���ص����ڵ�ҳ�����ݴ���״̬���ԣ�Ĭ��ֵΪ�ա�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, storage?: LocalStorage): Promise<void>;

    /**
     * �жϵ�ǰ�����Ƿ�����ʾ��ʹ��callback�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��[isWindowShowing()]{@link window.Window.isWindowShowing}�����
     *
     * @param { AsyncCallback<boolean> } callback - �ص�����������true��ʾ��ǰ��������ʾ������false��ʾ��ǰ����δ��ʾ��
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.isWindowShowing
     */
    isShowing(callback: AsyncCallback<boolean>): void;

    /**
     * �жϵ�ǰ�����Ƿ�����ʾ��ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��[isWindowShowing()]{@link window.Window.isWindowShowing}�����
     *
     * @returns { Promise<boolean> } Promise���󡣷���true��ʾ��ǰ��������ʾ������false��ʾ��ǰ����δ��ʾ��
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.isWindowShowing
     */
    isShowing(): Promise<boolean>;

    /**
     * �жϵ�ǰ�����Ƿ�����ʾ��
     *
     * @returns { boolean } ��ǰ�����Ƿ�����ʾ��true��ʾ��ǰ��������ʾ��false���ʾ��ǰ����δ��ʾ��
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    isWindowShowing(): boolean;

    /**
     * �������ڳߴ�仯�ļ������������̵߳��á�
     *
     * @param { 'windowSizeChange' } type - �����¼����̶�Ϊ'windowSizeChange'�������ڳߴ�仯�¼���
     * @param { Callback<Size> } callback - �ص����������ص�ǰ�Ĵ��ڳߴ硣
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    on(type: 'windowSizeChange', callback: Callback<Size>): void;

    /**
     * �������ڳߴ�仯�ļ������������̵߳��á�
     *
     * @param { Callback<Size> } callback - �ص����������ص�ǰ�Ĵ��ڳߴ硣
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    onWindowSizeChange(callback: Callback<Size>): void;

    /**
     * �رմ��ڳߴ�仯�ļ������������̵߳��á�
     *
     * @param { 'windowSizeChange' } type - �����¼����̶�Ϊ'windowSizeChange'�������ڳߴ�仯�¼���
     * @param { Callback<Size> } [callback] - �ص����������ص�ǰ�Ĵ��ڳߴ硣��������������رոü�����
     *     ���δ�����������رմ��ڳߴ�仯�ļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    off(type: 'windowSizeChange', callback?: Callback<Size>): void;

    /**
     * �رմ��ڳߴ�仯�ļ������������̵߳��á�
     *
     * @param { Callback<Size> } [callback] - �ص����������ص�ǰ�Ĵ��ڳߴ硣��������������رոü�����
     *     ���δ�����������رմ��ڳߴ�仯�ļ�����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    offWindowSizeChange(callback?: Callback<Size>): void;

    /**
     * ������ǰ����ϵͳ�������仯�ļ�����
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [on('avoidAreaChange')]{@link window.Window.on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>)}��
     * > ����
     *
     * @param { 'systemAvoidAreaChange' } type - �����¼����̶�Ϊ'systemAvoidAreaChange'����ϵͳ�������仯�¼���
     * @param { Callback<AvoidArea> } callback - �ص����������ص�ǰ��������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>)
     */
    on(type: 'systemAvoidAreaChange', callback: Callback<AvoidArea>): void;

    /**
     * �رյ�ǰ����ϵͳ�������仯�ļ�����
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [off('avoidAreaChange')]{@link window.Window.off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaOptions>)}
     * > �����
     *
     * @param { 'systemAvoidAreaChange' } type - �����¼����̶�Ϊ'systemAvoidAreaChange'����ϵͳ�������仯�¼���
     * @param { Callback<AvoidArea> } callback - �ص����������ص�ǰ���������������������رոü�������δ�����������ر�����ϵͳ�������仯�ļ�����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaOptions>)
     */
    off(type: 'systemAvoidAreaChange', callback?: Callback<AvoidArea>): void;

    /**
     * ������ǰӦ�ô���ϵͳ��������仯�ļ�����
     * 
     * ������/�Ӵ��ڣ�
     * 
     * - [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬��������������ģʽ��������ģʽΪ
     * [window.WindowStatusType.FLOATING]{@link @ohos.window:window.WindowStatusType}���´����ص�ʱ�������ڹ̶�̬�����̣�
     * [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_KEYBOARD�����͵ı�������
     * - �������ڷ����ɴ���״̬��������������ģʽ�´����ص�ʱ��������ϵͳ����[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_SYSTEM�����͵ı�������
     * - �����������ೡ���´����ص�ʱ�������ڷ�������������ģʽ�»��豸����ΪPhone��Tablet�����ܷ��ؼ����ı������򣬷���ֱ�ӷ��ؿյı�������
     * - �Ӵ����ڷ����ɴ���״̬���������������ģʽ�´����ص�ʱ�������Ӵ��ڵ�λ�úʹ�С��������һ��ʱ�����ܷ��ؼ������Ӵ��ڱ������򣬷���ֱ�ӷ��ؿյı�������
     * 
     * ȫ����������ģ̬����ϵͳ���ڣ�
     * 
     * - ���ڵ���[setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled}����ʹ�ܺ󣬴����ص�ʱ���ܷ��ؼ����ı������򣬷���ֱ�ӷ��ؿյı�
     * ������
     * 
     * <!--RP7-->�����Ĵ����������ص��ĳ������£�Ӧ�ô�����ȫ��ģʽ������ģʽ������ģʽ֮����л���Ӧ�ô�����ת�����۵��豸����Ļ�۵�״̬�����仯��Ӧ�ô����ڶ��豸֮�����ת��<!--RP7End-->
     *
     * @param { 'avoidAreaChange' } type - �����¼����̶�Ϊ'avoidAreaChange'����ϵͳ�������仯�¼���
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area and
     *     area type. [since 9 - 11]
     * @param { Callback<AvoidAreaOptions> } callback - �ص����������ص�ǰ�������Լ����������͡� [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>): void;

    /**
     * ������ǰӦ�ô���ϵͳ��������仯�ļ�����
     * 
     * ������/�Ӵ��ڣ�
     * 
     * - [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬��������������ģʽ��������ģʽΪ
     * [window.WindowStatusType.FLOATING]{@link @ohos.window:window.WindowStatusType}���´����ص�ʱ�������ڹ̶�̬�����̣�
     * [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_KEYBOARD�����͵ı�������
     * - �������ڷ����ɴ���״̬��������������ģʽ�´����ص�ʱ��������ϵͳ����[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}ΪTYPE_SYSTEM�����͵ı�������
     * - �����������ೡ���´����ص�ʱ�������ڷ�������������ģʽ�»��豸����ΪPhone��Tablet�����ܷ��ؼ����ı������򣬷���ֱ�ӷ��ؿյı�������
     * - �Ӵ����ڷ����ɴ���״̬���������������ģʽ�´����ص�ʱ�������Ӵ��ڵ�λ�úʹ�С��������һ��ʱ�����ܷ��ؼ������Ӵ��ڱ������򣬷���ֱ�ӷ��ؿյı�������
     * 
     * ȫ����������ģ̬����ϵͳ���ڣ�
     * 
     * - ���ڵ���[setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled}����ʹ�ܺ󣬴����ص�ʱ���ܷ��ؼ����ı������򣬷���ֱ�ӷ��ؿյı�
     * ������
     * 
     * <!--RP7-->�����Ĵ����������ص��ĳ������£�Ӧ�ô�����ȫ��ģʽ������ģʽ������ģʽ֮����л���Ӧ�ô�����ת�����۵��豸����Ļ�۵�״̬�����仯��Ӧ�ô����ڶ��豸֮�����ת��<!--RP7End-->
     *
     * @param { Callback<AvoidAreaOptions> } callback - �ص����������ص�ǰ�������Լ����������͡� [since 12]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    onAvoidAreaChange(callback: Callback<AvoidAreaOptions>): void;

    /**
     * �رյ�ǰ����ϵͳ�������仯�ļ�����
     *
     * @param { 'avoidAreaChange' } type - �����¼����̶�Ϊ'avoidAreaChange'����ϵͳ�������仯�¼���
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area and
     *     area type. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all
     *     subscriptions to the specified event are canceled. [since 9 - 11]
     * @param { Callback<AvoidAreaOptions> } callback - �ص����������ص�ǰ�������Լ����������͡���������������رոü��������δ�����������ر�����ϵͳ�������仯�ļ���
     *     �� [since 12 - 19]
     * @param { Callback<AvoidAreaOptions> } [callback] - �ص����������ص�ǰ�������Լ����������͡���������������رոü��������δ�����������ر�����ϵͳ�������仯�ļ���
     *     �� [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaOptions>): void;

    /**
     * �رյ�ǰ����ϵͳ�������仯�ļ�����
     *
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area and
     *     area type. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all
     *     subscriptions to the specified event are canceled. [since 9 - 11]
     * @param { Callback<AvoidAreaOptions> } callback - �ص����������ص�ǰ�������Լ����������͡���������������رոü��������δ�����������ر�����ϵͳ�������仯�ļ���
     *     �� [since 12 - 19]
     * @param { Callback<AvoidAreaOptions> } [callback] - �ص����������ص�ǰ�������Լ����������͡���������������رոü��������δ�����������ر�����ϵͳ�������仯�ļ���
     *     �� [since 20]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    offAvoidAreaChange(callback?: Callback<AvoidAreaOptions>): void;

    /**
     * �����̶�̬�����̸߶ȱ仯�ļ������������̴ӱ����ڻ������봰�����ص�����ʱ��֪ͨ���̸߶ȱ仯����API version 10��ʼ���йؽ�����������Ϊ�̶�̬������̬�ķ�������μ�
     * [���뷨����]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}��
     *
     * @param { 'keyboardHeightChange' } type - �����¼����̶�Ϊ'keyboardHeightChange'�������̸߶ȱ仯�¼���
     * @param { Callback<int> } callback - �ص����������ص�ǰ�ļ��̸߶ȡ�����ֵΪ��������λΪpx��
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     */
    on(type: 'keyboardHeightChange', callback: Callback<int>): void;

    /**
     * Register the callback of keyboard height change
     *
     * @param { Callback<int> } callback - Callback used to return the current keyboard height,
     *     which is an integer, in px.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onKeyboardHeightChange(callback: Callback<int>): void;

    /**
     * �رչ̶�̬�����̸߶ȱ仯�ļ�����ʹӦ�ó����ٽ��ռ��̸߶ȱ仯��֪ͨ����API version 10��ʼ���йؽ�����������Ϊ�̶�̬������̬�ķ�������μ�
     * [���뷨����]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}��
     *
     * @param { 'keyboardHeightChange' } type - �����¼����̶�Ϊ'keyboardHeightChange'�������̸߶ȱ仯�¼���
     * @param { Callback<int> } [callback] - �ص����������ص�ǰ�ļ��̸߶ȣ�����ֵΪ��������λΪpx���������������رոü�����δ�����������ر����й̶�̬�����̸߶ȱ仯�ļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     */
    off(type: 'keyboardHeightChange', callback?: Callback<int>): void;

    /**
     * ��ע����̸߶ȼ���
     *
     * @param { Callback<int> } [callback] - �������ڷ��ص�ǰ���̸߶ȣ���λΪpx�����û���ṩ�ü��������ע�����м��̸߶ȼ�����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offKeyboardHeightChange(callback?: Callback<int>): void;

    /**
     * �����̶�̬�����̼�����ʼ��ʾ�ļ������˼����ڹ̶�̬�����̼�����ʼ��ʾ��������������̬�л�Ϊ�̶�̬ʱ�������˼������Ե�ǰ��������ع̶�̬�����̵�Ӧ�ô�����Ч��������������Ӧ���������뷨���̵������ϣ����뷨��������ֻ֪ͨ���������
     * �񽹴��ڣ���������������Ӧ�ô��ڡ�
     * 
     * �ı�������Ϊ�̶�̬��������̬������ϸ������μ�[���뷨����]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}��
     *
     * @param { 'keyboardWillShow' } type - �����¼����̶�Ϊ'keyboardWillShow'�����̶�̬�����̼�����ʼ��ʾ���¼���
     * @param { Callback<KeyboardInfo> } callback - �ص����������������̴�����Ϣ��
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardWillShow can not work correctly due to
     *     limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'keyboardWillShow', callback: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboard will show
     *
     * @param { Callback<KeyboardInfo> } callback - Callback invoked before the keyboard show animation start.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    onKeyboardWillShow(callback: Callback<KeyboardInfo>): void;

    /**
     * �رչ̶�̬�����̼�����ʼ��ʾ�ļ������ı����뷨����Ϊ�̶�̬��������̬������ϸ������μ�
     * [���뷨����]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}��
     *
     * @param { 'keyboardWillShow' } type - �����¼����̶�Ϊ'keyboardWillShow'�����̶�̬�����̼�����ʼ��ʾ���¼���
     * @param { Callback<KeyboardInfo> } [callback] - �ص����������������̴�����Ϣ���������������رոü��������δ�����������ر����й̶�̬�����̼�����ʼ��ʾ�ļ�����
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardWillShow can not work correctly due to
     *     limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'keyboardWillShow', callback?: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboard will show
     *
     * @param { Callback<KeyboardInfo> } [callback] - Unregister the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    offKeyboardWillShow(callback?: Callback<KeyboardInfo>): void;

    /**
     * �����̶�̬��������ʾ������ɵļ������˼����ڹ̶�̬��������ʾ������ɻ�������������̬�л����̶�̬ʱ�������˼������Ե�ǰ��������ع̶�̬�����̵�Ӧ�ô�����Ч��������������Ӧ���������뷨���̵������ϣ����뷨��������ֻ֪ͨ���������
     * �񽹴��ڣ���������������Ӧ�ô��ڡ�
     * 
     * �ı�������Ϊ�̶�̬��������̬������ϸ������μ�[���뷨����]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}��
     *
     * @param { 'keyboardDidShow' } type - �����¼����̶�Ϊ'keyboardDidShow'�����̶�̬��������ʾ��������¼���
     * @param { Callback<KeyboardInfo> } callback - �ص����������������̴�����Ϣ��
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardDidShow can not work correctly due to
     *     limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     */
    on(type: 'keyboardDidShow', callback: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboard did show
     *
     * @param { Callback<KeyboardInfo> } callback - Callback invoked when the keyboard show animation is completed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardDidShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    onKeyboardDidShow(callback: Callback<KeyboardInfo>): void;

    /**
     * �رչ̶�̬��������ʾ������ɵļ������ı����뷨����Ϊ�̶�̬��������̬������ϸ������μ�
     * [���뷨����]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}��
     *
     * @param { 'keyboardDidShow' } type - �����¼����̶�Ϊ'keyboardDidShow'�����̶�̬��������ʾ��������¼���
     * @param { Callback<KeyboardInfo> } [callback] - �ص����������������̴�����Ϣ���������������رոü��������δ�����������ر����й̶�̬��������ʾ������ɵļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardDidShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     */
    off(type: 'keyboardDidShow', callback?: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboard did show
     *
     * @param { Callback<KeyboardInfo> } [callback] - Unregister the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardDidShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    offKeyboardDidShow(callback?: Callback<KeyboardInfo>): void;

    /**
     * �����̶�̬�����̼�����ʼ���صļ������˼����ڹ̶�̬�����̼�����ʼ���ػ��������ɹ̶�̬�л�Ϊ����̬ʱ�������˼������Ե�ǰ��������ع̶�̬�����̵�Ӧ�ô�����Ч��������������Ӧ���������뷨���̵������ϣ����뷨��������ֻ֪ͨ���������
     * �񽹴��ڣ���������������Ӧ�ô��ڡ�
     * 
     * �ı�������Ϊ�̶�̬��������̬������ϸ������μ�[���뷨����]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}��
     *
     * @param { 'keyboardWillHide' } type - �����¼����̶�Ϊ'keyboardWillHide'�����̶�̬�����̼�����ʼ���ص��¼���
     * @param { Callback<KeyboardInfo> } callback - �ص����������������̴�����Ϣ��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'keyboardWillHide', callback: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboard will hide
     *
     * @param { Callback<KeyboardInfo> } callback - Callback invoked before the keyboard hide animation start.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    onKeyboardWillHide(callback: Callback<KeyboardInfo>): void;

    /**
     * �رչ̶�̬�����̼�����ʼ���صļ������ı����뷨����Ϊ�̶�̬�л�������̬������ϸ������μ�
     * [���뷨����]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}��
     *
     * @param { 'keyboardWillHide' } type - �����¼����̶�Ϊ'keyboardWillHide'�����̶�̬�����̼�����ʼ���ص��¼���
     * @param { Callback<KeyboardInfo> } [callback] - �ص����������������̴�����Ϣ���������������رոü��������δ�����������ر����й̶�̬�����̼�����ʼ���صļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'keyboardWillHide', callback?: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboard will hide
     *
     * @param { Callback<KeyboardInfo> } [callback] - Unregister the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    offKeyboardWillHide(callback?: Callback<KeyboardInfo>): void;

    /**
     * �����̶�̬���������ض�����ɵļ������˼����ڹ̶�̬���������ض�����ɻ��������ɹ̶�̬�л�������̬ʱ�������˼������Ե�ǰ��������ع̶�̬�����̵�Ӧ�ô�����Ч��������������Ӧ���������뷨���̵������ϣ����뷨��������ֻ֪ͨ���������
     * �񽹴��ڣ���������������Ӧ�ô��ڡ�
     * 
     * �ı�������Ϊ�̶�̬��������̬������ϸ������μ�[���뷨����]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}��
     *
     * @param { 'keyboardDidHide' } type - �����¼����̶�Ϊ'keyboardDidHide'�����̶�̬���������ض�������¼���
     * @param { Callback<KeyboardInfo> } callback - �ص����������������̴�����Ϣ��
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardDidHide can not work correctly due to
     *     limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     */
    on(type: 'keyboardDidHide', callback: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboard did hide
     *
     * @param { Callback<KeyboardInfo> } callback - Callback invoked when the keyboard hide animation is completed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardDidHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    onKeyboardDidHide(callback: Callback<KeyboardInfo>): void;

    /**
     * �رչ̶�̬���������ض�����ɵļ������ı����뷨����Ϊ�̶�̬�л�������̬������ϸ������μ�
     * [���뷨����]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}��
     *
     * @param { 'keyboardDidHide' } type - �����¼����̶�Ϊ'keyboardDidHide'�����̶�̬���������ض�������¼���
     * @param { Callback<KeyboardInfo> } [callback] - �ص����������������̴�����Ϣ���������������رոü��������δ�����������ر����й̶�̬���������ض�����ɵļ�����
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardDidHide can not work correctly due to
     *     limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     */
    off(type: 'keyboardDidHide', callback?: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboard did hide
     *
     * @param { Callback<KeyboardInfo> } [callback] - Unregister the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardDidHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    offKeyboardDidHide(callback?: Callback<KeyboardInfo>): void;

    /**
     * ��������������Χ��ĵ���¼��ļ�����
     *
     * @param { 'touchOutside' } type - �����¼����̶�Ϊ'touchOutside'���������ڷ�Χ��ĵ���¼���
     * @param { Callback<void> } callback - �ص�������������¼������ڱ����ڷ�Χ֮��Ļص���
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'touchOutside', callback: Callback<void>): void;

    /**
     * Subscribes to the touch event outside this window.
     *
     * @param { Callback<void> } callback - Callback used to return the click event outside this window.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 22 static
     */
    onTouchOutside(callback: Callback<void>): void;

    /**
     * �رձ���������Χ��ĵ���¼��ļ�����
     *
     * @param { 'touchOutside' } type - �����¼����̶�Ϊ'touchOutside'���������ڷ�Χ��ĵ���¼���
     * @param { Callback<void> } callback - �ص�������������¼������ڱ����ڷ�Χ֮��Ļص�����������������رոü��������δ�����������ر����б���������Χ��ĵ���¼��ļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11 dynamic
     */
    off(type: 'touchOutside', callback?: Callback<void>): void;

    /**
     * Unsubscribes from the touch event outside this window.
     *
     * @param { Callback<void> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 22 static
     */
    offTouchOutside(callback?: Callback<void>): void;

    /**
     * ����������������Ļ�仯�¼��ļ��������磬��ǰ�����ƶ���������Ļʱ�����ԴӴ˽ӿڼ����������Ϊ��
     *
     * @param { 'displayIdChange' } type - �����¼����̶�Ϊ'displayIdChange'����������������Ļ�仯���¼���
     * @param { Callback<long> } callback - �ص���������������������Ļ�����仯��Ļص����ص���������number���Ͳ�������ʾ����������Ļ��displayId��
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     */
    on(type: 'displayIdChange', callback: Callback<long>): void;

    /**
     * ����������������Ļ�仯�¼��ļ��������磬��ǰ�����ƶ���������Ļʱ�����ԴӴ˽ӿڼ����������Ϊ��
     *
     * @param { Callback<long> } callback - �ص���������������������Ļ�����仯��Ļص����ص���������number���Ͳ�������ʾ����������Ļ��displayId��
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onDisplayIdChange(callback: Callback<long>): void;

    /**
     * �رձ�����������Ļ�仯�¼��ļ�����
     *
     * @param { 'displayIdChange' } type - �����¼����̶�Ϊ'displayIdChange'����������������Ļ�仯���¼���
     * @param { Callback<long> } [callback] - �ص���������������������Ļ�����仯ʱ�Ļص�����������������رոü��������δ�����������ر����б�����������Ļ�仯�¼��Ļص���
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     */
    off(type: 'displayIdChange', callback?: Callback<long>): void;

    /**
     * �رձ�����������Ļ�仯�¼��ļ�����
     *
     * @param { Callback<long> } [callback] - �ص���������������������Ļ�����仯ʱ�Ļص�����������������رոü��������δ�����������ر����б�����������Ļ�仯�¼��Ļص���
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offDisplayIdChange(callback?: Callback<long>): void;

    /**
     * ���������ڿɼ�״̬�仯�¼��ļ��������ӿڷ��صĿɼ��������������Ŀɼ��Կ��ܴ������������³�����
     * 
     * - �������ڵ���Ӱ���򣨿ɷֱ�ͨ��[setWindowShadowEnabled]{@link @ohos.window:window.Window.setWindowShadowEnabled}��
     * [setWindowShadowRadius]{@link @ohos.window:window.Window.setWindowShadowRadius}�����Ƿ���ʾ��Ӱ�Լ���Ӧ����Ӱ�뾶������סҲ���ڵ�����ʱ������������
     * ��ȫ�ɼ�����ʵ�ʷ��ص��ǲ��ֿɼ���
     * - �ϲ㴰�ڴ���͸��Ч��ʱ��������ȫ��͸��֮�������͸���̶ȣ������ڵ��²㴰�ڣ���ʱ�²㴰���ǿɼ��ġ�
     * - ��������ڶ���Ч���µĴ���Ҳ�����ڵ�ס�²㴰�ڣ��������ֻ��豸���϶�������ʱ���ص��²㴰����Ȼ�ǿɼ��ġ�
     *
     * @param { 'windowVisibilityChange' } type - �����¼����̶�Ϊ'windowVisibilityChange'���������ڿɼ�״̬�仯���¼���
     * @param { Callback<boolean> } callback - �ص��������������ڿɼ�״̬�����仯��Ļص����ص���������boolean���Ͳ����������ز���Ϊtrueʱ��ʾ���ڿɼ��������ʾ���ڲ��ɼ���
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'windowVisibilityChange', callback: Callback<boolean>): void;

    /**
     * ���������ڿɼ�״̬�仯�¼��ļ��������ӿڷ��صĿɼ��������������Ŀɼ��Կ��ܴ������������³�����
     * 
     * - �������ڵ���Ӱ���򣨿ɷֱ�ͨ��[setWindowShadowEnabled]{@link @ohos.window:window.Window.setWindowShadowEnabled}��
     * [setWindowShadowRadius]{@link @ohos.window:window.Window.setWindowShadowRadius}�����Ƿ���ʾ��Ӱ�Լ���Ӧ����Ӱ�뾶������סҲ���ڵ�����ʱ������������
     * ��ȫ�ɼ�����ʵ�ʷ��ص��ǲ��ֿɼ���
     * - �ϲ㴰�ڴ���͸��Ч��ʱ��������ȫ��͸��֮�������͸���̶ȣ������ڵ��²㴰�ڣ���ʱ�²㴰���ǿɼ��ġ�
     * - ��������ڶ���Ч���µĴ���Ҳ�����ڵ�ס�²㴰�ڣ��������ֻ��豸���϶�������ʱ���ص��²㴰����Ȼ�ǿɼ��ġ�
     *
     * @param { Callback<boolean> } callback - �ص��������������ڿɼ�״̬�����仯��Ļص����ص���������boolean���Ͳ����������ز���Ϊtrueʱ��ʾ���ڿɼ��������ʾ���ڲ��ɼ���
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowVisibilityChange(callback: Callback<boolean>): void;

    /**
     * �رձ����ڿɼ�״̬�仯�¼��ļ�����
     *
     * @param { 'windowVisibilityChange' } type - �����¼����̶�Ϊ'windowVisibilityChange'���������ڿɼ�״̬�仯���¼���
     * @param { Callback<boolean> } callback - �ص��������������ڿɼ�״̬�����仯ʱ�Ļص�����������������رոü��������δ�����������ر����б����ڿɼ�״̬�仯�¼��Ļص�
     *     �� [since 11 - 11]
     * @param { Callback<boolean> } [callback] - �ص��������������ڿɼ�״̬�����仯ʱ�Ļص�����������������رոü��������δ�����������ر����б����ڿɼ�״̬�仯�¼��Ļص�
     *     �� [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'windowVisibilityChange', callback?: Callback<boolean>): void;

    /**
     * �رձ����ڿɼ�״̬�仯�¼��ļ�����
     *
     * @param { Callback<boolean> } [callback] - Callback used to return the visibility status of the window. If a value
     *     is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled. [since 11 - 11]
     * @param { Callback<boolean> } [callback] - �ص��������������ڿɼ�״̬�����仯ʱ�Ļص�����������������رոü��������δ�����������ر����б����ڿɼ�״̬�仯�¼��Ļص�
     *     �� [since 12]
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowVisibilityChange(callback?: Callback<boolean>): void;

    /**
     * ����������������Ļ��ϵͳ��ʾ��С����ϵ���仯�¼��ļ��������磬����������������Ļ����ʾ��С����ϵ��ʱ�����ԴӴ˽ӿڼ����������Ϊ��
     * 
     * �ڽӿڻص������У�����ֱ��ʹ�÷���ֵ����vp��px��ת�������磬������ֵΪdensity������px��ʹ��vp * density = px��
     *
     * @param { 'systemDensityChange' } type - �����¼����̶�Ϊ'systemDensityChange'����������������Ļ��ϵͳ��ʾ��С����ϵ���仯���¼���
     * @param { Callback<double> } callback - �ص���������������������Ļ��ϵͳ��ʾ��С����ϵ�������仯��Ļص����ص���������number���Ͳ�������ʾ��ǰ����������Ļ��ϵͳ��ʾ��С����ϵ����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    on(type: 'systemDensityChange', callback: Callback<double>): void;

    /**
     * ����������������Ļ��ϵͳ��ʾ��С����ϵ���仯�¼��ļ��������磬����������������Ļ����ʾ��С����ϵ��ʱ�����ԴӴ˽ӿڼ����������Ϊ��
     * 
     * �ڽӿڻص������У�����ֱ��ʹ�÷���ֵ����vp��px��ת�������磬������ֵΪdensity������px��ʹ��vp * density = px��
     *
     * @param { Callback<double> } callback - �ص���������������������Ļ��ϵͳ��ʾ��С����ϵ�������仯��Ļص����ص���������number���Ͳ�������ʾ��ǰ����������Ļ��ϵͳ��ʾ��С����ϵ����
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onSystemDensityChange(callback: Callback<double>): void;

    /**
     * �رձ�����������Ļ��ϵͳ��ʾ��С����ϵ���仯�¼��ļ�����
     * 
     * �ڽӿڻص������У�����ֱ��ʹ�÷���ֵ����vp��px��ת�������磬������ֵΪdensity������px��ʹ��vp * density = px��
     *
     * @param { 'systemDensityChange' } type - �����¼����̶�Ϊ'systemDensityChange'����������������Ļ��ϵͳ��ʾ��С����ϵ���仯���¼���
     * @param { Callback<double> } [callback] - �ص���������������������Ļ��ϵͳ��ʾ��С����ϵ�������仯��Ļص�����������������رոü��������δ�����������ر����б�����������Ļ��ϵͳ��ʾ
     *     ��С����ϵ���仯�¼��Ļص���
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    off(type: 'systemDensityChange', callback?: Callback<double>): void;

    /**
     * �رձ�����������Ļ��ϵͳ��ʾ��С����ϵ���仯�¼��ļ�����
     * 
     * �ڽӿڻص������У�����ֱ��ʹ�÷���ֵ����vp��px��ת�������磬������ֵΪdensity������px��ʹ��vp * density = px��
     *
     * @param { Callback<double> } [callback] - �ص���������������������Ļ��ϵͳ��ʾ��С����ϵ�������仯��Ļص�����������������رոü��������δ�����������ر����б�����������Ļ��ϵͳ��ʾ
     *     ��С����ϵ���仯�¼��Ļص���
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offSystemDensityChange(callback?: Callback<double>): void;

    /**
     * ���������ڵ������ڿ�����Ļʹ��ȫ��ģʽ��ʾ��״̬�仯�¼���
     *
     * @param { 'mainWindowFullScreenAcrossDisplaysChanged' } type - �����¼����̶�Ϊ'mainWindowFullScreenAcrossDisplaysChanged'
     *     ���������ڵ������ڿ�����Ļʹ��ȫ��ģʽ��ʾ��״̬�仯��
     * @param { Callback<boolean> } callback - �ص��������������ڵ������ڿ�����Ļʹ��ȫ��ģʽ��ʾ��״̬�仯�ص���true��ʾ�����ڽ��������Ļʹ��ȫ��ģʽ��ʾ״̬��false��ʾ�������˳�
     *     ������Ļʹ��ȫ��ģʽ��ʾ״̬��
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    on(type: 'mainWindowFullScreenAcrossDisplaysChanged', callback: Callback<boolean>): void;

    /**
     * ���������ڵ������ڿ�����Ļʹ��ȫ��ģʽ��ʾ��״̬�仯�¼���
     *
     * @param { Callback<boolean> } callback - �ص��������������ڵ������ڿ�����Ļʹ��ȫ��ģʽ��ʾ��״̬�仯�ص���true��ʾ�����ڽ��������Ļʹ��ȫ��ģʽ��ʾ״̬��false��ʾ�������˳�
     *     ������Ļʹ��ȫ��ģʽ��ʾ״̬��
     * @throws { BusinessError } 202 - Permission verification failed. A nonsystem application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onMainWindowFullScreenAcrossDisplaysChanged(callback: Callback<boolean>): void;

    /**
     * ȡ�����������ڵ������ڿ�����Ļʹ��ȫ��ģʽ��ʾ��״̬�仯�¼���
     *
     * @param { 'mainWindowFullScreenAcrossDisplaysChanged' } type - �����¼����̶�Ϊ'mainWindowFullScreenAcrossDisplaysChanged'
     *     ���������ڵ������ڿ�����Ļʹ��ȫ��ģʽ��ʾ��״̬�仯��
     * @param { Callback<boolean> } [callback] - �ص��������������ڵ������ڿ�����Ļʹ��ȫ��ģʽ��ʾ��״̬�仯�ص�����������������رոü��������δ�����������ر����б����ڵ������ڿ���
     *     ��Ļʹ��ȫ��ģʽ��ʾ��״̬�仯�ص���
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    off(type: 'mainWindowFullScreenAcrossDisplaysChanged', callback?: Callback<boolean>): void;

    /**
     * ȡ�����������ڵ������ڿ�����Ļʹ��ȫ��ģʽ��ʾ��״̬�仯�¼���
     *
     * @param { Callback<boolean> } [callback] - �ص��������������ڵ������ڿ�����Ļʹ��ȫ��ģʽ��ʾ��״̬�仯�ص�����������������رոü��������δ�����������ر����б����ڵ������ڿ���
     *     ��Ļʹ��ȫ��ģʽ��ʾ��״̬�仯�ص���
     * @throws { BusinessError } 202 - Permission verification failed. A nonsystem application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    offMainWindowFullScreenAcrossDisplaysChanged(callback?: Callback<boolean>): void;

    /**
     * ������������ָ����ʱʱ�����޽����¼��ļ����������¼�֧���������������¼�����Ļ���ص���¼�����֧�������������¼���
     *
     * @param { 'noInteractionDetected' } type - �����¼����̶�Ϊ'noInteractionDetected'������������ָ����ʱʱ�����޽������¼���
     * @param { number } timeout - ָ���������ڶ೤ʱ�����޽������ص�����λΪ��(s)���ò�����֧���������룬������С��Ϊ�Ƿ�������
     * @param { Callback<void> } callback - �ص�����������������ָ����ʱʱ�����޽����¼�ʱ�Ļص���
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'noInteractionDetected', timeout: number, callback: Callback<void>): void;

    /**
     * Subscribes to non-interaction events in a window within the specified period.
     *     Interaction events include physical keyboard input events and screen touch/click events,
     *     but not soft keyboard input events.
     *
     * @param { long } timeout - The timeout(in seconds) of no interaction detection.
     * @param { Callback<void> } callback - Callback used to notify the window has no interaction for a long time.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    onNoInteractionDetected(timeout: long, callback: Callback<void>): void;

    /**
     * �رձ�������ָ����ʱʱ�����޽����¼��ļ����������¼�֧���������������¼�����Ļ���ص���¼�����֧�������������¼���
     *
     * @param { 'noInteractionDetected' } type - �����¼����̶�Ϊ'noInteractionDetected'������������ָ����ʱʱ�����޽������¼���
     * @param { Callback<void> } callback - �ص�����������������ָ����ʱʱ�����޽����¼�ʱ�Ļص�����������������رոü��������δ�����������ر����б�������ָ����ʱʱ�����޽����¼��ļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'noInteractionDetected', callback?: Callback<void>): void;

    /**
     * Unsubscribes from non-interaction events in a window within the specified period.
     *     Interaction events include physical keyboard input events and screen touch/click events,
     *     but not soft keyboard input events.
     *
     * @param { Callback<void> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    offNoInteractionDetected(callback?: Callback<void>): void;

    /**
     * ���������¼��ļ�����
     *
     * @param { 'screenshot' } type - �����¼����̶�Ϊ'screenshot'���������¼����Կ������Ľ�����hdc������������������ӿ���Ч��
     * @param { Callback<void> } callback - �ص����������������¼�ʱ�Ļص���
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'screenshot', callback: Callback<void>): void;

    /**
     * ���������¼��ļ�����
     *
     * @param { Callback<void> } callback - �ص����������������¼�ʱ�Ļص���
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onScreenshot(callback: Callback<void>): void;

    /**
     * �رս����¼��ļ�����
     *
     * @param { 'screenshot' } type - �����¼����̶�Ϊ'screenshot'���������¼���
     * @param { Callback<void> } [callback] - �ص����������������¼�ʱ�Ļص����������������رոü�������δ�����������ر����н����¼��ļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    off(type: 'screenshot', callback?: Callback<void>): void;

    /**
     * �رս����¼��ļ�����
     *
     * @param { Callback<void> } [callback] - �ص����������������¼�ʱ�Ļص����������������رոü�������δ�����������ر����н����¼��ļ�����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offScreenshot(callback?: Callback<void>): void;

    /**
     * ������Ļ�����¼����͵ļ�����
     *
     * @param { 'screenshotAppEvent' } type - �����¼����̶�Ϊ'screenshotAppEvent'������Ļ�������¼����ͣ��Կ������Ľ�������ݼ������Լ�����������Ч��
     * @param { Callback<ScreenshotEventType> } callback - �ص����������ش����Ľ����¼����͡�
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     */
    on(type: 'screenshotAppEvent', callback: Callback<ScreenshotEventType>): void;

    /**
     * ������Ļ�����¼����͵ļ�����
     *
     * @param { Callback<ScreenshotEventType> } callback - �ص����������ش����Ľ����¼����͡�
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onScreenshotAppEvent(callback: Callback<ScreenshotEventType>): void;

    /**
     * �ر���Ļ�����¼����͵ļ�����
     *
     * @param { 'screenshotAppEvent' } type - �����¼����̶�Ϊ'screenshotAppEvent'������Ļ�������¼����͡�
     * @param { Callback<ScreenshotEventType> } [callback] - �ص����������ش����Ľ����¼����͡��������������رոü�������δ�����������ر����д��ڽ�ͼ�¼��ļ�����
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     */
    off(type: 'screenshotAppEvent', callback?: Callback<ScreenshotEventType>): void;

    /**
     * �ر���Ļ�����¼����͵ļ�����
     *
     * @param { Callback<ScreenshotEventType> } [callback] - �ص����������ش����Ľ����¼����͡��������������رոü�������δ�����������ر����д��ڽ�ͼ�¼��ļ�����
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offScreenshotAppEvent(callback?: Callback<ScreenshotEventType>): void;

    /**
     * ����ģ̬�������ڸǴ��ڵĵ�������¼��ļ�������ģ̬���������������ڵ��ô˽ӿڲ���Ч��
     *
     * @param { 'dialogTargetTouch' } type - �����¼����̶�Ϊ'dialogTargetTouch'����ģ̬�������ڸǴ��ڵĵ�������¼���
     * @param { Callback<void> } callback - �ص�����������������¼�������ģ̬�������ڸǴ��ڵĻص���
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'dialogTargetTouch', callback: Callback<void>): void;

    /**
     * Subscribes to click or touch events in a window covered by a modal window.
     *     This API takes effect only when it is called by a modal window.
     *
     * @param { Callback<void> } callback
          *     - Callback invoked when the click event occurs in the target window of the modal window mode.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 22 static
     */
    onDialogTargetTouch(callback: Callback<void>): void;

    /**
     * �ر�ģ̬����Ŀ�괰�ڵĵ���¼��ļ�����
     *
     * @param { 'dialogTargetTouch' } type - �����¼����̶�Ϊ'dialogTargetTouch'����ģ̬����Ŀ�괰�ڵĵ���¼���
     * @param { Callback<void> } callback - �ص�������������¼�������ģ̬����Ŀ�괰�ڵĻص����������������رոü�������δ�����������ر�����ģ̬����Ŀ�괰�ڵĵ���¼��ļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'dialogTargetTouch', callback?: Callback<void>): void;

    /**
     * Unsubscribes from the touch event of the target window in the modal window mode.
     *
     * @param { Callback<void> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 22 static
     */
    offDialogTargetTouch(callback?: Callback<void>): void;

    /**
     * ���������������ڱ仯�ļ�����
     *
     * @param { 'windowEvent' } type - �����¼����̶�Ϊ'windowEvent'���������������ڱ仯�¼���
     * @param { Callback<WindowEventType> } callback - �ص����������ص�ǰ�Ĵ�����������״̬��
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    on(type: 'windowEvent', callback: Callback<WindowEventType>): void;

    /**
     * ���������������ڱ仯�ļ�����
     *
     * @param { Callback<WindowEventType> } callback - �ص����������ص�ǰ�Ĵ�����������״̬��
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    onWindowEvent(callback: Callback<WindowEventType>): void;

    /**
     * �رմ����������ڱ仯�ļ�����
     *
     * @param { 'windowEvent' } type - �����¼����̶�Ϊ'windowEvent'���������������ڱ仯�¼���
     * @param { Callback<WindowEventType> } callback - �ص����������ص�ǰ�Ĵ�����������״̬���������������رոü�������δ�����������ر����д����������ڱ仯�ļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    off(type: 'windowEvent', callback?: Callback<WindowEventType>): void;

    /**
     * �رմ����������ڱ仯�ļ�����
     *
     * @param { Callback<WindowEventType> } [callback] - �ص��������������������رոü�������δ�����������ر����д����������ڱ仯�ļ�����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    offWindowEvent(callback?: Callback<WindowEventType>): void;

    /**
     * ��������ģʽ�仯�ļ�����������windowStatus�����仯ʱ����֪ͨ����ʱ�������Կ��ܻ�û�и��£������Ҫ���յ�windowStatus�仯֪ͨʱ�ܹ�������ȡ���仯��Ĵ��ڴ�С��λ�ã�����ʹ��
     * [on('windowStatusDidChange')]{@link @ohos.window:window.Window.on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>)}
     * ����
     * 
     * ʹ�õ�ǰ�ӿڿ����������ڵ���maximize��recover����ʱ���յ���λص��������ȡȥ�غ�Ļص�����ʹ��
     * [on('windowStatusDidChange')]{@link window.Window.on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>)}
     * ��
     * 
     * > **˵����**
     * >
     * > ��[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£�Ӧ�õ�
     * > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#�����ļ���ǩ)����С��14ʱ���ڴ������״̬����������������Ļ��2in1�豸����
     * > dock����״̬����Tablet�豸����״̬����ʱ����ֵ��ӦΪWindowStatusType::FULL_SCREEN��Ӧ�õ�
     * > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#�����ļ���ǩ)���ô��ڵ���14ʱ���ڴ������״̬����������������Ļ��2in1�豸����
     * > dock����״̬����Tablet�豸����״̬����ʱ����ֵ��ӦΪWindowStatusType::MAXIMIZE��
     *
     * @param { 'windowStatusChange' } type - �����¼����̶�Ϊ'windowStatusChange'��������ģʽ�仯�¼���
     * @param { Callback<WindowStatusType> } callback - �ص����������ص�ǰ�Ĵ���ģʽ��
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'windowStatusChange', callback: Callback<WindowStatusType>): void;

    /**
     * ��������ģʽ�仯�ļ�����������windowStatus�����仯ʱ����֪ͨ����ʱ�������Կ��ܻ�û�и��£������Ҫ���յ�windowStatus�仯֪ͨʱ�ܹ�������ȡ���仯��Ĵ��ڴ�С��λ�ã�����ʹ��
     * [on('windowStatusDidChange')]{@link @ohos.window:window.Window.on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>)}
     * ����
     * 
     * ʹ�õ�ǰ�ӿڿ����������ڵ���maximize��recover����ʱ���յ���λص��������ȡȥ�غ�Ļص�����ʹ��
     * [on('windowStatusDidChange')]{@link window.Window.on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>)}
     * ��
     * 
     * > **˵����**
     * >
     * > ��[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£�Ӧ�õ�
     * > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#�����ļ���ǩ)����С��14ʱ���ڴ������״̬����������������Ļ��2in1�豸����
     * > dock����״̬����Tablet�豸����״̬����ʱ����ֵ��ӦΪWindowStatusType::FULL_SCREEN��Ӧ�õ�
     * > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#�����ļ���ǩ)���ô��ڵ���14ʱ���ڴ������״̬����������������Ļ��2in1�豸����
     * > dock����״̬����Tablet�豸����״̬����ʱ����ֵ��ӦΪWindowStatusType::MAXIMIZE��
     *
     * @param { Callback<WindowStatusType> } callback - �ص����������ص�ǰ�Ĵ���ģʽ��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @since 23 static
     */
    onWindowStatusChange(callback: Callback<WindowStatusType>): void;

    /**
     * �رմ���ģʽ�仯�ļ�����
     *
     * @param { 'windowStatusChange' } type - �����¼����̶�Ϊ'windowStatusChange'��������ģʽ�仯�¼���
     * @param { Callback<WindowStatusType> } [callback] - �ص����������ص�ǰ�Ĵ���ģʽ����������������رոü�����
     *     ���δ�����������ر����д���ģʽ�仯�ļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'windowStatusChange', callback?: Callback<WindowStatusType>): void;

    /**
     * �رմ���ģʽ�仯�ļ�����
     *
     * @param { Callback<WindowStatusType> } [callback] - �ص����������ص�ǰ�Ĵ���ģʽ����������������رոü�����
     *     ���δ�����������ر����д���ģʽ�仯�ļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @since 23 static
     */
    offWindowStatusChange(callback?: Callback<WindowStatusType>): void;

    /**
     * ��������ģʽ�仯�ļ�����������windowStatus�����仯�����֪ͨ����ʱ����[Rect]{@link @ohos.window:window.Rect}�����Ѿ���ɸ��£���
     *
     * @param { 'windowStatusDidChange' } type - �����¼����̶�Ϊ'windowStatusDidChange'��������ģʽ�仯����¼���
     * @param { Callback<WindowStatusType> } callback - �ص����������ص�ǰ�Ĵ���ģʽ��
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>): void;

    /**
     * ��������ģʽ�仯�ļ�����������windowStatus�����仯�����֪ͨ����ʱ����[Rect]{@link @ohos.window:window.Rect}�����Ѿ���ɸ��£���
     *
     * @param { Callback<WindowStatusType> } callback - �ص����������ص�ǰ�Ĵ���ģʽ��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowStatusDidChange(callback: Callback<WindowStatusType>): void;

    /**
     * �رմ���ģʽ�仯�ļ�����
     *
     * @param { 'windowStatusDidChange' } type - �����¼����̶�Ϊ'windowStatusDidChange'��������ģʽ�仯����¼���
     * @param { Callback<WindowStatusType> } [callback] - �ص����������ص�ǰ�Ĵ���ģʽ����������������رոü�����
     *     ���δ�����������ر����д���ģʽ�仯�ļ�����
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    off(type: 'windowStatusDidChange', callback?: Callback<WindowStatusType>): void;

    /**
     * �رմ���ģʽ�仯�ļ�����
     *
     * @param { Callback<WindowStatusType> } [callback] - �ص����������ص�ǰ�Ĵ���ģʽ����������������رոü�����
     *     ���δ�����������ر����д���ģʽ�仯�ļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowStatusDidChange(callback?: Callback<WindowStatusType>): void;

    /**
     * �����Ӵ��ڹر��¼��ļ������˼������ڵ��ϵͳ�ṩ�����Ͻǹرհ�ť�ر��Ӵ�ʱ����������رշ�ʽ�������ص���
     * 
     * ���ظ�ע�ᴰ�ڹر��¼��ļ���ʱ�����һ��ע��ɹ��ļ����¼���Ч��
     * 
     * �ýӿڴ����Ĵ��ڹر��¼������ص�������ͬ��ִ�У��Ӵ��ڵ��첽�ر��¼������ο�
     * [on('windowWillClose')]{@link window.Window.on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>)}
     * ������
     * 
     * �������
     * [on('windowWillClose')]{@link window.Window.on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>)}
     * �����¼���ֻ��Ӧ
     * [on('windowWillClose')]{@link window.Window.on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>)}
     * �ӿڡ�
     *
     * @param { 'subWindowClose' } type - �����¼����̶�Ϊ'subWindowClose'�����Ӵ��ڹر��¼���
     * @param { Callback<void> } callback - �ص�������������Ӵ������Ͻǹرհ�ť�¼�����ʱ�Ļص����ûص������������κβ������ص������ڲ��߼��ķ���ֵ������ǰ�Ӵ��Ƿ�����رգ��������boolean
     *     ���͵�true��ʾ���ر��Ӵ�������false����������boolean���ͱ�ʾ�ر��Ӵ���
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'subWindowClose', callback: Callback<void>): void;

    /**
     * �����Ӵ��ڹر��¼��ļ������˼�������ͨ��ϵͳ�ṩ���Ӵ������Ͻǹرհ�������������رմ��ڵķ�ʽ�������ص���
     *
     * @param { Callback<void> } callback - �ص�������������Ӵ������Ͻǹرհ�ť�¼�����ʱ�Ļص����ûص������������κβ������ص������ڲ��߼��ķ���ֵ������ǰ�Ӵ��Ƿ�����رգ��������boolean���͵�true��ʾ���ر��Ӵ�������false����������boolean���ͱ�ʾ�ر��Ӵ���
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onSubWindowClose(callback: Callback<void>): void;

    /**
     * �ر��Ӵ��ڹر��¼��ļ�����
     *
     * @param { 'subWindowClose' } type - �����¼����̶�Ϊ'subWindowClose'�����Ӵ��ڹر��¼���
     * @param { Callback<void> } callback - �ص�������������Ӵ������Ͻǹرհ�ť�¼�����ʱ�Ļص����ûص������������κβ������ص������ڲ��߼��ķ���ֵ������ǰ�Ӵ��Ƿ�����رգ��������boolean
     *     ���͵�true��ʾ���ر��Ӵ�������false����������boolean���ͱ�ʾ�ر��Ӵ�����������������رոü��������δ�����������ر������Ӵ��ڹرյļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'subWindowClose', callback?: Callback<void>): void;

    /**
     * �ر��Ӵ��ڹر��¼��ļ�����
     *
     * @param { Callback<void> } [callback ] - �ص��������������������رոü�������δ�����������ر������Ӵ��ڹر��¼��ļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offSubWindowClose(callback?: Callback<void>): void;

    /**
     * ���������ڻ��Ӵ��ڹر��¼��ļ������˼�������ͨ��ϵͳ�ṩ�Ĵ��ڱ������رհ�������������رմ��ڵķ�ʽ�������ص���
     * 
     * �ýӿڴ����Ļص��������첽ִ�С��Ӵ��ڵ�ͬ���ر��¼������ο�
     * [on('subWindowClose')]{@link window.Window.on(type: 'subWindowClose', callback: Callback<void>)}�����������ڵ�ͬ���ر��¼������ο�
     * [on('windowStageClose')](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#onwindowstageclose14)������
     *
     * @param { 'windowWillClose' } type - �����¼����̶�Ϊ'windowWillClose'�������ڹر��¼���
     * @param { Callback<void, Promise<boolean>> } callback - �ص����������������ϵͳ�ṩ�����Ͻǹرհ�ť�¼�����ʱ�Ļص����ûص������������κβ������ص������ڲ��߼���Ҫ��
     *     Promise<boolean>���͵ķ���ֵ���ڷ��ص�Promise�����ִ��resolve(true) ������ʾ���رյ�ǰ���ڣ�ִ��resolve(false) ��������reject��������ʾ�رյ�ǰ���ڡ�
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>): void;

    /**
     * ���������ڻ��Ӵ��ڹر��¼��ļ������˼�������ͨ��ϵͳ�ṩ�Ĵ��ڱ������رհ�������������رմ��ڵķ�ʽ�������ص���
     *
     * @param { Callback<void, Promise<boolean>> } callback - �ص�������������Ӵ������Ͻǹرհ�ť�¼�����ʱ�Ļص����ûص������������κβ������ص������ڲ��߼��ķ���ֵ������ǰ�Ӵ��Ƿ�����رգ��������boolean���͵�true��ʾ���ر��Ӵ�������false����������boolean���ͱ�ʾ�ر��Ӵ���
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowWillClose(callback: Callback<void, Promise<boolean>>): void;

    /**
     * ���ڹر������ڻ��Ӵ��ڹر��¼��ļ�����
     *
     * @param { 'windowWillClose' } type - �����¼����̶�Ϊ'windowWillClose'�������ڹر��¼���
     * @param { Callback<void, Promise<boolean>> } callback - �ص����������������ϵͳ�ṩ�����Ͻǹرհ�ť�¼�����ʱ�Ļص����ûص������������κβ������ص������ڲ��߼���Ҫ��
     *     Promise<boolean>���͵ķ���ֵ���ڷ��ص�Promise�����ִ��resolve(true) ������ʾ���رյ�ǰ���ڣ�ִ��resolve(false) ��������reject��������ʾ�رյ�ǰ���ڡ�
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    off(type: 'windowWillClose', callback?: Callback<void, Promise<boolean>>): void;

    /**
     * �ر������ڻ��Ӵ��ڹر��¼��ļ�����
     *
     * @param { Callback<void, Promise<boolean>> } [callback] - �ص��������������������رոü�������δ�����������ر����������ڻ��Ӵ��ڹر��¼��ļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowWillClose(callback?: Callback<void, Promise<boolean>>): void;

    /**
     * �������ڼ���̬�仯�¼��ļ�����
     *
     * @param { 'windowHighlightChange' } type - �����¼����̶�Ϊ'windowHighlightChange'�������ڼ���̬�仯�¼���
     * @param { Callback<boolean> } callback - �ص��������������ڵļ���̬�����仯ʱ�Ļص����ص���������boolean���Ͳ����������ز���Ϊtrue��ʾ����̬��false��ʾ�Ǽ���̬��
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    on(type: 'windowHighlightChange', callback: Callback<boolean>): void;

    /**
     * Register the callback of window highlight state change
     *
     * @param { Callback<boolean> } callback - Callback used to return the highlight status of the window.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    onWindowHighlightChange(callback: Callback<boolean>): void;

    /**
     * �رմ��ڼ���̬�仯�¼��ļ�����
     *
     * @param { 'windowHighlightChange' } type - �����¼����̶�Ϊ'windowHighlightChange'�������ڼ���̬�仯�¼���
     * @param { Callback<boolean> } [callback] - �ص��������������ڵļ���̬�����仯ʱ�Ļص����������������رոü�������δ�����������ر����д��ڼ���̬�仯�ļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    off(type: 'windowHighlightChange', callback?: Callback<boolean>): void;

    /**
     * Unregister the callback of window highlight state change
     *
     * @param { Callback<boolean> } [callback] - Callback used to return the highlight status of the window.
     *     if not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    offWindowHighlightChange(callback?: Callback<boolean>): void;

    /**
     * ��ģ̬������Ŀ�괰�ڣ��ɹ��󶨺�Ŀ�괰�ڲ�����Ӧ�û�������ͬʱ����Ŀ�괰�����ټ�����ʹ��Promise�첽�ص���
     *
     * @param { rpc.RemoteObject } token - Ŀ�괰��tokenֵ��
     * @param { Callback<void> } deathCallback - Ŀ�괰�����ټ�����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    bindDialogTarget(token: rpc.RemoteObject, deathCallback: Callback<void>): Promise<void>;

    /**
     * ��ģ̬������Ŀ�괰�ڣ��ɹ��󶨺�Ŀ�괰�ڲ�����Ӧ�û�������ͬʱ����Ŀ�괰�����ټ�����ʹ��callback�첽�ص���
     *
     * @param { rpc.RemoteObject } token - Ŀ�괰��tokenֵ��
     * @param { Callback<void> } deathCallback - Ŀ�괰�����ټ�����
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    bindDialogTarget(token: rpc.RemoteObject, deathCallback: Callback<void>, callback: AsyncCallback<void>): void;

    /**
     * ��ģ̬������Ŀ�괰�ڣ��ɹ��󶨺�Ŀ�괰�ڲ�����Ӧ�û�������ͬʱ����Ŀ�괰�����ټ�����ʹ��Promise�첽�ص���
     *
     * @param { dialogRequest.RequestInfo } requestInfo - Ŀ�괰��RequestInfoֵ��
     * @param { Callback<void> } deathCallback - Ŀ�괰�����ټ�����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    bindDialogTarget(requestInfo: dialogRequest.RequestInfo, deathCallback: Callback<void>): Promise<void>;

    /**
     * ��ģ̬������Ŀ�괰�ڣ��ɹ��󶨺�Ŀ�괰�ڲ�����Ӧ�û�������ͬʱ����Ŀ�괰�����ټ�����ʹ��callback�첽�ص���
     *
     * @param { dialogRequest.RequestInfo } requestInfo - Ŀ�괰��RequestInfoֵ��
     * @param { Callback<void> } deathCallback - Ŀ�괰�����ټ�����
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    bindDialogTarget(requestInfo: dialogRequest.RequestInfo, deathCallback: Callback<void>, callback: AsyncCallback<void>): void;

    /**
     * ����ģ̬�����Ƿ���Ӧ���Ʒ����¼�����ģ̬���ڵ��÷��ش����롣
     *
     * @param { boolean } enabled - �Ƿ���Ӧ���Ʒ����¼���<br>true��ʾ��Ӧ���Ʒ����¼�������onBackPress�ص���false��ʾ����Ӧ���Ʒ����¼���������onBackPress�ص���</br
     *     >
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setDialogBackGestureEnabled(enabled: boolean): Promise<void>;

    /**
     * �жϵ�ǰ�����Ƿ�֧�ֹ�ɫ��ģʽ��ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 8��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [isWindowSupportWideGamut()]{@link window.Window.isWindowSupportWideGamut()}�����
     *
     * @returns { Promise<boolean> } Promise���󡣷���true��ʾ��ǰ����֧�ֹ�ɫ��ģʽ������false��ʾ��ǰ���ڲ�֧�ֹ�ɫ��ģʽ��
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.isWindowSupportWideGamut()
     */
    isSupportWideGamut(): Promise<boolean>;

    /**
     * �жϵ�ǰ�����Ƿ�֧�ֹ�ɫ��ģʽ��ʹ��callback�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 8��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [isWindowSupportWideGamut()]{@link window.Window.isWindowSupportWideGamut(callback: AsyncCallback<boolean>)}�����
     *
     * @param { AsyncCallback<boolean> } callback - �ص�����������true��ʾ��ǰ����֧�ֹ�ɫ��ģʽ������false��ʾ��ǰ���ڲ�֧�ֹ�ɫ��ģʽ��
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.isWindowSupportWideGamut(callback: AsyncCallback<boolean>)
     */
    isSupportWideGamut(callback: AsyncCallback<boolean>): void;

    /**
     * �жϵ�ǰ�����Ƿ�֧�ֹ�ɫ��ģʽ��ʹ��Promise�첽�ص���
     *
     * @returns { Promise<boolean> } Promise���󡣷���true��ʾ��ǰ����֧�ֹ�ɫ��ģʽ������false��ʾ��ǰ���ڲ�֧�ֹ�ɫ��ģʽ��
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    isWindowSupportWideGamut(): Promise<boolean>;

    /**
     * �жϵ�ǰ�����Ƿ�֧�ֹ�ɫ��ģʽ��ʹ��callback�첽�ص���
     *
     * @param { AsyncCallback<boolean> } callback �ص�����������true��ʾ��ǰ����֧�ֹ�ɫ��ģʽ������false��ʾ��ǰ���ڲ�֧�ֹ�ɫ��ģʽ��
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    isWindowSupportWideGamut(callback: AsyncCallback<boolean>): void;

    /**
     * ���õ�ǰ����Ϊ��ɫ��ģʽ��Ĭ��ɫ��ģʽ��ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 8��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowColorSpace()]{@link window.Window.setWindowColorSpace(colorSpace:ColorSpace)}�����
     *
     * @param { ColorSpace } colorSpace - ����ɫ��ģʽ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowColorSpace(colorSpace:ColorSpace)
     */
    setColorSpace(colorSpace: ColorSpace): Promise<void>;

    /**
     * ���õ�ǰ����Ϊ��ɫ��ģʽ��Ĭ��ɫ��ģʽ��ʹ��callback�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 8��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowColorSpace()]{@link window.Window.setWindowColorSpace(colorSpace:ColorSpace, callback: AsyncCallback<void>)}
     * > �����
     *
     * @param { ColorSpace } colorSpace - ����ɫ��ģʽ��
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowColorSpace(colorSpace:ColorSpace, callback: AsyncCallback<void>)
     */
    setColorSpace(colorSpace: ColorSpace, callback: AsyncCallback<void>): void;

    /**
     * ���õ�ǰ����Ϊ��ɫ��ģʽ��Ĭ��ɫ��ģʽ��ʹ��Promise�첽�ص���
     *
     * @param { ColorSpace } colorSpace ����ɫ��ģʽ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowColorSpace(colorSpace:ColorSpace): Promise<void>;

    /**
     * ���õ�ǰ����Ϊ��ɫ��ģʽ��Ĭ��ɫ��ģʽ��ʹ��callback�첽�ص���
     *
     * @param { ColorSpace } colorSpace ����ɫ��ģʽ��
     * @param { AsyncCallback<void> } callback �ص�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowColorSpace(colorSpace:ColorSpace, callback: AsyncCallback<void>): void;

    /**
     * ��ȡ��ǰ����ɫ��ģʽ��ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 8��ʼ֧�֣���API version 9��ʼ����������ʹ��[getWindowColorSpace()]{@link window.Window.getWindowColorSpace}�����
     *
     * @returns { Promise<ColorSpace> } Promise���󡣷��ص�ǰɫ��ģʽ��
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowColorSpace
     */
    getColorSpace(): Promise<ColorSpace>;

    /**
     * ��ȡ��ǰ����ɫ��ģʽ��ʹ��callback�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 8��ʼ֧�֣���API version 9��ʼ����������ʹ��[getWindowColorSpace()]{@link window.Window.getWindowColorSpace}�����
     *
     * @param { AsyncCallback<ColorSpace> } callback - �ص�����������ȡ�ɹ���errΪundefined��dataΪ��ǰɫ��ģʽ��
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowColorSpace
     */
    getColorSpace(callback: AsyncCallback<ColorSpace>): void;

    /**
     * ��ȡ��ǰ����ɫ��ģʽ��
     *
     * @returns { ColorSpace } ��ǰɫ��ģʽ��
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getWindowColorSpace(): ColorSpace;

    /**
     * ���ô��ڵı���ɫ��ʹ��Promise�첽�ص���Stageģ���£��ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     * 
     * > **˵����**
     * >
     * > ��API version 6��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowBackgroundColor()]{@link window.Window.setWindowBackgroundColor}�����
     *
     * @param { string } color - ��Ҫ���õı���ɫ��Ϊʮ������RGB��ARGB��ɫ�������ִ�Сд������`'#00FF00'`��`'#FF00FF00'`��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowBackgroundColor
     */
    setBackgroundColor(color: string): Promise<void>;

    /**
     * ���ô��ڵı���ɫ��ʹ��callback�첽�ص���Stageģ���£��ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     * 
     * > **˵����**
     * >
     * > ��API version 6��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowBackgroundColor()]{@link window.Window.setWindowBackgroundColor}�����
     *
     * @param { string } color - ��Ҫ���õı���ɫ��Ϊʮ������RGB��ARGB��ɫ�������ִ�Сд������`'#00FF00'`��`'#FF00FF00'`��
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowBackgroundColor
     */
    setBackgroundColor(color: string, callback: AsyncCallback<void>): void;

    /**
     * ���ô��ڵı���ɫ��
     * 
     * δ���øýӿ�ʱ��������ǳɫģʽĬ�ϱ���ɫΪ`'#FFF0F0F0'`������ɫģʽĬ�ϱ���ɫΪ`'#FF1A1A1A'`��
     * 
     * Stageģ���£��ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     *
     * @param { string } color the specified color. [since 9 - 17]
     * @param { string | ColorMetrics } color - ��Ҫ���õı���ɫ��Ϊʮ������RGB��ARGB��ɫ�������ִ�Сд������'#00FF00'��'#FF00FF00'��
     *     ��API version 18��ʼ���˲���֧��ColorMetrics���͡� [since 18]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed;
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowBackgroundColor(color: string | ColorMetrics): void;

    /**
     * �����������Ƿ���ʾ��Ӱ��ʹ��Promise�첽�ص���δ���øýӿ�ʱ��������Ĭ����ʾ��Ӱ��
     *
     * @permission ohos.permission.SET_WINDOW_TRANSPARENT
     * @param { boolean } enable - �����������Ƿ���ʾ��Ӱ��true��ʾ��ʾ��Ӱ��false��ʾ����ʾ��Ӱ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowShadowEnabled(enable: boolean): Promise<void>;

    /**
     * ����Ӧ�ô���������Ļ����ֵ��ʹ��Promise�첽�ص���
     * 
     * ��ǰ��Ļ���ȹ�񣺴���������Ļ������Чʱ���������Ĳ����Ե���ϵͳ��Ļ���ȣ����ڻָ�Ĭ��ϵͳ����֮�󣬿������Ŀ��Ե���ϵͳ��Ļ���ȡ�
     * 
     * > **˵����**
     * >
     * > ��API version 6��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowBrightness()]{@link window.Window.setWindowBrightness(brightness: double)}�����
     *
     * @param { number } brightness - ��Ļ����ֵ���ò���Ϊ��������ȡֵ��ΧΪ[0.0, 1.0]��-1.0��1.0��ʾ������-1.0��ʾ�ָ������ô�������ǰ��ϵͳ�����������ȡ�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowBrightness(brightness: double)
     */
    setBrightness(brightness: number): Promise<void>;

    /**
     * ����Ӧ�ô���������Ļ����ֵ��ʹ��callback�첽�ص���
     * 
     * ��ǰ��Ļ���ȹ�񣺴���������Ļ������Чʱ���������Ĳ����Ե���ϵͳ��Ļ���ȣ����ڻָ�Ĭ��ϵͳ����֮�󣬿������Ŀ��Ե���ϵͳ��Ļ���ȡ�
     * 
     * > **˵����**
     * >
     * > ��API version 6��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowBrightness()]{@link window.Window.setWindowBrightness(brightness: double, callback: AsyncCallback<void>)}
     * > �����
     *
     * @param { number } brightness - ��Ļ����ֵ���ò���Ϊ��������ȡֵ��ΧΪ[0.0, 1.0]��-1.0��1.0��ʾ������-1.0��ʾ�ָ������ô�������ǰ��ϵͳ�����������ȡ�
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowBrightness(brightness: double, callback: AsyncCallback<void>)
     */
    setBrightness(brightness: number, callback: AsyncCallback<void>): void;

    /**
     * ϵͳӦ�������ڵ��ã�ʵ�ֽ�������������Ӧ�ô���֮�ϲ����ڵ���ʹ��Promise�첽�ص���
     *
     * @param { boolean } isTopmost - �Ƿ�ϵͳӦ���������ö���true��ʾ�ö���false��ʾȡ���ö���
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setTopmost(isTopmost: boolean): Promise<void>;

    /**
     * Ӧ�������ڵ��ã�����ʵ�ֽ�������������Ӧ�ô���֮�ϲ����ڵ���ʹ��Promise�첽�ص���
     * 
     * Ӧ�ÿ�ͨ���Զ����ݼ�ʵ�������ڵ��ö���ȡ���ö���
     *
     * @permission ohos.permission.WINDOW_TOPMOST
     * @param { boolean } isWindowTopmost - �����������ö���trueΪ�ö���falseΪȡ���ö���
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowTopmost(isWindowTopmost: boolean): Promise<void>;

    /**
     * ���������ô������ȡ������ڴ���ǰ̨�һ�ʱ������������Ч��ʹ��Promise�첽�ص���
     *
     * ����������Чʱֻ��Ӱ�쵱ǰ�豸��Ļ���ȣ��޷��޸�����������Ͷ�����ڵ���Ļ������Ļ���ȡ�
     *
     * ���ӿ����Ϊ-1ʱ���������Ȼָ�Ϊϵͳ��Ļ���ȣ�����ͨ���������Ļ��ݼ���������
     *
     * ������������̨ʱ����������ʧЧ������ͨ���������Ļ��ݼ��������������������û򴰿�������̨ʱ���ô˽ӿڣ�������ܲ���ʱ�����⡣
     *
     * �豸��Ϊ���죺
     *
     * ���TV�豸����ǰ�ӿڲ���ЧҲ��������
     * ��Է�2in1�豸��������TV�豸����
     * ��OpenHarmony 6.1֮ǰ����ǰ���ڵĴ���������Чʱ���������ĵ���ϵͳ��Ļ���Ȳ���Ч��
     * ��OpenHarmony 6.1��ʼ����ǰ���ڵĴ���������Чʱ���������Ŀ��Ե���ϵͳ��Ļ���ȣ�ͬʱ�Ὣ��ǰ���ڻָ�Ϊϵͳ��Ļ���ȡ�
     * ���2in1�豸��
     * ��OpenHarmony 5.0.2֮ǰ������������Ļ������Чʱ���������Ļ��ݼ�����ϵͳ��Ļ���Ȳ���Ч��
     * ��OpenHarmony 5.0.2��ʼ������������ϵͳ��Ļ���ȱ���һ�£�����ͨ�����ӿڡ��������Ļ��߿�ݼ�����ϵͳ��Ļ���ȡ�
     *
     * @param { double } brightness ��Ļ����ֵ���ò���Ϊ��������ȡֵ��ΧΪ[0.0, 1.0]��-1.0��1.0��ʾ������-1.0��ʾ�ָ������ô�������ǰ��ϵͳ�����������ȡ�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowBrightness(brightness: double): Promise<void>;

    /**
     * ���������ô������ȡ������ڴ���ǰ̨�һ�ʱ������������Ч��ʹ��Promise�첽�ص���
     *
     * ����������Чʱֻ��Ӱ�쵱ǰ�豸��Ļ���ȣ��޷��޸�����������Ͷ�����ڵ���Ļ������Ļ���ȡ�
     *
     * ���ӿ����Ϊ-1ʱ���������Ȼָ�Ϊϵͳ��Ļ���ȣ�����ͨ���������Ļ��ݼ���������
     *
     * ������������̨ʱ����������ʧЧ������ͨ���������Ļ��ݼ��������������������û򴰿�������̨ʱ���ô˽ӿڣ�������ܲ���ʱ�����⡣
     *
     * �豸��Ϊ���죺
     *
     * ���TV�豸����ǰ�ӿڲ���ЧҲ��������
     * ��Է�2in1�豸��������TV�豸����
     * ��OpenHarmony 6.1֮ǰ����ǰ���ڵĴ���������Чʱ���������ĵ���ϵͳ��Ļ���Ȳ���Ч��
     * ��OpenHarmony 6.1��ʼ����ǰ���ڵĴ���������Чʱ���������Ŀ��Ե���ϵͳ��Ļ���ȣ�ͬʱ�Ὣ��ǰ���ڻָ�Ϊϵͳ��Ļ���ȡ�
     * ���2in1�豸��
     * ��OpenHarmony 5.0.2֮ǰ������������Ļ������Чʱ���������Ļ��ݼ�����ϵͳ��Ļ���Ȳ���Ч��
     * ��OpenHarmony 5.0.2��ʼ������������ϵͳ��Ļ���ȱ���һ�£�����ͨ�����ӿڡ��������Ļ��߿�ݼ�����ϵͳ��Ļ���ȡ�
     *
     * @param { double } brightness ��Ļ����ֵ���ò���Ϊ��������ȡֵ��ΧΪ[0.0, 1.0]��-1.0��1.0��ʾ������-1.0��ʾ�ָ������ô�������ǰ��ϵͳ�����������ȡ�
     * @param { AsyncCallback<void> } callback �ص�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowBrightness(brightness: double, callback: AsyncCallback<void>): void;

    /**
     * ���ô����Ƿ�ʹ��������Ļ��ϵͳĬ��Density��Stageģ���£��ýӿ���Ҫ��
     * [loadContent()]{@link @ohos.window:window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link @ohos.window:window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч
     * ��ʹ�á�
     * 
     * �����ô˽ӿڽ������ã����ʾ��ʹ��ϵͳĬ��Density��
     * 
     * ������ͬʱʹ�øýӿڡ�
     * [setDefaultDensityEnabled(true)](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setdefaultdensityenabled12)
     * ��[setCustomDensity](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setcustomdensity15)ʱ���������õ�����
     * Ч��Ϊ׼��
     *
     * @param { boolean } enabled - �����Ƿ�ʹ��ϵͳĬ��Density��true��ʾʹ��ϵͳĬ��Density�����ڲ�����ϵͳ��ʾ��С�仯���²��֣�false��ʾ��ʹ��ϵͳĬ��Density�����ڸ���ϵͳ
     *     ��ʾ��С�仯���²��֡�
     * @throws { BusinessError } 202 - Permission verification
     *     failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    setDefaultDensityEnabled(enabled: boolean): void;

    /**
     * ���������������ڽ���̬�ͷǽ���̬ʱ�ı���ɫ���ýӿ����ڵ���
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}��ʹ�á�
     * 
     * ������������ɫ���������������򣬰��������������������������򱳾�ɫĬ�ϸ���ϵͳ��ǳɫ����ͬʱʹ�øýӿں�
     * [setWindowBackgroundColor()]{@link window.Window.setWindowBackgroundColor}���ñ���ɫʱ������������ʾ���ڱ���ɫ����������ʾ������������ɫ��
     *
     * @permission ohos.permission.SET_WINDOW_ALPHA [since 26.0.0]
     * @param { string } activeColor - �����������ڽ���̬ʱ�ı���ɫ��Ϊʮ������RGB��ARGB��ɫ�������ִ�Сд������'#00FF00'��'#FF00FF00'��
     * @param { string } inactiveColor - �����������ڷǽ���̬ʱ�ı���ɫ��Ϊʮ������RGB��ɫ��ARGB��ɫ�������ִ�Сд������'#00FF00'��'#FF00FF00'��
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have
     *     the permission required or a non-system application calls the API. [since 26.0.0]
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 20 - 24]
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use. [since 20 - 24]
     * @publicapi [since 26.0.0]
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowContainerModalColor(activeColor: string, inactiveColor: string): void;

    /**
     * ���ڵ���ʱ���豸���Ӵ��ڵ���������ÿ���Ĵ��ڵİ���ֵ��ʹ��callback�첽�ص���
     *
     * @param { number } dimBehindValue - ��ʾ����Ĵ��ڵİ���ֵ��ȡֵ��ΧΪ[0.0, 1.0]��ȡ1.0ʱ��ʾ���
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setDimBehind(dimBehindValue: number, callback: AsyncCallback<void>): void;

    /**
     * ���ڵ���ʱ���豸���Ӵ��ڵ���������ÿ���Ĵ��ڵİ���ֵ��ʹ��Promise�첽�ص���
     *
     * @param { number } dimBehindValue - ��ʾ����Ĵ��ڵİ���ֵ��ȡֵ��ΧΪ0-1��1��ʾ���
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setDimBehind(dimBehindValue: number): Promise<void>;

    /**
     * ����ʹ�õ����������ʽʹ�ô��ڻ񽹵ĳ���ʱ���ô����Ƿ�֧�ִ��ڽ���ӵ��ǰ�Ļ񽹴����л����ô��ڣ�ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowFocusable()]{@link window.Window.setWindowFocusable(isFocusable: boolean)}�����
     *
     * @param { boolean } isFocusable - ���ʱ�Ƿ�֧���л����㴰�ڡ�true��ʾ֧�֣�false��ʾ��֧�֡�����Ϊfalseʱ���ô��ڲ�֧�ְ����뷨�ͽ��ռ����¼������账�������߼�������ο�
     *     [���ɻ񽹴���������������뷨����ָ��](docroot://inputmethod/use-inputmethod-in-not-focusable-window.md)��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowFocusable(isFocusable: boolean)
     */
    setFocusable(isFocusable: boolean): Promise<void>;

    /**
     * ����ʹ�õ����������ʽʹ�ô��ڻ񽹵ĳ���ʱ���ô����Ƿ�֧�ִ��ڽ���Ӳ���ǰ�Ļ񽹴����л����ô��ڣ�ʹ��callback�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowFocusable()]{@link window.Window.setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>)}
     * > �����
     *
     * @param { boolean } isFocusable - ���ʱ�Ƿ�֧���л����㴰�ڡ�true��ʾ֧�֣�false��ʾ��֧�֡�����Ϊfalseʱ���ô��ڲ�֧�ְ����뷨�ͽ��ռ����¼������账�������߼�������ο�
     *     [���ɻ񽹴���������������뷨����ָ��](docroot://inputmethod/use-inputmethod-in-not-focusable-window.md)��
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>)
     */
    setFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void;

    /**
     * ���ô����Ƿ���л�ý����������ʹ��Promise�첽�ص���
     * 
     * ��API version 22��ʼ������[createVirtualScreen]{@link @ohos.display:display.createVirtualScreen}�ӿڴ�����������������
     * supportsFocus������Ϊfalseʱ��λ�ڸ��������Ĵ����޷����øýӿ��޸Ĵ��ڵĿɻ�������������ã����׳�1300002�����롣
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowFocusable(isFocusable: boolean): Promise<void>;

    /**
     * ���ô����Ƿ���л�ý����������ʹ��callback�첽�ص���
     * 
     * ��API version 22��ʼ������[createVirtualScreen]{@link @ohos.display:display.createVirtualScreen}�ӿڴ�����������������
     * supportsFocus������Ϊfalseʱ��λ�ڸ��������Ĵ����޷����øýӿ��޸Ĵ��ڵĿɻ�������������ã����׳�1300002�����롣
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void;

    /**
     * ֧�ֵ�ǰ�������������/ʧ����ʹ��Promise�첽�ص������óɹ������أ��ýӿڷ���ֵ���������ջ�/ʧ����Ч�������ʹ��
     * [on('windowEvent')]{@link @ohos.window:window.Window.on(type: 'windowEvent', callback: Callback<WindowEventType>)}
     * �������ڻ�/ʧ��״̬��
     * 
     * �������ͺ󣬴��ڻ񽹽���ܵ����ڿɻ����Լ����ڿɼ�״̬�����ơ��񽹳ɹ��Ĵ�������������Լ����1.����֧�ֻ񽹣�2.���ڿɼ�����������ʾ��δ������δ������̨����
     * 
     * ʧ�������ͺ󣬴���������ʧ����
     *
     * @param { boolean } isFocused - �Ƿ��ȡ���㣬true��ʾ����񽹣�false��ʾ����ʧ����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    requestFocus(isFocused: boolean): Promise<void>;

    /**
     * ���ô��ڶ�ռ����̬���ԡ���ռ����̬��ʾ���ڻ�ʱ���ᵼ�µ�ǰ���Ӵ������д��ڼ���̬����������ʧȥ����̬��ʹ��Promise�첽�ص���
     * 
     * �˽ӿڶ�������ģ̬������Ч��
     *
     * @param { boolean } exclusivelyHighlighted Whether the window can become highlight exclusively when it gain focus.
     *     The value
     *     true means that the window can cause the window outside the current window link to
     *     lose its highlight state, and false means the opposite.
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    setExclusivelyHighlighted(exclusivelyHighlighted: boolean): Promise<void>;

    /**
     * ��ȡ��ǰ�����Ƿ�Ϊ����̬��Ϊ׼ȷ��ȡ����̬����Ҫ��[WindowEventType]{@link @ohos.window:window.WindowEventType}�������ڴ���WINDOW_ACTIVE֮����á�
     * 
     * ��ʹ��
     * [on('windowHighlightChange')]{@link window.Window.on(type: 'windowHighlightChange', callback: Callback<boolean>)}
     * ������Ӧ״̬�������ִ�ж�Ӧ����ҵ��
     *
     * @returns { boolean } ��ǰ�����Ƿ�Ϊ����̬��true��ʾ��ǰ����Ϊ����̬��false��ʾ��ǰ���ڷǼ���̬��
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    isWindowHighlighted(): boolean;

    /**
     * ������Ļ�Ƿ�Ϊ����״̬��ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 6��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowKeepScreenOn()]{@link window.Window.setWindowKeepScreenOn(isKeepScreenOn: boolean)}�����
     *
     * @param { boolean } isKeepScreenOn - ������Ļ�Ƿ�Ϊ����״̬��true��ʾ������false��ʾ��������
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowKeepScreenOn(isKeepScreenOn: boolean)
     */
    setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;

    /**
     * ������Ļ�Ƿ�Ϊ����״̬��ʹ��callback�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 6��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowKeepScreenOn()]{@link window.Window.setWindowKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>)}
     * > �����
     *
     * @param { boolean } isKeepScreenOn - ������Ļ�Ƿ�Ϊ����״̬��true��ʾ������false��ʾ��������
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>)
     */
    setKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void;

    /**
     * ���õ�ǰ����λ��ǰ̨ʱ��ǰ�豸����Ļ�Ƿ�Ϊ����״̬����Դ�������²���Ч��ʹ��Promise�첽�ص���
     * 
     * ���ڱ�Ҫ��������������Ƶ���š��滭����Ϸ�ȳ������£����ø�����Ϊtrue���˳�����������Ӧ�����ø�����Ϊfalse����������������Ļ��������Ƶ���ŵȣ��£���ʹ�øýӿڣ�ϵͳ��⵽�ǹ淶ʹ�øýӿ�ʱ�����ܻ�ָ��Զ��������ܡ�
     *
     * @param { boolean } isKeepScreenOn ������Ļ�Ƿ�Ϊ����״̬��true��ʾ������false��ʾ��������
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;

    /**
     * ���õ�ǰ����λ��ǰ̨ʱ��ǰ�豸����Ļ�Ƿ�Ϊ����״̬����Դ�������²���Ч��ʹ��callback�첽�ص���
     * 
     * ���ڱ�Ҫ��������������Ƶ���š��滭����Ϸ�ȳ������£����ø�����Ϊtrue���˳�����������Ӧ�����ø�����Ϊfalse����������������Ļ��������Ƶ���ŵȣ��£���ʹ�øýӿڣ�ϵͳ��⵽�ǹ淶ʹ�øýӿ�ʱ�����ܻ�ָ��Զ��������ܡ�
     *
     * @param { boolean } isKeepScreenOn ������Ļ�Ƿ�Ϊ����״̬��true��ʾ������false��ʾ��������
     * @param { AsyncCallback<void> } callback �ص�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void;

    /**
     * ������Ļ��
     *
     * @param { boolean } wakeUp - �Ƿ����û�����Ļ��true��ʾ���ѣ�false��ʾ�����ѡ�
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setWakeUpScreen(wakeUp: boolean): void;

    /**
     * �����Ƿ������ɵ���Ӵ���֮�������ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ������
     * >
     * > ��API version 9��ʼ��ϵͳĬ����������Ӵ���֮������򣬴˽ӿڲ���֧��ʹ�ã�Ҳ�����ṩ����ӿڡ�
     *
     * @param { boolean } touchable - �����Ƿ�ɵ����true��ʾ�ɵ����false��ʾ���ɵ����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setOutsideTouchable(touchable: boolean): Promise<void>;

    /**
     * �����Ƿ������ɵ���Ӵ���֮�������ʹ��callback�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ������
     * >
     * > ��API version 9��ʼ��ϵͳĬ����������Ӵ���֮������򣬴˽ӿڲ���֧��ʹ�ã�Ҳ�����ṩ����ӿڡ�
     *
     * @param { boolean } touchable - �����Ƿ�ɵ����true��ʾ�ɵ����false��ʾ���ɵ����
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setOutsideTouchable(touchable: boolean, callback: AsyncCallback<void>): void;

    /**
     * ���ô����Ƿ�Ϊ��˽ģʽ��ʹ��Promise�첽�ص�������Ϊ��˽ģʽ�Ĵ��ڣ��������ݽ��޷���������¼�����˽ӿڿ����ڽ�ֹ����/¼���ĳ�����
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowPrivacyMode()]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean)}�����
     *
     * @param { boolean } isPrivacyMode - �����Ƿ�Ϊ��˽ģʽ��true��ʾģʽ������false��ʾģʽ�رա�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowPrivacyMode(isPrivacyMode: boolean)
     */
    setPrivacyMode(isPrivacyMode: boolean): Promise<void>;

    /**
     * ���ô����Ƿ�Ϊ��˽ģʽ��ʹ��callback�첽�ص�������Ϊ��˽ģʽ�Ĵ��ڣ��������ݽ��޷���������¼�����˽ӿڿ����ڽ�ֹ����/¼���ĳ�����
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowPrivacyMode()]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * > �����
     *
     * @param { boolean } isPrivacyMode - �����Ƿ�Ϊ��˽ģʽ��true��ʾģʽ������false��ʾģʽ�رա�
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)
     */
    setPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void;

    /**
     * ���ô����Ƿ�Ϊ��˽ģʽ��ʹ��Promise�첽�ص���
     * 
     * ����Ϊ��˽ģʽ�Ĵ��ڣ��������ݽ��޷���������¼����
     * 
     * ��˽ģʽ�����˺�̨���ڶ�����Ƭ����ʾΪ��ɫ�ɲ����˽�ɲ㡣
     * 
     * δ���ô˽ӿ�ʱ������Ĭ�ϲ�������˽ģʽ�����Ա�������¼����
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode �����Ƿ�Ϊ��˽ģʽ��true��ʾΪ��˽ģʽ��false��ʾΪ����˽ģʽ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     *     Possible cause: Need ohos.permission.PRIVACY_WINDOW permission.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowPrivacyMode(isPrivacyMode: boolean): Promise<void>;

    /**
     * ���ô����Ƿ�Ϊ��˽ģʽ��ʹ��callback�첽�ص���
     * 
     * ����Ϊ��˽ģʽ�Ĵ��ڣ��������ݽ��޷���������¼����
     * 
     * ��˽ģʽ�����˺�̨���ڶ�����Ƭ����ʾΪ��ɫ�ɲ����˽�ɲ㡣
     * 
     * δ���ô˽ӿ�ʱ������Ĭ�ϲ�������˽ģʽ�����Ա�������¼����
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode �����Ƿ�Ϊ��˽ģʽ��true��ʾΪ��˽ģʽ��false��ʾΪ����˽ģʽ��
     * @param { AsyncCallback<void> } callback �ص�������
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     *     Possible cause: Need ohos.permission.PRIVACY_WINDOW permission.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void;

    /**
     * ������¼����Ͷ���Ƿ���Ե�ǰ���ڡ��˽ӿ�һ�����ڽ�ֹ������¼����Ͷ���ĳ�����
     * 
     * ��Ҫʵ�ִ���ʼ����ǰ̨���Խ�����¼����Ͷ�����ڴ��ڴӺ�̨�ص�ǰ̨ʱ����Ҫͨ��
     * [on('windowEvent')]{@link @ohos.window:window.Window.on(type: 'windowEvent', callback: Callback<WindowEventType>)}
     * ���������������ڱ仯���ں�̨״̬ʱ����Ϊfalse������ǰ̨״̬ʱ����Ϊtrue��
     *
     * @param { boolean } isSkip - ������¼����Ͷ���Ƿ���Ե�ǰ���ڣ�Ĭ��Ϊfalse��<br>true��ʾ���Ե�ǰ���ڣ�false��ʾ�����Ե�ǰ���ڡ�</br>
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setSnapshotSkip(isSkip: boolean): void;

    /**
     * ���ô����Ƿ�Ϊ�ɴ�״̬��ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowTouchable()]{@link window.Window.setWindowTouchable(isTouchable: boolean)}�����
     *
     * @param { boolean } isTouchable - �����Ƿ�Ϊ�ɴ�״̬��true��ʾ�ɴ���false��ʾ���ɴ���
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowTouchable(isTouchable: boolean)
     */
    setTouchable(isTouchable: boolean): Promise<void>;

    /**
     * ���ô����Ƿ�Ϊ�ɴ�״̬��ʹ��callback�첽�ص���
     * 
     * > **˵����**
     * >
     * > ��API version 7��ʼ֧�֣���API version 9��ʼ����������ʹ��
     * > [setWindowTouchable()]{@link window.Window.setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>)}
     * > �����
     *
     * @param { boolean } isTouchable - �����Ƿ�Ϊ�ɴ�״̬��true��ʾ�ɴ���false��ʾ���ɴ���
     * @param { AsyncCallback<void> } callback - �ص�������
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>)
     */
    setTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void;

    /**
     * ���ô����Ƿ�Ϊ�ɵ��״̬��ʹ��Promise�첽�ص���
     * 
     * �����ڴ��ڿɵ��״̬ʱ�����û�������иô��ڣ��¼������͸��ô��ڴ����������ڴ��ڲ��ɵ��״̬ʱ��͸������¼������ݸ��²㴰�ڡ�
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowTouchable(isTouchable: boolean): Promise<void>;

    /**
     * ���ô����Ƿ�Ϊ�ɵ��״̬��ʹ��callback�첽�ص���
     * 
     * �����ڴ��ڿɵ��״̬ʱ�����û�������иô��ڣ��¼������͸��ô��ڴ����������ڴ��ڲ��ɵ��״̬ʱ��͸������¼������ݸ��²㴰�ڡ�
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Ϊ��ǰ�������ӻ��Ƴ���д��־�����Ӹñ�־�󴰿�ֻ��Ӧ��д���¼�������Ӧ�����¼���ʹ��Promise�첽�ص���
     *
     * @param { boolean } enable - �Ƿ�Դ������ӱ�־λ��true��ʾ���ӣ�false��ʾ�Ƴ���
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setHandwritingFlag(enable: boolean): Promise<void>;

    /**
     * �����������ڷ���ģʽ���Ƿ񱻽�ֹ�ƶ���ʹ��callback�첽�ص���
     *
     * @param { boolean } isForbidSplitMove - �����ڷ���ģʽ���Ƿ񱻽�ֹ�ƶ���true��ʾ��ֹ��false��ʾ����ֹ��
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 26.0.0
     */
    setForbidSplitMove(isForbidSplitMove: boolean, callback: AsyncCallback<void>): void;

    /**
     * �����������ڷ���ģʽ���Ƿ񱻽�ֹ�ƶ���ʹ��Promise�첽�ص���
     *
     * @param { boolean } isForbidSplitMove - �����ڷ���ģʽ���Ƿ񱻽�ֹ�ƶ���true��ʾ��ֹ��false��ʾ����ֹ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 26.0.0
     */
    setForbidSplitMove(isForbidSplitMove: boolean): Promise<void>;

    /**
     * ��ȡ���ڽ�ͼ��ʹ��callback�첽�ص�������ǰ��������Ϊ��˽ģʽ����ͨ��
     * [setWindowPrivacyMode]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * �ӿ����ã�����ͼ���Ϊ������
     *
     * @param { AsyncCallback<image.PixelMap> } callback - �ص�������
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Get pixelMap failed;
     *     3. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    snapshot(callback: AsyncCallback<image.PixelMap>): void;

    /**
     * ��ȡ��ǰ���ڽ�ͼ������ǰ��������Ϊ��˽ģʽ����ͨ��
     * [setWindowPrivacyMode]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * �ӿ����ã�����ͼ���Ϊ������
     *
     * @returns { Promise<image.PixelMap> } Promise used to return the window screenshot.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Get pixelMap failed;
     *     3. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    snapshot(): Promise<image.PixelMap>;

    /**
     * ��ȡ��ǰ���ڽ�ͼ���˽ӿ�Ϊͬ���ӿڡ�����ǰ��������Ϊ��˽ģʽ��
     * [setWindowPrivacyMode]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * �ӿ����ã�����ͼ���Ϊ������
     * 
     * Stageģ���£��ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     *
     * @returns { image.PixelMap } Window screenshot.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Create pixelMap failed.
     * @throws { BusinessError } 1300018 - Timeout.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    snapshotSync(): image.PixelMap;

    /**
     * ��ȡ��ǰ���ڽ�ͼ����ʹ��ǰ��������Ϊ��˽ģʽ����ͨ��
     * [setWindowPrivacyMode]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * �ӿ����ã����Կɵ��ñ��ӿڷ��ص�ǰ���ڽ�ͼ��
     *
     * @returns { Promise<image.PixelMap> } Promise used to return the window screenshot.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function snapshotIgnorePrivacy can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Create pixelMap failed;
     *     3. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    snapshotIgnorePrivacy(): Promise<image.PixelMap>;

    /**
     * ���ô��ڲ�͸���ȡ���֧����[�Զ���ϵͳ���ڵ���ʾ�����ض���](docroot://windowmanager/system-window-stage-sys.md#�Զ���ϵͳ���ڵ���ʾ�����ض���)��ʹ�á�
     *
     * @param { double } opacity - ��͸���ȡ��ò���Ϊ��������ȡֵ��ΧΪ[0.0, 1.0]��0.0��ʾ��ȫ͸����1.0��ʾ��ȫ��͸����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    opacity(opacity: double): void;

    /**
     * ���ô������Ų�������֧����[�Զ���ϵͳ���ڵ���ʾ�����ض���](docroot://windowmanager/system-window-stage-sys.md#�Զ���ϵͳ���ڵ���ʾ�����ض���)��ʹ�á�
     *
     * @param { ScaleOptions } scaleOptions - ���Ų�����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    scale(scaleOptions: ScaleOptions): void;

    /**
     * ���ô�����ת��������֧����[�Զ���ϵͳ���ڵ���ʾ�����ض���](docroot://windowmanager/system-window-stage-sys.md#�Զ���ϵͳ���ڵ���ʾ�����ض���)��ʹ�á�
     *
     * @param { RotateOptions } rotateOptions - ��ת������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    rotate(rotateOptions: RotateOptions): void;

    /**
     * ���ô���ƽ�Ʋ�������֧����[�Զ���ϵͳ���ڵ���ʾ�����ض���](docroot://windowmanager/system-window-stage-sys.md#�Զ���ϵͳ���ڵ���ʾ�����ض���)��ʹ�á�
     *
     * @param { TranslateOptions } translateOptions - ƽ�Ʋ�������λΪpx��
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    translate(translateOptions: TranslateOptions): void;

    /**
     * ��ȡ��������ת����������
     *
     * @returns { TransitionController } ����ת����������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    getTransitionController(): TransitionController;

    /**
     * ���ô���ģ����
     *
     * @param { double } radius - ��ʾ����ģ���İ뾶ֵ���ò���Ϊ����������λΪpx��ȡֵ��ΧΪ[0, +��)��ȡֵΪ0.0ʱ��ʾ�رմ���ģ����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setBlur(radius: double): void;

    /**
     * ���ô��ڱ���ģ����
     * 
     * ���ڱ�����ָ���ڸ��ǵ��²������봰�ڴ�С��ͬ��
     * 
     * ��Ҫͨ��[setWindowBackgroundColor]{@link @ohos.window:window.Window.setWindowBackgroundColor}���������ݱ������ó�͸���������޷�����ģ��Ч����
     *
     * @param { double } radius - ��ʾ���ڱ���ģ���İ뾶ֵ���ò���Ϊ����������λΪpx��ȡֵ��ΧΪ[0.0, +��)��ȡֵΪ0.0��ʾ�رմ��ڱ���ģ����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setBackdropBlur(radius: double): void;

    /**
     * ���ô��ڱ���ģ�����͡�
     *
     * @param { BlurStyle } blurStyle - ��ʾ���ڱ���ģ�����͡�
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setBackdropBlurStyle(blurStyle: BlurStyle): void;

    /**
     * ���ô��ڱ�Ե��Ӱ��
     *
     * @param { double } radius - ��ʾ���ڱ�Ե��Ӱ��ģ���뾶���ò���Ϊ����������λΪpx��ȡֵ��ΧΪ[0.0, +��)��ȡֵΪ0.0ʱ��ʾ�رմ��ڱ�Ե��Ӱ��
     * @param { string } color - ��ʾ���ڱ�Ե��Ӱ����ɫ��Ϊʮ������RGB��ARGB��ɫ�������ִ�Сд������`#00FF00`��`#FF00FF00`��Ĭ��ֵΪ'#000000'��
     * @param { double } offsetX - ��ʾ���ڱ�Ե��Ӱ��X���ƫ�������ò���Ϊ����������λΪpx��Ĭ��ֵΪ0.0��
     * @param { double } offsetY - ��ʾ���ڱ�Ե��Ӱ��Y���ƫ�������ò���Ϊ����������λΪpx��Ĭ��ֵΪ0.0��
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setShadow(radius: double, color?: string, offsetX?: double, offsetY?: double): void;

    /**
     * �����Ӵ������������ڱ�Ե��Ӱ��ģ���뾶��
     *
     * @param { double } radius - ��ʾ���ڱ�Ե��Ӱ��ģ���뾶���ò���Ϊ����������λΪpx��ȡֵ��ΧΪ[0.0, +��)��ȡֵΪ0.0ʱ��ʾ�رմ��ڱ�Ե��Ӱ��
     * @throws { BusinessError } 401 - Parameter error. Possible cause: The shadow radius is less than zero.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type. Only subwindows and float windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    setWindowShadowRadius(radius: double): void;

    /**
     * ���ô���Բ�ǰ뾶��
     *
     * @param { double } cornerRadius - ��ʾ����Բ�ǵİ뾶ֵ���ò���Ϊ����������λΪpx��ȡֵ��ΧΪ[0.0, +��)��ȡֵΪ0.0ʱ��ʾû�д���Բ�ǡ�
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setCornerRadius(cornerRadius: double): void;

    /**
     * �����Ӵ�����������Բ�ǰ뾶ֵ��ʹ��Promise�첽�ص���
     * 
     * Բ�ǰ뾶ֵ���󽫻ᵼ����������󻯡���С�����رհ�ť��λ�ñ����У��һᵼ����������ʶ������ݴ��ڴ�С���ú��ʵ�Բ�ǰ뾶ֵ��
     * 
     * �ڵ��ô˽ӿ�֮ǰ����[getWindowCornerRadius()]{@link window.Window.getWindowCornerRadius}�ӿڿ��Ի�ô���Ĭ��Բ�ǰ뾶ֵ��
     *
     * @param { double } cornerRadius - ��ʾ����Բ�ǵİ뾶ֵ���ò���Ϊ����������λΪvp��ȡֵ��ΧΪ[0.0, +��)��ȡֵΪ0.0ʱ��ʾû�д���Բ�ǡ�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: The corner radius is less than zero.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    setWindowCornerRadius(cornerRadius: double): Promise<void>;

    /**
     * �ýӿ����ڻ�ȡ�Ӵ�����������Բ�ǰ뾶ֵ����δ����[setWindowCornerRadius()]{@link window.Window.setWindowCornerRadius}�ӿ����ô���Բ�ǰ뾶ֵʱ�����ô˽ӿڿɻ�ȡ
     * ����Ĭ��Բ�ǰ뾶ֵ��
     *
     * @returns { double } ��ǰ�Ӵ�����������Բ�ǰ뾶ֵ����λΪvp��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type. Only subwindows and float windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    getWindowCornerRadius(): double;

    /**
     * ����Ӧ���Ӵ��ڵ�Ӧ�ö��㡣ʹ��callback�첽�ص���
     * 
     * ʹ�øýӿ���Ҫ�ȴ����Ӵ��ڣ���ȷ�����Ӵ��ڵ���[showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}
     * ��ִ����ϡ�
     *
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    raiseToAppTop(callback: AsyncCallback<void>): void;

    /**
     * Ӧ���Ӵ��ڵ��ã�����Ӧ���Ӵ��ڵ����㣬ֻ�ڵ�ǰӦ��ͬһ���������µ���ͬ�����Ӵ���Χ����Ч�������Զ�����zLevel���Ե��Ӵ��ڣ�ֻ�ڵ�ǰӦ��ͬһ������������ͬzLevelֵ���Ӵ���Χ����Ч��ʹ��Promise�첽�ص���
     * 
     * ʹ�øýӿ���Ҫ�ȴ����Ӵ��ڣ���ȷ�����Ӵ��ڵ���[showWindow()]{@link window.Window.showWindow(callback: AsyncCallback<void>)}��ִ����ϡ�
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 14 dynamic
     * @since 23 static
     */
    raiseToAppTop(): Promise<void>;

    /**
     * ���ô������ݲ��֣������߿�ͱ�������װ�Σ��ı�����ʹ��callback�첽�ص���
     * 
     * > **˵����**
     * >
     * > - ͨ�������ӿ���[resize]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}��
     * > [resizeAsync]{@link window.Window.resizeAsync}���ô��ڴ�Сʱ������ratioԼ����
     * >
     * > - �����������ã��ҽ���������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING������Ч���˱����������־û����棬�ر�Ӧ�û������豸���л���������������ģʽʱ�����õı�����Ȼ��Ч��
     * >
     * > - ��ͬһӦ�õ�ĳ�������ڵ��ô˽ӿ����ÿ��߱���Ч�󣬺����򿪵������ھ������øÿ��߱ȡ�����Ϊ���������ڵ������ÿ��߱ȣ���ʹ��
     * > [setContentAspectRatio]{@link window.Window.setContentAspectRatio}��
     *
     * @param { double } ratio - �������ݲ��֣������߿�ͱ�������װ�Σ��Ŀ��߱ȡ��ò���Ϊ���������ܴ��������С�ߴ����ƣ�����ֵ����Ϊ��С����/���߶ȣ�����Ϊ������/��С�߶ȡ����������С�ߴ���
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}��ϵͳ���ƵĽ���������ϵͳ�������ȼ�����
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}��ratio����Ч��Χ����
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}�仯���仯�������������
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}�������õ�ratio�����ͻ���᷵�ش����룻�����������ratio�������õ�
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}�����ͻ�����ڵĿ��߱ȿ��ܻ᲻�������õĿ��߱ȣ�ratio����
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     Invalid parameter range.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    setAspectRatio(ratio: double, callback: AsyncCallback<void>): void;

    /**
     * ���ô������ݲ��֣������߿�ͱ�������װ�Σ��ı�����ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > - ͨ�������ӿ���[resize]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}��
     * > [resizeAsync]{@link window.Window.resizeAsync}���ô��ڴ�Сʱ������ratioԼ����
     * >
     * > - �����������ã��ҽ���������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING������Ч���˱����������־û����棬�ر�Ӧ�û������豸���л���������������ģʽʱ�����õı�����Ȼ��Ч��
     * >
     * > - ��ͬһӦ�õ�ĳ�������ڵ��ô˽ӿ����ÿ��߱���Ч�󣬺����򿪵������ھ������øÿ��߱ȡ�����Ϊ���������ڵ������ÿ��߱ȣ���ʹ��
     * > [setContentAspectRatio]{@link window.Window.setContentAspectRatio}��
     *
     * @param { double } ratio - �������ݲ��֣������߿�ͱ�������װ�Σ��Ŀ��߱ȡ��ò���Ϊ���������ܴ��������С�ߴ����ƣ�����ֵ����Ϊ��С����/���߶ȣ�����Ϊ������/��С�߶ȡ����������С�ߴ���
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}��ϵͳ���ƵĽ���������ϵͳ�������ȼ�����
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}��ratio����Ч��Χ����
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}�仯���仯�������������
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}�������õ�ratio�����ͻ���᷵�ش����룻�����������ratio�������õ�
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}�����ͻ�����ڵĿ��߱ȿ��ܻ᲻�������õĿ��߱ȣ�ratio����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     Invalid parameter range.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    setAspectRatio(ratio: double): Promise<void>;

    /**
     * ���ô������ݲ��֣������߿�ͱ�������װ�Σ��ı�����ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > - ������ͬ��ratio�����������ڿ���ʱ�����ڿ��߻���洰�ڱ߿�װ�γߴ��ɼ��Ա仯��������
     * >
     * > - ͨ��[setWindowDecorVisible]{@link window.Window.setWindowDecorVisible}�����ڱ���������Ϊ���ɼ�ʱ��������������ռ��ԭ���������ĸ߶ȿռ䡣
     * >
     * > - ͨ�������ӿ���[resize]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}��
     * > [resizeAsync]{@link window.Window.resizeAsync}���ô��ڴ�Сʱ������ratioԼ����
     * >
     * > - �����������ã��ҽ���������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING������Ч��
     *
     * @param { double } ratio - �������ݲ��֣������߿�ͱ�������װ�Σ��Ŀ��߱ȡ��ò���Ϊ���������ܴ��������С�ߴ����ƣ�����ֵ����Ϊ��С����/���߶ȣ�����Ϊ������/��С�߶ȡ����������С�ߴ���
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}��ϵͳ���ƵĽ���������ϵͳ�������ȼ�����
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}��ratio����Ч��Χ����
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}�仯���仯�������������
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}�������õ�ratio�����ͻ���᷵�ش����룻�����������ratio�������õ�
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}�����ͻ�����ڵĿ��߱ȿ��ܻ᲻�������õĿ��߱ȣ�ratio����
     * @param { boolean } [isPersistent] - �Ƿ�־û�����ñ���������<br/>��Ϊ`true`������������־û����棬���ٴ��ڡ��ر�Ӧ�û������豸�󣬵��ٴ��л���������������ģʽʱ��Ȼ��Ч����ͨ��
     *     [resetAspectRatio]{@link window.Window.resetAspectRatio()}����־û�����ı���������<br/>��Ϊ`false`�������������Ե�ǰ������Ч���������ٺ����������
     *     ��<br/>Ĭ��ֵΪ`true`��
     * @param { boolean } [needUpdateRect] - �Ƿ��������ݵ�ǰ�������´��ڴ�С��<br/>��Ϊ`true`���������ݵ�ǰ�������´��ڴ�С��<br/>��Ϊ`false`�����ڽ�����ק����ʱ���ݵ�ǰ��
     *     �����£�Ҳ����ʹ��[resize]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}��
     *     [resizeAsync]{@link window.Window.resizeAsync}�����������¡�<br/>Ĭ��ֵΪ`true`��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range.
     *     2. Invalid parameter length.
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    setContentAspectRatio(ratio: double, isPersistent?: boolean, needUpdateRect?: boolean): Promise<void>;

    /**
     * ȡ�����ô������ݲ��ֵı�����ʹ��callback�첽�ص���
     * 
     * �����������ã����ú�����־û�����ı�����Ϣ��
     *
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    resetAspectRatio(callback: AsyncCallback<void>): void;

    /**
     * ȡ�����ô������ݲ��ֵı�����ʹ��Promise�첽�ص���
     * 
     * �����������ã����ú�����־û�����ı�����Ϣ��
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    resetAspectRatio(): Promise<void>;

    /**
     * Ϊ��ǰ�������ӻ�ɾ����ȫˮӡ��־��ʹ��callback�첽�ص���
     *
     * @param { boolean } enable - �Ƿ�Դ������ӱ�־λ��true��ʾ���ӣ�false��ʾɾ����
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300008 - The display device is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    setWaterMarkFlag(enable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Ϊ��ǰ�������ӻ�ɾ����ȫˮӡ��־��ʹ��Promise�첽�ص���
     *
     * @param { boolean } enable - �Ƿ�Դ������ӱ�־λ��true��ʾ���ӣ�false��ʾɾ����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300008 - The display device is abnormal.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    setWaterMarkFlag(enable: boolean): Promise<void>;

    /**
     * ��ͬһ���������µ��Ӵ���̧����Ŀ���Ӵ���֮�ϡ�ʹ��callback�첽�ص���
     * 
     * ʹ�øýӿ���Ҫȷ��Ҫ̧�����Ӵ��ں�Ŀ���Ӵ��ڶ��Ѵ�����ɣ��ֱ����
     * [showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}��ִ����ϡ�
     *
     * @param { int } windowId - Ŀ���Ӵ��ڵ�id��ͨ��[getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}��
     *     �ڻ�ȡ��[properties]{@link @ohos.window:window.WindowProperties}����ͨ��properties.id��ȡ��
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Mandatory parameters are left unspecified.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    raiseAboveTarget(windowId: int, callback: AsyncCallback<void>): void;

    /**
     * ��ͬһ�������µ��Ӵ���������Ŀ���Ӵ���֮�ϡ�ʹ��Promise�첽�ص���
     * 
     * ʹ�øýӿ���Ҫȷ��Ҫ̧�����Ӵ��ں�Ŀ���Ӵ��ڶ��Ѵ�����ɣ��ֱ����
     * [showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}��ִ����ϡ�
     *
     * @param { int } windowId - Ŀ���Ӵ��ڵ�id��ͨ��[getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}��
     *     �ڻ�ȡ��[properties]{@link @ohos.window:window.WindowProperties}����ͨ��properties.id��ȡ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Mandatory parameters are left unspecified.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    raiseAboveTarget(windowId: int): Promise<void>;

    /**
     * �������ڵĲ㼶������ͬӦ���µ���һ��������֮�ϣ��Ӵ��ڵĲ㼶��������������ڱ䶯��ʹ��Promise�첽�ص���
     * 
     * ��֧��ϵͳӦ�������ڵ��á�
     * 
     * ����Ŀ�������ڵ�id�����ô��ں�Ŀ�괰�������㣺ͬӦ�ý��̡���ʾ��ͬһ���������㼶�������������ö���������ģ̬��������ģӦ���Ӵ���
     * 
     * - Ӧ�������ڻ��������Ӵ�������ǽ��㴰�ڣ��������ڵ��øýӿڽ��Ͳ㼶�����Զ�ʧ�����ɵ�ǰ�㼶��ߵ�Ӧ�ô��ڻ񽹡�
     * - Ӧ�������ڵ��øýӿڵ����㼶�󳬹���ǰ���㴰�ڣ���̧�������ڼ����Ӵ����У��㼶��ߵĴ����Զ��񽹣�Ӧ�������ڵ��øýӿڵ����㼶��δ������ǰ���㴰�ڣ��򽹵㲻��ת�ơ�
     *
     * @param { int } windowId - Ŀ�������ڵ�id���ò���Ϊ������ͨ��
     *     [getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}�ӿڻ�ȡ��
     *     [properties]{@link @ohos.window:window.WindowProperties}����ͨ��properties.id��ȡ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range. 2. Invalid parameter length.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    raiseMainWindowAboveTarget(windowId: int): Promise<void>;

    /**
     * ��ֹ/ʹ���Ӵ��ڵ��̧�����ܡ�ʹ��callback�첽�ص���
     * 
     * ͨ����˵�����һ���Ӵ��ڣ��Ὣ���Ӵ�����ʾ�����Ϸ����������Ϊfalse����ô����Ӵ��ڵ�ʱ�򣬲��Ὣ���Ӵ�����ʾ�����Ϸ������Ǳ��ֲ��䡣
     * 
     * ʹ�øýӿ���Ҫ�ȴ����Ӵ��ڣ���ȷ�����Ӵ��ڵ���[showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}
     * ��ִ����ϡ�
     *
     * @param { boolean } enable - �����Ӵ��ڵ��̧�������Ƿ�ʹ�ܣ�true��ʾʹ�ܣ�false��ʾ��ֹ��
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    setRaiseByClickEnabled(enable: boolean, callback: AsyncCallback<void>): void;

    /**
     * ��ֹ/ʹ���Ӵ����̧�����ܡ�ʹ��Promise�첽�ص���
     * 
     * ͨ����˵�����һ���Ӵ��ڣ��Ὣ���Ӵ�����ʾ̧����Ӧ����ͬһ����������ͬ�����Ӵ��ڵ����Ϸ����������Ϊfalse����ô����Ӵ��ڵ�ʱ�򣬲��Ὣ���Ӵ��ڽ���̧�������Ǳ��ֲ��䡣
     * 
     * ʹ�øýӿ���Ҫ�ȴ����Ӵ��ڣ���ȷ�����Ӵ��ڵ���[showWindow()]{@link window.Window.showWindow(callback: AsyncCallback<void>)}��ִ����ϡ�
     *
     * @param { boolean } enable - �����Ӵ��ڵ��̧�������Ƿ�ʹ�ܣ�true��ʾʹ�ܣ�false��ʾ��ֹ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @since 14 dynamic
     * @since 23 static
     */
    setRaiseByClickEnabled(enable: boolean): Promise<void>;

    /**
     * ��ֹ/ʹ�������ڵ��̧�����ܡ�ʹ��Promise�첽�ص���
     * 
     * ���������ʱ��Ĭ�ϻ�̧�������ڼ����Ӵ��ڡ����ô˽ӿڽ�ֹ�����ڵ��̧���󣨼�����false�������������ʱ���Ὣ�估�Ӵ��ڽ���̧��������ԭ��״̬���䣻����Ӵ���ʱ�������ڻ���ͬ�Ӵ���һ��̧����
     *
     * @param { boolean } enable - ���������ڵ��̧�������Ƿ�ʹ�ܣ�true��ʾʹ�ܣ�false��ʾ��ֹ��
     * @returns { Promise<void> } Promise�����޷��ؽ����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 23 dynamic&static
     */
    setMainWindowRaiseByClickEnabled(enable: boolean): Promise<void>;

    /**
     * �˽ӿڸ��ݵ��ö���ͬ��ʵ�ֲ�ͬ�Ĺ��ܣ�
     * 
     * - �����ö���Ϊ������ʱ��ʵ����С�����ܣ�����Dock���л�ԭ��2in1 �豸�Ͽ���ʹ��[restore()]{@link window.Window.restore}���л�ԭ��
     * - �����ö���Ϊ�Ӵ��ڻ�ȫ��������ʱ��ʵ�����ع��ܣ�������Dock���л�ԭ������ʹ��
     * [showWindow()]{@link window.Window.showWindow(callback: AsyncCallback<void>)}���л�ԭ��
     * 
     * �ýӿڽ�֧�������ڡ��Ӵ��ڻ�ȫ�����������������ڵ��÷���1300002�����룬ʹ��callback�첽�ص���
     *
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error;
     *     3. Invalid window type. Only main windows, subwindows, and float windows are supported.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    minimize(callback: AsyncCallback<void>): void;

    /**
     * �˽ӿڸ��ݵ��ö���ͬ��ʵ�ֲ�ͬ�Ĺ��ܣ�
     * 
     * - �����ö���Ϊ������ʱ��ʵ����С�����ܣ�����Dock���л�ԭ��2in1 �豸�Ͽ���ʹ��[restore()]{@link window.Window.restore}���л�ԭ��
     * - �����ö���Ϊ�Ӵ��ڻ�ȫ��������ʱ��ʵ�����ع��ܣ�������Dock���л�ԭ������ʹ��
     * [showWindow()]{@link window.Window.showWindow(callback: AsyncCallback<void>)}���л�ԭ��
     * 
     * �ýӿڽ�֧�������ڡ��Ӵ��ڻ�ȫ�����������������ڵ��÷���1300002�����룬ʹ��Promise�첽�ص���
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error;
     *     3. Invalid window type. Only main windows, subwindows, and float windows are supported.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    minimize(): Promise<void>;

    /**
     * ʵ����󻯹��ܡ������ڿɵ��ô˽ӿ�ʵ����󻯹��ܣ��Ӵ������ڴ���ʱ�����Ӵ��ڲ���maximizeSupportedΪtrue��
     * �ٵ��ô˽ӿڿ�ʵ����󻯹��ܡ�ʹ��Promise�첽�ص���
     *
     * @param { MaximizePresentation } presentation - set window presentation when maximize. [since 12 - 19]
     * @param { MaximizePresentation } [presentation] - �����ڻ��Ӵ������ʱ�Ĳ���ö�١�
     *     Ĭ��ֵwindow.MaximizePresentation.ENTER_IMMERSIVE����Ĭ�����ʱ����ȫ��ģʽ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported. Function maximize can not work correctly due to limited
     *     device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and maximizable subwindows are supported.
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 12 - 19]
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    maximize(presentation?: MaximizePresentation): Promise<void>;

    /**
     * ʵ����󻯹��ܡ������ڿɵ��ô˽ӿ�ʵ����󻯹��ܣ��Ӵ������ڴ���ʱ�����Ӵ��ڲ���maximizeSupportedΪtrue���ٵ��ô˽ӿڿ�ʵ����󻯹��ܡ��ھ߱��۵����ܵ�2in1�豸�ϣ�֧�ֿ�����̬ͣ���ο�
     * [�۵�����̬ͣ���ʵ��](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-folded-hover)���������ڵ��ٲ���ģʽ��Ϊ������������̬ͣ��
     * ���ʱ�Ƿ����������������ʾ��ʹ��Promise�첽�ص���
     *
     * @param { MaximizePresentation } [presentation] - �����ڻ��Ӵ������ʱ�Ĳ���ö�١�
     *     Ĭ��ֵwindow.MaximizePresentation.ENTER_IMMERSIVE����Ĭ�����ʱ����ȫ��ģʽ��
     * @param { boolean } [acrossDisplay] - ������̬ͣ�������������ʱ���ٲ���ģʽ��Ϊ��Ĭ��ֵΪ`undefined`��
     *     <br>�������ڿ����ô˲������������ڵ���ʱ���ش�����`1300004`��<br>ȡֵΪ`true`ʱ��
     *     <br>- ��̬ͣ�£����ڽ�ֱ�ӽ����ٲ���ģʽ��<br>- չ��̬�£����ڽ�����󻯣�������̬ͣ�±����ٲ���ģʽ��
     *     <br>ȡֵΪ`false`ʱ��<br>- ��̬ͣ�£����ڽ��˳��ٲ���ģʽ�����뵥����󻯣����������ʱֻ���ϰ������°�����ʾ����
     *     <br>- չ��̬�£����ڽ�����󻯣�������̬ͣ���˳��ٲ���ģʽ��<br>ȡֵΪ`undefined`ʱ�����޸Ĵ����ٲ���ģʽ��Ϊ��
     *     <br>- ��̬ͣ�£����ڽ��뵥����󻯣�<br>- չ��̬�£����ڽ�����󻯣�������̬ͣ��Ĭ�ϱ����ٲ���ģʽ��
     *     <br>**�豸��Ϊ���죺** ���ھ߱��۵����ܵ�2in1�豸���������ã��������豸�ϵ��ò���Ч��
     * @returns { Promise<void> } Promise�����޷��ؽ����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function maximize can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and maximizable subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    maximize(presentation?: MaximizePresentation, acrossDisplay?: boolean): Promise<void>;

    /**
     * ���Ӧ�ô��ڡ�
     *
     * @param { MaximizeOptions } [maximizeOptions] - The configuration of maximize.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     1. Invalid window type. Only main windows and maximizable subwindows are supported;
     *     2. The acrossDisplay parameter only supports main windows.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maximizeWithOptions(maximizeOptions?: MaximizeOptions): Promise<void>;

    /**
     * ��ֹ/ʹ��ͨ����ק��ʽ���������ڻ�����װ�ε��Ӵ��ڵĹ��ܡ�ʹ��callback�첽�ص���
     *
     * @param { boolean } enable - ���ô����Ƿ�ʹ��ͨ����ק�������ţ�true��ʾʹ�ܣ�false��ʾ��ֹ��
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setResizeByDragEnabled(enable: boolean, callback: AsyncCallback<void>): void;

    /**
     * ��ֹ/ʹ��ͨ����ק��ʽ���������ڻ�����װ�ε��Ӵ��ڵĹ��ܡ�ʹ��Promise�첽�ص���
     *
     * @param { boolean } enable - ���ô����Ƿ�ʹ��ͨ����ק�������ţ�true��ʾʹ�ܣ�false��ʾ��ֹ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setResizeByDragEnabled(enable: boolean): Promise<void>;

    /**
     * �����Ƿ����ط�ϵͳ���������ڣ�[windowType]{@link @ohos.window:window.WindowType}����ΪTYPE_FLOAT����ʹ��callback�첽�ص���
     * 
     * ��ϵͳ������������ָ��ϵͳӦ�ô������������ڡ�Ĭ������£�һ��ϵͳӦ�������ڿ������ϵͳ���������ڹ�ͬ��ʾ�����������ڿ��Ա��ϲ�ķ�ϵͳ�����������ڵ����������Ϊtrue�������еķ�ϵͳ���������ڶ��ᱻ���أ���ʱ�������ھͲ���
     * ���ϲ�ķ�ϵͳ�����������ڵ���
     *
     * @param { boolean } shouldHide - ָʾ�Ƿ����ط�ϵͳ�����������ڣ�true��ʾ���أ�false��ʾ�����ء�
     * @param { AsyncCallback<void> } callback - �ص�������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    hideNonSystemFloatingWindows(shouldHide: boolean, callback: AsyncCallback<void>): void;

    /**
     * �����Ƿ����ط�ϵͳ���������ڣ�[windowType]{@link @ohos.window:window.WindowType}����ΪTYPE_FLOAT����ʹ��Promise�첽�ص���
     * 
     * ��ϵͳ������������ָ��ϵͳӦ�ô������������ڡ�Ĭ������£�һ��ϵͳӦ�������ڿ������ϵͳ���������ڹ�ͬ��ʾ�����������ڿ��Ա��ϲ�ķ�ϵͳ�����������ڵ����������Ϊtrue�������еķ�ϵͳ���������ڶ��ᱻ���أ���ʱ�������ھͲ���
     * ���ϲ�ķ�ϵͳ�����������ڵ���
     *
     * @param { boolean } shouldHide - ָʾ�Ƿ����ط�ϵͳ�����������ڣ�true��ʾ���أ�false��ʾ�����ء�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    hideNonSystemFloatingWindows(shouldHide: boolean): Promise<void>;

    /**
     * ��ȡ��ǰӦ�ô��ڵĳߴ����ƣ���λΪ��������px��
     *
     * @returns { WindowLimits } ��ǰ���ڳߴ����ơ�
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getWindowLimits(): WindowLimits;

    /**
     * ��ȡ��ǰӦ�ô��ڵĳߴ����ƣ���λΪ��������vp��
     * 
     * ����ϵͳ���ں�ȫ����������Ĭ�ϴ��ڿ��ߵ�ϵͳ������СֵΪ1px��ͨ���˽ӿڻ�ȡ����1vp���Ǽ���ȡ�����ֵ��
     *
     * @returns { WindowLimits } ��ǰ���ڳߴ����ơ�
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    getWindowLimitsVP(): WindowLimits;

    /**
     * ���õ�ǰ���ڵĳߴ����ƣ�ʹ��Promise�첽�ص���
     * 
     * Ĭ�ϴ���һ��ϵͳ�ߴ����ƣ�ϵͳ�ߴ������ɲ�Ʒ���þ����������޸ġ�
     * 
     * δ����setWindowLimits���ù�WindowLimitsʱ��ʹ��[getWindowLimits]{@link window.Window.getWindowLimits}��
     * [getWindowLimitsVP]{@link window.Window.getWindowLimitsVP}�ɻ�ȡϵͳ���ơ�
     * 
     * > **˵����**
     * >
     * > - [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£�����������������ģʽ��������ģʽΪ
     * > window.WindowStatusType.FLOATING���Ĵ����ڳߴ�仯ʱ��[WindowLimits]{@link @ohos.window:window.WindowLimits}Լ������������������Ӧ������
     * > �ı䴰�ڴ�С�������[resize()]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}����ϵͳ���ڴ�
     * > �ڴ�С����ֱ��ʱ仯����ʾ��С����ϵ���仯�����û���ק���Ŵ��ڡ�
     * >
     * > - ��[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£������ڳߴ粻��
     * > [WindowLimits]{@link @ohos.window:window.WindowLimits}Լ�����������ʹ�������
     * > [WindowLimits]{@link @ohos.window:window.WindowLimits}Լ����
     *
     * @param { WindowLimits } windowLimits - Ŀ�괰�ڵĳߴ����ƣ���λΪpx��vp��
     * @returns { Promise<WindowLimits> } Promise���󡣷������ú�ĳߴ����ƣ�Ϊ�����ϵͳ�ߴ����ƵĽ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setWindowLimits(windowLimits: WindowLimits): Promise<WindowLimits>;

    /**
     * ���õ�ǰ���ڵĳߴ����ƣ�ʹ��Promise�첽�ص���
     * 
     * Ĭ�ϴ���һ��ϵͳ�ߴ����ƣ�ϵͳ�ߴ������ɲ�Ʒ���þ����������޸ġ�
     * 
     * δ����setWindowLimits���ù�WindowLimitsʱ��ʹ��[getWindowLimits]{@link window.Window.getWindowLimits}��
     * [getWindowLimitsVP]{@link window.Window.getWindowLimitsVP}�ɻ�ȡϵͳ���ơ�
     * 
     * > **˵����**
     * >
     * > - [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£�����������������ģʽ��������ģʽΪ
     * > window.WindowStatusType.FLOATING���Ĵ����ڳߴ�仯ʱ��[WindowLimits]{@link @ohos.window:window.WindowLimits}Լ������������������Ӧ������
     * > �ı䴰�ڴ�С�������[resize()]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}����ϵͳ���ڴ�
     * > �ڴ�С����ֱ��ʱ仯����ʾ��С����ϵ���仯�����û���ק���Ŵ��ڡ�
     * >
     * > - ��[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£������ڳߴ粻��
     * > [WindowLimits]{@link @ohos.window:window.WindowLimits}Լ�����������ʹ�������
     * > [WindowLimits]{@link @ohos.window:window.WindowLimits}Լ����
     *
     * @param { WindowLimits } windowLimits - Ŀ�괰�ڵĳߴ����ƣ���λΪpx��vp��
     * @param { boolean } isForcible - �Ƿ�ǿ�����ô��ڵĳߴ����ơ�<br>���[windowLimits]{@link @ohos.window:window.WindowLimits}�ĵ�λΪvpʱ
     *     ����������true����false��������false���������ڿ��ߵ���Сֵ�����ֵ��ȡ����ϵͳ���ơ�<br>���[windowLimits]{@link @ohos.window:window.WindowLimits}
     *     �ĵ�λΪpxʱ������Ϊtrue����ʾ���ڿ�����Сֵ��ϵͳ����ֵ��40vp�����еĵ���ֵΪ׼�����ڿ��ߵ����ֵ��ȡ����ϵͳ���ƣ�����Ϊfalse����ʾ���ڿ��ߵ���Сֵ�����ֵ��ȡ����ϵͳ���ơ�
     * @returns { Promise<WindowLimits> } Promise���󡣷������ú�Ĵ��ڳߴ����ơ�
     *     <br>���[windowLimits]{@link @ohos.window:window.WindowLimits}�ĵ�λΪvpʱ�����������ϵͳĬ�ϴ��ڳߴ����ƵĽ�����
     *     <br>���[windowLimits]{@link @ohos.window:window.WindowLimits}�ĵ�λΪpxʱ��isForcibleΪfalse�򷵻������ϵͳĬ�ϴ��ڳߴ����ƵĽ�����isForcibleΪ
     *     true�򷵻������[ϵͳ���Ƶ���Сֵ��40vp�����еĵ���ֵ��ϵͳ���Ƶ����ֵ]�Ľ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    setWindowLimits(windowLimits: WindowLimits, isForcible: boolean): Promise<WindowLimits>;

    /**
     * ��ֹ/ʹ�ܵ�֡�ϳ���Ⱦ�ڵ�Ĺ��ܡ�ʹ��Promise�첽�ص���
     * 
     * ��֡�ϳ���Ⱦ�ڵ�Ĺ�����Ҫ���ڸ�����Ҫ��ϸߵĳ�����ʹ�ܸù���֮����Խ�����Ⱦ�ڵ��������ʱ��ͨ��setSingleFrameComposerEnabled�ӿڣ����enable����Ϊtrue����ʹ�ܵ�֡�ϳ���Ⱦ�ڵ�Ĺ��ܣ���
     * ���ֹ��֡�ϳ���Ⱦ�ڵ�Ĺ��ܡ�
     *
     * @param { boolean } enable - ���õ�֡�ϳ���Ⱦ�ڵ�Ĺ����Ƿ�ʹ�ܣ�true��ʾʹ�ܣ�false��ʾ��ֹ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    setSingleFrameComposerEnabled(enable: boolean): Promise<void>;

    /**
     * ��ǰ���ڻ�ʱ�Ƿ������������ڴ����������̣�֧��ϵͳ���ڡ�Ӧ���Ӵ��ڡ�ģ̬����ȫ����������
     *
     * @param { boolean } keepKeyboardFlag - �Ƿ����������ڴ����������̡�true��ʾ������false��ʾ��������
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    keepKeyboardOnFocus(keepKeyboardFlag: boolean): void;

    /**
     * �������ڴ�ȫ������󻯡�����ģʽ�»�ԭΪ������������ģʽ��������ģʽΪwindow.WindowStatusType.FLOATING�������ָ��������ģʽ֮ǰ�Ĵ�С��λ�ã��Ѿ���������������ģʽ�����ٻ�ԭ��ʹ��Promise
     * �첽�ص���
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     *     3. The window does not support floating mode.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    recover(): Promise<void>;

    /**
     * Restores the main window from full-screen, maximized, or split-screen mode to a floating window,
     * and resets its size and position to their previous values before full-screen,
     * maximized, or split-screen mode was entered.
     *
     * @param { WindowSnapshotAnimationConfig } snapshotAnimationConfig - ��ͼ�����������á�
     * @returns { Promise<void> } - �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error;
     *     3. The window does not support floating mode.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    recover(snapshotAnimationConfig: WindowSnapshotAnimationConfig): Promise<void>;

    /**
     * ������Ϊ��С��״̬��UIAbility��������ΪonForegroundʱ���������ڴ���С��״̬���ָ���ǰ̨��ʾ�����ָ���������С��״̬֮ǰ�Ĵ�С��λ�á�������Ϊǰ̨״̬ʱ����̧�������ڲ㼶��ʹ��Promise�첽�ص���
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    restore(): Promise<void>;

    /**
     * ����ǰ���ڵ������ڻָ���ǰ̨��ʾ������������Ѵ���ǰ̨�����̧�������㼶���˽ӿڽ�����������Ϊ[TYPE_FLOAT]{@link @ohos.window:window.WindowType}�Ĵ��ڣ��������ڴ��ڴ�����
     * [DOWN]{@link ./@internal/component/ets/enums:TouchType}�¼�����ܵ��á�ʹ��Promise�첽�ص���
     *
     * @param { Record<string, Object> } [wantParameters] - Want parameters.
     *     Custom want parameter delivered when restoring the main window.
     *     Want parameters are used for UIAbility onNewWant.
     * @returns { Promise<void> } Promise�����޷��ؽ����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     1. The window is not float window.
     *     2. The window is not at foreground or has never been clicked.
     *     3. The window cannot find main window.
     * @throws { BusinessError } 1300007 - Restore parent main window failed. Possible cause:
     *     1. The main window is in PAUSED lifecycle state.
     *     2. The main window is in background during recent.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    restoreMainWindow(wantParameters?: Record<string, Object>): Promise<void>;

    /**
     * ���ô��ڱ������Ƿ�ɼ����Դ��ڱ��������������Ĵ�����̬��Ч��Stageģ���£��ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     * 
     * ���ô��ڱ��������ɼ��󣬵������ڽ���ȫ������״̬ʱ����ʱ���Hover���Ϸ����ڱ����������ϻ���ʾ�������������������������������ʾ����ʹ��
     * [setTitleAndDockHoverShown()]{@link window.Window.setTitleAndDockHoverShown}�ӿڡ�
     *
     * @param { boolean } isVisible - ���ñ������Ƿ�ɼ���trueΪ�ɼ���falseΪ���ء�
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation. [since 11 - 19]
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setWindowDecorVisible(isVisible: boolean): void;

    /**
     * ��ѯ���ڱ������Ƿ�ɼ������ʹ��Stageģ�ͣ��ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     *
     * @returns { boolean } ���ص�ǰ���ڱ������Ƿ�ɼ���true��ʾ�ɼ���false��ʾ���ɼ���
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    getWindowDecorVisible(): boolean;

    /**
     * ��ֹ/ʹ���������Ӵ�������Ĭ���ƶ����ں�˫����󻯵Ĺ��ܣ������ñ�����Ĭ���ƶ����ں�˫����󻯵Ĺ���ʱ����ʹ��[startMoving()]{@link window.Window.startMoving()}��Ӧ�������з���
     * ��ק�ƶ���ʹ��[maximize()]{@link window.Window.maximize(presentation?: MaximizePresentation)}ʵ����󻯹��ܡ����ʹ��Stageģ�ͣ��ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     *
     * @param { boolean } enabled - �Ƿ�ʹ�ܱ�����Ĭ���ƶ����ں�˫����󻯹��ܣ�true��ʾʹ�ܣ�false��ʾ��ʹ�ܡ�
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowTitleMoveEnabled(enabled: boolean): void;

    /**
     * ���ô��ڱ��⣬ʹ��Promise�첽�ص������ʹ��Stageģ�ͣ��ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     *
     * @param { string } titleName - ���ڱ��⡣������ʾ�������Ҷ˲�����ϵͳ������������ˣ�����������ʡ�Ժű�ʾ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    setWindowTitle(titleName: string): Promise<void>;

    /**
     * �����Ӵ���ģ̬�����Ƿ����ã�ʹ��Promise�첽�ص���
     * 
     * �Ӵ��ڵ��øýӿ�ʱ�������Ӵ���ģ̬�����Ƿ����á������Ӵ���ģ̬���Ժ��丸�����ڲ�����Ӧ�û�������ֱ���Ӵ��ڹرջ����Ӵ��ڵ�ģ̬���Ա����á�
     * 
     * �Ӵ���֮��Ĵ��ڵ��øýӿ�ʱ���ᱨ����
     *
     * @param { boolean } isModal - �����Ӵ���ģ̬�����Ƿ����ã�trueΪ���ã�falseΪ�����á�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 20]
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setSubWindowModal(isModal: boolean): Promise<void>;

    /**
     * �����Ӵ���ģ̬���ͣ�ʹ��Promise�첽�ص���
     * 
     * ���Ӵ���ģ̬����Ϊģ�����Ӵ�ʱ���丸�����ڲ�����Ӧ�û�������ֱ���Ӵ��ڹرջ����Ӵ��ڵ�ģ̬���ͱ����á�
     * 
     * ���Ӵ���ģ̬����ΪģӦ���Ӵ�ʱ���丸���������Ӧ������ʵ���Ĵ��ڲ�����Ӧ�û�������ֱ���Ӵ��ڹرջ����Ӵ��ڵ�ģ̬���ͱ����á�
     * 
     * �˽ӿڽ�֧�������Ӵ���ģ̬���ͣ�����Ҫ�����Ӵ���ģ̬����ʱ������ʹ��
     * [setSubWindowModal<sup>12+</sup>]{@link window.Window.setSubWindowModal(isModal: boolean)}��
     * 
     * �Ӵ���֮��Ĵ��ڵ��øýӿ�ʱ���ᱨ����
     *
     * @param { boolean } isModal - �����Ӵ���ģ̬�����Ƿ����ã�trueΪ���ã�falseΪ�����á���ǰ��֧������Ϊtrue��
     * @param { ModalityType } modalityType - �Ӵ���ģ̬���͡�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 20]
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setSubWindowModal(isModal: boolean, modalityType: ModalityType): Promise<void>;

    /**
     * ���ô��ڵı������߶ȣ��Դ��ڱ��������������Ĵ�����̬��Ч�����ʹ��Stageģ�ͣ��ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     * 
     * �������ڽ���ȫ������״̬ʱ����ʱ���Hover�����ڱ���������ʱ������ʾ�����������������������߶ȹ̶�Ϊ37vp��
     * 
     * ����ϵͳ����ת�����ܴ��ھ��������ú����[getWindowDecorHeight()]{@link window.Window.getWindowDecorHeight}��ȡ��ֵ���������õ�ֵ����1vp�Ĳ��졣
     *
     * @param { int } height - ���õĴ��ڱ������߶ȣ���֧�־��д��ڱ������Ĵ��ڡ��ò���Ϊ���������������뽫����ȡ����ȡֵ��ΧΪ[37,112]����Χ��Ϊ�Ƿ���������λΪvp��
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Invalid parameter range.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setWindowDecorHeight(height: int): void;

    /**
     * �Դ��ڱ��������������Ĵ�����̬��Ч�����ڻ�ȡ���ڵı������߶ȡ����ʹ��Stageģ�ͣ��ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     * 
     * ����ϵͳ����ת�����ܴ��ھ���������[setWindowDecorHeight()]{@link window.Window.setWindowDecorHeight}���õ�ֵ���ȡ��ֵ���ܴ���1vp�Ĳ��졣
     *
     * @returns { int } ���صĴ��ڱ������߶ȡ��ò���Ϊ������ȡֵ��ΧΪ[37,112]����λΪvp��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getWindowDecorHeight(): int;

    /**
     * ����װ������ť��ʽ�������������Ӵ���Ч�����ʹ��Stageģ�ͣ��ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     *
     * @param { DecorButtonStyle } dectorStyle - Ҫ���õ�װ������ť��ʽ��
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setDecorButtonStyle(dectorStyle: DecorButtonStyle): void;

    /**
     * ��ȡװ������ť��ʽ�������������Ӵ���Ч��
     *
     * @returns { DecorButtonStyle } ���ص�ǰ����װ�����ϵİ�ť��ʽ������װ�ΰ�ť����λ�ڴ��ڵ����Ͻǡ�
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getDecorButtonStyle(): DecorButtonStyle;

    /**
     * ʵ�����ô��ڿɴ������򣻲�����ʱĬ��������������ɴ��������ô��ڿɴ�������������ⴥ���¼�����͸������������������仯��Ҫ�������á�
     *
     * @permission ohos.permission.SET_WINDOW_TOUCH_AREAS [since 26.0.0]
     * @param { Array<Rect> } rects - ���ڿɴ������򡣿ɴ����������������ܳ���10�����ҷ�Χ���ܳ�����������
     * @returns { Promise<void> } Promise that returns no value. [since 26.0.0]
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have
     *     the permission required or a non-system application calls the API. [since 26.0.0]
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12 - 24]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 24]
     * @publicapi [since 26.0.0]
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    setTouchableAreas(rects: Array<Rect>): Promise<void>;

    /**
     * ��ȡ�����ڻ�����װ�ε��Ӵ��ڵı������ϵ���С������󻯡��رհ�ť��������
     *
     * @returns { TitleButtonRect } �������ϵ���С������󻯡��رհ�ť�������򣬸�����λ��������Դ������Ͻǡ�
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getTitleButtonRect(): TitleButtonRect;

    /**
     * ���������������ϵ���󻯡���С����������ť�Ƿ�ɼ���
     * 
     * �����ڵ�ǰ�����¿ɼ��ı�������ť����󻯡���С������������Ч��
     *
     * @param { boolean } isMaximizeVisible - ������󻯰�ť�Ƿ�ɼ���trueΪ�ɼ���falseΪ���ء�
     * @param { boolean } isMinimizeVisible - ������С����ť�Ƿ�ɼ���trueΪ�ɼ���falseΪ���ء�
     * @param { boolean } isSplitVisible - ���÷�����ť�Ƿ�ɼ���trueΪ�ɼ���falseΪ���ء�
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setTitleButtonVisible(isMaximizeVisible: boolean, isMinimizeVisible: boolean, isSplitVisible: boolean): void;

    /**
     * ���������������ϵ���󻯡���С�����رհ�ť�Ƿ�ɼ���
     *
     * @param { boolean } isMaximizeButtonVisible - ������󻯰�ť�Ƿ�ɼ���trueΪ�ɼ���falseΪ���ء������󻯰�ť���أ���ô����󻯳����£�Ҳ���ض�Ӧ�Ļ�ԭ��ť��
     * @param { boolean } isMinimizeButtonVisible - ������С����ť�Ƿ�ɼ���trueΪ�ɼ���falseΪ���ء�
     * @param { boolean } isCloseButtonVisible - ���ùرհ�ť�Ƿ�ɼ���trueΪ�ɼ���falseΪ���أ�Ĭ��ֵtrue��
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowTitleButtonVisible(isMaximizeButtonVisible: boolean, isMinimizeButtonVisible: boolean, isCloseButtonVisible?: boolean): void;

    /**
     * Ӧ�ò��ֽ���֧�ֺ��򲼾�ʱ���ڽ���ý���ʱʹ�ܣ�ʹ�ܺ��֧�ֽ������ര�����������򲼾ֽ���ʹ�á�
     * 
     * �˽ӿ�ֻ��Ӧ����������Ч������Ҫ��module.json5�����ļ���[abilities](docroot://quick-start/module-configuration-file.md#abilities��ǩ)��ǩ����
     * ��preferMultiWindowOrientation����Ϊ"landscape_auto"��
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws {BusinessError} 1300002 - This window state is abnormal.
     * @throws {BusinessError} 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    enableLandscapeMultiWindow(): Promise<void>;

    /**
     * ��ʼ�ƶ����ڣ�ʹ��Promise�첽�ص���
     * 
     * [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£���ϵͳ���ڡ�Ӧ�������ڡ�Ӧ���Ӵ��ڡ�ȫ����������ģ̬������Ч�������ɴ���״̬�£�����ϵͳ���ڡ�Ӧ���Ӵ�
     * �ڡ�ȫ����������ģ̬������Ч��Ӧ�������ڵ��øýӿڷ���801��1300004�����롣
     * 
     * ����[onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#touchevent����˵��)�¼������У��¼����ͱ���Ϊ
     * TouchType.Down���Ļص������е��ô˽ӿڲŻ����ƶ�Ч�����ɹ����ô˽ӿں󣬴��ڽ��������������ƶ���
     * 
     * �ڵ����ק�����£����������ڰ���ʱ������ק�¼�����������¼�����Ϊ[TouchType.Move]{@link ./@internal/component/ets/enums:TouchType}����Ҫ��֤��ǰ��Ϊ�Ѿ�����
     * TouchType.Down�¼���ʱ���ô˽ӿڣ������ƶ�Ч����
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type, main windows are not supported in non-free window mode.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    startMoving(): Promise<void>;

    /**
     * ָ������ڴ����ڵ�λ�ò��ƶ����ڣ�ʹ��Promise�첽�ص���
     * 
     * ��ͬӦ���ڴ��ڷֺϺ�����걣�ְ���״ֱ̬���ƶ��´��ڣ������ʱ�������ƶ��������ƶ�ʱ�����ܻ��ڴ����⡣����ʹ�ñ��ӿ�ָ�������ƶ�ʱ����ڴ����ڵ�λ�ã����ƶ����ڵ����λ�ã��ٿ�ʼ�ƶ����ڡ�
     * 
     * ����[onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#touchevent����˵��)�¼������У��¼����ͱ���Ϊ
     * TouchType.Down���Ļص������е��ô˽ӿڲŻ����ƶ�Ч�����ɹ����ô˽ӿں󣬴��ڽ���������ƶ���
     * 
     * �ڵ����ק�����£����������ڰ���ʱ������ק�¼�����������¼�����Ϊ[TouchType.Move]{@link ./@internal/component/ets/enums:TouchType}����Ҫ��֤��ǰ��Ϊ�Ѿ�����
     * TouchType.Down�¼���ʱ���ô˽ӿڣ������ƶ�Ч����
     *
     * @param { int } offsetX - �����ƶ�ʱԤ�����λ����Դ������Ͻǵ�x��ƫ��������λΪpx���ò�����֧���������룬����������ȡ������ֵΪ�Ƿ����������ڴ��ڿ���Ϊ�Ƿ����������ڿ��ȿ����ڴ�������
     *     [WindowProperties]{@link @ohos.window:window.WindowProperties}�л�ȡ��
     * @param { int } offsetY - �����ƶ�ʱԤ�����λ����Դ������Ͻǵ�y��ƫ��������λΪpx���ò�����֧���������룬����������ȡ������ֵΪ�Ƿ����������ڴ��ڸ߶�Ϊ�Ƿ����������ڸ߶ȿ����ڴ�������
     *     [WindowProperties]{@link @ohos.window:window.WindowProperties}�л�ȡ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    startMoving(offsetX: int, offsetY: int): Promise<void>;

    /**
     * �ڴ�����ק�ƶ������У�ͨ���˽ӿ���ֹͣ�����ƶ���ʹ��Promise�첽�ص���
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    stopMoving(): Promise<void>;

    /**
     * ʹ��/��ֹ��ק���ڣ�����ϵͳ���ڡ�Ӧ���Ӵ��ڡ�ȫ����������ģ̬������Ч��ʹ��Promise�첽�ص���
     * 
     * ʹ�ܺ󣬽�����ͨ�������������Դ��ڽ������������
     *
     * @param { boolean } enable - �Ƿ�������ק��<br>true��ʾ������false��ʾ��������</br>
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 14 - 19]
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use. [since 14 - 19]
     * @publicapi [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    enableDrag(enable: boolean): Promise<void>;

    /**
     * Ӧ�ò��ֽ���֧�ֺ��򲼾�ʱ�����˳��ý���ʱȥʹ�ܣ�ȥʹ�ܺ�֧�ֽ������ര��
     * 
     * �˽ӿ�ֻ��Ӧ����������Ч������Ҫ��module.json5�����ļ���[abilities](docroot://quick-start/module-configuration-file.md#abilities��ǩ)��ǩ����
     * ��preferMultiWindowOrientation����Ϊ"landscape_auto"��
     *
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws {BusinessError} 1300002 - This window state is abnormal.
     * @throws {BusinessError} 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    disableLandscapeMultiWindow(): Promise<void>;

    /**
     * �������ڱ������ϵ���С������󻯡��رհ�ť��������仯�ļ������Դ��ڱ��������������Ĵ�����̬��Ч�����ʹ��Stageģ�ͣ��ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     *
     * @param { 'windowTitleButtonRectChange' } type - �����¼����̶�Ϊ'windowTitleButtonRectChange'�����������ϵ���С������󻯡��رհ�ť��������仯�¼���
     * @param { Callback<TitleButtonRect> } callback - �ص����������ص�ǰ�������ϵ���С������󻯡��رհ�ť��������
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'windowTitleButtonRectChange', callback: Callback<TitleButtonRect>): void;

    /**
     * Subscribes to the change event of the rectangle that holds the minimize,
     * maximize, and close buttons on the title bar of the window.
     *
     * @param { Callback<TitleButtonRect> } callback - Callback used to return the new rectangle.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    onWindowTitleButtonRectChange(callback: Callback<TitleButtonRect>): void;

    /**
     * �رմ��ڱ������ϵ���С������󻯡��رհ�ť��������仯�ļ������Դ��ڱ��������������Ĵ�����̬��Ч�����ʹ��Stageģ�ͣ��ýӿ���Ҫ��
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}������Ч��ʹ�á�
     *
     * @param { 'windowTitleButtonRectChange' } type - �����¼����̶�Ϊ'windowTitleButtonRectChange'�����������ϵ���С������󻯡��رհ�ť��������仯�¼���
     * @param { Callback<TitleButtonRect> } callback - �ص����������ص�ǰ�������ϵ���С������󻯡��رհ�ť����������������������رոü��������δ�����������ر����б������ϵ���С
     *     ������󻯡��رհ�ť��������仯�ļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'windowTitleButtonRectChange', callback?: Callback<TitleButtonRect>): void;

    /**
     * Unsubscribes from the change event of the rectangle that holds the minimize,
     * maximize, and close buttons on the title bar of the window.
     *
     * @param { Callback<TitleButtonRect> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 static
     */
    offWindowTitleButtonRectChange(callback?: Callback<TitleButtonRect>): void;

    /**
     * �������δ��ڵ����룬ʹ��Promise�첽�ص������δ���Ϊ�ǳ�����״�Ĵ��ڣ����������������δ��ڵ���״���˽ӿڽ����Ӵ���ȫ�����������á�
     * 
     * �����δ��ڴ�С�����仯ʱ��ʵ�ʵ���ʾ����Ϊ�����С�ʹ��ڴ�С�Ľ������֡�
     * 
     * �ýӿ�ֻ�ڶ���̲߳���ͬһ������ʱ���ܷ��ش�����1300002�����ڱ����ٳ����´����뷵��401��
     *
     * @param { Array<Array<long>> } windowMask - ���δ��ڵ����룬�ò�����֧�ֿ���Ϊ���ڿ��ߡ�ȡֵΪ����0������1�Ķ�ά�������룬����0������������͸��������1�����������ز�͸�������߲�����
     *     �Ķ�ά������ά����ȡֵ��Ϊ����0������1�Ķ�ά����Ϊ�Ƿ�������
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows and float windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowMask(windowMask: Array<Array<long>>): Promise<void>;

    /**
     * �������δ��ڵ�����
     *
     * @param { Uint8Array } windowMask - windowMask������ÿ����alpha͸����ֵ��
     *     ��Ч��Χ��0����ȫ͸������255����ȫ��͸��������С�������(maskWidth*mask Heights)
     * @param { int } maskWidth - ������ȣ�������Ϊ��λ�����������Ŀ�괰�ڿ���
     *     <br>ȡֵ��ΧΪȫ��������
     * @param { int } maskHeight - ������Ϊ��λ�����ָ߶ȡ��������Ŀ�괰�ڸ߶�
     *     <br>ȡֵ��ΧΪȫ��������
     * @returns { Promise<void> } ���᷵���κ�ֵ��Promise��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows and float windows are supported.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. The maskWidth is not equal to the window width or the maskHeight is not equal to the window height.
     *     2. The length of windowMask is not equal to maskWidth multiplied by maskHeight.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setWindowMaskWithAlpha(windowMask: Uint8Array, maskWidth: int, maskHeight: int): Promise<void>;

    /**
     * ������δ��ڵ�����ʹ��ָ�Ϊ���δ��ڣ�ʹ��Promise�첽�ص������δ���Ϊ�ǳ�����״�Ĵ��ڣ����������������δ��ڵ���״���˽ӿڽ����Ӵ���ȫ�����������á�
     *
     * @returns { Promise<void> } Promise�����޷��ؽ����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     *     3. The window has not set window mask yet.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows and float windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    clearWindowMask(): Promise<void>;

    /**
     * �������ھ��Σ�����λ�ü����ڴ�С���仯�ļ�����
     *
     * @param { 'windowRectChange' } type - �����¼����̶�Ϊ'windowRectChange'�������ھ��α仯�¼���
     * @param { Callback<RectChangeOptions> } callback - �ص����������ص�ǰ���ھ��α仯ֵ���仯ԭ��
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'windowRectChange', callback: Callback<RectChangeOptions>): void;

    /**
     * �������ھ��Σ�����λ�ü����ڴ�С���仯�ļ�����
     *
     * @param { Callback<RectChangeOptions> } callback - �ص����������ص�ǰ���ھ��α仯ֵ���仯ԭ��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowRectChange(callback: Callback<RectChangeOptions>): void;

    /**
     * �رմ��ھ��Σ�����λ�ü����ڴ�С���仯�ļ�����
     *
     * @param { 'windowRectChange' } type - �����¼����̶�Ϊ'windowRectChange'�������ھ��α仯�¼���
     * @param { Callback<RectChangeOptions> } [callback] - �ص����������ص�ǰ�Ĵ��ھ��μ��仯ԭ��
     *     ��������������رոü��������δ�����������ر����д��ھ��α仯�ļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'windowRectChange', callback?: Callback<RectChangeOptions>): void;

    /**
     * �رմ��ھ��Σ�����λ�ü����ڴ�С���仯�ļ�����
     *
     * @param { Callback<RectChangeOptions> } [callback] - �ص����������ص�ǰ�Ĵ��ھ��μ��仯ԭ��
     *     ��������������رոü��������δ�����������ر����д��ھ��α仯�ļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowRectChange(callback?: Callback<RectChangeOptions>): void;

    /**
     * ����[ȫ������ϵ](docroot://windowmanager/window-terminology.md#ȫ������ϵ)�´��ھ��Σ�����λ�ü����ڴ�С���仯�ļ����¼���
     *
     * @param { 'rectChangeInGlobalDisplay' } type - �����¼����̶�Ϊ'rectChangeInGlobalDisplay'����ȫ������ϵ�´��ھ��α仯�¼���
     * @param { Callback<RectChangeOptions> } callback - �ص����������ص�ǰ���ھ��α仯ֵ���仯ԭ��
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    on(type: 'rectChangeInGlobalDisplay', callback: Callback<RectChangeOptions>): void;

    /**
     * ����[ȫ������ϵ](docroot://windowmanager/window-terminology.md#ȫ������ϵ)�´��ھ��Σ�����λ�ü����ڴ�С���仯�ļ����¼���
     *
     * @param { Callback<RectChangeOptions> } callback - �ص����������ص�ǰ���ھ��α仯ֵ���仯ԭ��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onRectChangeInGlobalDisplay(callback: Callback<RectChangeOptions>): void;

    /**
     * �ر�[ȫ������ϵ](docroot://windowmanager/window-terminology.md#ȫ������ϵ)�´��ھ��Σ�����λ�ü����ڴ�С���仯�ļ����¼���
     *
     * @param { 'rectChangeInGlobalDisplay' } type - �����¼����̶�Ϊ'rectChangeInGlobalDisplay'����ȫ������ϵ�´��ھ��α仯�¼���
     * @param { Callback<RectChangeOptions> } [callback] - �ص����������ص�ǰ�Ĵ��ھ��μ��仯ԭ��
     *     ��������������رոü��������δ�����������ر�����ȫ������ϵ�´��ھ��α仯�ļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    off(type: 'rectChangeInGlobalDisplay', callback?: Callback<RectChangeOptions>): void;

    /**
     * �ر�[ȫ������ϵ](docroot://windowmanager/window-terminology.md#ȫ������ϵ)�´��ھ��Σ�����λ�ü����ڴ�С���仯�ļ����¼���
     *
     * @param { Callback<RectChangeOptions> } [callback] - �ص����������ص�ǰ�Ĵ��ھ��μ��仯ԭ��
     *     ��������������رոü��������δ�����������ر�����ȫ������ϵ�´��ھ��α仯�ļ�����
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offRectChangeInGlobalDisplay(callback?: Callback<RectChangeOptions>): void;

    /**
     * ������ڵ�ǰ�������Ͻǵ�����ת��Ϊ���������Ļ���Ͻǵ�ȫ�����ꡣ
     * 
     * ��֧���ھ�����ʾ���ŵĴ����е��ã������ֻ���ƽ���豸�ڷ����ɶരģʽ�µ�������������
     *
     * @param { int } winX - ��ʾ�Ե�ǰ�������Ͻ�Ϊԭ���x�᷽��ƫ��������λΪpx��ֵΪ����ʾ��ԭ���Ҳ࣬
     *     ֵΪ����ʾ��ԭ����ࡣ�ò���ӦΪ���������������뽫����ȡ����
     * @param { int } winY - ��ʾ�Ե�ǰ�������Ͻ�Ϊԭ���y�᷽��ƫ��������λΪpx��ֵΪ����ʾ��ԭ���·���
     *     ֵΪ����ʾ��ԭ���Ϸ����ò���ӦΪ���������������뽫����ȡ����
     * @returns { Position } ����ת��������ꡣ
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    clientToGlobalDisplay(winX: int, winY: int): Position;

    /**
     * �����������Ļ���Ͻǵ�ȫ������ת��Ϊ����ڵ�ǰ�������Ͻǵ����ꡣ
     * 
     * ��֧���ھ�����ʾ���ŵĴ����е��ã������ֻ���ƽ���豸�ڷ����ɶരģʽ�µ�������������
     *
     * @param { int } globalDisplayX - ��ʾ�Ե�ǰ�������Ͻ�Ϊԭ���x�᷽��ƫ��������λΪpx��ֵΪ����ʾ��ԭ���Ҳ࣬
     *     ֵΪ����ʾ��ԭ����ࡣ�ò���ӦΪ���������������뽫����ȡ����
     * @param { int } globalDisplayY - ��ʾ�Ե�ǰ�������Ͻ�Ϊԭ���y�᷽��ƫ��������λΪpx��
     *     ֵΪ����ʾ��ԭ���·���ֵΪ����ʾ��ԭ���Ϸ����ò���ӦΪ���������������뽫����ȡ����
     * @returns { Position } ����ת��������ꡣ
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    globalDisplayToClient(globalDisplayX: int, globalDisplayY: int): Position;

    /**
     * ���ô��ڻҽף�ʹ��Promise�첽�ص����ýӿ���Ҫ�ڵ���
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}ʹ���ڼ���ҳ�����ݺ���á�
     *
     * @param { double } grayScale - ���ڻҽס��ò���Ϊ��������ȡֵ��ΧΪ[0.0, 1.0]��0.0��ʾ����ͼ���ޱ仯��1.0��ʾ����ͼ����ȫתΪ�Ҷ�ͼ��0.0��1.0֮��ʱЧ�������Ա仯��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowGrayScale(grayScale: double): Promise<void>;

    /**
     * ���õ�ǰ�����Ƿ�������ʽ���֣��õ��ò���ı䴰��ģʽ�ʹ��ڴ�С���������ں��Ӵ��ڿɵ��á�
     *
     * @param { boolean } enabled - �Ƿ�������ʽ���֡�<br>true��ʾ������false��ʾ�رա�</br>
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal IPC error.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setImmersiveModeEnabledState(enabled: boolean): void;

    /**
     * ��ѯ��ǰ�����Ƿ�������ʽ���֡�
     * 
     * ��֧���������Ӵ����á�
     * 
     * ����ֵ��[setImmersiveModeEnabledState()]{@link window.Window.setImmersiveModeEnabledState}�Լ�
     * [setWindowLayoutFullScreen()]{@link window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)}���ý��һ�£���
     * δ�������������ӿ���Ĭ�Ϸ���false��
     *
     * @returns { boolean } - �Ƿ����ÿ�������ʽ���֡�true��ʾ��������ʽ���֣�false��ʾ�رճ���ʽ���֡�
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getImmersiveModeEnabledState(): boolean;

    /**
     * ��ѯ��ǰ�����Ƿ��ڳ���ʽ����״̬��
     *
     * @returns { boolean } �Ƿ��ڳ���ʽ����״̬��true��ʾ���ڳ���ʽ����״̬��false��ʾ�����ڳ���ʽ����״̬��
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    isImmersiveLayout(): boolean;

    /**
     * ��ȡ��ǰӦ�ô��ڵ�ģʽ��
     * 
     * > **˵����**
     * >
     * > ��[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬�£�Ӧ�õ�
     * > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#�����ļ���ǩ)����С��14ʱ���ڴ������״̬����������������Ļ��2in1�豸����
     * > dock����״̬����Tablet�豸����״̬����ʱ����ֵ��ӦΪWindowStatusType::FULL_SCREEN��Ӧ�õ�
     * > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#�����ļ���ǩ)���ô��ڵ���14ʱ���ڴ������״̬����������������Ļ��2in1�豸����
     * > dock����״̬����Tablet�豸����״̬����ʱ����ֵ��ӦΪWindowStatusType::MAXIMIZE��
     *
     * @returns { WindowStatusType } ��ǰ����ģʽ��
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getWindowStatus(): WindowStatusType;

    /**
     * �жϵ�ǰ�����Ƿ��ѻ񽹡�Ϊ��ȡ׼ȷ�Ļ�״̬����Ҫ��[WindowEventType]{@link @ohos.window:window.WindowEventType}�������ڴ���WINDOW_ACTIVE֮����á�
     * 
     * ��ʹ��[on('windowEvent')]{@link window.Window.on(type: 'windowEvent', callback: Callback<WindowEventType>)}������Ӧ״̬�����
     * ��ִ�ж�Ӧ����ҵ��
     *
     * @returns { boolean } ��ǰ�����Ƿ��ѻ񽹡�true��ʾ��ǰ�����ѻ񽹣�false���ʾ��ǰ����δ�񽹡�
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isFocused(): boolean;

    /**
     * ���������ڡ��Ӵ��ڻ��������µ��Ӵ��ڣ�ʹ��Promise�첽�ص���
     *
     * @param { string } name - �Ӵ��ڵ����֡�
     * @param { SubWindowOptions } options - �Ӵ��ڲ�����decorEnabledΪtrueʱ���Ӵ���Ϊ��
     *     [����ʽ����](docroot://windowmanager/window-terminology.md#����ʽ����)��decorEnabledΪfalseʱ���Ӵ���Ϊ����ʽ���֡�
     * @returns { Promise<Window> } Promise���󡣷��ص�ǰWindow�´������Ӵ��ڶ���
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error;
     *     3. The subWindow has been created and can not be created again.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     1. Invalid window type. Only main windows, subwindows, and floating windows are supported.
     *     2. When SubWindowOptions.zLevelAboveParentLoosened is true, only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>;

    /**
     * �����Ӵ��ڵĸ����ڣ��ø����ڽ�֧��ͬ�����µ������ڡ��Ӵ��ڻ���������ʹ��Promise�첽�ص���
     * 
     * ������Ӵ��ڴ��ڻ�״̬�����µĸ����ڴ���ǰ̨�����̧�������ڵĲ㼶��
     * 
     * ������Ӵ��ڴ��ڻ�״̬�����µĸ����ڵ��Ӵ��ڴ��ڲ㼶���ߵ�ģ̬�Ӵ��ڣ��򽹵��ת�Ƹ���ģ̬�Ӵ��ڡ�
     *
     * @param { int } windowId - ������id���ò���ӦΪ�������Ƽ�ʹ��[getWindowProperties()]{@link window.Window.getWindowProperties}������ȡ��
     *     ����id���ԡ�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type. Only subwindow are supported.
     * @throws { BusinessError } 1300009 - The parent window is invalid. Possible cause:
     *     The parent window does not exist or has been destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    setParentWindow(windowId: int): Promise<void>;

    /**
     * ��ȡ�Ӵ��ڵĸ����ڡ�
     *
     * @returns { Window } �Ӵ��ڵĸ����ڶ���
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    getParentWindow(): Window;

    /**
     * �����Ӵ������丸���ڴ�����ק�ƶ�����ק���Ź���ʱ�����Ӵ����Ƿ�֧�ֿ�����Ļͬʱ��ʾ��ʹ��Promise�첽�ص���
     * 
     * ͨ�����������ڴ�Сλ�ñ仯�����Ӵ��ڵ���
     * [moveWindowTo()]{@link window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)}�Ƚӿ�ʵ���Ӵ��ڸ��游���ڲ���ʱ
     * ����ʱ�Ӵ���Ĭ�ϲ�֧�ֿ�����Ļͬʱ��ʾ��
     * 
     * ���Ӵ��ڵ��ô˽ӿں����ʹ���Ӵ����ڸ��游���ڲ��ֹ����п�����Ļͬʱ��ʾ��
     *
     * @param { boolean } enabled - �����Ӵ������丸���ڴ�����ק�ƶ�����ק���Ź���ʱ�����Ӵ����Ƿ�֧�ֿ�����Ļͬʱ��ʾ��
     *     true��ʾ֧�֣�false��ʾ��֧�֡�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.Function setFollowParentMultiScreenPolicy can not work
     *     correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    setFollowParentMultiScreenPolicy(enabled: boolean): Promise<void>;

    /**
     * ���������ڽ���ȫ��ģʽʱ���Hover���������Ƿ���ʾ���ڱ�������dock����ʹ��Promise�첽�ص���
     *
     * @param { boolean } isTitleHoverShown - �Ƿ���ʾ���ڱ�������<br>true��ʾ��ʾ���ڱ�������false��ʾ����ʾ���ڱ�������Ĭ��ֵ��true��</br>
     * @param { boolean } isDockHoverShown - �Ƿ���ʾdock����<br>true��ʾ��ʾdock����false��ʾ����ʾdock����Ĭ��ֵ��true��</br>
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setTitleAndDockHoverShown(isTitleHoverShown?: boolean, isDockHoverShown?: boolean): Promise<void>;

    /**
     * ���������������ڽ���̬�ͷǽ���̬ʱ�ı���ɫ����Stageģ���£��ýӿ����ڵ���
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * ��[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}��ʹ�á�
     * 
     * ������������ɫ���������������򣬰��������������������������򱳾�ɫĬ�ϸ���ϵͳ��ǳɫ����ͬʱʹ�øýӿں�
     * [setWindowBackgroundColor()]{@link window.Window.setWindowBackgroundColor}���ñ���ɫʱ������������ʾ���ڱ���ɫ����������ʾ������������ɫ��
     *
     * @permission ohos.permission.SET_WINDOW_TRANSPARENT
     * @param { string } activeColor - �����������ڽ���̬ʱ�ı���ɫ��Ϊʮ������RGB��ARGB��ɫ�������ִ�Сд������'#00FF00'��'#FF00FF00'��
     * @param { string } inactiveColor - �����������ڷǽ���̬ʱ�ı���ɫ��Ϊʮ������RGB��ɫ��ARGB��ɫ��͸���ȹ̶�Ϊ'FF'���������ִ�Сд������'#00FF00'��'#FF00FF00'��
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowContainerColor(activeColor: string, inactiveColor: string): void;

    /**
     * ���ô����Ƿ�ʹ���ӳ�̧�������������Ӵ������á�
     * 
     * �����ô˽ӿڻ���false���������Ӵ�������������ʱ��Ĭ������̧����
     * 
     * ���ô˽ӿ�ʹ���ӳ�̧�����ڿ細��ק����������ק������ڴ���������������ʱ��������̧����ֱ��������̧��
     *
     * @param { boolean } isEnabled - �Ƿ�ʹ���ӳ�̧����<br>true��ʾʹ�ܴ����ӳ�̧����false��ʾ��ʹ�ܴ����ӳ�̧����
     * @throws { BusinessError } 801 - Capability not supported.function setWindowDelayRaiseOnDrag can not work
     *     correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    setWindowDelayRaiseOnDrag(isEnabled: boolean): void;

    /**
     * ��ȡ��ǰ�Ӵ��ڲ㼶���𡣲�֧��������ϵͳ�����á�
     *
     * @returns { int } ��ǰ�Ӵ��ڲ㼶����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function setSubWindowZLevel can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    getSubWindowZLevel(): int;

    /**
     * ��֧��[ϵͳ����](docroot://windowmanager/window-terminology.md#ϵͳ����)������ת������������ϵͳ������ʾ���򲻱䣬δ����ʱϵͳ������ʾ��������������ʾ������ת������ť��
     * sensor��תӰ�졣��ϵͳ���ڵ��÷���1300029�����롣ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > - ����������ڼ�������ͨ��
     * > [setPreferredOrientation()]{@link @ohos.window:window.Window.setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>)}
     * > ������ʾ�������ԣ�������ת������ô�����ǰ̨��ԭ���һ�εķ�������
     * >
     * > - ����������ڼ�ϵͳ����ͨ��
     * > [setPreferredOrientation()]{@link @ohos.window:window.Window.setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>)}
     * > ������ʾ�������ԣ�������ת������ô�����ǰ̨�Ҳ㼶���ʱ��ԭ���һ�εķ������󡣵Ͳ㼶����ͨ��setRotationLocked������ת��������Ӱ��߲㼶ϵͳ���ڵ���
     * > [setPreferredOrientation()]{@link @ohos.window:window.Window.setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>)}
     * > ������ʾ����
     * >
     * > - ����������ڼ�sensor�������˱仯��������ת������ԭ�����һ�ε�sensor����
     * >
     * > - ����������ڼ�Ӧ�õ���
     * > [setOrientation()]{@link @ohos.screen:screen.Screen.setOrientation(orientation: Orientation, callback: AsyncCallback<void>)}
     * > ������Ļ���򣬺��Ըô���Ļ�������á�
     * >
     * > - �������ʱ�����������ڵ���ʾ��������
     * > [setPreferredOrientation()]{@link @ohos.window:window.Window.setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>)}
     * > ��sensor����Ⱦ���Ӧ����ʾ���򣬾����[������ת���](docroot://windowmanager/window-rotation.md#������ת���)��
     * >
     * > - ��Ӱ��Ӧ��[module.json5�����ļ��е�abilities��ǩ](docroot://quick-start/module-configuration-file.md#abilities��ǩ)
     * > orientation�������õ���������
     *
     * @param { boolean } locked - �����Ƿ�������ת��true��ʾ������ת��false��ʾ���������
     * @returns { Promise<void> } Promise�����޷��ؽ����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Function setRotationLocked can not work correctly due
     *     to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300029 - This window type is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    setRotationLocked(locked: boolean): Promise<void>;

    /**
     * ��֧��[ϵͳ����](docroot://windowmanager/window-terminology.md#ϵͳ����)��ȡ��ǰ��ת����״̬����ϵͳ���ڵ��÷���1300029�����롣
     *
     * @returns { boolean } ��ǰϵͳ���Ƿ�������ת������true��ʾ��ǰϵͳ����������ת��false��ʾ��ǰϵͳ��δ������ת��
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Function setRotationLocked can not work correctly due
     *     to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300029 - This window type is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    getRotationLocked(): boolean;

    /**
     * ���õ�ǰ�����Ƿ�֧���¼�����״̬��ʹ��Promise�첽�ص���Ĭ�ϳ�����Ϊtrue��֧���¼�����״̬��
     * 
     * ��enableΪtrue��֧���¼�����״̬�£�
     * 
     * - ������ָ����������¼����ᷢ�͸�����ָ���еĴ��ڡ�
     * 
     * ��enableΪfalse����֧���¼�����״̬�£�
     * 
     * - ����һ����ָ����������иô���δ̧��ʱ������������ָ�����Ƿ������иô��ڣ���������¼�����ַ����ô��ڡ�
     * - ����һ����ָ���δ���ֳ������иô���ʱ������������ָ��ʹ������иô��ڣ���������¼�Ҳ����ַ����ô��ڣ����¼��ᱻϵͳ������
     *
     * @param { boolean } enabled - �����Ƿ�֧���¼�����״̬��true��ʾ֧�֣�false��ʾ��֧�֡�
     * @returns { Promise<void> } Promise�����޷��ؽ����
     * @throws { BusinessError } 801 - Capability not supported. Function can not work because the current device does
     *     not support this ability.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal IPC error
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setSeparationTouchEnabled(enabled: boolean): Promise<void>;

    /**
     * ��ȡ��ǰ�����Ƿ�֧���¼������״̬��
     *
     * @returns { boolean } ��ǰ�����Ƿ�֧���¼����롣</br>true��ʾ֧�ִ����¼����룬false��ʾ��֧�ִ����¼����롣
     * @throws { BusinessError } 801 - Capability not supported. Function can not work because the current device does
     *     not support this ability.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSeparationTouchEnabled(): boolean;

    /**
     * ���õ�ǰ�����Ƿ��ܽ���[��ק�¼�]{@link ./@internal/component/ets/common:DragEvent}��ʹ��Promise�첽�ص���
     * 
     * Ĭ�ϳ�����Ϊtrue���ܹ�������ק�¼���
     * 
     * ��enableΪfalse����ǰ���ڲ��ܽ�����ק�¼���
     *
     * @param { boolean } enabled - �����Ƿ��ܽ�����ק�¼���true��ʾ�ܹ�������ק�¼���false��ʾ���ܽ�����ק�¼���
     * @returns { Promise<void> } Promise�����޷��ؽ����
     * @throws { BusinessError } 801 - Capability not supported. Function can not work because the current device does
     *     not support this ability.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal IPC error
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setReceiveDragEventEnabled(enabled: boolean): Promise<void>;

    /**
     * ��ȡ��ǰ�����Ƿ��ܽ���[��ק�¼�]{@link ./@internal/component/ets/common:DragEvent}��״̬��
     *
     * @returns { boolean } ��ǰ�����Ƿ��ܽ�����ק�¼���״̬��</br>true��ʾ�ܽ�����ק�¼���״̬��false��ʾ���ܽ�����ק�¼���״̬��
     * @throws { BusinessError } 801 - Capability not supported. Function can not work because the current device does
     *     not support this ability.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isReceiveDragEventEnabled(): boolean;

    /**
     * �ṩ���ڷ�����Ļ�������Ļ�ǶȻ���ת����������
     * 
     * ���ڷ���ָ����������Ļ�ķ����Դ���ģ��Ժ������Ķ��巽ʽ��ʾ�����ڵķ���ֱ���0��1��2��3��ʾ������������������������ͺ����ĸ�������Ժ������Ķ�����
     * [RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo}��ö����
     * [Orientation]{@link @ohos.window:window.Orientation}�жԺ������Ķ���һ�£���Orientation����ΪLANDSCAPEʱ�����ڷ���Ϊ������
     * 
     * > **˵����**
     * >
     * > ʾ��ͼ�ͱ���չʾ��ֱ������ڷ�����Ļ�������Ļ�ǶȵĹ�ϵ��
     * >
     * > ![orientationAndRotation](docroot://reference/apis-arkui/figures/orientationAndRotation.PNG)
     * 
     * | ��Ļ�Ƕ� | ��Ļ���� | ���ڷ��� |
     * | -------  | ------- | ------- |
     * | 0        | PORTRAIT  | PORTRAIT   |
     * | 90       | LANDSCAPE | LANDSCAPE_INVERTED |
     * | 180      | PORTRAIT_INVERTED | PORTRAIT_INVERTED |
     * | 270      | LANDSCAPE_INVERTED | LANDSCAPE |
     *
     * @param { RotationInfoType } from - ��ת����ֵ�����͡�
     * @param { RotationInfoType } to - Ŀ��ֵ�����͡�
     * @param { int } value - ��ת����ֵ���ò���Ϊ���������������뽫����ȡ����ȡֵ��ΧΪ[0, 3]����Χ��Ϊ�Ƿ��������׳�������
     *     [401](docroot://reference/errorcode-universal.md#401-�������ʧ��)����
     * @returns { int } ����Ŀ�����͵�ת��ֵ��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    convertOrientationAndRotation(from: RotationInfoType, to: RotationInfoType, value: int): int;

    /**
     * ������������ק�Ĺؼ�֡���ԣ���ʹ��Promise�����첽�ص���
     * 
     * �������ڵ���ʱ������1300004�����롣
     *
     * @param { KeyFramePolicy } keyFramePolicy - ����������ק�Ĺؼ�֡���ԡ�
     * @returns { Promise<KeyFramePolicy> } Promise���󣬷���ʵ����Ч�Ĺؼ�֡���ԡ�
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range; 2. The parameter format is incorrect.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    setDragKeyFramePolicy(keyFramePolicy: KeyFramePolicy): Promise<KeyFramePolicy>;

    /**
     * ��ѯ��ǰ�����Ƿ�Ϊ[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)ģʽ��
     *
     * @returns { boolean } ����true��ʾ�����ɴ���ģʽ��false��ʾ�����ɴ���ģʽ��
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    isInFreeWindowMode(): boolean;

    /**
     * �������ɴ���ģʽ�仯�¼��ļ�����
     *
     * @param { 'freeWindowModeChange' } type - �����¼����̶�Ϊ'freeWindowModeChange'�������ɴ���ģʽ�仯�¼���
     * @param { Callback<boolean> } callback - �ص����������ص�ǰ�����Ƿ������ɴ���ģʽ��true��ʾ�����ɴ���ģʽ��false��ʾ�����ɴ���ģʽ��
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 22 dynamic
     */
    on(type: 'freeWindowModeChange', callback: Callback<boolean>): void;

    /**
     * �ر����ɴ���ģʽ�仯�¼��ļ�����
     *
     * @param { 'freeWindowModeChange' } type - �����¼����̶�Ϊ'freeWindowModeChange'�������ɴ���ģʽ�仯�¼���
     * @param { Callback<boolean> } [callback] - �ص����������ص�ǰ�����Ƿ������ɴ���ģʽ����������������رոü��������δ�����������ر����ɴ���ģʽ�仯�¼��ļ�����
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 22 dynamic
     */
    off(type: 'freeWindowModeChange', callback?: Callback<boolean>): void;

    /**
     * free window mode change callback on.
     *
     * @param { Callback<boolean> } callback Callback used to return the result if the current device
     *     is in free window mode. true - means in free window mode; false - means not in free window mode.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 22 static
     */
    onFreeWindowModeChange(callback: Callback<boolean>): void;

    /**
     * free window mode change callback off.
     *
     * @param { Callback<boolean> } [callback] Callback used to return the result if the current device
     *     is in free window mode. true - means in free window mode; false - means not in free window mode.
     *     Unregister the callback function. If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 22 static
     */
    offFreeWindowModeChange(callback?: Callback<boolean>): void;

    /**
     * ���ض������µĴ�������ת��������
     * 
     * ��ǰֻ֧����Ӧ��������ʹ�á�
     *
     * @param { WindowTransitionType } transitionType - ����ת��������������ǰֻ֧�����ٳ�����
     * @param { TransitionAnimation } animation - ����ת���������á�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range;
     *     2. Invalid parameter length.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowTransitionAnimation(transitionType: WindowTransitionType, animation: TransitionAnimation): Promise<void>;

    /**
     * ��ȡ�ض������µĴ���ת���������á�
     * 
     * ��ǰֻ֧����Ӧ��������ʹ�á�
     *
     * @param { WindowTransitionType } transitionType - ����ת��������������ǰֻ֧�����ٳ�����
     * @returns { TransitionAnimation | undefined } Transition animation configuration in the corresponding scene. If
     *     the [setWindowTransitionAnimation]{@link window.Window.setWindowTransitionAnimation} API is not used,
     *     undefined is returned.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getWindowTransitionAnimation(transitionType: WindowTransitionType): TransitionAnimation | undefined;

    /**
     * ���õ�ǰ�Ӵ��ڲ㼶����������ģ̬���Ե��Ӵ���֧�֡�ʹ��Promise�첽�ص���
     * 
     * ͨ���ýӿڸı��Ӵ��ڵ���ʾ�㼶ʱ�����ᷢ�������л����Ƽ�ʹ��[shiftAppWindowFocus()]{@link @ohos.window:window.shiftAppWindowFocus}���н����л���
     *
     * @param { int } zLevel - �Ӵ��ڲ㼶����Ĭ��ֵΪ0��ȡֵ��ΧΪ[-10000, 10000]���ò�����֧���������룬���������뽫����ȡ����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function setSubWindowZLevel can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type. Only non-modal subwindows are supported.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setSubWindowZLevel(zLevel: int): Promise<void>;
  }

  /**
   * WindowStage��������״̬ö�١�
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @StageModelOnly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum WindowStageEventType {
    /**
     * ǰ̨״̬��������Ӧ��ͼ���������������״��������ǴӺ�̨�������ᴥ����
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SHOWN = 1,
    /**
     * ��״̬������Ӧ�ô��ڴ�������¼����״̬��Ӧ���������״̬��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ACTIVE = 2,
    /**
     * ʧ��״̬���������Ӧ�û����������ں�ԭ�񽹴��ڵ�״̬��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    INACTIVE = 3,
    /**
     * ��̨״̬������Ӧ���ϻ��˳���Ӧ�ô��ڹرա�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    HIDDEN = 4,
    /**
     * ǰ̨�ɽ���״̬�������Ӧ�ú�Ӧ�ô���ǰ̨���ҿ������û�������״̬��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    RESUMED = 5,
    /**
     * ǰ̨���ɽ���״̬������Ӧ����ǰ̨ʱ�������������棬Ӧ����Ȼ����ǰ̨�����������û�������״̬��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    PAUSED = 6
  }

  /**
   * WindowStage�������ڵ�״̬����ö�١�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowStageLifecycleEventType {
    /**
     * �е�ǰ̨��������Ӧ��ͼ���������������״��������ǴӺ�̨�������ᴥ����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    SHOWN = 1,
    /**
     * ǰ̨�ɽ���״̬�������Ӧ�ú�Ӧ�ô���ǰ̨���ҿ������û�������״̬��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    RESUMED = 2,
    /**
     * ǰ̨���ɽ���״̬������Ӧ����ǰ̨ʱ�������������棬Ӧ����Ȼ����ǰ̨�����������û�������״̬��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    PAUSED = 3,
    /**
     * �е���̨������Ӧ���ϻ��˳���Ӧ�ô��ڹرա�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    HIDDEN = 4
  }

  /**
   * �Ӵ���ģ̬����ö�١�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  enum ModalityType {
    /**
     * ������Ҫ�丸�����ڲ���Ӧ�û�����ʱ����ѡ�˲�����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    WINDOW_MODALITY = 0,
    /**
     * ���丸�������⻹��Ҫ��Ӧ������ʵ���Ĵ��ڲ���Ӧ�û�����ʱ����ѡ�˲�����
     * 
     * ��ö����֧�ֲ�����[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬���豸�Ͽ��������ã���֧�ֵ�������
     * [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬���豸����֧��
     * [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬���豸�ϵ��÷���801�����롣
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    APPLICATION_MODALITY = 1
  }

  /**
   * ��ʾ�Ӵ��ڻ�ϵͳ����ʱ�Ĳ�����
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface ShowWindowOptions {
    /**
     * ���ڵ���[showWindow()]{@link @ohos.window:window.Window.showWindow(options: ShowWindowOptions)}��ʾʱ�Ƿ��Զ��񽹣�Ĭ��Ϊtrue���ò�����
     * ������ģ̬����dialog���ڲ���Ч��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    focusOnShow?: boolean;
  }

  /**
   * �Ӵ��ڴ���������
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface SubWindowOptions {
    /**
     * �Ӵ��ڱ��⡣������ʾ�������Ҷ˲�����ϵͳ������������ˣ�����������ʡ�Ժű�ʾ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    title: string;
    /**
     * �Ӵ����Ƿ���ʾװ�Ρ�true��ʾ�Ӵ�����ʾװ�Σ�false��ʾ�Ӵ��ڲ���ʾװ�Ρ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    decorEnabled: boolean;
    /**
     * �Ӵ����Ƿ�����ģ̬���ԡ�true��ʾ�Ӵ�������ģ̬���ԣ�false��ʾ�Ӵ��ڽ���ģ̬���ԡ������ã���Ĭ��Ϊfalse��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isModal?: boolean;
    /**
     * �Ӵ����Ƿ������ö����ԡ�true��ʾ�Ӵ����ö���false��ʾ�Ӵ��ڲ��ö��������ã���Ĭ��Ϊfalse�� 
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    isTopmost?: boolean;
    /**
     * �Ӵ���ģ̬���ͣ������Ӵ�������ģ̬����ʱ��Ч�������ã���Ĭ��ΪWINDOW_MODALITY��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    modalityType?: ModalityType;
    /**
     * �Ӵ��ھ������������Ӵ��ڴ��ڴ�С���ƣ�����ο�
     * [resize()]{@link @ohos.window:window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}������������
     * ��δ����[showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}��ʾǰ����Ĭ��Ϊ{left: 0, 
     * top: 0, width: 0, height: 0}������ο�[����Ӧ���Ӵ���](docroot://windowmanager/application-window-stage.md#����Ӧ���Ӵ���)����ָ�ϡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    windowRect?: Rect;
    /**
     * �Ӵ����Ƿ�֧��������ԡ�true��ʾ�Ӵ���֧����󻯣�false��ʾ�Ӵ��ڲ�֧����󻯡������ã���Ĭ��Ϊfalse��
     * 
     * �ò�����֧�ֲ�����[���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬���豸�Ͽ��������ã��ڲ�֧��
     * [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬���豸�ϣ���Ϊ���ʹ��ʱ����Ӧ�ӿڲ���Ч����������֧�ֵ�������
     * [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬���豸�ϣ���Ϊ���ʹ��ʱ����Ӧ�ӿڲ���Ч���������л���
     * [���ɴ���](docroot://windowmanager/window-terminology.md#���ɴ���)״̬����Ч��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    maximizeSupported?: boolean;

    /**
     * �Ӵ��ڲ㼶���𣬽����Ӵ���δ����ģ̬���ԣ���δ����isModalʱ��Ч���ò�����������ȡֵ��ΧΪ[-10000, 10000]�����������뽫����ȡ���������ã���Ĭ��Ϊ0��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    zLevel?: int;

    /**
     * �Ӵ����Ƿ���ʾ��ߡ�true��ʾ�Ӵ�����ʾ��ߣ�false��ʾ�Ӵ��ڲ���ʾ��ߡ������ã���Ĭ��Ϊfalse��
     * 
     * �ò�����2in1�豸�������豸�ĵ���ģʽ�п��������ã��������豸������ģʽ����Ϊ���ʹ��ʱ����Ӧ�ӿڲ���Ч��������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    outlineEnabled?: boolean;

    /**
     * ��ʶ����Ӵ��ڸ����ڵĲ㼶����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    zLevelAboveParentLoosened?: boolean;
  }
  /**
   * ���ڹ����������������������ڵ�Ԫ����[Window]{@link @ohos.window}ʵ����
   * 
   * ����APIʾ���ж�����[onWindowStageCreate()]{@link @ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate}������ʹ��WindowStage
   * ��ʵ�����ö�Ӧ������
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface WindowStage {
    /**
     * ��ȡ��WindowStageʵ���µ������ڣ�ʹ��Promise�첽�ص���
     * 
     * ���øýӿ�ǰ��������ͨ��[loadContent](../apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)��������[setUIContent](arkts-apis-window-Window.md#setuicontent9-1)�������ҳ����ء�
     *
     * @returns { Promise<Window> } Promise���󡣷��ص�ǰWindowStage�µ������ڶ���
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getMainWindow(): Promise<Window>;
    /**
     * ��ȡ��WindowStageʵ���µ������ڣ�ʹ��callback�첽�ص���
     *
     * ���øýӿ�ǰ��������ͨ��[loadContent](../apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)��������[setUIContent](arkts-apis-window-Window.md#setuicontent9-1)�������ҳ����ء�
     *
     * @param { AsyncCallback<Window> } callback �ص����������ص�ǰWindowStage�µ������ڶ���
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getMainWindow(callback: AsyncCallback<Window>): void;
    /**
     * ��ȡ��WindowStageʵ���µ������ڣ��ýӿ�Ϊͬ�����á�
     *
     * @returns { Window }
     ���ص�ǰWindowStage�µ������ڶ���
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getMainWindowSync(): Window;
    /**
     * ������WindowStageʵ���µ��Ӵ��ڣ�ʹ��Promise�첽�ص���
     * 
     * �Ӵ��ڴ�����Ĭ����[����ʽ����](../../windowmanager/window-terminology.md#����ʽ����)��
     *
     * @param { string } name �Ӵ��ڵ����֡�
     * @returns { Promise<Window> } Promise���󡣷��ص�ǰWindowStage�µ��Ӵ��ڶ���
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The subWindow has been created and can not be created again.
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    createSubWindow(name: string): Promise<Window>;
    /**
     * ������WindowStageʵ���µ��Ӵ��ڣ�ʹ��callback�첽�ص���
     * 
     * �Ӵ��ڴ�����Ĭ����[����ʽ����](../../windowmanager/window-terminology.md#����ʽ����)��
     *
     * @param { string } name �Ӵ��ڵ����֡�
     * @param { AsyncCallback<Window> } callback �ص����������ص�ǰWindowStage�µ��Ӵ��ڶ���
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The subWindow has been created and can not be created again.
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    createSubWindow(name: string, callback: AsyncCallback<Window>): void;
    /**
     * ������WindowStageʵ���µ��Ӵ��ڣ�ʹ��Promise�첽�ص���
     * 
     * ��[���ɴ���](../../windowmanager/window-terminology.md#���ɴ���)״̬�£��Ӵ��ڴ�����Ĭ����[����ʽ����](../../windowmanager/window-terminology.md#����ʽ����)��
     *
     * ���ɴ���״̬�£��Ӵ��ڲ���[decorEnabled](arkts-apis-window-i.md#subwindowoptions11)Ϊfalseʱ���Ӵ��ڴ�����Ϊ����ʽ���֣��Ӵ��ڲ���decorEnabledΪtrue���Ӵ��ڴ�����Ϊ�ǳ���ʽ���֡�
     * @param { string } name - �Ӵ��ڵ����֡�
     * @param { SubWindowOptions } options - �Ӵ��ڲ�����
     * @returns { Promise<Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. The subWindow has been created and can not be created again.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>;
    /**
     * ��ȡ��WindowStageʵ���µ������Ӵ��ڣ�ʹ��Promise�첽�ص���
     *
     * @returns { Promise<Array<Window>> }
     Promise���󡣷��ص�ǰWindowStage�µ������Ӵ��ڶ���
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getSubWindow(): Promise<Array<Window>>;
    /**
     * ��ȡ��WindowStageʵ���µ������Ӵ��ڣ�ʹ��callback�첽�ص���
     *
     * @param { AsyncCallback<Array<Window>> } callback �ص����������ص�ǰWindowStage�µ������Ӵ��ڶ���
     * @throws { BusinessError } 1300002 - This window state is abnormal. [since 10]
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getSubWindow(callback: AsyncCallback<Array<Window>>): void;

    /**
     * ���ݵ�ǰ������ָ����ҳ��·��Ϊ���ڼ��ؾ���ҳ�����ݣ�ͨ��LocalStorage����״̬���Ը����ص�ҳ�棬ʹ��callback�첽�ص���
     * 
     * ������UIAbility����������ʹ�øýӿڣ��ظ����ý������پɵ�ҳ�����ݣ���UIContent���ټ����µ�ҳ�����ݣ������ʹ�á�
     * 
     * ��ǰUI��ִ�������Ŀ��ܲ���ȷ�����Բ������ڱ��ӿڵĻص���������UI��صĲ�����
     *
     * @param { string } path Ҫ���ص������е�ҳ�����ݵ�·������·�������ӵ����̵�main_pages.json�ļ��С���֧�����·��д��������main_pages.json�е�srcȡֵ����һ�¡�
     * @param { LocalStorage } storage ҳ�漶UI״̬�洢��Ԫ����������Ϊ���ص����ڵ�ҳ�����ݴ���״̬���ԡ�
     * @param { AsyncCallback<void> } callback �ص�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * ���ݵ�ǰ������ָ����ҳ��·��ΪWindowStage�������ڼ��ؾ���ҳ�����ݣ�ͨ��LocalStorage����״̬���Ը����ص�ҳ�棬ʹ��Promise�첽�ص���
     *
     * ������UIAbility���������е��øýӿڣ��ظ����ý��������پɵ�ҳ�����ݣ���UIContent���ټ�����ҳ�����ݣ������ʹ�á���ǰUI��ִ�������Ŀ��ܲ���ȷ�����Բ������ڻص���������UI��صĲ�����
     *
     * @param { string } path Ҫ���ص������е�ҳ�����ݵ�·������·�������ӵ����̵�main_pages.json�ļ��С���֧�����·��д��������main_pages.json�е�srcȡֵ����һ�¡�
     * @param { LocalStorage } storage ҳ�漶UI״̬�洢��Ԫ��Ϊ���ص����ڵ�ҳ�����ݴ���״̬���ԣ�Ĭ��ֵΪ�ա�
     * @returns { Promise<void> }
     �޷��ؽ����Promise����
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    loadContent(path: string, storage?: LocalStorage): Promise<void>;

    /**
     *Ϊ��ǰ���ڼ��ؾ���ҳ�����ݣ�ʹ��callback�첽�ص���
     *
     *������UIAbility����������ʹ�øýӿڣ���ε��øýӿڻ������پɵ�ҳ�����ݣ���UIContent���ټ����µ�ҳ�����ݣ������ʹ�á�
     *
     *��ǰUI��ִ�������Ŀ��ܲ���ȷ�����Բ������ڱ��ӿڵĻص���������UI��صĲ�����
     *
     * @param { string } path Ҫ���ص������е�ҳ�����ݵ�·����Stageģ���¸�·�������ӵ����̵�main_pages.json�ļ��У�FAģ���¸�·�������ӵ����̵�config.json�ļ��С���֧�����·��д��������main_pages.json��config.json�е�srcȡֵ����һ�¡�
     * @param { AsyncCallback<void> } callback �ص�������
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    loadContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * Loads content by named router
     *
     * @param { string } name - name of the page to which the content will be loaded.
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * ����ָ��·��ҳ������Ϊ��ǰ���ڼ���[����·��](../../ui/arkts-routing.md#����·��)ҳ�棬ʹ��callback�첽�ص���
     * 
     * ������UIAbility����������ʹ�øýӿڣ��ظ����øýӿڽ������پɵ�ҳ�����ݣ���UIContent���ټ����µ�ҳ�����ݣ������ʹ�á�
     * 
     * ��ǰUI��ִ�������Ŀ��ܲ���ȷ�����Բ������ڱ��ӿڵĻص���������UI��صĲ�����
     *
     * @param { string } name - name of the page to which the content will be loaded.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, callback: AsyncCallback<void>): void;

    /**
     * Loads content by named router
     *
     * @param { string } name - name of the page to which the content will be loaded.
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 22 static
     */
    loadContentByName(name: string, storage?: LocalStorage): Promise<void>;

    /**
     * �ͷ�
     *
     * @returns { Promise<void> } Promise that returns no value, indicating successful completion.
     *     Throws exception if window state is abnormal.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    releaseUIContent(): Promise<void>;

    /**
     * ����WindowStage�������ڱ仯�ļ�����
     *
     * @param { 'windowStageEvent' } eventType �����¼����̶�Ϊ'windowStageEvent'����WindowStage�������ڱ仯�¼���
     * @param { Callback<WindowStageEventType> } callback �ص����������ص�ǰ��WindowStage��������״̬��
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    on(eventType: 'windowStageEvent', callback: Callback<WindowStageEventType>): void;

    /**
     * ����WindowStage�������ڱ仯�ļ�����
     *
     * @param { Callback<WindowStageEventType> } callback �����¼����̶�Ϊ'windowStageEvent'����WindowStage�������ڱ仯�¼���
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 static
     */
    onWindowStageEvent(callback: Callback<WindowStageEventType>): void;

    /**
     * �ر�WindowStage�������ڱ仯�ļ�����
     *
     * ���ڹر�[on('windowStageEvent')](#onwindowstageevent9)�ӿڶ�WindowStage�������ڱ仯�ļ�����
     *
     * ���û�е���[on('windowStageEvent')](#onwindowstageevent9)�ӿڿ��������͹رգ���������ִ�в����׳��쳣��
     *
     * @param { 'windowStageEvent' } eventType �����¼����̶�Ϊ'windowStageEvent'����WindowStage�������ڱ仯�¼���
     * @param { Callback<WindowStageEventType> } callback �ص����������ص�ǰ��WindowStage��������״̬���������������رոü�������δ�����������ر�����WindowStage�������ڱ仯�ļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    off(eventType: 'windowStageEvent', callback?: Callback<WindowStageEventType>): void;

    /**
     * �ر������ڹر��¼��ļ�����
     *
     * @param { Callback<WindowStageEventType> } [callback] - �ص���������������������Ͻǹرհ�ť�¼�����ʱ�Ļص����ûص������������κβ������ص������ڲ��߼���Ҫ��boolean���͵ķ���ֵ���÷���ֵ������ǰ�����Ƿ�����رգ�true��ʾ���رգ�false��ʾ�رա���������������رոü��������δ�����������ر����������ڹرյļ�����
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 static
     */
    offWindowStageEvent(callback?: Callback<WindowStageEventType>): void;

    /**
     * ����WindowStage�������ڱ仯�ļ�����
     *
     * @param { 'windowStageLifecycleEvent' } eventType �����¼����̶�Ϊ'windowStageLifecycleEvent'����WindowStage�������ڱ仯�¼���
     * @param { Callback<WindowStageLifecycleEventType> } callback �ص����������ص�ǰ��WindowStage��������״̬��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(eventType: 'windowStageLifecycleEvent', callback: Callback<WindowStageLifecycleEventType>): void;

    /**
     * �ر�WindowStage�������ڱ仯�ļ�����
     *
     * @param { Callback<WindowStageLifecycleEventType> } callback �ص����������ص�ǰ��WindowStage��������״̬��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 static
     */
    onWindowStageLifecycleEvent(callback: Callback<WindowStageLifecycleEventType>): void;

    /**
     * �ر�WindowStage�������ڱ仯�ļ�����
     *
     * @param { 'windowStageLifecycleEvent' } eventType �����¼����̶�Ϊ'windowStageLifecycleEvent'����WindowStage�������ڱ仯�¼���
     * @param { Callback<WindowStageLifecycleEventType> } [callback] �ص����������ص�ǰ��WindowStage��������״̬���������������رոü�������δ�����������ر�����WindowStage�������ڱ仯�ļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(eventType: 'windowStageLifecycleEvent', callback?: Callback<WindowStageLifecycleEventType>): void;

    /**
     * �ر�WindowStage�������ڱ仯�ļ�����
     *
     * @param { Callback<WindowStageLifecycleEventType> } [callback] - �ص����������ص�ǰ��WindowStage��������״̬���������������رոü�������δ�����������ر�����WindowStage�������ڱ仯�ļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 static
     */
    offWindowStageLifecycleEvent(callback?: Callback<WindowStageLifecycleEventType>): void;

    /**
     * ������������������Ĺرհ�ť�����¼���
     *
     * @param { 'windowStageClose' } eventType The value is fixed at 'windowStageClose', indicating the window stage
     *     close event.
     * @param { Callback<void> } callback Callback function requires a boolean return value to determine whether to
     *     close the current main window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 14 dynamic
     */
    on(eventType: 'windowStageClose', callback: Callback<void>): void;

    /**
     * ������������������Ĺرհ�ť�����¼�����������ڵ���������Ĺرռ�ʱ�����ûص�����������ִ��ע���[UIAbility.onPrepareToTerminate](../apis-ability-kit/js-apis-app-ability-uiAbility.md#onpreparetoterminate10)�������ڻص�������
     *
     * ���ظ�ע�ᴰ�ڹر��¼��ļ���ʱ�����һ��ע��ɹ��ļ����¼���Ч��

     * �����Ļص�������ͬ��ִ�У������ڵ��첽�ر��¼������ο�[on('windowWillClose')](arkts-apis-window-Window.md#onwindowwillclose15)������

     * �������[on('windowWillClose')](arkts-apis-window-Window.md#onwindowwillclose15)�����¼���ֻ��Ӧ[on('windowWillClose')](arkts-apis-window-Window.md#onwindowwillclose15)�ӿڡ�
     *
     * @param { Callback<void, boolean> } callback - �����¼����̶�Ϊ'windowStageClose'�������������������Ĺرհ�ť������
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 static
     */
    onWindowStageClose(callback: Callback<void, boolean>): void;

    /**
     * �ر������ڹر��¼��ļ�����
     *
     * @param { 'windowStageClose' } eventType �����¼����̶�Ϊ'windowStageClose'�����ر������ڹر��¼��ļ�����
     * @param { Callback<void> } callback �ص���������������������Ͻǹرհ�ť�¼�����ʱ�Ļص����ûص������������κβ�����
     *     �ص������ڲ��߼���Ҫ��boolean���͵ķ���ֵ���÷���ֵ������ǰ�����Ƿ�����رգ�true��ʾ���رգ�false��ʾ�رա��������
     *     ��������رոü��������δ�����������ر����������ڹرյļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 14 dynamic
     */
    off(eventType: 'windowStageClose', callback?: Callback<void>): void;

    /**
     * �ر������ڹر��¼��ļ�����
     *
     * @param { Callback<void, boolean> } [callback] - �ص���������������������Ͻǹرհ�ť�¼�����ʱ�Ļص����ûص�����
     *     �������κβ������ص������ڲ��߼���Ҫ��boolean���͵ķ���ֵ���÷���ֵ������ǰ�����Ƿ�����رգ�true��ʾ���رգ�false
     *     ��ʾ�رա���������������رոü��������δ�����������ر����������ڹرյļ�����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 static
     */
    offWindowStageClose(callback?: Callback<void, boolean>): void;

    /**
     * ��ֹ����װ�Ρ�
     * 
     * ��ֹ����װ�κ󣬵������ڽ���ȫ������״̬ʱ����ʱ���Hover���Ϸ����ڱ����������ϻ���ʾ�������������������������������ʾ����ʹ��
     * [setTitleAndDockHoverShown()]{@link @ohos.window:window.Window.setTitleAndDockHoverShown}�ӿڡ�
     *
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    disableWindowDecor(): void;

    /**
     * ����Ӧ����ʾ������֮�ϡ�
     *
     * @param { boolean } showOnLockScreen - �Ƿ�����Ӧ����ʾ������֮�ϡ�true��ʾ��ʾ������֮�ϣ�false��ʾ����ʾ������֮�ϡ�
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    setShowOnLockScreen(showOnLockScreen: boolean): void;

    /**
     * ����Ӧ���������Ƿ�ʹ��ϵͳĬ��Density���Ӵ���ϵͳ���ڻ����������Ч�����ô˽ӿ�ǰ�����ȵ���WindowStage.loadContent()��ʼ�����֣�ȷ���ӿڵ���ʱ����ȷ��
     *
     * �����ô˽ӿڽ������ã����ʾ��ʹ��ϵͳĬ��Density��
     *
     * ��ʹ��ϵͳĬ��Densityʱ�������ù�setCustomDensity()���򴰿ڻ�����û��Զ������ʾ��С�仯���²��֣��������ϵͳ��ʾ��С�仯���²��֡�
     *
     * @param { boolean } enabled - �Ƿ�����Ӧ��ʹ��ϵͳĬ��Density��true��ʾʹ��ϵͳĬ��Density�����ڲ�����ϵͳ��ʾ��С�仯���²��֣�false��ʾ��ʹ��ϵͳĬ��Density�����ڸ���ϵͳ��ʾ��С�仯���²��֡�
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The main window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     *     Possible cause: The window stage is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setDefaultDensityEnabled(enabled: boolean): void;

    /**
     * ֧��Ӧ���������Զ�������ʾ��С����ϵ����
     *
     * �Ѵ������Ӵ���ϵͳ���ڲ�����������������customDensity�仯���²��֣��������Ӵ���ϵͳ������һ��λ�á���С��ϵͳ���Ŵ�С��
     * ���ڲ�����Ϣ�仯ʱ����������customDensity�仯���²��֡�
     *
     * ������ͬʱʹ�øýӿں�setDefaultDensityEnabled(true)�����ʱ���������õ�����Ч��Ϊ׼��
     *
     * @param { number } density - �Զ�����ʾ��С����ϵ�����ò���Ϊ��������ȡֵ��ΧΪ[0.5, 4.0]��-1.0��4.0��ʾ���ڿ���ʾ��
     *     �����ʾ��С����ϵ����-1.0��ʾ����ʹ��ϵͳ��ʾ��С����ϵ����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     */
    setCustomDensity(density: number): void;

    /**
     * ֧��Ӧ���������Զ�������ʾ��С����ϵ����
     *
     * �Ѵ������Ӵ���ϵͳ���ڲ�����������������customDensity�仯���²��֣��������Ӵ���ϵͳ������һ��λ�á���С��ϵͳ���Ŵ�С��
     * ���ڲ�����Ϣ�仯ʱ����������customDensity�仯���²��֡�
     *
     * ������ͬʱʹ�øýӿں�setDefaultDensityEnabled(true)�����ʱ���������õ�����Ч��Ϊ׼��
     *
     * @param { double } density - �Զ�����ʾ��С����ϵ�����ò���Ϊ��������ȡֵ��ΧΪ[0.5, 4.0]��-1.0��4.0��ʾ���ڿ���ʾ��
     *     �����ʾ��С����ϵ����-1.0��ʾ����ʹ��ϵͳ��ʾ��С����ϵ����
     * @param { boolean } [applyToSubWindow] - ���õ�ǰ�Ѵ������Ӵ���ϵͳ�����Ƿ��������������ڸ���customDensity�����²��֡�
     *     ����Ϊtrueʱ����ʾ��������������Ч������Ϊfalseʱ����ʾ������������������Ч���������Ӵ���ϵͳ������һ��λ�á���С��
     *     ϵͳ���Ŵ�С�ȴ��ڲ�����Ϣ�仯ʱ����������customDensity�仯���²��֡�Ĭ��ֵΪfalse��
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The main window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     *     Possible cause: The window stage is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    setCustomDensity(density: double, applyToSubWindow?: boolean): void;

    /**
     * ֧��Ӧ�ÿ�������ҳ��ʧʱ����
     *
     * �˽ӿ�ֻ��Ӧ����������Ч������Ҫ��module.json5�����ļ�abilities��ǩ�е�metadata��ǩ������"enable.remove.starting.window"Ϊ"true"�Ż���Ч��
     *
     * �ڱ�ǩ����Ϊ"true"������£�ϵͳ�ṩ������ҳ��ʱ�������ƣ���5s��δ���ô˽ӿڣ�ϵͳ���Զ��Ƴ�����ҳ��
     *
     * ����ǩ����Ϊ"false"��δ���ñ�ǩ����˽ӿڲ���Ч������ҳ������Ӧ����֡��Ⱦ��ɺ��Զ��Ƴ���
     *
     * @returns { Promise<void> } - �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window stage is not created or destroyed;
     *     2. The main window is not created or destroyed;
     *     3. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    removeStartingWindow(): Promise<void>;

    /**
     * Set the application modality of the windowStage.
     *
     * @param { boolean } isModal - Enable the window modal if true, otherwise means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300005 - This window stage is abnormal. Possible cause:
     *     The window is not created or destroyed. [since 20]
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowModal(isModal: boolean): Promise<void>;

    /**
     * �����Ƿ��������رյ������ߴ�ļ��书�ܣ�ʹ��Promise�첽�ص���
     *
     * ���ü��书�ܺ���ͬһ��UIAbility�£��������رյ������ڵĳߴ磻���������ٴ�����ʱ���Լ���ĳߴ簴�չ�����д򿪡�
     * �������1����ǰʵ�������ɴ���ʱ������һʵ�����ڲ��ʱ����СҪ���档2����ǰʵ������󻯻�ȫ������ʱ������һ��ʵ����
     * �ڲ��ʱ��������󻯡�
     * 
     * �������
     * |��һ�δ���״̬|�������|
     * |-------------|-------|
     * |���ɴ���|�������ɴ��ڵĴ�С/λ�ã������������ص�|
     * |����������|����������֮ǰ���ɴ��ڵĴ�С/λ��|
     * |��󻯴���|�������|
     * |����ʽ����|��������ʽ֮ǰ���ɴ��ڵĴ�С/λ��|
     * |��С������|������С��֮ǰ���ɴ��ڵĴ�С/λ��|
     *
     * @param { boolean } enabled - �����Ƿ����������ߴ�ļ��书�ܣ�trueΪ���ã�falseΪ�����á�
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowRectAutoSave(enabled: boolean): Promise<void>;

    /**
     * �����Ƿ����������ĳߴ���书�ܣ�ʹ��Promise�첽�ص���
     *
     * ��ͬһ��UIAbility�£��ɼ������رյ������ڳߴ磬Ҳ�����ÿ�������ڳߴ絥�����м��䡣ֻ����UIAbility����ģʽΪ
     * specified����isSaveBySpecifiedFlag����Ϊtrueʱ���������ÿ�������ڳߴ���е������䡣
     * 
     * ���ü��书�ܺ󣬼��������ڹر�ʱ�ĳߴ磻��Ӧ�������ٴ�����ʱ���Լ���ĳߴ簴�չ�����д򿪡�
     * 
     * �������
     * |��һ�δ���״̬|�������|
     * |-------------|-------|
     * |���ɴ���|�������ɴ��ڵĴ�С/λ�ã������������ص���|
     * |����������|����������֮ǰ���ɴ��ڵĴ�С/λ�á�|
     * |��󻯴���|������󻯡�|
     * |����ʽ����|��������ʽ֮ǰ���ɴ��ڵĴ�С/λ�á�|
     * |��С������|������С��֮ǰ���ɴ��ڵĴ�С/λ�á�|
     *
     * @param { boolean } enabled - Enable the window rect auto-save if true, otherwise means the opposite.
     * @param { boolean } isSaveBySpecifiedFlag - Enable the specifiedFlag if true, otherwise means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function setWindowRectAutoSave can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    setWindowRectAutoSave(enabled: boolean, isSaveBySpecifiedFlag: boolean): Promise<void>;

    /**
     * �жϵ�ǰ�������Ƿ��Ѿ����óߴ���䣬ʹ��Promise�첽�ص���
     *
     * @returns { Promise<boolean> } Promise���󡣷���true��ʾ��ǰ�������óߴ���䣬����false��ʾ��ǰ���ڽ��óߴ���䡣
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 20]
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    isWindowRectAutoSave(): Promise<boolean>;

    /**
     * ���������Ĵ���֧��ģʽ��ʹ��Promise�첽�ص���
     *
     * @param { Array<bundleManager.SupportWindowMode> } supportedWindowModes - ���������Ĵ���֧��ģʽ��
     * <br>- FULL_SCREEN��֧��ȫ��ģʽ��<br>- FLOATING��֧��������������ģʽ��
     * <br>- SPLIT��֧�ַ���ģʽ����Ҫ���FULL_SCREEN��FLOATINGһ��ʹ�ã���֧�ֽ�����SPLIT��
     * <br> ע��������SupportWindowMode�ֶ�ȡֵ��Ӧ�����UIAbility��Ӧ��
     * [module.json5�����ļ�][module.json5 file](docroot://quick-start/module-configuration-file.md)��
     * [abilities��ǩ](docroot://quick-start/module-configuration-file.md#abilities)��supportWindowMode�ֶ�ȡֵ����
     * [StartOptions]{@link @ohos.app.ability.StartOptions:StartOptions}��
     * supportWindowModes����ȡֵ��ͻ����ȡֵ��ͻʱ�������Ըò������õĴ���֧��ģʽΪ׼��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>): Promise<void>;

    /**
     * ���������Ĵ���֧��ģʽ�����ṩ��󻯰�ť�ûҹ��ܣ�ʹ��Promise�첽�ص���
     *
     * @param { Array<bundleManager.SupportWindowMode> } supportedWindowModes - ���������Ĵ���֧��ģʽ��
     * <br>- FULL_SCREEN��֧��ȫ��ģʽ��<br>- FLOATING��֧��������������ģʽ��
     * <br>- SPLIT��֧�ַ���ģʽ����Ҫ���FULL_SCREEN��FLOATINGһ��ʹ�ã���֧�ֽ�����SPLIT��
     * <br> ע��������SupportWindowMode�ֶ�ȡֵ��Ӧ�����UIAbility��Ӧ��
     * [module.json5�����ļ�][module.json5 file](docroot://quick-start/module-configuration-file.md)��
     * [abilities��ǩ](docroot://quick-start/module-configuration-file.md#abilities)��supportWindowMode�ֶ�ȡֵ����
     * [StartOptions]{@link @ohos.app.ability.StartOptions:StartOptions}��
     * supportWindowModes����ȡֵ��ͻ����ȡֵ��ͻʱ�������Ըò������õĴ���֧��ģʽΪ׼��
     * @param { boolean } grayOutMaximizeButton - �Ƿ���ʾ���������ڵ���󻯰�ť�û�
     *     true��ʾ��ʾ���������ڵ���󻯰�ť�ûң���ʱ��󻯰�ť�����ã�false��ʾ����ʾ�����ڵ���󻯰�ť��
     *     �˲������ý���supportedWindowModes��֧��FULL_SCREENʱ��Ч��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function setSupportedWindowModes can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range.
     *     2. Invalid parameter length.
     *     3. Incorrect parameter format.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>, grayOutMaximizeButton: boolean): Promise<void>;

    /**
     * ����Ӧ���ڶ������к�Dock����ͣʱ��ʾ��ͼƬ��ʹ��Promise�첽�ص���
     * > **˵����**
     * >
     * > ���øýӿ�ǰ��������ͨ��[loadContent](#loadcontent9)��������[setUIContent](arkts-apis-window-Window.md#setuicontent9-1)
     * > �������ҳ����ء����Ӧ�ô���δ���ҳ����ؾ�ֱ�ӵ��øýӿڣ����ܽ�������Ч����ʱ��������ֻ��ʾӦ������ҳ��
     *
     * @param { long | image.PixelMap } imageResource - Ӧ���Զ����ͼƬ��Դ���ɴ�����Դid��PixelMapλͼ��������Դidʱ��
     *     ͼƬ��Դ�����resources/base/mediaĿ¼�£�ͨ��$r��Դ���ʷ�ʽ��ȡ��ӦͼƬ����Դid�������Ի�ȡstartIconͼƬ����Դid
     *     Ϊ������ʾ�⣺$r("app.media.startIcon").id��
     * @param { ImageFit } value - Ӧ���Զ���ͼƬ����䷽ʽ��
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range. 2. Invalid parameter length.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * ����Ӧ���ڶ������к�Dock����ͣʱ��ʾ��ͼƬ��ʹ��Promise�첽�ص���
     * > **˵����**
     * >
     * > ���øýӿ�ǰ��������ͨ��[loadContent](#loadcontent9)��������[setUIContent](arkts-apis-window-Window.md#setuicontent9-1)
     * > �������ҳ����ء����Ӧ�ô���δ���ҳ����ؾ�ֱ�ӵ��øýӿڣ����ܽ�������Ч����ʱ��������ֻ��ʾӦ������ҳ��
     *
     * @permission ohos.permission.MANAGE_RECENT_SNAPSHOT
     * @param { long | image.PixelMap } imageResource - Ӧ���Զ����ͼƬ��Դ���ɴ�����Դid��PixelMapλͼ��������Դidʱ��
     *     ͼƬ��Դ�����resources/base/mediaĿ¼�£�ͨ��$r��Դ���ʷ�ʽ��ȡ��ӦͼƬ����Դid�������Ի�ȡstartIconͼƬ����Դid
     *     Ϊ������ʾ�⣺$r("app.media.startIcon").id��
     * @param { ImageFit } value - Ӧ���Զ���ͼƬ����䷽ʽ��
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have
     *     the permission required or a non-system application calls the API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range. 2. Invalid parameter length.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setImageForRecent(imageResource: long | image.PixelMap, value: ImageFit): Promise<void>;

    /**
     * �Ƴ�Ӧ�����õ��ڶ������к�Dock����ͣʱ��ʾ��ͼƬ���´ν�������鿴Ӧ�ÿ�Ƭʱ��Ч��ʹ��Promise�첽�ص���
     *
     * @returns { Promise<void> } Promise�����޷��ؽ����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * �Ƴ�Ӧ�����õ��ڶ������к�Dock����ͣʱ��ʾ��ͼƬ���´ν�������鿴Ӧ�ÿ�Ƭʱ��Ч��ʹ��Promise�첽�ص���
     *
     * @permission ohos.permission.MANAGE_RECENT_SNAPSHOT
     * @returns { Promise<void> } Promise�����޷��ؽ����
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have
     *     the permission required or a non-system application calls the API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    removeImageForRecent(): Promise<void>;

    /**
     * ����Ӧ���ڶ������к�Dock����ͣʱ��ʾ��ͼƬ��ʹ��Promise�첽�ص���
     * > **˵����**
     * >
     * > ���øýӿ�ǰ��������ͨ��[loadContent](#loadcontent9)��������[setUIContent](arkts-apis-window-Window.md#setuicontent9-1)
     * > �������ҳ����ء����Ӧ�ô���δ���ҳ����ؾ�ֱ�ӵ��øýӿڣ����ܽ�������Ч����ʱ��������ֻ��ʾӦ������ҳ��
     *
     * @param { number } imgResourceId - Ӧ���Զ���ͼƬ����Դid��ͼƬ��Դ�����resources/base/mediaĿ¼�£�ͨ��`$r`��Դ���ʷ�ʽ��ȡ��ӦͼƬ����Դid�������Ի�ȡ
     *     startIconͼƬ����ԴidΪ������ʾ�⣺`$r("app.media.startIcon").id`��
     * @param { ImageFit } value - Ӧ���Զ���ͼƬ����䷽ʽ��
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range. 2. Invalid parameter length. 3. Incorrect parameter format.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 19 dynamic
     */
    setImageForRecent(imgResourceId: number, value: ImageFit): Promise<void>;
  }

  /**
   * ��չ���ڵ�����ö�١�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  enum ExtensionWindowAttribute {
    /**
     * ϵͳ���ڡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    SYSTEM_WINDOW = 0,

    /**
     * �Ӵ��ڡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    SUB_WINDOW = 1
  }

  /**
   * ϵͳ���ڵĴ���������
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  interface SystemWindowOptions {
    /**
     * �������͡���Ĭ�����ͣ������ûᵼ�´��ڴ���ʧ�ܡ���֧��TYPE_DIALOG���͡�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    windowType: WindowType;
  }

  /**
   * ������չ����ʱ��Ҫ���õĲ�����
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  interface ExtensionWindowConfig {
    /**
     * ��������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    windowName: string;

    /**
     * ���ڵ����ԡ��������ô����Ĵ������Ӵ��ڻ���ϵͳ���ڡ���windowAttribute����ΪSUB_WINDOWʱ������subWindowOptions����windowAttribute����ΪSYSTEM_WINDOWʱ������
     * systemWindowOptions�����򴴽�����ʧ�ܡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    windowAttribute: ExtensionWindowAttribute;

    /**
     * ���ھ�������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    windowRect: Rect;

    /**
     * �����Ӵ��ڵĲ�������Ĭ�ϲ�������windowAttribute����ΪSUB_WINDOWʱ��ѡ������ᵼ�´��ڴ���ʧ�ܡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    subWindowOptions?: SubWindowOptions;

    /**
     * ����ϵͳ���ڵĲ�������Ĭ�ϲ�������windowAttribute����ΪSYSTEM_WINDOWʱ��ѡ������ᵼ�´��ڴ���ʧ�ܡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    systemWindowOptions?: SystemWindowOptions;
  }

  /**
   * ���ڲ�����Ϣ��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface WindowLayoutInfo {
    /**
     * ���ڳߴ磬��������Ļ�ϵ�ʵ��λ�úʹ�С��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    windowRect: Rect;

    /**
     * ����͸���ȡ���Чֵ��ΧΪ[0.0, 1.0]��0.0��ʾ��ȫ͸����1.0��ʾ��ȫ��͸����Ĭ��ֵ��-1.0����ʾδ��ѯ������͸���Ȼ��߲�ѯʧ�ܡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    windowAlpha?: double;
  }

  /**
   * ���ڲ�����Ϣ����ѡ�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface WindowInfoOptions {
    /**
     * �Ƿ��ų�ϵͳ���ڡ�true��ʾ��Ҫ�ų���false��ʾ���ų���Ĭ��Ϊfalse��
     *
     * @default false
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    excludeSystemWindows?: boolean;
    /**
     * ��Ҫ���˵��Ĳ����ڴ˴��ڲ㼶�Ĵ��ڵ�ID����ʾֻ���ز㼶����������ڵĴ�����Ϣ��Ĭ��ֵ��0����ʾ���Ա�ѡ����ֵС��0������1300016�����룻���ָ���Ĵ��ڲ����ڣ���������Ϊ0�ȼۡ�
     *
     * @default 0
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    foregroundAboveWindow?: int;
    /**
     * ��Ҫ���˵��Ĳ����ڴ˴��ڲ㼶�Ĵ��ڵ�ID����ʾֻ���ز㼶����������ڵĴ�����Ϣ��Ĭ��ֵ��0����ʾ���Ա�ѡ����ֵС��0������1300016�����룻���ָ���Ĵ��ڲ����ڣ���������Ϊ0�ȼۡ���ͬʱָ��
     * foregroundBelowWindow��foregroundAboveWindow�������߶�����Ч�Ĵ���ID����foregroundBelowWindowָ���Ĵ��ڵĲ㼶δ����foregroundAboveWindowָ��
     * �Ĵ��ڣ��򷵻ؿ����顣
     *
     * @default 0
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    foregroundBelowWindow?: int;
  }
}

export default window;