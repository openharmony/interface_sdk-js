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
 * @file
 * @kit ArkUI
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type colorSpaceManager from './@ohos.graphics.colorSpaceManager';
import type hdrCapability from './@ohos.graphics.hdrCapability';

/**
 * ��Ļ�����ṩ������ʾ�豸��һЩ����������������ȡĬ����ʾ�豸����Ϣ����ȡ������ʾ�豸����Ϣ�Լ�������ʾ�豸�Ĳ����Ϊ��
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace display {
  /**
   * ��ȡ��ǰĬ�ϵ�Display����ʹ��callback�첽�ص���
   *
   * @param { AsyncCallback<Display> } callback - �ص����������ص�ǰĬ�ϵ�Display����
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead display.getDefaultDisplaySync
   */
  function getDefaultDisplay(callback: AsyncCallback<Display>): void;

  /**
   * ��ȡ��ǰĬ�ϵ�Display����ʹ��Promise�첽�ص���
   *
   * @returns { Promise<Display> } Promise���󡣷��ص�ǰĬ�ϵ�Display����
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead display.getDefaultDisplaySync
   */
  function getDefaultDisplay(): Promise<Display>;

  /**
   * ����Ӧ��������Ļ��Display������Ӧ���ڶ��Ability�ڲ�ͬ��Ļ������������Display������Ӧ���ڶ��Ability��ͬһ��Ļ������������Ļ��Display����
   *
   * @returns { Display } ����Ĭ�ϵ�Display����
   * @throws { BusinessError } 1400001 - Invalid display or screen. Possible cause: Display is not created or destroyed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getDefaultDisplaySync(): Display;

  /**
   * ��ȡ������Ϣ����2in1֮����豸��ȡ�����豸�Դ���Ļ��Display����2in1�豸�����Ļʱ��ȡ���ǵ�ǰ����Ļ��Display����2in1�豸û�������Ļʱ��ȡ�����Դ���Ļ��Display����
   *
   * @returns { Display } ��ǰ�豸����Ļ��Display����
   * @throws { BusinessError } 1400001 - Invalid display or screen. Possible cause: Invalid display id.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function getPrimaryDisplaySync(): Display;

  /**
   * ����displayId��ȡ��Ӧ��Display����
   *
   * @param { long } displayId - ��ĻID���ò�����֧���������룬�ò������ڵ���0����Ҫȷ��displayId׼ȷ���ܳɹ���ȡ����Ӧ���������ͨ��
   *     [WindowProperties]{@link @ohos.window:window.WindowProperties}��displayId���Ի�ȡ��׼ȷ��displayId��Ϊ��Ρ�
   * @returns { Display } ����displayId��Ӧ��Display����
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally. Possible causes:
   *     Display is null, display id corresponding display does not exist.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getDisplayByIdSync(displayId: long): Display;

  /**
   * ��ȡ��ǰ���е�Display����ʹ��callback�첽�ص���
   *
   * @param { AsyncCallback<Array<Display>> } callback - �ص����������ص�ǰ���е�Display����
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead display.getAllDisplays(callback: AsyncCallback<Array<Display>>)
   */
  function getAllDisplay(callback: AsyncCallback<Array<Display>>): void;

  /**
   * ��ȡ��ǰ���е�Display����ʹ��Promise�첽�ص���
   *
   * @returns { Promise<Array<Display>> } Promise���󡣷��ص�ǰ���е�Display����
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead display.getAllDisplays()
   */
  function getAllDisplay(): Promise<Array<Display>>;

  /**
   * ��ȡ��ǰ���е�Display����ʹ��callback�첽�ص���
   *
   * @param { AsyncCallback<Array<Display>> } callback - �ص����������ص�ǰ���е�Display����
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllDisplays(callback: AsyncCallback<Array<Display>>): void;

  /**
   * ��ȡ��ǰ���е�Display����ʹ��Promise�첽�ص���
   *
   * @returns { Promise<Array<Display>> } Promise���󡣷��ص�ǰ���е�Display����
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllDisplays(): Promise<Array<Display>>;

  /**
   * ��ȡ��ǰ�豸֧�ֵ�������ʾģʽ�����Ӧ��������Ļ�ֱ�����Ϣ����ʹ��Promise�첽�ص���
   *
   * @returns { Promise<Array<DisplayPhysicalResolution>> } Promise���󡣷��ص�ǰ���е�DisplayPhysicalResolution����
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllDisplayPhysicalResolution(): Promise<Array<DisplayPhysicalResolution>>;

  /**
   * ��ѯָ��display�������Ƿ��пɼ�����˽���ڡ���ͨ��
   * [setWindowPrivacyMode()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setwindowprivacymode9)�ӿ�������˽���ڡ�
   * ��˽�������ݽ��޷���������¼����
   *
   * @param { long } displayId - ��ĻID���ò�����֧���������롣�ò������ڵ���0��
   * @returns { boolean } ��ѯ��display�������Ƿ��пɼ�����˽���ڡ�true��ʾ��display�������пɼ�����˽���ڣ�false��ʾ��display������û�пɼ�����˽���ڡ�
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function hasPrivateWindow(displayId: long): boolean;

  /**
   * ������ʾ�豸�仯�ļ�����
   *
   * @param { 'add' | 'remove' | 'change' } type - �����¼���<br/>- typeΪ"add"����ʾ������ʾ�豸�¼������磺������ʾ����<br/>- typeΪ"remove"����ʾ�Ƴ���
   *     ʾ�豸�¼������磺�Ƴ���ʾ����<br/>- typeΪ"change"����ʾ�ı���ʾ�豸�¼������磺��ʾ������ı䡣
   * @param { Callback<long> } callback - �ص����������ؼ���������ĻID���ò���Ϊ������
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  function on(type: 'add' | 'remove' | 'change', callback: Callback<long>): void;

  /**
   * ������ʾ�豸ָ�����Ա仯�ļ�����
   *
   * @param { Array<string> } displayAttributeOption - ָ����Ҫ��������Ļ�������ƣ��ҽ�����
   *     [display����](docroot://reference/apis-arkui/js-apis-display.md#����)�а��������ԡ�
   * @param { Callback<long> } callback - �ص����������ؼ���������ĻID���ò���Ϊ������
   * @throws { BusinessError } 801 - Capability not supported. Function onChangeWithAttribute can not work correctly
   *     due to limited device capabilities.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   *     Possible causes: Internal IPC error.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 23 dynamic&static
   */
  function onChangeWithAttribute(displayAttributeOption: Array<string>, callback: Callback<long>): void;

  /**
   * Register the callback for display add events.
   *
   * @param { Callback<long> } callback the display id of changed
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function onAdd(callback: Callback<long>): void;

  /**
   * Register the callback for display remove events.
   *
   * @param { Callback<long> } callback the display id of changed
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function onRemove(callback: Callback<long>): void;

  /**
   * Register the callback for display changes.
   *
   * @param { Callback<long> } callback the display id of changed
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function onChange(callback: Callback<long>): void;

  /**
   * �ر���ʾ�豸�仯�ļ�����
   *
   * @param { 'add' | 'remove' | 'change' } type - �����¼���<br/>- typeΪ"add"����ʾ������ʾ�豸�¼������磺������ʾ����<br/>- typeΪ"remove"����ʾ�Ƴ���
   *     ʾ�豸�¼������磺�Ƴ���ʾ����<br/>- typeΪ"change"����ʾ�ı���ʾ�豸�¼������磺��ʾ������ı䡣
   * @param { Callback<long> } callback - ��Ҫȡ��ע��Ļص����������ؼ���������ĻID���ò���Ϊ���������޴˲�������ȡ��ע�ᵱǰtype�����¼����������лص������� [since 7 - 19]
   * @param { Callback<long> } [callback] - ��Ҫȡ��ע��Ļص����������ؼ���������ĻID���ò���Ϊ���������޴˲�������ȡ��ע�ᵱǰtype�����¼����������лص������� [since 20]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  function off(type: 'add' | 'remove' | 'change', callback?: Callback<long>): void;

  /**
   * Unregister the callback for display add events.
   *
   * @param { Callback<long> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function offAdd(callback?: Callback<long>): void;

  /**
   * Unregister the callback for display remove events.
   *
   * @param { Callback<long> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function offRemove(callback?: Callback<long>): void;

  /**
   * Unregister the callback for display changes.
   *
   * @param { Callback<long> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function offChange(callback?: Callback<long>): void;

  /**
   * ������Ļ��˽ģʽ�仯�ļ���������Ļǰ̨����˽���ڣ�����Ļ������˽ģʽ����Ļ�е���˽���������޷���������¼����
   *
   * @param { 'privateModeChange' } type - �����¼����̶�Ϊ'privateModeChange'����ʾ��Ļ��˽ģʽ״̬�����仯��
   * @param { Callback<boolean> } callback - �ص���������ʾ��Ļ��˽ģʽ�Ƿ�ı䡣true��ʾ��Ļ�ɷ���˽����ģʽ��Ϊ��˽ģʽ��false��ʾ��Ļ����˽ģʽ��Ϊ����˽ģʽ��
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'privateModeChange', callback: Callback<boolean>): void;

  /**
   * Register the callback for private mode changes.
   *
   * @param { Callback<boolean> } callback Callback used to return the result whether display is on private mode or not
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onPrivateModeChange(callback: Callback<boolean>): void;

  /**
   * �ر���Ļ��˽ģʽ�仯�ļ���������Ļǰ̨����˽���ڣ�����Ļ������˽ģʽ����Ļ�е���˽���������޷���������¼����
   *
   * @param { 'privateModeChange' } type - �����¼����̶�Ϊ'privateModeChange'����ʾ��Ļ��˽ģʽ״̬�����仯��
   * @param { Callback<boolean> } callback - ��Ҫȡ��ע��Ļص���������ʾ��Ļ��˽ģʽ�Ƿ�ı䡣true��ʾ��Ļ�ɷ���˽����ģʽ��Ϊ��˽ģʽ��false��ʾ��Ļ����˽ģʽ��Ϊ����˽ģʽ�����޴˲���
   *     ����ȡ��ע����Ļ��˽ģʽ�仯���������лص�������
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'privateModeChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the callback for private mode changes.
   *
   * @param { Callback<boolean> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offPrivateModeChange(callback?: Callback<boolean>): void;

  /**
   * �ж��豸�Ƿ���۵���
   *
   * @returns { boolean } boolean���󣬷��ص�ǰ�豸�Ƿ���۵��Ľ����false��ʾ�����۵���true��ʾ���۵�����������ֻ�м򵥸�����ʾ���õ�С�۵��豸��Ӧ���޷��Զ����������棬���䷵��ֵΪfalse������
   *     ���۵��豸�ķ���ֵ��Ϊtrue��
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function isFoldable(): boolean;

  /**
   * ��ȡ���۵��豸��ǰ���۵�״̬��
   *
   * @returns { FoldStatus } FoldStatus���󣬷��ص�ǰ���۵��豸���۵�״̬��
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function getFoldStatus(): FoldStatus;

  /**
   * �����۵��豸�۵�״̬�仯�ļ�����
   * 
   * ���ӿڼ����豸�����۵�״̬�ı仯�����Ҫ������Ļ��ʾģʽ�ı仯����Ҫʹ��
   * [display.on('foldDisplayModeChange')]{@link display.on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>)}
   * �ӿڡ�
   * 
   * ���ߴ��ڲ��죬ʱ���������۵�״̬�仯��ǰ���ײ����������۵�״̬ƥ����Ļ��ʾģʽ״̬��
   * 
   * ���������ǰ��ʾ��������ʾ���۵��豸������������������ʹ��
   * [display.on('foldDisplayModeChange')]{@link display.on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>)}
   * ��
   *
   * @param { 'foldStatusChange' } type - �����¼����̶�Ϊ'foldStatusChange'����ʾ�۵��豸�۵�״̬�����仯��
   * @param { Callback<FoldStatus> } callback - �ص���������ʾ�۵��豸�۵�״̬��
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function on(type: 'foldStatusChange', callback: Callback<FoldStatus>): void;

  /**
   * Register the callback for fold status changes.
   *
   * @param { Callback<FoldStatus> } callback Callback used to return the current fold status of device
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function onFoldStatusChange(callback: Callback<FoldStatus>): void;

  /**
   * �ر��۵��豸�۵�״̬�仯�ļ�����
   *
   * @param { 'foldStatusChange' } type - �����¼����̶�Ϊ'foldStatusChange'����ʾ�۵��豸�۵�״̬�����仯��
   * @param { Callback<FoldStatus> } callback - ��Ҫȡ��ע��Ļص���������ʾ�۵��豸�۵�״̬�����޴˲�������ȡ��ע���۵�״̬�仯���������лص������� [since 10 - 19]
   * @param { Callback<FoldStatus> } [callback] - ��Ҫȡ��ע��Ļص���������ʾ�۵��豸�۵�״̬�����޴˲�������ȡ��ע���۵�״̬�仯���������лص������� [since 20]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function off(type: 'foldStatusChange', callback?: Callback<FoldStatus>): void;

  /**
   * Unregister the callback for fold status changes.
   *
   * @param { Callback<FoldStatus> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function offFoldStatusChange(callback?: Callback<FoldStatus>): void;

  /**
   * �����۵��豸�۵��Ƕȱ仯�ļ����������˫�����豸�����������Ƕ�ֵ���ڳ��ڳ��µ�״̬�£����ҵ���ֱ�������һ���������
   *
   * @param { 'foldAngleChange' } type - �����¼����̶�Ϊ'foldAngleChange'����ʾ�۵��豸�۵��Ƕȷ����仯��
   * @param { Callback<Array<double>> } callback - �ص���������ʾ�۵��豸��Ļ�۵��Ƕ�ֵ��0��~180�ȣ��������˫�����豸�������鷵�������Ƕ�ֵ����һ��ֵ������һ���۵��Ƕ�ֵ���ڶ���ֵ����
   *     ������۵��Ƕ�ֵ��
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  function on(type: 'foldAngleChange', callback: Callback<Array<double>>): void;

  /**
   * Register the callback for fold angle changes.
   *
   * @param { Callback<Array<double>> } callback Callback used to return the current fold angle of device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function onFoldAngleChange(callback: Callback<Array<double>>): void;

  /**
   * �ر��۵��豸�۵��Ƕȱ仯�ļ�����
   *
   * @param { 'foldAngleChange' } type - �����¼����̶�Ϊ'foldAngleChange'��ʾ�۵��豸�۵��Ƕȷ����仯��
   * @param { Callback<Array<double>> } callback - ��Ҫȡ��ע��Ļص���������ʾ�۵��豸��Ļ�۵��Ƕ�ֵ��0��~180�ȣ������޴˲�������ȡ��ע���۵��Ƕȱ仯���������лص�����
   *     �� [since 12 - 19]
   * @param { Callback<Array<double>> } [callback] - ��Ҫȡ��ע��Ļص���������ʾ�۵��豸��Ļ�۵��Ƕ�ֵ��0��~180�ȣ������޴˲�������ȡ��ע���۵��Ƕȱ仯���������лص�����
   *     �� [since 20]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  function off(type: 'foldAngleChange', callback?: Callback<Array<double>>): void;

  /**
   * Unregister the callback for fold angle changes.
   *
   * @param { Callback<Array<double>> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function offFoldAngleChange(callback?: Callback<Array<double>>): void;

  /**
   * �����豸����Ļ��ʾ��Ϣ�Ƿ񱻻�ȡ�ļ�����
   *
   * @param { 'captureStatusChange' } type - �����¼����̶�Ϊ'captureStatusChange'��ʾ�豸����Ļ��ʾ��Ϣ����ȡ��״̬�����仯��
   * @param { Callback<boolean> } callback - �ص���������ʾ�豸����Ļ��ʾ��Ϣ�Ƿ񱻻�ȡ��true��ʾ�豸����Ļ��ʾ��Ϣ��ʼ����ȡ���������ڽ�����Ͷ����¼��״̬���򴴽���������Ļ(������Ļ���ܱ�
   *     Ӧ�û�ȡ��Ļͼ��)������������һ��true��false��ʾ��ȡ������
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  function on(type: 'captureStatusChange', callback: Callback<boolean>): void;

  /**
   * Register the callback for device capture, casting, or recording status changes.
   *
   * @param { Callback<boolean> } callback Callback used to return the device capture, casting, or recording status.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 static
   */
  function onCaptureStatusChange(callback: Callback<boolean>): void;

  /**
   * �ر��豸����Ļ��ʾ��Ϣ�Ƿ񱻻�ȡ�ļ�����
   *
   * @param { 'captureStatusChange' } type - �����¼����̶�Ϊ'captureStatusChange'��ʾ�豸����Ļ��ʾ��Ϣ����ȡ��״̬�����仯��
   * @param { Callback<boolean> } callback - ��Ҫȡ��ע��Ļص���������ʾ�豸����Ļ��ʾ��Ϣ�Ƿ񱻻�ȡ��true��ʾ�豸����Ļ��ʾ��Ϣ��ʼ����ȡ���������ڽ�����Ͷ����¼��״̬���򴴽���������Ļ(��
   *     ����Ļ���ܱ�Ӧ�û�ȡ��Ļͼ��)������������һ��true��false��ʾ��ȡ���������޴˲�������ȡ��ע���豸����Ļ��ʾ��Ϣ�Ƿ���ڱ���ȡ���������лص�������
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  function off(type: 'captureStatusChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the callback for device capture, casting, or recording status changes.
   *
   * @param { Callback<boolean> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 static
   */
  function offCaptureStatusChange(callback?: Callback<boolean>): void;

  /**
   * ����豸����Ļ��ʾ��Ϣ�Ƿ񱻻�ȡ��
   *
   * @returns { boolean } booleanֵ�������豸����Ļ��ʾ��Ϣ�Ƿ���ڱ���ȡ�����������true��ʾ�豸����Ļ��Ϣ���ڱ���ȡ�����������Ϊ���豸�����ڽ�����Ͷ����¼��״̬�����Ѵ���������Ļ(������Ļ���ܱ�Ӧ�û�
   *     ȡ��Ļͼ��)������false���ʾ�豸����Ļ��Ϣ�����ڱ���ȡ�������
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function isCaptured(): boolean;

  /**
   * �����豸�Ƿ�bundle�����б��е��κ�Ӧ��ץ�ġ�ͶӰ��¼�ơ�
   *
   * @param { Array<string> } bundleNameList - ��Ҫ����Ӧ�ð������б������������СΪ100��
   * @returns { boolean } true��ʾ���豸�������б��е��κ�Ӧ�ò���ͶӰ��¼�ơ�
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause:
   *     1.The size of bundleNameList is larger than 100.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function isCaptured(bundleNameList: Array<string>): boolean;

  /**
   * ��ȡ���۵��豸��ǰ����ʾģʽ��
   *
   * @returns { FoldDisplayMode } FoldDisplayMode���󣬷��ؿ��۵��豸��ǰ����ʾģʽ��
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function getFoldDisplayMode(): FoldDisplayMode;

  /**
   * ���Ŀ��۵��豸����ʾģʽ��
   *
   * @param { FoldDisplayMode } mode - ���۵��豸����ʾģʽ��
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setFoldDisplayMode(mode: FoldDisplayMode): void;

  /**
   * �����۵��豸��Ļ��ʾģʽ�仯�ļ�����
   * 
   * ���ӿڼ����豸��Ļ��ʾģʽ�ı仯�����Ҫ�����豸�����۵�״̬�ı仯����Ҫʹ��
   * [display.on('foldStatusChange')]{@link display.on(type: 'foldStatusChange', callback: Callback<FoldStatus>)}�ӿڡ�
   * 
   * ���ߴ��ڲ��죬ʱ���������۵�״̬�仯��ǰ���ײ����������۵�״̬ƥ����Ļ��ʾģʽ״̬��
   *
   * @param { 'foldDisplayModeChange' } type - �����¼����̶�Ϊ'foldDisplayModeChange'����ʾ�۵��豸��Ļ��ʾģʽ�����仯��
   * @param { Callback<FoldDisplayMode> } callback - �ص���������ʾ�۵��豸��Ļ��ʾģʽ��
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>): void;

  /**
   * Register the callback for fold display mode changes.
   *
   * @param { Callback<FoldDisplayMode> } callback Callback used to return the current fold display mode
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function onFoldDisplayModeChange(callback: Callback<FoldDisplayMode>): void;

  /**
   * �ر��۵��豸��Ļ��ʾģʽ�仯�ļ�����
   *
   * @param { 'foldDisplayModeChange' } type - �����¼����̶�Ϊ'foldDisplayModeChange'����ʾ�۵��豸��Ļ��ʾģʽ�����仯��
   * @param { Callback<FoldDisplayMode> } callback - ��Ҫȡ��ע��Ļص���������ʾ�۵��豸��Ļ��ʾģʽ�����޴˲�������ȡ��ע����Ļ��ʾģʽ�仯���������лص�����
   *     �� [since 10 - 19]
   * @param { Callback<FoldDisplayMode> } [callback] - ��Ҫȡ��ע��Ļص���������ʾ�۵��豸��Ļ��ʾģʽ�����޴˲�������ȡ��ע����Ļ��ʾģʽ�仯���������лص������� [since 20]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function off(type: 'foldDisplayModeChange', callback?: Callback<FoldDisplayMode>): void;

  /**
   * Unregister the callback for fold display mode changes.
   *
   * @param { Callback<FoldDisplayMode> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function offFoldDisplayModeChange(callback?: Callback<FoldDisplayMode>): void;

  /**
   * �ڵ�ǰ��ʾģʽ�»�ȡ�۵��ۺ�����
   *
   * @returns { FoldCreaseRegion } FoldCreaseRegion���󣬷����豸�ڵ�ǰ��ʾģʽ�µ��۵��ۺ�����
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function getCurrentFoldCreaseRegion(): FoldCreaseRegion;

  /**
   * ���ÿ��۵��豸��ǰ�۵�״̬������״̬��
   *
   * @param { boolean } locked - ���۵��豸���۵�״̬�Ƿ�������true��ʾ������false��ʾ��������
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function setFoldStatusLocked(locked: boolean): void;

  /**
   * ����������Ļ��ʹ��Promise�첽�ص���
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { VirtualScreenConfig } config - ���ڴ���������Ļ�Ĳ�����
   * @returns { Promise<long> } Promise���󡣷��ش�����������Ļ��ScreenId��
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.function createVirtualScreen can not work correctly due to
   *     limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap  SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  function createVirtualScreen(config: VirtualScreenConfig): Promise<long>;

  /**
   * ����������Ļ��ʹ��Promise�첽�ص���
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { long } screenId - ��ĻID���봴����������ĻID����һ�£���ʹ��[createVirtualScreen()]{@link display.createVirtualScreen}�ӿڳɹ�������
   *     Ӧ������Ļʱ�ķ���ֵ���ò�����֧���������롣
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.function destroyVirtualScreen can not work correctly due
   *     to limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap  SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  function destroyVirtualScreen(screenId: long): Promise<void>;

  /**
   * ����������Ļ��surfaceId��surfaceId���ڱ�ʶһ��surface����ʾ��ǰ������������ʾ��Ӧsurface�е����ݡ�ʹ��Promise�첽�ص���
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { long } screenId - ��ĻID���봴����������ĻID����һ�£���ʹ��[createVirtualScreen()]{@link display.createVirtualScreen}�ӿڳɹ�������
   *     Ӧ������Ļʱ�ķ���ֵ���ò�����֧���������롣
   * @param { string } surfaceId - ����������Ļ�󶨵�surfaceId�����û�ָ��ĳһʵ�ʴ��ڵ�surface��Ӧ��surfaceId���ò�����󳤶�Ϊ4096���ֽڣ�������󳤶�ʱ��ȡǰ4096���ֽڡ�
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.function setVirtualScreenSurface can not work correctly
   *     due to limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap  SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  function setVirtualScreenSurface(screenId: long, surfaceId: string): Promise<void>;

  /**
   * Ϊ������Ļ����surface��
   *
   * @param { long } screenId - ������Ļ����ĻID��
   * @param { string } surfaceId - surface��id��
   * @param { Rect } [surfaceRegion] - ������������ʾsurface�ľ�������
   *     Ĭ��ֵ��������Ļ����������
   * @returns { Promise<void> } �������κ�ֵ��Promise
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.function addVirtualScreenSurface
   *     can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function addVirtualScreenSurface(screenId: long, surfaceId: string, surfaceRegion?: Rect): Promise<void>;

  /**
   * ɾ����������surface
   *
   * @param { long } screenId - ������Ļ����ĻID��
   * @param { string } surfaceId - surface��id��
   * @returns { Promise<void> } �������κ�ֵ��Promise
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.function removeVirtualScreenSurface
   *     can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function removeVirtualScreenSurface(screenId: long, surfaceId: string): Promise<void>;

  /**
   * ����Ļ����Ϊ��Դģʽ��ʹ��Promise�첽�ص���
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { long } screenId - Ҫ���ó���Դģʽ����ĻID������idӦΪ����0�����������򷵻�401�����롣
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.function makeUnique can not work correctly due to limited
   *     device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  function makeUnique(screenId: long): Promise<void>;

  /**
   * ���������ӵ���ֹͶ����ʾ�������У������ӵĴ����޷���Ͷ��ʱ��ʾ������Ӧ��������ϵͳ������Ч��ʹ��Promise�첽�ص���
   *
   * @param { Array<int> } windowIds - ����id�б��������Ӵ�����idʱ����Ч������idΪ����0���������Ƽ�ʹ��
   *     [getWindowProperties()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getwindowproperties9)������ȡ����
   *     id���ԡ�
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.Function addVirtualScreenBlocklist can not work correctly
   *     due to limited device capabilities.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function addVirtualScreenBlocklist(windowIds: Array<int>): Promise<void>;

  /**
   * �����ڴӽ�ֹͶ����ʾ���������Ƴ������Ƴ��Ĵ��ڿ�����Ͷ��ʱ��ʾ������Ӧ��������ϵͳ������Ч��ʹ��Promise�첽�ص���
   *
   * @param { Array<int> } windowIds - ����id�б��������Ӵ�����idʱ����Ч������idΪ����0���������Ƽ�ʹ��
   *     [getWindowProperties()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getwindowproperties9)������ȡ����
   *     id���ԡ�
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.Function removeVirtualScreenBlocklist
   *     can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function removeVirtualScreenBlocklist(windowIds: Array<int>): Promise<void>;

  /**
   * ��ָ����Ļ���Ͻ�Ϊԭ����������ת�����������Ͻ�Ϊԭ���ȫ�����꣬��֧����������չ��������ת����
   *
   * @param { RelativePosition } relativePosition - ��Ҫת��Ϊȫ�������������ꡣ
   * @returns { Position } ����������������Ͻǵ�ȫ�����ꡣ
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function convertRelativeToGlobalCoordinate(relativePosition: RelativePosition): Position;

  /**
   * ���������Ͻ�Ϊԭ���ȫ������ת����displayIdָ����Ļ���Ͻ�Ϊԭ���������ꡣ��δ����displayId��Ĭ��ת��Ϊȫ������������Ļ���������ϵ����ȫ�����겻���κ���Ļ�ϣ�Ĭ��ת����������������ꡣ
   *
   * @param { Position } position - ��Ҫת��Ϊ��������ȫ�����ꡣ
   * @param { long } [displayId] - �������ϵԭ�����ڵ���ĻID�����ݸò�����ʾ��ָ����Ļ���Ͻ�Ϊԭ��ת��������ꡣ��ָ���򲻴��Σ�Ĭ��ת����ȫ������������Ļ��������꣬��ȫ�����겻���κ���Ļ�ϣ���Ĭ��ת��
   *     ��������������ꡣ
   * @returns { RelativePosition } ���ض�Ӧ��Ļ��������ꡣ
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function convertGlobalToRelativeCoordinate(position: Position, displayId?: long): RelativePosition;

  /**
   * ��ȡָ��displayId��Ӧ��Ļ��������Ϣ�������Ļ��֧��HDR�����ص�[BrightnessInfo]{@link display.BrightnessInfo}�����е�currentHeadroom��maxHeadroom
   * ΪĬ��ֵ����������BrightnessInfo������sdrNitsΪĬ��ֵ��
   *
   * @param { long } displayId - ��ĻID���ò�����֧���������룬�ò������ڵ���0��
   * @returns { BrightnessInfo } ����displayId��Ӧ��Ļ��������Ϣ��
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function getBrightnessInfo(displayId: long): BrightnessInfo;

  /**
   * ������Ļ������Ϣʱʹ�õĻص��������͡�
   *
   * @param { T1 } data1 - ��ʾdisplayId������Ϊnumber��
   * @param { T2 } data2 - ��ʾbrightnessInfo������Ϊ[BrightnessInfo]{@link display.BrightnessInfo}��
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  type BrightnessCallback<T1, T2> = (data1: T1, data2: T2) => void;

  /**
   * ����������Ļ������Ϣ�仯�ļ����������Ļ��֧��HDR����������[BrightnessInfo]{@link display.BrightnessInfo}�����е�currentHeadroom��maxHeadroomΪĬ��ֵ������
   * ����BrightnessInfo������sdrNitsΪĬ��ֵ��
   *
   * @param { 'brightnessInfoChange' } type - �����¼����̶�Ϊ'brightnessInfoChange'����ʾ��Ļ������Ϣ״̬�����仯��
   * @param { BrightnessCallback<long, BrightnessInfo> } callback - �ص�������������Ļ������Ϣ�ı��displayId(����1)����Ӧ����Ļ������Ϣ(����2)��
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 22 dynamic
   */
  function on(type: 'brightnessInfoChange', callback: BrightnessCallback<long, BrightnessInfo>): void;

  /**
   * �ر�������Ļ������Ϣ״̬�仯�ļ�����
   *
   * @param { 'brightnessInfoChange' } type - �����¼����̶�Ϊ'brightnessInfoChange'����ʾ��Ļ������Ϣ״̬�����仯��
   * @param { BrightnessCallback<long, BrightnessInfo> } [callback] - ��Ҫȡ��ע��Ļص���������ʾbrightnessInfo״̬�����ı䡣���޴˲�������ȡ������ע��
   *     brightnessInfo״̬�����ı�Ļص�����������1ΪdisplayId������2Ϊ��Ļ������Ϣ��
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 22 dynamic
   */
  function off(type: 'brightnessInfoChange', callback?: BrightnessCallback<long, BrightnessInfo>): void;

  /**
   * Register the callback for brightness info changes.
   *
   * @param { BrightnessCallback<long, BrightnessInfo> } callback - Callback used to return the display if and
   *     corresponding brightness info.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 static
   */
  function onBrightnessInfoChange(callback: BrightnessCallback<long, BrightnessInfo>): void;

  /**
   * Unregister the callback for brightness info changes.
   *
   * @param { BrightnessCallback<long, BrightnessInfo> } [callback] - Callback used to return the display corresponding
   *     brightness info. If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 static
   */
  function offBrightnessInfoChange(callback?: BrightnessCallback<long, BrightnessInfo>): void;

  /**
   * ����������Ļ�Ĳ�����
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  interface VirtualScreenConfig {
    /**
     * ָ��������Ļ�����ƣ��û������ж��塣
     *
     * @syscap  SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * ָ��������Ļ�Ŀ��ȣ���λΪpx���ò���ӦΪ��������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * ָ��������Ļ�ĸ߶ȣ���λΪpx���ò���ӦΪ��������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * ָ��������Ļ���ܶȣ���λΪpx���ò���Ϊ��������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    density: double;

    /**
     * ָ��������Ļ��surfaceId���û������ж��壬�ò�����󳤶�Ϊ4096���ֽڣ�������󳤶�ʱ��ȡǰ4096���ֽڡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    surfaceId: string;

    /**
     * ָ��������Ļ�Ƿ�ɻ�ý��㡣true��ʾ�ɻ񽹣�false��ʾ���ɻ񽹣�Ĭ��ֵΪtrue��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    supportsFocus?: boolean;
  }

  /**
   * ����λ�ã���ȫ������ϵ�У����������Ͻ�Ϊԭ�㡣���������ϵ�У���ָ����Ļ���Ͻ�Ϊԭ�㡣
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface Position {
    /**
     * ���ԭ��ĺ����꣬��λΪpx���ò���ӦΪ32λ�з������������븡����ʱ����ȡ����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    x: long;

    /**
     * ���ԭ��������꣬��λΪpx���ò���ӦΪ32λ�з������������븡����ʱ����ȡ����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    y: long;
  }

  /**
   * �������ϵ�µ�����λ�ã���displayId��Ӧ����Ļ���Ͻ�Ϊԭ�㡣
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface RelativePosition {
    /**
     * �����������Ӧ����ĻID����֧���������룬������ڵ���0��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    displayId: long;

    /**
     * ��displayId��ָ����Ļ���Ͻ�Ϊԭ�������ֵ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    position: Position;
  }

  /**
   * ��ǰ���۵��豸���۵�״̬ö�١������˫�����豸�����ڳ��ڳ��µ�״̬�£����ҵ���ֱ�������һ���������
   * 
   * > **˵����**
   * 
   * > ֻ��һ������Ĳ�Ʒ����FOLD_STATUS_EXPANDED��FOLD_STATUS_FOLDED��FOLD_STATUS_HALF_FOLDED�����۵�״̬��
   * 
   * > ������������Ĳ�Ʒ�����ϱ���FOLD_STATUS_UNKNOWN����ľ����۵�״̬��
   * 
   * > FOLD_STATUS_UNKNOWN��һ�ֲ����õ��۵�״̬��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum FoldStatus {
    /**
     * ��ʾ�豸��ǰ�۵�״̬�޷�ȷ�����豸���������۵���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_STATUS_UNKNOWN = 0,
    /**
     * ��ʾ�豸��ǰ�۵�״̬Ϊ��ȫչ���������˫�����豸�����ʾ����һ�۵�״̬Ϊ��ȫչ����������۵�״̬Ϊ�۵���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_STATUS_EXPANDED = 1,
    /**
     * ��ʾ�豸��ǰ�۵�״̬Ϊ�۵��������˫�����豸�����ʾ����һ����������۵�״̬��Ϊ�۵���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_STATUS_FOLDED = 2,
    /**
     * ��ʾ�豸��ǰ�۵�״̬Ϊ���۵������۵�ָ��ȫչ�����۵�֮���״̬�������˫�����豸�����ʾ����һ�۵�״̬Ϊ���۵���������۵�״̬Ϊ�۵���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_STATUS_HALF_FOLDED = 3,

    /**
     * ��ʾ˫�����豸����һ����������۵�״̬��Ϊ��ȫչ����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_EXPANDED_WITH_SECOND_EXPANDED = 11,

    /**
     * ��ʾ˫�����豸����һ�۵�״̬Ϊ��ȫչ����������۵�״̬Ϊ���۵���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_EXPANDED_WITH_SECOND_HALF_FOLDED = 21,

    /**
     * ��ʾ˫�����豸����һ�۵�״̬Ϊ�۵���������۵�״̬Ϊ���۵���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_FOLDED_WITH_SECOND_HALF_FOLDED = 22,

    /**
     * ��ʾ˫�����豸����һ����������۵�״̬��Ϊ���۵���
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_HALF_FOLDED_WITH_SECOND_HALF_FOLDED = 23,

    /**
     * ��ʾ˫�����豸����һ�۵�״̬Ϊ�۵���������۵�״̬Ϊ��ȫչ����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_FOLDED_WITH_SECOND_EXPANDED = 12,

    /**
     * ��ʾ˫�����豸����һ�۵�״̬Ϊ���۵���������۵�״̬Ϊ��ȫչ����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_HALF_FOLDED_WITH_SECOND_EXPANDED = 13
  }

  /**
   * ���۵��豸����ʾģʽö�١�
   * 
   * > **˵����**
   * 
   * > ����������������Ϊ����Ļʹ�õ��۵���Ʒ��������۵������۵���������ʾ״̬ΪFOLD_DISPLAY_MODE_FULL��������ʾ״̬ΪFOLD_DISPLAY_MODE_MAIN��
   * 
   * > ��������ֻ�м򵥵ĸ�����ʾ���õ��۵���Ʒ������С�۵���������ʾ״̬ΪFOLD_DISPLAY_MODE_MAIN��������ʾ״̬ΪFOLD_DISPLAY_MODE_SUB��
   *
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum FoldDisplayMode {
    /**
     * ��ʾ�豸��ǰ�۵���ʾģʽδ֪��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_UNKNOWN = 0,
    /**
     * ��ʾ�豸��ǰȫ����ʾ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_FULL = 1,
    /**
     * ��ʾ�豸��ǰ����Ļ��ʾ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_MAIN = 2,
    /**
     * ��ʾ�豸��ǰ����Ļ��ʾ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_SUB = 3,
    /**
     * ��ʾ�豸��ǰ˫��Эͬ��ʾ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_COORDINATION = 4
  }

  /**
   * ��ʾ�豸��״̬ö�١�
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum DisplayState {
    /**
     * ��ʾ��ʾ�豸״̬δ֪��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_UNKNOWN = 0,
    /**
     * ��ʾ��ʾ�豸״̬Ϊ�رա�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_OFF = 1,
    /**
     * ��ʾ��ʾ�豸״̬Ϊ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_ON = 2,
    /**
     * ��ʾ��ʾ�豸Ϊ�͵��ģʽ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_DOZE = 3,
    /**
     * ��ʾ��ʾ�豸Ϊ˯��ģʽ��CPUΪ����״̬��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_DOZE_SUSPEND = 4,
    /**
     * ��ʾ��ʾ�豸ΪVRģʽ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_VR = 5,
    /**
     * ��ʾ��ʾ�豸Ϊ����״̬��CPUΪ����״̬��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_ON_SUSPEND = 6
  }

  /**
   * ��ʾ�豸��ǰ��ʾ�ķ���ö�١�
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum Orientation {
    /**
     * ��ʾ�豸��ǰ��������ʽ��ʾ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PORTRAIT = 0,

    /**
     * ��ʾ�豸��ǰ�Ժ�����ʽ��ʾ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    LANDSCAPE = 1,

    /**
     * ��ʾ�豸��ǰ�Է���������ʽ��ʾ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PORTRAIT_INVERTED = 2,

    /**
     * ��ʾ�豸��ǰ�Է��������ʽ��ʾ��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    LANDSCAPE_INVERTED = 3
  }

  /**
   * �۵��ۺ�����
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface FoldCreaseRegion {
    /**
     * ��ĻID������ʶ���ۺ����ڵ���Ļ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly displayId: long;

    /**
     * �ۺ�����
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly creaseRects: Array<Rect>;
  }

  /**
   * ��Ļ������Ϣ���������е���Ϣ�����Եײ���Ļ��Ϣ���ݡ�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface BrightnessInfo {
    /**
     * ��Ļ�����ȣ��ò���Ϊ����0�ĸ�������Ĭ��ֵΪ500.0��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    readonly sdrNits: double;
    /**
     * ��ǰ���ȶ�̬�������ò���Ϊ����0�ĸ�������Ĭ��ֵΪ1.0��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    readonly currentHeadroom: double;
    /**
     * ��ǰ��������������ò���Ϊ����0�ĸ�������Ĭ��ֵΪ1.0��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    readonly maxHeadroom: double;
  }

  /**
   * ��������
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Rect {
    /**
     * �����������߽磬��λΪpx���ò���Ϊ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    left: long;

    /**
     * ����������ϱ߽磬��λΪpx���ò���Ϊ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    top: long;

    /**
     * ��������Ŀ��ȣ���λΪpx���ò���Ϊ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * ��������ĸ߶ȣ���λΪpx���ò���Ϊ������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    height: long;
  }

  /**
   * �ٲ������沿����ʾ����
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface WaterfallDisplayAreaRects {
    /**
     * �ٲ��������������������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly left: Rect;

    /**
     * �ٲ�����������Ҳ��������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly right: Rect;

    /**
     * �ٲ���������Ķ�����������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly top: Rect;

    /**
     * �ٲ���������ĵײ���������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly bottom: Rect;
  }

  /**
   * �ڿ��������������ٲ����Ȳ�������Ļ������Ϣ��
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface CutoutInfo {
    /**
     * �ڿס�����������ı߽���Ρ����û���ڿס��������������鷵��Ϊ�ա�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly boundingRects: Array<Rect>;

    /**
     * �ٲ������沿����ʾ����
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly waterfallDisplayAreaRects: WaterfallDisplayAreaRects;
  }

  /**
   * �豸����ʾģʽ�Լ���Ӧ��������Ļ�ֱ�����Ϣ��
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface DisplayPhysicalResolution {
    /**
     * �豸����ʾģʽ�����۵��豸ʱֵΪ0��
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    foldDisplayMode: FoldDisplayMode;

    /**
     * �豸�Ŀ��ȣ���λΪpx���ò���Ϊ����0��������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    physicalWidth: long;

    /**
     * �豸�ĸ߶ȣ���λΪpx���ò���Ϊ����0��������
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    physicalHeight: long;
  }

  /**
   * ��Ļʵ��������Display��������Ժͷ�����
   * 
   * ����APIʾ���ж�����ʹ��[getAllDisplays()]{@link display.getAllDisplays(callback: AsyncCallback<Array<Display>>)}��
   * [getDefaultDisplaySync()]{@link display.getDefaultDisplaySync}�е���һ������ȡ��Displayʵ������ͨ����ʵ�����ö�Ӧ������
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface Display {
    /**
     * ��ʾ�豸����ĻID���ò���Ϊ���ڵ���0��������
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    id: long;

    /**
     * ��ʾ�豸�����ơ�
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * ��ʾ�豸������״̬����ʾ�豸�Ƿ�����������״̬��true��ʾ�����ã�������������״̬��false��ʾδ���ã�δ������������״̬��
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    alive: boolean;

    /**
     * ��ʾ�豸��״̬��
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    state: DisplayState;

    /**
     * ��ʾ�豸��ǰ���õ�ˢ���ʣ��ò���Ϊ��������λΪHz��
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    refreshRate: int;

    /**
     * ��ʾ�豸����Ļ˳ʱ����ת�Ƕȡ�
     * 
     * ֵΪ0ʱ����ʾ��ʾ�豸��Ļ˳ʱ����תΪ0�㣬��ʾ��ʾ�豸�ı�׼��ʾ����
     * 
     * ֵΪ1ʱ����ʾ��ʾ�豸��Ļ˳ʱ����תΪ90�㣻
     * 
     * ֵΪ2ʱ����ʾ��ʾ�豸��Ļ˳ʱ����תΪ180�㣻
     * 
     * ֵΪ3ʱ����ʾ��ʾ�豸��Ļ˳ʱ����תΪ270�㡣
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    rotation: int;

    /**
     * ��ʾ�豸����Ļ���ȣ���λΪpx���ò���Ϊ������
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * ��ʾ�豸����Ļ�߶ȣ���λΪpx���ò���Ϊ������
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * ��ʾ�豸�Ŀ���������ȣ���λΪpx���ò���Ϊ����0��������
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     * 
     * �ýӿ���2in1�豸��Tablet�豸�п��������ã��������豸�в����ã���ͨ��width���Ի�ȡ��ǰ�豸��Ļ�Ŀ���������ȡ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    availableWidth: long;

    /**
     * ��ʾ�豸�Ŀ�������߶ȣ���λΪpx���ò���Ϊ����0��������
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     * 
     * �ýӿ���2in1�豸��Tablet�豸�п��������ã��������豸�в����ã���ͨ��height���Ի�ȡ��ǰ�豸��Ļ�Ŀ�������߶ȡ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    availableHeight: long;

    /**
     * ��ʾ�豸�����������ܶȣ���ʾÿӢ���ϵ����ص������ò���Ϊ����������λΪpx��һ��ȡֵ160.0��480.0�ȣ�ʵ����ȡ����ֵȡ���ڲ�ͬ�豸�������ṩ�Ŀ�ѡֵ��
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    densityDPI: double;

    /**
     * ��ʾ��ʾ�豸��ǰ��ʾ�ķ���
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    orientation: Orientation;

    /**
     * ��ʾ�豸�߼����ص��ܶȣ����������������߼����ص�����ϵ�������㷽ʽΪ��![densityPixels](docroot://reference/apis-arkui/figures/densityPixels.jpg)
     * 
     * �ò���Ϊ����������densityDPI��Χ���ƣ�ȡֵ��Χ��[0.5��4.0]��һ��ȡֵ1.0��3.0�ȣ�ʵ��ȡֵȡ���ڲ�ͬ�豸�ṩ��densityDPI��
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    densityPixels: double;

    /**
     * ��ʾ�豸�ϵ�������������ӡ��ò���Ϊ��������ͨ����densityPixels��ͬ��
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    scaledDensity: double;

    /**
     * x�᷽����ÿӢ����Ļ��ȷ����������ֵ���ò���Ϊ��������
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    xDPI: double;

    /**
     * y�᷽����ÿӢ����Ļ��ȷ����������ֵ���ò���Ϊ��������
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    yDPI: double;

    /**
     * ��ʾ�豸֧�ֵ�����ɫ�����͡�
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    colorSpaces: Array<colorSpaceManager.ColorSpace>;

    /**
     * ��ʾ�豸֧�ֵ�����HDR��ʽ��
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    hdrFormats: Array<hdrCapability.HDRFormat>;

    /**
     * ��ȡ�ڿ��������������ٲ����Ȳ�������Ļ������Ϣ��ʹ��callback�첽�ص�������Ӧ�ò��ֹ�ܸ�����
     *
     * @param { AsyncCallback<CutoutInfo> } callback - �ص����������ز�������Ļ�������
     * @throws { BusinessError } 1400001 - Invalid display or screen. Possible cause:
     *     1. This display is abnormal.
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getCutoutInfo(callback: AsyncCallback<CutoutInfo>): void;

    /**
     * ��ȡ�ڿ��������������ٲ����Ȳ�������Ļ������Ϣ��ʹ��Promise�첽�ص�������Ӧ�ò��ֹ�ܸ�����
     *
     * @returns { Promise<CutoutInfo> } Promise���󡣷���������������Ļ�����CutoutInfo����
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getCutoutInfo(): Promise<CutoutInfo>;

    /**
     * �жϵ�ǰ��Ļ�Ƿ��������ʽ���ڣ�ʹ��callback�첽�ص���
     *
     * @param { AsyncCallback<boolean> } callback - �ص�����������true��ʾ��ǰ��Ļ��������ʽ���ڣ�false��ʾ��������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    hasImmersiveWindow(callback: AsyncCallback<boolean>): void;

    /**
     * �жϵ�ǰ��Ļ�Ƿ��������ʽ���ڣ�ʹ��Promise�첽�ص���
     *
     * @returns { Promise<boolean> } Promise���󡣷���true��ʾ��ǰ��Ļ��������ʽ���ڣ�false��ʾ��������
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    hasImmersiveWindow(): Promise<boolean>;

    /**
     * ��ȡ��ǰ�豸��Ļ�Ŀ�������ʹ��Promise�첽�ص���
     * 
     * ���������ǿ۳�ϵͳUI����״̬����Dock�����󣬿ɹ�Ӧ�ó�������ʹ�õ�����
     *
     * @returns { Promise<Rect> } Promise���󡣷��ص�ǰ��Ļ���þ�������
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400001 - Invalid display or screen. Possible cause:
     *     1. This display is abnormal.
     *     2. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getAvailableArea(): Promise<Rect>;

    /**
     * ��ȡ��ǰ��ʾģʽ�µ�ʵʱ�ۺ�����
     *
     * @returns { FoldCreaseRegion } �����豸�ڵ�ǰ��ʾģʽ�µ��۵��ۺ�����
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    getLiveCreaseRegion(): FoldCreaseRegion;

    /**
     * ������ǰ�豸��Ļ��������ļ���������Ļ��ת������/�˳����ɶരģʽ������Dock��/״̬����ϵͳ�ؼ��ɼ��Ա仯ʱ�������ص����������ؿ���������Ϣ��
     *
     * @param { 'availableAreaChange' } type - �����¼����̶�Ϊ'availableAreaChange'����ʾ��Ļ������������
     * @param { Callback<Rect> } callback - �ص����������ظı��Ŀ�������
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'availableAreaChange', callback: Callback<Rect>): void;

    /**
     * Register the callback for available area changes.
     *
     * @param { Callback<Rect> } callback - Callback used to return the available area
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onAvailableAreaChange(callback: Callback<Rect>): void;

    /**
     * �رյ�ǰ�豸��Ļ��������仯�ļ�����
     *
     * @param { 'availableAreaChange' } type - �����¼����̶�Ϊ'availableAreaChange'����ʾ��Ļ������������
     * @param { Callback<Rect> } [callback] - ��Ҫȡ��ע��Ļص����������ظı��Ŀ����������޴˲�������ȡ��ע����Ļ��������仯���������лص�������
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'availableAreaChange', callback?: Callback<Rect>): void;

    /**
     * Unregister the callback for available area changes.
     *
     * @param { Callback<Rect> } [callback] - Unregister the callback function.
     *	    If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offAvailableAreaChange(callback?: Callback<Rect>): void;

    /**
     * Get current display capability, including foldstatus, displaymode, rotation, and orientation information.
     *
     * @returns { string } Indicates the current foldstatus, displaymode, rotation, and orientation information.
     * @throws { BusinessError } 801 - Capability not supported.Function getDisplayCapability can not work correctly due
     *     to limited device capabilities.
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    getDisplayCapability(): string;

    /**
     * ��ʾ�豸����ʾģʽö�٣�Ĭ��ֵΪDisplaySourceMode.NONE��
     * 
     * SystemCapability.Window.SessionManager
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    sourceMode?: DisplaySourceMode;

    /**
     * ��ʾ�豸����Ļ��״��Ĭ��ֵΪRECTANGLE��
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    screenShape?: ScreenShape;

    /**
     * ��ʾ�豸���Ͻ������ԭ���y�����꣬ԭ��Ϊ�������Ͻǣ���λΪpx���ò���Ϊ������Ĭ��ֵΪ0����DisplaySourceModeΪMAIN��EXTENDʱ����ʵ��ֵ������Ĭ�Ϸ���Ĭ��ֵ0��
     * 
     * SystemCapability.Window.SessionManager
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    x?: long;

    /**
     * ��ʾ�豸���Ͻ������ԭ���y�����꣬ԭ��Ϊ�������Ͻǣ���λΪpx���ò���Ϊ������Ĭ��ֵΪ0����DisplaySourceModeΪMAIN��EXTENDʱ����ʵ��ֵ������Ĭ�Ϸ���Ĭ��ֵ0��
     * 
     * SystemCapability.Window.SessionManager
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    y?: long;

    /**
     * ��ʾ�豸֧�ֵ�����ˢ���ʣ���С��������ˢ����ֵΪ����������λΪHz��Ĭ��Ϊ�ա�
     * 
     * SystemCapability.Window.SessionManager
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    supportedRefreshRates?: Array<int>;

    /**
     * ��ȡ��Ļ��Բ����Ϣ����ĻԲ����Ϣ�ɲ�Ʒ���þ�����ֻ����������ĻԲ�ǰ뾶��������Ļ���ܷ���Բ����Ϣ�����򷵻ؿ����飬������ͬ�����ؿ����顣
     *
     * @returns { Array<RoundedCorner> } ���ص�ǰ��Ļ��Բ����Ϣ��
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    getRoundedCorner(): Array<RoundedCorner>;

    /**
     * ��ʾ�豸��ѡ��ɫ�ʿռ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    readonly preferredColorSpace?: colorSpaceManager.ColorSpace;
  }

  /**
   * ��ʾ�豸����Ļ��״ö�١�
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 18 dynamic
   * @since 23 static
   */
  enum ScreenShape {
    /**
     * ��ʾ�豸��Ļ��״ΪԲ�Ρ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    ROUND = 1,

    /**
     * ��ʾ�豸��Ļ��״Ϊ���Ρ�
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    RECTANGLE = 0
  }

  /**
   * ���Ŀ��۵��豸����ʾģʽ����ָ������ԭ��
   *
   * @param { FoldDisplayMode } mode - ���۵��豸����ʾģʽ��
   * @param { string } reason - ������ʾģʽ��ԭ�򡣲����ã���Ĭ��Ϊ���ַ�����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  function setFoldDisplayMode(mode: FoldDisplayMode, reason: string): void;

  /**
   * ��Ļ��ʾ���ݵ���ʾģʽö�١�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum DisplaySourceMode {
    /**
     * ��ʾ�豸��ǰΪ������
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    MAIN = 1,

    /**
     * ��ʾ�豸��ǰδʹ�á�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * ��ʾ�豸��ǰΪ��չ��ʾģʽ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    EXTEND = 3,

    /**
     * ��ʾ�豸��ǰΪ������ʾģʽ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    MIRROR = 2,

    /**
     * ��ʾ�豸��ǰΪ��Դ��ʾģʽ��
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    ALONE = 4
  }

  /**
   * ��ĻԲ������ö�١�
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 23 dynamic&static
   */
  enum CornerType {
    /**
     * ��Ļ���Ϸ���Բ�ǡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    TOP_LEFT = 0,

    /**
     * ��Ļ���Ϸ���Բ�ǡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    TOP_RIGHT = 1,

    /**
     * ��Ļ���·���Բ�ǡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    BOTTOM_RIGHT  = 2,

    /**
     * ��Ļ���·���Բ�ǡ�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    BOTTOM_LEFT  = 3
  }

  /**
   * ��ĻԲ�Ƕ��塣
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 23 dynamic&static
   */
  interface RoundedCorner {
    /**
     * Բ�����͡�
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly type: CornerType;

    /**
     * Բ��Բ�ĵ�����㡣
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly position: Position;

    /**
     * Բ�ǰ뾶����λΪpx��
     *
     * @type { int }
     * @readonly
     * @syscap  SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly radius: int;
  }
}

export default display;