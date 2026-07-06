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

/**
 * @file
 * @kit ArkTS
 */

/**
 * 任务池（taskpool）的作用是为应用程序提供多线程运行环境，降低资源消耗并提升系统性能，且您无需关心线程的生命周期。您可以使用任务池API
 * 创建后台任务（Task），并进行如执行任务或取消任务等操作。理论上，任务池API允许创建的任务数量不受限制，但由于内存限制，不建议这样做。此外，
 * 不建议在任务中执行阻塞操作，尤其是无限期阻塞操作，因为长时间的阻塞操作会占用工作线程，可能阻塞其他任务的调度，影响应用性能。
 * 创建同一优先级的任务时，可以自行决定其执行顺序。任务的实际执行顺序与调用任务池API提供的任务执行接口的顺序一致。任务的默认优先级为MEDIUM。
 * 当同一时间待执行的任务数量大于任务池工作线程数量，任务池会根据负载均衡机制进行扩容，增加工作线程数量，减少整体等待时长。同样，当执行的任务数量减少，
 * 工作线程数量大于执行任务数量，部分工作线程处于空闲状态，任务池会根据负载均衡机制进行缩容，减少工作线程数量。
 * 如需了解任务池API返回错误码的详细信息，请参阅
 * [语言基础类库错误码](docroot://reference/apis-arkts/errorcode-utils.md)。
 * 如需了解使用TaskPool时的相关注意点，请参阅
 * [TaskPool注意事项](docroot://arkts-utils/taskpool-introduction.md#taskpool注意事项)。
 * 文档中涉及以下任务概念：
 *
 * - 任务组任务：对应为[TaskGroup]{@link taskpool.TaskGroup}任务。
 * - 串行队列任务：对应为[SequenceRunner]{@link taskpool.SequenceRunner}任务。
 * - 异步队列任务：对应为[AsyncRunner]{@link taskpool.AsyncRunner}任务。
 * - 周期任务：由
 * [executePeriodically]{@link taskpool.executePeriodically(period: number, task: Task, priority?: Priority)}执行的任务。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamiconly
 */
