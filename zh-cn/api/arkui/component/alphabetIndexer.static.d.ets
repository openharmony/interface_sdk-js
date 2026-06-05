
'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import { CommonMethod, BlurStyle, Bindable } from './common';

import { ResourceColor, Length, Position } from "./units";

import { Font } from "./units";

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';

import { AttributeModifier, CommonMethod } from "./common";

/**
 * 索引条提示弹窗的对齐样式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum IndexerAlign {

  /**
     * A dialog box is displayed on the right of the index bar.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Left = 0,

  /**
     * A dialog box is displayed on the left of the index bar.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Right = 1,

  /**
     * A dialog box is displayed on the start of the index bar.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  START = 2,

  /**
     * A dialog box is displayed on the end of the index bar.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  END = 3
}

/**
 * 用于设置索引条参数。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface AlphabetIndexerOptions {

  /**
     * 字符串数组，每个字符串代表一个索引项。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  arrayValue: Array<string>;

  /**
     * 初始选中项索引值，若超出索引值范围，则取默认值0。与[selected]{@link AlphabetIndexerAttribute.selected}属性同时设置时，selected属性的优先级较高。
     * 
     * 取值范围：[0, arrayValue.length-1]
     * 
     * 该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selected: int | Bindable<int>;
}

/**
 * 索引项被选中时触发的事件。
 *
 * @param { int } index - selected index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnAlphabetIndexerSelectCallback = (index: int) => void;

/**
 * 提示弹窗二级索引项被选中时触发的事件。
 *
 * @param { int } index - selected index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnAlphabetIndexerPopupSelectCallback = (index: int) => void;

/**
 * [usingPopup]{@link AlphabetIndexerAttribute.usingPopup}设置值为true，索引项被选中时触发的事件。
 *
 * @param { int } index - selected index
 * @returns { Array<string> } string array corresponding to the index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnAlphabetIndexerRequestPopupDataCallback = (index: int) => Array<string>;

/**
 * [width](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#width)属性设置"auto"时表示自适应宽度，宽度会随索引项最大宽度变
 * 化。
 * 
 * [padding](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#padding)属性默认为4vp。
 * 
 * 文本最大的字体缩放倍数[maxFontScale](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#maxfontscale12)和最小的字体缩放
 * 倍数[minFontScale](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#minfontscale12)皆为1，不跟随系统字体大小调节变化
 * 。
 * 
 * 除支持[通用属性]{@link ./../../@internal/component/ets/common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface AlphabetIndexerAttribute extends CommonMethod {

  /**
     * 设置未选中项文本颜色。
     *
   * @param { ResourceColor | undefined } value
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default color(value: ResourceColor | undefined): this;

  /**
     * 设置选中项文本颜色。
     *
   * @param { ResourceColor | undefined } value
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectedColor(value: ResourceColor | undefined): this;

  /**
     * 设置提示弹窗一级索引项文本颜色。
     *
   * @param { ResourceColor | undefined } value
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupColor(value: ResourceColor | undefined): this;

  /**
     * 设置选中项背景颜色。
     *
   * @param { ResourceColor | undefined } value
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectedBackgroundColor(value: ResourceColor | undefined): this;

  /**
     * 设置提示弹窗背景颜色。
     *
   * @param { ResourceColor | undefined } value
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupBackground(value: ResourceColor | undefined): this;

  /**
     * 设置提示弹窗二级索引选中项文本颜色。
     *
   * @param { ResourceColor | undefined } value - 提示弹窗二级索引选中项文本颜色。 <br/>默认值：#FF182431<br/>取值为undefined时，按默认值处理。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupSelectedColor(value: ResourceColor | undefined): this;

  /**
     * 设置提示弹窗二级索引未选中项文本颜色。
     *
   * @param { ResourceColor | undefined } value - 提示弹窗二级索引选中项文本颜色。 <br/>默认值：#FF182431<br/>取值为undefined时，按默认值处理。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupUnselectedColor(value: ResourceColor | undefined): this;

  /**
     * 设置提示弹窗二级索引项背景颜色。
     *
   * @param { ResourceColor | undefined } value - 提示弹窗二级索引项背景颜色。 <br/>默认值：<br />API version 11及以前：#FFFFFFFF，显示为白色。<br
     *     />API version 12及以后：#00000000，显示为透明色。<br/>取值为undefined时，按默认值处理。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupItemBackgroundColor(value: ResourceColor | undefined): this;

  /**
     * 设置是否显示提示弹窗。
     *
   * @param { boolean | undefined } value
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default usingPopup(value: boolean | undefined): this;

  /**
     * 设置选中项文本样式。
     *
   * @param { Font | undefined } value
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectedFont(value: Font | undefined): this;

  /**
     * 设置提示弹窗一级索引文本样式。
     *
   * @param { Font | undefined } value
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupFont(value: Font | undefined): this;

  /**
     * 设置提示弹窗二级索引项文本样式。
     *
   * @param { Font | undefined } value - 提示弹窗二级索引项文本样式。 <br/>默认值：<br/>{<br/>size:24,<br/>weight:FontWeight.Medium<br/>
     *     }<br/>取值为undefined时，按默认值处理。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupItemFont(value: Font | undefined): this;

  /**
     * 设置索引项区域大小。
     *
   * @param { string | double | undefined } value
   索引项区域大小，索引项区域为正方形，即正方形边长。不支持设置为百分比。<br/>实际取值会受到组件尺寸的约束，索引项宽度最大为组件宽
     *     度-左右[padding](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#padding)，索引项高度最大为（组件高度-
     *     上下[padding](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#padding)）/索引项个数。传入值小于等于0时
     *     ，按照默认值处理。<br/>默认值：16.0<br/>单位：vp<br/>取值为undefined时，按默认值处理。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default itemSize(value: string | double | undefined): this;

  /**
     * 设置未选中项文本样式。
     *
   * @param { Font | undefined } value
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default font(value: Font | undefined): this;

  /**
     * 设置索引条提示弹窗的对齐样式。
     *
   * @param { IndexerAlign | undefined } value - 索引条提示弹窗的对齐样式，支持弹窗显示在索引条右侧和左侧。<br/>默认值: IndexerAlign.END。<br/>取值为
     *     undefined时，按默认值处理。
   * @param { Length | undefined } [offset] - 提示弹窗与索引条之间间距，大于等于0为有效值，在不设置或设置为小于0的情况下间距与popupPosition.x相同。与
     *     popupPosition同时设置时，水平方向上offset生效，竖直方向上popupPosition.y生效。<br/>取值为undefined时，按默认值处理。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default alignStyle(value: IndexerAlign | undefined, offset?: Length | undefined): this;

  /**
     * 索引项选中事件，回调参数为当前选中项索引。
     *
   * @param { OnAlphabetIndexerSelectCallback | undefined } callback
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onSelect(callback: OnAlphabetIndexerSelectCallback | undefined): this;

  /**
     * 设置提示弹窗二级索引项内容事件，回调参数为当前选中项索引，回调返回值为提示弹窗需显示的二级索引项内容。
     *
   * @param { OnAlphabetIndexerRequestPopupDataCallback | undefined } callback
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onRequestPopupData(callback: OnAlphabetIndexerRequestPopupDataCallback | undefined): this;

  /**
     * 提示弹窗二级索引选中事件，回调参数为当前选中二级索引项索引。
     *
   * @param { OnAlphabetIndexerPopupSelectCallback | undefined } callback
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onPopupSelect(callback: OnAlphabetIndexerPopupSelectCallback | undefined): this;

  /**
     * 设置选中项索引值。
     *
   * @param { int | Bindable<int> | undefined } index
   选中项索引值。<br/>默认值：0<br/>取值为undefined时，按默认值处理。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selected(index: int | Bindable<int> | undefined): this;

  /**
     * 设置弹出窗口相对于索引条上边框中点的位置。
     *
   * @param { Position | undefined } value
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupPosition(value: Position | undefined): this;

  /**
     * 设置是否使用自适应折叠模式。
     * 
     * 如果索引项第一项为“#”，当除去第一项后剩余索引项数量 <= 9时，选择全显示模式；9 < 剩余索引项数量 <= 13时，根据索引条高度自适应选择全显示模式或者短折叠模式；剩余索引项数量 > 13时，根据索引条高度自适应选择短
     * 折叠模式或者长折叠模式。
     * 
     * 如果索引项第一项不为“#”，当所有索引项数量 <= 9时，选择全显示模式；9 < 所有索引项数量 <= 13时，根据索引条高度自适应选择全显示模式或者短折叠模式；所有索引项数量 > 13时，根据索引条高度自适应选择短折叠模式或
     * 者长折叠模式。
     * 
     * > **说明：**
     * >
     * > 从API version 12开始，该接口支持在
     * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
     * > 中调用。
     *
   * @param { boolean | undefined } value - 是否使用自适应折叠模式。<br/>默认值：<br />API version 12之前：false，不使用自适应折叠模式。<br />API
     *     version 12及之后：true <br/>true：使用自适应折叠模式。<br/>false：不使用自适应折叠模式。<br/>取值为undefined时，按默认值处理。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default autoCollapse(value: boolean | undefined): this;

  /**
     * 设置提示弹窗索引项背板圆角半径。
     *
   * @param { double | undefined } value
   设置提示弹窗索引项背板圆角半径。<br/>默认值：24vp<br/>不支持百分比，小于0时按照0设置。<br/>提示弹窗背板圆角自适应变化（索引项圆角
     *     半径+4vp）。<br/>取值为undefined时，按默认值处理。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupItemBorderRadius(value: double | undefined): this;

  /**
     * 设置索引项背板圆角半径。
     *
   * @param { double | undefined } value
   设置索引项背板圆角半径。<br/>默认值：8vp<br/>不支持百分比，小于0时按照0设置。<br/>索引条背板圆角自适应变化（索引项圆角半径+4vp
     *     ）。<br/>取值为undefined时，按默认值处理。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default itemBorderRadius(value: double | undefined): this;

  /**
     * 设置提示弹窗的背景模糊材质。未通过该接口设置时，默认为组件普通材质模糊，对应取值为BlurStyle中的COMPONENT_REGULAR。
     *
   * @param { BlurStyle | undefined } value
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupBackgroundBlurStyle(value: BlurStyle | undefined): this;

  /**
     * 设置提示弹窗一级索引项背景颜色。
     *
   * @param { ResourceColor | undefined } value
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupTitleBackground(value: ResourceColor | undefined): this;

  /**
     * 设置是否开启触控反馈。
     *
   * @param { boolean | undefined } value - 是否支持触控反馈。<br/>默认值：true<br/>true：开启触控反馈；false：不开启触控反馈。<br/>取值为undefined时，按默
     *     认值处理。<br/>开启触控反馈时，需要在工程的[module.json5](docroot://quick-start/module-configuration-file.md)中配置
     *     requestPermissions字段开启振动权限，配置如下：<br/>"requestPermissions": [{"name": "ohos.permission.VIBRATE"}]
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableHapticFeedback(value: boolean | undefined): this;

  /**
     * 动态设置AlphabetIndexer组件的属性方法。
     *
   * @param { AttributeModifier<AlphabetIndexerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier -
   在
     *     当前组件上，动态设置属性方法，支持使用if/else语法。<br/>CommonMethod：通用属性和事件。<br/>取值为undefined时，按当前组件的属性方法默认值处理。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<AlphabetIndexerAttribute> | AttributeModifier<CommonMethod> | undefined): this;

  /**
   * 设置字母索引器选项。
   *
   * @param { AlphabetIndexerOptions } info - 用于设置索引条参数。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setAlphabetIndexerOptions(info: AlphabetIndexerOptions): this;
}

/**
 * 创建索引条组件。
 *
 * @param { AlphabetIndexerOptions } options - 设置索引条组件参数。
 * @returns { AlphabetIndexerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function AlphabetIndexer(
    options: AlphabetIndexerOptions
): AlphabetIndexerAttribute;

/**
  * 定义AlphabetIndexer组件
  *
 * @param { CustomBuilderT<AlphabetIndexerAttribute> } style_ - AlphabetIndexer属性实例
 * @returns { AlphabetIndexerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function AlphabetIndexer(
 style_: CustomBuilderT<AlphabetIndexerAttribute>
): AlphabetIndexerAttribute;