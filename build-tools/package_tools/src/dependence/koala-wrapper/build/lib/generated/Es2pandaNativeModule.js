"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Es2pandaNativeModule = void 0;
/*
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

// TODO: this type should be in interop

class Es2pandaNativeModule {
  _CreateLabelledStatement(context, ident, body) {
    throw new Error("'CreateLabelledStatement was not overloaded by native module initialization");
  }
  _UpdateLabelledStatement(context, original, ident, body) {
    throw new Error("'UpdateLabelledStatement was not overloaded by native module initialization");
  }
  _LabelledStatementBodyConst(context, receiver) {
    throw new Error("'LabelledStatementBodyConst was not overloaded by native module initialization");
  }
  _LabelledStatementIdentConst(context, receiver) {
    throw new Error("'LabelledStatementIdentConst was not overloaded by native module initialization");
  }
  _LabelledStatementIdent(context, receiver) {
    throw new Error("'LabelledStatementIdent was not overloaded by native module initialization");
  }
  _LabelledStatementGetReferencedStatementConst(context, receiver) {
    throw new Error("'LabelledStatementGetReferencedStatementConst was not overloaded by native module initialization");
  }
  _CreateThrowStatement(context, argument) {
    throw new Error("'CreateThrowStatement was not overloaded by native module initialization");
  }
  _UpdateThrowStatement(context, original, argument) {
    throw new Error("'UpdateThrowStatement was not overloaded by native module initialization");
  }
  _ThrowStatementArgumentConst(context, receiver) {
    throw new Error("'ThrowStatementArgumentConst was not overloaded by native module initialization");
  }
  _CreateClassProperty(context, key, value, typeAnnotation, modifiers, isComputed) {
    throw new Error("'CreateClassProperty was not overloaded by native module initialization");
  }
  _UpdateClassProperty(context, original, key, value, typeAnnotation, modifiers, isComputed) {
    throw new Error("'UpdateClassProperty was not overloaded by native module initialization");
  }
  _ClassPropertyTypeAnnotationConst(context, receiver) {
    throw new Error("'ClassPropertyTypeAnnotationConst was not overloaded by native module initialization");
  }
  _ClassPropertySetTypeAnnotation(context, receiver, typeAnnotation) {
    throw new Error("'ClassPropertySetTypeAnnotation was not overloaded by native module initialization");
  }
  _ClassPropertyAnnotations(context, receiver) {
    throw new Error("'ClassPropertyAnnotations was not overloaded by native module initialization");
  }
  _ClassPropertyAnnotationsConst(context, receiver) {
    throw new Error("'ClassPropertyAnnotationsConst was not overloaded by native module initialization");
  }
  _ClassPropertySetAnnotations(context, receiver, annotations, annotationsSequenceLength) {
    throw new Error("'ClassPropertySetAnnotations was not overloaded by native module initialization");
  }
  _CreateTSVoidKeyword(context) {
    throw new Error("'CreateTSVoidKeyword was not overloaded by native module initialization");
  }
  _UpdateTSVoidKeyword(context, original) {
    throw new Error("'UpdateTSVoidKeyword was not overloaded by native module initialization");
  }
  _CreateETSFunctionTypeIr(context, signature, funcFlags) {
    throw new Error("'CreateETSFunctionTypeIr was not overloaded by native module initialization");
  }
  _UpdateETSFunctionTypeIr(context, original, signature, funcFlags) {
    throw new Error("'UpdateETSFunctionTypeIr was not overloaded by native module initialization");
  }
  _ETSFunctionTypeIrTypeParamsConst(context, receiver) {
    throw new Error("'ETSFunctionTypeIrTypeParamsConst was not overloaded by native module initialization");
  }
  _ETSFunctionTypeIrTypeParams(context, receiver) {
    throw new Error("'ETSFunctionTypeIrTypeParams was not overloaded by native module initialization");
  }
  _ETSFunctionTypeIrParamsConst(context, receiver) {
    throw new Error("'ETSFunctionTypeIrParamsConst was not overloaded by native module initialization");
  }
  _ETSFunctionTypeIrReturnTypeConst(context, receiver) {
    throw new Error("'ETSFunctionTypeIrReturnTypeConst was not overloaded by native module initialization");
  }
  _ETSFunctionTypeIrReturnType(context, receiver) {
    throw new Error("'ETSFunctionTypeIrReturnType was not overloaded by native module initialization");
  }
  _ETSFunctionTypeIrFunctionalInterface(context, receiver) {
    throw new Error("'ETSFunctionTypeIrFunctionalInterface was not overloaded by native module initialization");
  }
  _ETSFunctionTypeIrFunctionalInterfaceConst(context, receiver) {
    throw new Error("'ETSFunctionTypeIrFunctionalInterfaceConst was not overloaded by native module initialization");
  }
  _ETSFunctionTypeIrSetFunctionalInterface(context, receiver, functionalInterface) {
    throw new Error("'ETSFunctionTypeIrSetFunctionalInterface was not overloaded by native module initialization");
  }
  _ETSFunctionTypeIrFlags(context, receiver) {
    throw new Error("'ETSFunctionTypeIrFlags was not overloaded by native module initialization");
  }
  _ETSFunctionTypeIrIsThrowingConst(context, receiver) {
    throw new Error("'ETSFunctionTypeIrIsThrowingConst was not overloaded by native module initialization");
  }
  _ETSFunctionTypeIrIsRethrowingConst(context, receiver) {
    throw new Error("'ETSFunctionTypeIrIsRethrowingConst was not overloaded by native module initialization");
  }
  _ETSFunctionTypeIrIsExtensionFunctionConst(context, receiver) {
    throw new Error("'ETSFunctionTypeIrIsExtensionFunctionConst was not overloaded by native module initialization");
  }
  _CreateTSTypeOperator(context, type, operatorType) {
    throw new Error("'CreateTSTypeOperator was not overloaded by native module initialization");
  }
  _UpdateTSTypeOperator(context, original, type, operatorType) {
    throw new Error("'UpdateTSTypeOperator was not overloaded by native module initialization");
  }
  _TSTypeOperatorTypeConst(context, receiver) {
    throw new Error("'TSTypeOperatorTypeConst was not overloaded by native module initialization");
  }
  _TSTypeOperatorIsReadonlyConst(context, receiver) {
    throw new Error("'TSTypeOperatorIsReadonlyConst was not overloaded by native module initialization");
  }
  _TSTypeOperatorIsKeyofConst(context, receiver) {
    throw new Error("'TSTypeOperatorIsKeyofConst was not overloaded by native module initialization");
  }
  _TSTypeOperatorIsUniqueConst(context, receiver) {
    throw new Error("'TSTypeOperatorIsUniqueConst was not overloaded by native module initialization");
  }
  _CreateIfStatement(context, test, consequent, alternate) {
    throw new Error("'CreateIfStatement was not overloaded by native module initialization");
  }
  _UpdateIfStatement(context, original, test, consequent, alternate) {
    throw new Error("'UpdateIfStatement was not overloaded by native module initialization");
  }
  _IfStatementTestConst(context, receiver) {
    throw new Error("'IfStatementTestConst was not overloaded by native module initialization");
  }
  _IfStatementTest(context, receiver) {
    throw new Error("'IfStatementTest was not overloaded by native module initialization");
  }
  _IfStatementConsequentConst(context, receiver) {
    throw new Error("'IfStatementConsequentConst was not overloaded by native module initialization");
  }
  _IfStatementConsequent(context, receiver) {
    throw new Error("'IfStatementConsequent was not overloaded by native module initialization");
  }
  _IfStatementAlternate(context, receiver) {
    throw new Error("'IfStatementAlternate was not overloaded by native module initialization");
  }
  _IfStatementAlternateConst(context, receiver) {
    throw new Error("'IfStatementAlternateConst was not overloaded by native module initialization");
  }
  _CreateTSConstructorType(context, signature, abstract) {
    throw new Error("'CreateTSConstructorType was not overloaded by native module initialization");
  }
  _UpdateTSConstructorType(context, original, signature, abstract) {
    throw new Error("'UpdateTSConstructorType was not overloaded by native module initialization");
  }
  _TSConstructorTypeTypeParamsConst(context, receiver) {
    throw new Error("'TSConstructorTypeTypeParamsConst was not overloaded by native module initialization");
  }
  _TSConstructorTypeTypeParams(context, receiver) {
    throw new Error("'TSConstructorTypeTypeParams was not overloaded by native module initialization");
  }
  _TSConstructorTypeParamsConst(context, receiver) {
    throw new Error("'TSConstructorTypeParamsConst was not overloaded by native module initialization");
  }
  _TSConstructorTypeReturnTypeConst(context, receiver) {
    throw new Error("'TSConstructorTypeReturnTypeConst was not overloaded by native module initialization");
  }
  _TSConstructorTypeReturnType(context, receiver) {
    throw new Error("'TSConstructorTypeReturnType was not overloaded by native module initialization");
  }
  _TSConstructorTypeAbstractConst(context, receiver) {
    throw new Error("'TSConstructorTypeAbstractConst was not overloaded by native module initialization");
  }
  _CreateDecorator(context, expr) {
    throw new Error("'CreateDecorator was not overloaded by native module initialization");
  }
  _UpdateDecorator(context, original, expr) {
    throw new Error("'UpdateDecorator was not overloaded by native module initialization");
  }
  _DecoratorExprConst(context, receiver) {
    throw new Error("'DecoratorExprConst was not overloaded by native module initialization");
  }
  _CreateTSEnumDeclaration(context, key, members, membersSequenceLength, isConst, isStatic, isDeclare) {
    throw new Error("'CreateTSEnumDeclaration was not overloaded by native module initialization");
  }
  _UpdateTSEnumDeclaration(context, original, key, members, membersSequenceLength, isConst, isStatic, isDeclare) {
    throw new Error("'UpdateTSEnumDeclaration was not overloaded by native module initialization");
  }
  _TSEnumDeclarationKeyConst(context, receiver) {
    throw new Error("'TSEnumDeclarationKeyConst was not overloaded by native module initialization");
  }
  _TSEnumDeclarationKey(context, receiver) {
    throw new Error("'TSEnumDeclarationKey was not overloaded by native module initialization");
  }
  _TSEnumDeclarationMembersConst(context, receiver) {
    throw new Error("'TSEnumDeclarationMembersConst was not overloaded by native module initialization");
  }
  _TSEnumDeclarationInternalNameConst(context, receiver) {
    throw new Error("'TSEnumDeclarationInternalNameConst was not overloaded by native module initialization");
  }
  _TSEnumDeclarationSetInternalName(context, receiver, internalName) {
    throw new Error("'TSEnumDeclarationSetInternalName was not overloaded by native module initialization");
  }
  _TSEnumDeclarationBoxedClassConst(context, receiver) {
    throw new Error("'TSEnumDeclarationBoxedClassConst was not overloaded by native module initialization");
  }
  _TSEnumDeclarationSetBoxedClass(context, receiver, wrapperClass) {
    throw new Error("'TSEnumDeclarationSetBoxedClass was not overloaded by native module initialization");
  }
  _TSEnumDeclarationIsConstConst(context, receiver) {
    throw new Error("'TSEnumDeclarationIsConstConst was not overloaded by native module initialization");
  }
  _TSEnumDeclarationDecoratorsConst(context, receiver) {
    throw new Error("'TSEnumDeclarationDecoratorsConst was not overloaded by native module initialization");
  }
  _CreateTSNeverKeyword(context) {
    throw new Error("'CreateTSNeverKeyword was not overloaded by native module initialization");
  }
  _UpdateTSNeverKeyword(context, original) {
    throw new Error("'UpdateTSNeverKeyword was not overloaded by native module initialization");
  }
  _CreateImportDefaultSpecifier(context, local) {
    throw new Error("'CreateImportDefaultSpecifier was not overloaded by native module initialization");
  }
  _UpdateImportDefaultSpecifier(context, original, local) {
    throw new Error("'UpdateImportDefaultSpecifier was not overloaded by native module initialization");
  }
  _ImportDefaultSpecifierLocalConst(context, receiver) {
    throw new Error("'ImportDefaultSpecifierLocalConst was not overloaded by native module initialization");
  }
  _ImportDefaultSpecifierLocal(context, receiver) {
    throw new Error("'ImportDefaultSpecifierLocal was not overloaded by native module initialization");
  }
  _CreateObjectExpression(context, nodeType, properties, propertiesSequenceLength, trailingComma) {
    throw new Error("'CreateObjectExpression was not overloaded by native module initialization");
  }
  _UpdateObjectExpression(context, original, nodeType, properties, propertiesSequenceLength, trailingComma) {
    throw new Error("'UpdateObjectExpression was not overloaded by native module initialization");
  }
  _ObjectExpressionPropertiesConst(context, receiver) {
    throw new Error("'ObjectExpressionPropertiesConst was not overloaded by native module initialization");
  }
  _ObjectExpressionIsDeclarationConst(context, receiver) {
    throw new Error("'ObjectExpressionIsDeclarationConst was not overloaded by native module initialization");
  }
  _ObjectExpressionIsOptionalConst(context, receiver) {
    throw new Error("'ObjectExpressionIsOptionalConst was not overloaded by native module initialization");
  }
  _ObjectExpressionDecoratorsConst(context, receiver) {
    throw new Error("'ObjectExpressionDecoratorsConst was not overloaded by native module initialization");
  }
  _ObjectExpressionValidateExpression(context, receiver) {
    throw new Error("'ObjectExpressionValidateExpression was not overloaded by native module initialization");
  }
  _ObjectExpressionConvertibleToObjectPattern(context, receiver) {
    throw new Error("'ObjectExpressionConvertibleToObjectPattern was not overloaded by native module initialization");
  }
  _ObjectExpressionSetDeclaration(context, receiver) {
    throw new Error("'ObjectExpressionSetDeclaration was not overloaded by native module initialization");
  }
  _ObjectExpressionSetOptional(context, receiver, optional_arg) {
    throw new Error("'ObjectExpressionSetOptional was not overloaded by native module initialization");
  }
  _ObjectExpressionTypeAnnotationConst(context, receiver) {
    throw new Error("'ObjectExpressionTypeAnnotationConst was not overloaded by native module initialization");
  }
  _ObjectExpressionSetTsTypeAnnotation(context, receiver, typeAnnotation) {
    throw new Error("'ObjectExpressionSetTsTypeAnnotation was not overloaded by native module initialization");
  }
  _CreateImportSpecifier(context, imported, local) {
    throw new Error("'CreateImportSpecifier was not overloaded by native module initialization");
  }
  _UpdateImportSpecifier(context, original, imported, local) {
    throw new Error("'UpdateImportSpecifier was not overloaded by native module initialization");
  }
  _ImportSpecifierImported(context, receiver) {
    throw new Error("'ImportSpecifierImported was not overloaded by native module initialization");
  }
  _ImportSpecifierImportedConst(context, receiver) {
    throw new Error("'ImportSpecifierImportedConst was not overloaded by native module initialization");
  }
  _ImportSpecifierLocal(context, receiver) {
    throw new Error("'ImportSpecifierLocal was not overloaded by native module initialization");
  }
  _ImportSpecifierLocalConst(context, receiver) {
    throw new Error("'ImportSpecifierLocalConst was not overloaded by native module initialization");
  }
  _CreateConditionalExpression(context, test, consequent, alternate) {
    throw new Error("'CreateConditionalExpression was not overloaded by native module initialization");
  }
  _UpdateConditionalExpression(context, original, test, consequent, alternate) {
    throw new Error("'UpdateConditionalExpression was not overloaded by native module initialization");
  }
  _ConditionalExpressionTestConst(context, receiver) {
    throw new Error("'ConditionalExpressionTestConst was not overloaded by native module initialization");
  }
  _ConditionalExpressionTest(context, receiver) {
    throw new Error("'ConditionalExpressionTest was not overloaded by native module initialization");
  }
  _ConditionalExpressionSetTest(context, receiver, expr) {
    throw new Error("'ConditionalExpressionSetTest was not overloaded by native module initialization");
  }
  _ConditionalExpressionConsequentConst(context, receiver) {
    throw new Error("'ConditionalExpressionConsequentConst was not overloaded by native module initialization");
  }
  _ConditionalExpressionConsequent(context, receiver) {
    throw new Error("'ConditionalExpressionConsequent was not overloaded by native module initialization");
  }
  _ConditionalExpressionSetConsequent(context, receiver, expr) {
    throw new Error("'ConditionalExpressionSetConsequent was not overloaded by native module initialization");
  }
  _ConditionalExpressionAlternateConst(context, receiver) {
    throw new Error("'ConditionalExpressionAlternateConst was not overloaded by native module initialization");
  }
  _ConditionalExpressionAlternate(context, receiver) {
    throw new Error("'ConditionalExpressionAlternate was not overloaded by native module initialization");
  }
  _ConditionalExpressionSetAlternate(context, receiver, expr) {
    throw new Error("'ConditionalExpressionSetAlternate was not overloaded by native module initialization");
  }
  _CreateCallExpression(context, callee, _arguments, _argumentsSequenceLength, typeParams, optional_arg, trailingComma) {
    throw new Error("'CreateCallExpression was not overloaded by native module initialization");
  }
  _CreateCallExpression1(context, other) {
    throw new Error("'CreateCallExpression1 was not overloaded by native module initialization");
  }
  _UpdateCallExpression1(context, original, other) {
    throw new Error("'UpdateCallExpression1 was not overloaded by native module initialization");
  }
  _CallExpressionCalleeConst(context, receiver) {
    throw new Error("'CallExpressionCalleeConst was not overloaded by native module initialization");
  }
  _CallExpressionCallee(context, receiver) {
    throw new Error("'CallExpressionCallee was not overloaded by native module initialization");
  }
  _CallExpressionSetCallee(context, receiver, callee) {
    throw new Error("'CallExpressionSetCallee was not overloaded by native module initialization");
  }
  _CallExpressionTypeParamsConst(context, receiver) {
    throw new Error("'CallExpressionTypeParamsConst was not overloaded by native module initialization");
  }
  _CallExpressionTypeParams(context, receiver) {
    throw new Error("'CallExpressionTypeParams was not overloaded by native module initialization");
  }
  _CallExpressionArgumentsConst(context, receiver) {
    throw new Error("'CallExpressionArgumentsConst was not overloaded by native module initialization");
  }
  _CallExpressionArguments(context, receiver) {
    throw new Error("'CallExpressionArguments was not overloaded by native module initialization");
  }
  _CallExpressionHasTrailingCommaConst(context, receiver) {
    throw new Error("'CallExpressionHasTrailingCommaConst was not overloaded by native module initialization");
  }
  _CallExpressionSetTypeParams(context, receiver, typeParams) {
    throw new Error("'CallExpressionSetTypeParams was not overloaded by native module initialization");
  }
  _CallExpressionSetTrailingBlock(context, receiver, block) {
    throw new Error("'CallExpressionSetTrailingBlock was not overloaded by native module initialization");
  }
  _CallExpressionIsExtensionAccessorCall(context, receiver) {
    throw new Error("'CallExpressionIsExtensionAccessorCall was not overloaded by native module initialization");
  }
  _CallExpressionTrailingBlockConst(context, receiver) {
    throw new Error("'CallExpressionTrailingBlockConst was not overloaded by native module initialization");
  }
  _CallExpressionSetIsTrailingBlockInNewLine(context, receiver, isNewLine) {
    throw new Error("'CallExpressionSetIsTrailingBlockInNewLine was not overloaded by native module initialization");
  }
  _CallExpressionIsTrailingBlockInNewLineConst(context, receiver) {
    throw new Error("'CallExpressionIsTrailingBlockInNewLineConst was not overloaded by native module initialization");
  }
  _CallExpressionIsETSConstructorCallConst(context, receiver) {
    throw new Error("'CallExpressionIsETSConstructorCallConst was not overloaded by native module initialization");
  }
  _CreateBigIntLiteral(context, src) {
    throw new Error("'CreateBigIntLiteral was not overloaded by native module initialization");
  }
  _UpdateBigIntLiteral(context, original, src) {
    throw new Error("'UpdateBigIntLiteral was not overloaded by native module initialization");
  }
  _BigIntLiteralStrConst(context, receiver) {
    throw new Error("'BigIntLiteralStrConst was not overloaded by native module initialization");
  }
  _ClassElementId(context, receiver) {
    throw new Error("'ClassElementId was not overloaded by native module initialization");
  }
  _ClassElementIdConst(context, receiver) {
    throw new Error("'ClassElementIdConst was not overloaded by native module initialization");
  }
  _ClassElementKey(context, receiver) {
    throw new Error("'ClassElementKey was not overloaded by native module initialization");
  }
  _ClassElementKeyConst(context, receiver) {
    throw new Error("'ClassElementKeyConst was not overloaded by native module initialization");
  }
  _ClassElementValue(context, receiver) {
    throw new Error("'ClassElementValue was not overloaded by native module initialization");
  }
  _ClassElementSetValue(context, receiver, value) {
    throw new Error("'ClassElementSetValue was not overloaded by native module initialization");
  }
  _ClassElementValueConst(context, receiver) {
    throw new Error("'ClassElementValueConst was not overloaded by native module initialization");
  }
  _ClassElementIsPrivateElementConst(context, receiver) {
    throw new Error("'ClassElementIsPrivateElementConst was not overloaded by native module initialization");
  }
  _ClassElementDecoratorsConst(context, receiver) {
    throw new Error("'ClassElementDecoratorsConst was not overloaded by native module initialization");
  }
  _ClassElementIsComputedConst(context, receiver) {
    throw new Error("'ClassElementIsComputedConst was not overloaded by native module initialization");
  }
  _ClassElementAddDecorator(context, receiver, decorator) {
    throw new Error("'ClassElementAddDecorator was not overloaded by native module initialization");
  }
  _ClassElementToPrivateFieldKindConst(context, receiver, isStatic) {
    throw new Error("'ClassElementToPrivateFieldKindConst was not overloaded by native module initialization");
  }
  _CreateTSImportType(context, param, typeParams, qualifier, isTypeof) {
    throw new Error("'CreateTSImportType was not overloaded by native module initialization");
  }
  _UpdateTSImportType(context, original, param, typeParams, qualifier, isTypeof) {
    throw new Error("'UpdateTSImportType was not overloaded by native module initialization");
  }
  _TSImportTypeParamConst(context, receiver) {
    throw new Error("'TSImportTypeParamConst was not overloaded by native module initialization");
  }
  _TSImportTypeTypeParamsConst(context, receiver) {
    throw new Error("'TSImportTypeTypeParamsConst was not overloaded by native module initialization");
  }
  _TSImportTypeQualifierConst(context, receiver) {
    throw new Error("'TSImportTypeQualifierConst was not overloaded by native module initialization");
  }
  _TSImportTypeIsTypeofConst(context, receiver) {
    throw new Error("'TSImportTypeIsTypeofConst was not overloaded by native module initialization");
  }
  _CreateTaggedTemplateExpression(context, tag, quasi, typeParams) {
    throw new Error("'CreateTaggedTemplateExpression was not overloaded by native module initialization");
  }
  _UpdateTaggedTemplateExpression(context, original, tag, quasi, typeParams) {
    throw new Error("'UpdateTaggedTemplateExpression was not overloaded by native module initialization");
  }
  _TaggedTemplateExpressionTagConst(context, receiver) {
    throw new Error("'TaggedTemplateExpressionTagConst was not overloaded by native module initialization");
  }
  _TaggedTemplateExpressionQuasiConst(context, receiver) {
    throw new Error("'TaggedTemplateExpressionQuasiConst was not overloaded by native module initialization");
  }
  _TaggedTemplateExpressionTypeParamsConst(context, receiver) {
    throw new Error("'TaggedTemplateExpressionTypeParamsConst was not overloaded by native module initialization");
  }
  _CreateFunctionDeclaration(context, func, annotations, annotationsSequenceLength, isAnonymous) {
    throw new Error("'CreateFunctionDeclaration was not overloaded by native module initialization");
  }
  _UpdateFunctionDeclaration(context, original, func, annotations, annotationsSequenceLength, isAnonymous) {
    throw new Error("'UpdateFunctionDeclaration was not overloaded by native module initialization");
  }
  _CreateFunctionDeclaration1(context, func, isAnonymous) {
    throw new Error("'CreateFunctionDeclaration1 was not overloaded by native module initialization");
  }
  _UpdateFunctionDeclaration1(context, original, func, isAnonymous) {
    throw new Error("'UpdateFunctionDeclaration1 was not overloaded by native module initialization");
  }
  _FunctionDeclarationFunction(context, receiver) {
    throw new Error("'FunctionDeclarationFunction was not overloaded by native module initialization");
  }
  _FunctionDeclarationIsAnonymousConst(context, receiver) {
    throw new Error("'FunctionDeclarationIsAnonymousConst was not overloaded by native module initialization");
  }
  _FunctionDeclarationFunctionConst(context, receiver) {
    throw new Error("'FunctionDeclarationFunctionConst was not overloaded by native module initialization");
  }
  _FunctionDeclarationAnnotations(context, receiver) {
    throw new Error("'FunctionDeclarationAnnotations was not overloaded by native module initialization");
  }
  _FunctionDeclarationAnnotationsConst(context, receiver) {
    throw new Error("'FunctionDeclarationAnnotationsConst was not overloaded by native module initialization");
  }
  _FunctionDeclarationSetAnnotations(context, receiver, annotations, annotationsSequenceLength) {
    throw new Error("'FunctionDeclarationSetAnnotations was not overloaded by native module initialization");
  }
  _CreateETSTypeReference(context, part) {
    throw new Error("'CreateETSTypeReference was not overloaded by native module initialization");
  }
  _UpdateETSTypeReference(context, original, part) {
    throw new Error("'UpdateETSTypeReference was not overloaded by native module initialization");
  }
  _ETSTypeReferencePart(context, receiver) {
    throw new Error("'ETSTypeReferencePart was not overloaded by native module initialization");
  }
  _ETSTypeReferencePartConst(context, receiver) {
    throw new Error("'ETSTypeReferencePartConst was not overloaded by native module initialization");
  }
  _ETSTypeReferenceBaseNameConst(context, receiver) {
    throw new Error("'ETSTypeReferenceBaseNameConst was not overloaded by native module initialization");
  }
  _CreateTSTypeReference(context, typeName, typeParams) {
    throw new Error("'CreateTSTypeReference was not overloaded by native module initialization");
  }
  _UpdateTSTypeReference(context, original, typeName, typeParams) {
    throw new Error("'UpdateTSTypeReference was not overloaded by native module initialization");
  }
  _TSTypeReferenceTypeParamsConst(context, receiver) {
    throw new Error("'TSTypeReferenceTypeParamsConst was not overloaded by native module initialization");
  }
  _TSTypeReferenceTypeNameConst(context, receiver) {
    throw new Error("'TSTypeReferenceTypeNameConst was not overloaded by native module initialization");
  }
  _TSTypeReferenceBaseNameConst(context, receiver) {
    throw new Error("'TSTypeReferenceBaseNameConst was not overloaded by native module initialization");
  }
  _CreateImportSource(context, source, resolvedSource, hasDecl) {
    throw new Error("'CreateImportSource was not overloaded by native module initialization");
  }
  _ImportSourceSourceConst(context, receiver) {
    throw new Error("'ImportSourceSourceConst was not overloaded by native module initialization");
  }
  _ImportSourceSource(context, receiver) {
    throw new Error("'ImportSourceSource was not overloaded by native module initialization");
  }
  _ImportSourceResolvedSourceConst(context, receiver) {
    throw new Error("'ImportSourceResolvedSourceConst was not overloaded by native module initialization");
  }
  _ImportSourceResolvedSource(context, receiver) {
    throw new Error("'ImportSourceResolvedSource was not overloaded by native module initialization");
  }
  _ImportSourceHasDeclConst(context, receiver) {
    throw new Error("'ImportSourceHasDeclConst was not overloaded by native module initialization");
  }
  _CreateNamedType(context, name) {
    throw new Error("'CreateNamedType was not overloaded by native module initialization");
  }
  _UpdateNamedType(context, original, name) {
    throw new Error("'UpdateNamedType was not overloaded by native module initialization");
  }
  _NamedTypeNameConst(context, receiver) {
    throw new Error("'NamedTypeNameConst was not overloaded by native module initialization");
  }
  _NamedTypeTypeParamsConst(context, receiver) {
    throw new Error("'NamedTypeTypeParamsConst was not overloaded by native module initialization");
  }
  _NamedTypeIsNullableConst(context, receiver) {
    throw new Error("'NamedTypeIsNullableConst was not overloaded by native module initialization");
  }
  _NamedTypeSetNullable(context, receiver, nullable) {
    throw new Error("'NamedTypeSetNullable was not overloaded by native module initialization");
  }
  _NamedTypeSetNext(context, receiver, next) {
    throw new Error("'NamedTypeSetNext was not overloaded by native module initialization");
  }
  _NamedTypeSetTypeParams(context, receiver, typeParams) {
    throw new Error("'NamedTypeSetTypeParams was not overloaded by native module initialization");
  }
  _NumberLiteralStrConst(context, receiver) {
    throw new Error("'NumberLiteralStrConst was not overloaded by native module initialization");
  }
  _CreateTSFunctionType(context, signature) {
    throw new Error("'CreateTSFunctionType was not overloaded by native module initialization");
  }
  _UpdateTSFunctionType(context, original, signature) {
    throw new Error("'UpdateTSFunctionType was not overloaded by native module initialization");
  }
  _TSFunctionTypeTypeParamsConst(context, receiver) {
    throw new Error("'TSFunctionTypeTypeParamsConst was not overloaded by native module initialization");
  }
  _TSFunctionTypeTypeParams(context, receiver) {
    throw new Error("'TSFunctionTypeTypeParams was not overloaded by native module initialization");
  }
  _TSFunctionTypeParamsConst(context, receiver) {
    throw new Error("'TSFunctionTypeParamsConst was not overloaded by native module initialization");
  }
  _TSFunctionTypeReturnTypeConst(context, receiver) {
    throw new Error("'TSFunctionTypeReturnTypeConst was not overloaded by native module initialization");
  }
  _TSFunctionTypeReturnType(context, receiver) {
    throw new Error("'TSFunctionTypeReturnType was not overloaded by native module initialization");
  }
  _TSFunctionTypeSetNullable(context, receiver, nullable) {
    throw new Error("'TSFunctionTypeSetNullable was not overloaded by native module initialization");
  }
  _CreateTemplateElement(context) {
    throw new Error("'CreateTemplateElement was not overloaded by native module initialization");
  }
  _UpdateTemplateElement(context, original) {
    throw new Error("'UpdateTemplateElement was not overloaded by native module initialization");
  }
  _CreateTemplateElement1(context, raw, cooked) {
    throw new Error("'CreateTemplateElement1 was not overloaded by native module initialization");
  }
  _UpdateTemplateElement1(context, original, raw, cooked) {
    throw new Error("'UpdateTemplateElement1 was not overloaded by native module initialization");
  }
  _TemplateElementRawConst(context, receiver) {
    throw new Error("'TemplateElementRawConst was not overloaded by native module initialization");
  }
  _TemplateElementCookedConst(context, receiver) {
    throw new Error("'TemplateElementCookedConst was not overloaded by native module initialization");
  }
  _CreateTSInterfaceDeclaration(context, _extends, _extendsSequenceLength, id, typeParams, body, isStatic, isExternal) {
    throw new Error("'CreateTSInterfaceDeclaration was not overloaded by native module initialization");
  }
  _UpdateTSInterfaceDeclaration(context, original, _extends, _extendsSequenceLength, id, typeParams, body, isStatic, isExternal) {
    throw new Error("'UpdateTSInterfaceDeclaration was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationBody(context, receiver) {
    throw new Error("'TSInterfaceDeclarationBody was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationBodyConst(context, receiver) {
    throw new Error("'TSInterfaceDeclarationBodyConst was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationId(context, receiver) {
    throw new Error("'TSInterfaceDeclarationId was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationIdConst(context, receiver) {
    throw new Error("'TSInterfaceDeclarationIdConst was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationInternalNameConst(context, receiver) {
    throw new Error("'TSInterfaceDeclarationInternalNameConst was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationSetInternalName(context, receiver, internalName) {
    throw new Error("'TSInterfaceDeclarationSetInternalName was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationIsStaticConst(context, receiver) {
    throw new Error("'TSInterfaceDeclarationIsStaticConst was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationIsFromExternalConst(context, receiver) {
    throw new Error("'TSInterfaceDeclarationIsFromExternalConst was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationTypeParamsConst(context, receiver) {
    throw new Error("'TSInterfaceDeclarationTypeParamsConst was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationTypeParams(context, receiver) {
    throw new Error("'TSInterfaceDeclarationTypeParams was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationExtends(context, receiver) {
    throw new Error("'TSInterfaceDeclarationExtends was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationExtendsConst(context, receiver) {
    throw new Error("'TSInterfaceDeclarationExtendsConst was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationDecoratorsConst(context, receiver) {
    throw new Error("'TSInterfaceDeclarationDecoratorsConst was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationGetAnonClass(context, receiver) {
    throw new Error("'TSInterfaceDeclarationGetAnonClass was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationGetAnonClassConst(context, receiver) {
    throw new Error("'TSInterfaceDeclarationGetAnonClassConst was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationSetAnonClass(context, receiver, anonClass) {
    throw new Error("'TSInterfaceDeclarationSetAnonClass was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationAnnotations(context, receiver) {
    throw new Error("'TSInterfaceDeclarationAnnotations was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationAnnotationsConst(context, receiver) {
    throw new Error("'TSInterfaceDeclarationAnnotationsConst was not overloaded by native module initialization");
  }
  _TSInterfaceDeclarationSetAnnotations(context, receiver, annotations, annotationsSequenceLength) {
    throw new Error("'TSInterfaceDeclarationSetAnnotations was not overloaded by native module initialization");
  }
  _CreateVariableDeclaration(context, kind, declarators, declaratorsSequenceLength) {
    throw new Error("'CreateVariableDeclaration was not overloaded by native module initialization");
  }
  _UpdateVariableDeclaration(context, original, kind, declarators, declaratorsSequenceLength) {
    throw new Error("'UpdateVariableDeclaration was not overloaded by native module initialization");
  }
  _VariableDeclarationDeclaratorsConst(context, receiver) {
    throw new Error("'VariableDeclarationDeclaratorsConst was not overloaded by native module initialization");
  }
  _VariableDeclarationKindConst(context, receiver) {
    throw new Error("'VariableDeclarationKindConst was not overloaded by native module initialization");
  }
  _VariableDeclarationDecoratorsConst(context, receiver) {
    throw new Error("'VariableDeclarationDecoratorsConst was not overloaded by native module initialization");
  }
  _VariableDeclarationGetDeclaratorByNameConst(context, receiver, name) {
    throw new Error("'VariableDeclarationGetDeclaratorByNameConst was not overloaded by native module initialization");
  }
  _VariableDeclarationAnnotations(context, receiver) {
    throw new Error("'VariableDeclarationAnnotations was not overloaded by native module initialization");
  }
  _VariableDeclarationAnnotationsConst(context, receiver) {
    throw new Error("'VariableDeclarationAnnotationsConst was not overloaded by native module initialization");
  }
  _VariableDeclarationSetAnnotations(context, receiver, annotations, annotationsSequenceLength) {
    throw new Error("'VariableDeclarationSetAnnotations was not overloaded by native module initialization");
  }
  _CreateUndefinedLiteral(context) {
    throw new Error("'CreateUndefinedLiteral was not overloaded by native module initialization");
  }
  _UpdateUndefinedLiteral(context, original) {
    throw new Error("'UpdateUndefinedLiteral was not overloaded by native module initialization");
  }
  _CreateMemberExpression(context, object_arg, property, kind, computed, optional_arg) {
    throw new Error("'CreateMemberExpression was not overloaded by native module initialization");
  }
  _UpdateMemberExpression(context, original, object_arg, property, kind, computed, optional_arg) {
    throw new Error("'UpdateMemberExpression was not overloaded by native module initialization");
  }
  _MemberExpressionObject(context, receiver) {
    throw new Error("'MemberExpressionObject was not overloaded by native module initialization");
  }
  _MemberExpressionObjectConst(context, receiver) {
    throw new Error("'MemberExpressionObjectConst was not overloaded by native module initialization");
  }
  _MemberExpressionSetObject(context, receiver, object_arg) {
    throw new Error("'MemberExpressionSetObject was not overloaded by native module initialization");
  }
  _MemberExpressionSetProperty(context, receiver, prop) {
    throw new Error("'MemberExpressionSetProperty was not overloaded by native module initialization");
  }
  _MemberExpressionProperty(context, receiver) {
    throw new Error("'MemberExpressionProperty was not overloaded by native module initialization");
  }
  _MemberExpressionPropertyConst(context, receiver) {
    throw new Error("'MemberExpressionPropertyConst was not overloaded by native module initialization");
  }
  _MemberExpressionIsComputedConst(context, receiver) {
    throw new Error("'MemberExpressionIsComputedConst was not overloaded by native module initialization");
  }
  _MemberExpressionKindConst(context, receiver) {
    throw new Error("'MemberExpressionKindConst was not overloaded by native module initialization");
  }
  _MemberExpressionAddMemberKind(context, receiver, kind) {
    throw new Error("'MemberExpressionAddMemberKind was not overloaded by native module initialization");
  }
  _MemberExpressionHasMemberKindConst(context, receiver, kind) {
    throw new Error("'MemberExpressionHasMemberKindConst was not overloaded by native module initialization");
  }
  _MemberExpressionRemoveMemberKind(context, receiver, kind) {
    throw new Error("'MemberExpressionRemoveMemberKind was not overloaded by native module initialization");
  }
  _MemberExpressionIsIgnoreBoxConst(context, receiver) {
    throw new Error("'MemberExpressionIsIgnoreBoxConst was not overloaded by native module initialization");
  }
  _MemberExpressionSetIgnoreBox(context, receiver) {
    throw new Error("'MemberExpressionSetIgnoreBox was not overloaded by native module initialization");
  }
  _MemberExpressionIsPrivateReferenceConst(context, receiver) {
    throw new Error("'MemberExpressionIsPrivateReferenceConst was not overloaded by native module initialization");
  }
  _CreateTSClassImplements(context, expression, typeParameters) {
    throw new Error("'CreateTSClassImplements was not overloaded by native module initialization");
  }
  _UpdateTSClassImplements(context, original, expression, typeParameters) {
    throw new Error("'UpdateTSClassImplements was not overloaded by native module initialization");
  }
  _CreateTSClassImplements1(context, expression) {
    throw new Error("'CreateTSClassImplements1 was not overloaded by native module initialization");
  }
  _UpdateTSClassImplements1(context, original, expression) {
    throw new Error("'UpdateTSClassImplements1 was not overloaded by native module initialization");
  }
  _TSClassImplementsExpr(context, receiver) {
    throw new Error("'TSClassImplementsExpr was not overloaded by native module initialization");
  }
  _TSClassImplementsExprConst(context, receiver) {
    throw new Error("'TSClassImplementsExprConst was not overloaded by native module initialization");
  }
  _TSClassImplementsTypeParametersConst(context, receiver) {
    throw new Error("'TSClassImplementsTypeParametersConst was not overloaded by native module initialization");
  }
  _CreateTSObjectKeyword(context) {
    throw new Error("'CreateTSObjectKeyword was not overloaded by native module initialization");
  }
  _UpdateTSObjectKeyword(context, original) {
    throw new Error("'UpdateTSObjectKeyword was not overloaded by native module initialization");
  }
  _CreateETSUnionTypeIr(context, types, typesSequenceLength) {
    throw new Error("'CreateETSUnionTypeIr was not overloaded by native module initialization");
  }
  _UpdateETSUnionTypeIr(context, original, types, typesSequenceLength) {
    throw new Error("'UpdateETSUnionTypeIr was not overloaded by native module initialization");
  }
  _ETSUnionTypeIrTypesConst(context, receiver) {
    throw new Error("'ETSUnionTypeIrTypesConst was not overloaded by native module initialization");
  }
  _CreateTSPropertySignature(context, key, typeAnnotation, computed, optional_arg, readonly_arg) {
    throw new Error("'CreateTSPropertySignature was not overloaded by native module initialization");
  }
  _UpdateTSPropertySignature(context, original, key, typeAnnotation, computed, optional_arg, readonly_arg) {
    throw new Error("'UpdateTSPropertySignature was not overloaded by native module initialization");
  }
  _TSPropertySignatureKeyConst(context, receiver) {
    throw new Error("'TSPropertySignatureKeyConst was not overloaded by native module initialization");
  }
  _TSPropertySignatureKey(context, receiver) {
    throw new Error("'TSPropertySignatureKey was not overloaded by native module initialization");
  }
  _TSPropertySignatureComputedConst(context, receiver) {
    throw new Error("'TSPropertySignatureComputedConst was not overloaded by native module initialization");
  }
  _TSPropertySignatureOptionalConst(context, receiver) {
    throw new Error("'TSPropertySignatureOptionalConst was not overloaded by native module initialization");
  }
  _TSPropertySignatureReadonlyConst(context, receiver) {
    throw new Error("'TSPropertySignatureReadonlyConst was not overloaded by native module initialization");
  }
  _TSPropertySignatureTypeAnnotationConst(context, receiver) {
    throw new Error("'TSPropertySignatureTypeAnnotationConst was not overloaded by native module initialization");
  }
  _TSPropertySignatureSetTsTypeAnnotation(context, receiver, typeAnnotation) {
    throw new Error("'TSPropertySignatureSetTsTypeAnnotation was not overloaded by native module initialization");
  }
  _CreateTSConditionalType(context, checkType, extendsType, trueType, falseType) {
    throw new Error("'CreateTSConditionalType was not overloaded by native module initialization");
  }
  _UpdateTSConditionalType(context, original, checkType, extendsType, trueType, falseType) {
    throw new Error("'UpdateTSConditionalType was not overloaded by native module initialization");
  }
  _TSConditionalTypeCheckTypeConst(context, receiver) {
    throw new Error("'TSConditionalTypeCheckTypeConst was not overloaded by native module initialization");
  }
  _TSConditionalTypeExtendsTypeConst(context, receiver) {
    throw new Error("'TSConditionalTypeExtendsTypeConst was not overloaded by native module initialization");
  }
  _TSConditionalTypeTrueTypeConst(context, receiver) {
    throw new Error("'TSConditionalTypeTrueTypeConst was not overloaded by native module initialization");
  }
  _TSConditionalTypeFalseTypeConst(context, receiver) {
    throw new Error("'TSConditionalTypeFalseTypeConst was not overloaded by native module initialization");
  }
  _CreateTSLiteralType(context, literal) {
    throw new Error("'CreateTSLiteralType was not overloaded by native module initialization");
  }
  _UpdateTSLiteralType(context, original, literal) {
    throw new Error("'UpdateTSLiteralType was not overloaded by native module initialization");
  }
  _TSLiteralTypeLiteralConst(context, receiver) {
    throw new Error("'TSLiteralTypeLiteralConst was not overloaded by native module initialization");
  }
  _CreateTSTypeAliasDeclaration(context, id, typeParams, typeAnnotation) {
    throw new Error("'CreateTSTypeAliasDeclaration was not overloaded by native module initialization");
  }
  _UpdateTSTypeAliasDeclaration(context, original, id, typeParams, typeAnnotation) {
    throw new Error("'UpdateTSTypeAliasDeclaration was not overloaded by native module initialization");
  }
  _CreateTSTypeAliasDeclaration1(context, id) {
    throw new Error("'CreateTSTypeAliasDeclaration1 was not overloaded by native module initialization");
  }
  _UpdateTSTypeAliasDeclaration1(context, original, id) {
    throw new Error("'UpdateTSTypeAliasDeclaration1 was not overloaded by native module initialization");
  }
  _TSTypeAliasDeclarationId(context, receiver) {
    throw new Error("'TSTypeAliasDeclarationId was not overloaded by native module initialization");
  }
  _TSTypeAliasDeclarationIdConst(context, receiver) {
    throw new Error("'TSTypeAliasDeclarationIdConst was not overloaded by native module initialization");
  }
  _TSTypeAliasDeclarationTypeParamsConst(context, receiver) {
    throw new Error("'TSTypeAliasDeclarationTypeParamsConst was not overloaded by native module initialization");
  }
  _TSTypeAliasDeclarationDecoratorsConst(context, receiver) {
    throw new Error("'TSTypeAliasDeclarationDecoratorsConst was not overloaded by native module initialization");
  }
  _TSTypeAliasDeclarationSetTypeParameters(context, receiver, typeParams) {
    throw new Error("'TSTypeAliasDeclarationSetTypeParameters was not overloaded by native module initialization");
  }
  _TSTypeAliasDeclarationAnnotationsConst(context, receiver) {
    throw new Error("'TSTypeAliasDeclarationAnnotationsConst was not overloaded by native module initialization");
  }
  _TSTypeAliasDeclarationSetAnnotations(context, receiver, annotations, annotationsSequenceLength) {
    throw new Error("'TSTypeAliasDeclarationSetAnnotations was not overloaded by native module initialization");
  }
  _TSTypeAliasDeclarationTypeAnnotationConst(context, receiver) {
    throw new Error("'TSTypeAliasDeclarationTypeAnnotationConst was not overloaded by native module initialization");
  }
  _TSTypeAliasDeclarationSetTsTypeAnnotation(context, receiver, typeAnnotation) {
    throw new Error("'TSTypeAliasDeclarationSetTsTypeAnnotation was not overloaded by native module initialization");
  }
  _CreateDebuggerStatement(context) {
    throw new Error("'CreateDebuggerStatement was not overloaded by native module initialization");
  }
  _UpdateDebuggerStatement(context, original) {
    throw new Error("'UpdateDebuggerStatement was not overloaded by native module initialization");
  }
  _CreateReturnStatement(context) {
    throw new Error("'CreateReturnStatement was not overloaded by native module initialization");
  }
  _UpdateReturnStatement(context, original) {
    throw new Error("'UpdateReturnStatement was not overloaded by native module initialization");
  }
  _CreateReturnStatement1(context, argument) {
    throw new Error("'CreateReturnStatement1 was not overloaded by native module initialization");
  }
  _UpdateReturnStatement1(context, original, argument) {
    throw new Error("'UpdateReturnStatement1 was not overloaded by native module initialization");
  }
  _ReturnStatementArgument(context, receiver) {
    throw new Error("'ReturnStatementArgument was not overloaded by native module initialization");
  }
  _ReturnStatementArgumentConst(context, receiver) {
    throw new Error("'ReturnStatementArgumentConst was not overloaded by native module initialization");
  }
  _ReturnStatementSetArgument(context, receiver, arg) {
    throw new Error("'ReturnStatementSetArgument was not overloaded by native module initialization");
  }
  _CreateExportDefaultDeclaration(context, decl, exportEquals) {
    throw new Error("'CreateExportDefaultDeclaration was not overloaded by native module initialization");
  }
  _UpdateExportDefaultDeclaration(context, original, decl, exportEquals) {
    throw new Error("'UpdateExportDefaultDeclaration was not overloaded by native module initialization");
  }
  _ExportDefaultDeclarationDecl(context, receiver) {
    throw new Error("'ExportDefaultDeclarationDecl was not overloaded by native module initialization");
  }
  _ExportDefaultDeclarationDeclConst(context, receiver) {
    throw new Error("'ExportDefaultDeclarationDeclConst was not overloaded by native module initialization");
  }
  _ExportDefaultDeclarationIsExportEqualsConst(context, receiver) {
    throw new Error("'ExportDefaultDeclarationIsExportEqualsConst was not overloaded by native module initialization");
  }
  _CreateScriptFunction(context, databody, datasignature, datafuncFlags, dataflags) {
    throw new Error("'CreateScriptFunction was not overloaded by native module initialization");
  }
  _UpdateScriptFunction(context, original, databody, datasignature, datafuncFlags, dataflags) {
    throw new Error("'UpdateScriptFunction was not overloaded by native module initialization");
  }
  _ScriptFunctionIdConst(context, receiver) {
    throw new Error("'ScriptFunctionIdConst was not overloaded by native module initialization");
  }
  _ScriptFunctionId(context, receiver) {
    throw new Error("'ScriptFunctionId was not overloaded by native module initialization");
  }
  _ScriptFunctionParamsConst(context, receiver) {
    throw new Error("'ScriptFunctionParamsConst was not overloaded by native module initialization");
  }
  _ScriptFunctionParams(context, receiver) {
    throw new Error("'ScriptFunctionParams was not overloaded by native module initialization");
  }
  _ScriptFunctionReturnStatementsConst(context, receiver) {
    throw new Error("'ScriptFunctionReturnStatementsConst was not overloaded by native module initialization");
  }
  _ScriptFunctionReturnStatements(context, receiver) {
    throw new Error("'ScriptFunctionReturnStatements was not overloaded by native module initialization");
  }
  _ScriptFunctionTypeParamsConst(context, receiver) {
    throw new Error("'ScriptFunctionTypeParamsConst was not overloaded by native module initialization");
  }
  _ScriptFunctionTypeParams(context, receiver) {
    throw new Error("'ScriptFunctionTypeParams was not overloaded by native module initialization");
  }
  _ScriptFunctionBodyConst(context, receiver) {
    throw new Error("'ScriptFunctionBodyConst was not overloaded by native module initialization");
  }
  _ScriptFunctionBody(context, receiver) {
    throw new Error("'ScriptFunctionBody was not overloaded by native module initialization");
  }
  _ScriptFunctionAddReturnStatement(context, receiver, returnStatement) {
    throw new Error("'ScriptFunctionAddReturnStatement was not overloaded by native module initialization");
  }
  _ScriptFunctionSetBody(context, receiver, body) {
    throw new Error("'ScriptFunctionSetBody was not overloaded by native module initialization");
  }
  _ScriptFunctionReturnTypeAnnotationConst(context, receiver) {
    throw new Error("'ScriptFunctionReturnTypeAnnotationConst was not overloaded by native module initialization");
  }
  _ScriptFunctionReturnTypeAnnotation(context, receiver) {
    throw new Error("'ScriptFunctionReturnTypeAnnotation was not overloaded by native module initialization");
  }
  _ScriptFunctionSetReturnTypeAnnotation(context, receiver, node) {
    throw new Error("'ScriptFunctionSetReturnTypeAnnotation was not overloaded by native module initialization");
  }
  _ScriptFunctionIsEntryPointConst(context, receiver) {
    throw new Error("'ScriptFunctionIsEntryPointConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsGeneratorConst(context, receiver) {
    throw new Error("'ScriptFunctionIsGeneratorConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsAsyncFuncConst(context, receiver) {
    throw new Error("'ScriptFunctionIsAsyncFuncConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsAsyncImplFuncConst(context, receiver) {
    throw new Error("'ScriptFunctionIsAsyncImplFuncConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsArrowConst(context, receiver) {
    throw new Error("'ScriptFunctionIsArrowConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsOverloadConst(context, receiver) {
    throw new Error("'ScriptFunctionIsOverloadConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsExternalOverloadConst(context, receiver) {
    throw new Error("'ScriptFunctionIsExternalOverloadConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsConstructorConst(context, receiver) {
    throw new Error("'ScriptFunctionIsConstructorConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsGetterConst(context, receiver) {
    throw new Error("'ScriptFunctionIsGetterConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsSetterConst(context, receiver) {
    throw new Error("'ScriptFunctionIsSetterConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsExtensionAccessorConst(context, receiver) {
    throw new Error("'ScriptFunctionIsExtensionAccessorConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsMethodConst(context, receiver) {
    throw new Error("'ScriptFunctionIsMethodConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsProxyConst(context, receiver) {
    throw new Error("'ScriptFunctionIsProxyConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsStaticBlockConst(context, receiver) {
    throw new Error("'ScriptFunctionIsStaticBlockConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsEnumConst(context, receiver) {
    throw new Error("'ScriptFunctionIsEnumConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsHiddenConst(context, receiver) {
    throw new Error("'ScriptFunctionIsHiddenConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsExternalConst(context, receiver) {
    throw new Error("'ScriptFunctionIsExternalConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsImplicitSuperCallNeededConst(context, receiver) {
    throw new Error("'ScriptFunctionIsImplicitSuperCallNeededConst was not overloaded by native module initialization");
  }
  _ScriptFunctionHasBodyConst(context, receiver) {
    throw new Error("'ScriptFunctionHasBodyConst was not overloaded by native module initialization");
  }
  _ScriptFunctionHasRestParameterConst(context, receiver) {
    throw new Error("'ScriptFunctionHasRestParameterConst was not overloaded by native module initialization");
  }
  _ScriptFunctionHasReturnStatementConst(context, receiver) {
    throw new Error("'ScriptFunctionHasReturnStatementConst was not overloaded by native module initialization");
  }
  _ScriptFunctionHasThrowStatementConst(context, receiver) {
    throw new Error("'ScriptFunctionHasThrowStatementConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsThrowingConst(context, receiver) {
    throw new Error("'ScriptFunctionIsThrowingConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsRethrowingConst(context, receiver) {
    throw new Error("'ScriptFunctionIsRethrowingConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsDynamicConst(context, receiver) {
    throw new Error("'ScriptFunctionIsDynamicConst was not overloaded by native module initialization");
  }
  _ScriptFunctionIsExtensionMethodConst(context, receiver) {
    throw new Error("'ScriptFunctionIsExtensionMethodConst was not overloaded by native module initialization");
  }
  _ScriptFunctionFlagsConst(context, receiver) {
    throw new Error("'ScriptFunctionFlagsConst was not overloaded by native module initialization");
  }
  _ScriptFunctionHasReceiverConst(context, receiver) {
    throw new Error("'ScriptFunctionHasReceiverConst was not overloaded by native module initialization");
  }
  _ScriptFunctionSetIdent(context, receiver, id) {
    throw new Error("'ScriptFunctionSetIdent was not overloaded by native module initialization");
  }
  _ScriptFunctionAddFlag(context, receiver, flags) {
    throw new Error("'ScriptFunctionAddFlag was not overloaded by native module initialization");
  }
  _ScriptFunctionFormalParamsLengthConst(context, receiver) {
    throw new Error("'ScriptFunctionFormalParamsLengthConst was not overloaded by native module initialization");
  }
  _ScriptFunctionAnnotations(context, receiver) {
    throw new Error("'ScriptFunctionAnnotations was not overloaded by native module initialization");
  }
  _ScriptFunctionAnnotationsConst(context, receiver) {
    throw new Error("'ScriptFunctionAnnotationsConst was not overloaded by native module initialization");
  }
  _ScriptFunctionSetAnnotations(context, receiver, annotations, annotationsSequenceLength) {
    throw new Error("'ScriptFunctionSetAnnotations was not overloaded by native module initialization");
  }
  _CreateClassDefinition(context, ident, typeParams, superTypeParams, _implements, _implementsSequenceLength, ctor, superClass, body, bodySequenceLength, modifiers, flags) {
    throw new Error("'CreateClassDefinition was not overloaded by native module initialization");
  }
  _UpdateClassDefinition(context, original, ident, typeParams, superTypeParams, _implements, _implementsSequenceLength, ctor, superClass, body, bodySequenceLength, modifiers, flags) {
    throw new Error("'UpdateClassDefinition was not overloaded by native module initialization");
  }
  _CreateClassDefinition1(context, ident, body, bodySequenceLength, modifiers, flags) {
    throw new Error("'CreateClassDefinition1 was not overloaded by native module initialization");
  }
  _UpdateClassDefinition1(context, original, ident, body, bodySequenceLength, modifiers, flags) {
    throw new Error("'UpdateClassDefinition1 was not overloaded by native module initialization");
  }
  _CreateClassDefinition2(context, ident, modifiers, flags) {
    throw new Error("'CreateClassDefinition2 was not overloaded by native module initialization");
  }
  _UpdateClassDefinition2(context, original, ident, modifiers, flags) {
    throw new Error("'UpdateClassDefinition2 was not overloaded by native module initialization");
  }
  _ClassDefinitionIdentConst(context, receiver) {
    throw new Error("'ClassDefinitionIdentConst was not overloaded by native module initialization");
  }
  _ClassDefinitionIdent(context, receiver) {
    throw new Error("'ClassDefinitionIdent was not overloaded by native module initialization");
  }
  _ClassDefinitionSetIdent(context, receiver, ident) {
    throw new Error("'ClassDefinitionSetIdent was not overloaded by native module initialization");
  }
  _ClassDefinitionInternalNameConst(context, receiver) {
    throw new Error("'ClassDefinitionInternalNameConst was not overloaded by native module initialization");
  }
  _ClassDefinitionSetInternalName(context, receiver, internalName) {
    throw new Error("'ClassDefinitionSetInternalName was not overloaded by native module initialization");
  }
  _ClassDefinitionSuper(context, receiver) {
    throw new Error("'ClassDefinitionSuper was not overloaded by native module initialization");
  }
  _ClassDefinitionSuperConst(context, receiver) {
    throw new Error("'ClassDefinitionSuperConst was not overloaded by native module initialization");
  }
  _ClassDefinitionSetSuper(context, receiver, superClass) {
    throw new Error("'ClassDefinitionSetSuper was not overloaded by native module initialization");
  }
  _ClassDefinitionIsGlobalConst(context, receiver) {
    throw new Error("'ClassDefinitionIsGlobalConst was not overloaded by native module initialization");
  }
  _ClassDefinitionIsLocalConst(context, receiver) {
    throw new Error("'ClassDefinitionIsLocalConst was not overloaded by native module initialization");
  }
  _ClassDefinitionIsExternConst(context, receiver) {
    throw new Error("'ClassDefinitionIsExternConst was not overloaded by native module initialization");
  }
  _ClassDefinitionIsFromExternalConst(context, receiver) {
    throw new Error("'ClassDefinitionIsFromExternalConst was not overloaded by native module initialization");
  }
  _ClassDefinitionIsInnerConst(context, receiver) {
    throw new Error("'ClassDefinitionIsInnerConst was not overloaded by native module initialization");
  }
  _ClassDefinitionIsGlobalInitializedConst(context, receiver) {
    throw new Error("'ClassDefinitionIsGlobalInitializedConst was not overloaded by native module initialization");
  }
  _ClassDefinitionIsClassDefinitionCheckedConst(context, receiver) {
    throw new Error("'ClassDefinitionIsClassDefinitionCheckedConst was not overloaded by native module initialization");
  }
  _ClassDefinitionIsAnonymousConst(context, receiver) {
    throw new Error("'ClassDefinitionIsAnonymousConst was not overloaded by native module initialization");
  }
  _ClassDefinitionIsNamespaceTransformedConst(context, receiver) {
    throw new Error("'ClassDefinitionIsNamespaceTransformedConst was not overloaded by native module initialization");
  }
  _ClassDefinitionIsModuleConst(context, receiver) {
    throw new Error("'ClassDefinitionIsModuleConst was not overloaded by native module initialization");
  }
  _ClassDefinitionSetGlobalInitialized(context, receiver) {
    throw new Error("'ClassDefinitionSetGlobalInitialized was not overloaded by native module initialization");
  }
  _ClassDefinitionSetInnerModifier(context, receiver) {
    throw new Error("'ClassDefinitionSetInnerModifier was not overloaded by native module initialization");
  }
  _ClassDefinitionSetClassDefinitionChecked(context, receiver) {
    throw new Error("'ClassDefinitionSetClassDefinitionChecked was not overloaded by native module initialization");
  }
  _ClassDefinitionSetAnonymousModifier(context, receiver) {
    throw new Error("'ClassDefinitionSetAnonymousModifier was not overloaded by native module initialization");
  }
  _ClassDefinitionSetNamespaceTransformed(context, receiver) {
    throw new Error("'ClassDefinitionSetNamespaceTransformed was not overloaded by native module initialization");
  }
  _ClassDefinitionModifiersConst(context, receiver) {
    throw new Error("'ClassDefinitionModifiersConst was not overloaded by native module initialization");
  }
  _ClassDefinitionSetModifiers(context, receiver, modifiers) {
    throw new Error("'ClassDefinitionSetModifiers was not overloaded by native module initialization");
  }
  _ClassDefinitionAddProperties(context, receiver, body, bodySequenceLength) {
    throw new Error("'ClassDefinitionAddProperties was not overloaded by native module initialization");
  }
  _ClassDefinitionBody(context, receiver) {
    throw new Error("'ClassDefinitionBody was not overloaded by native module initialization");
  }
  _ClassDefinitionBodyConst(context, receiver) {
    throw new Error("'ClassDefinitionBodyConst was not overloaded by native module initialization");
  }
  _ClassDefinitionCtor(context, receiver) {
    throw new Error("'ClassDefinitionCtor was not overloaded by native module initialization");
  }
  _ClassDefinitionSetCtor(context, receiver, ctor) {
    throw new Error("'ClassDefinitionSetCtor was not overloaded by native module initialization");
  }
  _ClassDefinitionImplements(context, receiver) {
    throw new Error("'ClassDefinitionImplements was not overloaded by native module initialization");
  }
  _ClassDefinitionImplementsConst(context, receiver) {
    throw new Error("'ClassDefinitionImplementsConst was not overloaded by native module initialization");
  }
  _ClassDefinitionTypeParamsConst(context, receiver) {
    throw new Error("'ClassDefinitionTypeParamsConst was not overloaded by native module initialization");
  }
  _ClassDefinitionTypeParams(context, receiver) {
    throw new Error("'ClassDefinitionTypeParams was not overloaded by native module initialization");
  }
  _ClassDefinitionSetTypeParams(context, receiver, typeParams) {
    throw new Error("'ClassDefinitionSetTypeParams was not overloaded by native module initialization");
  }
  _ClassDefinitionSuperTypeParamsConst(context, receiver) {
    throw new Error("'ClassDefinitionSuperTypeParamsConst was not overloaded by native module initialization");
  }
  _ClassDefinitionSuperTypeParams(context, receiver) {
    throw new Error("'ClassDefinitionSuperTypeParams was not overloaded by native module initialization");
  }
  _ClassDefinitionLocalTypeCounter(context, receiver) {
    throw new Error("'ClassDefinitionLocalTypeCounter was not overloaded by native module initialization");
  }
  _ClassDefinitionLocalIndexConst(context, receiver) {
    throw new Error("'ClassDefinitionLocalIndexConst was not overloaded by native module initialization");
  }
  _ClassDefinitionLocalPrefixConst(context, receiver) {
    throw new Error("'ClassDefinitionLocalPrefixConst was not overloaded by native module initialization");
  }
  _ClassDefinitionSetOrigEnumDecl(context, receiver, enumDecl) {
    throw new Error("'ClassDefinitionSetOrigEnumDecl was not overloaded by native module initialization");
  }
  _ClassDefinitionOrigEnumDeclConst(context, receiver) {
    throw new Error("'ClassDefinitionOrigEnumDeclConst was not overloaded by native module initialization");
  }
  _ClassDefinitionGetAnonClass(context, receiver) {
    throw new Error("'ClassDefinitionGetAnonClass was not overloaded by native module initialization");
  }
  _ClassDefinitionSetAnonClass(context, receiver, anonClass) {
    throw new Error("'ClassDefinitionSetAnonClass was not overloaded by native module initialization");
  }
  _ClassDefinitionCtorConst(context, receiver) {
    throw new Error("'ClassDefinitionCtorConst was not overloaded by native module initialization");
  }
  _ClassDefinitionHasPrivateMethodConst(context, receiver) {
    throw new Error("'ClassDefinitionHasPrivateMethodConst was not overloaded by native module initialization");
  }
  _ClassDefinitionHasComputedInstanceFieldConst(context, receiver) {
    throw new Error("'ClassDefinitionHasComputedInstanceFieldConst was not overloaded by native module initialization");
  }
  _ClassDefinitionHasMatchingPrivateKeyConst(context, receiver, name) {
    throw new Error("'ClassDefinitionHasMatchingPrivateKeyConst was not overloaded by native module initialization");
  }
  _ClassDefinitionAnnotations(context, receiver) {
    throw new Error("'ClassDefinitionAnnotations was not overloaded by native module initialization");
  }
  _ClassDefinitionAnnotationsConst(context, receiver) {
    throw new Error("'ClassDefinitionAnnotationsConst was not overloaded by native module initialization");
  }
  _ClassDefinitionSetAnnotations(context, receiver, annotations, annotationsSequenceLength) {
    throw new Error("'ClassDefinitionSetAnnotations was not overloaded by native module initialization");
  }
  _CreateArrayExpression(context, elements, elementsSequenceLength) {
    throw new Error("'CreateArrayExpression was not overloaded by native module initialization");
  }
  _UpdateArrayExpression(context, original, elements, elementsSequenceLength) {
    throw new Error("'UpdateArrayExpression was not overloaded by native module initialization");
  }
  _CreateArrayExpression1(context, nodeType, elements, elementsSequenceLength, trailingComma) {
    throw new Error("'CreateArrayExpression1 was not overloaded by native module initialization");
  }
  _UpdateArrayExpression1(context, original, nodeType, elements, elementsSequenceLength, trailingComma) {
    throw new Error("'UpdateArrayExpression1 was not overloaded by native module initialization");
  }
  _ArrayExpressionElementsConst(context, receiver) {
    throw new Error("'ArrayExpressionElementsConst was not overloaded by native module initialization");
  }
  _ArrayExpressionElements(context, receiver) {
    throw new Error("'ArrayExpressionElements was not overloaded by native module initialization");
  }
  _ArrayExpressionSetElements(context, receiver, elements, elementsSequenceLength) {
    throw new Error("'ArrayExpressionSetElements was not overloaded by native module initialization");
  }
  _ArrayExpressionIsDeclarationConst(context, receiver) {
    throw new Error("'ArrayExpressionIsDeclarationConst was not overloaded by native module initialization");
  }
  _ArrayExpressionIsOptionalConst(context, receiver) {
    throw new Error("'ArrayExpressionIsOptionalConst was not overloaded by native module initialization");
  }
  _ArrayExpressionSetDeclaration(context, receiver) {
    throw new Error("'ArrayExpressionSetDeclaration was not overloaded by native module initialization");
  }
  _ArrayExpressionSetOptional(context, receiver, optional_arg) {
    throw new Error("'ArrayExpressionSetOptional was not overloaded by native module initialization");
  }
  _ArrayExpressionDecoratorsConst(context, receiver) {
    throw new Error("'ArrayExpressionDecoratorsConst was not overloaded by native module initialization");
  }
  _ArrayExpressionConvertibleToArrayPattern(context, receiver) {
    throw new Error("'ArrayExpressionConvertibleToArrayPattern was not overloaded by native module initialization");
  }
  _ArrayExpressionValidateExpression(context, receiver) {
    throw new Error("'ArrayExpressionValidateExpression was not overloaded by native module initialization");
  }
  _ArrayExpressionHandleNestedArrayExpression(context, receiver, currentElement, isPreferredTuple, idx) {
    throw new Error("'ArrayExpressionHandleNestedArrayExpression was not overloaded by native module initialization");
  }
  _ArrayExpressionTypeAnnotationConst(context, receiver) {
    throw new Error("'ArrayExpressionTypeAnnotationConst was not overloaded by native module initialization");
  }
  _ArrayExpressionSetTsTypeAnnotation(context, receiver, typeAnnotation) {
    throw new Error("'ArrayExpressionSetTsTypeAnnotation was not overloaded by native module initialization");
  }
  _CreateTSInterfaceBody(context, body, bodySequenceLength) {
    throw new Error("'CreateTSInterfaceBody was not overloaded by native module initialization");
  }
  _UpdateTSInterfaceBody(context, original, body, bodySequenceLength) {
    throw new Error("'UpdateTSInterfaceBody was not overloaded by native module initialization");
  }
  _TSInterfaceBodyBodyPtr(context, receiver) {
    throw new Error("'TSInterfaceBodyBodyPtr was not overloaded by native module initialization");
  }
  _TSInterfaceBodyBody(context, receiver) {
    throw new Error("'TSInterfaceBodyBody was not overloaded by native module initialization");
  }
  _TSInterfaceBodyBodyConst(context, receiver) {
    throw new Error("'TSInterfaceBodyBodyConst was not overloaded by native module initialization");
  }
  _CreateTSTypeQuery(context, exprName) {
    throw new Error("'CreateTSTypeQuery was not overloaded by native module initialization");
  }
  _UpdateTSTypeQuery(context, original, exprName) {
    throw new Error("'UpdateTSTypeQuery was not overloaded by native module initialization");
  }
  _TSTypeQueryExprNameConst(context, receiver) {
    throw new Error("'TSTypeQueryExprNameConst was not overloaded by native module initialization");
  }
  _CreateTSBigintKeyword(context) {
    throw new Error("'CreateTSBigintKeyword was not overloaded by native module initialization");
  }
  _UpdateTSBigintKeyword(context, original) {
    throw new Error("'UpdateTSBigintKeyword was not overloaded by native module initialization");
  }
  _CreateProperty(context, key, value) {
    throw new Error("'CreateProperty was not overloaded by native module initialization");
  }
  _UpdateProperty(context, original, key, value) {
    throw new Error("'UpdateProperty was not overloaded by native module initialization");
  }
  _CreateProperty1(context, kind, key, value, isMethod, isComputed) {
    throw new Error("'CreateProperty1 was not overloaded by native module initialization");
  }
  _UpdateProperty1(context, original, kind, key, value, isMethod, isComputed) {
    throw new Error("'UpdateProperty1 was not overloaded by native module initialization");
  }
  _PropertyKey(context, receiver) {
    throw new Error("'PropertyKey was not overloaded by native module initialization");
  }
  _PropertyKeyConst(context, receiver) {
    throw new Error("'PropertyKeyConst was not overloaded by native module initialization");
  }
  _PropertyValueConst(context, receiver) {
    throw new Error("'PropertyValueConst was not overloaded by native module initialization");
  }
  _PropertyValue(context, receiver) {
    throw new Error("'PropertyValue was not overloaded by native module initialization");
  }
  _PropertyKindConst(context, receiver) {
    throw new Error("'PropertyKindConst was not overloaded by native module initialization");
  }
  _PropertyIsMethodConst(context, receiver) {
    throw new Error("'PropertyIsMethodConst was not overloaded by native module initialization");
  }
  _PropertyIsShorthandConst(context, receiver) {
    throw new Error("'PropertyIsShorthandConst was not overloaded by native module initialization");
  }
  _PropertyIsComputedConst(context, receiver) {
    throw new Error("'PropertyIsComputedConst was not overloaded by native module initialization");
  }
  _PropertyIsAccessorConst(context, receiver) {
    throw new Error("'PropertyIsAccessorConst was not overloaded by native module initialization");
  }
  _PropertyIsAccessorKind(context, receiver, kind) {
    throw new Error("'PropertyIsAccessorKind was not overloaded by native module initialization");
  }
  _PropertyConvertibleToPatternProperty(context, receiver) {
    throw new Error("'PropertyConvertibleToPatternProperty was not overloaded by native module initialization");
  }
  _PropertyValidateExpression(context, receiver) {
    throw new Error("'PropertyValidateExpression was not overloaded by native module initialization");
  }
  _CreateVariableDeclarator(context, flag, ident) {
    throw new Error("'CreateVariableDeclarator was not overloaded by native module initialization");
  }
  _UpdateVariableDeclarator(context, original, flag, ident) {
    throw new Error("'UpdateVariableDeclarator was not overloaded by native module initialization");
  }
  _CreateVariableDeclarator1(context, flag, ident, init) {
    throw new Error("'CreateVariableDeclarator1 was not overloaded by native module initialization");
  }
  _UpdateVariableDeclarator1(context, original, flag, ident, init) {
    throw new Error("'UpdateVariableDeclarator1 was not overloaded by native module initialization");
  }
  _VariableDeclaratorInit(context, receiver) {
    throw new Error("'VariableDeclaratorInit was not overloaded by native module initialization");
  }
  _VariableDeclaratorInitConst(context, receiver) {
    throw new Error("'VariableDeclaratorInitConst was not overloaded by native module initialization");
  }
  _VariableDeclaratorSetInit(context, receiver, init) {
    throw new Error("'VariableDeclaratorSetInit was not overloaded by native module initialization");
  }
  _VariableDeclaratorId(context, receiver) {
    throw new Error("'VariableDeclaratorId was not overloaded by native module initialization");
  }
  _VariableDeclaratorIdConst(context, receiver) {
    throw new Error("'VariableDeclaratorIdConst was not overloaded by native module initialization");
  }
  _VariableDeclaratorFlag(context, receiver) {
    throw new Error("'VariableDeclaratorFlag was not overloaded by native module initialization");
  }
  _CreateStringLiteral(context) {
    throw new Error("'CreateStringLiteral was not overloaded by native module initialization");
  }
  _UpdateStringLiteral(context, original) {
    throw new Error("'UpdateStringLiteral was not overloaded by native module initialization");
  }
  _CreateStringLiteral1(context, str) {
    throw new Error("'CreateStringLiteral1 was not overloaded by native module initialization");
  }
  _UpdateStringLiteral1(context, original, str) {
    throw new Error("'UpdateStringLiteral1 was not overloaded by native module initialization");
  }
  _StringLiteralStrConst(context, receiver) {
    throw new Error("'StringLiteralStrConst was not overloaded by native module initialization");
  }
  _CreateTSTypeAssertion(context, typeAnnotation, expression) {
    throw new Error("'CreateTSTypeAssertion was not overloaded by native module initialization");
  }
  _UpdateTSTypeAssertion(context, original, typeAnnotation, expression) {
    throw new Error("'UpdateTSTypeAssertion was not overloaded by native module initialization");
  }
  _TSTypeAssertionGetExpressionConst(context, receiver) {
    throw new Error("'TSTypeAssertionGetExpressionConst was not overloaded by native module initialization");
  }
  _TSTypeAssertionTypeAnnotationConst(context, receiver) {
    throw new Error("'TSTypeAssertionTypeAnnotationConst was not overloaded by native module initialization");
  }
  _TSTypeAssertionSetTsTypeAnnotation(context, receiver, typeAnnotation) {
    throw new Error("'TSTypeAssertionSetTsTypeAnnotation was not overloaded by native module initialization");
  }
  _CreateTSExternalModuleReference(context, expr) {
    throw new Error("'CreateTSExternalModuleReference was not overloaded by native module initialization");
  }
  _UpdateTSExternalModuleReference(context, original, expr) {
    throw new Error("'UpdateTSExternalModuleReference was not overloaded by native module initialization");
  }
  _TSExternalModuleReferenceExprConst(context, receiver) {
    throw new Error("'TSExternalModuleReferenceExprConst was not overloaded by native module initialization");
  }
  _CreateTSUndefinedKeyword(context) {
    throw new Error("'CreateTSUndefinedKeyword was not overloaded by native module initialization");
  }
  _UpdateTSUndefinedKeyword(context, original) {
    throw new Error("'UpdateTSUndefinedKeyword was not overloaded by native module initialization");
  }
  _CreateETSTuple(context) {
    throw new Error("'CreateETSTuple was not overloaded by native module initialization");
  }
  _UpdateETSTuple(context, original) {
    throw new Error("'UpdateETSTuple was not overloaded by native module initialization");
  }
  _CreateETSTuple1(context, size) {
    throw new Error("'CreateETSTuple1 was not overloaded by native module initialization");
  }
  _UpdateETSTuple1(context, original, size) {
    throw new Error("'UpdateETSTuple1 was not overloaded by native module initialization");
  }
  _CreateETSTuple2(context, typeList, typeListSequenceLength) {
    throw new Error("'CreateETSTuple2 was not overloaded by native module initialization");
  }
  _UpdateETSTuple2(context, original, typeList, typeListSequenceLength) {
    throw new Error("'UpdateETSTuple2 was not overloaded by native module initialization");
  }
  _ETSTupleGetTupleSizeConst(context, receiver) {
    throw new Error("'ETSTupleGetTupleSizeConst was not overloaded by native module initialization");
  }
  _ETSTupleGetTupleTypeAnnotationsListConst(context, receiver) {
    throw new Error("'ETSTupleGetTupleTypeAnnotationsListConst was not overloaded by native module initialization");
  }
  _ETSTupleHasSpreadTypeConst(context, receiver) {
    throw new Error("'ETSTupleHasSpreadTypeConst was not overloaded by native module initialization");
  }
  _ETSTupleSetSpreadType(context, receiver, newSpreadType) {
    throw new Error("'ETSTupleSetSpreadType was not overloaded by native module initialization");
  }
  _ETSTupleSetTypeAnnotationsList(context, receiver, typeNodeList, typeNodeListSequenceLength) {
    throw new Error("'ETSTupleSetTypeAnnotationsList was not overloaded by native module initialization");
  }
  _CreateTryStatement(context, block, catchClauses, catchClausesSequenceLength, finalizer, finalizerInsertionsLabelPair, finalizerInsertionsLabelPairSequenceLength, finalizerInsertionsStatement, finalizerInsertionsStatementSequenceLength) {
    throw new Error("'CreateTryStatement was not overloaded by native module initialization");
  }
  _UpdateTryStatement(context, original, block, catchClauses, catchClausesSequenceLength, finalizer, finalizerInsertionsLabelPair, finalizerInsertionsLabelPairSequenceLength, finalizerInsertionsStatement, finalizerInsertionsStatementSequenceLength) {
    throw new Error("'UpdateTryStatement was not overloaded by native module initialization");
  }
  _CreateTryStatement1(context, other) {
    throw new Error("'CreateTryStatement1 was not overloaded by native module initialization");
  }
  _UpdateTryStatement1(context, original, other) {
    throw new Error("'UpdateTryStatement1 was not overloaded by native module initialization");
  }
  _TryStatementFinallyBlockConst(context, receiver) {
    throw new Error("'TryStatementFinallyBlockConst was not overloaded by native module initialization");
  }
  _TryStatementBlockConst(context, receiver) {
    throw new Error("'TryStatementBlockConst was not overloaded by native module initialization");
  }
  _TryStatementHasFinalizerConst(context, receiver) {
    throw new Error("'TryStatementHasFinalizerConst was not overloaded by native module initialization");
  }
  _TryStatementHasDefaultCatchClauseConst(context, receiver) {
    throw new Error("'TryStatementHasDefaultCatchClauseConst was not overloaded by native module initialization");
  }
  _TryStatementCatchClausesConst(context, receiver) {
    throw new Error("'TryStatementCatchClausesConst was not overloaded by native module initialization");
  }
  _TryStatementFinallyCanCompleteNormallyConst(context, receiver) {
    throw new Error("'TryStatementFinallyCanCompleteNormallyConst was not overloaded by native module initialization");
  }
  _TryStatementSetFinallyCanCompleteNormally(context, receiver, finallyCanCompleteNormally) {
    throw new Error("'TryStatementSetFinallyCanCompleteNormally was not overloaded by native module initialization");
  }
  _AstNodeIsProgramConst(context, receiver) {
    throw new Error("'AstNodeIsProgramConst was not overloaded by native module initialization");
  }
  _AstNodeIsStatementConst(context, receiver) {
    throw new Error("'AstNodeIsStatementConst was not overloaded by native module initialization");
  }
  _AstNodeIsExpressionConst(context, receiver) {
    throw new Error("'AstNodeIsExpressionConst was not overloaded by native module initialization");
  }
  _AstNodeIsTypedConst(context, receiver) {
    throw new Error("'AstNodeIsTypedConst was not overloaded by native module initialization");
  }
  _AstNodeAsTyped(context, receiver) {
    throw new Error("'AstNodeAsTyped was not overloaded by native module initialization");
  }
  _AstNodeAsTypedConst(context, receiver) {
    throw new Error("'AstNodeAsTypedConst was not overloaded by native module initialization");
  }
  _AstNodeIsBrokenStatementConst(context, receiver) {
    throw new Error("'AstNodeIsBrokenStatementConst was not overloaded by native module initialization");
  }
  _AstNodeAsExpression(context, receiver) {
    throw new Error("'AstNodeAsExpression was not overloaded by native module initialization");
  }
  _AstNodeAsExpressionConst(context, receiver) {
    throw new Error("'AstNodeAsExpressionConst was not overloaded by native module initialization");
  }
  _AstNodeAsStatement(context, receiver) {
    throw new Error("'AstNodeAsStatement was not overloaded by native module initialization");
  }
  _AstNodeAsStatementConst(context, receiver) {
    throw new Error("'AstNodeAsStatementConst was not overloaded by native module initialization");
  }
  _AstNodeTypeConst(context, receiver) {
    throw new Error("'AstNodeTypeConst was not overloaded by native module initialization");
  }
  _AstNodeParent(context, receiver) {
    throw new Error("'AstNodeParent was not overloaded by native module initialization");
  }
  _AstNodeParentConst(context, receiver) {
    throw new Error("'AstNodeParentConst was not overloaded by native module initialization");
  }
  _AstNodeSetParent(context, receiver, parent) {
    throw new Error("'AstNodeSetParent was not overloaded by native module initialization");
  }
  _AstNodeDecoratorsPtrConst(context, receiver) {
    throw new Error("'AstNodeDecoratorsPtrConst was not overloaded by native module initialization");
  }
  _AstNodeAddDecorators(context, receiver, decorators, decoratorsSequenceLength) {
    throw new Error("'AstNodeAddDecorators was not overloaded by native module initialization");
  }
  _AstNodeCanHaveDecoratorConst(context, receiver, inTs) {
    throw new Error("'AstNodeCanHaveDecoratorConst was not overloaded by native module initialization");
  }
  _AstNodeIsReadonlyConst(context, receiver) {
    throw new Error("'AstNodeIsReadonlyConst was not overloaded by native module initialization");
  }
  _AstNodeIsReadonlyTypeConst(context, receiver) {
    throw new Error("'AstNodeIsReadonlyTypeConst was not overloaded by native module initialization");
  }
  _AstNodeIsOptionalDeclarationConst(context, receiver) {
    throw new Error("'AstNodeIsOptionalDeclarationConst was not overloaded by native module initialization");
  }
  _AstNodeIsDefiniteConst(context, receiver) {
    throw new Error("'AstNodeIsDefiniteConst was not overloaded by native module initialization");
  }
  _AstNodeIsConstructorConst(context, receiver) {
    throw new Error("'AstNodeIsConstructorConst was not overloaded by native module initialization");
  }
  _AstNodeIsOverrideConst(context, receiver) {
    throw new Error("'AstNodeIsOverrideConst was not overloaded by native module initialization");
  }
  _AstNodeSetOverride(context, receiver) {
    throw new Error("'AstNodeSetOverride was not overloaded by native module initialization");
  }
  _AstNodeIsAsyncConst(context, receiver) {
    throw new Error("'AstNodeIsAsyncConst was not overloaded by native module initialization");
  }
  _AstNodeIsSynchronizedConst(context, receiver) {
    throw new Error("'AstNodeIsSynchronizedConst was not overloaded by native module initialization");
  }
  _AstNodeIsNativeConst(context, receiver) {
    throw new Error("'AstNodeIsNativeConst was not overloaded by native module initialization");
  }
  _AstNodeIsConstConst(context, receiver) {
    throw new Error("'AstNodeIsConstConst was not overloaded by native module initialization");
  }
  _AstNodeIsStaticConst(context, receiver) {
    throw new Error("'AstNodeIsStaticConst was not overloaded by native module initialization");
  }
  _AstNodeIsFinalConst(context, receiver) {
    throw new Error("'AstNodeIsFinalConst was not overloaded by native module initialization");
  }
  _AstNodeIsAbstractConst(context, receiver) {
    throw new Error("'AstNodeIsAbstractConst was not overloaded by native module initialization");
  }
  _AstNodeIsPublicConst(context, receiver) {
    throw new Error("'AstNodeIsPublicConst was not overloaded by native module initialization");
  }
  _AstNodeIsProtectedConst(context, receiver) {
    throw new Error("'AstNodeIsProtectedConst was not overloaded by native module initialization");
  }
  _AstNodeIsPrivateConst(context, receiver) {
    throw new Error("'AstNodeIsPrivateConst was not overloaded by native module initialization");
  }
  _AstNodeIsInternalConst(context, receiver) {
    throw new Error("'AstNodeIsInternalConst was not overloaded by native module initialization");
  }
  _AstNodeIsExportedConst(context, receiver) {
    throw new Error("'AstNodeIsExportedConst was not overloaded by native module initialization");
  }
  _AstNodeIsDefaultExportedConst(context, receiver) {
    throw new Error("'AstNodeIsDefaultExportedConst was not overloaded by native module initialization");
  }
  _AstNodeIsExportedTypeConst(context, receiver) {
    throw new Error("'AstNodeIsExportedTypeConst was not overloaded by native module initialization");
  }
  _AstNodeIsDeclareConst(context, receiver) {
    throw new Error("'AstNodeIsDeclareConst was not overloaded by native module initialization");
  }
  _AstNodeIsInConst(context, receiver) {
    throw new Error("'AstNodeIsInConst was not overloaded by native module initialization");
  }
  _AstNodeIsOutConst(context, receiver) {
    throw new Error("'AstNodeIsOutConst was not overloaded by native module initialization");
  }
  _AstNodeIsSetterConst(context, receiver) {
    throw new Error("'AstNodeIsSetterConst was not overloaded by native module initialization");
  }
  _AstNodeAddModifier(context, receiver, flags) {
    throw new Error("'AstNodeAddModifier was not overloaded by native module initialization");
  }
  _AstNodeClearModifier(context, receiver, flags) {
    throw new Error("'AstNodeClearModifier was not overloaded by native module initialization");
  }
  _AstNodeModifiers(context, receiver) {
    throw new Error("'AstNodeModifiers was not overloaded by native module initialization");
  }
  _AstNodeModifiersConst(context, receiver) {
    throw new Error("'AstNodeModifiersConst was not overloaded by native module initialization");
  }
  _AstNodeHasExportAliasConst(context, receiver) {
    throw new Error("'AstNodeHasExportAliasConst was not overloaded by native module initialization");
  }
  _AstNodeAsClassElement(context, receiver) {
    throw new Error("'AstNodeAsClassElement was not overloaded by native module initialization");
  }
  _AstNodeAsClassElementConst(context, receiver) {
    throw new Error("'AstNodeAsClassElementConst was not overloaded by native module initialization");
  }
  _AstNodeIsScopeBearerConst(context, receiver) {
    throw new Error("'AstNodeIsScopeBearerConst was not overloaded by native module initialization");
  }
  _AstNodeClearScope(context, receiver) {
    throw new Error("'AstNodeClearScope was not overloaded by native module initialization");
  }
  _AstNodeGetTopStatement(context, receiver) {
    throw new Error("'AstNodeGetTopStatement was not overloaded by native module initialization");
  }
  _AstNodeGetTopStatementConst(context, receiver) {
    throw new Error("'AstNodeGetTopStatementConst was not overloaded by native module initialization");
  }
  _AstNodeClone(context, receiver, parent) {
    throw new Error("'AstNodeClone was not overloaded by native module initialization");
  }
  _AstNodeDumpJSONConst(context, receiver) {
    throw new Error("'AstNodeDumpJSONConst was not overloaded by native module initialization");
  }
  _AstNodeDumpEtsSrcConst(context, receiver) {
    throw new Error("'AstNodeDumpEtsSrcConst was not overloaded by native module initialization");
  }
  _AstNodeDumpConst(context, receiver, dumper) {
    throw new Error("'AstNodeDumpConst was not overloaded by native module initialization");
  }
  _AstNodeDumpConst1(context, receiver, dumper) {
    throw new Error("'AstNodeDumpConst1 was not overloaded by native module initialization");
  }
  _AstNodeSetTransformedNode(context, receiver, transformationName, transformedNode) {
    throw new Error("'AstNodeSetTransformedNode was not overloaded by native module initialization");
  }
  _AstNodeSetOriginalNode(context, receiver, originalNode) {
    throw new Error("'AstNodeSetOriginalNode was not overloaded by native module initialization");
  }
  _AstNodeOriginalNodeConst(context, receiver) {
    throw new Error("'AstNodeOriginalNodeConst was not overloaded by native module initialization");
  }
  _CreateUnaryExpression(context, argument, unaryOperator) {
    throw new Error("'CreateUnaryExpression was not overloaded by native module initialization");
  }
  _UpdateUnaryExpression(context, original, argument, unaryOperator) {
    throw new Error("'UpdateUnaryExpression was not overloaded by native module initialization");
  }
  _UnaryExpressionOperatorTypeConst(context, receiver) {
    throw new Error("'UnaryExpressionOperatorTypeConst was not overloaded by native module initialization");
  }
  _UnaryExpressionArgument(context, receiver) {
    throw new Error("'UnaryExpressionArgument was not overloaded by native module initialization");
  }
  _UnaryExpressionArgumentConst(context, receiver) {
    throw new Error("'UnaryExpressionArgumentConst was not overloaded by native module initialization");
  }
  _CreateForInStatement(context, left, right, body) {
    throw new Error("'CreateForInStatement was not overloaded by native module initialization");
  }
  _UpdateForInStatement(context, original, left, right, body) {
    throw new Error("'UpdateForInStatement was not overloaded by native module initialization");
  }
  _ForInStatementLeft(context, receiver) {
    throw new Error("'ForInStatementLeft was not overloaded by native module initialization");
  }
  _ForInStatementLeftConst(context, receiver) {
    throw new Error("'ForInStatementLeftConst was not overloaded by native module initialization");
  }
  _ForInStatementRight(context, receiver) {
    throw new Error("'ForInStatementRight was not overloaded by native module initialization");
  }
  _ForInStatementRightConst(context, receiver) {
    throw new Error("'ForInStatementRightConst was not overloaded by native module initialization");
  }
  _ForInStatementBody(context, receiver) {
    throw new Error("'ForInStatementBody was not overloaded by native module initialization");
  }
  _ForInStatementBodyConst(context, receiver) {
    throw new Error("'ForInStatementBodyConst was not overloaded by native module initialization");
  }
  _CreateThisExpression(context) {
    throw new Error("'CreateThisExpression was not overloaded by native module initialization");
  }
  _UpdateThisExpression(context, original) {
    throw new Error("'UpdateThisExpression was not overloaded by native module initialization");
  }
  _CreateTSMethodSignature(context, key, signature, computed, optional_arg) {
    throw new Error("'CreateTSMethodSignature was not overloaded by native module initialization");
  }
  _UpdateTSMethodSignature(context, original, key, signature, computed, optional_arg) {
    throw new Error("'UpdateTSMethodSignature was not overloaded by native module initialization");
  }
  _TSMethodSignatureKeyConst(context, receiver) {
    throw new Error("'TSMethodSignatureKeyConst was not overloaded by native module initialization");
  }
  _TSMethodSignatureKey(context, receiver) {
    throw new Error("'TSMethodSignatureKey was not overloaded by native module initialization");
  }
  _TSMethodSignatureTypeParamsConst(context, receiver) {
    throw new Error("'TSMethodSignatureTypeParamsConst was not overloaded by native module initialization");
  }
  _TSMethodSignatureTypeParams(context, receiver) {
    throw new Error("'TSMethodSignatureTypeParams was not overloaded by native module initialization");
  }
  _TSMethodSignatureParamsConst(context, receiver) {
    throw new Error("'TSMethodSignatureParamsConst was not overloaded by native module initialization");
  }
  _TSMethodSignatureReturnTypeAnnotationConst(context, receiver) {
    throw new Error("'TSMethodSignatureReturnTypeAnnotationConst was not overloaded by native module initialization");
  }
  _TSMethodSignatureReturnTypeAnnotation(context, receiver) {
    throw new Error("'TSMethodSignatureReturnTypeAnnotation was not overloaded by native module initialization");
  }
  _TSMethodSignatureComputedConst(context, receiver) {
    throw new Error("'TSMethodSignatureComputedConst was not overloaded by native module initialization");
  }
  _TSMethodSignatureOptionalConst(context, receiver) {
    throw new Error("'TSMethodSignatureOptionalConst was not overloaded by native module initialization");
  }
  _CreateBinaryExpression(context, left, right, operatorType) {
    throw new Error("'CreateBinaryExpression was not overloaded by native module initialization");
  }
  _UpdateBinaryExpression(context, original, left, right, operatorType) {
    throw new Error("'UpdateBinaryExpression was not overloaded by native module initialization");
  }
  _BinaryExpressionLeftConst(context, receiver) {
    throw new Error("'BinaryExpressionLeftConst was not overloaded by native module initialization");
  }
  _BinaryExpressionLeft(context, receiver) {
    throw new Error("'BinaryExpressionLeft was not overloaded by native module initialization");
  }
  _BinaryExpressionRightConst(context, receiver) {
    throw new Error("'BinaryExpressionRightConst was not overloaded by native module initialization");
  }
  _BinaryExpressionRight(context, receiver) {
    throw new Error("'BinaryExpressionRight was not overloaded by native module initialization");
  }
  _BinaryExpressionResultConst(context, receiver) {
    throw new Error("'BinaryExpressionResultConst was not overloaded by native module initialization");
  }
  _BinaryExpressionResult(context, receiver) {
    throw new Error("'BinaryExpressionResult was not overloaded by native module initialization");
  }
  _BinaryExpressionOperatorTypeConst(context, receiver) {
    throw new Error("'BinaryExpressionOperatorTypeConst was not overloaded by native module initialization");
  }
  _BinaryExpressionIsLogicalConst(context, receiver) {
    throw new Error("'BinaryExpressionIsLogicalConst was not overloaded by native module initialization");
  }
  _BinaryExpressionIsLogicalExtendedConst(context, receiver) {
    throw new Error("'BinaryExpressionIsLogicalExtendedConst was not overloaded by native module initialization");
  }
  _BinaryExpressionIsBitwiseConst(context, receiver) {
    throw new Error("'BinaryExpressionIsBitwiseConst was not overloaded by native module initialization");
  }
  _BinaryExpressionIsArithmeticConst(context, receiver) {
    throw new Error("'BinaryExpressionIsArithmeticConst was not overloaded by native module initialization");
  }
  _BinaryExpressionSetLeft(context, receiver, expr) {
    throw new Error("'BinaryExpressionSetLeft was not overloaded by native module initialization");
  }
  _BinaryExpressionSetRight(context, receiver, expr) {
    throw new Error("'BinaryExpressionSetRight was not overloaded by native module initialization");
  }
  _BinaryExpressionSetResult(context, receiver, expr) {
    throw new Error("'BinaryExpressionSetResult was not overloaded by native module initialization");
  }
  _BinaryExpressionSetOperator(context, receiver, operatorType) {
    throw new Error("'BinaryExpressionSetOperator was not overloaded by native module initialization");
  }
  _CreateSuperExpression(context) {
    throw new Error("'CreateSuperExpression was not overloaded by native module initialization");
  }
  _UpdateSuperExpression(context, original) {
    throw new Error("'UpdateSuperExpression was not overloaded by native module initialization");
  }
  _CreateAssertStatement(context, test, second) {
    throw new Error("'CreateAssertStatement was not overloaded by native module initialization");
  }
  _UpdateAssertStatement(context, original, test, second) {
    throw new Error("'UpdateAssertStatement was not overloaded by native module initialization");
  }
  _AssertStatementTestConst(context, receiver) {
    throw new Error("'AssertStatementTestConst was not overloaded by native module initialization");
  }
  _AssertStatementTest(context, receiver) {
    throw new Error("'AssertStatementTest was not overloaded by native module initialization");
  }
  _AssertStatementSecondConst(context, receiver) {
    throw new Error("'AssertStatementSecondConst was not overloaded by native module initialization");
  }
  _CreateTSStringKeyword(context) {
    throw new Error("'CreateTSStringKeyword was not overloaded by native module initialization");
  }
  _UpdateTSStringKeyword(context, original) {
    throw new Error("'UpdateTSStringKeyword was not overloaded by native module initialization");
  }
  _CreateAssignmentExpression(context, left, right, assignmentOperator) {
    throw new Error("'CreateAssignmentExpression was not overloaded by native module initialization");
  }
  _UpdateAssignmentExpression(context, original, left, right, assignmentOperator) {
    throw new Error("'UpdateAssignmentExpression was not overloaded by native module initialization");
  }
  _CreateAssignmentExpression1(context, type, left, right, assignmentOperator) {
    throw new Error("'CreateAssignmentExpression1 was not overloaded by native module initialization");
  }
  _UpdateAssignmentExpression1(context, original, type, left, right, assignmentOperator) {
    throw new Error("'UpdateAssignmentExpression1 was not overloaded by native module initialization");
  }
  _AssignmentExpressionLeftConst(context, receiver) {
    throw new Error("'AssignmentExpressionLeftConst was not overloaded by native module initialization");
  }
  _AssignmentExpressionLeft(context, receiver) {
    throw new Error("'AssignmentExpressionLeft was not overloaded by native module initialization");
  }
  _AssignmentExpressionRight(context, receiver) {
    throw new Error("'AssignmentExpressionRight was not overloaded by native module initialization");
  }
  _AssignmentExpressionRightConst(context, receiver) {
    throw new Error("'AssignmentExpressionRightConst was not overloaded by native module initialization");
  }
  _AssignmentExpressionSetRight(context, receiver, expr) {
    throw new Error("'AssignmentExpressionSetRight was not overloaded by native module initialization");
  }
  _AssignmentExpressionSetLeft(context, receiver, expr) {
    throw new Error("'AssignmentExpressionSetLeft was not overloaded by native module initialization");
  }
  _AssignmentExpressionResultConst(context, receiver) {
    throw new Error("'AssignmentExpressionResultConst was not overloaded by native module initialization");
  }
  _AssignmentExpressionResult(context, receiver) {
    throw new Error("'AssignmentExpressionResult was not overloaded by native module initialization");
  }
  _AssignmentExpressionOperatorTypeConst(context, receiver) {
    throw new Error("'AssignmentExpressionOperatorTypeConst was not overloaded by native module initialization");
  }
  _AssignmentExpressionSetOperatorType(context, receiver, tokenType) {
    throw new Error("'AssignmentExpressionSetOperatorType was not overloaded by native module initialization");
  }
  _AssignmentExpressionSetResult(context, receiver, expr) {
    throw new Error("'AssignmentExpressionSetResult was not overloaded by native module initialization");
  }
  _AssignmentExpressionIsLogicalExtendedConst(context, receiver) {
    throw new Error("'AssignmentExpressionIsLogicalExtendedConst was not overloaded by native module initialization");
  }
  _AssignmentExpressionSetIgnoreConstAssign(context, receiver) {
    throw new Error("'AssignmentExpressionSetIgnoreConstAssign was not overloaded by native module initialization");
  }
  _AssignmentExpressionIsIgnoreConstAssignConst(context, receiver) {
    throw new Error("'AssignmentExpressionIsIgnoreConstAssignConst was not overloaded by native module initialization");
  }
  _AssignmentExpressionConvertibleToAssignmentPatternLeft(context, receiver, mustBePattern) {
    throw new Error("'AssignmentExpressionConvertibleToAssignmentPatternLeft was not overloaded by native module initialization");
  }
  _AssignmentExpressionConvertibleToAssignmentPatternRight(context, receiver) {
    throw new Error("'AssignmentExpressionConvertibleToAssignmentPatternRight was not overloaded by native module initialization");
  }
  _AssignmentExpressionConvertibleToAssignmentPattern(context, receiver, mustBePattern) {
    throw new Error("'AssignmentExpressionConvertibleToAssignmentPattern was not overloaded by native module initialization");
  }
  _CreateExpressionStatement(context, expr) {
    throw new Error("'CreateExpressionStatement was not overloaded by native module initialization");
  }
  _UpdateExpressionStatement(context, original, expr) {
    throw new Error("'UpdateExpressionStatement was not overloaded by native module initialization");
  }
  _ExpressionStatementGetExpressionConst(context, receiver) {
    throw new Error("'ExpressionStatementGetExpressionConst was not overloaded by native module initialization");
  }
  _ExpressionStatementGetExpression(context, receiver) {
    throw new Error("'ExpressionStatementGetExpression was not overloaded by native module initialization");
  }
  _ExpressionStatementSetExpression(context, receiver, expr) {
    throw new Error("'ExpressionStatementSetExpression was not overloaded by native module initialization");
  }
  _ETSModuleIdent(context, receiver) {
    throw new Error("'ETSModuleIdent was not overloaded by native module initialization");
  }
  _ETSModuleIdentConst(context, receiver) {
    throw new Error("'ETSModuleIdentConst was not overloaded by native module initialization");
  }
  _ETSModuleIsETSScriptConst(context, receiver) {
    throw new Error("'ETSModuleIsETSScriptConst was not overloaded by native module initialization");
  }
  _ETSModuleIsNamespaceConst(context, receiver) {
    throw new Error("'ETSModuleIsNamespaceConst was not overloaded by native module initialization");
  }
  _ETSModuleIsNamespaceChainLastNodeConst(context, receiver) {
    throw new Error("'ETSModuleIsNamespaceChainLastNodeConst was not overloaded by native module initialization");
  }
  _ETSModuleSetNamespaceChainLastNode(context, receiver) {
    throw new Error("'ETSModuleSetNamespaceChainLastNode was not overloaded by native module initialization");
  }
  _ETSModuleAnnotations(context, receiver) {
    throw new Error("'ETSModuleAnnotations was not overloaded by native module initialization");
  }
  _ETSModuleAnnotationsConst(context, receiver) {
    throw new Error("'ETSModuleAnnotationsConst was not overloaded by native module initialization");
  }
  _ETSModuleSetAnnotations(context, receiver, annotations, annotationsSequenceLength) {
    throw new Error("'ETSModuleSetAnnotations was not overloaded by native module initialization");
  }
  _CreateMetaProperty(context, kind) {
    throw new Error("'CreateMetaProperty was not overloaded by native module initialization");
  }
  _UpdateMetaProperty(context, original, kind) {
    throw new Error("'UpdateMetaProperty was not overloaded by native module initialization");
  }
  _MetaPropertyKindConst(context, receiver) {
    throw new Error("'MetaPropertyKindConst was not overloaded by native module initialization");
  }
  _CreateTSArrayType(context, elementType) {
    throw new Error("'CreateTSArrayType was not overloaded by native module initialization");
  }
  _UpdateTSArrayType(context, original, elementType) {
    throw new Error("'UpdateTSArrayType was not overloaded by native module initialization");
  }
  _TSArrayTypeElementTypeConst(context, receiver) {
    throw new Error("'TSArrayTypeElementTypeConst was not overloaded by native module initialization");
  }
  _CreateTSSignatureDeclaration(context, kind, signature) {
    throw new Error("'CreateTSSignatureDeclaration was not overloaded by native module initialization");
  }
  _UpdateTSSignatureDeclaration(context, original, kind, signature) {
    throw new Error("'UpdateTSSignatureDeclaration was not overloaded by native module initialization");
  }
  _TSSignatureDeclarationTypeParamsConst(context, receiver) {
    throw new Error("'TSSignatureDeclarationTypeParamsConst was not overloaded by native module initialization");
  }
  _TSSignatureDeclarationTypeParams(context, receiver) {
    throw new Error("'TSSignatureDeclarationTypeParams was not overloaded by native module initialization");
  }
  _TSSignatureDeclarationParamsConst(context, receiver) {
    throw new Error("'TSSignatureDeclarationParamsConst was not overloaded by native module initialization");
  }
  _TSSignatureDeclarationReturnTypeAnnotationConst(context, receiver) {
    throw new Error("'TSSignatureDeclarationReturnTypeAnnotationConst was not overloaded by native module initialization");
  }
  _TSSignatureDeclarationReturnTypeAnnotation(context, receiver) {
    throw new Error("'TSSignatureDeclarationReturnTypeAnnotation was not overloaded by native module initialization");
  }
  _TSSignatureDeclarationKindConst(context, receiver) {
    throw new Error("'TSSignatureDeclarationKindConst was not overloaded by native module initialization");
  }
  _CreateExportAllDeclaration(context, source, exported) {
    throw new Error("'CreateExportAllDeclaration was not overloaded by native module initialization");
  }
  _UpdateExportAllDeclaration(context, original, source, exported) {
    throw new Error("'UpdateExportAllDeclaration was not overloaded by native module initialization");
  }
  _ExportAllDeclarationSourceConst(context, receiver) {
    throw new Error("'ExportAllDeclarationSourceConst was not overloaded by native module initialization");
  }
  _ExportAllDeclarationExportedConst(context, receiver) {
    throw new Error("'ExportAllDeclarationExportedConst was not overloaded by native module initialization");
  }
  _CreateExportSpecifier(context, local, exported) {
    throw new Error("'CreateExportSpecifier was not overloaded by native module initialization");
  }
  _UpdateExportSpecifier(context, original, local, exported) {
    throw new Error("'UpdateExportSpecifier was not overloaded by native module initialization");
  }
  _ExportSpecifierLocalConst(context, receiver) {
    throw new Error("'ExportSpecifierLocalConst was not overloaded by native module initialization");
  }
  _ExportSpecifierExportedConst(context, receiver) {
    throw new Error("'ExportSpecifierExportedConst was not overloaded by native module initialization");
  }
  _CreateTSTupleType(context, elementTypes, elementTypesSequenceLength) {
    throw new Error("'CreateTSTupleType was not overloaded by native module initialization");
  }
  _UpdateTSTupleType(context, original, elementTypes, elementTypesSequenceLength) {
    throw new Error("'UpdateTSTupleType was not overloaded by native module initialization");
  }
  _TSTupleTypeElementTypeConst(context, receiver) {
    throw new Error("'TSTupleTypeElementTypeConst was not overloaded by native module initialization");
  }
  _CreateFunctionExpression(context, func) {
    throw new Error("'CreateFunctionExpression was not overloaded by native module initialization");
  }
  _UpdateFunctionExpression(context, original, func) {
    throw new Error("'UpdateFunctionExpression was not overloaded by native module initialization");
  }
  _CreateFunctionExpression1(context, namedExpr, func) {
    throw new Error("'CreateFunctionExpression1 was not overloaded by native module initialization");
  }
  _UpdateFunctionExpression1(context, original, namedExpr, func) {
    throw new Error("'UpdateFunctionExpression1 was not overloaded by native module initialization");
  }
  _FunctionExpressionFunctionConst(context, receiver) {
    throw new Error("'FunctionExpressionFunctionConst was not overloaded by native module initialization");
  }
  _FunctionExpressionFunction(context, receiver) {
    throw new Error("'FunctionExpressionFunction was not overloaded by native module initialization");
  }
  _FunctionExpressionIsAnonymousConst(context, receiver) {
    throw new Error("'FunctionExpressionIsAnonymousConst was not overloaded by native module initialization");
  }
  _FunctionExpressionId(context, receiver) {
    throw new Error("'FunctionExpressionId was not overloaded by native module initialization");
  }
  _CreateTSIndexSignature(context, param, typeAnnotation, readonly_arg) {
    throw new Error("'CreateTSIndexSignature was not overloaded by native module initialization");
  }
  _UpdateTSIndexSignature(context, original, param, typeAnnotation, readonly_arg) {
    throw new Error("'UpdateTSIndexSignature was not overloaded by native module initialization");
  }
  _TSIndexSignatureParamConst(context, receiver) {
    throw new Error("'TSIndexSignatureParamConst was not overloaded by native module initialization");
  }
  _TSIndexSignatureTypeAnnotationConst(context, receiver) {
    throw new Error("'TSIndexSignatureTypeAnnotationConst was not overloaded by native module initialization");
  }
  _TSIndexSignatureReadonlyConst(context, receiver) {
    throw new Error("'TSIndexSignatureReadonlyConst was not overloaded by native module initialization");
  }
  _TSIndexSignatureKindConst(context, receiver) {
    throw new Error("'TSIndexSignatureKindConst was not overloaded by native module initialization");
  }
  _CreateTSModuleDeclaration(context, name, body, declare, _global) {
    throw new Error("'CreateTSModuleDeclaration was not overloaded by native module initialization");
  }
  _UpdateTSModuleDeclaration(context, original, name, body, declare, _global) {
    throw new Error("'UpdateTSModuleDeclaration was not overloaded by native module initialization");
  }
  _TSModuleDeclarationNameConst(context, receiver) {
    throw new Error("'TSModuleDeclarationNameConst was not overloaded by native module initialization");
  }
  _TSModuleDeclarationBodyConst(context, receiver) {
    throw new Error("'TSModuleDeclarationBodyConst was not overloaded by native module initialization");
  }
  _TSModuleDeclarationGlobalConst(context, receiver) {
    throw new Error("'TSModuleDeclarationGlobalConst was not overloaded by native module initialization");
  }
  _TSModuleDeclarationIsExternalOrAmbientConst(context, receiver) {
    throw new Error("'TSModuleDeclarationIsExternalOrAmbientConst was not overloaded by native module initialization");
  }
  _CreateImportDeclaration(context, source, specifiers, specifiersSequenceLength, importKind) {
    throw new Error("'CreateImportDeclaration was not overloaded by native module initialization");
  }
  _UpdateImportDeclaration(context, original, source, specifiers, specifiersSequenceLength, importKind) {
    throw new Error("'UpdateImportDeclaration was not overloaded by native module initialization");
  }
  _ImportDeclarationSourceConst(context, receiver) {
    throw new Error("'ImportDeclarationSourceConst was not overloaded by native module initialization");
  }
  _ImportDeclarationSource(context, receiver) {
    throw new Error("'ImportDeclarationSource was not overloaded by native module initialization");
  }
  _ImportDeclarationSpecifiersConst(context, receiver) {
    throw new Error("'ImportDeclarationSpecifiersConst was not overloaded by native module initialization");
  }
  _ImportDeclarationIsTypeKindConst(context, receiver) {
    throw new Error("'ImportDeclarationIsTypeKindConst was not overloaded by native module initialization");
  }
  _CreateTSParenthesizedType(context, type) {
    throw new Error("'CreateTSParenthesizedType was not overloaded by native module initialization");
  }
  _UpdateTSParenthesizedType(context, original, type) {
    throw new Error("'UpdateTSParenthesizedType was not overloaded by native module initialization");
  }
  _TSParenthesizedTypeTypeConst(context, receiver) {
    throw new Error("'TSParenthesizedTypeTypeConst was not overloaded by native module initialization");
  }
  _CreateCharLiteral(context) {
    throw new Error("'CreateCharLiteral was not overloaded by native module initialization");
  }
  _UpdateCharLiteral(context, original) {
    throw new Error("'UpdateCharLiteral was not overloaded by native module initialization");
  }
  _CreateETSPackageDeclaration(context, name) {
    throw new Error("'CreateETSPackageDeclaration was not overloaded by native module initialization");
  }
  _UpdateETSPackageDeclaration(context, original, name) {
    throw new Error("'UpdateETSPackageDeclaration was not overloaded by native module initialization");
  }
  _UpdateETSImportDeclaration(context, original, source, specifiers, specifiersSequenceLength, importKind) {
    throw new Error("'UpdateETSImportDeclaration was not overloaded by native module initialization");
  }
  _ETSImportDeclarationHasDeclConst(context, receiver) {
    throw new Error("'ETSImportDeclarationHasDeclConst was not overloaded by native module initialization");
  }
  _ETSImportDeclarationIsPureDynamicConst(context, receiver) {
    throw new Error("'ETSImportDeclarationIsPureDynamicConst was not overloaded by native module initialization");
  }
  _ETSImportDeclarationAssemblerNameConst(context, receiver) {
    throw new Error("'ETSImportDeclarationAssemblerNameConst was not overloaded by native module initialization");
  }
  _ETSImportDeclarationSourceConst(context, receiver) {
    throw new Error("'ETSImportDeclarationSourceConst was not overloaded by native module initialization");
  }
  _ETSImportDeclarationResolvedSource(context, receiver) {
    throw new Error("'ETSImportDeclarationResolvedSource was not overloaded by native module initialization");
  }
  _ETSImportDeclarationResolvedSourceConst(context, receiver) {
    throw new Error("'ETSImportDeclarationResolvedSourceConst was not overloaded by native module initialization");
  }
  _CreateETSStructDeclaration(context, def) {
    throw new Error("'CreateETSStructDeclaration was not overloaded by native module initialization");
  }
  _UpdateETSStructDeclaration(context, original, def) {
    throw new Error("'UpdateETSStructDeclaration was not overloaded by native module initialization");
  }
  _CreateTSModuleBlock(context, statements, statementsSequenceLength) {
    throw new Error("'CreateTSModuleBlock was not overloaded by native module initialization");
  }
  _UpdateTSModuleBlock(context, original, statements, statementsSequenceLength) {
    throw new Error("'UpdateTSModuleBlock was not overloaded by native module initialization");
  }
  _TSModuleBlockStatementsConst(context, receiver) {
    throw new Error("'TSModuleBlockStatementsConst was not overloaded by native module initialization");
  }
  _CreateETSNewArrayInstanceExpression(context, typeReference, dimension) {
    throw new Error("'CreateETSNewArrayInstanceExpression was not overloaded by native module initialization");
  }
  _UpdateETSNewArrayInstanceExpression(context, original, typeReference, dimension) {
    throw new Error("'UpdateETSNewArrayInstanceExpression was not overloaded by native module initialization");
  }
  _ETSNewArrayInstanceExpressionTypeReference(context, receiver) {
    throw new Error("'ETSNewArrayInstanceExpressionTypeReference was not overloaded by native module initialization");
  }
  _ETSNewArrayInstanceExpressionTypeReferenceConst(context, receiver) {
    throw new Error("'ETSNewArrayInstanceExpressionTypeReferenceConst was not overloaded by native module initialization");
  }
  _ETSNewArrayInstanceExpressionDimension(context, receiver) {
    throw new Error("'ETSNewArrayInstanceExpressionDimension was not overloaded by native module initialization");
  }
  _ETSNewArrayInstanceExpressionDimensionConst(context, receiver) {
    throw new Error("'ETSNewArrayInstanceExpressionDimensionConst was not overloaded by native module initialization");
  }
  _ETSNewArrayInstanceExpressionSetDimension(context, receiver, dimension) {
    throw new Error("'ETSNewArrayInstanceExpressionSetDimension was not overloaded by native module initialization");
  }
  _CreateAnnotationDeclaration(context, expr) {
    throw new Error("'CreateAnnotationDeclaration was not overloaded by native module initialization");
  }
  _UpdateAnnotationDeclaration(context, original, expr) {
    throw new Error("'UpdateAnnotationDeclaration was not overloaded by native module initialization");
  }
  _CreateAnnotationDeclaration1(context, expr, properties, propertiesSequenceLength) {
    throw new Error("'CreateAnnotationDeclaration1 was not overloaded by native module initialization");
  }
  _UpdateAnnotationDeclaration1(context, original, expr, properties, propertiesSequenceLength) {
    throw new Error("'UpdateAnnotationDeclaration1 was not overloaded by native module initialization");
  }
  _AnnotationDeclarationInternalNameConst(context, receiver) {
    throw new Error("'AnnotationDeclarationInternalNameConst was not overloaded by native module initialization");
  }
  _AnnotationDeclarationSetInternalName(context, receiver, internalName) {
    throw new Error("'AnnotationDeclarationSetInternalName was not overloaded by native module initialization");
  }
  _AnnotationDeclarationExprConst(context, receiver) {
    throw new Error("'AnnotationDeclarationExprConst was not overloaded by native module initialization");
  }
  _AnnotationDeclarationExpr(context, receiver) {
    throw new Error("'AnnotationDeclarationExpr was not overloaded by native module initialization");
  }
  _AnnotationDeclarationProperties(context, receiver) {
    throw new Error("'AnnotationDeclarationProperties was not overloaded by native module initialization");
  }
  _AnnotationDeclarationPropertiesConst(context, receiver) {
    throw new Error("'AnnotationDeclarationPropertiesConst was not overloaded by native module initialization");
  }
  _AnnotationDeclarationPropertiesPtrConst(context, receiver) {
    throw new Error("'AnnotationDeclarationPropertiesPtrConst was not overloaded by native module initialization");
  }
  _AnnotationDeclarationAddProperties(context, receiver, properties, propertiesSequenceLength) {
    throw new Error("'AnnotationDeclarationAddProperties was not overloaded by native module initialization");
  }
  _AnnotationDeclarationIsSourceRetentionConst(context, receiver) {
    throw new Error("'AnnotationDeclarationIsSourceRetentionConst was not overloaded by native module initialization");
  }
  _AnnotationDeclarationIsBytecodeRetentionConst(context, receiver) {
    throw new Error("'AnnotationDeclarationIsBytecodeRetentionConst was not overloaded by native module initialization");
  }
  _AnnotationDeclarationIsRuntimeRetentionConst(context, receiver) {
    throw new Error("'AnnotationDeclarationIsRuntimeRetentionConst was not overloaded by native module initialization");
  }
  _AnnotationDeclarationSetSourceRetention(context, receiver) {
    throw new Error("'AnnotationDeclarationSetSourceRetention was not overloaded by native module initialization");
  }
  _AnnotationDeclarationSetBytecodeRetention(context, receiver) {
    throw new Error("'AnnotationDeclarationSetBytecodeRetention was not overloaded by native module initialization");
  }
  _AnnotationDeclarationSetRuntimeRetention(context, receiver) {
    throw new Error("'AnnotationDeclarationSetRuntimeRetention was not overloaded by native module initialization");
  }
  _AnnotationDeclarationGetBaseNameConst(context, receiver) {
    throw new Error("'AnnotationDeclarationGetBaseNameConst was not overloaded by native module initialization");
  }
  _AnnotationDeclarationAnnotations(context, receiver) {
    throw new Error("'AnnotationDeclarationAnnotations was not overloaded by native module initialization");
  }
  _AnnotationDeclarationAnnotationsConst(context, receiver) {
    throw new Error("'AnnotationDeclarationAnnotationsConst was not overloaded by native module initialization");
  }
  _AnnotationDeclarationSetAnnotations(context, receiver, annotations, annotationsSequenceLength) {
    throw new Error("'AnnotationDeclarationSetAnnotations was not overloaded by native module initialization");
  }
  _CreateAnnotationUsageIr(context, expr) {
    throw new Error("'CreateAnnotationUsageIr was not overloaded by native module initialization");
  }
  _UpdateAnnotationUsageIr(context, original, expr) {
    throw new Error("'UpdateAnnotationUsageIr was not overloaded by native module initialization");
  }
  _CreateAnnotationUsageIr1(context, expr, properties, propertiesSequenceLength) {
    throw new Error("'CreateAnnotationUsageIr1 was not overloaded by native module initialization");
  }
  _UpdateAnnotationUsageIr1(context, original, expr, properties, propertiesSequenceLength) {
    throw new Error("'UpdateAnnotationUsageIr1 was not overloaded by native module initialization");
  }
  _AnnotationUsageIrExpr(context, receiver) {
    throw new Error("'AnnotationUsageIrExpr was not overloaded by native module initialization");
  }
  _AnnotationUsageIrProperties(context, receiver) {
    throw new Error("'AnnotationUsageIrProperties was not overloaded by native module initialization");
  }
  _AnnotationUsageIrPropertiesConst(context, receiver) {
    throw new Error("'AnnotationUsageIrPropertiesConst was not overloaded by native module initialization");
  }
  _AnnotationUsageIrPropertiesPtrConst(context, receiver) {
    throw new Error("'AnnotationUsageIrPropertiesPtrConst was not overloaded by native module initialization");
  }
  _AnnotationUsageIrAddProperty(context, receiver, property) {
    throw new Error("'AnnotationUsageIrAddProperty was not overloaded by native module initialization");
  }
  _AnnotationUsageIrSetProperties(context, receiver, properties, propertiesSequenceLength) {
    throw new Error("'AnnotationUsageIrSetProperties was not overloaded by native module initialization");
  }
  _AnnotationUsageIrGetBaseNameConst(context, receiver) {
    throw new Error("'AnnotationUsageIrGetBaseNameConst was not overloaded by native module initialization");
  }
  _CreateEmptyStatement(context) {
    throw new Error("'CreateEmptyStatement was not overloaded by native module initialization");
  }
  _UpdateEmptyStatement(context, original) {
    throw new Error("'UpdateEmptyStatement was not overloaded by native module initialization");
  }
  _CreateWhileStatement(context, test, body) {
    throw new Error("'CreateWhileStatement was not overloaded by native module initialization");
  }
  _UpdateWhileStatement(context, original, test, body) {
    throw new Error("'UpdateWhileStatement was not overloaded by native module initialization");
  }
  _WhileStatementTestConst(context, receiver) {
    throw new Error("'WhileStatementTestConst was not overloaded by native module initialization");
  }
  _WhileStatementTest(context, receiver) {
    throw new Error("'WhileStatementTest was not overloaded by native module initialization");
  }
  _WhileStatementBodyConst(context, receiver) {
    throw new Error("'WhileStatementBodyConst was not overloaded by native module initialization");
  }
  _WhileStatementBody(context, receiver) {
    throw new Error("'WhileStatementBody was not overloaded by native module initialization");
  }
  _CreateFunctionSignature(context, typeParams, params, paramsSequenceLength, returnTypeAnnotation, hasReceiver) {
    throw new Error("'CreateFunctionSignature was not overloaded by native module initialization");
  }
  _FunctionSignatureParamsConst(context, receiver) {
    throw new Error("'FunctionSignatureParamsConst was not overloaded by native module initialization");
  }
  _FunctionSignatureParams(context, receiver) {
    throw new Error("'FunctionSignatureParams was not overloaded by native module initialization");
  }
  _FunctionSignatureTypeParams(context, receiver) {
    throw new Error("'FunctionSignatureTypeParams was not overloaded by native module initialization");
  }
  _FunctionSignatureTypeParamsConst(context, receiver) {
    throw new Error("'FunctionSignatureTypeParamsConst was not overloaded by native module initialization");
  }
  _FunctionSignatureReturnType(context, receiver) {
    throw new Error("'FunctionSignatureReturnType was not overloaded by native module initialization");
  }
  _FunctionSignatureSetReturnType(context, receiver, type) {
    throw new Error("'FunctionSignatureSetReturnType was not overloaded by native module initialization");
  }
  _FunctionSignatureReturnTypeConst(context, receiver) {
    throw new Error("'FunctionSignatureReturnTypeConst was not overloaded by native module initialization");
  }
  _FunctionSignatureClone(context, receiver) {
    throw new Error("'FunctionSignatureClone was not overloaded by native module initialization");
  }
  _FunctionSignatureHasReceiverConst(context, receiver) {
    throw new Error("'FunctionSignatureHasReceiverConst was not overloaded by native module initialization");
  }
  _CreateChainExpression(context, expression) {
    throw new Error("'CreateChainExpression was not overloaded by native module initialization");
  }
  _UpdateChainExpression(context, original, expression) {
    throw new Error("'UpdateChainExpression was not overloaded by native module initialization");
  }
  _ChainExpressionGetExpressionConst(context, receiver) {
    throw new Error("'ChainExpressionGetExpressionConst was not overloaded by native module initialization");
  }
  _ChainExpressionGetExpression(context, receiver) {
    throw new Error("'ChainExpressionGetExpression was not overloaded by native module initialization");
  }
  _CreateTSIntersectionType(context, types, typesSequenceLength) {
    throw new Error("'CreateTSIntersectionType was not overloaded by native module initialization");
  }
  _UpdateTSIntersectionType(context, original, types, typesSequenceLength) {
    throw new Error("'UpdateTSIntersectionType was not overloaded by native module initialization");
  }
  _TSIntersectionTypeTypesConst(context, receiver) {
    throw new Error("'TSIntersectionTypeTypesConst was not overloaded by native module initialization");
  }
  _CreateUpdateExpression(context, argument, updateOperator, isPrefix) {
    throw new Error("'CreateUpdateExpression was not overloaded by native module initialization");
  }
  _UpdateUpdateExpression(context, original, argument, updateOperator, isPrefix) {
    throw new Error("'UpdateUpdateExpression was not overloaded by native module initialization");
  }
  _UpdateExpressionOperatorTypeConst(context, receiver) {
    throw new Error("'UpdateExpressionOperatorTypeConst was not overloaded by native module initialization");
  }
  _UpdateExpressionArgument(context, receiver) {
    throw new Error("'UpdateExpressionArgument was not overloaded by native module initialization");
  }
  _UpdateExpressionArgumentConst(context, receiver) {
    throw new Error("'UpdateExpressionArgumentConst was not overloaded by native module initialization");
  }
  _UpdateExpressionIsPrefixConst(context, receiver) {
    throw new Error("'UpdateExpressionIsPrefixConst was not overloaded by native module initialization");
  }
  _CreateBlockExpression(context, statements, statementsSequenceLength) {
    throw new Error("'CreateBlockExpression was not overloaded by native module initialization");
  }
  _UpdateBlockExpression(context, original, statements, statementsSequenceLength) {
    throw new Error("'UpdateBlockExpression was not overloaded by native module initialization");
  }
  _BlockExpressionStatementsConst(context, receiver) {
    throw new Error("'BlockExpressionStatementsConst was not overloaded by native module initialization");
  }
  _BlockExpressionStatements(context, receiver) {
    throw new Error("'BlockExpressionStatements was not overloaded by native module initialization");
  }
  _BlockExpressionAddStatements(context, receiver, statements, statementsSequenceLength) {
    throw new Error("'BlockExpressionAddStatements was not overloaded by native module initialization");
  }
  _BlockExpressionAddStatement(context, receiver, statement) {
    throw new Error("'BlockExpressionAddStatement was not overloaded by native module initialization");
  }
  _CreateTSTypeLiteral(context, members, membersSequenceLength) {
    throw new Error("'CreateTSTypeLiteral was not overloaded by native module initialization");
  }
  _UpdateTSTypeLiteral(context, original, members, membersSequenceLength) {
    throw new Error("'UpdateTSTypeLiteral was not overloaded by native module initialization");
  }
  _TSTypeLiteralMembersConst(context, receiver) {
    throw new Error("'TSTypeLiteralMembersConst was not overloaded by native module initialization");
  }
  _CreateTSTypeParameter(context, name, constraint, defaultType) {
    throw new Error("'CreateTSTypeParameter was not overloaded by native module initialization");
  }
  _UpdateTSTypeParameter(context, original, name, constraint, defaultType) {
    throw new Error("'UpdateTSTypeParameter was not overloaded by native module initialization");
  }
  _CreateTSTypeParameter1(context, name, constraint, defaultType, flags) {
    throw new Error("'CreateTSTypeParameter1 was not overloaded by native module initialization");
  }
  _UpdateTSTypeParameter1(context, original, name, constraint, defaultType, flags) {
    throw new Error("'UpdateTSTypeParameter1 was not overloaded by native module initialization");
  }
  _TSTypeParameterNameConst(context, receiver) {
    throw new Error("'TSTypeParameterNameConst was not overloaded by native module initialization");
  }
  _TSTypeParameterName(context, receiver) {
    throw new Error("'TSTypeParameterName was not overloaded by native module initialization");
  }
  _TSTypeParameterConstraint(context, receiver) {
    throw new Error("'TSTypeParameterConstraint was not overloaded by native module initialization");
  }
  _TSTypeParameterConstraintConst(context, receiver) {
    throw new Error("'TSTypeParameterConstraintConst was not overloaded by native module initialization");
  }
  _TSTypeParameterSetConstraint(context, receiver, constraint) {
    throw new Error("'TSTypeParameterSetConstraint was not overloaded by native module initialization");
  }
  _TSTypeParameterDefaultTypeConst(context, receiver) {
    throw new Error("'TSTypeParameterDefaultTypeConst was not overloaded by native module initialization");
  }
  _TSTypeParameterSetDefaultType(context, receiver, defaultType) {
    throw new Error("'TSTypeParameterSetDefaultType was not overloaded by native module initialization");
  }
  _TSTypeParameterAnnotations(context, receiver) {
    throw new Error("'TSTypeParameterAnnotations was not overloaded by native module initialization");
  }
  _TSTypeParameterAnnotationsConst(context, receiver) {
    throw new Error("'TSTypeParameterAnnotationsConst was not overloaded by native module initialization");
  }
  _TSTypeParameterSetAnnotations(context, receiver, annotations, annotationsSequenceLength) {
    throw new Error("'TSTypeParameterSetAnnotations was not overloaded by native module initialization");
  }
  _CreateTSBooleanKeyword(context) {
    throw new Error("'CreateTSBooleanKeyword was not overloaded by native module initialization");
  }
  _UpdateTSBooleanKeyword(context, original) {
    throw new Error("'UpdateTSBooleanKeyword was not overloaded by native module initialization");
  }
  _CreateSpreadElement(context, nodeType, argument) {
    throw new Error("'CreateSpreadElement was not overloaded by native module initialization");
  }
  _UpdateSpreadElement(context, original, nodeType, argument) {
    throw new Error("'UpdateSpreadElement was not overloaded by native module initialization");
  }
  _SpreadElementArgumentConst(context, receiver) {
    throw new Error("'SpreadElementArgumentConst was not overloaded by native module initialization");
  }
  _SpreadElementArgument(context, receiver) {
    throw new Error("'SpreadElementArgument was not overloaded by native module initialization");
  }
  _SpreadElementIsOptionalConst(context, receiver) {
    throw new Error("'SpreadElementIsOptionalConst was not overloaded by native module initialization");
  }
  _SpreadElementDecoratorsConst(context, receiver) {
    throw new Error("'SpreadElementDecoratorsConst was not overloaded by native module initialization");
  }
  _SpreadElementSetOptional(context, receiver, optional_arg) {
    throw new Error("'SpreadElementSetOptional was not overloaded by native module initialization");
  }
  _SpreadElementValidateExpression(context, receiver) {
    throw new Error("'SpreadElementValidateExpression was not overloaded by native module initialization");
  }
  _SpreadElementConvertibleToRest(context, receiver, isDeclaration, allowPattern) {
    throw new Error("'SpreadElementConvertibleToRest was not overloaded by native module initialization");
  }
  _SpreadElementTypeAnnotationConst(context, receiver) {
    throw new Error("'SpreadElementTypeAnnotationConst was not overloaded by native module initialization");
  }
  _SpreadElementSetTsTypeAnnotation(context, receiver, typeAnnotation) {
    throw new Error("'SpreadElementSetTsTypeAnnotation was not overloaded by native module initialization");
  }
  _CreateTSTypePredicate(context, parameterName, typeAnnotation, asserts) {
    throw new Error("'CreateTSTypePredicate was not overloaded by native module initialization");
  }
  _UpdateTSTypePredicate(context, original, parameterName, typeAnnotation, asserts) {
    throw new Error("'UpdateTSTypePredicate was not overloaded by native module initialization");
  }
  _TSTypePredicateParameterNameConst(context, receiver) {
    throw new Error("'TSTypePredicateParameterNameConst was not overloaded by native module initialization");
  }
  _TSTypePredicateTypeAnnotationConst(context, receiver) {
    throw new Error("'TSTypePredicateTypeAnnotationConst was not overloaded by native module initialization");
  }
  _TSTypePredicateAssertsConst(context, receiver) {
    throw new Error("'TSTypePredicateAssertsConst was not overloaded by native module initialization");
  }
  _CreateImportNamespaceSpecifier(context, local) {
    throw new Error("'CreateImportNamespaceSpecifier was not overloaded by native module initialization");
  }
  _UpdateImportNamespaceSpecifier(context, original, local) {
    throw new Error("'UpdateImportNamespaceSpecifier was not overloaded by native module initialization");
  }
  _ImportNamespaceSpecifierLocal(context, receiver) {
    throw new Error("'ImportNamespaceSpecifierLocal was not overloaded by native module initialization");
  }
  _ImportNamespaceSpecifierLocalConst(context, receiver) {
    throw new Error("'ImportNamespaceSpecifierLocalConst was not overloaded by native module initialization");
  }
  _CreateExportNamedDeclaration(context, source, specifiers, specifiersSequenceLength) {
    throw new Error("'CreateExportNamedDeclaration was not overloaded by native module initialization");
  }
  _UpdateExportNamedDeclaration(context, original, source, specifiers, specifiersSequenceLength) {
    throw new Error("'UpdateExportNamedDeclaration was not overloaded by native module initialization");
  }
  _CreateExportNamedDeclaration1(context, decl, specifiers, specifiersSequenceLength) {
    throw new Error("'CreateExportNamedDeclaration1 was not overloaded by native module initialization");
  }
  _UpdateExportNamedDeclaration1(context, original, decl, specifiers, specifiersSequenceLength) {
    throw new Error("'UpdateExportNamedDeclaration1 was not overloaded by native module initialization");
  }
  _CreateExportNamedDeclaration2(context, decl) {
    throw new Error("'CreateExportNamedDeclaration2 was not overloaded by native module initialization");
  }
  _UpdateExportNamedDeclaration2(context, original, decl) {
    throw new Error("'UpdateExportNamedDeclaration2 was not overloaded by native module initialization");
  }
  _ExportNamedDeclarationDeclConst(context, receiver) {
    throw new Error("'ExportNamedDeclarationDeclConst was not overloaded by native module initialization");
  }
  _ExportNamedDeclarationSourceConst(context, receiver) {
    throw new Error("'ExportNamedDeclarationSourceConst was not overloaded by native module initialization");
  }
  _ExportNamedDeclarationSpecifiersConst(context, receiver) {
    throw new Error("'ExportNamedDeclarationSpecifiersConst was not overloaded by native module initialization");
  }
  _CreateETSParameterExpression(context, identOrSpread, isOptional) {
    throw new Error("'CreateETSParameterExpression was not overloaded by native module initialization");
  }
  _UpdateETSParameterExpression(context, original, identOrSpread, isOptional) {
    throw new Error("'UpdateETSParameterExpression was not overloaded by native module initialization");
  }
  _CreateETSParameterExpression1(context, identOrSpread, initializer) {
    throw new Error("'CreateETSParameterExpression1 was not overloaded by native module initialization");
  }
  _UpdateETSParameterExpression1(context, original, identOrSpread, initializer) {
    throw new Error("'UpdateETSParameterExpression1 was not overloaded by native module initialization");
  }
  _ETSParameterExpressionNameConst(context, receiver) {
    throw new Error("'ETSParameterExpressionNameConst was not overloaded by native module initialization");
  }
  _ETSParameterExpressionIdentConst(context, receiver) {
    throw new Error("'ETSParameterExpressionIdentConst was not overloaded by native module initialization");
  }
  _ETSParameterExpressionIdent(context, receiver) {
    throw new Error("'ETSParameterExpressionIdent was not overloaded by native module initialization");
  }
  _ETSParameterExpressionSetIdent(context, receiver, ident) {
    throw new Error("'ETSParameterExpressionSetIdent was not overloaded by native module initialization");
  }
  _ETSParameterExpressionRestParameterConst(context, receiver) {
    throw new Error("'ETSParameterExpressionRestParameterConst was not overloaded by native module initialization");
  }
  _ETSParameterExpressionRestParameter(context, receiver) {
    throw new Error("'ETSParameterExpressionRestParameter was not overloaded by native module initialization");
  }
  _ETSParameterExpressionInitializerConst(context, receiver) {
    throw new Error("'ETSParameterExpressionInitializerConst was not overloaded by native module initialization");
  }
  _ETSParameterExpressionInitializer(context, receiver) {
    throw new Error("'ETSParameterExpressionInitializer was not overloaded by native module initialization");
  }
  _ETSParameterExpressionSetLexerSaved(context, receiver, s) {
    throw new Error("'ETSParameterExpressionSetLexerSaved was not overloaded by native module initialization");
  }
  _ETSParameterExpressionLexerSavedConst(context, receiver) {
    throw new Error("'ETSParameterExpressionLexerSavedConst was not overloaded by native module initialization");
  }
  _ETSParameterExpressionTypeAnnotationConst(context, receiver) {
    throw new Error("'ETSParameterExpressionTypeAnnotationConst was not overloaded by native module initialization");
  }
  _ETSParameterExpressionTypeAnnotation(context, receiver) {
    throw new Error("'ETSParameterExpressionTypeAnnotation was not overloaded by native module initialization");
  }
  _ETSParameterExpressionSetTypeAnnotation(context, receiver, typeNode) {
    throw new Error("'ETSParameterExpressionSetTypeAnnotation was not overloaded by native module initialization");
  }
  _ETSParameterExpressionIsOptionalConst(context, receiver) {
    throw new Error("'ETSParameterExpressionIsOptionalConst was not overloaded by native module initialization");
  }
  _ETSParameterExpressionSetOptional(context, receiver, value) {
    throw new Error("'ETSParameterExpressionSetOptional was not overloaded by native module initialization");
  }
  _ETSParameterExpressionSetInitializer(context, receiver, initExpr) {
    throw new Error("'ETSParameterExpressionSetInitializer was not overloaded by native module initialization");
  }
  _ETSParameterExpressionIsRestParameterConst(context, receiver) {
    throw new Error("'ETSParameterExpressionIsRestParameterConst was not overloaded by native module initialization");
  }
  _ETSParameterExpressionGetRequiredParamsConst(context, receiver) {
    throw new Error("'ETSParameterExpressionGetRequiredParamsConst was not overloaded by native module initialization");
  }
  _ETSParameterExpressionSetRequiredParams(context, receiver, value) {
    throw new Error("'ETSParameterExpressionSetRequiredParams was not overloaded by native module initialization");
  }
  _ETSParameterExpressionAnnotations(context, receiver) {
    throw new Error("'ETSParameterExpressionAnnotations was not overloaded by native module initialization");
  }
  _ETSParameterExpressionAnnotationsConst(context, receiver) {
    throw new Error("'ETSParameterExpressionAnnotationsConst was not overloaded by native module initialization");
  }
  _ETSParameterExpressionSetAnnotations(context, receiver, annotations, annotationsSequenceLength) {
    throw new Error("'ETSParameterExpressionSetAnnotations was not overloaded by native module initialization");
  }
  _CreateTSTypeParameterInstantiation(context, params, paramsSequenceLength) {
    throw new Error("'CreateTSTypeParameterInstantiation was not overloaded by native module initialization");
  }
  _UpdateTSTypeParameterInstantiation(context, original, params, paramsSequenceLength) {
    throw new Error("'UpdateTSTypeParameterInstantiation was not overloaded by native module initialization");
  }
  _TSTypeParameterInstantiationParamsConst(context, receiver) {
    throw new Error("'TSTypeParameterInstantiationParamsConst was not overloaded by native module initialization");
  }
  _CreateNullLiteral(context) {
    throw new Error("'CreateNullLiteral was not overloaded by native module initialization");
  }
  _UpdateNullLiteral(context, original) {
    throw new Error("'UpdateNullLiteral was not overloaded by native module initialization");
  }
  _CreateTSInferType(context, typeParam) {
    throw new Error("'CreateTSInferType was not overloaded by native module initialization");
  }
  _UpdateTSInferType(context, original, typeParam) {
    throw new Error("'UpdateTSInferType was not overloaded by native module initialization");
  }
  _TSInferTypeTypeParamConst(context, receiver) {
    throw new Error("'TSInferTypeTypeParamConst was not overloaded by native module initialization");
  }
  _CreateSwitchCaseStatement(context, test, consequent, consequentSequenceLength) {
    throw new Error("'CreateSwitchCaseStatement was not overloaded by native module initialization");
  }
  _UpdateSwitchCaseStatement(context, original, test, consequent, consequentSequenceLength) {
    throw new Error("'UpdateSwitchCaseStatement was not overloaded by native module initialization");
  }
  _SwitchCaseStatementTest(context, receiver) {
    throw new Error("'SwitchCaseStatementTest was not overloaded by native module initialization");
  }
  _SwitchCaseStatementTestConst(context, receiver) {
    throw new Error("'SwitchCaseStatementTestConst was not overloaded by native module initialization");
  }
  _SwitchCaseStatementConsequentConst(context, receiver) {
    throw new Error("'SwitchCaseStatementConsequentConst was not overloaded by native module initialization");
  }
  _CreateYieldExpression(context, argument, isDelegate) {
    throw new Error("'CreateYieldExpression was not overloaded by native module initialization");
  }
  _UpdateYieldExpression(context, original, argument, isDelegate) {
    throw new Error("'UpdateYieldExpression was not overloaded by native module initialization");
  }
  _YieldExpressionHasDelegateConst(context, receiver) {
    throw new Error("'YieldExpressionHasDelegateConst was not overloaded by native module initialization");
  }
  _YieldExpressionArgumentConst(context, receiver) {
    throw new Error("'YieldExpressionArgumentConst was not overloaded by native module initialization");
  }
  _CreateTSImportEqualsDeclaration(context, id, moduleReference, isExport) {
    throw new Error("'CreateTSImportEqualsDeclaration was not overloaded by native module initialization");
  }
  _UpdateTSImportEqualsDeclaration(context, original, id, moduleReference, isExport) {
    throw new Error("'UpdateTSImportEqualsDeclaration was not overloaded by native module initialization");
  }
  _TSImportEqualsDeclarationIdConst(context, receiver) {
    throw new Error("'TSImportEqualsDeclarationIdConst was not overloaded by native module initialization");
  }
  _TSImportEqualsDeclarationModuleReferenceConst(context, receiver) {
    throw new Error("'TSImportEqualsDeclarationModuleReferenceConst was not overloaded by native module initialization");
  }
  _TSImportEqualsDeclarationIsExportConst(context, receiver) {
    throw new Error("'TSImportEqualsDeclarationIsExportConst was not overloaded by native module initialization");
  }
  _CreateBooleanLiteral(context, value) {
    throw new Error("'CreateBooleanLiteral was not overloaded by native module initialization");
  }
  _UpdateBooleanLiteral(context, original, value) {
    throw new Error("'UpdateBooleanLiteral was not overloaded by native module initialization");
  }
  _BooleanLiteralValueConst(context, receiver) {
    throw new Error("'BooleanLiteralValueConst was not overloaded by native module initialization");
  }
  _CreateTSNumberKeyword(context) {
    throw new Error("'CreateTSNumberKeyword was not overloaded by native module initialization");
  }
  _UpdateTSNumberKeyword(context, original) {
    throw new Error("'UpdateTSNumberKeyword was not overloaded by native module initialization");
  }
  _CreateClassStaticBlock(context, value) {
    throw new Error("'CreateClassStaticBlock was not overloaded by native module initialization");
  }
  _UpdateClassStaticBlock(context, original, value) {
    throw new Error("'UpdateClassStaticBlock was not overloaded by native module initialization");
  }
  _ClassStaticBlockFunction(context, receiver) {
    throw new Error("'ClassStaticBlockFunction was not overloaded by native module initialization");
  }
  _ClassStaticBlockFunctionConst(context, receiver) {
    throw new Error("'ClassStaticBlockFunctionConst was not overloaded by native module initialization");
  }
  _ClassStaticBlockNameConst(context, receiver) {
    throw new Error("'ClassStaticBlockNameConst was not overloaded by native module initialization");
  }
  _CreateTSNonNullExpression(context, expr) {
    throw new Error("'CreateTSNonNullExpression was not overloaded by native module initialization");
  }
  _UpdateTSNonNullExpression(context, original, expr) {
    throw new Error("'UpdateTSNonNullExpression was not overloaded by native module initialization");
  }
  _TSNonNullExpressionExprConst(context, receiver) {
    throw new Error("'TSNonNullExpressionExprConst was not overloaded by native module initialization");
  }
  _TSNonNullExpressionExpr(context, receiver) {
    throw new Error("'TSNonNullExpressionExpr was not overloaded by native module initialization");
  }
  _TSNonNullExpressionSetExpr(context, receiver, expr) {
    throw new Error("'TSNonNullExpressionSetExpr was not overloaded by native module initialization");
  }
  _CreatePrefixAssertionExpression(context, expr, type) {
    throw new Error("'CreatePrefixAssertionExpression was not overloaded by native module initialization");
  }
  _UpdatePrefixAssertionExpression(context, original, expr, type) {
    throw new Error("'UpdatePrefixAssertionExpression was not overloaded by native module initialization");
  }
  _PrefixAssertionExpressionExprConst(context, receiver) {
    throw new Error("'PrefixAssertionExpressionExprConst was not overloaded by native module initialization");
  }
  _PrefixAssertionExpressionTypeConst(context, receiver) {
    throw new Error("'PrefixAssertionExpressionTypeConst was not overloaded by native module initialization");
  }
  _CreateClassExpression(context, def) {
    throw new Error("'CreateClassExpression was not overloaded by native module initialization");
  }
  _UpdateClassExpression(context, original, def) {
    throw new Error("'UpdateClassExpression was not overloaded by native module initialization");
  }
  _ClassExpressionDefinitionConst(context, receiver) {
    throw new Error("'ClassExpressionDefinitionConst was not overloaded by native module initialization");
  }
  _CreateForOfStatement(context, left, right, body, isAwait) {
    throw new Error("'CreateForOfStatement was not overloaded by native module initialization");
  }
  _UpdateForOfStatement(context, original, left, right, body, isAwait) {
    throw new Error("'UpdateForOfStatement was not overloaded by native module initialization");
  }
  _ForOfStatementLeft(context, receiver) {
    throw new Error("'ForOfStatementLeft was not overloaded by native module initialization");
  }
  _ForOfStatementLeftConst(context, receiver) {
    throw new Error("'ForOfStatementLeftConst was not overloaded by native module initialization");
  }
  _ForOfStatementRight(context, receiver) {
    throw new Error("'ForOfStatementRight was not overloaded by native module initialization");
  }
  _ForOfStatementRightConst(context, receiver) {
    throw new Error("'ForOfStatementRightConst was not overloaded by native module initialization");
  }
  _ForOfStatementBody(context, receiver) {
    throw new Error("'ForOfStatementBody was not overloaded by native module initialization");
  }
  _ForOfStatementBodyConst(context, receiver) {
    throw new Error("'ForOfStatementBodyConst was not overloaded by native module initialization");
  }
  _ForOfStatementIsAwaitConst(context, receiver) {
    throw new Error("'ForOfStatementIsAwaitConst was not overloaded by native module initialization");
  }
  _CreateTemplateLiteral(context, quasis, quasisSequenceLength, expressions, expressionsSequenceLength, multilineString) {
    throw new Error("'CreateTemplateLiteral was not overloaded by native module initialization");
  }
  _UpdateTemplateLiteral(context, original, quasis, quasisSequenceLength, expressions, expressionsSequenceLength, multilineString) {
    throw new Error("'UpdateTemplateLiteral was not overloaded by native module initialization");
  }
  _TemplateLiteralQuasisConst(context, receiver) {
    throw new Error("'TemplateLiteralQuasisConst was not overloaded by native module initialization");
  }
  _TemplateLiteralExpressionsConst(context, receiver) {
    throw new Error("'TemplateLiteralExpressionsConst was not overloaded by native module initialization");
  }
  _TemplateLiteralGetMultilineStringConst(context, receiver) {
    throw new Error("'TemplateLiteralGetMultilineStringConst was not overloaded by native module initialization");
  }
  _CreateTSUnionType(context, types, typesSequenceLength) {
    throw new Error("'CreateTSUnionType was not overloaded by native module initialization");
  }
  _UpdateTSUnionType(context, original, types, typesSequenceLength) {
    throw new Error("'UpdateTSUnionType was not overloaded by native module initialization");
  }
  _TSUnionTypeTypesConst(context, receiver) {
    throw new Error("'TSUnionTypeTypesConst was not overloaded by native module initialization");
  }
  _CreateTSUnknownKeyword(context) {
    throw new Error("'CreateTSUnknownKeyword was not overloaded by native module initialization");
  }
  _UpdateTSUnknownKeyword(context, original) {
    throw new Error("'UpdateTSUnknownKeyword was not overloaded by native module initialization");
  }
  _CreateIdentifier(context) {
    throw new Error("'CreateIdentifier was not overloaded by native module initialization");
  }
  _UpdateIdentifier(context, original) {
    throw new Error("'UpdateIdentifier was not overloaded by native module initialization");
  }
  _CreateIdentifier1(context, name) {
    throw new Error("'CreateIdentifier1 was not overloaded by native module initialization");
  }
  _UpdateIdentifier1(context, original, name) {
    throw new Error("'UpdateIdentifier1 was not overloaded by native module initialization");
  }
  _CreateIdentifier2(context, name, typeAnnotation) {
    throw new Error("'CreateIdentifier2 was not overloaded by native module initialization");
  }
  _UpdateIdentifier2(context, original, name, typeAnnotation) {
    throw new Error("'UpdateIdentifier2 was not overloaded by native module initialization");
  }
  _IdentifierNameConst(context, receiver) {
    throw new Error("'IdentifierNameConst was not overloaded by native module initialization");
  }
  _IdentifierName(context, receiver) {
    throw new Error("'IdentifierName was not overloaded by native module initialization");
  }
  _IdentifierSetName(context, receiver, newName) {
    throw new Error("'IdentifierSetName was not overloaded by native module initialization");
  }
  _IdentifierDecoratorsConst(context, receiver) {
    throw new Error("'IdentifierDecoratorsConst was not overloaded by native module initialization");
  }
  _IdentifierIsErrorPlaceHolderConst(context, receiver) {
    throw new Error("'IdentifierIsErrorPlaceHolderConst was not overloaded by native module initialization");
  }
  _IdentifierIsOptionalConst(context, receiver) {
    throw new Error("'IdentifierIsOptionalConst was not overloaded by native module initialization");
  }
  _IdentifierSetOptional(context, receiver, optional_arg) {
    throw new Error("'IdentifierSetOptional was not overloaded by native module initialization");
  }
  _IdentifierIsReferenceConst(context, receiver) {
    throw new Error("'IdentifierIsReferenceConst was not overloaded by native module initialization");
  }
  _IdentifierIsTdzConst(context, receiver) {
    throw new Error("'IdentifierIsTdzConst was not overloaded by native module initialization");
  }
  _IdentifierSetTdz(context, receiver) {
    throw new Error("'IdentifierSetTdz was not overloaded by native module initialization");
  }
  _IdentifierSetAccessor(context, receiver) {
    throw new Error("'IdentifierSetAccessor was not overloaded by native module initialization");
  }
  _IdentifierIsAccessorConst(context, receiver) {
    throw new Error("'IdentifierIsAccessorConst was not overloaded by native module initialization");
  }
  _IdentifierSetMutator(context, receiver) {
    throw new Error("'IdentifierSetMutator was not overloaded by native module initialization");
  }
  _IdentifierIsMutatorConst(context, receiver) {
    throw new Error("'IdentifierIsMutatorConst was not overloaded by native module initialization");
  }
  _IdentifierIsReceiverConst(context, receiver) {
    throw new Error("'IdentifierIsReceiverConst was not overloaded by native module initialization");
  }
  _IdentifierIsPrivateIdentConst(context, receiver) {
    throw new Error("'IdentifierIsPrivateIdentConst was not overloaded by native module initialization");
  }
  _IdentifierSetPrivate(context, receiver, isPrivate) {
    throw new Error("'IdentifierSetPrivate was not overloaded by native module initialization");
  }
  _IdentifierIsIgnoreBoxConst(context, receiver) {
    throw new Error("'IdentifierIsIgnoreBoxConst was not overloaded by native module initialization");
  }
  _IdentifierSetIgnoreBox(context, receiver) {
    throw new Error("'IdentifierSetIgnoreBox was not overloaded by native module initialization");
  }
  _IdentifierIsAnnotationDeclConst(context, receiver) {
    throw new Error("'IdentifierIsAnnotationDeclConst was not overloaded by native module initialization");
  }
  _IdentifierSetAnnotationDecl(context, receiver) {
    throw new Error("'IdentifierSetAnnotationDecl was not overloaded by native module initialization");
  }
  _IdentifierIsAnnotationUsageConst(context, receiver) {
    throw new Error("'IdentifierIsAnnotationUsageConst was not overloaded by native module initialization");
  }
  _IdentifierSetAnnotationUsage(context, receiver) {
    throw new Error("'IdentifierSetAnnotationUsage was not overloaded by native module initialization");
  }
  _IdentifierCloneReference(context, receiver, parent) {
    throw new Error("'IdentifierCloneReference was not overloaded by native module initialization");
  }
  _IdentifierValidateExpression(context, receiver) {
    throw new Error("'IdentifierValidateExpression was not overloaded by native module initialization");
  }
  _IdentifierTypeAnnotationConst(context, receiver) {
    throw new Error("'IdentifierTypeAnnotationConst was not overloaded by native module initialization");
  }
  _IdentifierSetTsTypeAnnotation(context, receiver, typeAnnotation) {
    throw new Error("'IdentifierSetTsTypeAnnotation was not overloaded by native module initialization");
  }
  _CreateOpaqueTypeNode1(context) {
    throw new Error("'CreateOpaqueTypeNode1 was not overloaded by native module initialization");
  }
  _UpdateOpaqueTypeNode1(context, original) {
    throw new Error("'UpdateOpaqueTypeNode1 was not overloaded by native module initialization");
  }
  _CreateBlockStatement(context, statementList, statementListSequenceLength) {
    throw new Error("'CreateBlockStatement was not overloaded by native module initialization");
  }
  _UpdateBlockStatement(context, original, statementList, statementListSequenceLength) {
    throw new Error("'UpdateBlockStatement was not overloaded by native module initialization");
  }
  _BlockStatementStatementsConst(context, receiver) {
    throw new Error("'BlockStatementStatementsConst was not overloaded by native module initialization");
  }
  _BlockStatementStatements(context, receiver) {
    throw new Error("'BlockStatementStatements was not overloaded by native module initialization");
  }
  _BlockStatementSetStatements(context, receiver, statementList, statementListSequenceLength) {
    throw new Error("'BlockStatementSetStatements was not overloaded by native module initialization");
  }
  _BlockStatementAddTrailingBlock(context, receiver, stmt, trailingBlock) {
    throw new Error("'BlockStatementAddTrailingBlock was not overloaded by native module initialization");
  }
  _CreateDirectEvalExpression(context, callee, _arguments, _argumentsSequenceLength, typeParams, optional_arg, parserStatus) {
    throw new Error("'CreateDirectEvalExpression was not overloaded by native module initialization");
  }
  _UpdateDirectEvalExpression(context, original, callee, _arguments, _argumentsSequenceLength, typeParams, optional_arg, parserStatus) {
    throw new Error("'UpdateDirectEvalExpression was not overloaded by native module initialization");
  }
  _CreateTSTypeParameterDeclaration(context, params, paramsSequenceLength, requiredParams) {
    throw new Error("'CreateTSTypeParameterDeclaration was not overloaded by native module initialization");
  }
  _UpdateTSTypeParameterDeclaration(context, original, params, paramsSequenceLength, requiredParams) {
    throw new Error("'UpdateTSTypeParameterDeclaration was not overloaded by native module initialization");
  }
  _TSTypeParameterDeclarationParamsConst(context, receiver) {
    throw new Error("'TSTypeParameterDeclarationParamsConst was not overloaded by native module initialization");
  }
  _TSTypeParameterDeclarationAddParam(context, receiver, param) {
    throw new Error("'TSTypeParameterDeclarationAddParam was not overloaded by native module initialization");
  }
  _TSTypeParameterDeclarationRequiredParamsConst(context, receiver) {
    throw new Error("'TSTypeParameterDeclarationRequiredParamsConst was not overloaded by native module initialization");
  }
  _CreateMethodDefinition(context, kind, key, value, modifiers, isComputed) {
    throw new Error("'CreateMethodDefinition was not overloaded by native module initialization");
  }
  _UpdateMethodDefinition(context, original, kind, key, value, modifiers, isComputed) {
    throw new Error("'UpdateMethodDefinition was not overloaded by native module initialization");
  }
  _MethodDefinitionKindConst(context, receiver) {
    throw new Error("'MethodDefinitionKindConst was not overloaded by native module initialization");
  }
  _MethodDefinitionIsConstructorConst(context, receiver) {
    throw new Error("'MethodDefinitionIsConstructorConst was not overloaded by native module initialization");
  }
  _MethodDefinitionIsExtensionMethodConst(context, receiver) {
    throw new Error("'MethodDefinitionIsExtensionMethodConst was not overloaded by native module initialization");
  }
  _MethodDefinitionOverloadsConst(context, receiver) {
    throw new Error("'MethodDefinitionOverloadsConst was not overloaded by native module initialization");
  }
  _MethodDefinitionBaseOverloadMethodConst(context, receiver) {
    throw new Error("'MethodDefinitionBaseOverloadMethodConst was not overloaded by native module initialization");
  }
  _MethodDefinitionBaseOverloadMethod(context, receiver) {
    throw new Error("'MethodDefinitionBaseOverloadMethod was not overloaded by native module initialization");
  }
  _MethodDefinitionAsyncPairMethodConst(context, receiver) {
    throw new Error("'MethodDefinitionAsyncPairMethodConst was not overloaded by native module initialization");
  }
  _MethodDefinitionAsyncPairMethod(context, receiver) {
    throw new Error("'MethodDefinitionAsyncPairMethod was not overloaded by native module initialization");
  }
  _MethodDefinitionSetOverloads(context, receiver, overloads, overloadsSequenceLength) {
    throw new Error("'MethodDefinitionSetOverloads was not overloaded by native module initialization");
  }
  _MethodDefinitionClearOverloads(context, receiver) {
    throw new Error("'MethodDefinitionClearOverloads was not overloaded by native module initialization");
  }
  _MethodDefinitionAddOverload(context, receiver, overload) {
    throw new Error("'MethodDefinitionAddOverload was not overloaded by native module initialization");
  }
  _MethodDefinitionSetBaseOverloadMethod(context, receiver, baseOverloadMethod) {
    throw new Error("'MethodDefinitionSetBaseOverloadMethod was not overloaded by native module initialization");
  }
  _MethodDefinitionSetAsyncPairMethod(context, receiver, method) {
    throw new Error("'MethodDefinitionSetAsyncPairMethod was not overloaded by native module initialization");
  }
  _MethodDefinitionHasOverload(context, receiver, overload) {
    throw new Error("'MethodDefinitionHasOverload was not overloaded by native module initialization");
  }
  _MethodDefinitionFunction(context, receiver) {
    throw new Error("'MethodDefinitionFunction was not overloaded by native module initialization");
  }
  _MethodDefinitionFunctionConst(context, receiver) {
    throw new Error("'MethodDefinitionFunctionConst was not overloaded by native module initialization");
  }
  _CreateTSNullKeyword(context) {
    throw new Error("'CreateTSNullKeyword was not overloaded by native module initialization");
  }
  _UpdateTSNullKeyword(context, original) {
    throw new Error("'UpdateTSNullKeyword was not overloaded by native module initialization");
  }
  _CreateTSInterfaceHeritage(context, expr) {
    throw new Error("'CreateTSInterfaceHeritage was not overloaded by native module initialization");
  }
  _UpdateTSInterfaceHeritage(context, original, expr) {
    throw new Error("'UpdateTSInterfaceHeritage was not overloaded by native module initialization");
  }
  _TSInterfaceHeritageExpr(context, receiver) {
    throw new Error("'TSInterfaceHeritageExpr was not overloaded by native module initialization");
  }
  _TSInterfaceHeritageExprConst(context, receiver) {
    throw new Error("'TSInterfaceHeritageExprConst was not overloaded by native module initialization");
  }
  _ExpressionIsGroupedConst(context, receiver) {
    throw new Error("'ExpressionIsGroupedConst was not overloaded by native module initialization");
  }
  _ExpressionSetGrouped(context, receiver) {
    throw new Error("'ExpressionSetGrouped was not overloaded by native module initialization");
  }
  _ExpressionAsLiteralConst(context, receiver) {
    throw new Error("'ExpressionAsLiteralConst was not overloaded by native module initialization");
  }
  _ExpressionAsLiteral(context, receiver) {
    throw new Error("'ExpressionAsLiteral was not overloaded by native module initialization");
  }
  _ExpressionIsLiteralConst(context, receiver) {
    throw new Error("'ExpressionIsLiteralConst was not overloaded by native module initialization");
  }
  _ExpressionIsTypeNodeConst(context, receiver) {
    throw new Error("'ExpressionIsTypeNodeConst was not overloaded by native module initialization");
  }
  _ExpressionIsAnnotatedExpressionConst(context, receiver) {
    throw new Error("'ExpressionIsAnnotatedExpressionConst was not overloaded by native module initialization");
  }
  _ExpressionAsTypeNode(context, receiver) {
    throw new Error("'ExpressionAsTypeNode was not overloaded by native module initialization");
  }
  _ExpressionAsTypeNodeConst(context, receiver) {
    throw new Error("'ExpressionAsTypeNodeConst was not overloaded by native module initialization");
  }
  _ExpressionAsAnnotatedExpression(context, receiver) {
    throw new Error("'ExpressionAsAnnotatedExpression was not overloaded by native module initialization");
  }
  _ExpressionAsAnnotatedExpressionConst(context, receiver) {
    throw new Error("'ExpressionAsAnnotatedExpressionConst was not overloaded by native module initialization");
  }
  _ExpressionIsBrokenExpressionConst(context, receiver) {
    throw new Error("'ExpressionIsBrokenExpressionConst was not overloaded by native module initialization");
  }
  _ExpressionToStringConst(context, receiver) {
    throw new Error("'ExpressionToStringConst was not overloaded by native module initialization");
  }
  _AnnotatedExpressionTypeAnnotationConst(context, receiver) {
    throw new Error("'AnnotatedExpressionTypeAnnotationConst was not overloaded by native module initialization");
  }
  _AnnotatedExpressionSetTsTypeAnnotation(context, receiver, typeAnnotation) {
    throw new Error("'AnnotatedExpressionSetTsTypeAnnotation was not overloaded by native module initialization");
  }
  _MaybeOptionalExpressionIsOptionalConst(context, receiver) {
    throw new Error("'MaybeOptionalExpressionIsOptionalConst was not overloaded by native module initialization");
  }
  _MaybeOptionalExpressionClearOptional(context, receiver) {
    throw new Error("'MaybeOptionalExpressionClearOptional was not overloaded by native module initialization");
  }
  _CreateSrcDumper(context, node) {
    throw new Error("'CreateSrcDumper was not overloaded by native module initialization");
  }
  _SrcDumperAdd(context, receiver, str) {
    throw new Error("'SrcDumperAdd was not overloaded by native module initialization");
  }
  _SrcDumperAdd1(context, receiver, i) {
    throw new Error("'SrcDumperAdd1 was not overloaded by native module initialization");
  }
  _SrcDumperAdd2(context, receiver, l) {
    throw new Error("'SrcDumperAdd2 was not overloaded by native module initialization");
  }
  _SrcDumperAdd3(context, receiver, f) {
    throw new Error("'SrcDumperAdd3 was not overloaded by native module initialization");
  }
  _SrcDumperAdd4(context, receiver, d) {
    throw new Error("'SrcDumperAdd4 was not overloaded by native module initialization");
  }
  _SrcDumperStrConst(context, receiver) {
    throw new Error("'SrcDumperStrConst was not overloaded by native module initialization");
  }
  _SrcDumperIncrIndent(context, receiver) {
    throw new Error("'SrcDumperIncrIndent was not overloaded by native module initialization");
  }
  _SrcDumperDecrIndent(context, receiver) {
    throw new Error("'SrcDumperDecrIndent was not overloaded by native module initialization");
  }
  _SrcDumperEndl(context, receiver, num) {
    throw new Error("'SrcDumperEndl was not overloaded by native module initialization");
  }
  _CreateETSClassLiteral(context, expr) {
    throw new Error("'CreateETSClassLiteral was not overloaded by native module initialization");
  }
  _UpdateETSClassLiteral(context, original, expr) {
    throw new Error("'UpdateETSClassLiteral was not overloaded by native module initialization");
  }
  _ETSClassLiteralExprConst(context, receiver) {
    throw new Error("'ETSClassLiteralExprConst was not overloaded by native module initialization");
  }
  _CreateBreakStatement(context) {
    throw new Error("'CreateBreakStatement was not overloaded by native module initialization");
  }
  _UpdateBreakStatement(context, original) {
    throw new Error("'UpdateBreakStatement was not overloaded by native module initialization");
  }
  _CreateBreakStatement1(context, ident) {
    throw new Error("'CreateBreakStatement1 was not overloaded by native module initialization");
  }
  _UpdateBreakStatement1(context, original, ident) {
    throw new Error("'UpdateBreakStatement1 was not overloaded by native module initialization");
  }
  _BreakStatementIdentConst(context, receiver) {
    throw new Error("'BreakStatementIdentConst was not overloaded by native module initialization");
  }
  _BreakStatementIdent(context, receiver) {
    throw new Error("'BreakStatementIdent was not overloaded by native module initialization");
  }
  _BreakStatementTargetConst(context, receiver) {
    throw new Error("'BreakStatementTargetConst was not overloaded by native module initialization");
  }
  _BreakStatementSetTarget(context, receiver, target) {
    throw new Error("'BreakStatementSetTarget was not overloaded by native module initialization");
  }
  _CreateRegExpLiteral(context, pattern, flags, flagsStr) {
    throw new Error("'CreateRegExpLiteral was not overloaded by native module initialization");
  }
  _UpdateRegExpLiteral(context, original, pattern, flags, flagsStr) {
    throw new Error("'UpdateRegExpLiteral was not overloaded by native module initialization");
  }
  _RegExpLiteralPatternConst(context, receiver) {
    throw new Error("'RegExpLiteralPatternConst was not overloaded by native module initialization");
  }
  _RegExpLiteralFlagsConst(context, receiver) {
    throw new Error("'RegExpLiteralFlagsConst was not overloaded by native module initialization");
  }
  _CreateTSMappedType(context, typeParameter, typeAnnotation, readonly_arg, optional_arg) {
    throw new Error("'CreateTSMappedType was not overloaded by native module initialization");
  }
  _UpdateTSMappedType(context, original, typeParameter, typeAnnotation, readonly_arg, optional_arg) {
    throw new Error("'UpdateTSMappedType was not overloaded by native module initialization");
  }
  _TSMappedTypeTypeParameter(context, receiver) {
    throw new Error("'TSMappedTypeTypeParameter was not overloaded by native module initialization");
  }
  _TSMappedTypeTypeAnnotation(context, receiver) {
    throw new Error("'TSMappedTypeTypeAnnotation was not overloaded by native module initialization");
  }
  _TSMappedTypeReadonly(context, receiver) {
    throw new Error("'TSMappedTypeReadonly was not overloaded by native module initialization");
  }
  _TSMappedTypeOptional(context, receiver) {
    throw new Error("'TSMappedTypeOptional was not overloaded by native module initialization");
  }
  _CreateTSAnyKeyword(context) {
    throw new Error("'CreateTSAnyKeyword was not overloaded by native module initialization");
  }
  _UpdateTSAnyKeyword(context, original) {
    throw new Error("'UpdateTSAnyKeyword was not overloaded by native module initialization");
  }
  _CreateClassDeclaration(context, def) {
    throw new Error("'CreateClassDeclaration was not overloaded by native module initialization");
  }
  _UpdateClassDeclaration(context, original, def) {
    throw new Error("'UpdateClassDeclaration was not overloaded by native module initialization");
  }
  _ClassDeclarationDefinition(context, receiver) {
    throw new Error("'ClassDeclarationDefinition was not overloaded by native module initialization");
  }
  _ClassDeclarationDefinitionConst(context, receiver) {
    throw new Error("'ClassDeclarationDefinitionConst was not overloaded by native module initialization");
  }
  _ClassDeclarationDecoratorsConst(context, receiver) {
    throw new Error("'ClassDeclarationDecoratorsConst was not overloaded by native module initialization");
  }
  _CreateTSIndexedAccessType(context, objectType, indexType) {
    throw new Error("'CreateTSIndexedAccessType was not overloaded by native module initialization");
  }
  _UpdateTSIndexedAccessType(context, original, objectType, indexType) {
    throw new Error("'UpdateTSIndexedAccessType was not overloaded by native module initialization");
  }
  _TSIndexedAccessTypeObjectTypeConst(context, receiver) {
    throw new Error("'TSIndexedAccessTypeObjectTypeConst was not overloaded by native module initialization");
  }
  _TSIndexedAccessTypeIndexTypeConst(context, receiver) {
    throw new Error("'TSIndexedAccessTypeIndexTypeConst was not overloaded by native module initialization");
  }
  _CreateTSQualifiedName(context, left, right) {
    throw new Error("'CreateTSQualifiedName was not overloaded by native module initialization");
  }
  _UpdateTSQualifiedName(context, original, left, right) {
    throw new Error("'UpdateTSQualifiedName was not overloaded by native module initialization");
  }
  _TSQualifiedNameLeftConst(context, receiver) {
    throw new Error("'TSQualifiedNameLeftConst was not overloaded by native module initialization");
  }
  _TSQualifiedNameLeft(context, receiver) {
    throw new Error("'TSQualifiedNameLeft was not overloaded by native module initialization");
  }
  _TSQualifiedNameRightConst(context, receiver) {
    throw new Error("'TSQualifiedNameRightConst was not overloaded by native module initialization");
  }
  _TSQualifiedNameRight(context, receiver) {
    throw new Error("'TSQualifiedNameRight was not overloaded by native module initialization");
  }
  _TSQualifiedNameNameConst(context, receiver) {
    throw new Error("'TSQualifiedNameNameConst was not overloaded by native module initialization");
  }
  _TSQualifiedNameResolveLeftMostQualifiedName(context, receiver) {
    throw new Error("'TSQualifiedNameResolveLeftMostQualifiedName was not overloaded by native module initialization");
  }
  _TSQualifiedNameResolveLeftMostQualifiedNameConst(context, receiver) {
    throw new Error("'TSQualifiedNameResolveLeftMostQualifiedNameConst was not overloaded by native module initialization");
  }
  _CreateAwaitExpression(context, argument) {
    throw new Error("'CreateAwaitExpression was not overloaded by native module initialization");
  }
  _UpdateAwaitExpression(context, original, argument) {
    throw new Error("'UpdateAwaitExpression was not overloaded by native module initialization");
  }
  _AwaitExpressionArgumentConst(context, receiver) {
    throw new Error("'AwaitExpressionArgumentConst was not overloaded by native module initialization");
  }
  _CreateValidationInfo(context) {
    throw new Error("'CreateValidationInfo was not overloaded by native module initialization");
  }
  _ValidationInfoFailConst(context, receiver) {
    throw new Error("'ValidationInfoFailConst was not overloaded by native module initialization");
  }
  _CreateContinueStatement(context) {
    throw new Error("'CreateContinueStatement was not overloaded by native module initialization");
  }
  _UpdateContinueStatement(context, original) {
    throw new Error("'UpdateContinueStatement was not overloaded by native module initialization");
  }
  _CreateContinueStatement1(context, ident) {
    throw new Error("'CreateContinueStatement1 was not overloaded by native module initialization");
  }
  _UpdateContinueStatement1(context, original, ident) {
    throw new Error("'UpdateContinueStatement1 was not overloaded by native module initialization");
  }
  _ContinueStatementIdentConst(context, receiver) {
    throw new Error("'ContinueStatementIdentConst was not overloaded by native module initialization");
  }
  _ContinueStatementIdent(context, receiver) {
    throw new Error("'ContinueStatementIdent was not overloaded by native module initialization");
  }
  _ContinueStatementTargetConst(context, receiver) {
    throw new Error("'ContinueStatementTargetConst was not overloaded by native module initialization");
  }
  _ContinueStatementSetTarget(context, receiver, target) {
    throw new Error("'ContinueStatementSetTarget was not overloaded by native module initialization");
  }
  _CreateETSNewMultiDimArrayInstanceExpression(context, typeReference, dimensions, dimensionsSequenceLength) {
    throw new Error("'CreateETSNewMultiDimArrayInstanceExpression was not overloaded by native module initialization");
  }
  _UpdateETSNewMultiDimArrayInstanceExpression(context, original, typeReference, dimensions, dimensionsSequenceLength) {
    throw new Error("'UpdateETSNewMultiDimArrayInstanceExpression was not overloaded by native module initialization");
  }
  _CreateETSNewMultiDimArrayInstanceExpression1(context, other) {
    throw new Error("'CreateETSNewMultiDimArrayInstanceExpression1 was not overloaded by native module initialization");
  }
  _UpdateETSNewMultiDimArrayInstanceExpression1(context, original, other) {
    throw new Error("'UpdateETSNewMultiDimArrayInstanceExpression1 was not overloaded by native module initialization");
  }
  _ETSNewMultiDimArrayInstanceExpressionTypeReference(context, receiver) {
    throw new Error("'ETSNewMultiDimArrayInstanceExpressionTypeReference was not overloaded by native module initialization");
  }
  _ETSNewMultiDimArrayInstanceExpressionTypeReferenceConst(context, receiver) {
    throw new Error("'ETSNewMultiDimArrayInstanceExpressionTypeReferenceConst was not overloaded by native module initialization");
  }
  _ETSNewMultiDimArrayInstanceExpressionDimensions(context, receiver) {
    throw new Error("'ETSNewMultiDimArrayInstanceExpressionDimensions was not overloaded by native module initialization");
  }
  _ETSNewMultiDimArrayInstanceExpressionDimensionsConst(context, receiver) {
    throw new Error("'ETSNewMultiDimArrayInstanceExpressionDimensionsConst was not overloaded by native module initialization");
  }
  _CreateTSNamedTupleMember(context, label, elementType, optional_arg) {
    throw new Error("'CreateTSNamedTupleMember was not overloaded by native module initialization");
  }
  _UpdateTSNamedTupleMember(context, original, label, elementType, optional_arg) {
    throw new Error("'UpdateTSNamedTupleMember was not overloaded by native module initialization");
  }
  _TSNamedTupleMemberLabelConst(context, receiver) {
    throw new Error("'TSNamedTupleMemberLabelConst was not overloaded by native module initialization");
  }
  _TSNamedTupleMemberElementType(context, receiver) {
    throw new Error("'TSNamedTupleMemberElementType was not overloaded by native module initialization");
  }
  _TSNamedTupleMemberElementTypeConst(context, receiver) {
    throw new Error("'TSNamedTupleMemberElementTypeConst was not overloaded by native module initialization");
  }
  _TSNamedTupleMemberIsOptionalConst(context, receiver) {
    throw new Error("'TSNamedTupleMemberIsOptionalConst was not overloaded by native module initialization");
  }
  _CreateImportExpression(context, source) {
    throw new Error("'CreateImportExpression was not overloaded by native module initialization");
  }
  _UpdateImportExpression(context, original, source) {
    throw new Error("'UpdateImportExpression was not overloaded by native module initialization");
  }
  _ImportExpressionSource(context, receiver) {
    throw new Error("'ImportExpressionSource was not overloaded by native module initialization");
  }
  _ImportExpressionSourceConst(context, receiver) {
    throw new Error("'ImportExpressionSourceConst was not overloaded by native module initialization");
  }
  _CreateAstDumper(context, node, sourceCode) {
    throw new Error("'CreateAstDumper was not overloaded by native module initialization");
  }
  _AstDumperModifierToString(context, receiver, flags) {
    throw new Error("'AstDumperModifierToString was not overloaded by native module initialization");
  }
  _AstDumperTypeOperatorToString(context, receiver, operatorType) {
    throw new Error("'AstDumperTypeOperatorToString was not overloaded by native module initialization");
  }
  _AstDumperStrConst(context, receiver) {
    throw new Error("'AstDumperStrConst was not overloaded by native module initialization");
  }
  _CreateETSNullTypeIr(context) {
    throw new Error("'CreateETSNullTypeIr was not overloaded by native module initialization");
  }
  _UpdateETSNullTypeIr(context, original) {
    throw new Error("'UpdateETSNullTypeIr was not overloaded by native module initialization");
  }
  _CreateETSUndefinedTypeIr(context) {
    throw new Error("'CreateETSUndefinedTypeIr was not overloaded by native module initialization");
  }
  _UpdateETSUndefinedTypeIr(context, original) {
    throw new Error("'UpdateETSUndefinedTypeIr was not overloaded by native module initialization");
  }
  _CreateTypeofExpression(context, argument) {
    throw new Error("'CreateTypeofExpression was not overloaded by native module initialization");
  }
  _UpdateTypeofExpression(context, original, argument) {
    throw new Error("'UpdateTypeofExpression was not overloaded by native module initialization");
  }
  _TypeofExpressionArgumentConst(context, receiver) {
    throw new Error("'TypeofExpressionArgumentConst was not overloaded by native module initialization");
  }
  _CreateTSEnumMember(context, key, init) {
    throw new Error("'CreateTSEnumMember was not overloaded by native module initialization");
  }
  _UpdateTSEnumMember(context, original, key, init) {
    throw new Error("'UpdateTSEnumMember was not overloaded by native module initialization");
  }
  _CreateTSEnumMember1(context, key, init, isGenerated) {
    throw new Error("'CreateTSEnumMember1 was not overloaded by native module initialization");
  }
  _UpdateTSEnumMember1(context, original, key, init, isGenerated) {
    throw new Error("'UpdateTSEnumMember1 was not overloaded by native module initialization");
  }
  _TSEnumMemberKeyConst(context, receiver) {
    throw new Error("'TSEnumMemberKeyConst was not overloaded by native module initialization");
  }
  _TSEnumMemberKey(context, receiver) {
    throw new Error("'TSEnumMemberKey was not overloaded by native module initialization");
  }
  _TSEnumMemberInitConst(context, receiver) {
    throw new Error("'TSEnumMemberInitConst was not overloaded by native module initialization");
  }
  _TSEnumMemberInit(context, receiver) {
    throw new Error("'TSEnumMemberInit was not overloaded by native module initialization");
  }
  _TSEnumMemberIsGeneratedConst(context, receiver) {
    throw new Error("'TSEnumMemberIsGeneratedConst was not overloaded by native module initialization");
  }
  _TSEnumMemberNameConst(context, receiver) {
    throw new Error("'TSEnumMemberNameConst was not overloaded by native module initialization");
  }
  _CreateSwitchStatement(context, discriminant, cases, casesSequenceLength) {
    throw new Error("'CreateSwitchStatement was not overloaded by native module initialization");
  }
  _UpdateSwitchStatement(context, original, discriminant, cases, casesSequenceLength) {
    throw new Error("'UpdateSwitchStatement was not overloaded by native module initialization");
  }
  _SwitchStatementDiscriminantConst(context, receiver) {
    throw new Error("'SwitchStatementDiscriminantConst was not overloaded by native module initialization");
  }
  _SwitchStatementDiscriminant(context, receiver) {
    throw new Error("'SwitchStatementDiscriminant was not overloaded by native module initialization");
  }
  _SwitchStatementCasesConst(context, receiver) {
    throw new Error("'SwitchStatementCasesConst was not overloaded by native module initialization");
  }
  _SwitchStatementCases(context, receiver) {
    throw new Error("'SwitchStatementCases was not overloaded by native module initialization");
  }
  _CreateDoWhileStatement(context, body, test) {
    throw new Error("'CreateDoWhileStatement was not overloaded by native module initialization");
  }
  _UpdateDoWhileStatement(context, original, body, test) {
    throw new Error("'UpdateDoWhileStatement was not overloaded by native module initialization");
  }
  _DoWhileStatementBodyConst(context, receiver) {
    throw new Error("'DoWhileStatementBodyConst was not overloaded by native module initialization");
  }
  _DoWhileStatementBody(context, receiver) {
    throw new Error("'DoWhileStatementBody was not overloaded by native module initialization");
  }
  _DoWhileStatementTestConst(context, receiver) {
    throw new Error("'DoWhileStatementTestConst was not overloaded by native module initialization");
  }
  _DoWhileStatementTest(context, receiver) {
    throw new Error("'DoWhileStatementTest was not overloaded by native module initialization");
  }
  _CreateCatchClause(context, param, body) {
    throw new Error("'CreateCatchClause was not overloaded by native module initialization");
  }
  _UpdateCatchClause(context, original, param, body) {
    throw new Error("'UpdateCatchClause was not overloaded by native module initialization");
  }
  _CatchClauseParam(context, receiver) {
    throw new Error("'CatchClauseParam was not overloaded by native module initialization");
  }
  _CatchClauseParamConst(context, receiver) {
    throw new Error("'CatchClauseParamConst was not overloaded by native module initialization");
  }
  _CatchClauseBody(context, receiver) {
    throw new Error("'CatchClauseBody was not overloaded by native module initialization");
  }
  _CatchClauseBodyConst(context, receiver) {
    throw new Error("'CatchClauseBodyConst was not overloaded by native module initialization");
  }
  _CatchClauseIsDefaultCatchClauseConst(context, receiver) {
    throw new Error("'CatchClauseIsDefaultCatchClauseConst was not overloaded by native module initialization");
  }
  _CreateSequenceExpression(context, sequence_arg, sequence_argSequenceLength) {
    throw new Error("'CreateSequenceExpression was not overloaded by native module initialization");
  }
  _UpdateSequenceExpression(context, original, sequence_arg, sequence_argSequenceLength) {
    throw new Error("'UpdateSequenceExpression was not overloaded by native module initialization");
  }
  _SequenceExpressionSequenceConst(context, receiver) {
    throw new Error("'SequenceExpressionSequenceConst was not overloaded by native module initialization");
  }
  _SequenceExpressionSequence(context, receiver) {
    throw new Error("'SequenceExpressionSequence was not overloaded by native module initialization");
  }
  _CreateArrowFunctionExpression(context, func) {
    throw new Error("'CreateArrowFunctionExpression was not overloaded by native module initialization");
  }
  _UpdateArrowFunctionExpression(context, original, func) {
    throw new Error("'UpdateArrowFunctionExpression was not overloaded by native module initialization");
  }
  _CreateArrowFunctionExpression1(context, other) {
    throw new Error("'CreateArrowFunctionExpression1 was not overloaded by native module initialization");
  }
  _UpdateArrowFunctionExpression1(context, original, other) {
    throw new Error("'UpdateArrowFunctionExpression1 was not overloaded by native module initialization");
  }
  _ArrowFunctionExpressionFunctionConst(context, receiver) {
    throw new Error("'ArrowFunctionExpressionFunctionConst was not overloaded by native module initialization");
  }
  _ArrowFunctionExpressionFunction(context, receiver) {
    throw new Error("'ArrowFunctionExpressionFunction was not overloaded by native module initialization");
  }
  _ArrowFunctionExpressionCreateTypeAnnotation(context, receiver) {
    throw new Error("'ArrowFunctionExpressionCreateTypeAnnotation was not overloaded by native module initialization");
  }
  _ArrowFunctionExpressionAnnotations(context, receiver) {
    throw new Error("'ArrowFunctionExpressionAnnotations was not overloaded by native module initialization");
  }
  _ArrowFunctionExpressionAnnotationsConst(context, receiver) {
    throw new Error("'ArrowFunctionExpressionAnnotationsConst was not overloaded by native module initialization");
  }
  _ArrowFunctionExpressionSetAnnotations(context, receiver, annotations, annotationsSequenceLength) {
    throw new Error("'ArrowFunctionExpressionSetAnnotations was not overloaded by native module initialization");
  }
  _CreateOmittedExpression(context) {
    throw new Error("'CreateOmittedExpression was not overloaded by native module initialization");
  }
  _UpdateOmittedExpression(context, original) {
    throw new Error("'UpdateOmittedExpression was not overloaded by native module initialization");
  }
  _CreateETSNewClassInstanceExpression(context, typeReference, _arguments, _argumentsSequenceLength) {
    throw new Error("'CreateETSNewClassInstanceExpression was not overloaded by native module initialization");
  }
  _UpdateETSNewClassInstanceExpression(context, original, typeReference, _arguments, _argumentsSequenceLength) {
    throw new Error("'UpdateETSNewClassInstanceExpression was not overloaded by native module initialization");
  }
  _CreateETSNewClassInstanceExpression1(context, other) {
    throw new Error("'CreateETSNewClassInstanceExpression1 was not overloaded by native module initialization");
  }
  _UpdateETSNewClassInstanceExpression1(context, original, other) {
    throw new Error("'UpdateETSNewClassInstanceExpression1 was not overloaded by native module initialization");
  }
  _ETSNewClassInstanceExpressionGetTypeRefConst(context, receiver) {
    throw new Error("'ETSNewClassInstanceExpressionGetTypeRefConst was not overloaded by native module initialization");
  }
  _ETSNewClassInstanceExpressionGetArguments(context, receiver) {
    throw new Error("'ETSNewClassInstanceExpressionGetArguments was not overloaded by native module initialization");
  }
  _ETSNewClassInstanceExpressionGetArgumentsConst(context, receiver) {
    throw new Error("'ETSNewClassInstanceExpressionGetArgumentsConst was not overloaded by native module initialization");
  }
  _ETSNewClassInstanceExpressionSetArguments(context, receiver, _arguments, _argumentsSequenceLength) {
    throw new Error("'ETSNewClassInstanceExpressionSetArguments was not overloaded by native module initialization");
  }
  _ETSNewClassInstanceExpressionAddToArgumentsFront(context, receiver, expr) {
    throw new Error("'ETSNewClassInstanceExpressionAddToArgumentsFront was not overloaded by native module initialization");
  }
  _CreateTSAsExpression(context, expression, typeAnnotation, isConst) {
    throw new Error("'CreateTSAsExpression was not overloaded by native module initialization");
  }
  _UpdateTSAsExpression(context, original, expression, typeAnnotation, isConst) {
    throw new Error("'UpdateTSAsExpression was not overloaded by native module initialization");
  }
  _TSAsExpressionExprConst(context, receiver) {
    throw new Error("'TSAsExpressionExprConst was not overloaded by native module initialization");
  }
  _TSAsExpressionExpr(context, receiver) {
    throw new Error("'TSAsExpressionExpr was not overloaded by native module initialization");
  }
  _TSAsExpressionSetExpr(context, receiver, expr) {
    throw new Error("'TSAsExpressionSetExpr was not overloaded by native module initialization");
  }
  _TSAsExpressionIsConstConst(context, receiver) {
    throw new Error("'TSAsExpressionIsConstConst was not overloaded by native module initialization");
  }
  _TSAsExpressionSetUncheckedCast(context, receiver, isUncheckedCast) {
    throw new Error("'TSAsExpressionSetUncheckedCast was not overloaded by native module initialization");
  }
  _TSAsExpressionTypeAnnotationConst(context, receiver) {
    throw new Error("'TSAsExpressionTypeAnnotationConst was not overloaded by native module initialization");
  }
  _TSAsExpressionSetTsTypeAnnotation(context, receiver, typeAnnotation) {
    throw new Error("'TSAsExpressionSetTsTypeAnnotation was not overloaded by native module initialization");
  }
  _CreateForUpdateStatement(context, init, test, update, body) {
    throw new Error("'CreateForUpdateStatement was not overloaded by native module initialization");
  }
  _UpdateForUpdateStatement(context, original, init, test, update, body) {
    throw new Error("'CreateForUpdateStatement was not overloaded by native module initialization");
  }
  _ForUpdateStatementInit(context, receiver) {
    throw new Error("'ForUpdateStatementInit was not overloaded by native module initialization");
  }
  _ForUpdateStatementInitConst(context, receiver) {
    throw new Error("'ForUpdateStatementInitConst was not overloaded by native module initialization");
  }
  _ForUpdateStatementTest(context, receiver) {
    throw new Error("'ForUpdateStatementTest was not overloaded by native module initialization");
  }
  _ForUpdateStatementTestConst(context, receiver) {
    throw new Error("'ForUpdateStatementTestConst was not overloaded by native module initialization");
  }
  _ForUpdateStatementUpdateConst(context, receiver) {
    throw new Error("'ForUpdateStatementUpdateConst was not overloaded by native module initialization");
  }
  _ForUpdateStatementBody(context, receiver) {
    throw new Error("'ForUpdateStatementBody was not overloaded by native module initialization");
  }
  _ForUpdateStatementBodyConst(context, receiver) {
    throw new Error("'ForUpdateStatementBodyConst was not overloaded by native module initialization");
  }
  _CreateETSTypeReferencePart(context, name, typeParams, prev) {
    throw new Error("'CreateETSTypeReferencePart was not overloaded by native module initialization");
  }
  _UpdateETSTypeReferencePart(context, original, name, typeParams, prev) {
    throw new Error("'UpdateETSTypeReferencePart was not overloaded by native module initialization");
  }
  _CreateETSTypeReferencePart1(context, name) {
    throw new Error("'CreateETSTypeReferencePart1 was not overloaded by native module initialization");
  }
  _UpdateETSTypeReferencePart1(context, original, name) {
    throw new Error("'UpdateETSTypeReferencePart1 was not overloaded by native module initialization");
  }
  _ETSTypeReferencePartPrevious(context, receiver) {
    throw new Error("'ETSTypeReferencePartPrevious was not overloaded by native module initialization");
  }
  _ETSTypeReferencePartPreviousConst(context, receiver) {
    throw new Error("'ETSTypeReferencePartPreviousConst was not overloaded by native module initialization");
  }
  _ETSTypeReferencePartName(context, receiver) {
    throw new Error("'ETSTypeReferencePartName was not overloaded by native module initialization");
  }
  _ETSTypeReferencePartTypeParams(context, receiver) {
    throw new Error("'ETSTypeReferencePartTypeParams was not overloaded by native module initialization");
  }
  _ETSTypeReferencePartNameConst(context, receiver) {
    throw new Error("'ETSTypeReferencePartNameConst was not overloaded by native module initialization");
  }
  _ETSReExportDeclarationGetETSImportDeclarationsConst(context, receiver) {
    throw new Error("'ETSReExportDeclarationGetETSImportDeclarationsConst was not overloaded by native module initialization");
  }
  _ETSReExportDeclarationGetETSImportDeclarations(context, receiver) {
    throw new Error("'ETSReExportDeclarationGetETSImportDeclarations was not overloaded by native module initialization");
  }
  _ETSReExportDeclarationGetProgramPathConst(context, receiver) {
    throw new Error("'ETSReExportDeclarationGetProgramPathConst was not overloaded by native module initialization");
  }
  _CreateETSPrimitiveType(context, type) {
    throw new Error("'CreateETSPrimitiveType was not overloaded by native module initialization");
  }
  _UpdateETSPrimitiveType(context, original, type) {
    throw new Error("'UpdateETSPrimitiveType was not overloaded by native module initialization");
  }
  _ETSPrimitiveTypeGetPrimitiveTypeConst(context, receiver) {
    throw new Error("'ETSPrimitiveTypeGetPrimitiveTypeConst was not overloaded by native module initialization");
  }
  _TypeNodeAnnotations(context, receiver) {
    throw new Error("'TypeNodeAnnotations was not overloaded by native module initialization");
  }
  _TypeNodeAnnotationsConst(context, receiver) {
    throw new Error("'TypeNodeAnnotationsConst was not overloaded by native module initialization");
  }
  _TypeNodeSetAnnotations(context, receiver, annotations, annotationsSequenceLength) {
    throw new Error("'TypeNodeSetAnnotations was not overloaded by native module initialization");
  }
  _CreateNewExpression(context, callee, _arguments, _argumentsSequenceLength) {
    throw new Error("'CreateNewExpression was not overloaded by native module initialization");
  }
  _UpdateNewExpression(context, original, callee, _arguments, _argumentsSequenceLength) {
    throw new Error("'UpdateNewExpression was not overloaded by native module initialization");
  }
  _NewExpressionCalleeConst(context, receiver) {
    throw new Error("'NewExpressionCalleeConst was not overloaded by native module initialization");
  }
  _NewExpressionArgumentsConst(context, receiver) {
    throw new Error("'NewExpressionArgumentsConst was not overloaded by native module initialization");
  }
  _CreateTSParameterProperty(context, accessibility, parameter, readonly_arg, isStatic, isExport) {
    throw new Error("'CreateTSParameterProperty was not overloaded by native module initialization");
  }
  _UpdateTSParameterProperty(context, original, accessibility, parameter, readonly_arg, isStatic, isExport) {
    throw new Error("'UpdateTSParameterProperty was not overloaded by native module initialization");
  }
  _TSParameterPropertyAccessibilityConst(context, receiver) {
    throw new Error("'TSParameterPropertyAccessibilityConst was not overloaded by native module initialization");
  }
  _TSParameterPropertyReadonlyConst(context, receiver) {
    throw new Error("'TSParameterPropertyReadonlyConst was not overloaded by native module initialization");
  }
  _TSParameterPropertyIsStaticConst(context, receiver) {
    throw new Error("'TSParameterPropertyIsStaticConst was not overloaded by native module initialization");
  }
  _TSParameterPropertyIsExportConst(context, receiver) {
    throw new Error("'TSParameterPropertyIsExportConst was not overloaded by native module initialization");
  }
  _TSParameterPropertyParameterConst(context, receiver) {
    throw new Error("'TSParameterPropertyParameterConst was not overloaded by native module initialization");
  }
  _CreateETSWildcardType(context, typeReference, flags) {
    throw new Error("'CreateETSWildcardType was not overloaded by native module initialization");
  }
  _UpdateETSWildcardType(context, original, typeReference, flags) {
    throw new Error("'UpdateETSWildcardType was not overloaded by native module initialization");
  }
  _ETSWildcardTypeTypeReference(context, receiver) {
    throw new Error("'ETSWildcardTypeTypeReference was not overloaded by native module initialization");
  }
  _ETSWildcardTypeTypeReferenceConst(context, receiver) {
    throw new Error("'ETSWildcardTypeTypeReferenceConst was not overloaded by native module initialization");
  }
  _CreateTSThisType(context) {
    throw new Error("'CreateTSThisType was not overloaded by native module initialization");
  }
  _UpdateTSThisType(context, original) {
    throw new Error("'UpdateTSThisType was not overloaded by native module initialization");
  }
  _CreateInterfaceDecl(context, name) {
    throw new Error("'CreateInterfaceDecl was not overloaded by native module initialization");
  }
  _CreateInterfaceDecl1(context, name, declNode) {
    throw new Error("'CreateInterfaceDecl1 was not overloaded by native module initialization");
  }
  _CreateFunctionDecl(context, name, node) {
    throw new Error("'CreateFunctionDecl was not overloaded by native module initialization");
  }
}
exports.Es2pandaNativeModule = Es2pandaNativeModule;