declare namespace taskpool {
  /**
   * 表示所创建任务（Task）执行时的优先级。工作线程优先级跟随任务优先级更新，对应关系请参考
   * [QoS等级定义](docroot://napi/qos-guidelines.md#qos-level)。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  enum Priority {
    /**
     * 任务为高优先级。
     *
     * 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    HIGH = 0,

    /**
     * 任务为中优先级。
     *
     * 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    MEDIUM = 1,

    /**
     * 任务为低优先级。
     *
     * 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    LOW = 2,
    /**
     * 任务为后台任务。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    IDLE = 3
  }

  /**
   * 注册的回调函数类型。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  type CallbackFunction = () => void;

  /**
   * 注册带有错误码的回调函数类型。
   *
   * @param { Error } e - 错误信息。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  type CallbackFunctionWithError = (e: Error) => void;

  /**
   * 表示任务。任务可以多次执行，也可以放入任务组、串行队列或异步队列执行，还支持添加依赖关系。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  class Task {
    /**
     * Task的构造函数，用于创建一个**Task**实例。
     *
     * @param { Function } func - 执行的逻辑需要传入函数，该函数必须使用
     *     [@Concurrent装饰器](docroot://arkts-utils/taskpool-introduction.md#concurrent装饰器)装饰。支持的函数返回值类型请参考
     *     [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。
     * @param { Object[] } args - 任务执行传入函数的入参，支持的参数类型请参考
     *     [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。默认值为**undefined**。
     * @throws { BusinessError } 10200014 - The function is not marked as concurrent.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    constructor(func: Function, ...args: Object[]);

    /**
     * Task的构造函数用于创建一个**Task**实例，并可指定任务名称。
     *
     * @param { string } name - 任务名称。
     * @param { Function } func - 执行的逻辑需要传入函数，该函数必须使用
     *     [@Concurrent装饰器](docroot://arkts-utils/taskpool-introduction.md#concurrent装饰器)装饰。支持的函数返回值类型请参考
     *     [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。
     * @param { Object[] } args - 任务执行传入函数的入参，支持的类型请参考
     *     [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。默认值为**undefined**。
     * @throws { BusinessError } 10200014 - The function is not marked as concurrent.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    constructor(name: string, func: Function, ...args: Object[]);

    /**
     * 检查当前正在运行的任务是否已取消。使用此方法前，需要先创建一个**Task**对象。
     *
     * @returns { boolean } 如果当前正在运行的任务被取消返回**true**，否则返回**false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    static isCanceled(): boolean;

    /**
     * 任务执行过程中向宿主线程发送消息并触发已注册的回调函数。使用此方法前需构造**Task**对象。
     *
     * > **说明**
     * >
     * > - 该接口应在taskpool的线程中调用。
     * >
     * > - 避免在回调函数中调用该方法，否则可能导致消息无法传递到宿主线程。
     * >
     * > - 避免在异步函数中调用该方法，否则可能导致消息无法传递到宿主线程。如果在异步函数中使用，
     * > 则需要使用**await**来确保该异步函数在任务中同步执行完成。
     * >
     * > - 调用该接口时，请确保处理数据的回调函数已在宿主线程注册。
     *
     * @param { Object[] } args - 作为已注册回调函数入参的数据，支持的参数类型请参考
     *     [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。默认值为**undefined**。
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @throws { BusinessError } 10200022 - The function is not called in the TaskPool thread.
     * @throws { BusinessError } 10200023 - The function is not called in the concurrent function.
     * @throws { BusinessError } 10200024 - The callback is not registered on the host side.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    static sendData(...args: Object[]): void;

    /**
     * 设置任务的传输列表。使用该方法前需要先构造**Task**。不调用该接口，则传给任务的数据中的ArrayBuffer默认transfer转移。
     *
     * > **说明**
     * >
     * > 此接口可以设置任务池中ArrayBuffer的transfer列表，transfer列表中的ArrayBuffer对象在传输时不会复制buffer内容到工作线程，
     * > 而是转移buffer控制权至工作线程，传输后当前的ArrayBuffer失效。若ArrayBuffer为空，则不会transfer转移。
     *
     * @param { ArrayBuffer[] } [transfer] - 可传输对象是ArrayBuffer的实例对象，默认为空数组。
     * @throws { BusinessError } 10200029 - An ArrayBuffer cannot be set as both a transfer list and a clone list.
     *     [since 11]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    setTransferList(transfer?: ArrayBuffer[]): void;

    /**
     * 设置任务的拷贝列表。在使用该方法前，需先构造**Task**对象。
     *
     * > **说明**
     * >
     * > 该接口需搭配
     * > [@Sendable装饰器](docroot://arkts-utils/arkts-sendable.md#sendable装饰器)使用，否则会抛异常。建议开发者使用该装饰器以避免异常。
     *
     * @param { Object[] | ArrayBuffer[] } cloneList - - 传入数组的类型必须为
     *     [Sendable支持的数据类型](docroot://arkts-utils/arkts-sendable.md#sendable支持的数据类型)或ArrayBuffer。<br>- 所有传入
     *     **cloneList**的[Sendable class](docroot://arkts-utils/arkts-sendable.md#sendable-class)实例或ArrayBuffer类型对象，
     *     在线程间传输的行为都会变成拷贝传递，即修改传输后的对象不会对原有对象产生任何影响。
     * @throws { BusinessError } 10200029 - An ArrayBuffer cannot be set as both a transfer list and a clone list.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    setCloneList(cloneList: Object[] | ArrayBuffer[]): void;

    /**
     * 为任务注册回调函数，接收并处理任务池工作线程的数据。使用此方法前，需构造Task实例。
     * 说明：
     * 不支持为同一任务定义多种回调函数。如果多次赋值，只有最后一次赋值的回调函数会生效。
     *
     * @param { Function } [callback] - 处理数据的回调函数，发送到宿主线程的数据将会作为入参传入该回调函数。不传参可以取消注册的回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    onReceiveData(callback?: Function): void;

    /**
     * 为当前任务添加对其他任务的依赖。使用该方法前需先构造**Task**实例。该任务和被依赖的任务不能是任务组任务、串行队列任务、
     * 异步队列任务、已执行任务或周期任务。存在依赖关系的任务（依赖其他任务的任务或被依赖的任务）执行后不可再次执行。
     *
     * @param { Task[] } tasks - 被依赖的任务数组。默认值为**undefined**。
     * @throws { BusinessError } 10200026 - There is a circular dependency.
     * @throws { BusinessError } 10200052 - The periodic task cannot have a dependency. [since 12]
     * @throws { BusinessError } 10200056 - The task has been executed by the AsyncRunner. [since 18]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    addDependency(...tasks: Task[]): void;

    /**
     * 删除当前任务对其他任务的依赖。在使用该方法之前，需要先构造**Task**对象。
     *
     * @param { Task[] } tasks - 被依赖的任务数组。默认值为**undefined**。
     * @throws { BusinessError } 10200027 - The dependency does not exist.
     * @throws { BusinessError } 10200052 - The periodic task cannot have a dependency. [since 12]
     * @throws { BusinessError } 10200056 - The task has been executed by the AsyncRunner. [since 18]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    removeDependency(...tasks: Task[]): void;

    /**
     * 注册回调函数，任务入队时将调用该函数。
     * 该注册需在任务执行前完成，否则会抛出异常。
     *
     * @param { CallbackFunction } [callback] - 需注册的回调函数。
     * @throws { BusinessError } 10200034 - The executed task does not support the registration of listeners.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    onEnqueued(callback: CallbackFunction): void;

    /**
     * 注册回调函数，任务执行前将调用该函数。
     * 该注册需在任务执行前完成，否则会抛出异常。
     *
     * @param { CallbackFunction } [callback] - 需注册的回调函数。
     * @throws { BusinessError } 10200034 - The executed task does not support the registration of listeners.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    onStartExecution(callback: CallbackFunction): void;

    /**
     * 注册一个回调函数，并在任务执行失败时调用它（周期任务不支持）。
     * 该注册需在任务执行前完成，否则会抛出异常。
     *
     * @param { CallbackFunctionWithError } [callback] - 需注册的回调函数。
     * @throws { BusinessError } 10200034 - The executed task does not support the registration of listeners.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    onExecutionFailed(callback: CallbackFunctionWithError): void;

    /**
     * 注册一个回调函数，并在任务执行成功时调用它。
     * 该注册需在任务执行前完成，否则会抛出异常。
     *
     * @param { CallbackFunction } [callback] - 需注册的回调函数。
     * @throws { BusinessError } 10200034 - The executed task does not support the registration of listeners.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    onExecutionSucceeded(callback: CallbackFunction): void;

    /**
     * 检查任务是否已完成。
     *
     * @returns { boolean } 检查结果。任务执行完成时返回**true**，任务未执行完成时返回**false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    isDone(): boolean;

    /**
     * 创建任务时需要传入的函数，支持的函数返回值类型请参考[序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。<br>
     * 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    function: Function;

    /**
     * 创建任务传入函数所需的参数，支持的参数类型请参考[序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。<br>
     * 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    arguments?: Object[];

    /**
     * 创建任务时指定的任务名称。不建议修改此值。<br>
     * 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    name: string;

    /**
     * 任务ID。任务的标识符，系统默认提供全局唯一值，不建议修改此值。<br>
     * 从API version 18开始，该接口支持在原子化服务中使用。
     *
     * @default 0
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    taskId: number;

    /**
     * 执行任务总耗时。单位为ms。不建议修改此值。<br>
     * 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default 0
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    totalDuration: number;

    /**
     * 执行任务异步IO耗时。单位为ms。不建议修改此值。<br>
     * 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default 0
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    ioDuration: number;

    /**
     * 执行任务CPU耗时。单位为ms。不建议修改此值。<br>
     * 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default 0
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    cpuDuration: number;
  }

  /**
   * 表示任务组，一次执行一组任务，适用于执行一组有关联的任务。如果所有任务正常执行，异步执行完毕后返回所有任务结果的数组，
   * 数组中元素的顺序与调用[addTask]{@link taskpool.TaskGroup#addTask(task: Task)}添加任务的顺序相同。如果任意任务失败，
   * 则会抛出对应异常。如果任务组中存在多个任务失败的情况，则会抛出第一个失败任务的异常。任务组可以多次执行，但执行后不能新增任务。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   */
  class TaskGroup {
    /**
     * TaskGroup的构造函数，用于创建一个**TaskGroup**实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    constructor();

    /**
     * TaskGroup的构造函数，用于创建一个**TaskGroup**实例，并可指定任务组名称。
     *
     * @param { string } name - 任务组名称。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    constructor(name: string);

    /**
     * 将待执行的函数添加到任务组中。使用该方法前需要先构造**TaskGroup**实例。
     *
     * @param { Function } func - 需要传入使用
     *     [@Concurrent装饰器](docroot://arkts-utils/taskpool-introduction.md#concurrent装饰器)装饰的函数。支持的返回值类型请参考
     *     [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。
     * @param { Object[] } args - 任务执行函数的入参，支持的参数类型请参考
     *     [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。默认值为**undefined**。
     * @throws { BusinessError } 10200014 - The function is not marked as concurrent.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    addTask(func: Function, ...args: Object[]): void;

    /**
     * 将创建好的任务添加到任务组中。使用此方法前需要先构造**TaskGroup**实例。任务组不能添加其他任务组中的任务、串行队列任务、
     * 异步队列任务、有依赖关系的任务、长时任务、周期任务和已执行的任务。
     *
     * @param { Task } task - 需要添加到任务组中的任务。
     * @throws { BusinessError } 10200014 - The function is not marked as concurrent.
     * @throws { BusinessError } 10200051 - The periodic task cannot be executed again. [since 12]
     * @throws { BusinessError } 10200057 - The task cannot be executed by two APIs. [since 18]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    addTask(task: Task): void;

    /**
     * 创建任务组时指定的任务组名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    name: string;
  }

  /**
   * 表示串行队列的任务，用于执行一组需要串行执行的任务。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamiconly
   */
  class SequenceRunner {
    /**
     * SequenceRunner的构造函数，用于创建一个**SequenceRunner**实例。
     *
     * @param { Priority } priority - 指定任务的优先级，默认值为**taskpool.Priority.MEDIUM**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    constructor(priority?: Priority);

    /**
     * SequenceRunner的构造函数，用于创建一个**SequenceRunner**实例。该实例表示一个全局串行队列。如果传入的名字与已有名字相同，
     * 将返回同一个串行队列。
     *
     * > **说明**
     * >
     * > - 底层通过单例模式保证了：创建同名串行队列时，获取到同一个实例。
     * >
     * > - 无法修改串行队列的优先级。
     *
     * @param { string } name - 串行队列的名字。
     * @param { Priority } priority - 指定任务的优先级，默认值为**taskpool.Priority.MEDIUM**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    constructor(name: string, priority?: Priority);

    /**
     * 执行串行任务。使用该方法前需先构造**SequenceRunner**实例。串行队列不能执行任务组任务、其他串行队列任务、异步队列任务、
     * 有依赖关系的任务和已执行的任务。使用Promise异步回调。
     *
     * > **说明**
     * >
     * > - 不支持加入存在依赖的任务。
     * >
     * > - 前面的任务执行失败或取消不会影响后续任务的执行。
     *
     * @param { Task } task - 需要添加到串行任务队列中的任务。
     * @returns { Promise<Object> } Promise对象，返回任务执行的结果。
     * @throws { BusinessError } 10200003 - Worker initialization failed. [since 11 - 17]
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @throws { BusinessError } 10200025 - dependent task not allowed.
     * @throws { BusinessError } 10200051 - The periodic task cannot be executed again. [since 12]
     * @throws { BusinessError } 10200057 - The task cannot be executed by two APIs. [since 18]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    execute(task: Task): Promise<Object>;
  }

  /**
   * 表示长时任务。**LongTask**继承自
   * [Task]{@link taskpool.execute(func: Function, ...args: Object[])}。
   * 长时任务不设置执行时间上限，长时间运行不会触发超时异常，但不支持将同一任务多次执行或者将该任务加入任务组（TaskGroup）。
   * 执行长时任务的线程会持续存在，直到任务完成并调用[terminateTask]{@link taskpool.terminateTask}后，该线程在空闲时被回收。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  class LongTask extends Task {  }

  /**
   * 表示泛型任务。**GenericsTask**继承自
   * [Task]{@link taskpool.execute(func: Function, ...args: Object[])}。
   * 相比创建Task，创建GenericsTask可以在编译阶段校验并发函数的传参和返回值类型。其余行为与Task相同。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamiconly
   */
  class GenericsTask<A extends Array<Object>, R> extends Task {
    /**
     * GenericsTask的构造函数，用于创建一个**GenericsTask**对象。
     *
     * @param { (...args: A) => R | Promise<R> } func - 执行的逻辑需要传入函数，该函数必须使用
     *     [@Concurrent装饰器](docroot://arkts-utils/taskpool-introduction.md#concurrent装饰器)装饰。支持的函数返回值类型请参考
     *     [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。
     * @param { A } args - 任务执行传入函数的入参，支持的参数类型请参考
     *     [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。默认值为**undefined**。
     * @throws { BusinessError } 10200014 - The function is not marked as concurrent.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 13 dynamiconly
     */
    constructor(func: (...args: A) => R | Promise<R>, ...args: A);

