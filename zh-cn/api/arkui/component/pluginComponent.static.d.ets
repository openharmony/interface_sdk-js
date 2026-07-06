'use static';
/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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

import { VoidCallback } from './units';
import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier, CommonMethod } from './common';
import { RecordData } from '../../@ohos.base';
import { Builder } from '@ohos.arkui.component';

/**
 * PluginComponentTemplate
 *
 * @interface PluginComponentTemplate
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export interface PluginComponentTemplate {
    /**
     * 定义插件来源名称。
     *
     * @type { string | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    source: string | undefined;
    /**
     * 定义模板的bundleName。
     *
     * @type { string | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    bundleName: string | undefined;
}

/**
 * 定义用于构造插件组件的选项。
 * AnonyMous Object Rectification
 *
 * @interface PluginComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PluginComponentOptions {
    /**
     * 插件组件模板。
     * AnonyMous Object Rectification
     * @type { PluginComponentTemplate }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    template: PluginComponentTemplate;
    /**
     * 插件组件数据。
     * AnonyMous Object Rectification
     * @type { RecordData }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    data: RecordData;
}
/**
 * 发生错误时提供的数据。
 * AnonyMous Object Rectification
 *
 * @interface PluginErrorData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PluginErrorData {
    /**
     * 错误码。
     * AnonyMous Object Rectification
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    errcode: int;
    /**
     * 错误信息。
     * AnonyMous Object Rectification
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    msg: string;
}
/**
 * 发生错误时触发的回调。
 * AnonyMous Object Rectification
 *
 * @typedef { function } PluginErrorCallback
 * @param { PluginErrorData } info - 插件错误数据
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type PluginErrorCallback = (info: PluginErrorData) => void;

/**
 * 定义插件组件的属性方法。
 *
 * @extends CommonMethod
 * @typedef PluginComponentAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @noninterop
 * @since 23 static
 */
export declare interface PluginComponentAttribute extends CommonMethod {
    /**
     * 设置插件组件选项。
     *
     * @param { PluginComponentOptions } options - 选项
     * @returns { this } PluginComponentAttribute实例
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @systemapi
     * @since 26.0.0 staticonly
     */
    setPluginComponentOptions(options: PluginComponentOptions): this;

    /**
     * PluginComponent的onComplete回调
     * AnonyMous Object Rectification
     *
     * @param { VoidCallback | undefined } callback
     * @returns { PluginComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onComplete(callback: VoidCallback | undefined): this;
    /**
     * PluginComponent的onError回调
     * AnonyMous Object Rectification
     *
     * @param { PluginErrorCallback | undefined } callback
     * @returns { PluginComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onError(callback: PluginErrorCallback | undefined): this;
    /**
     * 设置PluginComponent组件的属性修改器。
     *
     * @param { AttributeModifier<PluginComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { PluginComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    attributeModifier(modifier: AttributeModifier<PluginComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 定义PluginComponent组件。
 * @param { PluginComponentOptions } options - 选项
 * @returns { PluginComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function PluginComponent(
    options: PluginComponentOptions
): PluginComponentAttribute

/**
 * 定义PluginComponent组件。它要求在组件属性设置开始时调用setPluginComponentOptions，
 * 并在组件属性设置结束时调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<PluginComponentAttribute> } style - 用于设置plugincomponent属性的回调。
 * @returns { PluginComponentAttribute } PluginComponent的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @systemapi
 * @since 26.0.0 staticonly
 */
@Builder
export declare function PluginComponent(
    style: CustomBuilderT<PluginComponentAttribute>
): PluginComponentAttribute
