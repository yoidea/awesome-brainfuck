# Awesome Brainfuck

Brainfuck environment for hot reloading.

## Hot reload

Hot reload when file in `src/*.bf` is changed.

```bash
$ yarn start

[nodemon] 2.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): src/**/*
[nodemon] watching extensions: bf
[nodemon] starting `node ./run.js ./src/*.bf`
Executing ./src/example.bf ... =>
ABC
[nodemon] clean exit - waiting for changes before restart
```

## Compile

compile brainfuck code to javascript.
Specify the Brainfuck file as the first arg, the output file as the second arg.

```bash
$ yarn build src/example.bf out.js

$ node out.js

ABC
```
