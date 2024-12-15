grammar BasicTypescript;

root: basicTypescript+;

basicTypescript: importStatement | functionDeclaration | functionCall | functionVar | statement | htmlElement | returnStatement;

importStatement: 'import' '*' 'as' ID 'from' STRING;

functionDeclaration: 'function' ID '(' parameters? ')' '{' basicTypescript+ '}';

parameters: parameter (',' parameter)?;

parameter: ID ':' valueType ;

valueType: 'string' | 'number' | 'boolean' | 'HTMLElement';

functionCall: (ID '.')? ID '(' arguments? ')';

arguments: (type | ID) (',' (type | ID))* ;

type: STRING | NUMBER | BOOLEAN ;

functionVar: (objectAttributes | ID) '=' (expression | functionCall);

objectAttributes: ID ('.'ID)* ;

expression: ID | type | objectAttributes | '(' htmlElement ')';

htmlElement: openingTag ( ID | htmlElement )* closingTag ;

openingTag: '<' ID '>' ;

closingTag: '</' ID '>' ;

statement: var ID (':' valueType)? '=' (ID | type | functionCall | '('htmlElement')') ;

var: 'let' | 'var' | 'const' ;

returnStatement: 'return' (expression | functionCall) ;

ID: [a-zA-Z][_a-zA-Z0-9]* ;
NUMBER: [0-9]+;
STRING: '"' ( ~["\\] | '\\' .)* '"' | '\'' ( ~['\\] | '\\' .)* '\'';
BOOLEAN: 'true' | 'false' ;
WS: [ \t\r\n]+ -> skip ;
