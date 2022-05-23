console.log(__filename);
console.log(__dirname);
function rekniAhoj(name){
    console.log('Ahoj' + name);
}
rekniAhoj('Martine');


//window.console.log = console.log();

var sayHello = function(){

}
var log = require('./logger');
console.log(log);

log('message');

const path = require('path');
var pathobj = path.parse(__filename);

console.log(pathobj);
const os = require('os');
var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log('Total memory: ' + totalMem);
console.log(`Total memory: ${totalMem}`);
console.log(`Free memory: ${freeMem}`);

const fs = require('fs');

//const files = fs.readdirSync('./');
//console.log(files);

fs.readdir('$',function(err, files){
    if (err) console.log('Error ', err);
    else console.log('Result', files);
});

const EventEmitter = require('events');
const emitter = new EventEmitter();



const Logger = require('./logger');
const logger = new Logger();

emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');

