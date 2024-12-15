//import compiler from "my-compiler/dist/compiler";


import compiler from "my-compiler/dist/compiler";

export default function loader(source: string) {
    return compiler(source);
}