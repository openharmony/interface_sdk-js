
'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */

import { Builder, ComponentBuilder, CommonMethod, Optional, ColorMetrics, Font, BlurStyle, LengthMetrics, Bindable, CustomBuilderT } from '@ohos.arkui.component';

/**
 * 定义弧形字母索引条的初始化参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface ArcAlphabetIndexerInitInfo {

  /**
   * 字母索引字符串数组，不可设置为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  arrayValue: string[];

  /**
   * 初始选中项索引值，若超出索引值范围，则取默认值0。
   *
   * 该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md)双向绑定变量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  selected: int | Bindable<int>;
}

/**
 * 定义[onSelect]{@link ArcAlphabetIndexerAttribute.onSelect}中使用的回调类型。
 *
 * @param { int } index - 选中项序号。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type OnSelectCallback = (index: int) => void;

/**
 * 除支持[通用属性]{@link ./@internal/component/ets/common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export declare interface ArcAlphabetIndexerAttribute extends CommonMethod {

  /**
   * 设置普通状态下索引项文字颜色。未通过该接口设置时，默认0xFFFFFF，显示为白色。
   *
   * @param { Optional<ColorMetrics> } color - 文字颜色。<br/>取值为undefined时，普通状态下索引项文字颜色为0xFFFFFF，显示为白色。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  color(color: Optional<ColorMetrics>): this;

  /**
   * 设置选中项文字颜色。未通过该接口设置时，默认0xFFFFFF，显示为白色。
   *
   * @param { Optional<ColorMetrics> } color - 选中项文字颜色。<br/>取值为undefined时，选中项文字颜色为0xFFFFFF，显示为白色。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  selectedColor(color: Optional<ColorMetrics>): this;

  /**
   * 设置提示弹窗文字颜色。未通过该接口设置时，默认0xFFFFFF，显示为白色。
   *
   * @param { Optional<ColorMetrics> } color - 提示弹窗文字颜色。<br/>取值为undefined时，提示弹窗文字颜色为0xFFFFFF，显示为白色。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  popupColor(color: Optional<ColorMetrics>): this;

  /**
   * 设置选中项背景颜色。未通过该接口设置时，默认0x1F71FF，显示为蓝色。
   *
   * @param { Optional<ColorMetrics> } color - 选中项背景颜色。<br/>取值为undefined时，选中项背景颜色为0x1F71FF，显示为蓝色。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  selectedBackgroundColor(color: Optional<ColorMetrics>): this;

  /**
   * 设置提示弹窗背景色。未通过该接口设置时，默认0xD8404040，显示为灰色。
   *
   * @param { Optional<ColorMetrics> } color - 提示弹窗背景色。<br/>取值为undefined时，提示弹窗背景色为0xD8404040，显示为灰色。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  popupBackground(color: Optional<ColorMetrics>): this;

  /**
   * 设置是否使用提示弹窗。未通过该接口设置时，默认为false，不使用提示弹窗。
   *
   * @param { Optional<boolean> } enabled - 是否使用提示弹窗。<br/>true表示使用提示弹窗；false表示不使用提示弹窗。<br/>取值为undefined时，不使用提示弹窗。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  usePopup(enabled: Optional<boolean>): this;

  /**
   * 设置选中项文字尺寸、粗细、字体族、倾斜等样式。未通过该接口设置时，默认样式为{size: '13.0fp', style: FontStyle.Normal, weight:500, family: 'HarmonyOS Sans
   * ' }。
   *
   * @param { Optional<Font> } font - 选中项文字样式。<br/>取值为undefined时，选中项文字尺寸、粗细、字体族、倾斜等样式为：<br/>{<br/>size:'13.0fp',<br/>
   *     style:FontStyle.Normal,<br/> weight:500,<br/> family:'HarmonyOS Sans'<br/>}
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  selectedFont(font: Optional<Font>): this;

  /**
   * 设置提示弹窗字体样式。未通过该接口设置时，默认样式为{size: '13.0fp', style: FontStyle.Normal, weight:500, family: 'HarmonyOS Sans'}。
   *
   * @param { Optional<Font> } font - 提示弹窗字体样式。<br/>取值为undefined时，弹窗字体样式为：<br/>{<br/>size:'13.0fp',<br/> style:
   *     FontStyle.Normal,<br/> weight:500,<br/> family:'HarmonyOS Sans'<br/>}
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  popupFont(font: Optional<Font>): this;

  /**
   * 设置字母索引条默认字体样式。未通过该接口设置时，默认样式为{size: '13.0fp', style: FontStyle.Normal, weight:500, family: 'HarmonyOS Sans'}。
   *
   * @param { Optional<Font> } font - 字母索引条默认字体样式。<br/>取值为undefined时，字母索引条默认字体样式为：<br/>{<br/>size:'13.0fp',<br/> style:
   *     FontStyle.Normal,<br/> weight:500,<br/> family:'HarmonyOS Sans'<br/>}
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  font(font: Optional<Font>): this;

  /**
   * 设置字母索引条字母区域大小。未通过该接口设置时，默认字母索引条区域大小为24.0vp。
   *
   * @param { Optional<LengthMetrics> } size - 字母索引条字母区域大小，字母区域为圆形，即圆形直径。不支持设置为百分比。<br/>取值为undefined时，字母索引条字母区域大小为24.0。
   *     <br/>单位：vp
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  itemSize(size: Optional<LengthMetrics>): this;

  /**
   * 设置选中项索引值。未通过该接口设置时，选中项索引值默认为0。
   *
   * @param { Optional<int> | Bindable<int> } index - 选中项索引值。<br/>取值为undefined时，选中项索引值为0。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  selected(index: Optional<int> | Bindable<int>): this;

  /**
   * 设置是否使用自适应折叠模式。未通过该接口设置时，默认使用自适应折叠模式。
   *
   * @param { Optional<boolean> } enable - 是否使用自适应折叠模式。<br/>true表示使用自适应折叠模式；false表示不使用自适应折叠模式。<br/>取值为undefined时，使用自适应折叠
   *     模式。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  autoCollapse(enable: Optional<boolean>): this;

  /**
   * 索引条选中回调，返回值为当前选中索引。
   *
   * @param { Optional<OnSelectCallback> } handler - 回调函数类型。<br>取值为undefined时，无回调。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onSelect(handler: Optional<OnSelectCallback>): this;

  /**
   * 设置提示弹窗的背景模糊材质。未通过该接口设置时，默认取值为BlurStyle.NONE，表示无模糊。
   *
   * > **说明：**
   * >
   * > 当通过popupBackgroundBlurStyle设置弹窗气泡的背景模糊材质时，不建议再通过
   * > [popupBackground]{@link ArcAlphabetIndexerAttribute.popupBackground}设置背景色。
   *
   * @param { Optional<BlurStyle> } style - 设置提示弹窗的背景模糊材质。<br/>取值为undefined时，提示弹窗的背景模糊材质为BlurStyle.NONE，无模糊效果。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  popupBackgroundBlurStyle(style: Optional<BlurStyle>): this;

  /**
   * 设置arcAlphabetIndexer选项。
   *
   * @param { ArcAlphabetIndexerInitInfo } info - arcAlphabetIndexer构造函数选项
   * @returns { ArcAlphabetIndexerAttribute } 返回ArcAlphabetIndexerAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setArcAlphabetIndexerOptions(info: ArcAlphabetIndexerInitInfo): this;
}

/**
 * 创建弧形索引条实例，传入弧形索引条配置项参数。
 *
 * 无
 *
 * @param { ArcAlphabetIndexerInitInfo } info - 定义弧形字母索引条的初始化参数。
 * @returns { ArcAlphabetIndexerAttribute } -ArcAlphabetIndexer实例对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentBuilder
export declare function ArcAlphabetIndexer(
    info: ArcAlphabetIndexerInitInfo
): ArcAlphabetIndexerAttribute;

/**
 * 创建弧形索引条实例，传入弧形索引条配置项参数。
 *
 * @param { CustomBuilderT<ArcAlphabetIndexerAttribute> } style_ - arcAlphabetIndexer属性实例。
 * @returns { ArcAlphabetIndexerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function ArcAlphabetIndexer(
   style_: CustomBuilderT<ArcAlphabetIndexerAttribute>,
): ArcAlphabetIndexerAttribute;