    /**
     * GenericsTask的构造函数，用于创建一个**GenericsTask**实例，并可指定任务名称。
     *
     * @param { string } name - 泛型任务名称。
     * @param { (...args: A) => R | Promise<R> } func - 执行的逻辑需要传入函数，该函数必须使用
     *     [@Concurrent装饰器](docroot://arkts-utils/taskpool-introduction.md#concurrent装饰器)装饰。支持的函数返回值类型请参考
     *     [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。
     * @param { A } args - 任务执行传入函数的入参，支持的参数类型请参考
     *     [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。默认值为**undefined**。
     * @throws { BusinessError } 10200014 - The function is not marked as concurrent.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 18]
     * @atomicservice
     * @since 13 dynamiconly
     */
    constructor(name: string, func: (...args: A) => R | Promise<R>, ...args: A);
  }

  /**
   * 表示任务（Task）状态的枚举。当任务创建成功后，调用**execute()**，任务进入taskpool等待队列，状态设置为**WAITING**；
   * 任务从等待队列出来进入taskpool工作线程中，任务状态更新为**RUNNING**；当任务执行完成，返回结果后任务状态重置为**WAITING**；
   * 当主动cancel任务时，将任务状态更新为**CANCELED**。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   */
  enum State {
    /**
     * 任务正在等待。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    WAITING = 1,

    /**
     * 任务正在执行。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    RUNNING = 2,

    /**
     * 任务已被取消。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    CANCELED = 3
  }

  /**
   * 任务的内部信息。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   */
  class TaskInfo {
    /**
     * 任务ID。任务的标识符，系统默认提供全局唯一值，不建议修改此值。<br>
     * 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default 0
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    taskId: number;

    /**
     * 任务的状态。不建议修改此值。<br>
     * 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default State::WAITING
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    state: State;

    /**
     * 任务执行至当前所用的时间，默认为0，单位为ms。当返回为0时，表示任务未执行；返回为空时，表示没有任务执行。不建议修改此值。<br>
     * 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    duration?: number;

    /**
     * 任务的名字，不建议修改此值。<br>
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    name: string;
  }

  /**
   * 工作线程的内部信息。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   */
  class ThreadInfo {
    /**
     * 工作线程的标识符。如果返回为空，表示当前没有任务执行。不建议修改此值。
     *
     * @default 0
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    tid: number;

    /**
     * 在当前线程上运行的任务ID列表。如果返回为空，表示当前没有任务执行。不建议修改此值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    taskIds?: number[];

    /**
     * 当前线程的优先级。如果返回为空，表示当前没有任务执行。不建议修改此值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    priority?: Priority;
  }

  /**
   * 任务池的内部信息。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   */
  class TaskPoolInfo {
    /**
     * 工作线程的内部信息。不建议修改此值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    threadInfos: ThreadInfo[];

    /**
     * 任务的内部信息。不建议修改此值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    taskInfos: TaskInfo[];
  }

  /**
   * 将待执行的函数放入taskpool的内部任务队列，函数不会立即执行，而是等待分发到工作线程执行。在当前执行模式下，
   * 不支持取消任务。使用Promise异步回调。
   *
   * @param { Function } func - 执行的逻辑需要传入函数，该函数必须使用
   *     [@Concurrent装饰器](docroot://arkts-utils/taskpool-introduction.md#concurrent装饰器)装饰。支持的函数返回值类型请参考
   *     [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。
   * @param { Object[] } args - 任务执行传入函数的入参，支持的参数类型请参考
   *     [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。默认值为**undefined**。
   * @returns { Promise<unknown> } [since 9 - 11]
   * @returns { Promise<Object> } Promise对象，返回任务函数的执行结果。 [since 11]
   * @throws { BusinessError } 10200003 - Worker initialization failed. [since 9 - 11]
   * @throws { BusinessError } 10200006 - An exception occurred during serialization.
   * @throws { BusinessError } 10200014 - The function is not marked as concurrent.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  function execute(func: Function, ...args: Object[]): Promise<Object>;

  /**
   * 校验并发函数的参数类型和返回值类型后，将函数添加到taskpool的任务队列。使用Promise异步回调。
   *
   * @param { (...args: A) => R | Promise<R> } func - 执行的逻辑需要传入函数，该函数必须使用
   *     [@Concurrent装饰器](docroot://arkts-utils/taskpool-introduction.md#concurrent装饰器)装饰。支持的函数返回值类型请参考
   *     [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。
   * @param { A } args - 任务执行传入函数的入参，支持的参数类型请参考
   *     [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。默认值为**undefined**。
   * @returns { Promise<R> } Promise对象，返回任务函数的执行结果。
   * @throws { BusinessError } 10200006 - An exception occurred during serialization.
   * @throws { BusinessError } 10200014 - The function is not marked as concurrent.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamiconly
   */
  function execute<A extends Array<Object>, R>(func: (...args: A) => R | Promise<R>, ...args: A): Promise<R>;

