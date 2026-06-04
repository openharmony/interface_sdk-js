/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import { Callback } from './@ohos.base';
import window from './@ohos.window';
import uiExtension from './@ohos.arkui.uiExtension';
/**
 * ���������н��̸��������UIExtensionComponent�����Ϊ�ṩ��Ӧ���ṩ����Ӧ�õĴ�����Ϣ�������������Ϣ��
 * 
 * > **˵��**
 * >
 * > �����˽ӿڲ����������ܣ���ع����ڽӿ�[uiExtension]{@link @ohos.arkui.uiExtension:uiExtension}���ṩ��
 * >
 * > ��API version 11��ʼ֧�֡������汾�����������ݣ�������ϽǱ굥����Ǹ����ݵ���ʼ�汾��
 * >
 * > ��ģ��ӿ�Ϊϵͳ�ӿڡ�
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace uiExtensionHost {
  /**
   * Transition Controller
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  interface UIExtensionHostWindowProxy {
    /**
     * ��ȡ����Ӧ�ô������ݹ�ܵ�������ϵͳ��������������������������������������������������ص�ʱ����Ҫ�����������ݱ��õ�����
     *
     * @param { window.AvoidAreaType } type - ��ʾ���������͡�
     * @returns { window.AvoidArea } Avoidance area for the content of the host window.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    getWindowAvoidArea(type: window.AvoidAreaType): window.AvoidArea;

    /**
     * ע��ϵͳ�������仯�ļ�����
     *
     * @param { 'avoidAreaChange' } type - �������¼����ͣ��̶�Ϊ'avoidAreaChange'����ϵͳ�������仯�¼���
     * @param { Callback<{ type: window.AvoidAreaType, area: window.AvoidArea }> } callback - �ص�������������ڽ��յ�ǰ����������Ϣ�����У�"
     *     type"��ʾ���ڱ��������ͣ�"area"��ʾ�������ݱ�������
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listener has been registered.
     *     3. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    on(type: 'avoidAreaChange', callback: Callback<{ type: window.AvoidAreaType, area: window.AvoidArea }>): void;

    /**
     * Register the callback of avoidAreaChange
     *
     * @param { Callback<uiExtension.AvoidAreaInfo> } callback
          *     - Callback used to return the area.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listener has been registered.
     *     3. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onAvoidAreaChange(callback: Callback<uiExtension.AvoidAreaInfo>): void;

    /**
     * ע��ϵͳ�������仯�ļ�����
     *
     * @param { 'avoidAreaChange' } type - ע�����¼����ͣ��̶�Ϊ'avoidAreaChange'����ϵͳ�������仯�¼���
     * @param { Callback<{ type: window.AvoidAreaType, area: window.AvoidArea }> } callback - �ص��������������ò�������رոü��������δ�����
     *     ������ر�����ϵͳ�������仯�ļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listening type is not registered.
     *     3. The listener has not been registered.
     *     4. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    off(type: 'avoidAreaChange', callback?: Callback<{ type: window.AvoidAreaType, area: window.AvoidArea }>): void;

    /**
     * Unregister the callback of avoidAreaChange
     *
     * @param { Callback<uiExtension.AvoidAreaInfo> }  [callback]
          *     - Unregister the callback function. If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listening type is not registered.
     *     3. The listener has not been registered.
     *     4. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offAvoidAreaChange(callback?: Callback<uiExtension.AvoidAreaInfo>): void;

    /**
     * ע�������EmbeddedComponent��UIExtensionComponent���ߴ�仯�ļ�����
     *
     * @param { 'windowSizeChange' } type - �������¼����ͣ��̶�Ϊ'windowSizeChange'���������EmbeddedComponent��UIExtensionComponent���ߴ��
     *     ���¼���
     * @param { Callback<window.Size> } callback - �ص�������������ڽ��յ�ǰ�����EmbeddedComponent��UIExtensionComponent���ĳߴ硣
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listener has been registered.
     *     3. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    on(type: 'windowSizeChange', callback: Callback<window.Size>): void;

    /**
     * Subscribes to the component (EmbeddedComponent or UIExtensionComponent) size change event.
     *
     * @param { Callback<window.Size> } callback - Callback used to return the window size.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listener has been registered.
     *     3. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onWindowSizeChange(callback: Callback<window.Size>): void;

    /**
     * ע�������EmbeddedComponent��UIExtensionComponent���ߴ�仯�ļ�����
     *
     * @param { 'windowSizeChange' } type - ע�����¼����ͣ��̶�ֵ��'windowSizeChange'���������EmbeddedComponent��UIExtensionComponent���ߴ�
     *     �仯�¼���
     * @param { Callback<window.Size> } [callback] - �ص����������ص�ǰ�������EmbeddedComponent��UIExtensionComponent���ߴ硣�������ò�������رո�
     *     ���������δ�����������ر������EmbeddedComponent��UIExtensionComponent���ߴ�仯�ļ�����
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listening type is not registered.
     *     3. The listener has not been registered.
     *     4. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    off(type: 'windowSizeChange', callback?: Callback<window.Size>): void;

    /**
     * Unsubscribes from the component (EmbeddedComponent or UIExtensionComponent) size change event.
     *
     * @param { Callback<window.Size> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The listening type is not supported.
     *     2. The listening type is not registered.
     *     3. The listener has not been registered.
     *     4. The UIExtension window proxy is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offWindowSizeChange(callback?: Callback<window.Size>): void;

    /**
     * UIExtensionComponent����Լ��������ڵ���Ϣ��
     * 
     * **Լ����** ���ڼܹ�Լ������������
     * [onSessionCreate]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility.onSessionCreate}�׶�ͬ����ȡ��ֵ���������յ�
     * [on('windowSizeChange')]{@link @ohos.uiExtensionHost:uiExtensionHost.UIExtensionHostWindowProxy.on(type: 'windowSizeChange', callback: Callback<window.Size>)}
     * �ص�֮���ȡ��
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    properties: UIExtensionHostWindowProxyProperties;

    /**
     * �����Ƿ����ز���ȫ���ڣ�ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > - ����ȫ������ָ�����ڵ�[EmbeddedComponent]{@link ./@internal/component/ets/embedded_component}����
     * > [UIExtensionComponent]{@link ./@internal/component/ets/ui_extension_component}������Ĵ��ڣ���ȫ���������������Ӵ��ں�����������Dialog����
     * > ��������ϵͳӦ�ô������������ʹ��ڣ���
     * >
     * > - ��EmbeddedComponent����UIExtensionComponent�������������ʾ���в�����ʾ����ʱ������ѡ�����ز���ȫ���ڣ��������в�����ʾ���ݲ��ᱻ�ڵ�����EmbeddedComponent����
     * > UIExtensionComponent���������ʾ������ʱ������ȫ���ڻ�������ʾ��
     * >
     * > - ���PC/2in1�豸��������hideNonSecureWindows(true)ʱ������ȫ�����е�ȫ�����������ᱻ���ء�
     *
     * @permission ohos.permission.ALLOW_SHOW_NON_SECURE_WINDOWS [since 12]
     * @param { boolean } shouldHide - ָʾ�Ƿ����ز���ȫ���ڣ�true��ʾ���أ�false��ʾ�����ء�
     * @returns { Promise<void> } �޷��ؽ����Promise���󡣡�
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. Permission denied. Interface caller does not have permission "ohos.permission.ALLOW_SHOW_NON_SECURE_WINDOWS".
     *     2. The UIExtension window proxy is abnormal. [since 12]
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 12]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    hideNonSecureWindows(shouldHide: boolean): Promise<void>;

    /**
     * ������UIExtensionHostWindowProxyʵ���µ��Ӵ��ڣ�ʹ��Promise�첽�ص���
     *
     * @param { string } name - �Ӵ��ڵ����֡�
     * @param { window.SubWindowOptions } subWindowOptions - �Ӵ��ڲ�����
     * @returns { Promise<window.Window> } Promise used to return the subwindow created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible causes:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     *     3. The subWindow has been created and can not be created again.
     *     4. It is not allowed to create non-secure window when secure extension exists.
     * @throws { BusinessError } 1300035 - Creating a subwindow is not allowed in the current context. Possible cause:
     *     1. An AgentUIExtensionAbility cannot create a subwindow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    createSubWindowWithOptions(name: string, subWindowOptions: window.SubWindowOptions): Promise<window.Window>;

    /**
     * ������UIExtensionHostWindowProxyʵ���µ��Ӵ��ڣ���ͨ������followCreatorLifecycle�������Ӵ��Ƿ���������EmbeddedComponent��
     * UIExtensionComponent�����������ڣ�ʹ��Promise�첽�ص���
     *
     * @param { string } name - �Ӵ��ڵ����֡�
     * @param { window.SubWindowOptions } subWindowConfig - �Ӵ��ڲ�����
     * @param { boolean } followCreatorLifecycle - �Ӵ����������Ƿ�������EmbeddedComponent��UIExtensionComponent������ͬ����true��ʾ���������ʱ��
     *     �Ӵ����أ��������ʾʱ�Ӵ���ʾ��false��ʾ�Ӵ������������������仯��
     * @returns { Promise<window.Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible causes:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     *     3. The subWindow has been created and can not be created again.
     *     4. It is not allowed to create non-secure window when secure extension exists.
     * @throws { BusinessError } 1300035 - Creating a subwindow is not allowed in the current context. Possible cause:
     *     1. An AgentUIExtensionAbility cannot create a subwindow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    createSubWindowWithOptions(name: string, subWindowConfig: window.SubWindowOptions,
        followCreatorLifecycle: boolean): Promise<window.Window>;

    /**
     * Ϊ��ǰ�������ӻ�ɾ����ȫˮӡ��־��ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > ���Ӱ�ȫˮӡ��־�󣬴�����ǰ̨ʱ�Ὣ��ǰȫ��Ļ����ˮӡ��ȫ�����������������ȳ�����ֻҪ�������˰�ȫˮӡ��־�Ĵ�����ǰ̨���ͻ���ʾȫ��ˮӡ��
     *
     * @param { boolean } enable - �Ƿ�Դ������ӱ�־λ��true��ʾ���ӣ�false��ʾɾ����
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 1300002 - The UIExtension window proxy is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300008 - The display device is abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    setWaterMarkFlag(enable: boolean): Promise<void>;

    /**
     * ����UIExtension����ڷ�ϵͳ��ͼʱ����˽���ݱ������أ�ʹ��Promise�첽�ص���
     * 
     * > **˵����**
     * >
     * > ������ͼ��˽���ݱ�����ʹ�ô��ڽ�ͼ[window.snapshot](docroot://reference/apis-arkui/arkts-apis-window-Window.md#snapshot9)���������ͼ
     * > [UIContext.getComponentSnapshot](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getcomponentsnapshot12)
     * > ���޷���ȡ����ǰ��������ݣ�������������´������Ӵ�����
     *
     * @param { boolean } shouldHide - �Ƿ�����ͼ��˽������true��ʾ������false��ʾ��������
     * @returns { Promise<void> } �޷��ؽ����Promise����
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameters types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - Abnormal state. Possible causes:
     *     1. The UIExtension window proxy is abnormal.
     *     2. Not the UIExtensionAbility process calling.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 13 dynamic
     * @since 23 static
     */
    hidePrivacyContentForHost(shouldHide: boolean): Promise<void>;
  }

  /**
   * ���ڱ�ʾ����Ӧ�ô��ں�UIExtensionComponent�������Ϣ��
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  interface UIExtensionHostWindowProxyProperties {
    /**
     * UIExtensionComponent��λ�úͿ��ߡ�
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    uiExtensionHostWindowProxyRect: window.Rect;
  }
}

export default uiExtensionHost;