import BasicTypescriptVisitor from "../generated/BasicTypescriptVisitor";
import {
    AST,
    BasicTypescriptDeclaration,
    ClosingTagDeclaration,
    ExpressionDeclaration,
    ExpressionsDeclaration,
    FunctionCallDeclaration,
    FunctionDeclaration,
    FunctionVarDeclaration,
    HtmlElementDeclaration,
    Identifier,
    ObjectAttributesDeclaration,
    OpeningTagDeclaration,
    ParameterDeclaration,
    ReturnStatementDeclaration,
    Root,
    StatementDeclaration,
    Type,
    valueType,
    VarType
} from "./ast";
import {
    BasicTypescriptContext, ClosingTagContext,
    ExpressionContext,
    FunctionCallContext,
    FunctionDeclarationContext,
    FunctionVarContext,
    HtmlElementContext,
    ImportStatementContext,
    ObjectAttributesContext, OpeningTagContext,
    ParameterContext,
    ReturnStatementContext,
    RootContext,
    StatementContext, TypeContext, ValueTypeContext,
    VarContext
} from "../generated/BasicTypescriptParser";
import {TerminalNode} from "antlr4";

export class CustomBasicTypescriptVisitor extends BasicTypescriptVisitor<AST>{
    visitRoot = (ctx: RootContext): Root => {
        const children = this.visitChildren(ctx);

        if (Array.isArray(children)){
            const members = children.map(function (item) {
                return item as BasicTypescriptDeclaration;
            })
            return {type: 'RootDeclaration', members};
        }
        throw new Error('Invalid RootDeclaration')
    }

    visitBasicTypescript = (ctx: BasicTypescriptContext): BasicTypescriptDeclaration => {
        let member: BasicTypescriptDeclaration | null;

        if (ctx.importStatement()) member = this.visitImportStatement(ctx.importStatement())
        else if (ctx.functionDeclaration()) member = this.visitFunctionDeclaration(ctx.functionDeclaration())
        else if (ctx.functionCall()) member = this.visitFunctionCall(ctx.functionCall())
        else if (ctx.functionVar()) member = this.visitFunctionVar(ctx.functionVar())
        else if (ctx.statement()) member = this.visitStatement(ctx.statement())
        else if (ctx.htmlElement()) member = this.visitHtmlElement(ctx.htmlElement())
        else if (ctx.returnStatement()) member = this.visitReturnStatement(ctx.returnStatement())
        else throw new Error('Invalid BasicTypeScript')


        return member;

    }

    visitImportStatement = (ctx: ImportStatementContext): BasicTypescriptDeclaration => {
        try {
            const alias = ctx.ID().getText();
            const source = ctx.STRING().getText().slice(1, -1) // Remove quotes
            return {type: 'ImportStatementDeclaration', alias, source}
        }catch (e) {
            throw new Error('Invalid import statement')
        }
    }

    visitFunctionDeclaration = (ctx: FunctionDeclarationContext): FunctionDeclaration => {
        try {
            const functionName = ctx.ID().getText();
            let parameters: ParameterDeclaration[] = [];
            let members: BasicTypescriptDeclaration[] = [];
            const basicTypescriptContexts = ctx.getTypedRuleContexts(BasicTypescriptContext);

            if (ctx.parameters()){
                const parameterList = ctx.parameters().parameter_list();
                parameters = parameterList.map((parameterContext) => this.visitParameter(parameterContext));
            }

            for (const currentBasicTypeScriptContext of basicTypescriptContexts){
                const basicTypeScript = this.visitBasicTypescript(currentBasicTypeScriptContext);
                if (basicTypeScript) members.push(basicTypeScript as BasicTypescriptDeclaration)
            }

            return {type: 'FunctionDeclaration', functionName, parameters, members}

        }catch (e) {
            throw new Error('Invalid Function Declaration');
        }
    }

    visitParameter = (ctx: ParameterContext): ParameterDeclaration => {
        try {
            const parameterName = ctx.ID().getText();
            const valueType: valueType = ctx.valueType().getText() as valueType;

            return {type: 'ParameterDeclaration', parameterName, valueType}
        }catch (e) {
            throw new Error('Invalid Parameter');
        }
    }

    visitFunctionCall = (ctx: FunctionCallContext): FunctionCallDeclaration => {
        try {
            const id_list = ctx.ID_list();
            let functionName: string = id_list.length === 2
                ? `${id_list[0].getText()}.${id_list[1].getText()}`
                : id_list[0].getText();

            let argumentList: (Type | Identifier)[] = [];

            if (ctx.arguments()){
                const contexts = ctx.arguments().children;
                for (const currentContext of contexts){
                    if (currentContext instanceof TerminalNode){
                        argumentList.push(
                            {type: 'Identifier', value: `${currentContext.getText()}`}
                        );
                    } else if (currentContext instanceof TypeContext){
                        argumentList.push(this.visitType(currentContext))
                    }
                }
            }
            return {type: 'FunctionCallDeclaration', functionName, arguments: argumentList}
        }catch (e) {
            throw new Error('Invalid Function Call');
        }
    }

    visitType = (ctx: TypeContext): Type => {
        // any voorkomt error bij this.visitType van argumentList.push
        try {
            if (ctx.STRING()){
                return {
                    type: "string",
                    value: ctx.STRING().getText().slice(1, -1),
                };
            } else if (ctx.NUMBER()){
                return {
                    type: "number",
                    value: ctx.NUMBER().getText(),
                };
            } else if (ctx.BOOLEAN()) {
                return {
                    type: "boolean",
                    value: ctx.BOOLEAN().getText(),
                };
            }

        }catch (e) {
            throw new Error('Invalid Type')
        }
    }

