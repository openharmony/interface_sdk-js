#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Copyright (c) 2026 Huawei Device Co., Ltd.
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
import os
import sys
import shutil
import subprocess


STATIC_SUBDIRS = ["api", "kits", "arkts"]


def copy_subdirs(source_base, subdirs, output_path):
    """从源目录拷贝指定子目录到输出路径

    Args:
        source_base (str): 源目录根路径
        subdirs (list[str]): 需要拷贝的子目录名列表
        output_path (str): 输出目录根路径

    Returns:
        None
    """
    for subdir in subdirs:
        src = os.path.join(source_base, subdir)
        dst = os.path.join(output_path, subdir)
        if not os.path.exists(src):
            print(f"[copy_runtimeapi] WARNING: source subdir does not exist: {src}, skipping")
            continue
        if os.path.exists(dst):
            shutil.rmtree(dst)
        shutil.copytree(src, dst)


def run_unpublished_tool(nodejs, unpublished_tool, input_dir, output_dir, mode, sdk_path):
    """调用 delete_unpublished_plugin.js 执行 @unpublished 标签处理

    Args:
        nodejs (str): Node.js 可执行文件路径
        unpublished_tool (str): delete_unpublished_plugin.js 文件路径
        input_dir (str): 输入目录路径
        output_dir (str): 输出目录路径
        mode (str): 处理模式，"tag-only" 或 "tag-and-api"
        sdk_path (str): SDK build-tools 路径，用于 libarkts 库解析

    Returns:
        None
    """
    tool = os.path.abspath(unpublished_tool)
    nodejs = os.path.abspath(nodejs)
    input_dir = os.path.abspath(input_dir)
    output_dir = os.path.abspath(output_dir)
    sdk_path = os.path.abspath(sdk_path)
    if not os.path.exists(input_dir):
        print(f"[copy_runtimeapi] WARNING: dir does not exist: {input_dir}, skipping unpublished processing")
        return
    env = os.environ.copy()
    ets2panda_lib = os.path.join(sdk_path, "build-tools", "ets2panda", "lib")
    if os.path.isdir(ets2panda_lib):
        env["LD_LIBRARY_PATH"] = ets2panda_lib + os.pathsep + env.get("LD_LIBRARY_PATH", "")
        print(f"[copy_runtimeapi] LD_LIBRARY_PATH set to: {ets2panda_lib}")
    else:
        print(f"[copy_runtimeapi] WARNING: ets2panda lib dir not found: {ets2panda_lib}")
    print(f"[copy_runtimeapi] running delete_unpublished_plugin.js --mode {mode} on {input_dir}")
    p = subprocess.Popen([nodejs, tool, "--input", input_dir, "--output", output_dir, "--mode", mode, "--sdk-path", sdk_path, "--subdirs", "api,kits,arkts"], stdout=subprocess.PIPE, env=env)
    p.wait()


def main():
    """主函数：解析命令行参数，执行 runtimeapi 拷贝和 @unpublished 处理。

    执行流程：
    1. 从原始 static SDK 拷贝到 output-path（保留 @unpublished 标签，供 tag-and-api 使用）
    2. 对 static SDK 执行 tag-only（仅删标签，保留 API，暴露给其他部件）
    3. 从 tag-only 后的 static SDK 拷贝到 runtimeapi-path（供 ets-loader/runtimeapi）
    4. 对 output-path 执行 tag-and-api（删标签+API，供 ets/static/api、arkts、kits）

    Returns:
        int: 退出码
    """
    parser = argparse.ArgumentParser()
    parser.add_argument('--static-sdk-path', required=True, help='path to static SDK output')
    parser.add_argument('--output-path', required=True, help='path to tag-and-api output directory (for ets/static/api,arkts,kits)')
    parser.add_argument('--runtimeapi-path', required=True, help='path to tag-only output directory (for ets-loader/runtimeapi)')
    parser.add_argument('--node-js', required=True, help='path to nodejs executable')
    parser.add_argument('--unpublished-tool', required=True, help='path to delete_unpublished_plugin.js')
    parser.add_argument('--sdk-path', required=True, help='SDK build tools path for libarkts resolution')

    options = parser.parse_args()

    static_sdk_path = os.path.abspath(options.static_sdk_path)
    output_path = os.path.abspath(options.output_path)
    runtimeapi_path = os.path.abspath(options.runtimeapi_path)
    sdk_path = os.path.abspath(options.sdk_path)

    if not os.path.exists(static_sdk_path):
        print(f"ERROR: static SDK path does not exist: {static_sdk_path}")
        sys.exit(1)

    # Step 1: 先拷贝原始 static SDK 到 output-path（copy_runtimeapi）（保留 @unpublished 标签）
    # 必须在 tag-only 之前拷贝，否则标签被删除后 tag-and-api 无法识别哪些 API 该删
    if os.path.exists(output_path):
        shutil.rmtree(output_path)
    os.makedirs(output_path, exist_ok=True)
    print(f"[copy_runtimeapi] copying original static SDK to output-path: {output_path}")
    copy_subdirs(static_sdk_path, STATIC_SUBDIRS, output_path)

    # Step 2: 对 static SDK 执行 tag-only（仅删标签，保留 API） 删除标签的步骤暂时不启用
    # 此结果将暴露给其他部件，不能删 API（调用方法的参数为 options.node_js, options.unpublished_tool, static_sdk_path, static_sdk_path, "tag-only", sdk_path）

    # Step 3: 从 tag-only 后的 static SDK 拷贝到 opy_runtimeapi_runtimeapi
    if os.path.exists(runtimeapi_path):
        shutil.rmtree(runtimeapi_path)
    os.makedirs(runtimeapi_path, exist_ok=True)
    print(f"[copy_runtimeapi] copying result to runtimeapi-path: {runtimeapi_path}")
    copy_subdirs(static_sdk_path, STATIC_SUBDIRS, runtimeapi_path)

    # Step 4: 对 output-path 执行 tag-and-api（删标签 + API 声明）
    # output-path 保留了原始 @unpublished 标签，tag-and-api 可以正确识别并删除对应 API
    print(f"[copy_runtimeapi] processing output @unpublished tag-and-api on {output_path}")
    run_unpublished_tool(options.node_js, options.unpublished_tool, output_path, output_path, "tag-and-api", sdk_path)


if __name__ == '__main__':
    sys.exit(main())
