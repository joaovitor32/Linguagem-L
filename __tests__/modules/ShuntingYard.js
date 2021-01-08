import ShuntingYard from '../../modules/ShuntingYard';

describe('Testing Shunting Yard',()=>{

    test('Check Postfix notation gived by Shunting Yard modules',()=>{

        expect(ShuntingYard("1 + 2")).toBe("1 2 +")

    })

    test('Check Postfix notation gived by Shunting Yard modules - Parentheses',()=>{

        expect(ShuntingYard("( 1 + 2 ) ^ 3")).toBe("1 2 + 3 ^")

    })

    test('Type parameter error',()=>{

        expect(()=>ShuntingYard(( 1 + 2 ) ^ 3)).toThrow(Error);

    })

})