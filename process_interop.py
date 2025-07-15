#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Copyright (c) 2025 Huawei Device Co., Ltd.
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

import argparse
import sys
import os
import shutil
import subprocess

INTERFACE_PATH = "interface/sdk-js"
PROCESS_INTEROP = "interface/sdk-js/build-tools/process_interop.js"

def process_interop(options, sub_input, sub_output):
    nodejs = os.path.abspath(options.node_js)
    tool = os.path.abspath(os.path.join(options.source_root_dir, PROCESS_INTEROP))
    cwd_dir = os.path.abspath(os.path.join(
        options.source_root_dir, INTERFACE_PATH))
    intermediates_output = os.path.abspath(options.intermediates_output)

    input_dir = intermediates_output + sub_input
    output_dir = intermediates_output + sub_output
    os.makedirs(output_dir, exist_ok=True)
    process = subprocess.run([nodejs, tool, "--input", input_dir,
                                "--output", output_dir], shell=False,
                                cwd=os.path.abspath(os.path.join(
                                    options.source_root_dir, cwd_dir)),
                                stdout=subprocess.PIPE)
    return process


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--intermediates-output', required=True)
    parser.add_argument('--source-root-dir', required=True)
    parser.add_argument('--node-js', required=True)

    options = parser.parse_args()
    process_interop(options, "/ets1.1interop/api", "/ets1.1interop/api")
    process_interop(options, "/ets1.1interop/component", "/ets1.1interop/component")
    process_interop(options, "/ets1.2interop/declaration/api", "/ets1.2interop/declaration/api")


if __name__ == '__main__':
    sys.exit(main())
    
