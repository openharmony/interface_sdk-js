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

import {CommonMethod} from "./common";

/**
 *Sets the relative position of icons and text.
 * @devices phone, tablet, car.
 * @since 7
 */
export declare enum IconPosition {

  /**
  * The icon is at the beginning of the text.
  * @devices phone, tablet, car.
  * @since 7
  */
  Start,

  /**
  * The icon is at the end of the text.
  * @devices phone, tablet, car.
  * @since 7
  */
  End
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare class PieceExtend<T> extends PieceAttribute<T> {
}

/**
 * Provides text and icons for setting block entries.
 * @devices phone, tablet, car.
 * @since 7
 */
interface Piece extends PieceAttribute<Piece> {

  /**
   * Called when setting the position of a block entry.
   * @devices phone, tablet, car.
   * @since 7
   */
  (options?: {content: string,icon?: string}): Piece;
}

declare class PieceAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the relative position of the icon and the text is set.
   * @devices phone, tablet, car.
   * @since 7
   */
  iconPosition(value: IconPosition): T;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare const PieceInterface: Piece;