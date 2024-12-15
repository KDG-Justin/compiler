// Generated from src/g4/BasicTypescript.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import BasicTypescriptListener from "./BasicTypescriptListener.js";
import BasicTypescriptVisitor from "./BasicTypescriptVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class BasicTypescriptParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly ID = 25;
	public static readonly NUMBER = 26;
	public static readonly STRING = 27;
	public static readonly BOOLEAN = 28;
	public static readonly WS = 29;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_root = 0;
	public static readonly RULE_basicTypescript = 1;
	public static readonly RULE_importStatement = 2;
	public static readonly RULE_functionDeclaration = 3;
	public static readonly RULE_parameters = 4;
	public static readonly RULE_parameter = 5;
	public static readonly RULE_valueType = 6;
	public static readonly RULE_functionCall = 7;
	public static readonly RULE_arguments = 8;
	public static readonly RULE_type = 9;
	public static readonly RULE_functionVar = 10;
	public static readonly RULE_objectAttributes = 11;
	public static readonly RULE_expression = 12;
	public static readonly RULE_htmlElement = 13;
	public static readonly RULE_openingTag = 14;
	public static readonly RULE_closingTag = 15;
	public static readonly RULE_statement = 16;
	public static readonly RULE_var = 17;
	public static readonly RULE_returnStatement = 18;
	public static readonly literalNames: (string | null)[] = [ null, "'import'", 
                                                            "'*'", "'as'", 
                                                            "'from'", "'function'", 
                                                            "'('", "')'", 
                                                            "'{'", "'}'", 
                                                            "','", "':'", 
                                                            "'string'", 
                                                            "'number'", 
                                                            "'boolean'", 
                                                            "'HTMLElement'", 
                                                            "'.'", "'='", 
                                                            "'<'", "'>'", 
                                                            "'</'", "'let'", 
                                                            "'var'", "'const'", 
                                                            "'return'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "ID", 
                                                             "NUMBER", "STRING", 
                                                             "BOOLEAN", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "basicTypescript", "importStatement", "functionDeclaration", "parameters", 
		"parameter", "valueType", "functionCall", "arguments", "type", "functionVar", 
		"objectAttributes", "expression", "htmlElement", "openingTag", "closingTag", 
		"statement", "var", "returnStatement",
	];
	public get grammarFileName(): string { return "BasicTypescript.g4"; }
	public get literalNames(): (string | null)[] { return BasicTypescriptParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return BasicTypescriptParser.symbolicNames; }
	public get ruleNames(): string[] { return BasicTypescriptParser.ruleNames; }
	public get serializedATN(): number[] { return BasicTypescriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, BasicTypescriptParser._ATN, BasicTypescriptParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let localctx: RootContext = new RootContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, BasicTypescriptParser.RULE_root);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 38;
				this.basicTypescript();
				}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 65273890) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public basicTypescript(): BasicTypescriptContext {
		let localctx: BasicTypescriptContext = new BasicTypescriptContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, BasicTypescriptParser.RULE_basicTypescript);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 43;
				this.importStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 44;
				this.functionDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 45;
				this.functionCall();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 46;
				this.functionVar();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 47;
				this.statement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 48;
				this.htmlElement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 49;
				this.returnStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let localctx: ImportStatementContext = new ImportStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, BasicTypescriptParser.RULE_importStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 52;
			this.match(BasicTypescriptParser.T__0);
			this.state = 53;
			this.match(BasicTypescriptParser.T__1);
			this.state = 54;
			this.match(BasicTypescriptParser.T__2);
			this.state = 55;
			this.match(BasicTypescriptParser.ID);
			this.state = 56;
			this.match(BasicTypescriptParser.T__3);
			this.state = 57;
			this.match(BasicTypescriptParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, BasicTypescriptParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 59;
			this.match(BasicTypescriptParser.T__4);
			this.state = 60;
			this.match(BasicTypescriptParser.ID);
			this.state = 61;
			this.match(BasicTypescriptParser.T__5);
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 62;
				this.parameters();
				}
			}

			this.state = 65;
			this.match(BasicTypescriptParser.T__6);
			this.state = 66;
			this.match(BasicTypescriptParser.T__7);
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 67;
				this.basicTypescript();
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 65273890) !== 0));
			this.state = 72;
			this.match(BasicTypescriptParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let localctx: ParametersContext = new ParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, BasicTypescriptParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 74;
			this.parameter();
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 75;
				this.match(BasicTypescriptParser.T__9);
				this.state = 76;
				this.parameter();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, BasicTypescriptParser.RULE_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
			this.match(BasicTypescriptParser.ID);
			this.state = 80;
			this.match(BasicTypescriptParser.T__10);
			this.state = 81;
			this.valueType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public valueType(): ValueTypeContext {
		let localctx: ValueTypeContext = new ValueTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, BasicTypescriptParser.RULE_valueType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 83;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 61440) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, BasicTypescriptParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 85;
				this.match(BasicTypescriptParser.ID);
				this.state = 86;
				this.match(BasicTypescriptParser.T__15);
				}
				break;
			}
			this.state = 89;
			this.match(BasicTypescriptParser.ID);
			this.state = 90;
			this.match(BasicTypescriptParser.T__5);
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 503316480) !== 0)) {
				{
				this.state = 91;
				this.arguments();
				}
			}

			this.state = 94;
			this.match(BasicTypescriptParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, BasicTypescriptParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 98;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 26:
			case 27:
			case 28:
				{
				this.state = 96;
				this.type_();
				}
				break;
			case 25:
				{
				this.state = 97;
				this.match(BasicTypescriptParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 100;
				this.match(BasicTypescriptParser.T__9);
				this.state = 103;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 26:
				case 27:
				case 28:
					{
					this.state = 101;
					this.type_();
					}
					break;
				case 25:
					{
					this.state = 102;
					this.match(BasicTypescriptParser.ID);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, BasicTypescriptParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 110;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 469762048) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionVar(): FunctionVarContext {
		let localctx: FunctionVarContext = new FunctionVarContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, BasicTypescriptParser.RULE_functionVar);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 114;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 112;
				this.objectAttributes();
				}
				break;
			case 2:
				{
				this.state = 113;
				this.match(BasicTypescriptParser.ID);
				}
				break;
			}
			this.state = 116;
			this.match(BasicTypescriptParser.T__16);
			this.state = 119;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 117;
				this.expression();
				}
				break;
			case 2:
				{
				this.state = 118;
				this.functionCall();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectAttributes(): ObjectAttributesContext {
		let localctx: ObjectAttributesContext = new ObjectAttributesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, BasicTypescriptParser.RULE_objectAttributes);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 121;
			this.match(BasicTypescriptParser.ID);
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 122;
				this.match(BasicTypescriptParser.T__15);
				this.state = 123;
				this.match(BasicTypescriptParser.ID);
				}
				}
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, BasicTypescriptParser.RULE_expression);
		try {
			this.state = 136;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 129;
				this.match(BasicTypescriptParser.ID);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 130;
				this.type_();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 131;
				this.objectAttributes();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 132;
				this.match(BasicTypescriptParser.T__5);
				this.state = 133;
				this.htmlElement();
				this.state = 134;
				this.match(BasicTypescriptParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public htmlElement(): HtmlElementContext {
		let localctx: HtmlElementContext = new HtmlElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, BasicTypescriptParser.RULE_htmlElement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 138;
			this.openingTag();
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18 || _la===25) {
				{
				this.state = 141;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 25:
					{
					this.state = 139;
					this.match(BasicTypescriptParser.ID);
					}
					break;
				case 18:
					{
					this.state = 140;
					this.htmlElement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 146;
			this.closingTag();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public openingTag(): OpeningTagContext {
		let localctx: OpeningTagContext = new OpeningTagContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, BasicTypescriptParser.RULE_openingTag);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 148;
			this.match(BasicTypescriptParser.T__17);
			this.state = 149;
			this.match(BasicTypescriptParser.ID);
			this.state = 150;
			this.match(BasicTypescriptParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public closingTag(): ClosingTagContext {
		let localctx: ClosingTagContext = new ClosingTagContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, BasicTypescriptParser.RULE_closingTag);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 152;
			this.match(BasicTypescriptParser.T__19);
			this.state = 153;
			this.match(BasicTypescriptParser.ID);
			this.state = 154;
			this.match(BasicTypescriptParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, BasicTypescriptParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 156;
			this.var_();
			this.state = 157;
			this.match(BasicTypescriptParser.ID);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
				{
				this.state = 158;
				this.match(BasicTypescriptParser.T__10);
				this.state = 159;
				this.valueType();
				}
			}

			this.state = 162;
			this.match(BasicTypescriptParser.T__16);
			this.state = 170;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 163;
				this.match(BasicTypescriptParser.ID);
				}
				break;
			case 2:
				{
				this.state = 164;
				this.type_();
				}
				break;
			case 3:
				{
				this.state = 165;
				this.functionCall();
				}
				break;
			case 4:
				{
				this.state = 166;
				this.match(BasicTypescriptParser.T__5);
				this.state = 167;
				this.htmlElement();
				this.state = 168;
				this.match(BasicTypescriptParser.T__6);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public var_(): VarContext {
		let localctx: VarContext = new VarContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, BasicTypescriptParser.RULE_var);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 172;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14680064) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, BasicTypescriptParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 174;
			this.match(BasicTypescriptParser.T__23);
			this.state = 177;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 175;
				this.expression();
				}
				break;
			case 2:
				{
				this.state = 176;
				this.functionCall();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,29,180,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,1,0,4,0,40,8,0,11,0,12,0,41,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	3,1,51,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,3,3,64,8,3,1,3,1,
	3,1,3,4,3,69,8,3,11,3,12,3,70,1,3,1,3,1,4,1,4,1,4,3,4,78,8,4,1,5,1,5,1,
	5,1,5,1,6,1,6,1,7,1,7,3,7,88,8,7,1,7,1,7,1,7,3,7,93,8,7,1,7,1,7,1,8,1,8,
	3,8,99,8,8,1,8,1,8,1,8,3,8,104,8,8,5,8,106,8,8,10,8,12,8,109,9,8,1,9,1,
	9,1,10,1,10,3,10,115,8,10,1,10,1,10,1,10,3,10,120,8,10,1,11,1,11,1,11,5,
	11,125,8,11,10,11,12,11,128,9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,
	137,8,12,1,13,1,13,1,13,5,13,142,8,13,10,13,12,13,145,9,13,1,13,1,13,1,
	14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,3,16,161,8,16,
	1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,171,8,16,1,17,1,17,1,18,1,
	18,1,18,3,18,178,8,18,1,18,0,0,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
	28,30,32,34,36,0,3,1,0,12,15,1,0,26,28,1,0,21,23,188,0,39,1,0,0,0,2,50,
	1,0,0,0,4,52,1,0,0,0,6,59,1,0,0,0,8,74,1,0,0,0,10,79,1,0,0,0,12,83,1,0,
	0,0,14,87,1,0,0,0,16,98,1,0,0,0,18,110,1,0,0,0,20,114,1,0,0,0,22,121,1,
	0,0,0,24,136,1,0,0,0,26,138,1,0,0,0,28,148,1,0,0,0,30,152,1,0,0,0,32,156,
	1,0,0,0,34,172,1,0,0,0,36,174,1,0,0,0,38,40,3,2,1,0,39,38,1,0,0,0,40,41,
	1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,1,1,0,0,0,43,51,3,4,2,0,44,51,3,
	6,3,0,45,51,3,14,7,0,46,51,3,20,10,0,47,51,3,32,16,0,48,51,3,26,13,0,49,
	51,3,36,18,0,50,43,1,0,0,0,50,44,1,0,0,0,50,45,1,0,0,0,50,46,1,0,0,0,50,
	47,1,0,0,0,50,48,1,0,0,0,50,49,1,0,0,0,51,3,1,0,0,0,52,53,5,1,0,0,53,54,
	5,2,0,0,54,55,5,3,0,0,55,56,5,25,0,0,56,57,5,4,0,0,57,58,5,27,0,0,58,5,
	1,0,0,0,59,60,5,5,0,0,60,61,5,25,0,0,61,63,5,6,0,0,62,64,3,8,4,0,63,62,
	1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,66,5,7,0,0,66,68,5,8,0,0,67,69,3,
	2,1,0,68,67,1,0,0,0,69,70,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,72,1,0,
	0,0,72,73,5,9,0,0,73,7,1,0,0,0,74,77,3,10,5,0,75,76,5,10,0,0,76,78,3,10,
	5,0,77,75,1,0,0,0,77,78,1,0,0,0,78,9,1,0,0,0,79,80,5,25,0,0,80,81,5,11,
	0,0,81,82,3,12,6,0,82,11,1,0,0,0,83,84,7,0,0,0,84,13,1,0,0,0,85,86,5,25,
	0,0,86,88,5,16,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,89,1,0,0,0,89,90,5,25,
	0,0,90,92,5,6,0,0,91,93,3,16,8,0,92,91,1,0,0,0,92,93,1,0,0,0,93,94,1,0,
	0,0,94,95,5,7,0,0,95,15,1,0,0,0,96,99,3,18,9,0,97,99,5,25,0,0,98,96,1,0,
	0,0,98,97,1,0,0,0,99,107,1,0,0,0,100,103,5,10,0,0,101,104,3,18,9,0,102,
	104,5,25,0,0,103,101,1,0,0,0,103,102,1,0,0,0,104,106,1,0,0,0,105,100,1,
	0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,17,1,0,0,0,109,
	107,1,0,0,0,110,111,7,1,0,0,111,19,1,0,0,0,112,115,3,22,11,0,113,115,5,
	25,0,0,114,112,1,0,0,0,114,113,1,0,0,0,115,116,1,0,0,0,116,119,5,17,0,0,
	117,120,3,24,12,0,118,120,3,14,7,0,119,117,1,0,0,0,119,118,1,0,0,0,120,
	21,1,0,0,0,121,126,5,25,0,0,122,123,5,16,0,0,123,125,5,25,0,0,124,122,1,
	0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,23,1,0,0,0,128,
	126,1,0,0,0,129,137,5,25,0,0,130,137,3,18,9,0,131,137,3,22,11,0,132,133,
	5,6,0,0,133,134,3,26,13,0,134,135,5,7,0,0,135,137,1,0,0,0,136,129,1,0,0,
	0,136,130,1,0,0,0,136,131,1,0,0,0,136,132,1,0,0,0,137,25,1,0,0,0,138,143,
	3,28,14,0,139,142,5,25,0,0,140,142,3,26,13,0,141,139,1,0,0,0,141,140,1,
	0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,146,1,0,0,0,145,
	143,1,0,0,0,146,147,3,30,15,0,147,27,1,0,0,0,148,149,5,18,0,0,149,150,5,
	25,0,0,150,151,5,19,0,0,151,29,1,0,0,0,152,153,5,20,0,0,153,154,5,25,0,
	0,154,155,5,19,0,0,155,31,1,0,0,0,156,157,3,34,17,0,157,160,5,25,0,0,158,
	159,5,11,0,0,159,161,3,12,6,0,160,158,1,0,0,0,160,161,1,0,0,0,161,162,1,
	0,0,0,162,170,5,17,0,0,163,171,5,25,0,0,164,171,3,18,9,0,165,171,3,14,7,
	0,166,167,5,6,0,0,167,168,3,26,13,0,168,169,5,7,0,0,169,171,1,0,0,0,170,
	163,1,0,0,0,170,164,1,0,0,0,170,165,1,0,0,0,170,166,1,0,0,0,171,33,1,0,
	0,0,172,173,7,2,0,0,173,35,1,0,0,0,174,177,5,24,0,0,175,178,3,24,12,0,176,
	178,3,14,7,0,177,175,1,0,0,0,177,176,1,0,0,0,178,37,1,0,0,0,19,41,50,63,
	70,77,87,92,98,103,107,114,119,126,136,141,143,160,170,177];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BasicTypescriptParser.__ATN) {
			BasicTypescriptParser.__ATN = new ATNDeserializer().deserialize(BasicTypescriptParser._serializedATN);
		}

		return BasicTypescriptParser.__ATN;
	}


	static DecisionsToDFA = BasicTypescriptParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class RootContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public basicTypescript_list(): BasicTypescriptContext[] {
		return this.getTypedRuleContexts(BasicTypescriptContext) as BasicTypescriptContext[];
	}
	public basicTypescript(i: number): BasicTypescriptContext {
		return this.getTypedRuleContext(BasicTypescriptContext, i) as BasicTypescriptContext;
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_root;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterRoot) {
	 		listener.enterRoot(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitRoot) {
	 		listener.exitRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitRoot) {
			return visitor.visitRoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicTypescriptContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public importStatement(): ImportStatementContext {
		return this.getTypedRuleContext(ImportStatementContext, 0) as ImportStatementContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public functionVar(): FunctionVarContext {
		return this.getTypedRuleContext(FunctionVarContext, 0) as FunctionVarContext;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public htmlElement(): HtmlElementContext {
		return this.getTypedRuleContext(HtmlElementContext, 0) as HtmlElementContext;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_basicTypescript;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterBasicTypescript) {
	 		listener.enterBasicTypescript(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitBasicTypescript) {
	 		listener.exitBasicTypescript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitBasicTypescript) {
			return visitor.visitBasicTypescript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(BasicTypescriptParser.ID, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(BasicTypescriptParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_importStatement;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterImportStatement) {
	 		listener.enterImportStatement(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitImportStatement) {
	 		listener.exitImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(BasicTypescriptParser.ID, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public basicTypescript_list(): BasicTypescriptContext[] {
		return this.getTypedRuleContexts(BasicTypescriptContext) as BasicTypescriptContext[];
	}
	public basicTypescript(i: number): BasicTypescriptContext {
		return this.getTypedRuleContext(BasicTypescriptContext, i) as BasicTypescriptContext;
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_functionDeclaration;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitFunctionDeclaration) {
	 		listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_parameters;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterParameters) {
	 		listener.enterParameters(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitParameters) {
	 		listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(BasicTypescriptParser.ID, 0);
	}
	public valueType(): ValueTypeContext {
		return this.getTypedRuleContext(ValueTypeContext, 0) as ValueTypeContext;
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_parameter;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueTypeContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_valueType;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterValueType) {
	 		listener.enterValueType(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitValueType) {
	 		listener.exitValueType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitValueType) {
			return visitor.visitValueType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(BasicTypescriptParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(BasicTypescriptParser.ID, i);
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_functionCall;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(BasicTypescriptParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(BasicTypescriptParser.ID, i);
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_arguments;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterArguments) {
	 		listener.enterArguments(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitArguments) {
	 		listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(BasicTypescriptParser.STRING, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(BasicTypescriptParser.NUMBER, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(BasicTypescriptParser.BOOLEAN, 0);
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_type;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterType) {
	 		listener.enterType(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitType) {
	 		listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionVarContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public objectAttributes(): ObjectAttributesContext {
		return this.getTypedRuleContext(ObjectAttributesContext, 0) as ObjectAttributesContext;
	}
	public ID(): TerminalNode {
		return this.getToken(BasicTypescriptParser.ID, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_functionVar;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterFunctionVar) {
	 		listener.enterFunctionVar(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitFunctionVar) {
	 		listener.exitFunctionVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitFunctionVar) {
			return visitor.visitFunctionVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectAttributesContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(BasicTypescriptParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(BasicTypescriptParser.ID, i);
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_objectAttributes;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterObjectAttributes) {
	 		listener.enterObjectAttributes(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitObjectAttributes) {
	 		listener.exitObjectAttributes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitObjectAttributes) {
			return visitor.visitObjectAttributes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(BasicTypescriptParser.ID, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public objectAttributes(): ObjectAttributesContext {
		return this.getTypedRuleContext(ObjectAttributesContext, 0) as ObjectAttributesContext;
	}
	public htmlElement(): HtmlElementContext {
		return this.getTypedRuleContext(HtmlElementContext, 0) as HtmlElementContext;
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_expression;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtmlElementContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public openingTag(): OpeningTagContext {
		return this.getTypedRuleContext(OpeningTagContext, 0) as OpeningTagContext;
	}
	public closingTag(): ClosingTagContext {
		return this.getTypedRuleContext(ClosingTagContext, 0) as ClosingTagContext;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(BasicTypescriptParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(BasicTypescriptParser.ID, i);
	}
	public htmlElement_list(): HtmlElementContext[] {
		return this.getTypedRuleContexts(HtmlElementContext) as HtmlElementContext[];
	}
	public htmlElement(i: number): HtmlElementContext {
		return this.getTypedRuleContext(HtmlElementContext, i) as HtmlElementContext;
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_htmlElement;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterHtmlElement) {
	 		listener.enterHtmlElement(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitHtmlElement) {
	 		listener.exitHtmlElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitHtmlElement) {
			return visitor.visitHtmlElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpeningTagContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(BasicTypescriptParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_openingTag;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterOpeningTag) {
	 		listener.enterOpeningTag(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitOpeningTag) {
	 		listener.exitOpeningTag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitOpeningTag) {
			return visitor.visitOpeningTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosingTagContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(BasicTypescriptParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_closingTag;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterClosingTag) {
	 		listener.enterClosingTag(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitClosingTag) {
	 		listener.exitClosingTag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitClosingTag) {
			return visitor.visitClosingTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public var_(): VarContext {
		return this.getTypedRuleContext(VarContext, 0) as VarContext;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(BasicTypescriptParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(BasicTypescriptParser.ID, i);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public htmlElement(): HtmlElementContext {
		return this.getTypedRuleContext(HtmlElementContext, 0) as HtmlElementContext;
	}
	public valueType(): ValueTypeContext {
		return this.getTypedRuleContext(ValueTypeContext, 0) as ValueTypeContext;
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_statement;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_var;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterVar) {
	 		listener.enterVar(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitVar) {
	 		listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	constructor(parser?: BasicTypescriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
    public get ruleIndex(): number {
    	return BasicTypescriptParser.RULE_returnStatement;
	}
	public enterRule(listener: BasicTypescriptListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: BasicTypescriptListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BasicTypescriptVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
