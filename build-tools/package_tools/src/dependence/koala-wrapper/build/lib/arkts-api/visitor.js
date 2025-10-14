"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visitEachChild = visitEachChild;
var _global = require("./static/global");
var _nodeFactory = require("./factory/nodeFactory");
var _generated = require("../generated");
var _nodeTests = require("./factory/nodeTests");
var _public = require("./utilities/public");
var _Es2pandaEnums = require("../Es2pandaEnums");
function _newArrowCheck(n, r) { if (n !== r) throw new TypeError("Cannot instantiate an arrow function"); } /*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
// TODO: rethink (remove as)
function nodeVisitor(node, visitor) {
  if (node === undefined) {
    return node;
  }
  return visitor(node);
}

// TODO: rethink (remove as)
function nodesVisitor(nodes, visitor) {
  var _this = this;
  if (nodes === undefined) {
    return nodes;
  }
  return nodes.map(function (node) {
    _newArrowCheck(this, _this);
    return visitor(node);
  }.bind(this));
}
let updated = false;
function visitEachChild(node, visitor) {
  updated = false;
  let script = node;
  script = visitETSModule(script, visitor);
  script = visitDeclaration(script, visitor);
  script = visitDefinition(script, visitor);
  script = visitDefinitionBody(script, visitor);
  script = visitStatement(script, visitor);
  script = visitForLoopStatement(script, visitor);
  script = visitOuterExpression(script, visitor);
  script = visitInnerExpression(script, visitor);
  script = visitTrivialExpression(script, visitor);
  script = visitLiteral(script, visitor);
  // TODO
  return visitWithoutUpdate(script, visitor);
}
function visitOuterExpression(node, visitor) {
  if (updated) {
    return node;
  } else if ((0, _generated.isBlockExpression)(node)) {
    updated = true;
    return _nodeFactory.factory.updateBlockExpression(node, nodesVisitor(node.statements, visitor));
  } else if ((0, _nodeTests.isCallExpression)(node)) {
    updated = true;
    const call = _nodeFactory.factory.updateCallExpression(node, nodeVisitor(node.expression, visitor), nodesVisitor(node.typeArguments, visitor), nodesVisitor(node.arguments, visitor));
    if (!!node.trailingBlock) {
      call.setTralingBlock(nodeVisitor(node.trailingBlock, visitor));
    }
    return call;
  } else if ((0, _nodeTests.isArrowFunctionExpression)(node)) {
    updated = true;
    return _nodeFactory.factory.updateArrowFunction(node, nodeVisitor(node.scriptFunction, visitor));
  } else if ((0, _nodeTests.isAssignmentExpression)(node)) {
    updated = true;
    return _nodeFactory.factory.updateAssignmentExpression(node, nodeVisitor(node.left, visitor), node.operatorType, nodeVisitor(node.right, visitor));
  } else if ((0, _generated.isETSNewClassInstanceExpression)(node)) {
    updated = true;
    return _nodeFactory.factory.updateETSNewClassInstanceExpression(node, node.getTypeRef, nodesVisitor(node.getArguments, visitor));
  }
  if ((0, _generated.isArrayExpression)(node)) {
    updated = true;
    return _nodeFactory.factory.updateArrayExpression(node, nodesVisitor(node.elements, visitor));
  }
  return node;
}
function visitInnerExpression(node, visitor) {
  if (updated) {
    return node;
  }
  if ((0, _nodeTests.isMemberExpression)(node)) {
    updated = true;
    return _nodeFactory.factory.updateMemberExpression(node, nodeVisitor(node.object, visitor), nodeVisitor(node.property, visitor), node.kind, node.computed, node.optional);
  }
  if ((0, _generated.isConditionalExpression)(node)) {
    updated = true;
    return _nodeFactory.factory.updateConditionalExpression(node, nodeVisitor(node.test, visitor), nodeVisitor(node.consequent, visitor), nodeVisitor(node.alternate, visitor));
  }
  if ((0, _generated.isTSAsExpression)(node)) {
    updated = true;
    return _nodeFactory.factory.updateTSAsExpression(node, nodeVisitor(node.expr, visitor), nodeVisitor(node.typeAnnotation, visitor), node.isConst);
  }
  if ((0, _generated.isObjectExpression)(node)) {
    updated = true;
    return _nodeFactory.factory.updateObjectExpression(node, _Es2pandaEnums.Es2pandaAstNodeType.AST_NODE_TYPE_OBJECT_EXPRESSION, nodesVisitor(node.properties, visitor), false);
  }
  if ((0, _generated.isProperty)(node)) {
    updated = true;
    return _nodeFactory.factory.updateProperty(node, node.key, nodeVisitor(node.value, visitor));
  }
  // TODO
  return node;
}
function visitTrivialExpression(node, visitor) {
  if (updated) {
    return node;
  }
  if ((0, _generated.isBinaryExpression)(node)) {
    updated = true;
    return _nodeFactory.factory.updateBinaryExpression(node, nodeVisitor(node.left, visitor), nodeVisitor(node.right, visitor), node.operatorType);
  }
  // TODO
  return node;
}
function visitDeclaration(node, visitor) {
  if (updated) {
    return node;
  } else if ((0, _nodeTests.isFunctionDeclaration)(node)) {
    updated = true;
    return _nodeFactory.factory.updateFunctionDeclaration(node, nodeVisitor(node.scriptFunction, visitor), node.isAnon, node.annotations);
  } else if ((0, _generated.isClassDeclaration)(node)) {
    updated = true;
    return _nodeFactory.factory.updateClassDeclaration(node, nodeVisitor(node.definition, visitor));
  } else if ((0, _nodeTests.isStructDeclaration)(node)) {
    updated = true;
    return _nodeFactory.factory.updateStructDeclaration(node, nodeVisitor(node.definition, visitor));
  } else if ((0, _generated.isTSInterfaceDeclaration)(node)) {
    updated = true;
    return _nodeFactory.factory.updateInterfaceDeclaration(node, nodesVisitor(node.extends, visitor), nodeVisitor(node.id, visitor), nodeVisitor(node.typeParams, visitor), nodeVisitor(node.body, visitor), node.isStatic,
    // TODO: how do I get it?
    true);
  } else if ((0, _nodeTests.isVariableDeclaration)(node)) {
    updated = true;
    return _nodeFactory.factory.updateVariableDeclaration(node, 0, node.declarationKind, nodesVisitor(node.declarators, visitor));
  } else if ((0, _generated.isTSTypeAliasDeclaration)(node)) {
    updated = true;
    return _nodeFactory.factory.updateTSTypeAliasDeclaration(node, node.id, nodeVisitor(node.typeParams, visitor), nodeVisitor(node.typeAnnotation, visitor));
  }
  // TODO
  return node;
}
function visitDefinition(node, visitor) {
  if (updated) {
    return node;
  }
  if ((0, _generated.isClassDefinition)(node)) {
    updated = true;
    return _nodeFactory.factory.updateClassDefinition(node, node.ident, node.typeParams, node.superTypeParams, node.implements, undefined, node.super, nodesVisitor(node.body, visitor), node.modifiers, (0, _public.classDefinitionFlags)(node));
  }
  if ((0, _nodeTests.isMethodDefinition)(node)) {
    updated = true;
    return _nodeFactory.factory.updateMethodDefinition(node, node.kind, node.name, nodeVisitor(node.scriptFunction, visitor), node.modifiers, false);
  }
  if ((0, _generated.isTSInterfaceBody)(node)) {
    updated = true;
    return _nodeFactory.factory.updateInterfaceBody(node, nodesVisitor(node.body, visitor));
  }
  if ((0, _nodeTests.isVariableDeclarator)(node)) {
    updated = true;
    return _nodeFactory.factory.updateVariableDeclarator(node, _global.global.generatedEs2panda._VariableDeclaratorFlag(_global.global.context, node.peer), nodeVisitor(node.name, visitor), nodeVisitor(node.initializer, visitor));
  }
  return node;
}
function visitStatement(node, visitor) {
  if (updated) {
    return node;
  }
  if ((0, _generated.isBlockStatement)(node)) {
    updated = true;
    return _nodeFactory.factory.updateBlock(node, nodesVisitor(node.statements, visitor));
  }
  if ((0, _nodeTests.isExpressionStatement)(node)) {
    updated = true;
    return _nodeFactory.factory.updateExpressionStatement(node, nodeVisitor(node.expression, visitor));
  }
  if ((0, _nodeTests.isIfStatement)(node)) {
    updated = true;
    return _nodeFactory.factory.updateIfStatement(node, nodeVisitor(node.test, visitor), nodeVisitor(node.consequent, visitor), nodeVisitor(node.alternate, visitor));
  }
  if ((0, _generated.isReturnStatement)(node)) {
    updated = true;
    return _nodeFactory.factory.updateReturnStatement(node, nodeVisitor(node.argument, visitor));
  }
  if ((0, _generated.isTryStatement)(node)) {
    updated = true;
    return _nodeFactory.factory.updateTryStatement(node, nodeVisitor(node.block, visitor), nodesVisitor(node.catchClauses, visitor), nodeVisitor(node.finallyBlock, visitor), [], []);
  }
  // TODO
  return node;
}
function visitForLoopStatement(node, visitor) {
  if (updated) {
    return node;
  }
  if ((0, _generated.isForUpdateStatement)(node)) {
    updated = true;
    return _nodeFactory.factory.updateForUpdateStatement(node, nodeVisitor(node.init, visitor), nodeVisitor(node.test, visitor), nodeVisitor(node.update, visitor), nodeVisitor(node.body, visitor));
  }
  if ((0, _generated.isForInStatement)(node)) {
    updated = true;
    return _nodeFactory.factory.updateForInStatement(node, nodeVisitor(node.left, visitor), nodeVisitor(node.right, visitor), nodeVisitor(node.body, visitor));
  }
  if ((0, _generated.isForOfStatement)(node)) {
    updated = true;
    return _nodeFactory.factory.updateForOfStatement(node, nodeVisitor(node.left, visitor), nodeVisitor(node.right, visitor), nodeVisitor(node.body, visitor), node.isAwait);
  }
  return node;
}
function visitETSModule(node, visitor) {
  if (updated) {
    return node;
  }
  if ((0, _nodeTests.isEtsScript)(node)) {
    updated = true;
    return _nodeFactory.factory.updateEtsScript(node, nodesVisitor(node.statements, visitor));
  }
  return node;
}
function visitDefinitionBody(node, visitor) {
  if (updated) {
    return node;
  }
  if ((0, _generated.isScriptFunction)(node)) {
    updated = true;
    return _nodeFactory.factory.updateScriptFunction(node, nodeVisitor(node.body, visitor), _nodeFactory.factory.createFunctionSignature(nodeVisitor(node.typeParams, visitor), nodesVisitor(node.params, visitor), nodeVisitor(node.returnTypeAnnotation, visitor), node.hasReceiver), node.flags, node.modifiers);
  }
  if ((0, _generated.isClassProperty)(node)) {
    updated = true;
    return _nodeFactory.factory.updateClassProperty(node, node.key, nodeVisitor(node.value, visitor), node.typeAnnotation, node.modifiers, node.isComputed);
  }
  // TODO
  return node;
}
function visitLiteral(node, visitor) {
  if (updated) {
    return node;
  }
  if ((0, _generated.isTemplateLiteral)(node)) {
    updated = true;
    return _nodeFactory.factory.updateTemplateLiteral(node, nodesVisitor(node.quasis, visitor), nodesVisitor(node.expressions, visitor), node.multilineString);
  }
  return node;
}

// TODO: apply this to all nodes that does not require updating
function visitWithoutUpdate(node, visitor) {
  if (updated) {
    return node;
  }
  if ((0, _generated.isImportDeclaration)(node)) {
    nodesVisitor(node.specifiers, visitor);
  }
  if ((0, _generated.isETSFunctionType)(node)) {
    nodesVisitor(node.params, visitor);
  }
  if ((0, _nodeTests.isEtsParameterExpression)(node)) {
    nodeVisitor(node.type, visitor);
  }
  return node;
}