    visitFunctionVar = (ctx: FunctionVarContext) : FunctionVarDeclaration => {
        try {
            let value : (ObjectAttributesDeclaration | Identifier);
            let expression : ExpressionDeclaration;

            if (ctx.ID()){
                value = {type: 'Identifier', value: ctx.ID().getText()}
            } else if (ctx.objectAttributes()){
                value = this.visitObjectAttributes(ctx.objectAttributes()); //miss een join met .
            } else if (ctx.expression()){
                expression = this.visitExpression(ctx.expression());
            }

            return {type: 'FunctionVarDeclaration', value, expression}

        }catch (e) {
            throw new Error('Invalid Function Variable');
        }
    }

    visitObjectAttributes = (ctx: ObjectAttributesContext) : ObjectAttributesDeclaration => {
        try {
            let attributeNames = ctx.ID_list().map((id) => id.getText());
            let objectAttributes : Identifier[] = [];

            for (const currentName of attributeNames) objectAttributes.push({type: 'Identifier', value: currentName})

            return {type: 'ObjectAttributesDeclaration', attribute: objectAttributes}
        }catch (e) {
            throw new Error('Invalid Object Attribute');
        }
    }

    visitExpression = (ctx: ExpressionContext) : ExpressionDeclaration => {
        try {
            let expression : (
                Identifier |
                Type |
                ObjectAttributesDeclaration |
                HtmlElementDeclaration |
                ExpressionsDeclaration);

            if (ctx.type_()){
                expression = this.visitType(ctx.type_());
            } else if (ctx.objectAttributes()){
                expression = this.visitObjectAttributes(ctx.objectAttributes());
            } else if (ctx.htmlElement()){
                expression = this.visitHtmlElement(ctx.htmlElement());
            } else {
                expression = {type: 'Identifier', value: ctx.ID().getText()};
            }

            return expression;

        } catch (e) {
            throw new Error('Invalid Expression');
        }
    }

    visitHtmlElement = (ctx: HtmlElementContext) : HtmlElementDeclaration => {
        let openingTag : OpeningTagDeclaration;
        let children : (Identifier | HtmlElementDeclaration)[] = [];
        let closingTag : ClosingTagDeclaration;

        for (let i = 0; i < ctx.getChildCount(); i++){
            const child = ctx.getChild(i);

            if (child instanceof OpeningTagContext) openingTag = {type: 'OpeningTagDeclaration', tagName: child.ID().getText()};
            else if (child instanceof TerminalNode) children.push({type: 'Identifier', value: child.getText()}); // ID
            else if (child instanceof HtmlElementContext) children.push(this.visitHtmlElement(child));
            else if (child instanceof ClosingTagContext) closingTag = {type: 'ClosingTagDeclaration', tagName: child.ID().getText()};
        }

        if (openingTag.tagName !== closingTag.tagName){throw new Error(`Html tags mismatch`)}

        return {type: 'HtmlElementDeclaration', openingTag, children, closingTag}

    }

    visitStatement = (ctx: StatementContext) : StatementDeclaration => {
        try {
            const idList = ctx.ID_list();

            let varType : VarType;
            let varName : Identifier;
            let varReturnType : valueType;
            let value : (Identifier | Type | FunctionCallDeclaration | HtmlElementDeclaration);

            for (let i = 0; i < ctx.getChildCount(); i++){
                const child = ctx.getChild(i);
                console.log(child.getText())
                if (child instanceof VarContext) varType = this.visitVar(child);
                else if (child instanceof ValueTypeContext) varReturnType = child.getText() as valueType;
                else if (child instanceof TypeContext) value = this.visitType(child);
                else if (child instanceof FunctionCallContext) value = this.visitFunctionCall(child);
                else if (child instanceof HtmlElementContext) value = this.visitHtmlElement(child);
                else if (child instanceof TerminalNode){
                    if (i === 1) varName = {type: 'Identifier', value: idList[0].getText()};
                    else if (child.getText() === '(' || child.getText() === ')') console.log('HTML GESPOT')
                    else if (child.getText() === '=') console.log('= GESPOT') // doe niets wanneer = aanbod is
                    else if (child.getText() === 'false' || child.getText() === 'true') value = {type: 'boolean', value: child.getText()};
                    else if (child.getText().trim().startsWith("\"") || child.getText().trim().startsWith('\'')) value = {type: 'string', value: child.getText().slice(1, -1)};
                    else if (/^\d+$/.test(child.getText())) value = {type: 'number', value: child.getText()};
                    else if (child.getText() === ':') console.log(': GESPOT')
                    else value = {type: 'Identifier', value: idList[1].getText()};

                }
            }

            return {type: 'StatementDeclaration', varType, varName, varReturnType, value}

        } catch (e) {
            throw new Error('Invalid Statement/Variable Declaration')
        }
    }

    visitVar = (ctx: VarContext) : VarType => {
        let varType : string = '';

        if (ctx.getText() === 'let') varType = 'let';
        else if (ctx.getText() === 'var') varType = 'var';
        else if (ctx.getText() === 'const') varType = 'const';
        else throw new Error('Variable should start with: let, var or const')

        return {type: 'VarType', variableType: varType}
    }

    visitReturnStatement = (ctx: ReturnStatementContext) : ReturnStatementDeclaration => {
        let value : (ExpressionDeclaration | FunctionCallDeclaration);

        if (ctx.expression()) value = this.visitExpression(ctx.expression());
        else if (ctx.functionCall()) value = this.visitFunctionCall(ctx.functionCall());
        else throw new Error('Invalid Return Statement');

        return {type: 'ReturnStatementDeclaration', value}
    }

}
