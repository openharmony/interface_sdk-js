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
/**
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */


// WARNING! THIS FILE IS AUTO-GENERATED, DO NOT MAKE CHANGES, THEY WILL BE LOST ON NEXT GENERATION!

import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { ButtonType } from './button'
import { ClickEvent } from './common'
import { SecurityComponentMethod, SecurityComponentLayoutDirection } from './securityComponent'
import { Dimension, Position, Edges, LocalizedEdges, ResourceColor, Padding, Length, SizeOptions, ConstraintSizeOptions } from './units'
import { FontStyle, FontWeight, BorderStyle } from './enums'
import { Resource } from './../../../api/global/resource'
export enum SaveIconStyle {
    FULL_FILLED = 0,
    LINES = 1,
    PICTURE = 2
}
export enum SaveDescription {
    DOWNLOAD = 0,
    DOWNLOAD_FILE = 1,
    SAVE = 2,
    SAVE_IMAGE = 3,
    SAVE_FILE = 4,
    DOWNLOAD_AND_SHARE = 5,
    RECEIVE = 6,
    CONTINUE_TO_RECEIVE = 7,
    SAVE_TO_GALLERY = 8,
    EXPORT_TO_GALLERY = 9,
    QUICK_SAVE_TO_GALLERY = 10,
    RESAVE_TO_GALLERY = 11
}
export interface SaveButtonOptions {
    icon?: SaveIconStyle;
    text?: SaveDescription;
    buttonType?: ButtonType;
}
export enum SaveButtonOnClickResult {
    SUCCESS = 0,
    TEMPORARY_AUTHORIZATION_FAILED = 1
}
export interface SaveButtonInterface {
    invoke(): SaveButtonAttribute;

}
export type Callback_ClickEvent_SaveButtonOnClickResult_Void = (event: ClickEvent,
    result: SaveButtonOnClickResult) => void;
export interface SaveButtonAttribute extends SecurityComponentMethod {
    @memo
    onClick(value: ((event: ClickEvent,result: SaveButtonOnClickResult) => void)): this;
}
@memo
@ComponentBuilder
export declare function SaveButton(
    options?: SaveButtonOptions | undefined, 
    @memo
    content_?: () => void,
): SaveButtonAttribute
