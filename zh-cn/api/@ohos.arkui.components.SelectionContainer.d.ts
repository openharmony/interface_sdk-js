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

/**
 * 文本聚合拼接方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum SelectionContainerTextJoinStyle {
  /**
   * 不同文本节点之间使用换行符`\n`拼接。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  NEWLINE = 0,

  /**
   * 不同文本节点之间直接拼接，不添加分隔符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DIRECT = 1
}

/**
 * 配置选择菜单中的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface SelectionContainerMenuOptions {
  /**
   * 选择菜单出现时触发。回调参数为按Text组件视觉顺序拼接后的选中文本，拼接方式由textJoinStyle配置决定。默认值为空，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onAppear?: Callback<string>;

  /**
   * 选择菜单消失时触发。默认值为空，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onDisappear?: Callback<void>;

  /**
   * 选择菜单显示时触发。回调参数为按Text组件视觉顺序拼接后的选中文本，拼接方式由textJoinStyle配置决定。默认值为空，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onMenuShow?: Callback<string>;

  /**
   * 选择菜单隐藏时触发。回调参数为按Text组件视觉顺序拼接后的选中文本，拼接方式由textJoinStyle配置决定。默认值为空，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
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
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export type OnMenuItemClickWithTextCallback = (menuItem: TextMenuItem, value: string) => boolean;

/**
 * SelectionContainer自定义编辑菜单选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface SelectionContainerEditMenuOptions {
  /**
   * 每次菜单显示前触发，传入默认菜单项并返回处理后的菜单项。默认值为空，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onCreateMenu?: OnCreateMenuCallback;

  /**
   * 点击菜单项时触发，可拦截系统默认菜单执行行为。默认值为空，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onMenuItemClick?: OnMenuItemClickWithTextCallback;

  /**
   * 文本选中内容变化后、菜单显示前触发，可在该回调中调整菜单数据。默认值为空，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onPrepareMenu?: OnPrepareMenuCallback;
}

/**
 * 组件初始化配置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamiconly
 */
