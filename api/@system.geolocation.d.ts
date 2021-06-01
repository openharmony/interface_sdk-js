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

export interface GeolocationResponse {
  longitude: number;
  latitude: number;
  altitude: number;
  accuracy: number;
  time: number;
}
export interface GetLocationOption {
  timeout?: number;
  coordType?: string;
  success?: (data: GeolocationResponse) => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface GetLocationTypeResponse {
  types: Array<string>;
}
export interface GetLocationTypeOption {
  success?: (data: GetLocationTypeResponse) => void;
  fail?: (data: string, code: number) => void;
  complete?: () => void;
}
export interface SubscribeLocationOption {
  coordType?: string;
  success: (data: GeolocationResponse) => void;
  fail?: (data: string, code: number) => void;
}
export default class Geolocation {
  static getLocation(options?: GetLocationOption): void;
  static getLocationType(options?: GetLocationTypeOption): void;
  static subscribe(options: SubscribeLocationOption): void;
  static unsubscribe(): void;
  static getSupportedCoordTypes(): Array<string>;
}
