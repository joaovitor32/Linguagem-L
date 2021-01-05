import CheckMathExpression from '../modules/CheckMathExpression';

describe('Test - Checking math expression correctness',()=>{

    test('Checking parentesis wrong quantity',()=>{
      
        expect(()=>{
            CheckMathExpression('1+((((2*5)')
        }).toThrow(Error);

    })

    test('Checking if value is returned correctly',()=>{
      
        expect(CheckMathExpression('1+2+5')).toBe('1+2+5');

    })
    
})