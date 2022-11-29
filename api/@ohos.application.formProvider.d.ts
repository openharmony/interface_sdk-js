/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from "./basic";
import formBindingData from "./@ohos.application.formBindingData";
import formInfo from "./@ohos.application.formInfo";
import Want from './@ohos.application.Want';

/**
 * interface of formProvider.
 *
 * @name formProvider
 * @since 8
 * @syscap SystemCapability.Ability.Form
 * @deprecated since 9
 * @useinstead ohos.app.form.formProvider
 */
declare namespace formProvider {
    /**
     * Set next update time for a specified form.
     *
     * @since 8
     * @syscap SystemCapability.Ability.Form
     * @param formId Indicates the form ID.
     * @param minute Indicates duration minute before next update.
     * @returns -
     */
    function setFormNextRefreshTime(formId: string, minute: number, callback: AsyncCallback<void>): void;
    function setFormNextRefreshTime(formId: string, minute: number): Promise<void>;

    /**
     * Update a specified form.
     *
     * Client to communication with FormManagerService.
     *
     * @since 8
     * @syscap SystemCapability.Ability.Form
     * @param formId Indicates the form ID
     * @param formBindingData Indicates the form data
     * @returns -
     */
    function updateForm(formId: string, formBindingData: formBindingData.FormBindingData,
        callback: AsyncCallback<void>): void;
    function updateForm(formId: string, formBindingData: formBindingData.FormBindingData): Promise<void>;

    /**
     * Get infos of all forms belonging to current bundle.
     *
     * Client to communication with FormManagerService.
     *
     * @since 9
     * @syscap SystemCapability.Ability.Form
     * @param filter Indicates the requirements the forms that the formInfos belong to have to meet.
     * @returns Infos of all forms.
     */
    function getFormsInfo(filter: formInfo.FormInfoFilter, callback: AsyncCallback<Array<formInfo.FormInfo>>): void;
    function getFormsInfo(callback: AsyncCallback<Array<formInfo.FormInfo>>): void;
    function getFormsInfo(filter?: formInfo.FormInfoFilter): Promise<Array<formInfo.FormInfo>>;

    /**
     * Request to publish a form to the form host.
     *
     * @since 9
     * @syscap SystemCapability.Ability.Form
     * @param want The want of the form to publish
     * @param formBindingData Indicates the form data
     * @systemapi hide for inner use
     * @returns Returns form id
     */
     function requestPublishForm(want: Want, formBindingData: formBindingData.FormBindingData,
        callback: AsyncCallback<string>): void;
     function requestPublishForm(want: Want, callback: AsyncCallback<string>): void;
     function requestPublishForm(want: Want, formBindingData?: formBindingData.FormBindingData): Promise<string>;

    /**
     * Check if the request of publishing a form is supported by the host
     *
     * @since 9
     * @syscap SystemCapability.Ability.Form
     * @systemapi hide for inner use
     * @returns Returns true if the request is supported and false otherwise
     */
    function isRequestPublishFormSupported(callback: AsyncCallback<boolean>): void;
    function isRequestPublishFormSupported(): Promise<boolean>;

}
export default formProvider;