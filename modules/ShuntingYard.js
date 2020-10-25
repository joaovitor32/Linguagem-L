let ops = "-+/*^%><!s()";

let precedence = {
    "^": 4,
    "*": 3,
    "/": 3,
    "+": 2,
    "-": 2,
    "%": 3,
    ">": 1,
    "<": 1,
    "!": 6,
    "s": 3,
};

let associativity = {
    "^": "Right",
    "*": "Left",
    "/": "Left",
    "+": "Left",
    "-": "Left",
    ">": "Left",
    "%": "Left",
    "<": "Left",
    "!": "Left",
    "s": "Left",
};

class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
        this.peek = () => {
            return this.dataStore[this.top - 1];
        }
        this.push = (element) => {
            if (!!element) {
                this.dataStore[this.top++] = element;
            }
        }
        this.pop = () => {
            return this.dataStore[--this.top];
        }

        this.length = () => {
            return this.top;
        }
    }
}

const ShuntingYard = (infix) => {

    infix = infix.replace(/\s+/g, ''); // remove spaces, so infix[i]!=" "

    let stack = new Stack();

    let token;
    let postfix = "";
    let elem1, elem2;

    console.log(Object.values(infix));

    Object.values(infix).forEach((element, index) => {

        token = infix[index];

        if (token >= "0" && token <= "9") { // if token is operand (here limited to 0 <= x <= 9)

            postfix += token + " ";

        } else if (ops.indexOf(token) != -1) { // if token is an operator

            elem1 = token;
            elem2 = stack.peek();

      /* 
      
      I - while operator token, o2, on top of the stack and o1 is left-associative 
      and its precedence is less than or equal to that of o2
 
      II - the algorithm on wikipedia says: or o1 precedence < o2 precedence, but I think it should be
      or o1 is right-associative and its precedence is less than that of o2
 
      */
            while (ops.indexOf(elem2) != -1 && (associativity[elem1] == "Left" &&
                    (precedence[elem1] <= precedence[elem2])) || (associativity[elem1] == "Right" &&
                    (precedence[elem1] < precedence[elem2]))) {
                postfix += elem2 + " "; // add o2 to output queue
                stack.pop(); // pop o2 of the stack
                elem2 = stack.peek(); // next round
            }
            stack.push(elem1); // push o1 onto the stack
        }else if (token == "(") { // if token is left parenthesis
            stack.push(token);
        } else if (token == ")") {
            while (stack.peek() != "(") { // until token at top is (
                postfix += stack.pop() + " ";
            }
            stack.pop(); // pop (, but not onto the output queue
        }
    });

    postfix += stack.dataStore.reverse().join(" ");

    return postfix;
}

export default ShuntingYard;