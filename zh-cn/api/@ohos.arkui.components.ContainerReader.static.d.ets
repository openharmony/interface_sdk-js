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
 * 定义ContainerReader组件的配置选项，用于指定容器尺寸读取和断点值获取的参数，不能通过此参数改变组件尺寸和断点值。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface ContainerReaderInfo {
  /**
   * 获取到的当前ContainerReader组件的尺寸，用于布局分析和断点计算。
   *
   * > **说明：**
   * >
   * > 该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。绑定后组件尺寸值变化时，size绑定的变量值会自动更新。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  size: Bindable<Size>;
  /**
   * 容器的宽度断点，为获取到的当前ContainerReader组件的宽度断点枚举值。
   *
   * > **说明：**
   * >
   * > 该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。绑定后组件宽度断点值变化时，
   * > widthBreakpoint绑定的变量值会自动更新。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  widthBreakpoint?: Bindable<WidthBreakpoint>;
  /**
   * 容器的高度断点，为获取到的当前ContainerReader组件在不同高宽比阈值下对应的高度断点枚举值。
   *
   * > **说明：**
   * >
   * > 该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。绑定后组件高度断点值变化时，
   * > heightBreakpoint绑定的变量值会自动更新。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  heightBreakpoint?: Bindable<HeightBreakpoint>;
}

/**
 * 定义断点配置选项，用于指定容器尺寸分析的阈值参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface BreakpointOptions {
  /**
   * 宽度断点值数组。数组必须为单调递增数组。
   *
   * 默认值：[320, 600, 840, 1440]，单位vp，与窗口宽度断点默认值一致。
   *
   * > **说明：**
   * >
   * > 最多可支持5个断点，即数组最大长度为4。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  width?: Array<double>;
  /**
   * 高度断点值数组，高度断点值是组件高度与宽度的比值。无单位。数组必须为单调递增数组。
   *
   * 默认值：[0.8, 1.2]，与窗口高度断点默认值一致。
   *
   * > **说明：**
   * >
   * > 最多支持3个断点，即数组最大长度为2。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  height?: Array<double>;
}

/**
 * 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface ContainerReaderAttribute extends CommonMethod {
  /**
   * 设置断点配置选项，定义触发不同布局行为的尺寸阈值。
   *
   * @param { BreakpointOptions } [value] - 断点配置选项，包含宽度和高度的断点阈值数组。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default breakpointConfig(value?: BreakpointOptions): this;

  /**
   * Set ContainerReader options.
   *
   * @param { ContainerReaderInfo } value - Used to specify the parameters for container dimension reading and
   *     breakpoint analysis.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @unpublished
   * @stagemodelonly
   * @since 26.1.0 staticonly
   */
  default setContainerReaderOptions(value: ContainerReaderInfo): this;

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
 * 创建容器断点组件并配置容器读取参数。可以包含子组件。
 *
 * ContainerReader是容器断点组件，用于在动态场景下根据容器尺寸获取断点信息并进行响应式布局。该组件通过
 * [双向绑定](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)
 * 实时返回容器的尺寸和断点，使开发者能够基于容器大小进行差异化的组件创建和布局。
 *
 * > **说明：**
 * >
 * > - 使用ContainerReader时，ContainerReader父组件不要依赖其子组件确定自身尺寸。
 * > - 容器断点基于组件自身的实际尺寸和断点阈值数组确定高度和宽度断点值，组件尺寸和断点信息仅作用于当前组件及其子组件，同一页面中的多个容器可拥有各自独立的断点状态。
 * > - ContainerReader组件的尺寸需要由父容器和自身布局确定，不受子组件影响。在不同父容器下的布局规格：父容器为
 * > [Flex](docroot://reference/apis-arkui/arkui-ts/ts-container-flex.md)、
 * > [Column](docroot://reference/apis-arkui/arkui-ts/ts-container-column.md)、
 * > [Row](docroot://reference/apis-arkui/arkui-ts/ts-container-row.md)
 * > 时撑满容器剩余空间；父容器为其他类型时撑满父容器。
 * > - ContainerReader接口的参数必须使用状态变量结合双向绑定形式([!!语法](docroot://ui/state-management/arkts-new-binding.md))，
 * > 以便在后端计算尺寸变化时及时通知前端刷新UI。
 * > - 更多关于容器断点的开发指导和完整示例，可参考[容器断点 (ContainerReader)](docroot://ui/arkts-layout-development-container-reader.md)。
 *
 * @param { ContainerReaderInfo } value - 容器读取配置选项，包含尺寸数据和断点配置。
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
 * @param { CustomBuilderT<ContainerReaderInfo> } style_ - The custom builder function for container content.
 * @param { CustomBuilder } [content_] - The configuration options for containerreader.
 * @returns { ContainerReaderAttribute } The attribute of the containerreader
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @unpublished
 * @stagemodelonly
 * @since 26.1.0 staticonly
 */
@Builder
export declare function ContainerReader(
    style_: CustomBuilderT<ContainerReaderInfo>,
    content_?: CustomBuilder
): ContainerReaderAttribute;
