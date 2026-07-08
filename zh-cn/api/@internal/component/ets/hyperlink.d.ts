/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * 超链接组件，组件宽高范围内点击实现跳转。
 * 
 * > **说明：**
 * >
 * > - 该组件仅支持与系统浏览器配合使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface HyperlinkInterface {

  /**
   *
   * 定义超链接组件构造函数。
   * @param { string | Resource } address - Hyperlink组件跳转的网页。
   * @param { string | Resource } content - Hyperlink组件中超链接显示文本。<br/>默认值：''。若不传该参数且组件内无子组件时，默认显示address参数值链接地址。<br/>
   *     **说明：** <br/>组件内有子组件时，不显示超链接文本。
   * @returns { HyperlinkAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (address: string | Resource, content?: string | Resource): HyperlinkAttribute;
}

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class HyperlinkAttribute extends CommonMethod<HyperlinkAttribute> {

  /**
   * 设置超链接文本的颜色。
   *
   * @param { Color | number | string | Resource } value - 超链接文本的颜色。<br/><!--RP1-->默认值：'#ff007dff'，显示为蓝色。<!--RP1End-->
   * @returns { HyperlinkAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color(value: Color | number | string | Resource): HyperlinkAttribute;
}

/**
 * 超链接组件，组件宽高范围内点击实现跳转。
 * 
 * > **说明：**
 * >
 * > - 该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 * >
 * > - 该组件仅支持与系统浏览器配合使用。
 * 
 * ###### 需要权限
 * 
 * 跳转的目标应用使用网络时，需要申请权限ohos.permission.INTERNET。具体申请方式请参考[声明权限](docroot://security/AccessToken/declare-permissions.md)。
 * 
 * ###### 子组件
 * 
 * 可以包含[Image]{@link image}子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Hyperlink: HyperlinkInterface;

/**
 * 定义超链接组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const HyperlinkInterface: HyperlinkAttribute;