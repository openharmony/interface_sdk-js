/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit DriverDevelopmentKit
 */

import type rpc from './@ohos.rpc';
import type Want from './@ohos.app.ability.Want';
import _DriverExtensionContext from './application/DriverExtensionContext';

/**
 * DriverExtensionAbility锟斤拷锟斤拷锟斤拷锟侥伙拷锟斤拷锟斤拷
 *
 * @typedef { _DriverExtensionContext }
 * @syscap SystemCapability.Driver.ExternalDevice
 * @since 10 dynamic
 * @since 23 static
 */
export type DriverExtensionContext = _DriverExtensionContext;

/**
 * DriverExtensionAbility模锟斤拷锟结供锟斤拷锟斤拷锟斤拷锟斤拷锟秸癸拷锟斤拷锟斤拷锟斤拷峁╋拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷佟锟斤拷锟斤拷印锟斤拷峡锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷诨氐锟斤拷锟�
 *
 * @syscap SystemCapability.Driver.ExternalDevice
 * @StageModelOnly
 * @since 10 dynamic
 * @since 23 static
 */
declare class DriverExtensionAbility {
  /**
   * DriverExtension锟斤拷锟斤拷锟斤拷锟侥伙拷锟斤拷锟斤拷锟教筹拷锟斤拷ExtensionContext锟斤拷
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  context: DriverExtensionContext;

  /**
   * Extension锟斤拷锟斤拷锟斤拷锟节回碉拷锟斤拷锟节达拷锟斤拷时锟截碉拷锟斤拷执锟叫筹拷始锟斤拷业锟斤拷锟竭硷拷锟斤拷锟斤拷锟斤拷
   *
   * @param { Want } want - 锟斤拷前Extension锟斤拷氐锟絎ant锟斤拷锟斤拷锟斤拷息锟斤拷锟斤拷锟斤拷ability锟斤拷锟狡★拷bundle锟斤拷锟狡等★拷
   * @syscap SystemCapability.Driver.ExternalDevice
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  onInit(want: Want): void;

  /**
   * Extension锟斤拷锟斤拷锟斤拷锟节回碉拷锟斤拷锟斤拷锟斤拷锟斤拷时锟截碉拷锟斤拷执锟斤拷锟斤拷源锟斤拷锟斤拷锟饺诧拷锟斤拷锟斤拷
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  onRelease(): void;

  /**
   * Extension锟斤拷锟斤拷锟斤拷锟节回碉拷锟斤拷锟斤拷锟斤拷[onCreate]{@link @ohos.app.ability.AbilityStage:AbilityStage#onCreate}之锟斤拷氐锟斤拷锟斤拷锟斤拷锟揭伙拷锟�
   * [RemoteObject]{@link @ohos.rpc:rpc.RemoteObject}锟斤拷锟斤拷锟斤拷锟节客伙拷锟剿和凤拷锟斤拷私锟斤拷锟酵�锟脚★拷
   *
   * @param { Want } want - 锟斤拷前Extension锟斤拷氐锟絎ant锟斤拷锟斤拷锟斤拷息锟斤拷锟斤拷锟斤拷ability锟斤拷锟狡★拷bundle锟斤拷锟狡等★拷
   * @returns { rpc.RemoteObject | Promise<rpc.RemoteObject> } **RemoteObject** object used for communication between
   *     the server and client, or promise used to return the value.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  onConnect(want: Want): rpc.RemoteObject | Promise<rpc.RemoteObject>;

  /**
   * Extension锟斤拷锟斤拷锟斤拷锟斤拷锟节回碉拷锟斤拷锟酵伙拷锟斤拷执锟叫断匡拷锟斤拷锟接凤拷锟斤拷时锟截碉拷锟斤拷
   *
   * @param { Want } want - 锟斤拷前Extension锟斤拷氐锟絎ant锟斤拷锟斤拷锟斤拷息锟斤拷锟斤拷锟斤拷ability锟斤拷锟狡★拷bundle锟斤拷锟狡等★拷
   * @returns { void | Promise<void> } Empty value, or promise used to return the value.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @StageModelOnly
   * @since 10
   */
  onDisconnect(want: Want): void | Promise<void>;

  /**
   * Extension锟斤拷锟斤拷锟斤拷锟斤拷锟节回碉拷锟斤拷锟酵伙拷锟斤拷执锟叫断匡拷锟斤拷锟接凤拷锟斤拷时锟截碉拷锟斤拷
   * @param { Want } want - Indicates disconnection information about the driver extension.
   * @returns { undefined | Promise<void> }
   * @syscap SystemCapability.Driver.ExternalDevice
   * @stagemodelonly
   * @since 23 static
   */
  onDisconnect(want: Want): undefined | Promise<void>;

  /**
   * 转锟斤拷锟酵伙拷锟斤拷锟斤拷息时锟斤拷锟矫ｏ拷锟斤拷锟介不要转锟斤拷锟斤拷锟斤拷锟斤拷息锟斤拷
   *
   * @param { Array<string> } params - 锟斤拷示锟斤拷锟斤拷锟斤拷式锟侥诧拷锟斤拷锟斤拷
   * @returns { Array<string> } 一锟斤拷string锟斤拷锟酵碉拷锟斤拷锟介，锟斤拷锟斤拷转锟斤拷突锟斤拷锟斤拷锟较�锟斤拷
   * @syscap SystemCapability.Driver.ExternalDevice
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  onDump(params: Array<string>): Array<string>;
}

/** 
 * class of driver extension ability. 
 * @syscap SystemCapability.Driver.ExternalDevice 
 * @stagemodelonly 
 * @since 10 dynamic 
 * @since 23 static 
 */
export default DriverExtensionAbility;