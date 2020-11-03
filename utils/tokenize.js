const tokenize = (array) => {
    return array.match(/[0-9]+|[A-Za-z0-9]+|\S/g)
}

export default tokenize;