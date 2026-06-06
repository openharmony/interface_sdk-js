'use static';
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
 * @file
 * @kit ArkUI
 */

import { CommonMethod } from './common';
import { VoidCallback } from "./units";
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier } from "./common";

/**
 * 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。
 *
 * 除支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)外，还支持以下事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface CounterAttribute extends CommonMethod {
    /**
     * 监听数值增加事件。
     *
     * @param { VoidCallback | undefined } event
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onInc(event: VoidCallback | undefined): this;
    /**
     * 监听数值减少事件。
     *
     * @param { VoidCallback | undefined } event
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDec(event: VoidCallback | undefined): this;
    /**
     * 设置“减少”按钮的禁用或使能。
     *
     * @param { boolean | undefined } value - “减少”按钮禁用或使能。<br/>默认值：true，true表示使能“减少”按钮，false表示禁用“减少”按钮。<br/>设置undefined时
     *     恢复默认值。
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enableDec(value: boolean | undefined): this;
    /**
     * 设置“增加”按钮的禁用或使能。
     *
     * @param { boolean | undefined } value - “增加”按钮禁用或使能。<br/>默认值：true，true表示使能“增加”按钮，false表示禁用“增加”按钮。<br/>设置undefined时
     *     恢复默认值。
     * @returns { CounterAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enableInc(value: boolean | undefined): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<BadgeAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { BadgeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<CounterAttribute> | AttributeModifier<CommonMethod> | undefined): this;

    /**
     * 设置Counter选项。
     *
     * @returns { CounterAttribute } 返回Counter属性实例。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setCounterOptions(): this;
}
/**
 * 创建计数器组件。
 *
 * @param { CustomBuilder } [content_]
 * @returns { CounterAttribute } The attribute of the Counter.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Counter(
    content_?: CustomBuilder
): CounterAttribute;

/**
 * 定义Counter组件。
 *
 * @param { CustomBuilderT<CounterAttribute> } style - Counter属性实例。
 * @param { CustomBuilder } [content_] - 子组件。
 * @returns { CounterAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Counter(
    style: CustomBuilderT<CounterAttribute>,
    content_?: CustomBuilder,
): CounterAttribute;