  /**
   * 将创建好的任务添加到taskpool的内部任务队列中，任务不会立即执行，而是等待分发到工作线程执行。当前模式支持设置任务优先级和通过cancel取消任务。
   * 任务不能是任务组任务、串行队列任务或异步队列任务。对于非长时任务，可以多次调用执行；对于长时任务，仅支持执行一次。使用Promise异步回调。
   *
   * @param { Task } task - 需要在任务池中执行的任务。
   * @param { Priority } [priority] - 该参数表示等待执行的任务的优先级，默认值为
   *     **taskpool.Priority.MEDIUM**。
   * @returns { Promise<unknown> } [since 9 - 17]
   * @returns { Promise<Object> } Promise对象，返回任务函数的执行结果。 [since 11]
   * @throws { BusinessError } 10200003 - Worker initialization failed. [since 9 - 17]
   * @throws { BusinessError } 10200006 - An exception occurred during serialization.
   * @throws { BusinessError } 10200014 - The function is not marked as concurrent.
   * @throws { BusinessError } 10200051 - The periodic task cannot be executed again. [since 12]
   * @throws { BusinessError } 10200057 - The task cannot be executed by two APIs. [since 18]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  function execute(task: Task, priority?: Priority): Promise<Object>;

  /**
   * 将创建好的泛型任务放入taskpool的内部任务队列，校验任务的参数类型和返回值类型。使用Promise异步回调。
   * execute任务的校验是结合**new GenericsTask**一起用的，参数、返回值类型需与**new GenericsTask**中的类型保持一致。
   *
   * @param { GenericsTask<A, R> } task - 需要在任务池中执行的泛型任务。
   * @param { Priority } [priority] - 等待执行的任务的优先级，默认值为
   *     **taskpool.Priority.MEDIUM**。
   * @returns { Promise<R> } Promise对象，返回任务函数的执行结果。
   * @throws { BusinessError } 10200006 - An exception occurred during serialization.
   * @throws { BusinessError } 10200014 - The function is not marked as concurrent.
   * @throws { BusinessError } 10200051 - The periodic task cannot be executed again.
   * @throws { BusinessError } 10200057 - The task cannot be executed by two APIs. [since 18]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamiconly
   */
  function execute<A extends Array<Object>, R>(task: GenericsTask<A, R>, priority?: Priority): Promise<R>;

