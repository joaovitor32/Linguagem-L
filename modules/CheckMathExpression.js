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
]

let exceptions = [
    "++",
    "--",
    "+-",
    "-+"
]

const getUnaryOperator = (previous, current) => {
    if (previous == current) {
        return "+";
    }

    if (current != previous) {
        return "-";
    }

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

        if (index === Object.values(str).length - 1 && open !== 0) {
            throw new Error("Parênteses inválidos")
        }

        if (index > 0) {

            invalidOperatorPairs.forEach((elem, j) => {

                //Check Invalid terms
                if (
                    (str[index - 1] == invalidOperatorPairs[j][0] &&
                        current == invalidOperatorPairs[j][1]) &&
                    (
                        (!isNaN(str[index - 1]) && !isNaN(str[index])) ||
                        (!isNaN(str[index]) && !isNaN(str[index + 1]))
                    )
                ) {
                    throw new Error("Operador inválido sendo utilizado");
                }

                //Check unary operations like +++ and ---
                if (exceptions[j] != undefined && index!=j) {

                    if (
                        (str[index - 1] == exceptions[j][0] &&
                            current == exceptions[j][1])) {

                        let arrayStr = str.split("");

                        arrayStr[index - 1] = getUnaryOperator(str[index - 1], current);

                        const previous = arrayStr.indexOf(arrayStr[index-1]);
                        const next = arrayStr.indexOf(current);

                        if (previous > -1 && next>-1 ) {
                            arrayStr.splice(previous,next);
                        }

                        str = arrayStr.join("");

                    }
                }
            })

        }

    });

    let sections = str.split(/[\+\-\*\/\^\)\(]/g);

    sections.forEach(elem => {

        if (
            (elem.length > 0) &&
            !(Number(elem) !== NaN) &&
            isFinite(elem)
        ) {
            throw new Error('Erro não detectado');
        }

    });

    return str;

}

export default CheckMathExpression;