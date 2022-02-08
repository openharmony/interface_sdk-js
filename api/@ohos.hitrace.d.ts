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

/**
 * Provides APIs to implement call chain tracing throughout a service process.
 * With HiTrace, you can quickly obtain the run log for the call chain of a 
 * specified service process and locate faults in cross-device, cross-process,
 * or cross-thread communications.
 * 
 * @since 9
 */
declare namespace hitrace {
    /**
     * Enumerate trace flag
     */
    enum HiTraceFlag {
        /**
         * default value
         */
        DEFAULT           = 0,

        /**
         * trace sync and async call. default: trace sync call only.
         */
        INCLUDE_ASYNC     = 1,

        /**
         * do not create child span. default: create child span.
         */
        DONOT_CREATE_SPAN = 1 << 1,

        /**
         * output tracepoint info in span. default: do not output tracepoint info.
         */
        TP_INFO           = 1 << 2,

        /**
         * do not output begin and end info. default: output begin and end info.
         */
        NO_BE_INFO        = 1 << 3,

        /**
         * do not add id to log. default: add id to log.
         */
        DONOT_ENABLE_LOG  = 1 << 4,

        /**
         * the trace is triggered by fault.
         */
        FAILURE_TRIGGER   = 1 << 5,

        /**
         * output device-to-device tracepoint info in span only. default: do not output device-to-device tracepoint info.
         */
        D2D_TP_INFO       = 1 << 6,
    }

    /**
     * Enumerate trace point type
     */
    enum HiTraceTracePointType {
        /**
         * client send
         */
        CS = 0,

        /**
         * client receive
         */
        CR = 1,

        /**
         * server send
         */
        SS = 2,

        /**
         * server receive
         */
        SR = 3,

        /**
         * general info
         */
        GENERAL = 4,
    }

    /**
     * Enumerate trace communication mode
     */
    enum HiTraceCommunicationMode {
        /**
         * unspecified
         */
        DEFAULT = 0,

        /**
         * thread-to-thread
         */
        THREAD  = 1,

        /**
         * process-to-process
         */
        PROCESS = 2,

        /**
         * device-to-device
         */
        DEVICE  = 3,
    }

    /**
     * trace id
     */
    interface HiTraceId {
        chainId: bigint; /* 0n: invalid */
        spandId?: number;
        parentSpanId?: number;
        flags?: number;
    }

    /**
     * begin a new trace.
     *
     * @param {string} name trace name.
     * @param {number} flags trace flags.
     * @return {HiTraceId} id of the trace.
     */
    function begin(name: string, flags: number = HiTraceFlag.DEFAULT): HiTraceId;

    /**
     * end a trace by trace id.
     *
     * @param {HiTraceId} id trace id of the trace.
     */
    function end(id: HiTraceId): void;

    /**
     * get the trace id of a trace.
     *
     * @return {HiTraceId} trace id of a trace.
     */
    function getId(): HiTraceId;

    /**
     * change the trace id for a trace.
     *
     * @param {HiTraceId} id trace id which will be set into a trace.
     */
    function setId(id: HiTraceId): void;

    /**
     * clear the id of a trace.
     *
     */
    function clearId(): void;

    /**
     * create span for a trace.
     * 
     * @return {HiTraceId} trace id of the trace which has created a span.
     */
    function createSpan(): HiTraceId;

    /**
     * set a trace point
     * 
     * @param {HiTraceCommunicationMode} mode communication mode.
     * @param {HiTraceTracePointType} type trace point type.
     * @param {HiTraceId} id trace id of the trace.
     * @param {string} msg description about this trace point.
     */
    function tracepoint(mode: HiTraceCommunicationMode, type: HiTraceTracePointType, id: HiTraceId, msg?: string): void;

    /**
     * check whether a trace id is valid.
     * 
     * @param {HiTraceId} id the trace id to check.
     * @return {boolean} true if trace id is valid.
     */
    function isValid(id: HiTraceId): boolean;

    /**
     * check whether a trace id has enabled the designative trace flag.
     * 
     * @param {HiTraceId} id the trace id to check.
     * @param {HiTraceFlag} flag the trace flag to check.
     * @return {boolean} true if the flag has been enabled in a trace.
     */
    function isFlagEnabled(id: HiTraceId, flag: HiTraceFlag): boolean;

    /**
     * enable a designative trace flag for a trace id.
     * 
     * @param {HiTraceId} id trace id which need enable a flag. 
     * @param {HiTraceFlag} flag the designative trace flag which will be enabled.
     */
    function enableFlag(id: HiTraceId, flag: HiTraceFlag): void;
}

export default hitrace;
