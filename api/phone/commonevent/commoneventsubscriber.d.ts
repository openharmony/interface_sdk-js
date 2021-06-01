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
import { AsyncCallback } from './../basic';
import { CommonEventSubscribeInfo } from './commoneventsubscribeinfo';

/**
 * the subscriber of common event
 * @name CommonEventSubscriber
 * @since 6
 * @sysCap ces
 * @devices phone
 * @permission N/A
 * @testapi
 */
export interface CommonEventSubscriber {

  /**
   * Checks whether the current common event is an ordered common event.
   *
   * @devices phone
   * @since 6
   * @SysCap ces
   * @param callback Indicate the callback funtion to receive the common event.
   * @return -
   * @testapi
   */
  isOrderedCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the current common event is an ordered common event.
   *
   * @devices phone
   * @since 6
   * @SysCap ces
   * @param callback Indicate the callback funtion to receive the common event.
   * @return -
   * @testapi
   */
  isOrderedCommonEvent(): Promise<boolean>;

  /**
   * Checks whether the current common event is a sticky common event.
   *
   * @devices phone
   * @since 6
   * @SysCap ces
   * @param callback Indicate the callback funtion to receive the common event.
   * @return -
   * @testapi
   */
  isStickyCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the current common event is a sticky common event.
   *
   * @devices phone
   * @since 6
   * @SysCap ces
   * @param callback Indicate the callback funtion to receive the common event.
   * @return -
   * @testapi
   */
  isStickyCommonEvent(): Promise<boolean>;

  /**
   * get the CommonEventSubscribeInfo of this CommonEventSubscriber.
   *
   * @devices phone
   * @since 6
   * @SysCap ces
   * @param callback Indicate the callback funtion to receive the common event.
   * @return -
   * @testapi
   */
  getSubscribeInfo(callback: AsyncCallback<CommonEventSubscribeInfo>): void;

  /**
   * get the CommonEventSubscribeInfo of this CommonEventSubscriber.
   *
   * @devices phone
   * @since 6
   * @SysCap ces
   * @param callback Indicate the callback funtion to receive the common event.
   * @return -
   * @testapi
   */
  getSubscribeInfo(): Promise<CommonEventSubscribeInfo>;
}
