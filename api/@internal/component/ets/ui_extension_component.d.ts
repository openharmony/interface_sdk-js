/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * Provide an interface for the ui extension component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
interface UIExtensionComponentInterface {
    /**
     * Construct the ui extension component.
     * Called when the ui extension component is used.
     * @param { string } action - indicates implicit query fields of the UIExtensionAbility
     * @param { { [key: string]: any } } parameters - indicates info of the UIExtensionAbility
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @returns { UIExtensionComponentAttribute }
     * @since 10
     */
    (action: string, parameters?: { [key: string]: any }): UIExtensionComponentAttribute;
}

/**
 * Define the attribute functions of ui extension component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare class UIExtensionComponentAttribute extends CommonMethod<UIExtensionComponentAttribute> {

    /**
     * Called when the component is connected to ability.
     * @param { () => void } Callback function when UIExtensionAbility connects successfully
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @returns { UIExtensionComponentAttribute }
     * @since 10
     */
    onConnected(callback: () => void): UIExtensionComponentAttribute;

    /**
     * Called when the component is disconnected.
     * @param { () => void } - Callback function when UIExtensionAbility disconnects
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @returns { UIExtensionComponentAttribute }
     * @since 10
     */
    onDisconnected(callback: () => void): UIExtensionComponentAttribute;

    /**
     * Called when the provider sends data
     * @param { (info: {code: number, want?: import('../api/@ohos.app.ability.Want').default}) => void } indicates info of the UIExtensionAbility
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @returns { UIExtensionComponentAttribute }
     * @since 10
     */
    onResult(callback: (info: {
        code: number, want?: import('../api/@ohos.app.ability.Want').default
    }) => void): UIExtensionComponentAttribute

    /**
     * Called when loading failed, takes the error messages as input parameter
     * @param { (info: {errCode: number, errMsg: string}) => void } indicates info of the UIExtensionAbility
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @returns { UIExtensionComponentAttribute }
     * @since 10
     */
    onError(callback: (info: {
        errCode: number, errMsg: string
    }) => void): UIExtensionComponentAttribute
}

/**
 * Defines UIExtensionComponent Component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare const UIExtensionComponent: UIExtensionComponentInterface;

/**
 * Defines UIExtensionComponent Component instance.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare const UIExtensionComponentInstance: UIExtensionComponentAttribute;