  /**
   * 将创建好的任务组放入taskpool内部任务队列，任务组中的任务不会立即执行，而是等待分发到工作线程执行。任务组中任务全部执行完成后，
   * 结果数组统一返回。此模式适用于执行关联任务。使用Promise异步回调。
   *
   * @param { TaskGroup } group - 需要在任务池中执行的任务组。
   * @param { Priority } [priority] - 等待执行的任务组的优先级，该参数默认值为**taskpool.Priority.MEDIUM**。
   * @returns { Promise<Object[]> } Promise对象数组，返回任务函数的执行结果。
   * @throws { BusinessError } 10200006 - An exception occurred during serialization.
   * @throws { BusinessError } 10200059 - TaskGroup cannot be re-executed. [since 24]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   */
  function execute(group: TaskGroup, priority?: Priority): Promise<Object[]>;

  /**
   * 延时执行任务。当前执行模式可以设置任务优先级，并且可以尝试调用**cancel()**取消执行。该任务不能是任务组任务、串行队列任务、
   * 异步队列任务或周期任务。对于长时任务，仅支持执行一次；对于非长时任务，可以多次调用。使用Promise异步回调。
   *
   * @param { number } delayTime - 延时时间，单位为ms。delayTime值必须要大于等于0。
   *     该值应为整数。
   *     <br>单位：毫秒。
   * @param { Task } task - 需要延时执行的任务。
   * @param { Priority } [priority] - 延时执行的任务的优先级，默认值为**taskpool.Priority.MEDIUM**。
   * @returns { Promise<Object> } Promise对象，返回任务函数的执行结果。
   * @throws { BusinessError } 10200028 - The delayTime is less than zero.
   * @throws { BusinessError } 10200006 - An exception occurred during serialization. [since 12]
   * @throws { BusinessError } 10200014 - The function is not marked as concurrent. [since 12]
   * @throws { BusinessError } 10200051 - The periodic task cannot be executed again. [since 12]
   * @throws { BusinessError } 10200057 - The task cannot be executed by two APIs. [since 18]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamiconly
   */
  function executeDelayed(delayTime: number, task: Task, priority?: Priority): Promise<Object>;

