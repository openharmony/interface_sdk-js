
import * as ts from "typescript";

import uiconfig from '../arkui_config_util'

/**
 * Analyzes the base classes of a given class declaration and collects their names recursively.
 *
 * @param classNode - The TypeScript class declaration node to analyze.
 * @param sourceFile - The source file containing the class declaration.
 * @param program - The TypeScript program instance used for type checking.
 *
 * @returns void
 *
 * This function traverses the inheritance hierarchy of the specified class declaration,
 * extracting the names of all base classes. It uses the TypeScript type checker to resolve
 * symbols and declarations of base classes, ensuring accurate identification of inherited types.
 */
export function analyzeBaseClasses(classNode: ts.ClassDeclaration, sourceFile: ts.SourceFile, program: ts.Program) {
    const className = classNode.name!.escapedText!;
    const baseTypes: string[] = [];
    const checker = program.getTypeChecker();


    const extractTypeName = (expr: ts.Expression): string | null => {
        if (ts.isIdentifier(expr)) {
            return expr.text;
        } else if (ts.isPropertyAccessExpression(expr)) {
            return `${extractTypeName(expr.expression)}.${expr.name.text}`;
        }
        return null;
    }

    const findBase = (currentClass: ts.ClassDeclaration) => {
        if (!currentClass.heritageClauses) return;

        for (const heritage of currentClass.heritageClauses) {
            if (heritage.token === ts.SyntaxKind.ExtendsKeyword) {
                for (const type of heritage.types) {
                    const baseName = extractTypeName(type.expression);
                    if (baseName) {
                        baseTypes.push(baseName);
                        const baseSymbol = checker.getSymbolAtLocation(type.expression);
                        if (baseSymbol) {
                            const baseDeclarations = baseSymbol.getDeclarations();
                            if (baseDeclarations) {
                                baseDeclarations.forEach(decl => {
                                    if (ts.isClassDeclaration(decl)) {
                                        findBase(decl);
                                    }
                                });
                            }
                        }
                    }
                }
            }
        }
    };

    findBase(classNode);
    return baseTypes
}

export function isComponentHerirage(node: ts.Node): boolean {
    if (!ts.isClassDeclaration(node) && !ts.isInterfaceDeclaration(node)) {
        return false;
    }
    return uiconfig.isUIHeritage(node.name!.escapedText!)
}
