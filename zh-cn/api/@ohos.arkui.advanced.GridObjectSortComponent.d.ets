/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * 配置网格对象排序组件节点的类型，配置名称 IMAGE_TEXT 为图片文字类型，TEXT 为文字类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export declare enum GridObjectSortComponentType {
  /**
   * 图片文字类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  IMAGE_TEXT = "image_text",

  /**
   * 文字类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  TEXT = "text"
}

/**
 * 网格对象排序组件的组件数据配置信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface GridObjectSortComponentItem {
  /**
   * 数据id序号，不可重复。
   *
   * 默认值：空字符串。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  id: number | string;

  /**
   * 显示文本信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text: ResourceStr;

  /**
   * 是否已经被添加，已添加：true，未添加：false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selected: boolean;

  /**
   * 顺序序号。
   *
   * 取值范围：大于等于0。
   *
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  order: number;

  /**
   * GridObjectSortComponentType类型为IMAGE_TEXT时，需要传入图片地址。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  url?: ResourceStr;

  /**
   * GridObjectSortComponentType类型为IMAGE_TEXT时，需要传入Symbol图标资源。配置优先级高于url。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolStyle?: SymbolGlyphModifier;
}

/**
 * 网格对象排序组件的组件配置信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface GridObjectSortComponentOptions {
  /**
   * 组件展示形态：文字|图片+文字。
   *
   * 默认值：GridObjectSortComponentType.TEXT
   *
   * @default GridObjectSortComponentType.TEXT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type?: GridObjectSortComponentType;

  /**
   * 图片的尺寸，单位vp。
   *
   * 取值范围：大于等于0。
   *
   * 默认值：56vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  imageSize?: number | Resource;

  /**
   * 未编辑状态下显示的标题。
   *
   * 默认值：频道。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  normalTitle?: ResourceStr;

  /**
   * 编辑状态下头部标题显示。
   *
   * 默认值：编辑。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  editTitle?: ResourceStr;

  /**
   * 展示区域标题，第一个子标题。
   *
   * 默认值：长按拖动排序。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  showAreaTitle?: ResourceStr;

  /**
   * 添加区域标题，第二个子标题。
   *
   * 默认值：点击添加。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  addAreaTitle?: ResourceStr;
}

/**
 * 网格对象排序组件，用于网格对象的编辑、拖动排序、新增和删除。
 *
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果GridObjectSortComponent设置[通用属性]{@link ./@internal/component/ets/common}和
 * > [通用事件]{@link ./@internal/component/ets/common}，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到
 * > GridObjectSortComponent本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议GridObjectSortComponent设置通用属性和通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Component
export declare struct GridObjectSortComponent {
  /**
   * 组件配置信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  @Prop
  options: GridObjectSortComponentOptions;

  /**
   * 传入的数据，最大长度为50，数据长度超过50，只会取前50的数据。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  dataList: Array<GridObjectSortComponentItem>;

  /**
   * 保存编辑排序的回调函数，返回编辑后的数据。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onSave: (select: Array<GridObjectSortComponentItem>, unselect: Array<GridObjectSortComponentItem>) => void;

  /**
   * 取消保存数据的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onCancel: () => void;

  /**
   * Build function of GridObjectSortComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  build(): void;
}