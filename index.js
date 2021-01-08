import CheckMathExpression from './modules/CheckMathExpression.js';
import ReversePolishNotation  from './modules/ReversePolishNotation.js';
import  ShuntingYard  from './modules/ShuntingYard.js';
import ResolveExpression  from './modules/ResolveExpression.js';

import {Add_Function_List,Add_Operator,Add_Operator_List,FunctionsList} from './data/constants.js';

import tokenize from './utils/tokenize.js';

const formEntireFunction = (str) => {
  
  let i = 1;
  let sentence = str[i];

  while (str[i] != "}") {

    i++;
    sentence += str[i];
  
  }

  if (i == str.length) {
    throw new Error("Função formada de forma errada");
  }

  return sentence;
};

function Add_Function(functionLine) {

  CheckMathExpression(functionLine);

  let tokenizedFunction = tokenize(functionLine);

  if (tokenizedFunction[0] == "function") {

    let formedSentence = formEntireFunction(tokenizedFunction);

    let functionName = "";
  
    let initParentesisIndex = formedSentence.indexOf("(");
    let endParentesisIndex = formedSentence.indexOf(")");

    let initBracketsIndex = formedSentence.indexOf("{");
    let endBracketsIndex = formedSentence.indexOf("}");

    functionName = formedSentence
    .slice(0, initParentesisIndex);

    let parameters = formedSentence
    .slice(initParentesisIndex + 1, endParentesisIndex)
    .split(',');

    let content = formedSentence.slice(initBracketsIndex + 1, endBracketsIndex);

    Add_Operator(functionName);
    Add_Operator_List(functionName,parameters.length);
    Add_Function_List(functionName,parameters,content);

  }

}

function Solve_Expression(expression) {

  //expression = "1*2-3"
  //expression = "5!";
  expression = "1+1*(1+2)";
  //expression = "1++-+-+--+--++++---++--++--++--++--++--2"
  //expression = "3!+s3"
  //expression= "3!!3";
  //expression = "tien(1,2) ";
  //expression="2***2"

  let string = CheckMathExpression(expression);

  const postfix = ShuntingYard(string);

  const entrada = ReversePolishNotation(postfix);

  const array = entrada.match(/-?[0-9]+|[A-Za-z0-9]+|\S/g);
  const name = array.shift();

  console.log("Resultado aritmético da expressão: ", ResolveExpression(array, name));
  return;

}

console.log(Solve_Expression('tien 4 2'));
//console.log(Add_Function('funtion tien(a,b){ a+b*b }'))

export { Solve_Expression, Add_Function }


