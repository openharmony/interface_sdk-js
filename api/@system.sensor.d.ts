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

export interface AccelerometerResponse {
  x: number;
  y: number;
  z: number;
}
export interface subscribeAccelerometerOptions {
  interval: string;
  success: (data: AccelerometerResponse) => void;
  fail?: (data: string, code: number) => void;
}
export interface CompassResponse {
  direction: number;
}
export interface SubscribeCompassOptions {
  success: (data: CompassResponse) => void;
  fail?: (data: string, code: number) => void;
}
export interface ProximityResponse {
  distance: number;
}
export interface SubscribeProximityOptions {
  success: (data: ProximityResponse) => void;
  fail?: (data: string, code: number) => void;
}
export interface LightResponse {
  intensity: number;
}
export interface SubscribeLightOptions {
  success: (data: LightResponse) => void;
  fail?: (data: string, code: number) => void;
}
export interface StepCounterResponse {
  steps: number;
}
export interface SubscribeStepCounterOptions {
  success: (data: StepCounterResponse) => void;
  fail?: (data: string, code: number) => void;
}
export interface BarometerResponse {
  pressure: number;
}
export interface SubscribeBarometerOptions {
  success: (data: BarometerResponse) => void;
  fail?: (data: string, code: number) => void;
}
export interface HeartRateResponse {
  heartRate: number;
}
export interface SubscribeHeartRateOptions {
  success: (data: HeartRateResponse) => void;
  fail?: (data: string, code: number) => void;
}
export interface OnBodyStateResponse {
  value: boolean;
}
export interface SubscribeOnBodyStateOptions {
  success: (data: OnBodyStateResponse) => void;
  fail?: (data: string, code: number) => void;
}
export interface GetOnBodyStateOptions {
  success: (data: OnBodyStateResponse) => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export default class Sensor {
  static subscribeAccelerometer(options: subscribeAccelerometerOptions): void;
  static unsubscribeAccelerometer(): void;
  static subscribeCompass(options: SubscribeCompassOptions): void;
  static unsubscribeCompass(): void;
  static subscribeProximity(options: SubscribeProximityOptions): void;
  static unsubscribeProximity(): void;
  static subscribeLight(options: SubscribeLightOptions): void;
  static unsubscribeLight(): void;
  static subscribeStepCounter(options: SubscribeStepCounterOptions): void;
  static unsubscribeStepCounter(): void;
  static subscribeBarometer(options: SubscribeBarometerOptions): void;
  static unsubscribeBarometer(): void;
  static subscribeHeartRate(options: SubscribeHeartRateOptions): void;
  static unsubscribeHeartRate(): void;
  static subscribeOnBodyState(options: SubscribeOnBodyStateOptions): void;
  static unsubscribeOnBodyState(): void;
  static getOnBodyState(options: GetOnBodyStateOptions): void;
}