export interface SelectionContainerOptions {
  /**
   * SelectionContainer控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  controller: SelectionContainerController;
}

/**
 * SelectionContainer组件的控制器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamiconly
 */
export declare class SelectionContainerController {
  /**
   * 关闭SelectionContainer的自定义或默认选择菜单。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  closeSelectionMenu(): void;

  /**
   * 清除SelectionContainer当前的文本选中状态；若选择菜单正在显示，会同时关闭选择菜单。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  clearTextSelection(): void;
}

/**
 * 创建一个SelectionContainer组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamiconly
 */
export interface SelectionContainerInterface {
  /**
   * 定义SelectionContainer的构造函数。
   *
   * @param { SelectionContainerOptions } [value] - 组件的初始化选项。
   * @returns { SelectionContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  (value?: SelectionContainerOptions): SelectionContainerAttribute;
}

/**
 * 支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)。
 * 
 * 支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)。
 * 
 * > **说明：**
 * >
 * > - 不支持[隐私遮罩](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-obscured.md)。
 * >
 * > - 不支持[图形变换](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md)，跨节点场景中Text子组件不支持图形变换。
 * >
 * > - 不支持[拖拽事件](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-drag-drop.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class SelectionContainerAttribute extends CommonMethod<SelectionContainerAttribute> {
  /**
   * 设置组件的复制粘贴配置项。未通过该接口设置时，默认为CopyOptions.InApp。
   * 
   * > **说明：**
   * >
   * > Text子组件已显式设置[copyOption]{@link TextAttribute#copyOption}时，优先使用Text子组件的配置；未设置时，使用SelectionContainer的配置。
   *
   * @param { Optional<CopyOptions> } value - 复制粘贴配置项，用于设置文本的可复制范围。具体说明请参考CopyOptions枚举。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  copyOption(value: Optional<CopyOptions>): SelectionContainerAttribute;

  /**
   * 设置选中文本手柄颜色。未通过该接口设置时，默认手柄颜色为'#007DFF'（蓝色）。
   * 
   * > **说明：**
   * >
   * > - 该属性在跨节点场景中用于各Text子组件选中文本手柄颜色。
   * >
   * > - 在跨节点场景中Text子组件[caretColor]{@link TextAttribute#caretColor}设置无效，始终使用SelectionContainer的配置。
   *
   * @param { Optional<ResourceColor> } color - 手柄颜色。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  caretColor(color: Optional<ResourceColor>): SelectionContainerAttribute;

  /**
   * 设置选中文本底板颜色。未通过该接口设置时，默认选中文本底板颜色为'#007DFF'（蓝色），如果未设置不透明度，默认为20%不透明度。
   * 
   * > **说明：**
   * >
   * > - 该属性在跨节点场景中用于各Text子组件选中区域的高亮颜色。
   * >
   * > - Text子组件已显式设置[selectedBackgroundColor]{@link TextAttribute#selectedBackgroundColor}时，优先使用Text子组件的配置；未设置时，使用
   * > SelectionContainer的配置。
   *
   * @param { Optional<ResourceColor> } color - 选中文本底板颜色。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  selectedBackgroundColor(color: Optional<ResourceColor>): SelectionContainerAttribute;

  /**
   * 设置是否开启触控反馈。未通过该接口设置时，默认开启。
   * 
   * 开启触控反馈时，需要在工程的[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中配置requestPermissions字段开启振动权限，配
   * 置如下：
   *
   * @param { Optional<boolean> } isEnabled - 是否开启触控反馈。
   *     <br>true表示开启触控反馈，false表示不开启触控反馈。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enableHapticFeedback(isEnabled: Optional<boolean>): SelectionContainerAttribute;

  /**
   * 设置SelectionContainer内聚合文本的拼接方式。未通过该接口设置时，默认为SelectionContainerTextJoinStyle.NEWLINE，表示不同文本节点之间使用换行符\n拼接。
   * 
   * > **说明：**
   * >
   * > - 该配置会影响[onWillCopy]{@link SelectionContainerAttribute#onWillCopy}、
   * > [onCopy]{@link SelectionContainerAttribute#onCopy}、
   * > [bindSelectionMenu]{@link SelectionContainerAttribute#bindSelectionMenu}相关回调中返回的文本内容。
   * >
   * > - 该配置也会影响系统内置菜单项中依赖文本拼接结果的逻辑。例如，选择两个Text节点中的文本时，若配置为SelectionContainerTextJoinStyle.NEWLINE，执行复制后两段文本之间会插入换行符；若配置
   * > 为SelectionContainerTextJoinStyle.DIRECT，执行复制后两段文本会直接拼接。
   *
   * @param { Optional<SelectionContainerTextJoinStyle> } style - 聚合文本拼接方式。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  textJoinStyle(style: Optional<SelectionContainerTextJoinStyle>): SelectionContainerAttribute;

  /**
   * 绑定到选择菜单。
   *
   * <p><strong>注意</strong>：
   * <br>长按手势需要的时间，bindSelectionMenu为600ms,bindContextMenu为800 ms。
   * <br>当bindSelectionMenu和bindContextMenu都设置了，并且都设置为长按触发
   * 手势，
   * bindSelectionMenu首先被触发。
   * <br>如果自定义菜单过长，可以嵌入一个Scroll组件，防止键盘被遮挡。
   * </p>
   *
   * @param { Optional<TextSpanType> } spanType - 选择菜单的类型。默认值为
   *     TextSpanType.TEXT
   * @param { Optional<CustomBuilder> } content - 指示选择菜单的内容
   * @param { Optional<TextResponseType> } responseType - 选择菜单响应类型。默认值为
   *     TextResponseType.LONG_press
   * @param { Optional<SelectionContainerMenuOptions> } [options] - 指示选择菜单的选项
   * @returns { SelectionContainerAttribute } 返回SelectionContainerAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  bindSelectionMenu(spanType: Optional<TextSpanType>, content: Optional<CustomBuilder>,
    responseType: Optional<TextResponseType>, options?: Optional<SelectionContainerMenuOptions>): SelectionContainerAttribute;

  /**
   * 设置选中文本后的编辑菜单选项，包括菜单文本、图标和回调等。
   * 
   * > **说明：**
   * >
   * > 当同时为当前场景设置了[bindSelectionMenu]{@link SelectionContainerAttribute#bindSelectionMenu}和editMenuOptions时，优先使用
   * > bindSelectionMenu，editMenuOptions不生效。bindSelectionMenu用于完全自定义菜单风格和触发条件，由开发者定义所有菜单项；editMenuOptions用于在系统默认菜单基础上添加扩
   * > 展项，触发条件不变。建议根据自定义程度需求选择。
   *
   * @param { Optional<SelectionContainerEditMenuOptions> } editMenu - 自定义编辑菜单配置。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  editMenuOptions(editMenu: Optional<SelectionContainerEditMenuOptions>): SelectionContainerAttribute;

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
   * @param { Optional<Callback<Array<string>>> } callback - 选中文本变化回调。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onTextSelectionChange(callback: Optional<Callback<Array<string>>>): SelectionContainerAttribute;

  /**
   * 在进行复制操作前，触发该回调。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 回调参数为按Text组件视觉顺序拼接后的选中文本，拼接方式由[textJoinStyle]{@link SelectionContainerAttribute#textJoinStyle}配置决定。
   * >
   * > - 返回false时，会阻止本次跨节点复制及容器级[onCopy]{@link SelectionContainerAttribute#onCopy}回调触发，但不会影响各Text子组件已独立处理完成的复制事件逻辑。
   *
   * @param { Optional<Callback<string, boolean>> } callback - 复制前检查回调，返回true表示允许复制，返回false表示不允许复制。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCopy(callback: Optional<Callback<string, boolean>>): SelectionContainerAttribute;

  /**
   * 长按文本内部区域弹出选择菜单后，点击选择菜单的复制按钮，触发该回调。仅支持复制文本。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 回调参数为按Text组件视觉顺序拼接后的选中文本，拼接方式由[textJoinStyle]{@link SelectionContainerAttribute#textJoinStyle}配置决定。
   * >
   * > - 仅当容器级[onWillCopy]{@link SelectionContainerAttribute#onWillCopy}返回true时，该回调才会触发。
   *
   * @param { Optional<Callback<string>> } callback - 复制回调。
   * @returns { SelectionContainerAttribute } returns the instance of the SelectionContainerAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onCopy(callback: Optional<Callback<string>>): SelectionContainerAttribute;
}

/**
 * SelectionContainer组件用于为多个文本节点提供跨节点文本选中、复制及菜单扩展能力，支持统一配置选中文本的手柄颜色和底板颜色，支持灵活的文本拼接策略，支持自定义选择菜单和扩展菜单选项。适用于需要跨多个Text组件实现文本
 * 连续选中、统一复制、样式自定义及菜单扩展的场景，解决了多Text组件场景下文本选择体验割裂的问题，提升了用户在复杂文本布局中的交互体验。
 * 
 * > **说明：**
 * >
 * > - 本组件中选中文本相关回调返回的文本内容，按照[Text]{@link ./@internal/component/ets/text}组件的从上到下显示顺序进行拼接。
 * >
 * > - 本组件默认布局走[Stack]{@link ./@internal/component/ets/stack}，如有其他容器布局需求请在SelectionContainer内放置一个容器组件。
 * >
 * > - SelectionContainer内跨节点选中文本时不显示放大镜，也不支持[getMagnifier]{@link @ohos.arkui.UIContext:UIContext.getMagnifier}主动设置放大镜。
 * >
 * > - 仅Text组件中的文本内容参与跨节点选中与文本拼接。
 * 
 * ###### 子组件
 * 
 * 可以包含子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @uicomponent
 * @since 26.0.0 dynamic
 */
export declare const SelectionContainer: SelectionContainerInterface;

/**
 * 定义SelectionContainer组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const SelectionContainerInstance: SelectionContainerAttribute;