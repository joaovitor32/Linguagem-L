import { TestScheduler } from 'jest';
import { Solve_Expression, Add_Function } from '../modules/index.js';

describe('Testing entire workflow', () => {

    test('End to end - Solve Expression',()=>{

        expect(Solve_Expression("1+1*(1+2)")).toBe(4)

    })

    test('Adding function Error - Wrong first token',()=>{

        expect(()=>Add_Function('not-valid-token')).toThrow(Error);

    })

    test('Adding function Error - Malformed sentence',()=>{

        expect(()=>Add_Function('function SomaQuadrados(a,b){ a*a+b*b ')).toThrow(Error);

    })

    test('Adding function',()=>{

        expect(()=>Add_Function('function SomaQuadrados(a,b){ a*a+b*b }')).not.toThrow(Error);

    })

    test('Adding function with only one parameter',()=>{

        expect(()=>Add_Function('function mutiplyByTen(a){ 10*a }')).not.toThrow(Error);

    })

})