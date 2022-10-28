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

import {AsyncCallback} from './basic';
import InputMethodSubtype from './@ohos.inputMethodSubtype';

/**
 * Input method
 *
 * @since 6
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 */
declare namespace inputMethod {
    /**
     * Errorcode 201. The permissions check fails.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_PERMISSION: number;

    /**
     * Errorcode 401. The parameters check fails.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_PARAMCHECK: number;

    /**
     * Errorcode 801. Call unsupported api.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_UNSUPPORTED: number;

    /**
     * Errorcode 12800001. Package manager error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_PACKAGEMANAGER: number;

    /**
     * Errorcode 12800002. Input method engine error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_IMENGINE: number;

    /**
     * Errorcode 12800003. Input method client error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_IMCLIENT: number;

    /**
     * Errorcode 12800004. Key event processing error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_KEYEVENT: number;

    /**
     * Errorcode 12800005. Configuration persisting error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_CONFPERSIST: number;

    /**
     * Errorcode 12800006. Input method controller error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_CONTROLLER: number;

    /**
     * Errorcode 12800007. Input method settings extension error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_SETTINGS: number;

    /**
     * Errorcode 12800008. Input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_IMMS: number;

    /**
     * Errorcode 12899999. Others error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_OTHERS: number;

    /**
     * Keyboard max number
     * @since 8
     */
    const MAX_TYPE_NUM: number

    /**
     * Input method setting
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.inputmethod.getController
     */
    function getInputMethodSetting(): InputMethodSetting;

    /**
     * Input method controller
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.inputmethod.getController
     */
    function getInputMethodController(): InputMethodController;

    /**
     * Input method setting
     * @since 9
     * @return :-
     * @throws {BusinessError} 12800007 - settings extension error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
     function getSetting(): InputMethodSetting;

    /**
     * Input method controller
     * @since 9
     * @return :-
     * @throws {BusinessError} 12800006 - input method controller error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    function getController(): InputMethodController;

    /**
     * Switch input method
     * @since 9
     * @param target Indicates the input method which will replace the current one
     * @return :-
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @throws {BusinessError} 201 - permissions check fails.
     * @throws {BusinessError} 401 - parameter error.
     * @throws {BusinessError} 12800005 - configuration persisting error.
     * @throws {BusinessError} 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    function switchInputMethod(target: InputMethodProperty, callback: AsyncCallback<boolean>): void;

    /**
     * Switch input method
     * @since 9
     * @param target Indicates the input method which will replace the current one
     * @return :-
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @throws {BusinessError} 201 - permissions check fails.
     * @throws {BusinessError} 401 - parameter error.
     * @throws {BusinessError} 12800005 - configuration persisting error.
     * @throws {BusinessError} 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    function switchInputMethod(target: InputMethodProperty): Promise<boolean>;

    /**
     * Get current input method
     * @since 9
     * @return The InputMethodProperty object of the current input method
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    function getCurrentInputMethod(): InputMethodProperty;

    /**
     * Switch current input method subtype
     * @since 9
     * @param target Indicates the input method subtype which will replace the current one
     * @return success or fail
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @throws {BusinessError} 201 - permissions check fails.
     * @throws {BusinessError} 401 - parameter error.
     * @throws {BusinessError} 12800005 - configuration persisting error.
     * @throws {BusinessError} 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    function switchCurrentInputMethodSubtype(target: InputMethodSubtype, callback: AsyncCallback<boolean>): void;

    /**
     * Switch current input method subtype
     * @since 9
     * @param target Indicates the input method subtype which will replace the current one
     * @return success or fail
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @throws {BusinessError} 201 - permissions check fails.
     * @throws {BusinessError} 401 - parameter error.
     * @throws {BusinessError} 12800005 - configuration persisting error.
     * @throws {BusinessError} 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    function switchCurrentInputMethodSubtype(target: InputMethodSubtype): Promise<boolean>;

    /**
     * Get the current input method subtype
     * @since 9
     * @return The InputMethodSubtype object of the current input method
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    function getCurrentInputMethodSubtype(): InputMethodSubtype;

    /**
     * Switch input method and subtype
     * @since 9
     * @param inputMethodProperty Indicates the target input method
     * @param inputMethodSubtype Indicates the target input method subtype
     * @return :-
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @throws {BusinessError} 201 - permissions check fails.
     * @throws {BusinessError} 401 - parameter error.
     * @throws {BusinessError} 12800005 - configuration persisting error.
     * @throws {BusinessError} 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    function switchCurrentInputMethodAndSubtype(inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype, callback: AsyncCallback<boolean>): void;

    /**
     * Switch input method and subtype
     * @since 9
     * @param inputMethodProperty Indicates the target input method
     * @param inputMethodSubtype Indicates the target input method subtype
     * @return :-
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @throws {BusinessError} 201 - permissions check fails.
     * @throws {BusinessError} 401 - parameter error.
     * @throws {BusinessError} 12800005 - configuration persisting error.
     * @throws {BusinessError} 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    function switchCurrentInputMethodAndSubtype(inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype): Promise<boolean>;

    /**
     * @since 8
     */
    interface InputMethodSetting {
        /**
         * Subscribe input method or subtype change
         * @since 9
         * @param type Indicates the event type
         * @return :-
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        on(type: 'imeChange', callback: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void): void;

        /**
         * Unsubscribe input method or subtype change
         * @since 9
         * @param type Indicates the event type
         * @return :-
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
         off(type: 'imeChange', callback?: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void): void;

        /**
         * List subtype of the specified input method
         * @since 9
         * @param inputMethodProperty Indicates the specified input method
         * @return :-
         * @throws {BusinessError} 401 - parameter error.
         * @throws {BusinessError} 12800001 - package manager error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        listInputMethodSubtype(inputMethodProperty: InputMethodProperty, callback: AsyncCallback<Array<InputMethodSubtype>>): void;

        /**
         * List subtype of the specified input method
         * @since 9
         * @param inputMethodProperty Indicates the specified input method
         * @return :-
         * @throws {BusinessError} 401 - parameter error.
         * @throws {BusinessError} 12800001 - package manager error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        listInputMethodSubtype(inputMethodProperty: InputMethodProperty): Promise<Array<InputMethodSubtype>>;

        /**
         * List subtype of current input method
         * @since 9
         * @return :-
         * @throws {BusinessError} 12800001 - package manager error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        listCurrentInputMethodSubtype(callback: AsyncCallback<Array<InputMethodSubtype>>): void;

        /**
         * List subtype of current input method
         * @since 9
         * @return :-
         * @throws {BusinessError} 12800001 - package manager error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        listCurrentInputMethodSubtype(): Promise<Array<InputMethodSubtype>>;

        /**
         * List input methods
         * @since 9
         * @param enable :
         *     If true, collect enabled input methods.
         *     If false, collect disabled input methods.
         * @return :-
         * @throws {BusinessError} 401 - parameter error.
         * @throws {BusinessError} 12800001 - package manager error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        getInputMethods(enable: boolean, callback: AsyncCallback<Array<InputMethodProperty>>): void;

        /**
         * List input methods
         * @since 9
         * @param enable :
         *     If true, collect enabled input methods.
         *     If false, collect disabled input methods.
         * @return :-
         * @throws {BusinessError} 401 - parameter error.
         * @throws {BusinessError} 12800001 - package manager error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        getInputMethods(enable: boolean): Promise<Array<InputMethodProperty>>;

        /**
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.inputmethod.InputMethodSetting.getInputMethods
         */
        listInputMethod(callback: AsyncCallback<Array<InputMethodProperty>>): void;
        /**
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.inputmethod.InputMethodSetting.getInputMethods
         */
        listInputMethod(): Promise<Array<InputMethodProperty>>;

