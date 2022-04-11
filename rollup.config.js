import json from "@rollup/plugin-json";
import {terser} from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";


export default {
    input: 'src/main.js',
    output: [{
            file: 'bundle.js',
            format: 'cjs'
        }, {
            file: 'bundle.min.js',
            format: 'iife',
            name: 'version',
            plugins: [terser()]
        }
    ],
    plugins: [json(), typescript()]
}