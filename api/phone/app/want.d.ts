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

import {ElementName} from "./elementname"

/**
 * Want is the basic communication component of the system.
 * @name Want
 * @since 6
 * @sysCap aafwk
 * @devices phone
 * @permission N/A
 * @testapi
 **/
export declare interface Want {
    /**
     * The description of the type in this Want.
     * @devices phone, tablet
     * @since 6
     * @sysCap AAFwk
     * @default -
     */
    type: string;

    /**
     * The description of the flags in this Want.
     * @devices phone, tablet
     * @since 6
     * @sysCap AAFwk
     * @default -
     */
    flags: number;

    /**
     * The description of an action in an want.
     * @devices phone, tablet
     * @since 6
     * @sysCap AAFwk
     * @default -
     */
    action: string;

    /**
     * The description of the WantParams object in an Want
     * @devices phone, tablet
     * @since 6
     * @sysCap AAFwk
     * @default -
     */
    want_param?: object

    /**
     * The description of a entities in a Want.
     * @devices phone, tablet
     * @since 6
     * @sysCap AAFwk
     * @default -
     */
    entities: Array<string>;

    /**
     * The description of an elementname in a Want.
     * @devices phone, tablet
     * @since 6
     * @sysCap AAFwk
     * @default -
     */
    elementName: ElementName;
}