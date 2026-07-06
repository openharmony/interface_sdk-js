/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * **@ohos.inputMethodList**模块是面向系统应用和输入法应用的UI控件模块，提供了输入法切换列表弹窗组件。
 * 
 * 本模块是一个声明式UI组件模块，提供`InputMethodListDialog`自定义弹窗组件，用于展示系统默认输入法子类型和第三方输入法应用列表，并可选地提供输入法模式切换入口（如单手模式、全屏模式等）。
 * 
 * 通过本模块提供的弹窗组件，用户可以在输入法列表中查看当前系统中已安装的所有输入法，并从默认输入法切换到其他输入法；对于系统预置输入法，还可在列表中展示模式选项（如单手模式、全屏模式），供用户切换输入法键盘的显示模式。
 * 
 * 当系统应用或输入法应用需要提供输入法切换入口时使用本模块。典型场景包括：系统设置应用中的输入法管理页面、输入法应用自身的设置界面、或其他需要让用户选择和切换输入法的系统级界面。本组件仅系统应用和输入法应用可调用，
 * `patternOptions`参数仅系统预置输入法支持。
 * 
 * 本模块与输入法框架其他模块的关系如下：
 * 
 * — [@ohos.inputMethod]{@link @ohos.inputMethod:inputMethod}：面向普通前台应用，提供输入法的控制与管理能力（如显示/隐藏软键盘、切换输入法等），可通过程序化接口
 * `switchInputMethod`切换输入法，适用于无需交互式选择界面的场景。
 * 
 * — [@ohos.inputMethodEngine]{@link @ohos.inputMethodEngine:inputMethodEngine}：面向输入法应用，提供创建软键盘窗口、插入/删除字符等输入法服务端能力。
 * 
 * — **@ohos.inputMethodList（本模块）**：面向系统应用和输入法应用，提供可视化的输入法切换列表弹窗控件，适用于需要交互式选择界面的场景。
 * 
 * 本模块包含以下关键组件和接口：
 * 
 * | Interface/Struct | 说明 |
 * |---|---|
 * | **InputMethodListDialog** | 输入法切换列表弹窗组件，使用`@CustomDialog`装饰器声明。展示输入法列表和可选的模式切换入口，是本模块的核心UI组件。需要传入`CustomDialogController`控制弹窗的打开与关闭，可选传入`PatternOptions`配置模式切换功能。 |
 * | **PatternOptions** | 输入法模式选项配置接口，定义模式选项的资源数组、默认选中索引和模式切换回调。仅系统预置输入法支持传入此参数。 |
 * | **Pattern** | 单个输入法模式的图标定义接口，包含默认图标和选中状态图标两个资源属性。 |
 * 
 * 使用`InputMethodListDialog`需要多个API组合配合：创建`CustomDialogController` -> 配置`PatternOptions`（可选） -> 在
 * `CustomDialogController`的builder中构建`InputMethodListDialog` -> 通过`CustomDialogController.open()`打开弹窗。
 * 
 * ###### 子组件
 * 
 * 无
 * 
 * ###### 属性
 * 
 * 不支持[通用属性]{@link ./@internal/component/ets/common}
 * 
 * ######  事件
 * 
 * 不支持[通用事件]{@link ./@internal/component/ets/common}
 *
 * @file 输入法切换列表控件
 * @kit IMEKit
 */

 /*** if arkts static */
 import { CustomDialogController, CustomDialog } from '@ohos.arkui.component';
 import { Resource } from './global/resource';
 /*** endif */

