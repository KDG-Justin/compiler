import compiler from "../src/ts/compiler";


test('Javascript generation for statement', () => {
    const input = `let test : boolean = false`;
    const result = compiler(input);
    const expected = 'let test = false\n'; // na elke lijn code word er een newline voorzien


    expect(result).toEqual(expected);
});


test('Javascript generation for function with parameter', () => {
    const input = `function test(hello:string){console.log(\"hi\")}`;
    const result = compiler(input);
    const expected = 'function test(hello) {\nconsole.log(\"hi\")\n}\n';


    expect(result).toEqual(expected);
});


test('Javascript generation for function variable', () => {
    const input = `let test = test()`;
    const result = compiler(input);
    const expected = 'let test = test()\n';


    expect(result).toEqual(expected);
});


test('Javascript generation for function call', () => {
    const input = `test(10)`;
    const result = compiler(input);
    const expected = `test(10)\n`;


    expect(result).toEqual(expected);
});


test('Javascript generation for htmlElement', () => {
    const input = `<p>Hello</p>`;
    const result = compiler(input);
    const expected = `let p = document.createElement('p')
p.textContent += 'Hello'\n\n`;

    expect(result).toEqual(expected);
});


test('Javascript generation for htmlElement nesting', () => {
    const input = `<p>Hello<h1>test</h1></p>`;
    const result = compiler(input);
    const expected = `let p = document.createElement('p')
p.textContent += 'Hello'
let h1 = document.createElement('h1')
h1.textContent += 'test'
p.appendChild(h1)\n`;

    expect(result).toEqual(expected);
});



//==========PERSONAL USE=============//
test('test function with html', () => {
    const input = `function App() {
    let html = (<h1>The PARENTS of<u>These Children</u></h1>)
    return html}`;
    const result = compiler(input);
    console.log(result)
});

test('test without function', () => {
    const input = `let html : HTMLElement = (<h1>The PARENTS of<u>These Children</u></h1>)`;
    const result = compiler(input);
    console.log(result)
});

test('test return statement', () => {
    const input = `return html`;
    const result = compiler(input);
    console.log(result)
});
