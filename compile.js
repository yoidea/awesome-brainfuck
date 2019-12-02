const fs = require("fs");
const { compile } = require("jsbrainfuck");

const name = process.argv[2];
const source = fs.readFileSync(name, "utf-8");
const { code } = compile(source);
if (!process.argv[3]) {
  process.stdout.write(code);	
} else {
  const out = process.argv[3];
  fs.writeFileSync(out, code);
}
