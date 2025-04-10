/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';
import { assert } from 'console';
import uiconfig from './arkui_config_util'
import { ComponentFile } from './component_file';

function readLangTemplate(): string {
    return fs.readFileSync('./pattern/arkts_component_decl.pattern', 'utf8')
}

function extractSignatureComment(
    signature: ts.CallSignatureDeclaration,
    sourceFile: ts.SourceFile
): string {
    const jsDoc = (signature as any).jsDoc?.[0] as ts.JSDoc | undefined;
    if (!jsDoc) return '';


    const commentText = sourceFile.text
        .slice(jsDoc.getStart(sourceFile), jsDoc.getEnd())

    return commentText.split('\n').map((l, index) => {
        if (index == 0) {
            return l.trimStart();
        }
        return ' ' + l.trimStart()
    }).join('\n')
}

interface ComponnetFunctionInfo {
    sig: string[],
    comment: string
}

function getAllInterfaceCallSignature(node: ts.InterfaceDeclaration, originalCode: ts.SourceFile): Array<ComponnetFunctionInfo> {
    const signatureParams: Array<string[]> = [];
    const comments: string[] = []

    node.members.forEach(member => {
        if (ts.isCallSignatureDeclaration(member)) {
            const currentSignature: string[] = [];
            const comment = extractSignatureComment(member, originalCode);
            comments.push(comment);

            member.parameters.forEach(param => {
                currentSignature.push(param.getText(originalCode));
            });
            signatureParams.push(currentSignature)
        }
    });

    const result: Array<ComponnetFunctionInfo> = new Array
    for (let i = 0; i < signatureParams.length; i++) {
        result.push({ sig: signatureParams[i], comment: comments[i] })
    }
    return result;
}

function handleComponentInterface(node: ts.InterfaceDeclaration, file: ComponentFile) {
    const result = getAllInterfaceCallSignature(node, file.sourceFile)
    const declPattern = readLangTemplate()
    const declComponentFunction: string[] = []
    result.forEach(p => {
        declComponentFunction.push(declPattern
            .replaceAll("%COMPONENT_NAME%", file.componentName)
            .replaceAll("%FUNCTION_PARAMETERS%", p.sig?.map(it => `${it}, `).join("") ?? "")
            .replaceAll("%COMPONENT_COMMENT%", p.comment))
    })
    return declComponentFunction.join('\n')
}

function transformComponentAttribute(node: ts.ClassDeclaration): ts.Node {
    const members = node.members.map(member => {
        if (!ts.isMethodDeclaration(member)) {
            return undefined;
        }
        const returnType = ts.factory.createThisTypeNode();
        return ts.factory.createMethodSignature(
            undefined,
            member.name,
            member.questionToken,
            member.typeParameters,
            member.parameters,
            returnType
        ) as ts.TypeElement;
    }).filter((member): member is ts.MethodSignature => member !== undefined);

    const exportModifier = ts.factory.createModifier(ts.SyntaxKind.ExportKeyword);
    const delcareModifier = ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword);

    return ts.factory.createInterfaceDeclaration(
        [exportModifier, delcareModifier],
        node.name as ts.Identifier,
        node.typeParameters,
        node.heritageClauses,
        members
    );
}

function isComponentAttribute(node: ts.Node) {
    if (!(ts.isClassDeclaration(node) && node.name?.escapedText)) {
        return false;
    }
    return uiconfig.isComponent(node.name.escapedText, 'Attribute')
}

function isComponentInterface(node: ts.Node) {
    if (!(ts.isInterfaceDeclaration(node) && node.name?.escapedText)) {
        return false;
    }
    return uiconfig.isComponent(node.name.escapedText, 'Interface')
}

function isComponentSuperClass(node: ts.Node) {
    if (!(ts.isClassDeclaration(node) && node.name?.escapedText)) {
        return false;
    }
    return uiconfig.isRelatedToComponent(node.name.escapedText)
}

export function interfaceTransformer(program: ts.Program, componentFile: ComponentFile): ts.TransformerFactory<ts.SourceFile> {
    return (context) => {
        const visit: ts.Visitor = (node) => {
            if (isComponentInterface(node)) {
                componentFile.appendFunction(handleComponentInterface(node as ts.InterfaceDeclaration, componentFile))
                return undefined;
            }
            if (isComponentAttribute(node) || isComponentSuperClass(node)) {
                return transformComponentAttribute(node as ts.ClassDeclaration)
            }
            return ts.visitEachChild(node, visit, context);
        };

        return (sourceFile) => ts.visitNode(sourceFile, visit);
    };
}

export function componentInterfaceCollector(componentFile: ComponentFile): ts.TransformerFactory<ts.SourceFile> {
    return (context) => {
        const visit: ts.Visitor = (node) => {
            if (isComponentAttribute(node)) {
                componentFile.componentName = ((node as ts.ClassDeclaration).name!.escapedText as string).replaceAll('Attribute', '');
                (node as ts.ClassDeclaration).heritageClauses?.forEach(clause => {
                    if (clause.token === ts.SyntaxKind.ExtendsKeyword) {
                        clause.types.forEach(t => {
                            const superClassName = (t.expression as ts.Identifier).escapedText.toString();
                            uiconfig.addComponentSuperclass(superClassName);
                        });
                    }
                });
            }
            return ts.visitEachChild(node, visit, context);
        };

        return (sourceFile) => ts.visitNode(sourceFile, visit);
    };
}