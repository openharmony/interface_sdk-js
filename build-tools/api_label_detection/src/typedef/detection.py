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

import enum


class Output:
    file_path = ''
    error_type = ''
    defined_text = ''
    position = ''
    error_info = ''

    def __init__(self, file_path, error_type, defined_text, position, error_info):
        self.file_path = file_path
        self.error_type = error_type
        self.defined_text = defined_text
        self.position = position
        self.error_info = error_info


class ErrorMessage(enum.Enum):
    MUTEX_LABEL = 'In the same API, [$] tag and [&] tag are mutually exclusive'
    RELATIVE_LABEL = 'Functions that appear in pairs,[$] function missing [&] tag'
    ENUM_LABEL = ('The enumeration type [$] is labeled with [&], but none of the enumeration '
                  'values are labeled with this label')


class ErrorType(enum.Enum):
    MUTEX_LABEL = 'mutex_label'
    ENUM_LABEL = 'enum_value_missing_label'
    RELATIVE_LABEL = 'paired_function_omission_label'
