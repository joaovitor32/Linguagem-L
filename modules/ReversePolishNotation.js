import { OperatorsList } from 'mathematics-expression-solver/data/constants.js';

const ReversePolishNotation = (postfix) => {
  
  if(typeof postfix !== "string"){

    throw new Error('Wrong parameter type')

  }

  let expr = postfix.split(" ");

  let stack = [];

  expr.forEach((elem, index) => {

    if (!isNaN(elem) && isFinite(elem)) {

      stack.push(elem);

    } else {

      //Dado o conceito de pilha se a operação for unária 
      // a sempre vai ser a váriavel com valor e b indefinido
      let a = stack.pop();

      if (OperatorsList[elem][1].args == 2) {

        let b = stack.pop();
        stack.push(OperatorsList[elem][0](a, b));

      } else {

        stack.push(OperatorsList[elem][0](a));

      }

    }

  });


  if (stack.length > 1) {
    
    throw new Error("Not identified tokens");

  } else {
    
    return stack[0];
  }

}

export default ReversePolishNotation ;