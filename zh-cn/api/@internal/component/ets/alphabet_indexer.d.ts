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
 * @kit ArkUI
 */

/**
* 索引条提示弹窗的对齐样式枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum IndexerAlign {

  /**
   * 提示弹窗显示在索引条右侧。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Left = 0,

  /**
   * 提示弹窗显示在索引条左侧。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Right = 1,

  /**
   * 在从左到右（LTR）场景下，提示弹窗显示在索引条右侧的位置。在RTL场景下，提示弹窗显示在索引条左侧的位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  START = 2,

  /**
   * 在从左到右（LTR）场景下，提示弹窗显示在索引条左侧的位置。在RTL场景下，提示弹窗显示在索引条右侧的位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  END = 3
}

/**
* 用于设置索引条参数。
*
* > **说明：**
*
* > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface AlphabetIndexerOptions {

  /**
   * Alphabetical index string array.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  arrayValue: Array<string>;

  /**
   * ID of the selected item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  selected: number;
}

/**
* 可以与容器组件联动用于按逻辑结构快速定位容器显示区域的组件。
*
* > **说明：**
*
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface AlphabetIndexerInterface {

  /**
   * 创建索引条组件。
   *
   * @param { object } value [since 7 - 17]
   * @param { AlphabetIndexerOptions } options - 设置索引条组件参数。 [since 18]
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options: AlphabetIndexerOptions): AlphabetIndexerAttribute;
}

/**
* 索引项被选中时触发的事件。
*
 * @param { number } index - selected index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnAlphabetIndexerSelectCallback  = (index: number) => void;

/**
* 提示弹窗二级索引项被选中时触发的事件。
*
 * @param { number } index - selected index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnAlphabetIndexerPopupSelectCallback = (index: number) => void;

/**
* [usingPopup]{@link AlphabetIndexerAttribute#usingPopup}设置值为true，索引项被选中时触发的事件。
*
 * @param { number } index - selected index
 * @returns { Array<string> } string array corresponding to the index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnAlphabetIndexerRequestPopupDataCallback  = (index: number) => Array<string>;

/**
* [width]{@link CommonMethod#width(value: Length)}属性设置"auto"时表示自适应宽度，宽度会随索引项最大宽度变化。
*
* [padding]{@link CommonMethod#padding}属性默认为4vp。
*
* 文本最大的字体缩放倍数[maxFontScale]{@link TextAttribute#maxFontScale}和最小的字体缩放倍数[minFontScale]{@link TextAttribute#minFontScale}
* 皆为1，不跟随系统字体大小调节变化。
*
* 除支持[通用属性]{@link common}外，还支持以下属性：
*
* 除支持[通用事件]{@link common}外，还支持以下事件：
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class AlphabetIndexerAttribute extends CommonMethod<AlphabetIndexerAttribute> {

  /**
   * 索引项选中事件，回调参数为当前选中项索引。
   *
   * > **说明：**
   *
   * > 从API version 7开始支持，从API version 8开始废弃，建议使用[onSelect]{@link AlphabetIndexerAttribute#onSelect}替代。
   *
   * @param { function } callback - 当前选中的索引。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead onSelect
   */
  onSelected(callback: (index: number) => void): AlphabetIndexerAttribute;

  /**
   * 设置未选中项文本颜色。
   *
   * @param { ResourceColor } value - 未选中项文本颜色。<br/>默认值：0x99182431，显示为略带透明的棕色。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * 设置选中项文本颜色。
   *
   * @param { ResourceColor } value - 选中项文本颜色。<br/>默认值：0xFF007DFF，显示为蓝色。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  selectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * 设置提示弹窗一级索引项文本颜色。
   *
   * @param { ResourceColor } value - 提示弹窗一级索引项文本颜色。<br/>默认值：0xFF007DFF，显示为蓝色。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  popupColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * 设置选中项背景颜色。
   *
   * @param { ResourceColor } value - 选中项背景颜色。<br/>默认值：0x1A007DFF，显示为半透明的蓝绿色。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  selectedBackgroundColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * 设置提示弹窗背景颜色。
   *
   * 该接口未被主动调用或参数value传入undefined时：
   *
   * API version 11及以前版本，提示弹窗背景颜色默认为0xFFFFFFFF，显示为白色。
   *
   * 对于API version 12至API version 24版本，默认为#66808080，显示为半透明的灰色。
   *
   * 从API版本26.0.0开始，如果和[popupBackgroundBlurStyle]{@link AlphabetIndexerAttribute#popupBackgroundBlurStyle}均未被主动调用或参数
   * value传入undefined，高档、中档算力设备默认显示为沉浸式材质
   * [ImmersiveStyle](docroot://reference/apis-arkui/arkts-apis-uimaterial.md#immersivestyle)的THIN样式，低档算力设备默认显示为白色背景。如果
   * popupBackgroundBlurStyle被主动调用且参数value传入有效值，提示弹窗背景颜色默认为#66808080，显示为半透明的灰色。
   *
   * @param { ResourceColor } value - 提示弹窗背景颜色。<br/>弹窗的背景模糊材质效果会对背景色产生影响，可通过设置
   *     [popupBackgroundBlurStyle]{@link AlphabetIndexerAttribute#popupBackgroundBlurStyle}属性值为NONE关闭背景模糊材质效果。<br/>
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  popupBackground(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * 设置提示弹窗二级索引选中项文本颜色。
   *
   * @param { ResourceColor } value - 提示弹窗二级索引选中项文本颜色。 <br/>默认值：#FF182431，显示为深暗蓝色。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popupSelectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * 设置提示弹窗二级索引未选中项文本颜色。
   *
   * @param { ResourceColor } value - 提示弹窗二级索引未选中项文本颜色。 <br/>默认值：#FF182431，显示为深暗蓝色。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popupUnselectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * 设置提示弹窗二级索引项背景颜色。
   *
   * @param { ResourceColor } value - 提示弹窗二级索引项背景颜色。 <br/>默认值：<br />API version 11及以前：#FFFFFFFF，显示为白色。<br />API version
   *     12及以后：#00000000，显示为透明色。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popupItemBackgroundColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * 设置是否显示提示弹窗。
   *
   * @param { boolean } value - 是否显示提示弹窗。<br/>默认值：false <br/>true：显示提示弹窗。<br/>false：不显示提示弹窗。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  usingPopup(value: boolean): AlphabetIndexerAttribute;

  /**
   * 设置选中项文本样式。
   *
   * @param { Font } value - 选中项文本样式。<br/>默认值：<br/>API version 11及以前：<br/>{<br/>size:'12.0fp',<br/> style:
   *     FontStyle.Normal,<br/> weight:FontWeight.Regular,<br/> family:'HarmonyOS Sans'<br/>}<br/>API version 12及以后：<br/
   *     >{<br/>size:'10.0vp',<br/> style:FontStyle.Normal,<br/> weight:FontWeight.Medium,<br/> family:'HarmonyOS Sans'<
   *     br/>}
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  selectedFont(value: Font): AlphabetIndexerAttribute;

  /**
   * 设置提示弹窗一级索引文本样式。
   *
   * @param { Font } value - 提示弹窗一级索引文本样式。<br/>默认值：<br/>{<br/>size:'24.0vp',<br/> style:FontStyle.Normal,<br/> weight:
   *     FontWeight.Medium,<br/> family:'HarmonyOS Sans'<br/>}
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  popupFont(value: Font): AlphabetIndexerAttribute;

  /**
   * 设置提示弹窗二级索引项文本样式。
   *
   * @param { Font } value - 提示弹窗二级索引项文本样式。 <br/>默认值：<br/>{<br/>size:24,<br/>weight:FontWeight.Medium<br/>}
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popupItemFont(value: Font): AlphabetIndexerAttribute;

  /**
   * 设置索引项区域大小。
   *
   * @param { string | number } value - 索引项区域大小，索引项区域为正方形，即正方形边长。不支持设置为百分比。<br/>实际取值会受到组件尺寸的约束，索引项宽度最大为组件宽度-左右
   *     [padding]{@link CommonMethod#padding}，索引项高度最大为（组件高度-上下[padding]{@link CommonMethod#padding}）/索引项个数。传入值小于等于0时，按照
   *     默认值处理。<br/>默认值：16.0<br/>单位：vp
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  itemSize(value: string | number): AlphabetIndexerAttribute;

  /**
   * 设置未选中项文本样式。
   *
   * @param { Font } value - 未选中索引项文本样式。<br/>默认值：<br/>API version 11及以前：<br/>{<br/>size:'12.0fp',<br/> style:
   *     FontStyle.Normal,<br/> weight:FontWeight.Regular,<br/> family:'HarmonyOS Sans'<br/>}<br/>API version 12及以后：<br/
   *     >{<br/>size:'10.0vp',<br/> style:FontStyle.Normal,<br/> weight:FontWeight.Medium,<br/> family:'HarmonyOS Sans'<
   *     br/>}
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  font(value: Font): AlphabetIndexerAttribute;

  /**
   * 设置索引条提示弹窗的对齐样式。
   *
   * @param { IndexerAlign } value - 索引条提示弹窗的对齐样式，支持弹窗显示在索引条右侧和左侧。<br/>默认值：IndexerAlign.END
   * @param { Length } [offset] - 提示弹窗与索引条之间间距，大于等于0为有效值，在不设置或设置为小于0的情况下间距与popupPosition.x相同。与
   *     [popupPosition]{@link AlphabetIndexerAttribute#popupPosition}同时设置时，水平方向上offset生效，竖直方向上popupPosition.y生
   *     效。 [since 10]
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignStyle(value: IndexerAlign, offset?: Length): AlphabetIndexerAttribute;

  /**
   * 索引项选中事件，回调参数为当前选中项索引。
   *
   * @param { function } callback - Event triggered when an index item is selected. [since 8 - 17]
   * @param { OnAlphabetIndexerSelectCallback } callback - 索引项选中事件。 [since 18]
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onSelect(callback: OnAlphabetIndexerSelectCallback): AlphabetIndexerAttribute;

  /**
   * 设置提示弹窗二级索引项内容事件，回调参数为当前选中项索引，回调返回值为提示弹窗需显示的二级索引项内容。
   *
   * @param { function } callback - Callback for setting the secondary index item content event in the pop-up
   *     window. [since 8 - 17]
   * @param { OnAlphabetIndexerRequestPopupDataCallback } callback - 设置提示弹窗二级索引项内容事件。 [since 18]
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onRequestPopupData(callback: OnAlphabetIndexerRequestPopupDataCallback): AlphabetIndexerAttribute;

  /**
   * 提示弹窗二级索引选中事件，回调参数为当前选中二级索引项索引。
   *
   * @param { function } callback - Event triggered when a secondary index item in the pop-up window is
   *     selected. [since 8 - 17]
   * @param { OnAlphabetIndexerPopupSelectCallback } callback - 提示弹窗二级索引选中事件。 [since 18]
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onPopupSelect(callback: OnAlphabetIndexerPopupSelectCallback): AlphabetIndexerAttribute;

  /**
   * 设置选中项索引值。
   *
   * 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   *
   * @param { number } index - 选中项索引值。<br/>取值范围：[0, [arrayValue]{@link AlphabetIndexerOptions}.length-1]<br/>默认值：0
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selected(index: number): AlphabetIndexerAttribute;

  /**
   * 设置弹出窗口相对于索引条上边框中点的位置。
   *
   * @param { Position } value - 弹出窗口相对于索引条上边框中点的位置。<br/>默认值：{x: 60.0, y: 48.0}
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  popupPosition(value: Position): AlphabetIndexerAttribute;

  /**
   * 设置是否使用自适应折叠模式。
   *
   * 如果索引项第一项为“#”，当除去第一项后剩余索引项数量 <= 9时，选择全显示模式；9 < 剩余索引项数量 <= 13时，根据索引条高度自适应选择全显示模式或者短折叠模式；剩余索引项数量 > 13时，根据索引条高度自适应选择短折叠
   * 模式或者长折叠模式。
   *
   * 如果索引项第一项不为“#”，当所有索引项数量 <= 9时，选择全显示模式；9 < 所有索引项数量 <= 13时，根据索引条高度自适应选择全显示模式或者短折叠模式；所有索引项数量 > 13时，根据索引条高度自适应选择短折叠模式或者长
   * 折叠模式。
   *
   * > **说明：**
   *
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { boolean } value - 是否使用自适应折叠模式。<br/>默认值：<br />API version 12之前：false <br />API version 12及之后：true  <br/>
   *     true：使用自适应折叠模式。<br/>false：不使用自适应折叠模式。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  autoCollapse(value: boolean): AlphabetIndexerAttribute;

  /**
   * 设置提示弹窗索引项背板圆角半径。
   *
   * @param { number } value - 设置提示弹窗索引项背板圆角半径。
   *     默认值：24vp
   *     不支持百分比，小于0时按照0设置。
   *     提示弹窗背板圆角自适应变化（索引项圆角半径+4vp）。
   *     <br>单位为：vp。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  popupItemBorderRadius(value: number): AlphabetIndexerAttribute;

  /**
   * 设置索引项背板圆角半径。
   *
   * @param { number } value - 设置索引项背板圆角半径。<br/>。
   *     <br>单位为：vp。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  itemBorderRadius(value: number): AlphabetIndexerAttribute;

  /**
   * 设置提示弹窗的背景模糊材质。API版本26.0.0之前版本，未通过该接口设置时，默认为组件普通材质模糊，对应取值为BlurStyle中的COMPONENT_REGULAR。从API版本26.0.0开始，
   * [popupBackground]{@link AlphabetIndexerAttribute#popupBackground}和popupBackgroundBlurStyle均未被主动调用或者传入undefined时，在高档
   * 、中档算力设备默认显示为沉浸式材质[ImmersiveStyle](docroot://reference/apis-arkui/arkts-apis-uimaterial.md#immersivestyle)的THIN样式，低档
   * 算力设备默认显示为白色背景。
   *
   * @param { BlurStyle } value - 设置提示弹窗的背景模糊材质。<br/>弹窗的背景模糊材质效果会对背景色
   *     [popupBackground]{@link AlphabetIndexerAttribute#popupBackground}产生影响，可通过设置属性值为NONE关闭背景模糊材质效果。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  popupBackgroundBlurStyle(value: BlurStyle): AlphabetIndexerAttribute;

  /**
   * 设置提示弹窗一级索引项背景颜色。
   *
   * @param { ResourceColor } value - 设置提示弹窗一级索引项背景颜色。<br/>默认值：<br/>提示弹窗只有一个索引项：#00FFFFFF。<br/>提示弹窗有多个索引项：#0c182431。
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  popupTitleBackground(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * 设置是否开启触控反馈。
   *
   * @param { boolean } value - 是否支持触控反馈。<br/>true：支持触控反馈。<br/>false：不支持触控反馈。<br/>默认值：true<br/>开启触控反馈时，需要在工程的
   *     [module.json5](docroot://quick-start/module-configuration-file.md)中配置requestPermissions字段开启振动权限，配置如下：<br/>"
   *     requestPermissions": [{"name": "ohos.permission.VIBRATE"}]
   * @returns { AlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  enableHapticFeedback(value: boolean): AlphabetIndexerAttribute;
}

/**
* 可以与容器组件联动用于按逻辑结构快速定位容器显示区域的组件。
*
* > **说明：**
*
*
* ###### 子组件
*
* 无
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const AlphabetIndexer: AlphabetIndexerInterface;

/**
* Defines AlphabetIndexer Component instance.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const AlphabetIndexerInstance: AlphabetIndexerAttribute;