export interface AST {
    type: string;
}

export type valueType = 'string' | 'number' | 'boolean' | 'HTMLElement';

export type BasicTypescriptDeclaration =
    ImportStatementDeclaration
    | FunctionDeclaration
    | FunctionCallDeclaration
    | FunctionVarDeclaration
    | StatementDeclaration
    | HtmlElementDeclaration
    | ReturnStatementDeclaration;

export type ExpressionDeclaration =
    Identifier
    | Type
    | ObjectAttributesDeclaration
    | HtmlElementDeclaration
    | ExpressionsDeclaration;


export interface Root extends AST {
    type: 'RootDeclaration';
    members: BasicTypescriptDeclaration[];
}

export interface ImportStatementDeclaration extends AST {
    type: 'ImportStatementDeclaration';
    alias: string;
    source: string;
}

export interface FunctionDeclaration extends AST {
    type: 'FunctionDeclaration';
    functionName: string;
    parameters: ParameterDeclaration[];
    members: BasicTypescriptDeclaration[];
}

export interface ParameterDeclaration extends AST {
    type: 'ParameterDeclaration';
    parameterName: string;
    valueType: valueType;
}

export interface FunctionCallDeclaration extends AST {
    type: 'FunctionCallDeclaration';
    functionName: string;
    arguments: (Type | Identifier)[];
}

export interface Type extends AST {
    type: valueType;
    value: string | number | boolean;
}

export interface Identifier extends AST {
    type: "Identifier";
    value: string;
}

export interface FunctionVarDeclaration extends AST {
    type: 'FunctionVarDeclaration';
    value: (ObjectAttributesDeclaration | Identifier);
    expression: ExpressionDeclaration;
}

export interface ObjectAttributesDeclaration extends AST {
    type: 'ObjectAttributesDeclaration';
    attribute: Identifier[];
}

export interface HtmlElementDeclaration extends AST {
    type: 'HtmlElementDeclaration';
    openingTag: OpeningTagDeclaration;
    children: (Identifier | HtmlElementDeclaration)[];
    closingTag: ClosingTagDeclaration;
}

export interface OpeningTagDeclaration extends AST {
    type: 'OpeningTagDeclaration';
    tagName: string;
}

export interface ClosingTagDeclaration extends AST {
    type: 'ClosingTagDeclaration';
    tagName: string;
}

export interface ExpressionsDeclaration extends AST {
    type: 'ExpressionsDeclaration';
    member: ExpressionDeclaration;
}

export interface StatementDeclaration extends AST {
    type: 'StatementDeclaration';
    varType: VarType;
    varName: Identifier;
    varReturnType: valueType;
    value: (Identifier | Type | FunctionCallDeclaration | HtmlElementDeclaration);
}

export interface VarType extends AST {
    type: 'VarType';
    variableType: string;
}

export interface ReturnStatementDeclaration extends AST {
    type: 'ReturnStatementDeclaration';
    value: (ExpressionDeclaration | FunctionCallDeclaration);

}

