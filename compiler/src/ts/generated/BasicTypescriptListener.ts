// Generated from src/g4/BasicTypescript.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `BasicTypescriptParser`.
 */
export default class BasicTypescriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.root`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.root`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.basicTypescript`.
	 * @param ctx the parse tree
	 */
	enterBasicTypescript?: (ctx: BasicTypescriptContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.basicTypescript`.
	 * @param ctx the parse tree
	 */
	exitBasicTypescript?: (ctx: BasicTypescriptContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.valueType`.
	 * @param ctx the parse tree
	 */
	enterValueType?: (ctx: ValueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.valueType`.
	 * @param ctx the parse tree
	 */
	exitValueType?: (ctx: ValueTypeContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.functionVar`.
	 * @param ctx the parse tree
	 */
	enterFunctionVar?: (ctx: FunctionVarContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.functionVar`.
	 * @param ctx the parse tree
	 */
	exitFunctionVar?: (ctx: FunctionVarContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.objectAttributes`.
	 * @param ctx the parse tree
	 */
	enterObjectAttributes?: (ctx: ObjectAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.objectAttributes`.
	 * @param ctx the parse tree
	 */
	exitObjectAttributes?: (ctx: ObjectAttributesContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.htmlElement`.
	 * @param ctx the parse tree
	 */
	enterHtmlElement?: (ctx: HtmlElementContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.htmlElement`.
	 * @param ctx the parse tree
	 */
	exitHtmlElement?: (ctx: HtmlElementContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.openingTag`.
	 * @param ctx the parse tree
	 */
	enterOpeningTag?: (ctx: OpeningTagContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.openingTag`.
	 * @param ctx the parse tree
	 */
	exitOpeningTag?: (ctx: OpeningTagContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.closingTag`.
	 * @param ctx the parse tree
	 */
	enterClosingTag?: (ctx: ClosingTagContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.closingTag`.
	 * @param ctx the parse tree
	 */
	exitClosingTag?: (ctx: ClosingTagContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;
	/**
	 * Enter a parse tree produced by `BasicTypescriptParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `BasicTypescriptParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;
}

