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
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder, Bindable } from '@ohos.arkui.component';
import { AttributeModifier, CommonMethod } from '@ohos.arkui.component';
import { HeightBreakpoint, WidthBreakpoint } from '@ohos.arkui.component';
import { Size } from './arkui/Graphics';

/**
 * Defines the configuration options for ContainerReader component.
 * Used to specify the parameters for container dimension reading and breakpoint analysis.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface ContainerReaderInfo {
  /**
   * The target container size for layout analysis.
   * Defines the reference dimensions used for breakpoint calculation and layout adaptation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  size: Bindable<Size>;
  /**
   * Optional width breakpoint configuration for container width analysis.
   * Defines the width thresholds that trigger different layout behaviors.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  widthBreakpoint?: Bindable<WidthBreakpoint>;
  /**
   * Optional height breakpoint configuration for container height analysis.
   * Defines the height thresholds that trigger different layout behaviors.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  heightBreakpoint?: Bindable<HeightBreakpoint>;
}

/**
 * Defines the breakpoint configuration options for container dimension analysis.
 * Specifies threshold values that trigger different layout behaviors based on container size.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface BreakpointOptions {
  /**
   * Optional array of width breakpoint values in vp units.
   * Defines the width thresholds for container width analysis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  width?: Array<double>;
  /**
   * Optional array of height breakpoint values in vp units.
   * Defines the height thresholds for container height analysis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  height?: Array<double>;
}

/**
 * Defines the container reader attribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface ContainerReaderAttribute extends CommonMethod {
  /**
   * Sets the breakpoint configuration for container dimension analysis.
   * Defines a set of threshold values that trigger different layout behaviors based on container size.
   *
   * @param { BreakpointOptions } [value] - An array of breakpoint values in vp units
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default breakpointConfig(value?: BreakpointOptions): this;

  /**
   * Set ContainerReader options.
   *
   * @returns { ContainerReaderAttribute } Returns the instance of the ContainerReaderAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setContainerReaderOptions(): this;

  /**
   * Sets the attribute modifier.
   *
   * @param { AttributeModifier<ContainerReaderAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default attributeModifier(modifier: AttributeModifier<ContainerReaderAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines ContainerReader Component.
 *
 * @param { ContainerReaderInfo } value - ContainerReader options.
 * @param { CustomBuilder } [content_] - container
 * @returns { ContainerReaderAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentBuilder
export declare function ContainerReader(
    value: ContainerReaderInfo,
    content_?: CustomBuilder,
): ContainerReaderAttribute;

/**
 * Defines ContainerReader Component.
 *
 * @param { CustomBuilderT<ContainerReaderInfo> } style_ - The custom builder function for container content
 * @param { CustomBuilder } [content_] - The configuration options for containerreader
 * @returns { ContainerReaderAttribute } The attribute of the containerreader
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function ContainerReader(
    style_: CustomBuilderT<ContainerReaderInfo>,
    content_?: CustomBuilder
): ContainerReaderAttribute;
