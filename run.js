const fs = require("fs");
const { interpret } = require("jsbrainfuck");

process.argv.slice(2).forEach((name) => {
  const source = fs.readFileSync(name, "utf-8");
  console.log(`Executing ${name} ... =>`);
  const { memory, pointer, output, print } = interpret(source);
  print();
});
