let invalidOperatorPairs = [
    "**",
    "*/",
    "/*",
    "//",
    "()",
    "^^",
    "^/",
    "/^",
    "^*",
    "*^",
    "-)",
    "+)",
    "*)",
    "/*",
    "^)",
    "-*",
    "-/",
    "-^",
    "+*",
    "+/",
    "+^",
    "(*",
    "(/",
    "(^",
    "/)",
    "*)",
    "+)",
    "-)",
    "^)",
    "!!"
]

let exceptions = [
    "++",
    "--",
    "+-",
    "-+",
]

let binaryOperator=[
    '+',
    '-'
]

const getUnaryOperator = (previous, current) => {

    if (previous == current) {
        return "+";
    } else {
        return "-";
    }

}

//Check Invalid terms
const checkInvalidTerms = (str, index) => {
    invalidOperatorPairs.forEach((elem, j) => {
        if (
            (str[index - 1] == invalidOperatorPairs[j][0] &&
                str[index] == invalidOperatorPairs[j][1])) {
                    throw new Error("Operador inválido sendo utilizado")
        }
    })
}

const checkExceptions = (str, index) => {

    //Vai ter que ser em relação ao str
    //Usar While <- Ideia boa

    exceptions.forEach((elem, s) => {

        if (
            (str[index - 1] === exceptions[s][0]) &&
            (str[index] === exceptions[s][1]) &&
            (exceptions[s][0] != undefined && exceptions[s][1] != undefined)
        ) {

            while (binaryOperator.includes(str[index])) {

                let arrayStr = str.split("");

                arrayStr[index] = getUnaryOperator(arrayStr[index - 1], arrayStr[index]);

                arrayStr = arrayStr.filter((_, i) => i != (index - 1));

                str = arrayStr.join("");
            }

        }
    })

    return str;
}

const CheckMathExpression = (str) => {

    let open = 0;

    Object.values(str).forEach((element, index) => {

        let current = element;

        if (current == "(") {
            open++;
        } else if (current == ")") {
            open--;
        }

        if (index > 0) {
            checkInvalidTerms(str, index);
            str = checkExceptions(str, index);
        }

    });

    if (open !== 0) {
           
        throw new Error("Parênteses inválidos")
    
    }

    return str;

}

export default CheckMathExpression;