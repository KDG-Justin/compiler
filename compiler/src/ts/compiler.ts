import {parseSourceCode} from "./parseSourceCode";
import {
    BasicTypescriptDeclaration, ExpressionDeclaration, FunctionCallDeclaration,
    FunctionDeclaration, FunctionVarDeclaration, HtmlElementDeclaration, Identifier,
    ImportStatementDeclaration, ObjectAttributesDeclaration,
    ParameterDeclaration, ReturnStatementDeclaration,
    Root, StatementDeclaration, Type
} from "./visitor/ast";


export default function compiler(input: string): string{
    const ast = parseSourceCode(input) as Root; // voor al die members javascript genereren.
    const javascript = generateJavascriptBasicTypeScript(ast.members);
    console.log(javascript);
    return javascript;
}


function generateJavascriptBasicTypeScript(members: BasicTypescriptDeclaration[]) : string {
    let result: string = '';

    members.forEach((member) => {
        if (member.type == 'ImportStatementDeclaration') result += generateJavascriptImportStatement(member) + '\n';
        else if (member.type == 'FunctionDeclaration') result += generateJavascriptFunctionDeclaration(member) + '\n';
        else if (member.type == 'FunctionCallDeclaration') result += generateJavascriptFunctionCallDeclaration(member) + '\n';
        else if (member.type == 'FunctionVarDeclaration') result += generateJavascriptFunctionVarDeclaration(member) + '\n';
        else if (member.type == 'StatementDeclaration') result += generateJavascriptStatementDeclaration(member) + '\n';
        else if (member.type == 'HtmlElementDeclaration') result += generateJavascriptHtmlElementDeclaration(member) + '\n';
        else if (member.type == 'ReturnStatementDeclaration') result += generateJavascriptReturnStatement(member) + '\n';
        else throw new Error(`Member does not exist.`)

    })


    return result;
}

function generateJavascriptImportStatement(importStatement : ImportStatementDeclaration) : string {
    return `import * as ${importStatement.alias} from ${importStatement.source}`;
}

function generateJavascriptFunctionDeclaration(functionDeclaration : FunctionDeclaration) : string {
    let parameters : string = generateJavascriptParameters(functionDeclaration.parameters);
    let body : string = generateJavascriptBasicTypeScript(functionDeclaration.members);

    return `function ${functionDeclaration.functionName}(${parameters}) {\n${body}}`
}

function generateJavascriptParameters(parameters : ParameterDeclaration[]) : string {
    try {
        if (parameters.length > 2) return parameters.map((p) => {
            return `${p.parameterName}`
        }).join(', ');
        else return parameters.map((p) => {
            return `${p.parameterName}`
        }).join()
    }catch (e) {
        throw new Error('Invalid parameter declaration syntax.')
    }
}

function generateJavascriptFunctionCallDeclaration(functionCallDeclaration : FunctionCallDeclaration) : string {
    try {
        let argumentList : string = ''
        if (functionCallDeclaration.arguments.length >= 1) {
            argumentList += generateJavascriptArguments(functionCallDeclaration.arguments);
            return `${functionCallDeclaration.functionName}(${argumentList})`
        }

        return `${functionCallDeclaration.functionName}()`;
    }catch (e) {
        throw new Error('Invalid Function call syntax.')
    }
}


function generateJavascriptArguments(argumentList : (Type | Identifier)[]) : string {
    return argumentList.map((a) => {
        if (a.type == 'Identifier') return `${a.value}`;
        else return generateJavascriptTypeDeclaration(a);
    }).join(', ')
}

function generateJavascriptTypeDeclaration(type : Type) : string{
    if (type.type == 'string') return JSON.stringify(type.value);
    if (type.type == 'number' || type.type == 'boolean') return type.value.toString();
}

function generateJavascriptFunctionVarDeclaration(functionVar : FunctionVarDeclaration) : string {
    try {
        let value : string = '';
        let expression : string = generateJavascriptExpressionDeclaration(functionVar.expression);

        if (functionVar.value.type == 'ObjectAttributesDeclaration') value = generateJavascriptObjectAttribute(functionVar.value);
        else value = functionVar.value.value;

        return `${value} = ${expression}`
    }catch (e) {
        throw new Error('Invalid Function variable syntax.')
    }
}

function generateJavascriptObjectAttribute(objectAttribute : ObjectAttributesDeclaration) : string {
    return objectAttribute.attribute.map((a) => {
        return a.value
    }).join('.')
}

function generateJavascriptExpressionDeclaration(expression : ExpressionDeclaration) : string {
    if (expression.type == 'Identifier') return expression.value;
    else if (expression.type == 'ObjectAttributesDeclaration') return generateJavascriptObjectAttribute(expression);
    else if (expression.type == 'HtmlElementDeclaration') return generateJavascriptHtmlElementDeclaration(expression);
    else if (expression.type == 'ExpressionsDeclaration') return generateJavascriptExpressionDeclaration(expression);
    else return generateJavascriptTypeDeclaration(expression);
}


function generateJavascriptHtmlElementDeclaration(htmlElementDeclaration : HtmlElementDeclaration) {
    try {
        let elementVarName = `${htmlElementDeclaration.openingTag.tagName.toLowerCase()}`;

        let createElementCode = `let ${elementVarName} = document.createElement('${htmlElementDeclaration.openingTag.tagName}');\n`;

        let childrenCode = '';
        let appendChildCode = '';

        htmlElementDeclaration.children.forEach((child) => {
            if (child.type == 'Identifier') {
                // als het een text node is, voeg het aan de content toe
                childrenCode += `${elementVarName}.textContent += '${child.value} ';\n`;
            } else if (child.type == 'HtmlElementDeclaration') {
                // als html element, recursive
                let childVarName = `${child.openingTag.tagName.toLowerCase()}`;
                childrenCode += generateJavascriptHtmlElementDeclaration(child);
                appendChildCode += `${elementVarName}.appendChild(${childVarName});\n`;
            }
        });

        return createElementCode + childrenCode + appendChildCode;
    } catch (e) {
        throw new Error('Invalid html element syntax');
    }
}

function generateJavascriptStatementDeclaration(statementDeclaration : StatementDeclaration) : string {
    try {
        let varName : string = statementDeclaration.varName.value;
        let value : string = '';

        if (statementDeclaration.value.type == 'Identifier') value = statementDeclaration.value.value;
        else if (statementDeclaration.value.type == 'FunctionCallDeclaration') value = generateJavascriptFunctionCallDeclaration(statementDeclaration.value);
        else if (statementDeclaration.value.type == 'HtmlElementDeclaration') {
            value = generateJavascriptHtmlElementDeclaration(statementDeclaration.value);
            return `${value}`;
        }
        else value = generateJavascriptTypeDeclaration(statementDeclaration.value);

        return `${statementDeclaration.varType.variableType} ${varName} = ${value}`;
    }catch (e) {
        throw new Error('Invalid statement syntax.')
    }

}

function generateJavascriptReturnStatement(returnStatement : ReturnStatementDeclaration) : string {
    let value : string = 'return ';

    if (returnStatement.value.type == 'ExpressionsDeclaration' || returnStatement.value.type == 'Identifier' ) value += generateJavascriptExpressionDeclaration(returnStatement.value);
    else if (returnStatement.value.type == 'FunctionCallDeclaration') value += generateJavascriptFunctionCallDeclaration(returnStatement.value);

    return value;
}