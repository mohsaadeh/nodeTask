console.log("Hello, World!");

const args = process.argv.slice(2);
console.log(args);


setTimeout(() => {
  console.log("Hello, World!");
}, 2000);


setInterval(() => {
  console.log("Hello, World!");
}, 2000);


console.warn("Warning: Something went wrong");


// node server arg1 arg2  