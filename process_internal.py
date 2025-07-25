#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
import sys
import shutil
import optparse
import json


def copy_files(options):
    '''
    根据remove_list.json文件判断 保留base中的文件\n
    保留base\n
    删除global_remove\n
    编publicSDK时删除sdk_build_public_remove\n
    '''
    with open(options.remove) as f:
        remove_dict = json.load(f)
        file_list = []
        if options.name in remove_dict:
            rm_name = remove_dict[options.name]
            if 'base' in rm_name:
                for i, base_path in enumerate(rm_name['base']):
                    base_full_path = os.path.join(
                        options.project_dir, base_path)
                    format_src = format_path(base_full_path, options.base_dir)
                    file_list.append(format_src)
            for file in os.listdir(options.input):
                src = os.path.join(options.input, file)
                if os.path.isfile(src) and (
                    'global_remove' not in rm_name or (
                        'global_remove' in rm_name and (
                            file not in rm_name['global_remove']))):
                    # 当前文件不在全局删除属性中
                    format_src = format_path(src, options.base_dir)
                    if options.ispublic == 'true':
                        # publicSDK需要删除sdk_build_public_remove中的文件
                        if 'sdk_build_public_remove' not in rm_name:
                            file_list.append(format_src)
                        else:
                            if file not in rm_name['sdk_build_public_remove']:
                                file_list.append(format_src)
                    else:
                        file_list.append(format_src)
        else:
            for file in os.listdir(options.input):
                src = os.path.join(options.input, file)
                if os.path.isfile(src):
                    format_src = format_path(src, options.base_dir)
                    file_list.append(format_src)
        return file_list


def format_path(filepath, base_dir):
    return os.path.abspath(filepath)


def parse_args(args):
    '''解析命令行参数'''
    parser = optparse.OptionParser()
    parser.add_option('--input', help='d.ts document input path')
    parser.add_option('--remove', help='d.ts to be remove path')
    parser.add_option('--base-dir', help='d.ts document base dir path')
    parser.add_option('--project-dir', help='current project dir path')
    parser.add_option('--ispublic', help='whether or not sdk build public')
    parser.add_option('--name', help='module label name')
    parser.add_option('--output', help='output path')
    options, _ = parser.parse_args(args)
    options.input = os.path.realpath(options.input)
    return options


def main(argv):
    '''main函数入口'''
    options = parse_args(argv)
    if not os.path.exists(options.output):
        os.makedirs(options.output)
    result = copy_files(options)
    for file_path in result:
        shutil.copy(file_path, options.output)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
