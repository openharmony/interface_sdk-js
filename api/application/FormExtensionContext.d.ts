/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { AsyncCallback } from "../basic";
import ExtensionContext from "./ExtensionContext";
import formBindingData from '../@ohos.application.formBindingData';

/**
 * The context of form extension. It allows access to
 * formExtension-specific resources.
 *
 * @since 8
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 */
export default class FormExtensionContext extends ExtensionContext {

    /**
     * update the given form.
     *
     * <p>You can use this method to update the given form</p>
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap AAFwk
     * @permission ohos.permission.REQUIRE_FORM.
     * @param formId Indicates the given form.
     * @param formBindingData Indicates the form data.
     * @return -
     */
    updateForm(formId: string, formBindingData: formBindingData.FormBindingData, callback: AsyncCallback<void>): void;
    updateForm(formId: string, formBindingData: formBindingData.FormBindingData): Promise<void>;
}