/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */
/**
 * Complex types test module for delete_systemapi_plugin.
 *
 * @since 20
 */
export namespace ComplexTypes {
  /**
   * Generic result type for async operations.
   *
   * @since 20
   * @systemapi
   */
  export interface AsyncResult<T> {
    code: number;
    data: T;
    message: string;
    timestamp: number;
  }

  /**
   * Configuration options for data processing.
   *
   * @since 20
   */
  export interface ProcessConfig {
    maxBufferSize: number;
    timeout: number;
    retryCount: number;
    enableCache: boolean;
    compression: CompressionType;
  }

  /**
   * Compression algorithm type.
   *
   * @enum { number }
   * @since 20
   */
  export enum CompressionType {
    NONE = 0,
    GZIP = 1,
    DEFLATE = 2,
    LZ4 = 3
  }

  /**
   * Event callback interface.
   *
   * @since 20
   * @systemapi
   */
  export interface EventCallback<T> {
    onSuccess: (data: T) => void;
    onFail: (error: Error) => void;
    onProgress?: (progress: number) => void;
  }

  /**
   * Data container with generic type support.
   *
   * @since 20
   */
  export class DataContainer<T> {
    private items: T[] = [];
    private metadata: Map<string, any> = new Map();

    /**
     * Adds an item to the container.
     *
     * @since 20
     * @systemapi
     */
    public add(item: T): void {
      this.items.push(item);
    }

    /**
     * Gets all items from the container.
     *
     * @since 20
     */
    public getAll(): T[] {
      return [...this.items];
    }

    /**
     * Clears all items from the container.
     *
     * @since 20
     */
    public clear(): void {
      this.items = [];
    }

    /**
     * Gets the size of the container.
     *
     * @since 20
     */
    public size(): number {
      return this.items.length;
    }
  }

  /**
   * Request parameters for network operations.
   *
   * @since 20
   */
  export interface NetworkRequest {
    url: string;
    method: HttpMethod;
    headers: Record<string, string>;
    body?: string;
    timeout?: number;
  }

  /**
   * HTTP methods.
   *
   * @enum { number }
   * @since 20
   */
  export enum HttpMethod {
    GET = 0,
    POST = 1,
    PUT = 2,
    DELETE = 3,
    PATCH = 4
  }

  /**
   * Response wrapper for network operations.
   *
   * @since 20
   * @systemapi
   */
  export interface NetworkResponse {
    statusCode: number;
    headers: Record<string, string>;
    body: string;
    contentLength: number;
  }

  /**
   * Stream data handler.
   *
   * @since 20
   */
  export class StreamHandler {
    private buffer: ArrayBuffer;
    private position: number = 0;

    /**
     * Creates a new stream handler.
     *
     * @param size - Buffer size
     * @since 20
     */
    constructor(size: number) {
      this.buffer = new ArrayBuffer(size);
    }

    /**
     * Reads data from stream.
     *
     * @param length - Number of bytes to read
     * @returns Data chunk
     * @since 20
     */
    public read(length: number): ArrayBuffer {
      const slice = this.buffer.slice(this.position, this.position + length);
      this.position += length;
      return slice;
    }

    /**
     * Writes data to stream.
     *
     * @param data - Data to write
     * @returns Number of bytes written
     * @since 20
     * @systemapi
     */
    public write(data: ArrayBuffer): number {
      const bytes = data.byteLength;
      this.position += bytes;
      return bytes;
    }
  }

  /**
   * Policy definition for access control.
   *
   * @since 20
   */
  export interface AccessPolicy {
    permission: string;
    resource: string;
    actions: Array<ActionType>;
    conditions?: PolicyCondition;
  }

  /**
   * Action types for policy.
   *
   * @enum { number }
   * @since 20
   */
  export enum ActionType {
    READ = 1,
    WRITE = 2,
    EXECUTE = 4,
    DELETE = 8
  }

  /**
   * Condition for policy evaluation.
   *
   * @since 20
   */
  export interface PolicyCondition {
    timeRange?: TimeRange;
    ipRange?: string[];
    deviceTypes?: Array<DeviceType>;
  }

  /**
   * Time range definition.
   *
   * @since 20
   */
  export interface TimeRange {
    start: number;
    end: number;
    timezone: string;
  }

  /**
   * Device type enumeration.
   *
   * @enum { number }
   * @since 20
   */
  export enum DeviceType {
    PHONE = 0,
    TABLET = 1,
    PC = 2,
    TV = 3,
    WATCH = 4
  }

  /**
   * Creates a new access policy.
   *
   * @param permission - Permission name
   * @param resource - Resource identifier
   * @returns New access policy
   * @since 20
   * @systemapi
   */
  export function createPolicy(permission: string, resource: string): AccessPolicy {
    return {
      permission,
      resource,
      actions: [ActionType.READ, ActionType.WRITE]
    };
  }

