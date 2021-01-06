import divi from '../../utils/divi.js';
import multi from '../../utils/multi.js';
import soma from '../../utils/soma.js';
import sqrt from '../../utils/sqrt.js';
import exp from '../../utils/exp.js';
import subt from '../../utils/subt.js';
import maior from '../../utils/maior.js';
import menor from '../../utils/menor.js';
import resto from '../../utils/resto.js';
import fatorial from '../../utils/fatorial.js';
import TrocaSinal from '../../utils/trocaSinal.js';


describe('Testing functions from folder utils',()=>{

    test('Division',()=>{

      expect(divi(4,2)).toBe(2)

    })

    test('Potentiation',()=>{

        expect(exp(4,2)).toBe(16)
  
    })

    test('Fatorial number > 1',()=>{

        expect(fatorial(4)).toBe(24)
  
    })

    test('Fatorial number < 1',()=>{

        expect(fatorial(0)).toBe(1)
  
    })

    test('Major',()=>{

        expect(maior(5,3)).toBe(5)
  
    })

    test('Minor',()=>{

        expect(menor(5,3)).toBe(3)
  
    })

    test('Multiplication',()=>{

        expect(multi(2,3)).toBe(6)
  
    })

    test('Mod',()=>{

        expect(resto(3,2)).toBe(1)
  
    })

    test('Sum',()=>{

        expect(soma(3,2)).toBe(5)
  
    })

    test('Sqrt',()=>{

        expect(sqrt(4)).toBe(2)
  
    })

    test('Subtraction',()=>{

        expect(subt(12,3)).toBe(9)
  
    })
    
    test('Change signal',()=>{

        expect(TrocaSinal(12)).toBe(-12)
  
    })

})