#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Copyright (c) 2024 Huawei Device Co., Ltd.
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

from src.utils.util import (get_start_characters, get_remaining_characters, json_file_data, label_type_conversion,
                            get_check_labels, generate_excel, get_position_information, set_label_to_result)
from src.utils.constants import mutex_label_dist, contrast_function, label_name_dist
from src.typedef.detection import Output, ErrorMessage, ErrorType

result_list = []


def judgement_dict_data(result, result_key):
    my_dict = dict()
    for dict_data in result[result_key]:  # 代表对应文件的解析数据
        # 互斥标签
        if 'jsDocInfos' in dict_data:
            if len(dict_data['jsDocInfos']) > 0:
                get_mutex_label(dict_data)
        # 枚举类标签检测
        if dict_data['apiType'] == 'Enum':
            enum_label_detection(dict_data)
        my_dict[dict_data['definedText']] = dict_data
        dict_keys = dict_data.keys()
        if 'childApis' in dict_keys:  # 递归处理child
            judgement_dict_data(dict_data, 'childApis')
    # 命令控制是否校验成对函数漏标
    if 1 == 1:
        paired_function_omission_label(my_dict)


def enum_label_detection(parent_enum_info: dict):
    parent_js_doc_info = get_js_doc_info(parent_enum_info['jsDocInfos'])
    if not parent_js_doc_info['isAtomicService']:
        return
    children_list = parent_enum_info['childApis']
    count = 0
    for child_info in children_list:
        child_doc_info = get_js_doc_info(child_info['jsDocInfos'])
        if child_doc_info['isAtomicService']:
            count = count + 1
    if count == 0:
        result = Output(parent_enum_info['filePath'], ErrorType.ENUM_LABEL.value, parent_enum_info['definedText'],
                        get_position_information(parent_enum_info['pos']),
                        set_label_to_result(ErrorMessage.ENUM_LABEL.value,
                                            parent_enum_info['apiName'], label_name_dist.get('isAtomicService')))
        result_list.append(result)


#成对出现的函数漏标
def paired_function_omission_label(my_dict: dict):
    filter_duplicates_dist = []  # 存储结果，防止重复
    for defined_text in my_dict:
        if is_pairing_function(defined_text, my_dict):
            pairing(defined_text, my_dict, filter_duplicates_dist)


def is_pairing_function(defined_text, my_dict: dict):
    api_type = my_dict[defined_text]['apiType']
    if api_type != 'Method':
        return False
    start = get_start_characters(my_dict[defined_text]['apiName'])
    return start in contrast_function.keys()


def pairing(defined_text, my_dict, filter_duplicates_dist):
    four_twin_list = ['off', 'on', 'emit', 'once']
    function_name = my_dict[defined_text]['apiName']
    start = get_start_characters(function_name)
    api_name_list = []
    # 4个中的其中之一
    if start in four_twin_list:
        dismantle_four_twin(my_dict, four_twin_list, start, function_name, api_name_list)
    else:
        dismantle_ordinary(start, my_dict, function_name, api_name_list)

    # 找到对应的函数
    if len(api_name_list) != 0:
        ff = my_dict[defined_text]
        for api_name in api_name_list:
            api_info = my_dict[api_name]
            handling_missing_labels(ff, api_info, filter_duplicates_dist)


def dismantle_four_twin(my_dict: dict, four_twin_list, start, function_name, api_name_list):
    for func in my_dict:
        if get_start_characters(my_dict[func]['apiName']) in four_twin_list:
            if (get_remaining_characters(get_start_characters(my_dict[func]['apiName']), my_dict[func]['apiName'])
                    == get_remaining_characters(start, function_name)):
                api_name_list.append(func)


def dismantle_ordinary(start, my_dict: dict, function_name, api_name_list):
    relative_function = contrast_function.get(start)
    for api_name in my_dict:
        if get_start_characters(my_dict[api_name]['apiName']) == relative_function:
            if (get_remaining_characters(relative_function, my_dict[api_name]['apiName'])
                    == get_remaining_characters(start, function_name)):
                api_name_list.append(api_name)


# 处理成对函数漏标问题
def handling_missing_labels(function_target_data: dict, function_relative_data: dict, filter_duplicates_dist):
    target_doc_infos = function_target_data['jsDocInfos']
    relative_doc_infos = function_relative_data['jsDocInfos']
    target_doc_info = target_doc_infos[len(target_doc_infos) - 1]
    relative_doc_info = relative_doc_infos[len(relative_doc_infos) - 1]
    target_label_info = get_check_labels(target_doc_info)
    relative_label_info = get_check_labels(relative_doc_info)
    diff = target_label_info.keys() & relative_label_info
    diff_vals = [k for k in diff if target_label_info[k] != relative_label_info[k]]
    if len(diff_vals) == 0:
        return
    for val in diff_vals:
        if target_label_info.get(val):
            get_label_exclusivity_results(function_relative_data, filter_duplicates_dist, val)
        else:
            get_label_exclusivity_results(function_target_data, filter_duplicates_dist, val)


def get_label_exclusivity_results(relative_data: dict, filter_duplicates_dist, val):
    defined_text = relative_data['definedText'] + val
    if defined_text not in filter_duplicates_dist:
        result = Output(relative_data['filePath'], ErrorType.RELATIVE_LABEL.value, relative_data['definedText'],
                        get_position_information(relative_data['pos']),
                        set_label_to_result(ErrorMessage.RELATIVE_LABEL.value,
                                            relative_data['apiName'], label_name_dist.get(val)))
        result_list.append(result)
        filter_duplicates_dist.append(relative_data['definedText'] + val)


# 互斥标签排查
def get_mutex_label(api_info: dict):
    doc_info = get_js_doc_info(api_info['jsDocInfos'])
    if doc_info is None:
        return
    for label in mutex_label_dist:
        mutex_label_list = mutex_label_dist.get(label)
        is_label_consistent(doc_info, label, mutex_label_list, api_info)


def is_label_consistent(doc_info: dict, label, mutex_label_list, api_info):
    is_dimension = label_type_conversion(doc_info[label])
    if not is_dimension:
        return
    for mutex_label in mutex_label_list:
        if label_type_conversion(doc_info[mutex_label]):
            result = Output(api_info['filePath'], ErrorType.MUTEX_LABEL.value, api_info['definedText'],
                            get_position_information(api_info['pos']),
                            set_label_to_result(ErrorMessage.MUTEX_LABEL.value, label_name_dist.get(label),
                                                label_name_dist.get(mutex_label)))
            result_list.append(result)


def get_js_doc_info(js_doc_info_list: list):
    if len(js_doc_info_list) > 0:
        return js_doc_info_list[len(js_doc_info_list) - 1]
    return None


# 按装订区域中的绿色按钮以运行脚本。
if __name__ == '__main__':
    path = r'E:\python_workspace\collect_0_0.json'
    data = json_file_data(path)
    for key in data:   # 代表每个ts文件
        judgement_dict_data(data, key)
    generate_excel(result_list, '')
