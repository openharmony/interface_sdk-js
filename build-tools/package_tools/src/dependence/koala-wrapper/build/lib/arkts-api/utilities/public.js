"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCacheContextFromFile = CreateCacheContextFromFile;
exports.CreateGlobalContext = CreateGlobalContext;
exports.DestroyGlobalContext = DestroyGlobalContext;
exports.ImportSpecifierIsRemovableConst = ImportSpecifierIsRemovableConst;
exports.ImportSpecifierSetRemovable = ImportSpecifierSetRemovable;
exports.MemFinalize = MemFinalize;
exports.MemInitialize = MemInitialize;
exports.classDefinitionFlags = classDefinitionFlags;
exports.classDefinitionIsFromStructConst = classDefinitionIsFromStructConst;
exports.classDefinitionSetFromStructModifier = classDefinitionSetFromStructModifier;
exports.classPropertySetOptional = classPropertySetOptional;
exports.destroyConfig = destroyConfig;
exports.generateStaticDeclarationsFromContext = generateStaticDeclarationsFromContext;
exports.generateTsDeclarationsFromContext = generateTsDeclarationsFromContext;
exports.getAnnotations = getAnnotations;
exports.getDecl = getDecl;
exports.getEndPosition = getEndPosition;
exports.getFileName = getFileName;
exports.getOriginalNode = getOriginalNode;
exports.getPeerDecl = getPeerDecl;
exports.getPeerObjectDecl = getPeerObjectDecl;
exports.getProgramFromAstNode = getProgramFromAstNode;
exports.getStartPosition = getStartPosition;
exports.hasModifierFlag = hasModifierFlag;
exports.importDeclarationInsert = importDeclarationInsert;
exports.isDefaultAccessModifierClassProperty = isDefaultAccessModifierClassProperty;
exports.modifiersToString = modifiersToString;
exports.nodeType = nodeType;
exports.proceedToState = proceedToState;
exports.rebindSubtree = rebindSubtree;
exports.recheckSubtree = recheckSubtree;
exports.setAllParents = setAllParents;
exports.startChecker = startChecker;
var _global = require("../static/global");
var _utils = require("../../utils");
var _interop = require("#koalaui/interop");
var _private = require("./private");
var _nodeTests = require("../factory/nodeTests");
var _Es2pandaEnums = require("../../generated/Es2pandaEnums");
var _generated = require("../../generated");
var _Program = require("../peers/Program");
var _classByPeer = require("../class-by-peer");
var _SourcePosition = require("../peers/SourcePosition");
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
function proceedToState(state, context, forceDtsEmit = false) {
  console.log('[TS WRAPPER] PROCEED TO STATE: ', (0, _utils.getEnumName)(_Es2pandaEnums.Es2pandaContextState, state));
  if (_global.global.es2panda._ContextState(context) === _Es2pandaEnums.Es2pandaContextState.ES2PANDA_STATE_ERROR) {
    (0, _classByPeer.clearNodeCache)();
    processErrorState(state, context, forceDtsEmit);
  }
  if (state <= _global.global.es2panda._ContextState(context)) {
    console.log('[TS WRAPPER] PROCEED TO STATE: SKIPPING');
    return;
  }
  (0, _classByPeer.clearNodeCache)();
  _global.global.es2panda._ProceedToState(context, state);
  processErrorState(state, context, forceDtsEmit);
}
function processErrorState(state, context, forceDtsEmit = false) {
  try {
    if (_global.global.es2panda._ContextState(context) === _Es2pandaEnums.Es2pandaContextState.ES2PANDA_STATE_ERROR && !forceDtsEmit) {
      const errorMessage = (0, _interop.withStringResult)(_global.global.es2panda._ContextErrorMessage(context));
      if (errorMessage === undefined) {
        (0, _utils.throwError)(`Could not get ContextErrorMessage`);
      }
      const allErrorMessages = (0, _interop.withStringResult)(_global.global.es2panda._GetAllErrorMessages(context));
      if (allErrorMessages === undefined) {
        (0, _utils.throwError)(`Could not get AllErrorMessages`);
      }
      (0, _utils.throwError)([`Failed to proceed to ${_Es2pandaEnums.Es2pandaContextState[state]}`, errorMessage, allErrorMessages].join(`\n`));
    }
  } catch (e) {
    _global.global.es2panda._DestroyContext(context);
    throw e;
  }
}
function nodeType(node) {
  return _global.global.generatedEs2panda._AstNodeTypeConst(_global.global.context, (0, _private.passNode)(node));
}
function startChecker() {
  return _global.global.es2panda._CheckerStartChecker(_global.global.context);
}
function recheckSubtree(node) {
  _global.global.es2panda._AstNodeRecheck(_global.global.context, node.peer);
}
function rebindSubtree(node) {
  _global.global.es2panda._AstNodeRebind(_global.global.context, node.peer);
}
function getDecl(node) {
  if ((0, _nodeTests.isMemberExpression)(node)) {
    return getDeclFromArrayOrObjectMember(node);
  }
  if ((0, _generated.isObjectExpression)(node)) {
    return getPeerObjectDecl((0, _private.passNode)(node));
  }
  const decl = getPeerDecl((0, _private.passNode)(node));
  if (!!decl) {
    return decl;
  }
  if (!!node.parent && (0, _generated.isProperty)(node.parent)) {
    return getDeclFromProperty(node.parent);
  }
  return undefined;
}
function getDeclFromProperty(node) {
  if (!node.key) {
    return undefined;
  }
  if (!!node.parent && !(0, _generated.isObjectExpression)(node.parent)) {
    return getPeerDecl((0, _private.passNode)(node.key));
  }
  return getDeclFromObjectExpressionProperty(node);
}
function getDeclFromObjectExpressionProperty(node) {
  var _this = this;
  const declNode = getPeerObjectDecl((0, _private.passNode)(node.parent));
  if (!declNode || !node.key || !(0, _generated.isIdentifier)(node.key)) {
    return undefined;
  }
  let body = [];
  if ((0, _generated.isClassDefinition)(declNode)) {
    body = declNode.body;
  } else if ((0, _generated.isTSInterfaceDeclaration)(declNode)) {
    body = declNode.body?.body ?? [];
  }
  return body.find(function (statement) {
    _newArrowCheck(this, _this);
    return (0, _nodeTests.isMethodDefinition)(statement) && statement.kind === _Es2pandaEnums.Es2pandaMethodDefinitionKind.METHOD_DEFINITION_KIND_GET && !!statement.name && !!node.key && (0, _generated.isIdentifier)(node.key) && statement.name.name === node.key.name;
  }.bind(this));
}
function getDeclFromArrayOrObjectMember(node) {
  if ((0, _nodeTests.isNumberLiteral)(node.property)) {
    return getDecl(node.object);
  }
  return getDecl(node.property);
}
function getPeerDecl(peer) {
  const decl = _global.global.es2panda._DeclarationFromIdentifier(_global.global.context, peer);
  if (decl === _interop.nullptr) {
    return undefined;
  }
  return (0, _private.unpackNonNullableNode)(decl);
}
function getPeerObjectDecl(peer) {
  const decl = _global.global.es2panda._ClassVariableDeclaration(_global.global.context, peer);
  if (decl === _interop.nullptr) {
    return undefined;
  }
  return (0, _private.unpackNonNullableNode)(decl);
}
function getAnnotations(node) {
  if (!(0, _nodeTests.isFunctionDeclaration)(node) && !(0, _generated.isScriptFunction)(node) && !(0, _generated.isClassDefinition)(node)) {
    (0, _utils.throwError)('for now annotations allowed only for: functionDeclaration, scriptFunction, classDefinition');
  }
  return (0, _private.unpackNodeArray)(_global.global.es2panda._AnnotationAllowedAnnotations(_global.global.context, node.peer, _interop.nullptr));
}
function getOriginalNode(node) {
  if (node === undefined) {
    // TODO: fix this
    (0, _utils.throwError)('there is no arkts pair of ts node (unable to getOriginalNode)');
  }
  if (node.originalPeer === _interop.nullptr) {
    return node;
  }
  return (0, _private.unpackNonNullableNode)(node.originalPeer);
}
function getFileName() {
  return _global.global.filePath;
}
function classDefinitionSetFromStructModifier(node) {
  _global.global.es2panda._ClassDefinitionSetFromStructModifier(_global.global.context, node.peer);
}
function classDefinitionIsFromStructConst(node) {
  return _global.global.es2panda._ClassDefinitionIsFromStructConst(_global.global.context, node.peer);
}
function ImportSpecifierSetRemovable(node) {
  _global.global.es2panda._ImportSpecifierSetRemovable(_global.global.context, node.peer);
}
function ImportSpecifierIsRemovableConst(node) {
  return _global.global.es2panda._ImportSpecifierIsRemovableConst(_global.global.context, node.peer);
}

