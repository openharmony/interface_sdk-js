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

import os
import subprocess
import sys
import argparse
import json
import fnmatch
from pathlib import Path


INTEROP_ETS_LIST = ["api", "arkts", "kits"]


# 输出的json文件路径
OUTPUT_PATH = ''
# 需要排除的文件
CONFIG_JSON = "interface/sdk-js/compile_ets_ts.json"


def should_exclude(path, config):
    # 检查目录排除
    dirname = os.path.basename(os.path.dirname(path))
    if any(fnmatch.fnmatch(dirname, pattern) for pattern in config['excluded_dirs']):
        return True
    # 检查文件名排除
    filename = os.path.basename(path)
    if any(fnmatch.fnmatch(filename, pattern) for pattern in config['excluded_files']):
        return True
    # 检查扩展名排除
    ext = os.path.splitext(path)[1].lower()
    if ext in config['excluded_extensions']:
        return True

    return False


def walk_with_exclusions(root_dir, file_folder_dir, config_path = CONFIG_JSON):
    config = {}
    with open(os.path.join(root_dir, config_path), 'r') as f:
        config = json.load(f)
    for root, dirs, files in os.walk(file_folder_dir):
        # 从dirs列表中移除要排除的目录
        dirs[:] = [d for d in dirs if not should_exclude(os.path.join(root, d), config)]
        # 过滤文件
        filtered_files = [f for f in files if not should_exclude(os.path.join(root, f), config)]
        yield root, dirs, filtered_files


# 生成工具运行所需要的json文件
def build_ets_tool_config(root_build_dir, tool_dir, output_dir):
    global OUTPUT_PATH
    OUTPUT_PATH = os.path.abspath(os.path.join(output_dir, "ets1.2interop/dependence-json/ets_tool_config_json.json"))
    all_files = []
    for dirpath, dirnames, filenames in walk_with_exclusions(root_build_dir, tool_dir):
        cont_folder = Path(os.path.relpath(dirpath, tool_dir)).parts
        if len(cont_folder) != 0:
            if cont_folder[0] in INTEROP_ETS_LIST:
                files = [os.path.join(dirpath, file) 
                         for file in filenames]
                all_files.extend(files)
        else :
            continue
    config = {
        "plugins": {
            # 依赖的工具
            "interop_plugin": str(os.path.join(tool_dir, "build-tools/ui-plugins/lib/interop-plugins/index"))
        },
        # 需要处理的API声明文件
        "compileFiles": all_files,
        # 自己命名的包的名字
        "packageName": "",
        "buildType": "build",
        "buildMode": "Release",
        # 需要处理的API目录
        "moduleRootPath": str(tool_dir),
        "sourceRoots": ["./"],
        "loaderOutPath": str(os.path.abspath(os.path.join(output_dir, "ets1.2interop"))),
        # 实际在工具转化API时，不参与生成胶水代码及产物
        "cachePath": str(os.path.abspath(os.path.join(output_dir, "ets1.2interop/cache"))),
        # buildSdkPath是包含依赖产物的路径
        "buildSdkPath": str(os.path.join(tool_dir)),
        "dependentModuleList": [],
        "isIDE": "false",
        # 工具处理时候的线程数
        "maxWorkers": 64,
        # 工具处理的时候是否跳过检查
        "skipDeclCheck": False,
        "enableDeclgenEts2Ts": True,
        # declgenV1OutPath是输出的ets产物
        "declgenV1OutPath": str(os.path.abspath(os.path.join(output_dir, "ets1.2interop/declaration"))),
        # declgenBridgeCodePath是输出的ts产物
        "declgenBridgeCodePath": str(os.path.abspath(os.path.join(output_dir, "ets1.2interop/bridge"))),
    }
    
    try:
        out_path_dir = Path(OUTPUT_PATH).resolve()
        Path(out_path_dir).parent.mkdir(parents=True, exist_ok=True)
        with open(out_path_dir, 'w', encoding="utf-8") as f:
            json.dump(config, f, indent=2, ensure_ascii=False)
        return str(out_path_dir)
    except Exception as e:
        print(f"run_compile_ets_ts: {str(e)}")
        return None


def run_compile_ets_ts(tool_dir: str, node_path: str, config_json_path: str):
    # PANDA的依赖路径
    panda_path = os.path.join(tool_dir, "build-tools/ets2panda/lib")
    # 执行的js路径
    tool_path = os.path.join(tool_dir, "build-tools/driver/build-system/dist/entry.js")
    json_path = Path(config_json_path).resolve()
    node_path = os.path.abspath(node_path)
    env = os.environ.copy()
    env["LD_LIBRARY_PATH"] = str(panda_path)
    try:
        cmd = [node_path, tool_path, json_path]
        result = subprocess.run(cmd, env=env, check=True, cwd=tool_dir, text=True)
        print(f"run_compile_ets_ts success: {result.returncode}")
    except subprocess.CalledProcessError as e:
        print(f"run_compile_ets_ts error: {e.returncode}")
        print("run_compile_ets_ts:", e.stderr)
    except Exception as e:
        print(f"run_compile_ets_ts: {str(e)}")


def run_compile_ets_ts_main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--root-build-dir', required=True)
    parser.add_argument('--tool-dir', required=True)
    parser.add_argument('--output-interface-sdk', required=True)
    parser.add_argument('--node-path', required=True)
    options = parser.parse_args()
    options.tool_dir = os.path.abspath(options.tool_dir)
    tool_dir = options.tool_dir
    config_json = build_ets_tool_config(options.root_build_dir, options.tool_dir, options.output_interface_sdk)
    run_compile_ets_ts(options.tool_dir, options.node_path, config_json)


if __name__ == "__main__":
    sys.exit(run_compile_ets_ts_main())