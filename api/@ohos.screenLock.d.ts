/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
import { AsyncCallback } from './basic';
import { Callback } from './basic';

/**
 * systemScreenLock
 * @syscap SystemCapability.MiscServices.ScreenLock
 * @since 7
 */
declare namespace screenLock {

  /**
   * Checks whether the screen is currently locked. Returns true if the screen is currently locked. returns false otherwise.
   * @returns { Promise<boolean> } the Promise<boolean> returned by the function.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.screenLock.isLocked
   */
  function isScreenLocked(callback: AsyncCallback<boolean>): void;
  function isScreenLocked(): Promise<boolean>;

  /**
   * Checks whether the screen is currently locked. Returns true if the screen is currently locked. returns false otherwise.
   * @returns { boolean } the boolean returned by the function.
   * @since 9
   */
  function isLocked(): boolean;

  /**
   * Checks whether the screen lock of the current device is secure. Returns true if the screen lock of the current device is secure. returns false otherwise.
   * @returns { Promise<boolean> } the Promise<boolean> returned by the function.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.screenLock.isSecure
   */
  function isSecureMode(callback: AsyncCallback<boolean>): void;
  function isSecureMode(): Promise<boolean>;
  
  /**
   * Checks whether the screen lock of the current device is secure. Returns true if the screen lock of the current device is secure. returns false otherwise.
   * @returns { boolean } the boolean returned by the function.
   * @since 9
   */
  function isSecure(): boolean;

  /**
   * Unlock the screen.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.screenLock.unlock
   */
  function unlockScreen(callback: AsyncCallback<void>): void;
  function unlockScreen():Promise<void>;
  
  /**
   * Unlock the screen. Returns true if the screen unlocked successfully. returns false otherwise.
   * @returns { Promise<boolean> } the Promise<boolean> returned by the function.
   * @throws {BusinessError} 401 - parameter error.
   * @throws {BusinessError} 13200002 - the screenlock management service is abnormal.
   * @since 9
   */
  function unlock(callback: AsyncCallback<boolean>): void;
  function unlock():Promise<boolean>;

  /**
   * Lock the screen. Returns true if the screen locked successfully. returns false otherwise.
   * @returns { Promise<boolean> } the Promise<boolean> returned by the function.
   * @throws {BusinessError} 401 - parameter error.
   * @throws {BusinessError} 202 - permission verification failed, application which is not a system application uses system API.
   * @throws {BusinessError} 13200002 - the screenlock management service is abnormal.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function lock(callback: AsyncCallback<boolean>): void;
  function lock():Promise<boolean>;

  type EventType = 'beginWakeUp' | 'endWakeUp' | 'beginScreenOn' | 'endScreenOn' | 'beginScreenOff' | 'endScreenOff' | 'unlockScreen' | 'lockScreen' | 'beginExitAnimation' | 'beginSleep' | 'endSleep' | 'changeUser' | 'screenlockEnabled' | 'serviceRestart'

  interface SystemEvent {
    eventType: EventType,
    params: string
  }

  /**
   * Register system event related to screen lock service. Returns true if register system event is success. returns false otherwise.
   * @param { Callback<SystemEvent> } callback - the callback function for indicating the system event related screen lock
   * @returns { boolean } the boolean returned by the function.
   * @throws {BusinessError} 401 - parameter error.
   * @throws {BusinessError} 202 - permission verification failed, application which is not a system application uses system API.
   * @throws {BusinessError} 13200002 - the screenlock management service is abnormal.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function onSystemEvent(callback: Callback<SystemEvent>): boolean;

  /**
   * The screen lock app sends the event to the screen lock service.
   * @param { String } event - event type.
   * @param { number } parameter - operation result of the event.
   * @throws {BusinessError} 401 - parameter error.
   * @throws {BusinessError} 202 - permission verification failed, application which is not a system application uses system API.
   * @throws {BusinessError} 13200002 - the screenlock management service is abnormal.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function sendScreenLockEvent(event: String, parameter: number, callback: AsyncCallback<boolean>): void;
  function sendScreenLockEvent(event: String, parameter: number): Promise<boolean>;
}

export default screenLock;