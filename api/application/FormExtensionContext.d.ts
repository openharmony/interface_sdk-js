/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
import Want from '../@ohos.application.Want';

/**
 * The context of form extension. It allows access to
 * formExtension-specific resources.
 *
 * @since 9
 * @syscap SystemCapability.Ability.Form
 * @permission N/A
 * @StageModelOnly
 */
export default class FormExtensionContext extends ExtensionContext {

    /**
     * start an ability within the same bundle.
     *
     * @since 9
     * @syscap SystemCapability.Ability.Form
     * @param want includes ability name, parameters and relative info sending to an ability.
     * @return -
     * @StageModelOnly
     * @systemapi hide for inner use
     */
    startAbility(want: Want, callback: AsyncCallback<void>): void;
    startAbility(want: Want): Promise<void>;
}
