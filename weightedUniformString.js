'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function weightedUniformStrings(s, queries) {
    let prev = '';
    let sum = [];
    let finalValue = 0;
    [...s].forEach(char => {
        let value = (char.charCodeAt(0) - 96);
        if (prev === char) finalValue += value;
        else finalValue = value;
        sum.push(finalValue);
        prev = char;
    })

    let result = [];
    queries.forEach(query => {
        (sum.indexOf(query) != -1) ? result.push('Yes') : result.push('No');
    })
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const s = readLine();
    
    const queriesCount = parseInt(readLine(), 10);
    let queries = [];
    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = parseInt(readLine(), 10);
        queries.push(queriesItem);
    }

    let result = weightedUniformStrings(s, queries);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
