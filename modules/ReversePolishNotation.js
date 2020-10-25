const ReverPolishNotation = (postfix) => {

  let expr = postfix.split(" ");
  let stack = [];

  if (expr.length === 0) {
    return 0;
  }

  expr.forEach((elem, index) => {

    if (!isNaN(elem) && isFinite(elem)) {

      stack.push(elem);

    } else {

      //Dado o conceito de pilha se a operação for unária 
      // a sempre vai ser a váriavel com valor e b indefinido
      let a = stack.pop();
      let b = stack.pop();

      switch (elem) {

        case '+':

          stack.push(`soma(${a},${b})`);
          break;

        case '-':

          stack.push(`subt(${a},${b})`);
          break;

        case '*':


          stack.push(`mult(${a},${b})`);
          break;

        case '/':

          stack.push(`divi(${a},${b})`);
          break;

        case '^':

          stack.push(`expo(${a},${b})`);
          break;

        case ">":

          stack.push(`maior(${a},${b})`);
          break;

        case "<":

          stack.push(`menor(${a},${b})`);
          break;

        case '%':

          stack.push(`resto(${a},${b})`)
          break;

        case "!":

          stack.push(`fatorial(${a})`)
          break;

        case "s":

          stack.push(`TrocaSinal(${a})`)
          break;

        case "(":

          break;

        default:
          console.log(`Operador não reconhecido`);
      }

    }

  });

  if (stack.length > 1) {
    return "ERROR";
  } else {
    return stack[0];
  }

}

export default ReverPolishNotation;