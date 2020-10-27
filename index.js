import ShuntingYard from './modules/ShuntingYard.js';
import ReversePolishNotation from './modules/ReversePolishNotation.js';
import ResolveExpression from './modules/ResolveExpression.js';
import CheckMathExpression from './modules/CheckMathExpression.js';

export function Solve_Expression(expression){
  
  //expression = "1+2*9*4+5/2";
  expression = "9!+1"

  CheckMathExpression(expression);

  const postfix = ShuntingYard(expression);

  const entrada = ReversePolishNotation(postfix);

  const array = entrada.match(/-?[0-9]+|[A-Za-z0-9]+|\S/g);
  const name = array.shift();
  
  console.log("Sentença Formada: ",entrada);
  console.log("Resultado aritmético da expressão: ",ResolveExpression (array, name));
  return;
  
}

console.log(Solve_Expression('sadadads'));


