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

import { CommonMethod } from "./common";

/**
 * Sets the relative position of icons and text.
 * @since 8
 */
export declare enum IconPosition {
  /**
   * The icon is at the beginning of the text.
   * @devices phone, tablet, car.
   * @since 8
   */
  Start,

  /**
   * The icon is at the end of the text.
   * @devices phone, tablet, car.
   * @since 8
   */
  End,
}

/**
 * Provides text and icons for setting block entries.
 * @since 8
 */
interface Piece extends PieceAttribute<Piece> {
  /**
   * Called when setting the position of a block entry.
   * @since 8
   */
  (options?: { content: string; icon?: string }): Piece;
}

declare class PieceAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the relative position of the icon and the text is set.
   * @since 8
   */
  iconPosition(value: IconPosition): T;
}

export declare class PieceExtend<T> extends PieceAttribute<T> {}
export declare const PieceInterface: Piece;
