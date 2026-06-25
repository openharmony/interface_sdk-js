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
 * Enumerates the alignment styles of the indexer pop-up window.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum IndexerAlign {

  /**
   * The pop-up window is displayed on the right of the indexer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Left = 0,

  /**
   * The pop-up window is displayed on the left of the indexer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Right = 1,

  /**
   * The pop-up window is displayed on the right of the indexer for left-to-right scripts, and on the left of the
   * indexer for right-to-left scripts.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  START = 2,

  /**
   * The pop-up window is displayed on the left of the indexer for left-to-right scripts, and on the right of the
   * indexer for right-to-left scripts.
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
 * Defines the options of the **AlphabetIndexer** component.
 *
 * > **NOTE**
 *
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface AlphabetIndexerOptions {

  /**
   * Array of index items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  arrayValue: Array<string>;

  /**
   * Index of the initial selected item. If the value is out of range, the default value **0** is used. When this
   * parameter and the [selected]{@link AlphabetIndexerAttribute#selected} property are set at the same time, the
   * **selected** property has a higher priority.
   *
   * Value range: [0, arrayValue.length-1]
   *
   * This parameter supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  selected: number;
}

/**
 * The **AlphabetIndexer** component can create a logically indexed array of items in a container for instant location.
 *
 * > **NOTE**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface AlphabetIndexerInterface {

  /**
   * Creates an **AlphabetIndexer** component.
   *
   * @param { object } value [since 7 - 17]
   * @param { AlphabetIndexerOptions } options - Options of the **AlphabetIndexer** component. [since 18]
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options: AlphabetIndexerOptions): AlphabetIndexerAttribute;
}

/**
 * Represents the callback invoked when an index item is selected.
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
 * Represents the callback invoked when a secondary index item in the pop-up window is selected.
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
 * Represents the callback invoked when an index item is selected and
 * [usingPopup]{@link AlphabetIndexerAttribute#usingPopup} is set to **true**.
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
 * When the [width]{@link CommonMethod#width(value: Length)} attribute is set to **"auto"**, the width is adaptive. This
 * means that the width will adjust according to the maximum width of the index items.
 *
 * The default value of the [padding]{@link CommonMethod#padding} attribute is 4 vp.
 *
 * The [maxFontScale]{@link TextAttribute#maxFontScale} and [minFontScale]{@link TextAttribute#minFontScale} attributes
 * are both set to a constant value of 1, which means that they do not change with the system font size.
 *
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class AlphabetIndexerAttribute extends CommonMethod<AlphabetIndexerAttribute> {

  /**
   * Triggered when an index item is selected, with the callback parameter being the index of the currently selected
   * item.
   *
   * > **NOTE**
   *
   * @param { function } callback - Index of the selected item.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead onSelect
   */
  onSelected(callback: (index: number) => void): AlphabetIndexerAttribute;

  /**
   * Sets the text color for unselected items.
   *
   * @param { ResourceColor } value - Text color of unselected items.<br>Default value: **0x99182431**, which is a
   *     slightly transparent brown.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets the text color for the selected item.
   *
   * @param { ResourceColor } value - Text color of the selected item.<br>Default value: **0xFF007DFF**, which is blue.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  selectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets the text color for the primary index item in the pop-up window.
   *
   * @param { ResourceColor } value - Text color of the primary index item in the pop-up window.<br>Default value:
   *     **0xFF007DFF**, which is blue.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  popupColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets the background color of the selected item.
   *
   * @param { ResourceColor } value - Background color of the selected item.<br>Default value: **0x1A007DFF**, which is
   *     semi-transparent blue-green.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  selectedBackgroundColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets the background color for the pop-up window.
   *
   * If this API is not called or the **value** parameter is set to **undefined**:
   *
   * In API version 11 and earlier versions, the default background color of the pop-up is **0xFFFFFFFF**, which is
   * white.
   *
   * In API versions 12 to 24, the default background color is **#66808080**, which is translucent gray.
   *
   * Since API version 26.0.0, if neither **popupBackground** nor
   * [popupBackgroundBlurStyle]{@link AlphabetIndexerAttribute#popupBackgroundBlurStyle} is called or the **value**
   * parameter is set to **undefined**, the **THIN** style of
   * **[ImmersiveStyle](docroot://reference/apis-arkui/arkts-apis-uimaterial.md#immersivestyle)** is displayed by
   * default on devices with high- and mid-level computing power, and the white background is displayed by default on
   * devices with low-level computing power. If **popupBackgroundBlurStyle** is called and the **value** parameter is
   * set to a valid value, the background color of the pop-up is **#66808080** by default, which is translucent gray.
   *
   * @param { ResourceColor } value - Background color of the pop-up window.<br>The background blur effect of the pop-up
   *     text can affect the background color. You can disable the effect by setting
   *     [popupBackgroundBlurStyle]{@link AlphabetIndexerAttribute#popupBackgroundBlurStyle} to **NONE**.<br>
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  popupBackground(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets the text color for the selected secondary index item in the pop-up window.
   *
   * @param { ResourceColor } value - Text color of the selected secondary index items in the pop-up window.<br>Default
   *     value: **#FF182431**, which is dark blue.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popupSelectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets the text color for the unselected secondary index items in the pop-up window.
   *
   * @param { ResourceColor } value - Text color of the unselected secondary index items in the pop-up window.<br>
   *     Default value: **#FF182431**, which is dark blue.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popupUnselectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets the background color for the secondary index item in the pop-up window.
   *
   * @param { ResourceColor } value - Background color of the secondary index item in the pop-up window.<br>Default
   *     value:<br>API version 11 and earlier: **#FFFFFFFF**, which is white.<br>API version 12 and later:
   *     **#00000000**, which is transparent.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popupItemBackgroundColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets whether to display the pop-up window.
   *
   * @param { boolean } value - Whether to display the pop-up window.<br>Default value: **false**.<br>**true**: Display
   *     the pop-up window.<br>**false**: Do not display the pop-up window.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  usingPopup(value: boolean): AlphabetIndexerAttribute;

  /**
   * Sets the text style for the selected item.
   *
   * @param { Font } value - Text style of the selected item.<br>Default value:<br>API version 11 and earlier:<br>{<br>
   *     size:'12.0fp',<br> style:FontStyle.Normal,<br> weight:FontWeight.Regular,<br> family:'HarmonyOS Sans'<br>}<br>
   *     API version 12 and later:<br>{<br>size:'10.0vp',<br> style:FontStyle.Normal,<br> weight:FontWeight.Medium,<br>
   *     family:'HarmonyOS Sans'<br>}
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  selectedFont(value: Font): AlphabetIndexerAttribute;

  /**
   * Sets the text style for the primary index item in the pop-up window.
   *
   * @param { Font } value - Text style of the primary index item in the pop-up window.<br>Default value:<br>{<br>size:'
   *     24.0vp',<br> style:FontStyle.Normal,<br> weight:FontWeight.Medium,<br> family:'HarmonyOS Sans'<br>}
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  popupFont(value: Font): AlphabetIndexerAttribute;

  /**
   * Sets the text style for the secondary index item in the pop-up window.
   *
   * @param { Font } value - Text style of the secondary index item in the pop-up window.<br>Default value:<br>{<br>size
   *     :24,<br>weight:FontWeight.Medium<br>}
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popupItemFont(value: Font): AlphabetIndexerAttribute;

  /**
   * Sets the size of the index item area.
   *
   * @param { string | number } value - Size of the index item area, which is a square, meaning the side length of the
   *     square. This attribute cannot be set in percentage.<br>The actual value is restricted by the component size.
   *     The maximum width of an index item is the component width minus the left and right
   *     [padding]{@link CommonMethod#padding}, and the maximum height of an index item is (component height minus the
   *     top and bottom [padding]{@link CommonMethod#padding})/number of index items. If the input value is less than or
   *     equal to 0, the default value is used.<br>Default value: **16.0**<br>Unit: vp
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  itemSize(value: string | number): AlphabetIndexerAttribute;

  /**
   * Sets the text style for unselected items.
   *
   * @param { Font } value - Text style of unselected items.<br>Default value:<br>API version 11 and earlier:<br>{<br>
   *     size:'12.0fp',<br> style:FontStyle.Normal,<br> weight:FontWeight.Regular,<br> family:'HarmonyOS Sans'<br>}<br>
   *     API version 12 and later:<br>{<br>size:'10.0vp',<br> style:FontStyle.Normal,<br> weight:FontWeight.Medium,<br>
   *     family:'HarmonyOS Sans'<br>}
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  font(value: Font): AlphabetIndexerAttribute;

  /**
   * Sets the alignment style of the indexer pop-up window.
   *
   * @param { IndexerAlign } value - Alignment style of the indexer pop-up window. The pop-up window can be displayed on
   *     the right or left of the indexer.<br>Default value: **IndexerAlign.END**
   * @param { Length } [offset] - Spacing between the pop-up window and the alphabetic index bar. A value greater than
   *     or equal to **0** is valid. If this parameter is set to a value less than **0** or is not set, the spacing is
   *     the same as **popupPosition**. When this parameter and
   *     [popupPosition]{@link AlphabetIndexerAttribute#popupPosition} are set at the same time, **offset** takes effect
   *     in the horizontal direction, and **popupPosition.y** takes effect in the vertical direction. [since 10]
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignStyle(value: IndexerAlign, offset?: Length): AlphabetIndexerAttribute;

  /**
   * Triggered when an index item is selected, with the callback parameter being the index of the currently selected
   * item.
   *
   * @param { function } callback - Event triggered when an index item is selected. [since 8 - 17]
   * @param { OnAlphabetIndexerSelectCallback } callback - Event triggered when an index item is selected. [since 18]
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onSelect(callback: OnAlphabetIndexerSelectCallback): AlphabetIndexerAttribute;

  /**
   * Triggered for a secondary index item content event in the pop-up window. The callback parameter is the index of the
   * selected secondary index item. The return value is the secondary index item content to be displayed in the pop-up
   * window.
   *
   * @param { function } callback - Callback for setting the secondary index item content event in the pop-up
   *     window. [since 8 - 17]
   * @param { OnAlphabetIndexerRequestPopupDataCallback } callback - Callback for setting the secondary index item
   *     content event in the pop-up window. [since 18]
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onRequestPopupData(callback: OnAlphabetIndexerRequestPopupDataCallback): AlphabetIndexerAttribute;

  /**
   * Triggered when a secondary index item in the pop-up window is selected. The callback parameter is the index of the
   * selected secondary index item.
   *
   * @param { function } callback - Event triggered when a secondary index item in the pop-up window is
   *     selected. [since 8 - 17]
   * @param { OnAlphabetIndexerPopupSelectCallback } callback - Event triggered when a secondary index item in the pop-
   *     up window is selected. [since 18]
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onPopupSelect(callback: OnAlphabetIndexerPopupSelectCallback): AlphabetIndexerAttribute;

  /**
   * Sets the index of the selected item.
   *
   * Since API version 10, this parameter supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * @param { number } index - Index of the selected item.<br>Value range:
   *     [0, [arrayValue]{@link AlphabetIndexerOptions}.length – 1]<br>Default value: **0**
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selected(index: number): AlphabetIndexerAttribute;

  /**
   * Sets the position of the pop-up window relative to the center of the indexer's top border.
   *
   * @param { Position } value - Position of the pop-up window relative to the center of the indexer's top border.<br>
   *     Default value: **{x: 60.0, y: 48.0}**
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  popupPosition(value: Position): AlphabetIndexerAttribute;

  /**
   * Sets whether to enable the adaptive collapse behavior for the indexer.
   *
   * When the first index item is **"#"**: Remaining items ≤ 9: Full display mode; 9 < Remaining items ≤ 13: Adapts
   * between full display and short collapse modes based on the indexer height; remaining items > 13: Adapts between
   * short and long collapse modes based on the indexer height.
   *
   * When the first index item is not **"#"**: All items ≤ 9: Full display mode; 9 < All items ≤ 13: Adapts between full
   * display and short collapse modes based on the indexer height; all items > 13: Adapts between short and long
   * collapse modes based on the indexer height.
   *
   * > **NOTE**
   *
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { boolean } value - Whether to auto-collapse or expand the indexer bar.<br>Default value:<br>Before API
   *     version 12: **false**<br>Since API version 12: **true**<br>**true**: Enable the adaptive collapse behavior.<br>
   *     **false**: Disable the adaptive collapse behavior.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  autoCollapse(value: boolean): AlphabetIndexerAttribute;

  /**
   * Sets the radius of the index border corners in the pop-up window.
   *
   * @param { number } value - Radius of the index background border corners in the pop-up window.
   *     <br>Unit: vp.
   *     **24vp**.<br>This parameter cannot be set in percentage. If the value specified is less than **0**, **0** is
   *     used.<br>The radius of the index background border corners in the pop-up window is automatically adaptive (
   *     radius of the index corners + 4 vp).
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  popupItemBorderRadius(value: number): AlphabetIndexerAttribute;

  /**
   * Sets the radius of the index background border corners in the alphabetic index bar.
   *
   * @param { number } value - <br>Unit: vp.
   *     - Radius of the index background border corners in the alphabetic index bar.<br>Default
   *     value: **8vp**<br>This parameter cannot be set in percentage. If the value specified is less than **0**, **0**
   *     is used.<br>The radius of the index background border corners in the alphabetic index bar is automatically
   *     adaptive (radius of the index corners + 4 vp).
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  itemBorderRadius(value: number): AlphabetIndexerAttribute;

  /**
   * Sets the background blur style of the pop-up window. In versions earlier than API version 26.0.0, if this API is
   * not called, the **COMPONENT_REGULAR** value in **BlurStyle** is used by default. Since API version 26.0.0, if
   * neither [popupBackground]{@link AlphabetIndexerAttribute#popupBackground} nor **popupBackgroundBlurStyle** is
   * called or the value is **undefined**, the **THIN** style of
   * [ImmersiveStyle](docroot://reference/apis-arkui/arkts-apis-uimaterial.md#immersivestyle) is used by default on
   * devices with high- and mid-level computing power, and the white background is used by default on devices with low-
   * level computing power.
   *
   * @param { BlurStyle } value - Background blur style of the pop-up window.<br>The background blur effect can affect
   *     [popupBackground]{@link AlphabetIndexerAttribute#popupBackground}. You can disable the effect by setting it to
   *     **NONE**.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  popupBackgroundBlurStyle(value: BlurStyle): AlphabetIndexerAttribute;

  /**
   * Sets the background color for the primary index item in the pop-up window.
   *
   * @param { ResourceColor } value - Background color for the primary index item in the pop-up window.<br>Default value
   *     :<br>If the pop-up window has only one index: **#00FFFFFF**.<br>If the pop-up window has multiple indexes:
   *     **#0c182431**.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  popupTitleBackground(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Sets whether to enable haptic feedback.
   *
   * @param { boolean } value - Whether to enable haptic feedback.<br>**true**: To enable haptic feedback.<br>**false**:
   *     Not to enable haptic feedback.<br>Default value: **true**<br>To enable haptic feedback, you must declare the
   *     **ohos.permission.VIBRATE** permission under **requestPermissions** in the
   *     [module.json5](docroot://quick-start/module-configuration-file.md) file of the project.<br>"requestPermissions"
   *     : [{"name": "ohos.permission.VIBRATE"}]
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
 * The **AlphabetIndexer** component can create a logically indexed array of items in a container for instant location.
 *
 * > **NOTE**
 *
 * ###### Child Components
 *
 * Not supported
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