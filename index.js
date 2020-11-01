import ShuntingYard from './modules/ShuntingYard.js';
import ReversePolishNotation from './modules/ReversePolishNotation.js';
import ResolveExpression from './modules/ResolveExpression.js';
import CheckMathExpression from './modules/CheckMathExpression.js';

export function Solve_Expression(expression){
  
  //expression = "1*2-3"
  //expression = "1+2*9*4+5/2+1*5";
  //expression = "1+1*(1+2)";
  //expression = "1+---+2++2-+2-+1*9++2"
  //expression = "3!+s3"
  //expression= "1*(1-+2)/(3-2)";
  expression = "function tien(){}";

  let string = CheckMathExpression(expression);

  const postfix = ShuntingYard(string);

  const entrada = ReversePolishNotation(postfix);

  const array = entrada.match(/-?[0-9]+|[A-Za-z0-9]+|\S/g);
  const name = array.shift();
  
  console.log("Sentença Formada: ",entrada);
  console.log("Resultado aritmético da expressão: ",ResolveExpression (array, name));
  return;
  
}

console.log(Solve_Expression('sadadads'));