  /**
   * Validates an access policy.
   *
   * @param policy - Policy to validate
   * @returns Whether policy is valid
   * @since 20
   */
  export function validatePolicy(policy: AccessPolicy): boolean {
    return policy.permission.length > 0 && policy.resource.length > 0;
  }

  /**
   * Validates an access policy.
   *
   * @param policy - Policy to validate
   * @returns Whether policy is valid
   * @since 20
   */
  export interface Context extends BaseContext {
    /**
     * Get the local root dir of an app. If it is the first call, the dir
     * will be created.
     * If in the context of the ability, return the root dir of
     * the ability; if in the context of the application, return the
     * root dir of the application.
     *
     * @returns { Promise<string> } the root dir
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getOrCreateLocalDir(): Promise<string>;

    /**
     * Get the local root dir of an app. If it is the first call, the dir
     * will be created.
     * If in the context of the ability, return the root dir of
     * the ability; if in the context of the application, return the
     * root dir of the application.
     *
     * @param { AsyncCallback<string> } callback - Returns the local root directory of the application.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getOrCreateLocalDir(callback: AsyncCallback<string>): void;

    /**
     * Verify whether the specified permission is allowed for a particular
     * pid and uid running in the system.
     * Pid and uid are optional. If you do not pass in pid and uid,
     * it will check your own permission.
     *
     * @param { string } permission - The name of the specified permission.
     * @param { PermissionOptions } [options] - Permission Options.
     * @returns { Promise<number> } asynchronous callback with {@code 0} if the PID
     *     and UID have the permission; callback with {@code -1} otherwise.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    verifyPermission(permission: string, options?: PermissionOptions): Promise<number>;

    /**
     * Verify whether the specified permission is allowed for a particular
     * pid and uid running in the system.
     * Pid and uid are optional. If you do not pass in pid and uid,
     * it will check your own permission.
     *
     * @param { string } permission - The name of the specified permission
     * @param { PermissionOptions } options - Permission Options
     * @param { AsyncCallback<number> } callback - Return permission verification result, 0 has permission,
     *     -1 has no permission.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    verifyPermission(permission: string, options: PermissionOptions, callback: AsyncCallback<number>): void;

    /**
     * Verify whether the specified permission is allowed for a particular
     * pid and uid running in the system.
     * Pid and uid are optional. If you do not pass in pid and uid,
     * it will check your own permission.
     *
     * @param { string } permission - The name of the specified permission
     * @param { AsyncCallback<number> } callback - Return permission verification result, 0 has permission,
     *     -1 has no permission.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    verifyPermission(permission: string, callback: AsyncCallback<number>): void;

    /**
     * Requests certain permissions from the system.
     *
     * @param { Array<string> } permissions - Indicates the list of permissions to be requested.parameter cannot be null.
     * @param { number } requestCode - Indicates the request code to be passed to the PermissionRequestResult
     * @param { AsyncCallback<PermissionRequestResult> } resultCallback - Return authorization result information.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    requestPermissionsFromUser(
      permissions: Array<string>,
      requestCode: number,
      resultCallback: AsyncCallback<PermissionRequestResult>
    ): void;

    /**
     * Requests certain permissions from the system.
     *
     * @param { Array<string> } permissions - Indicates the list of permissions to be requested.Parameter cannot be null.
     * @param { number } requestCode - Indicates the request code to be passed to the PermissionRequestResult
     * @returns { Promise<PermissionRequestResult> } Indicates the request code to be passed to PermissionRequestResult.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    requestPermissionsFromUser(permissions: Array<string>, requestCode: number): Promise<PermissionRequestResult>;

    /**
     * Obtains information about the current application.
     *
     * @param { AsyncCallback<ApplicationInfo> } callback - Returns information about the current application.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getApplicationInfo(callback: AsyncCallback<ApplicationInfo>): void;

    /**
     * Obtains information about the current application.
     *
     * @returns { Promise<ApplicationInfo> } Information about the current application.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getApplicationInfo(): Promise<ApplicationInfo>;

    /**
     * Obtains the bundle name of the current ability.
     *
     * @param { AsyncCallback<string> } callback - Returns the Bundle name of the current capability.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getBundleName(callback: AsyncCallback<string>): void;

    /**
     * Obtains the bundle name of the current ability.
     *
     * @returns { Promise<string> } The Bundle name of the current capability.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getBundleName(): Promise<string>;

    /**
     * Obtains the current display orientation of this ability.
     *
     * @param { AsyncCallback<bundle.DisplayOrientation> } callback - Indicates the realistic direction of the screen.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getDisplayOrientation(callback: AsyncCallback<bundle.DisplayOrientation>): void;

    /**
     * Obtains the current display orientation of this ability.
     *
     * @returns { Promise<bundle.DisplayOrientation> } Indicates the screen display direction.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getDisplayOrientation(): Promise<bundle.DisplayOrientation>;

    /**
     * Obtains the absolute path to the application-specific cache directory
     *
     * @param { AsyncCallback<string> } callback - Returns the absolute path of the application's cache directory.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 6 dynamiconly
     * @deprecated since 7
     */
    getExternalCacheDir(callback: AsyncCallback<string>): void;

