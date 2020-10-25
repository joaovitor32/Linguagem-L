import ShuntingYard from './modules/ShuntingYard.js';
import ReversePolishNotation from './modules/ReversePolishNotation.js';
import ResolveExpression from './modules/ResolveExpression.js';

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Insira a sentença ? ", (dadoInserido) => {

  const postfix = ShuntingYard(dadoInserido);
  const entrada = ReversePolishNotation(postfix);
  
  console.log(entrada);

  const array = entrada.match(/-?[0-9]+|[A-Za-z0-9]+|\S/g);
  const name = array.shift();
  console.log("Sentença Formada: ",entrada);
  console.log("Resultado aritmético da expressão: ",ResolveExpression (array, name));

});

rl.on("close", function () {
  process.exit(0);
});

/*-------- Test function --------*/

function test_resolve_function(sentence) {

  const array = sentence.match(/-?[0-9]+|[A-Za-z0-9]+|\S/g);
  const name = array.shift();

  return resolve_function(array, name)

}

export default test_resolve_function;
