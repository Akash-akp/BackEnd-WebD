console.log("Hello World");

console.log(process.argv);

let agrs = process.argv.slice(2);

function add(a,b){
    return a+b;
}

console.log(args);

console.log("Adding 2 numbers:",add(parseInt(agrs[0]),parseInt(args[1])));