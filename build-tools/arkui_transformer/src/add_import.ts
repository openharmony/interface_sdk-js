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

import * as ts from "typescript";
import uiconfig from './arkui_config_util';

export function addImportTransformer(): ts.TransformerFactory<ts.SourceFile> {
    return (context) => {
        return (sourceFile) => {
            const [updatedSource, targetImport] = createTargetImport(sourceFile, context);
            const insertPosition = findBestInsertPosition(updatedSource);

            const newStatements = [
                ...updatedSource.statements.slice(0, insertPosition),
                ...targetImport,
                ...updatedSource.statements.slice(insertPosition)
            ];

            return ts.factory.updateSourceFile(
                updatedSource,
                newStatements,
                updatedSource.isDeclarationFile,
                updatedSource.referencedFiles,
                updatedSource.typeReferenceDirectives,
                updatedSource.hasNoDefaultLib,
                updatedSource.libReferenceDirectives
            );
        };
    };
}

function findBestInsertPosition(sourceFile: ts.SourceFile): number {
    let lastImportIndex = -1;
    sourceFile.statements.forEach((stmt, index) => {
        if (ts.isImportDeclaration(stmt)) {
            lastImportIndex = index;
        }
    });

    if (lastImportIndex !== -1) {
        return lastImportIndex + 1;
    }

    return findFileKitCommentInsertIndex(sourceFile);
}

function handleImportDeclaration(node: ts.ImportDeclaration): [ts.Node | undefined, boolean] {
    if (node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
        const moduleText = node.moduleSpecifier.text;
        if (moduleText.includes("common")) {
            const importClause = node.importClause;
            if (importClause && ts.isImportClause(importClause) && importClause.namedBindings && ts.isNamedImports(importClause.namedBindings)) {
                const namedImports = importClause.namedBindings.elements;
                const existingImports = namedImports.map((element) => element.name.text);

                if (!existingImports.includes("AttributeModifier")) {
                    const updatedNode = ts.factory.updateImportDeclaration(
                        node,
                        undefined,
                        ts.factory.updateImportClause(
                            importClause,
                            importClause.isTypeOnly,
                            importClause.name,
                            ts.factory.updateNamedImports(
                                importClause.namedBindings,
                                [
                                    ...namedImports,
                                    ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier("AttributeModifier")),
                                    ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier("CommonMethodUI"))
                                ]
                            )
                        ),
                        node.moduleSpecifier,
                        undefined
                    );
                    return [updatedNode, true];
                }
            }
        }
    }
    return [undefined, false];
}

function createTargetImport(sourceFile: ts.SourceFile, context: ts.TransformationContext): [ts.SourceFile, ts.ImportDeclaration[]] {
    const targetImport: ts.ImportDeclaration[] = []

    const memoImport = ts.factory.createImportDeclaration(
        undefined,
        ts.factory.createImportClause(
            false,
            undefined,
            ts.factory.createNamedImports([
                ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier("memo")),
                ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier("ComponentBuilder"))
            ])
        ),
        ts.factory.createStringLiteral("./../stateManagement/runtime")
    );
    targetImport.push(memoImport)

    let importFlag = false;
    const newSource = ts.visitEachChild(sourceFile, (node) => {
        if (ts.isImportDeclaration(node)) {
            const [transNode, flag] = handleImportDeclaration(node);
            if (flag) {
                importFlag = flag;
                return transNode;
            }
        }
        return node;
    }, context)

    if (!importFlag) {
        const commonImport = ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(
                false,
                undefined,
                ts.factory.createNamedImports([
                    ts.factory.createImportSpecifier(
                        false,
                        undefined,
                        ts.factory.createIdentifier("AttributeModifier")
                    )
                ])
            ),
            ts.factory.createStringLiteral("./common"),
            undefined
        )
        targetImport.push(commonImport)
    }
    return [newSource, targetImport]
}

function findFileKitCommentInsertIndex(sourceFile: ts.SourceFile): number {

    for (let i = 0; i < sourceFile.statements.length; i++) {
        const node = sourceFile.statements[i];
        const leadingComments = ts.getLeadingCommentRanges(sourceFile.text, node.pos);

        if (leadingComments) {
            for (const comment of leadingComments) {
                const commentText = sourceFile.text
                    .substring(comment.pos, comment.end)
                    .replace(/^\s*\*\s*/gm, '')
                    .replace(/\r?\n/g, '\n');

                if (commentText.includes('@kit ArkUI')) {
                    return i + 1;
                }
            }
        }
    }
    return sourceFile.statements.length;
}