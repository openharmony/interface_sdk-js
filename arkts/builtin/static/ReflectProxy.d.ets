/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit ArkTS
 */

/**
 * A namespace that provides reflection and proxy functionality.
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 staticonly
 */
namespace reflect {

  /**
   * Interface for handling method invocations on a proxy object.
   * Defines methods to manage property access, assignment, and method invocation.
   *
   * @syscap SystemCapability.Utils.Lang
   * @FaAndStageModel
   * @since 24 staticonly
   */
  interface InvocationHandler {  
    /**
     * Intercepts the getter operation for the each property on the proxy object.
     *
     * @param { Proxy } proxy - The proxy object being accessed.
     * @param { InstanceMethod } method - Intercepted method.
     * @returns { Any } The value of the attribute.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    get(proxy: Proxy, method: InstanceMethod): Any;

    /**
     * Intercepts the setter operation of a method on the proxy object.
     *
     * @param { Proxy } proxy - The proxy object being modified.
     * @param { InstanceMethod } method - Intercepted method.
     * @param { Any } value - The value that has been passed to assign through the setter.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    set(proxy: Proxy, method: InstanceMethod, value: Any): void;

    /**
     * Intercepts invocation of a method on the proxy object with the provided arguments.
     *
     * @param { Proxy } proxy - The proxy object on which the method is invoked.
     * @param { InstanceMethod } method - Intercepted method.
     * @param { FixedArray<Any> } args - An array of arguments that has been passed to the method.
     * @returns { Any } The result of the method call.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    invoke(proxy: Proxy, method: InstanceMethod, args: FixedArray<Any>): Any;
}

  /**
   * A base class for creating proxy objects that delegate method calls and property access
   *     to an `InvocationHandler`. Provides static methods for generating proxy classes and
   *     instantiating proxy objects dynamically at runtime.
   *
   * @syscap SystemCapability.Utils.Lang
   * @FaAndStageModel
   * @since 24 staticonly
   */
  class Proxy {  
    /**
     * Retrieves the invocation handler associated with this proxy.
     *
     * @returns { InvocationHandler } The `InvocationHandler` used by this proxy.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    getHandler(): InvocationHandler {
        return this.handler
    };

    /**
     * Creates a new proxy instance that implements the specified interfaces and uses the provided handler.
     *
     * @param { RuntimeLinker } linker - The `RuntimeLinker` used to generate the proxy class at runtime.
     * @param { FixedArray<Class> } interfaces - An array of `Class` objects representing the interfaces to implement.
     * @param { InvocationHandler } handler - The `InvocationHandler` to handle method and property operations.
     * @returns { Proxy } A new proxy instance as an `Proxy`.
     * @throws { Error } - - Expected constructor does not exists on given class
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    static create(linker: RuntimeLinker, interfaces: FixedArray<Class>, handler: InvocationHandler): Proxy;
}

}
