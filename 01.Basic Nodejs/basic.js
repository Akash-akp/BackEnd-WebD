console.log("Hello World");

console.log(process.argv);


function add(a,b){
    return a+b;
}

// console.log(process.argv.slice(2));

var a = process.argv.slice(2);

console.log(a);

console.log("Adding 2 numbers:",add(parseInt(a[0]),parseInt(a[1])));