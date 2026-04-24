/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * Want是对象间信息传递的载体，可以用于应用组件间的信息传递。Want的使用场景之一是作为startAbility的参数，其包含了指定的启动目标，以及启动时需携带的相关数据，如bundleName和abilityName字段分别指明目
 * 标Ability所在应用Bundle名称以及对应包内的Ability名称。当Ability A需要启动Ability B并传入一些数据时，可使用Want作为载体将这些数据传递给Ability B。
 *
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.app.ability.Want/Want
 */
export default class Want {
  /**
   * 表示运行指定Ability的设备ID。如果未设置该字段，则表明指定本设备。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want/Want#deviceId
   */
  deviceId?: string;

  /**
   * 表示Bundle名称。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want/Want#bundleName
   */
  bundleName?: string;

  /**
   * 表示待启动的Ability名称。如果在Want中该字段同时指定了BundleName和AbilityName，则Want可以直接匹配到指定的Ability。AbilityName需要在一个应用的范围内保证唯一。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want/Want#abilityName
   */
  abilityName?: string;

  /**
   * 表示Uri描述。如果在Want中指定了Uri，则Want将匹配指定的Uri信息，包括scheme、schemeSpecificPart、authority和path信息。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want/Want#uri
   */
  uri?: string;

  /**
   * 表示MIME type类型描述，打开文件的类型，主要用于文管打开文件。比如：'text/xml' 、 'image/*'等，MIME定义参考：https://www.iana.org/assignments/media-types
   * /media-types.xhtml?utm_source=ld246.com。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want/Want#type
   */
  type?: string;

  /**
   * 表示处理Want的方式。默认传数字，具体参考：[flags说明]{@link @ohos.ability.wantConstant:wantConstant.Flags}。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want/Want#flags
   */
  flags?: number;

  /**
   * 表示要执行的通用操作（如：查看、分享、应用详情）。在隐式Want中，您可以定义该字段，配合uri或parameters来表示对数据要执行的操作。具体参考：
   * [action说明]{@link @ohos.ability.wantConstant:wantConstant.Action}。隐式Want定义及匹配规则参考：
   * [显式Want与隐式Want匹配规则](docroot://application-models/explicit-implicit-want-mappings.md)。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want/Want#action
   */
  action?: string;

  /**
   * 表示WantParams描述，由开发者自行决定传入的键值对。默认会携带以下key值：
   *
   * ohos.aafwk.param.callerPid 表示拉起方的pid。
   *
   * ohos.aafwk.param.callerToken 表示拉起方的token。
   *
   * ohos.aafwk.param.callerUid 表示[bundleInfo](js-apis-bundle-BundleInfo.md#bundleinfodeprecated)中的uid，应用包里应用程序的uid。
   *
   * - component.startup.newRules：表示是否启用新的管控规则。
   * - moduleName：表示拉起方的模块名，该字段的值即使定义成其他字符串，在传递到另一端时会被修改为正确的值。
   * - ohos.dlp.params.sandbox：表示dlp文件才会有。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want/Want#parameters
   */
  parameters?: { [key: string]: any };

  /**
   * 表示目标Ability额外的类别信息（如：浏览器、视频播放器）。在隐式Want中是对action字段的补充。在隐式Want中，您可以定义该字段，来过滤匹配Ability类型。具体参考：
   * [entity说明]{@link @ohos.ability.wantConstant:wantConstant.Entity}。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want/Want#entities
   */
  entities?: Array<string>;
}