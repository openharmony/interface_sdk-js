/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file 分布式数据对象
 * @kit ArkData
 */

import uniformDataStruct from '@ohos.data.uniformDataStruct';
/**
 * 针对[ContentForm]{@link @ohos.data.uniformDataStruct:uniformDataStruct.ContentForm}标准数据结构的内容卡片，支持设置标题（必选）、描述、应用图标、应用名称、
 * 跳转链接、内容图片。用户点击卡片时，执行传入的回调事件函数，若设置的跳转链接不为空，则跳转到指定的页面。
 * 
 * **使用场景：**
 * 
 * - 社交应用分享内容展示
 * - 即时通讯消息卡片
 * - 内容推荐卡片
 * 
 * ###### 子组件
 * 
 * 无
 * 
 * ###### 效果呈现
 * 
 * 本例效果如下：
 * <br/>

 * ![showContentFormCard](../../ui/figures/showContentFormCard.jpeg)
 *
 * @file 内容卡片
 * @kit ArkData
 */
/**
 * 内容卡片类型枚举，提供了大、中、小三种尺寸。
 *
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @stagemodelonly
 * @since 20 dynamic
 */
declare enum FormType {
  /**
   * 表示 4 x 4 的尺寸。默认卡片宽度为200vp，默认高度为200vp。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 20 dynamic
   */
  TYPE_BIG = 0,

  /**
   * 表示 4 x 2 的尺寸。默认卡片宽度为200vp，默认高度为100vp。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 20 dynamic
   */
  TYPE_MID = 1,

  /**
   * 表示 2 x 1 的尺寸。默认卡片宽度为137vp， 默认高度为83vp。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 20 dynamic
   */
  TYPE_SMALL = 2
}

/**
 * ContentFormCard({contentFormData: uniformDataStruct.ContentForm, formType: FormType, formWidth?: number, formHeight?:
 * number, handleOnClick?: Function})
 * 
 * 内容卡片控件，用于在应用内展示标题、描述、内容图片、应用信息等。适用于内容分发、社交动态、消息通知等场景。
 *
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @stagemodelonly
 * @since 20 dynamic
 */
@Component
declare struct ContentFormCard {
  /**
   * 内容卡片数据，用于设置卡片展示的标题、描述、应用图标、应用名称、跳转链接或内容图片等信息。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 20 dynamic
   */
  contentFormData: uniformDataStruct.ContentForm;

  /**
   * 内容卡片类型，影响内容卡片的大小。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 20 dynamic
   */
  @Prop
  formType: FormType;

  /**
   * 卡片宽度，其范围在设置的内容卡片类型默认宽度的0.8 ~ 1.2倍之间，当formType为TYPE_SMALL时，其范围在设置的内容卡片类型默认宽度的0.4 ~ 1.2倍之间。单位为vp。省略时使用内容卡片类型的默认宽度。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 20 dynamic
   */
  @Prop
  formWidth?: double;

  /**
   * 卡片高度，当contentFormData中的title为空字符串时，卡片高度为传入的值，否则其范围在设置的内容卡片类型默认宽度的0.8 ~ 1.2倍之间，当formType为TYPE_SMALL时，其范围在设置的内容卡片类型默认
   * 宽度的0.4 ~ 1.2倍之间。单位为vp。省略时使用内容卡片类型的默认高度。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 20 dynamic
   */
  @Prop
  formHeight?: double;

  /**
   * 点击事件回调函数。用户点击卡片时，会执行传入的回调函数，实现自定义点击行为。
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 20 dynamic
   */
  handleOnClick?: Function;
}

export { ContentFormCard, FormType };