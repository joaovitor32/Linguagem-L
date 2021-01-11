import CheckMathExpression from './CheckMathExpression.js';
import ReversePolishNotation  from './ReversePolishNotation.js';
import  ShuntingYard  from './ShuntingYard.js';
import ResolveExpression  from './ResolveExpression.js';

import {Add_Function_List,Add_Operator,Add_Operator_List} from '../data/constants.js';

import tokenize from '../utils/tokenize.js';

const formEntireFunction = (str) => {
  
  let i = 1;
  let sentence = str[i];

  while (str[i] != "}") {

    i++;
    sentence += str[i];
    
    if (i == str.length) {
    
      throw new Error("Malformed function missing: }");

    }

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

  }else{

    throw new Error('Unexpected token given')

  }

}

function Solve_Expression(expression) {

  let string = CheckMathExpression(expression);

  const postfix = ShuntingYard(string);

  const entrada = ReversePolishNotation(postfix);

  const array = entrada.match(/-?[0-9]+|[A-Za-z0-9]+|\S/g);
  const name = array.shift();

  return ResolveExpression(array, name);

}

export { Solve_Expression, Add_Function }


