import {parseSourceCode} from '../src/ts/parseSourceCode'

test('Visitor AST generation for import statement', () => {
    const input = `import * as Test from \"test\"`;
    const result = parseSourceCode(input);
    const expected = {
        type: 'RootDeclaration',
        members: [
            {
                type: 'ImportStatementDeclaration',
                alias: 'Test',
                source: 'test'
            }
        ]
    };


    expect(result).toEqual(expected);
    // toBe - in memorie, moet gelijke object zijn
    // toEqual - kijkt naar waarde
});

test('Visitor AST generation for function declaration', () => {
    const input = `function test(justin : string){ return testId }`;
    const result = parseSourceCode(input);
    const expected = {
        type: 'RootDeclaration',
        members: [
            {
                type: 'FunctionDeclaration',
                functionName: 'test',
                parameters: [
                    {
                        type: 'ParameterDeclaration',
                        parameterName: 'justin',
                        valueType: 'string'
                    }
                ],
                members: [
                    {
                        type: 'ReturnStatementDeclaration',
                        value: {
                            type: 'Identifier',
                            value: 'testId'

                        }
                    }
                ]
            }
        ]
    };


    expect(result).toEqual(expected);
});


test('Visitor AST generation for function call', () => {
    const input = `document.createElement("div")`;
    const result = parseSourceCode(input);
    const expected = {
        type: 'RootDeclaration',
        members: [
            {
                type: 'FunctionCallDeclaration',
                functionName: 'document.createElement',
                arguments: [
                    {
                        type: 'string',
                        value: 'div'
                    }
                ]
            }
        ]
    };


    expect(result).toEqual(expected);
});


test('Visitor AST generation for html element declaration', () => {
    const input = `<h1>Heading</h1>`;
    const result = parseSourceCode(input);
    const expected = {
        type: 'RootDeclaration',
        members: [
            {
                type: 'HtmlElementDeclaration',
                openingTag: {
                    type: 'OpeningTagDeclaration',
                    tagName: 'h1'
                },
                children: [
                    {
                        type: 'Identifier',
                        value: 'Heading'
                    }
                ],
                closingTag: {
                    type: 'ClosingTagDeclaration',
                    tagName: 'h1'
                }
            }
        ]
    };


    expect(result).toEqual(expected);
});


test('Visitor AST generation for statement declaration', () => {
    const input = `const isTypeScript : boolean = false`;
    const result = parseSourceCode(input);
    const expected = {
        type: 'RootDeclaration',
        members: [
            {
                type: 'StatementDeclaration',
                varType: {
                    type: 'VarType',
                    variableType: 'const'
                },
                varName: {
                    type: 'Identifier',
                    value: 'isTypeScript'
                },
                varReturnType: 'boolean',
                value: {
                    type: 'boolean',
                    value: 'false'
                }
            }
        ]
    };


    expect(result).toEqual(expected);
});


test('Visitor AST generation for statement declaration (number)', () => {
    const input = `let age = 10`;
    const result = parseSourceCode(input);
    const expected = {
        type: 'RootDeclaration',
        members: [
            {
                type: 'StatementDeclaration',
                varType: {
                    type: 'VarType',
                    variableType: 'let'
                },
                varName: {
                    type: 'Identifier',
                    value: 'age'
                },
                value: {
                    type: 'number',
                    value: '10'
                }
            }
        ]
    };


    expect(result).toEqual(expected);
});
