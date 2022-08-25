/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

const path = require("path");

function checkEntry(url) {
  let result = "API CHECK FAILED!";
  try {
    __dirname = "../../interface/sdk-js/build-tools/api_check_plugin";
    const execSync = require("child_process").execSync;
    execSync("cd ../../interface/sdk-js/build-tools/api_check_plugin && npm install");
    const { scanEntry } = require(path.resolve(__dirname, "./src/api_check_plugin"));
    result = scanEntry(url);
    const { removeDir } = require(path.resolve(__dirname, "./src/utils"));
    removeDir(path.resolve(__dirname, "node_modules"));
  } catch (error) {
    // catch error
  }
  return result;
}

// function checkEntryLocalText(url) {
//   let execSync = require("child_process").execSync;
//   execSync("npm install");
//   const { test } = require("./src/api_check_plugin");
//   console.log("entry", test(url))
// }

// checkEntryLocalText("XXXX")
