/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
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
 * 表示用于运行abc的worker。
 * @typedef { import('../api/@ohos.worker').default.Worker } Worker
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare type Worker = import('../api/@ohos.worker').default.Worker;

/**
 * 表示错误回调。
 * @typedef { import('../api/@ohos.base').ErrorCallback } ErrorCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare type ErrorCallback = import('../api/@ohos.base').ErrorCallback;

/**
 * 该接口用于在构造时设置DynamicComponentAttribute的选项。
 * @interface DynamicOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface DynamicOptions {
    /**
     * 表示DynamicOptions的entryPoint。
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    entryPoint: string;
    /**
     * 表示用于运行abc的受限worker。
     * @type { Worker } worker - 运行abc的worker
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    worker: Worker;
    /**
     * 表示DynamicComponent的背景是否透明。
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    backgroundTransparent?: boolean;
    /**
     * 表示是否允许DynamicComponent跨进程嵌套UEC。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    allowCrossProcessNesting?: boolean;
    /**
     * 表示是否允许DynamicComponent内部避让键盘。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    allowOccupied?: boolean;
}

/**
 * 提供DynamicComponent的接口，用于渲染其他ABC的UI。
 *
 * @returns { DynamicComponentAttribute } DynamicComponent的属性
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
interface DynamicComponentInterface {
    /**
     * 构造DynamicComponentInterface。<br/>
     * 在使用DynamicComponentInterface时调用。
     *
     * @param { DynamicOptions } options - DynamicComponentAttribute的构造配置
     * @returns { DynamicComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    (options: DynamicOptions): DynamicComponentAttribute;
}

/**
 * 定义DynamicComponent的属性方法。
 *
 * @extends CommonMethod<DynamicComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare class DynamicComponentAttribute extends CommonMethod<DynamicComponentAttribute> {
    /**
     * 当动态组件发生错误时回调。
     *
     * @param { ErrorCallback } callback - 当发生除与DynamicAbility断开连接之外的错误时回调。
     * @returns { DynamicComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onError(
        callback: ErrorCallback
    ): DynamicComponentAttribute;
}

/**
 * 定义DynamicComponent组件。
 * @type { DynamicComponentInterface }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const DynamicComponent: DynamicComponentInterface;

/**
 * 定义DynamicComponent组件实例。
 * @type { DynamicComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const DynamicComponentInstance: DynamicComponentAttribute;
