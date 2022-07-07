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

import * as _AbilityContext  from './application/AbilityContext';
import * as _AbilityStageContext  from './application/AbilityStageContext';
import * as _ApplicationContext  from './application/ApplicationContext';
import * as _BaseContext  from './application/BaseContext';
import * as _Context  from './application/Context';
import * as _ExtensionContext  from './application/ExtensionContext';
import * as _FormExtensionContext  from './application/FormExtensionContext';

/**
 * The context of an application. It allows access to application-specific resources.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @permission N/A
 * @StageModelOnly
 */
declare namespace context {

    /**
     * The context of an ability. It allows access to ability-specific resources.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @permission N/A
     * @StageModelOnly
     */
    export type AbilityContext = _AbilityContext.default

    /**
     * The context of an abilityStage. It allows access to abilityStage-specific resources.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @permission N/A
     * @StageModelOnly
     */
    export type AbilityStageContext = _AbilityStageContext.default

    /**
     * The context of an application. It allows access to application-specific resources.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @permission N/A
     * @StageModelOnly
     */
    export type ApplicationContext = _ApplicationContext.default

    /**
     * The base context of 'app.Context' for FA Mode or
     * 'application.Context' for Stage Mode.
     *
     * @since 8
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @permission N/A
     */
    export type BaseContext = _BaseContext.default

    /**
     * The base context of an ability or an application. It allows access to
     * application-specific resources.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @permission N/A
     * @StageModelOnly
     */
    export type Context = _Context.default

    /**
     * The context of an extension. It allows access to extension-specific resources.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @permission N/A
     * @StageModelOnly
     */
    export type ExtensionContext = _ExtensionContext.default

    /**
     * The context of form extension. It allows access to
     * formExtension-specific resources.
     *
     * @since 9
     * @syscap SystemCapability.Ability.Form
     * @permission N/A
     * @StageModelOnly
     */
    export type FormExtensionContext = _FormExtensionContext.default
}

export default context;