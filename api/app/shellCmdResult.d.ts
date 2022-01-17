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
 * A object that records the result of shell command executes.
 * 执行shell命令的结果
 *
 * @since 8
 * @SysCap SystemCapability.Appexecfwk
 * @devices phone, tablet, tv, wearable, car
 * @import import ShellCmdResult from 'app/shellCmdResult.d'
 * @permission N/A
 */
export interface ShellCmdResult {
    /**
     * the cmd standard result.
     * shell命令标准输出结果
     */
    stdResult: String;

    /**
     * shell cmd exec result.
     * shell命令执行的结果
     */
    exitCode: number;
}

export default ShellCmdResult;