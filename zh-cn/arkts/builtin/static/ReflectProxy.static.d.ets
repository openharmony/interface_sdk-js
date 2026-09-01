'use static';
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
 * 提供反射与代理功能的命名空间。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
namespace reflect {

  /**
   * 用于处理代理对象上方法调用的接口。
   * 定义用于管理属性访问、赋值和方法调用的方法。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  interface InvocationHandler {  
    /**
     * 拦截代理对象上每个属性的getter操作。
     *
     * @param { Proxy } proxy - 被访问的代理对象。
     * @param { InstanceMethod } method - 被拦截的方法。
     * @returns { Any } 属性的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    get(proxy: Proxy, method: InstanceMethod): Any;

    /**
     * 拦截代理对象上方法的setter操作。
     *
     * @param { Proxy } proxy - 被修改的代理对象。
     * @param { InstanceMethod } method - 被拦截的方法。
     * @param { Any } value - 通过setter传入用于赋值的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    set(proxy: Proxy, method: InstanceMethod, value: Any): void;

    /**
     * 使用给定参数拦截代理对象上的方法调用。
     *
     * @param { Proxy } proxy - 调用该方法的代理对象。
     * @param { InstanceMethod } method - 被拦截的方法。
     * @param { FixedArray<Any> } args - 传入该方法的参数数组。
     * @returns { Any } 方法调用的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    invoke(proxy: Proxy, method: InstanceMethod, args: FixedArray<Any>): Any;
  }

  /**
   * 用于创建代理对象的基类，这些代理对象将方法调用和属性访问委托给
   *     `InvocationHandler`。提供用于在运行时动态生成代理类和
   *     实例化代理对象的静态方法。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 staticonly
   */
  class Proxy {  
    /**
     * 获取与该代理关联的调用处理器。
     *
     * @returns { InvocationHandler } 该代理使用的`InvocationHandler`。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getHandler(): InvocationHandler;

    /**
     * 创建一个实现指定接口并使用给定处理器的新代理实例。
     *
     * @param { RuntimeLinker } linker - 用于在运行时生成代理类的`RuntimeLinker`。
     * @param { FixedArray<Class> } interfaces - 表示待实现接口的`Class`对象数组。
     * @param { InvocationHandler } handler - 用于处理方法和属性操作的`InvocationHandler`。
     * @returns { Proxy } 作为`Proxy`的新代理实例。
     * @throws { Error } 当给定类上不存在预期的构造函数时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static create(linker: RuntimeLinker, interfaces: FixedArray<Class>, handler: InvocationHandler): Proxy;
  }

}
