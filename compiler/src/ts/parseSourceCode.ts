import * as antlr from 'antlr4'
import BasicTypescriptLexer from "./generated/BasicTypescriptLexer";
import BasicTypescriptParser from "./generated/BasicTypescriptParser";
import {CustomBasicTypescriptVisitor} from "./visitor/CustomBasicTypescriptVisitor";

export function parseSourceCode(input: string) {
    const chars = antlr.CharStreams.fromString(input);
    const lexer = new BasicTypescriptLexer(chars);
    const tokens = new antlr.CommonTokenStream(lexer);
    const parser = new BasicTypescriptParser(tokens);
    const cst = parser.root();

    const visitor = new CustomBasicTypescriptVisitor();
    const ast = visitor.visit(cst);

    //console.log(ast);

    return ast;

}