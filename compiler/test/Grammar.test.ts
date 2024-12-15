import {parseSourceCode} from "../src/ts/parseSourceCode";


test('Invalid syntax for import statement', () => {
    let input : string = 'import * as from React'; // No Alias
    let message : string = '';
    try {
        parseSourceCode(input)
    } catch (e) {
        message = e.message
    }
    expect(message).toBe('Invalid import statement')
})


test('Invalid syntax for function declaration', () => {
    let input : string = 'function {}'; // No ID
    let message : string = '';
    try {
        parseSourceCode(input)
    } catch (e) {
        message = e.message
    }
    expect(message).toBe('Invalid Function Declaration')
})


test('Invalid syntax for htmlElement', () => {
    let input = `<p> test </h1>`; // Tags dont match
    let message : string = '';
    try {
        parseSourceCode(input)
    } catch (e) {
        message = e.message
    }
    expect(message).toBe('Html tags mismatch')
})



test('Invalid syntax for return statement', () => {
    let input : string = 'return ';
    let message : string = '';
    try {
        parseSourceCode(input)
    } catch (e) {
        message = e.message
    }
    expect(message).toBe('Invalid Return Statement')
})