/**
 * 输入法模式选项配置，用于定义键盘模式的切换选项。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
export interface PatternOptions {
  /**
   * 默认选择的模式索引，对应patterns数组中的索引值。
   * 
   * **使用场景：** 当默认输入法需要预设一个初始选中的键盘模式时使用此参数。
   * 
   * **使用后效果：** 设置后，输入法列表弹窗打开时会默认选中该索引对应的模式选项。
   * 
   * **取值范围：** [0, patterns.length - 1]。超出此范围时不生效，弹窗打开时不选中任何模式选项。
   * 
   * **默认值：** 不设置时，弹窗打开时不选中任何模式选项。
   * 
   * **说明：** 该索引值必须在patterns数组的有效范围内，否则设置不生效。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  defaultSelected?: int;
  /**
   * 模式选项资源数组，每个Pattern定义一个键盘模式的图标和选中状态图标。
   * 
   * **使用场景：** 当默认输入法需要提供多种键盘模式（如单手模式、全屏模式等）供用户选择时，需配置此参数。
   * 
   * **使用后效果：** 设置后，输入法切换列表弹窗中会在默认输入法区域展示该数组中定义的所有模式选项供用户选择。
   * 
   * **说明：** patterns数组中的每个Pattern的icon和selectedIcon均需为有效的[Resource]{@link Resource}资源引用；建议至少配置2个模式选项以提供有意义的选择功能。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  patterns: Array<Pattern>;
  /**
   * 模式选项改变时的回调函数。
   * 
   * **使用场景：** 当需要在用户切换键盘模式时执行相应逻辑（如更新键盘布局、保存用户偏好等）时，需设置此回调。
   * 
   * **使用后效果：** 当用户在输入法切换列表弹窗中点击某个模式选项时，系统将调用此回调并传入选中模式在patterns数组中的索引值。
   * 
   * **说明：** 回调参数index为选中模式在patterns数组中的索引值，与defaultSelected的取值范围一致。回调中可根据index值更新defaultSelected，以保持下次打开弹窗时选中状态与用户选择一致。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  action: (index: int) => void;
}

/**
 * 输入法模式选项的图标资源定义，用于配置键盘模式在弹窗中的视觉表现。仅当前输入法（即系统预置输入法）可使用。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
export interface Pattern {
  /**
   * 输入法模式选项的默认（未选中）状态图标资源。
   * 
   * **使用场景：** 用于标识每个键盘模式在未选中时的视觉表现形式，用户在弹窗中可据此识别不同的模式选项。
   * 
   * **使用后效果：** 设置后，弹窗中该模式选项在未选中状态时显示此图标。
   * 
   * **说明：** 需使用Resource类型资源引用（如$r('app.media.xxx')），确保工程resource目录中已添加对应的图标资源文件。不支持string和PixelMap类型的图片资源。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  icon: Resource;
  /**
   * 输入法模式选项的选中状态图标资源。
   * 
   * **使用场景：** 用于标识每个键盘模式在选中时的视觉表现形式，与icon形成选中/未选中的视觉区分，帮助用户识别当前选中的模式。
   * 
   * **使用后效果：** 设置后，弹窗中该模式选项在选中状态时显示此图标。
   * 
   * **相关参数间的配合/制约关系：** selectedIcon应与icon在视觉风格上保持一致，仅在选中状态标识上有所区别（如增加高亮、边框等），以便用户识别当前选中的模式。每个Pattern中的icon和selectedIcon
   * 必须同时设置，缺一不可。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  selectedIcon: Resource;
}

/**
 * InputMethodListDialog({controller: CustomDialogController, patternOptions?: PatternOptions})
 * 
 * 输入法切换列表弹窗控件。以弹窗形式展示当前系统中已安装的输入法应用列表，支持用户在输入法之间进行切换；对于默认输入法，还提供键盘模式（如单手模式、全屏模式等）的切换入口。
 * 
 * **使用场景：** 当系统应用或输入法应用需要为用户提供可视化的输入法选择和切换功能时使用此控件。例如，在系统设置应用中允许用户选择不同输入法，或在输入法应用中允许用户切换到其他输入法或切换当前输入法的键盘模式。
 * 
 * **使用后效果：** 调用此控件后，将弹出输入法切换列表弹窗。用户在弹窗中选择输入法后，系统将切换到指定的输入法；若用户选择了默认输入法的模式选项，系统将按指定模式显示键盘布局。
 * 
 * **相似接口差异点及选取原则：** 与[inputMethod.switchInputMethod]{@link @ohos.inputMethod:inputMethod.switchInputMethod}接口相比，本控件提供了可
 * 视化的输入法选择界面，适用于需要交互式选择界面的场景；switchInputMethod接口适用于程序化切换输入法的场景，无需用户手动选择。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 11 dynamic
 * @since 23 static
 */
@CustomDialog
export declare struct InputMethodListDialog {
  /**
   * 设置控制器。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  controller: CustomDialogController;
  /**
   * 设置图案选项。当不是默认输入法时，此参数可省略。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  patternOptions?: PatternOptions;

  /**
   * 构建组件的方法。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}