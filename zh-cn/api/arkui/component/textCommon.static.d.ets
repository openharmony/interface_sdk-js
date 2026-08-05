/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
  * @kit ArkUI
 */

import { ResourceColor, ResourceStr, Length, LengthMetrics } from './units';

import { DecorationStyleInterface, MutableStyledString, StyledString } from './styledString';
import { SelectionOptions, Callback } from './common';

import { TextDecorationType, TextDecorationStyle } from './enums';

import { AttributeModifier, CommonMethod, LinearGradientOptions, RadialGradientOptions } from './common';
import text from '../../@ohos.graphics.text';

import { InputMethodExtraConfig } from '../../@ohos.inputMethod.ExtraConfig';

/**
 * 文本识别实体类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextDataDetectorType {
  /**
   * 电话号码
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PHONE_NUMBER = 0,
  /**
   * 链接
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  URL = 1,
  /**
   * 邮箱
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EMAIL = 2,
  /**
   * 地址
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ADDRESS = 3,
  /**
   * 日期时间
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DATE_TIME = 4,
}

/**
 * 文本垂直对齐的方式。默认值BASELINE，沿基线对齐。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum TextVerticalAlign {
  /**
   * 对齐文本基线。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  BASELINE = 0,

  /**
   * 对齐文本底部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  BOTTOM = 1,

  /**
   * 垂直居中对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  CENTER = 2,

  /**
   * 对齐文本顶部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  TOP = 3
}

/**
 * 文本内容区垂直对齐方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum TextContentAlign {
  /**
   * 内容区顶部对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  TOP = 0,
  /**
   * 垂直居中对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  CENTER = 1,
  /**
   * 对齐文本底部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  BOTTOM = 2
}

/**
 * 输入控件绑定输入法客户端类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface IMEClient {
  /**
   * 当前输入控件的组件UniqueId。取值范围大于等于0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  nodeId: long;

  /**
   * 设置输入法扩展信息。
   *
   * @param { InputMethodExtraConfig } config - 输入法扩展信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  setExtraConfig(config: InputMethodExtraConfig): void;
}

/**
 * 文本布局选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface TextLayoutOptions {
  /**
   * 设置被计算文本布局宽度。若不设置则宽度为单行布局所占最大宽度值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  constraintWidth?: LengthMetrics;
}

/**
 * 文本识别配置项。该配置只支持[Text](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md)组件和
 * [RichEditor](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-richeditor.md)组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextDataDetectorConfig {
  /**
   * 设置文本识别的实体类型。设置types为null或者undefined或者[]时，识别所有类型的实体，否则只识别指定类型的实体。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  types: TextDataDetectorType[] | undefined | null;
  /**
   * 文本识别成功后，触发onDetectResultUpdate回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDetectResultUpdate?: Callback<string>;
  /**
   * 设置文本识别成功后的实体颜色。
   *
   * 默认值：'#ff0a59f7'
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: ResourceColor;
  /**
   * 设置文本识别成功后的实体装饰线样式。
   *
   * 默认值：
   *
   * {
   *
   *  type: TextDecorationType.Underline,
   *
   *  color: 与实体颜色一致,
   *
   *  style: TextDecorationStyle.SOLID
   *
   * }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  decoration?: DecorationStyleInterface;

  /**
   * 设置是否开启文本识别长按显示预览菜单。true表示开启，false表示未开启。
   *
   * 默认值：false
   *
   * 当[copyOptions](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-richeditor.md#copyoptions)设置为None时，若
   * enablePreviewMenu设置为true，长按AI实体也不能显示预览菜单。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  enablePreviewMenu?: boolean;
}

/**
 * 文本范围。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextRange {
  /**
   * 起始索引，从0开始。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start?: int;
  /**
   * 结束索引，从0开始。
   *
   * @default text length
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  end?: int;
}
/**
 * 插入内容对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface InsertValue {
  /**
   * 插入的值的位置信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  insertOffset: int;
  /**
   * 插入的值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  insertValue: string;
}
/**
 * 定义删除文本方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextDeleteDirection {
  /**
   * 向后删除。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BACKWARD = 0,
  /**
   * 向前删除。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FORWARD = 1
}
/**
 * 定义文本上下角标样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum SuperscriptStyle {
  /**
   * 普通文本样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  NORMAL = 0,
  /**
   * 上标文本样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  SUPERSCRIPT = 1,
  /**
   * 下标文本样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  SUBSCRIPT = 2
}
/**
 * 菜单类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MenuType {
  /**
   * 文本选择菜单。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SELECTION_MENU = 0,
  /**
   * 图片预览菜单。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PREVIEW_MENU = 1
}

/**
 * 保存文本内容及样式的载体，支持排版与绘制操作。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare type Paragraph = text.Paragraph;

/**
 * 可变字体的属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type FontVariation = text.FontVariation;

/**
 * 自动大小写模式类型，只提供接口能力，具体实现以输入法应用为主。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AutoCapitalizationMode {
  /**
   * 默认状态无效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,
  /**
   * 按单词自动大小写，即输入单词的首个字符大写，其他字符小写。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  WORDS = 1,
  /**
   * 按句子自动大小写，即输入句子的首个字符大写，其他字符小写。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SENTENCES = 2,
  /**
   * 按全字符自动大小写。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ALL_CHARACTERS = 3
}
/**
 * 配置TextArea组件，文本超长时的显示效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MaxLinesOptions {
  /**
   * `overflowMode`可配置[TextArea](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textarea.md)组件的非内联模式。当超出设置的
   * `maxLines`最大行数时，会启用滚动效果。需同时配置
   * [textOverflow](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textarea.md#textoverflow12)，且仅当
   * `textOverflow`为None或Clip时，`MaxLinesMode`才能生效。默认情况下，`MaxLinesMode`的值为Clip，超出`maxLines`后文本会被截断。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  overflowMode?: MaxLinesMode;
}
/**
 * TextArea组件在文本超长时显示效果。默认值为CLIP，按最大行截断显示。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MaxLinesMode {
  /**
   * 文本超长时按最大行截断显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CLIP = 0,

  /**
   * 文本超长时可滚动显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SCROLL = 1
}
/**
 * 组件内容变化原因。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 24 static
 */