  /**
   * 延时执行泛型任务，不校验任务的参数类型和返回值类型。使用Promise异步回调。
   * executeDelayed任务的校验是结合**new GenericsTask**一起用的，参数、返回值类型需与**new GenericsTask**中的类型保持一致。
   *
   * @param { number } delayTime - 延时时间，单位为ms。delayTime值必须要大于等于0。
   *     该值应为整数。
   *     <br>单位：毫秒。
   * @param { GenericsTask<A, R> } task - 需要延时执行的泛型任务。
   * @param { Priority } [priority] - 延时执行的任务的优先级，默认值为**taskpool.Priority.MEDIUM**。
   * @returns { Promise<R> } Promise对象，返回任务函数的执行结果。
   * @throws { BusinessError } 10200028 - The delayTime is less than zero.
   * @throws { BusinessError } 10200051 - The periodic task cannot be executed again.
   * @throws { BusinessError } 10200057 - The task cannot be executed by two APIs. [since 18]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamiconly
   */
  function executeDelayed<A extends Array<Object>, R>(delayTime: number, task: GenericsTask<A, R>, priority?: Priority): Promise<R>;

  /**
   * 周期任务每隔period时长执行一次。当前执行模式支持设置任务优先级，并可以通过调用**cancel()**取消执行。周期任务不能是任务组任务、
   * 串行队列任务或异步队列任务，不能再次调用执行接口，且执行的任务不能拥有依赖关系。
   *
   * @param { number } period - 周期时长，单位为ms。period值必须要大于等于0。
   *     该值应为整数。
   *     <br>单位：毫秒。
   * @param { Task } task - 需要周期执行的任务。
   * @param { Priority } [priority] - 周期执行的任务的优先级，该参数默认值为**taskpool.Priority.MEDIUM**。
   * @throws { BusinessError } 10200006 - An exception occurred during serialization.
   * @throws { BusinessError } 10200014 - The function is not marked as concurrent.
   * @throws { BusinessError } 10200028 - The period is less than zero.
   * @throws { BusinessError } 10200050 - The concurrent task has been executed and cannot be executed periodically.
   * @throws { BusinessError } 10200057 - The task cannot be executed by two APIs. [since 18]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function executePeriodically(period: number, task: Task, priority?: Priority): void;

  /**
   * 周期执行泛型任务，不校验任务的参数类型和返回值类型。
   * executePeriodically任务的校验是结合**new GenericsTask**一起用的，参数、返回值类型需与**new GenericsTask**中的类型保持一致。
   *
   * @param { number } period - 周期时长，单位为ms。period值必须要大于等于0。
   *     该值应为整数。
   *     <br>单位：毫秒。
   * @param { GenericsTask<A, R> } task - 需要周期执行的泛型任务。
   * @param { Priority } [priority] - 周期执行的任务的优先级，该参数默认值为**taskpool.Priority.MEDIUM**。
   * @throws { BusinessError } 10200006 - An exception occurred during serialization.
   * @throws { BusinessError } 10200014 - The function is not marked as concurrent.
   * @throws { BusinessError } 10200028 - The period is less than zero.
   * @throws { BusinessError } 10200050 - The concurrent task has been executed and cannot be executed periodically.
   * @throws { BusinessError } 10200057 - The task cannot be executed by two APIs. [since 18]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 18]
   * @atomicservice
   * @since 13 dynamiconly
   */
  function executePeriodically<A extends Array<Object>, R>(period: number, task: GenericsTask<A, R>, priority?: Priority): void;

