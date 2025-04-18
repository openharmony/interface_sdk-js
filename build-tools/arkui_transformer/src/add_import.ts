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

export function addImportTransformer(): ts.TransformerFactory<ts.SourceFile> {
    return (context) => {
        return (sourceFile) => {
            if (sourceFile) {
                const targetImport = createTargetImport();
                const insertPosition = findBestInsertPosition(sourceFile);
    
                const newStatements = [
                    ...sourceFile.statements.slice(0, insertPosition),
                    targetImport,
                    ...sourceFile.statements.slice(insertPosition)
                ];
    
                return ts.factory.updateSourceFile(
                    sourceFile,
                    newStatements,
                    sourceFile.isDeclarationFile,
                    sourceFile.referencedFiles,
                    sourceFile.typeReferenceDirectives,
                    sourceFile.hasNoDefaultLib,
                    sourceFile.libReferenceDirectives
                );
            } else {
                return sourceFile;
            }
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

function createTargetImport(): ts.ImportDeclaration {
    return ts.factory.createImportDeclaration(
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