// Generated from src/g4/BasicTypescript.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { RootContext } from "./BasicTypescriptParser";
import { BasicTypescriptContext } from "./BasicTypescriptParser";
import { ImportStatementContext } from "./BasicTypescriptParser";
import { FunctionDeclarationContext } from "./BasicTypescriptParser";
import { ParametersContext } from "./BasicTypescriptParser";
import { ParameterContext } from "./BasicTypescriptParser";
import { ValueTypeContext } from "./BasicTypescriptParser";
import { FunctionCallContext } from "./BasicTypescriptParser";
import { ArgumentsContext } from "./BasicTypescriptParser";
import { TypeContext } from "./BasicTypescriptParser";
import { FunctionVarContext } from "./BasicTypescriptParser";
import { ObjectAttributesContext } from "./BasicTypescriptParser";
import { ExpressionContext } from "./BasicTypescriptParser";
import { HtmlElementContext } from "./BasicTypescriptParser";
import { OpeningTagContext } from "./BasicTypescriptParser";
import { ClosingTagContext } from "./BasicTypescriptParser";
import { StatementContext } from "./BasicTypescriptParser";
import { VarContext } from "./BasicTypescriptParser";
import { ReturnStatementContext } from "./BasicTypescriptParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `BasicTypescriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class BasicTypescriptVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.root`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoot?: (ctx: RootContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.basicTypescript`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicTypescript?: (ctx: BasicTypescriptContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.valueType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueType?: (ctx: ValueTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.functionVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionVar?: (ctx: FunctionVarContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.objectAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectAttributes?: (ctx: ObjectAttributesContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.htmlElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHtmlElement?: (ctx: HtmlElementContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.openingTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpeningTag?: (ctx: OpeningTagContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.closingTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosingTag?: (ctx: ClosingTagContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;
	/**
	 * Visit a parse tree produced by `BasicTypescriptParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
}