        /**
         * Show input method setting extension dialog
         * @since 9
         * @return :-
         * @permission ohos.permission.CONNECT_IME_ABILITY
         * @throws {BusinessError} 201 - permissions check fails.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        showOptionalInputMethods(callback: AsyncCallback<boolean>): void;

        /**
         * Show input method setting extension dialog
         * @since 9
         * @return -
         * @permission ohos.permission.CONNECT_IME_ABILITY
         * @throws {BusinessError} 201 - permissions check fails.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        showOptionalInputMethods(): Promise<boolean>;

        /**
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.inputmethod.InputMethodSetting.showOptionalInputMethods
         */
        displayOptionalInputMethod(callback: AsyncCallback<void>): void;

        /**
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.inputmethod.InputMethodSetting.showOptionalInputMethods
         */
        displayOptionalInputMethod(): Promise<void>;
    }

    /**
     * @since 6
     */
    interface InputMethodController {
        /**
         * Stop input
         * @since 9
         * @return :-
         * @throws {BusinessError} 201 - permissions check fails.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        stopInputSession(callback: AsyncCallback<boolean>): void;

        /**
         * Stop input
         * @since 9
         * @return :-
         * @throws {BusinessError} 201 - permissions check fails.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        stopInputSession(): Promise<boolean>;

        /**
         * Stop input
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.inputmethod.InputMethodController.stopInputSession
         * @return :-
         * @syscap SystemCapability.MiscServices.InputMethodFramework
        */
        stopInput(callback: AsyncCallback<boolean>): void;

        /**
         * Stop input
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.inputmethod.InputMethodController.stopInputSession
         * @return :-
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        stopInput(): Promise<boolean>;

        /**
         * Show soft keyboard
         * @since 9
         * @return :-
         * @permission ohos.permission.CONNECT_IME_ABILITY
         * @throws {BusinessError} 201 - permissions check fails.
         * @throws {BusinessError} 12800003 - input method client error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
        */
        showSoftKeyboard(callback: AsyncCallback<void>): void;

        /**
         * Show soft keyboard
         * @since 9
         * @return :-
         * @permission ohos.permission.CONNECT_IME_ABILITY
         * @throws {BusinessError} 201 - permissions check fails.
         * @throws {BusinessError} 12800003 - input method client error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        showSoftKeyboard():Promise<void>;

        /**
         * Hide soft keyboard
         * @since 9
         * @return :-
         * @permission ohos.permission.CONNECT_IME_ABILITY
         * @throws {BusinessError} 201 - permissions check fails.
         * @throws {BusinessError} 12800003 - input method client error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        hideSoftKeyboard(callback: AsyncCallback<void>): void;

        /**
         * Hide soft keyboard
         * @since 9
         * @return :-
         * @permission ohos.permission.CONNECT_IME_ABILITY
         * @throws {BusinessError} 201 - permissions check fails.
         * @throws {BusinessError} 12800003 - input method client error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        hideSoftKeyboard():Promise<void>;
    }

    /**
     * input method property
     * @since 8
     */
    interface InputMethodProperty {
        /**
         * The name of input method
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.inputmethod.InputMethodProperty.name
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        readonly packageName?: string;

        /**
         * The id of input method
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.inputmethod.InputMethodProperty.id
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        readonly methodId?: string;

        /**
         * The name of input method
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
         readonly name: string;

         /**
          * The id of input method
          * @since 9
          * @syscap SystemCapability.MiscServices.InputMethodFramework
          */
         readonly id: string;

        /**
         * The label of input method
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        readonly label?: string;

        /**
         * The icon of input method
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        readonly icon?: string;

        /**
         * The icon id of input method
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        readonly iconId?: number;

        /**
         * The extra info of input method
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        extra: object;
    }
}

export default inputMethod;