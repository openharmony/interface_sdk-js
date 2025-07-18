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
import { ResourceColor, Length, ResourceStr } from './units'
import { SelectionOptions } from './common'
import { TextDecorationType, TextDecorationStyle } from './enums'
export enum TextDataDetectorType {
    PHONE_NUMBER = 0,
    URL = 1,
    EMAIL = 2,
    ADDRESS = 3,
    DATE_TIME = 4
}
export interface TextDataDetectorConfig {
    types: Array<TextDataDetectorType>;
    onDetectResultUpdate?: ((breakpoints: string) => void);
    color?: ResourceColor;
}
export interface TextRange {
    start?: number;
    end?: number;
}
export interface InsertValue {
    insertOffset: number;
    insertValue: string;
}
export enum TextDeleteDirection {
    BACKWARD = 0,
    FORWARD = 1
}
export enum MenuType {
    SELECTION_MENU = 0,
    PREVIEW_MENU = 1
}
export interface DeleteValue {
    deleteOffset: number;
    direction: TextDeleteDirection;
    deleteValue: string;
}
export type OnDidChangeCallback = (rangeBefore: TextRange, rangeAfter: TextRange) => void;
export type EditableTextOnChangeCallback = (value: string, previewText?: PreviewText) => void;
export interface TextBaseController {
    setSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void
    closeSelectionMenu(): void
    getLayoutManager(): LayoutManager
}
export interface TextEditControllerEx extends TextBaseController {
    isEditing(): boolean
    stopEditing(): void
    setCaretOffset(offset: number): boolean
    getCaretOffset(): number
    getPreviewText(): PreviewText
}

export type Callback_StyledStringChangeValue_Boolean = (parameter: StyledStringChangeValue) => boolean;
export interface StyledStringChangedListener {
    onWillChange?: ((parameter: StyledStringChangeValue) => boolean);
    onDidChange?: OnDidChangeCallback;
}
export interface StyledStringChangeValue {
    range: TextRange;
}
export interface LayoutManager {
    getLineCount(): number
    getGlyphPositionAtCoordinate(x: number, y: number): PositionWithAffinity
}
export interface PositionWithAffinity {
    position: number;
}
export interface CaretStyle {
    width?: Length;
    color?: ResourceColor;
}
export interface TextMenuItemId {
    of(id: ResourceStr): TextMenuItemId
    equals(id: TextMenuItemId): boolean
}
export interface PreviewText {
    offset: number;
    value: string;
}
export interface TextMenuItem {
    content: ResourceStr;
    icon?: ResourceStr;
    id: TextMenuItemId;
}
export interface EditMenuOptions {
    onCreateMenu(menuItems: Array<TextMenuItem>): Array<TextMenuItem>
    onMenuItemClick(menuItem: TextMenuItem, range: TextRange): boolean
}
export interface DecorationStyleResult {
    type: TextDecorationType;
    color: ResourceColor;
    style?: TextDecorationStyle;
}
export interface FontSettingOptions {
    enableVariableFontWeight?: boolean;
}