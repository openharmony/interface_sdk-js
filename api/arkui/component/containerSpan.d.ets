/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// WARNING! THIS FILE IS AUTO-GENERATED, DO NOT MAKE CHANGES, THEY WILL BE LOST ON NEXT GENERATION!

import { memo, ComponentBuilder } from "./../stateManagement/runtime"
import { TextBackgroundStyle } from "./span"
import { AttributeModifier } from "./common"
export type ContainerSpanInterface = () => ContainerSpanAttribute;
export interface ContainerSpanAttribute {
    @memo
    textBackgroundStyle(value: TextBackgroundStyle): this;
    @memo
    attributeModifier(value: AttributeModifier<ContainerSpanAttribute>): this;
}
@memo
@ComponentBuilder
export declare function ContainerSpan(
    
    @memo
    content_?: () => void,
): ContainerSpanAttribute