export declare enum TextChangeReason {
  /**
   * 未知原因。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  UNKNOWN = 0,

  /**
   * 用户输入。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  INPUT = 1,

  /**
   * 粘贴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  PASTE = 2,

  /**
   * 剪切。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  CUT = 3,

  /**
   * 拖拽。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  DRAG = 4,

  /**
   * 自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  AUTO_FILL = 5,

  /**
   * AI帮写。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  AI_WRITE = 6,

  /**
   * 重做。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  REDO = 7,

  /**
   * 撤销。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  UNDO = 8,

  /**
   * 开发者调用组件接口。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  CONTROLLER = 9,

  /**
   * 无障碍接口。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  ACCESSIBILITY = 10,

  /**
   * 跨端拍照。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  COLLABORATION = 11,

  /**
   * 手写笔。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  STYLUS = 12
}
/**
 * 键盘渐变模糊效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 24 static
 */
export declare enum KeyboardGradientMode {
  /**
   * 键盘无模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  NONE = 0,

  /**
   * 键盘设置线性渐变模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  LINEAR_GRADIENT = 1
}

/**
 * 键盘流光效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 24 static
 */
export declare enum KeyboardFluidLightMode {
  /**
   * 键盘无流光效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  NONE = 0,

  /**
   * 键盘设置流光效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  BACKGROUND_FLUID_LIGHT = 1
}

/**
 * 键盘外观样式属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 24 static
 */
export declare interface KeyboardAppearanceConfig {
  /**
   * 键盘的渐变模糊效果。<br/>默认值：KeyboardGradientMode.NONE
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  gradientMode?: KeyboardGradientMode;

  /**
   * 键盘的流光效果。<br/>默认值：KeyboardFluidLightMode.NONE
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  fluidLightMode?: KeyboardFluidLightMode;
}
/**
 * 删除内容对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DeleteValue {
  /**
   * 删除的值的位置信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  deleteOffset: int;
  /**
   * 删除值的方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  direction: TextDeleteDirection;
  /**
   * 删除的值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  deleteValue: string;
}
/**
 * 文本变换后回调。
 *
 * @param { TextRange } rangeBefore - 文本变化前将要被替换的文本范围。
 * @param { TextRange } rangeAfter - 文本变化后新增内容的文本范围。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnDidChangeCallback = (rangeBefore: TextRange, rangeAfter: TextRange) => void;
/**
 * 输入内容发生变化时，触发该回调。
 *
 * @param { string } value - 文本框内正式上屏的文本内容。 。
 * @param { PreviewText } [previewText] - 预上屏文本信息，包含预上屏起始位置和文本内容。
 * @param { TextChangeOptions } [options] - 文本内容变化信息，包含文本的选中区范围、文本框内正式上屏的文本内容、预上屏文本内容。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type EditableTextOnChangeCallback = (value: string, previewText?: PreviewText, options?: TextChangeOptions) => void;
/**
 * 文本选择控制器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextBaseController {
  /**
   * ArkTS-Sta: setSelection(selectionStart: int, selectionEnd: int, options?: SelectionOptions): void
   *
   * 支持设置组件内的内容选中，选中部分背板高亮。
   *
   * selectionStart和selectionEnd均为-1时表示全选。
   *
   * 未获焦时调用该接口不产生选中效果。
   *
   * 从API version 12开始，在2in1设备中，无论options取何值，调用setSelection接口都不会弹出菜单，此外，如果组件中已经存在菜单，调用setSelection接口会关闭菜单。
   *
   * 在非2in1设备中，options取值为MenuPolicy.DEFAULT时，遵循以下规则：
   *
   * 1. 组件内有手柄菜单时，接口调用后不关闭菜单，并且调整菜单位置。
   *
   * 2. 组件内有不带手柄的菜单时，接口调用后不关闭菜单，并且菜单位置不变。
   *
   * 3. 组件内无菜单时，接口调用后也无菜单显示。
   *
   * @param { int } selectionStart - 选中开始位置。<br/>取值小于0时，按0处理。
   * @param { int } selectionEnd - 选中结束位置。<br/>取值大于文本长度时，按当前文本长度处理。
   * @param { SelectionOptions } [options] - 选择项配置。 默认值继承
   *     [SelectionOptions](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md#selectionoptions12对象说明)。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setSelection(selectionStart: int, selectionEnd: int, options?: SelectionOptions): void;
  /**
   * 关闭自定义选择菜单或系统默认选择菜单。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  closeSelectionMenu(): void;
  /**
   * ArkTS-Sta: getLayoutManager(): LayoutManager | undefined
   *
   * 获取布局管理器对象。
   *
   * @returns { LayoutManager | undefined } - 布局管理器对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getLayoutManager(): LayoutManager | undefined;
}
/**
 * 文本扩展编辑控制器。
 *
 * 继承自[TextBaseController]{@link TextBaseController}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextEditControllerEx extends TextBaseController {
  /**
   * 获取当前富文本的编辑状态。
   *
   * @returns { boolean | undefined } - true为编辑态，false为非编辑态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isEditing(): boolean | undefined;
  /**
   * 退出编辑态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stopEditing(): void;
  /**
   * 设置光标偏移位置。
   *
   * @param { int } offset - 光标偏移位置。超出所有内容范围时，设置失败。
   * @returns { boolean | undefined } - 光标是否设置成功。<br/>true表示光标设置成功，false表示设置失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setCaretOffset(offset: int): boolean | undefined;
  /**
   * 返回当前光标所在位置。
   *
   * @returns { int | undefined }
   当前光标所在位置。
   * @stagemodelonly
   * @since 23 static
   */
  getCaretOffset(): int | undefined;
  /**
   * 获取预上屏信息。
   *
   * @returns { PreviewText | undefined } - 预上屏信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPreviewText(): PreviewText | undefined;
}
/**
 * 预上屏信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PreviewText {
  /**
   * 预上屏内容的起始位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offset: int;
  /**
   * 预上屏的内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  value: string;
}
/**
 * 定义StyledString控制器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface StyledStringController {
  /**
   * 设置富文本组件显示的属性字符串。
   *
   * @param { StyledString } styledString - 属性字符串。<br/>**说明：** <br/>StyledString的子类
   *     [MutableStyledString](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#mutablestyledstring)
   *     也可以作为入参值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setStyledString(styledString: StyledString): void;
  /**
   * ArkTS-Sta: getStyledString(): MutableStyledString | undefined
   *
   * 获取富文本组件显示的属性字符串。
   *
   * @returns { MutableStyledString | undefined }
   富文本组件显示的属性字符串。
   * @stagemodelonly
   * @since 23 static
   */
  getStyledString(): MutableStyledString | undefined;
}
/**
 * 属性字符串的文本内容变化监听器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface StyledStringChangedListener {
  /**
     * 文本内容将要变化回调函数。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillChange?: Callback<StyledStringChangeValue, boolean>;
  /**
     * 文本内容完成变化回调函数。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidChange?: OnDidChangeCallback;
}
/**
 * 属性字符串的文本变化信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface StyledStringChangeValue {
  /**
   * 即将被替换的属性字符串子串在原字符串中的范围。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  range: TextRange;
  /**
   * 用于替换的属性字符串。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replacementString: StyledString;
  /**
   * 预览内容属性字符串。<br/> 该属性用于表示语音输入、拍摄输入、输入法预上屏场景下的未提交上屏的临时输入内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  previewText?: StyledString;
}
/**
 * 布局管理器对象。
 *
 * > **说明：**
 * >
 * > 文本内容变更后，需等待布局完成才可获取到最新的布局信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LayoutManager {
  /**
     * 获取组件内容的总行数。
     *
   * @returns { int | undefined } 组件内容的总行数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getLineCount(): int | undefined;
  /**
     * 获取较为接近给定坐标的字形的位置信息。
     *
   * @param { double } x - 相对于组件的横坐标。<br/>单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)。
   * @param { double } y - 相对于组件的纵坐标。<br/>单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)。
   * @returns { PositionWithAffinity | undefined } 字形位置信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getGlyphPositionAtCoordinate(x: double, y: double): PositionWithAffinity | undefined;

  /**
     * 获取距离指定坐标最近的字符的位置信息。
     *
   * @param { double } x - 相对于组件的横坐标。<br/>单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)。
   * @param { double } y - 相对于组件的纵坐标。<br/>单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)。
   * @returns { PositionWithAffinity | undefined } 字符的位置信息。当[LayoutManager]{@link LayoutManager}没有和组件绑定时，该接口会返回
     *     undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  getCharacterPositionAtCoordinate(x: double, y: double): PositionWithAffinity | undefined;

  /**
   * 根据给定的文本字符范围来获取范围内的字形范围，以及实际的字符范围。例如文本为"世界Hello"，其中文本"世"的字形索引范围为[0, 1]，一个汉字占三个字符，所以其对应的字符索引范围为[0, 3]。如果指定的字符索引范围是
   * [0, 1]，但无法解析出三分之一个汉字，所以实际的字符索引范围是[0, 3]。
   *
   * @param { TextRange } charRange - 文本的字符范围。
   * @returns { Array<TextRange> | undefined } 数组中含有两个元素，第一个元素是字形范围，第二个元素是实际的字符范围，当返回的范围是异常值时，范围内元素为-1。当
   *     [LayoutManager]{@link LayoutManager}没有和组件绑定时，该接口会返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  getGlyphRangeForCharacterRange(charRange: TextRange): Array<TextRange> | undefined;

  /**
   * 根据给定的文本字形范围来获取范围内的字符范围，以及实际的字形范围。例如文本为"世界Hello"，其字形索引范围为[0, 7]，一个汉字占三个字符，所以其对应的字符索引范围为[0, 11]。如果指定的索引范围是[0, 11]，但
   * 字形一共只有7个，所以实际的字形索引范围是[0, 7]。
   *
   * @param { TextRange } glyphRange - 文本的字形范围。
   * @returns { Array<TextRange> | undefined } 数组中含有两个元素，第一个元素是字符范围，第二个元素是实际的字形范围，当返回的范围是异常值时，范围内元素为-1。当
   *     [LayoutManager]{@link LayoutManager}没有和组件绑定时，该接口会返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  getCharacterRangeForGlyphRange(glyphRange: TextRange): Array<TextRange> | undefined;

  /**
   * ArkTS-Sta: getLineMetrics(lineNumber: int): LineMetrics | undefined
   *
   * 获取指定行的行信息、文本样式信息、以及字体属性信息。
   *
   * @param { int } lineNumber - 行号，从0开始。
   * @returns { LineMetrics | undefined } 行信息、文本样式信息、以及字体属性信息。<br/>当行号小于0或超出实际行，返回无效值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getLineMetrics(lineNumber: int): LineMetrics | undefined;

  /**
     * 获取给定的矩形区域宽度以及矩形区域高度的规格下，文本中任意区间范围内的字符或占位符所占的绘制区域信息。
     *
   * @param { TextRange } range - 需要获取的区域的文本区间。
   * @param { RectWidthStyle } widthStyle - 返回的矩形区域的宽度的规格。
   * @param { RectHeightStyle } heightStyle - 返回的矩形区域的高度的规格。
   * @returns { Array<TextBox> | undefined } 矩形区域数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getRectsForRange(range: TextRange, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox> | undefined;
}
/**
 * 位置以及亲和度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PositionWithAffinity {
  /**
   * 字形或字符相对于组件内容的索引，整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  position: int;

  /**
   * 位置亲和度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  affinity: Affinity;
}

/**
 * 位置亲和度枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare type Affinity = text.Affinity;

/**
 * 用于描述文本布局中单行文字的度量信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare type LineMetrics = text.LineMetrics;

/**
 * 矩形区域宽度规格枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare type RectWidthStyle = text.RectWidthStyle;

/**
 * 矩形区域高度规格枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare type RectHeightStyle = text.RectHeightStyle;

/**
 * 文本矩形区域。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare type TextBox = text.TextBox;

/**
 * 光标样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface CaretStyle {
  /**
   * 光标尺寸，不支持百分比。
   *
   * 默认值：'2vp'
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width?: Length;
  /**
   * 光标颜色。
   *
   * 默认值：'#ff007dff'
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: ResourceColor;
}
/**
 * 自定义菜单项的Id值。用于识别菜单选项，内置菜单项Id值见下列属性表格。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TextMenuItemId {
  /**
   * 根据id创建TextMenuItemId。
   *
   * @param { ResourceStr } id - 菜单项标识，用于创建TextMenuItemId对象以识别菜单选项。
   * @returns { TextMenuItemId } - 根据传入id创建的菜单项标识对象，用于识别菜单选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static of(id: ResourceStr): TextMenuItemId;
  /**
   * 判断TextMenuItemId是否相等。
   *
   * @param { TextMenuItemId } id - 需要比较的TextMenuItemId对象。
   * @returns { boolean }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  equals(id: TextMenuItemId): boolean;
  /**
   * 默认剪切，为一级菜单项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static readonly CUT: TextMenuItemId;
  /**
   * 默认复制，为一级菜单项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static readonly COPY: TextMenuItemId;
  /**
   * 默认粘贴，为一级菜单项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static readonly PASTE: TextMenuItemId;
  /**
   * 默认全选，为一级菜单项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static readonly SELECT_ALL: TextMenuItemId;
  /**
   * 互通服务，为一级菜单项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static readonly COLLABORATION_SERVICE: TextMenuItemId;
  /**
   * 拍摄输入，为一级菜单项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static readonly CAMERA_INPUT: TextMenuItemId;
  /**
   * 可对选中的文本进行润色、摘要提取、排版等，为一级菜单项。该菜单项依赖大模型能力，否则不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static readonly AI_WRITER: TextMenuItemId;
  /**
   * 翻译，为一级菜单项。对选中的文本提供翻译服务。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static readonly TRANSLATE: TextMenuItemId;
  /**
   * 搜索，为一级菜单项。对选中的文本提供搜索服务，拉起浏览器搜索选中文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static readonly SEARCH: TextMenuItemId;
  /**
   * 分享，为一级菜单项。对选中的文本提供分享服务，拉起分享窗口分享选中文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static readonly SHARE: TextMenuItemId;
  /**
   * 打开链接，为一级菜单项。对选中的URL提供跳转服务，拉起浏览器搜索或者应用页面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static readonly url: TextMenuItemId;

  /**
   * 新建邮件，为一级菜单项。对选中的邮箱地址提供跳转服务，拉起邮箱应用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static readonly email: TextMenuItemId;

  /**
   * 呼叫，为一级菜单项。对选中的电话号码提供跳转服务，拉起电话拨号页面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static readonly phoneNumber: TextMenuItemId;

  /**
   * 导航前往，为一级菜单项。对选中的地址提供跳转服务，拉起地图应用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static readonly address: TextMenuItemId;

  /**
   * 新建日程，为一级菜单项。对选中的日期和时间提供跳转服务，拉起新建日程页面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static readonly dateTime: TextMenuItemId;

  /**
   * 对选中的文本提供AI问询能力，为一级菜单项。该菜单项依赖大模型能力，否则不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static readonly askAI: TextMenuItemId;

  /**
   * 自动填充，为一级菜单项。
   * 点击后会展开二级菜单项“密码保险箱”，仅支持Search、TextInput、TextArea或RichEditor组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static readonly autoFill: TextMenuItemId;

  /**
   * 密码保险箱，为二级菜单项。
   * 点击该菜单项后会拉起密码保险箱应用，该应用提供自动填充账号密码能力，仅支持Search、TextInput、TextArea或RichEditor组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static readonly passwordVault: TextMenuItemId;
}
/**
 * TextMenuItem
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextMenuItem {
  /**
   * 菜单名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content: ResourceStr;
  /**
   * 菜单图标。
   * 不支持网络图片。
   * 默认值：undefined，不显示菜单图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: ResourceStr;
  /**
   * 菜单id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  id: TextMenuItemId;
  /**
   * 快捷键提示。
   * 该字段仅2in1设备支持。
   * 默认值：undefined，不显示快捷键提示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  labelInfo?: ResourceStr;
}
/**
 * 在菜单创建时触发该回调，可在该回调中进行菜单数据设置。入参和返回值只包含一级菜单项，不包含二级菜单项。
 *
 * @param { Array<TextMenuItem> } menuItems - 将要显示的菜单项。<br/>**说明：** <br/>对默认菜单项的名称、图标、快捷键提示修改不生效。
 * @returns { Array<TextMenuItem> } 处理后的菜单项。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnCreateMenuCallback = (menuItems: Array<TextMenuItem>) => Array<TextMenuItem>;
/**
 * 菜单项功能函数。
 *
 * @param { TextMenuItem } menuItem - 菜单项。<br/>**说明：** <br/>从API version 23开始，对于具备可展开二级菜单能力的一级菜单项，例如自动填充，仅执行系统默认逻辑，不会执行用
 *     户自定义逻辑。
 * @param { TextRange } range - 选中的文本信息。
 * @returns { boolean } - 菜单项的执行逻辑。<br/>返回为true，拦截系统默认逻辑，仅执行自定义逻辑。<br/>返回为false，先执行自定义逻辑，再执行系统逻辑。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnMenuItemClickCallback = (menuItem: TextMenuItem, range: TextRange) => boolean;
/**
 * 当文本选择区域变化后显示菜单之前触发该回调，可在该回调中进行菜单数据设置。入参和返回值只包含一级菜单项，不包含二级菜单项。
 *
 * @param { Array<TextMenuItem> } menuItems - 将要显示的菜单项。<br/>**说明：** <br/>对默认菜单项的名称、图标、快捷键提示修改不生效。
 * @returns { Array<TextMenuItem> } 处理后的菜单项。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export type OnPrepareMenuCallback = (menuItems: Array<TextMenuItem>) => Array<TextMenuItem>;
/**
 * EditMenuOptions
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EditMenuOptions {
  /**
   * 在菜单创建时触发该回调，可在该回调中进行菜单数据设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onCreateMenu: OnCreateMenuCallback | undefined;
  /**
   * 在菜单项被点击时触发该回调，用于处理菜单项的点击行为。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onMenuItemClick: OnMenuItemClickCallback | undefined;
  /**
   * 当文本选择区域变化后显示菜单之前触发该回调，可在该回调中进行菜单数据设置。
   * 与onCreateMenu功能相似但触发时机不同：onCreateMenu在菜单创建时触发，适用于初始化菜单项；
   * 本接口在每次选择区域变化后、菜单显示前触发，适用于根据选择内容动态调整菜单。两者可同时使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  onPrepareMenu?: OnPrepareMenuCallback;
}
/**
 * 后端返回的文本装饰线样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface DecorationStyleResult {
  /**
   * 装饰线类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type: TextDecorationType;
  /**
   * 装饰线颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color: ResourceColor;
  /**
   * 装饰线样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  style?: TextDecorationStyle;
  /**
   * 装饰线粗细缩放比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  thicknessScale?: double;
}
/**
 * 文本着色器效果基类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class ShaderStyle {}
/**
 * 显示为线性渐变。LinearGradientStyle继承自[ShaderStyle]{@link ShaderStyle}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class LinearGradientStyle extends ShaderStyle {
  /**
   * 用于创建LinearGradientStyle对象的构造函数。
   *
   * @param { LinearGradientOptions } options - 显示为线性渐变效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  constructor(options: LinearGradientOptions);
  /**
   * 显示为线性渐变效果。
   *
   * [LinearGradientOptions](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-gradient-color.md#lineargradientoptions18对象说明)
   * 中的direction默认值按
   * [GradientDirection](docroot://reference/apis-arkui/arkui-ts/ts-appendix-enums.md#gradientdirection)中的NONE处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  options: LinearGradientOptions;
}
/**
 * 显示为径向渐变。RadialGradientStyle继承自[ShaderStyle]{@link ShaderStyle}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class RadialGradientStyle extends ShaderStyle {
  /**
   * 用于创建RadialGradientStyle对象的构造函数。
   *
   * @param { RadialGradientOptions } options - 显示为径向渐变效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  constructor(options: RadialGradientOptions);
  /**
   * 显示为径向渐变效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  options: RadialGradientOptions;
}
/**
 * 显示为纯色。ColorShaderStyle继承自[ShaderStyle]{@link ShaderStyle}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class ColorShaderStyle extends ShaderStyle {
  /**
   * 用于创建ColorShaderStyle对象的构造函数。
   *
   * @param { ResourceColor } color - 显示为纯色效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  constructor(color: ResourceColor);
  /**
   * 显示为纯色效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  color: ResourceColor;
}
/**
 * 字体配置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface FontSettingOptions {
  /**
   * 是否启用可变字重调节。字体配置项作为[fontWeight](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#fontweight12)接
   * 口的入参，fontWeight接口中weight取值为[100, 900]内非整百数值时，enableVariableFontWeight用于设置weight的值是否生效。
   *
   * 默认值：false
   *
   * true：启用可变字重调节。此时如果weight取值为[100, 900]范围内任意整数，字重取值为weight。
   *
   * false：禁用可变字重调节。此时如果weight取值为[100, 900]范围内的整百数值，字重取值为weight；weight是非整百数值时，字重取默认值400。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  enableVariableFontWeight?: boolean;
}
/**
 * 变化前的文本信息，以及变化后的选区范围。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextChangeOptions {
  /**
   * 变化前的选区范围。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  rangeBefore: TextRange;
  /**
   * 变化后的选区范围。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  rangeAfter: TextRange;
  /**
   * 变化前的文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  oldContent: string;
  /**
   * 变化前的预上屏信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  oldPreviewText: PreviewText;
}
/**
 * 文本变化的详细信息，包括预上屏。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface EditableTextChangeValue {
  /**
   * 当前的文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  content: string;
  /**
   * 预上屏的内容信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  previewText?: PreviewText;
  /**
   * 变化的文本内容信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  options?: TextChangeOptions;
}
/**
 * 菜单的显示模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextMenuShowMode {
  /**
   * 显示在当前窗口中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DEFAULT = 0,
  /**
   * 优先显示在独立窗口中，若不支持独立窗口，则显示在当前窗口中。
   *
   * **说明：**
   *
   * 除应用主窗口、应用子窗口、系统模态窗口及系统桌面类型的窗口外，其他类型的窗口不支持将文本选择菜单显示在独立窗口中。
   *
   * 在预览器中不支持将文本选择菜单显示在独立窗口中。
   *
   * 在[UIExtension](docroot://reference/apis-arkui/js-apis-arkui-uiExtension.md)中不支持将文本选择菜单显示在独立窗口中。
   *
   * 当文本类组件已经显示在子窗类型的[Popup](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-Popup.md)、
   * [Dialog](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-Dialog.md)、
   * [Toast](docroot://ui/arkts-create-toast.md)、
   * [Menu](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-menu.md)中时，不支持将其对应的文本选择菜单显示在独立窗口中。
   *
   * 当TextInput、TextArea可支持拉起AutoFill时，不支持将其对应的文本选择菜单显示在独立窗口中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PREFER_WINDOW = 1
}
/**
 * 菜单选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextMenuOptions {
  /**
   * 菜单的显示模式。
   *
   * 默认值：TextMenuShowMode.DEFAULT
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showMode?: TextMenuShowMode;
}
/**
 * 键盘外观。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum KeyboardAppearance {
  /**
   * 默认外观模式，不采用沉浸式风格。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE_IMMERSIVE = 0,
  /**
   * 沉浸式模式，跟随系统。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  IMMERSIVE = 1,
  /**
   * 浅色沉浸式风格。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LIGHT_IMMERSIVE = 2,
  /**
   * 深色沉浸式风格。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DARK_IMMERSIVE = 3
}
/**
 * 设置文本的行间距，是否仅在行与行之间生效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LineSpacingOptions {
  /**
   * 文本的行间距是否仅在行与行之间生效。
   * 当设置为true时，行间距仅适用于行与行之间，首行上方和尾行下方无额外的行间距。当设置为false时，首行上方和尾行下方均会存在行间距。
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onlyBetweenLines?: boolean;
}
/**
 * 语音按钮选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export interface VoiceButtonOptions {
  /**
   * 输入框启用或禁用语音按钮。<br/>true表示启用语音按钮，false表示禁用语音按钮。<br/> 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  enabled?: boolean;
}

/**
 * 字体配置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface FontConfigs {
  /**
   * 字体粗细配置。默认值继承[FontWeightConfigs]{@link FontWeightConfigs}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  fontWeightConfigs?: FontWeightConfigs;
}

/**
 * 字体粗细配置项。当传入该配置对象时（包括空对象{}），未显式设置的属性将使用默认值。当传入null或undefined时，不应用默认值，字体粗细行为与父组件文本保持一致。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface FontWeightConfigs {
  /**
   * 是否启用可变字重调节。当设置字体粗细的值weight为[100, 900]内非整百数值时，enableVariableFontWeight用于设置weight的值是否生效。
   *
   * 默认值：false
   *
   * true：启用可变字重调节。此时如果weight取值为[100, 900]范围内任意整数，字重取值为weight，否则取默认值400。
   *
   * false：禁用可变字重调节。此时如果weight取值为[100, 900]范围内的整百数值，字重取值为weight；weight是非整百数值时，字重取默认值400。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  enableVariableFontWeight?: boolean;
  /**
   * 是否随设备的字体粗细级别自动更新字重。
   *
   * 默认值：true
   *
   * true：当设备的字体粗细级别发生变化时，字重会自动更新。
   *
   * false：当设备的字体粗细级别发生变化时，字重不会自动更新。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  enableDeviceFontWeightCategory?: boolean;
}

/**
 * 文本动效基类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class ContentTransition {}

/**
 * 数字翻牌动效。仅限正整数，不支持小数和负数。不支持渐变色和Text跑马灯模式。不支持选中，
 * [copyOption](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#copyoption9)属性无效。当文本存在子组件时或通过属性字符串设置
 * 时，数字翻牌失效。
 *
 * NumericTextTransition继承自[ContentTransition]{@link ContentTransition}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class NumericTextTransition extends ContentTransition {
  /**
   * 用于创建NumericTextTransition对象的构造函数。
   *
   * @param { NumericTextTransitionOptions } [options] - 设置数字翻牌动效。 默认值继承
   *     [NumericTextTransitionOptions]{@link NumericTextTransitionOptions}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  constructor(options?: NumericTextTransitionOptions);

  /**
   * 翻牌方向。
   *
   * 默认值：FlipDirection.DOWN
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  flipDirection?: FlipDirection;

  /**
   * 是否开启翻牌模糊效果。
   *
   * 默认值：false
   *
   * true：开启翻牌模糊效果。
   *
   * false：不开启翻牌模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  enableBlur?: boolean;
}

/**
 * 数字翻牌的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface NumericTextTransitionOptions {
  /**
   * 翻牌方向。
   *
   * 默认值：FlipDirection.DOWN
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  flipDirection?: FlipDirection;

  /**
   * 是否开启翻牌模糊效果。
   *
   * 默认值：false
   *
   * true：开启翻牌模糊效果。
   *
   * false：不开启翻牌模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  enableBlur?: boolean;
}

/**
 * 翻牌方向。默认值为DOWN。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum FlipDirection {
  /**
   * 内容往下翻。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  DOWN = 0,

  /**
   * 内容往上翻。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  UP = 1
}

/**
 * 文本排版方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextDirection {
  /**
   * 文本排版方向从左到右。
   *
   * **原子化服务API（仅ArkTS-Dyn）：** 从API version 22开始，该接口支持在原子化服务中使用。
   *
   * **原子化服务API（仅ArkTS-Dyn）：** 从API version 22开始，该接口支持在原子化服务中使用。<sup>23+</sup>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LTR = 0,
  /**
   * Right to left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RTL = 1,
  /**
   * 文本方向遵循组件布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DEFAULT = 2,
  /**
   * 文本方向遵循实际文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  AUTO = 3
}

/**
 * 文本拖拽时的背板样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SelectedDragPreviewStyle {
  /**
   * 用于设置文本拖拽时的背板颜色。
   *
   * 默认值：跟随主题。默认主题时，浅色模式显示白色，深色模式显示黑色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: ResourceColor;
}

/**
 * Span的无障碍朗读功能属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AccessibilitySpanOptions {
  /**
   * 无障碍文本属性。组件无文本属性时，屏幕朗读选中此组件不会播报。设置该属性后可为此类组件设置无障碍文本，屏幕朗读时将播报该文本，帮助使用者明确选中了什么组件。
   *
   * 默认值：''
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityText?: ResourceStr;

  /**
   * 无障碍说明属性。此描述用于向用户详细解释当前组件，开发人员应提供详尽的文本说明，以协助用户理解即将执行的操作及其后果，尤其当这些后果无法仅从组件的属性和无障碍文本中直接获取时。
   *
   * 默认值：''
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 无障碍重要性。用于设置组件是否可被无障碍辅助服务识别。
   *
   * 支持取值如下：
   *
   * "auto"：当前组件由无障碍辅助服务和ArkUI进行综合判断组件是否可被无障碍辅助服务所识别。
   *
   * "yes"：当前组件可被无障碍辅助服务识别。
   *
   * "no"：当前组件不可被无障碍辅助服务识别。
   *
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值："auto"
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * 当accessibilityLevel设置成"auto"时，组件是否可被无障碍辅助服务所识别取决于以下多方面因素：
   *
   * 1. 组件是否可被识别由无障碍辅助服务内部判断，自行选择。
   * 2. 若组件的父组件accessibilityGroup属性中isGroup设置为true，无障碍服务将不再关注其子组件内容，组件不可被无障碍辅助服务所识别。
   * 3. 若组件的父组件accessibilityLevel属性设置为"no-hide-descendants"，组件不可被无障碍辅助服务所识别。
   *
   * @default "auto".
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityLevel?: string;
}

/**
 * 定义线条拐角的样式，即在绘制折线时线段拐角处的画笔样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum StrokeJoinStyle {

  /**
   * 拐角类型为锐角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  MITER_JOIN = 0,

  /**
   * 拐角类型为圆角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ROUND_JOIN = 1,

  /**
   * 拐角类型为平角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  BEVEL_JOIN = 2
}

/**
 * 文本渲染的增量更新策略。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum IncrementalUpdatePolicy {
  /**
   * 不启用增量更新，采用全量布局渲染。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NONE = 0,

  /**
   * 启用增量更新，使用段落级缓存。该策略生效的前提是文本绑定的属性字符串对象保持不变，若属性字符串对象发生变化则无法命中缓存。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PARAGRAPH_CACHE = 1
}
