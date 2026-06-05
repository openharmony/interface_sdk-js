/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

/**
* 定义弧形字母索引条的初始化参数。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface ArcAlphabetIndexerInitInfo {

  /**
   * 字母索引字符串数组，不可设置为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  arrayValue: string[];

  /**
   * 初始选中项索引值，若超出索引值范围，则取默认值0。
   *
   * 该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md)双向绑定变量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selected: number;
}

/**
* 定义[onSelect]{@link ArcAlphabetIndexerAttribute#onSelect}中使用的回调类型。
*
 * @param { number } index - 选中项序号。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnSelectCallback =  (index: number) => void;

/**
* 弧形索引条是一种弧形的、可按字母顺序排序进行快速定位的组件，可以与容器组件联动，按逻辑结构快速定位至容器显示区域。
*
* > **说明：**
*
* > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export interface ArcAlphabetIndexerInterface {

  /**
   * 创建弧形索引条实例，传入弧形索引条配置项参数。
   *
   * @param { ArcAlphabetIndexerInitInfo } info - 定义弧形字母索引条的初始化参数。
   * @returns { ArcAlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  (info: ArcAlphabetIndexerInitInfo): ArcAlphabetIndexerAttribute;
}

/**
* 除支持[通用属性]{@link common}外，还支持以下属性：
*
* 除支持[通用事件]{@link common}外，还支持以下事件：
*
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare class ArcAlphabetIndexerAttribute extends CommonMethod<ArcAlphabetIndexerAttribute> {

  /**
   * 设置普通状态下索引项文字颜色。
   *
   * @param { Optional<ColorMetrics> } color - 文字颜色。<br/>默认值：0xFFFFFF，显示为白色。
   * @returns { ArcAlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  color(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute;

  /**
   * 设置选中项文字颜色。
   *
   * @param { Optional<ColorMetrics> } color - 选中项文字颜色。<br/>默认值：0xFFFFFF，显示为白色。
   * @returns { ArcAlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedColor(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute;

  /**
   * 设置提示弹窗文字颜色。
   *
   * @param { Optional<ColorMetrics> } color - 提示弹窗文字颜色。<br/>默认值：0xFFFFFF，显示为白色。
   * @returns { ArcAlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  popupColor(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute;

  /**
   * 设置选中项背景颜色。
   *
   * @param { Optional<ColorMetrics> } color - 选中项背景颜色。<br/>默认值：0x1F71FF，显示为深蓝色。
   * @returns { ArcAlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedBackgroundColor(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute;

  /**
   * 设置提示弹窗背景色。
   *
   * @param { Optional<ColorMetrics> } color - 提示弹窗背景色。<br/>默认值：0xD8404040，显示为微透明的深灰色。
   * @returns { ArcAlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  popupBackground(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute;

  /**
   * 设置是否使用提示弹窗。
   *
   * @param { Optional<boolean> } enabled - 是否使用提示弹窗。<br/>true表示使用提示弹窗；false表示不使用提示弹窗。<br/>默认值：false
   * @returns { ArcAlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  usePopup(enabled: Optional<boolean>): ArcAlphabetIndexerAttribute;

  /**
   * 设置选中项文字尺寸、粗细、字体族、倾斜等样式。
   *
   * @param { Optional<Font> } font - 选中项文字样式。<br/>默认值：{<br/>size:'13.0fp',<br/> style:FontStyle.Normal,<br/> weight:500
   *     ,<br/> family:'HarmonyOS Sans'<br/>}
   * @returns { ArcAlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedFont(font: Optional<Font>): ArcAlphabetIndexerAttribute;

  /**
   * 设置提示弹窗字体样式。
   *
   * @param { Optional<Font> } font - 提示弹窗字体样式。<br/>默认值：<br/>{<br/>size:'19.0fp',<br/> style:FontStyle.Normal,<br/>
   *     weight:500,<br/> family:'HarmonyOS Sans'<br/>}
   * @returns { ArcAlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  popupFont(font: Optional<Font>): ArcAlphabetIndexerAttribute;

  /**
   * 设置字母索引条默认字体样式。
   *
   * @param { Optional<Font> } font - 字母索引条默认字体样式。<br/>默认值：<br/>{<br/>size:'13.0fp',<br/> style:FontStyle.Normal,<br/>
   *     weight:500,<br/> family:'HarmonyOS Sans'<br/>}
   * @returns { ArcAlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  font(font: Optional<Font>): ArcAlphabetIndexerAttribute;

  /**
   * 设置字母索引条字母区域大小。
   *
   * @param { Optional<LengthMetrics> } size - 字母索引条字母区域大小，字母区域为圆形，即圆形直径。不支持设置为百分比。<br/>默认值：24.0 <br/>单位：vp
   * @returns { ArcAlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  itemSize(size: Optional<LengthMetrics>): ArcAlphabetIndexerAttribute;

  /**
   * 设置选中项索引值。
   *
   * @param { Optional<number> } index - 选中项索引值。 <br/>默认值：0 <br/>该参数支持
   *     [!!](docroot://ui/state-management/arkts-new-binding.md)双向绑定变量。
   * @returns { ArcAlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selected(index: Optional<number>): ArcAlphabetIndexerAttribute;

  /**
   * 设置是否使用自适应折叠模式。
   *
   * @param { Optional<boolean> } enable - 是否使用自适应折叠模式。<br/>默认值：true <br/>true：使用自适应折叠模式。<br/>false：不使用自适应折叠模式。
   * @returns { ArcAlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  autoCollapse(enable: Optional<boolean>): ArcAlphabetIndexerAttribute;

  /**
   * 索引条选中回调，返回值为当前选中索引。
   *
   * @param { Optional<OnSelectCallback> } handler - 回调函数类型。
   * @returns { ArcAlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onSelect(handler: Optional<OnSelectCallback>): ArcAlphabetIndexerAttribute;

  /**
   * 设置提示弹窗的背景模糊材质。未通过该接口设置时，默认为关闭模糊，对应取值为BlurStyle中的NONE。
   *
   * > **说明：**
   *
   * > 当通过popupBackgroundBlurStyle设置弹窗气泡的背景模糊材质时，不建议再通过
   * > [popupBackground]{@link ArcAlphabetIndexerAttribute#popupBackground}设置背景色。
   *
   * @param { Optional<BlurStyle> } style - 设置提示弹窗的背景模糊材质。
   * @returns { ArcAlphabetIndexerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  popupBackgroundBlurStyle(style: Optional<BlurStyle>): ArcAlphabetIndexerAttribute;
}

/**
* 弧形索引条是一种弧形的、可按字母顺序排序进行快速定位的组件，可以与容器组件联动，按逻辑结构快速定位至容器显示区域。
*
* > **说明：**
*
* > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。
*
* ###### 子组件
*
* 无
*
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @uicomponent [since 19]
 * @since 18 dynamic
 * @noninterop
 */
declare const ArcAlphabetIndexer: ArcAlphabetIndexerInterface;

/**
 * Defines ArcAlphabetIndexer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
declare const ArcAlphabetIndexerInstance: ArcAlphabetIndexerAttribute;