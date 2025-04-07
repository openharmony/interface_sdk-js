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

function escapeRegExp(str: string) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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

export function handleComponentInterface(node: ts.InterfaceDeclaration, file: ComponentFile) {
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

export function handleComponentAttribute(node: ts.ClassDeclaration, originalSource: ts.SourceFile) {
    const commentRanges = ts.getLeadingCommentRanges(originalSource.text, node.pos);
    const classStart = commentRanges?.[0]?.pos ?? node.getStart(originalSource);
    const classEnd = node.getEnd();
    const originalCode = originalSource.text.substring(classStart, classEnd);

    const superClasses = new Array<string>
    const className = node.name!.escapedText.toString()
    const classPattern = new RegExp(`\\b${className}\\b`, 'g');
    const genericPattern = new RegExp(`<\\s*${className}\\s*>`, 'g');

    {
        node.heritageClauses?.forEach(clause => {
            if (clause.token == ts.SyntaxKind.ExtendsKeyword) {
                clause.types.forEach(t => {
                    superClasses.push((t.expression as ts.Identifier).escapedText.toString())
                })
            }

        })
    }

    assert(superClasses.length <= 1)

    const modifiedCode = originalCode
        .replace(/declare\s+class/, 'export interface')
        .replace(new RegExp(`(\\))\\s*:\\s*${className}\\s*;`, 'g'), '$1: this;')
        .replace(new RegExp(`(@returns\\s*{\\s*)${className}(\\s*})`, 'g'), '$1this$2')
        .replace(genericPattern, '')

    if (superClasses.length == 1) {
        const superClassName = superClasses[0]
        modifiedCode.replace(
            new RegExp(`(extends\\s+)${escapeRegExp(superClassName)}\\s*<[^>]+>`, 'g'),
            `$1${superClassName}`
        );
    }

    return modifiedCode
}

function isComponentAttribute(node: ts.Node, file: ComponentFile) {
    if (!(ts.isClassDeclaration(node) && node.name?.escapedText)) {
        return false;
    }
    const name = node.name.escapedText;
    if (!(name.endsWith('Attribute') && uiconfig.componentSet.has(name.replaceAll('Attribute', '')))) {
        return false;
    }
    file.componentName = name.replaceAll('Attribute', '')
    return true;
}

function isComponentInterface(node: ts.Node, file: ComponentFile) {
    if (!(ts.isInterfaceDeclaration(node) && node.name?.escapedText)) {
        return false;
    }
    const name = node.name.escapedText;
    if (!(name.endsWith('Interface') && uiconfig.componentSet.has(name.replaceAll('Interface', '')))) {
        return false;
    }
    file.componentName = name.replaceAll('Interface', '')
    return true;
}

export function convertComponentDeclaration(node: ts.Node, file: ComponentFile): boolean {
    if (isComponentAttribute(node, file)) {
        file.appendAttribute(handleComponentAttribute(node as ts.ClassDeclaration, file.sourceFile))
        return true;
    } else if (isComponentInterface(node, file)) {
        file.appendFunction(handleComponentInterface(node as ts.InterfaceDeclaration, file))
        return true;
    }
    return false;
}