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

import { Callback, ErrorCallback, BusinessError } from '../../@ohos.base';
import { CommonMethod, AttributeModifier } from "./common";
import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { Builder } from '@ohos.arkui.component';

/**
 * 该接口用于在构造时设置DynamicComponentAttribute的选项。
 *
 * @interface DynamicOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DynamicOptions {
    /**
     * 表示DynamicOptions的entryPoint。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    entryPoint: string;
    /**
     * 表示用于运行abc的受限worker。
     *
     * @type { EAWorker | undefined } worker - 运行abc的worker
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    worker: EAWorker | undefined;
    /**
     * 表示DynamicComponent的背景是否透明。
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    backgroundTransparent?: boolean;
    /**
     * 表示是否允许DynamicComponent跨进程嵌套UEC。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    allowCrossProcessNesting?: boolean;
    /**
     * 表示是否允许DynamicComponent内部避让键盘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    allowOccupied?: boolean;
}

/**
 * 定义DynamicComponent的属性方法。
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DynamicComponentAttribute extends CommonMethod {
    /**
     * 设置动态组件选项。
     *
     * @param { DynamicOptions } options - 选项。
     * @returns { this } DynamicComponentAttribute实例
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setDynamicComponentOptions(options: DynamicOptions): this;
    /**
     * 当动态组件发生错误时回调。
     *
     * @param { ErrorCallback<BusinessError> | undefined } callback - 当发生错误时回调，<br/>
     *     除与DynamicAbility断开连接之外。
     * @returns { DynamicComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onError(callback: ErrorCallback<BusinessError> | undefined): this;
}

/**
 * 定义DynamicComponent组件。
 *
 * @param { DynamicOptions } options - 选项。
 * @returns { DynamicComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentBuilder
export declare function DynamicComponent(
    options: DynamicOptions
): DynamicComponentAttribute;

/**
 * 定义DynamicComponent组件。要求在组件属性设置开始时调用setDynamicComponentOptions，
 * 在组件属性设置结束时
 * 调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<DynamicComponentAttribute> } style - 用于设置DynamicComponent属性的回调。
 * @returns { DynamicComponentAttribute } DynamicComponent的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function DynamicComponent(
    style: CustomBuilderT<DynamicComponentAttribute>
): DynamicComponentAttribute;
