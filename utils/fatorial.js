const fatorial = (arg1) => {

    if (arg1 < 1) {
        return 1;
    }

    let resp = arg1;
    
    while (arg1 > 2) {
        resp *= --arg1;
    }
    return resp;
}

export default fatorial;

