/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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

import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from "../stateManagement/runtime";

import { UIContext } from './../../../api/@ohos.arkui.UIContext'


@Retention({policy: "SOURCE"})
export declare @interface Component {
    freezeWhenInactive: boolean = false;
}

@Retention({policy: "SOURCE"})
export declare @interface Entry {
    routeName: string = "";
    storage: string = "";
    useSharedStorage: boolean = false;
}

@Retention({policy: "SOURCE"})
export declare @interface Reusable {}

export interface CustomBuild {
    @memo
    build(): void;
}

export interface CustomLayout {

}

export declare abstract class CustomComponent<T extends CustomComponent<T, T_Options>, T_Options> {

    @memo
    @ComponentBuilder
    static $_instantiate<S extends CustomComponent<S, S_Options>, S_Options>(
        factory: () => S,
        initializers?: S_Options,
        @memo
        content?: () => void,
        reuseKey?: string   
    ): S;

   // Life cycle for custom component
    aboutToAppear(): void
    aboutToDisappear(): void
    onDidBuild(): void

    onPageShow(): void
    onPageHide(): void
    onBackPress(): boolean
    getUIContext(): UIContext

    @memo
    build(): void;
    
    aboutToReuse(): void
    aboutToRecycle(): void
}