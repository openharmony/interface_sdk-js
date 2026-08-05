'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

import {
  AttributeModifier,
  Builder,
  Callback,
  CommonMethod,
  ComponentBuilder,
  CopyOptions,
  CustomBuilder,
  CustomBuilderT,
  OnCreateMenuCallback,
  OnPrepareMenuCallback,
  ResourceColor,
  TextMenuItem,
  TextResponseType,
  TextSpanType,
} from '@ohos.arkui.component';

/**
 * 文本聚合拼接方式。
 *
 * | 名称 | 值 | 说明 |
 * | ---- | -- | ---- |
 * | NEWLINE | 0 | 不同文本节点之间使用换行符`\n`拼接。 |
 * | DIRECT | 1 | 不同文本节点之间直接拼接，不添加分隔符。 |
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum SelectionContainerTextJoinStyle {
  /**
   * 在文本节点之间使用换行符（`\n`）连接文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NEWLINE = 0,

  /**
   * 在文本节点之间不使用分隔符直接连接文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DIRECT = 1
}

/**
 * 配置选择菜单中的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SelectionContainerMenuOptions {
  /**
   * 选择菜单出现时触发。回调参数为按Text组件视觉顺序拼接后的选中文本，拼接方式由textJoinStyle配置决定。默认值为空，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onAppear?: Callback<string>;

  /**
   * 选择菜单消失时触发。默认值为空，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onDisappear?: Callback<void>;

  /**
   * 选择菜单显示时触发。回调参数为按Text组件视觉顺序拼接后的选中文本，拼接方式由textJoinStyle配置决定。默认值为空，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onMenuShow?: Callback<string>;

  /**
   * 选择菜单隐藏时触发。回调参数为按Text组件视觉顺序拼接后的选中文本，拼接方式由textJoinStyle配置决定。默认值为空，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onMenuHide?: Callback<string>;
}

/**
 * 点击菜单项时触发，可拦截系统默认菜单项（如复制、粘贴菜单项）的执行行为。
 *
 * @param { TextMenuItem } menuItem - 当前点击的菜单项。
 * @param { string } value - 选中文本内容。
 * @returns { boolean } 菜单项点击事件的处理结果。返回true表示事件已处理，返回false表示未处理。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnMenuItemClickWithTextCallback = (menuItem: TextMenuItem, value: string) => boolean;

/**
 * SelectionContainer自定义编辑菜单选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SelectionContainerEditMenuOptions {
  /**
   * 每次菜单显示前触发，传入默认菜单项并返回处理后的菜单项。默认值为空，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onCreateMenu?: OnCreateMenuCallback;

  /**
   * 点击菜单项时触发，可拦截系统默认菜单执行行为。默认值为空，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onMenuItemClick?: OnMenuItemClickWithTextCallback;

  /**
   * 文本选中内容变化后、菜单显示前触发，可在该回调中调整菜单数据。默认值为空，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onPrepareMenu?: OnPrepareMenuCallback;
}

/**
 * 支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)。
 *
 * > **说明：**
 * >
 * > - 不支持[隐私遮罩](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-obscured.md)。
 * >
 * > - 不支持[图形变换](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md)，跨节点场景中Text子组件不支持图形变
 * > 换。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SelectionContainerAttribute extends CommonMethod {
  /**
   * 设置组件的复制粘贴配置项。未通过该接口设置时，默认为CopyOptions.InApp。
   *
   * > **说明：**
   * >
   * > Text子组件已显式设置[copyOption](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#copyoption9)时，优先使用
   * > Text子组件的配置；未设置时，使用SelectionContainer的配置。
   *
   * @param { CopyOptions | undefined } value - 复制粘贴配置项，用于设置文本的可复制范围。具体说明请参考CopyOptions枚举。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default copyOption(value: CopyOptions | undefined): this;

  /**
   * 设置选中文本手柄颜色。未通过该接口设置时，默认手柄颜色为'#007DFF'（蓝色）。
   *
   * > **说明：**
   * >
   * > - 该属性在跨节点场景中用于各Text子组件选中文本手柄颜色。
   * >
   * > - 在跨节点场景中Text子组件[caretColor](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#caretcolor14)设置无
   * > 效，始终使用SelectionContainer的配置。
   *
   * @param { ResourceColor | undefined } color - 手柄颜色。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default caretColor(color: ResourceColor | undefined): this;

  /**
   * 设置选中文本底板颜色。未通过该接口设置时，默认选中文本底板颜色为'#007DFF'（蓝色），如果未设置不透明度，默认为20%不透明度。
   *
   * > **说明：**
   * >
   * > - 该属性在跨节点场景中用于各Text子组件选中区域的高亮颜色。
   * >
   * > - Text子组件已显式设置
   * > [selectedBackgroundColor](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#selectedbackgroundcolor14)
   * > 时，优先使用Text子组件的配置；未设置时，使用SelectionContainer的配置。
   *
   * @param { ResourceColor | undefined } color - 选中文本底板颜色。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default selectedBackgroundColor(color: ResourceColor | undefined): this;

  /**
   * 设置是否开启触控反馈。未通过该接口设置时，默认开启。
   *
   * 开启触控反馈时，需要在工程的[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中配置requestPermissions字段开启振动权限，配
   * 置如下：
   *
   * @param { boolean | undefined } isEnabled - 是否开启触控反馈。
   *     <br>true表示开启触控反馈，false表示不开启触控反馈。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default enableHapticFeedback(isEnabled: boolean | undefined): this;

  /**
   * 设置SelectionContainer内聚合文本的拼接方式。未通过该接口设置时，默认为SelectionContainerTextJoinStyle.NEWLINE，表示不同文本节点之间使用换行符\n拼接。
   *
   * > **说明：**
   * >
   * > - 该配置会影响[onWillCopy]{@link onWillCopy}、[onCopy]{@link onCopy}、[bindSelectionMenu]{@link bindSelectionMenu}相关回调中返回
   * > 的文本内容。
   * >
   * > - 该配置也会影响系统内置菜单项中依赖文本拼接结果的逻辑。例如，选择两个Text节点中的文本时，若配置为SelectionContainerTextJoinStyle.NEWLINE，执行复制后两段文本之间会插入换行符；若配置
   * > 为SelectionContainerTextJoinStyle.DIRECT，执行复制后两段文本会直接拼接。
   *
   * @param { SelectionContainerTextJoinStyle | undefined } style - 聚合文本拼接方式。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default textJoinStyle(style: SelectionContainerTextJoinStyle | undefined): this;

  /**
   * 设置自定义选择菜单。未通过该接口设置时，默认spanType为TextSpanType.TEXT，responseType为TextResponseType.LONG_PRESS。
   *
   * > **说明：**
   * >
   * > - bindSelectionMenu的长按响应时长为600ms，
   * > [bindContextMenu](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-menu.md#bindcontextmenu8)的长按响应时
   * > 长为800ms，当两者同时绑定且触发方式均为长按时，优先响应bindSelectionMenu。
   * >
   * > - 自定义菜单过长时，建议内部嵌套使用[Scroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scroll.md)组件，避免键盘被遮挡。
   * >
   * > - 选区跨越不可复制Text时，菜单仅基于实际选中的可复制文本进行显示和处理。
   *
   * @param { TextSpanType | undefined } spanType - 选择菜单类型。用于指定选择菜单作用的文本类型范围，不同类型对应不同的菜单行为。各枚举值的含义及适用场景详见
   *     [TextSpanType](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#textspantype11枚举说明)。
   * @param { CustomBuilder | undefined } content - 选择菜单内容。
   * @param { TextResponseType | undefined } responseType - 选择菜单响应类型。
   * @param { SelectionContainerMenuOptions | undefined } [options] - 选择菜单选项，用于配置菜单出现、消失、显示、隐藏等事件的回调。当需要监听这些菜单事件时传入此参数，不
   *     传入时默认不监听菜单事件。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default bindSelectionMenu(spanType: TextSpanType | undefined, content: CustomBuilder | undefined,
    responseType: TextResponseType | undefined, options?: SelectionContainerMenuOptions | undefined): this;

  /**
   * 设置选中文本后的编辑菜单选项，包括菜单文本、图标和回调等。
   *
   * > **说明：**
   * >
   * > 当同时为当前场景设置了[bindSelectionMenu]{@link bindSelectionMenu}和editMenuOptions时，优先使用bindSelectionMenu，editMenuOptions不生
   * > 效。bindSelectionMenu用于完全自定义菜单风格和触发条件，由开发者定义所有菜单项；editMenuOptions用于在系统默认菜单基础上添加扩展项，触发条件不变。建议根据自定义程度需求选择。
   *
   * @param { SelectionContainerEditMenuOptions | undefined } editMenu - 自定义编辑菜单配置。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default editMenuOptions(editMenu: SelectionContainerEditMenuOptions | undefined): this;

  /**
   * SelectionContainer中选中文本发生变化时触发该回调。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > - 回调参数数组中各项顺序与Text组件视觉顺序一致。
   * >
   * > - 数组中的每一项对应一个Text子组件的选中文本。
   * >
   * > - 仅包含有选中文本的Text子组件，不包含未选中Text子组件，也不包含不可复制Text的空字符串占位。
   *
   * @param { Callback<Array<string>> | undefined } callback - 选中文本变化回调。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onTextSelectionChange(callback: Callback<Array<string>> | undefined): this;

  /**
   * 在进行复制操作前，触发该回调。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > - 回调参数为按Text组件视觉顺序拼接后的选中文本，拼接方式由[textJoinStyle]{@link textJoinStyle}配置决定。
   * >
   * > - 返回false时，会阻止本次跨节点复制及容器级[onCopy]{@link onCopy}回调触发，但不会影响各Text子组件已独立处理完成的复制事件逻辑。
   *
   * @param { Callback<string, boolean> | undefined } callback - 复制前检查回调，返回true表示允许复制，返回false表示不允许复制。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onWillCopy(callback: Callback<string, boolean> | undefined): this;

  /**
   * 长按文本内部区域弹出选择菜单后，点击选择菜单的复制按钮，触发该回调。仅支持复制文本。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > - 回调参数为按Text组件视觉顺序拼接后的选中文本，拼接方式由[textJoinStyle]{@link textJoinStyle}配置决定。
   * >
   * > - 仅当容器级[onWillCopy]{@link onWillCopy}返回true时，该回调才会触发。
   *
   * @param { Callback<string> | undefined } callback - 复制回调。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onCopy(callback: Callback<string> | undefined): this;

  /**
   * 设置组件的动态属性。
   *
   * @param { AttributeModifier<SelectionContainerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default attributeModifier(modifier: AttributeModifier<SelectionContainerAttribute> | AttributeModifier<CommonMethod>
    | undefined): this;

  /**
   * 设置SelectionContainer选项。
   *
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setSelectionContainerOptions(): this;
}

/**
 * 创建一个SelectionContainer组件。
 *
 * @param { CustomBuilder } [content_] - 容器。
 * @returns { SelectionContainerAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@ComponentBuilder
export declare function SelectionContainer(content_?: CustomBuilder): SelectionContainerAttribute;

/**
 * 创建一个SelectionContainer组件。需要在组件属性设置开始时调用setSelectionContainerOptions，并在组件属性设置结束时调用applyAttributesFinish。
 *
 * @param { CustomBuilderT<SelectionContainerAttribute> } style - 设置SelectionContainer属性的回调。
 * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function SelectionContainer(
    style: CustomBuilderT<SelectionContainerAttribute>
): SelectionContainerAttribute;