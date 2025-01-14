// Generated from src/g4/BasicTypescript.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class BasicTypescriptLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "ID", "NUMBER", 
		"STRING", "BOOLEAN", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, BasicTypescriptLexer._ATN, BasicTypescriptLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "BasicTypescript.g4"; }

	public get literalNames(): (string | null)[] { return BasicTypescriptLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return BasicTypescriptLexer.symbolicNames; }
	public get ruleNames(): string[] { return BasicTypescriptLexer.ruleNames; }

	public get serializedATN(): number[] { return BasicTypescriptLexer._serializedATN; }

	public get channelNames(): string[] { return BasicTypescriptLexer.channelNames; }

	public get modeNames(): string[] { return BasicTypescriptLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,29,215,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,1,0,1,0,1,0,1,0,1,0,1,
	0,1,0,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,
	4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,
	11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,
	1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
	14,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,19,1,20,
	1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,
	23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,5,24,166,8,24,10,24,12,24,169,9,24,
	1,25,4,25,172,8,25,11,25,12,25,173,1,26,1,26,1,26,1,26,5,26,180,8,26,10,
	26,12,26,183,9,26,1,26,1,26,1,26,1,26,1,26,5,26,190,8,26,10,26,12,26,193,
	9,26,1,26,3,26,196,8,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,
	27,207,8,27,1,28,4,28,210,8,28,11,28,12,28,211,1,28,1,28,0,0,29,1,1,3,2,
	5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,
	16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,
	28,57,29,1,0,6,2,0,65,90,97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,57,
	2,0,34,34,92,92,2,0,39,39,92,92,3,0,9,10,13,13,32,32,223,0,1,1,0,0,0,0,
	3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,
	0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,
	0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,
	0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,
	0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,
	1,59,1,0,0,0,3,66,1,0,0,0,5,68,1,0,0,0,7,71,1,0,0,0,9,76,1,0,0,0,11,85,
	1,0,0,0,13,87,1,0,0,0,15,89,1,0,0,0,17,91,1,0,0,0,19,93,1,0,0,0,21,95,1,
	0,0,0,23,97,1,0,0,0,25,104,1,0,0,0,27,111,1,0,0,0,29,119,1,0,0,0,31,131,
	1,0,0,0,33,133,1,0,0,0,35,135,1,0,0,0,37,137,1,0,0,0,39,139,1,0,0,0,41,
	142,1,0,0,0,43,146,1,0,0,0,45,150,1,0,0,0,47,156,1,0,0,0,49,163,1,0,0,0,
	51,171,1,0,0,0,53,195,1,0,0,0,55,206,1,0,0,0,57,209,1,0,0,0,59,60,5,105,
	0,0,60,61,5,109,0,0,61,62,5,112,0,0,62,63,5,111,0,0,63,64,5,114,0,0,64,
	65,5,116,0,0,65,2,1,0,0,0,66,67,5,42,0,0,67,4,1,0,0,0,68,69,5,97,0,0,69,
	70,5,115,0,0,70,6,1,0,0,0,71,72,5,102,0,0,72,73,5,114,0,0,73,74,5,111,0,
	0,74,75,5,109,0,0,75,8,1,0,0,0,76,77,5,102,0,0,77,78,5,117,0,0,78,79,5,
	110,0,0,79,80,5,99,0,0,80,81,5,116,0,0,81,82,5,105,0,0,82,83,5,111,0,0,
	83,84,5,110,0,0,84,10,1,0,0,0,85,86,5,40,0,0,86,12,1,0,0,0,87,88,5,41,0,
	0,88,14,1,0,0,0,89,90,5,123,0,0,90,16,1,0,0,0,91,92,5,125,0,0,92,18,1,0,
	0,0,93,94,5,44,0,0,94,20,1,0,0,0,95,96,5,58,0,0,96,22,1,0,0,0,97,98,5,115,
	0,0,98,99,5,116,0,0,99,100,5,114,0,0,100,101,5,105,0,0,101,102,5,110,0,
	0,102,103,5,103,0,0,103,24,1,0,0,0,104,105,5,110,0,0,105,106,5,117,0,0,
	106,107,5,109,0,0,107,108,5,98,0,0,108,109,5,101,0,0,109,110,5,114,0,0,
	110,26,1,0,0,0,111,112,5,98,0,0,112,113,5,111,0,0,113,114,5,111,0,0,114,
	115,5,108,0,0,115,116,5,101,0,0,116,117,5,97,0,0,117,118,5,110,0,0,118,
	28,1,0,0,0,119,120,5,72,0,0,120,121,5,84,0,0,121,122,5,77,0,0,122,123,5,
	76,0,0,123,124,5,69,0,0,124,125,5,108,0,0,125,126,5,101,0,0,126,127,5,109,
	0,0,127,128,5,101,0,0,128,129,5,110,0,0,129,130,5,116,0,0,130,30,1,0,0,
	0,131,132,5,46,0,0,132,32,1,0,0,0,133,134,5,61,0,0,134,34,1,0,0,0,135,136,
	5,60,0,0,136,36,1,0,0,0,137,138,5,62,0,0,138,38,1,0,0,0,139,140,5,60,0,
	0,140,141,5,47,0,0,141,40,1,0,0,0,142,143,5,108,0,0,143,144,5,101,0,0,144,
	145,5,116,0,0,145,42,1,0,0,0,146,147,5,118,0,0,147,148,5,97,0,0,148,149,
	5,114,0,0,149,44,1,0,0,0,150,151,5,99,0,0,151,152,5,111,0,0,152,153,5,110,
	0,0,153,154,5,115,0,0,154,155,5,116,0,0,155,46,1,0,0,0,156,157,5,114,0,
	0,157,158,5,101,0,0,158,159,5,116,0,0,159,160,5,117,0,0,160,161,5,114,0,
	0,161,162,5,110,0,0,162,48,1,0,0,0,163,167,7,0,0,0,164,166,7,1,0,0,165,
	164,1,0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,167,168,1,0,0,0,168,50,1,0,
	0,0,169,167,1,0,0,0,170,172,7,2,0,0,171,170,1,0,0,0,172,173,1,0,0,0,173,
	171,1,0,0,0,173,174,1,0,0,0,174,52,1,0,0,0,175,181,5,34,0,0,176,180,8,3,
	0,0,177,178,5,92,0,0,178,180,9,0,0,0,179,176,1,0,0,0,179,177,1,0,0,0,180,
	183,1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,182,184,1,0,0,0,183,181,1,0,
	0,0,184,196,5,34,0,0,185,191,5,39,0,0,186,190,8,4,0,0,187,188,5,92,0,0,
	188,190,9,0,0,0,189,186,1,0,0,0,189,187,1,0,0,0,190,193,1,0,0,0,191,189,
	1,0,0,0,191,192,1,0,0,0,192,194,1,0,0,0,193,191,1,0,0,0,194,196,5,39,0,
	0,195,175,1,0,0,0,195,185,1,0,0,0,196,54,1,0,0,0,197,198,5,116,0,0,198,
	199,5,114,0,0,199,200,5,117,0,0,200,207,5,101,0,0,201,202,5,102,0,0,202,
	203,5,97,0,0,203,204,5,108,0,0,204,205,5,115,0,0,205,207,5,101,0,0,206,
	197,1,0,0,0,206,201,1,0,0,0,207,56,1,0,0,0,208,210,7,5,0,0,209,208,1,0,
	0,0,210,211,1,0,0,0,211,209,1,0,0,0,211,212,1,0,0,0,212,213,1,0,0,0,213,
	214,6,28,0,0,214,58,1,0,0,0,10,0,167,173,179,181,189,191,195,206,211,1,
	6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BasicTypescriptLexer.__ATN) {
			BasicTypescriptLexer.__ATN = new ATNDeserializer().deserialize(BasicTypescriptLexer._serializedATN);
		}

		return BasicTypescriptLexer.__ATN;
	}


	static DecisionsToDFA = BasicTypescriptLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}