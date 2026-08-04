/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as arkts from '@koalaui/libarkts';

/** __mockApiAvailable mock 函数名 */
export const MOCK_FUNCTION_NAME = '__mockApiAvailable';
/** 需被转换的 API 名称 */
export const TARGET_FUNCTION_NAME = 'apiAvailable';
/** apiAvailable 声明所在的 SDK 文件 */
export const SDK_DEVICE_INFO_FILE = '@ohos.deviceInfo.d.ets';

/** 单槽位节点类型 → setter 方法名 */
export const SINGLE_SETTER_BY_KIND: Partial<Record<arkts.Es2pandaAstNodeType, string>> = {
  // 表达式语句：foo 作为独立语句
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPRESSION_STATEMENT]: 'setExpression',
  // await 表达式：await foo()
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_AWAIT_EXPRESSION]: 'setArgument',
  // 一元运算：!foo、-foo、+foo 等
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_UNARY_EXPRESSION]: 'setArgument',
  // ETS 前缀断言：foo!（非空断言）
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_PREFIX_ASSERTION_EXPRESSION]: 'setExpr',
  // 可选链表达式：a?.b
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CHAIN_EXPRESSION]: 'setExpression',
  // as 断言：foo as T
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_AS_EXPRESSION]: 'setExpr',
  // 类型断言：<T>foo
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_ASSERTION]: 'setExpression',
  // 非空断言：foo!
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NON_NULL_EXPRESSION]: 'setExpr',
  // 变量初始化：const x = foo
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_VARIABLE_DECLARATOR]: 'setInit',
  // return 语句：return foo
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_RETURN_STATEMENT]: 'setArgument',
  // 展开元素：...foo
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SPREAD_ELEMENT]: 'setArgument'
};

/** 槽位节点类型 → 按顺序尝试的 { 槽位属性, setter } 组合，列表槽位由 replaceIndexedChild 自动识别 */
export const SLOT_SETTERS_BY_KIND: Partial<
  Record<arkts.Es2pandaAstNodeType, readonly { prop: string; setter: string }[]>
> = {
  // 三元表达式：cond ? consequent : alternate
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CONDITIONAL_EXPRESSION]: [
    { prop: 'test', setter: 'setTest' },
    { prop: 'consequent', setter: 'setConsequent' },
    { prop: 'alternate', setter: 'setAlternate' }
  ],
  // if 语句：if (test) consequent else alternate
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IF_STATEMENT]: [
    { prop: 'test', setter: 'setTest' },
    { prop: 'consequent', setter: 'setConsequent' },
    { prop: 'alternate', setter: 'setAlternate' }
  ],
  // 二元运算：left op right（+ - * / < > && || 等）
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BINARY_EXPRESSION]: [
    { prop: 'left', setter: 'setLeft' },
    { prop: 'right', setter: 'setRight' }
  ],
  // 成员访问：object.property / object[property]
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_MEMBER_EXPRESSION]: [
    { prop: 'object', setter: 'setObject' },
    { prop: 'property', setter: 'setProperty' }
  ],
  // 函数调用：callee(arguments...)
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CALL_EXPRESSION]: [
    { prop: 'callee', setter: 'setCallee' },
    { prop: 'arguments', setter: 'setArguments' }
  ],
  // 赋值：left = right、left += right 等
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ASSIGNMENT_EXPRESSION]: [
    { prop: 'left', setter: 'setLeft' },
    { prop: 'right', setter: 'setRight' }
  ],
  // new 实例化：new Foo(arguments...)
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_CLASS_INSTANCE_EXPRESSION]: [
    { prop: 'arguments', setter: 'setArguments' }
  ],
  // 数组字面量：[elements...]
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ARRAY_EXPRESSION]: [{ prop: 'elements', setter: 'setElements' }],
  // 对象字面量属性值：{ key: value }（value 槽位）
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_PROPERTY]: [{ prop: 'value', setter: 'setValue' }],
  // 参数默认值：(param = initializer) => ...
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PARAMETER_EXPRESSION]: [
    { prop: 'initializer', setter: 'setInitializer' }
  ],
  // while 循环条件：while (test)
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_WHILE_STATEMENT]: [{ prop: 'test', setter: 'setTest' }],
  // do-while 循环条件：do {...} while (test)
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_DO_WHILE_STATEMENT]: [{ prop: 'test', setter: 'setTest' }],
  // switch 判断表达式：switch (discriminant)
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SWITCH_STATEMENT]: [{ prop: 'discriminant', setter: 'setDiscriminant' }],
  // switch 分支值：case test:
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SWITCH_CASE_STATEMENT]: [{ prop: 'test', setter: 'setTest' }],
  // 块表达式：{ statements... }
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_EXPRESSION]: [{ prop: 'statements', setter: 'setStatements' }],
  // 语句块：{ statements... }
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_STATEMENT]: [{ prop: 'statements', setter: 'setStatements' }],
  // ETS 模块顶层：statements...
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_MODULE]: [{ prop: 'statements', setter: 'setStatements' }]
};