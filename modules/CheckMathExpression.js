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
    "^)"
]

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

                if (
                    (str[index - 1] == invalidOperatorPairs[j][0] &&
                    current == invalidOperatorPairs[j][1])&&
                    (
                        (!isNaN(str[index - 1])&&!isNaN(str[index]))||
                        (!isNaN(str[index])&&!isNaN(str[index+1]))
                    )
                ) {
                    throw new Error("Operador inválido sendo utilizado");
                }

            })

        }

    });

    let sections = str.split(/[\+\-\*\/\^\)\(]/g);

    sections.forEach(elem=>{

        if(
            (elem.length > 0) && 
            !(Number(elem)!== NaN) &&
            isFinite(elem)
        ){
            throw new Error('Erro não detectado');
        }

    });
}

export default CheckMathExpression;