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
import window from '../../@ohos.window';
import { FoldStatus, Alignment, AppRotation } from './enums';
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
/**
 * 窗口模式枚举。
 *
 * @typedef { window.WindowStatusType } WindowStatusType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type WindowStatusType = window.WindowStatusType;
/**
 * FolderStack的配置项。
 *
 * @interface FolderStackOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface FolderStackOptions {
    /**
     * 定义悬停态会被移到上半屏的子组件的id数组。
     * 当悬停触发时，upperItems数组中的子组件自动避让折叠屏折痕区后移到上半屏，
     * 其它组件堆叠在下半屏区域。
     *
     * Anonymous Object Rectification
     * @type { ?Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    upperItems?: Array<string>;
}
/**
 * 当折叠状态改变的时候回调，仅在横屏状态下生效。
 *
 * @interface OnFoldStatusChangeInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface OnFoldStatusChangeInfo {
    /**
     * 当前设备的折叠状态。
     *
     * Anonymous Object Rectification
     * @type { FoldStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    foldStatus: FoldStatus;
}
/**
 * 当前设备的折叠状态。
 *
 * Anonymous Object Rectification
 * @typedef { function } OnFoldStatusChangeCallback
 * @param { OnFoldStatusChangeInfo } event - 当前设备的折叠状态。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnFoldStatusChangeCallback = (event: OnFoldStatusChangeInfo) => void;
/**
 * 当前设备的悬停状态改变时触发的回调。
 *
 * Anonymous Object Rectification
 * @typedef { function } OnHoverStatusChangeCallback
 * @param { HoverEventParam } param - 当前设备与悬停状态相关的参数，包括设备的折叠状态、
 *    悬停状态、应用方向以及窗口模式枚举。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnHoverStatusChangeCallback = (param: HoverEventParam) => void;

/**
 * The FolderStackAttribute.
 *
 * @extends CommonMethod
 * @interface FolderStackAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface FolderStackAttribute extends CommonMethod {
    /**
     * 设置子组件在容器内的对齐方式。
     * 该属性与align同时设置时，后设置的属性生效。
     *
     * @param { Alignment } value - 子组件在容器内的对齐方式。<br/>
     *    默认值：Alignment.Center<br/>
     *    非法值：按默认值处理。<br/>
     *    取值为undefined时，按默认值处理。
     * @returns { FolderStackAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default alignContent(value: Alignment | undefined): this;
    /**
    * 当前设备的折叠状态改变时触发回调，仅在横屏状态下生效。
    *
    * Anonymous Object Rectification
    * @param { OnFoldStatusChangeCallback } callback - 当前设备的折叠状态改变时触发的回调。
    * @returns { FolderStackAttribute }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 23 static
    */
    default onFolderStateChange(callback: OnFoldStatusChangeCallback | undefined): this;
    /**
     * 当前设备的悬停状态改变时触发回调。
     *
     * Anonymous Object Rectification
     * @param { OnHoverStatusChangeCallback } handler - 当前设备的悬停状态改变时触发的回调。
     * @returns { FolderStackAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onHoverStatusChange(handler: OnHoverStatusChangeCallback | undefined): this;
    /**
     * 设置是否使用默认动效。
     *
     * @param { boolean } value - 是否使用默认动效。<br/>
     *    默认值：true，设置true表示使用默认动效，设置false表示不使用默认动效。<br/>
     *    非法值：按默认值处理。<br/>
     *    取值为undefined时，按默认值处理。
     * @returns { FolderStackAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enableAnimation(value: boolean | undefined): this;
    /**
     * 设置是否开启自动旋转，仅在系统自动旋转关闭时该属性生效。
     *
     * @param { boolean } value - 是否开启自动旋转。<br/>
     *    默认值：true，设置true表示FolderStack在半折叠状态（见
     *    [FoldStatus](docroot://reference/apis-arkui/arkui-ts/ts-appendix-enums.md#foldstatus11)）
     *    进行布局时开启自动旋转，设置false表示关闭自动旋转。
     *    该属性不区分设备类型。<br/>
     *    非法值：按默认值处理。<br/>
     *    取值为undefined时，按默认值处理。
     * @returns { FolderStackAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default autoHalfFold(value: boolean | undefined): this;
    /**
 	 * Set FolderStack options.
 	 *
 	 * @param { FolderStackOptions } [options] - FolderStack constructor options
 	 * @returns { FolderStackAttribute } Returns the instance of the FolderStackAttribute.
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 staticonly
 	 */
 	default setFolderStackOptions(options?: FolderStackOptions): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<FolderStackAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * - 动态设置FolderStack组件的属性。<br/>
     *   取值为undefined时，按当前组件的属性方法默认值处理。
     * @returns { FolderStackAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<FolderStackAttribute>
        | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * 当前设备与悬停状态相关的参数，包括设备的折叠状态、悬停状态、应用方向以及窗口模式枚举。
 *
 * @interface HoverEventParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface HoverEventParam {
    /**
     * 当前设备的折叠状态。
     *
     * @type { FoldStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    foldStatus: FoldStatus;
    /**
     * 当前是否为悬停态。
     * 设置为true时表示当前为悬停态，设置为false时表示当前为非悬停态。
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isHoverMode: boolean;
    /**
     * 当前应用方向。
     *
     * @type { AppRotation }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    appRotation: AppRotation;
    /**
     * 窗口模式枚举。
     *
     * @type { WindowStatusType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowStatusType: WindowStatusType;
}

/**
 * FolderStack的配置项。
 *
 * @param { FolderStackOptions } [options] - FolderStack的配置项。
 * @param { CustomBuilder } [content_] - container
 * @returns { FolderStackAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function FolderStack(
    options?: FolderStackOptions, 
    content_?: CustomBuilder
): FolderStackAttribute

/**
 * Defines FolderStack Component.
 *
 * @param { CustomBuilderT<FolderStackAttribute> } style - the callback to set up component's attributes.
 * @param { CustomBuilder } [content_] - container
 * @returns { FolderStackAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function FolderStack(
    style: CustomBuilderT<FolderStackAttribute>,
    content_?: CustomBuilder,
): FolderStackAttribute;
