# Justin van Leuvenum
## Front-end framework with Typescript
A frontend react compiler using custom typescript

## Commandos
### Project builden
#### STAP 1 compiler
- npm install
- npm run build

cd compiler
npm install
npm run build

#### STAP 2 loader
- npm install
- npm run build


cd ../loader
npm install 
npm run build


#### STAP 3 my-app
- npm install
- npm run start


cd ../my-app
npm install
npm run start


## Sample input
```tsx
let hello = 'World'
const version: number = 2
const isTypescript: boolean = true

function printHello(message: string){console.log(message)}

function App() {
    let h1 : HTMLElement = (<h1>the parents of<p>THESE CHILDREN</p></h1>)
    return h1
}

let html = App()
let content = document.getElementById('content')
content.appendChild(html)


```

## Sample output
```javascript
let hello = "World"
const version = 2
const isTypescript = true
function printHello(message) {
    console.log(message)
}
function App() {
    let h1 = document.createElement('h1')
    h1.textContent += 'the'
    h1.textContent += 'parents'
    h1.textContent += 'of'
    let p = document.createElement('p')
    p.textContent += 'THESE'
    p.textContent += 'CHILDREN'
    h1.appendChild(p)
    return h1
}
let html = App()
let content = document.getElementById("content")
content.appendChild(html)

```

### GRAMMAR file
```antlrv4
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
```

### TESTS
Na het builden van het project, kunnen de testen uitgevoerd worden

```shell
   cd ../compiler
   npm run test
   ```