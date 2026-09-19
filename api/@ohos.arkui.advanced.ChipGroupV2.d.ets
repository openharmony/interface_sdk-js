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
 */

import { ColorMetrics, LengthMetrics, SizeT } from '@ohos.arkui.node';
import { SymbolGlyphModifier } from './@ohos.arkui.modifier';
import {
  ChipV2Size,
  ChipV2ImageIconConfig,
  ChipV2SuffixImageIconConfig,
  ChipV2PrefixImageIconConfig,
  ChipV2LabelConfig,
  ChipV2CloseConfig,
  ChipV2SymbolIconConfig,
  ChipV2PrefixSymbolIconConfig,
  ChipV2SuffixSymbolIconConfig,
  ChipV2AccessibilityConfig,
  ChipV2ImageIcon,
  ChipV2SuffixImageIcon,
  ChipV2PrefixImageIcon,
  ChipV2Label,
  ChipV2CloseIcon,
  ChipV2SymbolIcon,
  ChipV2PrefixSymbolIcon,
  ChipV2SuffixSymbolIcon
} from '@ohos.arkui.advanced.ChipV2';
import uiMaterial from './@ohos.arkui.uiMaterial';

/**
 * Defines the non-common attribute configuration of a **ChipV2**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2ItemConfig {

    /**
     * Prefix image icon, which is used to display an image icon before the **ChipV2** text. Set this attribute when an 
     * icon identifier needs to be displayed on the left side of **ChipV2**.
     * 
     * Default value: no prefix image icon.
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    prefixIcon?: ChipV2PrefixImageIconConfig;

     /**
      * Prefix symbol icon, which is used to display a symbol icon before the **ChipV2** text. Set this attribute when a
      * symbol icon identifier needs to be displayed on the left side of **ChipV2**.
      * 
      * Default value: no prefix symbol icon.
      * 
      * If the value is **undefined**, the default value is used.
      *
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @stagemodelonly
      * @crossplatform
      * @atomicservice
      * @since 26.0.0 dynamic
      */
     prefixSymbolIcon?: ChipV2PrefixSymbolIconConfig;

    /**
     * Text attribute.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    label: ChipV2LabelConfig;

    /**
     * Suffix image icon, which is used to display an image icon after the **ChipV2** text. When this attribute is set, 
     * the **allowClose** attribute does not take effect.
     * 
     * Default value: no suffix image icon is displayed.
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    suffixIcon?: ChipV2SuffixImageIconConfig;

     /**
      * Suffix symbol icon, which is used to display a symbol icon after the **ChipV2** text. When this attribute is 
      * set, the **allowClose** attribute does not take effect.
      * 
      * Default value: no suffix symbol icon is displayed.
      * 
      * If the value is **undefined**, the default value is used.
      *
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @stagemodelonly
      * @crossplatform
      * @atomicservice
      * @since 26.0.0 dynamic
      */
     suffixSymbolIcon?: ChipV2SuffixSymbolIconConfig;

    /**
     * Whether to display the close icon. Value rules: **true** means to display the close icon, and **false** means the
     * opposite.
     * 
     * When **suffixIcon** or **suffixSymbolIcon** is passed in, **allowClose** does not take effect. When neither 
     * **suffixIcon** nor **suffixSymbolIcon** is passed in, **allowClose** determines whether the close icon is 
     * displayed.
     * 
     * Default value: **false**
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    allowClose?: boolean;

    /**
     * Configuration of the close icon, including accessibility attribute configuration. Set this attribute when you 
     * need to customize the size or accessibility attributes of the close icon.
     * 
     * Default value:
     * 
     * - **fontSize**: when **size** is **ChipV2Size.SMALL**, the default value is 
     * `$r('sys.float.chip_small_font_size')`; in other cases, the default value is 
     * `$r('sys.float.chip_normal_font_size')`.
     * - Accessibility: no accessibility description.
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    closeIcon?: ChipV2CloseConfig;

    /**
     * Accessibility description of the **ChipV2** item in **ChipGroupV2**. This description is used to explain the 
     * **ChipV2** item in **ChipGroupV2** to users in detail. You should provide a relatively detailed text description 
     * for the attributes of the **ChipV2** item in **ChipGroupV2** to help users understand the operation to be 
     * performed and its possible results, especially when these results cannot be directly learned from the attributes 
     * and accessibility text of the **ChipV2** item in **ChipGroupV2** alone. If the **ChipV2** item in **ChipGroupV2**
     * has both a text attribute and an accessibility description attribute and the item is selected, the system first 
     * announces the item's text attribute, and then announces the content of the accessibility description attribute.
     * 
     * Default value: empty string.
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Accessibility level of the **ChipV2** item in **ChipGroupV2**. This attribute is used to control whether the 
     * **ChipV2** item in **ChipGroupV2** can be recognized by accessibility services.
     * 
     * Supported values:
     * 
     * **"auto"**: The attribute value of the **ChipV2** item in **ChipGroupV2** is converted to **"yes"**.
     * 
     * **"yes"**: The **ChipV2** item in **ChipGroupV2** can be recognized by accessibility services.
     * 
     * "no": The **ChipV2** item in **ChipGroupV2** cannot be recognized by accessibility services.
     * 
     * **"no-hide-descendants"**: The **ChipV2** item in **ChipGroupV2** and all its child components cannot be 
     * recognized by accessibility services.
     * 
     * If a value outside the supported range is passed in, the default value is used.
     * 
     * Default value: **"auto"**
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @default auto
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityLevel?: string;
}

/**
 * Defines a single chip item in the **ChipGroupV2** component.
 *
 * > **NOTE**
 * >
 * > 1. If you need to support the close function while displaying a suffix icon (**suffixIcon** or
 * > **suffixSymbolIcon**), it is recommended to implement the deletion logic in the click event of **suffixIcon** or
 * > **suffixSymbolIcon**, or use other interaction methods as alternatives.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipGroupV2Item {
    /**
     * Prefix icon, used to display an image icon before the **ChipV2** text. Set this attribute when an icon identifier
     * needs to be displayed on the left side of the **ChipV2**.
     * 
     * Default value: no prefix image icon.
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public prefixIcon?: ChipV2PrefixImageIcon;

    /**
     * Prefix symbol icon, used to display a symbol icon before the **ChipV2** text. Set this attribute when a symbol 
     * icon identifier needs to be displayed on the left side of the **ChipV2**.
     * 
     * Default value: no prefix symbol icon.
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public prefixSymbolIcon?: ChipV2PrefixSymbolIcon;

    /**
     * **ChipV2** text.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public label: ChipV2Label;

    /**
     * Suffix icon, used to display an image icon after the **ChipV2** text. When this attribute is set, the 
     * **allowClose** attribute does not take effect.
     * 
     * Default value: no suffix image icon displayed.
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public suffixIcon?: ChipV2SuffixImageIcon;

    /**
     * Suffix symbol icon, used to display a symbol icon after the **ChipV2** text. When this attribute is set, the 
     * **allowClose** attribute does not take effect.
     * 
     * Default value: no suffix symbol icon displayed.
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public suffixSymbolIcon?: ChipV2SuffixSymbolIcon;

    /**
     * Whether to display the close icon. The value **true** means the close icon is displayed, and **false** means the 
     * opposite. When **suffixIcon** or **suffixSymbolIcon** is passed in, **allowClose** does not take effect. When 
     * neither **suffixIcon** nor **suffixSymbolIcon** is passed in, **allowClose** determines whether the close icon is
     * displayed.
     * 
     * Default value: **false**
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public allowClose?: boolean;

    /**
     * Configuration of the close icon, including accessibility attribute configuration. Set this attribute when you 
     * need to customize the size or accessibility attributes of the close icon.
     * 
     * Default value:
     * 
     * - **fontSize**: when **size** is **ChipV2Size.SMALL**, the default value is 
     * `$r('sys.float.chip_small_font_size')`; in other cases, the default value is 
     * `$r('sys.float.chip_normal_font_size')`.
     * - Accessibility: no accessibility description.
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public closeIcon?: ChipV2CloseConfig;

    /**
     * Accessibility description. This attribute is used to explain the component to users in detail. You should provide
     * a thorough text description for this attribute to help users understand the operation and its possible results, 
     * especially when these results cannot be directly inferred from the component's attributes and accessibility text 
     * alone. When a component has both a text attribute and an accessibility description attribute and it is selected, 
     * the system first reads out the component's text attribute, followed by the content of the accessibility 
     * description attribute.
     * 
     * Default value: empty string.
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public accessibilityDescription?: ResourceStr;

    /**
     * Accessibility level. This attribute is used to control whether the component can be recognized by accessibility 
     * services.
     * 
     * Supported values:
     * 
     * **"auto"**: the attribute value of the component is converted to **"yes"**.
     * 
     * **"yes"**: the component can be recognized by accessibility services.
     * 
     * **"no"**: the component cannot be recognized by accessibility services.
     * 
     * **"no-hide-descendants"**: the component and all its child components cannot be recognized by accessibility 
     * services.
     * 
     * When a value outside the supported range is passed in, the default value is used.
     * 
     * Default value: **"auto"**
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @default auto
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public accessibilityLevel?: string;

    /**
     * A constructor used to create a **ChipGroupV2Item** object.
     *
     * @param { ChipGroupV2ItemConfig } config - Configuration of the **ChipGroupV2** item.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    constructor(config: ChipGroupV2ItemConfig);
}

/**
 * Defines the array class of the **ChipGroupV2** item, which inherits from Array<
 * [ChipGroupV2Item]{@link ChipGroupV2Item}>.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipGroupV2Items extends Array<ChipGroupV2Item> {
    /**
     * A constructor used to create a **ChipGroupV2Items** object.
     *
     * @param { ChipGroupV2ItemConfig[] } items - Array of **ChipGroupV2** item configurations.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    constructor(items: ChipGroupV2ItemConfig[]);
}

/**
 * Defines the common attribute configuration of **ChipV2**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2ItemStyleConfig {

    /**
     * Size of **ChipV2**. When using this attribute, import the **ChipV2Size** type from the **ChipV2** component.
     * 
     * Default value: **ChipV2Size.NORMAL**
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    size?: ChipV2Size | SizeT<LengthMetrics>;

    /**
     * Background color of **ChipV2**.
     * 
     * Default value: **$r('sys.color.ohos_id_color_button_normal')**
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    backgroundColor?: ColorMetrics;

    /**
     * Font color of **ChipV2**.
     * 
     * Default value: **$r('sys.color.ohos_id_color_text_primary')**
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    fontColor?: ColorMetrics;

    /**
     * Font color of **ChipV2** when selected. After this attribute is set, when the **ChipV2** is selected, the label 
     * text is displayed in this color, replacing the **fontColor** in the unselected state.
     * 
     * Default value: **$r('sys.color.ohos_id_color_text_primary_contrary')**
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    selectedFontColor?: ColorMetrics;

    /**
     * Background color of **ChipV2** when selected. After this attribute is set, when the **ChipV2** is selected, the 
     * background is filled with this color, replacing the **backgroundColor** in the unselected state.
     * 
     * Default value: **$r('sys.color.ohos_id_color_emphasize')**
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    selectedBackgroundColor?: ColorMetrics;

    /**
     * System material style of the component. Different materials have different effects, which can affect the 
     * component's [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}, 
     * [borderColor]{@link CommonMethod#borderColor}, [borderWidth]{@link CommonMethod#borderWidth}, 
     * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} effect, and 
     * [materialFilter]{@link CommonMethod#materialFilter} effect.
     * 
     * Default value: **undefined**, no material style is applied.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    backgroundSystemMaterial?: uiMaterial.Material;

    /**
     * System material style of the component in the selected state. After this attribute is set, when the **ChipV2** is
     * selected, this material style is applied, replacing the **backgroundSystemMaterial** in the unselected state. 
     * Different materials have different effects, which can affect the component's 
     * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}, 
     * [borderColor]{@link CommonMethod#borderColor}, [borderWidth]{@link CommonMethod#borderWidth}, 
     * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} effect, and 
     * [materialFilter]{@link CommonMethod#materialFilter} effect.
     * 
     * Default value: **undefined**, no material style is applied.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    selectedBackgroundSystemMaterial?: uiMaterial.Material;
}

/**
 * Defines the common attribute class of **ChipV2**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipGroupV2ItemStyle {
    /**
     * Size of **ChipV2**.
     * 
     * Default value: **ChipV2Size.NORMAL**
     * 
     * If the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public size?: ChipV2Size | SizeT<LengthMetrics>;
    /**
     * Background color of **ChipV2**.
     * 
     * Default value: **$r('sys.color.ohos_id_color_button_normal')**
     * 
     * If the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public backgroundColor?: ColorMetrics;

    /**
     * Font color of **ChipV2**.
     * 
     * Default value: **$r('sys.color.ohos_id_color_text_primary')**
     * 
     * If the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public fontColor?: ColorMetrics;

    /**
     * Font color of **ChipV2** when selected. After this attribute is set, when the **ChipV2** is selected, the label 
     * text is displayed in this color, replacing the **fontColor** in the unselected state.
     * 
     * Default value: **$r('sys.color.ohos_id_color_text_primary_contrary')**
     * 
     * If the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public selectedFontColor?: ColorMetrics;

    /**
     * Background color of **ChipV2** when selected. After this attribute is set, when the **ChipV2** is selected, the 
     * background is filled with this color, replacing the **backgroundColor** in the unselected state.
     * 
     * Default value: **$r('sys.color.ohos_id_color_emphasize')**
     * 
     * If the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public selectedBackgroundColor?: ColorMetrics;

  /**
   * System material style of the component. Different materials have different effects, which can affect the component'
   * s [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}, 
   * [borderColor]{@link CommonMethod#borderColor}, [borderWidth]{@link CommonMethod#borderWidth}, 
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} effect, and 
   * [materialFilter]{@link CommonMethod#materialFilter} effect.
   * 
   * Default value: **undefined**, no material style is applied.
   * 
   * Decorator: **@Trace**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * System material style of the component in the selected state. After this attribute is set, when the **ChipV2** is 
   * selected, this material style is applied, replacing the **backgroundSystemMaterial** in the unselected state. 
   * Different materials have different effects, which can affect the component's 
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}, 
   * [borderColor]{@link CommonMethod#borderColor}, [borderWidth]{@link CommonMethod#borderWidth}, 
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} effect, and 
   * [materialFilter]{@link CommonMethod#materialFilter} effect.
   * 
   * Default value: **undefined**, no material style is applied.
   * 
   * Decorator: **@Trace**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public selectedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * A constructor used to create a **ChipGroupV2ItemStyle** object.
   *
   * @param { ChipGroupV2ItemStyleConfig } config - Style configuration of the **ChipGroupV2** item.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipGroupV2ItemStyleConfig);
}

/**
 * Defines the left and right padding of **ChipGroupV2** and the spacing configuration between **ChipV2** components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2SpaceConfig {

    /**
     * Spacing between **ChipV2** components (percentage not supported).
     * 
     * Value range:
     * 
     * - number type: [0, +∞), for example, 0, 8, 16, 24.5.
     * - string type: a string in fp | vp | px | lpx units with a numeric value greater than or equal to 0, for example,
     * "8vp", "16fp", "12px", "10lpx".
     * - Not supported: negative numbers, percentage units, invalid string formats.
     * 
     * If a value outside the valid range or in an unsupported format is passed, the default value is used.
     * 
     * Default value: **8**
     * 
     * Unit: vp
     * 
     * If the value is undefined, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    itemSpace?: string | number;

    /**
     * Left padding (percentage not supported).
     * 
     * Default value: **16**
     * 
     * Unit: vp
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    startSpace?: Length;

    /**
     * Right padding (percentage not supported).
     * 
     * Default value: **16**
     * 
     * Unit: vp
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    endSpace?: Length;
}

/**
 * Defines the left and right padding of **ChipGroupV2** and the spacing between **ChipV2** components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipGroupV2Space {
    /**
     * Spacing between **ChipV2** components (percentage not supported). Increasing the spacing makes adjacent 
     * **ChipV2** components more dispersed and the overall layout looser; decreasing the spacing makes **ChipV2** 
     * components more compact.
     * 
     * Value range:
     * 
     * - number type: [0, +∞), for example, 0, 8, 16, 24.5.
     * - string type: a string in fp | vp | px | lpx units with a numeric value greater than or equal to 0, for example,
     * "8vp", "16fp", "12px", "10lpx".
     * - Not supported: negative numbers, percentage units, invalid string formats.
     * 
     * If a value outside the valid range or in an unsupported format is passed, the default value is used.
     * 
     * Default value: **8**
     * 
     * Unit: vp
     * 
     * If the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public itemSpace?: string | number;
    /**
     * Left padding (percentage not supported).
     * 
     * Default value: **16**
     * 
     * Unit: vp
     * 
     * If the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public startSpace?: Length;

    /**
     * Right padding (percentage not supported).
     * 
     * Default value: **16**
     * 
     * Unit: vp
     * 
     * If the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public endSpace?: Length;

    /**
     * A constructor used to create a **ChipGroupV2Space** object.
     *
     * @param { ChipGroupV2SpaceConfig } config - Spacing configuration of **ChipGroupV2**.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    constructor(config: ChipGroupV2SpaceConfig);
}

/**
 * Defines the configuration of the suffix icon item, which is used to set the style, interaction, and accessibility 
 * attributes of the suffix icon.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2IconItemConfig {
    /**
     * Custom suffix icon. After being set, the specified icon is displayed in the suffix area of the **ChipGroupV2**.
     * 
     * To dynamically change the icon size, you must use the 
     * [SymbolGlyphModifier]{@link ./arkui/SymbolGlyphModifier:SymbolGlyphModifier} type when introducing 
     * [ChipGroupV2IconGroupSuffix]{@link ChipGroupV2IconGroupSuffix}, and set the icon size attribute through the 
     * methods provided by this type. For example, dynamically adjusting the size value through the **fontSize** or 
     * **size** method.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    icon: ChipV2ImageIconConfig;

    /**
     * Response event of the custom suffix icon.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    action: Callback<void>;

    /**
     * Accessibility text attribute of the suffix icon. It is used to further explain the suffix icon to users. You can 
     * set a relatively detailed explanatory text for this attribute of the suffix icon to help users understand the 
     * operation to be performed. For example, it helps users understand the possible consequences of the operation to 
     * be performed, especially when these consequences cannot be learned from the suffix icon's attributes and 
     * accessibility text. When the suffix icon has both a text attribute and an accessibility description attribute and
     * the icon is selected, the text attribute of the icon is announced first, followed by the content of the 
     * accessibility description attribute.
     * 
     * Default value: empty string.
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityText?: ResourceStr;

    /**
     * Accessibility description of the suffix icon. This description is used to explain the suffix icon to users in 
     * detail. You should provide a relatively detailed text description for this attribute of the suffix icon to help 
     * users understand the operation to be performed and its possible consequences, especially when these consequences 
     * cannot be directly learned from the suffix icon's attributes and accessibility text. When the suffix icon has 
     * both a text attribute and an accessibility description attribute and the icon is selected, the system announces 
     * the text attribute of the icon first, followed by the content of the accessibility description attribute.
     * 
     * Default value: empty string.
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Accessibility level of the suffix icon. It is used to control whether the suffix icon can be recognized by 
     * accessibility services.
     * 
     * Supported values:
     * 
     * **"auto"**: The attribute value of the suffix icon is converted to **"yes"**.
     * 
     * **"yes"**: The suffix icon can be recognized by accessibility services.
     * 
     * **"no"**: The suffix icon cannot be recognized by accessibility services.
     * 
     * **"no-hide-descendants"**: The suffix icon and all its child components cannot be recognized by accessibility 
     * services.
     * 
     * If a value outside the supported range is passed in, the default value is used.
     * 
     * Default value: **"auto"**
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @default auto
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityLevel?: string;
}

/**
 * Defines the configuration type of the suffix symbol icon.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2SymbolItemConfig {
    /**
     * **SymbolGlyphModifier** configuration object for the suffix icon. After being set, the specified symbol icon is 
     * displayed in the suffix area of the **ChipGroupV2**, with support for configuring display style, rendering mode, 
     * color, and other attributes.
     * 
     * **Note:** When **SymbolGlyphModifier** is passed in, using **symbolEffect** to modify the animation type and 
     * [effectStrategy]{@link SymbolGlyphAttribute#effectStrategy} to set the animation is not supported.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    symbol: SymbolGlyphModifier;

    /**
     * Response event for the suffix icon.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    action: VoidCallback;

    /**
     * Accessibility text attribute of the suffix icon. It is used to provide further explanation of the trailing icon 
     * for users. You can set a relatively detailed description text for this attribute of the suffix icon to help users
     * understand the operation to be performed. For example, it helps users understand the possible consequences of the
     * operation to be performed, especially when these consequences cannot be learned from the suffix icon's attributes
     * and accessibility text. When the suffix icon has both a text attribute and an accessibility description attribute
     * and the icon is selected, the text attribute of the icon is announced first, followed by the content of the 
     * accessibility description attribute.
     * 
     * Default value: empty string.
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityText?: ResourceStr;

    /**
     * Accessibility description of the suffix icon. This description is used to explain the suffix icon in detail to 
     * users. You should provide a relatively detailed text description for this attribute of the suffix icon to help 
     * users understand the operation to be performed and its possible consequences, especially when these consequences 
     * cannot be directly learned from the trailing icon's attributes and accessibility text. When the suffix icon has 
     * both a text attribute and an accessibility description attribute and the icon is selected, the system announces 
     * the text attribute of the icon first, followed by the content of the accessibility description attribute.
     * 
     * Default value: empty string.
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Accessibility level of the suffix icon. It is used to control whether the trailing icon can be recognized by 
     * accessibility services.
     * 
     * Supported values:
     * 
     * **"auto"**: The attribute value of the suffix icon is converted to **"yes"**.
     * 
     * **"yes"**: The suffix icon can be recognized by accessibility services.
     * 
     * **"no"**: The suffix icon cannot be recognized by accessibility services.
     * 
     * **"no-hide-descendants"**: The suffix icon and all its child components cannot be recognized by accessibility 
     * services.
     * 
     * If a value outside the supported range is passed in, the default value is used.
     * 
     * Default value: **"auto"**
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @default auto
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityLevel?: string;
}

/**
 * Defines the top and bottom padding configuration of **ChipGroupV2**, which is used to control its overall height.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2PaddingConfig {
    /**
     * Top padding of **ChipGroupV2** (percentage not supported).
     * 
     * Default value: **14**
     * 
     * Unit: vp
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    top: Length;

    /**
     * Bottom padding of **ChipGroupV2** (percentage not supported).
     * 
     * Default value: **14**
     * 
     * Unit: vp
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    bottom: Length;
}

/**
 * Defines the top and bottom padding of **ChipGroupV2**, which is used to control its overall height.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipGroupV2Padding {
    /**
     * Top padding of **ChipGroupV2** (percentage not supported).
     * 
     * Default value: **14**
     * 
     * Unit: vp
     * 
     * If the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public top: Length;

    /**
     * Bottom padding of **ChipGroupV2** (percentage not supported).
     * 
     * Default value: **14**
     * 
     * Unit: vp
     * 
     * If the value is **undefined**, the default value is used.
     * 
     * Decorator: **@Trace**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public bottom: Length;

    /**
     * A constructor used to create a **ChipGroupV2Padding** object.
     *
     * @param { ChipGroupV2PaddingConfig } config - Padding configuration of **ChipGroupV2**.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    constructor(config: ChipGroupV2PaddingConfig);
}

/**
 * Display custom content on the far right of the **ChipGroupV2** component. It supports configuring image icons,
 * symbol icons, symbol icon configuration items, and icon background material styles. It is suitable for scenarios
 * where an additional operation entry needs to be added at the end of a chip group.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 * @noninterop
 */
