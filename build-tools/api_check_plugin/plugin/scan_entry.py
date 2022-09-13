#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Copyright (c) 2021 Huawei Device Co., Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import os
import shutil
import execjs

def run_scan(path):
    result = []
    js_context = execjs.compile(js_from_file("../../interface/sdk-js/build-tools/api_check_plugin/entry.js"))
    result = js_context.call("checkEntry", os.path.abspath(path))
    if len(result) == 0:
        return True, "check success"
    else:
        return False, result

def del_files(dir_path):
    shutil.rmtree(dir_path)
    print("delete")

def js_from_file(file_name):
    with open(file_name, "r", encoding="UTF-8") as file:
        result = file.read()
    return result

if __name__ == "__main__":
    run_scan("../mdFiles.txt")
