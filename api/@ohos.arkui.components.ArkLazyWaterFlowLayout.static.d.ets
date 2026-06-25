'use static'
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

import { ComponentBuilder, CustomBuilder, Builder, CustomBuilderT } from '@ohos.arkui.component';
import { AttributeModifier, CommonMethod, OnVisibleIndexesChangeCallback, ItemFillPolicy} from '@ohos.arkui.component';
import { LengthMetrics } from './arkui/Graphics';
import { StickyStyle } from '@ohos.arkui.component';

/**
 * The LazyWaterFlowLayoutAttribute
 *
 * @extends CommonMethod
 * @interface LazyWaterFlowLayoutAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export declare interface LazyWaterFlowLayoutAttribute extends CommonMethod {
    /**
     * The spacing between rows.
     *
     * @param { LengthMetrics | undefined } value - The spacing between rows.
     *     <br>Default value: LengthMetrics.vp(0)
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default rowsGap(value: LengthMetrics | undefined): this;
    /**
     * The spacing between columns.
     *
     * @param { LengthMetrics | undefined } value - The spacing between columns.
     *     <br>Default value: LengthMetrics.vp(0)
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default columnsGap(value: LengthMetrics | undefined): this;
    /**
     * Sets the header of the lazy lazy water layout.
     *
     * @param { CustomBuilder | undefined } builder - The header builder function
     *     <br>Passing undefined will remove the header.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default header(builder: CustomBuilder | undefined): this;
    /**
     * Sets the footer of the lazy water flow layout.
     *
     * @param { CustomBuilder | undefined } builder - The footer builder function
     *     <br>Passing undefined will remove the footer.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default footer(builder: CustomBuilder | undefined): this;
    /**
     * Sets sticky style for header and footer.
     *
     * @param { StickyStyle | undefined } sticky - The sticky style for header and footer.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default sticky(sticky: StickyStyle | undefined): this;
    /**
     * Called when the first or last item displayed in the component changes.
     * It is triggered once when the component is initialized.
     *
     * @param { OnVisibleIndexesChangeCallback | undefined } callback - callback function, triggered
     *     when the index of child components in the visible area changes.
     *     <br>Passing undefined will unregister the callback.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): this;
}

/**
 * The LazyVWaterFlowLayoutAttribute
 *
 * @extends LazyWaterFlowLayoutAttribute
 * @interface LazyVWaterFlowLayoutAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export declare interface LazyVWaterFlowLayoutAttribute extends LazyWaterFlowLayoutAttribute {
    /**
     * This parameter specifies the number of columns in the current waterflow layout.
     *
     * @param { string | ItemFillPolicy | undefined } value - Number of columns in the layout.
     *     <br>Default value: '1fr'
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default columnsTemplate(value: string | ItemFillPolicy | undefined): this;
    /**
     * Set LazyVWaterFlowLayout options.
     *
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setLazyVWaterFlowLayoutOptions(): this;
    /**
     * Sets the attribute modifier.
     *
     * @param { AttributeModifier<LazyVWaterFlowLayoutAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default attributeModifier(
      modifier: AttributeModifier<LazyVWaterFlowLayoutAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines LazyVWaterFlowLayout Component.
 *
 * @param { CustomBuilder } [content_]
 * @returns { LazyVWaterFlowLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentBuilder
export declare function LazyVWaterFlowLayout (
    content_?: CustomBuilder,
): LazyVWaterFlowLayoutAttribute;

/**
 * Defines LazyVWaterFlowLayout Component.
 *
 * @param { CustomBuilderT<LazyVWaterFlowLayoutAttribute> } style_ - The style to create a LazyVWaterFlowLayout.
 * @param { CustomBuilder } [content_]
 * @returns { LazyVWaterFlowLayoutAttribute } The attribute of the LazyVWaterFlowLayout.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function LazyVWaterFlowLayout(
    style_: CustomBuilderT<LazyVWaterFlowLayoutAttribute>,
    content_?: CustomBuilder
): LazyVWaterFlowLayoutAttribute;
