let operators = {
    ['^']: [{ associativity: "Right", precedence: 4 }],
    ['*']: [{ associativity: "Left", precedence: 3 }],
    ['/']: [{ associativity: "Left", precedence: 3 }],
    ['+']: [{ associativity: "Left", precedence: 2 }],
    ['-']: [{ associativity: "Left", precedence: 2 }],
    ['%']: [{ associativity: "Left", precedence: 3 }],
    ['>']: [{ associativity: "Left", precedence: 1 }],
    ['<']: [{ associativity: "Left", precedence: 1 }],
    ['!']: [{ associativity: "Left", precedence: 6 }],
    ['s']: [{ associativity: "Left", precedence: 3 }],
}

class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
        this.peek = () => {
            return this.dataStore[this.top - 1];
        }
        this.push = (element) => {
            this.dataStore[this.top++] = element;
        }
        this.pop = () => {
            return this.dataStore[--this.top];
        }

        this.length = () => {
            return this.top;
        }
    }
}

const isNumeric = (str) => {
    if (typeof str != "string") return false
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}

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

        } else if (operators[token]) {

            let topoStack = stack.peek();

            while (
                operators[topoStack] &&
                (
                    operators[token].precedence < operators[topoStack].precedence ||
                    (
                        operators[token].precedence == operators[topoStack].precedence &&
                        operators[token].associativity == "Left"
                    ) &&
                    operators[token] !== "("
                )
            ) {

                numeros.push(stack.pop());

            }
            stack.push(token);

        } else if (token == "(") {

            stack.push(token);

        } else if (token == ")") {

            let i=stack.dataStore.length-1;

            while (stack.dataStore[i] !== "(") {

                numeros.push(stack.pop());
            
                i--;

            }

            if (stack.dataStore[stack.dataStore.length-1] == "(") {

                stack.pop();

            }

        }

    })

    postfix += numeros.dataStore.reverse().join(" ");
    postfix += " "
    postfix += stack.dataStore.reverse().join(" ");

    return postfix;

}

export default ShuntingYard;