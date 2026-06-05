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
 * @file Defines WithTheme component.
 * @kit ArkUI
 */

import { CustomTheme } from '../../@ohos.arkui.theme';

import { ThemeColorMode, AttributeModifier, CommonMethod } from './common';

import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder } from './builder';

/**
 * 设置WithTheme作用域内组件缺省样式及深浅色模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface WithThemeOptions {

  /**
   * 用于自定义WithTheme作用域内组件缺省配色。 
   * 
   * 默认值：undefined，缺省样式跟随系统[token默认样式](docroot://ui/theme_skinning.md#系统缺省token色值)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  theme?: CustomTheme;

  /**
   * 用于指定WithTheme作用域内组件配色深浅色模式。
   * 
   * 默认值：ThemeColorMode.SYSTEM
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  colorMode?: ThemeColorMode;
}

/**
 * 不支持[通用属性]{@link ./../../@internal/component/ets/common}和[通用事件]{@link ./../../@internal/component/ets/common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface WithThemeAttribute {

  /**
   * 设置组件的源码跳转信息。
   *
   * @param { string } sourceLine - 源代码行。
   * @param { string } [moduleName] - 组件所属的模块。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default debugLine(sourceLine: string, moduleName?: string): this;

  /**
   * 设置WithTheme选项。
   *
   * @param { WithThemeOptions | undefined } options - 创建WithTheme的选项。
   * @returns { WithThemeAttribute } 返回WithThemeAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setWithThemeOptions(options: WithThemeOptions | undefined): this;

  /**
   * 通知组件已完成设置其属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default applyAttributesFinish(): void;
}

/**
 * 设置应用局部页面自定义主题风格。
 *
 * @param { WithThemeOptions | undefined } options - 设置作用域内组件配色。
 * @param { CustomBuilder } [content_] - 支持单个子组件。
 * @returns { WithThemeAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function WithTheme(
    options: WithThemeOptions | undefined, 
    content_?: CustomBuilder,
): WithThemeAttribute;

/**
 * 用于WithTheme定义
 *
 * @param { CustomBuilderT<WithTheme属性> } style_ - WithTheme属性实例
 * @param { CustomBuilder } [content_] - 容器
 * @returns { WithTheme属性 } WithTheme属性
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function WithTheme(
    style_: CustomBuilderT<WithThemeAttribute>,
    content_?: CustomBuilder,
): WithThemeAttribute;