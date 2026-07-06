/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * @file 输入法子类型
 * @kit IMEKit
 */

/**
 * **@ohos.InputMethodSubtype**模块提供输入法子类型的属性数据定义，支持描述输入法在不同语言或模式下的子类型信息。
 * 
 * 本模块是输入法框架的子类型数据模块，定义了`InputMethodSubtype`接口，用于描述输入法的一种具体输入模式或语言——如中文键盘、英文键盘、大写模式键盘等，每个子类型代表输入法在特定语言或模式下的形态。
 * 
 * 本模块提供输入法子类型的属性描述能力。通过`InputMethodSubtype`可获取子类型的标识（`id`、`name`）、语言和区域（`locale`、`language`）、显示标签（`label`）、模式（`mode`：大写
 * /小写）、图标等属性，用于输入法子类型的识别、展示和切换。
 * 
 * 当需要查询、展示或切换输入法的不同语言/模式子类型时使用本模块。典型场景包括：系统设置应用展示输入法子类型列表供用户选择、输入法应用根据子类型信息切换语言或模式、应用获取当前输入法子类型信息等。
 * 
 * `InputMethodSubtype`是纯数据定义模块，其对象由系统框架创建和返回，开发者不可自行构造。典型跨模块使用流程：
 * 
 * 1. **编辑框应用侧**（`@ohos.inputMethod`模块）：通过`InputMethodSetting.listInputMethodSubtype()`查询输入法子类型列表，通过`inputMethod.switchCurrentInputMethodSubtype()`切换到指定子类型。
 * 2. **输入法应用侧**（`@ohos.inputMethodEngine`模块）：通过`InputMethodAbility.on('setSubtype')`监听子类型切换事件，回调参数为`InputMethodSubtype`对象，据此调整键盘布局和语言。
 * 
 * 本模块的核心开放能力由以下关键接口承载：
 * 
 * 本模块为纯数据定义模块，`InputMethodSubtype`作为子类型描述数据需与其他模块的API组合使用。典型组合场景为：在`@ohos.inputMethod`模块中，通过`InputMethodSetting`查询和切换子类
 * 型；在`@ohos.inputMethodEngine`模块中，通过`InputMethodAbility`监听子类型切换事件。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 9 dynamic
 * @since 23 static
 */
export default interface InputMethodSubtype {
  /**
   * 输入法子类型的标签。用于在UI界面展示子类型的名称，如"中文（简体）"、"English"等。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  readonly label?: string;

  /**
   * 输入法子类型的标签资源号。用于通过资源ID加载标签文本，支持多语言场景下的标签国际化显示。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  readonly labelId?: double;

  /**
   * 输入法子类型所属应用的包名。与输入法应用在module.json5中配置的bundleName保持一致，用于标识该子类型属于哪个输入法应用。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * 输入法子类型的id。与输入法应用在module.json5中配置的subtype id保持一致，用于在同输入法应用内唯一标识一个子类型。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  readonly id: string;

  /**
   * 输入法子类型的模式，包括upper（大写）和lower（小写）。用于描述键盘的大小写状态模式。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  readonly mode?: 'upper' | 'lower';

  /**
   * 输入法子类型的区域。遵循ICU Locale格式，如'zh-CN'表示中文（简体，中国）、'en-US'表示英文（美国）。用于标识子类型的语言和地区。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  readonly locale: string;

  /**
   * 输入法子类型的语言，如'zh'（中文）、'en'（英文）。用于标识子类型的语言，是locale的子集。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  readonly language: string;

  /**
   * 输入法子类型的图标，可以通过iconId查询获取。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  readonly icon?: string;

  /**
   * 输入法子类型的图标id。用于通过资源ID加载子类型图标。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  readonly iconId?: double;

  /**
   * 输入法子类型的其他信息。
   *
   * @type { object } [since 9 - 9]
   * @type { ?object } [since 10]
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  extra?: object;
}