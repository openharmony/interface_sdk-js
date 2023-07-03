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
 * This interface is used for send data to the UIExtensionAbility.
 * It is returned from onRemoteReady callback of class UIExtensionDataSession
 * when UIExtensionAbility connects successfully
 * @interface UIExtensionProxy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare interface UIExtensionProxy {
  /**
   * this function is called to send data to the UIExtensionAbility.
   * @param { { [key:string]: Object } } data - data send to UIExtensionAbility
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  send(data: { [key: string]: Object }): void;
}

/**
 * This class is used for data IPC to the UIExtensionAbility.
 * when UIExtensionAbility connects successfully
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
interface UIExtensionDataSessionInterface {
  /**
   * Default initialization method for UIExtensionDataSessionInterface
   * @returns { UIExtensionDataSessionInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  (): UIExtensionDataSessionInterface;

  /**
   * callback called when data received form UIExtensionAbility
   * @param { (data: { [key: string]: Object }) => void } callback - called when data received form UIExtensionAbility
   * @returns { UIExtensionDataSessionInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  onReceive(callback: (data: { [key: string]: Object }) => void): UIExtensionDataSessionInterface;

  /**
   * callback called when remote UIExtensionAbility object is ready for receive data
   * @param { (proxy: UIExtensionProxy) => void } callback - callback called when remote UIExtensionAbility object is
   * <br/>ready for receive data
   * @returns { UIExtensionDataSessionInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  onRemoteReady(callback: (proxy: UIExtensionProxy) => void): UIExtensionDataSessionInterface;
}

/**
 * Provide an interface for the ui extension component, which is used to render UI of a remote UIExtensionAbility
 * @interface UIExtensionComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
interface UIExtensionComponentInterface {
  /**
   * Construct the ui extension component.
   * Called when the ui extension component is used.
   * @param { Want } want - indicates want of the UIExtensionAbility
   * @param { UIExtensionDataSession }[options] session - indicates session used to data RPC to the UIExtensionAbility
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  (want: import('../api/@ohos.app.ability.Want').default, session?: UIExtensionDataSession): UIExtensionComponentAttribute;
}

/**
 * Define the attribute functions of ui extension component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare class UIExtensionComponentAttribute extends CommonMethod<UIExtensionComponentAttribute> {
  /**
   * Called when the provider sends data
   * @param { (code: number, want?: Want) => void } callback - called when the UIExtensionAbility is terminated with
   * <br/>result data.
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  onResult(callback: (
    /**
     * result code.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 10
     */
    code: number,
    /**
     * result want.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 10
     */
    want?: import('../api/@ohos.app.ability.Want').default) => void): UIExtensionComponentAttribute;

  /**
   * Called when the connect to the UIExtension is broken.
   * @param { (releaseCode: number) => void } callback - called when the connect to the UIExtension is broken.
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  onRelease(callback: (
    /**
     * release code if disconnected from UIExtensionAbility, 0 means the UIExtensionAbility is terminate by itself,
     * <br/>otherwise the connect is broken abnormal.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 10
     */
    releaseCode: number) => void): UIExtensionComponentAttribute;

  /**
   * Called when some error occurred except disconnected from UIExtensionAbility.
   * @param { (errCode: number, errMsg: string) => void } callback - the callback
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  onError(callback: (
    /**
     * error code
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 10
     */
    errCode: number,
    /**
     * error message
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 10
     */
    errMsg: string) => void): UIExtensionComponentAttribute;
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

/**
 * Defines UIExtensionDataSession.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
declare const UIExtensionDataSession: UIExtensionDataSessionInterface;
