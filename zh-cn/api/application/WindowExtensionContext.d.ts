/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

import { AsyncCallback } from '../@ohos.base';
import ExtensionContext from './ExtensionContext';
import Want from '../@ohos.application.Want';
import StartOptions from '../@ohos.app.ability.StartOptions';

/**
 * WindowExtensionContextģ����WindowExtensionAbility�������Ļ������̳���[ExtensionContext]{@link ExtensionContext:ExtensionContext}��
 * 
 * WindowExtensionContextģ���ṩ[WindowExtensionAbility]{@link ./../@ohos.application.WindowExtensionAbility}���е���������������
 * Ability��
 * 
 * > **˵����**
 * >
 * > - ��API version 21��ʼ�������Ƽ�ʹ��[UIExtensionContext]{@link UIExtensionContext:UIExtensionContext}��
 * >
 * > - ��ģ��ӿ�Ϊϵͳ�ӿڡ�
 * >
 * > - ��ģ��ӿڽ�����Stageģ����ʹ�á�
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamiconly
 * @deprecated since 21
 */
declare class WindowExtensionContext extends ExtensionContext {
  /**
   * ����Ability��ʹ��callback�첽�ص���
   * 
   * > **˵����**
   * >
   * > - ��API version 9��ʼ֧�֣���API version 21��ʼ�������Ƽ�ʹ��
   * > [UIExtensionContext.startability]{@link UIExtensionContext:UIExtensionContext#startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>)}
   * > ��
   *
   * @param { Want } want - ����Ability��want��Ϣ��
   * @param { StartOptions } options - ����Ability��Я���Ĳ�����
   * @param { AsyncCallback<void> } callback - callback��ʽ�������������
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 21
   */
  startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void;

  /**
   * ����Ability��ʹ��Promise�첽�ص���
   * 
   * > **˵����**
   * >
   * > - ��API version 9��ʼ֧�֣���API version 21��ʼ�������Ƽ�ʹ��
   * > [UIExtensionContext.startability]{@link UIExtensionContext:UIExtensionContext#startAbility(want: Want, options?: StartOptions)}
   * > ��
   *
   * @param { Want } want - Want���Ͳ�����������Ҫ������ability����Ϣ����Ability���ƣ�Bundle���Ƶȡ�
   * @param { StartOptions } [options] - ����Ability��Я���Ĳ�����
   * @returns { Promise<void> } �޷��ؽ����Promise����
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 21
   */
  startAbility(want: Want, options?: StartOptions): Promise<void>;
}

export default WindowExtensionContext;