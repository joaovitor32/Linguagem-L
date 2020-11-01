let operators = {
    ['^']: [{ associativity: "Right", precedence: 4 }],
    ['*']: [{ associativity: "Left", precedence: 3 }],
    ['/']: [{ associativity: "Left", precedence: 3 }],
    ['+']: [{ associativity: "Left", precedence: 2 }],
    ['-']: [{ associativity: "Left", precedence: 2 }],
    ['%']: [{ associativity: "Left", precedence: 3 }],
    ['>']: [{ associativity: "Left", precedence: 1 }],
    ['<']: [{ associativity: "Left", precedence: 1 }],
    ['!']: [{ associativity: "Right", precedence: 6 }],
    ['s']: [{ associativity: "Right", precedence: 3 }],
}

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

const isNumeric = (str) => {
    if (typeof str != "string") return false
    return !isNaN(str) && !isNaN(parseFloat(str))
}

const checkFunctionSentence = (functionSentence) => {

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

}

const formEntireFunction = (str, init) => {

    let i = init;
    let sentence = str[init];

    while (str[i] != "}") {
        i++;
        sentence += str[i];
    }

    if (i == str.length) {
        throw new Error("Função formada de forma errada");
    }

    return sentence;
};


//https://en.wikipedia.org/wiki/Shunting-yard_algorithm
const ShuntingYard = (infix, index) => {

    infix = infix.replace(/\s+/g, ''); // remove spaces, so infix[i]!=" "

    let stack = new Stack();
    let numeros = new Stack();

    let token;
    let postfix = "";

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

        } else if (token === "f") {

            let functionKey = "";

            let init = 0

            while (init < 8) {
                functionKey += infix[index + init];
                init++;
            }

            if (functionKey == "function") {

                let formedSentence = formEntireFunction(Object.values(infix), index + init);
                
            }

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

export default ShuntingYard;