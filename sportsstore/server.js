const express = require('express');
const jsonServer = require('json-server');
const chokidar = require('chokidar');
const cors = require('cors');

const app = express();
const router = undefined;
function sumValues(values){return values.reduce((total,val) => total + val, 0);}

function asyncAdd(values){
    return new Promise (callback =>
    setTimeout( () => {
        let total = sumValues(values);
        console.log(`Async Total: ${total}`);
        callback(total);
    },500)
    )    
}

let values = [10,20,30,40,50];
let total = asyncAdd(values);
console.log(`Main Total: ${total}`);