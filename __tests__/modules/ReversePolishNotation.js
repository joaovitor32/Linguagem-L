import ReversePolishNotation from '../../modules/ReversePolishNotation';

describe('Testing Reverse Polish Notation', () => {

    test('Reverse polish notation usual case', () => {

        expect(ReversePolishNotation("5 !")).toBe('fatorial(5)');
        expect(ReversePolishNotation("1 2 9 * +")).toBe('soma(mult(9,2),1)');

    })

    test('Parameter type error', () => {

        expect(()=>ReversePolishNotation(null)).toThrow(Error);

    })

    test('Empty input', () => {

        expect(()=>ReversePolishNotation(' ')).toThrow(Error);

    })


})