@ComponentV2
export declare struct ChipGroupV2IconGroupSuffix {
  /**
   * Array of custom items displayed in the suffix area, supporting **ChipGroupV2IconItemConfig** (image icon), 
   * **SymbolGlyphModifier** (symbol icon), or **ChipGroupV2SymbolItemConfig** (symbol icon configuration) types.
   * 
   * When **SymbolGlyphModifier** is passed, using **symbolEffect** to modify the animation type and 
   * [effectStrategy]{@link SymbolGlyphAttribute#effectStrategy} to set the animation is not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   * @noninterop
   */
  @Require
  @Param
  items: Array<ChipGroupV2IconItemConfig | SymbolGlyphModifier | ChipGroupV2SymbolItemConfig>;

  /**
   * System material style of the component. Different materials have different effects, which can affect the component'
   * s [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}, 
   * [borderColor]{@link CommonMethod#borderColor}, [borderWidth]{@link CommonMethod#borderWidth}, 
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} effect, and 
   * [materialFilter]{@link CommonMethod#materialFilter} effect.
   * 
   * Default value: **undefined**, meaning no material style is applied.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   * @noninterop
   */
  @Param
  iconBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Constructs a **ChipGroupV2IconGroupSuffix** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   * @noninterop
   */
  build(): void;
}

