let hello = 'World'
const version: number = 2
const isTypescript: boolean = true

function printHello(message: string){console.log(message)}

function App() {
    let h1 : HTMLElement = (<h1>the parents of<p>THESE <u>Children</u></p></h1>)
    return h1
}

let html = App()
let content = document.getElementById('content')
content.appendChild(html)
