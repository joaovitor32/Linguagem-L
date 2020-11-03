import { operators } from '../constants.js';

import isNumeric from '../utils/isNumeric.js';
import tokenize from '../utils/tokenize.js';

class Stack {
    constructor() {
        this.dataStore = [];

        this.peek = () => {
            return this.dataStore[this.dataStore.length - 1];
        }
        this.push = (element) => {
            this.dataStore.push(element);
            return;
        }
        this.pop = () => {
            return this.dataStore.pop();
        }
    }
}


/*const checkFunctionSentence = (functionSentence) => {

    let brackets = 0;

    functionSentence.forEach((elem, index) => {
        switch (elem) {
            case '{':
                brackets++;
                break;
            case '}':
                brackets--;
            default:
                throw new Error('Erro não identificado');
        }
    })

    if (brackets != 0) {

        throw new Error("Colchetes errados");

    }
    return;

}*/

const Add_Operator = (name) => {
    if (!operators[name]) {
        operators[name] = [{ associativity: "Left", precedence: 1 }];
    }
}

//https://en.wikipedia.org/wiki/Shunting-yard_algorithm
const ShuntingYard = (infix) => {

    let stack = new Stack();
    let numeros = new Stack();

    let token;
    let postfix = "";

    infix = tokenize(infix);

    Object.values(infix).forEach((elem, index) => {

        token = elem;

        if (isNumeric(token)) {

            numeros.dataStore.push(token);

        } else if (!!operators[token]) {

            let topoStack = stack.peek();

            while (

                (!!topoStack) &&
                (operators[token][0].precedence < topoStack ? operators[topoStack][0].precedence : 0 ||
                    (operators[token][0].precedence == topoStack ? operators[topoStack][0].precedence : 0 &&
                        operators[token][0].associativity == "Left"
                    )) &&

                (topoStack !== "(")

            ) {

                numeros.push(stack.pop());
                topoStack = stack.peek();

            }

            stack.push(token);

        } else if (token == "(") {

            stack.push(token);

        } else if (token == ")") {

            let stack_top = stack.peek();

            while (stack_top != "(") {

                numeros.push(stack.pop());
                stack_top = stack.peek();

            }

            if (stack_top == "(") {

                stack.pop();

            }

        }

    })

    postfix += numeros.dataStore.join(" ");
    postfix += " "
    postfix += stack.dataStore.reverse().join(" ");

    return postfix;

}

export { ShuntingYard, Add_Operator };