/**
 * The **ChipGroupV2** component provides a chip group container that supports single or multiple selection, custom 
 * styles and spacing, and custom suffix content. It is suitable for scenarios such as file or resource content 
 * categorization, tag selection, and filtering, helping you quickly build visually appealing and interactive chip group
 * UIs.
 * 
 * This component is implemented based on 
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1), 
 * state management V2 delivers enhanced capabilities for deep observation and management of data objects, and is no 
 * longer limited to the component level. With state management V2, you can control component data and state more 
 * flexibly, achieving more efficient UI refresh.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
export declare struct ChipGroupV2 {

    /**
     * Specific attributes of a **ChipV2**. For details, see [ChipGroupV2ItemConfig]{@link ChipGroupV2ItemConfig}.
     * 
     * When the value is **undefined** or an empty array, **ChipGroupV2** does not render the internal 
     * [ChipV2]{@link @ohos.arkui.advanced.ChipV2}.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Require
    @Param
    items: ChipGroupV2Items;

    /**
     * Bidirectional binding callback for the **ChipV2** item. Pass in this callback when you need to listen for or 
     * modify the **ChipV2** item list.
     * 
     * Default value: **undefined**, meaning no callback is triggered.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Event
    $items?: Callback<ChipGroupV2Items>;

    /**
     * Style of **ChipV2**, such as color and size. For details, see [ChipGroupV2ItemStyle]{@link ChipGroupV2ItemStyle}.
     * 
     * Default value:
     * 
     * **{
     * size: ChipV2Size.NORMAL,
     * backgroundColor: $r('sys.color.ohos_id_color_button_normal'),
     * fontColor: $r('sys.color.ohos_id_color_text_primary'),
     * selectedFontColor: $r('sys.color.ohos_id_color_text_primary_contrary'),
     * selectedBackgroundColor: $r('sys.color.ohos_id_color_emphasize')
     * }**
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * The icon fill colors ([fillColor]{@link @ohos.arkui.advanced.ChipV2:ChipV2ImageIconConfig} and 
     * [activatedFillColor]{@link @ohos.arkui.advanced.ChipV2:ChipV2ImageIconConfig}) are consistent with the 
     * corresponding font colors: in the unselected state, **fillColor** is consistent with 
     * [fontColor]{@link ChipGroupV2ItemStyleConfig}; in the selected state, **activatedFillColor** is consistent with 
     * [selectedFontColor]{@link ChipGroupV2ItemStyleConfig}. To set different colors, use 
     * [prefixSymbolIcon]{@link ChipGroupV2ItemConfig} and [suffixSymbolIcon]{@link ChipGroupV2ItemConfig} when passing 
     * in **items**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Param
    itemStyle?: ChipGroupV2ItemStyle;

    /**
     * Indexes of the selected **ChipV2** items.
     * 
     * Value range: the index value must be an integer greater than or equal to 0 and less than the length of the items 
     * array. Indexes outside this range do not take effect.
     * 
     * Default value: **[0]**
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * When **multiple** is **false**, if **selectedIndexes** is not passed in, the first **ChipV2** is selected by 
     * default; if the passed in **selectedIndexes** has multiple elements, the **ChipV2** of the first index is 
     * selected by default.
     * 
     * When **multiple** is **true**, if **selectedIndexes** is not passed in, the first **ChipV2** is selected by 
     * default; if the passed in **selectedIndexes** has multiple elements, all **ChipV2** items of the corresponding 
     * indexes are selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Param
    selectedIndexes?: Array<number>;

    /**
     * Bidirectional binding callback for the selected **ChipV2** indexes. Pass in this callback when you need to listen
     * for or modify the selected **ChipV2** indexes.
     * 
     * Default value: **undefined**, meaning no callback is triggered.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Event
    $selectedIndexes?: Callback<Array<number>>;

    /**
     * Whether to select multiple **ChipV2** items.
     * 
     * **true**: multiple **ChipV2** items can be selected; **false**: only a single **ChipV2** can be selected.
     * 
     * Default value: **false**
     * 
     * When the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Param
    multiple?: boolean;

    /**
     * Left and right padding and spacing between ChipV2 items. After setting, you can adjust the left and right padding
     * of **ChipGroupV2** and the spacing between **ChipV2** items. Increasing the spacing makes the layout looser, 
     * while decreasing it makes the layout more compact. For details, see [ChipGroupV2Space]{@link ChipGroupV2Space}.
     * 
     * Default value: **{ itemSpace: 8, startSpace: 16, endSpace: 16 }**
     * 
     * Unit: vp
     * 
     * When the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Param
    chipGroupSpace?: ChipGroupV2Space;

     /**
      * Top and bottom padding of **ChipGroupV2**, used to control the overall height. The type is 
      * [ChipGroupV2Padding]{@link ChipGroupV2Padding}.
      * 
      * Default value: **{ top: 14, bottom: 14 }**
      * 
      * Unit: vp
      * 
      * When the value is **undefined**, the default value is used.
      *
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @stagemodelonly
      * @crossplatform
      * @atomicservice
      * @since 26.0.0 dynamic
      */
     @Param
     chipGroupPadding?: ChipGroupV2Padding;

    /**
     * Callback invoked when the **ChipV2** state changes, used to respond to changes in the **ChipV2** selection state.
     * Pass in this callback when you need to listen for **ChipV2** selection state changes.
     * 
     * Trigger scenario: triggered when the user taps a **ChipV2** to change its selection state, returning the array of
     * indexes of the currently selected **ChipV2** items.
     * 
     * Default value: **undefined**, meaning no event is triggered.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Event
    onChange?: Callback<Array<number>>;

    /**
     * Custom builder. To display custom content on the far right of the component, configure the **suffix** attribute. 
     * When using the **suffix** attribute, reference the [ChipGroupV2IconGroupSuffix]{@link ChipGroupV2IconGroupSuffix}
     * API.
     * 
     * Default value: **undefined**, meaning no custom content is displayed on the far right.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @BuilderParam
    suffix?: Callback<void>;

    /**
     * Constructs an advanced **ChipGroupV2** component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     * @noninterop
     */
    build(): void;
}