  /**
   * 取消任务池中的任务。当任务在taskpool等待队列中，取消该任务后该任务将不再执行，并返回任务被取消的异常；当任务已经在taskpool工作线程执行，
   * 取消该任务并不影响任务继续执行，执行结果在catch分支返回，搭配**isCanceled()**可以对任务取消行为作出响应。也就是说，
   * **taskpool.cancel**对其之前的**taskpool.execute**、**taskpool.executeDelayed**或**taskpool.executePeriodically**生效。
   * 从API version 20开始，在执行cancel操作后，可以在catch分支里使用泛型BusinessError<
   * [taskpool.TaskResult]{@link taskpool.TaskResult}>，来获取任务中抛出的异常信息或最终的执行结果。
   *
   * @param { Task } task - 需要取消执行的任务。
   * @throws { BusinessError } 10200015 - The task to cancel does not exist.
   * @throws { BusinessError } 10200016 - The task to cancel is being executed. [since 9 - 17]
   * @throws { BusinessError } 10200055 - The asyncRunner task has been canceled. [since 18]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  function cancel(task: Task): void;

  /**
   * 取消任务池中的任务组。如果任务组中的任务未全部执行结束，返回**undefined**。
   * 从API version 20开始，在执行cancel操作后，可以在catch分支里使用泛型BusinessError<
   * [taskpool.TaskResult]{@link taskpool.TaskResult}>，来获取任务中抛出的异常信息或最终的执行结果。
   *
   * @param { TaskGroup } group - 需要取消执行的任务组。
   * @throws { BusinessError } 10200018 - The task group to cancel does not exist.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   */
  function cancel(group: TaskGroup): void;

  /**
   * 通过任务ID取消任务池中的任务。如果任务在taskpool等待队列中，取消后任务将不再执行，并返回任务取消的异常。如果任务已在taskpool工作线程中执行，
   * 取消不影响任务继续执行，执行结果在catch分支返回，搭配**isCanceled()**可以对任务取消行为作出响应。**taskpool.cancel**对其之前的
   * **taskpool.execute**或**taskpool.executeDelayed**生效。在其他线程调用**taskpool.cancel**时，需注意其行为是异步的，
   * 可能影响之后的**taskpool.execute**或**taskpool.executeDelayed**。
   * 从API version 20开始，在执行cancel操作后，可以在catch分支里使用泛型BusinessError<
   * [taskpool.TaskResult]{@link taskpool.TaskResult}>，来获取任务中抛出的异常信息或最终的执行结果。
   *
   * @param { number } taskId - 需要取消执行的任务的ID。
   * @throws { BusinessError } 10200015 - The task to cancel does not exist.
   * @throws { BusinessError } 10200055 - The asyncRunner task has been canceled.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamiconly
   */
  function cancel(taskId: number): void;

  /**
   * 获取任务池的线程信息和任务信息。
   *
   * @returns { TaskPoolInfo } 任务池的内部信息。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   */
  function getTaskPoolInfo(): TaskPoolInfo;

  /**
   * 中止任务池中的长时任务，在长时任务执行完成后调用。中止后，执行长时任务的线程可能会被回收。
   *
   * @param { LongTask } longTask - 需要中止的长时任务。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function terminateTask(longTask: LongTask): void;

  /**
   * 检查函数是否为并发函数。
   *
   * @param { Function } func - 需要检查的函数。
   * @returns { boolean } 检查结果。如果被检查函数标注了
   *     [@Concurrent装饰器](docroot://arkts-utils/taskpool-introduction.md#concurrent装饰器)，则返回**true**；
   *     否则返回**false**。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function isConcurrent(func: Function): boolean;

  /**
   * 表示异步队列，可以指定任务执行的并发度和排队策略。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamiconly
   */
  export class AsyncRunner {
    /**
     * AsyncRunner的构造函数，用于创建一个**AsyncRunner**实例。构造一个非全局的异步队列，即使传入的参数相同，
     * 也会返回不同的异步队列。
     *
     * @param { number } runningCapacity - 指定任务执行的最大并发度，该值必须为正整数。如果传入负数，会报错；如果传入非整数，
     *     会向下取整。
     * @param { ?number } waitingCapacity - 指定等待任务的列表容量，该值必须大于等于0。如果传入负数，会报错；如果传入非整数，
     *     会向下取整。默认值为**0**，表示等待任务列表的容量没有限制。如果传入大于0的值，则表示排队策略为丢弃策略，当加入的任务数量
     *     超过该值时，等待列表中处于队头的任务会被丢弃。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    constructor(runningCapacity: number, waitingCapacity?: number);

    /**
     * AsyncRunner的构造函数，用于创建一个**AsyncRunner**实例。构造一个全局异步队列，如果队列名称与已有名称相同，
     * 将返回同一个异步队列。
     *
     * > **说明**
     * >
     * > - 底层通过单例模式确保创建同名的异步队列时，获取同一个实例。
     * >
     * > - 无法修改并发度和等待任务列表容量。
     *
     * @param { string } name - 异步队列的名字。
     * @param { number } runningCapacity - 指定任务执行的最大并发度，该值必须为正整数。如果传入负数，会报错；如果传入非整数，
     *     会向下取整。
     * @param { ?number } waitingCapacity - 指定等待任务的列表容量，该值必须大于等于0。如果传入负数，会报错；如果传入非整数，
     *     会向下取整。默认值为**0**，表示等待任务列表的容量没有限制。如果传入大于0的值，则表示排队策略为丢弃策略，当加入的任务数量
     *     超过该值时，等待列表中处于队头的任务会被丢弃。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    constructor(name: string, runningCapacity: number, waitingCapacity?: number);

    /**
     * 执行异步任务。使用该方法前需要先构造**AsyncRunner**实例。使用Promise异步回调。
     *
     * > **说明**
     * >
     * > - 不支持执行任务组中的任务。
     * >
     * > - 不支持执行串行队列中的任务。
     * >
     * > - 不支持执行其他异步队列任务。
     * >
     * > - 不支持执行周期性任务。
     * >
     * > - 不支持执行延迟任务。
     * >
     * > - 不支持执行存在依赖的任务。
     * >
     * > - 不支持执行已执行过的任务。
     *
     * @param { Task } task - 需要添加到异步队列中的任务。
     * @param { ?Priority } [priority] - 指定任务的优先级，默认值为**taskpool.Priority.MEDIUM**。
     * @returns { Promise<Object> } Promise对象，返回任务执行的结果。
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @throws { BusinessError } 10200025 - dependent task not allowed.
     * @throws { BusinessError } 10200051 - The periodic task cannot be executed again.
     * @throws { BusinessError } 10200054 - The asyncRunner task is discarded.
     * @throws { BusinessError } 10200057 - The task cannot be executed by two APIs.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    execute(task: Task, priority?: Priority): Promise<Object>;
  }

  /**
   * 处于等待或执行过程中的任务进行取消操作后，在catch分支里捕获到**BusinessError**里的补充信息。其他场景下该信息为**undefined**。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20 dynamiconly
   */
  interface TaskResult {
    /**
     * 任务执行结果。默认为**undefined**。不建议修改此值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    result?: Object;

    /**
     * 错误信息。默认和**BusinessError**的**message**字段一致。不建议修改此值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    error?: Error | Object;
  }

  /**
   * 通过taskId或taskId与taskName获取对应的Task实例。
   *
   * > **说明**
   * >
   * > - 如果传入的taskId查询不到对应的Task实例，则会返回**undefined**。
   * >
   * > - 如果传入的taskId能够查询到对应的Task实例，但是调用**getTask**方法的线程和创建Task实例的线程不一致，则会返回**undefined**。
   * >
   * > - 如果同时传入taskId和taskName，通过taskId查询到的Task实例的name和传入的taskName不一致，则会返回**undefined**。
   *
   * @param { number } taskId - 任务ID。
   *     该值应为整数。
   * @param { string } [taskName] - 任务名称。默认值为**undefined**。
   * @returns { Task | undefined } Task实例；当情况异常时，返回**undefined**，具体可见上文说明。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 22 dynamiconly
   */
  function getTask(taskId: number, taskName?: string): Task | undefined;