// TODO: It seems like Definition overrides AstNode  modifiers
// with it's own modifiers which is completely unrelated set of flags.
// Use this function if you need
// the language level modifiers: public, declare, export, etc.
function classDefinitionFlags(node) {
  return _global.global.generatedEs2panda._AstNodeModifiers(_global.global.context, node.peer);
}

// TODO: Import statements should be inserted to the statements
function importDeclarationInsert(node, program) {
  _global.global.es2panda._InsertETSImportDeclarationAndParse(_global.global.context, program.peer, node.peer);
}
function getProgramFromAstNode(node) {
  return new _Program.Program(_global.global.es2panda._AstNodeProgram(_global.global.context, node.peer));
}
function hasModifierFlag(node, flag) {
  if (!node) return false;
  let modifiers;
  if ((0, _generated.isClassDefinition)(node)) {
    modifiers = classDefinitionFlags(node);
  } else {
    modifiers = node.modifiers;
  }
  return (modifiers & flag) === flag;
}

// TODO: ClassProperty's optional flag is set by AstNode's modifiers flags.
function classPropertySetOptional(node, value) {
  if (value) {
    node.modifiers |= _Es2pandaEnums.Es2pandaModifierFlags.MODIFIER_FLAGS_OPTIONAL;
  } else {
    node.modifiers &= _Es2pandaEnums.Es2pandaModifierFlags.MODIFIER_FLAGS_OPTIONAL;
  }
  return node;
}
function modifiersToString(modifiers) {
  var _this2 = this;
  return Object.values(_Es2pandaEnums.Es2pandaModifierFlags).filter(_utils.isNumber).map(function (it) {
    _newArrowCheck(this, _this2);
    console.log(it.valueOf(), _Es2pandaEnums.Es2pandaModifierFlags[it], modifiers.valueOf() & it);
    return (modifiers.valueOf() & it) === it ? _Es2pandaEnums.Es2pandaModifierFlags[it] : '';
  }.bind(this)).join(' ');
}
function destroyConfig(config) {
  _global.global.es2panda._DestroyConfig(config);
  _global.global.resetConfig();
}
function setAllParents(ast) {
  _global.global.es2panda._AstNodeUpdateAll(_global.global.context, ast.peer);
}
function generateTsDeclarationsFromContext(outputDeclEts, outputEts, exportAll, isolated) {
  return _global.global.es2panda._GenerateTsDeclarationsFromContext(_global.global.context, (0, _private.passString)(outputDeclEts), (0, _private.passString)(outputEts), exportAll, isolated);
}
function generateStaticDeclarationsFromContext(outputPath) {
  return _global.global.es2panda._GenerateStaticDeclarationsFromContext(_global.global.context, (0, _private.passString)(outputPath));
}
function isDefaultAccessModifierClassProperty(property) {
  return _global.global.es2panda._ClassPropertyIsDefaultAccessModifierConst(_global.global.context, property.peer);
}
function getStartPosition(node) {
  return new _SourcePosition.SourcePosition(_global.global.es2panda._AstNodeStartConst(_global.global.context, node.peer));
}
function getEndPosition(node) {
  return new _SourcePosition.SourcePosition(_global.global.es2panda._AstNodeEndConst(_global.global.context, node.peer));
}
function MemInitialize() {
  _global.global.es2panda._MemInitialize();
}
function MemFinalize() {
  _global.global.es2panda._MemFinalize();
}
function CreateGlobalContext(config, externalFileList, fileNum, lspUsage) {
  return _global.global.es2panda._CreateGlobalContext(config, (0, _private.passStringArray)(externalFileList), fileNum, lspUsage);
}
function DestroyGlobalContext(context) {
  _global.global.es2panda._DestroyGlobalContext(context);
}
function CreateCacheContextFromFile(configPtr, filename, globalContext, isExternal) {
  return _global.global.es2panda._CreateCacheContextFromFile(configPtr, (0, _private.passString)(filename), globalContext, isExternal);
}