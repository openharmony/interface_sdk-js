/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

export enum Direction {
    /**
     * Cursor moves up
     */
    CURSOR_UP = 1,

    /**
     * Cursor moves down
     */
    CURSOR_DOWN,

    /**
     * Cursor moves left
     */
    CURSOR_LEFT,

    /**
     * Cursor moves right
     */
    CURSOR_RIGHT,
}

/**
 * Range of selected text.
 * @interface Range
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export interface Range {
    /**
     * Indicates the index of the first character of the selected text.
     * @type { number }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    readonly start: number;

    /**
     * Indicates the index of the last character of the selected text.
     * @type { number }
     * @readonly
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    readonly end: number;
}

/**
 * Movement of cursor.
 * @interface Movement
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export interface Movement {
    /**
     * Indicates the direction of cursor movement
     * @type { number }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    readonly direction: Direction;
}