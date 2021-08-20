/*
* Copyright (c) 2021 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

declare namespace util {

    /**
     *  encoding name: support full encoding in ICU data utf-8 utf-16 iso8859 must support in all device
     */
    class TextDecoder {
        /** the source encoding's name, lowercased. */
        readonly encoding: string;
        /** Returns `true` if error mode is "fatal", and `false` otherwise. */
        readonly fatal: boolean;
        /** Returns `true` if ignore BOM flag is set, and `false` otherwise. */
        readonly ignoreBOM = false;
        constructor(
            encoding?: string,
            options?: { fatal?: boolean; ignoreBOM?: boolean },
        );
        /** Returns the result of running encoding's decoder. */
        decode(input?: ArrayBuffer | ArrayBufferView, options?: { stream?: false }): string;
    }

    /**
     * TextEncoder takes a stream of code points as input and emits a stream of UTF-8 bytes.
     */
    class TextEncoder {
        readonly encoding = "utf-8";

        constructor();

        /** Returns the result of encoder. */
        encode(input?: string): Uint8Array;

        /** encode string, write the result to dest array */
        encodeInto(
            input: string,
            dest: Uint8Array,
        ): { read: number; written: number };
    }
}

export default util;