  /**
   * 任务或任务组的配置项。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 24 dynamiconly
   */
  interface Configs {
    /**
     * 任务的优先级。默认值为taskpool.Priority.MEDIUM。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 24 dynamiconly
     */
    priority?: Priority;

    /**
     * 任务的超时时间，单位为ms。建议传入整数，若传入小数，会被向下取整。
     * 如果省略该参数，timeout取默认值0，不执行超时逻辑。
     * **注意**
     * 1. 该超时时间非精准时间，实际超时时间可能会与预期存在误差。
     * 2. 如果值小于1，会被默认取**0**。
     * 3. timeout值受系统限制，超出2^31 − 1时会溢出，值为**0**。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 24 dynamiconly
     */
    timeout?: number;
  }

  /**
   * 通过Configs执行并发任务。
   *
   * @param { Task } task - 需要执行的任务。
   * @param { Configs } configs - 任务的配置项。
   * @returns { Promise<Object> }
   * @throws { BusinessError } 10200006 - An exception occurred during serialization.
   * @throws { BusinessError } 10200014 - The function is not marked as concurrent.
   * @throws { BusinessError } 10200051 - The periodic task cannot be executed again.
   * @throws { BusinessError } 10200057 - The task cannot be executed by two APIs.
   * @throws { BusinessError } 10200058 - Task timed out.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 24 dynamiconly
   */
  function execute(task: Task, configs: Configs): Promise<Object>;

  /**
   * 通过Configs执行并发泛型任务。
   *
   * @param { GenericsTask<A, R> } task - 需要执行的泛型任务。
   * @param { Configs } configs - 任务的配置项。
   * @returns { Promise<R> }
   * @throws { BusinessError } 10200006 - An exception occurred during serialization.
   * @throws { BusinessError } 10200014 - The function is not marked as concurrent.
   * @throws { BusinessError } 10200051 - The periodic task cannot be executed again.
   * @throws { BusinessError } 10200057 - The task cannot be executed by two APIs.
   * @throws { BusinessError } 10200058 - Task timed out.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 24 dynamiconly
   */
  function execute<A extends Array<Object>, R>(task: GenericsTask<A, R>, configs: Configs): Promise<R>;

  /**
   * 通过Configs执行并发任务组。
   *
   * @param { TaskGroup } group - 需要执行的任务组。
   * @param { Configs } configs - 任务组中各任务的配置项。
   * @returns { Promise<Object[]> }
   * @throws { BusinessError } 10200006 - An exception occurred during serialization.
   * @throws { BusinessError } 10200059 - TaskGroup cannot be re-executed.
   * @throws { BusinessError } 10200070 - TaskGroup timed out.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 24 dynamiconly
   */
  function execute(group: TaskGroup, configs: Configs): Promise<Object[]>;
}

export default taskpool;