    /**
     * Obtains the absolute path to the application-specific cache directory
     *
     * @returns { Promise<string> } Return the cache directory of the application.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 6 dynamiconly
     * @deprecated since 7
     */
    getExternalCacheDir(): Promise<string>;

    /**
     * Sets the display orientation of the current ability.
     *
     * @param { bundle.DisplayOrientation } orientation - Indicates the new orientation for the current ability.
     * @param { AsyncCallback<void> } callback - Indicates the realistic direction of the screen.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    setDisplayOrientation(orientation: bundle.DisplayOrientation, callback: AsyncCallback<void>): void;

    /**
     * Sets the display orientation of the current ability.
     *
     * @param { bundle.DisplayOrientation } orientation - Indicates the new orientation for the current ability.
     * @returns { Promise<void> } the promise returned by the function.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    setDisplayOrientation(orientation: bundle.DisplayOrientation): Promise<void>;

    /**
     * Sets whether to show this ability on top of the lock screen whenever the lock screen is displayed, keeping the
     * ability in the ACTIVE state.
     * The interface can only take effect in API8 and below versions.
     *
     * @param { boolean } show - Specifies whether to show this ability on top of the lock screen. The value true means
     *     to show it on the lock screen, and the value false means not.
     * @param { AsyncCallback<void> } callback - Returns the callback result.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.window:window.WindowStage.setShowOnLockScreen
     */
    setShowOnLockScreen(show: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether to show this ability on top of the lock screen whenever the lock screen is displayed, keeping the
     * ability in the ACTIVE state.
     * The interface can only take effect in API8 and below versions.
     *
     * @param { boolean } show - Specifies whether to show this ability on top of the lock screen. The value true means to
     *     show it on the lock screen, and the value false means not.
     * @returns { Promise<void> } the promise returned by the function.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.window:window.WindowStage.setShowOnLockScreen
     */
    setShowOnLockScreen(show: boolean): Promise<void>;

    /**
     * Sets whether to wake up the screen when this ability is restored.
     *
     * @param { boolean } wakeUp - Specifies whether to wake up the screen. The value true means to wake it up,
     *     and the value false means not.
     * @param { AsyncCallback<void> } callback - Returns the callback result.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     * @deprecated since 12
     * @useinstead @ohos.window:window.setWakeUpScreen
     */
    setWakeUpScreen(wakeUp: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether to wake up the screen when this ability is restored.
     *
     * @param { boolean } wakeUp - Specifies whether to wake up the screen. The value true means to wake it up, and the
     *     value false means not.
     * @returns { Promise<void> } the promise returned by the function.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     * @deprecated since 12
     * @useinstead @ohos.window:window.setWakeUpScreen
     */
    setWakeUpScreen(wakeUp: boolean): Promise<void>;

    /**
     * Obtains information about the current process, including the process ID and name.
     *
     * @param { AsyncCallback<ProcessInfo> } callback - Return current process information.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getProcessInfo(callback: AsyncCallback<ProcessInfo>): void;

    /**
     * Obtains information about the current process, including the process ID and name.
     *
     * @returns { Promise<ProcessInfo> } Information about the current process.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getProcessInfo(): Promise<ProcessInfo>;

    /**
     * Obtains the ohos.bundle.ElementName object of the current ability.This method is available only to Page abilities.
     *
     * @param { AsyncCallback<ElementName> } callback - Returns the ohos.bundle.ElementName of the current capability.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getElementName(callback: AsyncCallback<ElementName>): void;

    /**
     * Obtains the ohos.bundle.ElementName object of the current ability.This method is available only to Page abilities.
     *
     * @returns { Promise<ElementName> } The ohos.bundle.ElementName object of the current capability.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getElementName(): Promise<ElementName>;

    /**
     * Obtains the name of the current process.
     *
     * @param { AsyncCallback<string> } callback - Return current process name.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getProcessName(callback: AsyncCallback<string>): void;

    /**
     * Obtains the name of the current process.
     *
     * @returns { Promise<string> } Returns the name of the current process.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getProcessName(): Promise<string>;

    /**
     * Obtains the bundle name of the ability that called the current ability.
     *
     * @param { AsyncCallback<string> } callback - Returns the Bundle name of the ability caller.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getCallingBundle(callback: AsyncCallback<string>): void;

    /**
     * Obtains the bundle name of the ability that called the current ability.
     *
     * @returns { Promise<string> } Returns the Bundle name of the ability caller.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getCallingBundle(): Promise<string>;

    /**
     * Obtains the file directory of this application on the internal storage.
     *
     * @param { AsyncCallback<string> } callback - Return the file directory of this application on internal storage.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 6 dynamiconly
     */
    getFilesDir(callback: AsyncCallback<string>): void;

    /**
     * Obtains the file directory of this application on the internal storage.
     *
     * @returns { Promise<string> } Return the file directory of this application on internal storage.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 6 dynamiconly
     */
    getFilesDir(): Promise<string>;

    /**
     * Obtains the cache directory of this application on the internal storage.
     *
     * @param { AsyncCallback<string> } callback - Returns the internal storage directory of the application.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 6 dynamiconly
     */
    getCacheDir(callback: AsyncCallback<string>): void;

    /**
     * Obtains the cache directory of this application on the internal storage.
     *
     * @returns { Promise<string> } Returns the internal storage directory of the application.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 6 dynamiconly
     */
    getCacheDir(): Promise<string>;

    /**
     * Obtains the distributed file path for storing ability or application data files.
     * If the distributed file path does not exist, the system will create a path and return the created path.
     *
     * @returns { Promise<string> } Returns the distributed file path of the Ability or application. If it is the first
     *     call, a directory will be created.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getOrCreateDistributedDir(): Promise<string>;

    /**
     * Obtains the distributed file path for storing ability or application data files.
     * If the distributed file path does not exist, the system will create a path and return the created path.
     *
     * @param { AsyncCallback<string> } callback - Returns the distributed file path of Ability or application.
     *     If the path does not exist,the system will create a path and return the created path.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getOrCreateDistributedDir(callback: AsyncCallback<string>): void;

    /**
     * Obtains the application type.
     *
     * @param { AsyncCallback<string> } callback - Returns the type of the current application.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getAppType(callback: AsyncCallback<string>): void;

    /**
     * Obtains the application type.
     *
     * @returns { Promise<string> } Returns the type of this app.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getAppType(): Promise<string>;

    /**
     * Obtains the ModuleInfo object for this application.
     *
     * @param { AsyncCallback<HapModuleInfo> } callback - Returns the ModuleInfo object of the application.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getHapModuleInfo(callback: AsyncCallback<HapModuleInfo>): void;

    /**
     * Obtains the ModuleInfo object for this application.
     *
     * @returns { Promise<HapModuleInfo> } Return to the ModuleInfo of the application and enjoy it.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getHapModuleInfo(): Promise<HapModuleInfo>;

    /**
     * Obtains the application version information.
     *
     * @param { AsyncCallback<AppVersionInfo> } callback - Return application version information.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getAppVersionInfo(callback: AsyncCallback<AppVersionInfo>): void;

    /**
     * Obtains the application version information.
     *
     * @returns { Promise<AppVersionInfo> } Return application version information.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getAppVersionInfo(): Promise<AppVersionInfo>;

    /**
     * Obtains the context of this application.
     *
     * @returns { Context } Return application context information.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getApplicationContext(): Context;

    /**
     * Checks the detailed information of this ability.
     *
     * @param { AsyncCallback<AbilityInfo> } callback - Return the detailed information of the current belonging Ability.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getAbilityInfo(callback: AsyncCallback<AbilityInfo>): void;

    /**
     * Checks the detailed information of this ability.
     *
     * @returns { Promise<AbilityInfo> } Return the detailed information of the current belonging Ability.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    getAbilityInfo(): Promise<AbilityInfo>;

    /**
     * Checks whether the configuration of this ability is changing.
     *
     * @param { AsyncCallback<boolean> } callback - True if the configuration of the capability is being changed,
     *     otherwise false.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    isUpdatingConfigurations(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether the configuration of this ability is changing.
     *
     * @returns { Promise<boolean> } true if the configuration of this ability is changing and false otherwise.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    isUpdatingConfigurations(): Promise<boolean>;

    /**
     * Inform the system of the time required for drawing this Page ability.
     *
     * @param { AsyncCallback<void> } callback - Represents the specified callback method.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    printDrawnCompleted(callback: AsyncCallback<void>): void;

    /**
     * Inform the system of the time required for drawing this Page ability.
     *
     * @returns { Promise<void> } The promise form returns the result.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 7 dynamiconly
     */
    printDrawnCompleted(): Promise<void>;
  }
}
