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
 * @arkts 1.2
 */

import { CommonMethod } from "./common";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
import { AttributeModifier, CommonMethod } from "./common";

/**
 * Define the EffectComponentAttribute.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 20
 */
export declare interface EffectComponentAttribute extends CommonMethod {
    /**
     * Use snapshot when Effect Component have no visual effect.
     *
     * @param { boolean } enable
     * @returns { EffectComponentAttribute }
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 20
     */
    alwaysSnapshot(enable: boolean): this;
    /**
     * Set the attribute modifier for EffectComponent.
     *
     * @param { AttributeModifier<EffeceComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { EffectComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    attributeModifier(modifier: AttributeModifier<EffeceComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines EffectComponent Component
 *
 * @param { function } [content_] - EffectComponent
 * @returns { EffeceComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
@memo
@ComponentBuilder
export declare function EffectComponent(

    @memo
    content_?: () => void,
): EffeceComponentAttribute
