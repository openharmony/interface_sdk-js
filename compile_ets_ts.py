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
from pathlib import Path

INTEROP_ETS_LIST = ["api","arkts","kits"]

# 输出的json文件路径
OUTPUT_PATH = ''

def build_ets_tool_config(tool_dir, output_dir) -> str:
    global OUTPUT_PATH
    OUTPUT_PATH = os.path.join(tool_dir,"dependence-json/ets_tool_config_json.json")
    all_files = []
    for dirpath, dirnames, filenames in os.walk(tool_dir):
        cont_folder = Path(os.path.relpath(dirpath,tool_dir)).parts
        if len(cont_folder) != 0:
            if cont_folder[0] in INTEROP_ETS_LIST:
                files = [os.path.join(dirpath,file) 
                         for file in filenames
                         if not file.endswith('.json')]
                all_files.extend(files)
        else :
            continue
    config = {
        "plugins" : {
            # 依赖的工具
            "interop_plugin":str(os.path.join(tool_dir,"build-tools/ui-plugins/lib/interop-plugins/index"))
            },
        # 需要处理的API声明文件
        "compileFiles" :all_files,
        # 自己命名的包的名字
        "packageName" :'',
        "buildType": "build",
        "buildMode": "Release",
        # 需要处理的API目录
        "moduleRootPath" : str(tool_dir),
        "sourceRoots": ["./"],
        "loaderOutPath" : str(os.path.join(output_dir,"ets1.2interop")),
        # 实际在工具转化API时，不参与生成胶水代码及产物
        "cachePath" : str(os.path.join(tool_dir,"cache")),
        # buildSdkPath是包含依赖产物的路径
        "buildSdkPath" : str(os.path.join(tool_dir)),
        "dependentModuleList": [],
        "isIDE": "false",
        # 工具处理时候的线程数
        "maxWorkers":64,
        "enableDeclgenEts2Ts": True,
        # declgenV1OutPath是输出的ets产物
        "declgenV1OutPath": str(os.path.abspath(os.path.join(output_dir,"ets1.2interop/declaration"))),
        # declgenBridgeCodePath是输出的ts产物
        "declgenBridgeCodePath": str(os.path.abspath(os.path.join(output_dir,"ets1.2interop/bridge"))),
    }
    
    try:
        print('build_ets_tool_config config',config)
        out_path_dir = Path(OUTPUT_PATH).resolve()
        output_dir = Path(out_path_dir).parent.mkdir(parents=True,exist_ok=True)
        with open(out_path_dir, 'w', encoding="utf-8") as f:
            json.dump(config, f, indent=2, ensure_ascii=False)
        return str(out_path_dir)
    except Exception as e:
        print(f"run_compile_ets_ts: {str(e)}")


def run_compile_ets_ts(root_build_dir:str, tool_dir:str, node_path:str, config_json_path:str):
    # PANDA的依赖路径
    panda_path = os.path.join(tool_dir,"build-tools/ets2panda/lib")
    # 执行的js路径
    tool_path = os.path.join(tool_dir,"build-tools/driver/build-system/dist/entry.js")
    json_path = Path(config_json_path).resolve()
    node_path = os.path.abspath(node_path)
    env = os.environ.copy()
    env["LD_LIBRARY_PATH"] = str(panda_path)
    try:
        cmd  = [node_path, tool_path, json_path]
        result = subprocess.run(cmd, env=env, check=True, cwd=tool_dir, text=True)
    except subprocess.CalledProcessError as e:
        print(f"run_compile_ets_ts error: {e.returncode}")
        print("run_compile_ets_ts:", e.stderr)
        return False
    except Exception as e:
        print(f"run_compile_ets_ts: {str(e)}")
        return False
    
def run_compile_ets_ts_main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--root-build-dir', required=True)
    parser.add_argument('--tool-dir', required=True)
    parser.add_argument('--output-interface-sdk', required=True)
    parser.add_argument('--node-path', required=True)
    options = parser.parse_args()
    options.tool_dir = os.path.abspath(options.tool_dir)
    tool_dir = options.tool_dir
    config_json = build_ets_tool_config(options.tool_dir,options.output_interface_sdk)
    run_compile_ets_ts(options.root_build_dir, options.tool_dir, options.node_path, config_json)

if __name__ == "main":
    sys.exit(run_compile_ets_ts_main())